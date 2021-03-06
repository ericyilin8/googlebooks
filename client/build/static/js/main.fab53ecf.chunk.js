(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(53)},30:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(21),r=n.n(l),c=n(56),i=n(58),u=n(57),s=n(22),m=n(6),h=n(7),d=n(11),f=n(8),E=n(12);n(30);var b=function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var p=function(e){var t=e.children;return o.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},k=n(5),v=n.n(k),g={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)}},y=n(55);function B(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function j(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function N(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(49);function O(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function w(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function S(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function x(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",bookSearch:[]},n.loadBooks=function(){g.getBooks().then(function(e){return n.setState({books:e.data,title:"",author:""})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){g.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(s.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.title},n.saveBook=function(e,t){g.saveBook({title:e,author:t}).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(B,{fluid:!0},o.a.createElement(j,null,o.a.createElement(N,{size:"md-6"},o.a.createElement(p,null,o.a.createElement("h1",null,"Search for book by title")),o.a.createElement("form",null,o.a.createElement(S,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),o.a.createElement(x,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit},"Submit Book"))),o.a.createElement(N,{size:"md-6 sm-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement(O,null,this.state.books.map(function(t){return o.a.createElement(w,{key:t._id},o.a.createElement(y.a,{to:"/books/"+t._id},o.a.createElement("strong",null,t.title," by ",t.author)),o.a.createElement(b,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display"))),o.a.createElement(j,null,this.state.bookSearch.length?o.a.createElement(O,null,this.state.bookSearch.map(function(e){return o.a.createElement(w,null,o.a.createElement("strong",null,e.volumeInfo.title," by ",e.volumeInfo.author))})):o.a.createElement("h3",null,"No Results to Display")))}}]),t}(a.Component),z=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},n}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(B,{fluid:!0},o.a.createElement(j,null,o.a.createElement(N,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),o.a.createElement(j,null,o.a.createElement(N,{size:"md-2"},o.a.createElement(y.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(a.Component);var I=function(){return o.a.createElement(B,{fluid:!0},o.a.createElement(j,null,o.a.createElement(N,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var D=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var R=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(D,null),o.a.createElement(i.a,null,o.a.createElement(u.a,{exact:!0,path:"/",component:C}),o.a.createElement(u.a,{exact:!0,path:"/books",component:C}),o.a.createElement(u.a,{exact:!0,path:"/books/:id",component:z}),o.a.createElement(u.a,{component:I}))))};r.a.render(o.a.createElement(R,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fab53ecf.chunk.js.map