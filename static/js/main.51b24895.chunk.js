(this.webpackJsonptempletview=this.webpackJsonptempletview||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"1","title":"Strawberry shop Templet","desc":"this a beautiful templet based on marketiog purpose","categories":["small","medium","large"],"author":"md IsaHasan","price":50,"Features":true,"Perches":10300,"published":"10/09/20","templetimage":"https://images.pexels.com/photos/749107/pexels-photo-749107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},{"id":"2","title":"Movileshop Templet","desc":"this a beautiful templet based on marketiog purpose","categories":["small","medium","large"],"author":"md IsaHasan","price":150,"Features":false,"Perches":20002,"published":"10/09/20","templetimage":"https://images.pexels.com/photos/139261/pexels-photo-139261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":"3","title":"Trees Templet","desc":"this a beautiful templet based on marketiog purpose","categories":["small","medium","large"],"author":"md IsaHasan","price":40,"Features":false,"Perches":122333,"published":"10/09/20","templetimage":"https://images.pexels.com/photos/1047508/pexels-photo-1047508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":"4","title":"shops Templet","desc":"this a beautiful templet based on marketiog purpose","categories":["small","medium","large"],"author":"md IsaHasan","price":75,"Features":true,"Perches":10929,"published":"10/09/20","templetimage":"https://images.pexels.com/photos/2679323/pexels-photo-2679323.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},{"id":"5","title":"tailermarket Templet","desc":"this a beautiful templet based on marketiog purpose","categories":["small","medium","large"],"author":"md IsaHasan","price":100,"Features":true,"Perches":17888,"published":"10/09/20","templetimage":"https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}]')},23:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var a=s(0),c=(s(1),s(16)),l=s.n(c),i=s(10),n=s(6);s(23);var r=function(e){var t=e.el;return Object(a.jsxs)("div",{className:"templet",children:[Object(a.jsx)("div",{className:"img_container",children:Object(a.jsx)("img",{className:" templet_img",src:t.templetimage,alt:t.title})}),Object(a.jsx)("h2",{className:"templet_title m-left",children:Object(a.jsx)(n.b,{to:"/Templetlist/".concat(t.id),children:t.title})}),Object(a.jsxs)("span",{className:"templet_author m-left",children:["By: ",t.author]}),Object(a.jsxs)("div",{className:"templet_price",children:[Object(a.jsx)("span",{className:"price",children:t.price}),Object(a.jsx)("span",{children:"$"})]}),Object(a.jsx)("span",{className:t.Features?"Features":"",children:t.Features?"Available":null})]})};s(29);var m=function(){return 0===i?Object(a.jsx)("div",{className:"notice",children:"404 Not Found "}):Object(a.jsx)("div",{className:"templets",children:i.map((function(e){return Object(a.jsx)(r,{el:e},e.id)}))})};s(30);var o=function(){return Object(a.jsxs)("div",{className:"header_nav",children:[Object(a.jsxs)("div",{className:"nav_content",children:[Object(a.jsx)("h2",{className:"logo",children:Object(a.jsx)(n.b,{className:"logo_link_test",to:"/",children:"ISHasan"})}),Object(a.jsx)("nav",{className:"nav",children:Object(a.jsxs)("ul",{className:"nav_lists",children:[Object(a.jsx)("li",{className:"nav_item",children:Object(a.jsx)(n.c,{className:"nav_item_link_test",to:"/Home",children:"Home"})}),Object(a.jsx)("li",{className:"nav_item",children:Object(a.jsxs)(n.c,{className:"nav_item_link_test",to:"/About",children:["About"," "]})}),Object(a.jsx)("li",{className:"nav_item",children:Object(a.jsxs)(n.c,{className:"nav_item_link_test",to:"/Templetlist",children:["Templets"," "]})}),Object(a.jsx)("li",{className:"nav_item",children:Object(a.jsxs)(n.c,{className:"nav_item_link_test",to:"/Contact",children:["Contact"," "]})})]})})]}),Object(a.jsxs)("div",{className:"header_buttons",children:[Object(a.jsx)(n.b,{className:"btn btn_login",to:"/ligin",children:"Log In"}),Object(a.jsx)(n.b,{className:"btn btn_signup",to:"/signup",children:"Sign Up"})]})]})},p=s(2);var d=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Home"}),Object(a.jsx)(m,{})]})};var j=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Contact"})})};var h=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"About"})})};s(31);var b=function(e){console.log(e.match.params.Id);var t=e.match.params.Id,s=i.find((function(e){return e.id===t}));return console.log(s),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:" card Component "}),Object(a.jsxs)("div",{className:"templet_details",children:[Object(a.jsx)("div",{className:"img_container_details",children:Object(a.jsx)("img",{className:"templet_img_details",src:s.templetimage,alt:s.desc})}),Object(a.jsxs)("div",{className:"details_container",children:[Object(a.jsx)("span",{className:s.Features?"Features_details":"",children:s.Features?"Available":null}),Object(a.jsx)("h2",{className:"templet_title_details",children:s.title}),Object(a.jsx)("p",{className:"details_p",children:s.desc}),Object(a.jsx)("span",{className:"details_price",children:s.price}),Object(a.jsx)("span",{className:"details_categorys",children:s.categories.map((function(e){return Object(a.jsx)("p",{className:"details_categorys_p",children:e},e)}))}),Object(a.jsx)("span",{className:"details_Perches",children:s.Perches}),Object(a.jsx)("span",{className:"details_published ",children:s.published})]})]})]})};var u=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(n.a,{children:[Object(a.jsx)(o,{}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{exact:!0,path:"/Templetlist",component:m}),Object(a.jsx)(p.b,{exact:!0,path:"/Contact",component:j}),Object(a.jsx)(p.b,{exact:!0,path:"/About",component:h}),Object(a.jsx)(p.b,{exact:!0,path:"/Home",component:d}),Object(a.jsx)(p.b,{path:"/Templetlist/:Id",component:b}),Object(a.jsx)(p.a,{from:"/",to:"/Home"})]})]})})};l.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.51b24895.chunk.js.map