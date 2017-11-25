import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { MentorGuard } from './services/mentor-guard.service';
import { StudentGuard } from './services/student-guard.service';
import { UserService } from './services/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

var firebaseConfig = {
  apiKey: "AIzaSyBNA6DNdTd9XzN29_Ag1H1AwBwvSzRy4Nc",
  authDomain: "school-project-80431.firebaseapp.com",
  databaseURL: "https://school-project-80431.firebaseio.com",
  projectId: "school-project-80431",
  storageBucket: "school-project-80431.appspot.com",
  messagingSenderId: "654273524756"
};
  

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    MentorComponent,
    LoginComponent,
    EmailComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ UserService, AuthService, AuthGuard, MentorGuard, StudentGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
