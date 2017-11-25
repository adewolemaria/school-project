import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn } from '../router.animations';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: any;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  login() {
    const authenticated = this.authService.login(this.email, this.password);
    console.log(authenticated);
    this.email = this.password = '';
    if (authenticated) {
      this.router.navigateByUrl('/students');
    }
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
