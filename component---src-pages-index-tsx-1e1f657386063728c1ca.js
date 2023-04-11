"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7928:function(e,t,r){r.r(t),r.d(t,{default:function(){return ae}});var n={};r.r(n),r.d(n,{exclude:function(){return z},extract:function(){return v},parse:function(){return Z},parseUrl:function(){return F},pick:function(){return O},stringify:function(){return j},stringifyUrl:function(){return I}});var o=r(7294);const a="%[a-f0-9]{2}",i=new RegExp("("+a+")|([^%]+?)","gi"),s=new RegExp("("+a+")+","gi");function l(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],l(r),l(n))}function c(e){try{return decodeURIComponent(e)}catch{let t=e.match(i)||[];for(let r=1;r<t.length;r++)t=(e=l(t,r).join("")).match(i)||[];return e}}function u(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=s.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=c(r[0]);e!==r[0]&&(t[r[0]]=e)}r=s.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function p(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function d(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const f=e=>null==e,m=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),g=Symbol("encodeFragmentIdentifier");function y(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function h(e,t){return t.encode?t.strict?m(e):encodeURIComponent(e):e}function x(e,t){return t.decode?u(e):e}function b(e){return Array.isArray(e)?e.sort():"object"==typeof e?b(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function w(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function k(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e){const t=(e=w(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function Z(e,t){y((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&x(r,e).includes(e.arrayFormatSeparator);r=a?x(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>x(t,e))):null===r?r:x(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?x(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>x(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=p(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:x(i,t),r(x(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=k(r,t);else n[o]=k(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=b(r):e[t]=r,e}),Object.create(null))}function j(e,t){if(!e)return"";y((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&f(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[h(t,e),"[",o,"]"].join("")]:[...r,[h(t,e),"[",h(o,e),"]=",h(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[h(t,e),"[]"].join("")]:[...r,[h(t,e),"[]=",h(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[h(t,e),":list="].join("")]:[...r,[h(t,e),":list=",h(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[h(r,e),t,h(o,e)].join("")]:[[n,h(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,h(t,e)]:[...r,[h(t,e),"=",h(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?h(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?h(r,t)+"[]":o.reduce(n(r),[]).join("&"):h(r,t)+"="+h(o,t)})).filter((e=>e.length>0)).join("&")}function F(e,t){t={decode:!0,...t};let[r,n]=p(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:Z(v(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:x(n,t)}:{}}}function I(e,t){t={encode:!0,strict:!0,[g]:!0,...t};const r=w(e.url).split("?")[0]||"";let n=j({...Z(v(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[g]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function O(e,t,r){r={parseFragmentIdentifier:!0,[g]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=F(e,r);return I({url:n,query:d(o,t),fragmentIdentifier:a},r)}function z(e,t,r){return O(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var S=n,C=r(6450),E=r(4316),R=r(1883),A=r(917);const U=(0,E.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),N=(0,E.Z)((e=>{let{active:t,...r}=e;return(0,A.tZ)(R.rU,r)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var $=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,A.tZ)(U,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,A.tZ)(N,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))};const L=(0,E.Z)("div",{target:"e160b016"})({name:"zepct9",styles:"height:4rem;width:100%;display:flex;align-items:center;justify-content:center"}),M=(0,E.Z)("div",{target:"e160b015"})({name:"cwurok",styles:"width:100%;max-width:1728px;display:flex;justify-content:space-between;height:100%;align-items:center;@media (max-width: 1919px){max-width:1376px;}@media (max-width: 1440px){max-width:1024px;}@media (max-width: 1056px){max-width:calc(100% - 2rem);}"}),q=(0,E.Z)("div",{target:"e160b014"})({name:"1js78up",styles:"@import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');{}font-family:'Fira Mono',monospace;font-weight:550;font-size:1.5rem"}),B=(0,E.Z)("div",{target:"e160b013"})({name:"ahgcp6",styles:"width:auto;display:flex;align-items:center;height:100%;gap:15px;@media (max-width: 1056px){max-width:153px;}"}),P=(0,E.Z)("div",{target:"e160b012"})({name:"1yobk4k",styles:"display:flex;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;border:none;outline:none;border-radius:50%;cursor:pointer;:hover{background-color:#dee2e6;transition:all 0.125s ease-in 0s;}"}),D=(0,E.Z)("div",{target:"e160b011"})({name:"1yobk4k",styles:"display:flex;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;border:none;outline:none;border-radius:50%;cursor:pointer;:hover{background-color:#dee2e6;transition:all 0.125s ease-in 0s;}"}),T=(0,E.Z)("button",{target:"e160b010"})({name:"16kwqhw",styles:"padding-left:1rem;padding-right:1rem;height:2rem;font-size:1rem;border-radius:1rem;border:1px solid black;font-weight:600;outline:none;background-color:white;cursor:pointer;:hover{background-color:black;transition:all 0.125s ease-in 0s;color:white;}"});var _=function(e){let{}=e;return(0,A.tZ)(L,null,(0,A.tZ)(M,null,(0,A.tZ)(q,null,"minlog"),(0,A.tZ)(B,null,(0,A.tZ)(P,null,(0,A.tZ)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},(0,A.tZ)("path",{d:"M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"}))),(0,A.tZ)(D,null,(0,A.tZ)("svg",{width:"17",height:"17",viewBox:"0 0 17 17"},(0,A.tZ)("path",{"fill-rule":"evenodd",d:"M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z","clip-rule":"evenodd",fill:"currentColor"}))),(0,A.tZ)(T,null,"ABOUT"))))},Y=r(7462);var G=function(e,t){const r=(0,o.useRef)(null),n=(0,o.useRef)(null),{0:a,1:i}=(0,o.useState)(1),s=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,o.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((()=>i(1)),[e]),(0,o.useEffect)((()=>{10*a>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[a,e]),{containerRef:r,postList:s.slice(0,10*a)}},K=r(8032);const H=(0,E.Z)(R.rU,{target:"e1eg5kak7"})({name:"niwrx5",styles:"display:flex;flex-direction:column;border-radius:5px;box-shadow:0px 4px 15px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;transform:translateY(0);transition:transform 0.3s ease-out;cursor:pointer;&:hover{box-shadow:0px 6px 15px rgba(0, 0, 0, 0.3);transform:translateY(-7px);transition-delay:0s;}"}),J=(0,E.Z)(K.G,{target:"e1eg5kak6"})({name:"iypyoi",styles:"width:100%;height:200px;border-radius:5px 5px 0 0"}),Q=(0,E.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),V=(0,E.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),W=(0,E.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),X=(0,E.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),ee=(0,E.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),te=(0,E.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var re=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,A.tZ)(H,{to:i},(0,A.tZ)(J,{image:a,alt:"Post Item Image"}),(0,A.tZ)(Q,null,(0,A.tZ)(V,null,t),(0,A.tZ)(W,null,r),(0,A.tZ)(X,null,n.map((e=>(0,A.tZ)(ee,{key:e},e)))),(0,A.tZ)(te,null,o)))};const ne=(0,E.Z)("div",{target:"es8e92y0"})({name:"148rdfc",styles:"display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;width:100%;max-width:1728px;grid-gap:30px;margin:0 auto;padding:50px 0 100px;@media (max-width: 1919px){grid-template-columns:1fr 1fr 1fr 1fr;width:1376px;}@media (max-width: 1440px){grid-template-columns:1fr 1fr 1fr;width:1024px;}@media (max-width: 1056px){grid-template-columns:1fr 1fr;width:calc(100% - 2rem);}@media (max-width: 768px){grid-template-columns:1fr;width:calc(100% - 2rem);}"});var oe=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=G(t,r);return(0,A.tZ)(ne,{ref:n},o.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,A.tZ)(re,(0,Y.Z)({},n,{link:r,key:t}))})))};var ae=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:a}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:s},publicURL:l}}}=e;const c=S.parse(t),u="string"==typeof c.category&&c.category?c.category:"All",p=(0,o.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,A.tZ)(C.Z,{title:r,description:n,url:a,image:l},(0,A.tZ)(_,{profileImage:s}),(0,A.tZ)($,{selectedCategory:u,categoryList:p}),(0,A.tZ)(oe,{selectedCategory:u,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1e1f657386063728c1ca.js.map