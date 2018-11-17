import { AuthServiceService } from './../../services/auth-service.service';
import { NavbarService } from './../../services/navbar.service';
import { TeamsInterface } from './../../extra/TeamsInterface';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { TeamsService } from '../../services/teams.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Subscription, combineLatest } from '../../../../node_modules/rxjs';
import { FormControl, Validators, FormGroup } from '../../../../node_modules/@angular/forms';
import swal from 'sweetalert2';
import { AngularFireFunctions } from 'angularfire2/functions';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { getImgUrlFromRef } from '../../extra/shared';
@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.css']
})
export class TeamSettingsComponent implements OnInit, OnDestroy {

  team$: Observable<TeamsInterface>;
  teamId: string;
  teamRef: DocumentReference;
  imgURL: Observable<string>;

  isAdmin = false;
  loading = false;

  sub: Subscription;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  changeNameFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  form = new FormGroup({
    email: this.emailFormControl
  });

  nameForm = new FormGroup({
    name: this.changeNameFormControl
  });

  // Img upload
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  isHovering: boolean;
  imgUploadSpinnerMode = 'determinate';

  constructor(public route: ActivatedRoute, public boardsService: TeamsService,
    public afs: AngularFirestore, public router: Router,
    public navbarService: NavbarService, private storage: AngularFireStorage,
    public afFunctions: AngularFireFunctions, public auth: AuthServiceService) {
    this.teamId = this.route.snapshot.paramMap.get('teamId');
    this.team$ = this.afs.doc<TeamsInterface>('teams/' + this.teamId).valueChanges().shareReplay(1);
    this.navbarService.backBtn = true;
    this.sub = this.team$.subscribe(team => this.navbarService.title = team.name);
    this.teamRef = this.afs.firestore.doc('teams/' + this.teamId);
    this.imgURL = this.team$.switchMap(team => {
      getImgUrlFromRef(team, this.storage);
      this.percentage = null; // Removing progress spinner when new img is initialized
      return team.imgURL;
    });
  }

  ngOnInit() {
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

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onNameFormSubmit() {
    const input = this.nameForm.value.name;
    console.log('Changing name to:', input);
    // Change name of team
    this.teamRef.update({
      name: input
    });
    this.nameForm.reset();
  }

  startUpload(event: FileList) {
    this.imgUploadSpinnerMode = 'determinate';
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :(');
      return;
    }

    // The storage path
    const path = this.teamId + '.' + file.name.split('.').pop();

    // The main task
    this.task = this.storage.upload(path, file);
    this.task.snapshotChanges().pipe(
      finalize(() => {
        console.log('Upload task is done');
        this.imgUploadSpinnerMode = 'indeterminate';
      })
    ).subscribe();

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

  }
  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
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
      getUserByMail({ mail: input, teamId: that.teamId }).toPromise()
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
                  console.log(err.code);
                  console.log(err.message);
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

          if (error.code === 'not-found') {
            swal({
              text: 'This email is not associated with any account. Do you want to send them an invite anyway?',
              confirmButtonText: 'Send invite',
              showCancelButton: true,
              reverseButtons: true,
            }).then(() => {
              function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
              }
              // add a code to the database
              const code = s4() + s4() + s4() + s4();
              console.log('Secret code is:', code);

              this.team$.take(1).subscribe(async team => {
                await this.afs.collection('teams/' + this.teamId + '/codes').add({
                  mail: input,
                  teamName: team.name,
                  code: code
                });
                console.log(code, 'is added as code to database');
              });

            });

          } else {
            swal({
              title: 'Error',
              text: error.message,
              type: 'error',
              // tslint:disable-next-line:max-line-length
              // footer: `<a href="mailto:${input}?subject="Invitation%20to%20join%20Scrum?body=${invitationMail_body}">Invite user to join Scrum</a>`
            });
          }
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
