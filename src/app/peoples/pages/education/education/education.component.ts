import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  // private idArtist : string= JSON.parse(localStorage.getItem('token')!)

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
    discipline:    ['', [Validators.required] ],
    title:     ['', [Validators.required] ],
    institution:     ['', [Validators.required] ],
    initdate:     ['', [Validators.required] ],
    city:     ['', [Validators.required] ],
    country:     ['', [Validators.required] ],
    enddate:     ['', [Validators.required] ],
    mode:     ['', [Validators.required] ],
    currenteducation:     [true ],
    
    // id: ['']
    // id: [this.idArtist]

  });
    
              constructor(
                         private fb : FormBuilder,
                         private _artistservice : ArtistService
  
              ) { }
  
    ngOnInit(): void {
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }
    sendForm(){
      this._artistservice.getDataEducation(this.myForm.value);
      
      alert(JSON.stringify(this.myForm.value));
      // this._artistservice.insertEducationInDB(this.myForm.value).subscribe(
      //   (res)=>{ if(res) alert('educacion agregada correctamente')}
      // )
  
  
    }
  

  }
  