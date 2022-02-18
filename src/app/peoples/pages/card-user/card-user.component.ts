import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist/artist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {


quantity:any;
array: any []=[] 
string:any;
clicked:boolean= false;
hidden: boolean = false;
showSpinner : boolean = false;
  
states: string[] = [
  'Alabama',
  'Alaska',
  'Arizona',

];

myForm:FormGroup = this.fb.group({
  name:    ['marcelo griotti', [Validators.required] ],
  alias:   ['bul', [Validators.required] ],
  titular: ['no se q eso', [Validators.required]],
  web :    ['www.feintdevs.com', [Validators.required]],
  email:   ['margri@gmail.com', [Validators.required]],
  dateBirth: ['2022-02-17T03:00:00.000+00:00', [Validators.required]],



});
  

  constructor(
            private fb : FormBuilder,
            private artistService : ArtistService,
            private router: Router,
            private dialogRef: MatDialogRef<CardUserComponent>
  )
   { }

  ngOnInit(): void {
  }

  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }

  confirmArtist(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Artista creado correctamente',
      showConfirmButton: false,
      timer: 4000
    });
  
  }


  sendFormArtist (){
    // alert(JSON.stringify(this.myForm.value));

  //   this.artistService.dataArtistToBackend(this.myForm.value).subscribe( 
  //     artist => { 
  //       if(artist){
  //         this.confirmArtist();
  //         console.log(artist);
       
  //         this.artistService.getDataArtist('f').subscribe(
  //           res=> alert(res._id)

  //         // (artist) => 
  //         //   this.router.navigateByUrl(`artistas/perfil/${artist.id}`)

          
          
  //         );
  //         this.dialogRef.close([]);
  //         // this.router.navigateByUrl('../artistas/lista');

              
  //         // this.myForm.reset(); 
  //       }
  //     }
  //   )
  // }

  }
}
