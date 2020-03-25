(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{171:function(e,t,a){e.exports=a(199)},176:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(100),l=a.n(c),s=a(23),i=a(21),o=a(218),d=a(219),m=(a(176),a(2)),u=a(19),f=a.n(u),h=a(220),p=a(221),v=a(202);var g=function(e){var t=Object(n.useState)(e.state),a=Object(m.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){l(e.state)}),[e.state]),r.a.createElement("tr",{className:e.total?"is-total":""},r.a.createElement("td",{style:{fontWeight:600}},c.state),r.a.createElement("td",null,c.confirmed),r.a.createElement("td",{style:{color:0===parseInt(c.active)?"#B5B5B5":"inherit"}},0===parseInt(c.active)?"-":c.active),r.a.createElement("td",{style:{color:0===parseInt(c.recovered)?"#B5B5B5":"inherit"}},0===parseInt(c.recovered)?"-":c.recovered),r.a.createElement("td",{style:{color:0===parseInt(c.deaths)?"#B5B5B5":"inherit"}},0===parseInt(c.deaths)?"-":c.deaths))};var E=function(e){var t=Object(n.useState)(e.states),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(0),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)({sortColumn:"confirmed",isAscending:!1}),f=Object(m.a)(u,2),h=f[0],p=f[1];Object(n.useEffect)((function(){!0===e.summary?l(e.states.slice(0,9)):l(e.states)}),[e.states]),Object(n.useEffect)((function(){if(c.length>0){var t=0;e.states.map((function(a,n){0!==n&&a.confirmed>0&&(t+=1),n===e.states.length-1&&d(t)}))}}),[c.length]);var E=function(e,t){var a=e.currentTarget.querySelector("abbr").getAttribute("title").toLowerCase();p({sortColumn:a,isAscending:h.sortColumn==a?!h.isAscending:"state"===h.sortColumn})};return function(e,t){var a=c.splice(0,1);c.sort((function(e,t){var a=h.sortColumn,n=e[a],r=t[a];return"state"!=a&&(n=parseInt(e[a]),r=parseInt(t[a])),h.isAscending?n>r?1:-1:n>r?-1:1})),c.unshift(a[0])}(),r.a.createElement("table",{className:"table fadeInUp",style:{animationDelay:"1s"}},r.a.createElement("h5",{className:"affected-count"},o," States/UTS Affected"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"state-heading",onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{title:"State"},"State/UT"),r.a.createElement("div",{style:{display:"state"===h.sortColumn?"initial":"none"}},r.a.createElement(v.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-cherry":""),title:"Confirmed"},window.innerWidth<=769?window.innerWidth<=375?"C":"Cnfrmd":"Confirmed"),r.a.createElement("div",{style:{display:"confirmed"===h.sortColumn?"initial":"none"}},r.a.createElement(v.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-blue":""),title:"Active"},window.innerWidth<=769?window.innerWidth<=375?"A":"Actv":"Active"),r.a.createElement("div",{style:{display:"active"===h.sortColumn?"initial":"none"}},r.a.createElement(v.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-green":""),title:"Recovered"},window.innerWidth<=769?window.innerWidth<=375?"R":"Rcvrd":"Recovered"),r.a.createElement("div",{className:"recovered"===h.sortColumn?"sort-black":""}),r.a.createElement("div",{style:{display:"recovered"===h.sortColumn?"initial":"none"}},r.a.createElement(v.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-gray":""),title:"Deaths"},window.innerWidth<=769?window.innerWidth<=375?"D":"DCSD":"Deaths"),r.a.createElement("div",{style:{display:"deaths"===h.sortColumn?"initial":"none"}},r.a.createElement(v.a,null)))))),r.a.createElement("tbody",null,c.map((function(e,t){if(0!==t&&e.confirmed>0)return r.a.createElement(g,{key:t,state:e,total:!1})})),c.length>1&&!1===e.summary&&r.a.createElement(g,{key:0,state:c[0],total:!0})))};var y=function(e){var t=Object(n.useState)(e.data),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(0),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(0),f=Object(m.a)(u,2),h=f[0],p=f[1],v=Object(n.useState)(0),g=Object(m.a)(v,2),E=g[0],y=g[1],b=Object(n.useState)(0),w=Object(m.a)(b,2),j=w[0],N=w[1];Object(n.useEffect)((function(){l(e.data),k()}));var k=function(){var e=0,t=0,a=0,n=0;c.map((function(r,c){0!==c&&(e+=parseInt(r.confirmed),t+=parseInt(r.active),a+=parseInt(r.recovered),n+=parseInt(r.deaths))})),d(e),p(t),y(a),N(n)};return r.a.createElement("div",{className:"Level fadeInUp",style:{animationDelay:"0.8s"}},r.a.createElement("div",{className:"level-item is-cherry"},r.a.createElement("h5",null,"Confirmed"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.confirmeddelta>=0?"+"+e.deltas.confirmeddelta:e.deltas.confirmeddelta:"","]"),r.a.createElement("h1",null,o," ")),r.a.createElement("div",{className:"level-item is-blue"},r.a.createElement("h5",{className:"heading"},"Active"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta>=0?"+"+(e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta).toString():e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta:"","]"),r.a.createElement("h1",{className:"title has-text-info"},h)),r.a.createElement("div",{className:"level-item is-green"},r.a.createElement("h5",{className:"heading"},"Recovered"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.recovereddelta>=0?"+"+e.deltas.recovereddelta:e.deltas.recovereddelta:"","]"),r.a.createElement("h1",{className:"title has-text-success"},E," ")),r.a.createElement("div",{className:"level-item is-gray"},r.a.createElement("h5",{className:"heading"},"Deceased"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.deceaseddelta>=0?"+"+e.deltas.deceaseddelta:e.deltas.deceaseddelta:"","]"),r.a.createElement("h1",{className:"title has-text-grey"},j)))},b=a(1),w=a(104),j=a(43);var N=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=(a[0],a[1],Object(n.useState)(e.states)),l=Object(m.a)(c,2),s=l[0],i=l[1],o=Object(n.useState)({}),d=Object(m.a)(o,2),u=d[0],f=d[1],h=Object(n.useState)({}),p=Object(m.a)(h,2),v=p[0],g=p[1],E=Object(n.useState)(1),y=Object(m.a)(E,2),N=(y[0],y[1]),k=Object(n.useRef)(null);Object(n.useEffect)((function(){e.states.length>1&&k.current&&(O(k.current),f(s[1]))}),[v]),Object(n.useEffect)((function(){if(s.length>1){for(var e=0,t=parseInt(s[1].confirmed),a=parseInt(s[1].confirmed),n=1;n<s.length;n++)e+=parseInt(s[n].confirmed),parseInt(s[n].confirmed)>parseInt(t)&&(t=parseInt(s[n].confirmed)),parseInt(s[n].confirmed)<parseInt(a)&&(a=parseInt(s[n].confirmed));g({total:e,maxConfirmed:t,minConfirmed:a})}}),[s.length]),Object(n.useEffect)((function(){i(e.states)}),[e.states]);var O=function(e){var t=b.p(e),a=+t.attr("width"),n=+t.attr("height"),r=b.k(),c=b.f().center([78.9,19]).scale(1e3).translate([a/2,n/2]),l=b.g(c);var i=b.n(b.h).domain([0,v.maxConfirmed/.8]);t.append("g").attr("class","legendLinear").attr("transform","translate(1, 375)");var o=Math.floor(v.maxConfirmed/5),d=Array.from(Array(6).keys()).map((function(e){return e*o})),u=Object(w.a)().shapeWidth(50).cells(d).titleWidth(3).labels((function(e){var t=e.i,a=e.genLength,n=e.generatedLabels;if(e.labelDelimiter,t===a-1){var r=Math.floor(n[t]);return"".concat(r,"+")}var c=1+Math.floor(n[t]),l=Math.floor(n[t+1]);return"".concat(c," - ").concat(l)})).title("Confirmed Cases").orient("vertical").scale(i);t.select(".legendLinear").call(u);var h=[b.i("/india.json")];Promise.all(h).then((function(e){var a=Object(m.a)(e,1)[0];s.map((function(e,t){r.set(e.state.toLowerCase(),e.confirmed)})),t.append("g").attr("class","states").selectAll("path").data(j.a(a,a.objects.india).features).enter().append("path").attr("fill",(function(e){var t=r.get(e.properties.ST_NM.toLowerCase());return 0==t?"#ffffff":b.h(.8*t/v.maxConfirmed)})).attr("d",l).attr("pointer-events","all").on("mouseenter",(function(e){var t;t=e.properties.ST_NM,s.map((function(e,a){e.state.toLowerCase()===t.toLowerCase()&&(f(e),N(a))}));var a=b.d.target;b.p(a.parentNode.appendChild(a)).attr("stroke","#ff073a").attr("stroke-width",2)})).on("mouseleave",(function(e){var t=r.get(e.properties.ST_NM.toLowerCase()),a=b.d.target,n=0==t?"#ffffff":b.h(.8*t/v.maxConfirmed);b.p(a).attr("fill",n).attr("stroke","None")})).style("cursor","pointer").append("title").text((function(e){return parseFloat(r.get(e.properties.ST_NM.toLowerCase())/v.total*100).toFixed(2)+"% from "+x(e.properties.ST_NM)})),t.append("path").attr("stroke","#ff073a20").attr("fill","none").attr("stroke-width",2).attr("d",l(j.b(a,a.objects.india)))}))},x=function(e){e=e.toLowerCase().split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")};return r.a.createElement("div",{className:"ChoroplethMap fadeInUp",style:{animationDelay:"1.2s"}},r.a.createElement("h1",{className:"header"},"Statistics by State"),r.a.createElement("h6",{className:"header"},window.innerWidth<=769?"Tap":"Hover"," over a state for more details"),r.a.createElement("div",{className:"svg-parent"},r.a.createElement("svg",{id:"chart",width:"650",height:window.innerWidth<=479?650:750,viewBox:"0 0 650 ".concat(window.innerWidth<=479?650:750),preserveAspectRatio:"xMidYMid meet",ref:k})),r.a.createElement("div",{className:"map-stats"},r.a.createElement("h4",null,u.state),r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.confirmed),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-blue"},r.a.createElement("h5",null,"Active"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.active),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.recovered),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.deaths),r.a.createElement("h6",null)))))};var k=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({}),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(10),f=Object(m.a)(u,2),h=f[0],p=f[1],v=Object(n.useState)(e.mode),g=Object(m.a)(v,2),E=g[0],y=g[1],w=Object(n.useState)(-1),j=Object(m.a)(w,2),N=j[0],k=j[1],O=Object(n.useRef)(null),x=Object(n.useRef)(null),D=Object(n.useRef)(null),C=Object(n.useRef)(null),S=Object(n.useRef)(null),I=Object(n.useRef)(null);Object(n.useEffect)((function(){e.timeseries.length>1&&l(e.timeseries.slice(0,e.timeseries.length-1))}),[e.timeseries.length]),Object(n.useEffect)((function(){c.length>1&&M(c)}),[c.length]),Object(n.useEffect)((function(){y(e.mode),k(N+1)}),[e.mode]),Object(n.useEffect)((function(){N>0&&A(M)}),[N]);var A=function(){for(var e=[O,x,D,C,S,I],t=0;t<=e.length;t++){if(t===e.length)return void M(c);b.p(e[t].current).selectAll("*").remove()}},M=function(e){var t=e;d(e[e.length-1]),p(e.length-1);var a=b.p(O.current),n=0,r=20,c=650-r-20,l=200-n-50,s=b.p(x.current),i=b.p(D.current),o=b.p(C.current),m=b.p(S.current),u=b.p(I.current),f=new Date(t[0].date+"2020"),h=new Date(t[e.length-1].date+"2020");h.setDate(h.getDate()+1);var v=b.o().domain([f,h]).range([r,c]);a.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(b.a(v)),s.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(b.a(v)),i.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(b.a(v)),o.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(b.a(v)),m.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(b.a(v)),u.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(b.a(v));var g=t[e.length-1].totalconfirmed,y=t[e.length-1].totalrecovered,w=t[e.length-1].totaldeceased,j=b.m().domain([-g/10,g]).range([l,n]),N=b.m().domain([-y/10,y]).range([l,n]),k=b.m().domain([-w/10,w]).range([l,n]),A=b.l(t,(function(e){return+e.dailyconfirmed})),M=b.l(t,(function(e){return+e.dailyrecovered})),R=b.l(t,(function(e){return+e.dailydeceased})),U=b.m().domain([-A/10,A]).range([l,n]),B=b.m().domain([-M/10,M]).range([l,n]),L=b.m().domain([-R/10,R]).range([l,n]);a.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(b.b(j).ticks(5).tickPadding(5)),s.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(b.b(E?j:N).ticks(5).tickPadding(5)),i.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(b.b(E?j:k).ticks(5).tickPadding(5)),o.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(b.b(E?j:U).ticks(5).tickPadding(5)),m.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(b.b(E?j:B).ticks(5).tickFormat((function(e){if(Math.floor(e)===e)return e})).tickPadding(5)),u.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(b.b(E?j:L).ticks(5).tickFormat((function(e){if(Math.floor(e)===e)return e})).tickPadding(5)),a.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return v(new Date(e.date+"2020"))})).y((function(e){return j(e.totalconfirmed)})).curve(b.c)),a.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return v(new Date(e.date+"2020"))})).attr("cy",(function(e){return j(e.totalconfirmed)})).on("mouseover",(function(e,t){b.p(b.d.target).attr("r","5"),d(e),p(t)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","3")})),s.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return v(new Date(e.date+"2020"))})).y((function(e){return E?j(e.totalrecovered):N(e.totalrecovered)})).curve(b.c)),s.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return v(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?j(e.totalrecovered):N(e.totalrecovered)})).on("mouseover",(function(e,t){b.p(b.d.target).attr("r","5"),d(e),p(t)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","3")})),i.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",5).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return v(new Date(e.date+"2020"))})).y((function(e){return E?j(e.totaldeceased):k(e.totaldeceased)})).curve(b.c)),i.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return v(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?j(e.totaldeceased):k(e.totaldeceased)})).on("mouseover",(function(e,t){b.p(b.d.target).attr("r","5"),d(e),p(t)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","3")})),o.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return v(new Date(e.date+"2020"))})).y((function(e){return E?j(e.dailyconfirmed):U(e.dailyconfirmed)})).curve(b.c)),o.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return v(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?j(e.dailyconfirmed):U(e.dailyconfirmed)})).on("mouseover",(function(e,t){b.p(b.d.target).attr("r","5"),d(e),p(t)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","3")})),m.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",5).attr("cursor","pointer").attr("d",b.j().x((function(e){return v(new Date(e.date+"2020"))})).y((function(e){return E?j(e.dailyrecovered):B(e.dailyrecovered)})).curve(b.c)),m.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return v(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?j(e.dailyrecovered):B(e.dailyrecovered)})).on("mouseover",(function(e,t){b.p(b.d.target).attr("r","5"),d(e),p(t)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","3")})),u.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",5).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return v(new Date(e.date+"2020"))})).y((function(e){return E?j(e.dailydeceased):L(e.dailydeceased)})).curve(b.c)),u.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return v(new Date(e.date+"2020"))})).attr("cy",(function(e){return E?j(e.dailydeceased):L(e.dailydeceased)})).on("mouseover",(function(e,t){b.p(b.d.target).attr("r","5"),d(e),p(t)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","3")}))};return r.a.createElement("div",{className:"TimeSeries-Parent fadeInUp",style:{animationDelay:"1.7s"}},r.a.createElement("div",{className:"timeseries",style:{display:1===e.type?"flex":"none"}},r.a.createElement("div",{className:"svg-parent"},r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.totalconfirmed),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].totalconfirmed-c[h-1].totalconfirmed>=0?"+"+(c[h].totalconfirmed-c[h-1].totalconfirmed):c[h].totalconfirmed-c[h-1].totalconfirmed:""))),r.a.createElement("svg",{ref:O,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green"},r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.totalrecovered),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].totalrecovered-c[h-1].totalrecovered>=0?"+"+(c[h].totalrecovered-c[h-1].totalrecovered):c[h].totalrecovered-c[h-1].totalrecovered:""))),r.a.createElement("svg",{ref:x,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray"},r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased ",r.a.createElement("br",null),o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.totaldeceased),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].totaldeceased-c[h-1].totaldeceased>=0?"+"+(c[h].totaldeceased-c[h-1].totaldeceased):c[h].totaldeceased-c[h-1].totaldeceased:""))),r.a.createElement("svg",{ref:D,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"}))),r.a.createElement("div",{className:"timeseries",style:{display:2===e.type?"flex":"none"}},r.a.createElement("div",{className:"svg-parent"},r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.dailyconfirmed),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].dailyconfirmed-c[h-1].dailyconfirmed>=0?"+"+(c[h].dailyconfirmed-c[h-1].dailyconfirmed):c[h].dailyconfirmed-c[h-1].dailyconfirmed:""))),r.a.createElement("svg",{ref:C,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green"},r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.dailyrecovered),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].dailyrecovered-c[h-1].dailyrecovered>=0?"+"+(c[h].dailyrecovered-c[h-1].dailyrecovered):c[h].dailyrecovered-c[h-1].dailyrecovered:""))),r.a.createElement("svg",{ref:S,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray"},r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased ",r.a.createElement("br",null),o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.dailydeceased),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].dailydeceased-c[h-1].dailydeceased>=0?"+"+(c[h].dailydeceased-c[h-1].dailydeceased):c[h].dailydeceased-c[h-1].dailydeceased:""))),r.a.createElement("svg",{ref:I,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"}))))};var O=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({}),i=Object(m.a)(s,2),o=(i[0],i[1]),d=Object(n.useRef)(null),u=Object(n.useRef)(null),f=Object(n.useRef)(null),h=Object(n.useRef)(null);Object(n.useEffect)((function(){e.timeseries.length>1&&l(e.timeseries.slice(0,e.timeseries.length-2))}),[e.timeseries.length]),Object(n.useEffect)((function(){c.length>1&&function(t){var a=t;o(a[a.length-1]);var n=b.o().domain(b.e(a.slice(a.length-10,a.length-1),(function(e){return new Date(e.date+"2020")}))).range([0,v]),r=b.m().domain([0,b.l(a,(function(e){return+e.dailyconfirmed}))]).range([g,0]),c=(b.m().domain([0,b.l(a,(function(e){return+e.dailyconfirmed}))]).range([g,0]),b.m().domain([0,b.l(a,(function(e){return+e.dailyrecovered}))]).range([g,0]),b.m().domain([0,b.l(a,(function(e){return+e.dailydeceased}))]).range([g,0]),p.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailyconfirmed)})).curve(b.c))),l=c.node().getTotalLength();c.attr("stroke-dasharray",l+" "+l).attr("stroke-dashoffset",l).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),p.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailyconfirmed)})).on("mouseover",(function(e){b.p(b.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var s=E.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#007bff99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){if(0===t){a[a.length-9].dailyconfirmed,a[a.length-9].dailyrecovered,a[a.length-9].dailydeceased,a[a.length-10].dailyconfirmed,a[a.length-10].dailyrecovered,a[a.length-10].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)}a[a.length-9+t].dailyconfirmed,a[a.length-9+t].dailyrecovered,a[a.length-9+t].dailydeceased,a[a.length-10+t].dailyconfirmed,a[a.length-10+t].dailyrecovered,a[a.length-10+t].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).curve(b.c)),i=s.node().getTotalLength();s.attr("stroke-dasharray",i+" "+i).attr("stroke-dashoffset",i).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),E.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#007bff").attr("stroke","#007bff").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){a[a.length-1].dailyconfirmed,a[a.length-1].dailyrecovered,a[a.length-1].dailydeceased,a[a.length-2].dailyconfirmed,a[a.length-2].dailyrecovered,a[a.length-2].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).on("mouseover",(function(e){b.p(b.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var d=y.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailyrecovered)})).curve(b.c)),m=c.node().getTotalLength();d.attr("stroke-dasharray",m+" "+m).attr("stroke-dashoffset",m).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),y.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailyrecovered)})).on("mouseover",(function(e){b.p(b.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var u=w.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailydeceased)})).curve(b.c)),f=u.node().getTotalLength();u.attr("stroke-dasharray",f+" "+f).attr("stroke-dashoffset",f).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),w.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailydeceased)})).on("mouseover",(function(e){b.p(b.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){b.p(b.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1)}(c)}),[c.length]);var p=b.p(d.current),v=100-0-5,g=100-30-30,E=b.p(u.current),y=b.p(f.current),w=b.p(h.current);return r.a.createElement("div",{className:"Minigraph"},r.a.createElement("div",{className:"svg-parent fadeInUp",style:{animationDelay:"0.6s"}},r.a.createElement("svg",{ref:d,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-blue fadeInUp",style:{animationDelay:"0.7s"}},r.a.createElement("svg",{ref:u,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green fadeInUp",style:{animationDelay:"0.8s"}},r.a.createElement("svg",{ref:f,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray fadeInUp",style:{animationDelay:"0.9s"}},r.a.createElement("svg",{ref:h,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})))};var x=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(1),v=Object(m.a)(u,2),g=v[0],b=v[1],w=Object(n.useState)(""),j=Object(m.a)(w,2),x=j[0],D=j[1],C=Object(n.useState)([]),S=Object(m.a)(C,2),I=S[0],A=S[1],M=Object(n.useState)([]),R=Object(m.a)(M,2),U=R[0],B=R[1],L=Object(n.useState)(!0),W=Object(m.a)(L,2),T=W[0],H=W[1];Object(n.useEffect)((function(){!1===o&&_()}),[o]);var _=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){l(e.data.statewise),A(e.data.cases_time_series),D(e.data.statewise[0].lastupdatedtime.slice(0,15)+e.data.statewise[0].lastupdatedtime.slice(18)),B(e.data.key_values[0]),d(!0)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"home-left"},r.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("div",{className:"header-mid"},r.a.createElement("h1",null,"India COVID-19 Tracker"),r.a.createElement("div",{className:"last-update"},r.a.createElement("h6",null,"Last Reported Case"),r.a.createElement("h3",null,0===x.length?"":Object(p.a)(Object(h.a)(new Date(x),"Asia/Calcutta"),Object(h.a)(new Date))+" Ago")))),r.a.createElement(y,{data:c,deltas:U}),r.a.createElement(O,{timeseries:I,animate:!0}),r.a.createElement(E,{states:c,summary:!1})),r.a.createElement("div",{className:"home-right"},r.a.createElement(N,{states:c}),r.a.createElement("div",{className:"timeseries-header fadeInUp",style:{animationDelay:"1.5s"}},r.a.createElement("h1",null,"Spread Trends"),r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"tab ".concat(1===g?"focused":""),onClick:function(){b(1)}},r.a.createElement("h4",null,"Cumulative")),r.a.createElement("div",{className:"tab ".concat(2===g?"focused":""),onClick:function(){b(2)}},r.a.createElement("h4",null,"Daily"))),r.a.createElement("div",{className:"timeseries-mode"},r.a.createElement("label",{htmlFor:"timeseries-mode"},"Scale Uniformly"),r.a.createElement("input",{type:"checkbox",checked:T,onChange:function(e){H(!T)}}))),r.a.createElement(k,{timeseries:I,type:g,mode:T})))};var D=function(e){var t=Object(n.useState)("Home"),a=Object(m.a)(t,2),c=a[0],l=a[1];return"/summary"!==window.location.pathname?r.a.createElement("div",{className:"Navbar",style:{animationDelay:"0.5s",height:"Clusters"===c?"2.5rem":"",transition:"all 0.3s ease-in-out"}},r.a.createElement("img",{className:"fadeInUp",src:"/icon.png",style:{animationDelay:"0.0s",width:"Clusters"===c?"1.5rem":"",height:"Clusters"===c?"1.5rem":"",transition:"all 0.3s ease-in-out"}}),r.a.createElement("div",{className:"navbar-left"},r.a.createElement(s.b,{to:"/",onClick:function(){l("Home")}},r.a.createElement("span",{className:"fadeInUp ".concat("Home"===c?"focused":""),style:{animationDelay:"0.2s"}},"Home")),r.a.createElement(s.b,{to:"/clusters",onClick:function(){l("Clusters")}},r.a.createElement("span",{className:"fadeInUp ".concat("Network Map"===c?"focused":""),style:{animationDelay:"0.3s"}},"Clusters")),r.a.createElement(s.b,{to:"/links",onClick:function(){l("Helpful Links")}},r.a.createElement("span",{className:"fadeInUp ".concat("Helpful Links"===c?"focused":""),style:{animationDelay:"0.4s"}},"Helpful Links")),r.a.createElement(s.b,{to:"/faqs",onClick:function(){l("FAQs")}},r.a.createElement("span",{className:"fadeInUp ".concat("FAQs"===c?"focused":""),style:{animationDelay:"0.4s"}},"FAQs"))),r.a.createElement("div",{className:"navbar-right"})):r.a.createElement("div",null)};var C=function(e){return r.a.createElement("div",{className:"Links"},r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.2s"}},r.a.createElement("h3",null,"HELPLINE NUMBERS [by State]"),r.a.createElement("a",{href:"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.3s"}},r.a.createElement("h3",null,"Ministry of Health and Family Welfare, Gov. of India"),r.a.createElement("a",{href:"https://www.mohfw.gov.in/"},"https://www.mohfw.gov.in/")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.4s"}},r.a.createElement("h3",null,"WHO : COVID-19 Home Page"),r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"https://www.who.int/emergencies/diseases/novel-coronavirus-2019")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("h3",null,"CDC"),r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/faq.html"},"https://www.cdc.gov/coronavirus/2019-ncov/faq.html")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.6s"}},r.a.createElement("h3",null,"COVID-19 Global Tracker"),r.a.createElement("a",{href:"https://coronavirus.thebaselab.com/"},"https://coronavirus.thebaselab.com/")))};var S=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)([]),h=Object(m.a)(u,2),p=h[0],v=h[1],g=Object(n.useState)(!1),b=Object(m.a)(g,2),w=b[0],j=b[1];Object(n.useEffect)((function(){!1===w&&N()}),[w]);var N=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){l(e.data.statewise),d(e.data.key_values[0]),v(e.data.cases_time_series),j(!0)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"Summary"},r.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("h1",null,"India COVID-19 Tracker")),r.a.createElement(O,{timeseries:p,animate:!1}),r.a.createElement(y,{data:c,deltas:o}),r.a.createElement(E,{states:c,summary:!0}),r.a.createElement("div",{className:"summary-bottom"},r.a.createElement("div",{className:"summary-bottom-left"},r.a.createElement("img",{src:"icon.png",alt:"logo"}),r.a.createElement("h5",null,"We stand with everyone fighting on the frontlines")),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india.org"))))};var I=function(e){return r.a.createElement("div",{className:"iframe-container",referrerPolicy:"no-referrer",width:"100%"},r.a.createElement("iframe",{src:"https://cluster.covid19india.org"}))};var A=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){s()}),[1]);var s=function(){f.a.get("https://api.covid19india.org/faq.json").then((function(e){l(e.data.faq)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"FAQ"},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},r.a.createElement("h2",{className:"question"},e.question),r.a.createElement("h2",{className:"answer"},e.answer))})))},M=a(12).createBrowserHistory;var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{history:M},r.a.createElement(i.b,{render:function(e){var t=e.location;return r.a.createElement("div",{className:"Almighty-Router"},r.a.createElement(D,null),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/"})}}),r.a.createElement(i.d,{location:t},r.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(i.b,{exact:!0,path:"/links",render:function(e){return r.a.createElement(C,e)}}),r.a.createElement(i.b,{exact:!0,path:"/summary",render:function(e){return r.a.createElement(S,e)}}),r.a.createElement(i.b,{exact:!0,path:"/clusters",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(i.b,{exact:!0,path:"/faqs",render:function(e){return r.a.createElement(A,e)}})))}})),r.a.createElement("footer",{className:"fadeInUp",style:{animationDelay:"2s"}},r.a.createElement("img",{src:"/icon.png",alt:"logo"}),r.a.createElement("h5",null,"We stand with everyone fighting on the frontlines"),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india")),r.a.createElement("div",{id:"footerButtons"},r.a.createElement("a",{className:"button",href:"https://bit.ly/patientdb",target:"_noblank"},r.a.createElement(o.a,null),r.a.createElement("span",null,"Crowdsourced Patient Database\xa0")),r.a.createElement("a",{href:"https://bit.ly/covid19crowd",className:"button telegram",target:"_noblank"},r.a.createElement(d.a,null),r.a.createElement("span",null,"Join Telegram to Collaborate!")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.93a738f9.chunk.js.map