(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{p0cD:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("jfHL"),i=function(){function n(n){this.userService=n,this.searchKey=""}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){this.loadCompanyList()},n.prototype.loadCompanyList=function(){var n=this;this.userService.getCompanies().subscribe(function(l){n.companyList=l,n.filteredCompany=n.companyList})},n.prototype.searchItems=function(){var n=this;this.filteredCompany=this.companyList.filter(function(l){return l.name.toLowerCase().indexOf(n.searchKey.toLowerCase())>-1})},n}(),u=function(){return function(){}}(),a=t("pMnS"),r=t("oBZk"),c=t("ZZ/e"),s=t("XEv7"),b=t("IkFj"),g=t("oONI"),p=t("Ip0R"),d=t("mrSG"),f=t("t4gJ"),h=function(){function n(n,l,t,o,e){this.offerService=n,this.trendingService=l,this.userService=t,this.toastCtrl=o,this.navCtrl=e,this.userId=t.getAuthUser().uid,this.isFollow=!1,this.currentFollowId=""}return Object.defineProperty(n.prototype,"company",{set:function(n){this.companyData=n,this.loadOfferList(n),this.checkFavorite(n.id)},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){},n.prototype.loadOfferList=function(n){var l=this;this.offerService.getOffersByCompany(n.id).subscribe(function(n){l.offerList=n})},n.prototype.checkFavorite=function(n){var l=this;this.trendingService.isFollow(this.userId,n).subscribe(function(n){n.length>0?(l.isFollow=!0,l.currentFollowId=n[0].id):l.isFollow=!1})},n.prototype.changeFollow=function(){var n={userId:this.userId,companyId:this.companyData.id};this.isFollow?(this.trendingService.deleteFollow(this.currentFollowId),this.showToast("Unfollowed this trade.")):(this.trendingService.addFollow(n),this.showToast("Followed this trade."))},n.prototype.showToast=function(n){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({showCloseButton:!0,message:n,duration:2e3,position:"bottom"})];case 1:return l.sent().present(),[2]}})})},n.prototype.gotoPrivateWall=function(){this.navCtrl.navigateForward("/privatewall",{state:{companyData:this.companyData}})},n}(),m=o.rb({encapsulation:0,styles:[["ion-slide[_ngcontent-%COMP%]{display:block!important}ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;display:-webkit-box;display:flex}ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin:0;text-transform:capitalize;padding:0 .5em;font-size:1.4rem}ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin:auto}ion-label[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}ion-item[_ngcontent-%COMP%]{padding:8px}ion-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{padding-right:0}ion-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:auto 0}ion-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .company_details[_ngcontent-%COMP%]{overflow:hidden}ion-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:40px}ion-card-content[_ngcontent-%COMP%]{padding:8px}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left}.company_details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:8px;margin-left:5px}#imageSlide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;margin-left:auto;margin-right:auto}.social-bar[_ngcontent-%COMP%]{margin-bottom:20px}.social-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:0 0}"]],data:{}});function C(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,1,"ion-icon",[["name","ios-add-circle-outline"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.changeFollow()&&o),o},r.S,r.n)),o.sb(1,49152,null,0,c.B,[o.h,o.k,o.z],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"ios-add-circle-outline")},null)}function y(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,1,"ion-icon",[["name","ios-remove-circle-outline"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.changeFollow()&&o),o},r.S,r.n)),o.sb(1,49152,null,0,c.B,[o.h,o.k,o.z],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"ios-remove-circle-outline")},null)}function v(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,3,"ion-slide",[],null,null,null,r.bb,r.w)),o.sb(1,49152,null,0,c.ob,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,1,"app-trade-item-detail",[],null,null,null,s.b,s.a)),o.sb(3,114688,null,0,b.a,[g.a,e.a],{offer:[0,"offer"]},null)],function(n,l){n(l,3,0,l.context.$implicit)},null)}function O(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,16,"div",[],[[8,"hidden",0]],null,null,null,null)),(n()(),o.tb(1,0,null,null,11,"ion-item",[["no-padding",""]],null,null,null,r.V,r.q)),o.sb(2,49152,null,0,c.G,[o.h,o.k,o.z],null,null),(n()(),o.tb(3,0,null,0,2,"ion-avatar",[],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.gotoPrivateWall()&&o),o},r.G,r.b)),o.sb(4,49152,null,0,c.e,[o.h,o.k,o.z],null,null),(n()(),o.tb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.tb(6,0,null,0,2,"div",[["class","company_details"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.gotoPrivateWall()&&o),o},null,null)),(n()(),o.tb(7,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(8,null,["",""])),(n()(),o.ib(16777216,null,0,1,null,C)),o.sb(10,16384,null,0,p.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.ib(16777216,null,0,1,null,y)),o.sb(12,16384,null,0,p.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.tb(13,0,null,null,3,"ion-slides",[["id","promotionSlide"],["pager","true"]],null,null,null,r.cb,r.x)),o.sb(14,49152,null,0,c.pb,[o.h,o.k,o.z],{pager:[0,"pager"]},null),(n()(),o.ib(16777216,null,0,1,null,v)),o.sb(16,278528,null,0,p.h,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,10,0,!t.isFollow),n(l,12,0,t.isFollow),n(l,14,0,"true"),n(l,16,0,t.offerList)},function(n,l){var t=l.component;n(l,0,0,!((null==t.offerList?null:t.offerList.length)>0)),n(l,5,0,o.xb(1,"",t.companyData.avatar?t.companyData.avatar:"assets/img/app_logo.png","")),n(l,8,0,t.companyData.name)})}var w=t("gIcY"),_=o.rb({encapsulation:0,styles:[[""]],data:{}});function M(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,3,"ion-card",[],null,null,null,r.M,r.g)),o.sb(1,49152,null,0,c.l,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,1,"app-trade-item",[],null,null,null,O,m)),o.sb(3,114688,null,0,h,[f.a,g.a,e.a,c.Nb,c.Hb],{company:[0,"company"]},null)],function(n,l){n(l,3,0,l.context.$implicit)},null)}function P(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,8,"ion-toolbar",[],null,null,null,r.jb,r.E)),o.sb(1,49152,null,0,c.Ab,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,6,"ion-searchbar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==o.Fb(n,3)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Fb(n,3)._handleInputEvent(t.target)&&e),"ngModelChange"===l&&(e=!1!==(i.searchKey=t)&&e),"ionChange"===l&&(e=!1!==i.searchItems()&&e),e},r.Y,r.t)),o.sb(3,16384,null,0,c.Mb,[o.k],null,null),o.Gb(1024,null,w.f,function(n){return[n]},[c.Mb]),o.sb(5,671744,null,0,w.j,[[8,null],[8,null],[8,null],[6,w.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,w.g,null,[w.j]),o.sb(7,16384,null,0,w.h,[[4,w.g]],null,null),o.sb(8,49152,null,0,c.ib,[o.h,o.k,o.z],null,null),(n()(),o.tb(9,0,null,null,3,"ion-content",[],null,null,null,r.O,r.j)),o.sb(10,49152,null,0,c.t,[o.h,o.k,o.z],null,null),(n()(),o.ib(16777216,null,0,1,null,M)),o.sb(12,278528,null,0,p.h,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,5,0,t.searchKey),n(l,12,0,t.filteredCompany)},function(n,l){n(l,2,0,o.Fb(l,7).ngClassUntouched,o.Fb(l,7).ngClassTouched,o.Fb(l,7).ngClassPristine,o.Fb(l,7).ngClassDirty,o.Fb(l,7).ngClassValid,o.Fb(l,7).ngClassInvalid,o.Fb(l,7).ngClassPending)})}function F(n){return o.Kb(0,[(n()(),o.tb(0,0,null,null,1,"app-trade",[],null,null,null,P,_)),o.sb(1,114688,null,0,i,[e.a],null,null)],function(n,l){n(l,1,0)},null)}var k=o.pb("app-trade",i,F,{},{},[]),D=t("j1ZV"),I=t("ZYCi");t.d(l,"TradePageModuleNgFactory",function(){return x});var x=o.qb(u,[],function(n){return o.Cb([o.Db(512,o.j,o.bb,[[8,[a.a,k]],[3,o.j],o.x]),o.Db(4608,p.k,p.j,[o.u,[2,p.q]]),o.Db(4608,w.n,w.n,[]),o.Db(4608,c.b,c.b,[o.z,o.g]),o.Db(4608,c.Gb,c.Gb,[c.b,o.j,o.q]),o.Db(4608,c.Jb,c.Jb,[c.b,o.j,o.q]),o.Db(1073742336,p.b,p.b,[]),o.Db(1073742336,w.m,w.m,[]),o.Db(1073742336,w.e,w.e,[]),o.Db(1073742336,c.Cb,c.Cb,[]),o.Db(1073742336,D.a,D.a,[]),o.Db(1073742336,I.o,I.o,[[2,I.t],[2,I.m]]),o.Db(1073742336,u,u,[]),o.Db(1024,I.k,function(){return[[{path:"",component:i}]]},[])])})}}]);