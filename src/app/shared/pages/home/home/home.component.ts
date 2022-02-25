import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public arrExperience :any []=[];
  public arrArtist :any []=[];
  private idArtist! : string;
  constructor(
              private artistService: ArtistService
  ) { }

  ngOnInit(): void {
    // this.getExperience();
    this.idArtist=JSON.parse(localStorage.getItem('token')!)
    this.showDataArtist();

  }
  
  getExperience(){
    this.artistService.getExperienceFromDB( "6218238ba0c2d3b7fd4ba288").subscribe( 
      ( {experience} ) => { this.arrExperience= experience, console.log(this.arrExperience)}
    )}
   

   showDataArtist(){
    this.artistService.getDataArtist(this.idArtist).subscribe(
     ( {user} ) => { this.arrArtist= user,console.log(this.arrArtist) }
 
    )
  } 

}
