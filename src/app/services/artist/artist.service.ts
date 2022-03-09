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
  public arrSocial : any []=[];
  public arrEducation : any [] = [];



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

// getEducationFromDB (user_id: string){

//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('token') || ''}`

//   });
//   let profileID='hjjkhj'

//   let params = new HttpParams().set("where",`${ id:profileID }`);

//   return this.http.patch<any>(`${this.baseUrl}/api/users/${user_id}/profiles`,{headers:headers},{params})
//       // .pipe(
//       // map( res   => { 
//       //      this.artEducation= res.education   
//       //   return { education : this.artEducation };
//       //   }),
//       //   )
// };

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
       tap( res => console.log(res) ),
          // localStorage.setItem('token',JSON.stringify(res._id)) }),
       map( res   => {return res} )
       )
    }



// data del artista para el perfil
getDataArtist (user_id: string) {

  console.log(user_id)
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`

  });
  return this.http.get<any>(`${this.baseUrl}/api/users/${user_id}/profiles`, {headers:headers})
   .pipe(
      //  tap( res => console.log(res)
          // localStorage.setItem('token',JSON.stringify(res._id)) }),
       map( res   => { console.log(res); return res}) )
       
        
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
   


getSocialMedia(socialArray : any){
  this.arrSocial = socialArray
}

getDataEducation(education : any){
  this.arrEducation= education;
}
  
  }