import{d as e,c as o,o as t,a as r}from"./vendor.99043973.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,s)=>{const a=new URL(e,r);if(self[o].moduleMap[a])return t(self[o].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${o}.moduleMap['${a}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){s(new Error(`Failed to import: ${e}`)),n(m)},onload(){t(self[o].moduleMap[a]),n(m)}});document.head.appendChild(m)})),self[o].moduleMap={}}}("/assets/");var n=e({});n.render=function(e,r,n,s,a,c){return t(),o("h1",null,"It works!")},r(n).mount("#app");
