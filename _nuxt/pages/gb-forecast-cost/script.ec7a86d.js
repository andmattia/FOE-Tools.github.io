(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{590:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),c=n(333);function f(t,e,n,r,o,c,f){try{var h=t[c](f),v=h.value}catch(t){return void n(t)}h.done?e(v):Promise.resolve(v).then(r,o)}var h="routes.gb_forecast_cost.";e.default={name:"GbForecastCost",head:function(){return this.$store.set("hero",{title:h+"hero.title",subtitle:h+"hero.subtitle"}),{title:this.$t(h+"title")}},fetch:function(t){return(e=o.a.mark((function e(){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app,r=t.store,Object.keys(r.get("foe/gbs")).length){e.next=6;break}return e.next=4,n.$axios.$get("/foe-data/gbs.json");case 4:c=e.sent,r.set("foe/gbs",c);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function h(t){f(c,r,o,h,v,"next",t)}function v(t){f(c,r,o,h,v,"throw",t)}h(void 0)}))})();var e},data:function(){return{}},components:{gbForecastCost:c.a}}}}]);