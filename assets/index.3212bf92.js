import{d as e,r as t,a as o,o as s,c as n,b as a,F as c,e as r,f as i,g as m,t as p,h as l}from"./vendor.5696cde0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const c=new URL(e,s);if(self[t].moduleMap[c])return o(self[t].moduleMap[c]);const r=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){a(new Error(`Failed to import: ${e}`)),n(i)},onload(){o(self[t].moduleMap[c]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/cloudemoticon-web/assets/");var u=e({setup(){const e=t(),a=o({state:"loading",emoticons:[]});return s((async()=>{const e=await fetch("https://raw.githubusercontent.com/cloud-emoticon/store-repos/master/kt-cia.json"),t=await e.json();a.emoticons=t.categories.flatMap((e=>e.entries)).map((e=>e.emoticon))})),{iptCopy:e,state:n((()=>a.state)),emoticons:n((()=>a.emoticons)),copyItem:function(t){const o=t.currentTarget;e.value.value=o.textContent.trim(),e.value.select(),document.execCommand("copy")}}}});const d={class:"app"},f={ref:"iptCopy",class:"ipt-copy"};u.render=function(e,t,o,s,n,l){return m(),a("div",d,[(m(!0),a(c,null,r(e.emoticons,((o,s)=>(m(),a("div",{key:s,class:"emoticon-item",onClick:t[1]||(t[1]=t=>e.copyItem(t))},p(o),1)))),128)),i("input",f,null,512)])},l(u).mount("#app");
