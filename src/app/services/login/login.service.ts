import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { off } from 'process';
import { catchError, map, Observable, pipe, tap } from 'rxjs';
import { User } from 'src/app/interfaces/artist.interface';
import { AuthResponse } from 'src/app/interfaces/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.baseUrl;
  public user!: User;
  public userId : any;

  get dataUser() {
    return { ...this.user };
  }



  constructor( private http : HttpClient) { }

  //desde REGISTRO se chequea que no este registrado o en proceso de registro
  signUp (body : string) {
      const headers = new HttpHeaders()

   headers.set('Content-Type', 'application/json');
   headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
   headers.set('Access-Control-Allow-Origin', '*');
    // 'Authorization': `Bearer ${emailkey}`
    // , {headers: headers} 
    // const body = {email,password};
    return this.http.post<any> (`${this.baseUrl}/users/signup`,body, {headers:headers})
 
  }

  //EBER   confirmacion desde el WELCOME una vez q recibio el email
  validateEmail (emailkey : string) {
   const key= {
      key: emailkey
    } 
  // const headers = new HttpHeaders()

  //  headers.set('Content-Type', 'application/json');
  //  headers.set('Access-Control-Allow-Origin', '*');
    // 'Authorization': `Bearer ${emailkey}`
    // , {headers: headers} 


    return this.http.put<any>(`${this.baseUrl}/api/validate-email`,key)
    .pipe(
      tap( res =>
        localStorage.setItem('token', res.token)

        // console.log(res)
      )
    )

  }


//EBER obtener id usuario

whoAmI(){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`

  });
  return this.http.get<User>(`${this.baseUrl}/api/whoAmI`,{headers:headers})
  .pipe(
    tap( res => {
  
        this.user={
          id: res.id,
          email: res.email
        }
      }),
      map( res => {return res})

  )

}


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
  validateEmailAAAAA (email : string, password:string) {
    const body = {email,password};
    return this.http.post<AuthResponse> (`${this.baseUrl}api/auth/validate`,body)
  }

  //si ya estoy registrado me envia
  login (email : string, password:string) {

    const body= {email, password}

    return this.http.post<any> (`${this.baseUrl}/api/user/login`, body)
    .pipe(
      tap( resp=>{
        localStorage.setItem('token', resp.token)
      }),
      map( resp=>{ return true})
    )
    // .pipe(
    //   tap( resp => {
    //     if ( resp.success ) {
    //     localStorage.setItem('token', resp.id! )
    //     // localStorage.setItem('token', resp.token! ),
    //       this.user={
    //         id: resp.id,
    //         email: resp.email,
    //         statusAccount: resp.statusAccount
    //       }
    //       // console.log(this.user);
    //     }
    //   }),
    //   map( resp => {
    //     resp.success;
    //   return true
    //   } )
    // )

  }


  // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjBhMDQ4YzE0MDYzNjdiN2ZkYzM1OCIsIm5hbWUiOiJFYmVyIFJldGEiLCJmaXJzdE5hbWUiOiJFYmVyIiwibGFzdE5hbWUiOiJSZXRhIiwicm9sZSI6InVzZXIiLCJlbWFpbCI6ImViZXIucmV0YWJhZXphQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2NDYzMjY4ODUsImV4cCI6MTY0NjM2Mjg4NX0.Za3uA3hKo4GHzhzlh_FgKKsheLg6BUASH2G0i_myQno"
  // const headers = new Headers({

  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${token}`

  // });

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
                // statusAccount: resp.statusAccount
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
