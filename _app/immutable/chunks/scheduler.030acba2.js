function k(){}const D=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function F(){return Object.create(null)}function E(t){t.forEach(j)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function U(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function A(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t,n,e){t.$$.on_destroy.push(q(n,e))}function C(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function G(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|r[s];return a}return n.dirty|r}return n.dirty}function H(t,n,e,o,r,a){if(r){const _=m(n,e,o,a);t.p(_,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let f;function d(t){f=t}function b(){if(!f)throw new Error("Function called outside component initialization");return f}function J(t){b().$$.on_mount.push(t)}function K(t){b().$$.after_update.push(t)}function L(t){b().$$.on_destroy.push(t)}const l=[],g=[];let u=[];const y=[],x=Promise.resolve();let p=!1;function v(){p||(p=!0,x.then(z))}function N(){return v(),x}function O(t){u.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<l.length;){const n=l[c];c++,d(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(d(null),l.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(l.length);for(;y.length;)y.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{K as a,g as b,C as c,G as d,B as e,L as f,I as g,U as h,D as i,O as j,P as k,F as l,z as m,k as n,J as o,A as p,Q as q,E as r,S as s,N as t,H as u,f as v,d as w,j as x,l as y,v as z};