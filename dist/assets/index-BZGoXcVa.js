const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/routes-CRF0PDBV.js","assets/vendor-markdown-Cst79Ndk.js","assets/rolldown-runtime-DDUpfMIz.js","assets/vendor-ui-CujPDjli.js","assets/spinner-DlG-3bQ-.js","assets/docs-DoUgBOZF.js","assets/vendor-router-C6gaCgkB.js","assets/vendor-react-C4aOqI8I.js","assets/vendor-motion-DydsxItZ.js","assets/Sidebar-BtZOzAe9.js","assets/contributors-Ciqe57vY.js","assets/vendor-query-DbMfzzvl.js","assets/_-BQSkcI64.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-DDUpfMIz.js";import{T as t,w as n}from"./vendor-markdown-Cst79Ndk.js";import{t as r}from"./vendor-react-C4aOqI8I.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,u as d}from"./vendor-router-C6gaCgkB.js";import{S as f,_ as p,a as m,b as h,c as ee,d as te,f as ne,g,h as _,i as re,l as ie,m as v,n as y,o as b,p as ae,r as oe,s as x,u as se,v as S,x as C,y as w}from"./vendor-query-DbMfzzvl.js";import{c as T,f as E,n as ce,r as D,u as le}from"./vendor-ui-CujPDjli.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function O(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=e=>{ie(e,()=>t.signal,()=>n=!0)},u=ne(t.options,t.fetchOptions),d=async(e,r,i)=>{if(n)return Promise.reject();if(r==null&&e.pages.length)return Promise.resolve(e);let a=await u((()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return l(e),e})()),{maxPages:o}=t.options,s=i?te:se;return{pages:s(e.pages,a,o),pageParams:s(e.pageParams,r,o)}};if(i&&a.length){let e=i===`backward`,t=e?A:k,n={pages:a,pageParams:o};s=await d(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]??r.initialPageParam:k(r,s);if(c>0&&e==null)break;s=await d(s,e),c++}while(c<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=l}}}function k(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function A(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}var j=class extends re{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||M(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:`observerAdded`,mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:`observerRemoved`,mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status===`pending`?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#i({type:`continue`})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=m({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(Error(`No mutationFn found`)),onFail:(e,t)=>{this.#i({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#i({type:`pause`})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let r=this.state.status===`pending`,i=!this.#r.canStart();try{if(r)t();else{this.#i({type:`pending`,variables:e,isPaused:i}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);let t=await this.options.onMutate?.(e,n);t!==this.state.context&&this.#i({type:`pending`,context:t,variables:e,isPaused:i})}let a=await this.#r.start();return await this.#n.config.onSuccess?.(a,e,this.state.context,this,n),await this.options.onSuccess?.(a,e,this.state.context,n),await this.#n.config.onSettled?.(a,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(a,null,e,this.state.context,n),this.#i({type:`success`,data:a}),a}catch(t){try{await this.#n.config.onError?.(t,e,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,n)}catch(e){Promise.reject(e)}try{await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,n)}catch(e){Promise.reject(e)}throw this.#i({type:`error`,error:t}),t}finally{this.#n.runNext(this)}}#i(e){this.state=(t=>{switch(e.type){case`failed`:return{...t,failureCount:e.failureCount,failureReason:e.error};case`pause`:return{...t,isPaused:!0};case`continue`:return{...t,isPaused:!1};case`pending`:return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:`pending`,variables:e.variables,submittedAt:Date.now()};case`success`:return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:`success`,isPaused:!1};case`error`:return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:`error`}}})(this.state),x.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:`updated`,action:e})})}};function M(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:`idle`,variables:void 0,submittedAt:0}}var N=class extends f{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){let r=new j({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=P(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=P(e);if(typeof t==`string`){let n=this.#t.get(t);if(n)if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=P(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}else return!0}runNext(e){let t=P(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){x.batch(()=>{this.#e.forEach(e=>{this.notify({type:`removed`,mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>g(t,e))}findAll(e={}){return this.getAll().filter(t=>g(e,t))}notify(e){x.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return x.batch(()=>Promise.all(e.map(e=>e.continue().catch(S))))}};function P(e){return e.options.scope?.id}var F=class extends f{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,i=t.queryHash??_(r,t),a=this.get(i);return a||(a=new oe({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){x.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>p(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>p(e,t)):t}notify(e){x.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){x.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){x.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},ue=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new F,this.#t=e.mutationCache||new N,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=ee.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=b.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(h(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=ae(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return x.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;x.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return x.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=x.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(S).catch(S)}invalidateQueries(e,t={}){return x.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=x.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(S)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(S)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(h(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(S).catch(S)}fetchInfiniteQuery(e){return e.behavior=O(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(S).catch(S)}ensureInfiniteQueryData(e){return e.behavior=O(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return b.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(v(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{w(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(v(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{w(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=_(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===C&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},I=r(),L=e(t(),1);function R(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=R(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function z(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=R(e))&&(r&&(r+=` `),r+=t);return r}var de=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e;const fe=z,pe=(e,t)=>n=>{if(t?.variants==null)return fe(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=de(t)||de(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return fe(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)};function me(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function he(...e){return t=>{let n=!1,r=e.map(e=>{let r=me(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():me(e[t],null)}}}}var B=e(n(),1);function ge(e){let t=ve(e),n=L.forwardRef((e,n)=>{let{children:r,...i}=e,a=L.Children.toArray(r),o=a.find(be);if(o){let e=o.props.children,r=a.map(t=>t===o?L.Children.count(e)>1?L.Children.only(null):L.isValidElement(e)?e.props.children:null:t);return(0,B.jsx)(t,{...i,ref:n,children:L.isValidElement(e)?L.cloneElement(e,void 0,r):null})}return(0,B.jsx)(t,{...i,ref:n,children:r})});return n.displayName=`${e}.Slot`,n}var _e=ge(`Slot`);function ve(e){let t=L.forwardRef((e,t)=>{let{children:n,...r}=e;if(L.isValidElement(n)){let e=Se(n),i=xe(r,n.props);return n.type!==L.Fragment&&(i.ref=t?he(t,e):e),L.cloneElement(n,i)}return L.Children.count(n)>1?L.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ye=Symbol(`radix.slottable`);function be(e){return L.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===ye}function xe(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function Se(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Ce=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},we=(e,t)=>({classGroupId:e,validator:t}),Te=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Ee=`-`,De=[],Oe=`arbitrary..`,ke=e=>{let t=Me(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return je(e);let n=e.split(Ee);return Ae(n,n[0]===``&&n.length>1?1:0,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Ce(i,t):t:i||De}return n[e]||De}}},Ae=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Ae(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Ee):e.slice(t).join(Ee),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},je=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Oe+r:void 0})(),Me=e=>{let{theme:t,classGroups:n}=e;return Ne(n,t)},Ne=(e,t)=>{let n=Te();for(let r in e){let i=e[r];Pe(i,n,r,t)}return n},Pe=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Fe(i,t,n,r)}},Fe=(e,t,n,r)=>{if(typeof e==`string`){Ie(e,t,n);return}if(typeof e==`function`){Le(e,t,n,r);return}Re(e,t,n,r)},Ie=(e,t,n)=>{let r=e===``?t:ze(t,e);r.classGroupId=n},Le=(e,t,n,r)=>{if(Be(e)){Pe(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(we(n,e))},Re=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Pe(o,ze(t,a),n,r)}},ze=(e,t)=>{let n=e,r=t.split(Ee),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Te(),n.nextPart.set(t,i)),n=i}return n},Be=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Ve=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},He=`!`,Ue=`:`,We=[],Ge=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Ke=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Ue){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(He)?(c=s.slice(0,-1),l=!0):s.startsWith(He)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Ge(t,l,c,u)};if(t){let e=t+Ue,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Ge(We,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},qe=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Je=e=>({cache:Ve(e.cacheSize),parseClassName:Ke(e),sortModifiers:qe(e),...ke(e)}),Ye=/\s+/,Xe=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(Ye),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m){c=t+(c.length>0?` `+c:c);continue}if(h=r(f),!h){c=t+(c.length>0?` `+c:c);continue}m=!1}let ee=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),te=d?ee+He:ee,ne=te+h;if(o.indexOf(ne)>-1)continue;o.push(ne);let g=i(h,m);for(let e=0;e<g.length;++e){let t=g[e];o.push(te+t)}c=t+(c.length>0?` `+c:c)}return c},Ze=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Qe(n))&&(i&&(i+=` `),i+=r);return i},Qe=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Qe(e[r]))&&(n&&(n+=` `),n+=t);return n},$e=(e,...t)=>{let n,r,i,a,o=o=>(n=Je(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Xe(e,n);return i(e,a),a};return a=o,(...e)=>a(Ze(...e))},et=[],V=e=>{let t=t=>t[e]||et;return t.isThemeGetter=!0,t},tt=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,nt=/^\((?:(\w[\w-]*):)?(.+)\)$/i,rt=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,it=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,at=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ot=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,st=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ct=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,H=e=>rt.test(e),U=e=>!!e&&!Number.isNaN(Number(e)),W=e=>!!e&&Number.isInteger(Number(e)),lt=e=>e.endsWith(`%`)&&U(e.slice(0,-1)),G=e=>it.test(e),ut=()=>!0,dt=e=>at.test(e)&&!ot.test(e),ft=()=>!1,pt=e=>st.test(e),mt=e=>ct.test(e),ht=e=>!K(e)&&!J(e),gt=e=>X(e,jt,ft),K=e=>tt.test(e),q=e=>X(e,Mt,dt),_t=e=>X(e,Nt,U),vt=e=>X(e,Ft,ut),yt=e=>X(e,Pt,ft),bt=e=>X(e,kt,ft),xt=e=>X(e,At,mt),St=e=>X(e,It,pt),J=e=>nt.test(e),Y=e=>Z(e,Mt),Ct=e=>Z(e,Pt),wt=e=>Z(e,kt),Tt=e=>Z(e,jt),Et=e=>Z(e,At),Dt=e=>Z(e,It,!0),Ot=e=>Z(e,Ft,!0),X=(e,t,n)=>{let r=tt.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Z=(e,t,n=!1)=>{let r=nt.exec(e);return r?r[1]?t(r[1]):n:!1},kt=e=>e===`position`||e===`percentage`,At=e=>e===`image`||e===`url`,jt=e=>e===`length`||e===`size`||e===`bg-size`,Mt=e=>e===`length`,Nt=e=>e===`number`,Pt=e=>e===`family-name`,Ft=e=>e===`number`||e===`weight`,It=e=>e===`shadow`,Lt=$e(()=>{let e=V(`color`),t=V(`font`),n=V(`text`),r=V(`font-weight`),i=V(`tracking`),a=V(`leading`),o=V(`breakpoint`),s=V(`container`),c=V(`spacing`),l=V(`radius`),u=V(`shadow`),d=V(`inset-shadow`),f=V(`text-shadow`),p=V(`drop-shadow`),m=V(`blur`),h=V(`perspective`),ee=V(`aspect`),te=V(`ease`),ne=V(`animate`),g=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],_=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],re=()=>[..._(),J,K],ie=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],v=()=>[`auto`,`contain`,`none`],y=()=>[J,K,c],b=()=>[H,`full`,`auto`,...y()],ae=()=>[W,`none`,`subgrid`,J,K],oe=()=>[`auto`,{span:[`full`,W,J,K]},W,J,K],x=()=>[W,`auto`,J,K],se=()=>[`auto`,`min`,`max`,`fr`,J,K],S=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],C=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],w=()=>[`auto`,...y()],T=()=>[H,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...y()],E=()=>[H,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...y()],ce=()=>[H,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...y()],D=()=>[e,J,K],le=()=>[..._(),wt,bt,{position:[J,K]}],O=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],k=()=>[`auto`,`cover`,`contain`,Tt,gt,{size:[J,K]}],A=()=>[lt,Y,q],j=()=>[``,`none`,`full`,l,J,K],M=()=>[``,U,Y,q],N=()=>[`solid`,`dashed`,`dotted`,`double`],P=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],F=()=>[U,lt,wt,bt],ue=()=>[``,`none`,m,J,K],I=()=>[`none`,U,J,K],L=()=>[`none`,U,J,K],R=()=>[U,J,K],z=()=>[H,`full`,...y()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[G],breakpoint:[G],color:[ut],container:[G],"drop-shadow":[G],ease:[`in`,`out`,`in-out`],font:[ht],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[G],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[G],shadow:[G],spacing:[`px`,U],text:[G],"text-shadow":[G],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,H,K,J,ee]}],container:[`container`],columns:[{columns:[U,K,J,s]}],"break-after":[{"break-after":g()}],"break-before":[{"break-before":g()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:re()}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:v()}],"overscroll-x":[{"overscroll-x":v()}],"overscroll-y":[{"overscroll-y":v()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:b()}],"inset-x":[{"inset-x":b()}],"inset-y":[{"inset-y":b()}],start:[{"inset-s":b(),start:b()}],end:[{"inset-e":b(),end:b()}],"inset-bs":[{"inset-bs":b()}],"inset-be":[{"inset-be":b()}],top:[{top:b()}],right:[{right:b()}],bottom:[{bottom:b()}],left:[{left:b()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[W,`auto`,J,K]}],basis:[{basis:[H,`full`,`auto`,s,...y()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[U,H,`auto`,`initial`,`none`,K]}],grow:[{grow:[``,U,J,K]}],shrink:[{shrink:[``,U,J,K]}],order:[{order:[W,`first`,`last`,`none`,J,K]}],"grid-cols":[{"grid-cols":ae()}],"col-start-end":[{col:oe()}],"col-start":[{"col-start":x()}],"col-end":[{"col-end":x()}],"grid-rows":[{"grid-rows":ae()}],"row-start-end":[{row:oe()}],"row-start":[{"row-start":x()}],"row-end":[{"row-end":x()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":se()}],"auto-rows":[{"auto-rows":se()}],gap:[{gap:y()}],"gap-x":[{"gap-x":y()}],"gap-y":[{"gap-y":y()}],"justify-content":[{justify:[...S(),`normal`]}],"justify-items":[{"justify-items":[...C(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...C()]}],"align-content":[{content:[`normal`,...S()]}],"align-items":[{items:[...C(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...C(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":S()}],"place-items":[{"place-items":[...C(),`baseline`]}],"place-self":[{"place-self":[`auto`,...C()]}],p:[{p:y()}],px:[{px:y()}],py:[{py:y()}],ps:[{ps:y()}],pe:[{pe:y()}],pbs:[{pbs:y()}],pbe:[{pbe:y()}],pt:[{pt:y()}],pr:[{pr:y()}],pb:[{pb:y()}],pl:[{pl:y()}],m:[{m:w()}],mx:[{mx:w()}],my:[{my:w()}],ms:[{ms:w()}],me:[{me:w()}],mbs:[{mbs:w()}],mbe:[{mbe:w()}],mt:[{mt:w()}],mr:[{mr:w()}],mb:[{mb:w()}],ml:[{ml:w()}],"space-x":[{"space-x":y()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":y()}],"space-y-reverse":[`space-y-reverse`],size:[{size:T()}],"inline-size":[{inline:[`auto`,...E()]}],"min-inline-size":[{"min-inline":[`auto`,...E()]}],"max-inline-size":[{"max-inline":[`none`,...E()]}],"block-size":[{block:[`auto`,...ce()]}],"min-block-size":[{"min-block":[`auto`,...ce()]}],"max-block-size":[{"max-block":[`none`,...ce()]}],w:[{w:[s,`screen`,...T()]}],"min-w":[{"min-w":[s,`screen`,`none`,...T()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...T()]}],h:[{h:[`screen`,`lh`,...T()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...T()]}],"max-h":[{"max-h":[`screen`,`lh`,...T()]}],"font-size":[{text:[`base`,n,Y,q]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Ot,vt]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,lt,K]}],"font-family":[{font:[Ct,yt,t]}],"font-features":[{"font-features":[K]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,J,K]}],"line-clamp":[{"line-clamp":[U,`none`,J,_t]}],leading:[{leading:[a,...y()]}],"list-image":[{"list-image":[`none`,J,K]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,J,K]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...N(),`wavy`]}],"text-decoration-thickness":[{decoration:[U,`from-font`,`auto`,J,q]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[U,`auto`,J,K]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:y()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,J,K]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,J,K]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:le()}],"bg-repeat":[{bg:O()}],"bg-size":[{bg:k()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},W,J,K],radial:[``,J,K],conic:[W,J,K]},Et,xt]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:A()}],"gradient-via-pos":[{via:A()}],"gradient-to-pos":[{to:A()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:j()}],"rounded-s":[{"rounded-s":j()}],"rounded-e":[{"rounded-e":j()}],"rounded-t":[{"rounded-t":j()}],"rounded-r":[{"rounded-r":j()}],"rounded-b":[{"rounded-b":j()}],"rounded-l":[{"rounded-l":j()}],"rounded-ss":[{"rounded-ss":j()}],"rounded-se":[{"rounded-se":j()}],"rounded-ee":[{"rounded-ee":j()}],"rounded-es":[{"rounded-es":j()}],"rounded-tl":[{"rounded-tl":j()}],"rounded-tr":[{"rounded-tr":j()}],"rounded-br":[{"rounded-br":j()}],"rounded-bl":[{"rounded-bl":j()}],"border-w":[{border:M()}],"border-w-x":[{"border-x":M()}],"border-w-y":[{"border-y":M()}],"border-w-s":[{"border-s":M()}],"border-w-e":[{"border-e":M()}],"border-w-bs":[{"border-bs":M()}],"border-w-be":[{"border-be":M()}],"border-w-t":[{"border-t":M()}],"border-w-r":[{"border-r":M()}],"border-w-b":[{"border-b":M()}],"border-w-l":[{"border-l":M()}],"divide-x":[{"divide-x":M()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":M()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...N(),`hidden`,`none`]}],"divide-style":[{divide:[...N(),`hidden`,`none`]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-bs":[{"border-bs":D()}],"border-color-be":[{"border-be":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...N(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[U,J,K]}],"outline-w":[{outline:[``,U,Y,q]}],"outline-color":[{outline:D()}],shadow:[{shadow:[``,`none`,u,Dt,St]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":[`none`,d,Dt,St]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:M()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[U,q]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":M()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":[`none`,f,Dt,St]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[U,J,K]}],"mix-blend":[{"mix-blend":[...P(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":P()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[U]}],"mask-image-linear-from-pos":[{"mask-linear-from":F()}],"mask-image-linear-to-pos":[{"mask-linear-to":F()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":F()}],"mask-image-t-to-pos":[{"mask-t-to":F()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":F()}],"mask-image-r-to-pos":[{"mask-r-to":F()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":F()}],"mask-image-b-to-pos":[{"mask-b-to":F()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":F()}],"mask-image-l-to-pos":[{"mask-l-to":F()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":F()}],"mask-image-x-to-pos":[{"mask-x-to":F()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":F()}],"mask-image-y-to-pos":[{"mask-y-to":F()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[J,K]}],"mask-image-radial-from-pos":[{"mask-radial-from":F()}],"mask-image-radial-to-pos":[{"mask-radial-to":F()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[U]}],"mask-image-conic-from-pos":[{"mask-conic-from":F()}],"mask-image-conic-to-pos":[{"mask-conic-to":F()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:le()}],"mask-repeat":[{mask:O()}],"mask-size":[{mask:k()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,J,K]}],filter:[{filter:[``,`none`,J,K]}],blur:[{blur:ue()}],brightness:[{brightness:[U,J,K]}],contrast:[{contrast:[U,J,K]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Dt,St]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:[``,U,J,K]}],"hue-rotate":[{"hue-rotate":[U,J,K]}],invert:[{invert:[``,U,J,K]}],saturate:[{saturate:[U,J,K]}],sepia:[{sepia:[``,U,J,K]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,J,K]}],"backdrop-blur":[{"backdrop-blur":ue()}],"backdrop-brightness":[{"backdrop-brightness":[U,J,K]}],"backdrop-contrast":[{"backdrop-contrast":[U,J,K]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,U,J,K]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[U,J,K]}],"backdrop-invert":[{"backdrop-invert":[``,U,J,K]}],"backdrop-opacity":[{"backdrop-opacity":[U,J,K]}],"backdrop-saturate":[{"backdrop-saturate":[U,J,K]}],"backdrop-sepia":[{"backdrop-sepia":[``,U,J,K]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":y()}],"border-spacing-x":[{"border-spacing-x":y()}],"border-spacing-y":[{"border-spacing-y":y()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,J,K]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[U,`initial`,J,K]}],ease:[{ease:[`linear`,`initial`,te,J,K]}],delay:[{delay:[U,J,K]}],animate:[{animate:[`none`,ne,J,K]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,J,K]}],"perspective-origin":[{"perspective-origin":re()}],rotate:[{rotate:I()}],"rotate-x":[{"rotate-x":I()}],"rotate-y":[{"rotate-y":I()}],"rotate-z":[{"rotate-z":I()}],scale:[{scale:L()}],"scale-x":[{"scale-x":L()}],"scale-y":[{"scale-y":L()}],"scale-z":[{"scale-z":L()}],"scale-3d":[`scale-3d`],skew:[{skew:R()}],"skew-x":[{"skew-x":R()}],"skew-y":[{"skew-y":R()}],transform:[{transform:[J,K,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:re()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:z()}],"translate-x":[{"translate-x":z()}],"translate-y":[{"translate-y":z()}],"translate-z":[{"translate-z":z()}],"translate-none":[`translate-none`],accent:[{accent:D()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,J,K]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mbs":[{"scroll-mbs":y()}],"scroll-mbe":[{"scroll-mbe":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pbs":[{"scroll-pbs":y()}],"scroll-pbe":[{"scroll-pbe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,J,K]}],fill:[{fill:[`none`,...D()]}],"stroke-w":[{stroke:[U,Y,q,_t]}],stroke:[{stroke:[`none`,...D()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function Rt(...e){return Lt(z(e))}function zt(e){return new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`})}function Bt(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``)}const Vt=`prose prose-sm prose-invert max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 prose-a:decoration-foreground/30 hover:prose-a:decoration-foreground prose-code:text-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-secondary prose-pre:rounded-lg prose-ul:text-muted-foreground prose-li:marker:text-muted-foreground prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-border prose-th:p-2 prose-th:text-left prose-th:text-foreground prose-td:border prose-td:border-border prose-td:p-2 prose-td:text-muted-foreground prose-tr:even:bg-secondary/30`;var Ht=pe(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/90`,destructive:`bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60`,outline:`border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/30 transition-colors`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,ghost:`hover:bg-secondary hover:text-foreground`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-9 px-4 py-2 has-[>svg]:px-3`,xs:`h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-8 gap-1.5 px-3 has-[>svg]:px-2.5`,lg:`h-12 px-8 text-base rounded-xl has-[>svg]:px-6`,icon:`size-9`,"icon-xs":`size-6 [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-8`,"icon-lg":`size-10`}},defaultVariants:{variant:`default`,size:`default`}});function Ut({className:e,variant:t=`default`,size:n=`default`,asChild:r=!1,...i}){return(0,B.jsx)(r?_e:`button`,{"data-slot":`button`,"data-variant":t,"data-size":n,className:Rt(Ht({variant:t,size:n,className:e})),...i})}var Wt=`termy_site_theme_v1`;function Gt(){try{let e=localStorage.getItem(Wt);if(e===`light`||e===`dark`)return e}catch{}return window.matchMedia(`(prefers-color-scheme: light)`).matches?`light`:`dark`}function Kt(){let[e,t]=(0,L.useState)(()=>Gt());return(0,L.useEffect)(()=>{let t=document.documentElement;e===`light`?t.classList.add(`light`):t.classList.remove(`light`)},[e]),{theme:e,toggleTheme:(0,L.useCallback)(()=>{t(e=>{let t=e===`light`?`dark`:`light`;try{localStorage.setItem(Wt,t)}catch{}return t})},[]),setTheme:(0,L.useCallback)(e=>{t(e);try{localStorage.setItem(Wt,e)}catch{}},[])}}var qt=[{label:`Features`,href:`/#features`},{label:`Download`,href:`/#download`},{label:`Docs`,to:`/docs`},{label:`GitHub`,href:`https://github.com/lassejlv/termy`,external:!0}],Jt=`text-sm text-muted-foreground hover:text-foreground transition-colors`,Yt=`block py-2 text-base text-muted-foreground hover:text-foreground transition-colors`;function Xt(){let{theme:e,toggleTheme:t}=Kt(),[n,r]=(0,L.useState)(!1);function i(){r(!1)}function o(){r(e=>!e)}return(0,L.useEffect)(()=>{if(!n)return;function e(e){e.key===`Escape`&&i()}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`header`,{className:`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md`,children:(0,B.jsxs)(`nav`,{className:`mx-auto flex h-14 max-w-5xl items-center justify-between px-5`,children:[(0,B.jsxs)(a,{to:`/`,onClick:i,className:`flex items-center gap-2 text-foreground`,children:[(0,B.jsx)(`img`,{src:`/termy_icon.png`,alt:``,width:24,height:24,className:`rounded-md`}),(0,B.jsx)(`span`,{className:`text-sm font-medium`,children:`Termy`})]}),(0,B.jsxs)(`div`,{className:`hidden md:flex items-center gap-6`,children:[qt.map(e=>e.to?(0,B.jsx)(a,{to:e.to,className:Jt,children:e.label},e.label):(0,B.jsx)(`a`,{href:e.href,className:Jt,...e.external?{target:`_blank`,rel:`noreferrer`}:{},children:e.label},e.label)),(0,B.jsx)(`div`,{className:`w-px h-4 bg-border/50`}),(0,B.jsxs)(`a`,{href:`https://github.com/sponsors/lassejlv`,target:`_blank`,rel:`noreferrer`,className:`flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors`,children:[(0,B.jsx)(E,{className:`w-4 h-4`}),(0,B.jsx)(`span`,{children:`Sponsor`})]}),(0,B.jsx)(`button`,{onClick:t,className:`text-muted-foreground hover:text-foreground transition-colors`,"aria-label":e===`light`?`Dark mode`:`Light mode`,children:e===`light`?(0,B.jsx)(T,{className:`w-4 h-4`}):(0,B.jsx)(D,{className:`w-4 h-4`})})]}),(0,B.jsx)(Ut,{variant:`ghost`,size:`icon`,onClick:o,className:`md:hidden text-muted-foreground hover:text-foreground`,children:n?(0,B.jsx)(ce,{className:`h-5 w-5`}):(0,B.jsx)(le,{className:`h-5 w-5`})})]})}),n&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{className:`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden`,onClick:i}),(0,B.jsx)(`div`,{className:`fixed top-14 left-0 right-0 z-50 bg-background border-b border-border px-5 py-4 md:hidden`,children:(0,B.jsxs)(`nav`,{className:`flex flex-col gap-2`,children:[qt.map(e=>e.to?(0,B.jsx)(a,{to:e.to,className:Yt,onClick:i,children:e.label},e.label):(0,B.jsx)(`a`,{href:e.href,className:Yt,onClick:i,...e.external?{target:`_blank`,rel:`noreferrer`}:{},children:e.label},e.label)),(0,B.jsx)(`div`,{className:`my-2 h-px bg-border/50`}),(0,B.jsxs)(`a`,{href:`https://github.com/sponsors/lassejlv`,target:`_blank`,rel:`noreferrer`,className:`flex items-center gap-2 py-2 text-base text-muted-foreground`,onClick:i,children:[(0,B.jsx)(E,{className:`w-4 h-4`}),`Sponsor`]}),(0,B.jsx)(`button`,{onClick:()=>{t(),i()},className:`flex items-center gap-2 py-2 text-base text-muted-foreground`,children:e===`light`?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(T,{className:`w-4 h-4`}),` Dark mode`]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(D,{className:`w-4 h-4`}),` Light mode`]})})]})})]})]})}const Q=u({component:Zt});function Zt(){return(0,B.jsxs)(`div`,{className:`min-h-screen bg-background flex flex-col`,children:[(0,B.jsx)(Xt,{}),(0,B.jsx)(`main`,{className:`flex-1 w-full`,children:(0,B.jsx)(o,{})}),(0,B.jsx)(`footer`,{className:`border-t border-border/30 py-6 px-5`,children:(0,B.jsxs)(`div`,{className:`max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground`,children:[(0,B.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,B.jsx)(`img`,{src:`/termy_icon.png`,alt:``,width:16,height:16,className:`rounded`}),(0,B.jsx)(`span`,{children:`Termy`})]}),(0,B.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,B.jsx)(a,{to:`/docs`,className:`hover:text-foreground transition-colors`,children:`Docs`}),(0,B.jsx)(`a`,{href:`https://github.com/lassejlv/termy`,target:`_blank`,rel:`noreferrer`,className:`hover:text-foreground transition-colors`,children:`GitHub`})]})]})})]})}var Qt=`modulepreload`,$t=function(e){return`/`+e},en={};const $=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=$t(t,n),t in en)return;en[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Qt,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},tn=c(`/`)({component:i(()=>$(()=>import(`./routes-CRF0PDBV.js`),__vite__mapDeps([0,1,2,3,4])),`component`)});function nn({headings:e}){let[t,n]=(0,L.useState)(``),r=(0,L.useRef)(null),i=(0,L.useRef)(null);(0,L.useEffect)(()=>{let t=window.location.hash.slice(1);t&&e.some(e=>e.id===t)?n(t):e.length>0&&n(e[0].id)},[e]),(0,L.useEffect)(()=>{if(e.length===0)return;i.current&&i.current.disconnect();let t=e.map(e=>document.getElementById(e.id)).filter(Boolean);if(t.length!==0)return i.current=new IntersectionObserver(e=>{if(r.current)return;let t=e.filter(e=>e.isIntersecting);if(t.length>0){let e=t.sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top)[0];n(e.target.id)}},{rootMargin:`-80px 0px -60% 0px`,threshold:[0,.25,.5,.75,1]}),t.forEach(e=>i.current?.observe(e)),()=>{i.current?.disconnect()}},[e]),(0,L.useEffect)(()=>{if(e.length===0)return;let t=()=>{if(r.current)return;let t=window.scrollY,i=document.documentElement.scrollHeight;t+window.innerHeight>=i-50&&n(e[e.length-1].id)};return window.addEventListener(`scroll`,t,{passive:!0}),()=>window.removeEventListener(`scroll`,t)},[e]);let a=(0,L.useCallback)((e,t)=>{e.preventDefault();let i=document.getElementById(t);if(!i)return;r.current=t,n(t),window.history.pushState(null,``,`#${t}`);let a=i.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:a,behavior:`smooth`}),setTimeout(()=>{r.current=null},600)},[]);return e.length===0?(0,B.jsx)(`div`,{className:`hidden xl:block w-60 shrink-0`}):(0,B.jsx)(`aside`,{className:`hidden xl:block w-60 shrink-0`,children:(0,B.jsxs)(`nav`,{className:`sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2`,children:[(0,B.jsx)(`h3`,{className:`text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3`,children:`On this page`}),(0,B.jsx)(`ul`,{className:`space-y-1 border-l border-border/50`,children:e.map(e=>(0,B.jsx)(`li`,{children:(0,B.jsx)(`a`,{href:`#${e.id}`,onClick:t=>a(t,e.id),className:Rt(`block text-sm py-1 pl-3 transition-all border-l-2 -ml-[2px]`,e.level===2?``:`pl-5`,t===e.id?`text-foreground font-medium border-foreground`:`text-muted-foreground hover:text-foreground border-transparent`),children:e.text})},e.id))})]})})}const rn=c(`/docs/`)({component:i(()=>$(()=>import(`./docs-DoUgBOZF.js`),__vite__mapDeps([5,6,1,2,7,8,9,3])),`component`)}),an=c(`/contributors/`)({component:i(()=>$(()=>import(`./contributors-Ciqe57vY.js`),__vite__mapDeps([10,6,1,2,7,11,4])),`component`)});var on=`---\r
title: Building from Source\r
description: Build Termy from source code for development or unsupported platforms\r
order: 2\r
category: Guides\r
---\r
\r
# Building Termy from Source\r
\r
> For: developers and contributors\r
\r
This guide covers building Termy from source. Useful for:\r
- Developers contributing to Termy\r
- Users on unsupported platforms\r
- Those wanting the latest unreleased features\r
\r
---\r
\r
## Prerequisites\r
\r
### Required\r
\r
- **Rust** 1.93+ ([rustup.rs](https://rustup.rs))\r
- **Git** ([git-scm.com](https://git-scm.com))\r
\r
### Platform-Specific\r
\r
#### macOS\r
\r
\`\`\`bash\r
# Install Xcode Command Line Tools\r
xcode-select --install\r
\r
# Or via Homebrew\r
brew install git\r
\`\`\`\r
\r
#### Linux\r
\r
\`\`\`bash\r
# Ubuntu/Debian\r
sudo apt update\r
sudo apt install build-essential git pkg-config libssl-dev\r
\r
# Arch Linux\r
sudo pacman -S base-devel git\r
\r
# Fedora\r
sudo dnf install gcc git openssl-devel\r
\`\`\`\r
\r
#### Windows\r
\r
Install:\r
- [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) or full VS\r
- [Git for Windows](https://gitforwindows.org/)\r
\r
---\r
\r
## Clone the Repository\r
\r
\`\`\`bash\r
git clone https://github.com/lassejlv/termy.git\r
cd termy\r
\`\`\`\r
\r
### Stay Updated\r
\r
\`\`\`bash\r
git pull origin main\r
\`\`\`\r
\r
---\r
\r
## Build the Project\r
\r
### Standard Build\r
\r
\`\`\`bash\r
cargo build --release\r
\`\`\`\r
\r
This creates the optimized binary at:\r
- **macOS/Linux**: \`target/release/termy\`\r
- **Windows**: \`target/release/termy.exe\`\r
\r
### Development Build\r
\r
For faster builds during development:\r
\r
\`\`\`bash\r
cargo build\r
\`\`\`\r
\r
Binary will be in \`target/debug/termy\`.\r
\r
### Build Time\r
\r
- Clean build: 2-5 minutes\r
- Incremental: 10-30 seconds\r
\r
---\r
\r
## Run Your Build\r
\r
\`\`\`bash\r
# macOS/Linux\r
./target/release/termy\r
\r
# Windows\r
.\\target\\release\\termy.exe\r
\`\`\`\r
\r
---\r
\r
## Platform-Specific Builds\r
\r
### macOS Universal Binary\r
\r
Build for both Intel and Apple Silicon:\r
\r
\`\`\`bash\r
# Intel (x86_64)\r
rustup target add x86_64-apple-darwin\r
CARGO_TARGET_X86_64_APPLE_DARWIN_LINKER="clang" \\\r
  cargo build --release --target x86_64-apple-darwin\r
\r
# Apple Silicon (ARM64)\r
rustup target add aarch64-apple-darwin\r
CARGO_TARGET_AARCH64_APPLE_DARWIN_LINKER="clang" \\\r
  cargo build --release --target aarch64-apple-darwin\r
\r
# Combine into universal binary\r
lipo -create \\\r
  target/x86_64-apple-darwin/release/termy \\\r
  target/aarch64-apple-darwin/release/termy \\\r
  -o target/release/termy-universal\r
\`\`\`\r
\r
### Linux Static Binary\r
\r
For maximum compatibility:\r
\r
\`\`\`bash\r
# Using musl for static linking\r
rustup target add x86_64-unknown-linux-musl\r
cargo build --release --target x86_64-unknown-linux-musl\r
\`\`\`\r
\r
### Windows Installer\r
\r
Build the installer package:\r
\r
\`\`\`bash\r
# Requires WiX Toolset\r
cargo wix\r
\`\`\`\r
\r
---\r
\r
## Development Workflow\r
\r
### Run Tests\r
\r
\`\`\`bash\r
# All tests\r
cargo test\r
\r
# Specific crate\r
cargo test -p termy-core\r
\r
# With output\r
cargo test -- --nocapture\r
\`\`\`\r
\r
### Check Code\r
\r
\`\`\`bash\r
# Fast syntax/type check (no build)\r
cargo check\r
\r
# Linting\r
cargo clippy\r
\r
# Format code\r
cargo fmt\r
\`\`\`\r
\r
### Generate Documentation\r
\r
\`\`\`bash\r
# Build docs\r
cargo doc --no-deps\r
\r
# Open in browser\r
cargo doc --no-deps --open\r
\`\`\`\r
\r
---\r
\r
## Development Tips\r
\r
### Hot Reload for UI\r
\r
When working on the UI:\r
\r
\`\`\`bash\r
# Watch for changes and rebuild\r
cargo watch -x "build"\r
\r
# Or with automatic restart\r
# cargo install cargo-watch\r
cargo watch -x "run"\r
\`\`\`\r
\r
### Debug Logging\r
\r
Enable debug output:\r
\r
\`\`\`bash\r
RUST_LOG=debug ./target/release/termy\r
\`\`\`\r
\r
### Profiling\r
\r
\`\`\`bash\r
# Build with debug symbols\r
cargo build --release --features profile\r
\r
# Run with profiler\r
# On macOS: Instruments\r
# On Linux: perf\r
\`\`\`\r
\r
---\r
\r
## Common Build Issues\r
\r
### "linker not found"\r
\r
**Linux**:\r
\`\`\`bash\r
sudo apt install build-essential\r
# or\r
sudo pacman -S base-devel\r
\`\`\`\r
\r
**macOS**:\r
\`\`\`bash\r
xcode-select --install\r
\`\`\`\r
\r
### "openssl-sys" errors\r
\r
\`\`\`bash\r
# macOS\r
brew install openssl\r
export OPENSSL_DIR=/opt/homebrew/opt/openssl\r
\r
# Linux\r
sudo apt install libssl-dev\r
\`\`\`\r
\r
### "Unable to find libclang"\r
\r
\`\`\`bash\r
# macOS\r
brew install llvm\r
\r
# Linux\r
sudo apt install libclang-dev\r
\`\`\`\r
\r
### Slow Builds\r
\r
Enable optimizations:\r
\r
\`\`\`toml\r
# Add to Cargo.toml profile\r
[profile.dev]\r
opt-level = 1  # Basic optimization for dev builds\r
\`\`\`\r
\r
Or use sccache:\r
\`\`\`bash\r
cargo install sccache\r
export RUSTC_WRAPPER=sccache\r
\`\`\`\r
\r
---\r
\r
## Contributing\r
\r
Termy welcomes bug reports, feature requests, code, docs, and themes. The GitHub repository is the single source for all contribution guidelines — this section covers the conventions most worth knowing up front.\r
\r
### Before Submitting\r
\r
1. **Format code**: \`cargo fmt\`\r
2. **Run lints**: \`cargo clippy -- -D warnings\`\r
3. **Run tests**: \`cargo test\`\r
4. **Check build**: \`cargo build --release\`\r
\r
### Branch Naming\r
\r
- \`feat/description\` - New features\r
- \`fix/description\` - Bug fixes\r
- \`docs/description\` - Documentation\r
- \`refactor/description\` - Code refactoring\r
\r
### Commit Messages\r
\r
\`\`\`\r
feat: Add tab search functionality\r
fix: Correct cursor position after resize\r
docs: Update installation guide\r
\`\`\`\r
\r
### Submitting a Theme\r
\r
Themes are a \`[colors]\` block in \`config.txt\` format. To contribute one, open a pull request adding it under the built-in themes:\r
\r
\`\`\`txt\r
[colors]\r
background = #1e1e2e\r
foreground = #cdd6f4\r
blue = #89b4fa\r
# ...full palette\r
\`\`\`\r
\r
---\r
\r
## Packaging\r
\r
### Create Release Package\r
\r
\`\`\`bash\r
# macOS\r
mkdir -p Termy.app/Contents/MacOS\r
cp target/release/termy Termy.app/Contents/MacOS/\r
codesign --force --deep --sign - Termy.app\r
\r
# Linux (tarball)\r
tar -czf termy-linux-x64.tar.gz -C target/release termy\r
\r
# Windows (zip)\r
7z a termy-windows-x64.zip .\\target\\release\\termy.exe\r
\`\`\`\r
\r
---\r
\r
## Resources\r
\r
- **Repository**: https://github.com/lassejlv/termy\r
- **Issues**: https://github.com/lassejlv/termy/issues\r
- **Discussions**: https://github.com/lassejlv/termy/discussions\r
\r
---\r
\r
## Architecture Notes\r
\r
This section captures ownership boundaries for command and keybind behavior — useful when adding a new command, a new keybind directive, or a new UI adapter.\r
\r
### Ownership\r
\r
- \`termy_command_core\` owns:\r
  - Command IDs and config-facing command names.\r
  - Command config-name parsing and normalization.\r
  - Keybind defaults.\r
  - Keybind directive parsing (\`clear\`, bind, unbind).\r
  - Deterministic keybind resolution order.\r
- App/CLI adapters own:\r
  - UI labels, keywords, and command-palette presentation.\r
  - Platform-specific visibility policy for palette entries.\r
  - UI trigger canonicalization and validation (for example GPUI keystroke parsing).\r
\r
### Dependency Rule\r
\r
- \`termy_command_core\` must remain a pure domain crate.\r
- \`termy_command_core\` must not depend on:\r
  - \`termy_config_core\`\r
  - \`gpui\`\r
  - other UI or presentation crates\r
\r
### Integration Pattern\r
\r
- Adapters convert parsed config keybind lines into \`termy_command_core::KeybindLineRef\`.\r
- Adapters call \`parse_keybind_directives_from_iter\`; trigger canonicalization happens in \`termy_command_core\`.\r
- Adapters call \`resolve_keybinds\` over \`default_resolved_keybinds\`.\r
\r
This keeps one canonical command/keybind engine while preserving thin, readable adapter code.\r
\r
---\r
\r
## Next Steps\r
\r
- Skim the [Architecture Notes](#architecture-notes) above to understand the command/keybind boundary.\r
- Check [Contributing Guidelines](https://github.com/lassejlv/termy/blob/main/CONTRIBUTING.md)\r
- Join the [Discord](https://discord.gg/4VDBFD7vAp) for help\r
`,sn="---\r\ntitle: Configuration\r\ndescription: Configure Termy settings and appearance\r\norder: 2\r\ncategory: Getting Started\r\n---\r\n\r\n_This file is generated by `cargo run -p xtask -- generate-config-doc`. Do not edit manually._\r\n\r\nTermy reads configuration from `~/.config/termy/config.txt`.\r\n\r\n## Appearance\r\n\r\n`theme`\r\n- Default: `termy`\r\n- Current color scheme name\r\n- Group: `THEME`\r\n\r\n`font_family`\r\n- Default: `JetBrains Mono`\r\n- Font family used in terminal UI\r\n- Group: `FONT`\r\n\r\n`font_size`\r\n- Default: `14`\r\n- Terminal font size in pixels\r\n- Group: `FONT`\r\n\r\n`background_opacity`\r\n- Default: `1`\r\n- Window background opacity (0.0 to 1.0)\r\n- Group: `WINDOW`\r\n\r\n`background_blur`\r\n- Default: `false`\r\n- Enable blur effect for transparent backgrounds\r\n- Group: `WINDOW`\r\n\r\n`padding_x`\r\n- Default: `12`\r\n- Left and right terminal padding\r\n- Group: `PADDING`\r\n\r\n`padding_y`\r\n- Default: `8`\r\n- Top and bottom terminal padding\r\n- Group: `PADDING`\r\n\r\n## Terminal\r\n\r\n`shell`\r\n- Default: unset\r\n- Executable used for new sessions\r\n- Group: `SHELL`\r\n\r\n`term`\r\n- Default: `xterm-256color`\r\n- TERM value exposed to child applications\r\n- Group: `SHELL`\r\n\r\n`colorterm`\r\n- Default: `truecolor`\r\n- COLORTERM value exposed to child applications\r\n- Group: `SHELL`\r\n\r\n`cursor_style`\r\n- Default: `block`\r\n- Shape of the terminal cursor\r\n- Group: `CURSOR`\r\n\r\n`cursor_blink`\r\n- Default: `true`\r\n- Enable blinking cursor animation\r\n- Group: `CURSOR`\r\n\r\n`mouse_scroll_multiplier`\r\n- Default: `3`\r\n- Mouse wheel scroll speed multiplier\r\n- Group: `SCROLLING`\r\n\r\n`scrollbar_visibility`\r\n- Default: `on_scroll`\r\n- Terminal scrollbar visibility behavior\r\n- Group: `SCROLLING`\r\n\r\n`scrollbar_style`\r\n- Default: `neutral`\r\n- Terminal scrollbar color style\r\n- Group: `SCROLLING`\r\n\r\n`scrollback_history`\r\n- Default: `2000`\r\n- Aliases: `scrollback`\r\n- Lines retained in terminal scrollback\r\n- Group: `SCROLLING`\r\n\r\n`inactive_tab_scrollback`\r\n- Default: unset\r\n- Scrollback limit for inactive tabs\r\n- Group: `SCROLLING`\r\n\r\n`command_palette_show_keybinds`\r\n- Default: `true`\r\n- Show shortcut badges in command palette rows\r\n- Group: `UI`\r\n\r\n## Tabs\r\n\r\n`tab_title_priority`\r\n- Default: `manual, explicit, shell, fallback`\r\n- Exact source priority for tab titles\r\n- Group: `TAB TITLES`\r\n\r\n`tab_title_mode`\r\n- Default: `smart`\r\n- How tab titles are determined\r\n- Group: `TAB TITLES`\r\n\r\n`tab_title_fallback`\r\n- Default: `Terminal`\r\n- Default tab title when no source is available\r\n- Group: `TAB TITLES`\r\n\r\n`tab_title_explicit_prefix`\r\n- Default: `termy:tab:`\r\n- Prefix used for explicit OSC title payloads\r\n- Group: `TAB TITLES`\r\n\r\n`tab_title_shell_integration`\r\n- Default: `true`\r\n- Export TERMY_* environment values for shell hooks\r\n- Group: `TAB TITLES`\r\n\r\n`tab_title_prompt_format`\r\n- Default: `{cwd}`\r\n- Template for prompt-derived tab titles\r\n- Group: `TAB TITLES`\r\n\r\n`tab_title_command_format`\r\n- Default: `{command}`\r\n- Template for command-derived tab titles\r\n- Group: `TAB TITLES`\r\n\r\n`tab_close_visibility`\r\n- Default: `active_hover`\r\n- When tab close buttons are visible\r\n- Group: `TAB STRIP`\r\n\r\n`tab_width_mode`\r\n- Default: `active_grow_sticky`\r\n- How tab widths react to active state\r\n- Group: `TAB STRIP`\r\n\r\n`show_termy_in_titlebar`\r\n- Default: `true`\r\n- Show or hide the termy branding in the titlebar\r\n- Group: `TITLE BAR`\r\n\r\n## Advanced\r\n\r\n`working_dir`\r\n- Default: unset\r\n- Initial directory for new sessions\r\n- Group: `STARTUP`\r\n\r\n`working_dir_fallback`\r\n- Default: `home` (macOS/Windows), `process` (Linux/other)\r\n- Aliases: `default_working_dir`\r\n- Directory used when working_dir is unset\r\n- Group: `STARTUP`\r\n\r\n`warn_on_quit`\r\n- Default: `false`\r\n- Warn every time you try to quit the app\r\n- Group: `SAFETY`\r\n\r\n`warn_on_quit_with_running_process`\r\n- Default: `true`\r\n- Warn before quitting when a tab has an active process\r\n- Group: `SAFETY`\r\n\r\n`window_width`\r\n- Default: `1280`\r\n- Default startup window width in pixels\r\n- Group: `WINDOW`\r\n\r\n`window_height`\r\n- Default: `820`\r\n- Default startup window height in pixels\r\n- Group: `WINDOW`\r\n\r\n## Keybindings\r\n\r\n`keybind`\r\n- Default: built-in platform defaults\r\n- Keybinding override directive\r\n- Group: `KEYBINDS`\r\n\r\n## Colors\r\n\r\nUse `[colors]` to override theme colors with `#RRGGBB` values.\r\n\r\n`foreground`\r\n- Aliases: `fg`\r\n- Default text color\r\n\r\n`background`\r\n- Aliases: `bg`\r\n- Terminal background color\r\n\r\n`cursor`\r\n- Cursor color\r\n\r\n`black`\r\n- Aliases: `color0`\r\n- ANSI black\r\n\r\n`red`\r\n- Aliases: `color1`\r\n- ANSI red\r\n\r\n`green`\r\n- Aliases: `color2`\r\n- ANSI green\r\n\r\n`yellow`\r\n- Aliases: `color3`\r\n- ANSI yellow\r\n\r\n`blue`\r\n- Aliases: `color4`\r\n- ANSI blue\r\n\r\n`magenta`\r\n- Aliases: `color5`\r\n- ANSI magenta\r\n\r\n`cyan`\r\n- Aliases: `color6`\r\n- ANSI cyan\r\n\r\n`white`\r\n- Aliases: `color7`\r\n- ANSI white\r\n\r\n`bright_black`\r\n- Aliases: `brightblack`, `color8`\r\n- ANSI bright black\r\n\r\n`bright_red`\r\n- Aliases: `brightred`, `color9`\r\n- ANSI bright red\r\n\r\n`bright_green`\r\n- Aliases: `brightgreen`, `color10`\r\n- ANSI bright green\r\n\r\n`bright_yellow`\r\n- Aliases: `brightyellow`, `color11`\r\n- ANSI bright yellow\r\n\r\n`bright_blue`\r\n- Aliases: `brightblue`, `color12`\r\n- ANSI bright blue\r\n\r\n`bright_magenta`\r\n- Aliases: `brightmagenta`, `color13`\r\n- ANSI bright magenta\r\n\r\n`bright_cyan`\r\n- Aliases: `brightcyan`, `color14`\r\n- ANSI bright cyan\r\n\r\n`bright_white`\r\n- Aliases: `brightwhite`, `color15`\r\n- ANSI bright white\r\n",cn=`---\r
title: Customization Guide\r
description: Deep customization of fonts, themes, appearance, and behavior\r
order: 1\r
category: Guides\r
---\r
\r
# Customization Guide\r
\r
> For: end users\r
\r
This guide covers everything you can customize in Termy. From subtle tweaks to complete overhauls, make Termy work exactly how you want.\r
\r
---\r
\r
## The Configuration File\r
\r
Termy uses a simple text-based configuration at:\r
\r
\`\`\`\r
~/.config/termy/config.txt\r
\`\`\`\r
\r
### File Structure\r
\r
Termy's config is plain text: one \`key = value\` per line, \`#\` starts a comment, and \`[colors]\` introduces the color override section.\r
\r
\`\`\`txt\r
# Top-level settings\r
font_family = JetBrains Mono\r
font_size = 14\r
theme = termy\r
background_opacity = 0.95\r
\r
# Section for color overrides\r
[colors]\r
background = #1e1e2e\r
foreground = #cdd6f4\r
\`\`\`\r
\r
### Creating Your Config\r
\r
\`\`\`bash\r
mkdir -p ~/.config/termy\r
touch ~/.config/termy/config.txt\r
\`\`\`\r
\r
Changes apply immediately — no restart required.\r
\r
---\r
\r
## Typography\r
\r
### Font Family\r
\r
\`\`\`txt\r
font_family = JetBrains Mono\r
\`\`\`\r
\r
**Finding Fonts**:\r
\r
\`\`\`bash\r
# macOS: List all fonts\r
system_profiler SPFontsDataType | grep "Family:"\r
\r
# Linux: List with fontconfig\r
fc-list : family | sort | uniq\r
\`\`\`\r
\r
**Recommended Fonts**:\r
\r
| Font | Best For | Features |\r
|------|----------|----------|\r
| JetBrains Mono | Coding | Excellent ligatures, readable |\r
| Fira Code | Coding | Ligatures, weights |\r
| Cascadia Code | Windows | Microsoft designed |\r
| SF Mono | macOS | Native look |\r
| Hack | Terminal | Zero distinction |\r
\r
### Font Size\r
\r
\`\`\`txt\r
font_size = 14          # Pixels\r
\`\`\`\r
\r
Tip: Use \`Cmd/Ctrl + =\` and \`Cmd/Ctrl + -\` for temporary zooming.\r
\r
---\r
\r
## Window Appearance\r
\r
### Background Opacity\r
\r
\`\`\`txt\r
background_opacity = 0.95     # 0.0 (fully transparent) to 1.0 (opaque)\r
\`\`\`\r
\r
For a true transparent terminal:\r
\`\`\`txt\r
background_opacity = 0.85\r
background_blur = true\r
\`\`\`\r
\r
### Background Blur\r
\r
\`\`\`txt\r
background_blur = true        # macOS/Windows\r
\`\`\`\r
\r
Creates a frosted glass effect. Performance impact: minimal on GPU.\r
\r
### Window Padding\r
\r
\`\`\`txt\r
padding_x = 12      # Left/right padding (pixels)\r
padding_y = 8       # Top/bottom padding (pixels)\r
\`\`\`\r
\r
Increase for a more spacious feel:\r
\`\`\`txt\r
padding_x = 20\r
padding_y = 16\r
\`\`\`\r
\r
### Window Dimensions\r
\r
\`\`\`txt\r
window_width = 1280     # Initial width\r
window_height = 820     # Initial height\r
\`\`\`\r
\r
Termy remembers your last window size automatically.\r
\r
---\r
\r
## Cursor Customization\r
\r
### Style\r
\r
\`\`\`txt\r
cursor_style = block        # block, beam, or underline\r
\`\`\`\r
\r
| Style | Best For |\r
|-------|----------|\r
| \`block\` | Visibility, traditional |\r
| \`beam\` | Precise positioning |\r
| \`underline\` | Minimal distraction |\r
\r
### Blinking\r
\r
\`\`\`txt\r
cursor_blink = true         # Animate cursor\r
\`\`\`\r
\r
Set to \`false\` for a solid cursor.\r
\r
---\r
\r
## Scrollback & History\r
\r
### Lines to Keep\r
\r
\`\`\`txt\r
scrollback_history = 10000    # Lines in scrollback (default: 2000)\r
\`\`\`\r
\r
Higher values use more memory. Choose by workload:\r
- Default (2000): Conservative, low memory\r
- Moderate (10000): Comfortable for most shells\r
- High (50000): Long-running sessions with heavy output\r
\r
### Inactive Tab Behavior\r
\r
\`\`\`txt\r
inactive_tab_scrollback = 5000    # Limit for inactive tabs\r
\`\`\`\r
\r
Saves memory by reducing history for tabs you're not viewing.\r
\r
### Scroll Speed\r
\r
\`\`\`txt\r
mouse_scroll_multiplier = 3     # Lines per scroll tick\r
\`\`\`\r
\r
Increase for faster scrolling, decrease for precision.\r
\r
### Scrollbar Style\r
\r
\`\`\`txt\r
scrollbar_visibility = on_scroll    # always, never, on_scroll\r
scrollbar_style = neutral           # neutral, rounded, etc.\r
\`\`\`\r
\r
---\r
\r
## Tab Behavior\r
\r
### Title Sources\r
\r
\`\`\`txt\r
tab_title_priority = manual, explicit, shell, fallback\r
\`\`\`\r
\r
Priority order:\r
1. **Manual**: You renamed the tab\r
2. **Explicit**: Program set title via OSC\r
3. **Shell**: Working directory or command\r
4. **Fallback**: Default "Terminal"\r
\r
### Title Mode\r
\r
\`\`\`txt\r
tab_title_mode = smart      # smart, prompt, command, path, explicit\r
\`\`\`\r
\r
| Mode | Behavior |\r
|------|----------|\r
| \`smart\` | Automatically detects best source |\r
| \`prompt\` | Uses shell prompt template |\r
| \`command\` | Shows running command |\r
| \`path\` | Shows working directory |\r
| \`explicit\` | Only OSC-set titles |\r
\r
### Custom Title Templates\r
\r
\`\`\`txt\r
tab_title_prompt_format = {cwd} {git_branch}\r
tab_title_command_format = {command}\r
\`\`\`\r
\r
Variables available:\r
- \`{cwd}\` - Current working directory\r
- \`{command}\` - Running command name\r
- \`{git_branch}\` - Git branch (if applicable)\r
\r
### Tab Close Buttons\r
\r
\`\`\`txt\r
tab_close_visibility = active_hover    # always, never, active_hover\r
\`\`\`\r
\r
- \`always\`: Show on every tab\r
- \`never\`: Hide completely (use \`Cmd/Ctrl + W\`)\r
- \`active_hover\`: Show on hover for active tab\r
\r
### Tab Width\r
\r
\`\`\`txt\r
tab_width_mode = active_grow_sticky\r
\`\`\`\r
\r
Controls how tabs resize when many are open.\r
\r
---\r
\r
## Colors & Themes\r
\r
### Built-in Themes\r
\r
\`\`\`txt\r
theme = catppuccin\r
\`\`\`\r
\r
Available:\r
- \`termy\` - Default, clean\r
- \`catppuccin\` - Soft pastel\r
- \`gruvbox\` - Retro, warm\r
- \`tokyonight\` - Dark, modern\r
- \`github\` - GitHub-inspired\r
- \`dracula\` - Popular purple\r
\r
### Custom Colors\r
\r
Override any theme:\r
\r
\`\`\`txt\r
[colors]\r
foreground = #f8f8f2\r
background = #282a36\r
cursor = #f8f8f2\r
\r
# ANSI colors\r
black = #21222c\r
red = #ff5555\r
green = #50fa7b\r
yellow = #f1fa8c\r
blue = #bd93f9\r
magenta = #ff79c6\r
cyan = #8be9fd\r
white = #f8f8f2\r
\r
# Bright variants\r
bright_black = #6272a4\r
bright_red = #ff6e6e\r
bright_green = #69ff94\r
bright_yellow = #ffffa5\r
bright_blue = #d6acff\r
bright_magenta = #ff92df\r
bright_cyan = #a4ffff\r
bright_white = #ffffff\r
\`\`\`\r
\r
---\r
\r
## Shell Integration\r
\r
### Default Shell\r
\r
\`\`\`txt\r
shell = /bin/zsh\r
\`\`\`\r
\r
Termy uses your login shell by default. Override here.\r
\r
### Working Directory\r
\r
\`\`\`txt\r
working_dir = ~/projects\r
working_dir_fallback = home    # home, process, or path\r
\`\`\`\r
\r
- \`home\`: Start in ~\r
- \`process\`: Use Termy's working directory\r
- Custom path: \`/your/path\`\r
\r
### Environment Variables\r
\r
\`\`\`txt\r
# Passed to all shells\r
term = xterm-256color\r
colorterm = truecolor\r
\`\`\`\r
\r
Termy automatically sets:\r
- \`TERMY=1\`\r
- \`TERMY_PID\`\r
- \`TERMY_TAB_ID\`\r
\r
---\r
\r
## Safety & Behavior\r
\r
### Quit Warnings\r
\r
\`\`\`txt\r
warn_on_quit = false                              # Always warn\r
warn_on_quit_with_running_process = true          # Warn if processes running\r
\`\`\`\r
\r
### Tab Protection\r
\r
\`\`\`txt\r
tab_close_on_exit = ask    # never, always, ask\r
\`\`\`\r
\r
---\r
\r
## Example Configurations\r
\r
### Minimal\r
\r
\`\`\`txt\r
font_family = JetBrains Mono\r
font_size = 14\r
theme = termy\r
\`\`\`\r
\r
### Developer\r
\r
\`\`\`txt\r
font_family = Fira Code\r
font_size = 13\r
theme = tokyonight\r
scrollback_history = 50000\r
tab_title_mode = command\r
\`\`\`\r
\r
### Aesthetics Focus\r
\r
\`\`\`txt\r
font_family = SF Mono\r
font_size = 15\r
theme = catppuccin\r
background_opacity = 0.9\r
background_blur = true\r
padding_x = 20\r
padding_y = 16\r
cursor_style = beam\r
\`\`\`\r
\r
### Performance\r
\r
\`\`\`txt\r
font_family = JetBrains Mono\r
font_size = 14\r
background_opacity = 1.0\r
background_blur = false\r
scrollback_history = 2500\r
inactive_tab_scrollback = 1000\r
\`\`\`\r
\r
---\r
\r
## When Customization Doesn't Stick\r
\r
For the checklist of why a config change isn't applying, how to recover from a broken config, and how to diagnose missing fonts, see [Troubleshooting → Config Issues](/docs/troubleshooting#config-issues) and [Troubleshooting → Font Rendering Issues](/docs/troubleshooting#font-rendering-issues).\r
\r
---\r
\r
## Related Guides\r
\r
- [Configuration](/docs/configuration) - Full option reference\r
- [Keybindings](/docs/keybindings) - Customize shortcuts\r
- [FAQ](/docs/faq) - Common questions\r
`,ln=`---\r
title: FAQ\r
description: Frequently asked questions about Termy\r
order: 2\r
category: Help & Troubleshooting\r
---\r
\r
# Frequently Asked Questions\r
\r
> For: end users\r
\r
## General Questions\r
\r
### Is Termy free?\r
\r
**Yes**. Termy is completely free and open source, released under the MIT license. You can use it for personal or commercial projects without cost.\r
\r
### Is Termy stable?\r
\r
Termy is currently in **beta**. While it's stable for daily use, you may encounter occasional bugs. We recommend:\r
- Keeping your config backed up\r
- Reporting issues on GitHub\r
- Updating regularly for fixes\r
\r
### How is Termy different from other terminals?\r
\r
| Feature | Termy | Typical Terminal |\r
|---------|-------|----------------|\r
| GPU-accelerated | Yes | Rarely |\r
| Memory usage | ~18MB | 100-300MB+ |\r
| Startup time | ~8ms | 50-200ms |\r
| Built with | Rust | Electron/C++ |\r
| Config file | Single text file | Often complex |\r
\r
### Can I use Termy for work/commercial projects?\r
\r
Absolutely! The MIT license permits commercial use. No attribution required (though appreciated).\r
\r
---\r
\r
## Installation & Updates\r
\r
### How do I install Termy?\r
\r
**macOS** (Homebrew - easiest):\r
\`\`\`bash\r
brew install --cask termy-org/termy/termy\r
\`\`\`\r
\r
**Arch Linux**:\r
\`\`\`bash\r
paru -S termy-bin\r
\`\`\`\r
\r
**Other**: Download from [GitHub Releases](https://github.com/lassejlv/termy/releases)\r
\r
See [Installation Guide](/docs/installation) for detailed instructions.\r
\r
### How do I update Termy?\r
\r
**Automatic**: Use the Command Palette (\`Cmd/Ctrl + P\`) → "Check for updates"\r
\r
**Package Managers**:\r
\`\`\`bash\r
# macOS\r
brew upgrade --cask termy\r
\r
# Arch Linux\r
paru -S termy-bin\r
\`\`\`\r
\r
**Manual**: Download the latest release and replace the app.\r
\r
### Is Termy available on my platform?\r
\r
| Platform | Status | Method |\r
|----------|--------|--------|\r
| macOS | ✅ Supported | Homebrew, DMG |\r
| Windows | ✅ Supported | Setup.exe |\r
| Linux (x64) | ✅ Supported | AppImage, tarball |\r
| Arch Linux | ✅ Supported | AUR |\r
| Linux (ARM) | 🔄 Planned | Future release |\r
\r
### Why isn't Termy code-signed?\r
\r
Code signing certificates are expensive ($200-500/year). As an open-source project, we're evaluating options:\r
- Community funding for certificates\r
- Free certificates (e.g., SignPath for Windows)\r
- Self-signed with manual trust\r
\r
For now, you'll need to bypass security warnings on first launch. See [Installation](/docs/installation) for platform-specific steps.\r
\r
---\r
\r
## Configuration\r
\r
### Where is the config file?\r
\r
\`\`\`\r
~/.config/termy/config.txt\r
\`\`\`\r
\r
Create it if it doesn't exist:\r
\`\`\`bash\r
mkdir -p ~/.config/termy\r
touch ~/.config/termy/config.txt\r
\`\`\`\r
\r
### Do I need to restart Termy after changing config?\r
\r
**No!** Changes apply immediately. This is one of Termy's best features—tweak and see instantly.\r
\r
### Can I import my config from another terminal?\r
\r
Not automatically, but you can manually translate:\r
\r
- **iTerm2**: Colors can be exported and converted\r
- **Alacritty**: Similar config structure, easy to adapt\r
- **Windows Terminal**: JSON to Termy's format\r
\r
Example conversion from Alacritty:\r
\`\`\`yaml\r
# Alacritty\r
font:\r
  normal:\r
    family: JetBrains Mono\r
  size: 14\r
\`\`\`\r
\r
\`\`\`txt\r
# Termy\r
font_family = JetBrains Mono\r
font_size = 14\r
\`\`\`\r
\r
### What's the difference between \`config.txt\` and the UI settings?\r
\r
They're the same thing! The UI settings editor just writes to \`config.txt\`. Use whichever you prefer:\r
- **UI**: Good for discovery and quick changes\r
- **Text file**: Good for bulk edits, version control, comments\r
\r
---\r
\r
## Features\r
\r
### Does Termy support tabs?\r
\r
Yes! Tabs are a core feature:\r
- \`Cmd/Ctrl + T\` — New tab\r
- \`Cmd/Ctrl + W\` — Close tab\r
- \`Cmd/Ctrl + Shift + [/]\` — Switch tabs\r
- Drag to reorder\r
- Right-click to rename\r
\r
### Can I split panes/windows?\r
\r
Pane splitting is planned for a future release. Currently, use tabs for multiple sessions.\r
\r
### Does Termy have scrollback/search?\r
\r
Yes:\r
- Scrollback: Configurable (default 2,000 lines; raise \`scrollback_history\` for more)\r
- Search: \`Cmd/Ctrl + F\` to find in buffer\r
- Regex search: Supported\r
- Case sensitivity: Toggle with \`Cmd/Ctrl + Alt + C\`\r
\r
### Is there a command palette?\r
\r
Yes! Press \`Cmd/Ctrl + P\` for the command palette. Access:\r
- All actions\r
- Settings\r
- Theme switching\r
- Update checking\r
- Keyboard shortcuts\r
\r
### Does Termy support true color?\r
\r
Yes. Termy fully supports:\r
- 24-bit true color\r
- 256 colors\r
- ANSI colors\r
- Undercurl (underlines with colors)\r
\r
### Can I use my favorite shell?\r
\r
Absolutely. Termy works with any shell:\r
- Bash\r
- Zsh\r
- Fish\r
- Nushell\r
- PowerShell\r
- Custom shells\r
\r
Set in config:\r
\`\`\`txt\r
shell = /usr/local/bin/fish\r
\`\`\`\r
\r
---\r
\r
## Customization\r
\r
### How do I change the theme?\r
\r
**Via Command Palette**:\r
1. \`Cmd/Ctrl + P\`\r
2. Type "switch theme"\r
3. Select from list\r
\r
**Via Config**:\r
\`\`\`txt\r
theme = catppuccin\r
\`\`\`\r
\r
Built-in themes: \`termy\`, \`catppuccin\`, \`gruvbox\`, \`tokyonight\`, \`github\`, \`dracula\`\r
\r
### How do I change the font?\r
\r
\`\`\`txt\r
font_family = JetBrains Mono\r
font_size = 14\r
\`\`\`\r
\r
Find available fonts:\r
\`\`\`bash\r
# macOS\r
system_profiler SPFontsDataType | grep "Family:"\r
\r
# Linux\r
fc-list : family\r
\`\`\`\r
\r
### Can I make the background transparent?\r
\r
\`\`\`txt\r
background_opacity = 0.9    # 0.0-1.0\r
background_blur = true      # Optional blur effect\r
\`\`\`\r
\r
### How do I customize keybindings?\r
\r
\`\`\`txt\r
# In config.txt\r
keybind = secondary-p=toggle_command_palette\r
keybind = secondary-t=new_tab\r
keybind = cmd-w=unbind    # Disable default\r
\`\`\`\r
\r
See [Keybindings](/docs/keybindings) for full reference.\r
\r
---\r
\r
## Troubleshooting\r
\r
### Why won't Termy launch?\r
\r
Common causes:\r
1. **macOS Gatekeeper**: Run \`sudo xattr -d com.apple.quarantine /Applications/Termy.app\`\r
2. **Windows SmartScreen**: Click "More info" → "Run anyway"\r
3. **Broken config**: Move \`~/.config/termy/config.txt\` aside and restart\r
4. **Missing dependencies**: Install required libraries\r
\r
See [Troubleshooting](/docs/troubleshooting) for detailed solutions.\r
\r
### Why does my config not work?\r
\r
The fix is almost always file location, syntax (\`key = value\` with spaces around \`=\`), a typo in the key name, or an inexact font name. Full checklist in [Troubleshooting → Config Issues](/docs/troubleshooting#config-issues).\r
\r
### How do I report a bug?\r
\r
1. Check [existing issues](https://github.com/lassejlv/termy/issues)\r
2. Include:\r
   - Termy version (\`termy --version\`)\r
   - Operating system\r
   - Steps to reproduce\r
   - Expected vs actual behavior\r
   - Your config file (remove sensitive info)\r
\r
### Where can I get help?\r
\r
- **Discord**: https://discord.gg/4VDBFD7vAp (fastest response)\r
- **GitHub Issues**: https://github.com/lassejlv/termy/issues\r
- **GitHub Discussions**: https://github.com/lassejlv/termy/discussions\r
\r
---\r
\r
## Roadmap & Future\r
\r
### What's planned for Termy?\r
\r
Near-term:\r
- Pane splitting\r
- Plugins/extensions\r
- Improved search\r
- Better Windows integration\r
\r
Long-term:\r
- Serial/SSH connections\r
- Plugin API\r
- More built-in themes\r
\r
### When will feature X be available?\r
\r
We don't commit to timelines, but you can:\r
- Watch the GitHub repository\r
- Join Discord for updates\r
- Check the [roadmap](https://github.com/lassejlv/termy/projects)\r
\r
### Can I request a feature?\r
\r
Yes! Open a [GitHub Discussion](https://github.com/lassejlv/termy/discussions) or [Issue](https://github.com/lassejlv/termy/issues).\r
\r
---\r
\r
## More Questions?\r
\r
Can't find your answer? Try:\r
- [Discord Community](https://discord.gg/4VDBFD7vAp)\r
- [GitHub Discussions](https://github.com/lassejlv/termy/discussions)\r
- [Documentation](/docs)\r
`,un=`---\r
title: First Steps\r
description: Your complete onboarding guide to becoming productive with Termy\r
order: 1\r
category: Getting Started\r
---\r
\r
# First Steps with Termy\r
\r
> For: end users\r
\r
Welcome to Termy! This guide will get you from first launch to productive workflows in minutes. Follow along step-by-step or jump to sections that interest you.\r
\r
---\r
\r
## The Basics\r
\r
### Understanding the Interface\r
\r
When you open Termy, you'll see:\r
\r
- **Tab Bar**: At the top, shows open tabs with titles\r
- **Terminal Area**: The main space where commands run\r
- **Scrollbar**: Right side, shows your scrollback position\r
- **Title Bar**: macOS only, window controls\r
\r
### Your First Commands\r
\r
Try these to get familiar:\r
\r
\`\`\`bash\r
# See Termy version\r
termy --version\r
\r
# Check your shell\r
echo $SHELL\r
\r
# See environment variables Termy sets\r
env | grep TERMY\r
\`\`\`\r
\r
---\r
\r
## Essential Shortcuts\r
\r
Master these and you'll fly through Termy:\r
\r
### Tabs\r
| Shortcut | Action |\r
|----------|--------|\r
| \`Cmd/Ctrl + T\` | New tab |\r
| \`Cmd/Ctrl + W\` | Close tab |\r
| \`Cmd/Ctrl + Shift + ]\` | Next tab |\r
| \`Cmd/Ctrl + Shift + [\` | Previous tab |\r
\r
### Window\r
| Shortcut | Action |\r
|----------|--------|\r
| \`Cmd/Ctrl + P\` | Command Palette |\r
| \`Cmd/Ctrl + =\` | Zoom in |\r
| \`Cmd/Ctrl + -\` | Zoom out |\r
| \`Cmd/Ctrl + 0\` | Reset zoom |\r
\r
### Text\r
| Shortcut | Action |\r
|----------|--------|\r
| \`Cmd/Ctrl + C\` | Copy (when text selected) |\r
| \`Cmd/Ctrl + V\` | Paste |\r
| \`Cmd/Ctrl + F\` | Find/Search |\r
\r
**Tip**: \`Cmd\` on macOS, \`Ctrl\` on Windows/Linux\r
\r
---\r
\r
## The Command Palette\r
\r
The Command Palette is a fuzzy-search overlay for every action Termy can perform. Press \`Cmd/Ctrl + P\` to open it, start typing to filter, then press \`Enter\` to execute the highlighted entry.\r
\r
### What You Can Do\r
\r
- Switch themes instantly\r
- Check for updates\r
- Open settings\r
- Zoom and resize\r
- See all keyboard shortcuts\r
\r
### Example Workflow\r
\r
1. Press \`Cmd/Ctrl + P\`\r
2. Type "theme"\r
3. Select "Switch Theme"\r
4. Pick from the list\r
\r
---\r
\r
## Configuration Basics\r
\r
Termy uses a simple text file for configuration.\r
\r
### Where Is It?\r
\r
\`\`\`\r
~/.config/termy/config.txt\r
\`\`\`\r
\r
Create it if it doesn't exist:\r
\`\`\`bash\r
mkdir -p ~/.config/termy\r
\`\`\`\r
\r
### Essential Settings\r
\r
\`\`\`txt\r
# Appearance\r
font_family = JetBrains Mono\r
font_size = 14\r
theme = termy\r
\r
# Window\r
background_opacity = 0.95\r
padding_x = 12\r
padding_y = 8\r
\r
# Terminal\r
cursor_style = block\r
cursor_blink = true\r
scrollback_history = 10000    # Increase from the default of 2000\r
\`\`\`\r
\r
Changes apply immediately—no restart needed!\r
\r
### Finding Fonts\r
\r
List available fonts:\r
\r
\`\`\`bash\r
# macOS\r
system_profiler SPFontsDataType | grep "Family:" | head -20\r
\r
# Linux\r
fc-list : family | sort | uniq | head -20\r
\`\`\`\r
\r
Popular choices:\r
- \`JetBrains Mono\` (default)\r
- \`Fira Code\`\r
- \`SF Mono\` (macOS)\r
- \`Cascadia Code\`\r
\r
---\r
\r
## Tab Management\r
\r
### Understanding Tab Titles\r
\r
Termy intelligently names tabs based on:\r
1. **Manual name**: You renamed it\r
2. **Shell integration**: Current directory/command\r
3. **Process**: Running program name\r
4. **Fallback**: "Terminal"\r
\r
### Working with Tabs\r
\r
**Rename a tab**:\r
1. Right-click tab\r
2. Select "Rename Tab"\r
3. Type new name\r
\r
Or use the Command Palette:\r
1. \`Cmd/Ctrl + P\`\r
2. Type "rename"\r
\r
### Tab Behavior Settings\r
\r
\`\`\`txt\r
# In config.txt\r
tab_title_mode = smart\r
tab_title_shell_integration = true\r
tab_close_visibility = active_hover\r
tab_width_mode = active_grow_sticky\r
\`\`\`\r
\r
---\r
\r
## Search Like a Pro\r
\r
Press \`Cmd/Ctrl + F\` to search in the terminal buffer.\r
\r
### Search Features\r
\r
- **Case sensitivity**: Toggle with \`Cmd/Ctrl + Alt + C\`\r
- **Regex mode**: Toggle with \`Cmd/Ctrl + Alt + R\`\r
- **Navigation**: \`Cmd/Ctrl + G\` for next, \`Cmd/Ctrl + Shift + G\` for previous\r
\r
### Example Search\r
\r
1. Run some commands\r
2. Press \`Cmd/Ctrl + F\`\r
3. Type what you're looking for\r
4. Use \`Cmd/Ctrl + G\` to jump through matches\r
\r
---\r
\r
## Shell Integration\r
\r
Termy sets a handful of environment variables in every shell it spawns. There's nothing to install or enable — they're available as soon as your prompt appears:\r
\r
\`\`\`bash\r
TERMY=1                    # Present in every Termy shell\r
TERMY_PID=12345            # PID of the Termy process hosting this tab\r
TERMY_TAB_ID=1             # Tab ID, unique within the window\r
\`\`\`\r
\r
Verify they're set:\r
\r
\`\`\`bash\r
env | grep TERMY\r
\`\`\`\r
\r
### Customizing Your Shell\r
\r
Because \`TERMY\` is only present inside Termy, you can use it to gate Termy-only tweaks in your shell startup file (\`.bashrc\`, \`.zshrc\`, \`config.fish\`, etc.):\r
\r
\`\`\`bash\r
# Add a rocket to your prompt only when you're running inside Termy\r
if [ -n "$TERMY" ]; then\r
    export PS1="🚀 $PS1"\r
fi\r
\`\`\`\r
\r
---\r
\r
## Themes\r
\r
Termy ships with several built-in themes.\r
\r
### Available Themes\r
\r
- \`termy\` (default)\r
- \`catppuccin\`\r
- \`gruvbox\`\r
- \`tokyonight\`\r
- \`github\`\r
- \`dracula\`\r
\r
### Switching Themes\r
\r
Via Command Palette:\r
1. \`Cmd/Ctrl + P\`\r
2. Type "switch theme"\r
3. Select your theme\r
\r
Or in config:\r
\`\`\`txt\r
theme = catppuccin\r
\`\`\`\r
\r
### Custom Colors\r
\r
Override any theme color in config:\r
\r
\`\`\`txt\r
[colors]\r
background = #1e1e2e\r
foreground = #cdd6f4\r
blue = #89b4fa\r
\`\`\`\r
\r
---\r
\r
## Keyboard Navigation\r
\r
### Without a Mouse\r
\r
| Keys | Action |\r
|------|--------|\r
| \`Cmd/Ctrl + 1-9\` | Jump to tab 1-9 |\r
| \`Cmd/Ctrl + Shift + ←/→\` | Move tab left/right |\r
| \`Cmd/Ctrl + M\` | Minimize window |\r
\r
### Custom Shortcuts\r
\r
Add to config:\r
\r
\`\`\`txt\r
# Example: open config with Cmd/Ctrl + Shift + C\r
keybind = secondary-shift-c=open_config\r
\r
# Disable default\r
keybind = secondary-w=unbind\r
\`\`\`\r
\r
See [Keybindings](/docs/keybindings) for full reference.\r
\r
---\r
\r
## Common Workflows\r
\r
### Development Workflow\r
\r
\`\`\`bash\r
# 1. Open Termy\r
# 2. Split your work:\r
cd ~/projects/myapp\r
git status                    # Check changes\r
# 3. New tab: Cmd/Ctrl + T\r
npm run dev                   # Start dev server\r
# 4. Switch tabs: Cmd/Ctrl + Shift + [/]\r
\`\`\`\r
\r
### System Administration\r
\r
\`\`\`bash\r
# Quick SSH sessions\r
ssh user@server1     # Tab 1\r
ssh user@server2     # Tab 2 (Cmd/Ctrl + T)\r
ssh user@server3     # Tab 3 (Cmd/Ctrl + T)\r
\r
# Rename tabs to identify servers\r
# Right-click → Rename Tab\r
\`\`\`\r
\r
---\r
\r
## Staying Updated\r
\r
Termy checks for updates automatically, or manually:\r
\r
1. Open Command Palette (\`Cmd/Ctrl + P\`)\r
2. Type "check for updates"\r
3. Follow prompts\r
\r
Or use package managers:\r
\r
\`\`\`bash\r
# macOS (Homebrew)\r
brew upgrade --cask termy\r
\r
# Arch Linux\r
paru -S termy-bin\r
\`\`\`\r
\r
---\r
\r
## Getting Help\r
\r
Stuck? Here's where to go:\r
\r
1. **Command Palette**: \`Cmd/Ctrl + P\` → type what you need\r
2. **Documentation**: You're already here! Check other guides.\r
3. **GitHub Issues**: https://github.com/lassejlv/termy/issues\r
4. **Discord Community**: https://discord.gg/4VDBFD7vAp\r
\r
---\r
\r
## What's Next?\r
\r
- [Configuration](/docs/configuration) - Deep dive into all settings\r
- [Customization Guide](/docs/customization-guide) - Make it yours\r
- [Keybindings](/docs/keybindings) - Full shortcut reference\r
`,dn=`---\r
title: Installation\r
description: Complete guide to installing Termy on macOS, Windows, or Linux\r
order: 0\r
category: Getting Started\r
---\r
\r
# Installation Guide\r
\r
> For: end users\r
\r
This comprehensive guide will take you from download to your first terminal prompt. Choose your platform below and follow the step-by-step instructions.\r
\r
## Quick Start\r
\r
The fastest way to get Termy running:\r
\r
- **macOS**: \`brew install --cask termy-org/termy/termy\`\r
- **Arch Linux**: \`paru -S termy-bin\`\r
- **Other**: Download from [GitHub Releases](https://github.com/lassejlv/termy/releases)\r
\r
---\r
\r
## macOS Installation\r
\r
### Option 1: Homebrew (Recommended)\r
\r
Homebrew is the easiest and most maintainable way to install Termy on macOS.\r
\r
**Step 1**: Add the Termy tap\r
\`\`\`bash\r
brew tap termy-org/termy\r
\`\`\`\r
\r
**Step 2**: Install Termy\r
\`\`\`bash\r
brew install --cask termy\r
\`\`\`\r
\r
Or combine both steps:\r
\`\`\`bash\r
brew install --cask termy-org/termy/termy\r
\`\`\`\r
\r
**Step 3**: Launch Termy\r
- Open from Applications, or\r
- Press \`Cmd+Space\`, type "Termy", press Enter\r
\r
### Option 2: Manual DMG Install\r
\r
**Step 1**: Download the latest \`.dmg\` file from [GitHub Releases](https://github.com/lassejlv/termy/releases)\r
\r
**Step 2**: Open the DMG\r
- Double-click the downloaded \`.dmg\` file\r
- A Finder window opens showing Termy.app\r
\r
**Step 3**: Move to Applications\r
- Drag \`Termy.app\` into your \`Applications\` folder\r
- Or copy: \`cp -R Termy.app /Applications/\`\r
\r
**Step 4**: First Launch (Security)\r
\r
Because Termy is not code-signed yet, macOS Gatekeeper may block it:\r
\r
\`\`\`bash\r
# Remove quarantine attribute\r
sudo xattr -d com.apple.quarantine /Applications/Termy.app\r
\`\`\`\r
\r
Then launch Termy from Applications.\r
\r
### Upgrading on macOS\r
\r
With Homebrew:\r
\`\`\`bash\r
brew upgrade --cask termy\r
\`\`\`\r
\r
Manual install: Download the latest DMG and replace the app.\r
\r
---\r
\r
## Windows Installation\r
\r
### Standard Install (Setup.exe)\r
\r
**Step 1**: Download \`Termy-Setup.exe\` from [GitHub Releases](https://github.com/lassejlv/termy/releases)\r
\r
**Step 2**: Run the installer\r
- Double-click the downloaded file\r
- Follow the installation wizard\r
- Default install location: \`%LOCALAPPDATA%\\Programs\\Termy\`\r
\r
**Step 3**: First Launch (SmartScreen)\r
\r
Windows SmartScreen may display a security warning because Termy is not code-signed:\r
\r
1. Click **"More info"**\r
2. Click **"Run anyway"**\r
\r
**Step 4**: Launch Termy\r
- From Start Menu: Press Windows key, type "Termy"\r
- Or from Desktop shortcut if created during install\r
\r
---\r
\r
## Linux Installation\r
\r
### Option 1: AppImage (Universal)\r
\r
The AppImage works on most Linux distributions without installation.\r
\r
**Step 1**: Download the \`.AppImage\` file\r
\r
**Step 2**: Make it executable\r
\`\`\`bash\r
chmod +x Termy-*.AppImage\r
\`\`\`\r
\r
**Step 3**: Run\r
\`\`\`bash\r
./Termy-*.AppImage\r
\`\`\`\r
\r
**Optional**: Move to a permanent location\r
\`\`\`bash\r
mkdir -p ~/.local/bin\r
mv Termy-*.AppImage ~/.local/bin/termy\r
chmod +x ~/.local/bin/termy\r
\`\`\`\r
\r
Then ensure \`~/.local/bin\` is in your PATH:\r
\`\`\`bash\r
# Add to ~/.bashrc or ~/.zshrc\r
export PATH="$HOME/.local/bin:$PATH"\r
\`\`\`\r
\r
### Option 2: Tarball (Manual Install)\r
\r
**Step 1**: Download the \`.tar.gz\` file\r
\r
**Step 2**: Extract\r
\`\`\`bash\r
tar -xzf Termy-*.tar.gz\r
\`\`\`\r
\r
**Step 3**: Install using the provided script\r
\`\`\`bash\r
cd termy\r
./install.sh\r
\`\`\`\r
\r
This installs Termy to \`~/.local/bin\` by default.\r
\r
**Step 4**: Verify PATH\r
\`\`\`bash\r
which termy\r
# Should output: /home/username/.local/bin/termy\r
\`\`\`\r
\r
If not found, add to PATH:\r
\`\`\`bash\r
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc\r
source ~/.bashrc\r
\`\`\`\r
\r
### Option 3: Arch Linux (AUR)\r
\r
For Arch Linux and derivatives (Manjaro, EndeavourOS):\r
\r
\`\`\`bash\r
# Using paru (recommended)\r
paru -S termy-bin\r
\r
# Or using yay\r
yay -S termy-bin\r
\`\`\`\r
\r
The package installs Termy to \`/usr/bin/termy\`.\r
\r
### Option 4: Build from Source\r
\r
For developers or users on unsupported distros:\r
\r
\`\`\`bash\r
# Clone the repository\r
git clone https://github.com/lassejlv/termy.git\r
cd termy\r
\r
# Build with Rust\r
cargo build --release\r
\r
# The binary will be at target/release/termy\r
\`\`\`\r
\r
See [Building from Source](/docs/building-from-source) for detailed instructions.\r
\r
---\r
\r
## Verify Your Installation\r
\r
After installation, verify Termy is properly installed:\r
\r
\`\`\`bash\r
termy --version\r
\`\`\`\r
\r
Expected output:\r
\`\`\`\r
termy 0.x.x\r
\`\`\`\r
\r
If you get "command not found":\r
1. Check that the install directory is in your PATH\r
2. Restart your terminal\r
3. Try the full path to the binary\r
\r
---\r
\r
## Post-Installation\r
\r
### 1. Set Up Your Shell\r
\r
Termy works with any shell. The default is your system's default shell.\r
\r
To change the shell:\r
\r
\`\`\`bash\r
# Edit config\r
termy --config\r
\r
# Or manually edit ~/.config/termy/config.txt\r
\`\`\`\r
\r
Add:\r
\`\`\`\r
shell = /bin/zsh\r
\`\`\`\r
\r
### 2. Install a Nerd Font (Optional)\r
\r
For the best experience with icons and glyphs:\r
\r
\`\`\`bash\r
# macOS with Homebrew\r
brew tap homebrew/cask-fonts\r
brew install --cask font-jetbrains-mono-nerd-font\r
\r
# Then set in config\r
font_family = JetBrainsMono Nerd Font\r
\`\`\`\r
\r
### 3. Create Your First Config\r
\r
\`\`\`bash\r
mkdir -p ~/.config/termy\r
cat > ~/.config/termy/config.txt << 'EOF'\r
font_family = JetBrains Mono\r
font_size = 14\r
theme = termy\r
background_opacity = 0.95\r
EOF\r
\`\`\`\r
\r
---\r
\r
## Trouble Installing?\r
\r
If Termy fails to launch, gets blocked by Gatekeeper or SmartScreen, or isn't on your \`PATH\`, see [Troubleshooting → Installation Issues](/docs/troubleshooting#installation-issues) and [Troubleshooting → Runtime Issues](/docs/troubleshooting#runtime-issues) for platform-specific fixes.\r
\r
---\r
\r
## Next Steps\r
\r
- [First Steps](/docs/first-steps) - Learn the basics\r
- [Configuration](/docs/configuration) - Customize your setup\r
- [Keybindings](/docs/keybindings) - Master the shortcuts\r
`,fn="---\r\ntitle: Keybindings\r\ndescription: Keyboard shortcuts and customization\r\norder: 3\r\ncategory: Getting Started\r\n---\r\n\r\n_This file is generated by `cargo run -p xtask -- generate-keybindings-doc`. Do not edit manually._\r\n\r\nTermy keybindings use Ghostty-style trigger overrides via repeated `keybind` lines in `~/.config/termy/config.txt`.\r\n\r\n## Default Keybinds\r\n\r\n### macOS Defaults\r\n\r\n- `secondary-q` -> `quit`\r\n- `secondary-,` -> `open_settings`\r\n- `secondary-p` -> `toggle_command_palette`\r\n- `secondary-t` -> `new_tab`\r\n- `secondary-w` -> `close_tab`\r\n- `secondary-=` -> `zoom_in`\r\n- `secondary-+` -> `zoom_in`\r\n- `secondary--` -> `zoom_out`\r\n- `secondary-0` -> `zoom_reset`\r\n- `secondary-f` -> `open_search`\r\n- `secondary-g` -> `search_next`\r\n- `secondary-shift-g` -> `search_previous`\r\n- `secondary-m` -> `minimize_window`\r\n- `secondary-c` -> `copy`\r\n- `secondary-v` -> `paste`\r\n\r\n### Windows Defaults\r\n\r\n- `secondary-q` -> `quit`\r\n- `secondary-,` -> `open_settings`\r\n- `secondary-p` -> `toggle_command_palette`\r\n- `secondary-t` -> `new_tab`\r\n- `secondary-w` -> `close_tab`\r\n- `secondary-=` -> `zoom_in`\r\n- `secondary-+` -> `zoom_in`\r\n- `secondary--` -> `zoom_out`\r\n- `secondary-0` -> `zoom_reset`\r\n- `secondary-f` -> `open_search`\r\n- `secondary-g` -> `search_next`\r\n- `secondary-shift-g` -> `search_previous`\r\n- `secondary-c` -> `copy`\r\n- `secondary-v` -> `paste`\r\n\r\n### Linux Defaults\r\n\r\n- `secondary-q` -> `quit`\r\n- `secondary-,` -> `open_settings`\r\n- `secondary-p` -> `toggle_command_palette`\r\n- `secondary-t` -> `new_tab`\r\n- `secondary-w` -> `close_tab`\r\n- `secondary-=` -> `zoom_in`\r\n- `secondary-+` -> `zoom_in`\r\n- `secondary--` -> `zoom_out`\r\n- `secondary-0` -> `zoom_reset`\r\n- `secondary-f` -> `open_search`\r\n- `secondary-g` -> `search_next`\r\n- `secondary-shift-g` -> `search_previous`\r\n- `ctrl-shift-c` -> `copy`\r\n- `ctrl-shift-v` -> `paste`\r\n\r\n### Other Platform Defaults\r\n\r\n- `secondary-q` -> `quit`\r\n- `secondary-,` -> `open_settings`\r\n- `secondary-p` -> `toggle_command_palette`\r\n- `secondary-t` -> `new_tab`\r\n- `secondary-w` -> `close_tab`\r\n- `secondary-=` -> `zoom_in`\r\n- `secondary-+` -> `zoom_in`\r\n- `secondary--` -> `zoom_out`\r\n- `secondary-0` -> `zoom_reset`\r\n- `secondary-f` -> `open_search`\r\n- `secondary-g` -> `search_next`\r\n- `secondary-shift-g` -> `search_previous`\r\n- `ctrl-shift-c` -> `copy`\r\n- `ctrl-shift-v` -> `paste`\r\n\r\n`secondary` maps to `cmd` on macOS and `ctrl` on non-macOS platforms.\r\n\r\n## Config Syntax\r\n\r\nSupported forms:\r\n\r\n- `keybind = clear`\r\n- `keybind = <trigger>=<action>`\r\n- `keybind = <trigger>=unbind`\r\n\r\nBehavior:\r\n\r\n- Directives are applied in file order.\r\n- Later lines win for the same trigger.\r\n- `clear` removes all defaults before later lines are applied.\r\n- `unbind` removes the current mapping for a trigger.\r\n- Invalid lines are ignored (with warnings).\r\n\r\nRelated UI option:\r\n\r\n- `command_palette_show_keybinds = true|false` controls whether command palette rows show shortcut badges.\r\n\r\n## Configurable Actions\r\n\r\n- `new_tab`\r\n- `close_tab`\r\n- `move_tab_left`\r\n- `move_tab_right`\r\n- `switch_tab_left`\r\n- `switch_tab_right`\r\n- `minimize_window`\r\n- `rename_tab`\r\n- `app_info`\r\n- `restart_app`\r\n- `open_config`\r\n- `open_settings`\r\n- `import_colors`\r\n- `switch_theme`\r\n- `zoom_in`\r\n- `zoom_out`\r\n- `zoom_reset`\r\n- `open_search`\r\n- `check_for_updates`\r\n- `quit`\r\n- `toggle_command_palette`\r\n- `copy`\r\n- `paste`\r\n- `close_search`\r\n- `search_next`\r\n- `search_previous`\r\n- `toggle_search_case_sensitive`\r\n- `toggle_search_regex`\r\n- `install_cli`\r\n\r\n## Customization Examples\r\n\r\n### 1) Override one default\r\n\r\n```txt\r\nkeybind = cmd-p=toggle_command_palette\r\n```\r\n\r\n### 2) Remove one default\r\n\r\n```txt\r\nkeybind = cmd-w=unbind\r\n```\r\n\r\n### 3) Start from scratch\r\n\r\n```txt\r\nkeybind = clear\r\nkeybind = cmd-p=toggle_command_palette\r\nkeybind = cmd-t=new_tab\r\nkeybind = cmd-w=close_tab\r\nkeybind = cmd-c=copy\r\nkeybind = cmd-v=paste\r\n```\r\n\r\n### 4) Use `secondary` for cross-platform configs\r\n\r\n```txt\r\nkeybind = secondary-p=toggle_command_palette\r\nkeybind = secondary-t=new_tab\r\n```\r\n",pn=`---\r
title: Troubleshooting\r
description: Solutions to common problems and issues\r
order: 1\r
category: Help & Troubleshooting\r
---\r
\r
# Troubleshooting\r
\r
> For: end users\r
\r
Having trouble with Termy? This guide covers common issues and their solutions.\r
\r
---\r
\r
## Installation Issues\r
\r
### macOS: "Termy is damaged and can't be opened"\r
\r
**Cause**: macOS Gatekeeper quarantine\r
\r
**Solution**:\r
\r
\`\`\`bash\r
# Remove quarantine attribute\r
sudo xattr -d com.apple.quarantine /Applications/Termy.app\r
\r
# Alternative: Allow from Security preferences\r
# 1. Open System Preferences → Security & Privacy\r
# 2. Click "Allow Anyway" next to the Termy warning\r
\`\`\`\r
\r
### macOS: "Termy cannot be opened because the developer cannot be verified"\r
\r
**Quick Fix**:\r
1. Right-click (Control+click) Termy.app\r
2. Select "Open"\r
3. Click "Open" in the dialog\r
\r
**Permanent Fix** (same as above):\r
\`\`\`bash\r
sudo xattr -d com.apple.quarantine /Applications/Termy.app\r
\`\`\`\r
\r
### Windows: "Windows protected your PC" / SmartScreen\r
\r
**Cause**: Windows SmartScreen blocking unsigned apps\r
\r
**Solution**:\r
1. Click **"More info"**\r
2. Click **"Run anyway"**\r
\r
To prevent this warning, install via a package manager when available.\r
\r
### Linux: AppImage Won't Launch\r
\r
**Check FUSE**:\r
\`\`\`bash\r
# Test if FUSE is available\r
ls /dev/fuse\r
\r
# Install FUSE (Ubuntu/Debian)\r
sudo apt install libfuse2\r
\r
# Install FUSE (Fedora)\r
sudo dnf install fuse\r
\r
# Install FUSE (Arch)\r
sudo pacman -S fuse2\r
\`\`\`\r
\r
**Alternative Run Method**:\r
\`\`\`bash\r
./Termy-*.AppImage --appimage-extract-and-run\r
\`\`\`\r
\r
**Check Dependencies**:\r
\`\`\`bash\r
# See what libraries are missing\r
ldd ./Termy-*.AppImage\r
\`\`\`\r
\r
---\r
\r
## Runtime Issues\r
\r
### "termy: command not found"\r
\r
**Check Installation Location**:\r
\r
\`\`\`bash\r
# Find termy binary\r
which termy\r
find /Applications ~/.local/bin /usr/bin -name "termy" 2>/dev/null\r
\`\`\`\r
\r
**Add to PATH**:\r
\r
\`\`\`bash\r
# macOS (if not using Homebrew)\r
export PATH="$PATH:/Applications/Termy.app/Contents/MacOS"\r
\r
# Linux (if installed to ~/.local/bin)\r
export PATH="$HOME/.local/bin:$PATH"\r
\`\`\`\r
\r
Add to \`~/.bashrc\`, \`~/.zshrc\`, or \`~/.config/fish/config.fish\` to persist.\r
\r
### Termy Opens Then Immediately Closes\r
\r
**Check Config**:\r
\r
\`\`\`bash\r
# Temporarily reset config\r
mv ~/.config/termy/config.txt ~/.config/termy/config.txt.bak\r
\r
# Try launching again\r
termy\r
\`\`\`\r
\r
If this works, there's an error in your config. Restore and fix:\r
\r
\`\`\`bash\r
# Restore backup\r
mv ~/.config/termy/config.txt.bak ~/.config/termy/config.txt\r
\r
# Edit and fix issues\r
# Common problems:\r
# - Invalid font name\r
# - Syntax errors\r
# - Missing values\r
\`\`\`\r
\r
**Check Logs** (if available):\r
\r
\`\`\`bash\r
# Run with debug output\r
RUST_LOG=debug termy 2>&1 | tee termy.log\r
\`\`\`\r
\r
### Slow Performance\r
\r
**Disable Transparency**:\r
\`\`\`txt\r
# In config.txt\r
background_opacity = 1.0\r
background_blur = false\r
\`\`\`\r
\r
**Reduce Scrollback**:\r
\`\`\`txt\r
scrollback_history = 2500\r
inactive_tab_scrollback = 1000\r
\`\`\`\r
\r
**Use System Font**:\r
\`\`\`txt\r
# Instead of custom fonts\r
font_family = monospace\r
\`\`\`\r
\r
### High CPU Usage\r
\r
**Possible Causes**:\r
- Transparent background with blur\r
- Very long scrollback\r
- Debug logging enabled\r
\r
**Fixes**:\r
\`\`\`txt\r
# config.txt\r
background_opacity = 1.0\r
background_blur = false\r
scrollback_history = 5000\r
\`\`\`\r
\r
### Font Rendering Issues\r
\r
**Missing Characters**:\r
- Install a Nerd Font: \`brew install font-jetbrains-mono-nerd-font\`\r
- Or disable icons in your shell prompt\r
\r
**Wrong Font**:\r
\`\`\`bash\r
# Check exact font name\r
fc-match "Your Font Name"\r
\r
# List available fonts\r
fc-list : family | grep -i "your font"\r
\`\`\`\r
\r
**Update Font Cache** (Linux):\r
\`\`\`bash\r
fc-cache -fv\r
\`\`\`\r
\r
---\r
\r
## Display Issues\r
\r
### Blurry Text\r
\r
**macOS**:\r
- Check "System Preferences → Displays" scaling\r
- Try different font sizes (odd numbers often sharper)\r
\r
**Linux (HiDPI)**:\r
\`\`\`bash\r
# Set scale factor\r
export WINIT_X11_SCALE_FACTOR=1.5\r
termy\r
\`\`\`\r
\r
### Colors Look Wrong\r
\r
**Check Terminal Colors**:\r
\`\`\`bash\r
# Print color test\r
for i in {0..255}; do\r
    printf "\\x1b[38;5;\${i}mcolour\${i} "\r
done\r
\`\`\`\r
\r
**Override Theme Colors**:\r
\`\`\`txt\r
[colors]\r
foreground = #ffffff\r
background = #000000\r
\`\`\`\r
\r
### Cursor Not Visible\r
\r
\`\`\`txt\r
# config.txt\r
cursor_style = block\r
cursor_blink = false\r
\`\`\`\r
\r
Try different styles: \`block\`, \`beam\`, \`underline\`.\r
\r
---\r
\r
## Input Issues\r
\r
### Keyboard Shortcuts Not Working\r
\r
**Check for Conflicts**:\r
- macOS: System Preferences → Keyboard → Shortcuts\r
- Check if another app is capturing the shortcut\r
\r
**Reset Keybindings**:\r
\`\`\`txt\r
# config.txt\r
keybind = clear\r
\`\`\`\r
\r
Then add back only what you need.\r
\r
### Copy/Paste Not Working\r
\r
**Linux**:\r
\`\`\`bash\r
# Ensure clipboard tools are installed\r
# Ubuntu/Debian\r
sudo apt install xclip\r
\r
# Or xsel\r
sudo apt install xsel\r
\`\`\`\r
\r
**Check Keybindings**:\r
\`\`\`txt\r
# Should be:\r
keybind = secondary-c=copy\r
keybind = secondary-v=paste\r
\`\`\`\r
\r
### Special Characters Not Rendering\r
\r
**Check Locale**:\r
\`\`\`bash\r
locale\r
\r
# Set UTF-8 if needed\r
export LANG=en_US.UTF-8\r
export LC_ALL=en_US.UTF-8\r
\`\`\`\r
\r
---\r
\r
## Shell Issues\r
\r
### Shell Not Starting\r
\r
**Check Shell Path**:\r
\`\`\`bash\r
which bash\r
which zsh\r
which fish\r
\r
# Verify in config\r
shell = /bin/zsh\r
\`\`\`\r
\r
**Test Shell Manually**:\r
\`\`\`bash\r
# Run the shell directly\r
/bin/zsh --login\r
\`\`\`\r
\r
### Environment Variables Missing\r
\r
**Check Shell Integration**:\r
\`\`\`bash\r
# In Termy\r
env | grep TERMY\r
# Should show TERMY=1\r
\r
# Check if shell is login shell\r
shopt -q login_shell && echo "Login shell" || echo "Not login shell"\r
\`\`\`\r
\r
**Fix for macOS**:\r
macOS doesn't run \`.bashrc\` for login shells. Use \`.bash_profile\` or \`.zprofile\`:\r
\r
\`\`\`bash\r
# ~/.zprofile\r
source ~/.zshrc\r
\`\`\`\r
\r
---\r
\r
## Config Issues\r
\r
### Config Changes Not Applying\r
\r
**Verify File Location**:\r
\`\`\`bash\r
ls -la ~/.config/termy/config.txt\r
cat ~/.config/termy/config.txt\r
\`\`\`\r
\r
**Check Syntax**:\r
\`\`\`txt\r
# Correct:\r
font_family = JetBrains Mono\r
font_size = 14\r
\r
# Incorrect:\r
font_family=JetBrains Mono  # Missing spaces\r
font_size: 14               # Wrong separator\r
\`\`\`\r
\r
**Validate Config**:\r
Most errors are logged. Run from terminal to see:\r
\`\`\`bash\r
termy 2>&1 | head -50\r
\`\`\`\r
\r
### Reset to Defaults\r
\r
\`\`\`bash\r
# Backup first\r
mv ~/.config/termy/config.txt ~/.config/termy/config.txt.backup\r
\r
# Create empty config\r
touch ~/.config/termy/config.txt\r
\r
# Or copy from examples\r
# (examples would be in repo)\r
\`\`\`\r
\r
---\r
\r
## Update Issues\r
\r
### "Failed to check for updates"\r
\r
**Check Internet**:\r
\`\`\`bash\r
ping github.com\r
\`\`\`\r
\r
**Check GitHub API**:\r
\`\`\`bash\r
curl -I https://api.github.com/repos/lassejlv/termy/releases/latest\r
\`\`\`\r
\r
**Manual Update**:\r
1. Download latest from GitHub\r
2. Replace existing install\r
\r
### Update Broke Something\r
\r
**Rollback**:\r
\`\`\`bash\r
# Restore previous version\r
# (Keep old versions before updating)\r
\r
# Or reinstall\r
brew reinstall --cask termy\r
\`\`\`\r
\r
---\r
\r
## Getting More Help\r
\r
### Collect Information\r
\r
Before reporting an issue, gather:\r
\r
\`\`\`bash\r
# Termy version\r
termy --version\r
\r
# OS version\r
uname -a  # macOS/Linux\r
systeminfo | findstr /B /C:"OS"  # Windows\r
\r
# Config file\r
cat ~/.config/termy/config.txt\r
\r
# Recent logs (if any)\r
ls -la ~/Library/Logs/termy/  # macOS\r
\`\`\`\r
\r
### Where to Report\r
\r
1. **GitHub Issues**: https://github.com/lassejlv/termy/issues\r
2. **Discord**: https://discord.gg/4VDBFD7vAp (faster response)\r
3. **Check existing issues**: Search before posting\r
\r
### Include in Bug Reports\r
\r
- Termy version\r
- Operating system and version\r
- What you expected vs what happened\r
- Steps to reproduce\r
- Config file (sanitized)\r
- Screenshots if visual issue\r
\r
---\r
\r
## Related\r
\r
- [FAQ](/docs/faq) - Common questions\r
- [Installation](/docs/installation) - Install guide\r
`;function mn(e){return e.split(`/`).pop().split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function hn(e){if(e)return Number.parseInt(e,10)}function gn(e,t){return e.order!==void 0&&t.order!==void 0?e.order-t.order:e.order===void 0?t.order===void 0?e.title.localeCompare(t.title):1:-1}function _n(e){let t=e.match(/^---\n([\s\S]*?)\n---\n/);if(!t)return{meta:{},content:e};let n=t[1],r={};for(let e of n.split(`
`)){let[t,...n]=e.split(`:`);t&&n.length>0&&(r[t.trim()]=n.join(`:`).trim())}return{meta:r,content:e.slice(t[0].length)}}var vn={"/src/content/building-from-source.md":on,"/src/content/configuration.md":sn,"/src/content/customization-guide.md":cn,"/src/content/faq.md":ln,"/src/content/first-steps.md":un,"/src/content/installation.md":dn,"/src/content/keybindings.md":fn,"/src/content/troubleshooting.md":pn};function yn(e,t){let n=e.replace(`/src/content/`,``).replace(`.md`,``),{meta:r,content:i}=_n(t);return{slug:n,title:r.title??mn(n),description:r.description,order:hn(r.order),category:r.category,content:i}}function bn(){return Object.entries(vn).map(([e,t])=>yn(e,t)).sort(gn)}function xn(){let e=bn(),t={};for(let n of e){let e=n.category??`General`;t[e]??=[],t[e].push(n)}return t}var Sn={"Getting Started":0,Guides:1,"Help & Troubleshooting":3,Architecture:4,General:99};function Cn(e){return[...e].sort((e,t)=>{let n=Sn[e]??50,r=Sn[t]??50;return n===r?e.localeCompare(t):n-r})}function wn(e){return bn().find(t=>t.slug===e)}function Tn(e){let t=/^(#{2,4})\s+(.+)$/gm,n=[],r;for(;(r=t.exec(e))!==null;){let e=r[1].length,t=r[2].trim(),i=Bt(t);n.push({id:i,text:t,level:e})}return n}const En=c(`/docs/$`)({component:i(()=>$(()=>import(`./_-BQSkcI64.js`),__vite__mapDeps([12,6,1,2,7,8,3,9])),`component`),loader:({params:e})=>{let t=wn(e._splat??``);if(!t)throw d();return t}});var Dn=tn.update({id:`/`,path:`/`,getParentRoute:()=>Q}),On=rn.update({id:`/docs/`,path:`/docs/`,getParentRoute:()=>Q}),kn=an.update({id:`/contributors/`,path:`/contributors/`,getParentRoute:()=>Q}),An={IndexRoute:Dn,DocsSplatRoute:En.update({id:`/docs/$`,path:`/docs/$`,getParentRoute:()=>Q}),ContributorsIndexRoute:kn,DocsIndexRoute:On},jn=l({routeTree:Q._addFileChildren(An)._addFileTypes()}),Mn=new ue({defaultOptions:{queries:{staleTime:300*1e3,gcTime:1800*1e3,refetchOnWindowFocus:!1}}}),Nn=document.getElementById(`root`);if(!Nn)throw Error(`Root element not found`);(0,I.createRoot)(Nn).render((0,B.jsx)(L.StrictMode,{children:(0,B.jsx)(y,{client:Mn,children:(0,B.jsx)(s,{router:jn})})}));export{Cn as a,zt as c,xn as i,Bt as l,Tn as n,nn as o,bn as r,Rt as s,En as t,Vt as u};