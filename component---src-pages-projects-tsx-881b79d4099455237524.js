(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Zgaf:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=r.a.div.withConfig({displayName:"item__Wrapper",componentId:"zd8ha7-0"})(["margin:15px 0;"]),l=r.a.p.withConfig({displayName:"item__Title",componentId:"zd8ha7-1"})(["font-size:26px;margin:0 0 5px 0;"]),c=r.a.p.withConfig({displayName:"item__Description",componentId:"zd8ha7-2"})(["font-size:14px;color:var(--primary);margin:0 0 15px 0;"]),s=function(e){var t=e.title,n=e.description,a=e.children;return i.a.createElement(o,null,i.a.createElement(l,null,t),i.a.createElement(c,null,n),a)};t.a=i.a.memo(s)},cvUp:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=r.a.div.withConfig({displayName:"divider__Divider",componentId:"sc-1qvadmg-0"})(["width:100%;height:3px;background-color:var(--dark);margin:10px 0;animation:reveal 0.7s forwards;@keyframes reveal{from{clip-path:inset(0 0 0 100%);}to{clip-path:inset(0 0 0 0);}}"]),l=r.a.div.withConfig({displayName:"section__SectionWrapper",componentId:"sc-1r91a-0"})(["display:flex;flex-direction:column;color:var(--dark);animation:fadein 0.5s;@keyframes fadein{from{opacity:0;}to{opacity:1;}}"]),c=r.a.span.withConfig({displayName:"section__Title",componentId:"sc-1r91a-1"})(['font-family:"Archivo Black",sans-serif;font-weight:400;font-size:16px;margin-bottom:10px;']),s=function(e){var t=e.children,n=e.title,a=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["children","title"]);return i.a.createElement(l,a,i.a.createElement(o,null),i.a.createElement(c,null,n),t)};t.a=i.a.memo(s)},gZkK:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("Wbzz"),o=n("vOnD"),l=n("cvUp"),c=n("H8eV"),s=n("Zgaf"),d=o.a.a.withConfig({displayName:"projects__Link",componentId:"p1sigj-0"})(["color:inherit;"]),p=function(e){var t,n,a=e.project,r=null===(t=a.languages)||void 0===t||null===(n=t.edges)||void 0===n?void 0:n.map((function(e,t){var n,i,r=null==e?void 0:e.node.name;if(1===(null===(n=a.languages)||void 0===n?void 0:n.edges.length))return"("+r+")";switch(t){case 0:return"("+r+", ";case(null===(i=a.languages)||void 0===i?void 0:i.edges.length)-1:return r+")";default:return r+", "}}));return i.a.createElement(s.a,{title:i.a.createElement(d,{href:a.url},a.name),description:"stars: "+a.stargazers.totalCount+" | forks:\n          "+a.forks.totalCount},i.a.createElement("p",null,a.description),i.a.createElement("span",null,r))},u="3329688969";t.default=function(){var e,t,n=Object(r.useStaticQuery)(u),a=null==n||null===(e=n.github.user)||void 0===e||null===(t=e.pinnedItems)||void 0===t?void 0:t.edges,o=null==a?void 0:a.map((function(e){var t=e.node;return i.a.createElement(p,{project:t,key:t.name})}));return i.a.createElement("article",null,i.a.createElement(c.a,{title:"Projects"}),i.a.createElement(l.a,{title:"Projects"},o,i.a.createElement(d,{href:"https://github.com/eleboucher",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",style:{marginTop:30,fontWeight:"bold"}},"More on Github")))}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-881b79d4099455237524.js.map