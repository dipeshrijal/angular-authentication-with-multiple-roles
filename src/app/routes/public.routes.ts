import {Routes} from '@angular/router';
import {LoginComponent} from '../layout/public/login/login.component';
import {LoginGuard} from '../layout/public/login/login.guard';


export const PUBLIC_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
];
