import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  states: string[] = [
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  schools: string[] = [
    'Epet N6',
    'Comercial',
  ];

  citys: string[] = [
    'Realico',
    'Parera',
  ];
  
  countrys: string[] = [
    'Argentina',
    'Colombia',
  ];

  modos: string[] = [
    'Freelance',
    'Contrato',
  ];
  
  myForm: FormGroup = this.fb.group({
    education:    ['tecno', [Validators.required] ],
    degree:     ['Ingeniero', [Validators.required] ],
    school:     ['', [Validators.required] ],
    startDate:     ['', [Validators.required] ],
    country:     ['', [Validators.required] ],
    city:     ['', [Validators.required] ],
    endDate:     ['', [Validators.required] ],
    modo:     ['', [Validators.required] ],
    uid: ["621396c1d3c5d65a3b5b5081"]
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
      // alert(JSON.stringify(this.myForm.value));
      this.artistService.insertEducationInDB(this.myForm.value).subscribe(
        (res)=>{ if(res) alert('educacion agregada correctamente')}
      )
  
  
    }
  

  }
  