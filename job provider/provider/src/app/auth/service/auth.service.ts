import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getToken(): any {
    return localStorage.getItem('accessToken') // Return an empty string if the token is null or undefined
  }
}
