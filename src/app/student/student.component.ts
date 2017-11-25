import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Student } from '../models/user.model';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class StudentComponent implements OnInit {
  students: any;
  user: any;

  constructor(private userService: UserService, private authService: AuthService) {
    this.user = this.authService.user;
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.students = this.userService.getStudents();
  }

  logout() {
    this.authService.logout();
  }

}
