import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class StudentGuard implements CanActivate {

  constructor(private af: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.af.authState
            .take(1)
            .map(authState => !!authState) 
            .do(authenticated => {
              if (!authenticated) {
                this.router.navigate(['/login']);
              } else {
                 this.router.navigate(['/mentors']);
                 window.alert('You are not allowed to view the students');
              }
            });
  }

  
}