import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { CardExperienceComponent } from '../../cardExperience/card-experience/card-experience.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit  {

  @ViewChild(CardExperienceComponent) viewChild!: CardExperienceComponent;

public arrExperience :any = [];
private idArtist: string=JSON.parse(localStorage.getItem('token')!);
  
type: string[] = [
  'contrato',
  'permanente',

];

city: string[] = [
  'realico',
  'parera',
];

country: string[] = [
  'colombia',
  'argentina',
];


comment = new FormControl();

myForm:FormGroup = this.fb.group({
  jobTitle:    ['jefe diseñador', [Validators.required] ],
  companyName:    ['disney', [Validators.required] ],
  type:     ['', [Validators.required]],
  linkPortfolio :    ['no se bien q hace'],
  startDate:   [''],
  endDate: [''],
  country: [''],
  city:[''],
  description:['aca va la descripcion del trabajo'],
  id: [this.idArtist]



});
  
            constructor(
                       private fb : FormBuilder,
                       private artistService : ArtistService,
                       private cardExperience : CardExperienceComponent

            ) { }



 

  ngOnInit(): void {

    // this.idArtist=JSON.parse(localStorage.getItem('token')!);
  }

  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }
  sendForm(){
    alert(JSON.stringify(this.myForm.value))
    this.artistService.insertExperienceInDB(this.myForm.value).subscribe()
  }

  // this.cardExperience.insertExperienceInTemplate(
  // alert(JSON.stringify(this.arrExperience)) 
  onCommentChange() {
    console.log(this.comment.value);
  } 
}
