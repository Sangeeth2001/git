import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environments';
import { applicants, applicationid } from '../model/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }

  getProviderId(){
    return localStorage.getItem('accessid');
  }
  getApplication(){
    const jobProvderId=this.getProviderId();
    return this.http.get<applicants[]>(environment.baseurl+'v1/job-provider/'+jobProvderId+'/getJobApplicants');
  }
  
  postDate(data:any){
    const jobProvderId=this.getProviderId();
    return this.http.post<applicationid[]>(environment.baseurl+'Interview/company/company-user/'+jobProvderId+'/Interview',data)
  }
  getCompanyId(){
    return localStorage.getItem('c_id')
  }
  getDatelist(){
    const companyId=this.getCompanyId();
    return this.http.get<applicationid[]>(environment.baseurl+'Interview/company/company-user/'+companyId+'/Interviewlist')
  }
}  