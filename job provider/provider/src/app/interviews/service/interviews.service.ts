import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interview } from '../model/interview';
import { environment } from 'src/app/environment/environments';

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
}
