(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/react_shop_app_logo.913d00d9.png"},34:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},40:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(28),r=a.n(c),o=(a(39),a(7)),i=a(8),m=a(10),d=a(9),s=a(11),u=a(14),h=(a(40),a(6)),p=a(15),E=a(12),v=a.n(E),f=(a(60),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).onSearch=e.onSearch.bind(Object(p.a)(e)),e.state={results:[]},e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"onSearch",value:function(e){var t=this;console.log(e.currentTarget.value);var a=e.currentTarget.value;v.a.get("https://api.mercadolibre.com/sites/MLB/search?q=".concat(a)).then(function(e){console.log(e),t.setState({results:e.data.results})})}},{key:"renderItem",value:function(e){return l.a.createElement("div",{class:"demo-card-square mdl-card mdl-shadow--2dp"},l.a.createElement("div",{className:"mdl-card__supporting-text"},e.title),l.a.createElement("div",{class:"mdl-card__actions mdl-card--border"},l.a.createElement(u.b,{to:"/product/".concat(e.id)},l.a.createElement("button",{className:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"},"Ver Produto"))))}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"mdl-grid container__search"},l.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},l.a.createElement("div",{className:"mdl-textfield mdl-js-textfield"},l.a.createElement("input",{className:"mdl-textfield__input textfield__input__size",type:"text",id:"search",onChange:this.onSearch}),l.a.createElement("label",{className:"mdl-textfield__label",for:"search"},"O que voc\xea procura?")),this.state.results.map(this.renderItem))))}}]),t}(n.Component)),g=a(33),b=a(32),_=(a(69),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={id:e.match.params.id,loading:!0,data:{}},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.all([v.a.get("https://api.mercadolibre.com/items/".concat(this.state.id)),v.a.get("https://api.mercadolibre.com/items/".concat(this.state.id,"/description"))]).then(function(t){var a=Object(b.a)(t,2),n=a[0],l=a[1];console.log(n,l),e.setState({data:Object(g.a)({},n.data,{description:l.data.plain_text}),loading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.loading,c=t.id,r=t.title,o=t.price,i=t.pictures,m=t.seller_address;return a?l.a.createElement(n.Fragment,null,"Carregando..."):l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"demo-card-wide mdl-card mdl-shadow--2dp"},l.a.createElement("div",{className:"mdl-grid"},l.a.createElement("div",{className:"mdl-cell mdl-cell--5-col"},l.a.createElement("img",{className:"img-product ",src:i[0].url,alt:t.title})),l.a.createElement("div",{className:"mdl-cell mdl-cell--7-col"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null," ",c)),l.a.createElement("div",null,l.a.createElement("h3",{className:"mdl-card__title-text"},r)),l.a.createElement("div",null,l.a.createElement("h4",null,"R$",o)),l.a.createElement("div",null,l.a.createElement("h4",null,m.city.name)),l.a.createElement("div",null,l.a.createElement("h4",null," ",m.state.name)))))))}}]),t}(n.Component)),j=function(){return l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:f}),l.a.createElement(h.a,{exact:!0,path:"/product/:id",component:_}),l.a.createElement(h.a,{component:function(){return l.a.createElement("div",null,"Page not found")}}))},O=(a(70),a(31)),N=a.n(O),w=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"mdl-grid"},l.a.createElement("div",{className:"mdl-cell--12-col"},l.a.createElement("img",{alt:"Logo",src:N.a,className:"header__logo"}))))},x=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"mdl-layout"},l.a.createElement(u.a,null,l.a.createElement(w,null),l.a.createElement(j,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.9d77ac9d.chunk.js.map