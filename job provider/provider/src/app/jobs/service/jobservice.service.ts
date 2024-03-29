import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getingcategory, getingcompany, getingindustry, getinglocation, joblist, } from '../model/joblist';
import { environment } from 'src/app/environment/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  constructor(private http:HttpClient) { }

  getLocation(){
     return this.http.get<getinglocation[]>(environment.baseurl+'v1/GetLocations');
  }

  getCompany(){
    return this.http.get<getingcompany[]>(environment.baseurl+'v1/admin/GetCompanies');
  }

  getcategory(){
    return this.http.get<getingcategory[]>(environment.baseurl+'v1/GetCategories');
  }

  getindustry(){
    return this.http.get<getingindustry[]>(environment.baseurl+'v1/GetIndustries');
  }

  getproviderIds():any{
    return localStorage.getItem('accessid');
  }

  getCompanyIds():any{
    return localStorage.getItem('c_id')
  }

  getJobList(){
    const jobProvderId=this.getproviderIds();
    const CompanyIds=this.getCompanyIds();
    return this.http.get<joblist[]>(environment.baseurl+'v1/company/'+CompanyIds+'/job-provider/'+jobProvderId+'/job')
  }


  postIds(data:any){
    const jobProvderId=this.getproviderIds();
    const CompanyId=this.getCompanyIds();
    return this.http.post<joblist[]>(environment.baseurl+'v1/company/'+CompanyId+'/job-provider/'+jobProvderId+'/job',data)
  }

  removejob(id:string){
    const jobProvderId=this.getproviderIds();
    const CompanyId=this.getCompanyIds();
    return this.http.delete<joblist[]>(environment.baseurl+'v1/company/'+CompanyId+'/job-provider/'+jobProvderId+'/job/'+id)
  }

  getCurrentdata(id:string){
    // const jobProvderId=this.getproviderIds();
    const CompanyId=this.getCompanyIds();
    // return this.http.get<joblist[]>(environment.baseurl+'v1/company/'+CompanyId+'/job-provider/'+jobProvderId+'/job/'+id)
    return this.http.get<joblist[]>(environment.baseurl+'v1/company/'+CompanyId+'/jobs/'+id)


  }

  updateJob(id:string,data:any){
    const jobProvderId=this.getproviderIds();
    const CompanyId=this.getCompanyIds();
    return this.http.put<joblist[]>(environment.baseurl+'v1/company/'+CompanyId+'/job-provider/'+jobProvderId+'/job/'+id,data)
  }



  
  
}


