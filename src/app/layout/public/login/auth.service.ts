import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RequestOptions} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {User} from './User';

@Injectable()
export class AuthService {

  token: string;
  message: String;
  private base_url = 'http://localhost:3000/api/user';
  // private userSource = new BehaviorSubject<User>(null);
  // user$ = this.userSource.asObservable();
  private user$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  setUser(user: User) {
    this.user$.next(user);
  }

  authenticate(credentials) {
    return this.http.post('http://localhost:3000/api/authenticate', credentials);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  // verify(): Observable<Object> {
  //
  //   const currUser = JSON.parse(localStorage.getItem('currentUser'));
  //   const token = (currUser && 'token' in currUser) ? currUser.token : this.token;
  //   const headers = new Headers({'x-access-token': token});
  //   const options = new RequestOptions({headers: headers});
  //   return this.http.get(`${this.base_url}/check-state`, options)
  //     .map(res => res);
  //
  // }


  setToken(res) {
    // const body = JSON.parse(res['_body']);
    if (res['success'] === true) {
      this.token = res['token'];
      localStorage.setItem(
        'currentUser', JSON.stringify({
          username: res['user']['username'],
          name: res['user']['name'],
          id: res['user']['_id'],
          role: res['user']['role'],
          token: this.token
        }));
    }
    return res;
  }


}
