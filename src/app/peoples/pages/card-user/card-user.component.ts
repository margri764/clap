import { HttpErrorResponse} from '@angular/common/http';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class CardUserComponent implements OnInit,AfterViewChecked {


quantity:any;
array: any []=[] 
string:any;
clicked:boolean= false;
hidden: boolean = false;
showSpinner : boolean = false;
private modalHeight : string = '';
public linkedin : boolean =false;
public behance : boolean =false;

private idArtist?: string= this.loginService.user.id;
private emailArtist?: string= this.loginService.user.email;

  
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

social={
facebook:"www.facebook.com/test"
}

myForm:FormGroup = this.fb.group({
  name:    ['', [Validators.required] ],
  // userName:    ['', [Validators.required] ],
  bio:        ['', [Validators.required] ],  
  countryId:  ['1', [Validators.required] ],  
  cityId:      ['2'],
  website :    ['', [Validators.required]],
  email:       [this.emailArtist, [Validators.required]],
  // email:       ['', [Validators.required]],

  dateBirth:   ['', [Validators.required]], 
  since:     ['', [Validators.required]], 
  alias:       ['', [Validators.required] ], 
  social:     [this.social, [Validators.required]],
  // id:           ['']
  // id:          [this.idArtist] 
  
});

//agregar el cratedAT y updateAT o ver si ponerlo desde el back

//el status deberia ir en true mien
  

  constructor(
            private fb : FormBuilder,
            private _artistservice : ArtistService,
            private router: Router,
            private loginService : LoginService,
            private dialogRef: MatDialogRef<CardUserComponent>,
            private dialog : MatDialog,
            private cdRef:ChangeDetectorRef
  )
   { }
   
  ngAfterViewChecked(): void {
    // this.behance;
    // console.log(this.behance)
    // this.cdRef.detectChanges();

  }

 getArrSocial(){

  this._artistservice.arrSocial.map(social => ({
    ...social,
     social : (this.getSocial(social)),    
  })
  );

 }

 getSocial(social:any){
   switch (social){
     case 'linkedin':
       console.log('linkedin')
       break

      case 'behance':
        this.behance=true;
      console.log('behance')
      break
   }
 }


  ngOnInit(): void {

    this.randomApi();



    
    (screen.width <= 1280) ? this.modalHeight='1000px' : this.modalHeight='700px' 
  }
  
  validField( field: string ) {
    
    return this.myForm.controls[field].errors 
    && this.myForm.controls[field].touched;
  }
  
  openDialogSocial() {
      this.dialog.open(SocialComponent, {
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

  // this._artistservice.dataArtistToBackend(this.myForm.value).subscribe( 
  //   ({user}) => { 
  //        this.confirmArtist();
  //        this.dialogRef.close([]);
  //        this._artistservice.getDataArtist(user._id).subscribe(
  //        res => 
  //        this.router.navigateByUrl(`artistas/perfil/${user._id}`)
  //      )
  //    }

  sendFormArtist (){
    // alert(JSON.stringify(this.myForm.value))
  

    this._artistservice.dataArtistToBackend(this.myForm.value , this.loginService.user.email!).subscribe(
       ( res ) =>{ console.log(res)
    
            this.confirmArtist();
            this.dialogRef.close([]);
       })
      }  
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
