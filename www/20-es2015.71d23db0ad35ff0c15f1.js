(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{kWDs:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=u("jfHL"),t=u("ZZ/e");class i{constructor(l,n){this.userService=l,this.navCtrl=n}ngOnInit(){}ionViewWillEnter(){this.selectedCity="",this.getUserInfo()}getUserInfo(){const l=this.userService.getAuthUser().uid;this.userService.getUser(l).subscribe(l=>{this.selectedCity=l.city})}update(){const l=this.userService.getAuthUser().uid;console.log("userid ==> "+l),this.userService.getUser(l).subscribe(l=>{this.userService.updateUser({id:l.id,avatar:l.avatar,city:this.selectedCity,description:l.description,email:l.email,name:l.name,phone1:l.phone1,phone2:l.phone2,sectors:l.sectors,type:l.type}),this.navCtrl.pop()})}}class b{}var r=u("pMnS"),s=u("oBZk"),a=u("s7LF"),c=e.pb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,11,"ion-header",[],null,null,null,s.R,s.m)),e.qb(1,49152,null,0,t.A,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,s.jb,s.E)),e.qb(3,49152,null,0,t.Ab,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.K,s.f)),e.qb(5,49152,null,0,t.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","/config"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Db(l,8).onClick(u)&&o),o},s.H,s.c)),e.qb(7,49152,null,0,t.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.qb(8,16384,null,0,t.g,[[2,t.gb],t.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.rb(9,0,null,0,2,"ion-title",[],null,null,null,s.ib,s.D)),e.qb(10,49152,null,0,t.yb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Cities"])),(l()(),e.rb(12,0,null,null,47,"ion-content",[],null,null,null,s.O,s.j)),e.qb(13,49152,null,0,t.t,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,45,"ion-grid",[],null,null,null,s.Q,s.l)),e.qb(15,49152,null,0,t.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,36,"ion-row",[],null,null,null,s.X,s.s)),e.qb(17,49152,null,0,t.hb,[e.h,e.k,e.x],null,null),(l()(),e.rb(18,0,null,0,34,"ion-col",[["padding",""],["size","12"]],null,null,null,s.N,s.i)),e.qb(19,49152,null,0,t.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(20,0,null,0,32,"ion-item",[],null,null,null,s.V,s.q)),e.qb(21,49152,null,0,t.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(22,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,s.W,s.r)),e.qb(23,49152,null,0,t.M,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Hb(-1,0,["City"])),(l()(),e.rb(25,0,null,0,27,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Db(l,26)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Db(l,26)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.selectedCity=u)&&o),o},s.ab,s.u)),e.qb(26,16384,null,0,t.Lb,[e.k],null,null),e.Eb(1024,null,a.f,function(l){return[l]},[t.Lb]),e.qb(28,671744,null,0,a.j,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.g,null,[a.j]),e.qb(30,16384,null,0,a.h,[[4,a.g]],null,null),e.qb(31,49152,null,0,t.lb,[e.h,e.k,e.x],{selectedText:[0,"selectedText"]},null),(l()(),e.rb(32,0,null,0,2,"ion-select-option",[["value","New York"]],null,null,null,s.Z,s.v)),e.qb(33,49152,null,0,t.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["New York"])),(l()(),e.rb(35,0,null,0,2,"ion-select-option",[["value","Los Angeles"]],null,null,null,s.Z,s.v)),e.qb(36,49152,null,0,t.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Los Angeles"])),(l()(),e.rb(38,0,null,0,2,"ion-select-option",[["value","London"]],null,null,null,s.Z,s.v)),e.qb(39,49152,null,0,t.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["London"])),(l()(),e.rb(41,0,null,0,2,"ion-select-option",[["value","Paris"]],null,null,null,s.Z,s.v)),e.qb(42,49152,null,0,t.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Paris"])),(l()(),e.rb(44,0,null,0,2,"ion-select-option",[["value","S\xe3o Paulo"]],null,null,null,s.Z,s.v)),e.qb(45,49152,null,0,t.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["S\xe3o Paulo"])),(l()(),e.rb(47,0,null,0,2,"ion-select-option",[["value","Tokyo"]],null,null,null,s.Z,s.v)),e.qb(48,49152,null,0,t.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Tokyo"])),(l()(),e.rb(50,0,null,0,2,"ion-select-option",[["value","New Delhi"]],null,null,null,s.Z,s.v)),e.qb(51,49152,null,0,t.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["New Delhi"])),(l()(),e.rb(53,0,null,0,6,"ion-row",[],null,null,null,s.X,s.s)),e.qb(54,49152,null,0,t.hb,[e.h,e.k,e.x],null,null),(l()(),e.rb(55,0,null,0,4,"ion-col",[],null,null,null,s.N,s.i)),e.qb(56,49152,null,0,t.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(57,0,null,0,2,"ion-button",[["color","secondary"],["expand","full"],["shape","round"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.update()&&e),e},s.J,s.e)),e.qb(58,49152,null,0,t.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),e.Hb(-1,0,[" Update City "]))],function(l,n){var u=n.component;l(n,7,0,"/config"),l(n,8,0,"/config"),l(n,19,0,"12"),l(n,23,0,"dark"),l(n,28,0,u.selectedCity),l(n,31,0,u.selectedCity),l(n,33,0,"New York"),l(n,36,0,"Los Angeles"),l(n,39,0,"London"),l(n,42,0,"Paris"),l(n,45,0,"S\xe3o Paulo"),l(n,48,0,"Tokyo"),l(n,51,0,"New Delhi"),l(n,58,0,"secondary","full","round")},function(l,n){l(n,25,0,e.Db(n,30).ngClassUntouched,e.Db(n,30).ngClassTouched,e.Db(n,30).ngClassPristine,e.Db(n,30).ngClassDirty,e.Db(n,30).ngClassValid,e.Db(n,30).ngClassInvalid,e.Db(n,30).ngClassPending)})}function h(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-cities",[],null,null,null,d,c)),e.qb(1,114688,null,0,i,[o.a,t.Hb],null,null)],function(l,n){l(n,1,0)},null)}var v=e.nb("app-cities",i,h,{},{},[]),g=u("SVse"),p=u("iInd");u.d(n,"CitiesPageModuleNgFactory",function(){return k});var k=e.ob(b,[],function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[r.a,v]],[3,e.j],e.v]),e.Bb(4608,g.k,g.j,[e.s,[2,g.q]]),e.Bb(4608,a.n,a.n,[]),e.Bb(4608,t.b,t.b,[e.x,e.g]),e.Bb(4608,t.Gb,t.Gb,[t.b,e.j,e.p]),e.Bb(4608,t.Jb,t.Jb,[t.b,e.j,e.p]),e.Bb(1073742336,g.b,g.b,[]),e.Bb(1073742336,a.m,a.m,[]),e.Bb(1073742336,a.e,a.e,[]),e.Bb(1073742336,t.Cb,t.Cb,[]),e.Bb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),e.Bb(1073742336,b,b,[]),e.Bb(1024,p.k,function(){return[[{path:"",component:i}]]},[])])})}}]);