(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02cc43fe"],{"0909":function(e,t,l){"use strict";l("23ff")},"23ff":function(e,t,l){},"275e":function(e,t,l){},8684:function(e,t,l){"use strict";l("275e")},"8b2f":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"member-box"},[l("Customer")],1)},a=[],o=l("d8c9"),s={name:"PersonalCustomer",data:function(){return{}},components:{Customer:o["a"]}},n=s,u=(l("0909"),l("2877")),i=Object(u["a"])(n,r,a,!1,null,"66d7ca10",null);t["default"]=i.exports},d8c9:function(e,t,l){"use strict";var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"member-box"},[l("div",{staticClass:"query-wrapper"},[l("div",[l("el-form",{ref:"queryForm",attrs:{inline:!0,model:e.queryForm,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"手机号"}},[l("el-input",{attrs:{placeholder:e._f("solvePlaceholder")("input")},model:{value:e.queryForm.phone,callback:function(t){e.$set(e.queryForm,"phone",t)},expression:"queryForm.phone"}})],1),l("el-form-item",{attrs:{label:"录入人"}},[l("el-input",{attrs:{placeholder:e._f("solvePlaceholder")("input")},model:{value:e.queryForm.enterMan,callback:function(t){e.$set(e.queryForm,"enterMan",t)},expression:"queryForm.enterMan"}})],1),l("el-form-item",{attrs:{label:"客户姓名"}},[l("el-input",{attrs:{placeholder:e._f("solvePlaceholder")("input")},model:{value:e.queryForm.userName,callback:function(t){e.$set(e.queryForm,"userName",t)},expression:"queryForm.userName"}})],1),l("el-form-item",{attrs:{label:"客户维度"}},[l("el-select",{model:{value:e.queryForm.customerDimension,callback:function(t){e.$set(e.queryForm,"customerDimension",t)},expression:"queryForm.customerDimension"}},[l("el-option",{attrs:{label:"全部",value:"1"}}),l("el-option",{attrs:{label:"今日新增",value:"2"}}),l("el-option",{attrs:{label:"从未跟进",value:"3"}})],1)],1)],1)],1),l("div",{staticClass:"query-btn-group mt15"},[l("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")]),l("el-button",{on:{click:e.reset}},[e._v("重置")])],1)]),l("div",{staticClass:"table-box"},[l("el-row",{staticClass:"table-header",attrs:{type:"flex",justify:"space-between"}},[l("el-col",{staticClass:"customer-num",attrs:{span:6}},[e._v("共选择了15个客户")]),l("el-col",{staticClass:"table-header-btn-group",attrs:{span:18}},e._l(e.tableHeaderBtnGroups,(function(t,r){return l("el-dropdown",{key:e._f("solveKey")(t),staticClass:"dropdown mr15"},[l("el-button",{attrs:{type:"primary"}},[e._v(e._s(t.title))]),l("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(t.children,(function(r){return l("el-dropdown-item",[l("span",{staticStyle:{display:"block"},on:{click:function(l){return e.opera(t.type,r)}}},[e._v(e._s(t.title)+e._s(r.title))])])})),1)],1)})),1)],1),l("el-table",{ref:"customerTable",staticClass:"w100",attrs:{data:e.customers,"tooltip-effect":"dark"}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),l("el-table-column",{attrs:{label:"客户名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticClass:"cur hover-active",staticStyle:{"text-decoration":"underline"},on:{click:e.lookRelaRems}},[e._v(e._s(t.row.userName))])]}}])}),l("el-table-column",{attrs:{prop:"userName1",label:"手机号"}}),l("el-table-column",{attrs:{prop:"userName2",label:"意向额度(万元)"}}),l("el-table-column",{attrs:{prop:"userName3",label:"所在城市"}}),l("el-table-column",{attrs:{prop:"userName4",label:"客户状态"}}),l("el-table-column",{attrs:{prop:"userName5",label:"最近跟进时间"}}),l("el-table-column",{attrs:{prop:"userName6",label:"写跟进"}})],1),l("el-pagination",{staticStyle:{"text-align":"center","margin-top":"15px"},attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),l("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-table",{staticClass:"w100",attrs:{data:e.follows}},[l("el-table-column",{attrs:{prop:"userName",label:"跟进人"}}),l("el-table-column",{attrs:{prop:"userName1",label:"跟进时间"}}),l("el-table-column",{attrs:{prop:"userName12",label:"跟进结果"}})],1),l("span",{attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){return e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1),l("el-dialog",{attrs:{title:"新增跟进记录",visible:e.dialogFollowVisible},on:{"update:visible":function(t){e.dialogFollowVisible=t}}},[l("el-form",{ref:"followForm",attrs:{model:e.followForm}},[l("el-form-item",{attrs:{label:"客户名称"}},[l("el-input",{attrs:{placeholder:e._f("solvePlaceholder")("input")}})],1),l("el-form-item",{attrs:{label:"跟进人"}},[l("el-input",{attrs:{placeholder:e._f("solvePlaceholder")("input")}})],1),l("el-form-item",{attrs:{label:"跟进结果"}},[l("el-input",{attrs:{placeholder:e._f("solvePlaceholder")("input")}})],1)],1),l("span",{attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"}},[e._v("保存")]),l("el-button",{on:{click:function(t){return e.dialogFollowVisible=!1}}},[e._v("取消")])],1)],1)],1)},a=[],o=(l("b0c0"),{name:"Customer",data:function(){return{queryForm:{},tableHeaderBtnGroups:[{title:"创建",type:"1",children:[{title:"客户",name:"Customer"},{title:"跟进记录",name:"Follow"}]},{title:"转交",type:"2",children:[{title:"负责人",name:"Director"},{title:"公共客户",name:"Public"}]},{title:"导出",type:"3",children:[{title:"所选客户",name:"SelectedCustomer"},{title:"当前页客户",name:"CurrentCustomer"}]}],customers:[],currentPage4:null,dialogFormVisible:!1,dialogTitle:"",follows:[{userName:"员工1",userName1:"2022-4-22",userName2:"客户考虑中"}],dialogFollowVisible:!1,followForm:{}}},created:function(){var e=this,t=e.$route.name;e.customers="PublicCustomer"==t?[{userName:"公共客户",userName1:"123456",userName2:"133",userName3:"浙江杭州",userName4:"意向客户",userName5:"2022-4-11",userName6:"写跟进"}]:"PersonalCustomer"==t?[{userName:"个人客户",userName1:"123456",userName2:"133",userName3:"浙江杭州",userName4:"意向客户",userName5:"2022-4-11",userName6:"写跟进"}]:[{userName:"个人客户",userName1:"123456",userName2:"133",userName3:"浙江杭州",userName4:"意向客户",userName5:"2022-4-11",userName6:"写跟进"},{userName:"公共客户",userName1:"123456",userName2:"133",userName3:"浙江杭州",userName4:"意向客户",userName5:"2022-4-11",userName6:"写跟进"},{userName:"客户A",userName1:"123456",userName2:"133",userName3:"浙江杭州",userName4:"意向客户",userName5:"2022-4-11",userName6:"写跟进"}]},methods:{query:function(){},reset:function(){},handleSizeChange:function(){},handleCurrentChange:function(){},lookRelaRems:function(){var e=this;e.dialogFormVisible=!0,e.dialogTitle="客户A的跟进记录"},opera:function(e,t){var l=this;"1"==e&&("Follow"==t.name?l.dialogFollowVisible=!0:"Customer"==t.name&&l.$router.push({path:"/entercustomer"}))}}}),s=o,n=(l("8684"),l("2877")),u=Object(n["a"])(s,r,a,!1,null,"0312a14c",null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-02cc43fe.70d73c8d.js.map