(this["webpackJsonpmichael-cote"]=this["webpackJsonpmichael-cote"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),a=c(8),i=c.n(a),l=c(2),o=c(0),n=function(e){var t=e.darkMode,c=e.primaryColor,s=e.isBlueActive,a=e.isGreenActive,i=e.isOrangeActive;return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsxs)("div",{className:"col-sm-12",children:[Object(o.jsxs)("div",{className:"self-wrap row mb-5",children:[Object(o.jsxs)("div",{className:"self-img col-lg-6",children:[Object(o.jsx)("span",{className:"back-1"}),Object(o.jsx)("span",{className:"back-2"})]}),Object(o.jsxs)("div",{className:"self-text col-lg-6 mt-5",children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("i",{className:"fa fa-globe","aria-hidden":"true"})," hello world"]}),Object(o.jsx)("p",{children:"i'm michael, a software developer in Seattle."})]})]}),Object(o.jsxs)("div",{className:"stats-wrap row my-5",children:[Object(o.jsx)("div",{className:"git-card col-lg-6",children:t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=dark&icon_color=".concat(c.substring(1),"&border_color=444444&bg_color=444444"),alt:"stats"}),Object(o.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=dark&border_color=444444&bg_color=444444",alt:"langs"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&icon_color=".concat(c.substring(1),"&theme=graywhite&border_color=e4ebf5&bg_color=e4ebf5"),alt:"stats"}),Object(o.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=greywhite&border_color=e4ebf5&bg_color=e4ebf5",alt:"langs"})]})}),Object(o.jsxs)("div",{className:"role-card col-lg-6",children:[Object(o.jsxs)("div",{className:"role-title",children:[s&&Object(o.jsx)("div",{className:"angular blue"}),a&&Object(o.jsx)("div",{className:"angular green"}),i&&Object(o.jsx)("div",{className:"angular"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"current role: "}),Object(o.jsx)("p",{className:"sub",children:"software developer @"})]})]}),Object(o.jsxs)("div",{className:"role-body",children:[Object(o.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://videonet.us/",children:["videonet holdings\xa0",Object(o.jsx)("i",{class:"fa fa-external-link-square","aria-hidden":"true"})]}),Object(o.jsx)("div",{className:"quote",children:Object(o.jsx)("small",{children:"We are building secure business solutions using modern communications tools like videoconferencing, live streaming, real-time screen sharing, and the like."})}),Object(o.jsxs)("div",{className:"quote via3",children:[Object(o.jsx)("small",{children:"check out our platform:"}),Object(o.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://unity.via3.com/",children:["via3\xa0",Object(o.jsx)("i",{class:"fa fa-external-link-square","aria-hidden":"true"})]})]})]})]})]})]})})},d=function(e){var t=e.darkMode,c=e.primaryColor,s=e.isBlueActive,a=e.isGreenActive,i=e.isOrangeActive;return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("div",{id:"about",className:"row",style:{minHeight:"100vh"},children:Object(o.jsx)(n,{darkMode:t,primaryColor:c,isBlueActive:s,isGreenActive:a,isOrangeActive:i})}),Object(o.jsxs)("div",{id:"projects",className:"row",style:{minHeight:"100vh"},children:["Projects ",Object(o.jsx)("small",{children:"\ud83d\udea7 in dev..."})]}),Object(o.jsxs)("div",{id:"education",className:"row",style:{minHeight:"100vh"},children:["Education ",Object(o.jsx)("small",{children:"\ud83d\udea7 in dev..."})]})]})},u=c(9),j=c.n(u),b=function(e){var t=e.darkMode,c=e.handleDarkMode,r=e.setColorMode,a=e.isBlueActive,i=e.isGreenActive,l=e.isOrangeActive,n=j()({borderFloatClass:"abo-select",isAboutActive:"active",isProjectsActive:"",isEducationActive:""}),d=function(){var e=document.getElementById("projects").offsetTop-300,t=document.getElementById("education").offsetTop-300,c=+window.scrollY.toFixed();c<e&&(n.borderFloatClass="abo-select",n.isAboutActive="active",n.isProjectsActive="",n.isEducationActive="",document.title="about me \ud83d\udc68\u200d\ud83d\udd2c"),c>=e&&c<t&&(n.borderFloatClass="pro-select",n.isAboutActive="",n.isProjectsActive="active",n.isEducationActive="",document.title="my projects \ud83d\udc68\u200d\ud83d\udcbb"),c>=t&&(n.borderFloatClass="edu-select",n.isAboutActive="",n.isProjectsActive="",n.isEducationActive="active",document.title="my education \ud83d\udc68\u200d\ud83c\udf93")};Object(s.useEffect)((function(){return document.title="Hi \ud83d\udc4b",document.addEventListener("scroll",d),function(){return document.removeEventListener("scroll",d)}}),[]);var u=function(e,t){var c=document.getElementById(t),s=c.offsetTop;"about"!==c.id?window.scrollTo({top:"".concat(s-24),behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})};return Object(o.jsxs)("div",{id:"nav",className:"neu-left-nav",children:[Object(o.jsx)("button",{className:"nav-toggle",onClick:function(e){return function(e){console.log("nav toggle",e),document.getElementById("nav").classList.toggle("show")}(e)},children:Object(o.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})}),Object(o.jsxs)("div",{className:"left-nav-title",children:[Object(o.jsx)("h4",{children:"Michael Cote"}),Object(o.jsx)("small",{children:"software developer"})]}),Object(o.jsxs)("div",{className:"left-nav-social-links",children:[Object(o.jsx)("button",{onClick:function(e){return c(e)},children:t?Object(o.jsx)("i",{className:"fa fa-sun-o","aria-hidden":"true"}):Object(o.jsx)("i",{className:"fa fa-moon-o","aria-hidden":"true"})}),Object(o.jsx)("a",{title:"\ud83d\udd17 GitHub",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mcote7",children:Object(o.jsx)("i",{className:"fa fa-github-alt","aria-hidden":"true"})}),Object(o.jsx)("a",{title:"\ud83d\udd17 LinkedIn",target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/michael-cote-wa",children:Object(o.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})})]}),Object(o.jsxs)("div",{className:"left-nav-main-links",children:[Object(o.jsx)("button",{id:"a",className:"neu-btn ".concat(n.isAboutActive),onClick:function(e){return u(0,"about")},children:"About"}),Object(o.jsx)("button",{id:"p",className:"neu-btn ".concat(n.isProjectsActive),onClick:function(e){return u(0,"projects")},children:"Projects"}),Object(o.jsx)("button",{id:"e",className:"neu-btn ".concat(n.isEducationActive),onClick:function(e){return u(0,"education")},children:"Education"}),Object(o.jsx)("div",{className:"border-float ".concat(n.borderFloatClass)})]}),Object(o.jsxs)("div",{className:"colors",children:[Object(o.jsx)("button",{onClick:function(e){return r("blue")},className:"color-pick blue ".concat(a),children:a?Object(o.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(o.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(o.jsx)("button",{onClick:function(e){return r("green")},className:"color-pick green ".concat(i),children:i?Object(o.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(o.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})}),Object(o.jsx)("button",{onClick:function(e){return r("orange")},className:"color-pick orange ".concat(l),children:l?Object(o.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"}):Object(o.jsx)("i",{className:"fa fa-circle-o","aria-hidden":"true"})})]})]})},m=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1];Object(s.useEffect)((function(){var e=document.documentElement;null===e||void 0===e||e.style.setProperty("--bgcolor",c?"#444444":"#e4ebf5"),null===e||void 0===e||e.style.setProperty("--dark-shadow",c?"#363636":"#bec8e4"),null===e||void 0===e||e.style.setProperty("--light-shadow",c?"#525252":"#ffffff"),null===e||void 0===e||e.style.setProperty("--text-color-primary",c?"rgba(255, 255, 255, 0.93)":"rgba(0, 0, 0, 0.93)"),null===e||void 0===e||e.style.setProperty("--text-color-secondary",c?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)"),null===e||void 0===e||e.style.setProperty("--text-color-disabled",c?"rgba(255, 255, 255, 0.45)":"rgba(0, 0, 0, 0.45)"),null===e||void 0===e||e.style.setProperty("--bg-color-disabled",c?"#727272":"#dee5e8"),console.log("dark mode?",c)}),[c]);var a=Object(s.useState)("blue"),i=Object(l.a)(a,2),n=i[0],u=i[1],j=Object(s.useState)("#2977ff"),m=Object(l.a)(j,2),h=m[0],v=m[1],f=Object(s.useState)("active"),O=Object(l.a)(f,2),g=O[0],p=O[1],x=Object(s.useState)(""),y=Object(l.a)(x,2),N=y[0],k=y[1],A=Object(s.useState)(""),w=Object(l.a)(A,2),P=w[0],C=w[1];return Object(s.useEffect)((function(){var e=document.documentElement;"blue"===n&&(null===e||void 0===e||e.style.setProperty("--primary","hsl(218, 100%, 58%)"),null===e||void 0===e||e.style.setProperty("--primary-dark","hsl(230, 100%, 58%)"),null===e||void 0===e||e.style.setProperty("--primary-light","hsl(217, 100%, 75%)"),v("#2977ff"),p("active"),k(""),C("")),"green"===n&&(null===e||void 0===e||e.style.setProperty("--primary","hsl(108, 100%, 38%)"),null===e||void 0===e||e.style.setProperty("--primary-dark","hsl(120, 100%, 38%)"),null===e||void 0===e||e.style.setProperty("--primary-light","hsl(107, 100%, 52%)"),v("#27c200"),k("active"),p(""),C("")),"orange"===n&&(null===e||void 0===e||e.style.setProperty("--primary","hsl(32, 100%, 48%)"),null===e||void 0===e||e.style.setProperty("--primary-dark","hsl(28, 100%, 48%)"),null===e||void 0===e||e.style.setProperty("--primary-light","hsl(32, 100%, 62%)"),v("#f58300"),C("active"),p(""),k("")),console.log("color mode?",n)}),[n]),Object(o.jsxs)("div",{className:"container-fluid neu-app",children:[Object(o.jsx)(b,{darkMode:c,handleDarkMode:function(e){r(!c)},setColorMode:u,isBlueActive:g,isGreenActive:N,isOrangeActive:P}),Object(o.jsx)(d,{darkMode:c,primaryColor:h,isBlueActive:g,isGreenActive:N,isOrangeActive:P})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),r(e),a(e),i(e)}))};c(29),c(30),c(31);i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.f7654842.chunk.js.map