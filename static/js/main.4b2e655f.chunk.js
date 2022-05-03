(this["webpackJsonpsimple-webrtc-app"]=this["webpackJsonpsimple-webrtc-app"]||[]).push([[0],{145:function(e,n,t){e.exports=t(284)},151:function(e,n,t){},167:function(e,n,t){},284:function(e,n,t){"use strict";t.r(n);t(146);var a=t(0),c=t.n(a),r=t(35),o=t.n(r),l=(t(151),t(20)),i=t(50),s=t(51),u=t(300),m=t(27),d=t(298),f=t(291),g=t(285),E=t(299),b=t(292),p=t(42),O=t.n(p),C=t(134),h=(t(167),t(296)),v=t(295),j=t(135),w=t(62),S=t.n(w),y=function(e){var n=e.users,t=e.toggleConnection,a=e.connectedTo,r=e.connecting;return c.a.createElement(d.a.Column,{width:5},c.a.createElement(h.a,{fluid:!0},c.a.createElement(h.a.Content,{header:"Online Users"}),c.a.createElement(h.a.Content,{textAlign:"left"},n.length&&c.a.createElement(v.a,{divided:!0,verticalAlign:"middle",size:"large"},n.map((function(e){var n=e.userName;return c.a.createElement(v.a.Item,{key:n},c.a.createElement(v.a.Content,{floated:"right"},c.a.createElement(g.a,{onClick:function(){t(n)},disabled:!!a&&a!==n,loading:a===n&&r},a===n?"Disconnect":"Connect")),c.a.createElement(j.a,{avatar:!0,src:S.a}),c.a.createElement(v.a.Content,null,c.a.createElement(v.a.Header,null,n)))})))||c.a.createElement(E.a,null,"There are no users Online"))))},k=t(301),D=t(294),T=t(297),A=function(e){var n=e.messages,t=e.connectedTo,a=e.message,r=e.setMessage,o=e.sendMsg,l=e.name;return c.a.createElement(d.a.Column,{width:11},c.a.createElement(k.a,null,c.a.createElement(h.a,{fluid:!0},c.a.createElement(h.a.Content,{header:t||"Not chatting with anyone currently"}),c.a.createElement(h.a.Content,null,t&&n[t]?c.a.createElement(D.a.Group,null,n[t].map((function(e){var n=e.name,t=e.message,a=e.time;return c.a.createElement(D.a,{key:"msg-".concat(l,"-").concat(a)},c.a.createElement(D.a.Avatar,{src:S.a}),c.a.createElement(D.a.Content,null,c.a.createElement(D.a.Author,null,n===l?"You":n),c.a.createElement(D.a.Metadata,null,c.a.createElement("span",null,Object(T.a)(new Date(a),new Date))),c.a.createElement(D.a.Text,null,t)))}))):c.a.createElement(E.a,{placeholder:!0},c.a.createElement(u.a,{icon:!0},c.a.createElement(m.a,{name:"discussions"}),"No messages available yet")),c.a.createElement(f.a,{fluid:!0,type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Type message",action:!0},c.a.createElement("input",null),c.a.createElement(g.a,{color:"teal",disabled:!a,onClick:o},c.a.createElement(m.a,{name:"send"}),"Send Message"))))))},x={iceServers:[{url:"stun:stun.1.google.com:19302"}]},B=function(e){var n=e.connection,t=e.updateConnection,r=e.channel,o=e.updateChannel,p=Object(a.useState)(!1),h=Object(l.a)(p,2),v=h[0],j=h[1],w=Object(a.useState)([]),S=Object(l.a)(w,2),k=S[0],D=S[1],T=Object(a.useState)(!1),B=Object(l.a)(T,2),N=B[0],R=B[1],L=Object(a.useState)(""),M=Object(l.a)(L,2),U=M[0],I=M[1],J=Object(a.useState)(!1),P=Object(l.a)(J,2),F=P[0],_=P[1],W=Object(a.useState)([]),H=Object(l.a)(W,2),z=H[0],G=H[1],K=Object(a.useState)(""),V=Object(l.a)(K,2),Y=V[0],$=V[1],q=Object(a.useState)(!1),Q=Object(l.a)(q,2),X=Q[0],Z=Q[1],ee=Object(a.useState)(null),ne=Object(l.a)(ee,2),te=ne[0],ae=ne[1],ce=Object(a.useRef)(),re=Object(a.useRef)(null),oe=Object(a.useState)(""),le=Object(l.a)(oe,2),ie=le[0],se=le[1],ue=Object(a.useRef)({}),me=Object(a.useState)({}),de=Object(l.a)(me,2),fe=de[0],ge=de[1],Ee=Object({NODE_ENV:"production",PUBLIC_URL:"/web-rtc-app"}).REACT_APP_WEBSOCKET_URL||"ws://localhost:9000";Object(a.useEffect)((function(){return re.current=new WebSocket(Ee),re.current.onmessage=function(e){var n=JSON.parse(e.data);D((function(e){return[].concat(Object(s.a)(e),[n])}))},re.current.onclose=function(){re.current.close()},function(){return re.current.close()}}),[]),Object(a.useEffect)((function(){var e=k.pop();if(e)switch(e.type){case"connect":j(!0);break;case"login":ve(e);break;case"updateUsers":Oe(e);break;case"removeUser":Ce(e);break;case"offer":je(e);break;case"answer":we(e);break;case"candidate":Se(e)}}),[k]);var be=function(){ae(null)},pe=function(e){re.current.send(JSON.stringify(e))},Oe=function(e){var n=e.user;G((function(e){return[].concat(Object(s.a)(e),[n])}))},Ce=function(e){var n=e.user;G((function(e){return e.filter((function(e){return e.userName!==n.userName}))}))},he=function(e){var n=e.data,t=JSON.parse(n),a=t.name,c=ue.current,r=c[a];if(r){r=[].concat(Object(s.a)(r),[t]);var o=Object.assign({},c,Object(i.a)({},a,r));ue.current=o,ge(o)}else{var l=Object.assign({},c,Object(i.a)({},a,[t]));ue.current=l,ge(l)}},ve=function(e){var n=e.success,a=e.message,r=e.users;if(_(!1),n){ae(c.a.createElement(O.a,{success:!0,title:"Success!",onConfirm:be,onCancel:be},"Logged in successfully!")),R(!0),G(r);var l=new RTCPeerConnection(x);l.onicecandidate=function(e){var n=e.candidate,t=ce.current;n&&t&&pe({name:t,type:"candidate",candidate:n})},l.ondatachannel=function(e){console.log("Data channel is created!");var n=e.channel;n.onopen=function(){console.log("Data channel is open and ready to be used.")},n.onmessage=he,o(n)},t(l)}else ae(c.a.createElement(O.a,{warning:!0,confirmBtnBsStyle:"danger",title:"Failed",onConfirm:be,onCancel:be},a))},je=function(e){var t=e.offer,a=e.name;$(a),ce.current=a,n.setRemoteDescription(new RTCSessionDescription(t)).then((function(){return n.createAnswer()})).then((function(e){return n.setLocalDescription(e)})).then((function(){return pe({type:"answer",answer:n.localDescription,name:a})})).catch((function(e){console.log({e:e}),ae(c.a.createElement(O.a,{warning:!0,confirmBtnBsStyle:"danger",title:"Failed",onConfirm:be,onCancel:be},"An error has occurred."))}))},we=function(e){var t=e.answer;n.setRemoteDescription(new RTCSessionDescription(t))},Se=function(e){var t=e.candidate;n.addIceCandidate(new RTCIceCandidate(t))};return c.a.createElement("div",{className:"App"},te,c.a.createElement(u.a,{as:"h2",icon:!0},c.a.createElement(m.a,{name:"users"}),"Chat App"),v&&c.a.createElement(a.Fragment,null,c.a.createElement(d.a,{centered:!0,columns:4},c.a.createElement(d.a.Column,null,!N&&c.a.createElement(f.a,{fluid:!0,disabled:F,type:"text",onChange:function(e){return I(e.target.value)},placeholder:"Username...",action:!0},c.a.createElement("input",null),c.a.createElement(g.a,{color:"teal",disabled:!U||F,onClick:function(){_(!0),pe({type:"login",name:U})}},c.a.createElement(m.a,{name:"sign-in"}),"Login"))||c.a.createElement(E.a,{raised:!0,textAlign:"center",color:"olive"},"Logged In as: ",U))),c.a.createElement(d.a,null,c.a.createElement(y,{users:z,toggleConnection:function(e){ce.current===e?(Z(!0),$(""),ce.current="",Z(!1)):(Z(!0),$(e),ce.current=e,function(e){var t=n.createDataChannel("messenger");t.onerror=function(e){ae(c.a.createElement(O.a,{warning:!0,confirmBtnBsStyle:"danger",title:"Failed",onConfirm:be,onCancel:be},"An error has occurred."))},t.onmessage=he,o(t),n.createOffer().then((function(e){return n.setLocalDescription(e)})).then((function(){return pe({type:"offer",offer:n.localDescription,name:e})})).catch((function(e){return ae(c.a.createElement(O.a,{warning:!0,confirmBtnBsStyle:"danger",title:"Failed",onConfirm:be,onCancel:be},"An error has occurred."))}))}(e),Z(!1))},connectedTo:Y,connection:X}),c.a.createElement(A,{messages:fe,connectedTo:Y,message:ie,setMessage:se,sendMsg:function(){var e={time:Object(C.a)(new Date,"yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),message:ie,name:U},n=ue.current,t=ce.current,a=n[t];if(n[t]){a=[].concat(Object(s.a)(a),[e]);var c=Object.assign({},n,Object(i.a)({},t,a));ue.current=c,ge(c)}else a=Object.assign({},n,Object(i.a)({},t,[e])),ue.current=a,ge(a);r.send(JSON.stringify(e)),se("")},name:U})))||c.a.createElement(b.a,{size:"massive",active:!0,inline:"centered"},"Loading"))},N=function(){return c.a.createElement(M,null,(function(e){var n=e.connection,t=e.updateConnection;return c.a.createElement(U,null,(function(e){var a=e.channel,r=e.updateChannel;return c.a.createElement(B,{connection:n,updateConnection:t,channel:a,updateChannel:r})}))}))},R=Object(a.createContext)({connection:null,updateConnection:function(){}}),L=Object(a.createContext)({channel:null,updateChannel:function(){}}),M=R.Consumer,U=L.Consumer,I=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(null),i=Object(l.a)(o,2),s=i[0],u=i[1];return c.a.createElement(R.Provider,{value:{connection:t,updateConnection:function(e){r(e)}}},c.a.createElement(L.Provider,{value:{channel:s,updateChannel:function(e){u(e)}}},c.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,n,t){e.exports=t.p+"static/media/avatar.315cf354.png"}},[[145,1,2]]]);
//# sourceMappingURL=main.4b2e655f.chunk.js.map