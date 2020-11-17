import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private http: HttpClient) {
    this.changeLoginStatus();
  }
  ngOnInit() {}

  public isLoggedIn: boolean = false;
  public guardUrl = "api/user/guard";
  public getUsernameUrl = "api/user/credential";

  changeLoginStatus() {
    this.login().subscribe(data => {
      if (data['result'] == 'verify OK') {
        this.isLoggedIn = true;
      }
      if (data['result'] == 'verify not OK') {
        this.isLoggedIn = false;
      }
    })
  }

  login() {
    return this.http.get<any>(this.guardUrl);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getUsername(token: any): Observable<any> {
    return this.http.get<any>(this.getUsernameUrl, token);
  }

}
