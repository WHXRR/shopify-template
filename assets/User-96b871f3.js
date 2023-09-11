import{d as U,r as m,E as q,a as l,o as t,j as b,c as s,w as n,F as B,s as D,b as p,G as r,H as v,f as I,_ as g,m as E,k as G,l as T,__tla as H}from"./index-3bf8f13e.js";let z,J=Promise.all([(()=>{try{return H}catch{}})()]).then(async()=>{const V={class:"custom-form"},j={key:0,class:"form-btns"},C=U({__name:"CustomForm",props:{modelValue:{type:Object,required:!0},formItems:{type:Object,default:()=>{},required:!0},colStyle:{type:Object,default:()=>({xs:24,sm:12,md:12,lg:8,xl:6,xxl:4})},formLabelCol:{type:Object,default:()=>({sm:{span:5},xxl:{span:8}})},showFormBtn:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(u,{emit:c}){const a=m({...u.modelValue});return q(()=>a,i=>{c("update:modelValue",i.value)},{deep:!0}),(i,_)=>{const x=l("a-input"),f=l("a-select"),d=l("a-radio-group"),y=l("a-range-picker"),k=l("a-form-item"),O=l("a-col"),S=l("a-row"),A=l("a-form"),h=l("a-button");return t(),b("div",V,[s(A,{name:"basic",autocomplete:"off"},{default:n(()=>[s(S,null,{default:n(()=>[(t(!0),b(B,null,D(u.formItems,(e,L)=>(t(),p(O,r(u.colStyle,{key:L}),{default:n(()=>[s(k,{label:e.label,name:e.name,rules:e.rules,labelCol:u.formLabelCol},{default:n(()=>[e.type==="input"?(t(),p(x,r({key:0,size:"small"},e.options,{value:a.value[e.filed],"onUpdate:value":o=>a.value[e.filed]=o}),null,16,["value","onUpdate:value"])):v("",!0),e.type==="select"?(t(),p(f,r({key:1,size:"small"},e.options,{value:a.value[e.filed],"onUpdate:value":o=>a.value[e.filed]=o}),null,16,["value","onUpdate:value"])):v("",!0),e.type==="radio"?(t(),p(d,r({key:2,size:"small"},e.options,{value:a.value[e.filed],"onUpdate:value":o=>a.value[e.filed]=o}),null,16,["value","onUpdate:value"])):v("",!0),e.type==="datePicker"?(t(),p(y,r({key:3,size:"small"},e.options,{value:a.value[e.filed],"onUpdate:value":o=>a.value[e.filed]=o}),null,16,["value","onUpdate:value"])):v("",!0)]),_:2},1032,["label","name","rules","labelCol"])]),_:2},1040))),128))]),_:1})]),_:1}),u.showFormBtn?(t(),b("div",j,[s(h,{size:"small",type:"primary",style:{"margin-right":"10px"}},{default:n(()=>[I("\u63D0\u4EA4")]),_:1}),s(h,{size:"small",type:"primary",ghost:""},{default:n(()=>[I("\u91CD\u7F6E")]),_:1})])):v("",!0)])}}}),w=g(C,[["__scopeId","data-v-3df1d609"]]),P={class:"user-list box-module-shadow"},F=U({__name:"User",setup(u){const c=m([]);setTimeout(()=>{c.value=[{value:"jack",label:"Jack"},{value:"disabled",label:"Disabled",disabled:!0}]},1e3);const a=m({formItems:[{filed:"username",type:"input",name:"username",label:"\u7528\u6237\u540D",options:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{filed:"role",type:"select",name:"role",label:"\u89D2\u8272",options:{placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",options:c}},{filed:"favorite",type:"radio",name:"favorite",label:"\u6C34\u679C",options:{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"}]}},{filed:"date",type:"datePicker",name:"date",label:"\u65E5\u671F"}]}),i=m({username:"",role:"",favorite:"",date:[]}),_=m([]);T.getUserList({offset:0,size:10}).then(f=>{const{list:d,totalCount:y}=f.data;_.value=d});const x=[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u771F\u5B9E\u59D3\u540D",dataIndex:"realname"},{title:"\u624B\u673A\u53F7",dataIndex:"cellphone"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createAt"}];return(f,d)=>{const y=l("a-table");return t(),b("div",null,[s(E(w),r(a.value,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=k=>i.value=k)}),null,16,["modelValue"]),G("div",P,[s(y,{columns:x,dataSource:_.value},null,8,["dataSource"])])])}}});z=g(F,[["__scopeId","data-v-551907d6"]])});export{J as __tla,z as default};
