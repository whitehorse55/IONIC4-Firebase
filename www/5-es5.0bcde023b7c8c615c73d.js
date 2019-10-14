(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{NCOb:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),i=u("ZZ/e"),o=u("gIcY"),a=u("jfHL"),s=u("Pn9U"),r=u("y24p"),c=u("t8sF"),g=function(){function l(l,n,u,e,t,i,o,a,s,r){this.navCtrl=l,this.toastCtrl=n,this.alertCtrl=u,this.loadingCtrl=e,this.formBuilder=t,this.crop=i,this.camera=o,this.file=a,this.afs=s,this.userService=r,this.companyLogo="",this.croppedImagepath="",this.isLoading=!1,this.validationMessages={companyname:[{type:"required",message:"Company name is required"}],email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}],address:[{type:"required",message:"Address is required."}],city:[{type:"required",message:"City is required."}],phone1:[{type:"required",message:"Phone1 is required."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 5 characters long."}]}}return l.prototype.ngOnInit=function(){this.onCompanySingupForm=this.formBuilder.group({companyname:[null,o.l.compose([o.l.required])],address:[null,o.l.compose([o.l.required])],city:[null,o.l.compose([o.l.required])],email:[null,o.l.compose([o.l.required])],phone1:[null,o.l.compose([o.l.required])],phone2:[""],officetime:[""],password:[null,o.l.compose([o.l.required])]}),this.companyLogo="assets/img/app_logo.png",this.sectorsarray=[],this.selectedSectors=[],this.generateSectorsArray()},l.prototype.generateSectorsArray=function(){for(var l=0;l<17;l++)this.sectorsarray.push("sector"+l)},l.prototype.clickSector=function(l){this.selectedSectors.includes(l)?this.selectedSectors.splice(this.selectedSectors.indexOf(l),1):this.selectedSectors.push(l)},l.prototype.getImages=function(){var l=this;this.camera.getPicture({quality:50,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(function(n){l.cropImage(n)})},l.prototype.cropImage=function(l){var n=this;this.crop.crop(l,{quality:50}).then(function(l){n.showCroppedImage(l.split("?")[0])},function(l){alert("Error cropping image"+l)})},l.prototype.showCroppedImage=function(l){var n=this;this.isLoading=!0;var u=l.split("/"),e=u[u.length-1],t=l.split(e)[0];this.file.readAsDataURL(t,e).then(function(l){n.croppedImagepath=l,n.isLoading=!1},function(l){alert("Error in showing image"+l),n.isLoading=!1})},l.prototype.uploadImage=function(){var l=this;console.log(this.onCompanySingupForm),this.loadingCtrl.create({message:"Please wait..."}).then(function(l){l.present(),l.onDidDismiss().then(function(l){console.log("Loading dismissed!")})});var n="user/"+(new Date).getTime()+".jpg",u=this.afs.ref(n);u.putString(this.croppedImagepath,"data_url").then(function(){u.getDownloadURL().subscribe(function(n){l.uploadedFileUrl=n,l.doSignup()})})},l.prototype.doSignup=function(){var l=this,n=this.onCompanySingupForm.value;this.company={name:n.companyname,avatar:this.uploadedFileUrl,city:n.city,description:n.officetime,email:n.email,phone1:n.phone1,phone2:n.phone2,sectors:this.selectedSectors,type:"company"},this.userService.registerUser(n).then(function(n){console.log(n),l.loadingCtrl.dismiss(),l.userService.addUser(l.company,n.user.uid),l.navCtrl.navigateRoot("/home/trade")},function(n){return t.__awaiter(l,void 0,void 0,function(){return t.__generator(this,function(l){switch(l.label){case 0:return console.log(n),this.loadingCtrl.dismiss(),[4,this.alertCtrl.create({header:"Warning",subHeader:"Signup Failed",message:n.message,buttons:["OK"]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})})},l}(),b=function(){return function(){}}(),p=u("pMnS"),d=u("Ip0R"),m=u("oBZk"),h=u("VRER"),f=e.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg, var(--ion-color-primary-contrast), var(--ion-color-primary))}.list-form[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}ion-item[_ngcontent-%COMP%]{border-radius:5px;margin-top:10px}ion-item[_ngcontent-%COMP%]:first-child{margin-top:5vh}ion-item.item[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.4);margin-bottom:1px}ion-item.item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{width:10%;color:rgba(0,0,0,.6);font-size:1.2em}.sector-selector[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;width:30px}.sector-picker[_ngcontent-%COMP%]{margin-top:20px}.image-picker[_ngcontent-%COMP%]{margin-bottom:20px}.image-picker[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-top:20px;margin-bottom:10px;display:-webkit-inline-box;display:inline-flex}.image-picker[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:-4px}.image-picker[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:50%;margin-left:auto;margin-right:auto}#submitBtn[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:50px}"]],data:{}});function C(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Jb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function y(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,C)),e.sb(2,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.onCompanySingupForm.get("companyname").hasError(n.context.$implicit.type)&&(u.onCompanySingupForm.get("companyname").dirty||u.onCompanySingupForm.get("companyname").touched))},null)}function v(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Jb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function F(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,v)),e.sb(2,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.onCompanySingupForm.get("address").hasError(n.context.$implicit.type)&&(u.onCompanySingupForm.get("address").dirty||u.onCompanySingupForm.get("address").touched))},null)}function k(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Jb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function S(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,k)),e.sb(2,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.onCompanySingupForm.get("city").hasError(n.context.$implicit.type)&&(u.onCompanySingupForm.get("city").dirty||u.onCompanySingupForm.get("city").touched))},null)}function z(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Jb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function P(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,z)),e.sb(2,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.onCompanySingupForm.get("email").hasError(n.context.$implicit.type)&&(u.onCompanySingupForm.get("email").dirty||u.onCompanySingupForm.get("email").touched))},null)}function O(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Jb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function I(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,O)),e.sb(2,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.onCompanySingupForm.get("phone1").hasError(n.context.$implicit.type)&&(u.onCompanySingupForm.get("phone1").dirty||u.onCompanySingupForm.get("phone1").touched))},null)}function x(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"ion-icon",[["class","sector-selector"],["ios","ios-checkmark-circle"],["md","md-checkmark-circle"],["slot","icon-only"]],null,null,null,m.S,m.n)),e.sb(1,49152,null,0,i.B,[e.h,e.k,e.z],{ios:[0,"ios"],md:[1,"md"]},null)],function(l,n){l(n,1,0,"ios-checkmark-circle","md-checkmark-circle")},null)}function M(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,6,"ion-col",[["size","4"]],null,null,null,m.N,m.i)),e.sb(1,49152,null,0,i.s,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.tb(2,0,null,0,4,"ion-button",[["expand","fill"],["fill","clear"],["size","large"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.clickSector(l.context.$implicit)&&e),e},m.J,m.e)),e.sb(3,49152,null,0,i.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.ib(16777216,null,0,1,null,x)),e.sb(6,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,"4"),l(n,3,0,"fill","clear","large"),l(n,6,0,u.selectedSectors.includes(n.context.$implicit))},function(l,n){l(n,4,0,e.xb(1,"assets/img/",n.context.$implicit,".png"))})}function _(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Jb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function w(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,_)),e.sb(2,16384,null,0,d.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.onCompanySingupForm.get("password").hasError(n.context.$implicit.type)&&(u.onCompanySingupForm.get("password").dirty||u.onCompanySingupForm.get("password").touched))},null)}function B(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,155,"ion-content",[],null,null,null,m.O,m.j)),e.sb(1,49152,null,0,i.t,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,153,"form",[["class","list-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Fb(l,4).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,4).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.uploadImage()&&t),t},null,null)),e.sb(3,16384,null,0,o.p,[],null,null),e.sb(4,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Gb(2048,null,o.a,null,[o.d]),e.sb(6,16384,null,0,o.i,[[4,o.a]],null,null),(l()(),e.tb(7,0,null,null,10,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(8,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,1,"ion-icon",[["item-start",""],["name","people"]],null,null,null,m.S,m.n)),e.sb(10,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(11,0,null,0,6,"ion-input",[["formControlName","companyname"],["item-end",""],["placeholder","name"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,12)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,12)._handleInputEvent(u.target)&&t),t},m.U,m.p)),e.sb(12,16384,null,0,i.Mb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Mb]),e.sb(14,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(16,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(17,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.tb(18,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,y)),e.sb(20,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(21,0,null,null,10,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(22,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(23,0,null,0,1,"ion-icon",[["item-start",""],["name","locate"]],null,null,null,m.S,m.n)),e.sb(24,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(25,0,null,0,6,"ion-input",[["formControlName","address"],["item-end",""],["placeholder","Address"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,26)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,26)._handleInputEvent(u.target)&&t),t},m.U,m.p)),e.sb(26,16384,null,0,i.Mb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Mb]),e.sb(28,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(30,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(31,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.tb(32,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,F)),e.sb(34,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(35,0,null,null,32,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(36,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(37,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,m.W,m.r)),e.sb(38,49152,null,0,i.M,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.Jb(-1,0,["City"])),(l()(),e.tb(40,0,null,0,27,"ion-select",[["formControlName","city"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,41)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,41)._handleChangeEvent(u.target)&&t),t},m.ab,m.u)),e.sb(41,16384,null,0,i.Lb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Lb]),e.sb(43,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(45,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(46,49152,null,0,i.lb,[e.h,e.k,e.z],null,null),(l()(),e.tb(47,0,null,0,2,"ion-select-option",[["value","nes"]],null,null,null,m.Z,m.v)),e.sb(48,49152,null,0,i.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["New York"])),(l()(),e.tb(50,0,null,0,2,"ion-select-option",[["value","n64"]],null,null,null,m.Z,m.v)),e.sb(51,49152,null,0,i.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Los Angeles"])),(l()(),e.tb(53,0,null,0,2,"ion-select-option",[["value","ps"]],null,null,null,m.Z,m.v)),e.sb(54,49152,null,0,i.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["London"])),(l()(),e.tb(56,0,null,0,2,"ion-select-option",[["value","genesis"]],null,null,null,m.Z,m.v)),e.sb(57,49152,null,0,i.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Paris"])),(l()(),e.tb(59,0,null,0,2,"ion-select-option",[["value","saturn"]],null,null,null,m.Z,m.v)),e.sb(60,49152,null,0,i.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["S\xe3o Paulo"])),(l()(),e.tb(62,0,null,0,2,"ion-select-option",[["value","snes"]],null,null,null,m.Z,m.v)),e.sb(63,49152,null,0,i.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Tokyo"])),(l()(),e.tb(65,0,null,0,2,"ion-select-option",[["value","snes"]],null,null,null,m.Z,m.v)),e.sb(66,49152,null,0,i.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["New Delhi"])),(l()(),e.tb(68,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,S)),e.sb(70,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(71,0,null,null,10,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(72,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(73,0,null,0,1,"ion-icon",[["item-start",""],["name","mail"]],null,null,null,m.S,m.n)),e.sb(74,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(75,0,null,0,6,"ion-input",[["formControlName","email"],["item-end",""],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,76)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,76)._handleInputEvent(u.target)&&t),t},m.U,m.p)),e.sb(76,16384,null,0,i.Mb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Mb]),e.sb(78,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(80,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(81,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.tb(82,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,P)),e.sb(84,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(85,0,null,null,10,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(86,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(87,0,null,0,1,"ion-icon",[["item-start",""],["name","call"]],null,null,null,m.S,m.n)),e.sb(88,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(89,0,null,0,6,"ion-input",[["formControlName","phone1"],["item-end",""],["placeholder","Phone 1"],["type","tel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,90)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,90)._handleInputEvent(u.target)&&t),t},m.U,m.p)),e.sb(90,16384,null,0,i.Mb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Mb]),e.sb(92,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(94,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(95,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.tb(96,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,I)),e.sb(98,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(99,0,null,null,10,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(100,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(101,0,null,0,1,"ion-icon",[["item-start",""],["name","call"]],null,null,null,m.S,m.n)),e.sb(102,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(103,0,null,0,6,"ion-input",[["formControlName","phone2"],["item-end",""],["placeholder","Phone 2"],["type","tel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,104)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,104)._handleInputEvent(u.target)&&t),t},m.U,m.p)),e.sb(104,16384,null,0,i.Mb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Mb]),e.sb(106,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(108,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(109,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.tb(110,0,null,null,7,"div",[["class","sector-picker"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Select your sectors "])),(l()(),e.tb(112,0,null,null,5,"ion-grid",[],null,null,null,m.Q,m.l)),e.sb(113,49152,null,0,i.z,[e.h,e.k,e.z],null,null),(l()(),e.tb(114,0,null,0,3,"ion-row",[],null,null,null,m.X,m.s)),e.sb(115,49152,null,0,i.hb,[e.h,e.k,e.z],null,null),(l()(),e.ib(16777216,null,0,1,null,M)),e.sb(117,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(118,0,null,null,8,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(119,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(120,0,null,0,6,"ion-textarea",[["formControlName","officetime"],["item-end",""],["placeholder","Describe the opening hours"],["row","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,121)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,121)._handleInputEvent(u.target)&&t),t},m.hb,m.C)),e.sb(121,16384,null,0,i.Mb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Mb]),e.sb(123,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(125,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(126,49152,null,0,i.wb,[e.h,e.k,e.z],{placeholder:[0,"placeholder"]},null),(l()(),e.tb(127,0,null,null,9,"div",[["class","image-picker"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getImages()&&e),e},null,null)),(l()(),e.tb(128,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Select your company logo "])),(l()(),e.tb(130,0,null,null,3,"ion-fab-button",[["color","primary"],["size","small"]],null,null,null,m.P,m.k)),e.sb(131,49152,null,0,i.w,[e.h,e.k,e.z],{color:[0,"color"],size:[1,"size"]},null),(l()(),e.tb(132,0,null,0,1,"ion-icon",[["name","cloud-upload"]],null,null,null,m.S,m.n)),e.sb(133,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(134,0,null,null,2,"div",[["text-center",""]],null,null,null,null,null)),(l()(),e.tb(135,0,null,null,1,"ion-img",[],null,null,null,m.T,m.o)),e.sb(136,49152,null,0,i.C,[e.h,e.k,e.z],{src:[0,"src"]},null),(l()(),e.tb(137,0,null,null,10,"ion-item",[["no-padding",""]],null,null,null,m.V,m.q)),e.sb(138,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(l()(),e.tb(139,0,null,0,1,"ion-icon",[["item-start",""],["name","lock"]],null,null,null,m.S,m.n)),e.sb(140,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(141,0,null,0,6,"ion-input",[["formControlName","password"],["item-end",""],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,142)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,142)._handleInputEvent(u.target)&&t),t},m.U,m.p)),e.sb(142,16384,null,0,i.Mb,[e.k],null,null),e.Gb(1024,null,o.f,function(l){return[l]},[i.Mb]),e.sb(144,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),e.Gb(2048,null,o.g,null,[o.c]),e.sb(146,16384,null,0,o.h,[[4,o.g]],null,null),e.sb(147,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.tb(148,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,w)),e.sb(150,278528,null,0,d.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(151,0,null,null,4,"ion-button",[["color","dark"],["expand","full"],["icon-left",""],["id","submitBtn"],["shape","round"],["size","medium"],["tappable",""],["type","submit"]],null,null,null,m.J,m.e)),e.sb(152,49152,null,0,i.j,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],shape:[3,"shape"],size:[4,"size"],type:[5,"type"]},null),(l()(),e.tb(153,0,null,0,1,"ion-icon",[["name","log-in"]],null,null,null,m.S,m.n)),e.sb(154,49152,null,0,i.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.Jb(-1,0,[" Signup "]))],function(l,n){var u=n.component;l(n,4,0,u.onCompanySingupForm),l(n,10,0,"people"),l(n,14,0,"companyname"),l(n,17,0,"name","email"),l(n,20,0,u.validationMessages.companyname),l(n,24,0,"locate"),l(n,28,0,"address"),l(n,31,0,"Address","text"),l(n,34,0,u.validationMessages.address),l(n,38,0,"dark"),l(n,43,0,"city"),l(n,48,0,"nes"),l(n,51,0,"n64"),l(n,54,0,"ps"),l(n,57,0,"genesis"),l(n,60,0,"saturn"),l(n,63,0,"snes"),l(n,66,0,"snes"),l(n,70,0,u.validationMessages.city),l(n,74,0,"mail"),l(n,78,0,"email"),l(n,81,0,"Email","email"),l(n,84,0,u.validationMessages.email),l(n,88,0,"call"),l(n,92,0,"phone1"),l(n,95,0,"Phone 1","tel"),l(n,98,0,u.validationMessages.phone1),l(n,102,0,"call"),l(n,106,0,"phone2"),l(n,109,0,"Phone 2","tel"),l(n,117,0,u.sectorsarray),l(n,123,0,"officetime"),l(n,126,0,"Describe the opening hours"),l(n,131,0,"primary","small"),l(n,133,0,"cloud-upload"),l(n,136,0,""!=u.croppedImagepath?u.croppedImagepath:u.companyLogo),l(n,140,0,"lock"),l(n,144,0,"password"),l(n,147,0,"Password","password"),l(n,150,0,u.validationMessages.password),l(n,152,0,"dark",!u.onCompanySingupForm.valid,"full","round","medium","submit"),l(n,154,0,"log-in")},function(l,n){l(n,2,0,e.Fb(n,6).ngClassUntouched,e.Fb(n,6).ngClassTouched,e.Fb(n,6).ngClassPristine,e.Fb(n,6).ngClassDirty,e.Fb(n,6).ngClassValid,e.Fb(n,6).ngClassInvalid,e.Fb(n,6).ngClassPending),l(n,11,0,e.Fb(n,16).ngClassUntouched,e.Fb(n,16).ngClassTouched,e.Fb(n,16).ngClassPristine,e.Fb(n,16).ngClassDirty,e.Fb(n,16).ngClassValid,e.Fb(n,16).ngClassInvalid,e.Fb(n,16).ngClassPending),l(n,25,0,e.Fb(n,30).ngClassUntouched,e.Fb(n,30).ngClassTouched,e.Fb(n,30).ngClassPristine,e.Fb(n,30).ngClassDirty,e.Fb(n,30).ngClassValid,e.Fb(n,30).ngClassInvalid,e.Fb(n,30).ngClassPending),l(n,40,0,e.Fb(n,45).ngClassUntouched,e.Fb(n,45).ngClassTouched,e.Fb(n,45).ngClassPristine,e.Fb(n,45).ngClassDirty,e.Fb(n,45).ngClassValid,e.Fb(n,45).ngClassInvalid,e.Fb(n,45).ngClassPending),l(n,75,0,e.Fb(n,80).ngClassUntouched,e.Fb(n,80).ngClassTouched,e.Fb(n,80).ngClassPristine,e.Fb(n,80).ngClassDirty,e.Fb(n,80).ngClassValid,e.Fb(n,80).ngClassInvalid,e.Fb(n,80).ngClassPending),l(n,89,0,e.Fb(n,94).ngClassUntouched,e.Fb(n,94).ngClassTouched,e.Fb(n,94).ngClassPristine,e.Fb(n,94).ngClassDirty,e.Fb(n,94).ngClassValid,e.Fb(n,94).ngClassInvalid,e.Fb(n,94).ngClassPending),l(n,103,0,e.Fb(n,108).ngClassUntouched,e.Fb(n,108).ngClassTouched,e.Fb(n,108).ngClassPristine,e.Fb(n,108).ngClassDirty,e.Fb(n,108).ngClassValid,e.Fb(n,108).ngClassInvalid,e.Fb(n,108).ngClassPending),l(n,120,0,e.Fb(n,125).ngClassUntouched,e.Fb(n,125).ngClassTouched,e.Fb(n,125).ngClassPristine,e.Fb(n,125).ngClassDirty,e.Fb(n,125).ngClassValid,e.Fb(n,125).ngClassInvalid,e.Fb(n,125).ngClassPending),l(n,141,0,e.Fb(n,146).ngClassUntouched,e.Fb(n,146).ngClassTouched,e.Fb(n,146).ngClassPristine,e.Fb(n,146).ngClassDirty,e.Fb(n,146).ngClassValid,e.Fb(n,146).ngClassInvalid,e.Fb(n,146).ngClassPending)})}function E(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"app-companysignup",[],null,null,null,B,f)),e.sb(1,114688,null,0,g,[i.Hb,i.Nb,i.a,i.Eb,o.b,r.a,s.a,c.a,h.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var D=e.pb("app-companysignup",g,E,{},{},[]),q=u("ZYCi");u.d(n,"CompanysignupPageModuleNgFactory",function(){return L});var L=e.qb(b,[],function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[p.a,D]],[3,e.j],e.x]),e.Db(4608,d.k,d.j,[e.u,[2,d.q]]),e.Db(4608,o.n,o.n,[]),e.Db(4608,i.b,i.b,[e.z,e.g]),e.Db(4608,i.Gb,i.Gb,[i.b,e.j,e.q]),e.Db(4608,i.Jb,i.Jb,[i.b,e.j,e.q]),e.Db(4608,o.b,o.b,[]),e.Db(1073742336,d.b,d.b,[]),e.Db(1073742336,o.m,o.m,[]),e.Db(1073742336,o.e,o.e,[]),e.Db(1073742336,i.Cb,i.Cb,[]),e.Db(1073742336,o.k,o.k,[]),e.Db(1073742336,q.o,q.o,[[2,q.t],[2,q.m]]),e.Db(1073742336,b,b,[]),e.Db(1024,q.k,function(){return[[{path:"",component:g}]]},[])])})}}]);