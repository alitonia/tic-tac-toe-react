(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(5),c=n.n(u),i=n(6),l=n(3);var o=function(e){return""===e.value?r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.handler(e.id)},className:"pure-button",style:{height:"10%",width:"8%",textAlign:"center"}},"\xa0"):r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.handler(e.id)},className:"pure-button",style:{height:"10%",width:"8%",textAlign:"center"}},e.value," ")},m=n(12);var s=function(e){var t=m.range(0,9,1).map((function(e){return{id:e,value:""}})),n=Object(a.useState)(t),u=Object(l.a)(n,2),c=u[0],s=u[1];Object(a.useEffect)((function(){y(k)}),[c]);var d=Object(a.useState)("x"),f=Object(l.a)(d,2),v=f[0],p=f[1],h=Object(a.useState)(""),g=Object(l.a)(h,2),E=g[0],y=g[1],b=function(e){switch(e){case"x":return 1;case"o":return-1;default:return 0}},k=function(){var e=[[0,1,2].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t})),[3,4,5].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t})),[6,7,8].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t})),[0,3,6].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t})),[1,4,7].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t})),[2,5,8].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t})),[0,4,8].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t})),[2,4,6].map((function(e){return b(c[e].value)})).reduce((function(e,t){return e+t}))];return e.includes(3)?"x":e.includes(-3)?"o":0===c.filter((function(e){return""===e.value})).length?"everyone":""},w=function(e){""===E&&""===c[e].value&&(p("x"===v?"o":"x"),s(Object(i.a)(c.map((function(t){return t.id===e?{id:e,value:v}:t})))))};return""===E?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginLeft:"1%"}},"Tic tac toe"),r.a.createElement("h4",{style:{marginLeft:"1.5%"}},"Turn: ",v),r.a.createElement("div",{className:"pure-g",style:{marginLeft:"1%"}},c.slice(0,3).map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,value:e.value,handler:w})}))),r.a.createElement("div",{className:"pure-g",style:{marginLeft:"1%"}},c.slice(3,6).map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,value:e.value,handler:w})}))),r.a.createElement("div",{className:"pure-g",style:{marginLeft:"1%"}},c.slice(6,9).map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,value:e.value,handler:w})})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginLeft:"0.5%"}},"TIC_TAC_TOE"),r.a.createElement("h4",{style:{marginLeft:"1.5%"}},"Turn: ",v),r.a.createElement("div",{className:"pure-g",style:{marginLeft:"1%"}},c.slice(0,3).map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,value:e.value,handler:w})}))),r.a.createElement("div",{className:"pure-g",style:{marginLeft:"1%"}},c.slice(3,6).map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,value:e.value,handler:w})}))),r.a.createElement("div",{className:"pure-g",style:{marginLeft:"1%"}},c.slice(6,9).map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,value:e.value,handler:w})}))),r.a.createElement("h3",{style:{marginLeft:"0.5%"}},"The winner is ",E),r.a.createElement("button",{className:"pure-button",style:{background:"#f1c5c5",marginLeft:"8%"},onClick:function(){return y(""),s(t),void p("x")}},"Reset"))};var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.a9749b45.chunk.js.map