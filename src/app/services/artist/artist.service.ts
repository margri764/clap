import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artist } from 'src/app/interfaces/artist.interface';
import { Usuario } from 'src/app/models/artist';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!

  public artist =[];
 

  constructor( 
              private http: HttpClient,
    
     ) {    }
  
  dataArtistToBackend( body : any )  {
    return this.http.post<Artist>(`${this.baseUrl}api/artist`, body)
    .pipe(
      map( res =>{ 
        this.artist.forEach( (item : any)=> item =res._id)
        console.log(this.artist);
        
        return res;
    
      } 
      )
    )
 
    
 
 
  };

  getDataArtist (id: string) : Observable <Artist>{

    return this.http.get <Artist>(`${this.baseUrl}api/artist/${id}`)
  }


}

// { path: 'pais/:id', component: VerPaisComponent },