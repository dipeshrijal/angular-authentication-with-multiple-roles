import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../public/login/auth.service';
import {User} from '../public/login/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login').catch(
      (err) => console.log(err)
    );
  }

}
