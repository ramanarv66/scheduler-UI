import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { RequestOptions } from 'src/app/model/allmodels';

declare type Body = object | string;

@Injectable()
export class HttpService {
  public defaultHeaders: HttpHeaders = new HttpHeaders();
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.defaultHeaders.append('Content-Type', 'application/json; charset=utf-8');
  }

  getRequest(url: string, headers?: object, params?: object): Observable<any> {
    return this.doRequest('GET', url, headers, params);
  }

  postRequest(url: string, headers?: object, params?: object): Observable<any> {
    return this.doRequest('POST', url, headers, params);
  }

  putRequest(url: string, headers?: object, params?: object): Observable<any> {
    return this.doRequest('PUT', url, headers, params);
  }

  deleteRequest(url: string, headers?: object, params?: object): Observable<any> {
    return this.doRequest('DELETE', url, headers ? headers : {}, params ? params : {});
  }

  doRequest(method: string, url: string, headers: object, params: Body) {
    const processedUrl = this.baseUrl + url;
    const options: RequestOptions = {
      headers: this.createHeaders(headers),
      body: params,
      reportProgress: false,
      responseType: 'json',
      observe: 'response',
    };

    return this.http.request(method, processedUrl, options).pipe(catchError(this.handleError));
  }

  private createHeaders(customHeaders: object): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = this.defaultHeaders;
    for (const key of Object.keys(customHeaders)) {
      httpHeaders = httpHeaders.append(key, customHeaders[key]);
    }
    return httpHeaders;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError(error.error.message);
    }
    return throwError(error.error.errors[0].description);
  }
}
