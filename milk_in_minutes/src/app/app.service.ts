import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly URL = 'http://localhost:3000'
  constructor(private http: HttpClient) {
  }
  getProducts(query: any): Observable<any[]> {

    return this.http.get<any[]>(`${this.URL}/products`)

  }

  async login(email: string, password: string): Promise<boolean> {

    try {


      const user = await this.http.get<{ password: string }>(`${this.URL}/users/${email}`).toPromise()
      if (user && user?.['password'] === password) {

        return true

      } else return false
    }
    catch (error) {
      return false

    }

  }
}
