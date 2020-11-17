import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {

  constructor(private http: HttpClient) { }

  public getRoleUrl = "api/user/role";

  public getReceipesUrl = "api/user/receipes";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  findRole(username: any) {
    return this.http.get<any>(this.getRoleUrl , username);
  }

  getReceipes(role: any){
    return this.http.get<any>(this.getReceipesUrl , role);
  }

}
