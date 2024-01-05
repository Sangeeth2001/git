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
    return sessionStorage.getItem('id') // Return an empty string if the token is null or undefined
  }

  
  verifycmpny(data:any){
    const jobProviderId=this.getId();
    return this.http.post<addcmpnyDetails[]>(environment.baseurl+'Company/job-provider/'+jobProviderId+'/company',data)
  }

  getLocation(){
    return this.http.get<addLocation[]>(environment.baseurl+'v1/GetLocations')
  }

  getIndustry(){
    return this.http.get<addIndustry[]>(environment.baseurl+'v1/GetIndustries')
  }

}
