(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{156:function(e,t,r){"use strict";r.d(t,"a",(function(){return be}));var n=r(82),o=r(248),c=r(6),a=r.n(c),i=r(9),s=r.n(i),l=r(2),b=r.n(l),j=r(243),u=r(245),p=r(102),f=r(0);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=r(159);function d(){return Object(h.a)()}var y=r(242),x=r(238),m=r(239),v=r(75),w=r(244),S=r(50),P={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}},k=r(5),C=r(3),T=r(158),D=r(73),I=r(10),z=r.n(I),E=r(31),R=r(4),H=r(7),M=["style","lightColor","darkColor"],V=["style","lightColor","darkColor"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t){var r=d(),n=e[r];return n||P[r][t]}function L(e){var t=e.style,r=e.lightColor,n=e.darkColor,o=z()(e,M),c=B({light:r,dark:n},"text");return Object(H.jsx)(E.a,N({style:[{color:c},t]},o))}function W(e){var t=e.style,r=e.lightColor,n=e.darkColor,o=z()(e,V),c=B({light:r,dark:n},"background");return Object(H.jsx)(R.a,N({style:[{backgroundColor:c},t]},o))}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e){return Object(H.jsx)(L,G(G({},e),{},{style:[e.style,{fontFamily:"space-mono"}]}))}function U(e){var t=e.path;return Object(H.jsxs)(W,{children:[Object(H.jsxs)(W,{style:K.getStartedContainer,children:[Object(H.jsx)(L,{style:K.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Open up the code for this screen:"}),Object(H.jsx)(W,{style:[K.codeHighlightContainer,K.homeScreenFilename],darkColor:"rgba(255,255,255,0.05)",lightColor:"rgba(0,0,0,0.05)",children:Object(H.jsx)(J,{children:t})}),Object(H.jsx)(L,{style:K.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Change any of the text, save the file, and your app will automatically update."})]}),Object(H.jsx)(W,{style:K.helpContainer,children:Object(H.jsx)(D.a,{onPress:q,style:K.helpLink,children:Object(H.jsx)(L,{style:K.helpLinkText,lightColor:P.light.tint,children:"Tap here if your app doesn't automatically update after making changes"})})})]})}function q(){T.a("https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet")}var K=C.a.create({getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightContainer:{borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,lineHeight:24,textAlign:"center"},helpContainer:{marginTop:15,marginHorizontal:20,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{textAlign:"center"}});function Q(){return Object(H.jsxs)(W,{style:X.container,children:[Object(H.jsx)(L,{style:X.title,children:"Modal"}),Object(H.jsx)(W,{style:X.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object(H.jsx)(U,{path:"/screens/ModalScreen.tsx"}),Object(H.jsx)(n.a,{style:"ios"===k.a.OS?"light":"auto"})]})}var X=C.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function Y(e){var t=e.navigation;return Object(H.jsxs)(W,{style:Z.container,children:[Object(H.jsx)(L,{style:Z.title,children:"This screen doesn't exist."}),Object(H.jsx)(D.a,{onPress:function(){return t.replace("Root")},style:Z.link,children:Object(H.jsx)(L,{style:Z.linkText,children:"Go to home screen!"})})]})}var Z=C.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}});function $(e){e.navigation;return Object(H.jsxs)(W,{style:_.container,children:[Object(H.jsx)(L,{style:_.title,children:"Tabo Uno"}),Object(H.jsx)(W,{style:_.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"})]})}var _=C.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function ee(){return Object(H.jsxs)(W,{style:te.container,children:[Object(H.jsx)(L,{style:te.title,children:"Tab Two"}),Object(H.jsx)(W,{style:te.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object(H.jsx)(U,{path:"/screens/TabTwoScreen.tsx"})]})}var te=C.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}}),re={prefixes:[r(157).a("/")],config:{screens:{Root:{screens:{TabOne:{screens:{TabOneScreen:"one"}},TabTwo:{screens:{TabTwoScreen:"two"}}}},Modal:"modal",NotFound:"*"}}};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){var t=e.colorScheme;return Object(H.jsx)(x.a,{linking:re,theme:"dark"===t?m.a:v.a,children:Object(H.jsx)(ae,{})})}var ce=Object(w.a)();function ae(){return Object(H.jsxs)(ce.Navigator,{children:[Object(H.jsx)(ce.Screen,{name:"Root",component:se,options:{headerShown:!1}}),Object(H.jsx)(ce.Screen,{name:"NotFound",component:Y,options:{title:"Oops!"}}),Object(H.jsx)(ce.Group,{screenOptions:{presentation:"modal"},children:Object(H.jsx)(ce.Screen,{name:"Modal",component:Q})})]})}var ie=Object(y.a)();function se(){var e=d();return Object(H.jsxs)(ie.Navigator,{initialRouteName:"TabOne",screenOptions:{tabBarActiveTintColor:P[e].tint},children:[Object(H.jsx)(ie.Screen,{name:"TabOne",component:$,options:function(t){var r=t.navigation;return{title:"Tab One",tabBarIcon:function(e){var t=e.color;return Object(H.jsx)(le,{name:"code",color:t})},headerRight:function(){return Object(H.jsx)(S.a,{onPress:function(){return r.navigate("Modal")},style:function(e){return{opacity:e.pressed?.5:1}},children:Object(H.jsx)(j.a,{name:"info-circle",size:25,color:P[e].text,style:{marginRight:15}})})}}}}),Object(H.jsx)(ie.Screen,{name:"TabTwo",component:ee,options:{title:"Tab Two",tabBarIcon:function(e){var t=e.color;return Object(H.jsx)(le,{name:"code",color:t})}}})]})}function le(e){return Object(H.jsx)(j.a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({size:30,style:{marginBottom:-3}},e))}function be(){var e=function(){var e=Object(f.useState)(!1),t=s()(e,2),n=t[0],o=t[1];return Object(f.useEffect)((function(){b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p.b(),e.next=4,b.a.awrap(u.b(g(g({},j.a.font),{},{"space-mono":r(183)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,o(!0),p.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),n}(),t=d();return e?Object(H.jsxs)(o.b,{children:[Object(H.jsx)(oe,{colorScheme:t}),Object(H.jsx)(n.a,{})]}):null}},165:function(e,t,r){e.exports=r(231)},183:function(e,t,r){e.exports=r.p+"./fonts/SpaceMono-Regular.ttf"},205:function(e,t){}},[[165,1,2]]]);
//# sourceMappingURL=app.30f40289.chunk.js.map