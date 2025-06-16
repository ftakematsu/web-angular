import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(e: string, p: string): Observable<any> {
    const request = {
      login: e,
      password: p
    };
    return this.http.post<any>(`http://127.0.0.1:8000/api/auth`, request); 
  }

  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    localStorage.getItem('accessToken');
  }

}
