import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly URL = 'http://localhost:3000'
  constructor(private http: HttpClient) {

  }
  getProducts(query: any) {

    return this.http.get(`${this.URL}/products`)

  }
}
