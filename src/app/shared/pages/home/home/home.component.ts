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
  constructor(
  ) { }

  ngOnInit(): void {


  }
  


}
