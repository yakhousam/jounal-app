(window.webpackJsonpauth=window.webpackJsonpauth||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),s=n.n(o),c=(n(11),n(1)),u=n.n(c),i=n(3),l=n(2);var p=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(""),c=Object(l.a)(s,2),p=c[0],m=c[1],d=Object(a.useState)(!0),h=Object(l.a)(d,2),w=h[0],f=h[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),b=g[0],E=g[1],y=function(e){var t=e.target,n=t.name,a=t.value;"username"===n&&o(a),"password"===n&&m(a)},j=function(){var e=Object(i.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.location.replace("/auth/github");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(u.a.mark(function e(t){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n,p),e.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:p})});case 4:if(200!==(a=e.sent).status){e.next=12;break}return e.next=8,a.json();case 8:return r=e.sent,console.log("login user id =",r.userId),window.location.replace("/"),e.abrupt("return");case 12:if(400!==a.status){e.next=14;break}return e.abrupt("return",E("Bad request"));case 14:401===a.status?E("uername or password invalid"):E("Internal server error");case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(u.a.mark(function e(t){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/register",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:p})});case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,console.log("res.status=",a.status),201===a.status&&(console.log("new user registred"),window.location.replace("/")),400===a.status&&E(r.error),500===a.status&&E(r.error);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"social-login"},r.a.createElement("h1",null,"Social Authentication"),r.a.createElement("div",{className:"btn-wraper"},r.a.createElement("button",{onClick:j},w?"Login":"Register"," with github")),r.a.createElement("div",null)),r.a.createElement("div",{className:"local-login"},r.a.createElement("h1",null,"Local Authentication"),r.a.createElement("form",{onSubmit:w?O:k},b&&r.a.createElement("div",null,b),r.a.createElement("input",{name:"username",type:"text",placeholder:"username",value:n,onChange:y}),r.a.createElement("input",{name:"password",type:"password",placeholder:"password",value:p,onChange:y}),r.a.createElement("input",{type:"submit",value:w?"Login":"Register"}),w&&r.a.createElement("p",null,"Don't have an account yet? Please"," ",r.a.createElement("span",{onClick:function(){f(!w)}},"Register")),!w&&r.a.createElement("p",null,"Do you have an account? Please"," ",r.a.createElement("span",{onClick:function(){f(!w)}},"Login")))))};var m=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.1fe2186e.chunk.js.map