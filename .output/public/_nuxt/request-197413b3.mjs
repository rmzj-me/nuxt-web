const e="",n="https://api_pc.rmzj.me";function o(r){var t="";for(const s in r)t+=`${s}=${r[s]}&`;return t}const a=async function(r){var t=n+r.url;return r.params&&(t+="?"+o(r.params)),await $fetch(t,{headers:{Authorization:e},method:"GET"})};export{a as g};