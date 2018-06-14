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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BoardsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BoardsComponent },
      // { path: '**', component: NotFoundComponent } // Needs to be last
    ])
  ],
  providers: [AngularFireAuth, BoardsService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
