webpackJsonp([2],{"+MLA":function(t,e,a){var s=a("EqjI"),r=a("06OY").onFreeze;a("uqUo")("freeze",function(t){return function(e){return t&&s(e)?t(r(e)):e}})},"4KXY":function(t,e){},"71Nn":function(t,e){},LDMr:function(t,e){},O4R0:function(t,e,a){a("+MLA"),t.exports=a("FeBl").Object.freeze},Ps19:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("u2KI"),r=a.n(s),i=[{title:"账户密码",description:"当前密码强度",value:"强",actions:{title:"修改"}},{title:"密保手机",description:"已绑定手机",value:"178****6855",actions:{title:"修改"}},{title:"密保问题",description:"未设置密保问题，密保问题可有效保护账户安全",value:"",actions:{title:"设置"}},{title:"备用邮箱",description:"已绑定邮箱",value:"1808***436@qq.com",actions:{title:"修改"}},{title:"MFA 设备",description:"未绑定 MFA 设备，绑定后，可以进行二次确认",value:"",actions:{title:"绑定"}}],n={data:function(){return{data:r()(i)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"security"},[a("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e,s){return a("a-list-item",{key:s},[a("a-list-item-meta",[a("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{attrs:{slot:"description"},slot:"description"},[a("span",{staticClass:"security-list-description"},[t._v(t._s(e.description))]),t._v(" "),e.value?a("span",[t._v(":")]):t._e(),t._v(" "),a("span",{staticClass:"security-list-value"},[t._v(t._s(e.value))])])]),t._v(" "),e.actions?[a("a",{attrs:{slot:"actions"},slot:"actions"},[t._v(t._s(e.actions.title))])]:t._e()],2)}}])})],1)},staticRenderFns:[]};var l={name:"base-settings",data:function(){return{form:{name:"Admin",sex:"3",email:"123456789@qq.com",address:""},rules:{name:[{required:!0,message:"请输入昵称",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],email:[{type:"email",message:"请输入邮箱地址",trigger:"blur"},{required:!0,message:"请输入邮箱地址",trigger:"blur"}]}}},mounted:function(){},methods:{onSubmit:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$message.success("提交成功！")})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-settings"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("div",{staticClass:"form-box"},[a("a-form-model",{ref:"ruleForm",staticStyle:{width:"60%"},attrs:{layout:"vertical",model:t.form,rules:t.rules}},[a("a-form-model-item",{ref:"name",attrs:{label:"昵称",prop:"name"}},[a("a-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("a-form-model-item",{ref:"sex",attrs:{label:"性别",prop:"sex"}},[a("a-radio-group",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}},[a("a-radio",{attrs:{value:"1"}},[t._v("\n                男\n              ")]),t._v(" "),a("a-radio",{attrs:{value:"2"}},[t._v("\n                女\n              ")]),t._v(" "),a("a-radio",{attrs:{value:"3"}},[t._v("\n                保密\n              ")])],1)],1),t._v(" "),a("a-form-model-item",{ref:"email",attrs:{label:"Email",prop:"email"}},[a("a-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),a("a-form-model-item",{ref:"address",attrs:{label:"地址",prop:"address"}},[a("a-input",{model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:0}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("\n              提交保存\n            ")])],1)],1)],1)]),t._v(" "),a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("div",{staticClass:"avatar-box"},[a("a-avatar",{staticClass:"avatar",staticStyle:{backgroundColor:"#87d068"},attrs:{icon:"user",size:128}}),t._v(" "),a("br"),t._v(" "),a("a-upload",{attrs:{action:"/"}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" Change Avatar")],1)],1)],1)])],1)],1)},staticRenderFns:[]};var c={name:"User",components:{security:a("VU/8")(n,o,!1,function(t){a("LDMr")},"data-v-949d763c",null).exports,baseSettings:a("VU/8")(l,u,!1,function(t){a("4KXY")},"data-v-fd0414f6",null).exports},data:function(){return{tabPosition:"left"}},mounted:function(){},methods:{}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user"},[e("a-card",{attrs:{bordered:!1}},[e("a-tabs",{attrs:{defaultActiveKey:"1",tabPosition:this.tabPosition}},[e("a-tab-pane",{key:"1",attrs:{tab:"基本设置"}},[e("base-settings")],1),this._v(" "),e("a-tab-pane",{key:"2",attrs:{tab:"安全设置"}},[e("security")],1),this._v(" "),e("a-tab-pane",{key:"3",attrs:{tab:"新消息通知"}},[this._v("新消息通知")])],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(c,d,!1,function(t){a("71Nn")},"data-v-001d4970",null);e.default=m.exports},u2KI:function(t,e,a){t.exports={default:a("O4R0"),__esModule:!0}}});
//# sourceMappingURL=2.5108477b5eba5518194c.js.map