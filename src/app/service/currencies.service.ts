import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  baseUrl: any;
  apiKeys: any;
  collection: any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.apiKeys = environment.apiKeys;
    this.collection = 'v2/competitions/';
   }

   private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getCompetitions(): Observable<any> {
    const headers = new HttpHeaders().set('X-Auth-Token', this.apiKeys);

    return this.http.get(this.baseUrl + this.collection , {headers: headers}).pipe(
      catchError( err => {
        return throwError(err);
      })
    );
  }

  getOneCompetition(id): Observable<any> {
    const headers = new HttpHeaders().set('X-Auth-Token', this.apiKeys);

    return this.http.get(this.baseUrl + this.collection + '2000', {headers: headers}).pipe(
      catchError( err => {
        return throwError(err);
      })
    );
  }
}
