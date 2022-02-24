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
  private artist!: Artist;
  public artExperience: any []=[];


  get artists(){
    return this.artist
  }

  get artistExperience (){
    return this.artExperience;
  }

 

  constructor( 
              private http: HttpClient,
    
     ) {    }
  

validateEmail (body:any) {

  return this.http.post<any> (`${this.baseUrl}api/auth/login`,body)
}

insertAboutInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/about`, body)
} 

insertExperienceInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/experience`, body)
   .pipe(
      map( res   => { this.artExperience= res; })
   )
};  

insertEducationInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/education`, body)
}  

insertSkillsInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/skills`, body)
}  

dataArtistToBackend( body : Artist ) {
  return this.http.post<any>(`${this.baseUrl}api/artist/create-profile`, body)
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