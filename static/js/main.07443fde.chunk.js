(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(37)},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),s=n.n(r),c=n(2),i=n(11),m=n(12),l=n.n(m),u=n(14),p=n(5),b=n(3),h=n(6),d=n(7),f=n(9),v=n(49),O=(n(28),n(29),n(30),n(31),function(t){var e=t.comment,n=t.comments;return o.a.createElement("div",{className:"comments__item"},o.a.createElement("p",{className:"comments__item__body"},e.body?e.body:n))}),y=function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={commentsAreVisible:!1},n}return Object(f.a)(e,t),Object(b.a)(e,[{key:"togleComments",value:function(){this.setState(function(t){return{commentsAreVisible:!t.commentsAreVisible}})}},{key:"render",value:function(){var t=this,e=this.props,n=e.comments,a=e.handleSubmit,r=e.handleChange,s=e.comment,c=this.state.commentsAreVisible;return o.a.createElement("div",null,o.a.createElement("button",{className:"show-comments-btn",type:"button",onClick:function(){t.togleComments(!0)}},c?"\u0421\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),c&&n&&o.a.createElement("div",{className:"comments"},o.a.createElement("form",{onSubmit:a},o.a.createElement("label",{className:"new-todo",htmlFor:"new-todo-title"},o.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:r,value:s,name:"comment",type:"text"})),o.a.createElement("button",{type:"submit",className:"buttonHide"},"submit")),n?n.map(function(t){return o.a.createElement(O,{comment:t,key:t.id,comments:n})}):""))}}]),e}(o.a.Component),j=function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={activeRename:!1,title:n.props.post.postItem.title},n.handleStart=function(){n.setState({activeRename:!0})},n.handleSubmit=function(t){t.preventDefault();var e=n.props,a=e.renamePosts,o=e.post;a(n.state.title,o.postItem.id),n.setState({activeRename:!1})},n.handleRename=function(t){var e=t.target,a=e.value,o=e.name;n.setState(Object(c.a)({},o,a))},n}return Object(f.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this.state,e=t.activeRename,n=t.title,a=this.props,r=a.post,s=a.addComment,c=a.handleSubmit,i=a.comment,m=a.handleChange,l=a.handlePostRemote;return o.a.createElement("div",{className:"post__container"},e?o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"title",type:"text",onChange:this.handleRename,value:n,className:"new-todo"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("article",{className:"post"},o.a.createElement("h2",{onClick:this.handleStart,className:"post__title"},r.postItem.title?r.postItem.title:r.postItem),o.a.createElement("p",null,r.postItem.body),o.a.createElement(v.a,{type:"button",onClick:function(){return l(r.postItem.id,"remove")},className:"basketPage__table-quantity-remove"},"x")),o.a.createElement(y,{comments:r.postComments,addComment:s,handleSubmit:c,handleChange:m,comment:i})))}}]),e}(o.a.Component);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach(function(e){Object(c.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var E=function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={postsMap:{title:"",comment:"",body:""}},n.handleSubmit=function(t){t.preventDefault(),(0,n.props.onSubmit)(n.state.postsMap),n.setState({postsMap:{comment:"",title:""}})},n.handleChange=function(t){var e=t.target,a=e.name,o=e.value;n.setState(function(t){return{postsMap:w({},t.postsMap,Object(c.a)({},a,o))}})},n}return Object(f.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.posts,a=e.handlePostRemote,r=e.renamePosts,s=this.state.postsMap;return o.a.createElement("div",{className:"posts-list"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{className:"new-todo",htmlFor:"new-todo-title"},o.a.createElement("input",{className:"search-post__input",placeholder:"enter post",onChange:this.handleChange,value:s.title,name:"title",type:"text"})),o.a.createElement("button",{type:"submit",className:"buttonHide"},"submit")),o.a.createElement("div",{className:"posts"},n.map(function(e){return o.a.createElement(j,{renamePosts:r,handlePostRemote:a,post:e,key:e.id,handleSubmit:t.handleSubmit,handleChange:t.handleChange,comment:s.comment})})))}}]),e}(o.a.Component),P=(n(36),function(){var t=Object(u.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bloggy-api.herokuapp.com/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()),S=function(){var t=Object(u.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bloggy-api.herokuapp.com/comments");case 2:return e=t.sent,t.next=5,e.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach(function(e){Object(c.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var N=function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={isLoaded:!1,isLoading:!1,posts:[]},n.handleClick=Object(u.a)(l.a.mark(function t(){var e,a,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return e=t.sent,t.next=5,P();case 5:a=t.sent,o=a.map(function(t){return{postItem:t,postComments:e.filter(function(e){return e.postId===t.id})}}),n.setState({posts:o,isLoading:!0}),setTimeout(function(){n.setState({isLoaded:!0,isLoading:!1})},10);case 9:case"end":return t.stop()}},t)})),n.renamePosts=function(t,e){n.setState(function(n){return{posts:Object(i.a)(n.posts.map(function(n){return n.postItem.id===e?k({},n,{postItem:k({},n.postItem,{title:t})}):n}))}})},n.addPost=function(t){n.setState(function(e){return{posts:[].concat(Object(i.a)(e.posts),[{postItem:{title:t.title,body:t.body,id:Date.now()},postComments:t.comment}])}})},n.handlePostRemote=function(t,e){n.setState(function(n){var a=Object(i.a)(n.posts);switch(e){case"remove":a=a.filter(function(e){return e.postItem.id!==t})}return{posts:a}})},n}return Object(f.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this.state.posts;return o.a.createElement("main",{className:"main"},this.state.isLoaded?o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{posts:t,onSubmit:this.addPost,renamePosts:this.renamePosts,handlePostRemote:this.handlePostRemote})):o.a.createElement(v.a,{type:"button",className:"load-btn",onClick:this.handleClick},this.state.isLoading?"Loading...":"Load"))}}]),e}(o.a.Component);s.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.07443fde.chunk.js.map