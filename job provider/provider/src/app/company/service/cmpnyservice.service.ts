import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environments';
import { addIndustry, addLocation, addcmpnyDetails } from '../model/addcmpny';

@Injectable({
  providedIn: 'root'
})
export class CmpnyserviceService {

  constructor(private http:HttpClient) { }
  getId(): any {
    return localStorage.getItem('accessid') // Return an empty string if the token is null or undefined
  }
  getCompanyId():any{
    return localStorage.getItem('c_id')
  }
  
  verifycmpny(data:any){
    const jobProviderId=this.getId();
    return this.http.post<addcmpnyDetails[]>(environment.baseurl+'Company/job-provider/'+jobProviderId+'/company',data);
  }

  getLocation(){
    return this.http.get<addLocation[]>(environment.baseurl+'v1/GetLocations');
  }

  getIndustry(){
    return this.http.get<addIndustry[]>(environment.baseurl+'v1/GetIndustries');
  }

  getCompanyList(){
    const companyId=this.getCompanyId();
    return this.http.get<addcmpnyDetails[]>(environment.baseurl+'Company/job-provider/company/'+companyId);
  }
  updatingForm(data:any){
    const companyId=this.getCompanyId();
    return this.http.put<addcmpnyDetails[]>(environment.baseurl+'Company/job-provider/company/'+companyId,data )
  }
}
