(function(e){function t(t){for(var r,o,s=t[0],u=t[1],f=t[2],l=0,d=[];l<s.length;l++)o=s[l],i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00f5":function(e,t,n){"use strict";var r=n("1629"),i=n.n(r);i.a},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"05bf":function(e,t,n){"use strict";var r=n("7332"),i=n.n(r);i.a},1629:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("frame")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frame",class:{dragged:e.isDragged},on:{mousemove:e.resizeFrame,mouseup:e.endResizeFrame}},[n("left-frame",{attrs:{width:e.leftWidth},on:{startResize:e.startResize}}),n("right-frame")],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left-frame",style:{width:e.width+"px"}},[n("div",{staticClass:"left-frame-content"},[e._v("ヒダリー")]),n("div",{staticClass:"frame-border",on:{mousedown:function(t){return e.$emit("startResize")}}})])},f=[],c=(n("c5f6"),{props:{width:Number}}),l=c,d=(n("00f5"),n("2877")),p=Object(d["a"])(l,u,f,!1,null,"da436f68",null),m=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"right-frame"},[e._v("ミギー")])},v=[],b={props:{msg:String}},g=b,y=(n("05bf"),Object(d["a"])(g,h,v,!1,null,"d65c3df4",null)),_=y.exports,w=45,O=2,j={components:{LeftFrame:m,RightFrame:_},data:function(){return{isDragged:!1,leftWidth:200}},methods:{startResize:function(){this.isDragged=!0},resizeFrame:function(e){if(0!==e.buttons){if(this.isDragged){if(e.clientX+O<w)return void(this.leftWidth=w);this.leftWidth=e.clientX+O}}else this.endResizeFrame()},endResizeFrame:function(){this.isDragged=!1}}},x=j,z=(n("8bb1"),Object(d["a"])(x,o,s,!1,null,"4849c344",null)),F=z.exports,R={name:"app",components:{Frame:F}},P=R,S=(n("034f"),Object(d["a"])(P,i,a,!1,null,null,null)),$=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e($)}}).$mount("#app")},"64a9":function(e,t,n){},7332:function(e,t,n){},"8bb1":function(e,t,n){"use strict";var r=n("bcd6"),i=n.n(r);i.a},bcd6:function(e,t,n){}});
//# sourceMappingURL=app.fd06eab4.js.map