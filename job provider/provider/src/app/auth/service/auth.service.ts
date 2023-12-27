import { Injectable } from '@angular/core';
import { signupDetails } from '../model/signup';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient) { }
  getToken(): any {
    return localStorage.getItem('accessToken') // Return an empty string if the token is null or undefined
  }

  signUpData(data:any){
    return this.http.post<signupDetails>(environment.baseurl+'v1/job-provider/signup',data)
  }
}
