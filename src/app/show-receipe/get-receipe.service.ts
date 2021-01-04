import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetReceipeService {

  constructor(private http: HttpClient) { }

  getReceipeUrl= 'http://localhost:3000/api/receipes/get-receipe';

  getReceipe(receipeId:string){
    return this.http.get(this.getReceipeUrl + '/' + receipeId);
  }

}
