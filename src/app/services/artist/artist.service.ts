import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Artist, Auth } from 'src/app/interfaces/artist.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!
  private artist!: Artist;
  public artExperience: any []=[];
  public artEducation: any []=[];
  public artAbout: any []=[];
  public arrArtist : any =[]
  private _auth: any;



  get artists(){
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
  

validateEmail (body:any) {

  return this.http.post<any> (`${this.baseUrl}api/auth/login`,body)
}

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

dataArtistToBackend( body : Artist ) {
  return this.http.post<any>(`${this.baseUrl}api/artist/create-profile`, body)
   .pipe(
       tap( res =>{ localStorage.setItem('token',JSON.stringify(res._id)) }),
       map( res   => { this.artist= res}) )
  
};

// getters

getDataArtist (id: string) {

    return this.http.get <any>(`${this.baseUrl}api/artist/${id}`)
 }

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


    }
}
