(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},198:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),s=(a(98),a(21)),i=a.n(s),l=a(37),u=a(22),d=(a(100),a(233)),m=a(234),f=a(235),v=a(227),p=a(231),h=a(87),E=a(232);a(101);var b=function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=Object(h.a)(e,["title","cases","total","active","isRed"]);return c.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red")},c.a.createElement(p.a,null,c.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},j=a(83),w=a(13),y=a.n(w),O={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}},_=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n};var k=function(e){var t=e.casesType,a=Object(n.useState)({}),r=Object(u.a)(a,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){console.log(e);var a=_(e,t);s(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),c.a.createElement("div",null,o.length>0?c.a.createElement(j.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},options:O}):c.a.createElement("h1",null,"SORRY DATA UNAILABLE"))};a(198);var x=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.country),c.a.createElement("td",null,c.a.createElement("strong",null,y()(e.cases).format("0,0"))))})))},g=a(86),C=(a(236),a(237),function(e){var t=Object(g.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t}),N=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},B=(a(199),function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),h=s[0],E=s[1],j=Object(n.useState)([]),w=Object(u.a)(j,2),O=w[0],_=w[1],g=Object(n.useState)([]),B=Object(u.a)(g,2),S=B[0],R=B[1],A=Object(n.useState)("cases"),D=Object(u.a)(A,2),T=D[0],I=D[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){E(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=C(e);_(t),R(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){r(a),E(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"COVID-19 Tracker"),c.a.createElement(d.a,{className:"app__dropdown"},c.a.createElement(m.a,{variant:"outlined",value:a,onChange:L},c.a.createElement(f.a,{value:"worldwide"},"Worldwide"),O.map((function(e){return c.a.createElement(f.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(b,{onClick:function(e){return I("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===T,cases:N(h.todayCases),total:y()(h.cases).format("0.0a")}),c.a.createElement(b,{onClick:function(e){return I("recovered")},title:"Recovered",active:"recovered"===T,cases:N(h.todayRecovered),total:y()(h.recovered).format("0.0a")}),c.a.createElement(b,{onClick:function(e){return I("deaths")},title:"Deaths",isRed:!0,active:"deaths"===T,cases:N(h.todayDeaths),total:y()(h.deaths).format("0.0a")}))),c.a.createElement(v.a,{className:"app__right"},c.a.createElement("div",null,c.a.createElement(p.a,null,c.a.createElement("div",{className:"app__information"},c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(x,{countries:S}))))),c.a.createElement(v.a,null,c.a.createElement("div",{className:"app__lineGraph"},c.a.createElement("h3",null,"Worldwide new ",T),c.a.createElement(k,{casesType:T}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(200)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.369def90.chunk.js.map