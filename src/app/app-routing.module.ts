import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthGuard} from './layout/public/login/auth.guard';
import {RoleGuard} from './layout/public/login/role.guard';
import {PublicComponent} from './layout/public/public.component';
import {HomeComponent} from './layout/secure/home/home.component';
import {SecureComponent} from './layout/secure/secure.component';
import {ADMIN_ROUTES} from './routes/admin.routes';
import {PUBLIC_ROUTES} from './routes/public.routes';
import {SECURE_ROUTES} from './routes/secure.routes';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: SecureComponent},
  {
    path: '', component: PublicComponent,
    data: {title: 'Public Views'},
    children: PUBLIC_ROUTES
  },
  {
    path: '',
    component: SecureComponent,
    data: {
      title: 'Secure Views',
      roles: 'user'
    },
    // canActivate: [AuthGuard, RoleGuard],
    // canActivateChild: [AuthGuard],
    children: SECURE_ROUTES
  },
  {
    path: '', component: AdminComponent,
    data: {
      title: 'Admin Views',
      roles: 'admin'
    },
    canActivate: [AuthGuard, RoleGuard],
    canActivateChild: [AuthGuard],
    children: ADMIN_ROUTES
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
