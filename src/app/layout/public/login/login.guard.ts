import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('currentUser')) {
      const curr = JSON.parse(localStorage.getItem('currentUser'));
      if (curr.role === 'admin') {
        this.router.navigate(['/admin'])
          .catch(
            err => console.log(err)
          );
      } else if (curr.role === 'user') {
        this.router.navigate(['/home'])
          .catch(
            err => console.log(err)
          );
      }
    }


    return true;
  }
}
