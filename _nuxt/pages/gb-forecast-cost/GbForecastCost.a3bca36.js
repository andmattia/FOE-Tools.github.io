(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{396:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),c=n(333);function f(t,e,n,r,o,c,f){try{var l=t[c](f),h=l.value}catch(t){return void n(t)}l.done?e(h):Promise.resolve(h).then(r,o)}var l="routes.gb_forecast_cost.",h={name:"GbForecastCost",head:function(){return this.$store.set("hero",{title:l+"hero.title",subtitle:l+"hero.subtitle"}),{title:this.$t(l+"title")}},fetch:function(t){return(e=o.a.mark((function e(){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app,r=t.store,Object.keys(r.get("foe/gbs")).length){e.next=6;break}return e.next=4,n.$axios.$get("/foe-data/gbs.json");case 4:c=e.sent,r.set("foe/gbs",c);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function l(t){f(c,r,o,l,h,"next",t)}function h(t){f(c,r,o,l,h,"throw",t)}l(void 0)}))})();var e},data:function(){return{}},components:{gbForecastCost:c.a}},v=n(10),component=Object(v.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("gb-forecast-cost",{attrs:{"can-permalink":!0}})}),[],!1,null,null,null);e.default=component.exports}}]);