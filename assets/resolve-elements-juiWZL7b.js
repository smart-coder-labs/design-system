function f(r,t,s){if(r instanceof EventTarget)return[r];if(typeof r=="string"){const o=document.querySelectorAll(r);return o?Array.from(o):[]}return Array.from(r)}export{f as r};
