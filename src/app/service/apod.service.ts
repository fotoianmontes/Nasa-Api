import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture';
import { env } from '../service/env';

@Injectable()
export class ApodService {
  public url: string = '';

  constructor(private _http: HttpClient) {
    this.url = env.apodUrl + env.apiKey;
  }

  getApod(): Observable<any> {
    return this._http.get(this.url);
  }
}
