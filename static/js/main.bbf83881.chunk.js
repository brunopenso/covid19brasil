(this.webpackJsonpcovid19brasilsrc=this.webpackJsonpcovid19brasilsrc||[]).push([[0],{161:function(e,a,t){e.exports=t(347)},166:function(e,a,t){},347:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(49),c=t.n(s),o=(t(166),t(35)),i=(t(82),t(36)),l=t(7);var m=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),s=t[0],c=t[1],i=Object(n.useState)(0),m=Object(o.a)(i,2),d=m[0],u=m[1];function f(e,a){return Math.round(e+e*(a/100))}return Object(n.useEffect)((function(){c(e.data),u(e.percentage),s.forEach((function(e){console.log(e.confirmedCases),e.confirmedCases=f(e.confirmedCases,d),console.log(e.confirmedCases),e.deathCases=f(e.deathCases,d)}))}),[e.data,e.percentage]),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"container"},r.a.createElement(l.f,{width:"90%",aspect:1.6,minWidth:300},r.a.createElement(l.c,{data:s},r.a.createElement(l.b,{strokeDasharray:"3 3"}),r.a.createElement(l.h,{dataKey:"date"}),r.a.createElement(l.i,null),r.a.createElement(l.g,null),r.a.createElement(l.d,{layout:"vertical",align:"center",verticalAlign:"bottom",iconSize:"12"}),r.a.createElement(l.a,{dataKey:"PConfirmedCases",barSize:20,fill:"#413ea0",name:"% de casos em rela\xe7\xe3o D-1"}),r.a.createElement(l.e,{type:"monotone",dataKey:"confirmedCases",stroke:"#8884d8",activeDot:{r:2},name:"casos confirmados"})))))};var d=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],s=a[1];function c(e,a){return(""+100*(1-e/a)).substring(0,5)}return Object(n.useEffect)((function(){var e,a;i.forEach((function(t){e>0&&a>0&&(t.PConfirmedCases=c(e,t.confirmedCases),t.PDeathCases=c(a,t.deathCases)),e=t.confirmedCases,a=t.deathCases}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("p",{className:"App-header"},"Covid-19 Brasil - Acompanhamento do Gr\xe1fico e simula\xe7\xf5es")),r.a.createElement("div",null,r.a.createElement("p",{className:"MediumText"},"Os dados s\xe3o coletados das fontes oficias sempre no final do dia"),r.a.createElement("p",{className:"SmallText"},"Para atualizar os dados deste gr\xe1fico \xe9 necess\xe1rio fazer um update no arquivo dentro da pasta ",r.a.createElement("b",null,"data")," no reposit\xf3rio ",r.a.createElement("a",{href:"https://github.com/brunopenso/covid19brasilsrc",target:"_blank",rel:"noopener noreferrer"},"brunopenso/covid19brasilsrc"))),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"container"},r.a.createElement(l.f,{width:"90%",aspect:1.6,minWidth:300},r.a.createElement(l.c,{data:i},r.a.createElement(l.b,{strokeDasharray:"3 3"}),r.a.createElement(l.h,{dataKey:"date"}),r.a.createElement(l.i,null),r.a.createElement(l.g,null),r.a.createElement(l.d,{layout:"vertical",align:"center",verticalAlign:"bottom",iconSize:"12"}),r.a.createElement(l.a,{dataKey:"PConfirmedCases",barSize:20,fill:"#413ea0",name:"% de casos em rela\xe7\xe3o D-1"}),r.a.createElement(l.e,{type:"monotone",dataKey:"confirmedCases",stroke:"#8884d8",activeDot:{r:2},name:"casos confirmados"})))),r.a.createElement("div",{className:"container"},r.a.createElement(l.f,{width:"90%",aspect:1.6,minWidth:300},r.a.createElement(l.c,{width:500,height:300,data:i,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(l.b,{strokeDasharray:"3 3"}),r.a.createElement(l.h,{dataKey:"date"}),r.a.createElement(l.i,null),r.a.createElement(l.g,null),r.a.createElement(l.d,{layout:"vertical",align:"center",verticalAlign:"bottom",iconSize:"12"}),r.a.createElement(l.a,{dataKey:"PDeathCases",barSize:20,fill:"#413ea0",name:"% de casos em rela\xe7\xe3o D-1"}),r.a.createElement(l.e,{type:"monotone",dataKey:"deathCases",stroke:"#8884d8",activeDot:{r:8},name:"Mortes"}))))),r.a.createElement("div",{className:"flex-container-simulation"},r.a.createElement("div",{className:"container-simulation"},"A sess\xe3o abaixo s\xe3o para simula\xe7\xf5es"),r.a.createElement("div",{className:"container-simulation"},r.a.createElement("input",{type:"number",name:"simulationPercentange",className:"inputField",onChange:function(e){return s(e.target.value)},value:t}))),r.a.createElement("div",{className:"flex-container-simulation"},t>0?r.a.createElement(m,{data:i,percentage:t}):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e){e.exports=JSON.parse('[{"date":"17/03/2020","confirmedCases":349,"deathCases":1},{"date":"18/03/2020","confirmedCases":428,"deathCases":4},{"date":"19/03/2020","confirmedCases":640,"deathCases":6},{"date":"20/03/2020","confirmedCases":1020,"deathCases":18},{"date":"21/03/2020","confirmedCases":1128,"deathCases":18},{"date":"22/03/2020","confirmedCases":1546,"deathCases":25},{"date":"23/03/2020","confirmedCases":1891,"deathCases":34},{"date":"24/03/2020","confirmedCases":2021,"deathCases":46}]')},82:function(e,a,t){}},[[161,1,2]]]);
//# sourceMappingURL=main.bbf83881.chunk.js.map