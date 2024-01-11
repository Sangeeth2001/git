import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }

  getProviderId(){
    return sessionStorage.getItem('accessid');
  }
  getApplication(){
    const jobProvderId=this.getProviderId();
    return this.http.get<[]>(environment.baseurl+'v1/job-provider/'+jobProvderId+'/getJobApplicants');
  }
}  