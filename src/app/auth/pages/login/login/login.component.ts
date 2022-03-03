import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;


  myForm:FormGroup = this.fb.group({
    email:    ['eber.retabaeza@gmail.com', [Validators.required] ],
    password:   ['123123123', [Validators.required] ],
  });

  
    constructor(
              // private authService: SocialAuthService,
              private fb : FormBuilder,
              private loginService : LoginService,
              private router : Router
    )
     {
     }
  
    ngOnInit(): void {

      // this.authService.authState.subscribe(user => {
      //   this.user = user;
      // });
  
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }
  
    ErrorMsg( error : string){
      Swal.fire({
        title: error,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    
    }
    sendForm (){
      const { email, password } = this.myForm.value;
      this.loginService.login(email, password).subscribe( 
        (res)=> {if(res){
          this.router.navigateByUrl('home') 
        }
      },(err)=>{ this.ErrorMsg(err.error.msg) }

        //  ( success) => { if(success){
        //   //  console.log(res.success);
        //    this.router.navigateByUrl('home') }
        //  } ,(err)=>{ this.ErrorMsg(err.error.msg) }
      ) 
    } 
     
    
  
    signInWithGoogle(): void {
      // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      // this.authService.authState.subscribe(user => {
      //     this.user = user;
      //     this.loginWithGoogle();
      //     if(user!=null){

      //       this.router.navigateByUrl('/bienvenida');
         }
        // //   if(user!=null){
      // //     const {idToken} = user
      // //     this.employeeService.userLogin={
      // //       // name,
      // //       // email
      // //       idToken
      // //   }
      // // } 
      // });
    // }
   
    signOut(): void {
      // this.authService.signOut();
    }
  
    refreshGoogleToken(): void {
      // this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    }
  
  // VER EXPLICACION ABAJO
  
  loginWithGoogle(){
    //   if(this.user!= null) {
    //     this.loginService.loginWithGoogle(this.user).subscribe((res)=>{ console.log(res) })
    //  }
  }
  
  }
  