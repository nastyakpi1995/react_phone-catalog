(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),l=a(2),o=a(5),i=a.n(o),u=a(8),m=a(9),p=a(10),h=a(12),d=a(11),b=a(13),E=a(16),_=(a(32),a(7)),v=function(){return r.a.createElement("div",{className:"wrapper__loading"},r.a.createElement("div",{className:"loader"},"Loading..."))},f=function(e){var t=e.phone,a=e.urlImg,n=e.setItemToBasket;return r.a.createElement("div",{key:t.id,className:"price-tags"},r.a.createElement("div",{className:"price-tag","data-qa":"card"},r.a.createElement(l.b,{to:"/phones/".concat(t.id),className:"price-tag__wrapp-card"},r.a.createElement("img",{className:"price-tag__wrapp-card-img",src:"".concat(a,"/").concat(t.imageUrl),alt:"Phone"})),r.a.createElement("span",{className:"card__span"},r.a.createElement(l.b,{to:"/phones/".concat(t.id)},t.id)),r.a.createElement("h4",{className:"card__h4"},"details:"),r.a.createElement("p",{className:"card__information__detail"},t.snippet),r.a.createElement("button",{type:"submit",className:"price-btn",onClick:function(){n(t.name,a,t.id)}},"Add")))},g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={phoneArrays:[]},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.phoneId,a=e.urlImg,n=e.phones,c=e.handleFilter,s=e.handleSort,l=e.setItemToBasket,o=e.sortField,i=this.state.phoneArrays;return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table__header"},r.a.createElement("form",{action:"/",className:"adress-delivery__header"},r.a.createElement("div",{className:"search__container"},r.a.createElement("div",{className:"search__button"}),r.a.createElement("div",{className:"hidden"},o),r.a.createElement("input",{type:"text",className:"input",placeholder:"search",onChange:c})),r.a.createElement("div",{className:"destination-details"},r.a.createElement("select",{name:"",onClick:s,className:"adress-delivery__destination-details"},r.a.createElement("option",{value:"alphabet"},"sort By Alphabet"),r.a.createElement("option",{value:""},"sort order")))),i),0===n.length&&0===t?r.a.createElement(v,null):r.a.createElement("div",{className:"catalog"},n.map(function(e){return r.a.createElement(f,{key:e.id,phone:e,phoneId:t,urlImg:a,setItemToBasket:l})})))}}]),t}(r.a.Component),k=function(){var e=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static",e.next=3,fetch("".concat("https://mate-academy.github.io/phone-catalogue-static","/api/phones.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static",e.next=3,fetch("".concat("https://mate-academy.github.io/phone-catalogue-static","/api/phones/").concat(t,".json"));case 3:return a=e.sent,n=a.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={phoneDetails:null,imgChoseUrl:""},a.handleChose=function(e){a.setState({imgChoseUrl:e})},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.props.phoneId);case 2:t=e.sent,this.setState({phoneDetails:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.phoneDetails,n=t.imgChoseUrl,c=this.props,s=c.urlImg,l=c.phoneId;return c.phones.find(function(e){return e.id===l})?null===a?r.a.createElement(v,null):r.a.createElement("div",{className:"catalog__phones"},n?r.a.createElement("img",{src:"".concat(s,"/").concat(n),alt:"".concat(n),className:"card__img"}):"",a.images?r.a.createElement("div",null,r.a.createElement("div",{className:"container__for__images"},a.images.map(function(t){return r.a.createElement("img",{onMouseOver:function(){return e.handleChose("".concat(t))},key:t,src:"".concat(s,"/").concat(t),alt:"phone",className:"card__img",onFocus:!0})}))):"",r.a.createElement("div",{className:"details"},r.a.createElement("h1",null,"description"),r.a.createElement("p",null,"".concat(a.description)),r.a.createElement("h3",null,"Display"),r.a.createElement("p",null,"".concat(a.display.screenResolution)),r.a.createElement("p",null,"".concat(a.display.screenSize)),r.a.createElement("h3",null,"android"),r.a.createElement("p",null,"".concat(a.android.os)),r.a.createElement("p",null,"".concat(a.android.ui)),r.a.createElement("h3",null,"hardware"),r.a.createElement("p",null,"".concat(a.hardware.audioJack)),r.a.createElement("p",null,"".concat(a.hardware.cpu)),r.a.createElement("p",null,"".concat(a.hardware.usb)))):r.a.createElement("div",{className:"wrraper__was__not_phone"},r.a.createElement("h1",{className:"phone__was__not"},"Phone Was Not Found"))}}]),t}(r.a.Component),w=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"),r.a.createElement("span",null,r.a.createElement(l.b,{className:"navlink",to:"/",exact:!0},"here is Home")))},j=function(e){var t=e.phonesToBasket,a=e.handleBasket;return r.a.createElement("div",null,0===t.length?r.a.createElement("h1",null,"Basket is empty"):r.a.createElement("table",{className:"basket__table"},r.a.createElement("thead",{className:"basket__table-thead"},r.a.createElement("tr",null,r.a.createElement("td",{className:"basketPage__table-thead-td"},"Delivery"),r.a.createElement("td",null),r.a.createElement("td",{className:"basketPage__table-thead-td"},"Count"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{className:"basketPage__table-tbody-tr"},r.a.createElement("td",{className:"basketPage__table-tbody-td"},t+1),r.a.createElement("td",{className:"basketPage__table-tbody-td"},e.phone),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:function(){return a(e.id,"remove")},className:"basketPage__table-quantity-remove"},"x")),r.a.createElement("td",{className:"basketPage__table-tbody-td"},r.a.createElement("button",{type:"button",onClick:function(){return a(e.id,"decrease")},className:"basketPage__table-quantity-minus"},"-"),e.quantity,r.a.createElement("button",{type:"button",onClick:function(){return a(e.id,"increase")},className:"basketPage__table-quantity-plus"},"+")))}))))},C=function(){return r.a.createElement("div",{className:"home_page"},r.a.createElement(l.b,{className:"navlink",to:"/phones",exact:!0},"Go to Catalog"))},O=function(e,t){var a={alphabet:function(e,t){return e.name.localeCompare(t.name)}}[t];return Object(E.a)(e).sort(a)},B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={phones:[],phonesVisible:[],phonesToBasket:[],sortField:""},a.handleBasket=function(e,t){var n=a.state.phonesToBasket.findIndex(function(t){return t.id===e});a.setState(function(a){var r=Object(E.a)(a.phonesToBasket);switch(t){case"increase":return r[n].quantity+=1;case"decrease":1===r[n].quantity?r=r.filter(function(t){return t.id!==e}):r[n].quantity-=1;break;case"remove":r=r.filter(function(t){return t.id!==e})}return{phonesToBasket:r}})},a.setItemToBasket=function(e,t,n){a.setState(function(a){return{phonesToBasket:[].concat(Object(E.a)(a.phonesToBasket),[{quantity:1,phone:e,imageUrl:t,id:n}])}})},a.handleFilter=function(e){var t=e.target.value;a.setState(function(e){var a=e.phones.filter(function(e){return[e.name].join().toLowerCase().includes(t.toLowerCase())});return{phonesVisible:O(a,e.sortField)}})},a.handleSort=function(e){var t=e.target.value;a.setState(function(e){return{phonesVisible:O(e.phones,t),sortField:t}})},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({phones:t,phonesVisible:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.phonesVisible,n=t.phonesToBasket,c=t.sortField,s="https://mate-academy.github.io/phone-catalogue-static/";return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"nav__main_container"},r.a.createElement(l.b,{to:"/",exact:!0,className:"page__home phone__position Phones__page",activeClassName:"phoneClassActive"},r.a.createElement("div",{className:"App__logo"})),r.a.createElement(l.b,{to:"/phones",className:"Phones__page",activeClassName:"phoneClassActive"},"PhonesPage"),r.a.createElement(l.b,{to:"/basket",className:"Phones__page page__basket",activeClassName:"phoneClassActive"},r.a.createElement("div",{className:"App__basket"}))),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0,component:C}),r.a.createElement(_.a,{path:"/phones",exact:!0,render:function(){return r.a.createElement(g,{phones:a,urlImg:s,handleFilter:e.handleFilter,handleSort:e.handleSort,setItemToBasket:e.setItemToBasket,sortField:c})}}),r.a.createElement(_.a,{path:"/phones/:phoneId",exact:!0,render:function(e){var t=e.match;return r.a.createElement(N,{phoneId:t.params.phoneId,urlImg:s,phones:a})}}),r.a.createElement(_.a,{path:"/basket",render:function(){return r.a.createElement(j,{phonesToBasket:n,handleBasket:e.handleBasket})}}),r.a.createElement(_.a,{path:"*",component:w})))}}]),t}(r.a.Component);s.a.render(r.a.createElement(l.a,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a6caeb55.chunk.js.map