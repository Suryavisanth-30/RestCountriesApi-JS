import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestapiService {

  constructor(private http: HttpClient) {}

  getByName(name: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }

  getByRegion(region: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }

  getByCapital(capital: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/capital/${capital}`);
  }
}
