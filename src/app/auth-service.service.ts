import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable()
export class AuthService {
  constructor(
    private socialAuthService: SocialAuthService,
    private route: ActivatedRoute,
    private router: Router) {}
  // ...
  public isAuthenticated(): boolean {
    const user = localStorage.getItem("email");
    this.socialAuthService.authState.subscribe((user) => {
      return (user != null);
    });
    // Check whether the token is expired and return
    // true or false
    if(user != null)
      return true;
    else
      return false;

  }
}