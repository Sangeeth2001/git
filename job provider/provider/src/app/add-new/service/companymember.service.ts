import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addMember } from '../model/member';
import { environment } from 'src/app/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class CompanymemberService {

  constructor(private http:HttpClient) { }

  getCompanyId(): any {
    return sessionStorage.getItem('c_id') // Return an empty string if the token is null or undefined
  }

  companyMember(data:any){
    const companyId=this.getCompanyId()
    return this.http.post<addMember[]>(environment.baseurl+'Company/job-provider/company/'+companyId+'/addcompanymember',data)
  }


}
