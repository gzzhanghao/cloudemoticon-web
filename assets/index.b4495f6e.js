import{d as e,r as t,a as o,o as n,c as a,b as s,F as c,e as r,f as l,g as i,t as m,h as u}from"./vendor.5696cde0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const c=new URL(e,n);if(self[t].moduleMap[c])return o(self[t].moduleMap[c]);const r=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){s(new Error(`Failed to import: ${e}`)),a(l)},onload(){o(self[t].moduleMap[c]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/cloudemoticon-web/assets/");var p=e({setup(){const e=t(),s=o({state:"loading",emoticons:[]});return n((async()=>{const e=await fetch("https://raw.githubusercontent.com/bnookala/kao.moji/master/data/kaomoji.json"),t=await e.json();s.emoticons=Object.values(t).flatMap((e=>e))})),{iptCopy:e,state:a((()=>s.state)),emoticons:a((()=>s.emoticons)),copyItem:function(t){var o;if(!e.value)return;const n=t.currentTarget;if(!n.textContent)return;e.value.value=n.textContent.trim(),e.value.select(),document.execCommand("copy");const a=document.activeElement;null==a||a.blur(),null==(o=window.getSelection())||o.removeAllRanges()}}}});const d={class:"app"},f={ref:"iptCopy",class:"ipt-copy"};p.render=function(e,t,o,n,a,u){return i(),s("div",d,[(i(!0),s(c,null,r(e.emoticons,((o,n)=>(i(),s("div",{key:n,class:"emoticon-item",onClick:t[1]||(t[1]=t=>e.copyItem(t))},m(o),1)))),128)),l("input",f,null,512)])},u(p).mount("#app");