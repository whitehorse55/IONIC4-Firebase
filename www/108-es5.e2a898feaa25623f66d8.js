(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{LoTI:function(e,n,i){"use strict";i.r(n),i.d(n,"mdTransitionAnimation",function(){return o});var o=function(e,n,i){var o="back"===i.direction,r=i.leavingEl,t=a(i.enteringEl),c=t.querySelector("ion-toolbar"),s=new e;if(s.addElement(t).beforeRemoveClass("ion-page-invisible"),o?s.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):s.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("translateY","40px","0px",!0).fromTo("opacity",.01,1,!0),c){var d=new e;d.addElement(c),s.add(d)}if(r&&o){s.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var u=new e;u.addElement(a(r)).fromTo("translateY","0px","40px").fromTo("opacity",1,0),s.add(u)}return Promise.resolve(s)},a=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}}}]);