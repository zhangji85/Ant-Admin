webpackJsonp([13],{e8cQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var l=a("mvHQ"),n=a.n(l),o=[{title:"型号",dataIndex:"name",width:80,tooltip:!0,fixed:"left",sortable:!0,search:!0,formOptions:{el:"input"},sorter:function(e,t){return e.name-t.name}},{title:"手机号(固定长度)",dataIndex:"input2",width:150,formOptions:{el:"input.search"}},{title:"自定义(内容长)",dataIndex:"input3",tooltip:!0,width:100,formOptions:{el:"input"}},{title:"复选框",dataIndex:"checkbox",width:150,search:!0,formOptions:{el:"checkbox",options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]},filters:[{text:"Apple",value:"Apple"},{text:"Pear",value:"Pear"}],filterMultiple:!0,filterMethod:function(e,t){}},{title:"星级",dataIndex:"rate",width:200,search:!0,formOptions:{el:"rate"}},{title:"下拉框",className:"select",dataIndex:"select",width:100,tooltip:!0,search:!0,formOptions:{el:"select",options:[{label:"John Brown",value:"John Brown",disabled:!0},{label:"artiely",value:"artiely"}]}},{title:"异步下拉框",className:"selectAsync",dataIndex:"selectAsync",tooltip:!0,width:100,formOptions:{el:"select",options:[]}},{title:"输入框",dataIndex:"address",tooltip:!0,width:100,search:!0,formOptions:{el:"input"}},{title:"单选框",dataIndex:"radio",width:100,search:!0,formOptions:{el:"radio",options:[{label:"John Brown",value:"John Brown",disabled:!0},{label:"artiely",value:"artiely"}]}},{title:"开关",dataIndex:"switch",width:100,search:!0,formOptions:{el:"switch",checkedChildren:"开",unCheckedChildren:"关"}},{title:"日期",dataIndex:"datepicker",width:100,search:!0,formOptions:{el:"datepicker",options:{}}},{title:"时间",dataIndex:"timepicker",width:100,search:!0,formOptions:{el:"timepicker",options:{}}},{title:"级联",dataIndex:"cascader",width:100,tooltip:!0,search:!0,formOptions:{el:"cascader",options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{title:"文本域",dataIndex:"textarea",width:100,formOptions:{el:"textarea"}},{title:"滑块",dataIndex:"slider",width:100,formOptions:{el:"slider"}},{title:"上传",dataIndex:"upload",tooltip:!0,width:100,formOptions:{el:"upload",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}},{title:"树",dataIndex:"tree",width:100,formOptions:{el:"tree",options:[{title:"parent 1",key:"0-0",slots:{icon:"smile"},children:[{title:"leaf",key:"0-0-0",slots:{icon:"meh"}},{title:"leaf",key:"0-0-1",scopedSlots:{icon:"custom"}}]}]}}],i=[],r=0;r<18;r++)i.push({key:r,name:""+r,input2:"1592629046"+r,input3:"这是一个完全自定义的输入框",select:"这是一个基本输入框",selectAsync:"这是一个异步数据输入框",address:"New York No. 1 Lake Park",radio:"artiely",switch:!0,checkbox:["Apple","Pear"],datepicker:"2019/10/20",timepicker:"23:59:59",cascader:["zhejiang","hangzhou","xihu"],rate:3,textarea:"这是一个文本域",slider:30,upload:[{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],tree:[]});var s={data:function(){return{data:i,columns:o,loading:!1,showForm:!1,defaultData:{}}},computed:{selcolumns:function(){return this.columns.filter(function(e){return e.search})}},methods:{handleEdit:function(e,t){console.log(e,t),this.showForm=!0,this.defaultData=JSON.parse(n()(t))}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",[a("a-alert",{attrs:{message:"表格解析器",description:"配置一段JSON即可完成支持CRUD的表格与表单，并且自动响应式",type:"info",showIcon:""}}),e._v(" "),a("br"),e._v(" "),e.selcolumns.length?a("v-select-form-parser",{attrs:{sourceData:e.selcolumns,span:6}}):e._e(),e._v(" "),a("v-table-parser",{attrs:{sourceData:e.columns,tableData:e.data,loading:e.loading,title:"配置化表格"},on:{"handle-edit":e.handleEdit},scopedSlots:e._u([{key:"name",fn:function(t){var l=t.row;return[a("a-avatar",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}}),e._v("\n        "+e._s(l.name)+"\n      ")]}},{key:"rate",fn:function(e){var t=e.row;return[a("a-rate",{attrs:{value:t.rate,disabled:""}})]}},{key:"select",fn:function(t){var l=t.row;return[a("a-popover",{attrs:{title:"Title"}},[a("template",{slot:"content"},[a("p",[e._v(e._s(l.select))]),e._v(" "),a("p",[e._v(e._s(l.select))])]),e._v(" "),a("a",{staticStyle:{display:"block",width:"120px"}},[e._v("更多信息点我")])],2)]}},{key:"checkbox",fn:function(t){var l=t.row;return e._l(l.checkbox,function(t){return a("a-tag",{key:t,attrs:{color:"Apple"==t?"red":"pink"}},[e._v(e._s(t))])})}}])},[a("template",{slot:"toolbtns"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleEdit({},{})}}},[e._v("\n          新建\n        ")])],1)],2)],1),e._v(" "),a("v-form-parser",{attrs:{sourceData:e.columns,defaultData:e.defaultData,model:"modal"},model:{value:e.showForm,callback:function(t){e.showForm=t},expression:"showForm"}})],1)},staticRenderFns:[]},c=a("VU/8")(s,d,!1,null,null,null);t.default=c.exports}});
//# sourceMappingURL=13.a0c4f235d3075a893f65.js.map