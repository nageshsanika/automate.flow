(this["webpackJsonpautomate.flow"]=this["webpackJsonpautomate.flow"]||[]).push([[0],{11:function(e,t,a){e.exports={workflowContainer:"workflow_workflowContainer__201cI",nodes:"workflow_nodes__KpIcs",shuffle:"workflow_shuffle__B36mQ",add:"workflow_add__10yfi",delete:"workflow_delete__2DX8R",message:"workflow_message__1g3M4",goBack:"workflow_goBack__1yrG4"}},13:function(e,t,a){e.exports={workflowsContainer:"workflows_workflowsContainer__1oORw",workflows:"workflows_workflows__3DzZ7",createWorkflow:"workflows_createWorkflow__1T49Y",workflowClickWrapper:"workflows_workflowClickWrapper__3PYcd"}},16:function(e,t,a){e.exports={navbar:"header_navbar__1S2KZ",icon:"header_icon__2CeRL",navlinks:"header_navlinks__QqqLd",username:"header_username__1yRzT"}},17:function(e,t,a){e.exports={workflowCard:"card_workflowCard__3IfWZ",title:"card_title__25_dG",description:"card_description__3AxT0",footer:"card_footer__3GDSx",statusIcon:"card_statusIcon__3Twis"}},24:function(e,t,a){e.exports={largeIcon:"icon_largeIcon__29UOF",icon:"icon_icon__bhWCK"}},25:function(e,t,a){e.exports={search:"filter_search__3xeVs",label:"filter_label__t7nhG"}},26:function(e,t,a){e.exports={wrapperStyle:"modal_wrapperStyle__3kk3g",maskStyle:"modal_maskStyle__XEHy1",containerStyle:"modal_containerStyle__284zZ"}},38:function(e,t,a){e.exports={pageContent:"page_pageContent__1RiZs"}},40:function(e,t,a){e.exports=a(52)},45:function(e,t,a){},5:function(e,t,a){e.exports={landingContainer:"login_landingContainer__2hD3C",loginSection:"login_loginSection__24oNG",signupSection:"login_signupSection__oq0J5",label:"login_label__HZ8N3",bottomText:"login_bottomText__Tk1UU",message:"login_message__3LCjN",error:"login_error__1SUCU"}},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(45),a(7)),s=a(29),u=a(3),i=a(22),m=a(4),f=a(1),d=function(e){return JSON.parse(localStorage.getItem("automate.flow")).filter((function(t){return t.email===e})).length>0},g=function(){return JSON.parse(localStorage.getItem("flow.user"))},w=function(){var e=JSON.parse(localStorage.getItem("automate.flow")).filter((function(e){return e.email===g().email}));return Object(m.a)(e,1)[0]},p=function(e){var t=JSON.parse(localStorage.getItem("automate.flow")).map((function(t){return t.email===g().email?e:t}));return localStorage.setItem("automate.flow",JSON.stringify(t)),t},E=function(e){return function(t){t({type:"LOGIN_REQUEST"});var a=function(e){return(JSON.parse(localStorage.getItem("automate.flow"))||[]).filter((function(t){return t.email===e.email&&t.password===e.password}))}(e);a.length>0?(!function(e){delete e.workflows,delete e.password,localStorage.setItem("flow.user",JSON.stringify(e))}(a[0]),t({type:"LOGIN_REQUEST_SUCCESS",data:"success"}),window.location.reload(!1)):t({type:"LOGIN_REQUEST_FAIL",data:"Please enter correct email & password"})}},b=function(e){return function(t){t({type:"SIGNUP_REQUEST"});var a=function(e){var t=Object(f.a)(Object(f.a)({},e),{},{workflows:{}}),a=JSON.parse(localStorage.getItem("automate.flow"));return null===a?(localStorage.setItem("automate.flow",JSON.stringify([t])),{status:200,message:"User created successfully! Please Login to continue"}):d(e.email)?{status:400,message:"User with ".concat(e.email," already present in the system, Please Login to continue")}:(a.push(t),localStorage.setItem("automate.flow",JSON.stringify(a)),{status:200,message:"User created successfully! Please Login to continue"})}(e),n=a.status,r=a.message;t(200===n?{type:"SIGNUP_REQUEST_SUCCESS",data:r}:{type:"SIGNUP_REQUEST_FAIL",data:r})}},_=function(){return g()},v=function(){localStorage.removeItem("flow.user")},O=a(12),S=a(36),k=a(37),h={error:null,loading:!1,loginMessage:"",signUpMessage:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return Object(f.a)(Object(f.a)({},e),{},{loading:!0,loginMessageata:"",signUpMessage:"",error:null});case"LOGIN_REQUEST_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{error:null,loading:!1,loginMessage:t.data});case"LOGIN_REQUEST_FAIL":return Object(f.a)(Object(f.a)({},e),{},{loginMessage:"",error:t.data,loading:!1});case"SIGNUP_REQUEST":return Object(f.a)(Object(f.a)({},e),{},{loading:!0,signUpMessage:"",loginMessage:"",error:null});case"SIGNUP_REQUEST_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{error:null,loading:!1,signUpMessage:t.data});case"SIGNUP_REQUEST_FAIL":return Object(f.a)(Object(f.a)({},e),{},{signUpMessage:"",error:t.data,loading:!1});default:return e}},N={workflows:{},workflow:{}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_WORKFLOWS":return Object(f.a)(Object(f.a)({},e),{},{workflows:t.data});case"SET_CURRENT_WORKFLOW":return Object(f.a)(Object(f.a)({},e),{},{workflow:t.data});default:return e}},y=Object(O.c)({authStore:j,workflowsStore:C}),I=Object(k.createLogger)(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(O.d)(y,e,Object(O.a)(S.a,I))},W=a(24),L=a.n(W),T=function(){return r.a.createElement("span",{className:L.a.largeIcon},"\u2619")},P=function(){return r.a.createElement("span",{className:L.a.icon},"\u263a")},R=function(e){var t=e.color;return r.a.createElement("span",{className:L.a.icon,style:{color:t}},"\u2714")},x=a(16),M=a.n(x),G=function(e){var t=_();return r.a.createElement("div",{className:M.a.navbar},r.a.createElement("div",{className:M.a.icon},r.a.createElement(T,null),"automate.flow"),t&&r.a.createElement("div",{className:M.a.navlinks},r.a.createElement("a",{href:"#profile",className:M.a.username},r.a.createElement(P,null)," ",null===t||void 0===t?void 0:t.name),r.a.createElement("a",{onClick:function(){return v()},href:"/",className:M.a.logout},"Logout")))},Q=a(38),D=a.n(Q),F=function(e){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:D.a.pageContent},e.children))},J=a(5),B=a.n(J),A=function(){var e=Object(c.d)((function(e){return{auth:e.authStore}}),c.b).auth,t=Object(n.useState)(!0),a=Object(m.a)(t,2),o=a[0],l=a[1],s=Object(n.useState)({email:"",password:""}),u=Object(m.a)(s,2),i=u[0],d=u[1],g=Object(n.useState)({name:"",email:"",password:""}),w=Object(m.a)(g,2),p=w[0],_=w[1],v=Object(c.c)();return r.a.createElement(F,null,r.a.createElement("div",{className:B.a.landingContainer},o?r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),v(E(i))}(e)},className:B.a.loginSection},r.a.createElement("h2",null,"Login"),r.a.createElement("div",{className:B.a.label},"Email"),r.a.createElement("input",{value:i.email,onChange:function(e){return d(Object(f.a)(Object(f.a)({},i),{},{email:e.target.value}))},required:!0,name:"email",type:"email"}),r.a.createElement("div",{className:B.a.label},"Password"),r.a.createElement("input",{value:i.password,required:!0,onChange:function(e){return d(Object(f.a)(Object(f.a)({},i),{},{password:e.target.value}))},name:"password",type:"password"}),e.loginMessage&&r.a.createElement("div",{className:B.a.message},e.loginMessage),e.error&&r.a.createElement("div",{className:B.a.error},e.error),r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement("div",{onClick:function(){return l(!1)},className:B.a.bottomText},"Don't have an account? Signup here")):r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),v(b(p))}(e)},className:B.a.loginSection},r.a.createElement("h2",null,"Sign up"),r.a.createElement("div",{className:B.a.label},"Name"),r.a.createElement("input",{value:p.name,onChange:function(e){return _(Object(f.a)(Object(f.a)({},p),{},{name:e.target.value}))},required:!0,name:"name",type:"text"}),r.a.createElement("div",{className:B.a.label},"Email"),r.a.createElement("input",{value:p.email,onChange:function(e){return _(Object(f.a)(Object(f.a)({},p),{},{email:e.target.value}))},required:!0,name:"email",type:"email"}),r.a.createElement("div",{className:B.a.label},"Password"),r.a.createElement("input",{value:p.password,required:!0,onChange:function(e){return _(Object(f.a)(Object(f.a)({},p),{},{password:e.target.value}))},name:"password",type:"password"}),e.signUpMessage&&r.a.createElement("div",{className:B.a.message},e.signUpMessage),e.error&&r.a.createElement("div",{className:B.a.error},e.error),r.a.createElement("button",{type:"submit"},"Sing up"),r.a.createElement("div",{onClick:function(){return l(!0)},className:B.a.bottomText},"Already have an account? Login here"))))},q=a(25),K=a.n(q),Z=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:K.a.label},"Search"),r.a.createElement("input",{onChange:function(t){return e.filterByName(t.target.value)},placeholder:"Search by workflow name",className:K.a.search,type:"text"}),r.a.createElement("div",{className:K.a.label},"Filter"),r.a.createElement("select",{onChange:function(t){return e.filterByState(t.target.value)}},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"Completed"},"Completed"),r.a.createElement("option",{value:"Pending"},"Pending")))},z=a(17),H=a.n(z),X={Pending:{background:"#f2f2f2",color:"#000"},InProgress:{background:"rgb(26, 115, 232)",color:"#fff"},Completed:{background:"green",color:"#fff"}},Y=function(e){return r.a.createElement("div",{className:H.a.workflowCard},r.a.createElement("div",{className:H.a.statusIcon,onClick:function(t){t.preventDefault(),e.updateStaus(e.status)},style:Object(f.a)({},X[e.status])},r.a.createElement(R,null)),r.a.createElement("div",{className:H.a.title},e.title),e.description&&r.a.createElement("div",{className:H.a.description},e.description),r.a.createElement("div",{className:H.a.footer},r.a.createElement("div",null,e.status)))},V=a(26),$=a.n(V),ee=function(e){var t=e.children,a=e.isOpen,n=void 0!==a&&a,l=e.close,c=e.elementId,s=void 0===c?"root":c;return!1===n?null:Object(o.createPortal)(r.a.createElement("div",{className:$.a.wrapperStyle},r.a.createElement("div",{className:$.a.maskStyle,onClick:l}),r.a.createElement("div",{className:$.a.containerStyle},t)),document.getElementById(s))},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"root",t=Object(n.useState)(!1),a=Object(m.a)(t,2),o=a[0],l=a[1],c=Object(n.useCallback)((function(){l(!0)}),[l]),s=Object(n.useCallback)((function(){l(!1)}),[l]),u=Object(n.useCallback)((function(t){var a=t.children;return r.a.createElement(ee,{isOpen:o,close:s,elementId:e},a)}),[o,s,e]);return[u,c,s,o]},ae=a(13),ne=a.n(ae),re=function(){return function(e){e({type:"LIST_WORKFLOWS",data:w().workflows})}},oe=function(e){return function(t){t({type:"ADD_WORKFLOW"}),t({type:"LIST_WORKFLOWS",data:function(e){var t=w(),a=(new Date).getTime();return t.workflows=Object(f.a)(Object(f.a)({},t.workflows),{},Object(i.a)({},a,{name:e,status:"Pending",nodes:[],id:a})),p(t),t.workflows}(e)})}},le=function(e){return function(t){t({type:"LIST_WORKFLOWS",data:function(e){var t=w();return p(Object(f.a)(Object(f.a)({},t),{},{workflows:e})),e}(e)})}},ce=function(e){var t=Object(c.d)((function(e){return{workflows:e.workflowsStore.workflows}}),c.b).workflows,a=Object(c.c)(),o=Object(n.useState)([]),l=Object(m.a)(o,2),s=l[0],i=l[1],f=Object(n.useState)(""),d=Object(m.a)(f,2),g=d[0],w=d[1],p=te("addWorkflow"),E=Object(m.a)(p,3),b=E[0],_=E[1],v=E[2];Object(n.useEffect)((function(){a(re())}),[a]),Object(n.useEffect)((function(){i(Object.values(t))}),[t]);var O=function(e){var t=e.nodes,a=void 0===t?[]:t,n=a.length,o=a.filter((function(e){return"Pending"===e.status})).length,l=a.filter((function(e){return"InProgress"===e.status})).length,c=a.filter((function(e){return"Completed"===e.status})).length;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Total Nodes: ",n),r.a.createElement("small",null,"Pending: ",o),r.a.createElement("br",null),r.a.createElement("small",null,"InProgress: ",l),r.a.createElement("br",null),r.a.createElement("small",null,"Completed: ",c))},S=function(e){var t=e.nodes,a=void 0===t?[]:t,n=a.length,r=a.filter((function(e){return"Completed"===e.status})).length;return n>0&&r===n?"Completed":"Pending"},k=Object(u.f)();return r.a.createElement(F,null,r.a.createElement(b,null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(oe(g)),v()}(e)}},r.a.createElement("h2",null,"Add Workflow"),r.a.createElement("div",null,r.a.createElement("div",{className:ne.a.label},"Workflow Name"),r.a.createElement("input",{required:!0,onChange:function(e){return w(e.target.value)},value:g,type:"text"})),r.a.createElement("button",{type:"submit",className:ne.a.createWorkflow},"Submit"))),r.a.createElement("div",{id:"addWorkflow"}),r.a.createElement("h2",null,"Workflows"),r.a.createElement("div",{className:ne.a.workflowsContainer},r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:_,className:ne.a.createWorkflow},"+ Create New Workflow"),r.a.createElement(Z,{filterByName:function(e){return i(""===e?Object.values(t):Object.values(t).filter((function(t){return t.name.indexOf(e)>-1})))},filterByState:function(e){return i(""===e?Object.values(t):Object.values(t).filter((function(t){return S(t)===e})))}})),r.a.createElement("div",{className:ne.a.workflows},s.length>0?s.map((function(e){return r.a.createElement("div",{className:ne.a.workflowClickWrapper,onClick:function(){return k.push("/automate.flow/workflow/".concat(e.id))},key:e.id},r.a.createElement(Y,{title:e.name,status:S(e),description:O(e),updateStaus:function(){return null}}))})):"No Workflows found")))},se=a(33),ue=a.n(se),ie=a(39),me=a(20),fe=a(11),de=a.n(fe),ge=function(e){var t=e.match.params.id,a=Object(c.d)((function(e){return{workflows:e.workflowsStore.workflows}}),c.b).workflows,o=Object(c.c)(),l=Object(n.useState)([]),s=Object(m.a)(l,2),u=s[0],i=s[1],d=Object(n.useState)(!1),g=Object(m.a)(d,2),w=g[0],p=g[1];Object(n.useEffect)((function(){0===Object.values(a).length&&o(re())}),[o,a]);var E=a[t]||{},b=E.name,_=void 0===b?"":b,v=E.nodes,O=void 0===v?[]:v;Object(n.useEffect)((function(){i(O)}),[O]);var S=function(){var e=Object(ie.a)(ue.a.mark((function e(t,a,n){var r,o;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=function(){return"Pending"===a?"InProgress":"InProgress"===a?"Completed":"Completed"===a?"Pending":void 0},(o=Object(me.a)(u))[n]=Object(f.a)(Object(f.a)({},o[n]),{},{status:r()}),i(o);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement(F,null,r.a.createElement("a",{className:de.a.goBack,href:"/automate.flow"}," \u276e Back to Workflows"),w&&r.a.createElement("div",{className:de.a.message},"Workflow Saved Successfully!"),r.a.createElement("h2",null,_),r.a.createElement("div",{className:de.a.workflowContainer},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return function(){var e=Object(f.a)({},a);e[t].nodes=u,o(le(e)),p(!0),setTimeout((function(){return p(!1)}),3e3)}()},type:"button",className:de.a.add},"\u2713 Save"),u.filter((function(e){return"Completed"===e.status})).length===u.length?r.a.createElement("button",{type:"button",onClick:function(){return function(){for(var e=Object(me.a)(u),t=e.length,a=null,n=0;0!==t;)n=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[n],e[n]=a;i(e)}()},className:de.a.shuffle},"\u21a9 Shuffle"):null,r.a.createElement("button",{onClick:function(){return function(){var e=u.length+1,t={id:"Node ".concat(e),status:"Pending"};i([].concat(Object(me.a)(u),[t]))}()},type:"button",className:de.a.add},"\u2637 Add Node"),r.a.createElement("button",{onClick:function(){return function(){var e=Object(me.a)(u);e.pop(),i(e)}()},type:"button",className:de.a.delete},"\u2715 Delete")),r.a.createElement("div",{className:de.a.nodes},u.length>0?u.map((function(e,t){return r.a.createElement(Y,{title:e.id,key:e.id,status:e.status,updateStaus:function(a){return S(e,a,t)}})})):"No nodes found")))},we=function(){var e=_();return r.a.createElement(c.a,{store:U()},r.a.createElement(s.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/automate.flow",exact:!0,render:function(){return null!==e?r.a.createElement(ce,null):r.a.createElement(A,null)}}),r.a.createElement(u.a,{path:"/automate.flow/workflow/:id",exact:!0,render:function(t){return null!==e?r.a.createElement(ge,t):r.a.createElement(A,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.26d247cc.chunk.js.map