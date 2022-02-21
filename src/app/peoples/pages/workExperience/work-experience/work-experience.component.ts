import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {


  
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
  description:['aca va la descripcion del trabajo']



});
  
            constructor(
                       private fb : FormBuilder,
                       private artistService : ArtistService

            ) { }

  ngOnInit(): void {
  }

  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }
  sendForm(){
    // alert(JSON.stringify(this.myForm.value))
    this.artistService.insertExperienceInDB(this.myForm.value).subscribe(
      (res)=>{ if(res) alert('experiencia agregada correctamente')}
    )



  }

  onCommentChange() {
    console.log(this.comment.value);
  } 
}
