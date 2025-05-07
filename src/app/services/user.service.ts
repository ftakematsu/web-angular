import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../home/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * @param http Para realizar conexão externas via API
   */
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
