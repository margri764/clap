import { HttpErrorResponse} from '@angular/common/http';
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
private test! : any;
  
countries: string[] = [
  'Colombia',
  'Argentina',
  'Peru',
];

cities: string[] = [
  'Bogota',
  'Realicó',
  'Lima',
];

myForm:FormGroup = this.fb.group({
  userName:    ['', [Validators.required] ],
  city:        ['', [Validators.required] ],  
  state:       ['', [Validators.required] ],  
  website :        ['www.feintdevs.com', [Validators.required]],
  email:       ['margri764@gmail.com', [Validators.required]],
  dateBirth:   ['', [Validators.required]], //tendria q ir dentro del objeto profileData[]
  jobDate:     ['', [Validators.required]], //tendria q ir dentro del objeto profileData[]
  alias:       ['bul', [Validators.required] ],  //tendria q ir dentro del objeto profileData[]
  titular:     ['rtrtrt', [Validators.required]],
  
});

//agregar el cratedAT y updateAT o ver si ponerlo desde el back

//el status deberia ir en true mien
  

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

// PUEDE SERVIR PARA LINK DESDE PERSONAS AL ARTISTA SELECCIONADO

  // this.artistService.dataArtistToBackend(this.myForm.value).subscribe( 
  //   ({user}) => { 
  //        this.confirmArtist();
  //        this.dialogRef.close([]);
  //        this.artistService.getDataArtist(user._id).subscribe(
  //        res => 
  //        this.router.navigateByUrl(`artistas/perfil/${user._id}`)
  //      )
  //    }

  sendFormArtist (){
    // alert(JSON.stringify(this.myForm.value))

    this.artistService.dataArtistToBackend(this.myForm.value).subscribe(
       () =>{
    
            this.confirmArtist();
            this.dialogRef.close([]);
       })
      }
        //   },(err: HttpErrorResponse)=> {
        //     //error de desconexion con el back end
        //     if(err.status === 0){
        //       alert ('opps!!')
        //       return
        //     };

        //     if(err.status === 400 || err.status === 403 || err.status === 500 
        //       || err.status === 510 ){
        //         alert(err.error.msg);
        //         this.router.navigateByUrl('home');
        //         this.dialogRef.close([]);

        //       }
              
        //   return

        // })
    // }




              
          // this.myForm.reset(); 


  
}
