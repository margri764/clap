import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReadPropExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Artist, Auth, User } from 'src/app/interfaces/artist.interface';
import { ArtistResponse } from 'src/app/interfaces/auth';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!
  public artist!: Artist;
  public artExperience: any []=[];
  public artEducation: any []=[];
  public artAbout: any []=[];
  public arrArtist : any =[]
  private _auth: any;



  get getArtist(){
    return this.artist
  }

  get artistExperience (){
    return this.artExperience;
  }

  get artistEducation (){
    return this.artEducation;
  }

  get auth() {
    return { ...this._auth! }
  }



 

  constructor( 
              private http: HttpClient,
    
     ) {    }
  

// validateEmail (body:any) {

//   return this.http.post<any> (`${this.baseUrl}api/auth/login`,body)
// }

insertAboutInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/about`, body)
} 

getAboutFromDB (id: string){
  return this.http.get<any>(`${this.baseUrl}api/artist/about/${id} `)
      .pipe(
      map( res   => { 
           this.artAbout= res.about   
        return { about : this.artAbout };
        }),
        )
};

insertExperienceInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/experience`, body)
  //  .pipe(
  //     map( res   => { this.artExperience= res
  //       return { experience: this.artExperience} 
  //     })
  //  )
};  

getExperienceFromDB (id: string){
  return this.http.get<any>(`${this.baseUrl}api/artist/experience/${id} `)

      .pipe(
      map( res   => { 
           this.artExperience= res.experience   
        return {
          experience : this.artExperience
         };
        }),
        )
};

insertEducationInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/education`, body)
}  

getEducationFromDB (id: string){
  return this.http.get<any>(`${this.baseUrl}api/artist/education/${id} `)
      .pipe(
      map( res   => { 
           this.artEducation= res.education   
        return { education : this.artEducation };
        }),
        )
};

insertSkillsInDB (body: any){
  return this.http.post<any>(`${this.baseUrl}api/artist/skills`, body)
}  

dataArtistToBackend( body : Artist, id : string) {


  console.log(id)
  console.log(body)
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`

  });
  return this.http.post<any>(`${this.baseUrl}/api/users/${id}}/profiles`, body,{headers:headers})
   .pipe(
       tap( res => console.log(res)
          // localStorage.setItem('token',JSON.stringify(res._id)) }),
      //  map( res   => { this.artist= res}) )
       ))
    }



// data del artista para el perfil
getDataArtist (id: string) {

    return this.http.get <ArtistResponse>(`${this.baseUrl}api/artist/${id}`)
    .pipe(
      tap( resp => {
        if ( resp.success ) {
          // localStorage.setItem('token', resp.token! ),
          this.artist={
            id: resp.id,
            userName: resp.userName,
            alias: resp.alias,
            titular: resp.titular,
            dateBirth: resp.dateBirth,
            country: resp.country,
            city: resp.city,
            email: resp.email,
            jobDate: resp.jobDate,
            website: resp.website
          }
          
          // console.log(this.artist, 'artista del artitsService');
        }
      }),
      map( (resp) => { resp.success;
         return true  } )
    )
        
 }


 //trae todos los artistas para artistas/lista 
 getArtists () {

  return this.http.get <any>(`${this.baseUrl}api/artist`)
  .pipe(
    map( res   => { 
         this.arrArtist= res.user   
      return {
         user : this.arrArtist
       };
      }),
      )


};
   
  
  }