(function(t){function o(o){for(var r,n,a=o[0],d=o[1],c=o[2],l=0,p=[];l<a.length;l++)n=a[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);u&&u(o);while(p.length)p.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,o=0;o<s.length;o++){for(var e=s[o],r=!0,a=1;a<e.length;a++){var d=e[a];0!==i[d]&&(r=!1)}r&&(s.splice(o--,1),t=n(n.s=e[0]))}return t}var r={},i={app:0},s=[];function n(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=r,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="/Practice-C4.12/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=o,a=a.slice();for(var c=0;c<a.length;c++)o(a[c]);var u=d;s.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var r=e("64a9"),i=e.n(r);i.a},"39a3":function(t,o,e){"use strict";var r=e("b1e7"),i=e.n(r);i.a},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d"),e("f9e3");var r=e("5f5b"),i=e("2b0e"),s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Перейти к todos")])],1),e("router-view")],1)},n=[],a=(e("034f"),e("2877")),d={},c=Object(a["a"])(d,s,n,!1,null,null,null),u=c.exports,l=e("8c4f"),p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"col-sm-10"},[e("h1",[t._v("Задачи (выполнено: "+t._s(t.completed_count)+". Не выполнено: "+t._s(t.un_completed_count)+".)")]),t.showConfirmation?e("confirmation",{attrs:{message:t.confirmationMessage,showDismissibleAlert:t.showConfirmation}}):t._e(),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-modal",modifiers:{"todo-modal":!0}}],staticClass:"btn btn-success btn-sm align-left d-block",attrs:{type:"button",id:"task-add"}},[t._v("Добавить задачу")]),e("table",{staticClass:"table table-dark table-stripped table-hover"},[t._m(0),e("tbody",t._l(t.todos,(function(o,r){return e("tr",{key:r},[e("td",{staticClass:"todo-uid"},[t._v(t._s(o.uid))]),e("td",[t._v(t._s(o.description))]),e("td",[o.is_completed?e("span",[t._v("Выполнено")]):e("span",[t._v("Не выполнено")])]),e("td",[e("div",{staticClass:"btn-group",attrs:{role:"group"}},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-update-modal",modifiers:{"todo-update-modal":!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.updateTodo(o)}}},[t._v("Обновить")]),t._v("\n             \n            "),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteTodo(o)}}},[t._v("X")])])])])})),0)]),e("b-modal",{ref:"addTodoModal",attrs:{id:"todo-modal",title:"Добавить задачу","hide-footer":""}},[e("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{id:"form-description-group",label:"Описание:","label-for":"form-description-input"}},[e("b-form-input",{attrs:{id:"form-description-input",type:"text",required:"",placeholder:"Завести задачу"},model:{value:t.addTodoForm.description,callback:function(o){t.$set(t.addTodoForm,"description",o)},expression:"addTodoForm.description"}})],1),e("b-form-group",{attrs:{id:"form-complete-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.addTodoForm.is_completed,callback:function(o){t.$set(t.addTodoForm,"is_completed",o)},expression:"addTodoForm.is_completed"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Добавить")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1),e("b-modal",{ref:"updateTodoModal",attrs:{id:"todo-update-modal",title:"Update","hide-footer":""}},[e("b-form",{staticClass:"w-100",on:{submit:t.onUpdateSubmit,reset:t.onUpdateReset}},[e("b-form-group",{attrs:{id:"form-update-description-group",label:"Описание:","label-for":"form-update-description-input"}},[e("b-form-input",{attrs:{id:"form-update-description-input",type:"text",required:""},model:{value:t.updateTodoForm.description,callback:function(o){t.$set(t.updateTodoForm,"description",o)},expression:"updateTodoForm.description"}})],1),e("b-form-group",{attrs:{id:"form-update-complete-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-update-checks"},model:{value:t.updateTodoForm.is_completed,callback:function(o){t.$set(t.updateTodoForm,"is_completed",o)},expression:"updateTodoForm.is_completed"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),e("b-button-group",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Обновить")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1)],1)],1)])},m=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[t._v("Uid")]),e("th",[t._v("Описание")]),e("th",[t._v("Выполнена?")]),e("th")])])}],f=(e("20d6"),e("7514"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(o){t.showDismissibleAlert=o},expression:"showDismissibleAlert"}},[t._v("\n    "+t._s(t.message)+"\n  ")])],1)}),b=[],h={props:["message","showDismissibleAlert"]},v=h,_=Object(a["a"])(v,f,b,!1,null,null,null),g=_.exports,T={name:"Todo",data:function(){return{todos:[],addTodoForm:{description:"",is_completed:[]},updateTodoForm:{uid:0,description:"",is_completed:[]},confirmationMessage:"",showConfirmation:!1,completed_count:0,un_completed_count:0}},methods:{getTodos:function(){var t=localStorage.getItem("tasks");t&&(this.todos=JSON.parse(t),this.completed_count=this.todos.filter((function(t){return!0===t.is_completed})).length,this.un_completed_count=this.todos.length-this.completed_count)},resetForm:function(){this.addTodoForm.description="",this.addTodoForm.is_completed=[],this.updateTodoForm.description="",this.updateTodoForm.is_completed=[]},onSubmit:function(t){t.preventDefault(),this.$refs.addTodoModal.hide();var o=localStorage.getItem("tasks"),e=[];o?(e=JSON.parse(o),e.push({uid:e.length+1,description:this.addTodoForm.description,is_completed:!!this.addTodoForm.is_completed[0]}),this.confirmationMessage='Задача "'.concat(this.addTodoForm.description,'" добавлена'),this.showConfirmation=!0):e=[{uid:1,description:this.addTodoForm.description,is_completed:!!this.addTodoForm.is_completed[0]}],localStorage.setItem("tasks",JSON.stringify(e)),this.getTodos(),this.resetForm()},onReset:function(t){t.preventDefault(),this.$refs.addTodoModal.hide(),this.resetForm()},updateTodo:function(t){this.updateTodoForm=t},onUpdateSubmit:function(t){var o=this,e=localStorage.getItem("tasks"),r=[];if(e){r=JSON.parse(e);var i=r.find((function(t){return t.uid===o.updateTodoForm.uid}));i&&(i.is_completed=!!this.updateTodoForm.is_completed,i.description=this.updateTodoForm.description,i.is_completed&&this.completed_count++,this.confirmationMessage="Задача обновлена",this.showConfirmation=!0,localStorage.setItem("tasks",JSON.stringify(r)))}},onUpdateReset:function(t){t.preventDefault(),this.$refs.updateTodoModal.hide(),this.resetForm()},deleteTodo:function(t){var o=localStorage.getItem("tasks"),e=[];if(o){e=JSON.parse(o);var r=e.findIndex((function(o){return o.uid===t.uid}));r>=0&&(e.splice(r,1),this.getTodos(),this.confirmationMessage="Задача удалена из списка",this.showConfirmation=!0)}localStorage.setItem("tasks",JSON.stringify(e)),this.getTodos(),this.resetForm()}},components:{confirmation:g},created:function(){this.getTodos()}},y=T,F=(e("39a3"),Object(a["a"])(y,p,m,!1,null,null,null)),k=F.exports;i["default"].use(l["a"]);var w=new l["a"]({mode:"history",base:"/Practice-C4.12/",routes:[{path:"/",name:"todos",component:k}]});i["default"].use(r["a"]),i["default"].config.productionTip=!1,new i["default"]({router:w,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,o,e){},b1e7:function(t,o,e){}});
//# sourceMappingURL=app.687cf84b.js.map