import { Injectable } from '@angular/core';
import { STORAGE } from '../ultils/systemconst';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: any): void {
    window.sessionStorage.removeItem(STORAGE.TOKEN_KEY);
    window.sessionStorage.removeItem(STORAGE.EXPIRED_KEY);
    window.sessionStorage.setItem(STORAGE.TOKEN_KEY, token.token);
    window.sessionStorage.setItem(STORAGE.EXPIRED_KEY, token.expire);
  }

  public getToken(): string {
    return sessionStorage.getItem(STORAGE.TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(STORAGE.USER_KEY);
    window.sessionStorage.setItem(STORAGE.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(STORAGE.USER_KEY));
  }
}
