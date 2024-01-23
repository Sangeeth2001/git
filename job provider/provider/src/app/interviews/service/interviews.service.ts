import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interview } from '../model/interview';
import { environment } from 'src/app/environment/environments';
import { applicants } from 'src/app/application/model/applicant';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  constructor(private http: HttpClient) { }

  getId(){
    return localStorage.getItem('accessid');
  }

  postinterview(data:any){
    const jobProviderId=this.getId();
    return this.http.post<interview[]>(environment.baseurl+'Interview/company/company-user/'+jobProviderId+'/Interview',data)
  }

  removeInterview(id:any){
    return this.http.delete<interview[]>(environment.baseurl+'/api/Interview/company/company-user/'+id+'/cancel')
  }
}
