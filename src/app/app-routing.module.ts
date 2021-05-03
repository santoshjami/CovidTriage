import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { 
  AuthGuardServiceService as AuthGuard 
} from './auth-guard-service.service';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

const routes: Routes = [
  { path : 'signUp', component : SignUpComponent },
  { path : '', component : HomeComponent },
  { path : 'register', component : SideNavComponent, canActivate: [AuthGuard], data: { roles: ["VOLUNTEER", "HEALTHWORKER", "HEALTHCOORDINATOR"] } },
  { path : 'accessDenied', component: AccessDeniedComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



