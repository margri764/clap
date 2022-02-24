import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss']
})
export class CardExperienceComponent implements OnInit, AfterViewChecked,AfterViewInit {

  
  
  public arrExperience :any = ['tt'];


  constructor(
              private artistService : ArtistService,
              private cdRef:ChangeDetectorRef
  ) { }
  ngAfterViewInit(): void {

  
  }

  ngAfterViewChecked(): void {
   

  
  }


  ngOnInit( ): void {


  }

  // insertExperienceInTemplate(){
  //   this.arrExperience = this.artistService.artistExperience;
  //  console.log(this.arrExperience);
  // }
}
