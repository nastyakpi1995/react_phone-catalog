(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=a(6),l=a(8),i=a(9),u=a(11),p=a(10),m=a(12),h=a(5),d=a.n(h),v=a(13),f=a(25),E=(a(32),a(7)),b=function(){return r.a.createElement("div",{className:"wrapper__loading"},r.a.createElement("div",{className:"loader"},"Loading..."))},g=function(e){var t=e.phone,a=e.urlImg;return r.a.createElement("div",{key:t.id,className:"catalog__phones"},r.a.createElement("div",{className:"card","data-qa":"card"},r.a.createElement("img",{src:"".concat(a,"/").concat(t.imageUrl),alt:"Motorrola",className:"card__img"}),r.a.createElement("div",{className:"card__text"},t.name),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/phones/".concat(t.id)},t.id)),r.a.createElement("div",{className:"card__block-price"},r.a.createElement("div",{className:"card__price"},"details:"),r.a.createElement("div",{className:"card__price-number"},t.snippet)),r.a.createElement("button",{type:"submit"},"Add")))},_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={phoneArrays:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.phoneId,a=e.urlImg,n=e.phones,c=e.handleFilter,o=e.handleSort,s=this.state.phoneArrays;return r.a.createElement("div",null,r.a.createElement("form",{action:"/",className:"adress-delivery__header"},r.a.createElement("span",null,"choose sort"),r.a.createElement("div",{className:"destination-details"},r.a.createElement("select",{name:"",onClick:o,className:"adress-delivery__destination-details"},r.a.createElement("option",{value:"alphabet"},"sort By Alphabet"),r.a.createElement("option",{value:""},"sort order"))),r.a.createElement("input",{type:"text",className:"input",placeholder:"search",onChange:c})),s,0===n.length&&0===t?r.a.createElement(b,null):n.map(function(e){return r.a.createElement(g,{key:e.id,phone:e,phoneId:t,urlImg:a})}))}}]),t}(r.a.Component),y=function(){var e=Object(v.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static",e.next=3,fetch("".concat("https://mate-academy.github.io/phone-catalogue-static","/api/phones/").concat(t,".json"));case 3:return a=e.sent,n=a.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={phoneDetails:[],imgChoseUrl:""},a.handleChose=function(e){a.setState({imgChoseUrl:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.props.phoneId);case 2:t=e.sent,this.setState({phoneDetails:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.phoneDetails,n=t.imgChoseUrl,c=this.props,o=c.urlImg,s=c.phoneId,l=c.phones.find(function(e){return e.id===s});return s&&!l?r.a.createElement("div",{className:"wrraper__was__not_phone"},r.a.createElement("h1",{className:"phone__was__not"},"Phone Was Not Found")):null===a?r.a.createElement(b,null):r.a.createElement("div",{className:"catalog__phones"},n?r.a.createElement("img",{src:"".concat(o,"/").concat(n),alt:"Motorrola",className:"card__img"}):"",a.images?a.images.map(function(t){return r.a.createElement("img",{onMouseOver:function(){return e.handleChose("".concat(t))},key:t,src:"".concat(o,"/").concat(t),alt:"Motorrola",className:"card__img",onFocus:!0})}):"",r.a.createElement("p",null,"".concat(o,"/").concat(a.description)))}}]),t}(r.a.Component),j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"),r.a.createElement("span",null,r.a.createElement(s.b,{className:"navlink",to:"/",exact:!0},"here is Home")))},w=function(){return r.a.createElement("div",{className:"home_page"},"Hello")},O=function(e,t){var a={alphabet:function(e,t){return e.name.localeCompare(t.name)}}[t];return Object(f.a)(e).sort(a)},k=function(){var e=Object(v.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static",e.next=3,fetch("".concat("https://mate-academy.github.io/phone-catalogue-static","/api/phones.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={phones:[],phonesVisible:[]},a.handleFilter=function(e){var t=e.target.value;a.setState(function(e){return{phonesVisible:e.phones.filter(function(e){return[e.name].join().toLowerCase().includes(t.toLowerCase())})}})},a.handleSort=function(e){var t=e.target.value;a.setState(function(e){return{phonesVisible:O(e.phones,t)}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({phones:t,phonesVisible:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.phonesVisible,a="https://mate-academy.github.io/phone-catalogue-static/";return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"nav__main_container"},r.a.createElement(s.b,{to:"/",exact:!0,className:"page__home phone__position",activeClassName:"phoneClassActive"},"Home"),r.a.createElement(s.b,{to:"/phones",className:"Phones__page",activeClassName:"phoneClassActive"},"PhonesPage")),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,component:w}),r.a.createElement(E.a,{path:"/phones",exact:!0,render:function(){return r.a.createElement(_,{phones:t,urlImg:a,handleFilter:e.handleFilter,handleSort:e.handleSort})}}),r.a.createElement(E.a,{path:"/phones/:phoneId",exact:!0,render:function(e){var n=e.match;return r.a.createElement(N,{phoneId:n.params.phoneId,urlImg:a,phones:t})}}),r.a.createElement(E.a,{path:"*",component:j})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(s.a,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3a88487e.chunk.js.map