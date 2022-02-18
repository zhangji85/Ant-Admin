(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e260844"],{3298:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("a-card",{attrs:{bordered:!1}},[a("a-tabs",{attrs:{defaultActiveKey:"1",tabPosition:t.tabPosition}},[a("a-tab-pane",{key:"1",attrs:{tab:"基本设置"}},[a("base-settings")],1),a("a-tab-pane",{key:"2",attrs:{tab:"安全设置"}},[a("security")],1),a("a-tab-pane",{key:"3",attrs:{tab:"新消息通知"}},[t._v("新消息通知")])],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"security"},[a("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e,r){return a("a-list-item",{key:r},[a("a-list-item-meta",[a("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),a("span",{attrs:{slot:"description"},slot:"description"},[a("span",{staticClass:"security-list-description"},[t._v(t._s(e.description))]),e.value?a("span",[t._v(":")]):t._e(),a("span",{staticClass:"security-list-value"},[t._v(t._s(e.value))])])]),e.actions?[a("a",{attrs:{slot:"actions"},slot:"actions"},[t._v(t._s(e.actions.title))])]:t._e()],2)}}])})],1)},n=[],o=(a("dca8"),[{title:"账户密码",description:"当前密码强度",value:"强",actions:{title:"修改"}},{title:"密保手机",description:"已绑定手机",value:"178****6855",actions:{title:"修改"}},{title:"密保问题",description:"未设置密保问题，密保问题可有效保护账户安全",value:"",actions:{title:"设置"}},{title:"备用邮箱",description:"已绑定邮箱",value:"1808***436@qq.com",actions:{title:"修改"}},{title:"MFA 设备",description:"未绑定 MFA 设备，绑定后，可以进行二次确认",value:"",actions:{title:"绑定"}}]),l={data:function(){return{data:Object.freeze(o)}}},c=l,u=a("2877"),f=Object(u["a"])(c,i,n,!1,null,"e546fb88",null),d=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-settings"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:12}},[a("div",{staticClass:"form-box"},[a("a-form-model",{ref:"ruleForm",staticStyle:{width:"60%"},attrs:{layout:"vertical",model:t.form,rules:t.rules}},[a("a-form-model-item",{ref:"name",attrs:{label:"昵称",prop:"name"}},[a("a-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("a-form-model-item",{ref:"sex",attrs:{label:"性别",prop:"sex"}},[a("a-radio-group",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}},[a("a-radio",{attrs:{value:"1"}},[t._v(" 男 ")]),a("a-radio",{attrs:{value:"2"}},[t._v(" 女 ")]),a("a-radio",{attrs:{value:"3"}},[t._v(" 保密 ")])],1)],1),a("a-form-model-item",{ref:"email",attrs:{label:"Email",prop:"email"}},[a("a-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("a-form-model-item",{ref:"address",attrs:{label:"地址",prop:"address"}},[a("a-input",{model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:0}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" 提交保存 ")])],1)],1)],1)]),a("a-col",{staticClass:"gutter-row",attrs:{span:12}},[a("div",{staticClass:"avatar-box"},[a("a-avatar",{staticClass:"avatar",staticStyle:{"background-color":"rgba(24, 144, 255, 0.8)"},attrs:{icon:"user",size:128}}),a("br"),a("a-upload",{attrs:{action:"/"}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" Change Avatar")],1)],1)],1)])],1)],1)},b=[],p={name:"base-settings",data:function(){return{form:{name:"Admin",sex:"3",email:"123456789@qq.com",address:""},rules:{name:[{required:!0,message:"请输入昵称",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],email:[{type:"email",message:"请输入邮箱地址",trigger:"blur"},{required:!0,message:"请输入邮箱地址",trigger:"blur"}]}}},mounted:function(){},methods:{onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.$message.success("提交成功！")}))}}},v=p,g=(a("86f0"),Object(u["a"])(v,m,b,!1,null,"38e0f6dc",null)),y=g.exports,x={name:"User",components:{security:d,baseSettings:y},data:function(){return{tabPosition:"left"}},mounted:function(){},methods:{}},_=x,k=Object(u["a"])(_,r,s,!1,null,"280ac6a8",null);e["default"]=k.exports},"4fad":function(t,e,a){var r=a("d039"),s=a("861d"),i=a("c6b6"),n=a("d86b"),o=Object.isExtensible,l=r((function(){o(1)}));t.exports=l||n?function(t){return!!s(t)&&((!n||"ArrayBuffer"!=i(t))&&(!o||o(t)))}:o},"86f0":function(t,e,a){"use strict";a("e6a5")},bb2f:function(t,e,a){var r=a("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(t,e,a){var r=a("d039");t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},dca8:function(t,e,a){var r=a("23e7"),s=a("bb2f"),i=a("d039"),n=a("861d"),o=a("f183").onFreeze,l=Object.freeze,c=i((function(){l(1)}));r({target:"Object",stat:!0,forced:c,sham:!s},{freeze:function(t){return l&&n(t)?l(o(t)):t}})},e6a5:function(t,e,a){},f183:function(t,e,a){var r=a("23e7"),s=a("e330"),i=a("d012"),n=a("861d"),o=a("1a2d"),l=a("9bf2").f,c=a("241c"),u=a("057f"),f=a("4fad"),d=a("90e3"),m=a("bb2f"),b=!1,p=d("meta"),v=0,g=function(t){l(t,p,{value:{objectID:"O"+v++,weakData:{}}})},y=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,p)){if(!f(t))return"F";if(!e)return"E";g(t)}return t[p].objectID},x=function(t,e){if(!o(t,p)){if(!f(t))return!0;if(!e)return!1;g(t)}return t[p].weakData},_=function(t){return m&&b&&f(t)&&!o(t,p)&&g(t),t},k=function(){h.enable=function(){},b=!0;var t=c.f,e=s([].splice),a={};a[p]=1,t(a).length&&(c.f=function(a){for(var r=t(a),s=0,i=r.length;s<i;s++)if(r[s]===p){e(r,s,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},h=t.exports={enable:k,fastKey:y,getWeakData:x,onFreeze:_};i[p]=!0}}]);