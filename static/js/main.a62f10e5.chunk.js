(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),o=n.n(i),a=n(5),r=n.n(a),s=(n(12),n(2)),u=(n(13),n(3));function l(e){var t=Object(i.useRef)(null),n=Object(i.useRef)(null),o=Object(i.useState)(!1),a=Object(s.a)(o,2),r=a[0],l=a[1],d=t.current;Object(i.useEffect)((function(){(d=t.current).width=window.innerWidth/2,d.height=window.innerHeight/2,d.style.width="$(window.innerWidth)px",d.style.height="$(window.innerHeight)px";var e=d.getContext("2d");e.lineCap="round",e.lineWidth=5,n.current=e}),[]);var f;return Object(c.jsxs)("div",{children:[Object(c.jsx)("canvas",{className:"Canvas",onMouseDown:function(e){var t=e.nativeEvent,c=t.offsetX,i=t.offsetY;n.current.beginPath(),n.current.moveTo(c,i),l(!0)},onMouseUp:function(){n.current.closePath(),l(!1)},onMouseMove:function(t){var c=t.nativeEvent;if(r){var i=c.offsetX,o=c.offsetY;n.current.lineTo(i,o),n.current.stroke(),n.current.strokeStyle=e.color}},ref:t}),Object(c.jsx)("button",{className:"download",id:"pdf",onClick:function(){var e=d.width,t=d.height,n=new u.a;f=e>t?new u.a("l","px",[e,t]):new u.a("p","px",[t,e]),e=n.internal.pageSize.getWidth(),t=n.internal.pageSize.getHeight(),f.addImage(d,"PNG",0,0,e+500,t),f.save("download.pdf")},children:"Download the PDF"})]})}var d=function(){var e=Object(i.useState)("blue"),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"color",children:[Object(c.jsx)("div",{type:"button",className:"red",onClick:function(){o("red")}}),Object(c.jsx)("div",{type:"button",className:"green",onClick:function(){o("green")}}),Object(c.jsx)("div",{type:"button",className:"yellow",onClick:function(){o("yellow")}}),Object(c.jsx)("div",{type:"button",className:"blue",onClick:function(){o("blue")}})]}),Object(c.jsx)(l,{color:n})]})},f=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,391)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),f()}},[[14,1,3]]]);
//# sourceMappingURL=main.a62f10e5.chunk.js.map