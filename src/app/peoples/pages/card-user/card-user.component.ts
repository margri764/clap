import { HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';
import { SocialComponent } from '../social/social/social.component';

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
private modalHeight : string = '';
// private idArtist?: string= this.loginService.user.id;
  
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
  website :    ['', [Validators.required]],
  email:       ['', [Validators.required]],
  dateBirth:   ['', [Validators.required]], //tendria q ir dentro del objeto profileData[]
  jobDate:     ['', [Validators.required]], //tendria q ir dentro del objeto profileData[]
  alias:       ['', [Validators.required] ],  //tendria q ir dentro del objeto profileData[]
  titular:     ['', [Validators.required]],
  id:           ['']
  // id:          [this.idArtist] 
  
});

//agregar el cratedAT y updateAT o ver si ponerlo desde el back

//el status deberia ir en true mien
  

  constructor(
            private fb : FormBuilder,
            private artistService : ArtistService,
            private router: Router,
            private loginService : LoginService,
            private dialogRef: MatDialogRef<CardUserComponent>,
            private dialog : MatDialog
  )
   { }




  ngOnInit(): void {
    this.randomApi();
    console.log(this.loginService.user.id,'desde el card-user');
    // this.idArtist!=this.loginService.user.id;
    
    (screen.width <= 1280) ? this.modalHeight='1000px' : this.modalHeight='700px' 
  }
  
  validField( field: string ) {
    
    return this.myForm.controls[field].errors 
    && this.myForm.controls[field].touched;
  }
  
  openDialogSocial() {
    const dialogRef = this.dialog.open(SocialComponent, {
      maxHeight: '90vh',
      height: this.modalHeight,
      panelClass:"custom-modalbox-social",
      // scrollStrategy: new NoopScrollStrategy()
    });
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
public api : any=[];
 
randomApi(){

  fetch('https://randomuser.me/api')
  .then(res =>res.json())
  .then(data =>{this.api.push(data.results ["0"])})
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
    alert(JSON.stringify(this.myForm.value))
  }

    // this.artistService.dataArtistToBackend(this.myForm.value).subscribe(
    //    () =>{
    
    //         this.confirmArtist();
    //         this.dialogRef.close([]);
    //    })
    //   }
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
