import { ChangeDetectorRef,Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  user!: SocialUser;
  isSignedin!: boolean;

  checked: boolean = false;

  constructor(private socialAuthService: SocialAuthService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    //this.router.navigate(['/signUp']);
  };

}
