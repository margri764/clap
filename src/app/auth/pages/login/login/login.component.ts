import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;


  myForm:FormGroup = this.fb.group({
    name:    ['', [Validators.required] ],
    alias:   ['', [Validators.required] ],
    titular: ['', [Validators.required]],
    web :    [''],
    email:   [''],
  
  
  });

  
    constructor(
              private authService: SocialAuthService,
              private fb : FormBuilder,
              private loginService : LoginService,
              private router : Router
    )
     {
     }
  
    ngOnInit(): void {

      this.authService.authState.subscribe(user => {
        this.user = user;
  
        
      //   if(user!=null){
      //     const {idToken} = user
      //     this.employeeService.userLogin={
      //       // name,
      //       // email
      //       idToken
      //   }
   
  
      // } 
      });
  
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }
  
    sendForm (){
      // console.log(this.myForm.value)
      // alert(JSON.stringify(this.user));
 
      this.authService.authState.subscribe(user => {
        this.user = user;
        this.router.navigateByUrl("home")

        
  
        
      //   if(user!=null){
      //     const {idToken} = user
      //     this.employeeService.userLogin={
      //       // name,
      //       // email
      //       idToken
      //   }
   
  
      // } 
      });
      
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.authService.authState.subscribe(user => {
          this.user = user;
          this.loginWithGoogle();
          this.router.navigateByUrl('/bienvenida');
        // //   if(user!=null){
      // //     const {idToken} = user
      // //     this.employeeService.userLogin={
      // //       // name,
      // //       // email
      // //       idToken
      // //   }
      // // } 
      });
    }
   
    signOut(): void {
      this.authService.signOut();
    }
  
    refreshGoogleToken(): void {
      this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    }
  
  // VER EXPLICACION ABAJO
  
  loginWithGoogle(){
      if(this.user!= null) {
        this.loginService.loginWithGoogle(this.user).subscribe((res)=>{ console.log(res) })
     }
  }
  
  }
  