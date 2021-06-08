(this["webpackJsonpbasic-note-app"]=this["webpackJsonpbasic-note-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),o=(n(14),n(8)),i=n(2),l=n(9),d=n(0),j=function(e){var t=e.handleAddNote,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Enter Your Notes",value:s,onChange:function(e){200-e.target.value.length>=0&&r(e.target.value)}}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsxs)("small",{children:[200-s.length," Remaining"]}),Object(d.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),r(""))},children:"Save"})]})]})},u=n(5),b=function(e){var t=e.id,n=e.text,c=e.date,a=e.deleteNote;return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsxs)("span",{children:[" ",n]}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("small",{children:c}),Object(d.jsx)(u.a,{onClick:function(){return a(t)},className:"delete-icon",size:"1.5em"})]})]},t)},h=function(e){var t=e.notes,n=e.handleAddNote,c=e.deleteNote;return Object(d.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(d.jsx)(b,{id:e.id,text:e.text,date:e.date,deleteNote:c})})),Object(d.jsx)(j,{handleAddNote:n})]})},O=function(e){var t=e.handleSearch;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(u.b,{className:"search-icon",size:"1.3em"}),Object(d.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"Search Notes"})]})},x=function(e){var t=e.handleToggle;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Notes"}),Object(d.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"toggle-button",children:"Toggle Mode"})]})},f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),j=r[0],u=r[1],b=Object(c.useState)(!1),f=Object(i.a)(b,2),N=f[0],m=f[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-data"));e&&a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("react-notes-data",JSON.stringify(n))}),[n]),Object(d.jsx)("div",{className:"".concat(N&&"dark-mode"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(x,{handleToggle:m}),Object(d.jsx)(O,{handleSearch:u}),Object(d.jsx)(h,{notes:n.filter((function(e){return e.text.toLowerCase().includes(j)})),handleAddNote:function(e){var t=new Date,c={id:Object(l.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[c]);a(s)},deleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})]})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fb48a616.chunk.js.map