(this.webpackJsonpAshishPatel=this.webpackJsonpAshishPatel||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),l=a.n(n),o=(a(9),a.p,a(10),a(2)),r=a(0);function i(e){return e.alert&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:e.alert.message})})}function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:"TextUtility"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:"About"})})]}),Object(r.jsx)("form",{className:"d-flex",children:Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",onChange:e.toggleMode,id:"toggleMode"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"toggleMode",children:"light"===e.mode?"Toggle Mode To Dark":"Toggle Mode To Light"})]})})]})]})})}function b(e){return Object(r.jsx)("button",{className:"btn btn-sm btn-primary mt-2 mx-1",onClick:e.event,children:e.name})}function j(e){return Object(r.jsx)("div",{className:"col-sm-12 mt-2",children:Object(r.jsx)("div",{className:"card",style:e.style,children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:e.name}),Object(r.jsx)("a",{href:"/",className:"btn btn-primary",children:e.count})]})})})}function u(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),d=i[0],u=i[1],m=Object(c.useState)(!1),h=Object(o.a)(m,2),O=h[0],x=h[1],p=Object(c.useState)(!1),v=Object(o.a)(p,2),g=v[0],f=v[1],N=Object(c.useState)(!1),k=Object(o.a)(N,2),w=k[0],y=k[1],C=Object(c.useState)(!1),T=Object(o.a)(C,2),A=T[0],S=T[1],F=Object(c.useState)(0),L=Object(o.a)(F,2),M=L[0],P=L[1],I=Object(c.useState)(0),U=Object(o.a)(I,2),D=U[0],E=U[1],z=function(e){n(e.target.value),P(d.length),E(d.split(" ").length),g?J():O?B():w?W():A?V():u(e.target.value)},B=function(){x(!0),f(!1),y(!1),S(!1),u(s.toUpperCase()),e.showAlert("success","Text has been set to upper case")},J=function(){x(!1),f(!0),y(!1),S(!1),u(s.toLocaleLowerCase()),e.showAlert("success","Text has been set to lower case")},V=function(){x(!1),f(!1),y(!1),S(!0);var t=s.split(/[ ]+/);u(t.join(" ")),e.showAlert("success","Extra spaces has been removed.")},W=function(){x(!1),f(!1),y(!0),S(!1);var t=s.split(" ");t=(t=t.map((function(e,t){return e.charAt(0).toUpperCase()+e.slice(1)}))).join(" "),u(t),e.showAlert("success","Each letter of all the words has been capitalized.")};return Object(r.jsx)("div",{className:"container mt-3",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-sm-5",children:[Object(r.jsx)("h1",{children:"Input:"}),Object(r.jsx)("textarea",{className:"form-control mt-3",placeholder:"Please provide your input...",rows:"8",onChange:z,style:{backgroundColor:"dark"===e.mode?"#8e8b9f":"white",color:"dark"===e.mode?"white":"black"},onPaste:z,defaultValue:s}),Object(r.jsx)(b,{name:"To Upper Case",event:B}),Object(r.jsx)(b,{name:"To Lower Case",event:J}),Object(r.jsx)(b,{name:"Word Capitalize",event:W}),Object(r.jsx)(b,{name:"Trim",event:V}),Object(r.jsx)(b,{name:"Copy Text",event:function(){s&&(navigator.clipboard.writeText(s),e.showAlert("success","Original text has been copied in clipboard."))}})]}),Object(r.jsxs)("div",{className:"col-sm-2 mt-5",children:[Object(r.jsx)(j,{name:"Characters Count",style:{color:"dark"===e.mode?"#534d6e":"black"},count:M}),Object(r.jsx)(j,{name:"Words Count",style:{color:"dark"===e.mode?"#534d6e":"black"},count:D})]}),Object(r.jsxs)("div",{className:"col-sm-5 mt-2",children:[Object(r.jsx)("h1",{children:"Output:"}),Object(r.jsx)("textarea",{className:"form-control",placeholder:"Output...",rows:"8",readOnly:!0,style:{backgroundColor:"dark"===e.mode?"#8e8b9f":"white",color:"dark"===e.mode?"white":"black"},defaultValue:d}),Object(r.jsx)(b,{name:"Copy Text",event:function(){navigator.clipboard.writeText(d),e.showAlert("success","Formatted text has been copied in clipboard")}}),Object(r.jsx)(b,{name:"Clear All",event:function(){u(""),e.showAlert("success","Formatted text has been cleared.")}})]})]})})}function m(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),l=Object(o.a)(n,2),b=l[0],j=l[1],m=function(e,t){j({type:e,message:t}),setTimeout((function(){j(null),setInterval((function(){document.title="Alert Activated"}),2e3)}),2e3),setInterval((function(){document.title="Yeah!"}),1e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#534d6e",document.body.style.color="white",m("success","Dark mode has been activated.")):(s("light"),document.body.style.backgroundColor="white",document.body.style.color="black",m("success","Light mode has been activated."))}}),Object(r.jsx)(i,{alert:b}),Object(r.jsx)(u,{mode:a,showAlert:m})]})}var h=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m,{})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),O()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.d89d3bf0.chunk.js.map