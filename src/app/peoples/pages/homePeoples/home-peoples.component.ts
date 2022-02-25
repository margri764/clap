import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { CardUserComponent } from '../card-user/card-user.component';

@Component({
  selector: 'app-home-peoples',
  templateUrl: './home-peoples.component.html',
  styleUrls: ['./home-peoples.component.scss']
})
export class HomePeoplesComponent implements OnInit {


  public showPeople: boolean =false;
  public arrArtist :any=[];

  constructor(
              private dialog : MatDialog,
              private artistService : ArtistService
  ) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(){
    this.showPeople= true;
    this.artistService.getArtists().subscribe(
      ({user})=> { this.arrArtist = user,
      console.log(this.arrArtist)
      })
  }







  
}
