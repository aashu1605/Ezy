(this.webpackJsonpayushi=this.webpackJsonpayushi||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),i=c.n(s),a=c(27),o=c.n(a),r=(c(34),c(35),c(36),c(13)),j=c(3),d=c(11),l=c(10),b=c.n(l),u=c(18),h=function(e){return Object(n.jsx)(u.a,{children:Object(n.jsx)(u.a.Body,{children:Object(n.jsx)("h5",{class:"card-title",children:e.title})})})},O=Object(j.e)((function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){c&&0===c.length&&b.a.get("https://jsonplaceholder.typicode.com/posts/").then((function(e){var t=e.data;i(t)}))})),Object(n.jsx)("div",{className:"row",children:c&&c.map((function(e){return Object(n.jsx)(r.b,{to:"/posts/"+e.id,children:Object(n.jsx)(h,{title:e.title,id:e.id,body:e.body,userId:e.userId})})}))})}));var p=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:e.name}),Object(n.jsx)("p",{children:e.email}),Object(n.jsx)("p",{children:e.body})]})};var f=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:e.title}),Object(n.jsxs)("strong",{children:["Id = ",e.id]}),Object(n.jsx)("p",{children:e.body})]})};var m=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:e.name}),Object(n.jsxs)("strong",{children:["Id = ",e.username]}),Object(n.jsx)("p",{children:e.email})]})};function x(e){var t,c=e.match.params.id,i=Object(s.useState)({}),a=Object(d.a)(i,2),o=a[0],r=a[1],j=Object(s.useState)([]),l=Object(d.a)(j,2),u=l[0],h=l[1],O=Object(s.useState)([]),x=Object(d.a)(O,2),g=x[0],y=x[1];return Object(s.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/posts/"+c).then((function(e){var t=e.data;r(t)}))}),[]),Object(s.useEffect)((function(){o.id&&0==u.length&&b.a.get("https://jsonplaceholder.typicode.com/posts/"+c+"/comments").then((function(e){h(e.data)}))}),[o]),t=u.filter((function(e){return!(e.id!=c)})),console.log("array1",t),Object(s.useEffect)((function(){o.id&&0==g.length&&b.a.get("https://jsonplaceholder.typicode.com/users/"+c).then((function(e){y(e.data)}))}),[u]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(f,{title:o.title,id:o.id,body:o.body}),Object(n.jsx)(p,{name:t[0].name,email:t[0].email,body:t[0].body}),Object(n.jsx)(m,{name:g.name,username:g.username,email:g.email})]})}var g=function(e){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(r.a,{children:[console.log(e.match),Object(n.jsx)(j.a,{exact:!0,path:"/",component:O}),Object(n.jsx)(j.a,{exact:!0,path:"/posts/:id",component:x})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.182c6dcd.chunk.js.map