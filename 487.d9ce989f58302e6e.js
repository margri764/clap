"use strict";(self.webpackChunkclap=self.webpackChunkclap||[]).push([[487],{1487:(q,d,r)=>{r.r(d),r.d(d,{AuthModule:()=>w});var Z=r(9808),u=r(1083),n=r(3075),h=r(7288),A=r(5226),m=r.n(A),t=r(5e3),x=r(8762),l=r(7093),c=r(5245),g=r(7322),f=r(7531),b=r(9814),s=r(7423);const T=[{path:"",children:[{path:"login",component:(()=>{class e{constructor(o,a,p){this.fb=o,this.loginService=a,this.router=p,this.GoogleLoginProvider=h.tV,this.myForm=this.fb.group({email:["",[n.kI.required]],password:["",[n.kI.required]]})}ngOnInit(){}validField(o){return this.myForm.controls[o].errors&&this.myForm.controls[o].touched}ErrorMsg(o){m().fire({title:o,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})}sendForm(){const{email:o,password:a}=this.myForm.value;this.loginService.login(o,a).subscribe(p=>{p&&this.router.navigateByUrl("home")},p=>{this.ErrorMsg(p.error.msg)})}signInWithGoogle(){}signOut(){}refreshGoogleToken(){}loginWithGoogle(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(x.r),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:47,vars:1,consts:[[2,"width","100%","height","100%","background-color","rgb(53, 53, 53)"],["fxLayoutAlign","end center","fxFlex","50"],["fxLayout","row rwap","fxLayoutAlign","space-between start",1,"container",2,"padding","20px"],["fxFlex","90","fxLayoutAlign","end center"],["routerLink","/home",2,"font-size","2.2vw","cursor","pointer"],["fxFlex","100",2,"margin-top","50px","padding","10px"],["routerLink","/auth/registro"],["id","form",3,"formGroup","ngSubmit"],["fxLayoutAlign","center center"],["appearance","outline","fxFlex","100"],["matInput","","type","text","required","","formControlName","email","placeholder","Correo electr\xf3nico*"],["fxLayoutAlign","center"],["matInput","","type","text","required","","formControlName","password","placeholder","Contrase\xf1a*"],["fxLayout","row wrap","fxLayoutAlign","space-between center"],["fxFlex","100",1,"example-section"],["value","after",1,"example-margin"],["fxLayoutAlign","center center",2,"margin-top","10px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","black","border-radius","30px"],[2,"color","blanchedalmond"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","rgb(42, 111, 175)","border-radius","30px"],["fxLayout","row","fxLayoutAlign","start center",2,"margin-top","40px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","whitesmoke","border-radius","30px",3,"click"],["src","assets/google.png","fxFlex","10","fxFlexOffset","18"],["fxFlex","50","fxLayoutAlign","end center"],["src","assets/clapLetter.png","alt",""]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-icon",4),t._uU(5,"close "),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"h1"),t.TgZ(8,"b"),t._uU(9,"Iniciar Sesi\xf3n"),t.qZA(),t.qZA(),t.TgZ(10,"h2"),t._uU(11,"\xbfNo tienes una cuenta? "),t.TgZ(12,"a",6),t.TgZ(13,"b"),t._uU(14,"Registrate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"form",7),t.NdJ("ngSubmit",function(){return a.sendForm()}),t.TgZ(16,"div",8),t.TgZ(17,"mat-form-field",9),t._UZ(18,"input",10),t.qZA(),t.qZA(),t.TgZ(19,"div",11),t.TgZ(20,"mat-form-field",9),t._UZ(21,"input",12),t.qZA(),t.qZA(),t.TgZ(22,"div",13),t.TgZ(23,"div"),t.TgZ(24,"section",14),t.TgZ(25,"mat-radio-button",15),t._uU(26,"Mantener sesi\xf3n iniciada"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div"),t.TgZ(28,"section",14),t.TgZ(29,"a"),t._uU(30,"Olvid\xe9 mi Contrase\xf1a"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",16),t.TgZ(32,"button",17),t.TgZ(33,"mat-label",18),t._uU(34,"Iniciar Sesi\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(35,"hr"),t.TgZ(36,"div",8),t.TgZ(37,"button",19),t.TgZ(38,"mat-label",18),t._uU(39,"Conectar con Linkedin"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"div",20),t.TgZ(41,"button",21),t.NdJ("click",function(){return a.signInWithGoogle()}),t._UZ(42,"img",22),t.TgZ(43,"mat-label"),t._uU(44," \xa0 Conectar con Google"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"div",23),t._UZ(46,"img",24),t.qZA(),t.qZA()),2&o&&(t.xp6(15),t.Q6J("formGroup",a.myForm))},directives:[l.Wh,l.yH,l.xw,c.Hw,u.rH,u.yS,n._Y,n.JL,n.sg,g.KE,f.Nt,n.Fj,n.Q7,n.JJ,n.u,b.U0,s.lW,g.hX,l.UT],styles:["img[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;width:500px;height:600px;border-radius:20px;padding:10px}.mat-dialog-container[_ngcontent-%COMP%]{border-radius:40px!important;flex:1 1 auto}mat-form-field[_ngcontent-%COMP%]{font-size:.8em}mat-label[_ngcontent-%COMP%]{font-size:1.3em}.mat-raised-button[_ngcontent-%COMP%]{border-radius:30px;background-color:#b6b6b6}input[_ngcontent-%COMP%]{font-size:1.3vw}.buttonGroup[_ngcontent-%COMP%]{background-color:#b6b6b6;height:5em;border-radius:15px;box-shadow:10px 10px 29px -6px #575757d4;-webkit-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);-moz-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);margin-bottom:25px}hr[_ngcontent-%COMP%]{height:1px;width:100%;background-color:#adadad;box-shadow:10px 10px 29px -1px #575757;-webkit-box-shadow:10px 10px 29px -1px #575757;-moz-box-shadow:10px 10px 29px -1px #575757;margin-top:20px;margin-bottom:20px;opacity:.5}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#61a7e9;opacity:1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:green!important}"]}),e})()},{path:"registro",component:(()=>{class e{constructor(o,a,p){this.fb=o,this.loginService=a,this.router=p,this.iAgree=!1,this.myForm=this.fb.group({email:["",[n.kI.required]],password:["",[n.kI.required]],username:["marcelo"]})}ngOnInit(){}validField(o){return this.myForm.controls[o].errors&&this.myForm.controls[o].touched}ErrorMsg(o){m().fire({title:o,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})}sendForm(){this.loginService.signUp(this.myForm.value).subscribe(o=>console.log(o))}test(){return this.iAgree=!0}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(x.r),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-registration"]],decls:46,vars:2,consts:[[2,"width","100%","height","100%","background-color","rgb(53, 53, 53)"],["fxLayoutAlign","end center","fxFlex","50"],["fxLayout","row rwap","fxLayoutAlign","space-between start",1,"container",2,"padding","20px"],["fxFlex","90","fxLayoutAlign","end center"],["routerLink","/home",2,"font-size","2.2vw","cursor","pointer"],["fxFlex","100",2,"margin-top","50px","padding","10px"],["routerLink","../auth/login"],["id","form",3,"formGroup","ngSubmit"],["fxLayoutAlign","center center"],["appearance","outline","fxFlex","100"],["matInput","","type","text","required","","formControlName","email","placeholder","Correo electr\xf3nico*"],["fxLayoutAlign","center"],["matInput","","type","text","required","","formControlName","password","placeholder","Contrase\xf1a*",2,"font-size","1.3vw"],["fxLayout","row wrap","fxLayoutAlign","space-between center"],["fxFlex","100",1,"example-section"],["value","after",1,"example-margin",3,"click"],["fxLayoutAlign","center center",2,"margin-top","10px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","black","border-radius","30px","color","white","font-size","1vw",3,"disabled"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit","disabled","",2,"border-radius","30px"],[2,"color","blanchedalmond"],["fxLayout","row","fxLayoutAlign","start center",2,"margin-top","40px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit","disabled","",2,"background-color","whitesmoke","border-radius","30px"],["src","assets/google.png","fxFlex","10","fxFlexOffset","18"],["fxFlex","50","fxLayoutAlign","end center"],["src","assets/clapLetter.png","alt",""]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-icon",4),t._uU(5,"close "),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"h1"),t.TgZ(8,"b"),t._uU(9,"Crea tu cuenta"),t.qZA(),t.qZA(),t.TgZ(10,"h2"),t._uU(11,"\xbfYa tienes una cuenta? "),t.TgZ(12,"a",6),t.TgZ(13,"b"),t._uU(14,"Inicia Sesi\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"form",7),t.NdJ("ngSubmit",function(){return a.sendForm()}),t.TgZ(16,"div",8),t.TgZ(17,"mat-form-field",9),t._UZ(18,"input",10),t.qZA(),t.qZA(),t.TgZ(19,"div",11),t.TgZ(20,"mat-form-field",9),t._UZ(21,"input",12),t.qZA(),t.qZA(),t.TgZ(22,"div",13),t.TgZ(23,"div"),t.TgZ(24,"section",14),t.TgZ(25,"mat-radio-button",15),t.NdJ("click",function(){return a.test()}),t._uU(26,"He leido y acepto los"),t.TgZ(27,"a"),t._uU(28,"\xa0 "),t.TgZ(29,"b"),t._uU(30,"t\xe9rminos y condiciones"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",16),t.TgZ(32,"button",17),t._uU(33,"Crear cuenta"),t.qZA(),t.qZA(),t._UZ(34,"hr"),t.TgZ(35,"div",8),t.TgZ(36,"button",18),t.TgZ(37,"mat-label",19),t._uU(38,"Conectar con Linkedin"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",20),t.TgZ(40,"button",21),t._UZ(41,"img",22),t.TgZ(42,"mat-label"),t._uU(43," \xa0 Conectar con Google"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",23),t._UZ(45,"img",24),t.qZA(),t.qZA()),2&o&&(t.xp6(15),t.Q6J("formGroup",a.myForm),t.xp6(17),t.Q6J("disabled",!a.iAgree))},directives:[l.Wh,l.yH,l.xw,c.Hw,u.rH,u.yS,n._Y,n.JL,n.sg,g.KE,f.Nt,n.Fj,n.Q7,n.JJ,n.u,b.U0,s.lW,g.hX,l.UT],styles:["img[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;width:500px;height:600px;border-radius:20px;padding:10px}.mat-dialog-container[_ngcontent-%COMP%]{border-radius:40px!important;flex:1 1 auto}mat-form-field[_ngcontent-%COMP%]{font-size:.8em}mat-label[_ngcontent-%COMP%]{font-size:1.3em}input[_ngcontent-%COMP%]{font-size:1.3vw}.mat-raised-button[_ngcontent-%COMP%]{border-radius:30px;background-color:#b6b6b6}.buttonGroup[_ngcontent-%COMP%]{background-color:#b6b6b6;height:5em;border-radius:15px;box-shadow:10px 10px 29px -6px #575757d4;-webkit-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);-moz-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);margin-bottom:25px}hr[_ngcontent-%COMP%]{height:1px;width:100%;background-color:#adadad;box-shadow:10px 10px 29px -1px #575757;-webkit-box-shadow:10px 10px 29px -1px #575757;-moz-box-shadow:10px 10px 29px -1px #575757;margin-top:20px;margin-bottom:20px;opacity:.5}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#61a7e9;opacity:1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:green!important}  .mat-input{background-color:green!important}"]}),e})()},{path:"confirmacion",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-confirm-email"]],decls:16,vars:0,consts:[["fxLayoutAlign","center center",1,"backPage"],["fxFlex","30","fxLayout","row rwap","fxLayoutAlign","center space-between",1,"container",2,"padding","20px"],["fxFlex","90","fxLayoutAlign","end start"],["routerLink","/home",2,"font-size","2.2vw","cursor","pointer"],["fxFlex","100","fxLayoutAlign","center center"],[2,"font-size","2vw"],[2,"text-align","center"],["fxFlex","100","fxLayoutAlign","center",2,"margin-bottom","50px"],["fxFlex","60","mat-raised-button","","appearance","outline","type","submit",2,"background-color","black","border-radius","30px"],["routerLink","./home",2,"color","blanchedalmond"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-icon",3),t._uU(4,"close "),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"h1",5),t.TgZ(7,"b"),t._uU(8,"\xa1Te enviamos un correo!"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"mat-label",6),t._uU(11,' Presiona "reenviar" si no recibes un correo en los pr\xf3ximos 10 minutos'),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"button",8),t.TgZ(14,"mat-label",9),t._uU(15,"Cerrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[l.Wh,l.yH,l.xw,c.Hw,u.rH,g.hX,s.lW],styles:["img[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;height:20vw;border-radius:20px;padding:10px}.backPage[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#353535;background-image:url(circles.8c8da240b260cca6.png);background-repeat:no-repeat;background-position:center}.mat-dialog-container[_ngcontent-%COMP%]{border-radius:40px!important;flex:1 1 auto}mat-form-field[_ngcontent-%COMP%]{font-size:.8em}mat-label[_ngcontent-%COMP%]{font-size:1.3em}.mat-raised-button[_ngcontent-%COMP%]{border-radius:30px;background-color:#b6b6b6}.buttonGroup[_ngcontent-%COMP%]{background-color:#b6b6b6;height:5em;border-radius:15px;box-shadow:10px 10px 29px -6px #575757d4;-webkit-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);-moz-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);margin-bottom:25px}hr[_ngcontent-%COMP%]{height:1px;width:100%;background-color:#adadad;box-shadow:10px 10px 29px -1px #575757;-webkit-box-shadow:10px 10px 29px -1px #575757;-moz-box-shadow:10px 10px 29px -1px #575757;margin-top:20px;margin-bottom:20px;opacity:.5}"]}),e})()},{path:"**",redirectTo:"login"}]}];let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(T)],u.Bz]}),e})();var y=r(2155),C=r(928);let w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[Z.ez,v,C.q,y.o9,n.UX]]}),e})()}}]);