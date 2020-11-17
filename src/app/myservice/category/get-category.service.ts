import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {

  public getCategoryUrl = "api/genre/getallgenre";

  constructor(private http: HttpClient) { }

  get_all_genre(){
    return this.http.get<any>(this.getCategoryUrl + '/0');
  }

  get_current_genre(targetPageNumber:number){
    return this.http.get<any>(this.getCategoryUrl + '/' + targetPageNumber);
  }


}
