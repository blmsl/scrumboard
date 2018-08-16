import { AuthServiceService } from './../../services/auth-service.service';
import { NavbarService } from './../../services/navbar.service';
import { TeamsInterface } from './../../extra/TeamsInterface';
import { AngularFirestore } from 'angularfire2/firestore';
import { TeamsService } from '../../services/teams.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Subscription, combineLatest } from '../../../../node_modules/rxjs';
import { FormControl, Validators, FormGroup } from '../../../../node_modules/@angular/forms';
import swal from 'sweetalert2';
import { AngularFireFunctions } from 'angularfire2/functions';

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.css']
})
export class TeamSettingsComponent implements OnInit, OnDestroy {

  team$: Observable<TeamsInterface>;
  teamId: string;
  teamRef;

  isAdmin = false;
  loading = false;

  sub: Subscription;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  form = new FormGroup({
    email: this.emailFormControl
  });

  constructor(public route: ActivatedRoute, public boardsService: TeamsService,
    public afs: AngularFirestore, public router: Router,
    public navbarService: NavbarService,
    public afFunctions: AngularFireFunctions, public auth: AuthServiceService) {
  }

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('teamId');
    this.team$ = this.afs.doc<TeamsInterface>('teams/' + this.teamId).valueChanges();
    this.navbarService.backBtn = true;
    this.sub = this.team$.subscribe(team => this.navbarService.title = team.name);
    this.team$.subscribe(team => console.log(team));
    this.teamRef = this.afs.firestore.doc('teams/' + this.teamId);

    combineLatest(this.auth.user$, this.team$).subscribe(([user, team]) => {
      console.log('isAdmin:', this.isAdmin);
      console.log(team.members[user.uid].isAdmin);
      this.isAdmin = team.members[user.uid].isAdmin;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.navbarService.backBtn = false;
  }

  onFormSubmit() {
    this.addMember(this.form.value.email);
  }

  promoteAdmin(uid: string) {
    // Google analytics event
    (<any>window).ga('send', 'event', {
      eventCategory: 'Team management',
      eventAction: 'Promote admin',
    });

    this.loading = true;
    this.afs.firestore.runTransaction(transaction => transaction.get(this.teamRef).then(doc => {
      const members = doc.data().members;
      members[uid].isAdmin = true;
      return transaction.update(this.teamRef, { members });
    })).then(() => this.loading = false);
  }

  removeAdmin(uid: string) {
    // Google analytics event
    (<any>window).ga('send', 'event', {
      eventCategory: 'Team management',
      eventAction: 'Demote admin',
    });
    this.loading = true;
    this.afs.firestore.runTransaction(transaction => transaction.get(this.teamRef).then(doc => {
      const members = doc.data().members;
      delete members[uid].isAdmin;
      return transaction.update(this.teamRef, { members });
    })).then(() => this.loading = false);
  }

  deleteMember(uid: string) {
    // Google analytics event
    (<any>window).ga('send', 'event', {
      eventCategory: 'Team management',
      eventAction: 'Delete member',
    });
    this.loading = true;
    this.afs.firestore.runTransaction(transaction => transaction.get(this.teamRef).then(doc => {
      const members = doc.data().members;
      delete members[uid];
      return transaction.update(this.teamRef, { members });
    })).then(() => this.loading = false);
  }

  addMember(input: string) {
    if (this.form.valid) {
      const that = this;
      that.loading = true;
      console.log('finiding user', input);
      this.form.reset(); // clear the form
      const getUserByMail = this.afFunctions.httpsCallable('getUserByMail');
      return getUserByMail({ mail: input, teamId: that.teamId }).toPromise()
        .then(function (data) {
          console.log(data);
          const uid = data.userData.uid;
          const imageUrl = data.userData.photoURL;
          const displayName = data.userData.displayName;
          that.loading = false;
          swal.queue([{
            text: `Are you sure you want to add ${displayName} to ${that.navbarService.title}?`,
            imageUrl: imageUrl,
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Scrumboard user profile',
            confirmButtonText: 'Add',
            showCancelButton: true,
            reverseButtons: true,
            showLoaderOnConfirm: true,
            preConfirm: () => {
              // add to team
              that.loading = true;
              const ref = that.afs.firestore.doc('teams/' + that.teamId);
              that.afs.firestore.runTransaction(transaction => transaction.get(ref).then(doc => {
                const members = doc.data().members;
                members[uid] = {
                  isMember: 'mail',
                  imgUrl: imageUrl,
                  name: displayName
                };
                return transaction.update(ref, { members });
              }).then(() => {
                // Google analytics event
                (<any>window).ga('send', 'event', {
                  eventCategory: 'Team management',
                  eventLabel: 'Member added to team',
                  eventAction: 'addedMember',
                });
                swal({
                  title: `Success`,
                  type: 'success',
                  text: `You have successfully invited ${displayName} to your team!`,
                });
                that.loading = false;
                (<HTMLInputElement>document.getElementById('addUserInput')).value = '';
              })
                .catch(err => {
                  that.loading = false;
                  console.log(err);
                  swal({
                    title: 'Error',
                    text: err.message,
                    type: 'error'
                  });
                }));
            }
          }]);
        }).catch((error) => {
          console.log(error.code);
          swal({
            title: 'Error',
            text: error.message,
            type: 'error',
            // tslint:disable-next-line:max-line-length
            // footer: `<a href="mailto:${input}?subject="Invitation%20to%20join%20Scrum?body=${invitationMail_body}">Invite user to join Scrum</a>`
          });
          that.loading = false;
        });
    }
  }

  deleteTeam() {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete this team?!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete team',
      confirmButtonColor: 'red',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'Team management',
          eventAction: 'Delete team',
        });
        this.afs.doc('teams/' + this.teamId).delete().then(() => swal({
          title: 'Team is deleted',
          type: 'success',
          text: 'Your team is now successfully deleted.',
        }).then(() => this.router.navigate(['/'])));
      }
    });
  }

}
