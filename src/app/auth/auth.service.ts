import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  authenticate(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout() {
      localStorage.removeItem('isAuthenticated');
      alert("You are about to log out! Are you sure?")
  }

}


