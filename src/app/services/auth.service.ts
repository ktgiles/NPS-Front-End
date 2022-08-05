import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  sub: Subscription = new Subscription;
 
  constructor(private httpClient: HttpClient) { }

  addUser(user : User): Observable<User> {
    return this.httpClient.post<User>("http://localhost:9001/user/new", user);

  }

  verifyUser(user : User): Observable<User> {
    return this.httpClient.get<User>("http://localhost:9001/user/" + user.username);
  }


  persistLogin(username : string){
    sessionStorage.setItem('login', username);
  }

  checkLogin(){
    return sessionStorage.getItem('login');
  }


}
