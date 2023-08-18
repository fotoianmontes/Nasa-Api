import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../service/env';

@Injectable()
export class LibraryService {
  public url: string = '';

  constructor(private _http: HttpClient) {
    this.url = env.nasaLibUrl;
  }

  getSearch(search: string): Observable<any> {
    return this._http.get(this.url + encodeURI(search));
  }
}
