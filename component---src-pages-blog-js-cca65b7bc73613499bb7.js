(self.webpackChunkerwanleboucher_dev=self.webpackChunkerwanleboucher_dev||[]).push([[7],{7757:function(t,e,r){t.exports=r(5666)},6340:function(t,e,r){"use strict";var n=r(7294),o=function(t){var e=t.title,r=t.description,o=t.children;return n.createElement("div",{className:"my-4"},n.createElement("p",{className:"text-2xl mb-1"},e),n.createElement("p",{className:"text-sm mb-3 text-primary dark:text-darkPrimary"},r),o)};e.Z=n.memo(o)},2449:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.r(e),r.d(e,{default:function(){return h}});var i=r(7757),a=r.n(i),c=r(7294),u=r(6340),s=r(4045),l=r(1920),f=[{title:"Comment fonctionne une Rom Custom?",url:"https://bit.ly/2YDhxDJ",description:"Vous devez sûrement entendre, si vous intéressez à Android, les mots “Rom Custom”, “CyanogenMod”, “LineageOS”… Mais vous avez aucune idée de ce qu’il s’agit. Voilà un article qui pourra, vous éclairez !",published_at:"2017-10-06T08:44:33Z"},{title:"Kernel et Android : Qu’est-ce que c’est et pourquoi le modifier ?",image:"https://images.frandroid.com/wp-content/uploads/2017/02/android-kernel-explication.jpg",url:"https://bit.ly/3eFpEFw",description:"Vous êtes très nombreux à bidouiller votre appareil Android. Nous nous sommes intéressés à un composant essentiel de votre système : le kernel.",published_at:"2017-02-16T08:44:33Z"}],h=function(){var t=(0,c.useState)([]),e=t[0],r=t[1],n=(0,c.useCallback)(o(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://dev.to/api/articles?username=eleboucher");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)}))),[]);return(0,c.useEffect)((function(){n()}),[e,n]),c.createElement("article",null,c.createElement(l.Z,{title:"Blog"}),c.createElement(s.Z,{title:"Blog Posts"},null==e?void 0:e.map((function(t){return c.createElement("a",{href:t.url,key:t.title},c.createElement("div",{className:"flex flex-col-reverse items-center justify-items-start mt-8 md:mt-0 md:flex-row  md:justify-items-center"},c.createElement(u.Z,{title:t.title,description:new Date(t.published_at).toLocaleDateString()},c.createElement("p",null,t.description)),t.cover_image&&c.createElement("img",{src:t.cover_image,loading:"lazy",className:"h-24",alt:"cover image",style:{borderRadius:15}})))})),f.map((function(t){return c.createElement("a",{href:t.url,key:t.title},c.createElement("div",{className:"flex flex-col-reverse items-center justify-items-start mt-8 md:mt-0 md:flex-row  md:justify-items-center"},c.createElement(u.Z,{title:t.title,description:new Date(t.published_at).toLocaleDateString()},c.createElement("p",null,t.description)),t.image&&c.createElement("img",{src:t.image,loading:"lazy",className:"h-24",style:{borderRadius:15}})))}))))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={};function v(){}function y(){}function g(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,E=x&&x(x(P([])));E&&E!==r&&n.call(E,i)&&(w=E);var b=g.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-cca65b7bc73613499bb7.js.map