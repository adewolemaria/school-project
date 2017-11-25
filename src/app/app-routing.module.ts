import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth-guard.service';
import { MentorGuard } from './services/mentor-guard.service';
import { StudentGuard } from './services/student-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'students', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'mentors', component: MentorComponent, canActivate: [AuthGuard] },
  { path: 'mentors/:id', component: MentorComponent, canActivate: [AuthGuard] },
  { path: 'mentor/student/:studentId', component: MentorComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
