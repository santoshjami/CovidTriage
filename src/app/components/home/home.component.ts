import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reactiveForm!: FormGroup;
  user!: SocialUser;
  isSignedin!: boolean;

  constructor(private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
      if( this.isSignedin)
      {
        this.userService.getUserDetails(user.email)
        .subscribe((data: any) => {
          localStorage.setItem("email", data.email);
          localStorage.setItem("permission", data.permission);
         this.router.navigate(['/signUp']);
        }); 
      }
    });
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): void {
    this.socialAuthService.signOut();
  }

  signUp(){
    this.router.navigate(['/signUp']);
  }

}
