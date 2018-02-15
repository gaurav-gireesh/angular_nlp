import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CheckLoggedInService } from '../services/check-logged-in.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loggedInService: CheckLoggedInService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const status = this.loggedInService.getLoggedIn();
    if (!status) {
            this.router.navigate(['/login']);
    }
    return status;
  }
}
