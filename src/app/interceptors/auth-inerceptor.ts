import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest  } from '@angular/common/http' ;
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
          intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>          {
              console.log('Outgoing request : ' + request.url);
              // Now we will check if the token is present in the localStorage.
              const token = localStorage.getItem('token');
              if ( token != null)              {
                  // adding the token to respective header
                  request = request.clone({
                    setHeaders: {
                      'x-access-token':  localStorage.getItem('token')}
                    }
                  );
              }
               return next.handle(request);



          }
}
