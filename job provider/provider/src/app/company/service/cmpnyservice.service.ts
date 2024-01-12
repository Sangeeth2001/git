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
<<<<<<< HEAD
    return localStorage.getItem('accessid') // Return an empty string if the token is null or undefined
  }
  getCompanyId():any{
    return localStorage.getItem('c_id')
=======
    return sessionStorage.getItem('accessid'); // Return an empty string if the token is null or undefined
  }
  getCompanyId():any{
    return sessionStorage.getItem('c_id');
>>>>>>> e47afb842764721660f567e5ad79c832ea488f9b
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
}
