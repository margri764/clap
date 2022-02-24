import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss']
})
export class CardExperienceComponent implements OnInit {

  public arrayExperience : any;

  constructor(
              private artistService : ArtistService
  ) { }

  ngOnInit( ): void {

    this.arrayExperience = this.artistService.artistExperience;
    console.log(this.arrayExperience)
  }

}
