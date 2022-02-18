import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist.interface';
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
private test! : any;
  
states: string[] = [
  'Alabama',
  'Alaska',
  'Arizona',

];

myForm:FormGroup = this.fb.group({
  name:    ['', [Validators.required] ],
  alias:   ['', [Validators.required] ],
  titular: ['', [Validators.required]],
  web :    ['', [Validators.required]],
  email:   ['', [Validators.required]],
  dateBirth: ['', [Validators.required]],



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

    this.artistService.dataArtistToBackend(this.myForm.value).subscribe( 
       ({user}) => { 
            this.confirmArtist();
            this.dialogRef.close([]);
            this.artistService.getDataArtist(user._id).subscribe(
            res => 
            this.router.navigateByUrl(`artistas/perfil/${user._id}`)
          )
        },(err: HttpErrorResponse)=> {
            //error de desconexion con el back end
            if(err.status === 0){
              alert ('opps!!')
              return
            };

            if(err.status === 400 || err.status === 403 || err.status === 500 
              || err.status === 510 ){
                alert(err.error.msg);
                this.router.navigateByUrl('home');
                this.dialogRef.close([]);

              }
              
          return

        })
    }




              
          // this.myForm.reset(); 


  
}
