import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = null;
    if (localStorage.getItem('currentUser')) {
      const token = JSON.parse(localStorage.getItem('currentUser'))['token'];
      authReq = req.clone({setHeaders: {'x-access-token': token}});
    } else {
      authReq = req.clone({setHeaders: {}});
    }

    return next.handle(authReq);
  }
}
