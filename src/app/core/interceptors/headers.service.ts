import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadersService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  
    const headers = new HttpHeaders({
      token: '325346324645674'
    })

        // Importante se debe clonar el request para devolver uno nuevo en el handle
    const request = req.clone({
      headers
    })

    return next.handle(request).pipe(catchError(this.handlerError))
  }

  handlerError(error: HttpErrorResponse){
    return throwError(() => new Error(`Error en la peticion del servicio ${error}`))
  }
}
