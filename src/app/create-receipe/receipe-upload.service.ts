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
    // return this.http.post(this.storeReceipeUrl, {"name":"andy, it is coming from angualr"}, {
    //   reportProgress: true,
    //   observe: 'events'
    // }).pipe(
    //   catchError(this.errorMgmt)
    // )
    // console.log('fileSubmitted: ',paramForm);
    return this.http.post(this.storeReceipeUrl, paramForm);

      // return this.http.post(this.storeReceipeUrl, paramForm);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
