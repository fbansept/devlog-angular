import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token: string = localStorage.getItem('token');

    let httpClone;

    if(token) {

      httpClone = req.clone({
          setHeaders: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + token
          }
      })

    } else {

      httpClone = req.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    }

    return next.handle(httpClone);
  }
}
