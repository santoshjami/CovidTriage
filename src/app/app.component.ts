import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuthenticated! : boolean;
  constructor(public auth: AuthService, public router: Router) {}
  
  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated()
  };

}
