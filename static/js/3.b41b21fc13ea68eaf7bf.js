webpackJsonp([3],{CtBF:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={name:"Register",components:{AuthBase:t("WfJN").a},data:function(){var e=this;return{wrapperCol:{span:24},form:{email:"",password:"",confirmpwd:"",prefix:"86",phone:"",captcha:""},rules:{email:[{type:"email",message:"请输入邮箱地址",trigger:"blur"},{required:!0,message:"请输入邮箱地址",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:18,message:"请输入6~18位密码",trigger:"blur"}],confirmpwd:[{validator:function(r,t,a){""===t?a(new Error("请再次输入密码")):t!==e.form.password?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,message:"请输入正确的手机号",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},timer:60,disabled:!1,auth_timer:null}},mounted:function(){},methods:{onRegister:function(){this.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},get_captcha:function(){var e=this;this.$refs.ruleForm.validateField(["phone"],function(r){r||e.count_down()})},toLogin:function(){this.$router.push({path:"/login"})},handleChange:function(e){this.$set(this.form,"prefix",e)},count_down:function(){var e=this;this.disabled=!0,this.auth_timer=setInterval(function(){e.timer--,e.timer<=0&&(e.disabled=!1,clearInterval(e.auth_timer),e.timer=60)},1e3)}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register"},[t("auth-base",[t("div",{staticStyle:{"margin-bottom":"20px"}},[e._v("注册")]),e._v(" "),t("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"wrapper-col":e.wrapperCol}},[t("a-form-model-item",{ref:"email",attrs:{prop:"email"}},[t("a-input",{attrs:{size:"large",placeholder:"邮箱"},on:{blur:function(){e.$refs.email.onFieldBlur()}},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),t("a-form-model-item",{ref:"password",attrs:{prop:"password"}},[t("a-input-password",{attrs:{size:"large",placeholder:"至少六位密码，区分大小写"},on:{blur:function(){e.$refs.password.onFieldBlur()}},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("a-form-model-item",{ref:"confirmpwd",attrs:{prop:"confirmpwd"}},[t("a-input-password",{attrs:{size:"large",placeholder:"确认密码"},on:{blur:function(){e.$refs.confirmpwd.onFieldBlur()}},model:{value:e.form.confirmpwd,callback:function(r){e.$set(e.form,"confirmpwd",r)},expression:"form.confirmpwd"}})],1),e._v(" "),t("a-form-model-item",{ref:"phone",attrs:{prop:"phone"}},[t("a-input",{attrs:{size:"large",placeholder:"11位手机号"},on:{blur:function(){e.$refs.phone.onFieldBlur()}},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}},[t("a-select",{staticStyle:{width:"70px"},attrs:{slot:"addonBefore",value:e.form.prefix},on:{change:e.handleChange},slot:"addonBefore"},[t("a-select-option",{attrs:{value:"86"}},[e._v("\n              +86\n            ")]),e._v(" "),t("a-select-option",{attrs:{value:"87"}},[e._v("\n              +87\n            ")])],1)],1)],1),e._v(" "),t("a-form-model-item",{ref:"captcha",attrs:{prop:"captcha"}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:16}},[t("a-input",{attrs:{size:"large",placeholder:"验证码"},on:{blur:function(){e.$refs.captcha.onFieldBlur()}},model:{value:e.form.captcha,callback:function(r){e.$set(e.form,"captcha",r)},expression:"form.captcha"}},[t("a-icon",{attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),e._v(" "),t("a-col",{attrs:{span:8}},[t("a-button",{attrs:{block:"",size:"large",disabled:e.disabled},on:{click:e.get_captcha}},[e.disabled?t("span",[e._v(e._s(e.timer)+" s")]):t("span",[e._v("获取验证码")])])],1)],1)],1),e._v(" "),t("a-form-model-item",[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-button",{attrs:{type:"primary",size:"large",block:""},on:{click:e.onRegister}},[e._v("\n              注册\n            ")])],1),e._v(" "),t("a-col",{attrs:{span:12}},[t("a-button",{staticClass:"link-btn",attrs:{type:"link",size:"large",block:""},on:{click:e.toLogin}},[e._v("\n              使用已有账户登录\n            ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=t("VU/8")(a,o,!1,function(e){t("Lncg")},"data-v-6d522057",null);r.default=n.exports},Lncg:function(e,r){}});
//# sourceMappingURL=3.b41b21fc13ea68eaf7bf.js.map