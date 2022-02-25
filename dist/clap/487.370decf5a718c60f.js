"use strict";(self.webpackChunkclap=self.webpackChunkclap||[]).push([[487],{1487:(F,d,r)=>{r.r(d),r.d(d,{AuthModule:()=>w});var b=r(9808),l=r(1083),n=r(3075),Z=r(7288),t=r(5e3),u=r(7093),c=r(5245),g=r(7322),m=r(7531),x=r(9814),s=r(7423);let f=(()=>{class o{constructor(e,a){this.fb=e,this.router=a,this.GoogleLoginProvider=Z.tV,this.myForm=this.fb.group({name:["",[n.kI.required]],alias:["",[n.kI.required]],titular:["",[n.kI.required]],web:[""],email:[""]})}ngOnInit(){}validField(e){return this.myForm.controls[e].errors&&this.myForm.controls[e].touched}sendForm(){}signInWithGoogle(){}signOut(){}refreshGoogleToken(){}loginWithGoogle(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:51,vars:1,consts:[[2,"width","100%","height","100%","background-color","rgb(53, 53, 53)"],["fxLayoutAlign","end center","fxFlex","50"],["fxLayout","row rwap","fxLayoutAlign","space-between start",1,"container",2,"padding","20px"],["fxFlex","90","fxLayoutAlign","end center"],["routerLink","/home",2,"font-size","2.2vw","cursor","pointer"],["fxFlex","100",2,"margin-top","50px","padding","10px"],["routerLink","/auth/registro"],["id","form",3,"formGroup","ngSubmit"],["fxLayoutAlign","center center"],["appearance","outline","fxFlex","100"],["fxLayoutAlign","center"],["matInput","","type","text","required","","formControlName","web"],["matInput","","type","text","required","","formControlName","titular"],["fxLayout","row wrap","fxLayoutAlign","space-between center"],["fxFlex","100",1,"example-section"],["value","after",1,"example-margin"],["fxLayoutAlign","center center",2,"margin-top","10px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","black","border-radius","30px"],[2,"color","blanchedalmond"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","rgb(42, 111, 175)","border-radius","30px"],["fxLayout","row","fxLayoutAlign","start center",2,"margin-top","40px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","whitesmoke","border-radius","30px",3,"click"],["src","assets/google.png","fxFlex","10","fxFlexOffset","18"],["fxFlex","50","fxLayoutAlign","end center"],["src","assets/clapLetter.png","alt",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-icon",4),t._uU(5,"close "),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"h1"),t.TgZ(8,"b"),t._uU(9,"Iniciar Sesi\xf3n"),t.qZA(),t.qZA(),t.TgZ(10,"h2"),t._uU(11,"\xbfNo tienes una cuenta? "),t.TgZ(12,"a",6),t.TgZ(13,"b"),t._uU(14,"Registrate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"form",7),t.NdJ("ngSubmit",function(){return a.sendForm()}),t.TgZ(16,"div",8),t.TgZ(17,"mat-form-field",9),t.TgZ(18,"mat-label",10),t._uU(19,"Correo electronico"),t.qZA(),t._UZ(20,"input",11),t.qZA(),t.qZA(),t.TgZ(21,"div",10),t.TgZ(22,"mat-form-field",9),t.TgZ(23,"mat-label",10),t._uU(24,"Contrase\xf1a"),t.qZA(),t._UZ(25,"input",12),t.qZA(),t.qZA(),t.TgZ(26,"div",13),t.TgZ(27,"div"),t.TgZ(28,"section",14),t.TgZ(29,"mat-radio-button",15),t._uU(30,"Mantener sesi\xf3n iniciada"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div"),t.TgZ(32,"section",14),t.TgZ(33,"a"),t._uU(34,"Olvid\xe9 mi Contrase\xf1a"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",16),t.TgZ(36,"button",17),t.TgZ(37,"mat-label",18),t._uU(38,"Iniciar Sesi\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(39,"hr"),t.TgZ(40,"div",8),t.TgZ(41,"button",19),t.TgZ(42,"mat-label",18),t._uU(43,"Conectar con Linkedin"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",20),t.TgZ(45,"button",21),t.NdJ("click",function(){return a.signInWithGoogle()}),t._UZ(46,"img",22),t.TgZ(47,"mat-label"),t._uU(48," \xa0 Conectar con Google"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",23),t._UZ(50,"img",24),t.qZA(),t.qZA()),2&e&&(t.xp6(15),t.Q6J("formGroup",a.myForm))},directives:[u.Wh,u.yH,u.xw,c.Hw,l.rH,l.yS,n._Y,n.JL,n.sg,g.KE,g.hX,m.Nt,n.Fj,n.Q7,n.JJ,n.u,x.U0,s.lW,u.UT],styles:["img[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;width:500px;height:600px;border-radius:20px;padding:10px}.mat-dialog-container[_ngcontent-%COMP%]{border-radius:40px!important;flex:1 1 auto}mat-form-field[_ngcontent-%COMP%]{font-size:.8em}mat-label[_ngcontent-%COMP%]{font-size:1.3em}.mat-raised-button[_ngcontent-%COMP%]{border-radius:30px;background-color:#b6b6b6}.buttonGroup[_ngcontent-%COMP%]{background-color:#b6b6b6;height:5em;border-radius:15px;box-shadow:10px 10px 29px -6px #575757d4;-webkit-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);-moz-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);margin-bottom:25px}hr[_ngcontent-%COMP%]{height:1px;width:100%;background-color:#adadad;box-shadow:10px 10px 29px -1px #575757;-webkit-box-shadow:10px 10px 29px -1px #575757;-moz-box-shadow:10px 10px 29px -1px #575757;margin-top:20px;margin-bottom:20px;opacity:.5}"]}),o})();var h=r(5226),A=r.n(h),T=r(6743);const v=[{path:"",children:[{path:"login",component:f},{path:"registro",component:(()=>{class o{constructor(e,a,p){this.fb=e,this.artistService=a,this.router=p,this.iAgree=!1,this.myForm=this.fb.group({email:["",[n.kI.required]],password:["",[n.kI.required]]})}ngOnInit(){}validField(e){return this.myForm.controls[e].errors&&this.myForm.controls[e].touched}confirmArtist(){A().fire({position:"center",icon:"success",title:"Artista creado correctamente",showConfirmButton:!1,timer:4e3})}sendForm(){this.artistService.validateEmail(this.myForm.value).subscribe(()=>{this.router.navigateByUrl("auth/confirmacion"),console.log("despara confirm")})}test(){return this.iAgree=!0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(T.J),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registration"]],decls:50,vars:2,consts:[[2,"width","100%","height","100%","background-color","rgb(53, 53, 53)"],["fxLayoutAlign","end center","fxFlex","50"],["fxLayout","row rwap","fxLayoutAlign","space-between start",1,"container",2,"padding","20px"],["fxFlex","90","fxLayoutAlign","end center"],["routerLink","/home",2,"font-size","2.2vw","cursor","pointer"],["fxFlex","100",2,"margin-top","50px","padding","10px"],["routerLink",""],["id","form",3,"formGroup","ngSubmit"],["fxLayoutAlign","center center"],["appearance","outline","fxFlex","100"],["fxLayoutAlign","center",2,"font-size","1vw"],["matInput","","type","text","required","","formControlName","email",2,"font-size","1.3vw"],["fxLayoutAlign","center"],["matInput","","type","text","required","","formControlName","password",2,"font-size","1.3vw"],["fxLayout","row wrap","fxLayoutAlign","space-between center"],["fxFlex","100",1,"example-section"],["value","after",1,"example-margin",3,"click"],["fxLayoutAlign","center center",2,"margin-top","10px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit",2,"background-color","black","border-radius","30px","color","white","font-size","1vw",3,"disabled"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit","disabled","",2,"border-radius","30px"],[2,"color","blanchedalmond"],["fxLayout","row","fxLayoutAlign","start center",2,"margin-top","40px"],["fxFlex","100","mat-raised-button","","appearance","outline","type","submit","disabled","",2,"background-color","whitesmoke","border-radius","30px"],["src","assets/google.png","fxFlex","10","fxFlexOffset","18"],["fxFlex","50","fxLayoutAlign","end center"],["src","assets/clapLetter.png","alt",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-icon",4),t._uU(5,"close "),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"h1"),t.TgZ(8,"b"),t._uU(9,"Crea tu cuenta"),t.qZA(),t.qZA(),t.TgZ(10,"h2"),t._uU(11,"\xbfYa tienes una cuenta? "),t.TgZ(12,"a",6),t.TgZ(13,"b"),t._uU(14,"Inicia Sesi\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"form",7),t.NdJ("ngSubmit",function(){return a.sendForm()}),t.TgZ(16,"div",8),t.TgZ(17,"mat-form-field",9),t.TgZ(18,"mat-label",10),t._uU(19,"Correo electronico"),t.qZA(),t._UZ(20,"input",11),t.qZA(),t.qZA(),t.TgZ(21,"div",12),t.TgZ(22,"mat-form-field",9),t.TgZ(23,"mat-label",10),t._uU(24,"Contrase\xf1a"),t.qZA(),t._UZ(25,"input",13),t.qZA(),t.qZA(),t.TgZ(26,"div",14),t.TgZ(27,"div"),t.TgZ(28,"section",15),t.TgZ(29,"mat-radio-button",16),t.NdJ("click",function(){return a.test()}),t._uU(30,"He leido y acepto los"),t.TgZ(31,"a"),t._uU(32,"\xa0 "),t.TgZ(33,"b"),t._uU(34,"t\xe9rminos y condiciones"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",17),t.TgZ(36,"button",18),t._uU(37,"Crear cuenta"),t.qZA(),t.qZA(),t._UZ(38,"hr"),t.TgZ(39,"div",8),t.TgZ(40,"button",19),t.TgZ(41,"mat-label",20),t._uU(42,"Conectar con Linkedin"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",21),t.TgZ(44,"button",22),t._UZ(45,"img",23),t.TgZ(46,"mat-label"),t._uU(47," \xa0 Conectar con Google"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",24),t._UZ(49,"img",25),t.qZA(),t.qZA()),2&e&&(t.xp6(15),t.Q6J("formGroup",a.myForm),t.xp6(21),t.Q6J("disabled",!a.iAgree))},directives:[u.Wh,u.yH,u.xw,c.Hw,l.rH,l.yS,n._Y,n.JL,n.sg,g.KE,g.hX,m.Nt,n.Fj,n.Q7,n.JJ,n.u,x.U0,s.lW,u.UT],styles:["img[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;width:500px;height:600px;border-radius:20px;padding:10px}.mat-dialog-container[_ngcontent-%COMP%]{border-radius:40px!important;flex:1 1 auto}mat-form-field[_ngcontent-%COMP%]{font-size:.8em}mat-label[_ngcontent-%COMP%]{font-size:1.3em}.mat-raised-button[_ngcontent-%COMP%]{border-radius:30px;background-color:#b6b6b6}.buttonGroup[_ngcontent-%COMP%]{background-color:#b6b6b6;height:5em;border-radius:15px;box-shadow:10px 10px 29px -6px #575757d4;-webkit-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);-moz-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);margin-bottom:25px}hr[_ngcontent-%COMP%]{height:1px;width:100%;background-color:#adadad;box-shadow:10px 10px 29px -1px #575757;-webkit-box-shadow:10px 10px 29px -1px #575757;-moz-box-shadow:10px 10px 29px -1px #575757;margin-top:20px;margin-bottom:20px;opacity:.5}"]}),o})()},{path:"confirmacion",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-confirm-email"]],decls:16,vars:0,consts:[["fxLayoutAlign","center center",1,"backPage"],["fxFlex","30","fxLayout","row rwap","fxLayoutAlign","center space-between",1,"container",2,"padding","20px"],["fxFlex","90","fxLayoutAlign","end start"],["routerLink","/home",2,"font-size","2.2vw","cursor","pointer"],["fxFlex","100","fxLayoutAlign","center center"],[2,"font-size","2vw"],[2,"text-align","center"],["fxFlex","100","fxLayoutAlign","center",2,"margin-bottom","50px"],["fxFlex","60","mat-raised-button","","appearance","outline","type","submit",2,"background-color","black","border-radius","30px"],["routerLink","./home",2,"color","blanchedalmond"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-icon",3),t._uU(4,"close "),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"h1",5),t.TgZ(7,"b"),t._uU(8,"\xa1Te enviamos un correo!"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"mat-label",6),t._uU(11,' Presiona "reenviar" si no recibes un correo en los pr\xf3ximos 10 minutos'),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"button",8),t.TgZ(14,"mat-label",9),t._uU(15,"Cerrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[u.Wh,u.yH,u.xw,c.Hw,l.rH,g.hX,s.lW],styles:["img[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;height:20vw;border-radius:20px;padding:10px}.backPage[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#353535;background-image:url(circles.8c8da240b260cca6.png);background-repeat:no-repeat;background-position:center}.mat-dialog-container[_ngcontent-%COMP%]{border-radius:40px!important;flex:1 1 auto}mat-form-field[_ngcontent-%COMP%]{font-size:.8em}mat-label[_ngcontent-%COMP%]{font-size:1.3em}.mat-raised-button[_ngcontent-%COMP%]{border-radius:30px;background-color:#b6b6b6}.buttonGroup[_ngcontent-%COMP%]{background-color:#b6b6b6;height:5em;border-radius:15px;box-shadow:10px 10px 29px -6px #575757d4;-webkit-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);-moz-box-shadow:10px 10px 29px -6px rgba(87,87,87,.83);margin-bottom:25px}hr[_ngcontent-%COMP%]{height:1px;width:100%;background-color:#adadad;box-shadow:10px 10px 29px -1px #575757;-webkit-box-shadow:10px 10px 29px -1px #575757;-moz-box-shadow:10px 10px 29px -1px #575757;margin-top:20px;margin-bottom:20px;opacity:.5}"]}),o})()},{path:"**",redirectTo:"login"}]}];let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(v)],l.Bz]}),o})();var q=r(2155),C=r(928);let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[b.ez,y,C.q,q.o9,n.UX]]}),o})()}}]);