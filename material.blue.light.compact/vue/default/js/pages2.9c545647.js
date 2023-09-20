"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[5469,7204,9946],{24754:function(e,t,a){a.d(t,{d:function(){return l},r:function(){return n}});const l=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],n=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},7153:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var l=a(73396),n=a(87139),s=a(69147);const i={class:"card-wrapper"},o={class:"header"},r={key:0,class:"title"},u={key:0,class:"content"};var d=(0,l.aZ)({__name:"card-analytics",props:{title:{default:""},contentClass:{default:""},showData:{type:Boolean,default:!0},isMenuVisible:{type:Boolean,default:!0}},setup(e){const t=e,a=[{text:"Configure"},{text:"Remove"}];return(d,c)=>((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",{class:(0,n.C_)(["card",t.contentClass])},[(0,l._)("div",o,[(0,l.Wm)(s["default"],{visible:t.isMenuVisible,class:"overflow-menu",items:a},null,8,["visible"]),t.title?((0,l.wg)(),(0,l.iD)("div",r,(0,n.zw)(t.title),1)):(0,l.kq)("",!0),(0,l.WI)(d.$slots,"filter")]),e.showData?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.WI)(d.$slots,"default")])):(0,l.kq)("",!0)],2)]))}}),c=a(40089);const m=(0,c.Z)(d,[["__scopeId","data-v-17e29cf8"]]);var v=m},69147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=a(73396),n=a(44870),s=a(83835),i=a.n(s),o=(0,l.aZ)({__name:"card-menu",props:{items:null,visible:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(i()),{items:t.items,visible:t.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const r=o;var u=r},785:function(e,t,a){a.d(t,{Z:function(){return f}});var l=a(73396),n=a(44870),s=a(6224),i=a.n(s),o=a(68389),r=a(70369),u=a(24754),d=a(19647);const c={class:"toolbar-header"},m=(0,l._)("div",null,[(0,l._)("div",{class:"separator"})],-1);var v=(0,l.aZ)({__name:"toolbar-analytics",props:{showTabs:{type:Boolean,default:!1}},emits:["tab-change"],setup(e,{emit:t}){const a=e,[s,v]=u.r[4].value.split("/"),p=e=>{const[a,l]=e.itemData.value.split("/");t("tab-change",[a,l])};(0,l.bv)((()=>{t("tab-change",[s,v])}));const f={text:"Refresh",icon:"refresh",stylingMode:"text"},g={icon:"export",text:"Export",stylingMode:"text"};return(e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(o.DxToolbar),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(o.DxItem),{location:"before"},{default:(0,l.w5)((()=>[(0,l._)("span",c,[(0,l.WI)(e.$slots,"default")])])),_:3}),a.showTabs?((0,l.wg)(),(0,l.j4)((0,n.SU)(o.DxItem),{key:0,location:"before"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(r.DxTabs),{width:(0,n.SU)(d.Br).isXSmall?150:"auto","show-nav-buttons":!1,"scroll-by-content":!0,"selected-item-keys":[5],"key-expr":"key",items:(0,n.SU)(u.r),onItemClick:t[0]||(t[0]=e=>p(e))},null,8,["width","items"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)((0,n.SU)(o.DxItem),{location:"after","locate-in-menu":"auto","css-class":"add-card"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)((0,n.SU)(i()),{icon:"plus",text:"Add Card",type:"default","styling-mode":"contained"})])])),_:1}),(0,l.Wm)((0,n.SU)(o.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:f}),(0,l.Wm)((0,n.SU)(o.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[m])),_:1}),(0,l.Wm)((0,n.SU)(o.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:g})])),_:3}))}});const p=v;var f=p},43274:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var l=a(73396),n=a(44870),s=a(45903),i=a(26898),o=a(23142),r=a(59450),u=a(24754),d=a(785),c=a(30850),m=a(7153),v=(0,l.aZ)({__name:"sales-range-card",props:{data:null},emits:["range-changed"],setup(e,{emit:t}){const a=e;return(e,s)=>((0,l.wg)(),(0,l.j4)(m["default"],{"content-class":"sales-range","selected-range-update-mode":"reset","is-menu-visible":!1},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.DxRangeSelector),{"data-source":a.data,"onUpdate:value":s[0]||(s[0]=e=>t("range-changed",e))},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.DxScale),{"minor-tick-interval":"day","tick-interval":"month","value-type":"datetime"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.DxMinorTick),{visible:!1}),(0,l.Wm)((0,n.SU)(c.DxMarker),{visible:!1}),(0,l.Wm)((0,n.SU)(c.DxLabel),{format:"MMM yyyy"})])),_:1}),(0,l.Wm)((0,n.SU)(c.DxSize),{height:90}),(0,l.Wm)((0,n.SU)(c.DxLoadingIndicator),{show:!1}),(0,l.Wm)((0,n.SU)(c.DxChart),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.DxSeries),{type:"line","argument-field":"date","value-field":"total"})])),_:1})])),_:1},8,["data-source"])])),_:1}))}}),p=a(40089);const f=(0,p.Z)(v,[["__scopeId","data-v-14f8f329"]]);var g=f,x=a(37081),w=a(75699),S=(0,l.aZ)({__name:"sales-by-range-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,l.wg)(),(0,l.j4)(m["default"],{title:"Product Sale by Range"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(x.DxPieChart),{class:"sales-pie","data-source":t.data,type:"doughnut",diameter:.8,"inner-radius":.6},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(x.DxSeries),{"argument-field":"name","value-field":"value"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(x.DxLabel),{"background-color":"none","radial-offset":-20,visible:!0,"customize-text":e=>e.percentText},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(x.DxFont),{color:"#757575",size:15})])),_:1},8,["customize-text"])])),_:1}),(0,l.Wm)((0,n.SU)(x.DxLegend),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(x.DxMargin),{top:70})])),_:1}),(0,l.Wm)((0,n.SU)(x.DxSize),{height:270}),(0,l.Wm)((0,n.SU)(x.DxLegend),{visible:!1})])),_:1},8,["data-source","diameter","inner-radius"]),(0,l.Wm)((0,n.SU)(w.DxChart),{class:"sales-bars","data-source":t.data,rotated:!0},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(w.DxCommonAxisSettings),{visible:!1},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(w.DxTick),{visible:!1})])),_:1}),(0,l.Wm)((0,n.SU)(w.DxLegend),{visible:!1}),(0,l.Wm)((0,n.SU)(w.DxCommonSeriesSettings),{"argument-field":"name","value-field":"value",type:"bar","ignore-empty-points":!0}),(0,l.Wm)((0,n.SU)(w.DxSeriesTemplate),{"name-field":"name"}),(0,l.Wm)((0,n.SU)(w.DxValueAxis),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(w.DxLabel),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(w.DxFormat),{type:"largeNumber"})])),_:1})])),_:1})])),_:1},8,["data-source"])])),_:1}))}});const _=(0,p.Z)(S,[["__scopeId","data-v-5010c27f"]]);var y=_,D=a(83835);const W={class:"sales-filter"};var b=(0,l.aZ)({__name:"sales-performance-card",props:{visualRange:null,groupByPeriods:null,data:null},emits:["performance-period-changed"],setup(e,{emit:t}){const a=e;return(s,i)=>((0,l.wg)(),(0,l.j4)(m["default"],{title:"Sales Performance","content-class":"sales"},{filter:(0,l.w5)((()=>[(0,l._)("div",W,[(0,l.Wm)((0,n.SU)(D.DxDropDownButton),{"styling-mode":"text","use-select-mode":!0,items:a.groupByPeriods,"selected-item-key":a.groupByPeriods[1],onSelectionChanged:i[0]||(i[0]=e=>t("performance-period-changed",e))},null,8,["items","selected-item-key"])])])),default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(w.DxChart),{"data-source":e.data},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(w.DxArgumentAxis),{"visual-range":a.visualRange},null,8,["visual-range"]),(0,l.Wm)((0,n.SU)(w.DxTooltip),{enabled:!0,"customize-tooltip":e=>({text:e})},null,8,["customize-tooltip"]),(0,l.Wm)((0,n.SU)(w.DxSeriesTemplate),{"name-field":"category"}),(0,l.Wm)((0,n.SU)(w.DxCommonSeriesSettings),{"argument-field":"date","value-field":"total","hover-mode":"includePoints"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(w.DxPoint),{"hover-mode":"allArgumentPoints"})])),_:1}),(0,l.Wm)((0,n.SU)(w.DxArgumentAxis),{"argument-type":"datetime","value-margins-enabled":!1}),(0,l.Wm)((0,n.SU)(w.DxLegend),{visible:!1}),(0,l.Wm)((0,n.SU)(w.DxSize),{height:270})])),_:1},8,["data-source"])])),_:1}))}});const U=(0,p.Z)(b,[["__scopeId","data-v-8ede684e"]]);var h=U;const k={class:"view-wrapper"},C=(0,l.Uk)("Sales Report"),I={class:"cards"};var M=(0,l.aZ)({__name:"analytics-sales-report",setup(e){const t=(0,n.iH)(null),a=(0,n.iH)(null),c=(0,n.iH)(null),m=(0,n.iH)([]),v=["Day","Month"],p=(0,n.iH)(!0),f=async e=>{p.value=!0,a.value=await(0,r.gm)(e.item.toLowerCase()),p.value=!1},x=async e=>{m.value=e,p.value=!0,c.value=await(0,r.ot)(...e.map((e=>(0,o.p6)(e,"yyyy-MM-dd")))),p.value=!1},w=async e=>{p.value=!0;const[l,n]=u.r[4].value.split("/");await Promise.all([(0,r.X8)(l,n).then((e=>{t.value=e})),(0,r.gm)(e).then((e=>{a.value=e}))]).then((()=>{p.value=!1}))};return(0,l.bv)((()=>{w(v[1].toLowerCase())})),(e,o)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)((0,n.SU)(s.DxScrollView),{class:"view-wrapper-scroll"},{default:(0,l.w5)((()=>[(0,l._)("div",k,[(0,l.Wm)(d.Z,null,{default:(0,l.w5)((()=>[C])),_:1}),(0,l._)("div",I,[(0,l.Wm)(g,{data:t.value,class:"sales-range-card",onRangeChanged:x},null,8,["data"]),(0,l.Wm)(y,{data:c.value},null,8,["data"]),(0,l.Wm)(h,{data:a.value,"group-by-periods":v,"visual-range":m.value,onPerformancePeriodChanged:f},null,8,["data","visual-range"])])])])),_:1}),(0,l.Wm)((0,n.SU)(i.DxLoadPanel),{container:".view-wrapper",position:{of:".dx-drawer-content"},visible:p.value,"show-pane":!0},null,8,["position","visible"])],64))}});const Z=(0,p.Z)(M,[["__scopeId","data-v-bbe11e1a"]]);var P=Z}}]);