import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LibraryService {
  public url: string = '';

  constructor(private _http: HttpClient) {
    this.url = 'https://images-api.nasa.gov/search?q=';
  }

  getSearch(search: string): Observable<any> {
    return this._http.get(this.url + encodeURI(search));
  }

  getDeepSearch(search: string): Observable<any> {
    return this._http.get(search);
  }
}
