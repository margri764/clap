import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { CardUserComponent } from '../../card-user/card-user.component';

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
    private _artistservice : ArtistService,
    private dialog : MatDialog,
    private cardusercomponent : CardUserComponent

    
    ) { }
    
    validField( field: string ) {
      
      return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched;
    }

 
 


    ngOnInit(): void {

    }
    
  public arrSocial : any []=[];  
    socialSelect(input : any){

      switch (input) {
        case 'linkedin':

          if(this.myForm.controls[input].dirty == true){
            // this.arrSocial.push(this.myForm.controls[input].value)
            this.arrSocial.push('linkedin')

            // console.log(this.arrSocial)
          }
        break

        case 'behance':

          if(this.myForm.controls[input].dirty == true){
            // this.arrSocial.push(this.myForm.controls[input].value)
            this.arrSocial.push('behance')

            // console.log(this.arrSocial)
          }
        break
        
        
  }
}

    link : any;
    sendForm(){

      // this._artistservice.getSocialMedia(this.arrSocial);
      // alert(JSON.stringify(this.arrSocial));
      // this.cardusercomponent.getArrSocial();

     
      
      // this._artistservice.insertEducationInDB(this.myForm.value).subscribe(
        //   (res)=>{ if(res) alert('educacion agregada correctamente')}
        // )
                  
      }
      
    }
    