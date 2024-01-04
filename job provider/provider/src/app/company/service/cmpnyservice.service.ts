import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environments';
import { addcmpnyDetails } from '../model/addcmpny';

@Injectable({
  providedIn: 'root'
})
export class CmpnyserviceService {

  constructor(private http:HttpClient) { }
  getid(): any {
    return sessionStorage.getItem('c_id') // Return an empty string if the token is null or undefined
  }

  
  verifycmpny(data:any){
    return this.http.post<addcmpnyDetails[]>(environment.baseurl+'Company/job-provider/5726fdd7-4657-490d-5c11-08dc0cdf5ce7/company',data)
  }

}
