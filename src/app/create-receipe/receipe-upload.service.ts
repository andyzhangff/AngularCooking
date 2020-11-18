import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient , HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ReceipeUploadService {

  storeReceipeUrl= 'http://localhost:3000/api/receipes/store-receipe'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  addFiles(paramForm: any) {
    return this.http.post(this.storeReceipeUrl, paramForm);
  }

}
