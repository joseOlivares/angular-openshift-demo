import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string = '';
  private authenticated: boolean = false;

  setUsername(username: string | null | undefined) {
    this.username = username || '';
    this.authenticated = true;
  }

  getUsername(): string {
    return this.username || 'Usuario';
  }

  isAuthenticated(): boolean {
    return this.authenticated && this.username.length > 0;
  }
}