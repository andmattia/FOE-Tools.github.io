(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{281:function(t,e,r){"use strict";var o=r(303),n=r.n(o),l=r(5),c={name:"GraphCanvas",props:{gtype:{type:String,required:!0},id:{type:String,required:!0},labels:{type:Array,required:!0},datasets:{type:Array,required:!0},goptions:{type:Object,default:function(){}}},watch:{labels:{handler:function(t){this.$data.chart.destroy(),this.$data.chart_data.labels=t,this.updateCanvas()},deep:!0},datasets:{handler:function(t){this.$data.chart.destroy(),this.$data.chart_data.datasets=t,this.updateCanvas()},deep:!0}},data:function(){return{type:this.$props.gtype,chart_data:{labels:this.$props.labels,datasets:this.$props.datasets},options:this.$props.goptions}},methods:{updateCanvas:function(){var t=document.getElementById(this.$props.id).getContext("2d");document.chart=this.$data.chart=new n.a(t,{type:this.$data.type,data:this.$data.chart_data,options:this.$data.options})}},mounted:function(){this.updateCanvas();var t=this;document.getElementById(this.$props.id).onclick=function(e){setTimeout((function(){for(var r=e.layerX,o=e.layerY,n=JSON.parse(JSON.stringify(document.chart.legend.legendHitBoxes)),i=0;i<n.length;i++)l.a.inRange(r,n[i].left,n[i].left+n[i].width)&&l.a.inRange(o,n[i].top,n[i].top+n[i].height)&&t.$emit("switchVisibility",i)}),50)}}},h=r(10),component=Object(h.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{style:this.$store.get("isDarkTheme")?"background-color: white;":"",attrs:{id:this.id}})}),[],!1,null,null,null);e.a=component.exports},292:function(t,e,r){var map={"./af":146,"./af.js":146,"./ar":147,"./ar-dz":148,"./ar-dz.js":148,"./ar-kw":149,"./ar-kw.js":149,"./ar-ly":150,"./ar-ly.js":150,"./ar-ma":151,"./ar-ma.js":151,"./ar-sa":152,"./ar-sa.js":152,"./ar-tn":153,"./ar-tn.js":153,"./ar.js":147,"./az":154,"./az.js":154,"./be":155,"./be.js":155,"./bg":156,"./bg.js":156,"./bm":157,"./bm.js":157,"./bn":158,"./bn.js":158,"./bo":159,"./bo.js":159,"./br":160,"./br.js":160,"./bs":161,"./bs.js":161,"./ca":162,"./ca.js":162,"./cs":163,"./cs.js":163,"./cv":164,"./cv.js":164,"./cy":165,"./cy.js":165,"./da":166,"./da.js":166,"./de":167,"./de-at":168,"./de-at.js":168,"./de-ch":169,"./de-ch.js":169,"./de.js":167,"./dv":170,"./dv.js":170,"./el":171,"./el.js":171,"./en-au":172,"./en-au.js":172,"./en-ca":173,"./en-ca.js":173,"./en-gb":174,"./en-gb.js":174,"./en-ie":175,"./en-ie.js":175,"./en-il":176,"./en-il.js":176,"./en-in":177,"./en-in.js":177,"./en-nz":178,"./en-nz.js":178,"./en-sg":179,"./en-sg.js":179,"./eo":180,"./eo.js":180,"./es":181,"./es-do":182,"./es-do.js":182,"./es-us":183,"./es-us.js":183,"./es.js":181,"./et":184,"./et.js":184,"./eu":185,"./eu.js":185,"./fa":186,"./fa.js":186,"./fi":187,"./fi.js":187,"./fil":188,"./fil.js":188,"./fo":189,"./fo.js":189,"./fr":190,"./fr-ca":191,"./fr-ca.js":191,"./fr-ch":192,"./fr-ch.js":192,"./fr.js":190,"./fy":193,"./fy.js":193,"./ga":194,"./ga.js":194,"./gd":195,"./gd.js":195,"./gl":196,"./gl.js":196,"./gom-deva":197,"./gom-deva.js":197,"./gom-latn":198,"./gom-latn.js":198,"./gu":199,"./gu.js":199,"./he":200,"./he.js":200,"./hi":201,"./hi.js":201,"./hr":202,"./hr.js":202,"./hu":203,"./hu.js":203,"./hy-am":204,"./hy-am.js":204,"./id":205,"./id.js":205,"./is":206,"./is.js":206,"./it":207,"./it-ch":208,"./it-ch.js":208,"./it.js":207,"./ja":209,"./ja.js":209,"./jv":210,"./jv.js":210,"./ka":211,"./ka.js":211,"./kk":212,"./kk.js":212,"./km":213,"./km.js":213,"./kn":214,"./kn.js":214,"./ko":215,"./ko.js":215,"./ku":216,"./ku.js":216,"./ky":217,"./ky.js":217,"./lb":218,"./lb.js":218,"./lo":219,"./lo.js":219,"./lt":220,"./lt.js":220,"./lv":221,"./lv.js":221,"./me":222,"./me.js":222,"./mi":223,"./mi.js":223,"./mk":224,"./mk.js":224,"./ml":225,"./ml.js":225,"./mn":226,"./mn.js":226,"./mr":227,"./mr.js":227,"./ms":228,"./ms-my":229,"./ms-my.js":229,"./ms.js":228,"./mt":230,"./mt.js":230,"./my":231,"./my.js":231,"./nb":232,"./nb.js":232,"./ne":233,"./ne.js":233,"./nl":234,"./nl-be":235,"./nl-be.js":235,"./nl.js":234,"./nn":236,"./nn.js":236,"./oc-lnc":237,"./oc-lnc.js":237,"./pa-in":238,"./pa-in.js":238,"./pl":239,"./pl.js":239,"./pt":240,"./pt-br":241,"./pt-br.js":241,"./pt.js":240,"./ro":242,"./ro.js":242,"./ru":243,"./ru.js":243,"./sd":244,"./sd.js":244,"./se":245,"./se.js":245,"./si":246,"./si.js":246,"./sk":247,"./sk.js":247,"./sl":248,"./sl.js":248,"./sq":249,"./sq.js":249,"./sr":250,"./sr-cyrl":251,"./sr-cyrl.js":251,"./sr.js":250,"./ss":252,"./ss.js":252,"./sv":253,"./sv.js":253,"./sw":254,"./sw.js":254,"./ta":255,"./ta.js":255,"./te":256,"./te.js":256,"./tet":257,"./tet.js":257,"./tg":258,"./tg.js":258,"./th":259,"./th.js":259,"./tk":260,"./tk.js":260,"./tl-ph":261,"./tl-ph.js":261,"./tlh":262,"./tlh.js":262,"./tr":263,"./tr.js":263,"./tzl":264,"./tzl.js":264,"./tzm":265,"./tzm-latn":266,"./tzm-latn.js":266,"./tzm.js":265,"./ug-cn":267,"./ug-cn.js":267,"./uk":268,"./uk.js":268,"./ur":269,"./ur.js":269,"./uz":270,"./uz-latn":271,"./uz-latn.js":271,"./uz.js":270,"./vi":272,"./vi.js":272,"./x-pseudo":273,"./x-pseudo.js":273,"./yo":274,"./yo.js":274,"./zh-cn":275,"./zh-cn.js":275,"./zh-hk":276,"./zh-hk.js":276,"./zh-mo":277,"./zh-mo.js":277,"./zh-tw":278,"./zh-tw.js":278};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=292},297:function(t,e,r){"use strict";var o=r(3),n=r(5),l=r(281),c=r(6),h="components.gb_statistics.",d={statSelector:"gbs_s",from:"gbs_f",to:"gbs_t",hidden:"gbs_h"},m={},f={},j={name:"GbStatistics",data:function(){m=this.$store.get("foe/gbs@agesCost"),f=this.$store.get("foe/gbs@gbsData");var t={i18nPrefix:h,graphType:{cost_level:{title:this.$t(h+"graph.title_1"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},reward_level:{title:this.$t(h+"graph.title_2"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")},reward_cost:{title:this.$t(h+"graph.title_3"),xAxesLabel:this.$t("utils.graph.gb_reward_1st_place"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},cost_reward:{title:this.$t(h+"graph.title_4"),xAxesLabel:this.$t("utils.graph.gb_level_cost"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")}},hidden:Array.from(new Array(Object.keys(m).length),(function(t,e){return 0!==e})),labels:[],datasets:[],options:{animation:!1,responsive:!0,stacked:!0,title:{display:!0,text:""},tooltips:{mode:"index",intersect:!1},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:""}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:""},ticks:{suggestedMin:1,suggestedMax:80}}]}},ageConfig:{Oracle:{name:this.$t("foe_data.age.Oracle"),color:"rgb(102,34,17)"},NoAge:{name:this.$t("foe_data.age.NoAge"),color:"rgb(102,34,17)"},BronzeAge:{name:this.$t("foe_data.age.BronzeAge"),color:"rgb(183,141,19)"},IronAge:{name:this.$t("foe_data.age.IronAge"),color:"rgb(152,68,32)"},EarlyMiddleAges:{name:this.$t("foe_data.age.EarlyMiddleAges"),color:"rgb(78,129,68)"},HighMiddleAges:{name:this.$t("foe_data.age.HighMiddleAges"),color:"rgb(47,142,142)"},LateMiddleAges:{name:this.$t("foe_data.age.LateMiddleAges"),color:"rgb(127,66,133)"},ColonialAge:{name:this.$t("foe_data.age.ColonialAge"),color:"rgb(206,100,4)"},IndustrialAge:{name:this.$t("foe_data.age.IndustrialAge"),color:"rgb(167,41,38)"},ProgressiveEra:{name:this.$t("foe_data.age.ProgressiveEra"),color:"rgb(182,137,91)"},ModernEra:{name:this.$t("foe_data.age.ModernEra"),color:"rgb(70,93,136)"},PostmodernEra:{name:this.$t("foe_data.age.PostmodernEra"),color:"rgb(141,146,146)"},ContemporaryEra:{name:this.$t("foe_data.age.ContemporaryEra"),color:"rgb(141,199,63)"},Tomorrow:{name:this.$t("foe_data.age.Tomorrow"),color:"rgb(123,137,137)"},TheFuture:{name:this.$t("foe_data.age.TheFuture"),color:"rgb(34,90,75)"},ArcticFuture:{name:this.$t("foe_data.age.ArcticFuture"),color:"rgb(67,66,66)"},OceanicFuture:{name:this.$t("foe_data.age.OceanicFuture"),color:"rgb(127,255,212)"},VirtualFuture:{name:this.$t("foe_data.age.VirtualFuture"),color:"rgb(85,271,39)"},SpaceAgeMars:{name:this.$t("foe_data.age.SpaceAgeMars"),color:"rgb(187,19,0)"},SpaceAgeAsteroidBelt:{name:this.$t("foe_data.age.SpaceAgeAsteroidBelt"),color:"rgb(9,78,189)"}},statSelector:"cost_level",maxLevelGraph:Object.keys(f).map((function(t){return f[t]})).map((function(t){return t.levels.length})).reduce((function(a,b){return Math.max(a,b)}),-1/0),maxAgeCost:m.VirtualFuture,from:1,to:80,errors:{from:!1,to:!1}};for(var e in f)f[e].levels.length===t.maxLevelGraph&&(t.maxAgeCost=m[f[e].age]);return Object.assign(t,this.checkQuery(t)),this.$store.commit("ADD_URL_QUERY",{key:d.statSelector,value:t.statSelector}),this.$store.commit("ADD_URL_QUERY",{key:d.from,value:t.from}),this.$store.commit("ADD_URL_QUERY",{key:d.to,value:t.to}),this.$store.commit("ADD_URL_QUERY",{key:d.hidden,value:t.hidden.map((function(t){return t?1:0})).join("")}),this.updateGraphData(t),t},computed:{lang:Object(c.b)("locale"),permaLink:function(){return{name:"GbStatistics",query:this.$store.get("urlQuery")}}},watch:{statSelector:function(t){Object.keys(this.$data.graphType).indexOf(t)<0||(this.$store.commit("UPDATE_URL_QUERY",{key:d.statSelector,value:t}),this.updateGraphData())},lang:function(){Object.assign(this.$data,{graphType:{cost_level:{title:this.$t(h+"graph.title_1"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},reward_level:{title:this.$t(h+"graph.title_2"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")},reward_cost:{title:this.$t(h+"graph.title_3"),xAxesLabel:this.$t("utils.graph.gb_reward_1st_place"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},cost_reward:{title:this.$t(h+"graph.title_4"),xAxesLabel:this.$t("utils.graph.gb_level_cost"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")}},ageConfig:{Oracle:{name:this.$t("foe_data.age.Oracle"),color:"rgb(102,34,17)"},NoAge:{name:this.$t("foe_data.age.NoAge"),color:"rgb(102,34,17)"},BronzeAge:{name:this.$t("foe_data.age.BronzeAge"),color:"rgb(183,141,19)"},IronAge:{name:this.$t("foe_data.age.IronAge"),color:"rgb(152,68,32)"},EarlyMiddleAges:{name:this.$t("foe_data.age.EarlyMiddleAges"),color:"rgb(78,129,68)"},HighMiddleAges:{name:this.$t("foe_data.age.HighMiddleAges"),color:"rgb(47,142,142)"},LateMiddleAges:{name:this.$t("foe_data.age.LateMiddleAges"),color:"rgb(127,66,133)"},ColonialAge:{name:this.$t("foe_data.age.ColonialAge"),color:"rgb(206,100,4)"},IndustrialAge:{name:this.$t("foe_data.age.IndustrialAge"),color:"rgb(167,41,38)"},ProgressiveEra:{name:this.$t("foe_data.age.ProgressiveEra"),color:"rgb(182,137,91)"},ModernEra:{name:this.$t("foe_data.age.ModernEra"),color:"rgb(70,93,136)"},PostmodernEra:{name:this.$t("foe_data.age.PostmodernEra"),color:"rgb(141,146,146)"},ContemporaryEra:{name:this.$t("foe_data.age.ContemporaryEra"),color:"rgb(141,199,63)"},Tomorrow:{name:this.$t("foe_data.age.Tomorrow"),color:"rgb(123,137,137)"},TheFuture:{name:this.$t("foe_data.age.TheFuture"),color:"rgb(34,90,75)"},ArcticFuture:{name:this.$t("foe_data.age.ArcticFuture"),color:"rgb(67,66,66)"},OceanicFuture:{name:this.$t("foe_data.age.OceanicFuture"),color:"rgb(127,255,212)"},VirtualFuture:{name:this.$t("foe_data.age.VirtualFuture"),color:"rgb(85,271,39)"},SpaceAgeMars:{name:this.$t("foe_data.age.SpaceAgeMars"),color:"rgb(187,19,0)"},SpaceAgeAsteroidBelt:{name:this.$t("foe_data.age.SpaceAgeAsteroidBelt"),color:"rgb(9,78,189)"}}}),this.updateGraphData()},from:function(t,e){t&&"number"!=typeof t&&t.length>0?this.$data.errors.from=!0:n.a.handlerForm(this,"from",t&&0!==t.length?t:0,e,[1,this.normalizedTo()])===n.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:d.from,value:t}),this.updateGraphData())},to:function(t,e){if(t&&"number"!=typeof t&&t.length>0)this.$data.errors.to=!0;else{var r=t&&0!==t.length?t:0;n.a.handlerForm(this,"to",r,e,[this.normalizedFrom(),this.$data.maxLevelGraph])===n.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:d.to,value:t}),this.$data.errors.from?r>=this.$data.errors.from&&(this.$data.errors.from=!1,this.updateGraphData()):this.updateGraphData())}},hidden:function(t){this.$store.commit("UPDATE_URL_QUERY",{key:d.hidden,value:t.map((function(t){return t?1:0})).join("")})}},methods:{normalizedFrom:function(){return n.a.normalizeNumberValue(this.$data.from,1)},normalizedTo:function(){return n.a.normalizeNumberValue(this.$data.to,1)},updateData:function(t,e,r,o){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.normalizedFrom(),c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.normalizedTo(),h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this.$data.hidden,data={},d=[],f=1/0,j=-1/0,_=Array.from(new Array(c-l+1),(function(e,i){return"reward_cost"!==t&&"cost_reward"!==t?i+l:"reward_cost"!==t?o[i].cost:o[i].reward[0]}));for(var $ in m)data[$]=m[$].slice(l-1,c+1).map((function(e){return"cost_level"===t||"reward_cost"===t?(f=e.cost<f?e.cost:f,j=e.cost>j?e.cost:j,e.cost):(f=e.reward[0]<f?e.reward[0]:f,j=e.reward[0]>j?e.reward[0]:j,e.reward[0])}));var y=0;for(var v in m)d.push({hidden:h[y++],label:r[v].name,fill:!1,lineTension:0,backgroundColor:n.a.shadeRGBColor(r[v].color,.5),borderColor:r[v].color,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:n.a.shadeRGBColor(r[v].color,-.3),pointBackgroundColor:n.a.shadeRGBColor(r[v].color,.3),pointBorderWidth:3,pointHoverRadius:4,pointRadius:1,pointHitRadius:10,data:data[v]});return{title:e[t].title,xAxesLabel:e[t].xAxesLabel,yAxesLabel:e[t].yAxesLabel,suggestedMin:f,suggestedMax:j,labels:_,datasets:d}},updateGraphData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$data,e=this.updateData(t.statSelector,t.graphType,t.ageConfig,t.maxAgeCost,t.from,t.to,t.hidden);t.options.title.text=e.title,t.options.scales.xAxes[0].scaleLabel.labelString=e.xAxesLabel,t.options.scales.yAxes[0].scaleLabel.labelString=e.yAxesLabel,t.options.scales.yAxes[0].ticks.suggestedMin=e.suggestedMin,t.options.scales.yAxes[0].ticks.suggestedMax=e.suggestedMax,t.labels=e.labels,t.datasets=e.datasets},switchVisibility:function(t){n.a.inRange(t,0,this.$data.hidden.length-1)&&o.a.set(this.$data.hidden,t,!this.$data.hidden[t])},checkQuery:function(t){var e={};e.hidden=t.hidden;var r=n.a.FormCheck.NO_CHANGE;if(this.$route.query[d.statSelector]&&this.$route.query[d.statSelector]in t.graphType&&(r=n.a.FormCheck.VALID,e.statSelector=this.$route.query[d.statSelector]),this.$route.query[d.from]&&!isNaN(this.$route.query[d.from])&&n.a.inRange(parseInt(this.$route.query[d.from]),1,t.maxLevelGraph)&&(r=n.a.FormCheck.VALID,e.from=parseInt(this.$route.query[d.from])),this.$route.query[d.to]&&!isNaN(this.$route.query[d.to])&&n.a.inRange(parseInt(this.$route.query[d.to]),1,t.maxLevelGraph)&&(parseInt(this.$route.query[d.to])>=t.from||parseInt(this.$route.query[d.to])>=e.from)&&(r=n.a.FormCheck.VALID,e.to=parseInt(this.$route.query[d.to])),this.$route.query[d.hidden]){r=n.a.FormCheck.VALID;var o=this.$route.query[d.hidden].split("").map((function(t){return"0"!==t}));Array.prototype.splice.apply(t.hidden,[0,o.length].concat(o))}return r===n.a.FormCheck.VALID&&this.$store.set("isPermalink",!0),e},haveError:function(input){return this.$data.errors[input]?"is-danger":""}},components:{graphCanvas:l.a}},_=r(10),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("div",{staticClass:"field"},[r("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"title")))])])]),r("div",{staticClass:"column is-half"},[r("div",{staticClass:"field"},[r("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:t.localePath(t.permaLink),exact:""}},[r("span",{staticClass:"icon"},[r("i",{staticClass:"fas fa-link"})]),t._v(" "+t._s(t.$t("utils.permalink")))])],1)])]),r("p",[t._v(t._s(t.$t(t.i18nPrefix+"p1")))]),r("p",[t._v(t._s(t.$t(t.i18nPrefix+"represent")))]),r("ul",t._l(t.graphType,(function(e,o,n){return r("li",{key:o,staticStyle:{"list-style-type":"none"}},[r("b-radio",{attrs:{id:o,"native-value":o,type:"is-info"},model:{value:t.statSelector,callback:function(e){t.statSelector=e},expression:"statSelector"}},[t._v(t._s(e.title))])],1)})),0),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t("utils.From"),"label-for":"gbStatisticsFrom",type:t.haveError("from")}},[r("b-input",{attrs:{id:"gbStatisticsFrom",type:"number",min:"1",max:t.to,name:"from",autocomplete:"off"},model:{value:t.from,callback:function(e){t.from=t._n(e)},expression:"from"}})],1)],1),r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t("utils.To",{max:t.maxLevelGraph}),"label-for":"gbStatisticsTo",type:t.haveError("to")}},[r("b-input",{attrs:{id:"gbStatisticsTo",type:"number",min:t.from,max:t.maxLevelGraph,name:"to",autocomplete:"off"},model:{value:t.to,callback:function(e){t.to=t._n(e)},expression:"to"}})],1)],1)]),r("graph-canvas",{attrs:{gtype:"line",id:"graph",goptions:t.options,labels:t.labels,datasets:t.datasets},on:{switchVisibility:function(e){return t.switchVisibility(e)}}})],1)}),[],!1,null,null,null);e.a=component.exports},591:function(t,e,r){"use strict";r.r(e);var o=r(4),n=r.n(o),l=r(297);function c(t,e,r,o,n,l,c){try{var h=t[l](c),d=h.value}catch(t){return void r(t)}h.done?e(d):Promise.resolve(d).then(o,n)}var h="routes.gb_statistics.";e.default={name:"GbStatistics",head:function(){return this.$store.set("hero",{title:h+"hero.title",subtitle:h+"hero.subtitle"}),{title:this.$t(h+"title")}},fetch:function(t){return(e=n.a.mark((function e(){var r,o,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.app,o=t.store,Object.keys(o.get("foe/gbs")).length){e.next=6;break}return e.next=4,r.$axios.$get("/foe-data/gbs.json");case 4:l=e.sent,o.set("foe/gbs",l);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,n){var l=e.apply(t,r);function h(t){c(l,o,n,h,d,"next",t)}function d(t){c(l,o,n,h,d,"throw",t)}h(void 0)}))})();var e},data:function(){return{}},components:{gbStatistics:l.a}}}}]);