(this["webpackJsonpn-ra-hw.-9_router_crud"]=this["webpackJsonpn-ra-hw.-9_router_crud"]||[]).push([[0],{23:function(t,e,c){},24:function(t,e,c){},34:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),a=c(15),r=c.n(a),o=(c(23),c(5)),i=c(8),j=c(2),l=(c(24),c(14)),u=c(16);var b=s.a.createContext({}),d=c.p+"static/media/avatar.cf4d026d.jpg",h=c(1);function O(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{className:"img",children:Object(h.jsx)("img",{src:d,alt:"person"})}),Object(h.jsx)("h3",{className:"user",children:"Ivan Ivanov"})]})}function p(t){var e=t.post,c=Object(n.useContext)(b);return Object(h.jsx)(i.b,{to:"/posts/".concat(e.id),children:Object(h.jsxs)("li",{className:"card",onClick:function(){c.id=e.id,c.content=e.content,c.created=e.created},children:[Object(h.jsx)(O,{}),Object(h.jsx)("p",{className:"content",children:e.content})]})})}function x(){var t=function(t,e){var c=Object(n.useState)({data:null,error:null}),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){if(!t)return null;var c=function(){var c=Object(u.a)(Object(l.a)().mark((function c(){var n,s;return Object(l.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(t,e);case 3:return n=c.sent,c.next=6,n.json();case 6:s=c.sent,r({data:s}),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),r({error:c.t0});case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}}();c()}),[t]),a}("".concat("https://router-crud--backend.herokuapp.com","/posts")),e=t.data,c=t.error;return Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsx)("li",{className:"card card_btn",children:Object(h.jsx)(i.b,{to:"/posts/new",className:"btn",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),c&&Object(h.jsx)("li",{className:"error",children:"\u041e\u0448\u0438\u0431\u043a\u0430!"}),e&&e.map((function(t){return Object(h.jsx)(p,{post:t},t.id)}))]})}function m(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(!1),r=Object(o.a)(a,2),l=r[0],u=r[1];return Object(h.jsx)("div",{className:"postNew",children:Object(h.jsxs)("div",{className:"postNew_wrap",children:[Object(h.jsx)(i.b,{to:"/",className:"btn_close",children:"\u2716"}),Object(h.jsxs)("form",{className:"form",onSubmit:function(t){if(t.preventDefault(),c.trim()){var e={id:0,content:c};try{fetch("".concat("https://router-crud--backend.herokuapp.com","/posts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t})).then((function(t){s(""),u(!0)})).catch((function(t){return console.log(t)}))}catch(n){console.log(n)}}},children:[Object(h.jsx)("textarea",{className:"textarea",value:c,onChange:function(t){s(t.target.value)}}),Object(h.jsxs)("button",{type:"submit",className:"btn",children:["\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c",l?Object(h.jsx)(j.a,{to:"/"}):null]})]})]})})}function f(){var t=Object(n.useContext)(b),e=Object(n.useState)(!1),c=Object(o.a)(e,2),s=c[0],a=c[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1];return Object(h.jsx)("div",{className:"list",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)(O,{}),Object(h.jsx)("p",{className:"content",children:t.content}),Object(h.jsxs)("div",{className:"control",children:[Object(h.jsx)("button",{className:"btn",onClick:function(){u(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(h.jsx)("button",{className:"btn",onClick:function(){try{fetch("".concat("https://router-crud--backend.herokuapp.com","/posts/").concat(t.id),{method:"DELETE"}).then((function(t){return t})).then((function(t){return a(!0)})).catch((function(t){return console.log(t)}))}catch(e){console.log(e)}},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),s?Object(h.jsx)(j.a,{to:"/"}):null,l?Object(h.jsx)(j.a,{to:"/posts/edit"}):null]})]})})}function v(){var t=Object(n.useContext)(b),e=Object(n.useState)(t.content),c=Object(o.a)(e,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),u=l[0],d=l[1];return Object(h.jsx)("div",{className:"postNew",children:Object(h.jsxs)("div",{className:"postNew_wrap",children:[Object(h.jsxs)("div",{className:"postNew_header",children:[Object(h.jsx)("h2",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(h.jsx)(i.b,{to:"/posts/".concat(t.id),className:"btn_close",children:"\u2716"})]}),Object(h.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),s.trim()){var c={id:t.id,content:s};try{fetch("".concat("https://router-crud--backend.herokuapp.com","/posts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(t){return t})).then((function(t){a(""),d(!0)})).catch((function(t){return console.log(t)}))}catch(n){console.log(n)}}},children:[Object(h.jsx)("textarea",{className:"textarea",value:s,onChange:function(t){a(t.target.value)}}),Object(h.jsxs)("button",{type:"submit",className:"btn",children:["\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",u?Object(h.jsx)(j.a,{to:"/"}):null]})]})]})})}function N(){var t=Object(n.useState)({id:null,content:"",created:!1}),e=Object(o.a)(t,1)[0];return Object(h.jsx)(b.Provider,{value:e,children:Object(h.jsx)(i.a,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"/posts/new",component:m}),Object(h.jsx)(j.b,{path:"/posts/edit",component:v}),Object(h.jsx)(j.b,{path:"/posts/:id",component:f}),Object(h.jsx)(j.b,{path:"/",component:x})]})})})})}var g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.98421bb0.chunk.js.map