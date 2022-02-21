import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist/artist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public iAgree: boolean=false;

  myForm:FormGroup = this.fb.group({
    email:   ['',[Validators.required]],
    password:    ['', [Validators.required] ],

  
  
  });

  
    constructor(
              private fb : FormBuilder,
              private artistService : ArtistService,
              private router : Router
    )
     {
     }
  
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
  
    sendForm (){

      this.artistService.login(this.myForm.value).subscribe( 
         ( ) => { 
      
              this.router.navigateByUrl('auth/confirmacion')

              
              // this.router.navigateByUrl(`artistas/perfil/${user._id}`)
            
          },(err: HttpErrorResponse)=> {
              //error de desconexion con el back end
              if(err.status === 0){
                alert ('opps!!')
                return
              };
  
              if(err.status === 400 || err.status === 403 || err.status === 500 
                || err.status === 510 ){
                  alert(err.error.msg);
                  // this.router.navigateByUrl('home');
                  // this.dialogRef.close([]);
                  return
  
                };
                if(err.error.errors){ // error desde los check (nombre obligatorio)
                  const test = err.error.errors;
        
                  //recorro el arreglo de errores y guardo en "msgs" cada error y muestro la propiedad error
                 test.map((msgs:any) => {
                   
                   if(!msgs.msg.includes('Cast'))
                   alert (msgs.msg)
                   console.log(msgs)
                 });
                         
         
        
                  return      
                 };
                
  
          })
      }
  
  test(){
    return this.iAgree=true;

  }
  }
  