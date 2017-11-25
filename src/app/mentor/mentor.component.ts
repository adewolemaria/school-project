import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Mentor } from '../models/user.model';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.sass'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MentorComponent implements OnInit {
  mentors: any;
  user: any;
  state: string = '';

  constructor(
    private userService: UserService, 
    private authService: AuthService,
    private router: Router) { 
    this.user = this.authService.user;
  }

  ngOnInit() {
    this.getMentors();
  }

  getMentors() {
    this.mentors = this.userService.getMentors();
  }

  logout() {
    this.authService.logout();
  }

}
