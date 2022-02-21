import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Artist } from 'src/app/interfaces/artist.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!

  get artists(){
    return this.artist

  }
 private artist!: Artist;
 

  constructor( 
              private http: HttpClient,
    
     ) {    }
  

login (body:any) {

  return this.http.post<any> (`${this.baseUrl}api/auth/login`,body)
}


insertExperienceInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/capabilities`, body)

}  
  

  dataArtistToBackend( body : Artist ) {
    return this.http.post<any>(`${this.baseUrl}api/artist`, body)
  }
  
    // .pipe(
    //   map( res   => { 
    //        this.artist= res.user   
    //     return {
    //       user : this.artist
    //      };
    //     }),
    //     )
    //   };



  getDataArtist (id: string) : Observable <Artist>{

    return this.http.get <Artist>(`${this.baseUrl}api/artist/${id}`)
  }


}

// { path: 'pais/:id', component: VerPaisComponent },