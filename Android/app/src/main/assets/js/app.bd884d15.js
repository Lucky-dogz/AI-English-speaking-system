(function(){"use strict";var t={4968:function(t,e,o){var n=o(8935),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"root"}},[o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-wrap"},[o("MyHeader",{on:{addTodo:t.addTodo}}),o("MyList",{attrs:{todos:t.todos}}),o("MyFooter",{attrs:{todos:t.todos},on:{checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])])])},i=[],s=o(8937),l=o.n(s),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-header"},[o("input",{attrs:{type:"text",placeholder:"请输入你的任务名称，按回车键确认"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)}}})])},a=[],c=o(562),u={name:"MyHeader",methods:{add(t){if(""===t.target.value.trim())return alert("输入不能为空！");const e={id:(0,c.x0)(),title:t.target.value,done:!1,isEdit:!1};this.$emit("addTodo",e),t.target.value=""}}},h=u,f=o(1001),p=(0,f.Z)(h,d,a,!1,null,"e3b1929e",null),v=p.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"todo-main"},t._l(t.todos,(function(t){return o("MyItem",{key:t.id,attrs:{todo:t}})})),1)},b=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"todo",appear:""}},[o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){return t.handleCheck(t.todo.id)}}}),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}]},[t._v(t._s(t.todo.title))]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.todo.isEdit,expression:"todo.isEdit"}],ref:"fcs",attrs:{type:"text"},domProps:{value:t.todo.title},on:{blur:function(e){return t.handleBlur(t.todo,e)}}})]),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.handleDelete(t.todo.id)}}},[t._v(" 删除 ")]),o("button",{staticClass:"btn btn-edit",on:{click:function(e){return t.handleEdit(t.todo)}}},[t._v("编辑")])])])},T=[],k={name:"MyItem",props:["todo"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},handleDelete(t){confirm("确定删除吗？")&&l().publish("deleteTodo",t)},handleEdit(t){t.isEdit=!0,this.$nextTick((function(){this.$refs.fcs.focus()}))},handleBlur(t,e){if(t.isEdit=!1,!e.target.value.trim())return alert("输入不能为空！");this.$bus.$emit("updateTodo",t.id,e.target.value)}}},g=k,A=(0,f.Z)(g,y,T,!1,null,"dfbc4c58",null),_=A.exports,$={name:"MyList",components:{MyItem:_},props:["todos"]},w=$,x=(0,f.Z)(w,m,b,!1,null,"7438be22",null),E=x.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(e){var o=t.isAll,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=null,s=t._i(o,i);n.checked?s<0&&(t.isAll=o.concat([i])):s>-1&&(t.isAll=o.slice(0,s).concat(o.slice(s+1)))}else t.isAll=r}}})]),o("span",[o("span",[t._v("已完成"+t._s(t.doneTotal))]),t._v(" / 全部"+t._s(t.total)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v("清除已完成任务")])])},O=[],M={name:"MyFooter",props:["todos"],computed:{total(){return this.todos.length},doneTotal(){return this.todos.reduce(((t,e)=>t+(e.done?1:0)),0)},isAll:{get(){return this.doneTotal===this.total&&this.total>0},set(t){this.$emit("checkAllTodo",t)}}},methods:{clearAll(){confirm("确定删除所有任务吗？")&&this.$emit("clearAllTodo")}}},Z=M,I=(0,f.Z)(Z,C,O,!1,null,"813ee8b8",null),j=I.exports,N={name:"App",components:{MyHeader:v,MyList:E,MyFooter:j},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((e=>{e.id===t&&(e.done=!e.done)}))},updateTodo(t,e){this.todos.forEach((o=>{o.id===t&&(o.title=e)}))},deleteTodo(t,e){this.todos=this.todos.filter((t=>t.id!==e))},checkAllTodo(t){this.todos.forEach((e=>{e.done=t}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("updateTodo",this.updateTodo),this.pubId=l().subscribe("deleteTodo",this.deleteTodo)},beforeDestroy(){this.$bus.$off("checkTodo"),this.$bus.$off("updateTodo"),l().unsubscribe(this.pubId)}},P=N,F=(0,f.Z)(P,r,i,!1,null,null,null),S=F.exports;n.Z.config.productionTip=!1,new n.Z({el:"#app",render:t=>t(S),beforeCreate(){n.Z.prototype.$bus=this}})}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,i){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var l=!0,d=0;d<n.length;d++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[d])}))?n.splice(d--,1):(l=!1,i<s&&(s=i));if(l){t.splice(c--,1);var a=r();void 0!==a&&(e=a)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,s=n[0],l=n[1],d=n[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(d)var c=d(o)}for(e&&e(n);a<s.length;a++)i=s[a],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self["webpackChunktest01"]=self["webpackChunktest01"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4968)}));n=o.O(n)})();
//# sourceMappingURL=app.bd884d15.js.map