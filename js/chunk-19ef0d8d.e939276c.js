(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19ef0d8d"],{"857a":function(t,n,e){var i=e("1d80"),s=/"/g;t.exports=function(t,n,e,r){var a=String(i(t)),c="<"+n;return""!==e&&(c+=" "+e+'="'+String(r).replace(s,"&quot;")+'"'),c+">"+a+"</"+n+">"}},"8726d":function(t,n,e){},9911:function(t,n,e){"use strict";var i=e("23e7"),s=e("857a"),r=e("af03");i({target:"String",proto:!0,forced:r("link")},{link:function(t){return s(this,"a","href",t)}})},af03:function(t,n,e){var i=e("d039");t.exports=function(t){return i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},c9f5:function(t,n,e){"use strict";e("8726d")},e959:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner",class:{"with-link":t.link},attrs:{flex:"dir:top main:center cross:top"}},[e("p",{staticClass:"banner--title"},[t._v(t._s(t.title))]),e("p",{staticClass:"banner--sub-title"},[t._v(t._s(t.subTitle))]),t.link?e("p",{staticClass:"banner--link",on:{click:t.handleLinkClick}},[e("span",{staticClass:"banner--link-button"},[e("d2-icon",{attrs:{name:"link"}}),t._v(" "+t._s(t.link)+" ")],1)]):t._e()])},s=[],r=(e("9911"),{props:{title:{type:String,default:""},subTitle:{type:String,default:""},link:{type:String,default:""}},methods:{handleLinkClick:function(){this.$open(this.link)}}}),a=r,c=(e("c9f5"),e("2877")),l=function(t){t.options.__source="src/components/d2-module-index-banner/index.vue"},o=l,u=Object(c["a"])(a,i,s,!1,null,"deb539fe",null);"function"===typeof o&&o(u);n["default"]=u.exports}}]);