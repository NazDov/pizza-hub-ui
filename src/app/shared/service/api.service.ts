import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ){}

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http
        .get(`${environment.api_url}${path}`, { params })
        .pipe(catchError(this.formatErrors))
    }

    post(path: string, body: Object = {}): Observable<any> {
        let header = new HttpHeaders({'content-type': 'application/json'});
        return this.http.post(
            `${environment.api_url}${path}`, JSON.stringify(body), {headers: header})
        .pipe(catchError(this.formatErrors));
    }

    private formatErrors(error: any) {
        return throwError(error.error);
    }
}