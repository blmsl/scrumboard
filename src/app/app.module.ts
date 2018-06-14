import { FirebaseConfig } from './../environments/FirebaseConfig';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// Components and services
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { BoardsComponent } from './ui/boards/boards.component';
import { BoardsService } from './services/boards.service';
import { AuthServiceService } from './services/auth-service.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { ProfileGuardService } from './services/profile-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BoardsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BoardsComponent, canActivate: [ProfileGuardService] },
      { path: 'scrum', component: BoardsComponent },
      { path: 'login', component: LoginComponent },
      // { path: '**', component: NotFoundComponent } // must be last
    ])
  ],
  providers: [AngularFireAuth, BoardsService, AuthServiceService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
