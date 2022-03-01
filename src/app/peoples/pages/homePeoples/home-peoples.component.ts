import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
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

  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }



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
