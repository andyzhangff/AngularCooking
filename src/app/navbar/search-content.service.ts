import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchContentService {

  constructor(private http: HttpClient) { }

  public search_content_Url = "api/search-content";

  search(params: HttpParams ) {
    return this.http.get<any>(this.search_content_Url,{ params: params});
  }
}
