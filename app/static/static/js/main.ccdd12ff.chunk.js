(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{126:function(e,t,a){e.exports=a(325)},131:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},224:function(e,t,a){},228:function(e,t,a){},322:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),i=(a(131),a(53)),o=a.n(i),s=a(76),u=a(10),m=(a(66),a(48)),d=a.n(m),f=a(35),p=a(36),v=a.n(p),E=a(31),g=Object(n.createContext)({}),b=(a(153),a(27)),h=a.n(b);var j=Object(E.b)((function(e){return Object(u.a)({},e)}),{add:function(){return{type:"ADD"}},asyncAdd:function(){return function(e,t){setTimeout((function(){e({type:"ADD"})}),2e3)}}})((function(e){var t=Object(n.useContext)(g),a=h()(),r=h()(1598195948672);return console.log("dayjs",h.a.duration(a.diff(r))),c.a.createElement("div",{className:"card-content card-bg"},c.a.createElement("img",{src:"".concat(t.host,"/files/download?name=1.jpg"),alt:""}),c.a.createElement("span",{className:"name",onClick:function(){e.add()}},"\u51c9\u57ce",e.count),c.a.createElement("span",{onClick:function(){e.asyncAdd()}},"\u4e0d\u8d1f\u521d\u5fc3\uff0c\u65b9\u5f97\u59cb\u7ec8"),c.a.createElement("nav",{className:"level"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",{className:"heading"},"\u6587\u7ae0"),c.a.createElement("p",{className:"title"},e.articleCount)),c.a.createElement("div",{className:"level-item"},c.a.createElement("p",{className:"heading"},"\u5206\u7c7b"),c.a.createElement("p",{className:"title"},e.tagsCount))))})),O=(a(154),function(e){var t=Object(n.useContext)(g),a=Object(n.useMemo)((function(){var a=e.info.img;return a||"".concat(t.host,"/files/download?name=1.jpg")}),[t.host,e.info.img]);return c.a.createElement("div",{className:"article-wrap card-bg"},c.a.createElement("img",{src:a,alt:""}),c.a.createElement("div",{className:"content-wrap"},c.a.createElement("div",{className:"notice mb-7"},c.a.createElement("span",null,"1\u5929\u524d"),c.a.createElement("span",null,"\u524d\u7aef")),c.a.createElement("h1",{className:"title link"},e.info.title),c.a.createElement("div",{className:"abstract"})))});a(155);var N=Object(E.b)((function(e){return Object(u.a)({},e)}))((function(e){var t=Object(n.useContext)(g),a=Object(n.useState)([]),r=Object(f.a)(a,2),l=r[0],i=r[1],o=Object(n.useCallback)((function(e){return e=+e,h()(e).format("YYYY-MM-DD HH:mm:ss")}),[]);return Object(n.useEffect)((function(){i(e.sortedArticle),console.log(e.sortedArticle)}),[e.sortedArticle]),c.a.createElement("div",{className:"list-wrap card-bg"},c.a.createElement("div",{className:"notice mb-10"},"\u6700\u65b0\u6587\u7ae0"),c.a.createElement("div",null,l.map((function(e){return c.a.createElement("div",{className:"item-wrap",key:e.id},c.a.createElement("img",{src:e.img||"".concat(t.host,"/files/download?name=1.jpg"),alt:e.title}),c.a.createElement("div",{className:"item-right"},c.a.createElement("div",{className:"date notice"},o(e.time)),c.a.createElement("div",{className:"title link"},e.title),c.a.createElement("div",{className:"tag notice"},e.tag.tag_name)))}))))})),w=(a(156),function(){Object(n.useContext)(g);var e=Object(n.useState)([{tag:"\u524d\u7aef1",num:2,id:0},{tag:"\u524d\u7aef2",num:3,id:1},{tag:"\u524d\u7aef3",num:4,id:2},{tag:"\u524d\u7aef4",num:5,id:3}]),t=Object(f.a)(e,2),a=t[0];t[1];return c.a.createElement("div",{className:"tag-wrap card-bg"},c.a.createElement("div",{className:"notice mb-10"},"\u5206\u7c7b"),c.a.createElement("ul",null,a.map((function(e){return c.a.createElement("li",{className:"item-wrap",key:e.id},c.a.createElement("span",null,e.tag),c.a.createElement("span",null,e.num))}))))}),y=(a(157),{count:0});function x(e,t){var a=e.count;switch(t.type){case"add":return{count:a+1};case"desc":return{count:a-1};default:return e}}var C=Object(E.b)((function(e){return Object(u.a)({},e)}))((function(e){var t=Object(n.useContext)(g),a=Object(n.useRef)(null),r=Object(n.useReducer)(x,y),l=Object(f.a)(r,2),i=l[0];return l[1],Object(n.useEffect)((function(){v()({url:"".concat(t.host,"/articles/list"),method:"get"}).then((function(e){console.log(e)}))}),[t.host]),c.a.createElement("div",{className:"main-wrapp"},c.a.createElement("div",{className:"flex-left"},c.a.createElement(j,null),c.a.createElement(w,null)),c.a.createElement("div",{className:"flex-center"},e.articleList.map((function(e){return c.a.createElement(O,{info:e,key:e.id})}))),c.a.createElement("div",{className:"flex-right"},c.a.createElement(N,null)),"main comp ",i.count,c.a.createElement("input",{type:"file",ref:a}),c.a.createElement(d.a,{type:"primary",onClick:function(){var e=a.current.files,n=new FormData;n.append("image",e[0]),n.append("msg","abcd"),v()({url:"".concat(t.host,"/upload"),method:"post",data:n}).then((function(e){console.log(e)}))}},"add"))})),k=a(64),T=(a(224),function(e){return c.a.createElement("nav",{className:"app-header"},c.a.createElement("div",{className:"app app-inner-header"},c.a.Children.map(e.children,(function(e){return c.a.createElement("div",null,e)})),c.a.createElement("div",{className:"links"},[{text:"\u4e3b\u9875",url:"/index"},{text:"\u6dd8\u5b9d",url:"/catagory"},{text:"\u5b57\u8282\u8df3\u52a8",url:"/tags"}].map((function(e,t){var a=e.url,n=e.text;return c.a.createElement(k.b,{to:a,key:t,activeClassName:"active"},n)})))))}),A=function(){return c.a.createElement("div",null,"catagory")},L=function(){return c.a.createElement("div",null,"tags")},D=(a(226),a(80)),_=a.n(D),S=(a(228),a(121)),I=a.n(S),G=_.a.TextArea,R={title:"",content:""};function Y(e,t){switch(t.type){case"changeTitle":return Object(u.a)(Object(u.a)({},e),{},{title:t.val});case"changeContent":return Object(u.a)(Object(u.a)({},e),{},{content:t.val});default:return e}}var M=function(){var e=Object(n.useReducer)(Y,R),t=Object(f.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(g);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"changeTitle";console.log(e.target.value),r({type:t,val:e.target.value})}return c.a.createElement("div",{className:"write-wrap"},c.a.createElement("div",{className:"flex"},c.a.createElement(_.a,{value:a.title,onChange:function(e){return i(e)},placeholder:"\u6587\u7ae0\u6807\u9898"}),c.a.createElement(d.a,{type:"primary",onClick:function(){if(a.title&&a.title){var e="".concat(l.host,"/articles/send"),t=new FormData;t.append("title",a.title),t.append("content",a.content),v()({url:e,method:"post",data:t}).then((function(e){console.log(e)}))}}},"\u4e0a\u4f20\u6587\u7ae0")),c.a.createElement("div",{className:"flex content"},c.a.createElement("div",{className:"inner-content"},c.a.createElement(G,{value:a.content,onChange:function(e){return i(e,"changeContent")},placeholder:"\u6587\u7ae0\u5185\u5bb9"})),c.a.createElement("div",{className:"inner-content"},c.a.createElement(I.a,{source:a.content}))))},z=a(8);a(322);var B=Object(E.b)((function(e){return Object(u.a)({},e)}),{getArticleList:function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat(e,"/articles"));case 2:n=t.sent,c=n.data,a({type:"GET_ARTICLE_LIST",val:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getTagsList:function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat(e,"/tags"));case 2:n=t.sent,c=n.data,a({type:"GET_TAGS_LIST",val:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useContext)(g);return Object(n.useEffect)((function(){e.getArticleList(t.host),e.getTagsList(t.host)}),[]),c.a.createElement(k.a,null,c.a.createElement(T,null,"zw"),c.a.createElement("div",{className:"app"},c.a.createElement(z.b,{path:"/index",component:C}),c.a.createElement(z.b,{path:"/catagory",component:A}),c.a.createElement(z.b,{path:"/tags",component:L}),c.a.createElement(z.a,{exact:!0,from:"/",to:"/index"}),c.a.createElement(z.b,{path:"/write",component:M})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(123),H=a.n(F),J=(a(323),a(124)),W=a.n(J),P=a(50),$=a(125),q={count:1,articleCount:0,tagsCount:0,articleList:[],tagsList:[],sortedArticle:[]};var K=Object(P.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.val;switch(a){case"ADD":return Object(u.a)(Object(u.a)({},e),{},{count:e.count+1});case"GET_ARTICLE_LIST":var c=n.list.sort((function(e,t){return t.time-e.time}));return Object(u.a)(Object(u.a)({},e),{},{articleCount:n.count,articleList:n.list,sortedArticle:c});case"GET_TAGS_LIST":return Object(u.a)(Object(u.a)({},e),{},{tagsCount:n.count,tagsList:n.list});default:return e}}),Object(P.a)($.a));b.extend(W.a),b.extend(H.a),b.locale("zh-cn");var Q={host:"http://39.96.31.138",dayjs:b};l.a.render(c.a.createElement(E.a,{store:K},c.a.createElement(g.Provider,{value:Q},c.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);
//# sourceMappingURL=main.ccdd12ff.chunk.js.map