import { Injectable } from '@angular/core';
import{Register} from './register';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public registerUrl = "api/user/register";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  register(register_info: Register) {
    return this.http.post<Register>(this.registerUrl, register_info, this.httpOptions)
  }

}
