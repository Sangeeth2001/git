import { Injectable } from '@angular/core';
import { setPassword, signupDetails,setlogin } from '../model/signup';
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
  getid(): any {
    return localStorage.getItem('accessid') // Return an empty string if the token is null or undefined
  }

  signUpData(data:any){
    return this.http.post<signupDetails>(environment.baseurl+'v1/job-provider/signup',data)
  }

  verifyEmail(signupId:string){
    return this.http.get<signupDetails>(environment.baseurl+'v1/job-provider/signup/'+signupId+'/verify-email')
  }
  setPassword(password:string,signupId:string){
    const headers = {'Content-Type': 'application/json'};
    const jsonString=JSON.stringify(password);
    return this.http.post(environment.baseurl+'v1/job-provider/signup/'+signupId+'/set-password/',jsonString, {headers});
  }
  verifyLogin(data:any){
    return this.http.post<setlogin[]>(environment.baseurl+'v1/job-provider/login',data)
  }
  getRole(){
    return localStorage.getItem('role')
  }
 
}