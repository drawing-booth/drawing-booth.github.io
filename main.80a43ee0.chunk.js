(this["webpackJsonpdrawning-booth"]=this["webpackJsonpdrawning-booth"]||[]).push([[0],{259:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(16),i=n.n(a),c={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},o=function(e){var t=e.changedTouches[0],n=e.type,r=c[n],a=document.createEvent("MouseEvent");a.initMouseEvent(r,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(a),e.preventDefault()};document.addEventListener("touchstart",o,!0),document.addEventListener("touchmove",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0);var s=n(83),u=n(324),l=n(117),d=n(26),b=n(29),h=n(38),j=n(77),f=n(76),O=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(){this.props.onError&&this.props.onError()}},{key:"render",value:function(){return this.state.hasError?this.props.ErrorPlaceholder:this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(r.Component);O.defaultProps={ErrorPlaceholder:null};var v=O,g=n(73),m=n(17),p=n(5),x=n(74),w=n.n(x),y=n(317),k=n(314),C=n(315),S=n(88),E=n(267),N=n(268),D=n(269),T=n(316),B=n(318),I=n(262),R=n(197),F=n(69),H=n(176),P=n.n(H),L=n(183),W=n.n(L),z=n(182),A=n.n(z),M=n(181),J=n.n(M),q=n(179),X=n.n(q),_=n(180),G=n.n(_),Y=n(178),U=n.n(Y),$=n(177),V=n.n($),Z=n(141),K=n(89),Q=n(128),ee=n.n(Q),te=n(6),ne=Object(Z.a)({root:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"5px",minHeight:"125px"},logo:{fontSize:"45px"}}),re=function(){var e=ne();return Object(te.jsxs)("div",{className:e.root,children:[Object(te.jsx)(S.a,{children:Object(te.jsx)(ee.a,{className:e.logo})}),Object(te.jsx)(K.a,{children:"DrawningBooth"})]})},ae=n(46),ie=n.n(ae),ce=Object(Z.a)((function(e){return{root:{zIndex:999,"& header.MuiPaper-root":{transition:"background 250ms"}},noHeaderElevation:{"& header.MuiPaper-root":{boxShadow:"none"}},stretch:{flexGrow:1},appBarCollapsed:{background:e.palette.background.paper,color:e.palette.getContrastText(e.palette.background.paper)},appBar:{background:"transparent",color:"white"},offset:e.mixins.toolbar,hide:{display:"none"}}})),oe=function(){var e=document.createElement("a");e.href="https://www.behance.net/tripolskypetr",e.target="_blank",e.click()},se=function(e){var t,n=e.children,a=e.pages,i=void 0===a?[]:a,c=e.className,o=e.style,s=e.drawningStore,u=Object(r.useState)(!1),l=Object(p.a)(u,2),d=l[0],b=l[1],h=Object(r.useState)(null),j=Object(p.a)(h,2),f=j[0],O=j[1],v=Object(r.useState)(null),x=Object(p.a)(v,2),H=x[0],L=x[1],z=Object(r.useState)(!1),M=Object(p.a)(z,2),q=M[0],_=M[1],Y=ce();Object(r.useEffect)((function(){var e=setInterval((function(){var e=null!==document.fullscreenElement;q!==e&&_(e)}),1e3);return function(){return clearInterval(e)}}),[q]);var $=Object(g.c)().navigate,Z=function(e){return function(){b(!1),$(e)}},K=s.isReverse,Q=s.isDrawningBlocked,ee=s.brushColor,ne=s.brushSize,ae=function(){O(null)},ie=function(){L(null)},se=function(e){return function(){s.setBrushSize(e),ie()}},ue=function(e){return function(){s.setBrushColor(e),ae()}};return Object(te.jsxs)("div",{className:w()(Y.root,Object(m.a)({},Y.noHeaderElevation,!s.isHeaderCollapsed),c),children:[Object(te.jsx)(k.a,{}),Object(te.jsxs)(C.a,{open:d,onClose:function(){return b(!1)},children:[Object(te.jsx)(re,{}),Object(te.jsx)(E.a,{style:{minWidth:"240px"},children:i.map((function(e,t){var n=e.icon,a=e.name,i=e.label;return Object(te.jsxs)(N.a,{button:!0,onClick:Z(a),children:[Object(te.jsx)(D.a,{children:Object(r.createElement)(n)}),Object(te.jsx)(T.a,{primary:i})]},t)}))})]}),Object(te.jsx)(y.a,{className:w()((t={},Object(m.a)(t,Y.appBarCollapsed,s.isHeaderCollapsed),Object(m.a)(t,Y.appBar,!s.isHeaderCollapsed),t)),position:"fixed",style:o,children:Object(te.jsxs)(B.a,{children:[Object(te.jsx)(S.a,{color:"inherit",onClick:function(){return b(!d)},children:Object(te.jsx)(P.a,{})}),Object(te.jsx)("div",{className:Y.stretch}),Object(te.jsx)(S.a,{color:"inherit",onClick:function(){q?document.exitFullscreen():document.documentElement.requestFullscreen()},children:q?Object(te.jsx)(V.a,{}):Object(te.jsx)(U.a,{})}),Object(te.jsx)(S.a,{color:"inherit","aria-controls":"color-menu","aria-haspopup":"true",disabled:Q,style:{color:ee||"white"},onClick:function(e){var t=e.currentTarget;O(t)},children:Object(te.jsx)(X.a,{})}),Object(te.jsxs)(R.a,{id:"color-menu",anchorEl:f,keepMounted:!0,open:!!f,onClose:ae,children:[Object(te.jsx)(F.a,{disabled:"red"===ee,onClick:ue("red"),children:"Red"}),Object(te.jsx)(F.a,{disabled:"green"===ee,onClick:ue("green"),children:"Green"}),Object(te.jsx)(F.a,{disabled:"blue"===ee,onClick:ue("blue"),children:"Blue"})]}),Object(te.jsx)(S.a,{color:"inherit","aria-controls":"size-menu","aria-haspopup":"true",disabled:Q,onClick:function(e){var t=e.currentTarget;L(t)},children:Object(te.jsx)(G.a,{})}),Object(te.jsxs)(R.a,{id:"size-menu",anchorEl:H,keepMounted:!0,open:!!H,onClose:ie,children:[Object(te.jsx)(F.a,{disabled:"small"===ne,onClick:se("small"),children:"Small"}),Object(te.jsx)(F.a,{disabled:"medium"===ne,onClick:se("medium"),children:"Medium"}),Object(te.jsx)(F.a,{disabled:"high"===ne,onClick:se("high"),children:"High"})]}),Object(te.jsx)(S.a,{color:"inherit",disabled:Q,onClick:function(){return s.setIsForceClear(!0)},children:Object(te.jsx)(J.a,{})}),Object(te.jsx)(S.a,{color:"inherit",disabled:Q,onClick:function(){return s.setIsReverse(!K)},children:Object(te.jsx)(A.a,{})}),Object(te.jsx)(S.a,{color:"inherit",onClick:oe,children:Object(te.jsx)(W.a,{})})]})}),Object(te.jsx)(I.a,{in:s.isHeaderCollapsed,children:Object(te.jsx)("div",{className:Y.offset})}),Object(te.jsx)("div",{children:n})]})};se.displayName="Scaffold";var ue=ie()(Object(d.b)((function(e){return{drawningStore:e.drawningStore}})),d.c)(se),le=n(196),de=n(194),be=n.n(de),he=n(32),je=n(58),fe=function e(t,n){var r=this;Object(b.a)(this,e),this.target=t,this.onDispose=n,this.subscribers=[],this.observer=void 0,this.disposeTimeout=null,this.subscribe=function(e){r.subscribers.push(e),r.clearTimeout()},this.unsubscribe=function(e){r.subscribers=r.subscribers.filter((function(t){return t!==e})),r.clearTimeout(),r.tryDispose()},this.broadcast=function(){r.subscribers.forEach((function(e){return e()}))},this.clearTimeout=function(){null!==r.disposeTimeout&&clearTimeout(r.disposeTimeout)},this.tryDispose=function(){r.disposeTimeout=setTimeout((function(){0===r.subscribers.length&&(r.observer.unobserve(r.target),r.observer.disconnect(),r.onDispose())}),1e4)},this.observer=new ResizeObserver(this.broadcast),this.observer.observe(this.target)},Oe=function e(t){var n=t.defaultHeight,a=void 0===n?0:n,i=t.defaultWidth,c=void 0===i?0:i,o=t.onResize,s=void 0===o?function(){return null}:o,u=t.disableHeight,l=void 0!==u&&u,d=t.disableWidth,b=void 0!==d&&d,h=t.heightRequest,j=void 0===h?function(e){return e}:h,f=t.widthRequest,O=void 0===f?function(e){return e}:f,v=t.style,g=void 0===v?{}:v,m=t.className,x=t.children,w=t.target,y=t.delay,k=void 0===y?100:y,C=Object(r.useRef)(null),S=Object(r.useState)({height:a,width:c}),E=Object(p.a)(S,2),N=E[0],D=E[1];Object(r.useLayoutEffect)((function(){var t,n=C.current.parentElement,r=w||n,a=function(){var e=r.getBoundingClientRect(),t=e.height,n=e.width,a=getComputedStyle(r);n-=parseFloat(a.paddingLeft),n-=parseFloat(a.paddingRight),t-=parseFloat(a.paddingTop),t-=parseFloat(a.paddingBottom),t=j(t),n=O(n);var i=N.height!==t;(i=i||N.width!==n)&&(D({height:t,width:n}),s({height:t,width:n}))},i=e._emitters;i.has(r)?t=i.get(r):(t=new fe(r,(function(){i.delete(r)})),i.set(r,t));var c=Object(je.a)(a,k);return t.subscribe(c),a(),function(){t.unsubscribe(c)}}),[l,b,j,O,N,k,s]);var T=N.height,B=N.width,I={height:T,width:B},R={height:T,width:B};return l&&delete I.height,b&&delete I.width,Object(te.jsx)("div",{className:m,ref:C,style:Object(he.a)(Object(he.a)({},I),g),children:x(R)})};Oe._emitters=new WeakMap;var ve=Oe,ge=n(67),me=n.n(ge),pe=n(107),xe=Object(Z.a)({root:{display:"flex",alignItems:"center",justifyContent:"center"},content:{marginTop:"-15vh"}}),we=function(e){var t=e.height,n=e.width,r=xe();return Object(te.jsx)("div",{className:r.root,style:{height:t,width:n},children:Object(te.jsxs)("div",{className:r.content,children:[Object(te.jsx)(K.a,{variant:"h4",children:"Camera permission denied"}),Object(te.jsx)(K.a,{variant:"body1",children:"You have blocked camera access. To go drawing, please update your browser settings to allow access"})]})})},ye=n(11),ke=Object(Z.a)({root:{}}),Ce=ie()(Object(d.b)((function(e){return{drawningStore:e.drawningStore}})),d.c)((function(e){var t=e.height,n=e.width,a=e.drawningStore,i=Object(r.useRef)(null),c=Object(r.useRef)(null),o=Object(r.useState)(!1),s=Object(p.a)(o,2),u=s[0],l=s[1],d=Object(r.useState)(a.isReverse),b=Object(p.a)(d,2),h=b[0],j=b[1],f=ke(),O=Object(r.useCallback)((function(){var e=c.current;e&&(e.translate(n,0),e.scale(-1,1))}),[n]);return Object(r.useEffect)((function(){var e=null;return function(){var r=Object(pe.a)(me.a.mark((function r(){var o,s,u,d;return me.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(o=i.current)){r.next=28;break}return r.prev=2,r.next=5,navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{min:0,max:n},height:{min:0,max:t}}});case 5:return s=r.sent,(u=document.createElement("video")).setAttribute("height",t.toString()),u.setAttribute("width",n.toString()),u.style.objectFit="cover",u.srcObject=s,r.next=13,new Promise((function(e){u.onloadedmetadata=function(){u.play(),e()}}));case 13:d=o.getContext("2d"),c.current=d,h&&0!==n&&0!==t&&(d.translate(n,0),d.scale(-1,1)),function r(){s.active&&(d.clearRect(0,0,n,t),d.drawImage(u,0,0,n,t),e=requestAnimationFrame(r))}(),r.next=28;break;case 20:if(r.prev=20,r.t0=r.catch(2),"NotAllowedError"!==r.t0.name){r.next=27;break}a.setIsDrawningBlocked(!0),l(!0),r.next=28;break;case 27:throw r.t0;case 28:case"end":return r.stop()}}),r,null,[[2,20]])})));return function(){return r.apply(this,arguments)}}()(),function(){null!==e&&cancelAnimationFrame(e)}}),[t,n]),Object(r.useLayoutEffect)((function(){var e=Object(ye.g)((function(){a.isReverse!==h&&(j(a.isReverse),O())}));return function(){return e()}}),[O,h]),u?Object(te.jsx)(we,{height:t,width:n}):Object(te.jsx)("canvas",{className:f.root,ref:i,height:t,width:n})})),Se=Object(Z.a)({root:{position:"absolute",top:0,left:0,right:0,bottom:0}}),Ee=function(){var e=Se();return Object(te.jsx)(ve,{className:e.root,target:document.body,children:function(e){var t=e.height,n=e.width;return Object(te.jsx)(Ce,{height:t,width:n})}})},Ne=Object(Z.a)({root:{position:"absolute",top:0,left:0,right:0,bottom:0},container:{display:"flex",flexDirection:"row-reverse"},fade:{background:"linear-gradient(\n            to right,\n            #0000,\n            #000\n        )",marginRight:-5}}),De=ie()(Object(d.b)((function(e){return{drawningStore:e.drawningStore}})),d.c)((function(e){var t=e.drawningStore,n=Ne(),r=t.fadeWidth,a=t.isDrawningBlocked;return Object(te.jsx)(ve,{className:n.root,target:document.body,children:function(e){var t=e.height,i=e.width;return Object(te.jsx)("div",{className:n.container,style:{height:t,width:i},children:!a&&Object(te.jsx)("div",{className:n.fade,style:{height:t,width:"".concat(r,"px")}})})}})})),Te=n(184),Be=Object(Z.a)({root:{position:"absolute",top:0,left:0,right:0,bottom:0},canvas:{}}),Ie={small:2,medium:3,high:4},Re=ie()(Object(d.b)((function(e){return{drawningStore:e.drawningStore}})),d.c)((function(e){var t=e.height,n=e.width,a=e.drawningStore,i=Be(),c=a.brushColor,o=a.brushSize,s=a.isForceClear;return Object(r.useLayoutEffect)((function(){var e=Object(ye.g)((function(){a.isForceClear&&setTimeout((function(){return a.setIsForceClear(!1)}))}));return function(){return e()}}),[]),s?null:Object(te.jsx)(Te.a,{className:i.canvas,style:{height:t,width:n},width:"".concat(n,"px"),height:"".concat(t,"px"),strokeWidth:Ie[o]||2,strokeColor:c,background:"transparent"})})),Fe=Object(Z.a)({root:{position:"absolute",top:0,left:0,right:0,bottom:0}}),He=function(){var e=Fe();return Object(te.jsx)(ve,{className:e.root,target:document.body,children:function(e){var t=e.height,n=e.width;return Object(te.jsx)(Re,{height:t,width:n})}})},Pe=Object(Z.a)({root:{position:"relative"}}),Le=function(e){var t=e.drawningStore,n=Pe();return Object(r.useEffect)((function(){return t.setIsHeaderCollapsed(!1),function(){t.dispose()}}),[]),Object(te.jsxs)("div",{className:n.root,children:[Object(te.jsx)(Ee,{}),Object(te.jsx)(De,{}),Object(te.jsx)(He,{})]})};Le.displayName="DrawningPage";var We=ie()(Object(d.b)((function(e){return{drawningStore:e.drawningStore}})),d.c)(Le),ze=n(147),Ae=n(326),Me=n(198),Je=n(327),qe=n(320),Xe=n(79),_e=n(325),Ge=["onBack","onSave","currentTitle","backwardTitle","saveLabel","saveDisabled","className"],Ye=Object(Z.a)({root:{display:"flex",alignItems:"center",justifyContent:"stretch",flexDirection:"row",paddingTop:"10px",paddingBottom:"10px"},stretch:{flexGrow:1,shrink:1}}),Ue=function(e){var t=e.onBack,n=e.onSave,r=e.currentTitle,a=void 0===r?"Card":r,i=e.backwardTitle,c=void 0===i?"List":i,o=e.saveLabel,s=void 0===o?"Save":o,u=e.saveDisabled,l=void 0===u||u,d=e.className,b=void 0===d?"":d,h=Object(Me.a)(e,Ge),j=Ye();return Object(te.jsxs)(qe.a,Object(he.a)(Object(he.a)({className:w()(j.root,b)},h),{},{children:[Object(te.jsxs)(Je.a,{className:j.stretch,"aria-label":"breadcrumb",children:[Object(te.jsx)(_e.a,{color:"inherit",onClick:t,children:c}),Object(te.jsx)(K.a,{color:"textPrimary",children:a})]}),Object(te.jsx)(Xe.a,{disabled:l,variant:"contained",color:"primary",onClick:n,children:s})]}))};Ue.displayName="Breadcrumbs";var $e=Ue,Ve=Object(Z.a)({root:{paddingTop:"20vh"}}),Ze=function(){var e=Ve();return Object(te.jsx)("div",{className:e.root})},Ke=[{type:ze.a.Text,inputType:"number",name:"fadeWidth",title:"Fade width",description:"Right fade width",defaultValue:"200"}],Qe=function(e){var t=e.drawningStore,n=Object(r.useState)(void 0),a=Object(p.a)(n,2),i=a[0],c=a[1],o=Object(r.useState)(!0),s=Object(p.a)(o,2),u=s[0],d=s[1],b=Object(l.b)().enqueueSnackbar;Object(r.useEffect)((function(){return t.setIsHeaderCollapsed(!0),function(){t.dispose()}}),[]);return Object(te.jsxs)(Ae.a,{children:[Object(te.jsx)($e,{backwardTitle:"DrawningBooth",currentTitle:"SettingsPage",onSave:function(){try{var e=i.fadeWidth;t.setFadeWidth(e),b("Saved"),d(!1)}catch(n){b("Config save failed"),console.error(n)}},saveDisabled:!u}),Object(te.jsx)(ze.b,{fields:Ke,invalidity:function(e){b(e),d(!1)},change:function(e,t){c(e),d(!t)},handler:i}),Object(te.jsx)(Ze,{})]})};Qe.displayName="SettingsPage";var et=ie()(Object(d.b)((function(e){return{drawningStore:e.drawningStore}})),d.c)(Qe),tt=function(e){return e.replace(/[A-Z]/g,(function(e){return" ".concat(e)}))},nt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.displayName||"UnknownPage",r=tt(n),a="/".concat(n);return{name:n,path:a,label:r,icon:t,component:e}},rt=[nt(We,ee.a,"DrawningPage"),nt(et,be.a,"SettingsPage")],at=Object(le.a)(rt);at.start();var it=n(319),ct="DrawningPage",ot=rt.map((function(e,t){return[e.name,t]})).reduce((function(e,t){var n=Object(p.a)(t,2),r=n[0],a=n[1];return Object(he.a)(Object(he.a)({},e),{},Object(m.a)({},r,a))}),{}),st=function(e){var t=e.onAnimationEnd,n=e.children,r=e.className,a=e.style;return Object(te.jsx)(it.a,{onAnimationEnd:t,className:r,style:a,item:!0,xs:!0,sm:!0,md:!0,lg:!0,xl:!0,children:Object(te.jsx)(it.a,{container:!0,children:n})})},ut=Object(Z.a)((function(e){return{moveLeft:{animation:"$moveLeftEnter 500ms ".concat(e.transitions.easing.easeInOut)},moveRight:{animation:"$moveRightEnter 500ms ".concat(e.transitions.easing.easeInOut)},"@keyframes moveLeftEnter":{"0%":{transform:"translateX(-200%)",opacity:0},"100%":{transform:"translateX(0)",opacity:1}},"@keyframes moveRightEnter":{"0%":{transform:"translateX(200%)",opacity:0},"100%":{transform:"translateX(0)",opacity:1}}}})),lt=function(e){var t,n=e.defaultPage,a=Object(r.useState)(!1),i=Object(p.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)(!1),u=Object(p.a)(s,2),l=u[0],d=u[1],b=Object(g.b)().route,h=Object(g.c)(),j=ut();Object(r.useEffect)((function(){var e=h.useMiddleware((function(){return function(e,t,n){var r=(e||{}).name,a=void 0===r?ct:r,i=(t||{}).name,c=void 0===i?ct:i,s=ot[a],u=ot[c];u===s||(u>s?o(!0):d(!0)),n()}}));return function(){return e()}}),[]);var f=b||{},O=f.name,v=void 0===O?n:O,x=f.params,y=void 0===x?{}:x,k=function(e){return rt.find((function(t){return t.name===e})).component}(v);return Object(te.jsx)(st,{className:w()((t={},Object(m.a)(t,j.moveLeft,c),Object(m.a)(t,j.moveRight,l),t)),onAnimationEnd:function(){o(!1),d(!1)},children:Object(te.jsx)(k,Object(he.a)({},y))})};var dt=function(){return Object(te.jsx)(g.a,{router:at,children:Object(te.jsx)(ue,{pages:rt,children:Object(te.jsx)(lt,{defaultPage:ct})})})},bt=function(){return Object(te.jsx)(qe.a,{p:1,children:Object(te.jsx)(K.a,{variant:"h4",children:"It looks like app was crashed :-("})})},ht=n(105),jt=n(68),ft=n(25),Ot=function(e,t){return new(function(){function n(){Object(b.a)(this,n)}return Object(h.a)(n,[{key:"mutations",get:function(){return JSON.parse(localStorage.getItem(e)||"[]")},set:function(t){localStorage.setItem(e,JSON.stringify(t))}},{key:"stringify",value:function(e){try{return JSON.stringify(e)}catch(t){return console.warn(t),""}}},{key:"log",value:function(e){this.mutations=[this.stringify(e)].concat(Object(ft.a)(this.mutations.slice(0,t-1)))}}]),n}())},vt=function(e){return Object.entries(Object(ye.r)(e)).filter((function(e){var t=Object(p.a)(e,2);return Object(jt.a)(t[0]),"function"!==typeof t[1]})).reduce((function(e,t){var n=Object(p.a)(t,2),r=n[0],a=n[1];return Object(he.a)(Object(he.a)({},e),{},Object(m.a)({},r,a))}),{})},gt=function(e){return e.filter((function(e){return!function(e){var t=[];return function e(n){if(n&&"object"===typeof n){if(-1!==t.indexOf(n))return!0;for(var r in t.push(n),n)if(n.hasOwnProperty(r)&&e(n[r]))return!0}return!1}(e)}(e)}))},mt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"unset-log-key",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,r=Ot(t,n);Object(ye.q)((function(t){"action"===t.type&&r.log({snapshot:vt(e),args:gt(t.arguments),name:t.name})}))},pt="BOOTH_LAST_STATE",xt=["fadeWidth","isReverse","brushSize","brushColor"],wt=new(function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,[{key:"getData",value:function(){try{var e=localStorage.getItem(pt)||"{}",t=JSON.parse(e);return Object.entries(t).filter((function(e){var t=Object(p.a)(e,1)[0];return xt.includes(t)})).reduce((function(e,t){var n=Object(p.a)(t,2),r=n[0],a=n[1];return Object(he.a)(Object(he.a)({},e),{},Object(m.a)({},r,a))}),{})}catch(n){return console.log("stateManager broken data"),{}}}},{key:"setData",value:function(e){var t=Object.entries(e).filter((function(e){var t=Object(p.a)(e,1)[0];return xt.includes(t)})).reduce((function(e,t){var n=Object(p.a)(t,2),r=n[0],a=n[1];return Object(he.a)(Object(he.a)({},e),{},Object(m.a)({},r,a))}),{}),n=JSON.stringify(t,null,2);localStorage.setItem(pt,n)}}]),e}()),yt=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).fadeWidth="650",e.isReverse=!1,e.brushSize="small",e.brushColor="green",e.isHeaderCollapsed=!1,e.isDrawningBlocked=!1,e.isForceClear=!1,Object(ye.n)(Object(ht.a)(e),{setFadeWidth:ye.f.bound,setIsDrawningBlocked:ye.f.bound,setIsHeaderCollapsed:ye.f.bound,setIsForceClear:ye.f.bound,setBrushSize:ye.f.bound,setBrushColor:ye.f.bound,setIsReverse:ye.f.bound,dispose:ye.f.bound,isHeaderCollapsed:ye.o,isDrawningBlocked:ye.o,isReverse:ye.o,isForceClear:ye.o,brushSize:ye.o,brushColor:ye.o,fadeWidth:ye.o}),mt(Object(ht.a)(e),"BOOTH_DRAWNING",50),e.restoreChanges(),window.addEventListener("beforeunload",(function(){e.flushChanges()}),!1),e}return Object(h.a)(n,[{key:"setBrushSize",value:function(e){this.brushSize=e}},{key:"setBrushColor",value:function(e){this.brushColor=e}},{key:"setIsHeaderCollapsed",value:function(e){this.isHeaderCollapsed=e}},{key:"setIsDrawningBlocked",value:function(e){this.isDrawningBlocked=e}},{key:"setIsReverse",value:function(e){this.isReverse=e}},{key:"setIsForceClear",value:function(e){this.isForceClear=e}},{key:"setFadeWidth",value:function(e){this.fadeWidth=e}},{key:"dispose",value:function(){this.isHeaderCollapsed=!1,this.isDrawningBlocked=!1,this.flushChanges()}}]),n}(function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,[{key:"restoreChanges",value:function(){var e=this;Object.entries(wt.getData()).forEach((function(t){var n=Object(p.a)(t,2),r=n[0],a=n[1];return e[r]=a}))}},{key:"flushChanges",value:function(){wt.setData(this)}}]),e}()),kt=Object(s.a)({palette:{type:"dark",primary:{main:"#f48fb1"},secondary:{main:"#90cbf9"},text:{primary:"#fff",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)"},background:{paper:"#424242",default:"#212121"}}}),Ct=(Object(s.a)({palette:{type:"light",primary:{main:"#1976d2"},secondary:{main:"#1976d2"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},background:{default:"#fff",paper:"#f5f5f5"}}}),new yt);i.a.render(Object(te.jsx)(v,{ErrorPlaceholder:Object(te.jsx)(bt,{}),children:Object(te.jsx)(u.a,{theme:kt,children:Object(te.jsx)(l.a,{maxSnack:15,children:Object(te.jsx)(d.a,{drawningStore:Ct,children:Object(te.jsx)(dt,{})})})})}),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.80a43ee0.chunk.js.map