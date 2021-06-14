(this["webpackJsonpmichael-cote"]=this["webpackJsonpmichael-cote"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(8),r=c.n(i),n=c(2),o=["JavaScript","TypeScript","HTML5","CSS3","C#","Python"].concat(["Angular","React","SASS","Bootstrap","Node"].concat(["Firebase","MySQL","MongoDB"].concat(["VSCode","GitHub","Azure devOps","SQL workbench","PostMan","Adobe"]))),l=c(0),d=function(e){var t=e.darkMode,c=e.primaryColor,i=e.isBlueActive,r=e.isGreenActive,n=e.isOrangeActive;return Object(s.useEffect)((function(){console.log("skills?",o)}),[]),Object(l.jsx)(a.a.Fragment,{children:Object(l.jsxs)("div",{className:"col col-sm-12",children:[Object(l.jsxs)("div",{className:"self-wrap row",children:[Object(l.jsxs)("div",{className:"self-img col-lg-6",children:[Object(l.jsx)("span",{className:"back-1"}),Object(l.jsx)("span",{className:"back-2"})]}),Object(l.jsxs)("div",{className:"self-text col-lg-6 mt-5",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("i",{className:"fa fa-globe","aria-hidden":"true"})," hello world"]}),Object(l.jsx)("p",{children:"i'm michael, a software developer in Seattle."})]})]}),Object(l.jsxs)("div",{className:"stats-wrap row",children:[Object(l.jsx)("div",{className:"git-card col-lg-6",children:t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=dark&icon_color=".concat(c.substring(1),"&border_color=444444&bg_color=444444&text_color=E1E1E1&title_color=").concat(c.substring(1)),alt:"stats"}),Object(l.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=dark&border_color=444444&bg_color=444444&text_color=E1E1E1",alt:"langs"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&icon_color=".concat(c.substring(1),"&theme=graywhite&border_color=e4ebf5&bg_color=e4ebf5"),alt:"stats"}),Object(l.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=greywhite&border_color=e4ebf5&bg_color=e4ebf5",alt:"langs"})]})}),Object(l.jsxs)("div",{className:"role-card col-lg-6",children:[Object(l.jsxs)("div",{className:"role-title",children:[i&&Object(l.jsx)("div",{className:"angular blue"}),r&&Object(l.jsx)("div",{className:"angular green"}),n&&Object(l.jsx)("div",{className:"angular"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"current role: "}),Object(l.jsx)("p",{className:"sub",children:"software developer @"})]})]}),Object(l.jsxs)("div",{className:"role-body",children:[Object(l.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://videonet.us/",children:["videonet holdings\xa0",Object(l.jsx)("i",{className:"fa fa-external-link-square","aria-hidden":"true"})]}),Object(l.jsx)("div",{className:"quote",children:Object(l.jsx)("small",{children:"We are building secure business solutions using modern communication tools like videoconferencing, live streaming and real-time screen sharing."})}),Object(l.jsxs)("div",{className:"quote via3",children:[Object(l.jsx)("small",{children:"check out our platform:"}),Object(l.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://unity.via3.com/",children:["via3\xa0",Object(l.jsx)("i",{className:"fa fa-external-link-square","aria-hidden":"true"})]})]})]})]})]}),Object(l.jsx)("div",{className:"skills-wrap row",children:o&&o.map((function(e,t){return"TypeScript"===e||"Angular"===e||"SASS"===e?Object(l.jsx)("div",{className:"skill-badge key",children:e},t):Object(l.jsx)("div",{className:"skill-badge",children:e},t)}))})]})})},u=function(e){var t=e.darkMode,c=e.primaryColor,s=e.isBlueActive,i=e.isGreenActive,r=e.isOrangeActive;return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)("div",{id:"about",className:"row",style:{minHeight:"100vh"},children:Object(l.jsx)(d,{darkMode:t,primaryColor:c,isBlueActive:s,isGreenActive:i,isOrangeActive:r})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"break-section"})}),Object(l.jsxs)("div",{id:"projects",className:"row",style:{minHeight:"100vh"},children:[Object(l.jsx)("p",{children:"Projects"}),Object(l.jsx)("small",{children:"\ud83d\udea7 in dev..."})]}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"break-section"})}),Object(l.jsxs)("div",{id:"education",className:"row",style:{minHeight:"100vh"},children:[Object(l.jsx)("p",{children:"Education"}),Object(l.jsx)("small",{children:"\ud83d\udea7 in dev..."})]})]})},j=c(9),b=c.n(j),m=function(e){var t=e.darkMode,c=e.handleDarkMode,a=e.setColorMode,i=e.isBlueActive,r=e.isGreenActive,n=e.isOrangeActive,o=b()({borderFloatClass:"abo-select",isAboutActive:"active",isProjectsActive:"",isEducationActive:""}),d=function(){var e=document.getElementById("projects").offsetTop-300,t=document.getElementById("education").offsetTop-300,c=+window.scrollY.toFixed();c<e&&(o.borderFloatClass="abo-select",o.isAboutActive="active",o.isProjectsActive="",o.isEducationActive="",document.title="about me \ud83d\udc68\u200d\ud83d\udd2c"),c>=e&&c<t&&(o.borderFloatClass="pro-select",o.isAboutActive="",o.isProjectsActive="active",o.isEducationActive="",document.title="my projects \ud83d\udc68\u200d\ud83d\udcbb"),c>=t&&(o.borderFloatClass="edu-select",o.isAboutActive="",o.isProjectsActive="",o.isEducationActive="active",document.title="my education \ud83d\udc68\u200d\ud83c\udf93")};Object(s.useEffect)((function(){return document.title="Hi \ud83d\udc4b",document.addEventListener("scroll",d),function(){return document.removeEventListener("scroll",d)}}),[]);var u=function(e,t){var c=document.getElementById(t),s=c.offsetTop;"about"!==c.id?window.scrollTo({top:"".concat(s-24),behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})},j=function(){document.getElementById("nav").classList.toggle("show-nav")};return Object(l.jsxs)("div",{id:"nav",className:"neu-left-nav",children:[Object(l.jsx)("button",{className:"nav-toggle",onClick:function(e){return j()},children:Object(l.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})}),Object(l.jsxs)("div",{className:"left-nav-title",onClick:function(e){return j()},children:[Object(l.jsx)("h4",{children:"Michael Cote"}),Object(l.jsx)("small",{children:"software developer"})]}),Object(l.jsxs)("div",{className:"left-nav-social-links",children:[Object(l.jsx)("button",{onClick:function(e){return c(e)},children:t?Object(l.jsx)("i",{className:"fa fa-sun-o","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-moon-o","aria-hidden":"true"})}),Object(l.jsx)("a",{title:"\ud83d\udd17 GitHub",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mcote7",children:Object(l.jsx)("i",{className:"fa fa-github-alt","aria-hidden":"true"})}),Object(l.jsx)("a",{title:"\ud83d\udd17 LinkedIn",target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/michael-cote-wa",children:Object(l.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})})]}),Object(l.jsxs)("div",{className:"left-nav-main-links",children:[Object(l.jsx)("button",{id:"a",className:"neu-btn ".concat(o.isAboutActive),onClick:function(e){return u(0,"about")},children:"About"}),Object(l.jsx)("button",{id:"p",className:"neu-btn ".concat(o.isProjectsActive),onClick:function(e){return u(0,"projects")},children:"Projects"}),Object(l.jsx)("button",{id:"e",className:"neu-btn ".concat(o.isEducationActive),onClick:function(e){return u(0,"education")},children:"Education"}),Object(l.jsx)("div",{className:"border-float ".concat(o.borderFloatClass)})]}),Object(l.jsxs)("div",{className:"colors",children:[Object(l.jsx)("button",{onClick:function(){return a("blue")},className:"color-pick blue ".concat(i),children:i?Object(l.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(l.jsx)("button",{onClick:function(){return a("green")},className:"color-pick green ".concat(r),children:r?Object(l.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(l.jsx)("button",{onClick:function(){return a("orange")},className:"color-pick orange ".concat(n),children:n?Object(l.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(l.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})})]})]})},v=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){document.body.classList.add("no-transition");var e=document.documentElement;null===e||void 0===e||e.style.setProperty("--bgcolor",c?"#444444":"#e4ebf5"),null===e||void 0===e||e.style.setProperty("--dark-shadow",c?"#363636":"#bec8e4"),null===e||void 0===e||e.style.setProperty("--light-shadow",c?"#525252":"#ffffff"),null===e||void 0===e||e.style.setProperty("--text-color-primary",c?"rgba(255, 255, 255, 0.93)":"rgba(0, 0, 0, 0.93)"),null===e||void 0===e||e.style.setProperty("--text-color-secondary",c?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)"),null===e||void 0===e||e.style.setProperty("--text-color-disabled",c?"rgba(255, 255, 255, 0.45)":"rgba(0, 0, 0, 0.45)"),setTimeout((function(){document.body.classList.remove("no-transition")}),50)}),[c]);var i=Object(s.useState)("blue"),r=Object(n.a)(i,2),o=r[0],d=r[1],j=Object(s.useState)("#2977ff"),b=Object(n.a)(j,2),v=b[0],h=b[1],O=Object(s.useState)("active"),f=Object(n.a)(O,2),p=f[0],g=f[1],x=Object(s.useState)(""),y=Object(n.a)(x,2),N=y[0],k=y[1],A=Object(s.useState)(""),w=Object(n.a)(A,2),C=w[0],E=w[1];return Object(s.useEffect)((function(){document.body.classList.add("no-transition");var e=document.documentElement;"blue"===o&&(null===e||void 0===e||e.style.setProperty("--primary","#2978FF"),null===e||void 0===e||e.style.setProperty("--primary-dark","#0151D9"),null===e||void 0===e||e.style.setProperty("--primary-light","#7DADFE"),h("#2978FF"),g("active"),k(""),E("")),"green"===o&&(null===e||void 0===e||e.style.setProperty("--primary","#28C200"),null===e||void 0===e||e.style.setProperty("--primary-dark","#219C00"),null===e||void 0===e||e.style.setProperty("--primary-light","#6BDD4D"),h("#28C200"),k("active"),g(""),E("")),"orange"===o&&(null===e||void 0===e||e.style.setProperty("--primary","#F58300"),null===e||void 0===e||e.style.setProperty("--primary-dark","#C16700"),null===e||void 0===e||e.style.setProperty("--primary-light","#FFB560"),h("#F58300"),E("active"),g(""),k("")),setTimeout((function(){document.body.classList.remove("no-transition")}),50)}),[o]),Object(l.jsxs)("div",{className:"container-fluid neu-app",children:[Object(l.jsx)(m,{darkMode:c,handleDarkMode:function(){a(!c)},setColorMode:d,isBlueActive:p,isGreenActive:N,isOrangeActive:C}),Object(l.jsx)(u,{darkMode:c,primaryColor:v,isBlueActive:p,isGreenActive:N,isOrangeActive:C})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),i(e),r(e)}))};c(29),c(30),c(31);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.3c4875ec.chunk.js.map