import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { off } from 'process';
import { catchError, map, Observable, tap } from 'rxjs';
import { User } from 'src/app/interfaces/artist.interface';
import { AuthResponse } from 'src/app/interfaces/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.baseUrl;
  public user!: User;

  get dataUser() {
    return { ...this.user };
  }


  constructor( private http : HttpClient) { }

  //confirmacion desde el WELCOME una vez q recibio el email
  confirm (token : string) {
    return this.http.get<AuthResponse>(`${this.baseUrl}api/auth/confirm/${token}` )
    .pipe(
      tap( resp => {
        if ( resp.success ) {
          this.user={
            id: resp.id,
            // email: resp.email,
            // statusAccount: resp.statusAccount
          }
          console.log(this.user);
        }
      }),
      map( resp => { resp.success;
      return true
      } )
    )
  }

//desde REGISTRO se chequea que no este registrado o en proceso de registro
  validateEmail (email : string, password:string) {
    const body = {email,password};
    return this.http.post<AuthResponse> (`${this.baseUrl}api/auth/validate`,body)
  }

  //si ya estoy registrado me envia
  login (email : string, password:string) {
    const body = {email,password};
    return this.http.post<AuthResponse> (`${this.baseUrl}api/auth/login`,body)
    .pipe(
      tap( resp => {
        if ( resp.success ) {
        localStorage.setItem('token', resp.id! )
        // localStorage.setItem('token', resp.token! ),
          this.user={
            id: resp.id,
            email: resp.email,
            statusAccount: resp.statusAccount
          }
          // console.log(this.user);
        }
      }),
      map( resp => {
        resp.success;
      return true
      } )
    )

  }

  tokenValidator(): Observable<boolean> {

      const headers = new HttpHeaders()
        .set('token', localStorage.getItem('token') || '' );
  
      return this.http.get<AuthResponse>( `${ this.baseUrl}api/auth/renew`, { headers } )
          .pipe(
            map( resp => {
              localStorage.setItem('token', resp.token! ),
              this.user={
                id: resp.id,
                email: resp.email,
                statusAccount: resp.statusAccount
              }
  
              return true;
            }),
            // catchError( err => of(false) )
          );
  
    }

  
  loginWithGoogle(body : any){
    return this.http.post(`${this.baseUrl}api/auth/google`, body);
  }

      

}
