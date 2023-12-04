"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[3604,9946,42,2617,7970,4286],{24754:function(e,t,a){a.d(t,{d:function(){return l},r:function(){return n}});const l=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],n=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},99660:function(e,t,a){a.d(t,{CN:function(){return n},T4:function(){return s},p6:function(){return i}});var l=a(23142);function n(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function s(e,t){return(0,l.uf)(e,{type:"currency",precision:t||0,currency:"USD"})}function i(e){return(0,l.p6)(new Date(e),"MM/dd/yyyy")}},13651:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(73396),n=a(44870),s=a(14532),i=(0,l.aZ)({__name:"card-menu",props:{items:{},visible:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(s.ZP),{items:t.items,visible:t.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const o=i;var d=o},98038:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});a(70560);var l=a(73396),n=a(87139),s=a(44870),i=a(53898),o=a(75495),d=a(99660),r=a(56463),u=a(91046);const c=e=>((0,l.dD)("data-v-07fa3588"),e=e(),(0,l.Cn)(),e),p=c((()=>(0,l._)("div",{class:"card-priority"},null,-1))),m={class:"card-content"},v={class:"card-subject dx-theme-text-color"},f={class:"card-data"},w={class:"priority"},y={class:"date dx-theme-text-color"},S={class:"card-assignee"},h={class:"company dx-theme-text-color"};var x=(0,l.aZ)({__name:"task-kanban-card",props:{task:{default:()=>null}},setup(e){const t=e,a=e=>e.split(" ").map((e=>e[0])).join(""),c=e=>{e.event.stopPropagation(),(0,i.Z)(`Edit '${t.task?.text}' card event`)},x=()=>{r.N.push("/planning-task-details")};return(e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"card dx-theme-text-color dx-theme-background-color",onClick:t[0]||(t[0]=e=>x())},[(0,l._)("div",{class:(0,n.C_)(["card-wrapper",`priority-${e.task.priority.toLowerCase()}`])},[p,(0,l.Wm)((0,s.SU)(o.J),{icon:"edit","styling-mode":"text",onClick:c}),(0,l._)("div",m,[(0,l._)("div",v,(0,n.zw)(e.task.text),1),(0,l._)("div",f,[(0,l._)("span",w,(0,n.zw)(e.task.priority),1),(0,l._)("span",y,(0,n.zw)((0,s.SU)(d.p6)(e.task.dueDate)),1)]),(0,l._)("div",S,[(0,l._)("span",h,(0,n.zw)(e.task.company),1),(0,l.Wm)(u["default"],{"data-letters":a(e.task.owner)},null,8,["data-letters"])])])],2)]))}}),k=a(40089);const g=(0,k.Z)(x,[["__scopeId","data-v-07fa3588"]]);var W=g},1776:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});a(70560);var l=a(73396),n=a(44870),s=a(56463),i=a(31463),o=a(48914),d=a(16751),r=(0,l.aZ)({__name:"task-list-gantt",props:{tasks:{default:()=>[]}},setup(e,{expose:t}){const a=e,r=(0,n.iH)(null),u=()=>{const e=new o.jsPDF;(0,d.AI)({jsPDFDocument:e,component:r.value.instance}).then((()=>{e.save("Tasks.pdf")}))},c=()=>{s.N.push("/planning-task-details")},p=e=>{e.event?.target?.closest(".dx-treelist-expanded, .dx-treelist-collapsed")||c()};return t({onExporting:u}),(e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(i.dt),{ref_key:"dxGanttCmp",ref:r,"task-list-width":500,"scale-type":"weeks",onTaskClick:p,height:700},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(i.o1),{"data-source":a.tasks,"start-expr":"startDate","end-expr":"dueDate","title-expr":"text"},null,8,["data-source"]),(0,l.Wm)((0,n.SU)(i.yP),{"data-field":"text",caption:"Subject",width:300}),(0,l.Wm)((0,n.SU)(i.yP),{"data-field":"startDate",caption:"Start Date","data-type":"date","sort-order":"asc"}),(0,l.Wm)((0,n.SU)(i.yP),{"data-field":"dueDate",caption:"Due Date","data-type":"date"}),(0,l.Wm)((0,n.SU)(i.sc),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(i.wy),{name:"undo"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"redo"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"separator"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"collapseAll"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"expandAll"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"separator"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"addTask"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"deleteTask"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"separator"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"zoomIn"}),(0,l.Wm)((0,n.SU)(i.wy),{name:"zoomOut"})])),_:1}),(0,l.Wm)((0,n.SU)(i.r),{"auto-update-parent-tasks":!0}),(0,l.Wm)((0,n.SU)(i.fO),{enabled:!0})])),_:1},512))}});const u=r;var c=u},18262:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});a(70560);var l=a(73396),n=a(44870),s=a(71030),i=(a(43579),a(15567)),o=a(48914),d=a(43315),r=a(16751),u=a(30808),c=a(56463),p=a(71793),m=a(24973),v=a(36451);const f={class:"form-custom-list-prop"};var w=(0,l.aZ)({__name:"task-list-grid",props:{dataSource:{default:()=>null}},setup(e,{expose:t}){const a=e,w=(0,n.iH)(null);let y=!0;const S=e=>{y&&"detailAdaptive"!==e.rowType&&c.N.push("/planning-task-details")},h=()=>{y=!y},x=()=>w.value?.instance.addRow(),k=(e,t)=>{t.setValue(e),t.component.refresh(),t.component.focus()},g=(e,t)=>{t.setValue(e),t.component.refresh()},W=()=>{const e=new o.jsPDF;(0,r.d3)({jsPDFDocument:e,component:w.value.instance}).then((()=>{e.save("Tasks.pdf")}))},_=()=>{const e=new m.Workbook,t=e.addWorksheet("Tasks");(0,u.d)({component:w.value.instance,worksheet:t,autoFilterEnabled:!0}).then((()=>{e.xlsx.writeBuffer().then((e=>{(0,d.p)(new Blob([e],{type:"application/octet-stream"}),"Tasks.xlsx")}))}))};return t({addRow:x,exportToPdf:W,exportToXlsx:_,showColumnChooser(){w.value.instance.showColumnChooser()},search(e){w.value.instance.searchByText(e)},refresh(){w.value.instance.refresh()}}),(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)((0,n.SU)(s.v4),{ref_key:"dxDataGridCmp",ref:w,id:"tasks-grid",class:"theme-dependent",height:"100%","data-source":e.dataSource,onRowClick:t[0]||(t[0]=e=>S(e)),onEditingStart:h,onEditCanceled:h,onSaved:h,"hover-state-enabled":!0,"column-auto-width":!0,"show-borders":!0},{cellPriority:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{"show-bar":!0,value:e?.data?.priority||""},null,8,["value"])])),editCellPriority:(0,l.w5)((({data:e})=>[(0,l.Wm)((0,n.SU)(i.L),{class:"edit-cell",value:e?.value,items:(0,n.SU)(p.Lu),onValueChanged:t=>k(t.value,e),onSelectionChanged:e.component.updateDimensions,"field-template":"field"},{field:(0,l.w5)((()=>[(0,l._)("div",f,[(0,l.Wm)(v["default"],{"show-bar":!0,"is-field":!0,value:e.value},null,8,["value"])])])),item:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{"show-bar":!0,value:e},null,8,["value"])])),_:2},1032,["value","items","onValueChanged","onSelectionChanged"])])),cellStatus:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{value:e.value},null,8,["value"])])),editCellStatus:(0,l.w5)((({data:e})=>[(0,l.Wm)((0,n.SU)(i.L),{class:"edit-cell",value:e.value,items:(0,n.SU)(p.Ww),onValueChanged:t=>g(t.value,e),onSelectionChanged:e.component.updateDimensions,"field-template":"field"},{field:(0,l.w5)((()=>[(0,l.Wm)(v["default"],{"is-field":!0,value:e.value},null,8,["value"])])),item:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{value:e},null,8,["value"])])),_:2},1032,["value","items","onValueChanged","onSelectionChanged"])])),default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.Gr),{enabled:!1}),(0,l.Wm)((0,n.SU)(s.yx),{mode:"virtual"}),(0,l.Wm)((0,n.SU)(s.o5),{"page-size":15}),(0,l.Wm)((0,n.SU)(s.RF),{visible:!0,"show-page-size-selector":!0}),(0,l.Wm)((0,n.SU)(s.fO),{mode:"row","allow-updating":!0}),(0,l.Wm)((0,n.SU)(s.DT),{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),(0,l.Wm)((0,n.SU)(s.b),{mode:"multiple"}),(0,l.Wm)((0,n.SU)(s.wh),{visible:!0}),(0,l.Wm)((0,n.SU)(s.yP),{"data-field":"text",caption:"Subject","hiding-priority":7},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.VD))])),_:1}),(0,l.Wm)((0,n.SU)(s.yP),{"data-field":"company",caption:"Company","hiding-priority":6},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.VD))])),_:1}),(0,l.Wm)((0,n.SU)(s.yP),{"data-field":"priority",caption:"Priority","hiding-priority":4,"cell-template":"cellPriority","edit-cell-template":"editCellPriority"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.Hp),{"data-source":(0,n.SU)(p.Lu)},null,8,["data-source"]),(0,l.Wm)((0,n.SU)(s.VD))])),_:1}),(0,l.Wm)((0,n.SU)(s.yP),{"data-field":"startDate",caption:"Start Date","data-type":"date","hiding-priority":2},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.VD))])),_:1}),(0,l.Wm)((0,n.SU)(s.yP),{"data-field":"dueDate",caption:"Due Date","data-type":"date","sort-order":"asc","hiding-priority":1},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.VD))])),_:1}),(0,l.Wm)((0,n.SU)(s.yP),{"data-field":"owner",caption:"Owner","hiding-priority":5},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.VD))])),_:1}),(0,l.Wm)((0,n.SU)(s.yP),{"data-field":"status",caption:"Status","hiding-priority":3,"min-width":120,"cell-template":"cellStatus","edit-cell-template":"editCellStatus"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.Hp),{"data-source":(0,n.SU)(p.Ww)},null,8,["data-source"]),(0,l.Wm)((0,n.SU)(s.VD))])),_:1})])),_:1},8,["data-source"]),(0,l.Wm)((0,n.SU)(s.Gr),{visible:a.isLoading,container:".content",position:{of:".content"}},null,8,["visible","position"])],64))}}),y=a(40089);const S=(0,y.Z)(w,[["__scopeId","data-v-06d39882"]]);var h=S},40914:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});a(70560);var l=a(73396),n=a(44870),s=a(87139),i=(a(43579),a(71793)),o=a(46530),d=a(45169),r=a(75495),u=a(13651),c=a(98038);const p={class:"list"},m={class:"list-title dx-theme-text-color"},v={class:"add-task"};var f=(0,l.aZ)({__name:"task-list-kanban",props:{tasks:{default:()=>[]}},emits:["add-task"],setup(e,{emit:t}){const a=e,f=t,w=i.Ww,y=[{text:"Add card"},{text:"Copy list"},{text:"Move list"}],S=e=>{const t=[];return w.forEach((a=>{const l=e.filter((e=>e.status===a));t.push({name:a,cards:l})})),t},h=(0,l.Fl)((()=>a.tasks?S(a.tasks):[]));function x(e){const{fromIndex:t,toIndex:a}=e,l=h.value.splice(t,1)[0];h.value.splice(a,0,l)}function k(e){const{fromData:t,fromIndex:a}=e;e.itemData=t.cards[a]}function g(e){const{fromData:t,toData:a,fromIndex:l,toIndex:n,itemData:s}=e;s.status=a.name,t.cards.splice(l,1),a.cards.splice(n,0,s)}const W=()=>{f("add-task")};return(e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(o.Z),{class:"scrollable-board","show-scrollbar":"always",direction:"both"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.rj),{class:"sortable-lists","item-orientation":"horizontal",handle:".list-title",onReorder:x},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.value,(e=>((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",m,[(0,l._)("span",null,(0,s.zw)(e.name),1),(0,l.Wm)(u["default"],{items:y})]),(0,l.Wm)((0,n.SU)(o.Z),{class:"scrollable-list",direction:"vertical","show-scrollbar":"always"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.rj),{class:"sortable-cards",group:"cardsGroup",data:e,onDragStart:k,onReorder:g,onAdd:g},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.cards,(e=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(c["default"],{class:"dx-card",task:e},null,8,["task"])])))),256))])),_:2},1032,["data"]),(0,l._)("div",v,[(0,l.Wm)((0,n.SU)(r.J),{icon:"plus",text:"Add Task","styling-mode":"text",width:"100%",onClick:W})])])),_:2},1024)])))),256))])),_:1})])),_:1}))}}),w=a(40089);const y=(0,w.Z)(f,[["__scopeId","data-v-64dfc24a"]]);var S=y},91046:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(73396);const n=["data-letters"];var s=(0,l.aZ)({__name:"user-avatar",props:{dataLetters:{default:()=>""}},setup(e){const t=e;return(e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:"circle","data-letters":t.dataLetters},null,8,n))}}),i=a(40089);const o=(0,i.Z)(s,[["__scopeId","data-v-8b56f8ac"]]);var d=o},50547:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(73396),n=a(44870),s=a(87139),i=a(33736),o=a(75495),d=a(19647),r=a(97997),u=(0,l.aZ)({__name:"form-popup",props:{isSaveDisabled:{type:Boolean,default:!1},title:{},visible:{type:Boolean,default:!1},width:{default:480},height:{default:"auto"},wrapperAttr:{default:()=>({})}},emits:["save","update:visible"],setup(e,{expose:t,emit:a}){const u=e,c=(0,n.iH)(),p=a,m=(0,n.iH)(u.visible);function v(e){const t={class:"",...e};return t.class+=" form-popup",t}const f=(0,n.iH)(v(u.wrapperAttr)),w=(0,n.iH)();(0,l.YP)((()=>u.visible),(e=>{m.value=e})),(0,l.YP)((()=>u.wrapperAttr),(e=>{f.value=v(e)}));const y=()=>{m.value=!1,c.value?.instance.reset(),p("update:visible",!1)},S=()=>{c.value?.instance.validate().isValid&&(y(),p("save"))},h=()=>{y()};function x(){c.value?.instance.reset(),y()}function k(){return c.value?.instance.validate().isValid}return t({isValid:k}),(e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(i.fB),{ref_key:"popup",ref:w,title:u.title,visible:m.value,"full-screen":(0,n.SU)(d.Br).isXSmall,width:e.width,"wrapper-attr":f.value,height:e.height,onHidden:t[2]||(t[2]=e=>x()),onOptionChanged:t[3]||(t[3]=()=>w.value?.instance?.repaint())},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(i.DW),{toolbar:"bottom",location:"center"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:(0,s.C_)({"form-popup-buttons-container":!0,"flex-buttons":e.width<=360})},[(0,l.Wm)((0,n.SU)(o.J),{text:"Cancel","styling-mode":"outlined",type:"normal",onClick:t[0]||(t[0]=e=>h())}),(0,l.Wm)((0,n.SU)(o.J),{text:"Save",disabled:e.isSaveDisabled,"styling-mode":"contained",type:"default",onClick:t[1]||(t[1]=e=>S())},null,8,["disabled"])],2)])),_:1}),(0,l.Wm)((0,n.SU)(r.G),{ref_key:"validationGroup",ref:c},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3},512)])),_:3},8,["title","visible","full-screen","width","wrapper-attr","height"]))}}),c=a(40089);const p=(0,c.Z)(u,[["__scopeId","data-v-d6ecbd32"]]);var m=p},91657:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var l=a(73396),n=a(44870),s=a(75495),i=a(76022),o=a(38816),d=a(59450),r=a(24754),u=a(50547),c=a(42900),p=a(78866),m=a(18262),v=a(40914),f=a(1776),w=a(71793),y=a(19647),S=a(53898);const h=e=>((0,l.dD)("data-v-06b852cd"),e=e(),(0,l.Cn)(),e),x={class:"view-wrapper list-page"},k=h((()=>(0,l._)("span",{class:"toolbar-header"},"Tasks",-1))),g=h((()=>(0,l._)("div",null,[(0,l._)("div",{class:"separator"})],-1))),W={key:0,class:"grid"},_={key:1,class:"kanban"},U={key:2,class:"gantt"};var b=(0,l.aZ)({__name:"planning-task-list",setup(e){const t=(0,n.iH)(!0),a=(0,n.iH)(r.d[0].text),h=(0,n.iH)("grid"),b=(0,n.iH)(),D=(0,n.iH)(),C=(0,n.iH)(),P=(0,n.iH)(w.nJ),H=(0,n.iH)([]),Z=(0,n.iH)([]),T=(0,n.iH)([]),B=(0,n.iH)(!1),I=()=>{B.value=!0},V=()=>D.value.showColumnChooser(),j=e=>D.value.search(e.component.option("text")),A=()=>{({grid:D,gantt:C,kanban:null})[h.value]?.value.exportToPdf()},M=()=>{D.value.exportToXlsx()},z=async()=>{t.value=!0;const e=await(0,d.wH)();Z.value=[...e],T.value=e,t.value=!1},G=async()=>{t.value=!0;const e=await(0,d.Ak)();H.value=e.filter((e=>!!e.status&&!!e.priority)),t.value=!1},E=e=>{const{itemData:t}=e;a.value=t.text;const l=r.d.find((e=>a.value===e.text))?.id;h.value=l||"grid","grid"!==l&&0===Z.value.length?z():"grid"===l&&0===H.value.length&&G()},F=()=>{D.value.refresh()},L=()=>{(0,S.Z)({message:`New task "${b.value?.getNewTaskData().text}" saved`,position:{at:"bottom center",my:"bottom center"}},"success"),B.value=!1};G();const Y={text:"Refresh",icon:"refresh",onClick:F,stylingMode:"text"},N={text:"Column Chooser",icon:"columnchooser",onClick:V,stylingMode:"text"},R={text:"Export to PDF",icon:"exportpdf",onClick:A,stylingMode:"text"},$={text:"Export to Exel",icon:"exportxlsx",onClick:M,stylingMode:"text"},J={placeholder:"Task Search",mode:"search",onInput:j};return(e,d)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",x,[(0,l.Wm)((0,n.SU)(o.sc),{class:"toolbar-details theme-dependent"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(o.wy),{location:"before"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)((0,n.SU)(o.wy),{location:"before"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(i.ZP),{width:(0,n.SU)(y.Br).isXSmall?220:"auto","show-nav-buttons":!1,"scroll-by-content":!0,"selected-index":0,items:(0,n.SU)(r.d),onItemClick:E},null,8,["width","items"])])),_:1}),(0,l.Wm)((0,n.SU)(o.wy),{location:"after","locate-in-menu":"auto","css-class":"add-grid-row"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)((0,n.SU)(s.Z),{icon:"plus",text:"Add Task",type:"default","styling-mode":"contained",onClick:I})])])),_:1}),(0,l.Wm)((0,n.SU)(o.wy),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:Y}),(0,l.Wm)((0,n.SU)(o.wy),{disabled:"grid"!==h.value,location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:N},null,8,["disabled"]),(0,l.Wm)((0,n.SU)(o.wy),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)((0,n.SU)(o.wy),{disabled:!["grid","gantt"].includes(h.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:R},null,8,["disabled"]),(0,l.Wm)((0,n.SU)(o.wy),{disabled:!["grid"].includes(h.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:$},null,8,["disabled"]),(0,l.Wm)((0,n.SU)(o.wy),{disabled:!["grid"].includes(h.value),location:"after","locate-in-menu":"auto",widget:"dxTextBox",options:J},null,8,["disabled"])])),_:1}),(0,l.Wm)((0,n.SU)(c.ZP),{visible:t.value,"show-pane":!1,width:"auto"},null,8,["visible"]),H.value.length?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,n.SU)(r.d)[0].text===a.value?((0,l.wg)(),(0,l.iD)("div",W,[(0,l.Wm)(m["default"],{ref_key:"tasksGridCmp",ref:D,"data-source":H.value},null,8,["data-source"])])):(0,n.SU)(r.d)[1].text===a.value?((0,l.wg)(),(0,l.iD)("div",_,[(0,l.Wm)(v["default"],{tasks:Z.value,onAddTask:I},null,8,["tasks"])])):(0,n.SU)(r.d)[2].text===a.value?((0,l.wg)(),(0,l.iD)("div",U,[(0,l.Wm)(f["default"],{ref_key:"tasksGanttCmp",ref:C,tasks:T.value},null,8,["tasks"])])):(0,l.kq)("",!0)],64)):(0,l.kq)("",!0)]),(0,l.Wm)(u.Z,{title:"New Task",visible:B.value,"onUpdate:visible":d[0]||(d[0]=e=>B.value=e),onSave:L},{default:(0,l.w5)((()=>[(0,l.Wm)(p["default"],{ref_key:"taskFormCmp",ref:b,"content-by-screen":{xs:(0,n.SU)(y.Br).isSmallMobileMedia?1:2,sm:2},"is-create-mode":!0,data:P.value},null,8,["content-by-screen","data"])])),_:1},8,["visible"])],64))}}),D=a(40089);const C=(0,D.Z)(b,[["__scopeId","data-v-06b852cd"]]);var P=C}}]);