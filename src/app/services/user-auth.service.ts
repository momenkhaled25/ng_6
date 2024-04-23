import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

private authSubject:BehaviorSubject<boolean>

  constructor() {
    this.authSubject = new BehaviorSubject<boolean>(false);
  }

  login() {
    localStorage.setItem('token', 'hgfdewrefdfdfdfd');
    this.authSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.authSubject.next(false);
  }

  getUserLogged():Boolean{
    return localStorage.getItem('token') ? true : false;
  }
  
  getToken():any{
    return localStorage.getItem('token')? localStorage.getItem('token'): null;
  }
  getAuthSubject() {
    return this.authSubject
  }
}
