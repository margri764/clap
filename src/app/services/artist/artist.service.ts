import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/interfaces/artist.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!


  constructor( 
              private http: HttpClient,
    
     ) {    }
  
  dataArtistToBackend( body : Artist ) : Observable <Artist> {
    // console.log(body)
    return this.http.post <Artist>(`${this.baseUrl}api/artist`, body);
 
  };
}
