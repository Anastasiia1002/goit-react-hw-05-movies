"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[169],{6713:function(e,r,t){t.d(r,{FG:function(){return v},KC:function(){return u},V3:function(){return o},a2:function(){return d},n:function(){return m}});var n=t(5861),s=t(7757),a=t.n(s),c=t(4569),i=t.n(c);function u(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function e(){var r,t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"trending/movie/day",params:{}},e.next=4,i()(r);case 4:return t=e.sent,n=t.data,e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error"),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function e(r){var t,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"search/movie",params:{query:r}},e.next=4,i()(t);case 4:return n=e.sent,s=n.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error"),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function e(r){var t,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r),params:{}},e.next=4,i()(t,r);case 4:return n=e.sent,s=n.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error"),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("movie/".concat(r,"/credits"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("movie/".concat(r,"/reviews"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error"),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/",i().defaults.params={api_key:"8e91b8bd1f2d96428ef4a7725a482066",language:"en-US"}},3276:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(6159),s=t.n(n),a=t(184);function c(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(s(),{color:"#ca36d6"}),";"]})}},7169:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(8152),s=t(2791),a=t(3504),c=t(6871),i=t(6713),u=t(3276),l=t(6431),o=t.n(l),p="MovieDetails_lists__OJWDs",d="MovieDetails_poster__qocuc",h="MovieDetails_image__rdiQ5",v="MovieDetails_list__Y00ki",f="MovieDetails_links__SnRgP",m="MovieDetails_a__Z8nfy",x="MovieDetails_link__qJeTJ",j="MovieDetails_title__RQOUs",_=t(184),g="idle",b="pending",w="resolved",k="rejected",y=function(){var e=(0,s.useState)(null),r=(0,n.Z)(e,2),t=r[0],l=r[1],y=(0,c.UO)().movieId,Z=(0,s.useState)(g),M=(0,n.Z)(Z,2),N=M[0],D=M[1],U=(0,s.useState)(null),C=(0,n.Z)(U,2),S=C[0],O=C[1];return(0,s.useEffect)((function(){D(b),(0,i.a2)(y).then((function(e){l(e),D(w)})).catch((function(e){console.log(e),O("Oops"),D(k)}))}),[y]),(0,_.jsxs)(_.Fragment,{children:[N===b&&(0,_.jsx)(u.Z,{}),N===k&&{error:S},N===w&&(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("span",{className:j,children:"Movie"}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("div",{children:(0,_.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://previews.123rf.com/images/studiostoks/studiostoks1602/studiostoks160200045/51904057-oops-%C3%BCberraschte-frau-pop-art-retro-stil-unerwartete-nachrichten-business-konzept.jpg?fj=1",alt:t.title,className:h})}),(0,_.jsx)("div",{children:(0,_.jsxs)("ul",{className:v,children:[(0,_.jsxs)("li",{children:[t.original_title," (",(0,_.jsx)(o(),{format:"YYYY",children:t.release_date}),")"]}),(0,_.jsxs)("li",{children:["User Score: ",Math.trunc(10*t.vote_average),"%"]}),(0,_.jsxs)("li",{children:["Overvier",(0,_.jsx)("p",{children:t.overview})]}),(0,_.jsxs)("li",{children:["Genres",(0,_.jsx)("ul",{children:t.genres.map((function(e){return(0,_.jsx)("li",{children:e.name},e.name)}))})]})]})})]}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("ul",{className:f,children:[(0,_.jsx)("li",{className:x,children:(0,_.jsx)(a.rU,{to:"cast",className:m,children:"Cast"})}),(0,_.jsx)("li",{className:x,children:(0,_.jsx)(a.rU,{to:"reviews",className:m,children:"Reviews"})})]}),(0,_.jsx)(c.j3,{})]})]})]})}}}]);
//# sourceMappingURL=169.14039c91.chunk.js.map