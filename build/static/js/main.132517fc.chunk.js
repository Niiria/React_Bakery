(this["webpackJsonpproject-pure"]=this["webpackJsonpproject-pure"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.031454e3.png"},28:function(e){e.exports=JSON.parse('[{"id":"b1","name":"Bread1","price":10,"size":1,"img":"https://cdn.pixabay.com/photo/2012/04/03/14/51/bread-25206_960_720.png"},{"id":"b2","name":"Bread2","price":20,"size":2,"img":"https://cdn.pixabay.com/photo/2012/04/03/14/51/bread-25206_960_720.png"},{"id":"b3","name":"Bread3","price":30,"size":3,"img":"https://cdn.pixabay.com/photo/2012/04/03/14/51/bread-25206_960_720.png"},{"id":"b4","name":"Bread4","price":40,"size":4,"img":"https://cdn.pixabay.com/photo/2012/04/03/14/51/bread-25206_960_720.png"}]')},29:function(e){e.exports=JSON.parse('[{"id":"c1","name":"Cake1","price":10,"size":1,"img":"https://cdn.pixabay.com/photo/2014/04/03/00/40/cake-309034_960_720.png"},{"id":"c2","name":"Cake2","price":20,"size":2,"img":"https://cdn.pixabay.com/photo/2014/04/03/00/40/cake-309034_960_720.png"},{"id":"c3","name":"Cake3","price":30,"size":3,"img":"https://cdn.pixabay.com/photo/2014/04/03/00/40/cake-309034_960_720.png"},{"id":"c4","name":"Cake4","price":40,"size":4,"img":"https://cdn.pixabay.com/photo/2014/04/03/00/40/cake-309034_960_720.png"},{"id":"c5","name":"Cake5","price":50,"size":5,"img":"https://cdn.pixabay.com/photo/2014/04/03/00/40/cake-309034_960_720.png"}]')},30:function(e){e.exports=JSON.parse('[{"id":"m1","name":"Muffin1","price":10,"size":1,"img":"https://cdn.pixabay.com/photo/2018/05/04/10/08/cupcake-3373605_960_720.png"},{"id":"m2","name":"Muffin2","price":20,"size":2,"img":"https://cdn.pixabay.com/photo/2018/05/04/10/08/cupcake-3373605_960_720.png"},{"id":"m3","name":"Muffin3","price":30,"size":3,"img":"https://cdn.pixabay.com/photo/2018/05/04/10/08/cupcake-3373605_960_720.png"}]')},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),u=(a(37),a(38),a(8)),s=a(2),l=a(26),o=a.n(l),m=function(){return c.a.createElement("nav",null,c.a.createElement(u.b,{to:"/products/all"},c.a.createElement("img",{src:o.a,alt:"logo"})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.c,{exact:!0,to:"/"},"About")),c.a.createElement("li",null,c.a.createElement(u.c,{to:"/products"},"Products"))))},p=function(){return c.a.createElement("footer",null,c.a.createElement("h3",null,"Coppyright by @Niria"),c.a.createElement("ul",null,c.a.createElement("li",null,"FB"),c.a.createElement("li",null,"Twitter"),c.a.createElement("li",null,"IG"),c.a.createElement("li",null,"Phone")))},d=function(){return c.a.createElement("section",{className:"about"},c.a.createElement("h1",null,"BreadWorld Bakery Welcome!"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus ligula id quam tincidunt ornare. Pellentesque pulvinar sem commodo aliquet malesuada. Vestibulum euismod justo et risus ornare aliquam. Duis accumsan ante eget dui consectetur, ut elementum urna dignissim. Sed nulla felis, gravida ac purus in, finibus maximus lectus. Cras rhoncus metus ut enim tristique, ut accumsan mauris mattis. Maecenas vel leo erat. Ut mattis diam id elit laoreet sodales. Vivamus ultrices, tellus a pellentesque rhoncus, mauris lectus vestibulum quam, id vulputate ante ex id ante. Cras ultricies eget dui a efficitur. Sed lacus purus, tristique sed risus sit amet, varius bibendum sapien."),c.a.createElement("h2",null,"Short description! "),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus ligula id quam tincidunt ornare. Pellentesque pulvinar sem commodo aliquet malesuada. Vestibulum euismod justo et risus ornare aliquam. Duis accumsan ante eget dui consectetur, ut elementum urna dignissim. Sed nulla felis, gravida ac purus in, finibus maximus lectus. Cras rhoncus metus ut enim tristique, ut accumsan mauris mattis. Maecenas vel leo erat. Ut mattis diam id elit laoreet sodales. Vivamus ultrices, tellus a pellentesque rhoncus, mauris lectus vestibulum quam, id vulputate ante ex id ante. Cras ultricies eget dui a efficitur. Sed lacus purus, tristique sed risus sit amet, varius bibendum sapien."))},h=a(15),f=a(16),b=a(19),g=a(18),E=a(17),_=a(28),v=a(29),C=a(30),O=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){var t=n.props.handleSearch,a=n.state.search;e.preventDefault(),t(a),e.target.firstElementChild.firstElementChild.value="",n.setState({search:null})},n.handleChange=function(e){n.setState({search:e.target.value})},n.state={search:null},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.changeCategory,t=this.props.handleSearch;return c.a.createElement("div",{className:"products_header"},c.a.createElement("form",{autoComplete:"off",className:"products_form",onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"products_form-input"},"Search:",c.a.createElement("input",{id:"products_form-input",onChange:this.handleChange,onClick:function(e){e.target.value=""}}))),c.a.createElement("ul",{className:"products_form-nav"},c.a.createElement("li",null,c.a.createElement(u.c,{id:"All",to:"/products/all",onClick:function(a){t(null),e(a.target.id)}},"All")),c.a.createElement("li",null,c.a.createElement(u.c,{id:"Breads",to:"/products/bread",onClick:function(a){t(null),e(a.target.id)}},"Bread")),c.a.createElement("li",null,c.a.createElement(u.c,{id:"Cakes",to:"/products/cakes",onClick:function(a){t(null),e(a.target.id)}},"Cakes")),c.a.createElement("li",null,c.a.createElement(u.c,{id:"Muffins",to:"/products/muffins",onClick:function(a){t(null),e(a.target.id)}},"Muffins"))))}}]),a}(n.Component),j=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleSearch=function(e){n.setState({search:e})},n.state={search:null},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getData)(),(0,this.props.changeCategory)("All")}},{key:"render",value:function(){var e=this,t=this.props.products.filter((function(t){var a=e.state.search;return null===a||t.name.toLowerCase().includes(a.toLowerCase())})),a=t.length?t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("img",{src:e.img,alt:"product"}),c.a.createElement("h1",null,e.name),c.a.createElement("p",null,e.price,"$ size:",e.size))})):c.a.createElement("div",{className:"products_error"},"No products"),n=this.props.changeCategory;return c.a.createElement("section",{className:"products"},c.a.createElement(O,{changeCategory:n,handleSearch:this.handleSearch}),c.a.createElement("ul",{className:"products_view"},a))}}]),a}(n.Component),y=Object(E.b)((function(e){return{products:e.products.products}}),(function(e){return{getData:function(){e((function(e){e({type:"GET_BREADS_DATA",payload:_})})),e((function(e){e({type:"GET_CAKES_DATA",payload:v})})),e((function(e){e({type:"GET_MUFFINS_DATA",payload:C})}))},changeCategory:function(t){e(function(e){return function(t){t({type:"CHANGE_CATEGORY",payload:e})}}(t))}}}))(j);var k=function(){return c.a.createElement(u.a,null,c.a.createElement(m,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:d}),c.a.createElement(s.a,{path:"/products",component:y})),c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(9),S=a(10),x=a(3),q={breads:[],muffins:[],cakes:[],products:[]},N=Object(A.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_BREADS_DATA":return Object(x.a)(Object(x.a)({},e),{},{breads:n});case"GET_CAKES_DATA":return Object(x.a)(Object(x.a)({},e),{},{cakes:n});case"GET_MUFFINS_DATA":return Object(x.a)(Object(x.a)({},e),{},{muffins:n});case"CHANGE_CATEGORY":switch(n){case"Breads":return Object(x.a)(Object(x.a)({},e),{},{products:Object(S.a)(e.breads)});case"Cakes":return Object(x.a)(Object(x.a)({},e),{},{products:Object(S.a)(e.cakes)});case"Muffins":return Object(x.a)(Object(x.a)({},e),{},{products:Object(S.a)(e.muffins)});default:return Object(x.a)(Object(x.a)({},e),{},{products:[].concat(Object(S.a)(e.breads),Object(S.a)(e.cakes),Object(S.a)(e.muffins))})}default:return e}}}),T=a(31),w=Object(A.d)(N,Object(A.a)(T.a));i.a.render(c.a.createElement(E.a,{store:w},c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.132517fc.chunk.js.map