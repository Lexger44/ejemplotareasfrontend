(function(){"use strict";var e={23318:function(e,t,n){n(66992),n(88674),n(19601),n(17727);var r=n(28935),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[e._v("Latest Release")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1),n("v-main",[n("HelloWorld")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Bienvenido! ")]),n("p",{staticClass:"subheading font-weight-regular"},[e._v(" Front End del sistema de tareas,"),n("br"),e._v(" para utilizar como ejemplo en las practicas de despliegue. ")])]),n("v-col",{attrs:{cols:"12"}},[n("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{shaped:"",prominent:"",type:"error"}},[e._v(" Error al intentar conectar con el backend, revise el archivo main.js en el se encuentra la propiedad baseURL la cual tiene la direccion principal del backend. Revise y vuelva a realizar Build ")]),n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Agregar: ")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Nueva Tarea:",outlined:""},model:{value:e.nuevaTarea.nombre,callback:function(t){e.$set(e.nuevaTarea,"nombre",t)},expression:"nuevaTarea.nombre"}})],1),n("v-col",{staticClass:"mt-2",attrs:{cols:"1"}},[n("v-btn",{attrs:{disabled:!e.nuevaTarea.nombre,color:"primary"},on:{click:e.agregarTarea}},[e._v("Agregar")])],1)],1)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Tareas ")]),n("v-row",{attrs:{justify:"center"}},e._l(e.tareas,(function(t){return n("v-card",{key:t.id,staticClass:"ma-3",attrs:{"max-width":"400",color:"grey lighten-2"}},[n("v-col",[n("v-checkbox",{attrs:{label:t.nombre},model:{value:t.hecho,callback:function(n){e.$set(t,"hecho",n)},expression:"tarea.hecho"}}),n("v-col",[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(n){return e.eliminarTarea(t)}}},[n("v-icon",{attrs:{dark:""}},[e._v(" mdi-minus ")])],1)],1)],1)],1)})),1)],1)],1)],1)},s=[],c={name:"HelloWorld",data:function(){return{error:!1,tareas:[],nuevaTarea:{nombre:"",hecho:!1}}},methods:{cargarDatos:function(){var e=this;this.axios.get("/tareas").then((function(t){e.tareas=[],e.tareas=t.data})).catch((function(t){console.log(t),e.error=!0}))},agregarTarea:function(){var e=this;this.axios.post("/tareas",e.nuevaTarea).then((function(){e.cargarDatos()})).catch((function(t){console.log(t),e.error=!0})),e.nuevaTarea.nombre=""},eliminarTarea:function(e){var t=this;this.axios.delete("/tareas/delete/"+e._id).then((function(){t.cargarDatos()})).catch((function(e){console.log(e),t.error=!0}))}},mounted:function(){this.cargarDatos()}},l=c,u=n(1001),d=(0,u.Z)(l,i,s,!1,null,null,null),f=d.exports,v={name:"App",components:{HelloWorld:f},data:function(){return{}}},h=v,p=(0,u.Z)(h,a,o,!1,null,null,null),m=p.exports,b=n(48209),g=n.n(b);n(30243);r["default"].use(g());var y=new(g())({}),w=(n(99806),n(26166)),x=n.n(w),_=n(56762);x().defaults.baseURL={NODE_ENV:"production",BASE_URL:"/"}.BACKEND||"https://vm18042.us-south.cf.appdomain.cloud",r["default"].use(_.Z,x()),r["default"].config.productionTip=!1,new r["default"]({vuetify:y,render:function(e){return e(m)}}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkejemplotareasfrontend"]=self["webpackChunkejemplotareasfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(23318)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.47708bac.js.map