(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=(n(12),n(2)),l=n.n(u),s=n(3),i=n(1);function m(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)(function(){function t(){return(t=Object(s.a)(l.a.mark(function t(){var n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("note list useeffect = ",e.query),t.next=4,fetch("api/getListeNotes/".concat(e.query||""));case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,o(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[e.updateNotes,e.userId,e.query]);var u=c.map(function(t){return r.a.createElement("div",{className:"note-item",key:t._id,onClick:function(){return e.onClick(t._id)}},r.a.createElement("div",null,r.a.createElement("h2",null,t.title),r.a.createElement("p",null,t.text)),r.a.createElement("div",null,r.a.createElement("div",{className:"date-day"},new Date(t.date_create).getDate()),r.a.createElement("div",{className:"date-month"},"".concat(new Date(t.date_create).getFullYear(),"-").concat(new Date(t.date_create).getMonth()+1))))});return r.a.createElement("div",{className:"note-list"},u)}var f=function(e){return r.a.createElement("select",{onChange:function(t){var n=t.target.value?"?date=".concat(t.target.value):"";e.setNoteListQuery(n)}},r.a.createElement("option",{value:"month",defaultValue:!0},"This month"),r.a.createElement("option",{value:"day"},"Today"),r.a.createElement("option",{value:"all"},"All"))};function p(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)([]),m=Object(i.a)(u,2),p=m[0],d=m[1];Object(a.useEffect)(function(){(function(){var e=Object(s.a)(l.a.mark(function e(){var t,n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/getNotesTitles");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.map(function(e){return e.title}),o(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[e.updateNotes]);return r.a.createElement("div",{className:"search"},r.a.createElement(f,{setNoteListQuery:e.setNoteListQuery}),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),p){var n="?title=".concat(p);e.setNoteListQuery(n),d("")}}},r.a.createElement("input",{list:"list-titles",placeholder:"Search Entries",value:p,onChange:function(e){d(e.target.value)}}),r.a.createElement("datalist",{id:"list-titles"},c.map(function(e,t){return r.a.createElement("option",{key:t,value:e})})),r.a.createElement("input",{type:"submit",value:"Search"})))}function d(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!1),m=Object(i.a)(u,2),f=m[0],p=m[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),v=b[0],O=(b[1],Object(a.useState)("")),h=Object(i.a)(O,2),E=h[0];h[1];Object(a.useEffect)(function(){(function(){var t=Object(s.a)(l.a.mark(function t(){var n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.noteId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch("api/getNote/".concat(e.noteId));case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,o(a),p(!1);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[e.updateNotes,e.noteId]);var j=function(){var t=Object(s.a)(l.a.mark(function t(n){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch("api/deleteNote/".concat(n));case 4:return a=t.sent,t.next=7,a.json();case 7:t.sent.noteId===n&&(o(null),e.refrech());case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(s.a)(l.a.mark(function t(n){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.updateOneNote({id:n,text:c.text,title:c.title});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("div",{className:"note-display"},r.a.createElement("h1",null,c.title),r.a.createElement("p",null,c.text),r.a.createElement("div",{className:"btn-tool-container"},!f&&r.a.createElement("button",{className:"btn btn-edit",onClick:function(){return N(e.noteId)}},"edit"),!f&&r.a.createElement("button",{className:"btn btn-delete",onClick:function(){return p(!0)}},"delete"),f&&r.a.createElement("button",{className:"btn btn-delete",onClick:function(){return j(e.noteId)}}," comfirm delete"),f&&r.a.createElement("button",{className:"btn btn-cancel",onClick:function(){return p(!1)}},"cancel"))),!c&&r.a.createElement("div",{className:"note-display"},r.a.createElement("h1",{className:"title"},v&&"Quote of the day"),r.a.createElement("p",{className:"quote-text"},v," "),r.a.createElement("h2",{className:"author"},E," ")))}function b(e){return r.a.createElement("div",{className:"nav"},r.a.createElement("h1",null,"Journey"),r.a.createElement("h2",null,e.username),r.a.createElement("a",{className:"btn",href:"/logout"},"Logout"))}function v(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"tool-bar",title:"add note"},r.a.createElement("button",{className:"btn-tool-add",onClick:function(){return e.newNote()}}),r.a.createElement("div",{className:"calendar-wraper"},r.a.createElement("button",{className:"btn-tool-calendar",onClick:function(){o(!c)}}),c&&r.a.createElement("input",{className:"calendar",type:"date",onChange:function(t){o(!1),console.log(t.target.value);var n=t.target.value?"?dateCalendar=".concat(t.target.value):"";e.setNoteListQuery(n)}})))}var O=n(4);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var E=function(e){var t=Object(a.useState)({title:e.title||"",text:e.text||""}),n=Object(i.a)(t,2),c=n[0],o=n[1],u=function(){var t=Object(s.a)(l.a.mark(function t(){var n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c.title&&c.text){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch("api/addNote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:c.title,text:c.text})});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,o({title:"",text:""}),e.closeNewNote(a.noteId);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(l.a.mark(function t(){var n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c.title&&c.text){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch("api/updateNote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({noteId:e.noteId,title:c.title,text:c.text})});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,o({title:"",text:""}),e.closeNewNote(a.noteId);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),f=function(e){var t=e.target,n=t.name,a=t.value;o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(O.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},c,Object(O.a)({},n,a)))};return r.a.createElement("div",{className:"new-note"},r.a.createElement("form",null,r.a.createElement("button",{className:"btn-close",onClick:function(){return e.closeNewNote()}}),r.a.createElement("h1",null,e.noteId?"Update note":"New note"),r.a.createElement("input",{name:"title",type:"text",placeholder:"title",required:!0,value:c.title,onChange:f}),r.a.createElement("textarea",{name:"text",required:!0,value:c.text,onChange:f}),!e.noteId&&r.a.createElement("input",{className:"btn",type:"button",value:"add note",onClick:u}),e.noteId&&r.a.createElement("input",{className:"btn",type:"button",value:"Update note",onClick:m})))};function j(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),u=Object(i.a)(o,2),f=u[0],O=u[1],h=Object(a.useState)(""),j=Object(i.a)(h,2),N=j[0],y=j[1],x=Object(a.useState)(),w=Object(i.a)(x,2),g=w[0],k=w[1],S=Object(a.useState)(),C=Object(i.a)(S,2),I=C[0],P=C[1],D=Object(a.useState)(),L=Object(i.a)(D,2),Q=L[0],q=L[1],T=Object(a.useState)(!1),J=Object(i.a)(T,2),_=J[0],U=J[1],B=Object(a.useState)(!1),F=Object(i.a)(B,2),W=F[0],A=F[1];Object(a.useEffect)(function(){(function(){var e=Object(s.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getUserInfos");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.username);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var M=function(){A(!W),y("")},V=function(e){y(e)};return r.a.createElement("div",null,r.a.createElement(b,{username:n}),r.a.createElement("div",{className:"container"},r.a.createElement(v,{newNote:function(){U(!0)},showNewNote:_,setNoteListQuery:V}),r.a.createElement("div",{className:"note-container"},r.a.createElement(p,{updateNotes:W,setNoteListQuery:V}),r.a.createElement(m,{onClick:function(e){O(e)},updateNotes:W,query:N})),r.a.createElement(d,{className:"display-note",noteId:f,refrech:M,updateOneNote:function(e){var t=e.id,n=e.text,a=e.title;t&&(k(t),P(n),q(a),U(!0),M())},updateNotes:W}),_&&r.a.createElement(E,{closeNewNote:function(e){U(!1),k(null),P(null),q(null),e&&(O(e),M())},noteId:g,text:I,title:Q})))}n(14);var N=function(){return r.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.2b83ecf3.chunk.js.map