(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{296:function(t,n,o){"use strict";var e=o(309),r=o.n(e),c=o(313),d=o.n(c),h=o(315),l=o.n(h),m={name:"Remark",props:{markdown:{type:String,required:!0}},data:function(){return{value:""}},watch:{markdown:function(){this.updateMarkdown()}},methods:{updateMarkdown:function(){var t=this,n=this;r()().use(l.a).use(d.a).process(this.$props.markdown,(function(o,e){o?console.error(o):(n.$data.value=e.contents,t.$emit("md-update",e.contents))}))}},mounted:function(){this.updateMarkdown()}},w=o(10),component=Object(w.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.value)}})}),[],!1,null,null,null);n.a=component.exports},585:function(t,n,o){"use strict";o.r(n);var e=o(296);n.default={name:"Changelog",head:function(){return{title:this.$t("routes.changelog.title")}},data:function(){return this.$store.commit("RESTORE_HERO"),{url:"https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/production/CHANGELOG.md",markdown:""}},mounted:function(){var t=this;this.$axios.$get(this.$data.url).then((function(n){t.$data.markdown=n})).catch((function(t){console.error("Error when getting changelog: ",t)}))},components:{Remark:e.a}}}}]);