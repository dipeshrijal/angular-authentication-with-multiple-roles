import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './login/auth.guard';
import {AuthInterceptor} from './login/auth.interceptor';
import {AuthService} from './login/auth.service';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './login/login.guard';
import {RoleGuard} from './login/role.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RoleGuard,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  declarations: [LoginComponent]
})
export class PublicModule {
}
