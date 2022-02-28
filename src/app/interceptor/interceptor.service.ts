import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(
          'the interceptor has caught an error, process it here',
          error
        );
        return throwError(() => error);
      })
    );
  }
}

  