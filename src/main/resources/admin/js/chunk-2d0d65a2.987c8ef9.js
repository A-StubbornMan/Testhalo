(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d65a2"],{"71d6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header-index-wide"},[n("a-row",{attrs:{gutter:12}},[n("a-col",{style:{"padding-bottom":"12px"},attrs:{xl:10,lg:10,md:10,sm:24,xs:24}},[n("a-card",{attrs:{title:e.title}},[n("a-form",{attrs:{layout:"horizontal"}},[n("a-form-item",{attrs:{label:"名称：",help:"* 页面上所显示的名称"}},[n("a-input",{model:{value:e.menuToCreate.name,callback:function(t){e.$set(e.menuToCreate,"name",t)},expression:"menuToCreate.name"}})],1),n("a-form-item",{attrs:{label:"路径：",help:"* 菜单的路径"}},[n("a-input",{model:{value:e.menuToCreate.url,callback:function(t){e.$set(e.menuToCreate,"url",t)},expression:"menuToCreate.url"}})],1),n("a-form-item",{attrs:{label:"上级菜单："}},[n("menu-select-tree",{attrs:{menus:e.menus},model:{value:e.menuToCreate.parentId,callback:function(t){e.$set(e.menuToCreate,"parentId",t)},expression:"menuToCreate.parentId"}})],1),n("a-form-item",{attrs:{label:"排序编号："}},[n("a-input",{attrs:{type:"number"},model:{value:e.menuToCreate.priority,callback:function(t){e.$set(e.menuToCreate,"priority",t)},expression:"menuToCreate.priority"}})],1),n("a-form-item",{style:{display:e.fieldExpand?"block":"none"},attrs:{label:"图标：",help:"* 请根据主题的支持选填"}},[n("a-input",{model:{value:e.menuToCreate.icon,callback:function(t){e.$set(e.menuToCreate,"icon",t)},expression:"menuToCreate.icon"}})],1),n("a-form-item",{style:{display:e.fieldExpand?"block":"none"},attrs:{label:"打开方式："}},[n("a-select",{attrs:{defaultValue:"_self"},model:{value:e.menuToCreate.target,callback:function(t){e.$set(e.menuToCreate,"target",t)},expression:"menuToCreate.target"}},[n("a-select-option",{attrs:{value:"_self"}},[e._v("当前窗口")]),n("a-select-option",{attrs:{value:"_blank"}},[e._v("新窗口")])],1)],1),n("a-form-item",["create"===e.formType?n("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveClick}},[e._v("保存")]):n("a-button-group",[n("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveClick}},[e._v("更新")]),"update"===e.formType?n("a-button",{attrs:{type:"dashed"},on:{click:e.handleAddMenu}},[e._v("返回添加")]):e._e()],1),n("a",{style:{marginLeft:"8px"},on:{click:e.toggleExpand}},[e._v("\n              更多选项\n              "),n("a-icon",{attrs:{type:e.fieldExpand?"up":"down"}})],1)],1)],1)],1)],1),n("a-col",{style:{"padding-bottom":"12px"},attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[n("a-card",{attrs:{title:"所有菜单"}},[n("a-table",{attrs:{columns:e.columns,dataSource:e.menus,loading:e.loading,rowKey:function(e){return e.id}},scopedSlots:e._u([{key:"name",fn:function(t){return n("ellipsis",{attrs:{length:30,tooltip:""}},[e._v(e._s(t))])}},{key:"action",fn:function(t,a){return n("span",{},[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEditMenu(a)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"你确定要删除【"+a.name+"】菜单？",okText:"确定",cancelText:"取消"},on:{confirm:function(t){return e.handleDeleteMenu(a.id)}}},[n("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)}}])})],1)],1)],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tree-select",{attrs:{treeData:e.menuTreeData,placeholder:"请选择上级菜单，默认为顶级菜单",treeDefaultExpandAll:"",treeDataSimpleMode:!0,allowClear:!0,value:e.menuIdString},on:{change:e.handleSelectionChange}})},l=[],u=(n("48fb"),n("3a23"),n("b06f"),{name:"MenuSelectTree",model:{prop:"menuId",event:"change"},props:{menuId:{type:Number,required:!0,default:0},menus:{type:Array,required:!1,default:function(){return[]}}},computed:{menuTreeData:function(){return this.menus.map(function(e){return{id:e.id,title:e.name,value:e.id.toString(),pId:e.parentId}})},menuIdString:function(){return this.menuId.toString()}},methods:{handleSelectionChange:function(e,t,n){this.$log.debug("value: ",e),this.$log.debug("label: ",t),this.$log.debug("extra: ",n),this.$emit("change",e?parseInt(e):0)}}}),i=u,s=n("17cc"),c=Object(s["a"])(i,o,l,!1,null,null,null),d=c.exports,m=n("9efd"),p="/api/admin/menus",f={listAll:function(){return Object(m["a"])({url:p,method:"get"})},listTree:function(){return Object(m["a"])({url:"".concat(p,"/tree_view"),method:"get"})},create:function(e){return Object(m["a"])({url:p,data:e,method:"post"})},delete:function(e){return Object(m["a"])({url:"".concat(p,"/").concat(e),method:"delete"})},get:function(e){return Object(m["a"])({url:"".concat(p,"/").concat(e),method:"get"})},update:function(e,t){return Object(m["a"])({url:"".concat(p,"/").concat(e),data:t,method:"put"})}},h=f,g=[{title:"名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"路径",dataIndex:"url"},{title:"排序",dataIndex:"priority"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],b={components:{MenuSelectTree:d},data:function(){return{formType:"create",loading:!1,columns:g,menus:[],menuToCreate:{},fieldExpand:!1}},computed:{title:function(){return this.menuToCreate.id?"修改菜单":"添加菜单"}},created:function(){this.loadMenus()},methods:{loadMenus:function(){var e=this;this.loading=!0,h.listTree().then(function(t){e.menus=t.data.data,e.loading=!1})},handleSaveClick:function(){this.createOrUpdateMenu()},handleAddMenu:function(){this.formType="create",this.menuToCreate={}},handleEditMenu:function(e){this.menuToCreate=e,this.formType="update"},handleDeleteMenu:function(e){var t=this;h.delete(e).then(function(e){t.$message.success("删除成功！"),t.loadMenus()})},createOrUpdateMenu:function(){var e=this;this.menuToCreate.id?h.update(this.menuToCreate.id,this.menuToCreate).then(function(t){e.$message.success("更新成功！"),e.loadMenus()}):h.create(this.menuToCreate).then(function(t){e.$message.success("保存成功！"),e.loadMenus()}),this.handleAddMenu()},toggleExpand:function(){this.fieldExpand=!this.fieldExpand}}},T=b,v=Object(s["a"])(T,a,r,!1,null,"75b8042f",null);t["default"]=v.exports}}]);