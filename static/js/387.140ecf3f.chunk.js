"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(n,r,e){e.r(r),e.d(r,{default:function(){return w}});var t,a,u=e(5861),c=e(885),s=e(7757),i=e.n(s),o=e(2791),p=e(470),f=e(4635),d=e(312),l=e(168),h=e(6444),x=h.ZP.li(t||(t=(0,l.Z)(["\n  background-color: #9c9efc;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 10px;\n"]))),v=h.ZP.p(a||(a=(0,l.Z)(["\n  text-indent: 50px;\n"]))),m=e(184),w=function(){var n=(0,p.UO)().id,r=(0,o.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1];return(0,o.useEffect)((function(){function r(){return(r=(0,u.Z)(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,f.h6)(n);case 2:e=r.sent,a(e.results);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[n]),(0,m.jsx)(m.Fragment,{children:t.length>0?(0,m.jsx)(d.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:3,children:(0,m.jsx)("ul",{children:t.map((function(n){var r=n.id,e=n.author,t=n.content,a=n.created_at;return(0,m.jsxs)(x,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Author:"})," ",e]}),(0,m.jsx)("p",{children:(0,m.jsx)("b",{children:"Comment:"})}),(0,m.jsx)(v,{children:t}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Created:"})," ",new Date(a).toLocaleDateString("en-US")]})]},r)}))})}):(0,m.jsx)("p",{children:"No reviews"})})}},4635:function(n,r,e){e.d(r,{LZ:function(){return o},h6:function(){return l},jD:function(){return d},u6:function(){return p},zV:function(){return f}});var t=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";var i="6dd967b0f6fff91893455d82dc21630c",o=function(){var n=(0,t.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/trending/movie/day",{params:{api_key:i}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/search/movie",{params:{api_key:i,include_adult:!1,query:r}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/movie/".concat(r),{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.140ecf3f.chunk.js.map