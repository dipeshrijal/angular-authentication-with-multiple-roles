import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loggedIn: boolean;
  message: String;
  user: User;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.message = this.authService.message;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.authenticate(this.loginForm.value).subscribe(
      (res) => {
        this.loggedIn = res['success'];
        if (res['success'] === true) {
          this.authService.setUser(res['user']);
          this.authService.setToken(res);

          if (res['user']['role'] === 'admin') {
            this.router.navigate(['/admin'])
              .catch(
                err => console.log(err)
              );
          } else if (res['user']['role'] === 'user') {
            this.router.navigate(['/home'])
              .catch(
                err => console.log(err)
              );
          }

        } else {
          this.message = res['message'];
        }
      }, err => {
        this.message = err['message'];
      }
    );
  }

  isValid(control: string): string {
    return this.loginForm.controls[control].invalid && this.loginForm.controls[control].touched ? 'is-invalid' : '';
  }

}
