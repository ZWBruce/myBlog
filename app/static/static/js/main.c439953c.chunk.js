(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{146:function(e,t,a){e.exports=a(377)},151:function(e,t,a){},177:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},271:function(e,t,a){},370:function(e,t,a){},371:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=(a(151),a(52)),i=a.n(o),s=a(79),u=a(5),m=a(18),d=(a(156),a(137)),f=a.n(d),p=a(29),g=Object(n.createContext)({}),h=a(20),v=a(26),b=a.n(v);a(177);var E=Object(h.f)((function(e){var t=Object(n.useContext)(g),a=Object(n.useMemo)((function(){var a=e.info.img;return a||"".concat(t.host,"/files/download?name=1.jpg")}),[t.host,e.info.img]),r=Object(n.useMemo)((function(){return e.info.category}),[e.info]);return Object(n.useCallback)((function(){var a="".concat(t.host,"/articles/delete/").concat(e.info.id);b.a.get(a).then((function(e){console.log(e.data)}))}),[t.host,e.info.id]),c.a.createElement("div",{className:"article-wrap card-bg"},c.a.createElement("img",{src:a,alt:""}),c.a.createElement("div",{className:"content-wrap"},c.a.createElement("div",{className:"notice mb-7"},c.a.createElement("span",null,"1\u5929\u524d"),c.a.createElement("span",{onClick:function(){t.jump(e,r&&r.id,"catagory")},className:"link"},r&&r.category_name),""),c.a.createElement("h1",{className:"title link",onClick:function(){t.jump(e,e.info.id)}},e.info.title)))}));function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(n.useState)(t),c=Object(p.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){var t=null;return b.a.get(e,{cancelToken:new b.a.CancelToken((function(e){t=e}))}).then((function(e){e=e.data,l(e)})),function(){t()}}),[e]),r}var O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",a=Object(n.useMemo)((function(){return e.match.params[t]}),[t,e.match.params]);return a},y=function(){return Object(n.useContext)(g)};function C(e){var t=Object(n.useState)(e.url),a=Object(p.a)(t,2),r=a[0],l=a[1],o=j(r,{list:[],count:0}),i=o.list,s=o.count;return c.a.createElement(c.a.Fragment,null,i.map((function(e){return c.a.createElement(E,{info:e,key:e.id})})),c.a.createElement("div",{className:"pag-wraper"},c.a.createElement(f.a,{defaultPageSize:10,onChange:function(e){l((function(t){return"".concat(t,"?page=").concat(e)}))},defaultCurrent:1,total:s||11})))}a(261);var w=a(34),k=a.n(w);var N=Object(m.b)((function(e){return Object(u.a)({},e)}))(Object(h.f)((function(e){var t=Object(n.useContext)(g),a=k()(),r=k()(1598195948672);return console.log("dayjs",k.a.duration(a.diff(r))),c.a.createElement("div",{className:"card-content card-bg"},c.a.createElement("img",{src:"".concat(t.host,"/files/download?name=1.jpg"),alt:""}),c.a.createElement("span",{className:"name"},"\u51c9\u57ce"),c.a.createElement("span",null,"\u4e0d\u8d1f\u521d\u5fc3\uff0c\u65b9\u5f97\u59cb\u7ec8"),c.a.createElement("nav",{className:"level"},c.a.createElement("div",{className:"level-item link",onClick:function(){t.jump(e,"","index")}},c.a.createElement("p",{className:"heading"},"\u6587\u7ae0"),c.a.createElement("p",{className:"title"},e.articleCount)),c.a.createElement("div",{className:"level-item link",onClick:function(){t.jump(e,0,"catagory")}},c.a.createElement("p",{className:"heading"},"\u5206\u7c7b"),c.a.createElement("p",{className:"title"},e.ctgCount)),c.a.createElement("div",{className:"level-item link",onClick:function(){t.jump(e,0,"tags")}},c.a.createElement("p",{className:"heading"},"\u6807\u7b7e"),c.a.createElement("p",{className:"title"},e.tagsCount))))})));a(262);var _=Object(m.b)((function(e){return Object(u.a)({},e)}))(Object(h.f)((function(e){var t=Object(n.useContext)(g),a=Object(n.useState)([]),r=Object(p.a)(a,2),l=r[0],o=r[1],i=Object(n.useCallback)((function(e){return e=+e,k()(e).format("YYYY-MM-DD HH:mm:ss")}),[]);return Object(n.useEffect)((function(){o(e.sortedArticle)}),[e.sortedArticle]),c.a.createElement("div",{className:"list-wrap card-bg"},c.a.createElement("div",{className:"notice mb-10"},"\u6700\u65b0\u6587\u7ae0"),c.a.createElement("div",null,l.map((function(a){return c.a.createElement("div",{className:"item-wrap",key:a.id},c.a.createElement("img",{src:a.img||"".concat(t.host,"/files/download?name=1.jpg"),alt:a.title}),c.a.createElement("div",{className:"item-right"},c.a.createElement("div",{className:"date notice"},i(a.time)),c.a.createElement("div",{className:"title link",onClick:function(){t.jump(e,a.id)}},a.title),c.a.createElement("div",{className:"tag-wrap"},a.tags.map((function(a,n){return c.a.createElement("div",{className:"tag notice link",key:n,onClick:function(){t.jump(e,a.id,"tags")}},a.tag_name)})))))}))))})));a(263);var T=Object(m.b)((function(e,t){return Object(u.a)(Object(u.a)({},e),t)}))(Object(h.f)((function(e){var t=O(e)||0,a=y(),r=j("".concat(a.host,"/category/articles/").concat(t)),l=(r.list,r.count,Object(n.useMemo)((function(){var t=e.ctgList;return e.noLimit?t:t.slice(0,7)}),[e])),o=Object(n.useMemo)((function(){return"/catagory/0"===e.location.pathname}),[e.location.pathname]);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.log("jump","/catagory/"+t,e.location.pathname),e.location.pathname!=="/catagory/"+t&&e.history.push("/catagory/"+t)}var s=Object(n.useMemo)((function(){return l.filter((function(e){return+e.id===+t}))[0]||{}}),[t,l]);return console.log(e.card,s,e.card||s),c.a.createElement("div",{className:"ctg-wrap card-bg"},e.card||!s.category_name?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"notice mb-10 card-head"},c.a.createElement("span",null,"\u5206\u7c7b"),c.a.createElement("a",{onClick:function(e){e.preventDefault(),i()},href:"890",style:{visibility:o?"hidden":"visible"}},"\u67e5\u770b\u66f4\u591a")),c.a.createElement("ul",null,l.map((function(e){return c.a.createElement("li",{className:"item-wrap",key:e.id,onClick:function(){return i(e.id)}},c.a.createElement("span",null,e.category_name),c.a.createElement("span",null,e.count))})))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"\u5f53\u524d\u4f4d\u7f6e: ",c.a.createElement("span",{className:"link",onClick:function(){e.history.push("/catagory/0")}},"\u5206\u7c7b")," / ",s.category_name),c.a.createElement(C,{url:"".concat(a.host,"/category/articles/").concat(t)})))})));a(264);var x=Object(m.b)((function(e){return Object(u.a)({},e)}))(Object(h.f)((function(e){var t=Object(n.useMemo)((function(){return"/tags/0"===e.location.pathname}),[e.location.pathname]);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.location.pathname!=="/tags/"+t&&e.history.push("/tags/"+t)}return c.a.createElement("div",{className:"tag-wrap card-bg"},c.a.createElement("div",{className:"notice mb-10 card-head"},c.a.createElement("span",null,"\u6807\u7b7e"),c.a.createElement("a",{onClick:function(e){e.preventDefault(),a()},href:"123",style:{visibility:t?"hidden":"visible"}},"\u67e5\u770b\u66f4\u591a")),c.a.createElement("ul",null,e.tagsList.map((function(e){return c.a.createElement("li",{className:"item-wrap",key:e.id},c.a.createElement("a",{onClick:function(t){t.preventDefault(),a(e.id)},href:"123"},e.tag_name))}))))})));var L=Object(m.b)((function(e){return Object(u.a)({},e)}))(Object(h.f)((function(e){var t=Object(n.useMemo)((function(){return e.location.pathname.startsWith("/article/")}),[e.location.pathname]);return c.a.createElement("div",{className:"app main-wrapp"},c.a.createElement("div",{className:"flex-left"},c.a.createElement(N,null),c.a.createElement(T,{card:!0}),c.a.createElement(x,null)),c.a.createElement("div",{className:"flex-center",style:{width:t?"75%":"50%"}},c.a.Children.map(e.children,(function(e){return c.a.createElement(c.a.Fragment,null,e)}))),t?"":c.a.createElement("div",{className:"flex-right"},c.a.createElement(_,null)))})));var G=Object(m.b)((function(e){return Object(u.a)({},e)}))((function(){var e=y();return c.a.createElement(L,null,c.a.createElement(C,{url:"".concat(e.host,"/articles/list")}))})),A=a(33),S=(a(265),function(e){return c.a.createElement("nav",{className:"app-header"},c.a.createElement("div",{className:"app app-inner-header"},c.a.Children.map(e.children,(function(e){return c.a.createElement("div",null,e)})),c.a.createElement("div",{className:"links"},[{text:"\u4e3b\u9875",url:"/index"},{text:"\u5206\u7c7b",url:"/catagory/0"},{text:"\u6807\u7b7e",url:"/tags/0"}].map((function(e,t){var a=e.url,n=e.text;return c.a.createElement(A.b,{to:a,key:t,activeClassName:"active"},n)})))))});var D=Object(m.b)((function(e,t){return Object(u.a)(Object(u.a)({},e),t)}))((function(e){return c.a.createElement(L,null,c.a.createElement(T,null))}));var M=Object(m.b)((function(e){return Object(u.a)({},e)}))(Object(h.f)((function(e){var t=O(e)||0,a=y(),r=j("".concat(a.host,"/tags/articles/").concat(t)),l=r.list;r.count;var o=Object(n.useMemo)((function(){return console.log({tagList:e.tagsList}),e.tagsList.filter((function(e){return+e.id===+t}))[0]}),[t,e.tagsList]);return console.log(o,e.tagsList),c.a.createElement(L,null,c.a.createElement("div",{className:"ctg-wrap card-bg"},o?c.a.createElement("div",null,"\u5f53\u524d\u4f4d\u7f6e: ",c.a.createElement("span",{className:"link",onClick:function(){e.history.push("/tags/0")}},"\u6807\u7b7e")," / ",o.tag_name):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"notice mb-10"},"\u6807\u7b7e"),c.a.createElement("ul",null,e.tagsList.map((function(t){return c.a.createElement("li",{className:"item-wrap",key:t.id,onClick:function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.location.pathname!=="/tags/"+t&&e.history.push("/tags/"+t)}(t.id)}},c.a.createElement("span",null,t.tag_name),c.a.createElement("span",null,t.articles.length))})))),t&&l&&l.length?c.a.createElement(C,{url:"".concat(a.host,"/tags/articles/").concat(t)}):""))}))),$=(a(266),a(96)),I=a.n($),F=(a(125),a(51)),R=a.n(F),H=a(58),P=(a(269),a(59)),B=a.n(P),V=(a(99),a(55)),Y=a.n(V),W=(a(271),a(77)),z=a.n(W),J=Y.a.Option,q=B.a.TextArea,K={title:"",content:"",tags:[],img:"",ctg:{}};function Q(e,t){var a=e.tags,n=t.val;switch(t.type){case"changeTitle":return Object(u.a)(Object(u.a)({},e),{},{title:n});case"changeContent":return Object(u.a)(Object(u.a)({},e),{},{content:n});case"ADD_TAG":return a.every((function(e){return e.id!==n.id}))&&a.push(n),Object(u.a)(Object(u.a)({},e),{},{tags:Object(H.a)(a)});case"REMOVE_TAG":return a=a.filter((function(e){return e.id!==n})),Object(u.a)(Object(u.a)({},e),{},{tags:Object(H.a)(a)});case"CHANGE_IMG":return Object(u.a)(Object(u.a)({},e),{},{img:n});case"GET_CTG":return Object(u.a)(Object(u.a)({},e),{},{ctg:n});case"REMOVE_CTG":return Object(u.a)(Object(u.a)({},e),{},{ctg:""});default:return e}}var U=Object(m.b)((function(e){return Object(u.a)({},e)}),{add_tag:function(e){return{type:"ADD_TAG",val:e}},add_ctg:function(e){return{type:"ADD_CTG",val:e}}})(Object(h.f)((function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),f=d[0],h=d[1],v=Object(n.useContext)(g),E=Object(n.useRef)(null),O=y(),C=Object(n.useMemo)((function(){return e.match.params.id}),[e.match.params.id]);console.log("params",e.match.params);var w=j("".concat(O.host,"/articles/").concat(C),{content:"",title:"",time:0,tags:[],category:{}}),k=Object(n.useReducer)(Q,K),N=Object(p.a)(k,2),_=N[0],T=N[1];function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"changeTitle";T({type:t,val:e.target.value})}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tags";if(("tags"!==t||r)&&("category"!==t||s)){var a="".concat(v.host,"/").concat(t,"/add"),n=new FormData;"tags"===t&&n.append("name",r),"category"===t&&n.append("name",s),b()({url:a,method:"post",data:n}).then((function(a){var n=a.data;console.log(n),"tags"===t&&e.add_tag(n),"category"===t&&e.add_ctg(n)}))}}var G=Object(n.useCallback)((function(e){var t=e.split("$_$")[0],a=e.split("$_$")[1];T({type:"ADD_TAG",val:{tag_name:t,id:a}})}),[]),A=Object(n.useCallback)((function(e){var t=e.split("$_$")[0];T({type:"GET_CTG",val:{name:t,id:e.split("$_$")[1]}})}),[]),S=Object(n.useCallback)((function(){console.log("blur")}),[]),D=Object(n.useCallback)((function(e){console.log("search",e)}),[]);return c.a.createElement("div",{className:"write-wrap"},c.a.createElement("div",{className:"flex"},c.a.createElement(B.a,{value:_.title||w.title,onChange:function(e){return x(e)},placeholder:"\u6587\u7ae0\u6807\u9898"}),c.a.createElement(R.a,{type:"primary",onClick:function(){if(console.log({info:w}),_.title&&_.content||w.title&&w.content){var e=w?"".concat(v.host,"/articles/update/").concat(C):"".concat(v.host,"/articles/send"),t=new FormData;t.append("title",_.title||w.title),t.append("content",_.content||w.content);var a=(_.tags.length?_.tags:w.tags).map((function(e){return e.id}));t.append("tag_id",a.join()),t.append("img",_.img||w.img),t.append("category",_.ctg.id||w.category.id),b()({url:e,method:"post",data:t}).then((function(e){console.log(e)}))}}},w?"\u66f4\u65b0":"\u4e0a\u4f20","\u6587\u7ae0")),c.a.createElement("div",{className:"flex"},c.a.createElement(B.a,{type:"text",value:r,onChange:function(e){l(e.target.value)}}),c.a.createElement(R.a,{type:"primary",onClick:function(){L()}},"\u65b0\u589e\u6807\u7b7e")),c.a.createElement("div",{className:"flex"},c.a.createElement(B.a,{type:"text",value:s,onChange:function(e){u(e.target.value)}}),c.a.createElement(R.a,{type:"primary",onClick:function(){L("category")}},"\u65b0\u589e\u5206\u7c7b")),c.a.createElement("div",{className:"flex"},c.a.createElement("input",{type:"file",ref:E}),c.a.createElement(R.a,{type:"primary",onClick:function(){var e=E.current.files;if(e.length){var t=new FormData;t.append("image",e[0]),t.append("msg","abcd"),b()({url:"".concat(v.host,"/upload"),method:"post",data:t}).then((function(e){console.log(e);var t=v.host+e.data.data;T({type:"CHANGE_IMG",val:t})}))}}},"\u4e0a\u4f20\u56fe\u7247")),c.a.createElement("div",{className:"flex"},c.a.createElement(B.a,{type:"text",value:f,onChange:function(e){h(e.target.value)}}),c.a.createElement(R.a,{type:"primary",onClick:function(){T({type:"CHANGE_IMG",val:f})}},"\u4f7f\u7528\u5df2\u6709\u56fe\u7247")),c.a.createElement("img",{src:_.img||w.img,alt:"\u5c01\u9762\u56fe\u7247",style:{height:_.img||w.img?"100px":"0px",width:"auto",visibility:_.img||w.img?"visible":"hidden",display:"block"}}),c.a.createElement(Y.a,{showSearch:!0,style:{width:200},placeholder:"Select a tag",optionFilterProp:"children",onChange:G,onBlur:S,onSearch:D,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},e.tagsList.map((function(e){return c.a.createElement(J,{value:"".concat(e.tag_name,"$_$").concat(e.id),key:e.id},e.tag_name)}))),_.tags.map((function(e){return c.a.createElement(I.a,{color:"#2db7f5",key:e.id,closable:!0,onClose:function(){!function(e){T({type:"REMOVE_TAG",val:e})}(e.id)}},e.tag_name)})),c.a.createElement("br",null),c.a.createElement(Y.a,{showSearch:!0,style:{width:200},placeholder:"Select a \u5206\u7c7b",optionFilterProp:"children",onChange:A,onBlur:S,onSearch:D,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},e.ctgList.map((function(e){return c.a.createElement(J,{value:"".concat(e.category_name,"$_$").concat(e.id),key:e.id},e.category_name)}))),_.ctg.name?c.a.createElement(I.a,{color:"#2db7f5",closable:!0,onClose:function(){T({type:"REMOVE_CTG"})}},_.ctg.name||w.category&&w.category.category_name):"",c.a.createElement("br",null),c.a.createElement("div",{className:"flex content"},c.a.createElement("div",{className:"inner-content"},c.a.createElement(q,{value:_.content||w.content,onChange:function(e){return x(e,"changeContent")},placeholder:"\u6587\u7ae0\u5185\u5bb9"})),c.a.createElement("div",{className:"inner-content"},c.a.createElement(z.a,{source:_.content||w.content}))))})));a(370);function X(){var e=Object(n.useContext)(g),t=Object(n.useState)([]),a=Object(p.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){b.a.get("".concat(e.host,"/files/ls")).then((function(t){var a=t.data;l(a.list.map((function(t){return e.host+t.name})))}))}),[e.host]),c.a.createElement("div",{className:"gallary-wrap"},c.a.createElement("h1",null,"\u56fe\u5e93"),c.a.createElement("div",{className:"inner-wrap"},r.map((function(t,a){return c.a.createElement("div",{key:a,className:"img-wrap"},c.a.createElement("img",{src:t,alt:t}),c.a.createElement("br",null),c.a.createElement("span",{onClick:function(){!function(t){var a=document.createElement("input");a.value=t,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),e.showToast("\u62f7\u8d1d\u56fe\u7247\u5730\u5740\u6210\u529f")}(t)}},t))}))))}a(371);var Z=function(e){var t=Object(n.useContext)(g),a=Object(n.useMemo)((function(){return e.match.params.id}),[e.match.params.id]),r=j("".concat(t.host,"/articles/").concat(a),{content:"",title:"",time:0,tags:[],category:{}}),l=Object(n.useMemo)((function(){return!r.content.trim().match(/^#\s/)}),[r]);return c.a.createElement(L,null,c.a.createElement("div",{className:"article-info-wrap card-bg"},c.a.createElement("h1",{style:{display:l?"block":"none"}},r.title),c.a.createElement(z.a,{source:r.content})))};a(372),a(373);var ee=Object(m.b)((function(e){return Object(u.a)({},e)}),{getArticleList:function(e){return function(){var t=Object(s.a)(i.a.mark((function t(a){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(e,"/articles"));case 2:n=t.sent,c=n.data,a({type:"GET_ARTICLE_LIST",val:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getTagsList:function(e){return function(){var t=Object(s.a)(i.a.mark((function t(a){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(e,"/tags"));case 2:n=t.sent,c=n.data,a({type:"GET_TAGS_LIST",val:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getCtgList:function(e){return function(){var t=Object(s.a)(i.a.mark((function t(a){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(e,"/category/count"));case 2:n=t.sent,c=n.data,a({type:"GET_CTG_LIST",val:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useContext)(g),a=Object(n.useMemo)((function(){return[{path:"/index",cmp:G},{path:"/catagory/:id",cmp:D},{path:"/tags/:id",cmp:M},{path:"/write/:id",cmp:U},{path:"/pic",cmp:X},{path:"/article/:id",cmp:Z}]}),[]);return Object(n.useEffect)((function(){e.getArticleList(t.host),e.getTagsList(t.host),e.getCtgList(t.host)}),[]),c.a.createElement(A.a,null,c.a.createElement(S,null,c.a.createElement("span",null)),c.a.createElement("div",{className:"app"},a.map((function(e,t){return c.a.createElement(h.b,{path:e.path,component:e.cmp,key:t})})),c.a.createElement(h.a,{exact:!0,from:"/write",to:"/write/0"}),c.a.createElement(h.a,{exact:!0,from:"/",to:"/index"})))})),te=a(139),ae=a(140),ne=a(78),ce=a(145),re=a(144),le=(a(374),function(e){Object(ce.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this,e)).timer=null,n.state={show:!1,msg:""},a.showToast=n.show.bind(Object(ne.a)(n)),n}return Object(ae.a)(a,[{key:"show",value:function(e){var t=this;clearTimeout(this.timer),this.setState({show:!0,msg:e},(function(){t.stopTimer()}))}},{key:"stopTimer",value:function(){var e=this;this.timer=setTimeout((function(){e.setState({show:!1})}),2e3)}},{key:"render",value:function(){return l.a.createPortal(c.a.createElement("div",{className:"toast",style:{display:this.state.show?"block":"none"}},this.state.msg),document.body)}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(141),ie=a.n(oe),se=(a(375),a(142)),ue=a.n(se),me=a(64),de=a(143),fe={count:1,articleCount:0,tagsCount:0,ctgCount:0,articleList:[],tagsList:[],sortedArticle:[],ctgList:[]};var pe=Object(me.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.val,c=e.tagsList,r=e.ctgList;switch(a){case"ADD":return Object(u.a)(Object(u.a)({},e),{},{count:e.count+1});case"GET_ARTICLE_LIST":var l=n.list.sort((function(e,t){return t.time-e.time})).slice(0,5);return Object(u.a)(Object(u.a)({},e),{},{articleCount:n.count,articleList:n.list,sortedArticle:l});case"GET_TAGS_LIST":return Object(u.a)(Object(u.a)({},e),{},{tagsCount:n.count,tagsList:n.list});case"ADD_TAG":return c.push(n),console.log({tagsList:c}),Object(u.a)(Object(u.a)({},e),{},{tagsList:Object(H.a)(c)});case"GET_CTG_LIST":return Object(u.a)(Object(u.a)({},e),{},{ctgCount:n.count,ctgList:n.list});case"ADD_CTG":return r.push(n),console.log({ctgList:r}),Object(u.a)(Object(u.a)({},e),{},{ctgList:Object(H.a)(r)});default:return e}}),Object(me.a)(de.a));w.extend(ue.a),w.extend(ie.a),w.locale("zh-cn");var ge=document.createElement("div");ge.id="cmp-container",document.body.appendChild(ge);var he={host:"http://39.96.31.138",dayjs:w,showToast:function(e){le.showToast(e)},jump:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"article";e.history.push("/".concat(a).concat(""!==t?"/"+t:""))}};l.a.render(c.a.createElement(m.a,{store:pe},c.a.createElement(g.Provider,{value:he},c.a.createElement(ee,null)),c.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.c439953c.chunk.js.map