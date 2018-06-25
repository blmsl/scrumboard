import { NavbarService } from './services/navbar.service';
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
import { ScrumComponent } from './ui/scrum/scrum.component';

// Angular Material components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BoardsComponent,
    ScrumComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    MatToolbarModule,
    OverlayModule,
    MatButtonModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BoardsComponent, canActivate: [ProfileGuardService] },
      { path: 'scrum/:id', component: ScrumComponent, canActivate: [ProfileGuardService] },
      { path: 'login', component: LoginComponent },
      // { path: '**', component: NotFoundComponent } // must be last
    ])
  ],
  providers: [AngularFireAuth, BoardsService, AuthServiceService, AngularFirestore, ProfileGuardService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
