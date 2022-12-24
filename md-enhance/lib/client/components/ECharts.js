import{useEventListener,useDebounceFn}from"@vueuse/core";import{h,defineComponent,ref,onMounted,onBeforeUnmount}from"vue";import{IconBase,atou}from"vuepress-shared/client";import"../styles/echarts.scss";const LoadingIcon=()=>h(IconBase,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(e=>h("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:e}),h("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:e})]))),parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const o=ref();let n;const i=ref(!0);return onMounted(()=>{Promise.all([import("echarts"),new Promise(t=>setTimeout(t,MARKDOWN_ENHANCE_DELAY))]).then(([t])=>{const r=parseEChartsConfig(atou(e.config),e.type);n=t.init(o.value),n.showLoading(),n.setOption(r),n.hideLoading(),i.value=!1}),useEventListener("resize",useDebounceFn(()=>n==null?void 0:n.resize(),100))}),onBeforeUnmount(()=>{n==null||n.dispose()}),()=>[e.title?h("div",{class:"echarts-title"},decodeURIComponent(e.title)):null,i.value?h("div",{class:"echarts-loading-wrapper"},h(LoadingIcon)):null,h("div",{ref:o,class:"echarts-wrapper",id:e.id})]}});export{ECharts as default};
//# sourceMappingURL=ECharts.js.map