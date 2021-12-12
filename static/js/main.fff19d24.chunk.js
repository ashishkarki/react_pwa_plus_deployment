(this["webpackJsonpdeployment-pwa"]=this["webpackJsonpdeployment-pwa"]||[]).push([[0],{21:function(e,t,n){e.exports=n(63)},33:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=n(2),l=n(7),s=n(15),u=n(18),d=(n(32),n(33),n(5)),h=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},p=d.a.div({display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",width:"100%",margin:"0 auto",padding:"0","@media (min-width: 768px)":{width:"80%"},"@media (min-width: 1024px)":{width:"60%"}}),f=function(e){var t=e.robots;return console.log("CardList"),a.a.createElement(p,null,t.map((function(e,n){return a.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},g=d.a.div({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"20%",height:"100%",backgroundColor:"#f5f5f5",borderRadius:"5px",margin:"0.3rem auto",padding:"10px",boxShadow:"0px 0px 5px #888888","& input":{width:"100%",height:"100%",border:"none",outline:"none",fontSize:"1.2em",padding:"10px",backgroundColor:"transparent","&:focus":{backgroundColor:"transparent"}}}),m=function(e){var t=e.searchChange;return console.log("SearchBox"),a.a.createElement(g,{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},E=n(16),v=n(17),w=n(20),O=n(19),S=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(v.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(a.a.Component);n(62);var y=a.a.memo((function(e){var t=e.title,n=void 0===t?"RoboFriends":t;return console.log("MyHeader.render()"),a.a.createElement("h1",{className:"f1"},n)})),j=function(){var e=Object(i.c)((function(e){return e.searchTerm})).searchTerm,t=Object(i.c)((function(e){return e.requestRobots})),n=Object(i.b)(),o=Object(r.useCallback)((function(){return n((function(e){console.log("actions.js - requestRobotsAction",e),e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}),[])}));Object(r.useEffect)((function(){console.log("App.js useEffect, disptaching action"),o()}),[]);var c=t.robots.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return t.isPending?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(y,null),a.a.createElement(m,{searchChange:function(e){n(function(e){return{type:"SET_SEARCH_TERM",payload:e}}(e.target.value))}}),a.a.createElement(b,null,a.a.createElement(S,null,a.a.createElement(f,{robots:c}))))},R=n(1),T={searchTerm:""},C={isPending:!1,robots:[],error:""},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},L=Object(s.createLogger)({collapsed:!0}),N=Object(l.b)({searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_SEARCH_TERM":return Object(R.a)(Object(R.a)({},e),{},{searchTerm:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("requestRobotsReducer, action:",t,e),t.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(R.a)(Object(R.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),P=Object(l.c)(N,Object(l.a)(u.a,L));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:P},a.a.createElement(j,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react_pwa_plus_deployment",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react_pwa_plus_deployment","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):k(t,e)}))}}(),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.fff19d24.chunk.js.map