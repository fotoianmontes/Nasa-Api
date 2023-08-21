import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApodService {
  public url: string = '';

  constructor(private _http: HttpClient) {
    this.url =
      'https://api.nasa.gov/planetary/apod?api_key=' + environment.apiKey;
  }

  getApod(): Observable<any> {
    return this._http.get(this.url);
  }
}
