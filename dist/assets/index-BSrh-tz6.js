const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-lc1lkMoX.js","assets/vendor-router-DigmnBuO.js","assets/vendor-markdown-BslawoOf.js","assets/rolldown-runtime-DDUpfMIz.js","assets/vendor-react-Rr_QLd8D.js","assets/routes-BZzjhtRH.js","assets/vendor-ui-C4lJlslC.js","assets/spinner-D3Rs6VHJ.js","assets/themes-BSYPJ1pz.js","assets/releases-CVcYexw9.js","assets/useNotraReleases-DJcGxRJ1.js","assets/vendor-query-BBSgs-Ae.js","assets/docs-DDP7TS8M.js","assets/vendor-motion-YT8O-2Fi.js","assets/Sidebar-ruFQ8IAx.js","assets/contributors-Ct1KSCGv.js","assets/studio-BBYUQ39y.js","assets/_tag-y6a9UR-a.js","assets/_-C9tDC0z1.js","assets/_slug-DMncLozr.js","assets/update-Dcc1k-Gw.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-DDUpfMIz.js";import{T as t,w as n}from"./vendor-markdown-BslawoOf.js";import{t as r}from"./vendor-react-Rr_QLd8D.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,u as d}from"./vendor-router-DigmnBuO.js";import{S as f,_ as p,a as m,b as h,c as ee,d as te,f as ne,g,h as _,i as re,l as ie,m as v,n as y,o as b,p as ae,r as oe,s as x,u as se,v as S,x as C,y as w}from"./vendor-query-BBSgs-Ae.js";import{c as T,f as E,n as ce,r as D,u as le}from"./vendor-ui-C4lJlslC.js";import{t as ue}from"./vendor-motion-YT8O-2Fi.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function O(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=e=>{ie(e,()=>t.signal,()=>n=!0)},u=ne(t.options,t.fetchOptions),d=async(e,r,i)=>{if(n)return Promise.reject();if(r==null&&e.pages.length)return Promise.resolve(e);let a=await u((()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return l(e),e})()),{maxPages:o}=t.options,s=i?te:se;return{pages:s(e.pages,a,o),pageParams:s(e.pageParams,r,o)}};if(i&&a.length){let e=i===`backward`,t=e?A:k,n={pages:a,pageParams:o};s=await d(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]??r.initialPageParam:k(r,s);if(c>0&&e==null)break;s=await d(s,e),c++}while(c<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=l}}}function k(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function A(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}var j=class extends re{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||M(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:`observerAdded`,mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:`observerRemoved`,mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status===`pending`?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#i({type:`continue`})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=m({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(Error(`No mutationFn found`)),onFail:(e,t)=>{this.#i({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#i({type:`pause`})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let r=this.state.status===`pending`,i=!this.#r.canStart();try{if(r)t();else{this.#i({type:`pending`,variables:e,isPaused:i}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);let t=await this.options.onMutate?.(e,n);t!==this.state.context&&this.#i({type:`pending`,context:t,variables:e,isPaused:i})}let a=await this.#r.start();return await this.#n.config.onSuccess?.(a,e,this.state.context,this,n),await this.options.onSuccess?.(a,e,this.state.context,n),await this.#n.config.onSettled?.(a,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(a,null,e,this.state.context,n),this.#i({type:`success`,data:a}),a}catch(t){try{await this.#n.config.onError?.(t,e,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,n)}catch(e){Promise.reject(e)}try{await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,n)}catch(e){Promise.reject(e)}throw this.#i({type:`error`,error:t}),t}finally{this.#n.runNext(this)}}#i(e){this.state=(t=>{switch(e.type){case`failed`:return{...t,failureCount:e.failureCount,failureReason:e.error};case`pause`:return{...t,isPaused:!0};case`continue`:return{...t,isPaused:!1};case`pending`:return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:`pending`,variables:e.variables,submittedAt:Date.now()};case`success`:return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:`success`,isPaused:!1};case`error`:return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:`error`}}})(this.state),x.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:`updated`,action:e})})}};function M(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:`idle`,variables:void 0,submittedAt:0}}var N=class extends f{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){let r=new j({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=P(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=P(e);if(typeof t==`string`){let n=this.#t.get(t);if(n)if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=P(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}else return!0}runNext(e){let t=P(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){x.batch(()=>{this.#e.forEach(e=>{this.notify({type:`removed`,mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>g(t,e))}findAll(e={}){return this.getAll().filter(t=>g(e,t))}notify(e){x.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return x.batch(()=>Promise.all(e.map(e=>e.continue().catch(S))))}};function P(e){return e.options.scope?.id}var F=class extends f{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,i=t.queryHash??_(r,t),a=this.get(i);return a||(a=new oe({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){x.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>p(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>p(e,t)):t}notify(e){x.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){x.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){x.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},I=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new F,this.#t=e.mutationCache||new N,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=ee.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=b.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(h(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=ae(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return x.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;x.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return x.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=x.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(S).catch(S)}invalidateQueries(e,t={}){return x.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=x.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(S)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(S)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(h(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(S).catch(S)}fetchInfiniteQuery(e){return e.behavior=O(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(S).catch(S)}ensureInfiniteQueryData(e){return e.behavior=O(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return b.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(v(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{w(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(v(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{w(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=_(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===C&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},de=r(),L=e(t(),1);function R(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=R(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function fe(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=R(e))&&(r&&(r+=` `),r+=t);return r}var pe=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e;const me=fe,he=(e,t)=>n=>{if(t?.variants==null)return me(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=pe(t)||pe(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return me(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)};function ge(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function _e(...e){return t=>{let n=!1,r=e.map(e=>{let r=ge(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():ge(e[t],null)}}}}var z=e(n(),1);function ve(e){let t=be(e),n=L.forwardRef((e,n)=>{let{children:r,...i}=e,a=L.Children.toArray(r),o=a.find(Se);if(o){let e=o.props.children,r=a.map(t=>t===o?L.Children.count(e)>1?L.Children.only(null):L.isValidElement(e)?e.props.children:null:t);return(0,z.jsx)(t,{...i,ref:n,children:L.isValidElement(e)?L.cloneElement(e,void 0,r):null})}return(0,z.jsx)(t,{...i,ref:n,children:r})});return n.displayName=`${e}.Slot`,n}var ye=ve(`Slot`);function be(e){let t=L.forwardRef((e,t)=>{let{children:n,...r}=e;if(L.isValidElement(n)){let e=we(n),i=Ce(r,n.props);return n.type!==L.Fragment&&(i.ref=t?_e(t,e):e),L.cloneElement(n,i)}return L.Children.count(n)>1?L.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var xe=Symbol(`radix.slottable`);function Se(e){return L.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===xe}function Ce(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function we(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Te=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Ee=(e,t)=>({classGroupId:e,validator:t}),De=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Oe=`-`,ke=[],Ae=`arbitrary..`,je=e=>{let t=Pe(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Ne(e);let n=e.split(Oe);return Me(n,n[0]===``&&n.length>1?1:0,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Te(i,t):t:i||ke}return n[e]||ke}}},Me=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Me(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Oe):e.slice(t).join(Oe),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Ne=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Ae+r:void 0})(),Pe=e=>{let{theme:t,classGroups:n}=e;return Fe(n,t)},Fe=(e,t)=>{let n=De();for(let r in e){let i=e[r];Ie(i,n,r,t)}return n},Ie=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Le(i,t,n,r)}},Le=(e,t,n,r)=>{if(typeof e==`string`){Re(e,t,n);return}if(typeof e==`function`){ze(e,t,n,r);return}Be(e,t,n,r)},Re=(e,t,n)=>{let r=e===``?t:Ve(t,e);r.classGroupId=n},ze=(e,t,n,r)=>{if(He(e)){Ie(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Ee(n,e))},Be=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Ie(o,Ve(t,a),n,r)}},Ve=(e,t)=>{let n=e,r=t.split(Oe),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=De(),n.nextPart.set(t,i)),n=i}return n},He=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Ue=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},We=`!`,Ge=`:`,Ke=[],qe=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Je=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Ge){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(We)?(c=s.slice(0,-1),l=!0):s.startsWith(We)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return qe(t,l,c,u)};if(t){let e=t+Ge,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):qe(Ke,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Ye=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Xe=e=>({cache:Ue(e.cacheSize),parseClassName:Je(e),sortModifiers:Ye(e),...je(e)}),Ze=/\s+/,Qe=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(Ze),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m){c=t+(c.length>0?` `+c:c);continue}if(h=r(f),!h){c=t+(c.length>0?` `+c:c);continue}m=!1}let ee=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),te=d?ee+We:ee,ne=te+h;if(o.indexOf(ne)>-1)continue;o.push(ne);let g=i(h,m);for(let e=0;e<g.length;++e){let t=g[e];o.push(te+t)}c=t+(c.length>0?` `+c:c)}return c},$e=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=et(n))&&(i&&(i+=` `),i+=r);return i},et=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=et(e[r]))&&(n&&(n+=` `),n+=t);return n},tt=(e,...t)=>{let n,r,i,a,o=o=>(n=Xe(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Qe(e,n);return i(e,a),a};return a=o,(...e)=>a($e(...e))},nt=[],B=e=>{let t=t=>t[e]||nt;return t.isThemeGetter=!0,t},rt=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,it=/^\((?:(\w[\w-]*):)?(.+)\)$/i,at=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ot=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,st=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ct=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,lt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ut=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,V=e=>at.test(e),H=e=>!!e&&!Number.isNaN(Number(e)),U=e=>!!e&&Number.isInteger(Number(e)),dt=e=>e.endsWith(`%`)&&H(e.slice(0,-1)),W=e=>ot.test(e),ft=()=>!0,pt=e=>st.test(e)&&!ct.test(e),mt=()=>!1,ht=e=>lt.test(e),gt=e=>ut.test(e),_t=e=>!G(e)&&!q(e),vt=e=>J(e,Pt,mt),G=e=>rt.test(e),K=e=>J(e,Ft,pt),yt=e=>J(e,It,H),bt=e=>J(e,Rt,ft),xt=e=>J(e,Lt,mt),St=e=>J(e,Mt,mt),Ct=e=>J(e,Nt,gt),wt=e=>J(e,zt,ht),q=e=>it.test(e),Tt=e=>Y(e,Ft),Et=e=>Y(e,Lt),Dt=e=>Y(e,Mt),Ot=e=>Y(e,Pt),kt=e=>Y(e,Nt),At=e=>Y(e,zt,!0),jt=e=>Y(e,Rt,!0),J=(e,t,n)=>{let r=rt.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Y=(e,t,n=!1)=>{let r=it.exec(e);return r?r[1]?t(r[1]):n:!1},Mt=e=>e===`position`||e===`percentage`,Nt=e=>e===`image`||e===`url`,Pt=e=>e===`length`||e===`size`||e===`bg-size`,Ft=e=>e===`length`,It=e=>e===`number`,Lt=e=>e===`family-name`,Rt=e=>e===`number`||e===`weight`,zt=e=>e===`shadow`,Bt=tt(()=>{let e=B(`color`),t=B(`font`),n=B(`text`),r=B(`font-weight`),i=B(`tracking`),a=B(`leading`),o=B(`breakpoint`),s=B(`container`),c=B(`spacing`),l=B(`radius`),u=B(`shadow`),d=B(`inset-shadow`),f=B(`text-shadow`),p=B(`drop-shadow`),m=B(`blur`),h=B(`perspective`),ee=B(`aspect`),te=B(`ease`),ne=B(`animate`),g=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],_=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],re=()=>[..._(),q,G],ie=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],v=()=>[`auto`,`contain`,`none`],y=()=>[q,G,c],b=()=>[V,`full`,`auto`,...y()],ae=()=>[U,`none`,`subgrid`,q,G],oe=()=>[`auto`,{span:[`full`,U,q,G]},U,q,G],x=()=>[U,`auto`,q,G],se=()=>[`auto`,`min`,`max`,`fr`,q,G],S=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],C=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],w=()=>[`auto`,...y()],T=()=>[V,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...y()],E=()=>[V,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...y()],ce=()=>[V,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...y()],D=()=>[e,q,G],le=()=>[..._(),Dt,St,{position:[q,G]}],ue=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],O=()=>[`auto`,`cover`,`contain`,Ot,vt,{size:[q,G]}],k=()=>[dt,Tt,K],A=()=>[``,`none`,`full`,l,q,G],j=()=>[``,H,Tt,K],M=()=>[`solid`,`dashed`,`dotted`,`double`],N=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],P=()=>[H,dt,Dt,St],F=()=>[``,`none`,m,q,G],I=()=>[`none`,H,q,G],de=()=>[`none`,H,q,G],L=()=>[H,q,G],R=()=>[V,`full`,...y()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[W],breakpoint:[W],color:[ft],container:[W],"drop-shadow":[W],ease:[`in`,`out`,`in-out`],font:[_t],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[W],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[W],shadow:[W],spacing:[`px`,H],text:[W],"text-shadow":[W],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,V,G,q,ee]}],container:[`container`],columns:[{columns:[H,G,q,s]}],"break-after":[{"break-after":g()}],"break-before":[{"break-before":g()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:re()}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:v()}],"overscroll-x":[{"overscroll-x":v()}],"overscroll-y":[{"overscroll-y":v()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:b()}],"inset-x":[{"inset-x":b()}],"inset-y":[{"inset-y":b()}],start:[{"inset-s":b(),start:b()}],end:[{"inset-e":b(),end:b()}],"inset-bs":[{"inset-bs":b()}],"inset-be":[{"inset-be":b()}],top:[{top:b()}],right:[{right:b()}],bottom:[{bottom:b()}],left:[{left:b()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[U,`auto`,q,G]}],basis:[{basis:[V,`full`,`auto`,s,...y()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[H,V,`auto`,`initial`,`none`,G]}],grow:[{grow:[``,H,q,G]}],shrink:[{shrink:[``,H,q,G]}],order:[{order:[U,`first`,`last`,`none`,q,G]}],"grid-cols":[{"grid-cols":ae()}],"col-start-end":[{col:oe()}],"col-start":[{"col-start":x()}],"col-end":[{"col-end":x()}],"grid-rows":[{"grid-rows":ae()}],"row-start-end":[{row:oe()}],"row-start":[{"row-start":x()}],"row-end":[{"row-end":x()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":se()}],"auto-rows":[{"auto-rows":se()}],gap:[{gap:y()}],"gap-x":[{"gap-x":y()}],"gap-y":[{"gap-y":y()}],"justify-content":[{justify:[...S(),`normal`]}],"justify-items":[{"justify-items":[...C(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...C()]}],"align-content":[{content:[`normal`,...S()]}],"align-items":[{items:[...C(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...C(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":S()}],"place-items":[{"place-items":[...C(),`baseline`]}],"place-self":[{"place-self":[`auto`,...C()]}],p:[{p:y()}],px:[{px:y()}],py:[{py:y()}],ps:[{ps:y()}],pe:[{pe:y()}],pbs:[{pbs:y()}],pbe:[{pbe:y()}],pt:[{pt:y()}],pr:[{pr:y()}],pb:[{pb:y()}],pl:[{pl:y()}],m:[{m:w()}],mx:[{mx:w()}],my:[{my:w()}],ms:[{ms:w()}],me:[{me:w()}],mbs:[{mbs:w()}],mbe:[{mbe:w()}],mt:[{mt:w()}],mr:[{mr:w()}],mb:[{mb:w()}],ml:[{ml:w()}],"space-x":[{"space-x":y()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":y()}],"space-y-reverse":[`space-y-reverse`],size:[{size:T()}],"inline-size":[{inline:[`auto`,...E()]}],"min-inline-size":[{"min-inline":[`auto`,...E()]}],"max-inline-size":[{"max-inline":[`none`,...E()]}],"block-size":[{block:[`auto`,...ce()]}],"min-block-size":[{"min-block":[`auto`,...ce()]}],"max-block-size":[{"max-block":[`none`,...ce()]}],w:[{w:[s,`screen`,...T()]}],"min-w":[{"min-w":[s,`screen`,`none`,...T()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...T()]}],h:[{h:[`screen`,`lh`,...T()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...T()]}],"max-h":[{"max-h":[`screen`,`lh`,...T()]}],"font-size":[{text:[`base`,n,Tt,K]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,jt,bt]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,dt,G]}],"font-family":[{font:[Et,xt,t]}],"font-features":[{"font-features":[G]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,q,G]}],"line-clamp":[{"line-clamp":[H,`none`,q,yt]}],leading:[{leading:[a,...y()]}],"list-image":[{"list-image":[`none`,q,G]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,q,G]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...M(),`wavy`]}],"text-decoration-thickness":[{decoration:[H,`from-font`,`auto`,q,K]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[H,`auto`,q,G]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:y()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,q,G]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,q,G]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:le()}],"bg-repeat":[{bg:ue()}],"bg-size":[{bg:O()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},U,q,G],radial:[``,q,G],conic:[U,q,G]},kt,Ct]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:k()}],"gradient-via-pos":[{via:k()}],"gradient-to-pos":[{to:k()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:A()}],"rounded-s":[{"rounded-s":A()}],"rounded-e":[{"rounded-e":A()}],"rounded-t":[{"rounded-t":A()}],"rounded-r":[{"rounded-r":A()}],"rounded-b":[{"rounded-b":A()}],"rounded-l":[{"rounded-l":A()}],"rounded-ss":[{"rounded-ss":A()}],"rounded-se":[{"rounded-se":A()}],"rounded-ee":[{"rounded-ee":A()}],"rounded-es":[{"rounded-es":A()}],"rounded-tl":[{"rounded-tl":A()}],"rounded-tr":[{"rounded-tr":A()}],"rounded-br":[{"rounded-br":A()}],"rounded-bl":[{"rounded-bl":A()}],"border-w":[{border:j()}],"border-w-x":[{"border-x":j()}],"border-w-y":[{"border-y":j()}],"border-w-s":[{"border-s":j()}],"border-w-e":[{"border-e":j()}],"border-w-bs":[{"border-bs":j()}],"border-w-be":[{"border-be":j()}],"border-w-t":[{"border-t":j()}],"border-w-r":[{"border-r":j()}],"border-w-b":[{"border-b":j()}],"border-w-l":[{"border-l":j()}],"divide-x":[{"divide-x":j()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":j()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...M(),`hidden`,`none`]}],"divide-style":[{divide:[...M(),`hidden`,`none`]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-bs":[{"border-bs":D()}],"border-color-be":[{"border-be":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...M(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[H,q,G]}],"outline-w":[{outline:[``,H,Tt,K]}],"outline-color":[{outline:D()}],shadow:[{shadow:[``,`none`,u,At,wt]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":[`none`,d,At,wt]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:j()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[H,K]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":j()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":[`none`,f,At,wt]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[H,q,G]}],"mix-blend":[{"mix-blend":[...N(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":N()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[H]}],"mask-image-linear-from-pos":[{"mask-linear-from":P()}],"mask-image-linear-to-pos":[{"mask-linear-to":P()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":P()}],"mask-image-t-to-pos":[{"mask-t-to":P()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":P()}],"mask-image-r-to-pos":[{"mask-r-to":P()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":P()}],"mask-image-b-to-pos":[{"mask-b-to":P()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":P()}],"mask-image-l-to-pos":[{"mask-l-to":P()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":P()}],"mask-image-x-to-pos":[{"mask-x-to":P()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":P()}],"mask-image-y-to-pos":[{"mask-y-to":P()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[q,G]}],"mask-image-radial-from-pos":[{"mask-radial-from":P()}],"mask-image-radial-to-pos":[{"mask-radial-to":P()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[H]}],"mask-image-conic-from-pos":[{"mask-conic-from":P()}],"mask-image-conic-to-pos":[{"mask-conic-to":P()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:le()}],"mask-repeat":[{mask:ue()}],"mask-size":[{mask:O()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,q,G]}],filter:[{filter:[``,`none`,q,G]}],blur:[{blur:F()}],brightness:[{brightness:[H,q,G]}],contrast:[{contrast:[H,q,G]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,At,wt]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:[``,H,q,G]}],"hue-rotate":[{"hue-rotate":[H,q,G]}],invert:[{invert:[``,H,q,G]}],saturate:[{saturate:[H,q,G]}],sepia:[{sepia:[``,H,q,G]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,q,G]}],"backdrop-blur":[{"backdrop-blur":F()}],"backdrop-brightness":[{"backdrop-brightness":[H,q,G]}],"backdrop-contrast":[{"backdrop-contrast":[H,q,G]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,H,q,G]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[H,q,G]}],"backdrop-invert":[{"backdrop-invert":[``,H,q,G]}],"backdrop-opacity":[{"backdrop-opacity":[H,q,G]}],"backdrop-saturate":[{"backdrop-saturate":[H,q,G]}],"backdrop-sepia":[{"backdrop-sepia":[``,H,q,G]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":y()}],"border-spacing-x":[{"border-spacing-x":y()}],"border-spacing-y":[{"border-spacing-y":y()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,q,G]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[H,`initial`,q,G]}],ease:[{ease:[`linear`,`initial`,te,q,G]}],delay:[{delay:[H,q,G]}],animate:[{animate:[`none`,ne,q,G]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,q,G]}],"perspective-origin":[{"perspective-origin":re()}],rotate:[{rotate:I()}],"rotate-x":[{"rotate-x":I()}],"rotate-y":[{"rotate-y":I()}],"rotate-z":[{"rotate-z":I()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":[`scale-3d`],skew:[{skew:L()}],"skew-x":[{"skew-x":L()}],"skew-y":[{"skew-y":L()}],transform:[{transform:[q,G,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:re()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:R()}],"translate-x":[{"translate-x":R()}],"translate-y":[{"translate-y":R()}],"translate-z":[{"translate-z":R()}],"translate-none":[`translate-none`],accent:[{accent:D()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,q,G]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mbs":[{"scroll-mbs":y()}],"scroll-mbe":[{"scroll-mbe":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pbs":[{"scroll-pbs":y()}],"scroll-pbe":[{"scroll-pbe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,q,G]}],fill:[{fill:[`none`,...D()]}],"stroke-w":[{stroke:[H,Tt,K,yt]}],stroke:[{stroke:[`none`,...D()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function X(...e){return Bt(fe(e))}function Vt(e){return new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`})}function Ht(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``)}const Ut=`prose prose-sm prose-invert max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 prose-a:decoration-foreground/30 hover:prose-a:decoration-foreground prose-code:text-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-secondary prose-pre:rounded-lg prose-ul:text-muted-foreground prose-li:marker:text-muted-foreground prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-border prose-th:p-2 prose-th:text-left prose-th:text-foreground prose-td:border prose-td:border-border prose-td:p-2 prose-td:text-muted-foreground prose-tr:even:bg-secondary/30`;var Wt=he(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/90`,destructive:`bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60`,outline:`border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/30 transition-colors`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,ghost:`hover:bg-secondary hover:text-foreground`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-9 px-4 py-2 has-[>svg]:px-3`,xs:`h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-8 gap-1.5 px-3 has-[>svg]:px-2.5`,lg:`h-12 px-8 text-base rounded-xl has-[>svg]:px-6`,icon:`size-9`,"icon-xs":`size-6 [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-8`,"icon-lg":`size-10`}},defaultVariants:{variant:`default`,size:`default`}});function Z({className:e,variant:t=`default`,size:n=`default`,asChild:r=!1,...i}){return(0,z.jsx)(r?ye:`button`,{"data-slot":`button`,"data-variant":t,"data-size":n,className:X(Wt({variant:t,size:n,className:e})),...i})}var Gt=`termy_site_theme_v1`;function Kt(){try{let e=localStorage.getItem(Gt);if(e===`light`||e===`dark`)return e}catch{}return window.matchMedia(`(prefers-color-scheme: light)`).matches?`light`:`dark`}function qt(){let[e,t]=(0,L.useState)(()=>Kt());return(0,L.useEffect)(()=>{let t=document.documentElement;e===`light`?t.classList.add(`light`):t.classList.remove(`light`)},[e]),{theme:e,toggleTheme:(0,L.useCallback)(()=>{t(e=>{let t=e===`light`?`dark`:`light`;try{localStorage.setItem(Gt,t)}catch{}return t})},[]),setTheme:(0,L.useCallback)(e=>{t(e);try{localStorage.setItem(Gt,e)}catch{}},[])}}var Jt=[{label:`Features`,href:`/#features`},{label:`Download`,href:`/#download`},{label:`Themes`,to:`/themes`},{label:`Docs`,to:`/docs`},{label:`GitHub`,href:`https://github.com/lassejlv/termy`,external:!0}],Yt=`text-sm text-muted-foreground hover:text-foreground transition-colors`,Xt=`block py-2 text-base text-muted-foreground hover:text-foreground transition-colors`;function Zt(){let{theme:e,toggleTheme:t}=qt(),[n,r]=(0,L.useState)(!1);function i(){r(!1)}function o(){r(e=>!e)}return(0,L.useEffect)(()=>{if(!n)return;function e(e){e.key===`Escape`&&i()}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`header`,{className:`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md`,children:(0,z.jsxs)(`nav`,{className:`mx-auto flex h-14 max-w-5xl items-center justify-between px-5`,children:[(0,z.jsxs)(a,{to:`/`,onClick:i,className:`flex items-center gap-2 text-foreground`,children:[(0,z.jsx)(`img`,{src:`/termy_icon.png`,alt:``,width:24,height:24,className:`rounded-md`}),(0,z.jsx)(`span`,{className:`text-sm font-medium`,children:`Termy`})]}),(0,z.jsxs)(`div`,{className:`hidden md:flex items-center gap-6`,children:[Jt.map(e=>e.to?(0,z.jsx)(a,{to:e.to,className:Yt,children:e.label},e.label):(0,z.jsx)(`a`,{href:e.href,className:Yt,...e.external?{target:`_blank`,rel:`noreferrer`}:{},children:e.label},e.label)),(0,z.jsx)(`div`,{className:`w-px h-4 bg-border/50`}),(0,z.jsxs)(ue.a,{href:`https://github.com/sponsors/lassejlv`,target:`_blank`,rel:`noreferrer`,className:`flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors`,whileHover:`hover`,children:[(0,z.jsx)(ue.span,{animate:{scale:[1,1.2,1]},transition:{duration:1,repeat:1/0,ease:`easeInOut`},children:(0,z.jsx)(E,{className:`w-4 h-4 text-rose-500`,fill:`currentColor`})}),(0,z.jsx)(`span`,{children:`Sponsor`})]}),(0,z.jsx)(`button`,{onClick:t,className:`text-muted-foreground hover:text-foreground transition-colors`,"aria-label":e===`light`?`Dark mode`:`Light mode`,children:e===`light`?(0,z.jsx)(T,{className:`w-4 h-4`}):(0,z.jsx)(D,{className:`w-4 h-4`})})]}),(0,z.jsx)(Z,{variant:`ghost`,size:`icon`,onClick:o,className:`md:hidden text-muted-foreground hover:text-foreground`,children:n?(0,z.jsx)(ce,{className:`h-5 w-5`}):(0,z.jsx)(le,{className:`h-5 w-5`})})]})}),n&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden`,onClick:i}),(0,z.jsx)(`div`,{className:`fixed top-14 left-0 right-0 z-50 bg-background border-b border-border px-5 py-4 md:hidden`,children:(0,z.jsxs)(`nav`,{className:`flex flex-col gap-2`,children:[Jt.map(e=>e.to?(0,z.jsx)(a,{to:e.to,className:Xt,onClick:i,children:e.label},e.label):(0,z.jsx)(`a`,{href:e.href,className:Xt,onClick:i,...e.external?{target:`_blank`,rel:`noreferrer`}:{},children:e.label},e.label)),(0,z.jsx)(`div`,{className:`my-2 h-px bg-border/50`}),(0,z.jsxs)(`a`,{href:`https://github.com/sponsors/lassejlv`,target:`_blank`,rel:`noreferrer`,className:`flex items-center gap-2 py-2 text-base text-muted-foreground`,onClick:i,children:[(0,z.jsx)(E,{className:`w-4 h-4 text-rose-500`,fill:`currentColor`}),`Sponsor`]}),(0,z.jsx)(`button`,{onClick:()=>{t(),i()},className:`flex items-center gap-2 py-2 text-base text-muted-foreground`,children:e===`light`?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(T,{className:`w-4 h-4`}),` Dark mode`]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(D,{className:`w-4 h-4`}),` Light mode`]})})]})})]})]})}const Q=u({component:Qt});function Qt(){return(0,z.jsxs)(`div`,{className:`min-h-screen bg-background flex flex-col`,children:[(0,z.jsx)(Zt,{}),(0,z.jsx)(`main`,{className:`flex-1 w-full`,children:(0,z.jsx)(o,{})}),(0,z.jsx)(`footer`,{className:`border-t border-border/30 py-6 px-5`,children:(0,z.jsxs)(`div`,{className:`max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(`img`,{src:`/termy_icon.png`,alt:``,width:16,height:16,className:`rounded`}),(0,z.jsx)(`span`,{children:`Termy`})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,z.jsx)(a,{to:`/docs`,className:`hover:text-foreground transition-colors`,children:`Docs`}),(0,z.jsx)(`a`,{href:`https://github.com/lassejlv/termy`,target:`_blank`,rel:`noreferrer`,className:`hover:text-foreground transition-colors`,children:`GitHub`})]})]})})]})}var $t=`modulepreload`,en=function(e){return`/`+e},tn={};const $=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=en(t,n),t in tn)return;tn[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:$t,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},nn=c(`/add`)({component:i(()=>$(()=>import(`./add-lc1lkMoX.js`),__vite__mapDeps([0,1,2,3,4])),`component`)}),rn=c(`/`)({component:i(()=>$(()=>import(`./routes-BZzjhtRH.js`),__vite__mapDeps([5,1,2,3,4,6,7])),`component`)}),an=c(`/themes/`)({component:i(()=>$(()=>import(`./themes-BSYPJ1pz.js`),__vite__mapDeps([8,1,2,3,4])),`component`)}),on=c(`/releases/`)({component:i(()=>$(()=>import(`./releases-CVcYexw9.js`),__vite__mapDeps([9,1,2,3,4,6,7,10,11])),`component`)});function sn({headings:e}){let[t,n]=(0,L.useState)(``),r=(0,L.useRef)(null),i=(0,L.useRef)(null);(0,L.useEffect)(()=>{let t=window.location.hash.slice(1);t&&e.some(e=>e.id===t)?n(t):e.length>0&&n(e[0].id)},[e]),(0,L.useEffect)(()=>{if(e.length===0)return;i.current&&i.current.disconnect();let t=e.map(e=>document.getElementById(e.id)).filter(Boolean);if(t.length!==0)return i.current=new IntersectionObserver(e=>{if(r.current)return;let t=e.filter(e=>e.isIntersecting);if(t.length>0){let e=t.sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top)[0];n(e.target.id)}},{rootMargin:`-80px 0px -60% 0px`,threshold:[0,.25,.5,.75,1]}),t.forEach(e=>i.current?.observe(e)),()=>{i.current?.disconnect()}},[e]),(0,L.useEffect)(()=>{if(e.length===0)return;let t=()=>{if(r.current)return;let t=window.scrollY,i=document.documentElement.scrollHeight;t+window.innerHeight>=i-50&&n(e[e.length-1].id)};return window.addEventListener(`scroll`,t,{passive:!0}),()=>window.removeEventListener(`scroll`,t)},[e]);let a=(0,L.useCallback)((e,t)=>{e.preventDefault();let i=document.getElementById(t);if(!i)return;r.current=t,n(t),window.history.pushState(null,``,`#${t}`);let a=i.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:a,behavior:`smooth`}),setTimeout(()=>{r.current=null},600)},[]);return e.length===0?(0,z.jsx)(`div`,{className:`hidden xl:block w-60 shrink-0`}):(0,z.jsx)(`aside`,{className:`hidden xl:block w-60 shrink-0`,children:(0,z.jsxs)(`nav`,{className:`sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2`,children:[(0,z.jsx)(`h3`,{className:`text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3`,children:`On this page`}),(0,z.jsx)(`ul`,{className:`space-y-1 border-l border-border/50`,children:e.map(e=>(0,z.jsx)(`li`,{children:(0,z.jsx)(`a`,{href:`#${e.id}`,onClick:t=>a(t,e.id),className:X(`block text-sm py-1 pl-3 transition-all border-l-2 -ml-[2px]`,e.level===2?``:`pl-5`,t===e.id?`text-foreground font-medium border-foreground`:`text-muted-foreground hover:text-foreground border-transparent`),children:e.text})},e.id))})]})})}const cn=c(`/docs/`)({component:i(()=>$(()=>import(`./docs-DDP7TS8M.js`),__vite__mapDeps([12,1,2,3,4,13,14,6])),`component`)}),ln=c(`/contributors/`)({component:i(()=>$(()=>import(`./contributors-Ct1KSCGv.js`),__vite__mapDeps([15,1,2,3,4,11,7])),`component`)}),un=c(`/themes/studio`)({component:i(()=>$(()=>import(`./studio-BBYUQ39y.js`),__vite__mapDeps([16,1,2,3,4])),`component`)});function dn({className:e,...t}){return(0,z.jsx)(`div`,{"data-slot":`card`,className:X(`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm`,e),...t})}function fn({className:e,...t}){return(0,z.jsx)(`div`,{"data-slot":`card-header`,className:X(`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6`,e),...t})}function pn({className:e,...t}){return(0,z.jsx)(`div`,{"data-slot":`card-title`,className:X(`leading-none font-semibold`,e),...t})}function mn({className:e,...t}){return(0,z.jsx)(`div`,{"data-slot":`card-description`,className:X(`text-muted-foreground text-sm`,e),...t})}function hn({className:e,...t}){return(0,z.jsx)(`div`,{"data-slot":`card-content`,className:X(`px-6`,e),...t})}var gn=`/theme-api`;async function _n(e,t){let n=new Headers(t?.headers??{});t?.body instanceof FormData||n.set(`Content-Type`,`application/json`);let r=await fetch(`${gn}${e}`,{...t,credentials:`include`,headers:n});if(!r.ok){let e=`Request failed (${r.status})`;try{let t=await r.json();t.error&&(e=t.error)}catch{}throw Error(e)}if(r.status!==204)return await r.json()}async function vn(){let e=await fetch(`${gn}/auth/me`,{credentials:`include`});if(e.status===401)return null;if(!e.ok){let t=`Could not resolve session (${e.status})`;try{let n=await e.json();n.error&&(t=n.error)}catch{}throw Error(t)}return await e.json()}async function yn(){await _n(`/auth/logout`,{method:`POST`})}async function bn(){return _n(`/themes`,{method:`GET`})}async function xn(){return _n(`/themes/me`,{method:`GET`})}async function Sn(e){return _n(`/themes/${e}/versions`,{method:`GET`})}async function Cn(e){let t=new FormData;return t.append(`name`,e.name),t.append(`description`,e.description),t.append(`isPublic`,String(e.isPublic)),t.append(`version`,e.version),En(t,e.themeFile??null,e.themeJson),_n(`/themes`,{method:`POST`,body:t})}async function wn(e,t){return _n(`/themes/${e}`,{method:`PATCH`,body:JSON.stringify({name:t.name,description:t.description,isPublic:t.isPublic})})}async function Tn(e,t){let n=new FormData;return n.append(`version`,t.version),n.append(`changelog`,t.changelog),n.append(`checksumSha256`,t.checksumSha256),En(n,t.themeFile??null,t.themeJson),_n(`/themes/${e}/versions`,{method:`POST`,body:n})}function En(e,t,n){let r=n?.trim();if(r){e.append(`themeJson`,r);return}t&&e.append(`themeFile`,t)}const Dn={foreground:`#d1d5db`,background:`#141a24`,cursor:`#d1d5db`,black:`#2e3436`,red:`#cc0000`,green:`#4e9a06`,yellow:`#c4a000`,blue:`#3465a4`,magenta:`#75507b`,cyan:`#06989a`,white:`#d3d7cf`,bright_black:`#555753`,bright_red:`#ef2929`,bright_green:`#8ae234`,bright_yellow:`#fce94f`,bright_blue:`#729fcf`,bright_magenta:`#ad7fa8`,bright_cyan:`#34e2e2`,bright_white:`#eeeeec`};function On(e){if(typeof window>`u`)return`${gn}/auth/github/login`;let t=`${window.location.origin}${e}`;return`${gn}/auth/github/login?redirect_to=${encodeURIComponent(t)}`}const kn=c(`/themes/add`)({component:An});function An(){let[e,t]=(0,L.useState)(null),[n,r]=(0,L.useState)([]),[i,o]=(0,L.useState)(``),[s,c]=(0,L.useState)([]),[l,u]=(0,L.useState)(``),[d,f]=(0,L.useState)(``),[p,m]=(0,L.useState)(!0),[h,ee]=(0,L.useState)(`1.0.0`),[te,ne]=(0,L.useState)(null),[g,_]=(0,L.useState)(``),[re,ie]=(0,L.useState)(``),[v,y]=(0,L.useState)(``),[b,ae]=(0,L.useState)(!0),[oe,x]=(0,L.useState)(``),[se,S]=(0,L.useState)(``),[C,w]=(0,L.useState)(``),[T,E]=(0,L.useState)(null),[ce,D]=(0,L.useState)(``),[le,ue]=(0,L.useState)(!0),[O,k]=(0,L.useState)(!1),[A,j]=(0,L.useState)(null),[M,N]=(0,L.useState)(null),P=n.find(e=>e.slug===i)??null,F=!!e&&!!P&&P?.githubUsernameClaim.toLowerCase()===e?.githubLogin.toLowerCase(),I=(0,L.useMemo)(()=>On(`/add`),[]);(0,L.useEffect)(()=>{de()},[]),(0,L.useEffect)(()=>{P&&(ie(P.name),y(P.description),ae(P.isPublic))},[P]);async function de(){try{j(null),ue(!0);let e=await vn();if(t(e),!e){r([]),o(``),c([]);return}let n=await xn();if(r(n),n.length>0){let e=n[0].slug;o(e),await R(e)}}catch(e){j(jn(e))}finally{ue(!1)}}async function R(e){try{c((await Sn(e)).versions)}catch(e){c([]),j(jn(e))}}async function fe(){try{j(null),await yn(),t(null),N(`Logged out.`)}catch(e){j(jn(e))}}async function pe(e){if(e.preventDefault(),!Mn(te,g)){j(`Theme JSON file or pasted JSON is required.`);return}try{j(null),N(null),k(!0);let e=await Cn({name:l,description:d,isPublic:p,version:h,themeFile:te,themeJson:g});r(t=>[e,...t.filter(t=>t.id!==e.id)]),o(e.slug),c([]),u(``),f(``),ee(`1.0.0`),ne(null),_(``),N(`Theme '${e.slug}' created.`)}catch(e){j(jn(e))}finally{k(!1)}}async function me(e){if(e.preventDefault(),P)try{j(null),N(null),k(!0);let e=await wn(P.slug,{name:re,description:v,isPublic:b});r(t=>t.map(t=>t.id===e.id?e:t)),N(`Theme '${e.slug}' updated.`)}catch(e){j(jn(e))}finally{k(!1)}}async function he(e){if(e.preventDefault(),P){if(!Mn(T,ce)){j(`Theme JSON file or pasted JSON is required.`);return}try{j(null),N(null),k(!0),await Tn(P.slug,{version:oe,changelog:se,checksumSha256:C,themeFile:T,themeJson:ce}),r(await xn()),await R(P.slug),x(``),S(``),w(``),E(null),D(``),N(`Version published.`)}catch(e){j(jn(e))}finally{k(!1)}}}async function ge(e){o(e),N(null),j(null),await R(e)}return(0,z.jsx)(`section`,{className:`pt-24 pb-16`,children:(0,z.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,z.jsxs)(`div`,{className:`mb-6`,children:[(0,z.jsx)(`h1`,{className:`text-3xl md:text-4xl font-bold`,children:`Releases`}),(0,z.jsx)(`p`,{className:`mt-2 text-muted-foreground`,children:`Upload theme JSON files and publish versions.`})]}),(0,z.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 mb-6`,children:[(0,z.jsx)(Z,{asChild:!0,variant:`outline`,children:(0,z.jsx)(a,{to:`/themes`,children:`Back to store`})}),e?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`span`,{className:`text-sm text-muted-foreground`,children:[`Signed in as `,(0,z.jsxs)(`span`,{className:`font-medium`,children:[`@`,e.githubLogin]})]}),(0,z.jsx)(Z,{type:`button`,variant:`outline`,onClick:fe,children:`Log out`})]}):(0,z.jsx)(`a`,{href:I,children:(0,z.jsx)(Z,{type:`button`,children:`Login with GitHub`})})]}),A&&(0,z.jsx)(`div`,{className:`rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive mb-6`,children:A}),M&&(0,z.jsx)(`div`,{className:`rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm mb-6`,children:M}),!le&&!e&&(0,z.jsxs)(dn,{children:[(0,z.jsxs)(fn,{children:[(0,z.jsx)(pn,{children:`Authentication Required`}),(0,z.jsx)(mn,{children:`Sign in with GitHub to access the theme dashboard.`})]}),(0,z.jsx)(hn,{children:(0,z.jsx)(`a`,{href:I,children:(0,z.jsx)(Z,{type:`button`,children:`Login with GitHub`})})})]}),e&&(0,z.jsxs)(`div`,{className:`grid gap-6 lg:grid-cols-[320px_1fr]`,children:[(0,z.jsxs)(dn,{children:[(0,z.jsxs)(fn,{children:[(0,z.jsx)(pn,{children:`Your Themes`}),(0,z.jsx)(mn,{children:le?`Loading...`:`${n.length} themes`})]}),(0,z.jsx)(hn,{className:`space-y-2`,children:n.map(e=>(0,z.jsxs)(`button`,{type:`button`,className:`w-full rounded-lg border px-3 py-2 text-left transition-colors ${i===e.slug?`border-primary bg-primary/10`:`border-border bg-background hover:border-primary/50`}`,onClick:()=>void ge(e.slug),children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,z.jsx)(`p`,{className:`font-medium`,children:e.name}),(0,z.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:e.latestVersion??`no versions`})]}),(0,z.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`/`,e.slug]})]},e.id))})]}),(0,z.jsxs)(`div`,{className:`space-y-6`,children:[(0,z.jsxs)(dn,{children:[(0,z.jsxs)(fn,{children:[(0,z.jsx)(pn,{children:`Create Theme`}),(0,z.jsx)(mn,{children:`Create a new theme with initial JSON.`})]}),(0,z.jsx)(hn,{children:(0,z.jsxs)(`form`,{className:`space-y-3`,onSubmit:e=>void pe(e),children:[(0,z.jsx)(`input`,{className:`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,placeholder:`Theme name`,value:l,onChange:e=>u(e.target.value),disabled:!e||O}),(0,z.jsx)(`input`,{className:`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,placeholder:`Initial version (e.g. 1.0.0)`,value:h,onChange:e=>ee(e.target.value),disabled:!e||O}),(0,z.jsx)(`textarea`,{className:`min-h-20 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,placeholder:`Description`,value:d,onChange:e=>f(e.target.value),disabled:!e||O}),(0,z.jsxs)(`label`,{className:`flex items-center gap-2 text-sm text-muted-foreground`,children:[(0,z.jsx)(`input`,{type:`checkbox`,checked:p,onChange:e=>m(e.target.checked),disabled:!e||O}),`Public theme`]}),(0,z.jsx)(`input`,{className:`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs`,type:`file`,accept:`.json,application/json`,onChange:e=>ne(e.target.files?.[0]??null),disabled:!e||O}),(0,z.jsx)(`textarea`,{className:`min-h-32 w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs`,placeholder:`Or paste theme JSON here`,value:g,onChange:e=>_(e.target.value),disabled:!e||O}),(0,z.jsx)(Z,{type:`submit`,disabled:!e||O,children:`Create theme`})]})})]}),(0,z.jsxs)(dn,{children:[(0,z.jsxs)(fn,{children:[(0,z.jsx)(pn,{children:`Edit Theme`}),(0,z.jsx)(mn,{children:P?`${P.name}`:`Select a theme from the list`})]}),(0,z.jsx)(hn,{children:P&&(0,z.jsxs)(`div`,{className:`space-y-6`,children:[(0,z.jsxs)(`form`,{className:`space-y-3`,onSubmit:e=>void me(e),children:[(0,z.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Metadata`}),(0,z.jsx)(`input`,{className:`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,value:re,onChange:e=>ie(e.target.value),disabled:!F||O}),(0,z.jsx)(`textarea`,{className:`min-h-16 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,value:v,onChange:e=>y(e.target.value),disabled:!F||O}),(0,z.jsxs)(`label`,{className:`flex items-center gap-2 text-sm text-muted-foreground`,children:[(0,z.jsx)(`input`,{type:`checkbox`,checked:b,onChange:e=>ae(e.target.checked),disabled:!F||O}),`Public theme`]}),(0,z.jsx)(Z,{type:`submit`,disabled:!F||O,children:`Save changes`})]}),(0,z.jsxs)(`form`,{className:`space-y-3`,onSubmit:e=>void he(e),children:[(0,z.jsx)(`h3`,{className:`text-sm font-semibold`,children:`New Version`}),(0,z.jsx)(`input`,{className:`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,placeholder:`Version (e.g. 1.2.0)`,value:oe,onChange:e=>x(e.target.value),disabled:!F||O}),(0,z.jsx)(`input`,{className:`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,type:`file`,accept:`.json,application/json`,onChange:e=>E(e.target.files?.[0]??null),disabled:!F||O}),(0,z.jsx)(`textarea`,{className:`min-h-32 w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs`,placeholder:`Or paste theme JSON`,value:ce,onChange:e=>D(e.target.value),disabled:!F||O}),(0,z.jsx)(`textarea`,{className:`min-h-16 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,placeholder:`Changelog`,value:se,onChange:e=>S(e.target.value),disabled:!F||O}),(0,z.jsx)(`input`,{className:`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm`,placeholder:`Checksum SHA256 (optional)`,value:C,onChange:e=>w(e.target.value),disabled:!F||O}),(0,z.jsx)(Z,{type:`submit`,disabled:!F||O,children:`Publish version`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{className:`mb-2 text-sm font-semibold`,children:`Version History`}),(0,z.jsxs)(`div`,{className:`space-y-2`,children:[s.map(e=>(0,z.jsxs)(`div`,{className:`rounded-lg border border-border px-3 py-2`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,z.jsx)(`span`,{className:`font-medium`,children:e.version}),(0,z.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:new Date(e.publishedAt).toLocaleDateString()})]}),e.changelog&&(0,z.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:e.changelog})]},e.id)),s.length===0&&(0,z.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`No versions published.`})]})]})]})})]})]})]})]})})}function jn(e){return e instanceof Error?e.message:`Unexpected error`}function Mn(e,t){return e!==null||t.trim().length>0}const Nn=c(`/releases/$tag`)({component:i(()=>$(()=>import(`./_tag-y6a9UR-a.js`),__vite__mapDeps([17,1,2,3,4,6,7,10,11])),`component`)});var Pn=`---
title: Command Boundary
description: Ownership boundaries for command and keybind behavior
order: 1
category: Architecture
---

This document defines ownership boundaries for command and keybind behavior.

## Ownership

- \`termy_command_core\` owns:
  - Command IDs and config-facing command names.
  - Command config-name parsing and normalization.
  - Keybind defaults.
  - Keybind directive parsing (\`clear\`, bind, unbind).
  - Deterministic keybind resolution order.
- App/CLI adapters own:
  - UI labels, keywords, and command-palette presentation.
  - Platform-specific visibility policy for palette entries.
  - UI trigger canonicalization and validation (for example GPUI keystroke parsing).

## Dependency Rule

- \`termy_command_core\` must remain a pure domain crate.
- \`termy_command_core\` must not depend on:
  - \`termy_config_core\`
  - \`gpui\`
  - other UI or presentation crates

## Integration Pattern

- Adapters convert parsed config keybind lines into \`termy_command_core::KeybindLineRef\`.
- Adapters call \`parse_keybind_directives_from_iter\`; trigger canonicalization happens in \`termy_command_core\`.
- Adapters call \`resolve_keybinds\` over \`default_resolved_keybinds\`.

This keeps one canonical command/keybind engine while preserving thin and readable adapter code.
`,Fn=`---
title: Building from Source
description: Build Termy from source code for development or unsupported platforms
order: 2
category: Guides
---

# Building Termy from Source

This guide covers building Termy from source. Useful for:
- Developers contributing to Termy
- Users on unsupported platforms
- Those wanting the latest unreleased features

---

## Prerequisites

### Required

- **Rust** 1.93+ ([rustup.rs](https://rustup.rs))
- **Git** ([git-scm.com](https://git-scm.com))

### Platform-Specific

#### macOS

\`\`\`bash
# Install Xcode Command Line Tools
xcode-select --install

# Or via Homebrew
brew install git
\`\`\`

#### Linux

\`\`\`bash
# Ubuntu/Debian
sudo apt update
sudo apt install build-essential git pkg-config libssl-dev

# Arch Linux
sudo pacman -S base-devel git

# Fedora
sudo dnf install gcc git openssl-devel
\`\`\`

#### Windows

Install:
- [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) or full VS
- [Git for Windows](https://gitforwindows.org/)

---

## Clone the Repository

\`\`\`bash
git clone https://github.com/lassejlv/termy.git
cd termy
\`\`\`

### Stay Updated

\`\`\`bash
git pull origin main
\`\`\`

---

## Build the Project

### Standard Build

\`\`\`bash
cargo build --release
\`\`\`

This creates the optimized binary at:
- **macOS/Linux**: \`target/release/termy\`
- **Windows**: \`target/release/termy.exe\`

### Development Build

For faster builds during development:

\`\`\`bash
cargo build
\`\`\`

Binary will be in \`target/debug/termy\`.

### Build Time

- Clean build: 2-5 minutes
- Incremental: 10-30 seconds

---

## Run Your Build

\`\`\`bash
# macOS/Linux
./target/release/termy

# Windows
.\\target\\release\\termy.exe
\`\`\`

---

## Platform-Specific Builds

### macOS Universal Binary

Build for both Intel and Apple Silicon:

\`\`\`bash
# Intel (x86_64)
rustup target add x86_64-apple-darwin
CARGO_TARGET_X86_64_APPLE_DARWIN_LINKER="clang" \\
  cargo build --release --target x86_64-apple-darwin

# Apple Silicon (ARM64)
rustup target add aarch64-apple-darwin
CARGO_TARGET_AARCH64_APPLE_DARWIN_LINKER="clang" \\
  cargo build --release --target aarch64-apple-darwin

# Combine into universal binary
lipo -create \\
  target/x86_64-apple-darwin/release/termy \\
  target/aarch64-apple-darwin/release/termy \\
  -o target/release/termy-universal
\`\`\`

### Linux Static Binary

For maximum compatibility:

\`\`\`bash
# Using musl for static linking
rustup target add x86_64-unknown-linux-musl
cargo build --release --target x86_64-unknown-linux-musl
\`\`\`

### Windows Installer

Build the installer package:

\`\`\`bash
# Requires WiX Toolset
cargo wix
\`\`\`

---

## Development Workflow

### Run Tests

\`\`\`bash
# All tests
cargo test

# Specific crate
cargo test -p termy-core

# With output
cargo test -- --nocapture
\`\`\`

### Check Code

\`\`\`bash
# Fast syntax/type check (no build)
cargo check

# Linting
cargo clippy

# Format code
cargo fmt
\`\`\`

### Generate Documentation

\`\`\`bash
# Build docs
cargo doc --no-deps

# Open in browser
cargo doc --no-deps --open
\`\`\`

---

## Development Tips

### Hot Reload for UI

When working on the UI:

\`\`\`bash
# Watch for changes and rebuild
cargo watch -x "build"

# Or with automatic restart
# cargo install cargo-watch
cargo watch -x "run"
\`\`\`

### Debug Logging

Enable debug output:

\`\`\`bash
RUST_LOG=debug ./target/release/termy
\`\`\`

### Profiling

\`\`\`bash
# Build with debug symbols
cargo build --release --features profile

# Run with profiler
# On macOS: Instruments
# On Linux: perf
\`\`\`

---

## Common Build Issues

### "linker not found"

**Linux**:
\`\`\`bash
sudo apt install build-essential
# or
sudo pacman -S base-devel
\`\`\`

**macOS**:
\`\`\`bash
xcode-select --install
\`\`\`

### "openssl-sys" errors

\`\`\`bash
# macOS
brew install openssl
export OPENSSL_DIR=/opt/homebrew/opt/openssl

# Linux
sudo apt install libssl-dev
\`\`\`

### "Unable to find libclang"

\`\`\`bash
# macOS
brew install llvm

# Linux
sudo apt install libclang-dev
\`\`\`

### Slow Builds

Enable optimizations:

\`\`\`toml
# Add to Cargo.toml profile
[profile.dev]
opt-level = 1  # Basic optimization for dev builds
\`\`\`

Or use sccache:
\`\`\`bash
cargo install sccache
export RUSTC_WRAPPER=sccache
\`\`\`

---

## Contributing

### Before Submitting

1. **Format code**: \`cargo fmt\`
2. **Run lints**: \`cargo clippy -- -D warnings\`
3. **Run tests**: \`cargo test\`
4. **Check build**: \`cargo build --release\`

### Branch Naming

- \`feat/description\` - New features
- \`fix/description\` - Bug fixes
- \`docs/description\` - Documentation
- \`refactor/description\` - Code refactoring

### Commit Messages

\`\`\`
feat: Add tab search functionality
fix: Correct cursor position after resize
docs: Update installation guide
\`\`\`

---

## Packaging

### Create Release Package

\`\`\`bash
# macOS
mkdir -p Termy.app/Contents/MacOS
cp target/release/termy Termy.app/Contents/MacOS/
codesign --force --deep --sign - Termy.app

# Linux (tarball)
tar -czf termy-linux-x64.tar.gz -C target/release termy

# Windows (zip)
7z a termy-windows-x64.zip .\\target\\release\\termy.exe
\`\`\`

---

## Resources

- **Repository**: https://github.com/lassejlv/termy
- **Issues**: https://github.com/lassejlv/termy/issues
- **Discussions**: https://github.com/lassejlv/termy/discussions

---

## Next Steps

- Read the [Architecture Guide](/docs/architecture/command-boundary) to understand the codebase
- Check [Contributing Guidelines](https://github.com/lassejlv/termy/blob/main/CONTRIBUTING.md)
- Join the [Discord](https://discord.gg/4VDBFD7vAp) for help
`,In="---\ntitle: Configuration\ndescription: Configure Termy settings and appearance\norder: 1\ncategory: Getting Started\n---\n\n_This file is generated by `cargo run -p xtask -- generate-config-doc`. Do not edit manually._\n\nTermy reads configuration from `~/.config/termy/config.txt`.\n\n## Appearance\n\n`theme`\n- Default: `termy`\n- Current color scheme name\n- Group: `THEME`\n\n`font_family`\n- Default: `JetBrains Mono`\n- Font family used in terminal UI\n- Group: `FONT`\n\n`font_size`\n- Default: `14`\n- Terminal font size in pixels\n- Group: `FONT`\n\n`background_opacity`\n- Default: `1`\n- Window background opacity (0.0 to 1.0)\n- Group: `WINDOW`\n\n`background_blur`\n- Default: `false`\n- Enable blur effect for transparent backgrounds\n- Group: `WINDOW`\n\n`padding_x`\n- Default: `12`\n- Left and right terminal padding\n- Group: `PADDING`\n\n`padding_y`\n- Default: `8`\n- Top and bottom terminal padding\n- Group: `PADDING`\n\n## Terminal\n\n`shell`\n- Default: unset\n- Executable used for new sessions\n- Group: `SHELL`\n\n`term`\n- Default: `xterm-256color`\n- TERM value exposed to child applications\n- Group: `SHELL`\n\n`colorterm`\n- Default: `truecolor`\n- COLORTERM value exposed to child applications\n- Group: `SHELL`\n\n`cursor_style`\n- Default: `block`\n- Shape of the terminal cursor\n- Group: `CURSOR`\n\n`cursor_blink`\n- Default: `true`\n- Enable blinking cursor animation\n- Group: `CURSOR`\n\n`mouse_scroll_multiplier`\n- Default: `3`\n- Mouse wheel scroll speed multiplier\n- Group: `SCROLLING`\n\n`scrollbar_visibility`\n- Default: `on_scroll`\n- Terminal scrollbar visibility behavior\n- Group: `SCROLLING`\n\n`scrollbar_style`\n- Default: `neutral`\n- Terminal scrollbar color style\n- Group: `SCROLLING`\n\n`scrollback_history`\n- Default: `2000`\n- Aliases: `scrollback`\n- Lines retained in terminal scrollback\n- Group: `SCROLLING`\n\n`inactive_tab_scrollback`\n- Default: unset\n- Scrollback limit for inactive tabs\n- Group: `SCROLLING`\n\n`command_palette_show_keybinds`\n- Default: `true`\n- Show shortcut badges in command palette rows\n- Group: `UI`\n\n## Tabs\n\n`tab_title_priority`\n- Default: `manual, explicit, shell, fallback`\n- Exact source priority for tab titles\n- Group: `TAB TITLES`\n\n`tab_title_mode`\n- Default: `smart`\n- How tab titles are determined\n- Group: `TAB TITLES`\n\n`tab_title_fallback`\n- Default: `Terminal`\n- Default tab title when no source is available\n- Group: `TAB TITLES`\n\n`tab_title_explicit_prefix`\n- Default: `termy:tab:`\n- Prefix used for explicit OSC title payloads\n- Group: `TAB TITLES`\n\n`tab_title_shell_integration`\n- Default: `true`\n- Export TERMY_* environment values for shell hooks\n- Group: `TAB TITLES`\n\n`tab_title_prompt_format`\n- Default: `{cwd}`\n- Template for prompt-derived tab titles\n- Group: `TAB TITLES`\n\n`tab_title_command_format`\n- Default: `{command}`\n- Template for command-derived tab titles\n- Group: `TAB TITLES`\n\n`tab_close_visibility`\n- Default: `active_hover`\n- When tab close buttons are visible\n- Group: `TAB STRIP`\n\n`tab_width_mode`\n- Default: `active_grow_sticky`\n- How tab widths react to active state\n- Group: `TAB STRIP`\n\n`show_termy_in_titlebar`\n- Default: `true`\n- Show or hide the termy branding in the titlebar\n- Group: `TITLE BAR`\n\n## Advanced\n\n`working_dir`\n- Default: unset\n- Initial directory for new sessions\n- Group: `STARTUP`\n\n`working_dir_fallback`\n- Default: `home` (macOS/Windows), `process` (Linux/other)\n- Aliases: `default_working_dir`\n- Directory used when working_dir is unset\n- Group: `STARTUP`\n\n`warn_on_quit`\n- Default: `false`\n- Warn every time you try to quit the app\n- Group: `SAFETY`\n\n`warn_on_quit_with_running_process`\n- Default: `true`\n- Warn before quitting when a tab has an active process\n- Group: `SAFETY`\n\n`window_width`\n- Default: `1280`\n- Default startup window width in pixels\n- Group: `WINDOW`\n\n`window_height`\n- Default: `820`\n- Default startup window height in pixels\n- Group: `WINDOW`\n\n## Keybindings\n\n`keybind`\n- Default: built-in platform defaults\n- Keybinding override directive\n- Group: `KEYBINDS`\n\n## Colors\n\nUse `[colors]` to override theme colors with `#RRGGBB` values.\n\n`foreground`\n- Aliases: `fg`\n- Default text color\n\n`background`\n- Aliases: `bg`\n- Terminal background color\n\n`cursor`\n- Cursor color\n\n`black`\n- Aliases: `color0`\n- ANSI black\n\n`red`\n- Aliases: `color1`\n- ANSI red\n\n`green`\n- Aliases: `color2`\n- ANSI green\n\n`yellow`\n- Aliases: `color3`\n- ANSI yellow\n\n`blue`\n- Aliases: `color4`\n- ANSI blue\n\n`magenta`\n- Aliases: `color5`\n- ANSI magenta\n\n`cyan`\n- Aliases: `color6`\n- ANSI cyan\n\n`white`\n- Aliases: `color7`\n- ANSI white\n\n`bright_black`\n- Aliases: `brightblack`, `color8`\n- ANSI bright black\n\n`bright_red`\n- Aliases: `brightred`, `color9`\n- ANSI bright red\n\n`bright_green`\n- Aliases: `brightgreen`, `color10`\n- ANSI bright green\n\n`bright_yellow`\n- Aliases: `brightyellow`, `color11`\n- ANSI bright yellow\n\n`bright_blue`\n- Aliases: `brightblue`, `color12`\n- ANSI bright blue\n\n`bright_magenta`\n- Aliases: `brightmagenta`, `color13`\n- ANSI bright magenta\n\n`bright_cyan`\n- Aliases: `brightcyan`, `color14`\n- ANSI bright cyan\n\n`bright_white`\n- Aliases: `brightwhite`, `color15`\n- ANSI bright white\n",Ln=`---
title: Customization Guide
description: Deep customization of fonts, themes, appearance, and behavior
order: 1
category: Guides
---

# Customization Guide

This guide covers everything you can customize in Termy. From subtle tweaks to complete overhauls, make Termy work exactly how you want.

---

## The Configuration File

Termy uses a simple text-based configuration at:

\`\`\`
~/.config/termy/config.txt
\`\`\`

### File Structure

\`\`\`txt
# Comments start with #
key = value

[section]
key = value
\`\`\`

### Creating Your Config

\`\`\`bash
mkdir -p ~/.config/termy
touch ~/.config/termy/config.txt
\`\`\`

Changes apply immediately—no restart required!

---

## Typography

### Font Family

\`\`\`txt
font_family = JetBrains Mono
\`\`\`

**Finding Fonts**:

\`\`\`bash
# macOS: List all fonts
system_profiler SPFontsDataType | grep "Family:"

# Linux: List with fontconfig
fc-list : family | sort | uniq
\`\`\`

**Recommended Fonts**:

| Font | Best For | Features |
|------|----------|----------|
| JetBrains Mono | Coding | Excellent ligatures, readable |
| Fira Code | Coding | Ligatures, weights |
| Cascadia Code | Windows | Microsoft designed |
| SF Mono | macOS | Native look |
| Hack | Terminal | Zero distinction |

### Font Size

\`\`\`txt
font_size = 14          # Pixels
\`\`\`

Tip: Use \`Cmd/Ctrl + =\` and \`Cmd/Ctrl + -\` for temporary zooming.

### Font Weight (Future)

Coming in a future release: separate control for bold text weight.

---

## Window Appearance

### Background Opacity

\`\`\`txt
background_opacity = 0.95     # 0.0 (invisible) to 1.0 (opaque)
\`\`\`

For a true transparent terminal:
\`\`\`txt
background_opacity = 0.85
background_blur = true
\`\`\`

### Background Blur

\`\`\`txt
background_blur = true        # macOS/Windows
\`\`\`

Creates a frosted glass effect. Performance impact: minimal on GPU.

### Window Padding

\`\`\`txt
padding_x = 12      # Left/right padding (pixels)
padding_y = 8       # Top/bottom padding (pixels)
\`\`\`

Increase for a more spacious feel:
\`\`\`txt
padding_x = 20
padding_y = 16
\`\`\`

### Window Dimensions

\`\`\`txt
window_width = 1280     # Initial width
window_height = 820     # Initial height
\`\`\`

Termy remembers your last window size automatically.

---

## Cursor Customization

### Style

\`\`\`txt
cursor_style = block        # block, beam, or underline
\`\`\`

| Style | Best For |
|-------|----------|
| \`block\` | Visibility, traditional |
| \`beam\` | Precise positioning |
| \`underline\` | Minimal distraction |

### Blinking

\`\`\`txt
cursor_blink = true         # Animate cursor
\`\`\`

Set to \`false\` for a solid cursor.

---

## Scrollback & History

### Lines to Keep

\`\`\`txt
scrollback_history = 10000    # Lines in scrollback
\`\`\`

Higher values use more memory. Recommended:
- Low (2500): Minimal memory
- Medium (10000): Default balance
- High (50000): Extensive history

### Inactive Tab Behavior

\`\`\`txt
inactive_tab_scrollback = 5000    # Limit for inactive tabs
\`\`\`

Saves memory by reducing history for tabs you're not viewing.

### Scroll Speed

\`\`\`txt
mouse_scroll_multiplier = 3     # Lines per scroll tick
\`\`\`

Increase for faster scrolling, decrease for precision.

### Scrollbar Style

\`\`\`txt
scrollbar_visibility = on_scroll    # always, never, on_scroll
scrollbar_style = neutral           # neutral, rounded, etc.
\`\`\`

---

## Tab Behavior

### Title Sources

\`\`\`txt
tab_title_priority = manual, explicit, shell, fallback
\`\`\`

Priority order:
1. **Manual**: You renamed the tab
2. **Explicit**: Program set title via OSC
3. **Shell**: Working directory or command
4. **Fallback**: Default "Terminal"

### Title Mode

\`\`\`txt
tab_title_mode = smart      # smart, prompt, command, path, explicit
\`\`\`

| Mode | Behavior |
|------|----------|
| \`smart\` | Automatically detects best source |
| \`prompt\` | Uses shell prompt template |
| \`command\` | Shows running command |
| \`path\` | Shows working directory |
| \`explicit\` | Only OSC-set titles |

### Custom Title Templates

\`\`\`txt
tab_title_prompt_format = {cwd} {git_branch}
tab_title_command_format = {command}
\`\`\`

Variables available:
- \`{cwd}\` - Current working directory
- \`{command}\` - Running command name
- \`{git_branch}\` - Git branch (if applicable)

### Tab Close Buttons

\`\`\`txt
tab_close_visibility = active_hover    # always, never, active_hover
\`\`\`

- \`always\`: Show on every tab
- \`never\`: Hide completely (use \`Cmd/Ctrl + W\`)
- \`active_hover\`: Show on hover for active tab

### Tab Width

\`\`\`txt
tab_width_mode = active_grow_sticky
\`\`\`

Controls how tabs resize when many are open.

---

## Colors & Themes

### Built-in Themes

\`\`\`txt
theme = catppuccin
\`\`\`

Available:
- \`termy\` - Default, clean
- \`catppuccin\` - Soft pastel
- \`gruvbox\` - Retro, warm
- \`tokyonight\` - Dark, modern
- \`github\` - GitHub-inspired
- \`dracula\` - Popular purple

### Custom Colors

Override any theme:

\`\`\`txt
[colors]
foreground = #f8f8f2
background = #282a36
cursor = #f8f8f2

# ANSI colors
black = #21222c
red = #ff5555
green = #50fa7b
yellow = #f1fa8c
blue = #bd93f9
magenta = #ff79c6
cyan = #8be9fd
white = #f8f8f2

# Bright variants
bright_black = #6272a4
bright_red = #ff6e6e
bright_green = #69ff94
bright_yellow = #ffffa5
bright_blue = #d6acff
bright_magenta = #ff92df
bright_cyan = #a4ffff
bright_white = #ffffff
\`\`\`

### Opacity by Color

Coming soon: Set specific alpha for background colors.

---

## Shell Integration

### Default Shell

\`\`\`txt
shell = /bin/zsh
\`\`\`

Termy uses your login shell by default. Override here.

### Working Directory

\`\`\`txt
working_dir = ~/projects
working_dir_fallback = home    # home, process, or path
\`\`\`

- \`home\`: Start in ~
- \`process\`: Use Termy's working directory
- Custom path: \`/your/path\`

### Environment Variables

\`\`\`txt
# Passed to all shells
term = xterm-256color
colorterm = truecolor
\`\`\`

Termy automatically sets:
- \`TERMY=1\`
- \`TERMY_PID\`
- \`TERMY_TAB_ID\`

---

## Safety & Behavior

### Quit Warnings

\`\`\`txt
warn_on_quit = false                              # Always warn
warn_on_quit_with_running_process = true          # Warn if processes running
\`\`\`

### Tab Protection

\`\`\`txt
tab_close_on_exit = ask    # never, always, ask
\`\`\`

---

## Example Configurations

### Minimal

\`\`\`txt
font_family = JetBrains Mono
font_size = 14
theme = termy
\`\`\`

### Developer

\`\`\`txt
font_family = Fira Code
font_size = 13
theme = tokyonight
scrollback_history = 50000
tab_title_mode = command
\`\`\`

### Aesthetics Focus

\`\`\`txt
font_family = SF Mono
font_size = 15
theme = catppuccin
background_opacity = 0.9
background_blur = true
padding_x = 20
padding_y = 16
cursor_style = beam
\`\`\`

### Performance

\`\`\`txt
font_family = JetBrains Mono
font_size = 14
background_opacity = 1.0
background_blur = false
scrollback_history = 2500
inactive_tab_scrollback = 1000
\`\`\`

---

## Troubleshooting Customization

### Config Not Applying

1. Check file location: \`~/.config/termy/config.txt\`
2. Verify syntax: \`key = value\` (spaces around \`=\`)
3. Check for typos in keys
4. Restart Termy if needed

### Font Not Found

\`\`\`bash
# Test if font exists
fc-match "Your Font Name"
\`\`\`

Use exact family name from font list.

### Broken Config

If Termy won't start:

\`\`\`bash
# Backup and reset
mv ~/.config/termy/config.txt ~/.config/termy/config.txt.backup
termy  # Should start with defaults

# Restore parts of config gradually
\`\`\`

---

## Related Guides

- [Configuration](/docs/configuration) - Full option reference
- [Keybindings](/docs/keybindings) - Customize shortcuts
- [FAQ](/docs/faq) - Common questions
`,Rn=`---
title: FAQ
description: Frequently asked questions about Termy
order: 2
category: Help & Troubleshooting
---

# Frequently Asked Questions

## General Questions

### Is Termy free?

**Yes**. Termy is completely free and open source, released under the MIT license. You can use it for personal or commercial projects without cost.

### Is Termy stable?

Termy is currently in **beta**. While it's stable for daily use, you may encounter occasional bugs. We recommend:
- Keeping your config backed up
- Reporting issues on GitHub
- Updating regularly for fixes

### How is Termy different from other terminals?

| Feature | Termy | Typical Terminal |
|---------|-------|----------------|
| GPU-accelerated | Yes | Rarely |
| Memory usage | ~18MB | 100-300MB+ |
| Startup time | ~8ms | 50-200ms |
| Built with | Rust | Electron/C++ |
| Config file | Single text file | Often complex |

### Can I use Termy for work/commercial projects?

Absolutely! The MIT license permits commercial use. No attribution required (though appreciated).

---

## Installation & Updates

### How do I install Termy?

**macOS** (Homebrew - easiest):
\`\`\`bash
brew install --cask termy-org/termy/termy
\`\`\`

**Arch Linux**:
\`\`\`bash
paru -S termy-bin
\`\`\`

**Other**: Download from [GitHub Releases](https://github.com/lassejlv/termy/releases)

See [Installation Guide](/docs/installation) for detailed instructions.

### How do I update Termy?

**Automatic**: Use the Command Palette (\`Cmd/Ctrl + P\`) → "Check for updates"

**Package Managers**:
\`\`\`bash
# macOS
brew upgrade --cask termy

# Arch Linux
paru -S termy-bin
\`\`\`

**Manual**: Download the latest release and replace the app.

### Is Termy available on my platform?

| Platform | Status | Method |
|----------|--------|--------|
| macOS | ✅ Supported | Homebrew, DMG |
| Windows | ✅ Supported | Setup.exe |
| Linux (x64) | ✅ Supported | AppImage, tarball |
| Arch Linux | ✅ Supported | AUR |
| Linux (ARM) | 🔄 Planned | Future release |

### Why isn't Termy code-signed?

Code signing certificates are expensive ($200-500/year). As an open-source project, we're evaluating options:
- Community funding for certificates
- Free certificates (e.g., SignPath for Windows)
- Self-signed with manual trust

For now, you'll need to bypass security warnings on first launch. See [Installation](/docs/installation) for platform-specific steps.

---

## Configuration

### Where is the config file?

\`\`\`
~/.config/termy/config.txt
\`\`\`

Create it if it doesn't exist:
\`\`\`bash
mkdir -p ~/.config/termy
touch ~/.config/termy/config.txt
\`\`\`

### Do I need to restart Termy after changing config?

**No!** Changes apply immediately. This is one of Termy's best features—tweak and see instantly.

### Can I import my config from another terminal?

Not automatically, but you can manually translate:

- **iTerm2**: Colors can be exported and converted
- **Alacritty**: Similar config structure, easy to adapt
- **Windows Terminal**: JSON to Termy's format

Example conversion from Alacritty:
\`\`\`yaml
# Alacritty
font:
  normal:
    family: JetBrains Mono
  size: 14
\`\`\`

\`\`\`txt
# Termy
font_family = JetBrains Mono
font_size = 14
\`\`\`

### What's the difference between \`config.txt\` and the UI settings?

They're the same thing! The UI settings editor just writes to \`config.txt\`. Use whichever you prefer:
- **UI**: Good for discovery and quick changes
- **Text file**: Good for bulk edits, version control, comments

---

## Features

### Does Termy support tabs?

Yes! Tabs are a core feature:
- \`Cmd/Ctrl + T\` — New tab
- \`Cmd/Ctrl + W\` — Close tab
- \`Cmd/Ctrl + Shift + [/]\` — Switch tabs
- Drag to reorder
- Right-click to rename

### Can I split panes/windows?

Pane splitting is planned for a future release. Currently, use tabs for multiple sessions.

### Does Termy have scrollback/search?

Yes:
- Scrollback: Configurable (default 10,000 lines)
- Search: \`Cmd/Ctrl + F\` to find in buffer
- Regex search: Supported
- Case sensitivity: Toggle with \`Cmd/Ctrl + Alt + C\`

### Is there a command palette?

Yes! Press \`Cmd/Ctrl + P\` for the command palette. Access:
- All actions
- Settings
- Theme switching
- Update checking
- Keyboard shortcuts

### Does Termy support true color?

Yes. Termy fully supports:
- 24-bit true color
- 256 colors
- ANSI colors
- Undercurl (underlines with colors)

### Can I use my favorite shell?

Absolutely. Termy works with any shell:
- Bash
- Zsh
- Fish
- Nushell
- PowerShell
- Custom shells

Set in config:
\`\`\`txt
shell = /usr/local/bin/fish
\`\`\`

---

## Customization

### How do I change the theme?

**Via Command Palette**:
1. \`Cmd/Ctrl + P\`
2. Type "switch theme"
3. Select from list

**Via Config**:
\`\`\`txt
theme = catppuccin
\`\`\`

Built-in themes: \`termy\`, \`catppuccin\`, \`gruvbox\`, \`tokyonight\`, \`github\`, \`dracula\`

### How do I change the font?

\`\`\`txt
font_family = JetBrains Mono
font_size = 14
\`\`\`

Find available fonts:
\`\`\`bash
# macOS
system_profiler SPFontsDataType | grep "Family:"

# Linux
fc-list : family
\`\`\`

### Can I make the background transparent?

\`\`\`txt
background_opacity = 0.9    # 0.0-1.0
background_blur = true      # Optional blur effect
\`\`\`

### How do I customize keybindings?

\`\`\`txt
# In config.txt
keybind = secondary-p=toggle_command_palette
keybind = secondary-t=new_tab
keybind = cmd-w=unbind    # Disable default
\`\`\`

See [Keybindings](/docs/keybindings) for full reference.

---

## Troubleshooting

### Why won't Termy launch?

Common causes:
1. **macOS Gatekeeper**: Run \`sudo xattr -d com.apple.quarantine /Applications/Termy.app\`
2. **Windows SmartScreen**: Click "More info" → "Run anyway"
3. **Broken config**: Move \`~/.config/termy/config.txt\` aside and restart
4. **Missing dependencies**: Install required libraries

See [Troubleshooting](/docs/troubleshooting) for detailed solutions.

### Why does my config not work?

Check:
1. File is at \`~/.config/termy/config.txt\`
2. Syntax is correct: \`key = value\` (spaces around \`=\`)
3. No typos in key names
4. Font name is exact (case-sensitive)

### How do I report a bug?

1. Check [existing issues](https://github.com/lassejlv/termy/issues)
2. Include:
   - Termy version (\`termy --version\`)
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Your config file (remove sensitive info)

### Where can I get help?

- **Discord**: https://discord.gg/4VDBFD7vAp (fastest response)
- **GitHub Issues**: https://github.com/lassejlv/termy/issues
- **GitHub Discussions**: https://github.com/lassejlv/termy/discussions

---

## Contributing

### Can I contribute to Termy?

Yes! We welcome:
- Bug reports
- Feature requests
- Code contributions
- Documentation improvements
- Theme submissions

See the [GitHub repository](https://github.com/lassejlv/termy) for guidelines.

### How do I build from source?

\`\`\`bash
git clone https://github.com/lassejlv/termy.git
cd termy
cargo build --release
\`\`\`

See [Building from Source](/docs/building-from-source) for detailed instructions.

### Can I create themes for Termy?

Yes! Themes are simple color definitions:

\`\`\`txt
[colors]
background = #1e1e2e
foreground = #cdd6f4
blue = #89b4fa
# ... etc
\`\`\`

Submit to the [Theme Store](https://termy.run/themes) once it's live.

---

## Roadmap & Future

### What's planned for Termy?

Near-term:
- Pane splitting
- Plugins/extensions
- Improved search
- Better Windows integration

Long-term:
- Serial/SSH connections
- Plugin API
- More built-in themes

### When will feature X be available?

We don't commit to timelines, but you can:
- Watch the GitHub repository
- Join Discord for updates
- Check the [roadmap](https://github.com/lassejlv/termy/projects)

### Can I request a feature?

Yes! Open a [GitHub Discussion](https://github.com/lassejlv/termy/discussions) or [Issue](https://github.com/lassejlv/termy/issues).

---

## More Questions?

Can't find your answer? Try:
- [Discord Community](https://discord.gg/4VDBFD7vAp)
- [GitHub Discussions](https://github.com/lassejlv/termy/discussions)
- [Documentation](/docs)
`,zn=`---
title: First Steps
description: Your complete onboarding guide to becoming productive with Termy
order: 3
category: Getting Started
---

# First Steps with Termy

Welcome to Termy! This guide will get you from first launch to productive workflows in minutes. Follow along step-by-step or jump to sections that interest you.

---

## The Basics

### Understanding the Interface

When you open Termy, you'll see:

- **Tab Bar**: At the top, shows open tabs with titles
- **Terminal Area**: The main space where commands run
- **Scrollbar**: Right side, shows your scrollback position
- **Title Bar**: macOS only, window controls

### Your First Commands

Try these to get familiar:

\`\`\`bash
# See Termy version
termy --version

# Check your shell
echo $SHELL

# See environment variables Termy sets
env | grep TERMY
\`\`\`

---

## Essential Shortcuts

Master these and you'll fly through Termy:

### Tabs
| Shortcut | Action |
|----------|--------|
| \`Cmd/Ctrl + T\` | New tab |
| \`Cmd/Ctrl + W\` | Close tab |
| \`Cmd/Ctrl + Shift + ]\` | Next tab |
| \`Cmd/Ctrl + Shift + [\` | Previous tab |

### Window
| Shortcut | Action |
|----------|--------|
| \`Cmd/Ctrl + P\` | Command Palette |
| \`Cmd/Ctrl + =\` | Zoom in |
| \`Cmd/Ctrl + -\` | Zoom out |
| \`Cmd/Ctrl + 0\` | Reset zoom |

### Text
| Shortcut | Action |
|----------|--------|
| \`Cmd/Ctrl + C\` | Copy (when text selected) |
| \`Cmd/Ctrl + V\` | Paste |
| \`Cmd/Ctrl + F\` | Find/Search |

**Tip**: \`Cmd\` on macOS, \`Ctrl\` on Windows/Linux

---

## The Command Palette

The Command Palette is your control center. Access it with \`Cmd/Ctrl + P\`.

### What You Can Do

- Switch themes instantly
- Check for updates
- Open settings
- Zoom and resize
- See all keyboard shortcuts

### Example Workflow

1. Press \`Cmd/Ctrl + P\`
2. Type "theme"
3. Select "Switch Theme"
4. Pick from the list

---

## Configuration Basics

Termy uses a simple text file for configuration.

### Where Is It?

\`\`\`
~/.config/termy/config.txt
\`\`\`

Create it if it doesn't exist:
\`\`\`bash
mkdir -p ~/.config/termy
\`\`\`

### Essential Settings

\`\`\`txt
# Appearance
font_family = JetBrains Mono
font_size = 14
theme = termy

# Window
background_opacity = 0.95
padding_x = 12
padding_y = 8

# Terminal
cursor_style = block
cursor_blink = true
scrollback_history = 10000
\`\`\`

Changes apply immediately—no restart needed!

### Finding Fonts

List available fonts:

\`\`\`bash
# macOS
system_profiler SPFontsDataType | grep "Family:" | head -20

# Linux
fc-list : family | sort | uniq | head -20
\`\`\`

Popular choices:
- \`JetBrains Mono\` (default)
- \`Fira Code\`
- \`SF Mono\` (macOS)
- \`Cascadia Code\`

---

## Tab Management

### Understanding Tab Titles

Termy intelligently names tabs based on:
1. **Manual name**: You renamed it
2. **Shell integration**: Current directory/command
3. **Process**: Running program name
4. **Fallback**: "Terminal"

### Working with Tabs

**Rename a tab**:
1. Right-click tab
2. Select "Rename Tab"
3. Type new name

Or use the Command Palette:
1. \`Cmd/Ctrl + P\`
2. Type "rename"

### Tab Behavior Settings

\`\`\`txt
# In config.txt
tab_title_mode = smart
tab_title_shell_integration = true
tab_close_visibility = active_hover
tab_width_mode = active_grow_sticky
\`\`\`

---

## Search Like a Pro

Press \`Cmd/Ctrl + F\` to search in the terminal buffer.

### Search Features

- **Case sensitivity**: Toggle with \`Cmd/Ctrl + Alt + C\`
- **Regex mode**: Toggle with \`Cmd/Ctrl + Alt + R\`
- **Navigation**: \`Cmd/Ctrl + G\` for next, \`Cmd/Ctrl + Shift + G\` for previous

### Example Search

1. Run some commands
2. Press \`Cmd/Ctrl + F\`
3. Type what you're looking for
4. Use \`Cmd/Ctrl + G\` to jump through matches

---

## Shell Integration

Termy exports environment variables your shell can use:

\`\`\`bash
# These are set automatically
TERMY=1                    # Indicates Termy environment
TERMY_PID=12345           # Termy process ID
TERMY_TAB_ID=1            # Current tab ID
\`\`\`

### Customizing Your Shell

Add to your \`.bashrc\` or \`.zshrc\`:

\`\`\`bash
# Change prompt when in Termy
if [ -n "$TERMY" ]; then
    export PS1="🚀 $PS1"
fi
\`\`\`

---

## Themes

Termy ships with several built-in themes.

### Available Themes

- \`termy\` (default)
- \`catppuccin\`
- \`gruvbox\`
- \`tokyonight\`
- \`github\`
- \`dracula\`

### Switching Themes

Via Command Palette:
1. \`Cmd/Ctrl + P\`
2. Type "switch theme"
3. Select your theme

Or in config:
\`\`\`txt
theme = catppuccin
\`\`\`

### Custom Colors

Override any theme color in config:

\`\`\`txt
[colors]
background = #1e1e2e
foreground = #cdd6f4
blue = #89b4fa
\`\`\`

---

## Keyboard Navigation

### Without a Mouse

| Keys | Action |
|------|--------|
| \`Cmd/Ctrl + 1-9\` | Jump to tab 1-9 |
| \`Cmd/Ctrl + Shift + ←/→\` | Move tab left/right |
| \`Cmd/Ctrl + M\` | Minimize window |

### Custom Shortcuts

Add to config:

\`\`\`txt
# Example: open config with Cmd/Ctrl + Shift + C
keybind = secondary-shift-c=open_config

# Disable default
keybind = secondary-w=unbind
\`\`\`

See [Keybindings](/docs/keybindings) for full reference.

---

## Common Workflows

### Development Workflow

\`\`\`bash
# 1. Open Termy
# 2. Split your work:
cd ~/projects/myapp
git status                    # Check changes
# 3. New tab: Cmd/Ctrl + T
npm run dev                   # Start dev server
# 4. Switch tabs: Cmd/Ctrl + Shift + [/]
\`\`\`

### System Administration

\`\`\`bash
# Quick SSH sessions
ssh user@server1     # Tab 1
ssh user@server2     # Tab 2 (Cmd/Ctrl + T)
ssh user@server3     # Tab 3 (Cmd/Ctrl + T)

# Rename tabs to identify servers
# Right-click → Rename Tab
\`\`\`

---

## Staying Updated

Termy checks for updates automatically, or manually:

1. Open Command Palette (\`Cmd/Ctrl + P\`)
2. Type "check for updates"
3. Follow prompts

Or use package managers:

\`\`\`bash
# macOS (Homebrew)
brew upgrade --cask termy

# Arch Linux
paru -S termy-bin
\`\`\`

---

## Getting Help

Stuck? Here's where to go:

1. **Command Palette**: \`Cmd/Ctrl + P\` → type what you need
2. **Documentation**: You're already here! Check other guides.
3. **GitHub Issues**: https://github.com/lassejlv/termy/issues
4. **Discord Community**: https://discord.gg/4VDBFD7vAp

---

## What's Next?

- [Configuration](/docs/configuration) - Deep dive into all settings
- [Customization Guide](/docs/customization-guide) - Make it yours
- [Keybindings](/docs/keybindings) - Full shortcut reference
`,Bn=`---
title: Installation
description: Complete guide to installing Termy on macOS, Windows, or Linux
order: 0
category: Getting Started
---

# Installation Guide

This comprehensive guide will take you from download to your first terminal prompt. Choose your platform below and follow the step-by-step instructions.

## Quick Start

The fastest way to get Termy running:

- **macOS**: \`brew install --cask termy-org/termy/termy\`
- **Arch Linux**: \`paru -S termy-bin\`
- **Other**: Download from [GitHub Releases](https://github.com/lassejlv/termy/releases)

---

## macOS Installation

### Option 1: Homebrew (Recommended)

Homebrew is the easiest and most maintainable way to install Termy on macOS.

**Step 1**: Add the Termy tap
\`\`\`bash
brew tap termy-org/termy
\`\`\`

**Step 2**: Install Termy
\`\`\`bash
brew install --cask termy
\`\`\`

Or combine both steps:
\`\`\`bash
brew install --cask termy-org/termy/termy
\`\`\`

**Step 3**: Launch Termy
- Open from Applications, or
- Press \`Cmd+Space\`, type "Termy", press Enter

### Option 2: Manual DMG Install

**Step 1**: Download the latest \`.dmg\` file from [GitHub Releases](https://github.com/lassejlv/termy/releases)

**Step 2**: Open the DMG
- Double-click the downloaded \`.dmg\` file
- A Finder window opens showing Termy.app

**Step 3**: Move to Applications
- Drag \`Termy.app\` into your \`Applications\` folder
- Or copy: \`cp -R Termy.app /Applications/\`

**Step 4**: First Launch (Security)

Because Termy is not code-signed yet, macOS Gatekeeper may block it:

\`\`\`bash
# Remove quarantine attribute
sudo xattr -d com.apple.quarantine /Applications/Termy.app
\`\`\`

Then launch Termy from Applications.

### Upgrading on macOS

With Homebrew:
\`\`\`bash
brew upgrade --cask termy
\`\`\`

Manual install: Download the latest DMG and replace the app.

---

## Windows Installation

### Standard Install (Setup.exe)

**Step 1**: Download \`Termy-Setup.exe\` from [GitHub Releases](https://github.com/lassejlv/termy/releases)

**Step 2**: Run the installer
- Double-click the downloaded file
- Follow the installation wizard
- Default install location: \`%LOCALAPPDATA%\\Programs\\Termy\`

**Step 3**: First Launch (SmartScreen)

Windows SmartScreen may display a security warning because Termy is not code-signed:

1. Click **"More info"**
2. Click **"Run anyway"**

**Step 4**: Launch Termy
- From Start Menu: Press Windows key, type "Termy"
- Or from Desktop shortcut if created during install

### Portable Install (Coming Soon)

A portable ZIP option is planned for future releases.

---

## Linux Installation

### Option 1: AppImage (Universal)

The AppImage works on most Linux distributions without installation.

**Step 1**: Download the \`.AppImage\` file

**Step 2**: Make it executable
\`\`\`bash
chmod +x Termy-*.AppImage
\`\`\`

**Step 3**: Run
\`\`\`bash
./Termy-*.AppImage
\`\`\`

**Optional**: Move to a permanent location
\`\`\`bash
mkdir -p ~/.local/bin
mv Termy-*.AppImage ~/.local/bin/termy
chmod +x ~/.local/bin/termy
\`\`\`

Then ensure \`~/.local/bin\` is in your PATH:
\`\`\`bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/.local/bin:$PATH"
\`\`\`

### Option 2: Tarball (Manual Install)

**Step 1**: Download the \`.tar.gz\` file

**Step 2**: Extract
\`\`\`bash
tar -xzf Termy-*.tar.gz
\`\`\`

**Step 3**: Install using the provided script
\`\`\`bash
cd termy
./install.sh
\`\`\`

This installs Termy to \`~/.local/bin\` by default.

**Step 4**: Verify PATH
\`\`\`bash
which termy
# Should output: /home/username/.local/bin/termy
\`\`\`

If not found, add to PATH:
\`\`\`bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Option 3: Arch Linux (AUR)

For Arch Linux and derivatives (Manjaro, EndeavourOS):

\`\`\`bash
# Using paru (recommended)
paru -S termy-bin

# Or using yay
yay -S termy-bin
\`\`\`

The package installs Termy to \`/usr/bin/termy\`.

### Option 4: Build from Source

For developers or users on unsupported distros:

\`\`\`bash
# Clone the repository
git clone https://github.com/lassejlv/termy.git
cd termy

# Build with Rust
cargo build --release

# The binary will be at target/release/termy
\`\`\`

See [Building from Source](/docs/building) for detailed instructions.

---

## Verify Your Installation

After installation, verify Termy is properly installed:

\`\`\`bash
termy --version
\`\`\`

Expected output:
\`\`\`
termy 0.x.x
\`\`\`

If you get "command not found":
1. Check that the install directory is in your PATH
2. Restart your terminal
3. Try the full path to the binary

---

## Post-Installation

### 1. Set Up Your Shell

Termy works with any shell. The default is your system's default shell.

To change the shell:

\`\`\`bash
# Edit config
termy --config

# Or manually edit ~/.config/termy/config.txt
\`\`\`

Add:
\`\`\`
shell = /bin/zsh
\`\`\`

### 2. Install a Nerd Font (Optional)

For the best experience with icons and glyphs:

\`\`\`bash
# macOS with Homebrew
brew tap homebrew/cask-fonts
brew install --cask font-jetbrains-mono-nerd-font

# Then set in config
font_family = JetBrainsMono Nerd Font
\`\`\`

### 3. Create Your First Config

\`\`\`bash
mkdir -p ~/.config/termy
cat > ~/.config/termy/config.txt << 'EOF'
font_family = JetBrains Mono
font_size = 14
theme = termy
background_opacity = 0.95
EOF
\`\`\`

---

## Troubleshooting Installation

### macOS: "Termy is damaged"

This is the Gatekeeper quarantine. Fix:
\`\`\`bash
sudo xattr -d com.apple.quarantine /Applications/Termy.app
\`\`\`

### Windows: "Windows protected your PC"

Click "More info" → "Run anyway"

### Linux: AppImage won't run

Check dependencies:
\`\`\`bash
# Install FUSE if needed (Ubuntu/Debian)
sudo apt install libfuse2

# Or run without FUSE
./Termy-*.AppImage --appimage-extract-and-run
\`\`\`

### All Platforms: "termy: command not found"

Your shell can't find the binary:

\`\`\`bash
# Find where termy is installed
which termy || find /Applications ~/.local/bin /usr/bin -name "termy" 2>/dev/null

# Add to PATH (adjust path as needed)
export PATH="$PATH:/Applications/Termy.app/Contents/MacOS"
\`\`\`

---

## Next Steps

- [First Steps](/docs/first-steps) - Learn the basics
- [Configuration](/docs/configuration) - Customize your setup
- [Keybindings](/docs/keybindings) - Master the shortcuts
`,Vn="---\ntitle: Keybindings\ndescription: Keyboard shortcuts and customization\norder: 2\ncategory: Getting Started\n---\n\n_This file is generated by `cargo run -p xtask -- generate-keybindings-doc`. Do not edit manually._\n\nTermy keybindings use Ghostty-style trigger overrides via repeated `keybind` lines in `~/.config/termy/config.txt`.\n\n## Default Keybinds\n\n### macOS Defaults\n\n- `secondary-q` -> `quit`\n- `secondary-,` -> `open_settings`\n- `secondary-p` -> `toggle_command_palette`\n- `secondary-t` -> `new_tab`\n- `secondary-w` -> `close_tab`\n- `secondary-=` -> `zoom_in`\n- `secondary-+` -> `zoom_in`\n- `secondary--` -> `zoom_out`\n- `secondary-0` -> `zoom_reset`\n- `secondary-f` -> `open_search`\n- `secondary-g` -> `search_next`\n- `secondary-shift-g` -> `search_previous`\n- `secondary-m` -> `minimize_window`\n- `secondary-c` -> `copy`\n- `secondary-v` -> `paste`\n\n### Windows Defaults\n\n- `secondary-q` -> `quit`\n- `secondary-,` -> `open_settings`\n- `secondary-p` -> `toggle_command_palette`\n- `secondary-t` -> `new_tab`\n- `secondary-w` -> `close_tab`\n- `secondary-=` -> `zoom_in`\n- `secondary-+` -> `zoom_in`\n- `secondary--` -> `zoom_out`\n- `secondary-0` -> `zoom_reset`\n- `secondary-f` -> `open_search`\n- `secondary-g` -> `search_next`\n- `secondary-shift-g` -> `search_previous`\n- `secondary-c` -> `copy`\n- `secondary-v` -> `paste`\n\n### Linux Defaults\n\n- `secondary-q` -> `quit`\n- `secondary-,` -> `open_settings`\n- `secondary-p` -> `toggle_command_palette`\n- `secondary-t` -> `new_tab`\n- `secondary-w` -> `close_tab`\n- `secondary-=` -> `zoom_in`\n- `secondary-+` -> `zoom_in`\n- `secondary--` -> `zoom_out`\n- `secondary-0` -> `zoom_reset`\n- `secondary-f` -> `open_search`\n- `secondary-g` -> `search_next`\n- `secondary-shift-g` -> `search_previous`\n- `ctrl-shift-c` -> `copy`\n- `ctrl-shift-v` -> `paste`\n\n### Other Platform Defaults\n\n- `secondary-q` -> `quit`\n- `secondary-,` -> `open_settings`\n- `secondary-p` -> `toggle_command_palette`\n- `secondary-t` -> `new_tab`\n- `secondary-w` -> `close_tab`\n- `secondary-=` -> `zoom_in`\n- `secondary-+` -> `zoom_in`\n- `secondary--` -> `zoom_out`\n- `secondary-0` -> `zoom_reset`\n- `secondary-f` -> `open_search`\n- `secondary-g` -> `search_next`\n- `secondary-shift-g` -> `search_previous`\n- `ctrl-shift-c` -> `copy`\n- `ctrl-shift-v` -> `paste`\n\n`secondary` maps to `cmd` on macOS and `ctrl` on non-macOS platforms.\n\n## Config Syntax\n\nSupported forms:\n\n- `keybind = clear`\n- `keybind = <trigger>=<action>`\n- `keybind = <trigger>=unbind`\n\nBehavior:\n\n- Directives are applied in file order.\n- Later lines win for the same trigger.\n- `clear` removes all defaults before later lines are applied.\n- `unbind` removes the current mapping for a trigger.\n- Invalid lines are ignored (with warnings).\n\nRelated UI option:\n\n- `command_palette_show_keybinds = true|false` controls whether command palette rows show shortcut badges.\n\n## Configurable Actions\n\n- `new_tab`\n- `close_tab`\n- `move_tab_left`\n- `move_tab_right`\n- `switch_tab_left`\n- `switch_tab_right`\n- `minimize_window`\n- `rename_tab`\n- `app_info`\n- `restart_app`\n- `open_config`\n- `open_settings`\n- `import_colors`\n- `switch_theme`\n- `zoom_in`\n- `zoom_out`\n- `zoom_reset`\n- `open_search`\n- `check_for_updates`\n- `quit`\n- `toggle_command_palette`\n- `copy`\n- `paste`\n- `close_search`\n- `search_next`\n- `search_previous`\n- `toggle_search_case_sensitive`\n- `toggle_search_regex`\n- `install_cli`\n\n## Customization Examples\n\n### 1) Override one default\n\n```txt\nkeybind = cmd-p=toggle_command_palette\n```\n\n### 2) Remove one default\n\n```txt\nkeybind = cmd-w=unbind\n```\n\n### 3) Start from scratch\n\n```txt\nkeybind = clear\nkeybind = cmd-p=toggle_command_palette\nkeybind = cmd-t=new_tab\nkeybind = cmd-w=close_tab\nkeybind = cmd-c=copy\nkeybind = cmd-v=paste\n```\n\n### 4) Use `secondary` for cross-platform configs\n\n```txt\nkeybind = secondary-p=toggle_command_palette\nkeybind = secondary-t=new_tab\n```\n",Hn=`---
title: Troubleshooting
description: Solutions to common problems and issues
order: 1
category: Help & Troubleshooting
---

# Troubleshooting

Having trouble with Termy? This guide covers common issues and their solutions.

---

## Installation Issues

### macOS: "Termy is damaged and can't be opened"

**Cause**: macOS Gatekeeper quarantine

**Solution**:

\`\`\`bash
# Remove quarantine attribute
sudo xattr -d com.apple.quarantine /Applications/Termy.app

# Alternative: Allow from Security preferences
# 1. Open System Preferences → Security & Privacy
# 2. Click "Allow Anyway" next to the Termy warning
\`\`\`

### macOS: "Termy cannot be opened because the developer cannot be verified"

**Quick Fix**:
1. Right-click (Control+click) Termy.app
2. Select "Open"
3. Click "Open" in the dialog

**Permanent Fix** (same as above):
\`\`\`bash
sudo xattr -d com.apple.quarantine /Applications/Termy.app
\`\`\`

### Windows: "Windows protected your PC" / SmartScreen

**Cause**: Windows SmartScreen blocking unsigned apps

**Solution**:
1. Click **"More info"**
2. Click **"Run anyway"**

To prevent this warning, install via a package manager when available.

### Linux: AppImage Won't Launch

**Check FUSE**:
\`\`\`bash
# Test if FUSE is available
ls /dev/fuse

# Install FUSE (Ubuntu/Debian)
sudo apt install libfuse2

# Install FUSE (Fedora)
sudo dnf install fuse

# Install FUSE (Arch)
sudo pacman -S fuse2
\`\`\`

**Alternative Run Method**:
\`\`\`bash
./Termy-*.AppImage --appimage-extract-and-run
\`\`\`

**Check Dependencies**:
\`\`\`bash
# See what libraries are missing
ldd ./Termy-*.AppImage
\`\`\`

---

## Runtime Issues

### "termy: command not found"

**Check Installation Location**:

\`\`\`bash
# Find termy binary
which termy
find /Applications ~/.local/bin /usr/bin -name "termy" 2>/dev/null
\`\`\`

**Add to PATH**:

\`\`\`bash
# macOS (if not using Homebrew)
export PATH="$PATH:/Applications/Termy.app/Contents/MacOS"

# Linux (if installed to ~/.local/bin)
export PATH="$HOME/.local/bin:$PATH"
\`\`\`

Add to \`~/.bashrc\`, \`~/.zshrc\`, or \`~/.config/fish/config.fish\` to persist.

### Termy Opens Then Immediately Closes

**Check Config**:

\`\`\`bash
# Temporarily reset config
mv ~/.config/termy/config.txt ~/.config/termy/config.txt.bak

# Try launching again
termy
\`\`\`

If this works, there's an error in your config. Restore and fix:

\`\`\`bash
# Restore backup
mv ~/.config/termy/config.txt.bak ~/.config/termy/config.txt

# Edit and fix issues
# Common problems:
# - Invalid font name
# - Syntax errors
# - Missing values
\`\`\`

**Check Logs** (if available):

\`\`\`bash
# Run with debug output
RUST_LOG=debug termy 2>&1 | tee termy.log
\`\`\`

### Slow Performance

**Disable Transparency**:
\`\`\`txt
# In config.txt
background_opacity = 1.0
background_blur = false
\`\`\`

**Reduce Scrollback**:
\`\`\`txt
scrollback_history = 2500
inactive_tab_scrollback = 1000
\`\`\`

**Use System Font**:
\`\`\`txt
# Instead of custom fonts
font_family = monospace
\`\`\`

**Disable Animations** (if available in future releases).

### High CPU Usage

**Possible Causes**:
- Transparent background with blur
- Very long scrollback
- Debug logging enabled

**Fixes**:
\`\`\`txt
# config.txt
background_opacity = 1.0
background_blur = false
scrollback_history = 5000
\`\`\`

### Font Rendering Issues

**Missing Characters**:
- Install a Nerd Font: \`brew install font-jetbrains-mono-nerd-font\`
- Or disable icons in your shell prompt

**Wrong Font**:
\`\`\`bash
# Check exact font name
fc-match "Your Font Name"

# List available fonts
fc-list : family | grep -i "your font"
\`\`\`

**Update Font Cache** (Linux):
\`\`\`bash
fc-cache -fv
\`\`\`

---

## Display Issues

### Blurry Text

**macOS**:
- Check "System Preferences → Displays" scaling
- Try different font sizes (odd numbers often sharper)

**Linux (HiDPI)**:
\`\`\`bash
# Set scale factor
export WINIT_X11_SCALE_FACTOR=1.5
termy
\`\`\`

### Colors Look Wrong

**Check Terminal Colors**:
\`\`\`bash
# Print color test
for i in {0..255}; do
    printf "\\x1b[38;5;\${i}mcolour\${i} "
done
\`\`\`

**Override Theme Colors**:
\`\`\`txt
[colors]
foreground = #ffffff
background = #000000
\`\`\`

### Cursor Not Visible

\`\`\`txt
# config.txt
cursor_style = block
cursor_blink = false
\`\`\`

Try different styles: \`block\`, \`beam\`, \`underline\`.

---

## Input Issues

### Keyboard Shortcuts Not Working

**Check for Conflicts**:
- macOS: System Preferences → Keyboard → Shortcuts
- Check if another app is capturing the shortcut

**Reset Keybindings**:
\`\`\`txt
# config.txt
keybind = clear
\`\`\`

Then add back only what you need.

### Copy/Paste Not Working

**Linux**:
\`\`\`bash
# Ensure clipboard tools are installed
# Ubuntu/Debian
sudo apt install xclip

# Or xsel
sudo apt install xsel
\`\`\`

**Check Keybindings**:
\`\`\`txt
# Should be:
keybind = secondary-c=copy
keybind = secondary-v=paste
\`\`\`

### Special Characters Not Rendering

**Check Locale**:
\`\`\`bash
locale

# Set UTF-8 if needed
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
\`\`\`

---

## Shell Issues

### Shell Not Starting

**Check Shell Path**:
\`\`\`bash
which bash
which zsh
which fish

# Verify in config
shell = /bin/zsh
\`\`\`

**Test Shell Manually**:
\`\`\`bash
# Run the shell directly
/bin/zsh --login
\`\`\`

### Environment Variables Missing

**Check Shell Integration**:
\`\`\`bash
# In Termy
env | grep TERMY
# Should show TERMY=1

# Check if shell is login shell
shopt -q login_shell && echo "Login shell" || echo "Not login shell"
\`\`\`

**Fix for macOS**:
macOS doesn't run \`.bashrc\` for login shells. Use \`.bash_profile\` or \`.zprofile\`:

\`\`\`bash
# ~/.zprofile
source ~/.zshrc
\`\`\`

---

## Config Issues

### Config Changes Not Applying

**Verify File Location**:
\`\`\`bash
ls -la ~/.config/termy/config.txt
cat ~/.config/termy/config.txt
\`\`\`

**Check Syntax**:
\`\`\`txt
# Correct:
font_family = JetBrains Mono
font_size = 14

# Incorrect:
font_family=JetBrains Mono  # Missing spaces
font_size: 14               # Wrong separator
\`\`\`

**Validate Config**:
Most errors are logged. Run from terminal to see:
\`\`\`bash
termy 2>&1 | head -50
\`\`\`

### Reset to Defaults

\`\`\`bash
# Backup first
mv ~/.config/termy/config.txt ~/.config/termy/config.txt.backup

# Create empty config
touch ~/.config/termy/config.txt

# Or copy from examples
# (examples would be in repo)
\`\`\`

---

## Update Issues

### "Failed to check for updates"

**Check Internet**:
\`\`\`bash
ping github.com
\`\`\`

**Check GitHub API**:
\`\`\`bash
curl -I https://api.github.com/repos/lassejlv/termy/releases/latest
\`\`\`

**Manual Update**:
1. Download latest from GitHub
2. Replace existing install

### Update Broke Something

**Rollback**:
\`\`\`bash
# Restore previous version
# (Keep old versions before updating)

# Or reinstall
brew reinstall --cask termy
\`\`\`

---

## Getting More Help

### Collect Information

Before reporting an issue, gather:

\`\`\`bash
# Termy version
termy --version

# OS version
uname -a  # macOS/Linux
systeminfo | findstr /B /C:"OS"  # Windows

# Config file
cat ~/.config/termy/config.txt

# Recent logs (if any)
ls -la ~/Library/Logs/termy/  # macOS
\`\`\`

### Where to Report

1. **GitHub Issues**: https://github.com/lassejlv/termy/issues
2. **Discord**: https://discord.gg/4VDBFD7vAp (faster response)
3. **Check existing issues**: Search before posting

### Include in Bug Reports

- Termy version
- Operating system and version
- What you expected vs what happened
- Steps to reproduce
- Config file (sanitized)
- Screenshots if visual issue

---

## Related

- [FAQ](/docs/faq) - Common questions
- [Installation](/docs/installation) - Install guide
`;function Un(e){return e.split(`/`).pop().split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function Wn(e){if(e)return Number.parseInt(e,10)}function Gn(e,t){return e.order!==void 0&&t.order!==void 0?e.order-t.order:e.order===void 0?t.order===void 0?e.title.localeCompare(t.title):1:-1}function Kn(e){let t=e.match(/^---\n([\s\S]*?)\n---\n/);if(!t)return{meta:{},content:e};let n=t[1],r={};for(let e of n.split(`
`)){let[t,...n]=e.split(`:`);t&&n.length>0&&(r[t.trim()]=n.join(`:`).trim())}return{meta:r,content:e.slice(t[0].length)}}var qn={"/src/content/architecture/command-boundary.md":Pn,"/src/content/building-from-source.md":Fn,"/src/content/configuration.md":In,"/src/content/customization-guide.md":Ln,"/src/content/faq.md":Rn,"/src/content/first-steps.md":zn,"/src/content/installation.md":Bn,"/src/content/keybindings.md":Vn,"/src/content/troubleshooting.md":Hn};function Jn(e,t){let n=e.replace(`/src/content/`,``).replace(`.md`,``),{meta:r,content:i}=Kn(t);return{slug:n,title:r.title??Un(n),description:r.description,order:Wn(r.order),category:r.category,content:i}}function Yn(){return Object.entries(qn).map(([e,t])=>Jn(e,t)).sort(Gn)}function Xn(){let e=Yn(),t={};for(let n of e){let e=n.category??`General`;t[e]??=[],t[e].push(n)}return t}var Zn={"Getting Started":0,Guides:1,"Help & Troubleshooting":3,Architecture:4,General:99};function Qn(e){return[...e].sort((e,t)=>{let n=Zn[e]??50,r=Zn[t]??50;return n===r?e.localeCompare(t):n-r})}function $n(e){return Yn().find(t=>t.slug===e)}function er(e){let t=/^(#{2,4})\s+(.+)$/gm,n=[],r;for(;(r=t.exec(e))!==null;){let e=r[1].length,t=r[2].trim(),i=Ht(t);n.push({id:i,text:t,level:e})}return n}const tr=c(`/docs/$`)({component:i(()=>$(()=>import(`./_-C9tDC0z1.js`),__vite__mapDeps([18,1,2,3,4,13,6,14])),`component`),loader:({params:e})=>{let t=$n(e._splat??``);if(!t)throw d();return t}}),nr=c(`/themes/$slug/`)({component:i(()=>$(()=>import(`./_slug-DMncLozr.js`),__vite__mapDeps([19,1,2,3,4])),`component`)}),rr=c(`/themes/$slug/update`)({component:i(()=>$(()=>import(`./update-Dcc1k-Gw.js`),__vite__mapDeps([20,1,2,3,4])),`component`)});var ir=nn.update({id:`/add`,path:`/add`,getParentRoute:()=>Q}),ar=rn.update({id:`/`,path:`/`,getParentRoute:()=>Q}),or=an.update({id:`/themes/`,path:`/themes/`,getParentRoute:()=>Q}),sr=on.update({id:`/releases/`,path:`/releases/`,getParentRoute:()=>Q}),cr=cn.update({id:`/docs/`,path:`/docs/`,getParentRoute:()=>Q}),lr=ln.update({id:`/contributors/`,path:`/contributors/`,getParentRoute:()=>Q}),ur=un.update({id:`/themes/studio`,path:`/themes/studio`,getParentRoute:()=>Q}),dr=kn.update({id:`/themes/add`,path:`/themes/add`,getParentRoute:()=>Q}),fr=Nn.update({id:`/releases/$tag`,path:`/releases/$tag`,getParentRoute:()=>Q}),pr=tr.update({id:`/docs/$`,path:`/docs/$`,getParentRoute:()=>Q}),mr=nr.update({id:`/themes/$slug/`,path:`/themes/$slug/`,getParentRoute:()=>Q}),hr={IndexRoute:ar,AddRoute:ir,DocsSplatRoute:pr,ReleasesTagRoute:fr,ThemesAddRoute:dr,ThemesStudioRoute:ur,ContributorsIndexRoute:lr,DocsIndexRoute:cr,ReleasesIndexRoute:sr,ThemesIndexRoute:or,ThemesSlugUpdateRoute:rr.update({id:`/themes/$slug/update`,path:`/themes/$slug/update`,getParentRoute:()=>Q}),ThemesSlugIndexRoute:mr},gr=l({routeTree:Q._addFileChildren(hr)._addFileTypes()}),_r=new I({defaultOptions:{queries:{staleTime:300*1e3,gcTime:1800*1e3,refetchOnWindowFocus:!1}}}),vr=document.getElementById(`root`);if(!vr)throw Error(`Root element not found`);(0,de.createRoot)(vr).render((0,z.jsx)(L.StrictMode,{children:(0,z.jsx)(y,{client:_r,children:(0,z.jsx)(s,{router:gr})})}));export{Z as C,Ut as D,Ht as E,sn as S,Vt as T,dn as _,Yn as a,fn as b,Nn as c,vn as d,Sn as f,wn as g,Tn as h,er as i,An as l,On as m,nr as n,Xn as o,bn as p,tr as r,Qn as s,rr as t,Dn as u,hn as v,X as w,pn as x,mn as y};