(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1GPU":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),o=r.n(n);r("ls82");function i(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,l,"next",t)}function l(t){i(a,n,o,c,l,"throw",t)}c(void 0)}))}}var c=r("q1tI"),l=r.n(c),u=r("Zgaf"),s=r("cvUp"),f=r("H8eV"),h=r("vOnD").a.div.withConfig({displayName:"blog__PostWrapper",componentId:"sc-144lx2r-0"})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:800px){margin-top:30px;flex-direction:column-reverse;align-items:center;text-align:center;}"]),p=[{title:"Comment fonctionne une Rom Custom?",url:"https://bit.ly/2YDhxDJ",description:"Vous devez sûrement entendre, si vous intéressez à Android, les mots “Rom Custom”, “CyanogenMod”, “LineageOS”… Mais vous avez aucune idée de ce qu’il s’agit. Voilà un article qui pourra, vous éclairez !",published_at:"2017-10-06T08:44:33Z"},{title:"Kernel et Android : Qu’est-ce que c’est et pourquoi le modifier ?",image:"https://images.frandroid.com/wp-content/uploads/2017/02/android-kernel-explication.jpg",url:"https://bit.ly/3eFpEFw",description:"Vous êtes très nombreux à bidouiller votre appareil Android. Nous nous sommes intéressés à un composant essentiel de votre système : le kernel.",published_at:"2017-02-16T08:44:33Z"}];e.default=function(){var t=Object(c.useState)([]),e=t[0],r=t[1],n=Object(c.useCallback)(a(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://dev.to/api/articles?username=eleboucher");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)}))),[]);return Object(c.useEffect)((function(){n()}),[e,n]),l.a.createElement("article",null,l.a.createElement(f.a,{title:"Blog"}),l.a.createElement(s.a,{title:"Blog Posts"},null==e?void 0:e.map((function(t){return l.a.createElement("a",{href:t.url,key:t.title},l.a.createElement(h,null,l.a.createElement(u.a,{title:t.title,description:new Date(t.published_at).toLocaleDateString()},l.a.createElement("p",null,t.description)),t.cover_image&&l.a.createElement("img",{src:t.cover_image,loading:"lazy",height:"100",style:{borderRadius:15}})))})),p.map((function(t){return l.a.createElement("a",{href:t.url,key:t.title},l.a.createElement(h,null,l.a.createElement(u.a,{title:t.title,description:new Date(t.published_at).toLocaleDateString()},l.a.createElement("p",null,t.description)),t.image&&l.a.createElement("img",{src:t.image,loading:"lazy",height:"100",style:{borderRadius:15}})))}))))}},Zgaf:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("vOnD"),a=i.a.div.withConfig({displayName:"item__Wrapper",componentId:"zd8ha7-0"})(["margin:15px 0;"]),c=i.a.p.withConfig({displayName:"item__Title",componentId:"zd8ha7-1"})(["font-size:26px;margin:0 0 5px 0;"]),l=i.a.p.withConfig({displayName:"item__Description",componentId:"zd8ha7-2"})(["font-size:14px;color:var(--primary);margin:0 0 15px 0;"]),u=function(t){var e=t.title,r=t.description,n=t.children;return o.a.createElement(a,null,o.a.createElement(c,null,e),o.a.createElement(l,null,r),n)};e.a=o.a.memo(u)},cvUp:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("vOnD"),a=i.a.div.withConfig({displayName:"divider__Divider",componentId:"sc-1qvadmg-0"})(["width:100%;height:3px;background-color:var(--dark);margin:10px 0;animation:reveal 0.7s forwards;@keyframes reveal{from{clip-path:inset(0 0 0 100%);}to{clip-path:inset(0 0 0 0);}}"]),c=i.a.div.withConfig({displayName:"section__SectionWrapper",componentId:"sc-1r91a-0"})(["display:flex;flex-direction:column;color:var(--dark);animation:fadein 0.5s;@keyframes fadein{from{opacity:0;}to{opacity:1;}}"]),l=i.a.span.withConfig({displayName:"section__Title",componentId:"sc-1r91a-1"})(['font-family:"Archivo Black",sans-serif;font-weight:400;font-size:16px;margin-bottom:10px;']),u=function(t){var e=t.children,r=t.title,n=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["children","title"]);return o.a.createElement(c,n,o.a.createElement(a,null),o.a.createElement(l,null,r),e)};e.a=o.a.memo(u)},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};d[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&r.call(v,o)&&(d=v);var y=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=y.constructor=p,p.constructor=h,h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),c(y,a,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-62eb1aef639cc9e90aaa.js.map