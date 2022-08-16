"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[964],{6600:function(t,e,r){var n=r(5861),a=r(3144),c=r(5671),s=r(6274),u=r(9359),i=r(7757),o=r.n(i),p=r(4569),f=r.n(p),h=(0,u.Z)("BASE_URL"),v=(0,u.Z)("API_KEY"),l=(0,u.Z)("SEARCH"),d=(0,u.Z)("TRAND"),Z=(0,u.Z)("ALL"),m=(0,a.Z)((function t(){var e=this;(0,c.Z)(this,t),Object.defineProperty(this,h,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,v,{writable:!0,value:"b2701829e6cba5c18fb7b3c9d2adde66"}),Object.defineProperty(this,l,{writable:!0,value:"search/movie"}),Object.defineProperty(this,d,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,Z,{writable:!0,value:"movie/"}),this.trend=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,h)[h]).concat((0,s.Z)(e,d)[d],"?api_key=").concat((0,s.Z)(e,v)[v],"&page=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.search=function(){var t=(0,n.Z)(o().mark((function t(r,n){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,h)[h]).concat((0,s.Z)(e,l)[l],"?api_key=").concat((0,s.Z)(e,v)[v],"&query=").concat(r,"&page=").concat(n));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),this.id=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,h)[h]).concat((0,s.Z)(e,Z)[Z],"/").concat(r,"?api_key=").concat((0,s.Z)(e,v)[v]));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.cast=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,h)[h]).concat((0,s.Z)(e,Z)[Z],"/").concat(r,"/credits?api_key=").concat((0,s.Z)(e,v)[v]));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.reviews=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,h)[h]).concat((0,s.Z)(e,Z)[Z],"/").concat(r,"/reviews?api_key=").concat((0,s.Z)(e,v)[v]));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),x=new m;e.Z=x},724:function(t,e,r){var n=r(184);e.Z=function(t){var e=t.children;return(0,n.jsx)("section",{children:e})}},7911:function(t,e,r){var n=r(6871),a=r(501),c=r(184);e.Z=function(t){var e=t.data,r=(0,n.TH)();return(0,c.jsx)("ul",{children:e.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:r},children:t.title})},t.id)}))})}},2964:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n=r(5861),a=r(885),c=r(7757),s=r.n(c),u=r(2791),i=r(501),o="Movies_searchBar__7rhTU",p=r(6600),f="SearchForm_searchBtn__rp2a7",h="SearchForm_form__o80os",v="SearchForm_input__HOxJo",l=r(184),d=function(t){var e=t.setData,r=t.setSearchParams,c=(0,u.useState)(""),i=(0,a.Z)(c,2),o=i[0],d=i[1];return(0,l.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==o){r({query:o});var a=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.Z.search(o,1);case 3:r=t.sent,e(r.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();a()}},className:h,children:[(0,l.jsx)("input",{type:"text",name:"query",value:o,onChange:function(t){d(t.target.value.trimStart())},className:v}),(0,l.jsx)("button",{type:"submit",className:f})]})},Z=r(7911),m=r(724),x=function(){var t,e=(0,i.lr)(),r=(0,a.Z)(e,2),c=r[0],f=r[1],h=(0,u.useState)([]),v=(0,a.Z)(h,2),x=v[0],b=v[1],_=(0,u.useState)(1),w=(0,a.Z)(_,2),y=w[0],k=w[1],g=null!==(t=c.get("query"))&&void 0!==t?t:"";return(0,u.useEffect)((function(){if(""!==g){k(1);var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.Z.search(g,y);case 3:e=t.sent,b(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[y,g]),(0,l.jsxs)(m.Z,{children:[(0,l.jsx)("div",{className:o,children:(0,l.jsx)(d,{setData:b,setSearchParams:f})}),(0,l.jsx)(Z.Z,{data:x,isHome:!1})]})}}}]);
//# sourceMappingURL=964.383e9daf.chunk.js.map