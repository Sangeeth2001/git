import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { addcmpnyDetails } from 'src/app/company/model/addcmpny';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.authservice.getToken();

    const jobProvderId = localStorage.getItem('accessToken');
    const company_id = sessionStorage.getItem('c_id');
    
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${jobProvderId}` 
        }
      });


    return next.handle(request);
  }
}
