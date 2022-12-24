import{h as t,defineComponent as C,ref as d,onMounted as b,watch as T,onBeforeUnmount as x,nextTick as h}from"vue";import{IconBase as v,atou as g}from"vuepress-shared/client";import"../styles/mermaid.scss";const M=()=>t(v,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(e=>t("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[t("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:e}),t("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:e})]))),k=e=>({dark:e,background:e?"#1e1e1e":"#fff",primaryColor:e?"#389d70":"#4abf8a",primaryBorderColor:e?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:e?"#fff":"#000",secondaryTextColor:e?"#ddd":"#333",tertiaryColor:e?"#282828":"#efeef4",tertiaryBorderColor:e?"#bbb":"#242424",tertiaryTextColor:e?"#ddd":"#333",noteBkgColor:e?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:e?"#f6d365":"#333",lineColor:e?"#d3d3d3":"#333",textColor:e?"#fff":"#242424",mainBkg:e?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:e?"#389d70":"#4abf8a",nodeTextColor:e?"#fff":"#242424",signalTextColor:e?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:e?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var w=C({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(e){const r=d(""),c=d(),i=d(!1);let l=null;return b(()=>{const n=document.querySelector("html"),u=g(e.code),s=()=>n.classList.contains("dark")||n.getAttribute("data-theme")==="dark";i.value=s(),Promise.all([import("mermaid/dist/mermaid.esm.min.mjs"),import("@mermaid-js/mermaid-mindmap/dist/mermaid-mindmap.esm.min.mjs"),new Promise(o=>setTimeout(o,MARKDOWN_ENHANCE_DELAY))]).then(async([{default:o},{default:m}])=>{try{await o.registerExternalDiagrams([m])}catch{}const f=async()=>{const a=document.createElement("div");a.style.position="relative",a.style.top="-9999px";const p=y=>{r.value=y,document.body.removeChild(a)};o.initialize({theme:"base",themeVariables:k(i.value),flowchart:{useMaxWidth:!1},sequence:{useMaxWidth:!1},journey:{useMaxWidth:!1},gantt:{useMaxWidth:!1},er:{useMaxWidth:!1},pie:{useMaxWidth:!1},...MERMAID_OPTIONS,startOnLoad:!1}),r.value="",document.body.appendChild(a),await h(),await o.renderAsync(e.id,u,p,a)};await f(),l=new MutationObserver(()=>{i.value=s()}),l.observe(n,{attributeFilter:["class","data-theme"],attributes:!0}),T(i,f)})}),x(()=>{l==null||l.disconnect()}),()=>t("div",{ref:c,class:["mermaid-wrapper",{loading:!r.value}]},r.value?t("div",{class:"content",innerHTML:r.value}):t(M))}});export{w as default};
//# sourceMappingURL=Mermaid.js.map
