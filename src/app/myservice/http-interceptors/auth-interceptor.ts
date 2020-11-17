import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

        const auth_token = localStorage.getItem("Authorization");

        if (auth_token) {
            const authReq = req.clone({
                headers: req.headers.set("Authorization", auth_token),
                // withCredentials: true
            });

            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }

  }
}
