(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cvJE:function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),t=e("jfHL"),r=e("oONI"),i=e("t4gJ"),o=function(){function n(n,l,e){this.userService=n,this.trendingService=l,this.offerService=e,this.searchKey="",this.offerList=[],this.filterdOffer=[],this.userId=n.getAuthUser().uid,this.loadFavoriteList()}return n.prototype.ngOnInit=function(){},n.prototype.loadFavoriteList=function(){var n=this;this.trendingService.getFavoritesByUser(this.userId).subscribe(function(l){l.forEach(function(l){n.offerService.getOffer(l.offerId).subscribe(function(l){n.offerList.push(l),n.filterdOffer.push(l)})})})},n.prototype.searchItems=function(){var n=this;this.filterdOffer=this.offerList.filter(function(l){return l.companyName.toLowerCase().indexOf(n.searchKey.toLowerCase())>-1||l.description.toLowerCase().indexOf(n.searchKey.toLowerCase())>-1})},n}(),s=function(){return function(){}}(),b=e("pMnS"),a=e("oBZk"),f=e("ZZ/e"),c=e("r6gA"),h=e("OM4W"),g=e("gIcY"),d=e("Ip0R"),p=u.rb({encapsulation:0,styles:[[""]],data:{}});function v(n){return u.Kb(0,[(n()(),u.tb(0,0,null,null,3,"ion-card",[],null,null,null,a.M,a.g)),u.sb(1,49152,null,0,f.l,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,1,"app-offer-item",[],null,null,null,c.b,c.a)),u.sb(3,114688,null,0,h.a,[],{offer:[0,"offer"]},null)],function(n,l){n(l,3,0,l.context.$implicit)},null)}function C(n){return u.Kb(0,[(n()(),u.tb(0,0,null,null,8,"ion-toolbar",[],null,null,null,a.jb,a.E)),u.sb(1,49152,null,0,f.Ab,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,6,"ion-searchbar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,e){var t=!0,r=n.component;return"ionBlur"===l&&(t=!1!==u.Fb(n,3)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Fb(n,3)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(r.searchKey=e)&&t),"ionChange"===l&&(t=!1!==r.searchItems()&&t),t},a.Y,a.t)),u.sb(3,16384,null,0,f.Mb,[u.k],null,null),u.Gb(1024,null,g.f,function(n){return[n]},[f.Mb]),u.sb(5,671744,null,0,g.j,[[8,null],[8,null],[8,null],[6,g.f]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,g.g,null,[g.j]),u.sb(7,16384,null,0,g.h,[[4,g.g]],null,null),u.sb(8,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(9,0,null,null,3,"ion-content",[],null,null,null,a.O,a.j)),u.sb(10,49152,null,0,f.t,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,v)),u.sb(12,278528,null,0,d.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,5,0,e.searchKey),n(l,12,0,e.filterdOffer)},function(n,l){n(l,2,0,u.Fb(l,7).ngClassUntouched,u.Fb(l,7).ngClassTouched,u.Fb(l,7).ngClassPristine,u.Fb(l,7).ngClassDirty,u.Fb(l,7).ngClassValid,u.Fb(l,7).ngClassInvalid,u.Fb(l,7).ngClassPending)})}function F(n){return u.Kb(0,[(n()(),u.tb(0,0,null,null,1,"app-favorites",[],null,null,null,C,p)),u.sb(1,114688,null,0,o,[t.a,r.a,i.a],null,null)],function(n,l){n(l,1,0)},null)}var D=u.pb("app-favorites",o,F,{},{},[]),m=e("j1ZV"),y=e("ZYCi");e.d(l,"FavoritesPageModuleNgFactory",function(){return O});var O=u.qb(s,[],function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[b.a,D]],[3,u.j],u.x]),u.Db(4608,d.k,d.j,[u.u,[2,d.q]]),u.Db(4608,g.n,g.n,[]),u.Db(4608,f.b,f.b,[u.z,u.g]),u.Db(4608,f.Gb,f.Gb,[f.b,u.j,u.q]),u.Db(4608,f.Jb,f.Jb,[f.b,u.j,u.q]),u.Db(1073742336,d.b,d.b,[]),u.Db(1073742336,g.m,g.m,[]),u.Db(1073742336,g.e,g.e,[]),u.Db(1073742336,f.Cb,f.Cb,[]),u.Db(1073742336,m.a,m.a,[]),u.Db(1073742336,y.o,y.o,[[2,y.t],[2,y.m]]),u.Db(1073742336,s,s,[]),u.Db(1024,y.k,function(){return[[{path:"",component:o}]]},[])])})}}]);