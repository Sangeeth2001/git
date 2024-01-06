import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getinglocation } from '../model/joblist';
import { environment } from 'src/app/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  constructor(private http:HttpClient) { }

  getLocation(){
     return this.http.get<getinglocation[]>(environment.baseurl+'v1/GetLocations')
  }
}
