(window.webpackJsonptic_tac_toe=window.webpackJsonptic_tac_toe||[]).push([[0],{33:function(e,t,a){e.exports=a(86)},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a.n(n),r=a(0),s=a.n(r),l=(a(38),a(2)),i=a(8),o=a(9),m=a(3),u=a.n(m),p=a(7),d=function(e){var t=e.name,a=e.description,n=e.address,c=(e.images,Object(r.useState)([])),i=Object(l.a)(c,2);i[0],i[1];return s.a.createElement("div",{className:"list-item"},s.a.createElement("div",{className:"list-item__title"},t),s.a.createElement("div",{className:"discription__text",dangerouslySetInnerHTML:{__html:a}}),s.a.createElement("div",{className:"list-item__title"},n))},f=(a(40),function(){return s.a.createElement("div",{className:"lds-css"},s.a.createElement("div",{className:"lds-double-ring"},s.a.createElement("div",null),s.a.createElement("div",null)))}),v=function(){Object(r.useEffect)(function(){v()},[]);var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!0),i=Object(l.a)(c,2),o=i[0],m=i[1],v=function(){fetch("".concat("https://kudago.com/public-api/v1.4/","/places?fields=id,title,address,images,description&expand=place&lang=ru&location=nsk")).then(function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.json();case 4:a=e.sent,n(a.results),m(!1),console.log(a.results);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())};return o?s.a.createElement(f,null):s.a.createElement("div",{className:"list-wrap"},s.a.createElement("h2",{className:"title"}," \u041c\u0435\u0441\u0442\u0430 "),a.map(function(e){return s.a.createElement(d,{name:e.title,address:e.address,description:e.description,key:e.id,image:e.images})}))},E=(a(41),function(e){var t=e.name,a=e.description,n=e.image,c=e.placeTitle,r=e.id,l=e.onItemSelected;return s.a.createElement("div",{className:"list-item",onClick:function(){return l(r)}},s.a.createElement("div",{className:"list-item__title"},t),s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"list-item__discription",dangerouslySetInnerHTML:{__html:a}}),s.a.createElement("div",{className:"list-item__img"},s.a.createElement("img",{src:n,alt:""}))),s.a.createElement("div",{className:"list-item__place"},s.a.createElement("span",null,"\u041c\u0435\u0441\u0442\u043e:\xa0"),c))}),_=Object(o.e)(function(e){var t=e.history,a=e.slug;Object(r.useEffect)(function(){b()},[]);var n=Object(r.useState)([]),c=Object(l.a)(n,2),i=c[0],o=c[1],m=Object(r.useState)(!0),d=Object(l.a)(m,2),v=d[0],_=d[1],b=function(){fetch("".concat("https://kudago.com/public-api/v1.4/","/events?fields=dates,images,description,id,title,short_title,place&expand=place,dates&lang=ru&location=").concat(a,"&page=").concat(Math.floor(10*Math.random())+1)).then(function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.json();case 4:a=e.sent,o(a.results),_(!1),console.log(a.results);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())};return v?s.a.createElement(f,null):s.a.createElement("div",{className:"list-wrap"},s.a.createElement("h2",{className:"title"}," \u0421\u043e\u0431\u044b\u0442\u0438\u044f "),i.map(function(e){return s.a.createElement(E,{name:e.short_title||e.title,key:e.id,description:e.description,image:e.images[0].image,placeTitle:e.place&&e.place.title,id:e.id,onItemSelected:function(e){t.push("".concat(e))}})}))}),b=(a(46),a(31)),g=a.n(b),h=a(32),N=a.n(h),j=function(e){var t=e.selectId,a="https://kudago.com/public-api/v1.4/";Object(r.useEffect)(function(){function e(){return(e=Object(p.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/events/").concat(t,"/?expand=place")).then(function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.json();case 4:a=e.sent,o(a),E(!1),console.log(a);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var n=Object(r.useState)({}),c=Object(l.a)(n,2),i=c[0],o=c[1],m=Object(r.useState)(!0),d=Object(l.a)(m,2),v=d[0],E=d[1];return v?s.a.createElement(f,null):s.a.createElement("div",{className:"cart-item"},s.a.createElement("div",{className:"cart-item__title"},i.title),s.a.createElement("div",{className:"cart-item__price"},s.a.createElement("span",{className:"tomato"},"\u0446\u0435\u043d\u0430:\xa0")," ",i.price||"\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"),s.a.createElement("div",{className:"cart-item__images"},s.a.createElement(N.a,{dots:!0,infinite:!0,centerMode:!0,autoplay:!0,speed:500,slidesToShow:1,slidesToScroll:1},i.images.map(function(e){return s.a.createElement("div",{className:"cart-item__image",key:e.source.name},s.a.createElement("img",{src:e.image,alt:""}))}))),s.a.createElement("div",{className:"cart-item__text",dangerouslySetInnerHTML:{__html:i.body_text}}),s.a.createElement("div",{className:"cart-item__age"},s.a.createElement("span",{className:"tomato"},"\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435:\xa0")," ",i.age_restriction?i.age_restriction:"\u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"map-container"},s.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyCU9MTC1valF9nap3DwKA3OBSyTCukvolc"},defaultCenter:{lat:i.place.coords.lat,lng:i.place.coords.lon},defaultZoom:17},s.a.createElement(function(e){var t=e.text;return s.a.createElement("div",{className:"custom-marker"},t)},{lat:i.place.coords.lat,lng:i.place.coords.lon}))),s.a.createElement("div",{className:"cart-item__contancts contacts"},s.a.createElement("div",{className:"contacts__item"},i.place.address?s.a.createElement("span",{className:"tomato"},"\u0410\u0434\u0440\u0435\u0441:\xa0"):null," ",i.place.address),s.a.createElement("div",{className:"contacts__item"},i.place.subway?s.a.createElement("span",{className:"tomato"},"\u041c\u0435\u0442\u0440\u043e:\xa0"):null," ",i.place.subway),s.a.createElement("div",{className:"contacts__item"},i.place.title?s.a.createElement("span",{className:"tomato"},"\u041c\u0435\u0441\u0442\u043e:\xa0"):null," ",i.place.title),s.a.createElement("div",{className:"contacts__item"},i.place.phone?s.a.createElement("span",{className:"tomato"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:\xa0"):null," ",i.place.phone))))},O=(a(81),function(){return s.a.createElement("header",{className:"header"},s.a.createElement("nav",{className:"nav"},s.a.createElement(i.b,{to:"/events/",className:"nav__link"},"\u0441\u043e\u0431\u044b\u0442\u0438\u044f"),s.a.createElement(i.b,{to:"/place/",className:"nav__link"},"\u043c\u0435\u0441\u0442\u0430"),s.a.createElement(i.b,{to:"/news/",className:"nav__link"},"\u043d\u043e\u0432\u043e\u0441\u0442\u0438")))}),k=(a(82),function(e){var t=e.getSitySlug;Object(r.useEffect)(function(){m()},[]);var a=Object(r.useState)([]),n=Object(l.a)(a,2),c=n[0],o=n[1],m=function(){fetch("".concat("https://kudago.com/public-api/v1.4/","/locations/?lang=ru")).then(function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.json();case 4:a=e.sent,o(a),console.log(a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())};return s.a.createElement("div",{className:"city-list"},s.a.createElement("h2",null," \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434 "),c.map(function(e){var a=e.name,n=e.slug;return s.a.createElement(i.b,{to:"/events/",key:n,className:"city-list__item",onClick:function(){t(n)}},a)}))}),y=(a(83),function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=function(e){n(e)};return s.a.createElement(i.a,null,s.a.createElement("div",{className:"app"},s.a.createElement(O,null),s.a.createElement("div",{className:"container"},s.a.createElement(o.a,{path:"/events/",exact:!0,render:function(){return s.a.createElement(_,{slug:a})}}),s.a.createElement(o.a,{path:"/place/",exact:!0,render:function(){return s.a.createElement(v,{slug:a})}}),s.a.createElement(o.a,{path:"/",exact:!0,render:function(){return s.a.createElement(k,{getSitySlug:c})}}),s.a.createElement(o.a,{path:"/events/:id",render:function(e){var t=e.match;return s.a.createElement(j,{selectId:t.params.id})}}))))});a(84),a(85);c.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d58998c6.chunk.js.map