(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1cee":function(e){e.exports=JSON.parse('{"data":{"github":{"user":{"pinnedItems":{"edges":[{"node":{"__typename":"GitHub_Repository","name":"coalibot","description":"Slack bot for the school 42 using nlopes/slack Slack api client. This bot provide tools for student to access school informations.","url":"https://github.com/genesixx/coalibot","languages":{"edges":[{"node":{"name":"Go"}}],"totalCount":1},"repositoryTopics":{"edges":[{"node":{"topic":{"name":"slackbot"},"url":"https://github.com/topics/slackbot"}},{"node":{"topic":{"name":"go"},"url":"https://github.com/topics/go"}},{"node":{"topic":{"name":"golang"},"url":"https://github.com/topics/golang"}}]},"stargazers":{"totalCount":18},"forks":{"totalCount":12}}},{"node":{"__typename":"GitHub_Repository","name":"erwanleboucher.dev","description":"Personal Website using the GatsbyJS. Minimalistic website to display my journey as a software developer.","url":"https://github.com/genesixx/erwanleboucher.dev","languages":{"edges":[{"node":{"name":"JavaScript"}},{"node":{"name":"CSS"}},{"node":{"name":"HTML"}},{"node":{"name":"TypeScript"}}],"totalCount":4},"repositoryTopics":{"edges":[{"node":{"topic":{"name":"portfolio"},"url":"https://github.com/topics/portfolio"}},{"node":{"topic":{"name":"gatsby"},"url":"https://github.com/topics/gatsby"}},{"node":{"topic":{"name":"styled-components"},"url":"https://github.com/topics/styled-components"}}]},"stargazers":{"totalCount":3},"forks":{"totalCount":0}}},{"node":{"__typename":"GitHub_Repository","name":"guardian","description":"Discord Bot for my discord using discord-py. ","url":"https://github.com/genesixx/guardian","languages":{"edges":[{"node":{"name":"Python"}}],"totalCount":1},"repositoryTopics":{"edges":[]},"stargazers":{"totalCount":2},"forks":{"totalCount":0}}},{"node":{"__typename":"GitHub_Repository","name":"ft_ls","description":"Simple re-implementation of the command ls in C. Project realised during the 42 course.","url":"https://github.com/genesixx/ft_ls","languages":{"edges":[{"node":{"name":"C"}},{"node":{"name":"Makefile"}}],"totalCount":2},"repositoryTopics":{"edges":[{"node":{"topic":{"name":"c"},"url":"https://github.com/topics/c"}},{"node":{"topic":{"name":"cli"},"url":"https://github.com/topics/cli"}},{"node":{"topic":{"name":"ls"},"url":"https://github.com/topics/ls"}}]},"stargazers":{"totalCount":0},"forks":{"totalCount":0}}},{"node":{"__typename":"GitHub_Repository","name":"ft_printf","description":"Simple re-implementation of the function printf in C. Project realised during the 42 course.","url":"https://github.com/genesixx/ft_printf","languages":{"edges":[{"node":{"name":"C"}},{"node":{"name":"Makefile"}}],"totalCount":2},"repositoryTopics":{"edges":[]},"stargazers":{"totalCount":0},"forks":{"totalCount":0}}},{"node":{"__typename":"GitHub_Repository","name":"LlamaSweet-msm8992","description":"Modified LG MSM8992 Kernel, with some optimisation for the battery life and perfomance as well as some thermal improvement.","url":"https://github.com/genesixx/LlamaSweet-msm8992","languages":{"edges":[{"node":{"name":"Makefile"}},{"node":{"name":"C"}},{"node":{"name":"Assembly"}},{"node":{"name":"C++"}},{"node":{"name":"Objective-C"}},{"node":{"name":"Shell"}}],"totalCount":18},"repositoryTopics":{"edges":[]},"stargazers":{"totalCount":1},"forks":{"totalCount":4}}}]}}}}}')},Zgaf:function(e,t,o){"use strict";var n=o("q1tI"),a=o.n(n),i=o("vOnD"),r=i.a.div.withConfig({displayName:"item__Wrapper",componentId:"zd8ha7-0"})(["margin:15px 0;"]),s=i.a.p.withConfig({displayName:"item__Title",componentId:"zd8ha7-1"})(["font-size:26px;margin:0 0 5px 0;"]),l=i.a.p.withConfig({displayName:"item__Description",componentId:"zd8ha7-2"})(["font-size:14px;color:var(--primary);margin:0 0 15px 0;"]);t.a=a.a.memo((function(e){var t=e.title,o=e.description,n=e.children;return a.a.createElement(r,null,a.a.createElement(s,null,t),a.a.createElement(l,null,o),n)}))},cvUp:function(e,t,o){"use strict";o("rzGZ"),o("Dq+y"),o("8npG"),o("Ggvi");var n=o("q1tI"),a=o.n(n),i=o("vOnD"),r=i.a.div.withConfig({displayName:"divider__Divider",componentId:"sc-1qvadmg-0"})(["width:100%;height:3px;background-color:var(--dark);margin:10px 0;"]);var s=i.a.div.withConfig({displayName:"section__SectionWrapper",componentId:"sc-1r91a-0"})(["display:flex;flex-direction:column;color:var(--dark);"]),l=i.a.span.withConfig({displayName:"section__Title",componentId:"sc-1r91a-1"})(['font-family:"Archivo Black",sans-serif;font-weight:400;font-size:16px;margin-bottom:10px;']);t.a=a.a.memo((function(e){var t=e.children,o=e.title,n=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,["children","title"]);return a.a.createElement(s,n,a.a.createElement(r,null),a.a.createElement(l,null,o),t)}))},gZkK:function(e,t,o){"use strict";o.r(t);o("pJf4");var n=o("1cee"),a=o("q1tI"),i=o.n(a),r=o("vOnD"),s=o("cvUp"),l=o("H8eV"),c=o("Zgaf"),p=r.a.a.withConfig({displayName:"projects__Link",componentId:"p1sigj-0"})(["color:inherit;"]),d=function(e){var t,o,n=e.project,a=null===(t=n.languages)||void 0===t||null===(o=t.edges)||void 0===o?void 0:o.map((function(e,t){var o,a,i=null==e?void 0:e.node.name;if(1===(null===(o=n.languages)||void 0===o?void 0:o.edges.length))return"("+i+")";switch(t){case 0:return"("+i+", ";case(null===(a=n.languages)||void 0===a?void 0:a.edges.length)-1:return i+")";default:return i+", "}}));return i.a.createElement(c.a,{title:i.a.createElement(p,{href:n.url},n.name),description:"stars: "+n.stargazers.totalCount+" | forks:\n          "+n.forks.totalCount},i.a.createElement("p",null,n.description),i.a.createElement("span",null,a))};t.default=function(){var e,t,o=n.data,a=null==o||null===(e=o.github.user)||void 0===e||null===(t=e.pinnedItems)||void 0===t?void 0:t.edges,r=null==a?void 0:a.map((function(e){var t=e.node;return i.a.createElement(d,{project:t,key:t.name})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:"Projects"}),i.a.createElement(s.a,{title:"Projects"},r,i.a.createElement(p,{href:"https://github.com/genesixx",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",style:{marginTop:30,fontWeight:"bold"}},"More on Github")))}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-21aeff6badda4bbc0d92.js.map