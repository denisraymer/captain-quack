(this["webpackJsonpcaptain-quack"]=this["webpackJsonpcaptain-quack"]||[]).push([[0],{155:function(e,t,a){e.exports=a.p+"static/media/logo.d53e64f2.png"},156:function(e,t,a){e.exports=a.p+"static/media/404.2b42d7aa.png"},166:function(e,t,a){e.exports=a(291)},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(28),i=a(11),u=a(89),d=a(47),s=a.n(d);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"GET_PRODUCTS_SUCCESS",payload:e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/api/products";return function(t){return s.a.get("".concat(e)).then((function(e){return t(m(e.data))})).catch((function(e){throw e}))}}function f(e){return{type:"CREATE_PRODUCT_SUCCESS",payload:e}}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://agile-taiga-33505.herokuapp.com/api/products",t=arguments.length>1?arguments[1]:void 0;return function(a){return s.a.post(e,t).then((function(e){return a(f(e.data))})).catch((function(e){return e}))}}function E(e){return{type:"DELETE_PRODUCT_SUCCESS",payload:e}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){return s.a.delete(e).then((function(e){return t(E(e))})).catch((function(e){return e}))}}var v=a(348),g=Object(i.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return[].concat(Object(u.a)(e),Object(u.a)(t.payload));case"CREATE_PRODUCT_SUCCESS":return[].concat(Object(u.a)(e),[t.payload]);case"DELETE_PRODUCT_SUCCESS":var a=t.payload.config.url.replace("/api/products/","");return e.filter((function(e){return e._id!==a}));default:return e}},form:v.a}),y=a(148),C=a(149),O=a(150),S=a.n(O),j=Object(i.createStore)(g,Object(y.composeWithDevTools)(Object(i.applyMiddleware)(C.a,S.a))),k=a(48),x=a(49),_=a(56),M=a(57),N=function(e){var t=e.errorMessage,a=void 0===t?"Error":t;return r.a.createElement("div",{className:"not-found"},r.a.createElement("div",{className:"not-found__title"},a))},T=function(e){Object(M.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(x.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(N,{errorMessage:"\u0427\u0442\u043e-\u0442\u043e \u043a\u0440\u044f\u043a\u043d\u0443\u043b\u0430\u0441\u044c..."}):this.props.children}}]),a}(n.Component),w=a(346),P=a(345),R=a(6),I=a(350),B=Object(R.a)({root:{width:"100%",marginBottom:10,"& label":{fontSize:14,fontFamily:"'Roboto', sans-serif",fontWeight:700,color:"#999",marginTop:8,marginLeft:10},"& label.Mui-focused":{color:"#999",marginTop:0},"& label.MuiFormLabel-filled":{marginTop:0},"& input":{border:"1px solid #dcdcdc",borderBottom:"2px solid #dcdcdc",height:40,padding:"0 0 0 10px"},"& div.MuiInput-underline:before":{borderBottom:"2px solid #dcdcdc"},"& div.MuiInput-underline:after":{borderBottom:"2px solid #000"},"& div.MuiInput-underline.Mui-error:after":{borderBottom:"2px solid #f44336"},"& div.MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottomColor:"#f44336"}}})(I.a),D=function(e){var t=e.input,a=e.label,n=e.type,o=e.meta,c=o.touched,l=o.error,i=o.warning,u=c&&(l&&"".concat(l)||i&&"".concat(i));return r.a.createElement(B,Object.assign({helperText:u,error:u,label:a,type:n,id:"custom-css-standard-input"},t))},U=function(e){return e||"string"===typeof e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},A=function(e){return e&&/^[0-9]+$/.test(e)?void 0:"\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b"},F=a(154),z=a.n(F),L=a(330),W=a(344),q=a(352),G=a(333),J=Object(R.a)({root:{width:"100%",marginTop:20,"& div.MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"2px solid #f44336"},"& div.MuiSelect-select.MuiSelect-select":{paddingLeft:10},"& div.MuiInput-underline:before":{borderBottom:"2px solid #dcdcdc"},"& div.MuiInput-underline:after":{borderBottom:"2px solid #000"},"& div.MuiInput-underline.Mui-error:after":{borderBottom:"2px solid #f44336"},"& div.MuiSelect-select:focus":{backgroundColor:"transparent"},"& div.MuiInputBase-root":{borderTop:"1px solid #dcdcdc",borderLeft:"1px solid #dcdcdc",borderRight:"1px solid #dcdcdc",height:40,fontSize:14,fontFamily:"'Roboto', sans-serif",fontWeight:700,color:"#999"},"& div.MuiInputBase-input":{padding:"6px 0 5px"},"& svg":{color:"#000"}}})(L.a),K=function(e){var t=e.input,a=e.meta,n=a.touched,o=a.error,c=a.warning,l=n&&(o&&"".concat(o)||c&&"".concat(c));return r.a.createElement(J,{error:l},r.a.createElement(W.a,Object.assign({},t,{displayEmpty:!0,inputProps:{"aria-label":"Without label"}}),r.a.createElement(q.a,{value:"",disabled:!0},"\u0421\u0442\u0430\u0442\u0443\u0441"),r.a.createElement(q.a,{value:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"},"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"),r.a.createElement(q.a,{value:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f"},"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f"),r.a.createElement(q.a,{value:"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"},"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438")),r.a.createElement(G.a,null,l))},Q=a(334),V=Object(R.a)({root:{backgroundColor:"#c4092f",height:40,marginTop:20,"& span.MuiButton-label":{fontSize:16,fontFamily:"'Roboto', sans-serif",fontWeight:700,marginTop:2,"& span.MuiButton-endIcon":{marginLeft:2,marginTop:"-2px"},"& svg":{fontSize:16}}}})(Q.a),$=a(336),H=a(337),X=a(331),Y=a(349),Z=a(4),ee=a(335),te=a(347),ae=a(353),ne=function(e){var t=e.value,a=t.value,n=Object(ee.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{border:"1px solid #e7e7e7",borderRadius:"50%",width:25,height:25,backgroundColor:a,"input:hover ~ &":{backgroundColor:a},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:a,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{borderRadius:50,border:"4px solid #c4092f",background:a,position:"absolute",left:5,top:5,display:"block",width:32,height:32,content:'""'},"input:hover ~ &":{backgroundColor:a}}})();return r.a.createElement(te.a,Object.assign({disableRipple:!0,checkedIcon:r.a.createElement("span",{className:Object(Z.a)(n.icon,n.checkedIcon)}),className:n.root,color:"default",icon:r.a.createElement("span",{className:n.icon})},t))},re=function(e){var t=e.input;return r.a.createElement(ae.a,{value:t,control:r.a.createElement(ne,null)})};var oe=Object(P.a)({form:"managerForm"})((function(e){return r.a.createElement($.a,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(H.a,{container:!0,spacing:1},r.a.createElement(H.a,{item:!0,xs:12,sm:4,md:4},r.a.createElement(w.a,{className:"form-control",component:D,validate:U,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"title"})),r.a.createElement(H.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(w.a,{className:"form-control",component:D,validate:U,label:"\u0413\u043e\u0434",warn:A,name:"year"})),r.a.createElement(H.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(w.a,{className:"form-control",component:D,validate:U,label:"\u0426\u0435\u043d\u0430",warn:A,name:"price"})),r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(w.a,{className:"form-control",component:D,label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description"})),r.a.createElement(H.a,{item:!0,xs:12,sm:4,md:4},r.a.createElement("div",{className:"manager-radio-form"},r.a.createElement(L.a,{component:"fieldset"},r.a.createElement(X.a,{component:"legend",className:"label"},"\u0426\u0432\u0435\u0442"),r.a.createElement(Y.a,{defaultValue:"female",row:!0},["fff","000","cbcbcc","d74345","88c504"].map((function(e,t){return r.a.createElement("label",{key:"".concat(t).concat(e)},r.a.createElement(w.a,{name:"color",component:re,type:"radio",value:"#".concat(e)}))})))))),r.a.createElement(H.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(w.a,{component:K,className:"form-control",validate:U,name:"status"})),r.a.createElement(H.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(V,{disableElevation:!0,endIcon:r.a.createElement(z.a,null),variant:"contained",color:"secondary",type:"submit"},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))})),ce=function(e){Object(M.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).eventCreateProduct=function(t){e.props.createProduct("/api/products",t)},e}return Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement(oe,{onSubmit:this.eventCreateProduct,state:this.state})}}]),a}(n.Component),le=Object(l.b)(null,(function(e){return{createProduct:Object(i.bindActionCreators)(b,e)}}))(ce),ie=a(340),ue=a(332),de=a(341),se=a(342),me=a(339),pe=a(343),fe=a(338),be=Object(R.a)({head:{backgroundColor:"#c4092f",fontFamily:"'Roboto', sans-serif",fontWeight:700,fontSize:15,color:"#fff"},body:{fontFamily:"'Roboto', sans-serif",fontWeight:400,fontSize:15,color:"#282d30"}})(fe.a),Ee=Object(R.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(me.a),he=Object(R.a)({root:{borderRadius:50,backgroundColor:"transparent",height:40,"&:hover":{backgroundColor:"#282d30",color:"#fff"},"&:hover span.MuiButton-label":{color:"#fff"},"& span.MuiButton-label":{fontSize:16,fontFamily:"'Roboto', sans-serif",textTransform:"none",color:"#8b9497",marginTop:2}}})(Q.a);var ve=function(e){var t=e.products,a=e.eventDeleteProduct;return r.a.createElement($.a,null,r.a.createElement(H.a,{container:!0},r.a.createElement("div",{className:"product-list"},r.a.createElement(ie.a,{component:ue.a},r.a.createElement(de.a,{"aria-label":"customized table"},r.a.createElement(se.a,null,r.a.createElement(me.a,null,r.a.createElement(be,{width:"580"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(be,{width:"100",align:"center"},"\u0413\u043e\u0434"),r.a.createElement(be,{width:"100",align:"center"},"\u0426\u0432\u0435\u0442"),r.a.createElement(be,{width:"150",align:"left"},"\u0421\u0442\u0430\u0442\u0443\u0441"),r.a.createElement(be,{align:"left",colSpan:"2"},"\u0426\u0435\u043d\u0430"))),r.a.createElement(pe.a,null,t.map((function(e){return r.a.createElement(Ee,{key:e._id},r.a.createElement(be,{component:"th",scope:"row"},e.title,e.description?r.a.createElement("div",{className:"product-list__description"},e.description):""),r.a.createElement(be,{align:"center"},e.year),r.a.createElement(be,{align:"center"},r.a.createElement("div",{className:"status-color",style:{background:"".concat(e.color)}})),r.a.createElement(be,{align:"left"},e.status),r.a.createElement(be,{width:"150",align:"left"},e.price," \u0440\u0443\u0431."),r.a.createElement(be,{align:"left"},r.a.createElement(he,{onClick:function(){return a(e._id)},color:"primary",type:"submit"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}))))))))},ge=function(e){Object(M.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).eventDeleteProduct=function(t){e.props.deleteProduct("https://agile-taiga-33505.herokuapp.com/api/products/".concat(t))},e}return Object(x.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this.props.products;return r.a.createElement(ve,{products:e,eventDeleteProduct:this.eventDeleteProduct})}}]),a}(n.Component),ye=Object(l.b)((function(e){return{products:e.products}}),(function(e){return{fetchProducts:Object(i.bindActionCreators)(p,e),deleteProduct:Object(i.bindActionCreators)(h,e)}}))(ge);function Ce(){return r.a.createElement("div",{className:"footer footer_fluid"},r.a.createElement("div",{className:"footer__copyright"},"\xa9 2015 CAPTAIN QUACK ",r.a.createElement("br",null)," \u0414\u0435\u0441\u043d\u0438\u0446\u0430 \u0442\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u0438\u044f \u0438 \u043c\u043e\u043b\u043b\u044e\u0441\u043a!"))}var Oe=a(155),Se=a.n(Oe);function je(){return r.a.createElement("div",{className:"header header_fluid"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("img",{className:"header__logo-img",src:Se.a,alt:"Captain quack logo"})))}function ke(){return r.a.createElement("div",{className:"title"},"\xa1Ay caramba!")}var xe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null),r.a.createElement(ke,null),r.a.createElement(le,null),r.a.createElement(ye,null),r.a.createElement(Ce,null))},_e=a(157),Me=a(15),Ne=a(156),Te=a.n(Ne);function we(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("div",{className:"not-found__title"},"4",r.a.createElement("img",{className:"not-found__image",src:Te.a,alt:"Captain quack 404"}),"4 - \xa1Ay caramba!"))}var Pe=function(){return r.a.createElement(_e.a,null,r.a.createElement(Me.c,null,r.a.createElement(Me.a,{exact:!0,path:"/",component:xe}),r.a.createElement(Me.a,{component:we})))};a(290);c.a.render(r.a.createElement(l.a,{store:j},r.a.createElement(T,null,r.a.createElement(Pe,null))),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.47c6a917.chunk.js.map