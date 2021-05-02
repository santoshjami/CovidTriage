import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('inside 2 interceptor' )
    if(request.url.includes("getbyemail"))
    {
      return next.handle(request);
    }
    else{
      const userToken = 'secure-user-token';
      const modifiedReq = request.clone({ 
        headers: request.headers.set('Authorization', `Bearer ${userToken}`),
      });
      return next.handle(request);
    }

  }
}
