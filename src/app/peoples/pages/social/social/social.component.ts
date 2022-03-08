import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

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
    linkedin:    [''],
    instagram:   [''],
    behance:     [''],
    facebook:    [''],
    artstation:  [''],
    dribble:     [''],
    vimeo:       [''],
    youtube:     [''],
    twiter:      [''],
    pinterest:   ['']

    // id: [this.idArtist]

  });
    
              constructor(
                         private fb : FormBuilder,
                         private artistService : ArtistService,
                         private dialog : MatDialog 
  
              ) { }
  
    ngOnInit(): void {
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }
    sendForm(){
      alert(JSON.stringify(this.myForm.value));
      // this.artistService.insertEducationInDB(this.myForm.value).subscribe(
      //   (res)=>{ if(res) alert('educacion agregada correctamente')}
      // )
  
    }
 
}
