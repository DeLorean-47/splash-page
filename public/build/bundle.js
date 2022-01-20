!function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function s(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(s)}function a(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function c(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),g=u?e=>requestAnimationFrame(e):e;const f=new Set;function m(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&g(m)}function p(e,t){e.appendChild(t)}function h(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function b(e){const t=k("style");return function(e,t){p(e.head||e,t)}(h(e),t),t.sheet}function v(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function $(){return w(" ")}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function T(e,t,n,s){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}const L=new Map;let S,H=0;function C(e,t,n,s,o,r,a,l=0){const i=16.666/s;let c="{\n";for(let e=0;e<=1;e+=i){const s=t+(n-t)*r(e);c+=100*e+`%{${a(s,1-s)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${l}`,g=h(e),{stylesheet:f,rules:m}=L.get(g)||function(e,t){const n={stylesheet:b(t),rules:{}};return L.set(e,n),n}(g,e);m[d]||(m[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${d} ${s}ms linear ${o}ms 1 both`,H+=1,d}function E(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-s.length;o&&(e.style.animation=s.join(", "),H-=o,H||g((()=>{H||(L.forEach((e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}})),L.clear())})))}function M(e){S=e}function D(e){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(e)}const A=[],O=[],j=[],N=[],B=Promise.resolve();let R=!1;function P(e){j.push(e)}const I=new Set;let U,z=0;function F(){const e=S;do{for(;z<A.length;){const e=A[z];z++,M(e),G(e.$$)}for(M(null),A.length=0,z=0;O.length;)O.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];I.has(t)||(I.add(t),t())}j.length=0}while(A.length);for(;N.length;)N.pop()();R=!1,I.clear(),M(e)}function G(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function q(e,t,n){e.dispatchEvent(function(e,t,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,!1,t),s}(`${t?"intro":"outro"}${n}`))}const V=new Set;let K;function W(){K={r:0,c:[],p:K}}function X(){K.r||r(K.c),K=K.p}function Y(e,t){e&&e.i&&(V.delete(e),e.i(t))}function J(e,t,n,s){if(e&&e.o){if(V.has(e))return;V.add(e),K.c.push((()=>{V.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}const Q={duration:0};function Z(n,s,o,l){let i=s(n,o),c=l?0:1,u=null,p=null,h=null;function b(){h&&E(n,h)}function v(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function y(s){const{delay:o=0,duration:a=300,easing:l=t,tick:y=e,css:k}=i||Q,w={start:d()+o,b:s};s||(w.group=K,K.r+=1),u||p?p=w:(k&&(b(),h=C(n,c,s,a,o,l,k)),s&&y(0,1),u=v(w,a),P((()=>q(n,s,"start"))),function(e){let t;0===f.size&&g(m),new Promise((n=>{f.add(t={c:e,f:n})}))}((e=>{if(p&&e>p.start&&(u=v(p,a),p=null,q(n,u.b,"start"),k&&(b(),h=C(n,c,u.b,u.duration,0,l,i.css))),u)if(e>=u.end)y(c=u.b,1-c),q(n,u.b,"end"),p||(u.b?b():--u.group.r||r(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;c=u.a+u.d*l(t/u.duration),y(c,1-c)}return!(!u&&!p)})))}return{run(e){a(i)?(U||(U=Promise.resolve(),U.then((()=>{U=null}))),U).then((()=>{i=i(),y(e)})):y(e)},end(){b(),u=p=null}}}function ee(e,t,n,o){const{fragment:l,on_mount:i,on_destroy:c,after_update:u}=e.$$;l&&l.m(t,n),o||P((()=>{const t=i.map(s).filter(a);c?c.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(P)}function te(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){-1===e.$$.dirty[0]&&(A.push(e),R||(R=!0,B.then(F)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(t,n,s,a,l,i,c,u=[-1]){const d=S;M(t);const g=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(g.root);let f=!1;if(g.ctx=s?s(t,n.props||{},((e,n,...s)=>{const o=s.length?s[0]:n;return g.ctx&&l(g.ctx[e],g.ctx[e]=o)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](o),f&&ne(t,e)),n})):[],g.update(),f=!0,r(g.before_update),g.fragment=!!a&&a(g.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);g.fragment&&g.fragment.l(e),e.forEach(y)}else g.fragment&&g.fragment.c();n.intro&&Y(t.$$.fragment),ee(t,n.target,n.anchor,n.customElement),F()}M(d)}class oe{$destroy(){te(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function re(e){const t=e-1;return t*t*t+1}function ae(e,{delay:t=0,duration:n=400,easing:s=re,x:o=0,y:r=0,opacity:a=0}={}){const l=getComputedStyle(e),i=+l.opacity,c="none"===l.transform?"":l.transform,u=i*(1-a);return{delay:t,duration:n,easing:s,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*o}px, ${(1-e)*r}px);\n\t\t\topacity: ${i-u*t}`}}function le(t){let n,s,o,r,a,l,i,u,d,g,f,m,h,b,L,S,H,C,E,M,D,A,O,j,N;return{c(){n=k("div"),s=k("div"),o=k("div"),r=k("img"),l=$(),i=k("div"),u=k("h2"),d=w(t[0]),g=$(),f=k("p"),f.textContent="Software Engineer",m=$(),h=k("p"),b=w(t[1]),L=$(),S=k("div"),H=k("a"),C=k("img"),D=$(),A=k("a"),O=k("img"),x(r,"class","picture svelte-1r723t6"),c(r.src,a=t[2])||x(r,"src",a),x(r,"alt",t[3]),T(r,"width","100%"),x(r,"height","auto"),x(o,"class","imgWrapper svelte-1r723t6"),T(o,"background-color",t[4]),x(f,"class","title"),x(h,"class","bio svelte-1r723t6"),x(C,"class","logo svelte-1r723t6"),c(C.src,E="../public/assets/github_logo.png")||x(C,"src","../public/assets/github_logo.png"),x(C,"alt",M=t[0]+" github link"),x(H,"href",t[5]),x(H,"target","_blank"),x(O,"class","logo svelte-1r723t6"),c(O.src,j="../public/assets/linkedin_logo.png")||x(O,"src","../public/assets/linkedin_logo.png"),x(O,"alt",N=t[0]+" linkedin link"),x(A,"href",t[6]),x(A,"target","_blank"),x(S,"class","memberLogos svelte-1r723t6"),x(i,"class","container"),x(s,"class","card svelte-1r723t6"),x(n,"class","column svelte-1r723t6")},m(e,t){v(e,n,t),p(n,s),p(s,o),p(o,r),p(s,l),p(s,i),p(i,u),p(u,d),p(i,g),p(i,f),p(i,m),p(i,h),p(h,b),p(i,L),p(i,S),p(S,H),p(H,C),p(S,D),p(S,A),p(A,O)},p(e,[t]){4&t&&!c(r.src,a=e[2])&&x(r,"src",a),8&t&&x(r,"alt",e[3]),16&t&&T(o,"background-color",e[4]),1&t&&_(d,e[0]),2&t&&_(b,e[1]),1&t&&M!==(M=e[0]+" github link")&&x(C,"alt",M),1&t&&N!==(N=e[0]+" linkedin link")&&x(O,"alt",N)},i:e,o:e,d(e){e&&y(n)}}}function ie(e,t,n){let{name:s}=t,{bio:o}=t,{ghHandle:r}=t,{liHandle:a}=t,{imgSrc:l}=t,{alt:i}=t,{imgColor:c}=t;const u=`https://github.com/${r}`,d=`https://linkedin.com/in/${a}`;return e.$$set=e=>{"name"in e&&n(0,s=e.name),"bio"in e&&n(1,o=e.bio),"ghHandle"in e&&n(7,r=e.ghHandle),"liHandle"in e&&n(8,a=e.liHandle),"imgSrc"in e&&n(2,l=e.imgSrc),"alt"in e&&n(3,i=e.alt),"imgColor"in e&&n(4,c=e.imgColor)},[s,o,l,i,c,u,d,r,a]}class ce extends oe{constructor(e){super(),se(this,e,ie,le,l,{name:0,bio:1,ghHandle:7,liHandle:8,imgSrc:2,alt:3,imgColor:4})}}function ue(e,t,n){const s=e.slice();return s[7]=t[n],s[9]=n,s}function de(t){let n,s,o,r;return{c(){n=k("img"),x(n,"id","logo"),x(n,"class","center svelte-1cntbk5"),c(n.src,s=t[2].delorean)||x(n,"src",s),x(n,"alt","logo")},m(e,t){v(e,n,t),r=!0},p:e,i(e){r||(P((()=>{o||(o=Z(n,ae,{y:-50,duration:1600},!0)),o.run(1)})),r=!0)},o(e){o||(o=Z(n,ae,{y:-50,duration:1600},!1)),o.run(0),r=!1},d(e){e&&y(n),e&&o&&o.end()}}}function ge(e){let t,n,s,o,r,a,l,i;return{c(){t=k("div"),n=k("h1"),n.innerHTML='Built for <span style="color: coral" class="svelte-1cntbk5">devs</span>',o=$(),r=k("p"),r.innerHTML='Developed under tech accelerator, OS Labs, <span style="font-weight: 700; color: rgb(255, 50, 57)" class="svelte-1cntbk5">DeLorean</span> is Svelte&#39;s the first time traveling debugger tool that allows you to jump from state to state seamlessly.DeLorean features a clean, minimal UI that&#39;s easily accessible from within a Chrome Developer Tools panel. It displays the name of each component and the names of all variables that each component contains. Each variable displays its value at whatever point in time you are examining.',x(t,"class","mainContainer svelte-1cntbk5")},m(e,s){v(e,t,s),p(t,n),p(t,o),p(t,r),i=!0},i(e){i||(P((()=>{s||(s=Z(n,ae,{y:-30,duration:1500},!0)),s.run(1)})),P((()=>{a||(a=Z(r,ae,{y:-30,duration:1500},!0)),a.run(1)})),P((()=>{l||(l=Z(t,ae,{y:30,duration:700},!0)),l.run(1)})),i=!0)},o(e){s||(s=Z(n,ae,{y:-30,duration:1500},!1)),s.run(0),a||(a=Z(r,ae,{y:-30,duration:1500},!1)),a.run(0),l||(l=Z(t,ae,{y:30,duration:700},!1)),l.run(0),i=!1},d(e){e&&y(t),e&&s&&s.end(),e&&a&&a.end(),e&&l&&l.end()}}}function fe(e){let t,n,s;return{c(){t=k("h1"),t.textContent="Features",x(t,"id","featuresTitle"),x(t,"class","whiteText svelte-1cntbk5")},m(e,n){v(e,t,n),s=!0},i(e){s||(P((()=>{n||(n=Z(t,ae,{y:-30,duration:700},!0)),n.run(1)})),s=!0)},o(e){n||(n=Z(t,ae,{y:-30,duration:700},!1)),n.run(0),s=!1},d(e){e&&y(t),e&&n&&n.end()}}}function me(t){let n,s,o,r,a,l,i,u,d;return{c(){n=k("span"),s=k("p"),s.innerHTML='<strong class="svelte-1cntbk5">Capture State</strong><br/><span class="svelte-1cntbk5">As you make changes to your app, each component’s state at the time of the state change is stored in a snapshot and cached.</span>',r=$(),a=k("div"),l=k("img"),x(s,"class","feat featLeft svelte-1cntbk5"),x(l,"class","gif svelte-1cntbk5"),c(l.src,i=t[3].captureState)||x(l,"src",i),x(l,"alt","capturing-state"),x(a,"class","gifPlaceholder svelte-1cntbk5"),x(n,"class","featureText svelte-1cntbk5")},m(e,t){v(e,n,t),p(n,s),p(n,r),p(n,a),p(a,l),d=!0},p:e,i(e){d||(P((()=>{o||(o=Z(s,ae,{x:30,duration:700},!0)),o.run(1)})),P((()=>{u||(u=Z(a,ae,{x:-30,duration:700},!0)),u.run(1)})),d=!0)},o(e){o||(o=Z(s,ae,{x:30,duration:700},!1)),o.run(0),u||(u=Z(a,ae,{x:-30,duration:700},!1)),u.run(0),d=!1},d(e){e&&y(n),e&&o&&o.end(),e&&u&&u.end()}}}function pe(t){let n,s,o,r,a,l,i,u,d,g;return{c(){n=k("span"),s=k("div"),o=k("div"),r=k("img"),i=$(),u=k("p"),u.innerHTML='<strong class="svelte-1cntbk5">Time Travel</strong><br/><span class="svelte-1cntbk5"><span style="font-weight: 700; color: rgb(255, 90, 57)" class="svelte-1cntbk5">DeLorean</span> resets your application&#39;s state to the values it contained at any point, allowing for step-by-step examination of state change sequences.</span>',x(r,"class","gif svelte-1cntbk5"),c(r.src,a=t[3].timeTravel)||x(r,"src",a),x(r,"alt","time-traveling"),x(o,"class","gifPlaceholder svelte-1cntbk5"),x(s,"class","gifRight svelte-1cntbk5"),x(u,"class","feat featRight svelte-1cntbk5"),x(n,"class","featureText svelte-1cntbk5")},m(e,t){v(e,n,t),p(n,s),p(s,o),p(o,r),p(n,i),p(n,u),g=!0},p:e,i(e){g||(P((()=>{l||(l=Z(o,ae,{x:-30,duration:700},!0)),l.run(1)})),P((()=>{d||(d=Z(u,ae,{x:30,duration:700},!0)),d.run(1)})),g=!0)},o(e){l||(l=Z(o,ae,{x:-30,duration:700},!1)),l.run(0),d||(d=Z(u,ae,{x:30,duration:700},!1)),d.run(0),g=!1},d(e){e&&y(n),e&&l&&l.end(),e&&d&&d.end()}}}function he(t){let n,s,o,r,a,l,i,u,d;return{c(){n=k("span"),s=k("p"),s.innerHTML='<strong class="svelte-1cntbk5">New Branches</strong><br/><span class="svelte-1cntbk5">End User may alter state within a previous state, <span style="font-weight: 700; color: rgb(255, 90, 57)" class="svelte-1cntbk5">DeLorean</span> will simply create a new timeline that is now tracked in the Dev Tools panel.</span>',r=$(),a=k("div"),l=k("img"),x(s,"class","feat featLeft svelte-1cntbk5"),x(l,"class","gif svelte-1cntbk5"),c(l.src,i=t[3].newMemory)||x(l,"src",i),x(l,"alt","showing-UI"),x(a,"class","gifPlaceholder svelte-1cntbk5"),x(n,"class","featureText svelte-1cntbk5")},m(e,t){v(e,n,t),p(n,s),p(n,r),p(n,a),p(a,l),d=!0},p:e,i(e){d||(P((()=>{o||(o=Z(s,ae,{x:30,duration:700},!0)),o.run(1)})),P((()=>{u||(u=Z(a,ae,{x:-30,duration:700},!0)),u.run(1)})),d=!0)},o(e){o||(o=Z(s,ae,{x:30,duration:700},!1)),o.run(0),u||(u=Z(a,ae,{x:-30,duration:700},!1)),u.run(0),d=!1},d(e){e&&y(n),e&&o&&o.end(),e&&u&&u.end()}}}function be(e){let t,n,s,o,r,a,l,i,c;return{c(){t=k("div"),n=k("div"),s=k("h1"),s.textContent="How to Get Started",r=$(),a=k("div"),a.innerHTML='<strong class="svelte-1cntbk5">Step 1:</strong> To install DeLorean simply navigate to the DeLorean GitHub page. If you&#39;re interested in learning more about how DeLorean works, feel free to clone the repo! Otherwise, just download the <i>chrome_extension</i> folder and save it somewhere on your computer.\n          <br/> \n          <br/> \n          <strong class="svelte-1cntbk5">Step 2:</strong> Then navigate to Chrome&#39;s extensions page. Ensure you are in developer mode by clicking the &#39;Developer Mode&#39; switch in the top-right corner of the page. Click on &#39;Load Unpacked&#39;, and select the <i>chrome_extension</i> folder downloaded earlier to add DeLorean to your extensions.\n          <br/> \n          <br/> \n          <strong class="svelte-1cntbk5">Step 3:</strong> Once your test app is up and running, open the Dev Tools and select DeLorean from the dropdown in the navbar. Then click Connect, and you should see your application&#39;s initial state loaded in the panel. Make some state changes and travel through time!',x(a,"id","steps"),x(a,"class","svelte-1cntbk5"),x(n,"id","getStarted"),x(n,"class","svelte-1cntbk5"),x(t,"id","getStartedBackground"),x(t,"class","svelte-1cntbk5")},m(e,o){v(e,t,o),p(t,n),p(n,s),p(n,r),p(n,a),c=!0},i(e){c||(P((()=>{o||(o=Z(s,ae,{y:-30,duration:1500},!0)),o.run(1)})),P((()=>{l||(l=Z(a,ae,{y:30,duration:1500},!0)),l.run(1)})),P((()=>{i||(i=Z(t,ae,{y:-30,duration:700},!0)),i.run(1)})),c=!0)},o(e){o||(o=Z(s,ae,{y:-30,duration:1500},!1)),o.run(0),l||(l=Z(a,ae,{y:30,duration:1500},!1)),l.run(0),i||(i=Z(t,ae,{y:-30,duration:700},!1)),i.run(0),c=!1},d(e){e&&y(t),e&&o&&o.end(),e&&l&&l.end(),e&&i&&i.end()}}}function ve(e){let t,n,s,o,r,a,l,i=e[5],c=[];for(let t=0;t<i.length;t+=1)c[t]=ye(ue(e,i,t));const u=e=>J(c[e],1,1,(()=>{c[e]=null}));return{c(){t=k("div"),n=k("h1"),n.textContent="Meet the Team",o=$(),r=k("div");for(let e=0;e<c.length;e+=1)c[e].c();x(n,"id","teamText"),x(n,"class","whiteText svelte-1cntbk5"),x(r,"class","row svelte-1cntbk5"),x(t,"id","teamMembers"),x(t,"class","whiteText teamMembers svelte-1cntbk5")},m(e,s){v(e,t,s),p(t,n),p(t,o),p(t,r);for(let e=0;e<c.length;e+=1)c[e].m(r,null);l=!0},p(e,t){if(32&t){let n;for(i=e[5],n=0;n<i.length;n+=1){const s=ue(e,i,n);c[n]?(c[n].p(s,t),Y(c[n],1)):(c[n]=ye(s),c[n].c(),Y(c[n],1),c[n].m(r,null))}for(W(),n=i.length;n<c.length;n+=1)u(n);X()}},i(e){if(!l){P((()=>{s||(s=Z(n,ae,{y:-30,duration:700},!0)),s.run(1)}));for(let e=0;e<i.length;e+=1)Y(c[e]);P((()=>{a||(a=Z(r,ae,{y:-30,duration:700},!0)),a.run(1)})),l=!0}},o(e){s||(s=Z(n,ae,{y:-30,duration:700},!1)),s.run(0),c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)J(c[e]);a||(a=Z(r,ae,{y:-30,duration:700},!1)),a.run(0),l=!1},d(e){e&&y(t),e&&s&&s.end(),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(c,e),e&&a&&a.end()}}}function ye(e){let t,s;const o=[{id:e[9]},e[7]];let r={};for(let e=0;e<o.length;e+=1)r=n(r,o[e]);return t=new ce({props:r}),{c(){var e;(e=t.$$.fragment)&&e.c()},m(e,n){ee(t,e,n),s=!0},p(e,n){const s=32&n?function(e,t){const n={},s={},o={$$scope:1};let r=e.length;for(;r--;){const a=e[r],l=t[r];if(l){for(const e in a)e in l||(s[e]=1);for(const e in l)o[e]||(n[e]=l[e],o[e]=1);e[r]=l}else for(const e in a)o[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}(o,[o[0],(r=e[7],"object"==typeof r&&null!==r?r:{})]):{};var r;t.$set(s)},i(e){s||(Y(t.$$.fragment,e),s=!0)},o(e){J(t.$$.fragment,e),s=!1},d(e){te(t,e)}}}function ke(e){let t;return{c(){t=k("footer"),x(t,"class","svelte-1cntbk5")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function we(e){let t;return{c(){t=k("span"),x(t,"id","padding"),x(t,"class","svelte-1cntbk5")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function $e(e){let t,n,s,o,r,a,l,i,u,d,g,f,m,h,b,_,T,L,S,H,C,E,M,D,A,O,j,N,B,R,I,U,z,F,G,q,V,K,Q,Z,ee,te,ne,se,oe,re,ae,le,ie,ce,ue=!1,ye=()=>{ue=!1};P(e[6]);let $e=e[0]&&de(e),xe=e[1]>=300&&ge(),_e=e[1]>=700&&fe(),Te=e[1]>=900&&me(e),Le=e[1]>=1400&&pe(e),Se=e[1]>=1800&&he(e),He=e[1]>=2200&&be(),Ce=e[1]>=2800&&ve(e);function Ee(e,t){return e[1]>3200?we:ke}let Me=Ee(e),De=Me(e);return{c(){n=k("link"),s=$(),o=k("div"),r=k("div"),a=k("a"),l=k("img"),u=$(),$e&&$e.c(),d=$(),g=k("br"),f=$(),m=k("a"),h=k("img"),_=$(),xe&&xe.c(),T=$(),L=k("div"),S=k("div"),_e&&_e.c(),H=$(),Te&&Te.c(),C=$(),E=k("br"),M=$(),D=k("br"),A=$(),Le&&Le.c(),O=$(),j=k("br"),N=$(),B=k("br"),R=$(),Se&&Se.c(),I=$(),U=k("br"),z=$(),He&&He.c(),F=$(),Ce&&Ce.c(),G=$(),De.c(),q=$(),V=k("div"),K=k("p"),Q=w("Find out more at: "),Z=k("a"),ee=w("Github"),te=w(" | \n  "),ne=k("a"),se=w("LinkedIn"),oe=w(" | "),re=k("a"),ae=w("Medium"),x(n,"href","https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"),x(n,"rel","stylesheet"),c(l.src,i=e[2].oslabs)||x(l,"src",i),x(l,"alt","OSLabs"),x(a,"href","https://opensourcelabs.io/"),x(a,"class","svelte-1cntbk5"),x(r,"class","oslabs svelte-1cntbk5"),x(h,"class","center svelte-1cntbk5"),x(h,"id","githubButton"),c(h.src,b=e[2].webstore)||x(h,"src",b),x(h,"alt","github-webstore-button"),x(m,"href",e[4].gh),x(m,"target","_blank"),x(m,"class","svelte-1cntbk5"),x(o,"id","header"),x(o,"class","svelte-1cntbk5"),x(S,"id","features"),x(S,"class","svelte-1cntbk5"),x(Z,"href",e[4].gh),x(Z,"target","_blank"),x(Z,"class","svelte-1cntbk5"),x(ne,"href",e[4].li),x(ne,"target","_blank"),x(ne,"class","svelte-1cntbk5"),x(re,"href",e[4].med),x(re,"target","_blank"),x(re,"class","svelte-1cntbk5"),x(K,"id","footerText"),x(K,"class","svelte-1cntbk5"),x(V,"id","bottomLinks"),x(V,"class","svelte-1cntbk5")},m(i,c){var b,y,k,w;p(document.head,n),v(i,s,c),v(i,o,c),p(o,r),p(r,a),p(a,l),p(o,u),$e&&$e.m(o,null),p(o,d),p(o,g),p(o,f),p(o,m),p(m,h),v(i,_,c),xe&&xe.m(i,c),v(i,T,c),v(i,L,c),p(L,S),_e&&_e.m(S,null),p(S,H),Te&&Te.m(S,null),p(S,C),p(S,E),p(S,M),p(S,D),p(S,A),Le&&Le.m(S,null),p(S,O),p(S,j),p(S,N),p(S,B),p(S,R),Se&&Se.m(S,null),p(L,I),p(L,U),p(L,z),He&&He.m(L,null),v(i,F,c),Ce&&Ce.m(i,c),v(i,G,c),De.m(i,c),v(i,q,c),v(i,V,c),p(V,K),p(K,Q),p(K,Z),p(Z,ee),p(K,te),p(K,ne),p(ne,se),p(K,oe),p(K,re),p(re,ae),le=!0,ie||(b=window,y="scroll",k=()=>{ue=!0,clearTimeout(t),t=setTimeout(ye,100),e[6]()},b.addEventListener(y,k,w),ce=()=>b.removeEventListener(y,k,w),ie=!0)},p(e,[n]){2&n&&!ue&&(ue=!0,clearTimeout(t),scrollTo(window.pageXOffset,e[1]),t=setTimeout(ye,100)),e[0]?$e?($e.p(e,n),1&n&&Y($e,1)):($e=de(e),$e.c(),Y($e,1),$e.m(o,d)):$e&&(W(),J($e,1,1,(()=>{$e=null})),X()),e[1]>=300?xe?2&n&&Y(xe,1):(xe=ge(),xe.c(),Y(xe,1),xe.m(T.parentNode,T)):xe&&(W(),J(xe,1,1,(()=>{xe=null})),X()),e[1]>=700?_e?2&n&&Y(_e,1):(_e=fe(),_e.c(),Y(_e,1),_e.m(S,H)):_e&&(W(),J(_e,1,1,(()=>{_e=null})),X()),e[1]>=900?Te?(Te.p(e,n),2&n&&Y(Te,1)):(Te=me(e),Te.c(),Y(Te,1),Te.m(S,C)):Te&&(W(),J(Te,1,1,(()=>{Te=null})),X()),e[1]>=1400?Le?(Le.p(e,n),2&n&&Y(Le,1)):(Le=pe(e),Le.c(),Y(Le,1),Le.m(S,O)):Le&&(W(),J(Le,1,1,(()=>{Le=null})),X()),e[1]>=1800?Se?(Se.p(e,n),2&n&&Y(Se,1)):(Se=he(e),Se.c(),Y(Se,1),Se.m(S,null)):Se&&(W(),J(Se,1,1,(()=>{Se=null})),X()),e[1]>=2200?He?2&n&&Y(He,1):(He=be(),He.c(),Y(He,1),He.m(L,null)):He&&(W(),J(He,1,1,(()=>{He=null})),X()),e[1]>=2800?Ce?(Ce.p(e,n),2&n&&Y(Ce,1)):(Ce=ve(e),Ce.c(),Y(Ce,1),Ce.m(G.parentNode,G)):Ce&&(W(),J(Ce,1,1,(()=>{Ce=null})),X()),Me!==(Me=Ee(e))&&(De.d(1),De=Me(e),De&&(De.c(),De.m(q.parentNode,q)))},i(e){le||(Y($e),Y(xe),Y(_e),Y(Te),Y(Le),Y(Se),Y(He),Y(Ce),le=!0)},o(e){J($e),J(xe),J(_e),J(Te),J(Le),J(Se),J(He),J(Ce),le=!1},d(e){y(n),e&&y(s),e&&y(o),$e&&$e.d(),e&&y(_),xe&&xe.d(e),e&&y(T),e&&y(L),_e&&_e.d(),Te&&Te.d(),Le&&Le.d(),Se&&Se.d(),He&&He.d(),e&&y(F),Ce&&Ce.d(e),e&&y(G),De.d(e),e&&y(q),e&&y(V),ie=!1,ce()}}}function xe(e,t,n){let s,o=!1;return D((()=>{n(0,o=!0)})),[o,s,{delorean:"../public/assets/logo(white).png",webstore:"../public/assets/webstore-button.png",github:"../public/assets/github_logo.png",linkedin:"../public/assets/linkedin_logo.png",oslabs:"../public/assets/OSLabs.png"},{captureState:"../public/assets/capture_state.gif",connect:"../public/assets/connect.gif",newMemory:"../public/assets/new_memory.gif",timeTravel:"../public/assets/time_travel.gif"},{li:"https://www.linkedin.com/company/delorean-open-source/",gh:"https://github.com/oslabs-beta/DeLorean",med:"https://medium.com/@vantassel.sam/time-travel-debugging-in-svelte-with-delorean-26e04efe9474"},[{name:"Albert Han",bio:"A software engineer torn between calling LA or the Bay home with a passion for baseball, eating, and low-stakes poker.",ghHandle:"alberthan1",liHandle:"albert-han1",imgSrc:"../public/assets/albert.jpg",alt:"albert han",imgColor:"rgb(131, 123, 118)"},{name:"Aram Krakirian",bio:"Born and raised LA boy with big love for coffee, beach volleyball, and live music.",ghHandle:"aramkrakirian",liHandle:"aram-krakirian",imgSrc:"../public/assets/aram.jpg",alt:"aram krakirian",imgColor:"rgb(180, 174, 163)"},{name:"Erick Maese",bio:"A Los Angeles based software engineer with a passion for painting, gaming, and everything MCU.",ghHandle:"erickmaese",liHandle:"erickmaese",imgSrc:"../public/assets/erick.jpg",alt:"erick maese",imgColor:"rgb(175, 177, 171)"},{name:"Sam VanTassel",bio:"LA guy from Minnesota by way of New Orleans. Big on board games, synthesizers and Mardi Gras parading.",ghHandle:"SamVanTassel",liHandle:"samvantassel",imgSrc:"../public/assets/sam.jpg",alt:"sam vantassel",imgColor:"rgb(246, 192, 130)"},{name:"Trevor Leung",bio:"Australian software engineer based in Los Angeles. Has the ability to code upside down AND right-side up.",ghHandle:"trevleung",liHandle:"trevleung",imgSrc:"../public/assets/trevor.jpg",alt:"trevor leung",imgColor:"rgb(237, 237, 237)"}],function(){n(1,s=window.pageYOffset)}]}new class extends oe{constructor(e){super(),se(this,e,xe,$e,l,{})}}({target:document.getElementById("root")})}();
