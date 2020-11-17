import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public loginUrl = "api/user/login";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  login(login_info: any) {
    return this.http.post<any>(this.loginUrl, login_info, this.httpOptions)
  }

}
