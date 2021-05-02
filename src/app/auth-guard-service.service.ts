import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem("email")) {
      let activatedRoute = route;
      let userRole = localStorage.getItem("permission");
      let roles = activatedRoute && activatedRoute.data["roles"] ;
      console.log('test routes', route, roles)
      if(roles == null || roles.indexOf(userRole) >= 0)
      {
        console.log('test inside')
        return true;
      }  
      else
      {
        console.log('test outside')
        this.router.navigate(['accessDenied']);
        return false;
      }
    }
    this.router.navigate(['']);
    return false;
  }
}
