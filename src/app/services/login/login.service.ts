import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http : HttpClient) { }

  loginWithGoogle(body : any){
    return this.http.post(`${this.baseUrl}api/auth/google`, body);
  }

  confirm (token : string) {
  
    // let params = new HttpParams().set("token",`${ token }`);
    return this.http.get( `${this.baseUrl}api/auth/confirm/${token}` )
    
    }
      

}
