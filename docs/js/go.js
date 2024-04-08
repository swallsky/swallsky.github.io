(()=>{var jf=Object.create;var Oi=Object.defineProperty;var wf=Object.getOwnPropertyDescriptor;var kf=Object.getOwnPropertyNames;var Sf=Object.getPrototypeOf,xf=Object.prototype.hasOwnProperty;var me=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var _f=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of kf(e))!xf.call(n,r)&&r!==t&&Oi(n,r,{get:()=>e[r],enumerable:!(s=wf(e,r))||s.enumerable});return n};var ye=(n,e,t)=>(t=n!=null?jf(Sf(n)):{},_f(e||!n||!n.__esModule?Oi(t,"default",{value:n,enumerable:!0}):t,n));var Ui=me(C=>{"use strict";var Xt=Symbol.for("react.element"),Ef=Symbol.for("react.portal"),Pf=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Tf=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),Rf=Symbol.for("react.suspense"),zf=Symbol.for("react.memo"),Lf=Symbol.for("react.lazy"),Ri=Symbol.iterator;function If(n){return n===null||typeof n!="object"?null:(n=Ri&&n[Ri]||n["@@iterator"],typeof n=="function"?n:null)}var Ii={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mi=Object.assign,Di={};function it(n,e,t){this.props=n,this.context=e,this.refs=Di,this.updater=t||Ii}it.prototype.isReactComponent={};it.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};it.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ai(){}Ai.prototype=it.prototype;function $l(n,e,t){this.props=n,this.context=e,this.refs=Di,this.updater=t||Ii}var Wl=$l.prototype=new Ai;Wl.constructor=$l;Mi(Wl,it.prototype);Wl.isPureReactComponent=!0;var zi=Array.isArray,Fi=Object.prototype.hasOwnProperty,Hl={current:null},Gi={key:!0,ref:!0,__self:!0,__source:!0};function Bi(n,e,t){var s,r={},l=null,a=null;if(e!=null)for(s in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(l=""+e.key),e)Fi.call(e,s)&&!Gi.hasOwnProperty(s)&&(r[s]=e[s]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var i=Array(o),p=0;p<o;p++)i[p]=arguments[p+2];r.children=i}if(n&&n.defaultProps)for(s in o=n.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:Xt,type:n,key:l,ref:a,props:r,_owner:Hl.current}}function Mf(n,e){return{$$typeof:Xt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ql(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xt}function Df(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Li=/\/+/g;function Vl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Df(""+n.key):e.toString(36)}function tr(n,e,t,s,r){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Xt:case Ef:a=!0}}if(a)return a=n,r=r(a),n=s===""?"."+Vl(a,0):s,zi(r)?(t="",n!=null&&(t=n.replace(Li,"$&/")+"/"),tr(r,e,t,"",function(p){return p})):r!=null&&(Ql(r)&&(r=Mf(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Li,"$&/")+"/")+n)),e.push(r)),1;if(a=0,s=s===""?".":s+":",zi(n))for(var o=0;o<n.length;o++){l=n[o];var i=s+Vl(l,o);a+=tr(l,e,t,i,r)}else if(i=If(n),typeof i=="function")for(n=i.call(n),o=0;!(l=n.next()).done;)l=l.value,i=s+Vl(l,o++),a+=tr(l,e,t,i,r);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function er(n,e,t){if(n==null)return n;var s=[],r=0;return tr(n,s,"","",function(l){return e.call(t,l,r++)}),s}function Af(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},sr={transition:null},Ff={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:sr,ReactCurrentOwner:Hl};C.Children={map:er,forEach:function(n,e,t){er(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return er(n,function(){e++}),e},toArray:function(n){return er(n,function(e){return e})||[]},only:function(n){if(!Ql(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};C.Component=it;C.Fragment=Pf;C.Profiler=qf;C.PureComponent=$l;C.StrictMode=Cf;C.Suspense=Rf;C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;C.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var s=Mi({},n.props),r=n.key,l=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,a=Hl.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(i in e)Fi.call(e,i)&&!Gi.hasOwnProperty(i)&&(s[i]=e[i]===void 0&&o!==void 0?o[i]:e[i])}var i=arguments.length-2;if(i===1)s.children=t;else if(1<i){o=Array(i);for(var p=0;p<i;p++)o[p]=arguments[p+2];s.children=o}return{$$typeof:Xt,type:n.type,key:r,ref:l,props:s,_owner:a}};C.createContext=function(n){return n={$$typeof:Tf,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Nf,_context:n},n.Consumer=n};C.createElement=Bi;C.createFactory=function(n){var e=Bi.bind(null,n);return e.type=n,e};C.createRef=function(){return{current:null}};C.forwardRef=function(n){return{$$typeof:Of,render:n}};C.isValidElement=Ql;C.lazy=function(n){return{$$typeof:Lf,_payload:{_status:-1,_result:n},_init:Af}};C.memo=function(n,e){return{$$typeof:zf,type:n,compare:e===void 0?null:e}};C.startTransition=function(n){var e=sr.transition;sr.transition={};try{n()}finally{sr.transition=e}};C.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};C.useCallback=function(n,e){return un.current.useCallback(n,e)};C.useContext=function(n){return un.current.useContext(n)};C.useDebugValue=function(){};C.useDeferredValue=function(n){return un.current.useDeferredValue(n)};C.useEffect=function(n,e){return un.current.useEffect(n,e)};C.useId=function(){return un.current.useId()};C.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};C.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};C.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};C.useMemo=function(n,e){return un.current.useMemo(n,e)};C.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};C.useRef=function(n){return un.current.useRef(n)};C.useState=function(n){return un.current.useState(n)};C.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};C.useTransition=function(){return un.current.useTransition()};C.version="18.2.0"});var ge=me((Ly,bi)=>{"use strict";bi.exports=Ui()});var Ji=me(L=>{"use strict";function Zl(n,e){var t=n.length;n.push(e);n:for(;0<t;){var s=t-1>>>1,r=n[s];if(0<rr(r,e))n[s]=e,n[t]=r,t=s;else break n}}function Ln(n){return n.length===0?null:n[0]}function ar(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;n:for(var s=0,r=n.length,l=r>>>1;s<l;){var a=2*(s+1)-1,o=n[a],i=a+1,p=n[i];if(0>rr(o,t))i<r&&0>rr(p,o)?(n[s]=p,n[i]=t,s=i):(n[s]=o,n[a]=t,s=a);else if(i<r&&0>rr(p,t))n[s]=p,n[i]=t,s=i;else break n}}return e}function rr(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Vi=performance,L.unstable_now=function(){return Vi.now()}):(Yl=Date,$i=Yl.now(),L.unstable_now=function(){return Yl.now()-$i});var Vi,Yl,$i,Vn=[],ve=[],Gf=1,En=null,tn=3,or=!1,be=!1,Jt=!1,Qi=typeof setTimeout=="function"?setTimeout:null,Yi=typeof clearTimeout=="function"?clearTimeout:null,Wi=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Jl(n){for(var e=Ln(ve);e!==null;){if(e.callback===null)ar(ve);else if(e.startTime<=n)ar(ve),e.sortIndex=e.expirationTime,Zl(Vn,e);else break;e=Ln(ve)}}function na(n){if(Jt=!1,Jl(n),!be)if(Ln(Vn)!==null)be=!0,ta(ea);else{var e=Ln(ve);e!==null&&sa(na,e.startTime-n)}}function ea(n,e){be=!1,Jt&&(Jt=!1,Yi(ns),ns=-1),or=!0;var t=tn;try{for(Jl(e),En=Ln(Vn);En!==null&&(!(En.expirationTime>e)||n&&!Zi());){var s=En.callback;if(typeof s=="function"){En.callback=null,tn=En.priorityLevel;var r=s(En.expirationTime<=e);e=L.unstable_now(),typeof r=="function"?En.callback=r:En===Ln(Vn)&&ar(Vn),Jl(e)}else ar(Vn);En=Ln(Vn)}if(En!==null)var l=!0;else{var a=Ln(ve);a!==null&&sa(na,a.startTime-e),l=!1}return l}finally{En=null,tn=t,or=!1}}var ir=!1,lr=null,ns=-1,Ki=5,Xi=-1;function Zi(){return!(L.unstable_now()-Xi<Ki)}function Kl(){if(lr!==null){var n=L.unstable_now();Xi=n;var e=!0;try{e=lr(!0,n)}finally{e?Zt():(ir=!1,lr=null)}}else ir=!1}var Zt;typeof Wi=="function"?Zt=function(){Wi(Kl)}:typeof MessageChannel<"u"?(Xl=new MessageChannel,Hi=Xl.port2,Xl.port1.onmessage=Kl,Zt=function(){Hi.postMessage(null)}):Zt=function(){Qi(Kl,0)};var Xl,Hi;function ta(n){lr=n,ir||(ir=!0,Zt())}function sa(n,e){ns=Qi(function(){n(L.unstable_now())},e)}L.unstable_IdlePriority=5;L.unstable_ImmediatePriority=1;L.unstable_LowPriority=4;L.unstable_NormalPriority=3;L.unstable_Profiling=null;L.unstable_UserBlockingPriority=2;L.unstable_cancelCallback=function(n){n.callback=null};L.unstable_continueExecution=function(){be||or||(be=!0,ta(ea))};L.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ki=0<n?Math.floor(1e3/n):5};L.unstable_getCurrentPriorityLevel=function(){return tn};L.unstable_getFirstCallbackNode=function(){return Ln(Vn)};L.unstable_next=function(n){switch(tn){case 1:case 2:case 3:var e=3;break;default:e=tn}var t=tn;tn=e;try{return n()}finally{tn=t}};L.unstable_pauseExecution=function(){};L.unstable_requestPaint=function(){};L.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=tn;tn=n;try{return e()}finally{tn=t}};L.unstable_scheduleCallback=function(n,e,t){var s=L.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:Gf++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>s?(n.sortIndex=t,Zl(ve,n),Ln(Vn)===null&&n===Ln(ve)&&(Jt?(Yi(ns),ns=-1):Jt=!0,sa(na,t-s))):(n.sortIndex=r,Zl(Vn,n),be||or||(be=!0,ta(ea))),n};L.unstable_shouldYield=Zi;L.unstable_wrapCallback=function(n){var e=tn;return function(){var t=tn;tn=e;try{return n.apply(this,arguments)}finally{tn=t}}}});var eu=me((My,nu)=>{"use strict";nu.exports=Ji()});var od=me(_n=>{"use strict";var ip=ge(),Sn=eu();function v(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var up=new Set,Ss={};function tt(n,e){Nt(n,e),Nt(n+"Capture",e)}function Nt(n,e){for(Ss[n]=e,n=0;n<e.length;n++)up.add(e[n])}var se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pa=Object.prototype.hasOwnProperty,Bf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},su={};function Uf(n){return Pa.call(su,n)?!0:Pa.call(tu,n)?!1:Bf.test(n)?su[n]=!0:(tu[n]=!0,!1)}function bf(n,e,t,s){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Vf(n,e,t,s){if(e===null||typeof e>"u"||bf(n,e,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,s,r,l,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=a}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){en[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];en[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){en[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){en[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){en[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){en[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){en[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){en[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){en[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var jo=/[\-:]([a-z])/g;function wo(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(jo,wo);en[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(jo,wo);en[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(jo,wo);en[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){en[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});en.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){en[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ko(n,e,t,s){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:s||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vf(e,t,r,s)&&(t=null),s||r===null?Uf(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,s=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?n.setAttributeNS(s,e,t):n.setAttribute(e,t))))}var oe=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),ct=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),So=Symbol.for("react.strict_mode"),Ca=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),cp=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),_o=Symbol.for("react.memo"),we=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var dp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var ru=Symbol.iterator;function es(n){return n===null||typeof n!="object"?null:(n=ru&&n[ru]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,ra;function us(n){if(ra===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ra=e&&e[1]||""}return`
`+ra+n}var la=!1;function aa(n,e){if(!n||la)return"";la=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(p){var s=p}Reflect.construct(n,[],e)}else{try{e.call()}catch(p){s=p}n.call(e.prototype)}else{try{throw Error()}catch(p){s=p}n()}}catch(p){if(p&&s&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),l=s.stack.split(`
`),a=r.length-1,o=l.length-1;1<=a&&0<=o&&r[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==l[o]){var i=`
`+r[a].replace(" at new "," at ");return n.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",n.displayName)),i}while(1<=a&&0<=o);break}}}finally{la=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?us(n):""}function $f(n){switch(n.tag){case 5:return us(n.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 2:case 15:return n=aa(n.type,!1),n;case 11:return n=aa(n.type.render,!1),n;case 1:return n=aa(n.type,!0),n;default:return""}}function Ta(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case dt:return"Fragment";case ct:return"Portal";case Ca:return"Profiler";case So:return"StrictMode";case qa:return"Suspense";case Na:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case cp:return(n.displayName||"Context")+".Consumer";case pp:return(n._context.displayName||"Context")+".Provider";case xo:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _o:return e=n.displayName||null,e!==null?e:Ta(n.type)||"Memo";case we:e=n._payload,n=n._init;try{return Ta(n(e))}catch{}}return null}function Wf(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(e);case 8:return e===So?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hf(n){var e=fp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),s=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,l.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function pr(n){n._valueTracker||(n._valueTracker=Hf(n))}function hp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),s="";return n&&(s=fp(n)?n.checked?"true":"false":n.value),n=s,n!==t?(e.setValue(n),!0):!1}function Ar(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Oa(n,e){var t=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function lu(n,e){var t=e.defaultValue==null?"":e.defaultValue,s=e.checked!=null?e.checked:e.defaultChecked;t=Le(e.value!=null?e.value:t),n._wrapperState={initialChecked:s,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mp(n,e){e=e.checked,e!=null&&ko(n,"checked",e,!1)}function Ra(n,e){mp(n,e);var t=Le(e.value),s=e.type;if(t!=null)s==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(s==="submit"||s==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?za(n,e.type,t):e.hasOwnProperty("defaultValue")&&za(n,e.type,Le(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function au(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var s=e.type;if(!(s!=="submit"&&s!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function za(n,e,t){(e!=="number"||Ar(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ps=Array.isArray;function xt(n,e,t,s){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&s&&(n[t].defaultSelected=!0)}else{for(t=""+Le(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,s&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function La(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ou(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(v(92));if(ps(t)){if(1<t.length)throw Error(v(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Le(t)}}function yp(n,e){var t=Le(e.value),s=Le(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),s!=null&&(n.defaultValue=""+s)}function iu(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function gp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?gp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cr,vp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,s,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,s,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function xs(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qf=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(n){Qf.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),fs[e]=fs[n]})});function jp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||fs.hasOwnProperty(n)&&fs[n]?(""+e).trim():e+"px"}function wp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=jp(t,e[t],s);t==="float"&&(t="cssFloat"),s?n.setProperty(t,r):n[t]=r}}var Yf=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ma(n,e){if(e){if(Yf[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function Da(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Eo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fa=null,_t=null,Et=null;function uu(n){if(n=Bs(n)){if(typeof Fa!="function")throw Error(v(280));var e=n.stateNode;e&&(e=dl(e),Fa(n.stateNode,n.type,e))}}function kp(n){_t?Et?Et.push(n):Et=[n]:_t=n}function Sp(){if(_t){var n=_t,e=Et;if(Et=_t=null,uu(n),e)for(n=0;n<e.length;n++)uu(e[n])}}function xp(n,e){return n(e)}function _p(){}var oa=!1;function Ep(n,e,t){if(oa)return n(e,t);oa=!0;try{return xp(n,e,t)}finally{oa=!1,(_t!==null||Et!==null)&&(_p(),Sp())}}function _s(n,e){var t=n.stateNode;if(t===null)return null;var s=dl(t);if(s===null)return null;t=s[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(v(231,e,typeof t));return t}var Ga=!1;if(se)try{ut={},Object.defineProperty(ut,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{Ga=!1}var ut;function Kf(n,e,t,s,r,l,a,o,i){var p=Array.prototype.slice.call(arguments,3);try{e.apply(t,p)}catch(f){this.onError(f)}}var hs=!1,Fr=null,Gr=!1,Ba=null,Xf={onError:function(n){hs=!0,Fr=n}};function Zf(n,e,t,s,r,l,a,o,i){hs=!1,Fr=null,Kf.apply(Xf,arguments)}function Jf(n,e,t,s,r,l,a,o,i){if(Zf.apply(this,arguments),hs){if(hs){var p=Fr;hs=!1,Fr=null}else throw Error(v(198));Gr||(Gr=!0,Ba=p)}}function st(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Pp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function pu(n){if(st(n)!==n)throw Error(v(188))}function nh(n){var e=n.alternate;if(!e){if(e=st(n),e===null)throw Error(v(188));return e!==n?null:n}for(var t=n,s=e;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return pu(r),n;if(l===s)return pu(r),e;l=l.sibling}throw Error(v(188))}if(t.return!==s.return)t=r,s=l;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,s=l;break}if(o===s){a=!0,s=r,t=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===t){a=!0,t=l,s=r;break}if(o===s){a=!0,s=l,t=r;break}o=o.sibling}if(!a)throw Error(v(189))}}if(t.alternate!==s)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?n:e}function Cp(n){return n=nh(n),n!==null?qp(n):null}function qp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=qp(n);if(e!==null)return e;n=n.sibling}return null}var Np=Sn.unstable_scheduleCallback,cu=Sn.unstable_cancelCallback,eh=Sn.unstable_shouldYield,th=Sn.unstable_requestPaint,W=Sn.unstable_now,sh=Sn.unstable_getCurrentPriorityLevel,Po=Sn.unstable_ImmediatePriority,Tp=Sn.unstable_UserBlockingPriority,Br=Sn.unstable_NormalPriority,rh=Sn.unstable_LowPriority,Op=Sn.unstable_IdlePriority,il=null,Qn=null;function lh(n){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(il,n,void 0,(n.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:ih,ah=Math.log,oh=Math.LN2;function ih(n){return n>>>=0,n===0?32:31-(ah(n)/oh|0)|0}var dr=64,fr=4194304;function cs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ur(n,e){var t=n.pendingLanes;if(t===0)return 0;var s=0,r=n.suspendedLanes,l=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?s=cs(o):(l&=a,l!==0&&(s=cs(l)))}else a=t&~r,a!==0?s=cs(a):l!==0&&(s=cs(l));if(s===0)return 0;if(e!==0&&e!==s&&!(e&r)&&(r=s&-s,l=e&-e,r>=l||r===16&&(l&4194240)!==0))return e;if(s&4&&(s|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=s;0<e;)t=31-Fn(e),r=1<<t,s|=n[t],e&=~r;return s}function uh(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ph(n,e){for(var t=n.suspendedLanes,s=n.pingedLanes,r=n.expirationTimes,l=n.pendingLanes;0<l;){var a=31-Fn(l),o=1<<a,i=r[a];i===-1?(!(o&t)||o&s)&&(r[a]=uh(o,e)):i<=e&&(n.expiredLanes|=o),l&=~o}}function Ua(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Rp(){var n=dr;return dr<<=1,!(dr&4194240)&&(dr=64),n}function ia(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Fs(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Fn(e),n[e]=t}function ch(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var s=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Fn(t),l=1<<r;e[r]=0,s[r]=-1,n[r]=-1,t&=~l}}function Co(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var s=31-Fn(t),r=1<<s;r&e|n[s]&e&&(n[s]|=e),t&=~r}}var R=0;function zp(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Lp,qo,Ip,Mp,Dp,ba=!1,hr=[],Pe=null,Ce=null,qe=null,Es=new Map,Ps=new Map,Se=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(n,e){switch(n){case"focusin":case"focusout":Pe=null;break;case"dragenter":case"dragleave":Ce=null;break;case"mouseover":case"mouseout":qe=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(e.pointerId)}}function ts(n,e,t,s,r,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:s,nativeEvent:l,targetContainers:[r]},e!==null&&(e=Bs(e),e!==null&&qo(e)),n):(n.eventSystemFlags|=s,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function fh(n,e,t,s,r){switch(e){case"focusin":return Pe=ts(Pe,n,e,t,s,r),!0;case"dragenter":return Ce=ts(Ce,n,e,t,s,r),!0;case"mouseover":return qe=ts(qe,n,e,t,s,r),!0;case"pointerover":var l=r.pointerId;return Es.set(l,ts(Es.get(l)||null,n,e,t,s,r)),!0;case"gotpointercapture":return l=r.pointerId,Ps.set(l,ts(Ps.get(l)||null,n,e,t,s,r)),!0}return!1}function Ap(n){var e=We(n.target);if(e!==null){var t=st(e);if(t!==null){if(e=t.tag,e===13){if(e=Pp(t),e!==null){n.blockedOn=e,Dp(n.priority,function(){Ip(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Va(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var s=new t.constructor(t.type,t);Aa=s,t.target.dispatchEvent(s),Aa=null}else return e=Bs(t),e!==null&&qo(e),n.blockedOn=t,!1;e.shift()}return!0}function fu(n,e,t){qr(n)&&t.delete(e)}function hh(){ba=!1,Pe!==null&&qr(Pe)&&(Pe=null),Ce!==null&&qr(Ce)&&(Ce=null),qe!==null&&qr(qe)&&(qe=null),Es.forEach(fu),Ps.forEach(fu)}function ss(n,e){n.blockedOn===e&&(n.blockedOn=null,ba||(ba=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,hh)))}function Cs(n){function e(r){return ss(r,n)}if(0<hr.length){ss(hr[0],n);for(var t=1;t<hr.length;t++){var s=hr[t];s.blockedOn===n&&(s.blockedOn=null)}}for(Pe!==null&&ss(Pe,n),Ce!==null&&ss(Ce,n),qe!==null&&ss(qe,n),Es.forEach(e),Ps.forEach(e),t=0;t<Se.length;t++)s=Se[t],s.blockedOn===n&&(s.blockedOn=null);for(;0<Se.length&&(t=Se[0],t.blockedOn===null);)Ap(t),t.blockedOn===null&&Se.shift()}var Pt=oe.ReactCurrentBatchConfig,br=!0;function mh(n,e,t,s){var r=R,l=Pt.transition;Pt.transition=null;try{R=1,No(n,e,t,s)}finally{R=r,Pt.transition=l}}function yh(n,e,t,s){var r=R,l=Pt.transition;Pt.transition=null;try{R=4,No(n,e,t,s)}finally{R=r,Pt.transition=l}}function No(n,e,t,s){if(br){var r=Va(n,e,t,s);if(r===null)ma(n,e,s,Vr,t),du(n,s);else if(fh(r,n,e,t,s))s.stopPropagation();else if(du(n,s),e&4&&-1<dh.indexOf(n)){for(;r!==null;){var l=Bs(r);if(l!==null&&Lp(l),l=Va(n,e,t,s),l===null&&ma(n,e,s,Vr,t),l===r)break;r=l}r!==null&&s.stopPropagation()}else ma(n,e,s,null,t)}}var Vr=null;function Va(n,e,t,s){if(Vr=null,n=Eo(s),n=We(n),n!==null)if(e=st(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Pp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Vr=n,null}function Fp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case Po:return 1;case Tp:return 4;case Br:case rh:return 16;case Op:return 536870912;default:return 16}default:return 16}}var _e=null,To=null,Nr=null;function Gp(){if(Nr)return Nr;var n,e=To,t=e.length,s,r="value"in _e?_e.value:_e.textContent,l=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(s=1;s<=a&&e[t-s]===r[l-s];s++);return Nr=r.slice(n,1<s?1-s:void 0)}function Tr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function mr(){return!0}function hu(){return!1}function xn(n){function e(t,s,r,l,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mr:hu,this.isPropagationStopped=hu,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),e}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oo=xn(Mt),Gs=U({},Mt,{view:0,detail:0}),gh=xn(Gs),ua,pa,rs,ul=U({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rs&&(rs&&n.type==="mousemove"?(ua=n.screenX-rs.screenX,pa=n.screenY-rs.screenY):pa=ua=0,rs=n),ua)},movementY:function(n){return"movementY"in n?n.movementY:pa}}),mu=xn(ul),vh=U({},ul,{dataTransfer:0}),jh=xn(vh),wh=U({},Gs,{relatedTarget:0}),ca=xn(wh),kh=U({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),Sh=xn(kh),xh=U({},Mt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_h=xn(xh),Eh=U({},Mt,{data:0}),yu=xn(Eh),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=qh[n])?!!e[n]:!1}function Ro(){return Nh}var Th=U({},Gs,{key:function(n){if(n.key){var e=Ph[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Tr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ch[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(n){return n.type==="keypress"?Tr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Oh=xn(Th),Rh=U({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=xn(Rh),zh=U({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Lh=xn(zh),Ih=U({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mh=xn(Ih),Dh=U({},ul,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=xn(Dh),Fh=[9,13,27,32],zo=se&&"CompositionEvent"in window,ms=null;se&&"documentMode"in document&&(ms=document.documentMode);var Gh=se&&"TextEvent"in window&&!ms,Bp=se&&(!zo||ms&&8<ms&&11>=ms),vu=" ",ju=!1;function Up(n,e){switch(n){case"keyup":return Fh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ft=!1;function Bh(n,e){switch(n){case"compositionend":return bp(e);case"keypress":return e.which!==32?null:(ju=!0,vu);case"textInput":return n=e.data,n===vu&&ju?null:n;default:return null}}function Uh(n,e){if(ft)return n==="compositionend"||!zo&&Up(n,e)?(n=Gp(),Nr=To=_e=null,ft=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bp&&e.locale!=="ko"?null:e.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!bh[n.type]:e==="textarea"}function Vp(n,e,t,s){kp(s),e=$r(e,"onChange"),0<e.length&&(t=new Oo("onChange","change",null,t,s),n.push({event:t,listeners:e}))}var ys=null,qs=null;function Vh(n){ec(n,0)}function pl(n){var e=yt(n);if(hp(e))return n}function $h(n,e){if(n==="change")return e}var $p=!1;se&&(se?(gr="oninput"in document,gr||(da=document.createElement("div"),da.setAttribute("oninput","return;"),gr=typeof da.oninput=="function"),yr=gr):yr=!1,$p=yr&&(!document.documentMode||9<document.documentMode));var yr,gr,da;function ku(){ys&&(ys.detachEvent("onpropertychange",Wp),qs=ys=null)}function Wp(n){if(n.propertyName==="value"&&pl(qs)){var e=[];Vp(e,qs,n,Eo(n)),Ep(Vh,e)}}function Wh(n,e,t){n==="focusin"?(ku(),ys=e,qs=t,ys.attachEvent("onpropertychange",Wp)):n==="focusout"&&ku()}function Hh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pl(qs)}function Qh(n,e){if(n==="click")return pl(e)}function Yh(n,e){if(n==="input"||n==="change")return pl(e)}function Kh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Kh;function Ns(n,e){if(Bn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),s=Object.keys(e);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!Pa.call(e,r)||!Bn(n[r],e[r]))return!1}return!0}function Su(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xu(n,e){var t=Su(n);n=0;for(var s;t;){if(t.nodeType===3){if(s=n+t.textContent.length,n<=e&&s>=e)return{node:t,offset:e-n};n=s}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Su(t)}}function Hp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Hp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Qp(){for(var n=window,e=Ar();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ar(n.document)}return e}function Lo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Xh(n){var e=Qp(),t=n.focusedElem,s=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Hp(t.ownerDocument.documentElement,t)){if(s!==null&&Lo(t)){if(e=s.start,n=s.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,l=Math.min(s.start,r);s=s.end===void 0?l:Math.min(s.end,r),!n.extend&&l>s&&(r=s,s=l,l=r),r=xu(t,l);var a=xu(t,s);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),l>s?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zh=se&&"documentMode"in document&&11>=document.documentMode,ht=null,$a=null,gs=null,Wa=!1;function _u(n,e,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wa||ht==null||ht!==Ar(s)||(s=ht,"selectionStart"in s&&Lo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),gs&&Ns(gs,s)||(gs=s,s=$r($a,"onSelect"),0<s.length&&(e=new Oo("onSelect","select",null,e,t),n.push({event:e,listeners:s}),e.target=ht)))}function vr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var mt={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},fa={},Yp={};se&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function cl(n){if(fa[n])return fa[n];if(!mt[n])return n;var e=mt[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Yp)return fa[n]=e[t];return n}var Kp=cl("animationend"),Xp=cl("animationiteration"),Zp=cl("animationstart"),Jp=cl("transitionend"),nc=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Me(n,e){nc.set(n,e),tt(e,[n])}for(jr=0;jr<Eu.length;jr++)wr=Eu[jr],Pu=wr.toLowerCase(),Cu=wr[0].toUpperCase()+wr.slice(1),Me(Pu,"on"+Cu);var wr,Pu,Cu,jr;Me(Kp,"onAnimationEnd");Me(Xp,"onAnimationIteration");Me(Zp,"onAnimationStart");Me("dblclick","onDoubleClick");Me("focusin","onFocus");Me("focusout","onBlur");Me(Jp,"onTransitionEnd");Nt("onMouseEnter",["mouseout","mouseover"]);Nt("onMouseLeave",["mouseout","mouseover"]);Nt("onPointerEnter",["pointerout","pointerover"]);Nt("onPointerLeave",["pointerout","pointerover"]);tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function qu(n,e,t){var s=n.type||"unknown-event";n.currentTarget=t,Jf(s,e,void 0,n),n.currentTarget=null}function ec(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var s=n[t],r=s.event;s=s.listeners;n:{var l=void 0;if(e)for(var a=s.length-1;0<=a;a--){var o=s[a],i=o.instance,p=o.currentTarget;if(o=o.listener,i!==l&&r.isPropagationStopped())break n;qu(r,o,p),l=i}else for(a=0;a<s.length;a++){if(o=s[a],i=o.instance,p=o.currentTarget,o=o.listener,i!==l&&r.isPropagationStopped())break n;qu(r,o,p),l=i}}}if(Gr)throw n=Ba,Gr=!1,Ba=null,n}function M(n,e){var t=e[Xa];t===void 0&&(t=e[Xa]=new Set);var s=n+"__bubble";t.has(s)||(tc(e,n,2,!1),t.add(s))}function ha(n,e,t){var s=0;e&&(s|=4),tc(t,n,s,e)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Ts(n){if(!n[kr]){n[kr]=!0,up.forEach(function(t){t!=="selectionchange"&&(Jh.has(t)||ha(t,!1,n),ha(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[kr]||(e[kr]=!0,ha("selectionchange",!1,e))}}function tc(n,e,t,s){switch(Fp(e)){case 1:var r=mh;break;case 4:r=yh;break;default:r=No}t=r.bind(null,e,t,n),r=void 0,!Ga||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),s?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ma(n,e,t,s,r){var l=s;if(!(e&1)&&!(e&2)&&s!==null)n:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var o=s.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var i=a.tag;if((i===3||i===4)&&(i=a.stateNode.containerInfo,i===r||i.nodeType===8&&i.parentNode===r))return;a=a.return}for(;o!==null;){if(a=We(o),a===null)return;if(i=a.tag,i===5||i===6){s=l=a;continue n}o=o.parentNode}}s=s.return}Ep(function(){var p=l,f=Eo(t),m=[];n:{var h=nc.get(n);if(h!==void 0){var g=Oo,w=n;switch(n){case"keypress":if(Tr(t)===0)break n;case"keydown":case"keyup":g=Oh;break;case"focusin":w="focus",g=ca;break;case"focusout":w="blur",g=ca;break;case"beforeblur":case"afterblur":g=ca;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Lh;break;case Kp:case Xp:case Zp:g=Sh;break;case Jp:g=Mh;break;case"scroll":g=gh;break;case"wheel":g=Ah;break;case"copy":case"cut":case"paste":g=_h;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gu}var k=(e&4)!==0,q=!k&&n==="scroll",c=k?h!==null?h+"Capture":null:h;k=[];for(var u=p,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,c!==null&&(y=_s(u,c),y!=null&&k.push(Os(u,y,d)))),q)break;u=u.return}0<k.length&&(h=new g(h,w,null,t,f),m.push({event:h,listeners:k}))}}if(!(e&7)){n:{if(h=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",h&&t!==Aa&&(w=t.relatedTarget||t.fromElement)&&(We(w)||w[re]))break n;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=t.relatedTarget||t.toElement,g=p,w=w?We(w):null,w!==null&&(q=st(w),w!==q||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=p),g!==w)){if(k=mu,y="onMouseLeave",c="onMouseEnter",u="mouse",(n==="pointerout"||n==="pointerover")&&(k=gu,y="onPointerLeave",c="onPointerEnter",u="pointer"),q=g==null?h:yt(g),d=w==null?h:yt(w),h=new k(y,u+"leave",g,t,f),h.target=q,h.relatedTarget=d,y=null,We(f)===p&&(k=new k(c,u+"enter",w,t,f),k.target=d,k.relatedTarget=q,y=k),q=y,g&&w)e:{for(k=g,c=w,u=0,d=k;d;d=pt(d))u++;for(d=0,y=c;y;y=pt(y))d++;for(;0<u-d;)k=pt(k),u--;for(;0<d-u;)c=pt(c),d--;for(;u--;){if(k===c||c!==null&&k===c.alternate)break e;k=pt(k),c=pt(c)}k=null}else k=null;g!==null&&Nu(m,h,g,k,!1),w!==null&&q!==null&&Nu(m,q,w,k,!0)}}n:{if(h=p?yt(p):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=$h;else if(wu(h))if($p)S=Yh;else{S=Hh;var x=Wh}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Qh);if(S&&(S=S(n,p))){Vp(m,S,t,f);break n}x&&x(n,h,p),n==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&za(h,"number",h.value)}switch(x=p?yt(p):window,n){case"focusin":(wu(x)||x.contentEditable==="true")&&(ht=x,$a=p,gs=null);break;case"focusout":gs=$a=ht=null;break;case"mousedown":Wa=!0;break;case"contextmenu":case"mouseup":case"dragend":Wa=!1,_u(m,t,f);break;case"selectionchange":if(Zh)break;case"keydown":case"keyup":_u(m,t,f)}var j;if(zo)n:{switch(n){case"compositionstart":var E="onCompositionStart";break n;case"compositionend":E="onCompositionEnd";break n;case"compositionupdate":E="onCompositionUpdate";break n}E=void 0}else ft?Up(n,t)&&(E="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Bp&&t.locale!=="ko"&&(ft||E!=="onCompositionStart"?E==="onCompositionEnd"&&ft&&(j=Gp()):(_e=f,To="value"in _e?_e.value:_e.textContent,ft=!0)),x=$r(p,E),0<x.length&&(E=new yu(E,n,null,t,f),m.push({event:E,listeners:x}),j?E.data=j:(j=bp(t),j!==null&&(E.data=j)))),(j=Gh?Bh(n,t):Uh(n,t))&&(p=$r(p,"onBeforeInput"),0<p.length&&(f=new yu("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:p}),f.data=j))}ec(m,e)})}function Os(n,e,t){return{instance:n,listener:e,currentTarget:t}}function $r(n,e){for(var t=e+"Capture",s=[];n!==null;){var r=n,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=_s(n,t),l!=null&&s.unshift(Os(n,l,r)),l=_s(n,e),l!=null&&s.push(Os(n,l,r))),n=n.return}return s}function pt(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nu(n,e,t,s,r){for(var l=e._reactName,a=[];t!==null&&t!==s;){var o=t,i=o.alternate,p=o.stateNode;if(i!==null&&i===s)break;o.tag===5&&p!==null&&(o=p,r?(i=_s(t,l),i!=null&&a.unshift(Os(t,i,o))):r||(i=_s(t,l),i!=null&&a.push(Os(t,i,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var nm=/\r\n?/g,em=/\u0000|\uFFFD/g;function Tu(n){return(typeof n=="string"?n:""+n).replace(nm,`
`).replace(em,"")}function Sr(n,e,t){if(e=Tu(e),Tu(n)!==e&&t)throw Error(v(425))}function Wr(){}var Ha=null,Qa=null;function Ya(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,tm=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(n){return Ou.resolve(null).then(n).catch(rm)}:Ka;function rm(n){setTimeout(function(){throw n})}function ya(n,e){var t=e,s=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){n.removeChild(r),Cs(e);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);Cs(e)}function Ne(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ru(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Dt=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Dt,Rs="__reactProps$"+Dt,re="__reactContainer$"+Dt,Xa="__reactEvents$"+Dt,lm="__reactListeners$"+Dt,am="__reactHandles$"+Dt;function We(n){var e=n[Hn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[re]||t[Hn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ru(n);n!==null;){if(t=n[Hn])return t;n=Ru(n)}return e}n=t,t=n.parentNode}return null}function Bs(n){return n=n[Hn]||n[re],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function yt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(v(33))}function dl(n){return n[Rs]||null}var Za=[],gt=-1;function De(n){return{current:n}}function D(n){0>gt||(n.current=Za[gt],Za[gt]=null,gt--)}function I(n,e){gt++,Za[gt]=n.current,n.current=e}var Ie={},an=De(Ie),yn=De(!1),Xe=Ie;function Tt(n,e){var t=n.type.contextTypes;if(!t)return Ie;var s=n.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===e)return s.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in t)r[l]=e[l];return s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function gn(n){return n=n.childContextTypes,n!=null}function Hr(){D(yn),D(an)}function zu(n,e,t){if(an.current!==Ie)throw Error(v(168));I(an,e),I(yn,t)}function sc(n,e,t){var s=n.stateNode;if(e=e.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in e))throw Error(v(108,Wf(n)||"Unknown",r));return U({},t,s)}function Qr(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ie,Xe=an.current,I(an,n),I(yn,yn.current),!0}function Lu(n,e,t){var s=n.stateNode;if(!s)throw Error(v(169));t?(n=sc(n,e,Xe),s.__reactInternalMemoizedMergedChildContext=n,D(yn),D(an),I(an,n)):D(yn),I(yn,t)}var Jn=null,fl=!1,ga=!1;function rc(n){Jn===null?Jn=[n]:Jn.push(n)}function om(n){fl=!0,rc(n)}function Ae(){if(!ga&&Jn!==null){ga=!0;var n=0,e=R;try{var t=Jn;for(R=1;n<t.length;n++){var s=t[n];do s=s(!0);while(s!==null)}Jn=null,fl=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(n+1)),Np(Po,Ae),r}finally{R=e,ga=!1}}return null}var vt=[],jt=0,Yr=null,Kr=0,Pn=[],Cn=0,Ze=null,ne=1,ee="";function Ve(n,e){vt[jt++]=Kr,vt[jt++]=Yr,Yr=n,Kr=e}function lc(n,e,t){Pn[Cn++]=ne,Pn[Cn++]=ee,Pn[Cn++]=Ze,Ze=n;var s=ne;n=ee;var r=32-Fn(s)-1;s&=~(1<<r),t+=1;var l=32-Fn(e)+r;if(30<l){var a=r-r%5;l=(s&(1<<a)-1).toString(32),s>>=a,r-=a,ne=1<<32-Fn(e)+r|t<<r|s,ee=l+n}else ne=1<<l|t<<r|s,ee=n}function Io(n){n.return!==null&&(Ve(n,1),lc(n,1,0))}function Mo(n){for(;n===Yr;)Yr=vt[--jt],vt[jt]=null,Kr=vt[--jt],vt[jt]=null;for(;n===Ze;)Ze=Pn[--Cn],Pn[Cn]=null,ee=Pn[--Cn],Pn[Cn]=null,ne=Pn[--Cn],Pn[Cn]=null}var kn=null,wn=null,F=!1,An=null;function ac(n,e){var t=qn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Iu(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,kn=n,wn=Ne(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,kn=n,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ze!==null?{id:ne,overflow:ee}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=qn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,kn=n,wn=null,!0):!1;default:return!1}}function Ja(n){return(n.mode&1)!==0&&(n.flags&128)===0}function no(n){if(F){var e=wn;if(e){var t=e;if(!Iu(n,e)){if(Ja(n))throw Error(v(418));e=Ne(t.nextSibling);var s=kn;e&&Iu(n,e)?ac(s,t):(n.flags=n.flags&-4097|2,F=!1,kn=n)}}else{if(Ja(n))throw Error(v(418));n.flags=n.flags&-4097|2,F=!1,kn=n}}}function Mu(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function xr(n){if(n!==kn)return!1;if(!F)return Mu(n),F=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ya(n.type,n.memoizedProps)),e&&(e=wn)){if(Ja(n))throw oc(),Error(v(418));for(;e;)ac(n,e),e=Ne(e.nextSibling)}if(Mu(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){wn=Ne(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}wn=null}}else wn=kn?Ne(n.stateNode.nextSibling):null;return!0}function oc(){for(var n=wn;n;)n=Ne(n.nextSibling)}function Ot(){wn=kn=null,F=!1}function Do(n){An===null?An=[n]:An.push(n)}var im=oe.ReactCurrentBatchConfig;function Mn(n,e){if(n&&n.defaultProps){e=U({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Xr=De(null),Zr=null,wt=null,Ao=null;function Fo(){Ao=wt=Zr=null}function Go(n){var e=Xr.current;D(Xr),n._currentValue=e}function eo(n,e,t){for(;n!==null;){var s=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),n===t)break;n=n.return}}function Ct(n,e){Zr=n,Ao=wt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Tn(n){var e=n._currentValue;if(Ao!==n)if(n={context:n,memoizedValue:e,next:null},wt===null){if(Zr===null)throw Error(v(308));wt=n,Zr.dependencies={lanes:0,firstContext:n}}else wt=wt.next=n;return e}var He=null;function Bo(n){He===null?He=[n]:He.push(n)}function ic(n,e,t,s){var r=e.interleaved;return r===null?(t.next=t,Bo(e)):(t.next=r.next,r.next=t),e.interleaved=t,le(n,s)}function le(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ke=!1;function Uo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function te(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Te(n,e,t){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,T&2){var r=s.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),s.pending=e,le(n,t)}return r=s.interleaved,r===null?(e.next=e,Bo(s)):(e.next=r.next,r.next=e),s.interleaved=e,le(n,t)}function Or(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var s=e.lanes;s&=n.pendingLanes,t|=s,e.lanes=t,Co(n,t)}}function Du(n,e){var t=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?r=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?r=l=e:l=l.next=e}else r=l=e;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:s.shared,effects:s.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Jr(n,e,t,s){var r=n.updateQueue;ke=!1;var l=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var i=o,p=i.next;i.next=null,a===null?l=p:a.next=p,a=i;var f=n.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=p:o.next=p,f.lastBaseUpdate=i))}if(l!==null){var m=r.baseState;a=0,f=p=i=null,o=l;do{var h=o.lane,g=o.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var w=n,k=o;switch(h=e,g=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(g,m,h);break n}m=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(g,m,h):w,h==null)break n;m=U({},m,h);break n;case 2:ke=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(p=f=g,i=m):f=f.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(i=m),r.baseState=i,r.firstBaseUpdate=p,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else l===null&&(r.shared.lanes=0);nt|=a,n.lanes=a,n.memoizedState=m}}function Au(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var s=n[e],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(v(191,r));r.call(s)}}}var pc=new ip.Component().refs;function to(n,e,t,s){e=n.memoizedState,t=t(s,e),t=t==null?e:U({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hl={isMounted:function(n){return(n=n._reactInternals)?st(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var s=cn(),r=Re(n),l=te(s,r);l.payload=e,t!=null&&(l.callback=t),e=Te(n,l,r),e!==null&&(Gn(e,n,r,s),Or(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var s=cn(),r=Re(n),l=te(s,r);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=Te(n,l,r),e!==null&&(Gn(e,n,r,s),Or(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),s=Re(n),r=te(t,s);r.tag=2,e!=null&&(r.callback=e),e=Te(n,r,s),e!==null&&(Gn(e,n,s,t),Or(e,n,s))}};function Fu(n,e,t,s,r,l,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,l,a):e.prototype&&e.prototype.isPureReactComponent?!Ns(t,s)||!Ns(r,l):!0}function cc(n,e,t){var s=!1,r=Ie,l=e.contextType;return typeof l=="object"&&l!==null?l=Tn(l):(r=gn(e)?Xe:an.current,s=e.contextTypes,l=(s=s!=null)?Tt(n,r):Ie),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,n.stateNode=e,e._reactInternals=n,s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=l),e}function Gu(n,e,t,s){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,s),e.state!==n&&hl.enqueueReplaceState(e,e.state,null)}function so(n,e,t,s){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=pc,Uo(n);var l=e.contextType;typeof l=="object"&&l!==null?r.context=Tn(l):(l=gn(e)?Xe:an.current,r.context=Tt(n,l)),r.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(to(n,e,l,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hl.enqueueReplaceState(r,r.state,null),Jr(n,t,r,s),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ls(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var s=t.stateNode}if(!s)throw Error(v(147,n));var r=s,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(a){var o=r.refs;o===pc&&(o=r.refs={}),a===null?delete o[l]:o[l]=a},e._stringRef=l,e)}if(typeof n!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,n))}return n}function _r(n,e){throw n=Object.prototype.toString.call(e),Error(v(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Bu(n){var e=n._init;return e(n._payload)}function dc(n){function e(c,u){if(n){var d=c.deletions;d===null?(c.deletions=[u],c.flags|=16):d.push(u)}}function t(c,u){if(!n)return null;for(;u!==null;)e(c,u),u=u.sibling;return null}function s(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function r(c,u){return c=ze(c,u),c.index=0,c.sibling=null,c}function l(c,u,d){return c.index=d,n?(d=c.alternate,d!==null?(d=d.index,d<u?(c.flags|=2,u):d):(c.flags|=2,u)):(c.flags|=1048576,u)}function a(c){return n&&c.alternate===null&&(c.flags|=2),c}function o(c,u,d,y){return u===null||u.tag!==6?(u=_a(d,c.mode,y),u.return=c,u):(u=r(u,d),u.return=c,u)}function i(c,u,d,y){var S=d.type;return S===dt?f(c,u,d.props.children,y,d.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===we&&Bu(S)===u.type)?(y=r(u,d.props),y.ref=ls(c,u,d),y.return=c,y):(y=Dr(d.type,d.key,d.props,null,c.mode,y),y.ref=ls(c,u,d),y.return=c,y)}function p(c,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Ea(d,c.mode,y),u.return=c,u):(u=r(u,d.children||[]),u.return=c,u)}function f(c,u,d,y,S){return u===null||u.tag!==7?(u=Ke(d,c.mode,y,S),u.return=c,u):(u=r(u,d),u.return=c,u)}function m(c,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=_a(""+u,c.mode,d),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ur:return d=Dr(u.type,u.key,u.props,null,c.mode,d),d.ref=ls(c,null,u),d.return=c,d;case ct:return u=Ea(u,c.mode,d),u.return=c,u;case we:var y=u._init;return m(c,y(u._payload),d)}if(ps(u)||es(u))return u=Ke(u,c.mode,d,null),u.return=c,u;_r(c,u)}return null}function h(c,u,d,y){var S=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:o(c,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ur:return d.key===S?i(c,u,d,y):null;case ct:return d.key===S?p(c,u,d,y):null;case we:return S=d._init,h(c,u,S(d._payload),y)}if(ps(d)||es(d))return S!==null?null:f(c,u,d,y,null);_r(c,d)}return null}function g(c,u,d,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(d)||null,o(u,c,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ur:return c=c.get(y.key===null?d:y.key)||null,i(u,c,y,S);case ct:return c=c.get(y.key===null?d:y.key)||null,p(u,c,y,S);case we:var x=y._init;return g(c,u,d,x(y._payload),S)}if(ps(y)||es(y))return c=c.get(d)||null,f(u,c,y,S,null);_r(u,y)}return null}function w(c,u,d,y){for(var S=null,x=null,j=u,E=u=0,A=null;j!==null&&E<d.length;E++){j.index>E?(A=j,j=null):A=j.sibling;var N=h(c,j,d[E],y);if(N===null){j===null&&(j=A);break}n&&j&&N.alternate===null&&e(c,j),u=l(N,u,E),x===null?S=N:x.sibling=N,x=N,j=A}if(E===d.length)return t(c,j),F&&Ve(c,E),S;if(j===null){for(;E<d.length;E++)j=m(c,d[E],y),j!==null&&(u=l(j,u,E),x===null?S=j:x.sibling=j,x=j);return F&&Ve(c,E),S}for(j=s(c,j);E<d.length;E++)A=g(j,c,E,d[E],y),A!==null&&(n&&A.alternate!==null&&j.delete(A.key===null?E:A.key),u=l(A,u,E),x===null?S=A:x.sibling=A,x=A);return n&&j.forEach(function(bn){return e(c,bn)}),F&&Ve(c,E),S}function k(c,u,d,y){var S=es(d);if(typeof S!="function")throw Error(v(150));if(d=S.call(d),d==null)throw Error(v(151));for(var x=S=null,j=u,E=u=0,A=null,N=d.next();j!==null&&!N.done;E++,N=d.next()){j.index>E?(A=j,j=null):A=j.sibling;var bn=h(c,j,N.value,y);if(bn===null){j===null&&(j=A);break}n&&j&&bn.alternate===null&&e(c,j),u=l(bn,u,E),x===null?S=bn:x.sibling=bn,x=bn,j=A}if(N.done)return t(c,j),F&&Ve(c,E),S;if(j===null){for(;!N.done;E++,N=d.next())N=m(c,N.value,y),N!==null&&(u=l(N,u,E),x===null?S=N:x.sibling=N,x=N);return F&&Ve(c,E),S}for(j=s(c,j);!N.done;E++,N=d.next())N=g(j,c,E,N.value,y),N!==null&&(n&&N.alternate!==null&&j.delete(N.key===null?E:N.key),u=l(N,u,E),x===null?S=N:x.sibling=N,x=N);return n&&j.forEach(function(Gl){return e(c,Gl)}),F&&Ve(c,E),S}function q(c,u,d,y){if(typeof d=="object"&&d!==null&&d.type===dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ur:n:{for(var S=d.key,x=u;x!==null;){if(x.key===S){if(S=d.type,S===dt){if(x.tag===7){t(c,x.sibling),u=r(x,d.props.children),u.return=c,c=u;break n}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===we&&Bu(S)===x.type){t(c,x.sibling),u=r(x,d.props),u.ref=ls(c,x,d),u.return=c,c=u;break n}t(c,x);break}else e(c,x);x=x.sibling}d.type===dt?(u=Ke(d.props.children,c.mode,y,d.key),u.return=c,c=u):(y=Dr(d.type,d.key,d.props,null,c.mode,y),y.ref=ls(c,u,d),y.return=c,c=y)}return a(c);case ct:n:{for(x=d.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){t(c,u.sibling),u=r(u,d.children||[]),u.return=c,c=u;break n}else{t(c,u);break}else e(c,u);u=u.sibling}u=Ea(d,c.mode,y),u.return=c,c=u}return a(c);case we:return x=d._init,q(c,u,x(d._payload),y)}if(ps(d))return w(c,u,d,y);if(es(d))return k(c,u,d,y);_r(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(t(c,u.sibling),u=r(u,d),u.return=c,c=u):(t(c,u),u=_a(d,c.mode,y),u.return=c,c=u),a(c)):t(c,u)}return q}var Rt=dc(!0),fc=dc(!1),Us={},Yn=De(Us),zs=De(Us),Ls=De(Us);function Qe(n){if(n===Us)throw Error(v(174));return n}function bo(n,e){switch(I(Ls,e),I(zs,n),I(Yn,Us),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ia(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ia(e,n)}D(Yn),I(Yn,e)}function zt(){D(Yn),D(zs),D(Ls)}function hc(n){Qe(Ls.current);var e=Qe(Yn.current),t=Ia(e,n.type);e!==t&&(I(zs,n),I(Yn,t))}function Vo(n){zs.current===n&&(D(Yn),D(zs))}var G=De(0);function nl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=[];function $o(){for(var n=0;n<va.length;n++)va[n]._workInProgressVersionPrimary=null;va.length=0}var Rr=oe.ReactCurrentDispatcher,ja=oe.ReactCurrentBatchConfig,Je=0,B=null,Y=null,X=null,el=!1,vs=!1,Is=0,um=0;function sn(){throw Error(v(321))}function Wo(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Bn(n[t],e[t]))return!1;return!0}function Ho(n,e,t,s,r,l){if(Je=l,B=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rr.current=n===null||n.memoizedState===null?fm:hm,n=t(s,r),vs){l=0;do{if(vs=!1,Is=0,25<=l)throw Error(v(301));l+=1,X=Y=null,e.updateQueue=null,Rr.current=mm,n=t(s,r)}while(vs)}if(Rr.current=tl,e=Y!==null&&Y.next!==null,Je=0,X=Y=B=null,el=!1,e)throw Error(v(300));return n}function Qo(){var n=Is!==0;return Is=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?B.memoizedState=X=n:X=X.next=n,X}function On(){if(Y===null){var n=B.alternate;n=n!==null?n.memoizedState:null}else n=Y.next;var e=X===null?B.memoizedState:X.next;if(e!==null)X=e,Y=n;else{if(n===null)throw Error(v(310));Y=n,n={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},X===null?B.memoizedState=X=n:X=X.next=n}return X}function Ms(n,e){return typeof e=="function"?e(n):e}function wa(n){var e=On(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var s=Y,r=s.baseQueue,l=t.pending;if(l!==null){if(r!==null){var a=r.next;r.next=l.next,l.next=a}s.baseQueue=r=l,t.pending=null}if(r!==null){l=r.next,s=s.baseState;var o=a=null,i=null,p=l;do{var f=p.lane;if((Je&f)===f)i!==null&&(i=i.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),s=p.hasEagerState?p.eagerState:n(s,p.action);else{var m={lane:f,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};i===null?(o=i=m,a=s):i=i.next=m,B.lanes|=f,nt|=f}p=p.next}while(p!==null&&p!==l);i===null?a=s:i.next=o,Bn(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseState=a,e.baseQueue=i,t.lastRenderedState=s}if(n=t.interleaved,n!==null){r=n;do l=r.lane,B.lanes|=l,nt|=l,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ka(n){var e=On(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var s=t.dispatch,r=t.pending,l=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do l=n(l,a.action),a=a.next;while(a!==r);Bn(l,e.memoizedState)||(mn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,s]}function mc(){}function yc(n,e){var t=B,s=On(),r=e(),l=!Bn(s.memoizedState,r);if(l&&(s.memoizedState=r,mn=!0),s=s.queue,Yo(jc.bind(null,t,s,n),[n]),s.getSnapshot!==e||l||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,Ds(9,vc.bind(null,t,s,r,e),void 0,null),Z===null)throw Error(v(349));Je&30||gc(t,e,r)}return r}function gc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function vc(n,e,t,s){e.value=t,e.getSnapshot=s,wc(e)&&kc(n)}function jc(n,e,t){return t(function(){wc(e)&&kc(n)})}function wc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Bn(n,t)}catch{return!0}}function kc(n){var e=le(n,1);e!==null&&Gn(e,n,1,-1)}function Uu(n){var e=Wn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:n},e.queue=n,n=n.dispatch=dm.bind(null,B,n),[e.memoizedState,n]}function Ds(n,e,t,s){return n={tag:n,create:e,destroy:t,deps:s,next:null},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(s=t.next,t.next=n,n.next=s,e.lastEffect=n)),n}function Sc(){return On().memoizedState}function zr(n,e,t,s){var r=Wn();B.flags|=n,r.memoizedState=Ds(1|e,t,void 0,s===void 0?null:s)}function ml(n,e,t,s){var r=On();s=s===void 0?null:s;var l=void 0;if(Y!==null){var a=Y.memoizedState;if(l=a.destroy,s!==null&&Wo(s,a.deps)){r.memoizedState=Ds(e,t,l,s);return}}B.flags|=n,r.memoizedState=Ds(1|e,t,l,s)}function bu(n,e){return zr(8390656,8,n,e)}function Yo(n,e){return ml(2048,8,n,e)}function xc(n,e){return ml(4,2,n,e)}function _c(n,e){return ml(4,4,n,e)}function Ec(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Pc(n,e,t){return t=t!=null?t.concat([n]):null,ml(4,4,Ec.bind(null,e,n),t)}function Ko(){}function Cc(n,e){var t=On();e=e===void 0?null:e;var s=t.memoizedState;return s!==null&&e!==null&&Wo(e,s[1])?s[0]:(t.memoizedState=[n,e],n)}function qc(n,e){var t=On();e=e===void 0?null:e;var s=t.memoizedState;return s!==null&&e!==null&&Wo(e,s[1])?s[0]:(n=n(),t.memoizedState=[n,e],n)}function Nc(n,e,t){return Je&21?(Bn(t,e)||(t=Rp(),B.lanes|=t,nt|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function pm(n,e){var t=R;R=t!==0&&4>t?t:4,n(!0);var s=ja.transition;ja.transition={};try{n(!1),e()}finally{R=t,ja.transition=s}}function Tc(){return On().memoizedState}function cm(n,e,t){var s=Re(n);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Oc(n))Rc(e,t);else if(t=ic(n,e,t,s),t!==null){var r=cn();Gn(t,n,s,r),zc(t,e,s)}}function dm(n,e,t){var s=Re(n),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Oc(n))Rc(e,r);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var a=e.lastRenderedState,o=l(a,t);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,a)){var i=e.interleaved;i===null?(r.next=r,Bo(e)):(r.next=i.next,i.next=r),e.interleaved=r;return}}catch{}finally{}t=ic(n,e,r,s),t!==null&&(r=cn(),Gn(t,n,s,r),zc(t,e,s))}}function Oc(n){var e=n.alternate;return n===B||e!==null&&e===B}function Rc(n,e){vs=el=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function zc(n,e,t){if(t&4194240){var s=e.lanes;s&=n.pendingLanes,t|=s,e.lanes=t,Co(n,t)}}var tl={readContext:Tn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},fm={readContext:Tn,useCallback:function(n,e){return Wn().memoizedState=[n,e===void 0?null:e],n},useContext:Tn,useEffect:bu,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,zr(4194308,4,Ec.bind(null,e,n),t)},useLayoutEffect:function(n,e){return zr(4194308,4,n,e)},useInsertionEffect:function(n,e){return zr(4,2,n,e)},useMemo:function(n,e){var t=Wn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var s=Wn();return e=t!==void 0?t(e):e,s.memoizedState=s.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},s.queue=n,n=n.dispatch=cm.bind(null,B,n),[s.memoizedState,n]},useRef:function(n){var e=Wn();return n={current:n},e.memoizedState=n},useState:Uu,useDebugValue:Ko,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=Uu(!1),e=n[0];return n=pm.bind(null,n[1]),Wn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var s=B,r=Wn();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=e(),Z===null)throw Error(v(349));Je&30||gc(s,e,t)}r.memoizedState=t;var l={value:t,getSnapshot:e};return r.queue=l,bu(jc.bind(null,s,l,n),[n]),s.flags|=2048,Ds(9,vc.bind(null,s,l,t,e),void 0,null),t},useId:function(){var n=Wn(),e=Z.identifierPrefix;if(F){var t=ee,s=ne;t=(s&~(1<<32-Fn(s)-1)).toString(32)+t,e=":"+e+"R"+t,t=Is++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=um++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},hm={readContext:Tn,useCallback:Cc,useContext:Tn,useEffect:Yo,useImperativeHandle:Pc,useInsertionEffect:xc,useLayoutEffect:_c,useMemo:qc,useReducer:wa,useRef:Sc,useState:function(){return wa(Ms)},useDebugValue:Ko,useDeferredValue:function(n){var e=On();return Nc(e,Y.memoizedState,n)},useTransition:function(){var n=wa(Ms)[0],e=On().memoizedState;return[n,e]},useMutableSource:mc,useSyncExternalStore:yc,useId:Tc,unstable_isNewReconciler:!1},mm={readContext:Tn,useCallback:Cc,useContext:Tn,useEffect:Yo,useImperativeHandle:Pc,useInsertionEffect:xc,useLayoutEffect:_c,useMemo:qc,useReducer:ka,useRef:Sc,useState:function(){return ka(Ms)},useDebugValue:Ko,useDeferredValue:function(n){var e=On();return Y===null?e.memoizedState=n:Nc(e,Y.memoizedState,n)},useTransition:function(){var n=ka(Ms)[0],e=On().memoizedState;return[n,e]},useMutableSource:mc,useSyncExternalStore:yc,useId:Tc,unstable_isNewReconciler:!1};function Lt(n,e){try{var t="",s=e;do t+=$f(s),s=s.return;while(s);var r=t}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:r,digest:null}}function Sa(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ro(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ym=typeof WeakMap=="function"?WeakMap:Map;function Lc(n,e,t){t=te(-1,t),t.tag=3,t.payload={element:null};var s=e.value;return t.callback=function(){rl||(rl=!0,mo=s),ro(n,e)},t}function Ic(n,e,t){t=te(-1,t),t.tag=3;var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=e.value;t.payload=function(){return s(r)},t.callback=function(){ro(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ro(n,e),typeof s!="function"&&(Oe===null?Oe=new Set([this]):Oe.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Vu(n,e,t){var s=n.pingCache;if(s===null){s=n.pingCache=new ym;var r=new Set;s.set(e,r)}else r=s.get(e),r===void 0&&(r=new Set,s.set(e,r));r.has(t)||(r.add(t),n=Tm.bind(null,n,e,t),e.then(n,n))}function $u(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wu(n,e,t,s,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=te(-1,1),e.tag=2,Te(t,e,1))),t.lanes|=1),n)}var gm=oe.ReactCurrentOwner,mn=!1;function pn(n,e,t,s){e.child=n===null?fc(e,null,t,s):Rt(e,n.child,t,s)}function Hu(n,e,t,s,r){t=t.render;var l=e.ref;return Ct(e,r),s=Ho(n,e,t,s,l,r),t=Qo(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ae(n,e,r)):(F&&t&&Io(e),e.flags|=1,pn(n,e,s,r),e.child)}function Qu(n,e,t,s,r){if(n===null){var l=t.type;return typeof l=="function"&&!ri(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,Mc(n,e,l,s,r)):(n=Dr(t.type,null,s,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&r)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:Ns,t(a,s)&&n.ref===e.ref)return ae(n,e,r)}return e.flags|=1,n=ze(l,s),n.ref=e.ref,n.return=e,e.child=n}function Mc(n,e,t,s,r){if(n!==null){var l=n.memoizedProps;if(Ns(l,s)&&n.ref===e.ref)if(mn=!1,e.pendingProps=s=l,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,ae(n,e,r)}return lo(n,e,t,s,r)}function Dc(n,e,t){var s=e.pendingProps,r=s.children,l=n!==null?n.memoizedState:null;if(s.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(St,jn),jn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,I(St,jn),jn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=l!==null?l.baseLanes:t,I(St,jn),jn|=s}else l!==null?(s=l.baseLanes|t,e.memoizedState=null):s=t,I(St,jn),jn|=s;return pn(n,e,r,t),e.child}function Ac(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function lo(n,e,t,s,r){var l=gn(t)?Xe:an.current;return l=Tt(e,l),Ct(e,r),t=Ho(n,e,t,s,l,r),s=Qo(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ae(n,e,r)):(F&&s&&Io(e),e.flags|=1,pn(n,e,t,r),e.child)}function Yu(n,e,t,s,r){if(gn(t)){var l=!0;Qr(e)}else l=!1;if(Ct(e,r),e.stateNode===null)Lr(n,e),cc(e,t,s),so(e,t,s,r),s=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var i=a.context,p=t.contextType;typeof p=="object"&&p!==null?p=Tn(p):(p=gn(t)?Xe:an.current,p=Tt(e,p));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==s||i!==p)&&Gu(e,a,s,p),ke=!1;var h=e.memoizedState;a.state=h,Jr(e,s,a,r),i=e.memoizedState,o!==s||h!==i||yn.current||ke?(typeof f=="function"&&(to(e,t,f,s),i=e.memoizedState),(o=ke||Fu(e,t,o,s,h,i,p))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=i),a.props=s,a.state=i,a.context=p,s=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{a=e.stateNode,uc(n,e),o=e.memoizedProps,p=e.type===e.elementType?o:Mn(e.type,o),a.props=p,m=e.pendingProps,h=a.context,i=t.contextType,typeof i=="object"&&i!==null?i=Tn(i):(i=gn(t)?Xe:an.current,i=Tt(e,i));var g=t.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||h!==i)&&Gu(e,a,s,i),ke=!1,h=e.memoizedState,a.state=h,Jr(e,s,a,r);var w=e.memoizedState;o!==m||h!==w||yn.current||ke?(typeof g=="function"&&(to(e,t,g,s),w=e.memoizedState),(p=ke||Fu(e,t,p,s,h,w,i)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,w,i),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,w,i)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=w),a.props=s,a.state=w,a.context=i,s=p):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),s=!1)}return ao(n,e,t,s,l,r)}function ao(n,e,t,s,r,l){Ac(n,e);var a=(e.flags&128)!==0;if(!s&&!a)return r&&Lu(e,t,!1),ae(n,e,l);s=e.stateNode,gm.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return e.flags|=1,n!==null&&a?(e.child=Rt(e,n.child,null,l),e.child=Rt(e,null,o,l)):pn(n,e,o,l),e.memoizedState=s.state,r&&Lu(e,t,!0),e.child}function Fc(n){var e=n.stateNode;e.pendingContext?zu(n,e.pendingContext,e.pendingContext!==e.context):e.context&&zu(n,e.context,!1),bo(n,e.containerInfo)}function Ku(n,e,t,s,r){return Ot(),Do(r),e.flags|=256,pn(n,e,t,s),e.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function io(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gc(n,e,t){var s=e.pendingProps,r=G.current,l=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),I(G,r&1),n===null)return no(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=s.children,n=s.fallback,l?(s=e.mode,l=e.child,a={mode:"hidden",children:a},!(s&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=vl(a,s,0,null),n=Ke(n,s,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=io(t),e.memoizedState=oo,n):Xo(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return vm(n,e,a,s,o,r,t);if(l){l=s.fallback,a=e.mode,r=n.child,o=r.sibling;var i={mode:"hidden",children:s.children};return!(a&1)&&e.child!==r?(s=e.child,s.childLanes=0,s.pendingProps=i,e.deletions=null):(s=ze(r,i),s.subtreeFlags=r.subtreeFlags&14680064),o!==null?l=ze(o,l):(l=Ke(l,a,t,null),l.flags|=2),l.return=e,s.return=e,s.sibling=l,e.child=s,s=l,l=e.child,a=n.child.memoizedState,a=a===null?io(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=n.childLanes&~t,e.memoizedState=oo,s}return l=n.child,n=l.sibling,s=ze(l,{mode:"visible",children:s.children}),!(e.mode&1)&&(s.lanes=t),s.return=e,s.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=s,e.memoizedState=null,s}function Xo(n,e){return e=vl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Er(n,e,t,s){return s!==null&&Do(s),Rt(e,n.child,null,t),n=Xo(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function vm(n,e,t,s,r,l,a){if(t)return e.flags&256?(e.flags&=-257,s=Sa(Error(v(422))),Er(n,e,a,s)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=s.fallback,r=e.mode,s=vl({mode:"visible",children:s.children},r,0,null),l=Ke(l,r,a,null),l.flags|=2,s.return=e,l.return=e,s.sibling=l,e.child=s,e.mode&1&&Rt(e,n.child,null,a),e.child.memoizedState=io(a),e.memoizedState=oo,l);if(!(e.mode&1))return Er(n,e,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var o=s.dgst;return s=o,l=Error(v(419)),s=Sa(l,s,void 0),Er(n,e,a,s)}if(o=(a&n.childLanes)!==0,mn||o){if(s=Z,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,le(n,r),Gn(s,n,r,-1))}return si(),s=Sa(Error(v(421))),Er(n,e,a,s)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Om.bind(null,n),r._reactRetry=e,null):(n=l.treeContext,wn=Ne(r.nextSibling),kn=e,F=!0,An=null,n!==null&&(Pn[Cn++]=ne,Pn[Cn++]=ee,Pn[Cn++]=Ze,ne=n.id,ee=n.overflow,Ze=e),e=Xo(e,s.children),e.flags|=4096,e)}function Xu(n,e,t){n.lanes|=e;var s=n.alternate;s!==null&&(s.lanes|=e),eo(n.return,e,t)}function xa(n,e,t,s,r){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=t,l.tailMode=r)}function Bc(n,e,t){var s=e.pendingProps,r=s.revealOrder,l=s.tail;if(pn(n,e,s.children,t),s=G.current,s&2)s=s&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xu(n,t,e);else if(n.tag===19)Xu(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}if(I(G,s),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),xa(e,!1,r,t,l);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}xa(e,!0,t,null,l);break;case"together":xa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ae(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),nt|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(v(153));if(e.child!==null){for(n=e.child,t=ze(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ze(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function jm(n,e,t){switch(e.tag){case 3:Fc(e),Ot();break;case 5:hc(e);break;case 1:gn(e.type)&&Qr(e);break;case 4:bo(e,e.stateNode.containerInfo);break;case 10:var s=e.type._context,r=e.memoizedProps.value;I(Xr,s._currentValue),s._currentValue=r;break;case 13:if(s=e.memoizedState,s!==null)return s.dehydrated!==null?(I(G,G.current&1),e.flags|=128,null):t&e.child.childLanes?Gc(n,e,t):(I(G,G.current&1),n=ae(n,e,t),n!==null?n.sibling:null);I(G,G.current&1);break;case 19:if(s=(t&e.childLanes)!==0,n.flags&128){if(s)return Bc(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),I(G,G.current),s)break;return null;case 22:case 23:return e.lanes=0,Dc(n,e,t)}return ae(n,e,t)}var Uc,uo,bc,Vc;Uc=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};uo=function(){};bc=function(n,e,t,s){var r=n.memoizedProps;if(r!==s){n=e.stateNode,Qe(Yn.current);var l=null;switch(t){case"input":r=Oa(n,r),s=Oa(n,s),l=[];break;case"select":r=U({},r,{value:void 0}),s=U({},s,{value:void 0}),l=[];break;case"textarea":r=La(n,r),s=La(n,s),l=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(n.onclick=Wr)}Ma(t,s);var a;t=null;for(p in r)if(!s.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var o=r[p];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ss.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in s){var i=s[p];if(o=r?.[p],s.hasOwnProperty(p)&&i!==o&&(i!=null||o!=null))if(p==="style")if(o){for(a in o)!o.hasOwnProperty(a)||i&&i.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in i)i.hasOwnProperty(a)&&o[a]!==i[a]&&(t||(t={}),t[a]=i[a])}else t||(l||(l=[]),l.push(p,t)),t=i;else p==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(l=l||[]).push(p,i)):p==="children"?typeof i!="string"&&typeof i!="number"||(l=l||[]).push(p,""+i):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(p)?(i!=null&&p==="onScroll"&&M("scroll",n),l||o===i||(l=[])):(l=l||[]).push(p,i))}t&&(l=l||[]).push("style",t);var p=l;(e.updateQueue=p)&&(e.flags|=4)}};Vc=function(n,e,t,s){t!==s&&(e.flags|=4)};function as(n,e){if(!F)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,s=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=s,n.childLanes=t,e}function wm(n,e,t){var s=e.pendingProps;switch(Mo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return gn(e.type)&&Hr(),rn(e),null;case 3:return s=e.stateNode,zt(),D(yn),D(an),$o(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(xr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(vo(An),An=null))),uo(n,e),rn(e),null;case 5:Vo(e);var r=Qe(Ls.current);if(t=e.type,n!==null&&e.stateNode!=null)bc(n,e,t,s,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!s){if(e.stateNode===null)throw Error(v(166));return rn(e),null}if(n=Qe(Yn.current),xr(e)){s=e.stateNode,t=e.type;var l=e.memoizedProps;switch(s[Hn]=e,s[Rs]=l,n=(e.mode&1)!==0,t){case"dialog":M("cancel",s),M("close",s);break;case"iframe":case"object":case"embed":M("load",s);break;case"video":case"audio":for(r=0;r<ds.length;r++)M(ds[r],s);break;case"source":M("error",s);break;case"img":case"image":case"link":M("error",s),M("load",s);break;case"details":M("toggle",s);break;case"input":lu(s,l),M("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!l.multiple},M("invalid",s);break;case"textarea":ou(s,l),M("invalid",s)}Ma(t,l),r=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?s.textContent!==o&&(l.suppressHydrationWarning!==!0&&Sr(s.textContent,o,n),r=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Sr(s.textContent,o,n),r=["children",""+o]):Ss.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&M("scroll",s)}switch(t){case"input":pr(s),au(s,l,!0);break;case"textarea":pr(s),iu(s);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(s.onclick=Wr)}s=r,e.updateQueue=s,s!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof s.is=="string"?n=a.createElement(t,{is:s.is}):(n=a.createElement(t),t==="select"&&(a=n,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):n=a.createElementNS(n,t),n[Hn]=e,n[Rs]=s,Uc(n,e,!1,!1),e.stateNode=n;n:{switch(a=Da(t,s),t){case"dialog":M("cancel",n),M("close",n),r=s;break;case"iframe":case"object":case"embed":M("load",n),r=s;break;case"video":case"audio":for(r=0;r<ds.length;r++)M(ds[r],n);r=s;break;case"source":M("error",n),r=s;break;case"img":case"image":case"link":M("error",n),M("load",n),r=s;break;case"details":M("toggle",n),r=s;break;case"input":lu(n,s),r=Oa(n,s),M("invalid",n);break;case"option":r=s;break;case"select":n._wrapperState={wasMultiple:!!s.multiple},r=U({},s,{value:void 0}),M("invalid",n);break;case"textarea":ou(n,s),r=La(n,s),M("invalid",n);break;default:r=s}Ma(t,r),o=r;for(l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="style"?wp(n,i):l==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&vp(n,i)):l==="children"?typeof i=="string"?(t!=="textarea"||i!=="")&&xs(n,i):typeof i=="number"&&xs(n,""+i):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ss.hasOwnProperty(l)?i!=null&&l==="onScroll"&&M("scroll",n):i!=null&&ko(n,l,i,a))}switch(t){case"input":pr(n),au(n,s,!1);break;case"textarea":pr(n),iu(n);break;case"option":s.value!=null&&n.setAttribute("value",""+Le(s.value));break;case"select":n.multiple=!!s.multiple,l=s.value,l!=null?xt(n,!!s.multiple,l,!1):s.defaultValue!=null&&xt(n,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Wr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break n;case"img":s=!0;break n;default:s=!1}}s&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(n&&e.stateNode!=null)Vc(n,e,n.memoizedProps,s);else{if(typeof s!="string"&&e.stateNode===null)throw Error(v(166));if(t=Qe(Ls.current),Qe(Yn.current),xr(e)){if(s=e.stateNode,t=e.memoizedProps,s[Hn]=e,(l=s.nodeValue!==t)&&(n=kn,n!==null))switch(n.tag){case 3:Sr(s.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sr(s.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Hn]=e,e.stateNode=s}return rn(e),null;case 13:if(D(G),s=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(F&&wn!==null&&e.mode&1&&!(e.flags&128))oc(),Ot(),e.flags|=98560,l=!1;else if(l=xr(e),s!==null&&s.dehydrated!==null){if(n===null){if(!l)throw Error(v(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Hn]=e}else Ot(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),l=!1}else An!==null&&(vo(An),An=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(s=s!==null,s!==(n!==null&&n.memoizedState!==null)&&s&&(e.child.flags|=8192,e.mode&1&&(n===null||G.current&1?K===0&&(K=3):si())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return zt(),uo(n,e),n===null&&Ts(e.stateNode.containerInfo),rn(e),null;case 10:return Go(e.type._context),rn(e),null;case 17:return gn(e.type)&&Hr(),rn(e),null;case 19:if(D(G),l=e.memoizedState,l===null)return rn(e),null;if(s=(e.flags&128)!==0,a=l.rendering,a===null)if(s)as(l,!1);else{if(K!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=nl(n),a!==null){for(e.flags|=128,as(l,!1),s=a.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),e.subtreeFlags=0,s=t,t=e.child;t!==null;)l=t,n=s,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,n=a.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return I(G,G.current&1|2),e.child}n=n.sibling}l.tail!==null&&W()>It&&(e.flags|=128,s=!0,as(l,!1),e.lanes=4194304)}else{if(!s)if(n=nl(a),n!==null){if(e.flags|=128,s=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),as(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!F)return rn(e),null}else 2*W()-l.renderingStartTime>It&&t!==1073741824&&(e.flags|=128,s=!0,as(l,!1),e.lanes=4194304);l.isBackwards?(a.sibling=e.child,e.child=a):(t=l.last,t!==null?t.sibling=a:e.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=W(),e.sibling=null,t=G.current,I(G,s?t&1|2:t&1),e):(rn(e),null);case 22:case 23:return ti(),s=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==s&&(e.flags|=8192),s&&e.mode&1?jn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function km(n,e){switch(Mo(e),e.tag){case 1:return gn(e.type)&&Hr(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return zt(),D(yn),D(an),$o(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Vo(e),null;case 13:if(D(G),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Ot()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return D(G),null;case 4:return zt(),null;case 10:return Go(e.type._context),null;case 22:case 23:return ti(),null;case 24:return null;default:return null}}var Pr=!1,ln=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,_=null;function kt(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){b(n,e,s)}else t.current=null}function po(n,e,t){try{t()}catch(s){b(n,e,s)}}var Zu=!1;function xm(n,e){if(Ha=br,n=Qp(),Lo(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var a=0,o=-1,i=-1,p=0,f=0,m=n,h=null;e:for(;;){for(var g;m!==t||r!==0&&m.nodeType!==3||(o=a+r),m!==l||s!==0&&m.nodeType!==3||(i=a+s),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===n)break e;if(h===t&&++p===r&&(o=a),h===l&&++f===s&&(i=a),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}t=o===-1||i===-1?null:{start:o,end:i}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qa={focusedElem:n,selectionRange:t},br=!1,_=e;_!==null;)if(e=_,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_=n;else for(;_!==null;){e=_;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,q=w.memoizedState,c=e.stateNode,u=c.getSnapshotBeforeUpdate(e.elementType===e.type?k:Mn(e.type,k),q);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){b(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,_=n;break}_=e.return}return w=Zu,Zu=!1,w}function js(n,e,t){var s=e.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&n)===n){var l=r.destroy;r.destroy=void 0,l!==void 0&&po(e,t,l)}r=r.next}while(r!==s)}}function yl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var s=t.create;t.destroy=s()}t=t.next}while(t!==e)}}function co(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $c(n){var e=n.alternate;e!==null&&(n.alternate=null,$c(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Hn],delete e[Rs],delete e[Xa],delete e[lm],delete e[am])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wc(n){return n.tag===5||n.tag===3||n.tag===4}function Ju(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Wc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fo(n,e,t){var s=n.tag;if(s===5||s===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Wr));else if(s!==4&&(n=n.child,n!==null))for(fo(n,e,t),n=n.sibling;n!==null;)fo(n,e,t),n=n.sibling}function ho(n,e,t){var s=n.tag;if(s===5||s===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(s!==4&&(n=n.child,n!==null))for(ho(n,e,t),n=n.sibling;n!==null;)ho(n,e,t),n=n.sibling}var J=null,Dn=!1;function je(n,e,t){for(t=t.child;t!==null;)Hc(n,e,t),t=t.sibling}function Hc(n,e,t){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(il,t)}catch{}switch(t.tag){case 5:ln||kt(t,e);case 6:var s=J,r=Dn;J=null,je(n,e,t),J=s,Dn=r,J!==null&&(Dn?(n=J,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Dn?(n=J,t=t.stateNode,n.nodeType===8?ya(n.parentNode,t):n.nodeType===1&&ya(n,t),Cs(n)):ya(J,t.stateNode));break;case 4:s=J,r=Dn,J=t.stateNode.containerInfo,Dn=!0,je(n,e,t),J=s,Dn=r;break;case 0:case 11:case 14:case 15:if(!ln&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var l=r,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&po(t,e,a),r=r.next}while(r!==s)}je(n,e,t);break;case 1:if(!ln&&(kt(t,e),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(o){b(t,e,o)}je(n,e,t);break;case 21:je(n,e,t);break;case 22:t.mode&1?(ln=(s=ln)||t.memoizedState!==null,je(n,e,t),ln=s):je(n,e,t);break;default:je(n,e,t)}}function np(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Sm),e.forEach(function(s){var r=Rm.bind(null,n,s);t.has(s)||(t.add(s),s.then(r,r))})}}function In(n,e){var t=e.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var l=n,a=e,o=a;n:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Dn=!1;break n;case 3:J=o.stateNode.containerInfo,Dn=!0;break n;case 4:J=o.stateNode.containerInfo,Dn=!0;break n}o=o.return}if(J===null)throw Error(v(160));Hc(l,a,r),J=null,Dn=!1;var i=r.alternate;i!==null&&(i.return=null),r.return=null}catch(p){b(r,e,p)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qc(e,n),e=e.sibling}function Qc(n,e){var t=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(In(e,n),$n(n),s&4){try{js(3,n,n.return),yl(3,n)}catch(k){b(n,n.return,k)}try{js(5,n,n.return)}catch(k){b(n,n.return,k)}}break;case 1:In(e,n),$n(n),s&512&&t!==null&&kt(t,t.return);break;case 5:if(In(e,n),$n(n),s&512&&t!==null&&kt(t,t.return),n.flags&32){var r=n.stateNode;try{xs(r,"")}catch(k){b(n,n.return,k)}}if(s&4&&(r=n.stateNode,r!=null)){var l=n.memoizedProps,a=t!==null?t.memoizedProps:l,o=n.type,i=n.updateQueue;if(n.updateQueue=null,i!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&mp(r,l),Da(o,a);var p=Da(o,l);for(a=0;a<i.length;a+=2){var f=i[a],m=i[a+1];f==="style"?wp(r,m):f==="dangerouslySetInnerHTML"?vp(r,m):f==="children"?xs(r,m):ko(r,f,m,p)}switch(o){case"input":Ra(r,l);break;case"textarea":yp(r,l);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?xt(r,!!l.multiple,g,!1):h!==!!l.multiple&&(l.defaultValue!=null?xt(r,!!l.multiple,l.defaultValue,!0):xt(r,!!l.multiple,l.multiple?[]:"",!1))}r[Rs]=l}catch(k){b(n,n.return,k)}}break;case 6:if(In(e,n),$n(n),s&4){if(n.stateNode===null)throw Error(v(162));r=n.stateNode,l=n.memoizedProps;try{r.nodeValue=l}catch(k){b(n,n.return,k)}}break;case 3:if(In(e,n),$n(n),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Cs(e.containerInfo)}catch(k){b(n,n.return,k)}break;case 4:In(e,n),$n(n);break;case 13:In(e,n),$n(n),r=n.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(ni=W())),s&4&&np(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(ln=(p=ln)||f,In(e,n),ln=p):In(e,n),$n(n),s&8192){if(p=n.memoizedState!==null,(n.stateNode.isHidden=p)&&!f&&n.mode&1)for(_=n,f=n.child;f!==null;){for(m=_=f;_!==null;){switch(h=_,g=h.child,h.tag){case 0:case 11:case 14:case 15:js(4,h,h.return);break;case 1:kt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){s=h,t=h.return;try{e=s,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(k){b(s,t,k)}}break;case 5:kt(h,h.return);break;case 22:if(h.memoizedState!==null){tp(m);continue}}g!==null?(g.return=h,_=g):tp(m)}f=f.sibling}n:for(f=null,m=n;;){if(m.tag===5){if(f===null){f=m;try{r=m.stateNode,p?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=m.stateNode,i=m.memoizedProps.style,a=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=jp("display",a))}catch(k){b(n,n.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=p?"":m.memoizedProps}catch(k){b(n,n.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===n)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break n;for(;m.sibling===null;){if(m.return===null||m.return===n)break n;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:In(e,n),$n(n),s&4&&np(n);break;case 21:break;default:In(e,n),$n(n)}}function $n(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Wc(t)){var s=t;break n}t=t.return}throw Error(v(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(xs(r,""),s.flags&=-33);var l=Ju(n);ho(n,l,r);break;case 3:case 4:var a=s.stateNode.containerInfo,o=Ju(n);fo(n,o,a);break;default:throw Error(v(161))}}catch(i){b(n,n.return,i)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function _m(n,e,t){_=n,Yc(n,e,t)}function Yc(n,e,t){for(var s=(n.mode&1)!==0;_!==null;){var r=_,l=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||Pr;if(!a){var o=r.alternate,i=o!==null&&o.memoizedState!==null||ln;o=Pr;var p=ln;if(Pr=a,(ln=i)&&!p)for(_=r;_!==null;)a=_,i=a.child,a.tag===22&&a.memoizedState!==null?sp(r):i!==null?(i.return=a,_=i):sp(r);for(;l!==null;)_=l,Yc(l,e,t),l=l.sibling;_=r,Pr=o,ln=p}ep(n,e,t)}else r.subtreeFlags&8772&&l!==null?(l.return=r,_=l):ep(n,e,t)}}function ep(n){for(;_!==null;){var e=_;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||yl(5,e);break;case 1:var s=e.stateNode;if(e.flags&4&&!ln)if(t===null)s.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Mn(e.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&Au(e,l,s);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Au(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var i=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&t.focus();break;case"img":i.src&&(t.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var p=e.alternate;if(p!==null){var f=p.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Cs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ln||e.flags&512&&co(e)}catch(h){b(e,e.return,h)}}if(e===n){_=null;break}if(t=e.sibling,t!==null){t.return=e.return,_=t;break}_=e.return}}function tp(n){for(;_!==null;){var e=_;if(e===n){_=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_=t;break}_=e.return}}function sp(n){for(;_!==null;){var e=_;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{yl(4,e)}catch(i){b(e,t,i)}break;case 1:var s=e.stateNode;if(typeof s.componentDidMount=="function"){var r=e.return;try{s.componentDidMount()}catch(i){b(e,r,i)}}var l=e.return;try{co(e)}catch(i){b(e,l,i)}break;case 5:var a=e.return;try{co(e)}catch(i){b(e,a,i)}}}catch(i){b(e,e.return,i)}if(e===n){_=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_=o;break}_=e.return}}var Em=Math.ceil,sl=oe.ReactCurrentDispatcher,Zo=oe.ReactCurrentOwner,Nn=oe.ReactCurrentBatchConfig,T=0,Z=null,H=null,nn=0,jn=0,St=De(0),K=0,As=null,nt=0,gl=0,Jo=0,ws=null,hn=null,ni=0,It=1/0,Zn=null,rl=!1,mo=null,Oe=null,Cr=!1,Ee=null,ll=0,ks=0,yo=null,Ir=-1,Mr=0;function cn(){return T&6?W():Ir!==-1?Ir:Ir=W()}function Re(n){return n.mode&1?T&2&&nn!==0?nn&-nn:im.transition!==null?(Mr===0&&(Mr=Rp()),Mr):(n=R,n!==0||(n=window.event,n=n===void 0?16:Fp(n.type)),n):1}function Gn(n,e,t,s){if(50<ks)throw ks=0,yo=null,Error(v(185));Fs(n,t,s),(!(T&2)||n!==Z)&&(n===Z&&(!(T&2)&&(gl|=t),K===4&&xe(n,nn)),vn(n,s),t===1&&T===0&&!(e.mode&1)&&(It=W()+500,fl&&Ae()))}function vn(n,e){var t=n.callbackNode;ph(n,e);var s=Ur(n,n===Z?nn:0);if(s===0)t!==null&&cu(t),n.callbackNode=null,n.callbackPriority=0;else if(e=s&-s,n.callbackPriority!==e){if(t!=null&&cu(t),e===1)n.tag===0?om(rp.bind(null,n)):rc(rp.bind(null,n)),sm(function(){!(T&6)&&Ae()}),t=null;else{switch(zp(s)){case 1:t=Po;break;case 4:t=Tp;break;case 16:t=Br;break;case 536870912:t=Op;break;default:t=Br}t=sd(t,Kc.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Kc(n,e){if(Ir=-1,Mr=0,T&6)throw Error(v(327));var t=n.callbackNode;if(qt()&&n.callbackNode!==t)return null;var s=Ur(n,n===Z?nn:0);if(s===0)return null;if(s&30||s&n.expiredLanes||e)e=al(n,s);else{e=s;var r=T;T|=2;var l=Zc();(Z!==n||nn!==e)&&(Zn=null,It=W()+500,Ye(n,e));do try{qm();break}catch(o){Xc(n,o)}while(!0);Fo(),sl.current=l,T=r,H!==null?e=0:(Z=null,nn=0,e=K)}if(e!==0){if(e===2&&(r=Ua(n),r!==0&&(s=r,e=go(n,r))),e===1)throw t=As,Ye(n,0),xe(n,s),vn(n,W()),t;if(e===6)xe(n,s);else{if(r=n.current.alternate,!(s&30)&&!Pm(r)&&(e=al(n,s),e===2&&(l=Ua(n),l!==0&&(s=l,e=go(n,l))),e===1))throw t=As,Ye(n,0),xe(n,s),vn(n,W()),t;switch(n.finishedWork=r,n.finishedLanes=s,e){case 0:case 1:throw Error(v(345));case 2:$e(n,hn,Zn);break;case 3:if(xe(n,s),(s&130023424)===s&&(e=ni+500-W(),10<e)){if(Ur(n,0)!==0)break;if(r=n.suspendedLanes,(r&s)!==s){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ka($e.bind(null,n,hn,Zn),e);break}$e(n,hn,Zn);break;case 4:if(xe(n,s),(s&4194240)===s)break;for(e=n.eventTimes,r=-1;0<s;){var a=31-Fn(s);l=1<<a,a=e[a],a>r&&(r=a),s&=~l}if(s=r,s=W()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Em(s/1960))-s,10<s){n.timeoutHandle=Ka($e.bind(null,n,hn,Zn),s);break}$e(n,hn,Zn);break;case 5:$e(n,hn,Zn);break;default:throw Error(v(329))}}}return vn(n,W()),n.callbackNode===t?Kc.bind(null,n):null}function go(n,e){var t=ws;return n.current.memoizedState.isDehydrated&&(Ye(n,e).flags|=256),n=al(n,e),n!==2&&(e=hn,hn=t,e!==null&&vo(e)),n}function vo(n){hn===null?hn=n:hn.push.apply(hn,n)}function Pm(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],l=r.getSnapshot;r=r.value;try{if(!Bn(l(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xe(n,e){for(e&=~Jo,e&=~gl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Fn(e),s=1<<t;n[t]=-1,e&=~s}}function rp(n){if(T&6)throw Error(v(327));qt();var e=Ur(n,0);if(!(e&1))return vn(n,W()),null;var t=al(n,e);if(n.tag!==0&&t===2){var s=Ua(n);s!==0&&(e=s,t=go(n,s))}if(t===1)throw t=As,Ye(n,0),xe(n,e),vn(n,W()),t;if(t===6)throw Error(v(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,$e(n,hn,Zn),vn(n,W()),null}function ei(n,e){var t=T;T|=1;try{return n(e)}finally{T=t,T===0&&(It=W()+500,fl&&Ae())}}function et(n){Ee!==null&&Ee.tag===0&&!(T&6)&&qt();var e=T;T|=1;var t=Nn.transition,s=R;try{if(Nn.transition=null,R=1,n)return n()}finally{R=s,Nn.transition=t,T=e,!(T&6)&&Ae()}}function ti(){jn=St.current,D(St)}function Ye(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,tm(t)),H!==null)for(t=H.return;t!==null;){var s=t;switch(Mo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Hr();break;case 3:zt(),D(yn),D(an),$o();break;case 5:Vo(s);break;case 4:zt();break;case 13:D(G);break;case 19:D(G);break;case 10:Go(s.type._context);break;case 22:case 23:ti()}t=t.return}if(Z=n,H=n=ze(n.current,null),nn=jn=e,K=0,As=null,Jo=gl=nt=0,hn=ws=null,He!==null){for(e=0;e<He.length;e++)if(t=He[e],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,l=t.pending;if(l!==null){var a=l.next;l.next=r,s.next=a}t.pending=s}He=null}return n}function Xc(n,e){do{var t=H;try{if(Fo(),Rr.current=tl,el){for(var s=B.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}el=!1}if(Je=0,X=Y=B=null,vs=!1,Is=0,Zo.current=null,t===null||t.return===null){K=1,As=e,H=null;break}n:{var l=n,a=t.return,o=t,i=e;if(e=nn,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var p=i,f=o,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=$u(a);if(g!==null){g.flags&=-257,Wu(g,a,o,l,e),g.mode&1&&Vu(l,p,e),e=g,i=p;var w=e.updateQueue;if(w===null){var k=new Set;k.add(i),e.updateQueue=k}else w.add(i);break n}else{if(!(e&1)){Vu(l,p,e),si();break n}i=Error(v(426))}}else if(F&&o.mode&1){var q=$u(a);if(q!==null){!(q.flags&65536)&&(q.flags|=256),Wu(q,a,o,l,e),Do(Lt(i,o));break n}}l=i=Lt(i,o),K!==4&&(K=2),ws===null?ws=[l]:ws.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var c=Lc(l,i,e);Du(l,c);break n;case 1:o=i;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oe===null||!Oe.has(d)))){l.flags|=65536,e&=-e,l.lanes|=e;var y=Ic(l,o,e);Du(l,y);break n}}l=l.return}while(l!==null)}nd(t)}catch(S){e=S,H===t&&t!==null&&(H=t=t.return);continue}break}while(!0)}function Zc(){var n=sl.current;return sl.current=tl,n===null?tl:n}function si(){(K===0||K===3||K===2)&&(K=4),Z===null||!(nt&268435455)&&!(gl&268435455)||xe(Z,nn)}function al(n,e){var t=T;T|=2;var s=Zc();(Z!==n||nn!==e)&&(Zn=null,Ye(n,e));do try{Cm();break}catch(r){Xc(n,r)}while(!0);if(Fo(),T=t,sl.current=s,H!==null)throw Error(v(261));return Z=null,nn=0,K}function Cm(){for(;H!==null;)Jc(H)}function qm(){for(;H!==null&&!eh();)Jc(H)}function Jc(n){var e=td(n.alternate,n,jn);n.memoizedProps=n.pendingProps,e===null?nd(n):H=e,Zo.current=null}function nd(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=km(t,e),t!==null){t.flags&=32767,H=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{K=6,H=null;return}}else if(t=wm(t,e,jn),t!==null){H=t;return}if(e=e.sibling,e!==null){H=e;return}H=e=n}while(e!==null);K===0&&(K=5)}function $e(n,e,t){var s=R,r=Nn.transition;try{Nn.transition=null,R=1,Nm(n,e,t,s)}finally{Nn.transition=r,R=s}return null}function Nm(n,e,t,s){do qt();while(Ee!==null);if(T&6)throw Error(v(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(v(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(ch(n,l),n===Z&&(H=Z=null,nn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Cr||(Cr=!0,sd(Br,function(){return qt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Nn.transition,Nn.transition=null;var a=R;R=1;var o=T;T|=4,Zo.current=null,xm(n,t),Qc(t,n),Xh(Qa),br=!!Ha,Qa=Ha=null,n.current=t,_m(t,n,r),th(),T=o,R=a,Nn.transition=l}else n.current=t;if(Cr&&(Cr=!1,Ee=n,ll=r),l=n.pendingLanes,l===0&&(Oe=null),lh(t.stateNode,s),vn(n,W()),e!==null)for(s=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(rl)throw rl=!1,n=mo,mo=null,n;return ll&1&&n.tag!==0&&qt(),l=n.pendingLanes,l&1?n===yo?ks++:(ks=0,yo=n):ks=0,Ae(),null}function qt(){if(Ee!==null){var n=zp(ll),e=Nn.transition,t=R;try{if(Nn.transition=null,R=16>n?16:n,Ee===null)var s=!1;else{if(n=Ee,Ee=null,ll=0,T&6)throw Error(v(331));var r=T;for(T|=4,_=n.current;_!==null;){var l=_,a=l.child;if(_.flags&16){var o=l.deletions;if(o!==null){for(var i=0;i<o.length;i++){var p=o[i];for(_=p;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:js(8,f,l)}var m=f.child;if(m!==null)m.return=f,_=m;else for(;_!==null;){f=_;var h=f.sibling,g=f.return;if($c(f),f===p){_=null;break}if(h!==null){h.return=g,_=h;break}_=g}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var q=k.sibling;k.sibling=null,k=q}while(k!==null)}}_=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,_=a;else n:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:js(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,_=c;break n}_=l.return}}var u=n.current;for(_=u;_!==null;){a=_;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,_=d;else n:for(a=u;_!==null;){if(o=_,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:yl(9,o)}}catch(S){b(o,o.return,S)}if(o===a){_=null;break n}var y=o.sibling;if(y!==null){y.return=o.return,_=y;break n}_=o.return}}if(T=r,Ae(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(il,n)}catch{}s=!0}return s}finally{R=t,Nn.transition=e}}return!1}function lp(n,e,t){e=Lt(t,e),e=Lc(n,e,1),n=Te(n,e,1),e=cn(),n!==null&&(Fs(n,1,e),vn(n,e))}function b(n,e,t){if(n.tag===3)lp(n,n,t);else for(;e!==null;){if(e.tag===3){lp(e,n,t);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Oe===null||!Oe.has(s))){n=Lt(t,n),n=Ic(e,n,1),e=Te(e,n,1),n=cn(),e!==null&&(Fs(e,1,n),vn(e,n));break}}e=e.return}}function Tm(n,e,t){var s=n.pingCache;s!==null&&s.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,Z===n&&(nn&t)===t&&(K===4||K===3&&(nn&130023424)===nn&&500>W()-ni?Ye(n,0):Jo|=t),vn(n,e)}function ed(n,e){e===0&&(n.mode&1?(e=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):e=1);var t=cn();n=le(n,e),n!==null&&(Fs(n,e,t),vn(n,t))}function Om(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ed(n,t)}function Rm(n,e){var t=0;switch(n.tag){case 13:var s=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=n.stateNode;break;default:throw Error(v(314))}s!==null&&s.delete(e),ed(n,t)}var td;td=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||yn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,jm(n,e,t);mn=!!(n.flags&131072)}else mn=!1,F&&e.flags&1048576&&lc(e,Kr,e.index);switch(e.lanes=0,e.tag){case 2:var s=e.type;Lr(n,e),n=e.pendingProps;var r=Tt(e,an.current);Ct(e,t),r=Ho(null,e,s,n,r,t);var l=Qo();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(s)?(l=!0,Qr(e)):l=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uo(e),r.updater=hl,e.stateNode=r,r._reactInternals=e,so(e,s,n,t),e=ao(null,e,s,!0,l,t)):(e.tag=0,F&&l&&Io(e),pn(null,e,r,t),e=e.child),e;case 16:s=e.elementType;n:{switch(Lr(n,e),n=e.pendingProps,r=s._init,s=r(s._payload),e.type=s,r=e.tag=Lm(s),n=Mn(s,n),r){case 0:e=lo(null,e,s,n,t);break n;case 1:e=Yu(null,e,s,n,t);break n;case 11:e=Hu(null,e,s,n,t);break n;case 14:e=Qu(null,e,s,Mn(s.type,n),t);break n}throw Error(v(306,s,""))}return e;case 0:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Mn(s,r),lo(n,e,s,r,t);case 1:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Mn(s,r),Yu(n,e,s,r,t);case 3:n:{if(Fc(e),n===null)throw Error(v(387));s=e.pendingProps,l=e.memoizedState,r=l.element,uc(n,e),Jr(e,s,null,t);var a=e.memoizedState;if(s=a.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){r=Lt(Error(v(423)),e),e=Ku(n,e,s,t,r);break n}else if(s!==r){r=Lt(Error(v(424)),e),e=Ku(n,e,s,t,r);break n}else for(wn=Ne(e.stateNode.containerInfo.firstChild),kn=e,F=!0,An=null,t=fc(e,null,s,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),s===r){e=ae(n,e,t);break n}pn(n,e,s,t)}e=e.child}return e;case 5:return hc(e),n===null&&no(e),s=e.type,r=e.pendingProps,l=n!==null?n.memoizedProps:null,a=r.children,Ya(s,r)?a=null:l!==null&&Ya(s,l)&&(e.flags|=32),Ac(n,e),pn(n,e,a,t),e.child;case 6:return n===null&&no(e),null;case 13:return Gc(n,e,t);case 4:return bo(e,e.stateNode.containerInfo),s=e.pendingProps,n===null?e.child=Rt(e,null,s,t):pn(n,e,s,t),e.child;case 11:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Mn(s,r),Hu(n,e,s,r,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(s=e.type._context,r=e.pendingProps,l=e.memoizedProps,a=r.value,I(Xr,s._currentValue),s._currentValue=a,l!==null)if(Bn(l.value,a)){if(l.children===r.children&&!yn.current){e=ae(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var i=o.firstContext;i!==null;){if(i.context===s){if(l.tag===1){i=te(-1,t&-t),i.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var f=p.pending;f===null?i.next=i:(i.next=f.next,f.next=i),p.pending=i}}l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),eo(l.return,t,e),o.lanes|=t;break}i=i.next}}else if(l.tag===10)a=l.type===e.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(v(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),eo(a,t,e),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===e){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}pn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,s=e.pendingProps.children,Ct(e,t),r=Tn(r),s=s(r),e.flags|=1,pn(n,e,s,t),e.child;case 14:return s=e.type,r=Mn(s,e.pendingProps),r=Mn(s.type,r),Qu(n,e,s,r,t);case 15:return Mc(n,e,e.type,e.pendingProps,t);case 17:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Mn(s,r),Lr(n,e),e.tag=1,gn(s)?(n=!0,Qr(e)):n=!1,Ct(e,t),cc(e,s,r),so(e,s,r,t),ao(null,e,s,!0,n,t);case 19:return Bc(n,e,t);case 22:return Dc(n,e,t)}throw Error(v(156,e.tag))};function sd(n,e){return Np(n,e)}function zm(n,e,t,s){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,e,t,s){return new zm(n,e,t,s)}function ri(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lm(n){if(typeof n=="function")return ri(n)?1:0;if(n!=null){if(n=n.$$typeof,n===xo)return 11;if(n===_o)return 14}return 2}function ze(n,e){var t=n.alternate;return t===null?(t=qn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Dr(n,e,t,s,r,l){var a=2;if(s=n,typeof n=="function")ri(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case dt:return Ke(t.children,r,l,e);case So:a=8,r|=8;break;case Ca:return n=qn(12,t,e,r|2),n.elementType=Ca,n.lanes=l,n;case qa:return n=qn(13,t,e,r),n.elementType=qa,n.lanes=l,n;case Na:return n=qn(19,t,e,r),n.elementType=Na,n.lanes=l,n;case dp:return vl(t,r,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case pp:a=10;break n;case cp:a=9;break n;case xo:a=11;break n;case _o:a=14;break n;case we:a=16,s=null;break n}throw Error(v(130,n==null?n:typeof n,""))}return e=qn(a,t,e,r),e.elementType=n,e.type=s,e.lanes=l,e}function Ke(n,e,t,s){return n=qn(7,n,s,e),n.lanes=t,n}function vl(n,e,t,s){return n=qn(22,n,s,e),n.elementType=dp,n.lanes=t,n.stateNode={isHidden:!1},n}function _a(n,e,t){return n=qn(6,n,null,e),n.lanes=t,n}function Ea(n,e,t){return e=qn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Im(n,e,t,s,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function li(n,e,t,s,r,l,a,o,i){return n=new Im(n,e,t,o,i),e===1?(e=1,l===!0&&(e|=8)):e=0,l=qn(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uo(l),n}function Mm(n,e,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ct,key:s==null?null:""+s,children:n,containerInfo:e,implementation:t}}function rd(n){if(!n)return Ie;n=n._reactInternals;n:{if(st(n)!==n||n.tag!==1)throw Error(v(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(v(171))}if(n.tag===1){var t=n.type;if(gn(t))return sc(n,t,e)}return e}function ld(n,e,t,s,r,l,a,o,i){return n=li(t,s,!0,n,r,l,a,o,i),n.context=rd(null),t=n.current,s=cn(),r=Re(t),l=te(s,r),l.callback=e??null,Te(t,l,r),n.current.lanes=r,Fs(n,r,s),vn(n,s),n}function jl(n,e,t,s){var r=e.current,l=cn(),a=Re(r);return t=rd(t),e.context===null?e.context=t:e.pendingContext=t,e=te(l,a),e.payload={element:n},s=s===void 0?null:s,s!==null&&(e.callback=s),n=Te(r,e,a),n!==null&&(Gn(n,r,a,l),Or(n,r,a)),a}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ap(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ai(n,e){ap(n,e),(n=n.alternate)&&ap(n,e)}function Dm(){return null}var ad=typeof reportError=="function"?reportError:function(n){console.error(n)};function oi(n){this._internalRoot=n}wl.prototype.render=oi.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(v(409));jl(n,e,null,null)};wl.prototype.unmount=oi.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;et(function(){jl(null,n,null,null)}),e[re]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Mp();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Se.length&&e!==0&&e<Se[t].priority;t++);Se.splice(t,0,n),t===0&&Ap(n)}};function ii(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function op(){}function Am(n,e,t,s,r){if(r){if(typeof s=="function"){var l=s;s=function(){var p=ol(a);l.call(p)}}var a=ld(e,s,n,0,null,!1,!1,"",op);return n._reactRootContainer=a,n[re]=a.current,Ts(n.nodeType===8?n.parentNode:n),et(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof s=="function"){var o=s;s=function(){var p=ol(i);o.call(p)}}var i=li(n,0,!1,null,null,!1,!1,"",op);return n._reactRootContainer=i,n[re]=i.current,Ts(n.nodeType===8?n.parentNode:n),et(function(){jl(e,i,t,s)}),i}function Sl(n,e,t,s,r){var l=t._reactRootContainer;if(l){var a=l;if(typeof r=="function"){var o=r;r=function(){var i=ol(a);o.call(i)}}jl(e,a,n,r)}else a=Am(t,e,n,r,s);return ol(a)}Lp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=cs(e.pendingLanes);t!==0&&(Co(e,t|1),vn(e,W()),!(T&6)&&(It=W()+500,Ae()))}break;case 13:et(function(){var s=le(n,1);if(s!==null){var r=cn();Gn(s,n,1,r)}}),ai(n,1)}};qo=function(n){if(n.tag===13){var e=le(n,134217728);if(e!==null){var t=cn();Gn(e,n,134217728,t)}ai(n,134217728)}};Ip=function(n){if(n.tag===13){var e=Re(n),t=le(n,e);if(t!==null){var s=cn();Gn(t,n,e,s)}ai(n,e)}};Mp=function(){return R};Dp=function(n,e){var t=R;try{return R=n,e()}finally{R=t}};Fa=function(n,e,t){switch(e){case"input":if(Ra(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var s=t[e];if(s!==n&&s.form===n.form){var r=dl(s);if(!r)throw Error(v(90));hp(s),Ra(s,r)}}}break;case"textarea":yp(n,t);break;case"select":e=t.value,e!=null&&xt(n,!!t.multiple,e,!1)}};xp=ei;_p=et;var Fm={usingClientEntryPoint:!1,Events:[Bs,yt,dl,kp,Sp,ei]},os={findFiberByHostInstance:We,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gm={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cp(n),n===null?null:n.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||Dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(is=__REACT_DEVTOOLS_GLOBAL_HOOK__,!is.isDisabled&&is.supportsFiber))try{il=is.inject(Gm),Qn=is}catch{}var is;_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm;_n.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ii(e))throw Error(v(200));return Mm(n,e,null,t)};_n.createRoot=function(n,e){if(!ii(n))throw Error(v(299));var t=!1,s="",r=ad;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=li(n,1,!1,null,null,t,!1,s,r),n[re]=e.current,Ts(n.nodeType===8?n.parentNode:n),new oi(e)};_n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(v(188)):(n=Object.keys(n).join(","),Error(v(268,n)));return n=Cp(e),n=n===null?null:n.stateNode,n};_n.flushSync=function(n){return et(n)};_n.hydrate=function(n,e,t){if(!kl(e))throw Error(v(200));return Sl(null,n,e,!0,t)};_n.hydrateRoot=function(n,e,t){if(!ii(n))throw Error(v(405));var s=t!=null&&t.hydratedSources||null,r=!1,l="",a=ad;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=ld(e,null,n,1,t??null,r,!1,l,a),n[re]=e.current,Ts(n),s)for(n=0;n<s.length;n++)t=s[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new wl(e)};_n.render=function(n,e,t){if(!kl(e))throw Error(v(200));return Sl(null,n,e,!1,t)};_n.unmountComponentAtNode=function(n){if(!kl(n))throw Error(v(40));return n._reactRootContainer?(et(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[re]=null})}),!0):!1};_n.unstable_batchedUpdates=ei;_n.unstable_renderSubtreeIntoContainer=function(n,e,t,s){if(!kl(t))throw Error(v(200));if(n==null||n._reactInternals===void 0)throw Error(v(38));return Sl(n,e,t,!1,s)};_n.version="18.2.0-next-9e3b772b8-20220608"});var pd=me((Ay,ud)=>{"use strict";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(n){console.error(n)}}id(),ud.exports=od()});var dd=me(ui=>{"use strict";var cd=pd();ui.createRoot=cd.createRoot,ui.hydrateRoot=cd.hydrateRoot;var Fy});var hd=me((Wy,fd)=>{fd.exports=function(e,t,s,r){var l=s?s.call(r,e,t):void 0;if(l!==void 0)return!!l;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),p=0;p<a.length;p++){var f=a[p];if(!i(f))return!1;var m=e[f],h=t[f];if(l=s?s.call(r,m,h,f):void 0,l===!1||l===void 0&&m!==h)return!1}return!0}});var ff=ye(ge()),hf=ye(dd());var de=ye(ge());var Fl=ye(ge());var ce=ye(ge());var on=function(){return on=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},on.apply(this,arguments)};function bs(n,e,t){if(t||arguments.length===2)for(var s=0,r=e.length,l;s<r;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return n.concat(l||Array.prototype.slice.call(e))}var $=ye(ge()),$d=ye(hd());var z="-ms-",rt="-moz-",O="-webkit-",xl="comm",Fe="rule",At="decl";var md="@import";var _l="@keyframes";var yd="@layer";var pi=Math.abs,Vs=String.fromCharCode,$s=Object.assign;function gd(n,e){return V(n,0)^45?(((e<<2^V(n,0))<<2^V(n,1))<<2^V(n,2))<<2^V(n,3):0}function El(n){return n.trim()}function Un(n,e){return(n=e.exec(n))?n[0]:n}function P(n,e,t){return n.replace(e,t)}function Ft(n,e,t){return n.indexOf(e,t)}function V(n,e){return n.charCodeAt(e)|0}function Kn(n,e,t){return n.slice(e,t)}function fn(n){return n.length}function Pl(n){return n.length}function lt(n,e){return e.push(n),n}function vd(n,e){return n.map(e).join("")}function ci(n,e){return n.filter(function(t){return!Un(t,e)})}var Cl=1,Gt=1,jd=0,Rn=0,Q=0,Bt="";function Ws(n,e,t,s,r,l,a,o){return{value:n,root:e,parent:t,type:s,props:r,children:l,line:Cl,column:Gt,length:a,return:"",siblings:o}}function ie(n,e){return $s(Ws("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function at(n){for(;n.root;)n=ie(n.root,{children:[n]});lt(n,n.siblings)}function wd(){return Q}function kd(){return Q=Rn>0?V(Bt,--Rn):0,Gt--,Q===10&&(Gt=1,Cl--),Q}function zn(){return Q=Rn<jd?V(Bt,Rn++):0,Gt++,Q===10&&(Gt=1,Cl++),Q}function Ge(){return V(Bt,Rn)}function Hs(){return Rn}function ql(n,e){return Kn(Bt,n,e)}function di(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sd(n){return Cl=Gt=1,jd=fn(Bt=n),Rn=0,[]}function xd(n){return Bt="",n}function Nl(n){return El(ql(Rn-1,fi(n===91?n+2:n===40?n+1:n)))}function _d(n){for(;(Q=Ge())&&Q<33;)zn();return di(n)>2||di(Q)>3?"":" "}function Ed(n,e){for(;--e&&zn()&&!(Q<48||Q>102||Q>57&&Q<65||Q>70&&Q<97););return ql(n,Hs()+(e<6&&Ge()==32&&zn()==32))}function fi(n){for(;zn();)switch(Q){case n:return Rn;case 34:case 39:n!==34&&n!==39&&fi(Q);break;case 40:n===41&&fi(n);break;case 92:zn();break}return Rn}function Pd(n,e){for(;zn()&&n+Q!==57;)if(n+Q===84&&Ge()===47)break;return"/*"+ql(e,Rn-1)+"*"+Vs(n===47?n:zn())}function Cd(n){for(;!di(Ge());)zn();return ql(n,Rn)}function Td(n){return xd(Tl("",null,null,null,[""],n=Sd(n),0,[0],n))}function Tl(n,e,t,s,r,l,a,o,i){for(var p=0,f=0,m=a,h=0,g=0,w=0,k=1,q=1,c=1,u=0,d="",y=r,S=l,x=s,j=d;q;)switch(w=u,u=zn()){case 40:if(w!=108&&V(j,m-1)==58){Ft(j+=P(Nl(u),"&","&\f"),"&\f",pi(p?o[p-1]:0))!=-1&&(c=-1);break}case 34:case 39:case 91:j+=Nl(u);break;case 9:case 10:case 13:case 32:j+=_d(w);break;case 92:j+=Ed(Hs()-1,7);continue;case 47:switch(Ge()){case 42:case 47:lt(Bm(Pd(zn(),Hs()),e,t,i),i);break;default:j+="/"}break;case 123*k:o[p++]=fn(j)*c;case 125*k:case 59:case 0:switch(u){case 0:case 125:q=0;case 59+f:c==-1&&(j=P(j,/\f/g,"")),g>0&&fn(j)-m&&lt(g>32?Nd(j+";",s,t,m-1,i):Nd(P(j," ","")+";",s,t,m-2,i),i);break;case 59:j+=";";default:if(lt(x=qd(j,e,t,p,f,r,o,d,y=[],S=[],m,l),l),u===123)if(f===0)Tl(j,e,x,x,y,l,m,o,S);else switch(h===99&&V(j,3)===110?100:h){case 100:case 108:case 109:case 115:Tl(n,x,x,s&&lt(qd(n,x,x,0,0,r,o,d,r,y=[],m,S),S),r,S,m,o,s?y:S);break;default:Tl(j,x,x,x,[""],S,0,o,S)}}p=f=g=0,k=c=1,d=j="",m=a;break;case 58:m=1+fn(j),g=w;default:if(k<1){if(u==123)--k;else if(u==125&&k++==0&&kd()==125)continue}switch(j+=Vs(u),u*k){case 38:c=f>0?1:(j+="\f",-1);break;case 44:o[p++]=(fn(j)-1)*c,c=1;break;case 64:Ge()===45&&(j+=Nl(zn())),h=Ge(),f=m=fn(d=j+=Cd(Hs())),u++;break;case 45:w===45&&fn(j)==2&&(k=0)}}return l}function qd(n,e,t,s,r,l,a,o,i,p,f,m){for(var h=r-1,g=r===0?l:[""],w=Pl(g),k=0,q=0,c=0;k<s;++k)for(var u=0,d=Kn(n,h+1,h=pi(q=a[k])),y=n;u<w;++u)(y=El(q>0?g[u]+" "+d:P(d,/&\f/g,g[u])))&&(i[c++]=y);return Ws(n,e,t,r===0?Fe:o,i,p,f,m)}function Bm(n,e,t,s){return Ws(n,e,t,xl,Vs(wd()),Kn(n,2,-2),0,s)}function Nd(n,e,t,s,r){return Ws(n,e,t,At,Kn(n,0,s),Kn(n,s+1,-1),s,r)}function hi(n,e,t){switch(gd(n,e)){case 5103:return O+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+n+n;case 4789:return rt+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return O+n+rt+n+z+n+n;case 5936:switch(V(n,e+11)){case 114:return O+n+z+P(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return O+n+z+P(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return O+n+z+P(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return O+n+z+n+n;case 6165:return O+n+z+"flex-"+n+n;case 5187:return O+n+P(n,/(\w+).+(:[^]+)/,O+"box-$1$2"+z+"flex-$1$2")+n;case 5443:return O+n+z+"flex-item-"+P(n,/flex-|-self/g,"")+(Un(n,/flex-|baseline/)?"":z+"grid-row-"+P(n,/flex-|-self/g,""))+n;case 4675:return O+n+z+"flex-line-pack"+P(n,/align-content|flex-|-self/g,"")+n;case 5548:return O+n+z+P(n,"shrink","negative")+n;case 5292:return O+n+z+P(n,"basis","preferred-size")+n;case 6060:return O+"box-"+P(n,"-grow","")+O+n+z+P(n,"grow","positive")+n;case 4554:return O+P(n,/([^-])(transform)/g,"$1"+O+"$2")+n;case 6187:return P(P(P(n,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),n,"")+n;case 5495:case 3959:return P(n,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return P(P(n,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+n+n;case 4200:if(!Un(n,/flex-|baseline/))return z+"grid-column-align"+Kn(n,e)+n;break;case 2592:case 3360:return z+P(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(s,r){return e=r,Un(s.props,/grid-\w+-end/)})?~Ft(n+(t=t[e].value),"span",0)?n:z+P(n,"-start","")+n+z+"grid-row-span:"+(~Ft(t,"span",0)?Un(t,/\d+/):+Un(t,/\d+/)-+Un(n,/\d+/))+";":z+P(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(s){return Un(s.props,/grid-\w+-start/)})?n:z+P(P(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return P(n,/(.+)-inline(.+)/,O+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(n)-1-e>6)switch(V(n,e+1)){case 109:if(V(n,e+4)!==45)break;case 102:return P(n,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+rt+(V(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Ft(n,"stretch",0)?hi(P(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return P(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,r,l,a,o,i,p){return z+r+":"+l+p+(a?z+r+"-span:"+(o?i:+i-+l)+p:"")+n});case 4949:if(V(n,e+6)===121)return P(n,":",":"+O)+n;break;case 6444:switch(V(n,V(n,14)===45?18:11)){case 120:return P(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(V(n,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+z+"$2box$3")+n;case 100:return P(n,":",":"+z)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(n,"scroll-","scroll-snap-")+n}return n}function Ut(n,e){for(var t="",s=0;s<n.length;s++)t+=e(n[s],s,n,e)||"";return t}function Od(n,e,t,s){switch(n.type){case yd:if(n.children.length)break;case md:case At:return n.return=n.return||n.value;case xl:return"";case _l:return n.return=n.value+"{"+Ut(n.children,s)+"}";case Fe:if(!fn(n.value=n.props.join(",")))return""}return fn(t=Ut(n.children,s))?n.return=n.value+"{"+t+"}":""}function Rd(n){var e=Pl(n);return function(t,s,r,l){for(var a="",o=0;o<e;o++)a+=n[o](t,s,r,l)||"";return a}}function zd(n){return function(e){e.root||(e=e.return)&&n(e)}}function Ld(n,e,t,s){if(n.length>-1&&!n.return)switch(n.type){case At:n.return=hi(n.value,n.length,t);return;case _l:return Ut([ie(n,{value:P(n.value,"@","@"+O)})],s);case Fe:if(n.length)return vd(t=n.props,function(r){switch(Un(r,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":at(ie(n,{props:[P(r,/:(read-\w+)/,":"+rt+"$1")]})),at(ie(n,{props:[r]})),$s(n,{props:ci(t,s)});break;case"::placeholder":at(ie(n,{props:[P(r,/:(plac\w+)/,":"+O+"input-$1")]})),at(ie(n,{props:[P(r,/:(plac\w+)/,":"+rt+"$1")]})),at(ie(n,{props:[P(r,/:(plac\w+)/,z+"input-$1")]})),at(ie(n,{props:[r]})),$s(n,{props:ci(t,s)});break}return""})}}var Um={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Id=Um;var pe=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Wd="active",Il="data-styled-version",Vt="6.1.8",_i=`/*!sc*/
`,Ei=typeof window<"u"&&"HTMLElement"in window,bm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var Al=Object.freeze([]),$t=Object.freeze({});function Vm(n,e,t){return t===void 0&&(t=$t),n.theme!==t.theme&&n.theme||e||t.theme}var Hd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$m=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wm=/(^-|-$)/g;function Md(n){return n.replace($m,"-").replace(Wm,"")}var Hm=/(a)(d)/gi,Ol=52,Dd=function(n){return String.fromCharCode(n+(n>25?39:97))};function vi(n){var e,t="";for(e=Math.abs(n);e>Ol;e=e/Ol|0)t=Dd(e%Ol)+t;return(Dd(e%Ol)+t).replace(Hm,"$1-$2")}var mi,Qd=5381,bt=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Yd=function(n){return bt(Qd,n)};function Qm(n){return vi(Yd(n)>>>0)}function Ym(n){return n.displayName||n.name||"Component"}function yi(n){return typeof n=="string"&&!0}var Kd=typeof Symbol=="function"&&Symbol.for,Xd=Kd?Symbol.for("react.memo"):60115,Km=Kd?Symbol.for("react.forward_ref"):60112,Xm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jm=((mi={})[Km]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mi[Xd]=Zd,mi);function Ad(n){return("type"in(e=n)&&e.type.$$typeof)===Xd?Zd:"$$typeof"in n?Jm[n.$$typeof]:Xm;var e}var ny=Object.defineProperty,ey=Object.getOwnPropertyNames,Fd=Object.getOwnPropertySymbols,ty=Object.getOwnPropertyDescriptor,sy=Object.getPrototypeOf,Gd=Object.prototype;function Jd(n,e,t){if(typeof e!="string"){if(Gd){var s=sy(e);s&&s!==Gd&&Jd(n,s,t)}var r=ey(e);Fd&&(r=r.concat(Fd(e)));for(var l=Ad(n),a=Ad(e),o=0;o<r.length;++o){var i=r[o];if(!(i in Zm||t&&t[i]||a&&i in a||l&&i in l)){var p=ty(e,i);try{ny(n,i,p)}catch{}}}}return n}function Wt(n){return typeof n=="function"}function Pi(n){return typeof n=="object"&&"styledComponentId"in n}function ot(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Ml(n,e){if(n.length===0)return"";for(var t=n[0],s=1;s<n.length;s++)t+=e?e+n[s]:n[s];return t}function Qs(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ji(n,e,t){if(t===void 0&&(t=!1),!t&&!Qs(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)n[s]=ji(n[s],e[s]);else if(Qs(e))for(var s in e)n[s]=ji(n[s],e[s]);return n}function Ci(n,e){Object.defineProperty(n,"toString",{value:e})}function ue(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ry=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,r=s.length,l=r;e>=l;)if((l<<=1)<0)throw ue(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var a=r;a<l;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),r=s+t;this.groupSizes[e]=0;for(var l=s;l<r;l++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],r=this.indexOfGroup(e),l=r+s,a=r;a<l;a++)t+="".concat(this.tag.getRule(a)).concat(_i);return t},n}(),zl=new Map,Dl=new Map,Ll=1,Rl=function(n){if(zl.has(n))return zl.get(n);for(;Dl.has(Ll);)Ll++;var e=Ll++;return zl.set(n,e),Dl.set(e,n),e},ly=function(n,e){Ll=e+1,zl.set(n,e),Dl.set(e,n)},ay="style[".concat(pe,"][").concat(Il,'="').concat(Vt,'"]'),oy=new RegExp("^".concat(pe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iy=function(n,e,t){for(var s,r=t.split(","),l=0,a=r.length;l<a;l++)(s=r[l])&&n.registerName(e,s)},uy=function(n,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(_i),r=[],l=0,a=s.length;l<a;l++){var o=s[l].trim();if(o){var i=o.match(oy);if(i){var p=0|parseInt(i[1],10),f=i[2];p!==0&&(ly(f,p),iy(n,f,i[3]),n.getTag().insertRules(p,r)),r.length=0}else r.push(o)}}};function wi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nf=function(n){var e=document.head,t=n||e,s=document.createElement("style"),r=function(o){var i=Array.from(o.querySelectorAll("style[".concat(pe,"]")));return i[i.length-1]}(t),l=r!==void 0?r.nextSibling:null;s.setAttribute(pe,Wd),s.setAttribute(Il,Vt);var a=wi();return a&&s.setAttribute("nonce",a),t.insertBefore(s,l),s},py=function(){function n(e){this.element=nf(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,r=0,l=s.length;r<l;r++){var a=s[r];if(a.ownerNode===t)return a}throw ue(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),cy=function(){function n(e){this.element=nf(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),dy=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Bd=Ei,fy={isServer:!Ei,useCSSOMInjection:!bm},Ys=function(){function n(e,t,s){e===void 0&&(e=$t),t===void 0&&(t={});var r=this;this.options=on(on({},fy),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Ei&&Bd&&(Bd=!1,function(l){for(var a=document.querySelectorAll(ay),o=0,i=a.length;o<i;o++){var p=a[o];p&&p.getAttribute(pe)!==Wd&&(uy(l,p),p.parentNode&&p.parentNode.removeChild(p))}}(this)),Ci(this,function(){return function(l){for(var a=l.getTag(),o=a.length,i="",p=function(m){var h=function(c){return Dl.get(c)}(m);if(h===void 0)return"continue";var g=l.names.get(h),w=a.getGroup(m);if(g===void 0||w.length===0)return"continue";var k="".concat(pe,".g").concat(m,'[id="').concat(h,'"]'),q="";g!==void 0&&g.forEach(function(c){c.length>0&&(q+="".concat(c,","))}),i+="".concat(w).concat(k,'{content:"').concat(q,'"}').concat(_i)},f=0;f<o;f++)p(f);return i}(r)})}return n.registerId=function(e){return Rl(e)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(on(on({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,r=t.target;return t.isServer?new dy(r):s?new py(r):new cy(r)}(this.options),new ry(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Rl(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},n.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Rl(e),s)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Rl(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),hy=/&/g,my=/^\s*\/\/.*$/gm;function ef(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=ef(t.children,e)),t})}function tf(n){var e,t,s,r=n===void 0?$t:n,l=r.options,a=l===void 0?$t:l,o=r.plugins,i=o===void 0?Al:o,p=function(h,g,w){return w.startsWith(t)&&w.endsWith(t)&&w.replaceAll(t,"").length>0?".".concat(e):h},f=i.slice();f.push(function(h){h.type===Fe&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(hy,t).replace(s,p))}),a.prefix&&f.push(Ld),f.push(Od);var m=function(h,g,w,k){g===void 0&&(g=""),w===void 0&&(w=""),k===void 0&&(k="&"),e=k,t=g,s=new RegExp("\\".concat(t,"\\b"),"g");var q=h.replace(my,""),c=Td(w||g?"".concat(w," ").concat(g," { ").concat(q," }"):q);a.namespace&&(c=ef(c,a.namespace));var u=[];return Ut(c,Rd(f.concat(zd(function(d){return u.push(d)})))),u};return m.hash=i.length?i.reduce(function(h,g){return g.name||ue(15),bt(h,g.name)},Qd).toString():"",m}var yy=new Ys,ki=tf(),qi=$.default.createContext({shouldForwardProp:void 0,styleSheet:yy,stylis:ki}),Sg=qi.Consumer,gy=$.default.createContext(void 0);function Si(){return(0,$.useContext)(qi)}function vy(n){var e=(0,$.useState)(n.stylisPlugins),t=e[0],s=e[1],r=Si().styleSheet,l=(0,$.useMemo)(function(){var i=r;return n.sheet?i=n.sheet:n.target&&(i=i.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(i=i.reconstructWithOptions({useCSSOMInjection:!1})),i},[n.disableCSSOMInjection,n.sheet,n.target,r]),a=(0,$.useMemo)(function(){return tf({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:t})},[n.enableVendorPrefixes,n.namespace,t]);(0,$.useEffect)(function(){(0,$d.default)(t,n.stylisPlugins)||s(n.stylisPlugins)},[n.stylisPlugins]);var o=(0,$.useMemo)(function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:l,stylis:a}},[n.shouldForwardProp,l,a]);return $.default.createElement(qi.Provider,{value:o},$.default.createElement(gy.Provider,{value:a},n.children))}var jy=function(){function n(e,t){var s=this;this.inject=function(r,l){l===void 0&&(l=ki);var a=s.name+l.hash;r.hasNameForId(s.id,a)||r.insertRules(s.id,a,l(s.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ci(this,function(){throw ue(12,String(s.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=ki),this.name+e.hash},n}(),wy=function(n){return n>="A"&&n<="Z"};function Ud(n){for(var e="",t=0;t<n.length;t++){var s=n[t];if(t===1&&s==="-"&&n[0]==="-")return n;wy(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var sf=function(n){return n==null||n===!1||n===""},rf=function(n){var e,t,s=[];for(var r in n){var l=n[r];n.hasOwnProperty(r)&&!sf(l)&&(Array.isArray(l)&&l.isCss||Wt(l)?s.push("".concat(Ud(r),":"),l,";"):Qs(l)?s.push.apply(s,bs(bs(["".concat(r," {")],rf(l),!1),["}"],!1)):s.push("".concat(Ud(r),": ").concat((e=r,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Id||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function Be(n,e,t,s){if(sf(n))return[];if(Pi(n))return[".".concat(n.styledComponentId)];if(Wt(n)){if(!Wt(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var r=n(e);return Be(r,e,t,s)}var l;return n instanceof jy?t?(n.inject(t,s),[n.getName(s)]):[n]:Qs(n)?rf(n):Array.isArray(n)?Array.prototype.concat.apply(Al,n.map(function(a){return Be(a,e,t,s)})):[n.toString()]}function lf(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Wt(t)&&!Pi(t))return!1}return!0}var ky=Yd(Vt),Sy=function(){function n(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&lf(e),this.componentId=t,this.baseHash=bt(ky,t),this.baseStyle=s,Ys.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,s){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ot(r,this.staticRulesId);else{var l=Ml(Be(this.rules,e,t,s)),a=vi(bt(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=s(l,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=ot(r,a),this.staticRulesId=a}else{for(var i=bt(this.baseHash,s.hash),p="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")p+=m;else if(m){var h=Ml(Be(m,e,t,s));i=bt(i,h+f),p+=h}}if(p){var g=vi(i>>>0);t.hasNameForId(this.componentId,g)||t.insertRules(this.componentId,g,s(p,".".concat(g),void 0,this.componentId)),r=ot(r,g)}}return r},n}(),af=$.default.createContext(void 0),xg=af.Consumer;var gi={};function xy(n,e,t){var s=Pi(n),r=n,l=!yi(n),a=e.attrs,o=a===void 0?Al:a,i=e.componentId,p=i===void 0?function(y,S){var x=typeof y!="string"?"sc":Md(y);gi[x]=(gi[x]||0)+1;var j="".concat(x,"-").concat(Qm(Vt+x+gi[x]));return S?"".concat(S,"-").concat(j):j}(e.displayName,e.parentComponentId):i,f=e.displayName,m=f===void 0?function(y){return yi(y)?"styled.".concat(y):"Styled(".concat(Ym(y),")")}(n):f,h=e.displayName&&e.componentId?"".concat(Md(e.displayName),"-").concat(e.componentId):e.componentId||p,g=s&&r.attrs?r.attrs.concat(o).filter(Boolean):o,w=e.shouldForwardProp;if(s&&r.shouldForwardProp){var k=r.shouldForwardProp;if(e.shouldForwardProp){var q=e.shouldForwardProp;w=function(y,S){return k(y,S)&&q(y,S)}}else w=k}var c=new Sy(t,h,s?r.componentStyle:void 0);function u(y,S){return function(x,j,E){var A=x.attrs,N=x.componentStyle,bn=x.defaultProps,Gl=x.foldedComponentIds,mf=x.styledComponentId,yf=x.target,gf=$.default.useContext(af),vf=Si(),Bl=x.shouldForwardProp||vf.shouldForwardProp,Ni=Vm(j,gf,bn)||$t,Xn=function(Zs,Yt,Js){for(var Kt,Ue=on(on({},Yt),{className:void 0,theme:Js}),bl=0;bl<Zs.length;bl+=1){var nr=Wt(Kt=Zs[bl])?Kt(Ue):Kt;for(var he in nr)Ue[he]=he==="className"?ot(Ue[he],nr[he]):he==="style"?on(on({},Ue[he]),nr[he]):nr[he]}return Yt.className&&(Ue.className=ot(Ue.className,Yt.className)),Ue}(A,j,Ni),Xs=Xn.as||yf,Qt={};for(var fe in Xn)Xn[fe]===void 0||fe[0]==="$"||fe==="as"||fe==="theme"&&Xn.theme===Ni||(fe==="forwardedAs"?Qt.as=Xn.forwardedAs:Bl&&!Bl(fe,Xs)||(Qt[fe]=Xn[fe]));var Ti=function(Zs,Yt){var Js=Si(),Kt=Zs.generateAndInjectStyles(Yt,Js.styleSheet,Js.stylis);return Kt}(N,Xn),Ul=ot(Gl,mf);return Ti&&(Ul+=" "+Ti),Xn.className&&(Ul+=" "+Xn.className),Qt[yi(Xs)&&!Hd.has(Xs)?"class":"className"]=Ul,Qt.ref=E,(0,$.createElement)(Xs,Qt)}(d,y,S)}u.displayName=m;var d=$.default.forwardRef(u);return d.attrs=g,d.componentStyle=c,d.displayName=m,d.shouldForwardProp=w,d.foldedComponentIds=s?ot(r.foldedComponentIds,r.styledComponentId):"",d.styledComponentId=h,d.target=s?r.target:n,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=s?function(S){for(var x=[],j=1;j<arguments.length;j++)x[j-1]=arguments[j];for(var E=0,A=x;E<A.length;E++)ji(S,A[E],!0);return S}({},r.defaultProps,y):y}}),Ci(d,function(){return".".concat(d.styledComponentId)}),l&&Jd(d,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function bd(n,e){for(var t=[n[0]],s=0,r=e.length;s<r;s+=1)t.push(e[s],n[s+1]);return t}var Vd=function(n){return Object.assign(n,{isCss:!0})};function _y(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Wt(n)||Qs(n))return Vd(Be(bd(Al,bs([n],e,!0))));var s=n;return e.length===0&&s.length===1&&typeof s[0]=="string"?Be(s):Vd(Be(bd(s,e)))}function xi(n,e,t){if(t===void 0&&(t=$t),!e)throw ue(1,e);var s=function(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return n(e,t,_y.apply(void 0,bs([r],l,!1)))};return s.attrs=function(r){return xi(n,e,on(on({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},s.withConfig=function(r){return xi(n,e,on(on({},t),r))},s}var of=function(n){return xi(xy,n)},Ks=of;Hd.forEach(function(n){Ks[n]=of(n)});var _g=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=lf(e),Ys.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,s,r){var l=r(Ml(Be(this.rules,t,s,r)),""),a=this.componentId+e;s.insertRules(a,a,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,s,r){e>2&&Ys.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,r)},n}();var Eg=function(){function n(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),s=wi(),r=Ml([s&&'nonce="'.concat(s,'"'),"".concat(pe,'="true"'),"".concat(Il,'="').concat(Vt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ue(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ue(2);var s=((t={})[pe]="",t[Il]=Vt,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=wi();return r&&(s.nonce=r),[$.default.createElement("style",on({},s,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ys({isServer:!0}),this.sealed=!1}return n.prototype.collectStyles=function(e){if(this.sealed)throw ue(2);return $.default.createElement(vy,{sheet:this.instance},e)},n.prototype.interleaveWithNodeStream=function(e){throw ue(3)},n}();var Pg="__sc-".concat(pe,"__");var Ey=Ks.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    z-index: 1000;
    background-color: #F9F9f9;
    border-bottom: 1px solid #DDD;
    ul {
        display: flex;
        list-style: none;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        li {
            margin: 0 10px;
            a {
                text-decoration: none;
                color: #666;
                font-size: 16px;
            }
        }
    }
`;function Py(){return ce.default.createElement(Ey,null,ce.default.createElement("ul",null,ce.default.createElement("li",null,ce.default.createElement("a",{href:"./"},"\u9996\u9875")),ce.default.createElement("li",null,ce.default.createElement("a",{href:"./go.html"},"Go\u8BED\u8A00")),ce.default.createElement("li",null,ce.default.createElement("a",{href:"./markdown.html"},"Markdown"))))}var uf=Py;var Ht=ye(ge());function Cy(n){let[e,t]=(0,Ht.useState)(!1);return(0,Ht.useEffect)(()=>{t(!0)},[]),Ht.default.createElement("div",{style:{display:e?"":"none"}},n.children)}var pf=Cy;var qy=Ks.div`
  display: flex;
  background-color: #f5f5f5;
  margin-top: 62px;
  div.menu {
    width: 260px;
    flex: 0 0 auto;
    height: 100vh;
    ul {
      border-right: 1px solid #ccc;
      position: fixed;
      width: 260px;
      left: 0;
      list-style: none;
      margin: 0;  
      padding: 0;
      li {
        margin: 0;
        padding: 10px;
        border-bottom: 1px solid #efebeb;
        font-size: 14px;
        display: flex;
        span.icon {
          width: 20px;
          height: 20px;
          display: block;
          margin-right: 5px;
          background-image: url("./img/icon.gif");
        }
        a {
          display: block;
          color: #333;
          text-decoration: none;
        }
      }
    }
  }
  div.cnt {
    flex: 1 1 auto;
    background-color: #fff;
    padding: 0 20px;
    /* 引用块的样式 */
    blockquote {
        display: block;
        padding-left: 16px;
        padding-right: 16px;
        margin: 0 0 24px;
        border-left: 8px solid #dddfe4;
        background-color: #eef0f4;
        overflow: auto;
        word-break: normal;
    }
    /* 表格 */
    table {
      border-spacing: 0;
      thead tr th {
        border-bottom: 1px solid #ccc;
        padding: 10px;
        text-align: left;
      }
      tbody tr td {
        border-bottom: 1px solid #ccc;
        padding: 10px;
      }
    }
  }
`;function Ny(n){return Fl.default.createElement(pf,null,Fl.default.createElement(uf,null),Fl.default.createElement(qy,null,n.children))}var cf=Ny;function Ty(n){return de.default.createElement(cf,null,de.default.createElement("div",{className:"menu"},de.default.createElement("ul",null,de.default.createElement("li",null,de.default.createElement("span",{className:"icon"}),de.default.createElement("a",{href:"/go.html"},"Go\u8BED\u8A00\u57FA\u7840")))),de.default.createElement("div",{className:"cnt"},de.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.serData.gobase}})))}var df=Ty;var Oy={title:"go\u57FA\u7840",serData:{gobase:`<h3>\u7B80\u4ECB</h3>
<blockquote>
<p>Go\u662FGoogle\u516C\u53F82009\u5E7411\u6708\u6B63\u5F0F\u5BF9\u5916\u516C\u5F00\u7684\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\u3002</p>
<p>Go\u8BED\u8A00\u7684\u63A8\u51FA\uFF0C\u65E8\u5728\u4E0D\u635F\u5931\u5E94\u7528\u7A0B\u5E8F\u6027\u80FD\u7684\u60C5\u51B5\u4E0B\u964D\u4F4E\u4EE3\u7801\u7684\u590D\u6742\u6027\uFF0C\u5177\u6709\u201C\u90E8\u7F72\u7B80\u5355\u3001\u5E76\u53D1\u6027\u597D\u3001\u8BED\u8A00\u8BBE\u8BA1\u826F\u597D\u3001\u6267\u884C\u6027\u80FD\u597D\u201D\u7B49\u4F18\u52BF\uFF0C\u76EE\u524D\u56FD\u5185\u8BF8\u591A IT \u516C\u53F8\u5747\u5DF2\u91C7\u7528Go\u8BED\u8A00\u5F00\u53D1\u9879\u76EE\u3002</p>
</blockquote>
<h3>\u5B89\u88C5</h3>
<blockquote>
<p>Go\u8BED\u8A00\u7ECF\u8FC7\u591A\u5E74\u7684\u53D1\u5C55\uFF0C\u73B0\u5728\u5B89\u88C5\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EF\u76F4\u63A5\u4ECE\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u3002</p>
</blockquote>
<h4>\u4E0B\u8F7D\u5B89\u88C5</h4>
<p>\u5B98\u7F51\u4E0B\u8F7D\u5730\u5740\uFF1A <a href="https://go.dev/dl/">https://go.dev/dl/</a></p>
<p>\u56FD\u5185\u4E0B\u8F7D\u5730\u5740\uFF1A <a href="https://golang.google.cn/dl/">https://golang.google.cn/dl/</a></p>
<p>\u6839\u636E\u81EA\u5DF2\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684\u7248\u672C\u5B89\u88C5\u5373\u53EF\u3002</p>
<p>\u4F8B\u5982\uFF1A</p>
<p>Windows\uFF0C\u4E0B\u8F7D Microsoft Windows <a href="https://golang.google.cn/dl/go1.21.4.windows-amd64.msi">https://golang.google.cn/dl/go1.21.4.windows-amd64.msi</a></p>
<p>Apple macOS(x86-64)\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684 <a href="https://golang.google.cn/dl/go1.21.4.darwin-amd64.pkg">https://golang.google.cn/dl/go1.21.4.darwin-amd64.pkg</a></p>
<h4>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h4>
<p>vim ~/.bash_profile</p>
<pre><code class="hljs">export GOPATH=/Users/xjz/go # go\u7B2C\u4E09\u65B9\u5305\u76EE\u5F55
export GOROOT=/usr/local/go # go\u5B89\u88C5\u76EE\u5F55
export GO111MODULE=on  # go modules \u662F golang 1.11 \u65B0\u52A0\u7684\u7279\u6027, \u4E3A\u914D\u5408\u4E03\u725B\u56FD\u5185\u955C\u50CF\u5EFA\u8BAE\u5F00\u542F
export GOPROXY=https://goproxy.cn,direct # \u5F00\u542F\u7B2C\u4E09\u65B9\u5305\u56FD\u5185\u955C\u50CF\u5730\u5740
export PATH=$PATH:$GOPATH/bin # \u7B2C\u4E09\u65B9\u5168\u5C40\u547D\u4EE4\uFF0C\u53EF\u4E0D\u8BBE\u7F6E
</code></pre>
<p>source ~/.bash_profile</p>
<h3>Go\u5E38\u7528\u547D\u4EE4</h3>
<h4>\u5E38\u7528\u547D\u4EE4</h4>
<table>
<thead>
<tr>
<th>\u547D\u4EE4</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>go bug</td>
<td>\u542F\u52A8\u4E00\u4E2A\u7528\u4E8E\u62A5\u544Abug\u7684\u5DE5\u5177\u3002</td>
</tr>
<tr>
<td>go build</td>
<td>\u7F16\u8BD1Go\u7A0B\u5E8F\u5305\u53CA\u5176\u4F9D\u8D56\u9879\u3002</td>
</tr>
<tr>
<td>go clean</td>
<td>\u5220\u9664\u7F16\u8BD1\u751F\u6210\u7684\u5BF9\u8C61\u6587\u4EF6\u548C\u7F13\u5B58\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>go doc</td>
<td>\u663E\u793A\u6709\u5173\u5305\u6216\u7B26\u53F7\u7684\u6587\u6863\u3002</td>
</tr>
<tr>
<td>go env</td>
<td>\u6253\u5370\u6709\u5173Go\u73AF\u5883\u7684\u4FE1\u606F\u3002</td>
</tr>
<tr>
<td>go fix</td>
<td>\u66F4\u65B0\u5305\u4EE5\u4F7F\u7528\u65B0\u7684API\u3002</td>
</tr>
<tr>
<td>go fmt</td>
<td>\u4F7F\u7528gofmt\u91CD\u65B0\u683C\u5F0F\u5316Go\u5305\u7684\u6E90\u4EE3\u7801\u3002</td>
</tr>
<tr>
<td>go generate</td>
<td>\u901A\u8FC7\u5904\u7406\u6E90\u4EE3\u7801\u6765\u751F\u6210Go\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>go get</td>
<td>\u5C06\u4F9D\u8D56\u9879\u6DFB\u52A0\u5230\u5F53\u524D\u6A21\u5757\u5E76\u5B89\u88C5\u5B83\u4EEC\u3002</td>
</tr>
<tr>
<td>go install</td>
<td>\u7F16\u8BD1\u5E76\u5B89\u88C5\u5305\u53CA\u5176\u4F9D\u8D56\u9879\u3002</td>
</tr>
<tr>
<td>go list</td>
<td>\u5217\u51FA\u5305\u6216\u6A21\u5757\u7684\u4FE1\u606F\u3002</td>
</tr>
<tr>
<td>go mod</td>
<td>\u7528\u4E8E\u6A21\u5757\u7EF4\u62A4,\u5305\u62EC\u521D\u59CB\u5316\u6A21\u5757\u3001\u6DFB\u52A0\u548C\u66F4\u65B0\u4F9D\u8D56\u9879\u7B49\u3002</td>
</tr>
<tr>
<td>go work</td>
<td>\u7528\u4E8E\u5DE5\u4F5C\u533A\u7EF4\u62A4,\u4F8B\u5982\u67E5\u770B\u3001\u6E05\u7406\u6216\u6253\u5370\u5DE5\u4F5C\u533A\u4FE1\u606F\u3002</td>
</tr>
<tr>
<td>go run</td>
<td>\u7F16\u8BD1\u5E76\u8FD0\u884CGo\u7A0B\u5E8F\u3002</td>
</tr>
<tr>
<td>go test</td>
<td>\u8FD0\u884C\u5305\u7684\u6D4B\u8BD5\u3002</td>
</tr>
<tr>
<td>go tool</td>
<td>\u8FD0\u884C\u6307\u5B9A\u7684Go\u5DE5\u5177\u3002</td>
</tr>
<tr>
<td>go version</td>
<td>\u6253\u5370Go\u7684\u7248\u672C\u4FE1\u606F\u3002</td>
</tr>
<tr>
<td>go vet</td>
<td>\u68C0\u67E5 Go \u6E90\u7801\u5E76\u62A5\u544A\u53EF\u7591\u7684\u9519\u8BEF\u3002</td>
</tr>
</tbody>
</table>
<h4>go mod</h4>
<p>go mod\u662FGo\u8BED\u8A00\u7684\u6A21\u5757\u7BA1\u7406\u5DE5\u5177\uFF0Cgo mod\u5FC5\u987B\u5C06golang\u5347\u7EA7\u52301.11\u4EE5\u4E0A\u7248\u672C\uFF0C\u914D\u7F6E\u5F00\u542Fgo mod\uFF0Cgo\u8BED\u8A001.16\u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u5F00\u542Fgo mod\u529F\u80FD\u3002</p>
<pre><code class="hljs">go env -w GOBIN=/usr/local/go/bin              #\u914D\u7F6E\u4E0Bgo bin
go env -w GO111MODULE=on                       #\u5F00\u542Fgo mod
go env -w GOPROXY=https://goproxy.cn,direct    #\u4E03\u725B\u4E91\u4EE3\u7406
</code></pre>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>download</td>
<td>download modules to local cache\uFF08\u4E0B\u8F7D\u4F9D\u8D56\u5305\uFF09</td>
</tr>
<tr>
<td>edit</td>
<td>edit go.mod from tools or scripts (\u7F16\u8F91go.mod)</td>
</tr>
<tr>
<td>graph</td>
<td>print module requirement graph\uFF08\u6253\u5370\u6A21\u5757\u4F9D\u8D56\u56FE)</td>
</tr>
<tr>
<td>init</td>
<td>initialize new module in current directory (\u5728\u5F53\u524D\u76EE\u5F55\u521D\u59CB\u5316mod)</td>
</tr>
<tr>
<td>tidy</td>
<td>add missing and remove unused modules\uFF08\u62C9\u53D6\u7F3A\u5C11\u7684\u6A21\u5757\uFF0C\u79FB\u9664\u4E0D\u7528\u7684\u6A21\u5757\uFF09</td>
</tr>
<tr>
<td>vendor</td>
<td>make vendored copy of dependencies\uFF08\u5C06\u4F9D\u8D56\u590D\u5236\u5230vendor\u4E0B\uFF09</td>
</tr>
<tr>
<td>verify</td>
<td>verify dependencies have expected content\uFF08\u9A8C\u8BC1\u4F9D\u8D56\u662F\u5426\u6B63\u786E\uFF09</td>
</tr>
<tr>
<td>why</td>
<td>explain why packages or modules are needed\uFF08\u89E3\u91CA\u4E3A\u4EC0\u4E48\u9700\u8981\u4F9D\u8D56\uFF09</td>
</tr>
</tbody>
</table>
<p>\u6BD4\u8F83\u5E38\u7528\u7684\u662Finit,tidy,edit</p>
<h4>go run</h4>
<blockquote>
<p>\u4E13\u95E8\u7528\u6765\u8FD0\u884C\u547D\u4EE4\u6E90\u7801\u6587\u4EF6\u7684\u547D\u4EE4\uFF0C<strong>\u4E0D\u662F\u7528\u6765\u8FD0\u884C\u6240\u6709go\u6E90\u7801\u7684\u6587\u4EF6\u7684</strong>\u3002</p>
<p>go run \u547D\u4EE4\u53EA\u80FD\u63A5\u53D7\u4E00\u4E2A\u547D\u4EE4\u6E90\u7801\u6587\u4EF6\u4EE5\u53CA\u82E5\u5E72\u4E2A\u5E93\u6E90\u7801\u6587\u4EF6(\u5FC5\u987B\u540C\u5C5E\u4E8Emain\u5305)\u4F5C\u4E3A\u6587\u4EF6\u53C2\u6570\uFF0C\u4E14<strong>\u4E0D\u80FD\u63A5\u53D7\u6D4B\u8BD5\u6E90\u7801\u6587\u4EF6</strong>\u3002\u5B83\u5728\u6267\u884C\u65F6\u4F1A\u68C0\u67E5\u6E90\u7801\u6587\u4EF6\u7684\u7C7B\u578B\u3002\u5982\u679C\u53C2\u6570\u4E2D\u6709\u591A\u4E2A\u6216\u8005\u6CA1\u6709\u547D\u4EE4\u6E90\u7801\u6587\u4EF6\uFF0C\u90A3\u4E48go run\u547D\u4EE4\u5C31\u53EA\u4F1A\u6253\u5370\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u5E76\u9000\u51FA\uFF0C\u800C\u4E0D\u4F1A\u7EE7\u7EED\u6267\u884C\u3002</p>
</blockquote>
<p>\u7528\u4E8E\u7F16\u8BD1\u5E76\u8FD0\u884C Go \u6E90\u4EE3\u7801\u6587\u4EF6\u3002\u5B83\u662F\u4E00\u4E2A\u65B9\u4FBF\u7684\u5DE5\u5177\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0D\u9700\u8981\u663E\u5F0F\u6784\u5EFA\u53EF\u6267\u884C\u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\u76F4\u63A5\u8FD0\u884C Go \u7A0B\u5E8F\u3002\u5E38\u7528\u7684\u53C2\u6570\u5305\u62EC:</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-n</td>
<td>\u6253\u5370\u6267\u884C\u7684\u547D\u4EE4,\u4F46\u4E0D\u6267\u884C\u3002</td>
</tr>
<tr>
<td>-x</td>
<td>\u6253\u5370\u6267\u884C\u7684\u547D\u4EE4\u53CA\u53C2\u6570\u3002</td>
</tr>
<tr>
<td>-race</td>
<td>\u542F\u7528\u6570\u636E\u7ADE\u4E89\u68C0\u6D4B\u3002</td>
</tr>
<tr>
<td>-gcflags</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED9\u7F16\u8BD1\u5668,\u5982\u4F18\u5316\u7EA7\u522B\u7B49\u3002</td>
</tr>
<tr>
<td>-buildmode</td>
<td>\u6307\u5B9A\u7F16\u8BD1\u6A21\u5F0F,\u5982\u5171\u4EAB\u5E93\u6216\u63D2\u4EF6\u7B49\u3002</td>
</tr>
<tr>
<td>-ldflags</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED9\u94FE\u63A5\u5668\u3002</td>
</tr>
<tr>
<td>-trimpath</td>
<td>\u53BB\u9664\u8F93\u51FA\u4E2D\u7684\u6587\u4EF6\u8DEF\u5F84\u4FE1\u606F\u3002</td>
</tr>
<tr>
<td>-memprofile</td>
<td>\u5199\u5165\u5185\u5B58\u6982\u8981\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>-cpuprofile</td>
<td>\u5199\u5165CPU\u6982\u8981\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>-blockprofile</td>
<td>\u5199\u5165\u963B\u585E\u6982\u8981\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>-timeout</td>
<td>\u6267\u884C\u8D85\u65F6\u65F6\u95F4\u3002</td>
</tr>
<tr>
<td>-args</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED9\u7A0B\u5E8F,\u653E\u5728\u6700\u540E\u3002</td>
</tr>
</tbody>
</table>
<h4>go build</h4>
<p>Go \u662F\u5F3A\u7C7B\u578B\u7F16\u8BD1\u578B\u8BED\u8A00\uFF0C\u56E0\u6B64\u7F16\u8BD1\u65F6\u4F1A\u5C06\u6240\u6709\u4F9D\u8D56\u7F16\u8BD1\u8FDB\u540C\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-o</td>
<td>\u6307\u5B9A\u8F93\u51FA\u7684\u6587\u4EF6\u540D\uFF0C\u53EF\u4EE5\u5E26\u4E0A\u8DEF\u5F84\uFF0C\u4F8B\u5982 go build -o a/b/c</td>
</tr>
<tr>
<td>-i</td>
<td>\u5B89\u88C5\u76F8\u5E94\u7684\u5305\uFF0C\u7F16\u8BD1+go install</td>
</tr>
<tr>
<td>-a</td>
<td>\u66F4\u65B0\u5168\u90E8\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u5305\u7684\uFF0C\u4F46\u662F\u5BF9\u6807\u51C6\u5305\u4E0D\u9002\u7528</td>
</tr>
<tr>
<td>-n</td>
<td>\u628A\u9700\u8981\u6267\u884C\u7684\u7F16\u8BD1\u547D\u4EE4\u6253\u5370\u51FA\u6765\uFF0C\u4F46\u662F\u4E0D\u6267\u884C\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u77E5\u9053\u5E95\u5C42\u662F\u5982\u4F55\u8FD0\u884C\u7684</td>
</tr>
<tr>
<td>-p n</td>
<td>\u6307\u5B9A\u53EF\u4EE5\u5E76\u884C\u53EF\u8FD0\u884C\u7684\u7F16\u8BD1\u6570\u76EE\uFF0C\u9ED8\u8BA4\u662FCPU\u6570\u76EE</td>
</tr>
<tr>
<td>-race</td>
<td>\u5F00\u542F\u7F16\u8BD1\u7684\u65F6\u5019\u81EA\u52A8\u68C0\u6D4B\u6570\u636E\u7ADE\u4E89\u7684\u60C5\u51B5\uFF0C\u76EE\u524D\u53EA\u652F\u630164\u4F4D\u7684\u673A\u5668</td>
</tr>
<tr>
<td>-v</td>
<td>\u6253\u5370\u51FA\u6765\u6B63\u5728\u7F16\u8BD1\u7684\u5305\u540D</td>
</tr>
<tr>
<td>-work</td>
<td>\u6253\u5370\u51FA\u6765\u7F16\u8BD1\u65F6\u5019\u7684\u4E34\u65F6\u6587\u4EF6\u5939\u540D\u79F0\uFF0C\u5E76\u4E14\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u7684\u8BDD\u5C31\u4E0D\u8981\u5220\u9664</td>
</tr>
<tr>
<td>-x</td>
<td>\u6253\u5370\u51FA\u6765\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u5176\u5B9E\u5C31\u662F\u548C-n\u7684\u7ED3\u679C\u7C7B\u4F3C\uFF0C\u53EA\u662F\u8FD9\u4E2A\u4F1A\u6267\u884C</td>
</tr>
<tr>
<td>-ccflags 'arg list'</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED95c, 6c, 8c \u8C03\u7528</td>
</tr>
<tr>
<td>-compiler name</td>
<td>\u6307\u5B9A\u76F8\u5E94\u7684\u7F16\u8BD1\u5668\uFF0Cgccgo\u8FD8\u662Fgc</td>
</tr>
<tr>
<td>-gccgoflags 'arg list'</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED9gccgo\u7F16\u8BD1\u8FDE\u63A5\u8C03\u7528</td>
</tr>
<tr>
<td>-gcflags 'arg list'</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED95g, 6g, 8g \u8C03\u7528</td>
</tr>
<tr>
<td>-installsuffix suffix</td>
<td>\u4E3A\u4E86\u548C\u9ED8\u8BA4\u7684\u5B89\u88C5\u5305\u533A\u522B\u5F00\u6765\uFF0C\u91C7\u7528\u8FD9\u4E2A\u524D\u7F00\u6765\u91CD\u65B0\u5B89\u88C5\u90A3\u4E9B\u4F9D\u8D56\u7684\u5305\uFF0C-race\u7684\u65F6\u5019\u9ED8\u8BA4\u5DF2\u7ECF\u662F-installsuffix race,\u5927\u5BB6\u53EF\u4EE5\u901A\u8FC7-n\u547D\u4EE4\u6765\u9A8C\u8BC1</td>
</tr>
<tr>
<td>-ldflags 'flag list'</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED95l, 6l, 8l \u8C03\u7528</td>
</tr>
<tr>
<td>-tags 'tag list'</td>
<td>\u8BBE\u7F6E\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u53EF\u4EE5\u9002\u914D\u7684\u90A3\u4E9Btag\uFF0C\u8BE6\u7EC6\u7684tag\u9650\u5236\u53C2\u8003\u91CC\u9762\u7684 Build Constraints</td>
</tr>
</tbody>
</table>
<h4>go test</h4>
<p>go test \u547D\u4EE4\u7528\u4E8E\u8FD0\u884CGo\u7A0B\u5E8F\u5305\u4E2D\u7684\u6D4B\u8BD5\u3002Go\u7684\u6D4B\u8BD5\u662F\u901A\u8FC7\u5728\u4E0E\u88AB\u6D4B\u8BD5\u7684\u4EE3\u7801\u6587\u4EF6\u76F8\u540C\u76EE\u5F55\u4E0B\u7684 _test.go \u6587\u4EF6\u4E2D\u7F16\u5199\u6D4B\u8BD5\u51FD\u6570\u6765\u5B8C\u6210\u7684\u3002\u8FD9\u91CC\u4ECB\u7ECD\u51E0\u4E2A\u5E38\u7528\u7684\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-bench regexp</td>
<td>\u6267\u884C\u76F8\u5E94\u7684benchmarks\uFF0C\u4F8B\u5982 -bench=.</td>
</tr>
<tr>
<td>-cover</td>
<td>\u5F00\u542F\u6D4B\u8BD5\u8986\u76D6\u7387</td>
</tr>
<tr>
<td>-run regexp</td>
<td>\u53EA\u8FD0\u884Cregexp\u5339\u914D\u7684\u51FD\u6570\uFF0C\u4F8B\u5982 -run=Array \u90A3\u4E48\u5C31\u6267\u884C\u5305\u542B\u6709Array\u5F00\u5934\u7684\u51FD\u6570</td>
</tr>
<tr>
<td>-v</td>
<td>\u663E\u793A\u6D4B\u8BD5\u7684\u8BE6\u7EC6\u547D\u4EE4</td>
</tr>
</tbody>
</table>
<h4>go vet</h4>
<p>go vet \u662F Go \u7F16\u7A0B\u8BED\u8A00\u7684\u4E00\u4E2A\u9759\u6001\u5206\u6790\u5DE5\u5177\uFF0C\u7528\u4E8E\u68C0\u67E5 Go \u4EE3\u7801\u4E2D\u53EF\u80FD\u5305\u542B\u7684\u6F5C\u5728\u9519\u8BEF\u3001\u4E0D\u89C4\u8303\u7684\u4EE3\u7801\u548C\u5E38\u89C1\u95EE\u9898\u3002\u5B83\u7684\u4E3B\u8981\u76EE\u6807\u662F\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u8BC6\u522B\u548C\u4FEE\u590D\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u8FD0\u884C\u65F6\u9519\u8BEF\u7684\u95EE\u9898\uFF0C\u4EE5\u63D0\u9AD8\u4EE3\u7801\u7684\u8D28\u91CF\u548C\u53EF\u9760\u6027\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-all</td>
<td>\u6267\u884C\u6240\u6709\u53EF\u7528\u7684 go vet \u68C0\u67E5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cgo vet \u53EA\u8FD0\u884C\u4E00\u4E9B\u5E38\u89C1\u7684\u68C0\u67E5\uFF0C\u4F46\u4F7F\u7528 -all \u6807\u5FD7\u53EF\u4EE5\u542F\u7528\u6240\u6709\u68C0\u67E5\u3002</td>
</tr>
<tr>
<td>-shadow</td>
<td>\u68C0\u67E5\u4EE3\u7801\u4E2D\u7684\u53D8\u91CF\u9634\u5F71\u95EE\u9898\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B\u5C40\u90E8\u53D8\u91CF\u8986\u76D6\u5916\u90E8\u53D8\u91CF\u7684\u60C5\u51B5\u3002</td>
</tr>
<tr>
<td>-printfuncs list</td>
<td>\u81EA\u5B9A\u4E49 Printf \u6837\u5F0F\u51FD\u6570\u7684\u68C0\u67E5\u3002\u60A8\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u51FD\u6570\u5217\u8868\uFF0Cgo vet \u5C06\u68C0\u67E5\u662F\u5426\u6B63\u786E\u4F7F\u7528\u4E86\u8FD9\u4E9B\u51FD\u6570\u6765\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u3002</td>
</tr>
<tr>
<td>-composites</td>
<td>\u68C0\u67E5\u4F7F\u7528\u590D\u5408\u6587\u5B57\uFF08composite literals\uFF09\u65F6\u7684\u95EE\u9898\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B\u590D\u5408\u6587\u5B57\u7684\u4F7F\u7528\u662F\u5426\u7B26\u5408\u89C4\u8303\u3002</td>
</tr>
<tr>
<td>-copylocks</td>
<td>\u68C0\u67E5\u590D\u5236\u9501\u7684\u95EE\u9898\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B\u4EE3\u7801\u4E2D\u662F\u5426\u5B58\u5728\u590D\u5236\u9501\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u662F\u5426\u6B63\u786E\u4F7F\u7528\u3002</td>
</tr>
<tr>
<td>-lostcancel</td>
<td>\u68C0\u67E5\u4E22\u5931\u7684\u4E0A\u4E0B\u6587\u53D6\u6D88\u95EE\u9898\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B\u4EE3\u7801\u4E2D\u662F\u5426\u5B58\u5728\u672A\u6B63\u786E\u5904\u7406\u7684\u4E0A\u4E0B\u6587\u53D6\u6D88\u3002</td>
</tr>
<tr>
<td>-methods</td>
<td>\u68C0\u67E5\u63A5\u53E3\u65B9\u6CD5\u95EE\u9898\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B\u63A5\u53E3\u662F\u5426\u88AB\u6B63\u786E\u5B9E\u73B0\u3002</td>
</tr>
<tr>
<td>-printf</td>
<td>\u68C0\u67E5\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u95EE\u9898\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B Printf \u6837\u5F0F\u7684\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u662F\u5426\u6B63\u786E\u5339\u914D\u53C2\u6570\u3002</td>
</tr>
<tr>
<td>-unreachable</td>
<td>\u68C0\u67E5\u4E0D\u53EF\u8FBE\u4EE3\u7801\u95EE\u9898\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B\u4E0D\u4F1A\u88AB\u6267\u884C\u7684\u4EE3\u7801\u5757\u3002</td>
</tr>
<tr>
<td>-shadowstrict</td>
<td>\u542F\u7528\u66F4\u4E25\u683C\u7684\u53D8\u91CF\u9634\u5F71\u68C0\u67E5\u3002\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u68C0\u6D4B\u66F4\u591A\u7684\u53D8\u91CF\u9634\u5F71\u60C5\u51B5\u3002</td>
</tr>
</tbody>
</table>
<h4>go clean</h4>
<p>\u7528\u4E8E\u6E05\u7406\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u751F\u6210\u7684\u4E34\u65F6\u6587\u4EF6\u548C\u6784\u5EFA\u7F13\u5B58\u3002\u5B83\u6709\u52A9\u4E8E\u786E\u4FDD\u9879\u76EE\u5904\u4E8E\u5E72\u51C0\u7684\u72B6\u6001\uFF0C\u5220\u9664\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u751F\u6210\u7684\u4E2D\u95F4\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u91CD\u65B0\u6784\u5EFA\u9879\u76EE\u65F6\u4E0D\u4F1A\u53D7\u5230\u65E7\u6587\u4EF6\u7684\u5F71\u54CD\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-i</td>
<td>\u6E05\u9664\u5173\u8054\u7684\u5B89\u88C5\u7684\u5305\u548C\u53EF\u8FD0\u884C\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u901A\u8FC7go install\u5B89\u88C5\u7684\u6587\u4EF6</td>
</tr>
<tr>
<td>-n</td>
<td>\u628A\u9700\u8981\u6267\u884C\u7684\u6E05\u9664\u547D\u4EE4\u6253\u5370\u51FA\u6765\uFF0C\u4F46\u662F\u4E0D\u6267\u884C\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u77E5\u9053\u5E95\u5C42\u662F\u5982\u4F55\u8FD0\u884C\u7684</td>
</tr>
<tr>
<td>-r</td>
<td>\u5FAA\u73AF\u7684\u6E05\u9664\u5728import\u4E2D\u5F15\u5165\u7684\u5305</td>
</tr>
<tr>
<td>-x</td>
<td>\u6253\u5370\u51FA\u6765\u6267\u884C\u7684\u8BE6\u7EC6\u547D\u4EE4\uFF0C\u663E\u793A go clean \u6267\u884C\u7684\u6BCF\u4E2A\u6B65\u9AA4\u3002</td>
</tr>
<tr>
<td>-testcache</td>
<td>\u4F7F\u7528 -testcache \u6807\u5FD7\u6765\u6E05\u9664\u6D4B\u8BD5\u7F13\u5B58\u3002\u8FD9\u5C06\u5220\u9664\u4E0E\u6D4B\u8BD5\u76F8\u5173\u7684\u7F13\u5B58\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>-modcache</td>
<td>\u4F7F\u7528 -modcache \u6807\u5FD7\u6765\u6E05\u9664\u6A21\u5757\u7F13\u5B58\u3002\u8FD9\u5C06\u5220\u9664\u6A21\u5757\u4F9D\u8D56\u9879\u7684\u7F13\u5B58\u6587\u4EF6\u3002</td>
</tr>
</tbody>
</table>
<h4>go fmt</h4>
<p>\u7528\u4E8E\u683C\u5F0F\u5316\u6E90\u4EE3\u7801\u6587\u4EF6\uFF0C\u4EE5\u786E\u4FDD\u5B83\u4EEC\u7B26\u5408 Go \u8BED\u8A00\u7684\u7F16\u7801\u89C4\u8303\u548C\u683C\u5F0F\u5316\u7EA6\u5B9A\u3002go fmt \u547D\u4EE4\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4F7F\u4EE3\u7801\u5728\u4E0D\u540C\u9879\u76EE\u548C\u56E2\u961F\u4E2D\u4FDD\u6301\u4E00\u81F4\u7684\u98CE\u683C\uFF0C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-l</td>
<td>\u663E\u793A\u90A3\u4E9B\u9700\u8981\u683C\u5F0F\u5316\u7684\u6587\u4EF6</td>
</tr>
<tr>
<td>-w</td>
<td>\u628A\u6539\u5199\u540E\u7684\u5185\u5BB9\u76F4\u63A5\u5199\u5165\u5230\u6587\u4EF6\u4E2D\uFF0C\u800C\u4E0D\u662F\u4F5C\u4E3A\u7ED3\u679C\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\u3002</td>
</tr>
<tr>
<td>-r</td>
<td>\u6DFB\u52A0\u5F62\u5982\u201Ca[b:len(a)] -&gt; a[b:]\u201D\u7684\u91CD\u5199\u89C4\u5219\uFF0C\u65B9\u4FBF\u505A\u6279\u91CF\u66FF\u6362</td>
</tr>
<tr>
<td>-s</td>
<td>\u7B80\u5316\u6587\u4EF6\u4E2D\u7684\u4EE3\u7801</td>
</tr>
<tr>
<td>-d</td>
<td>\u663E\u793A\u683C\u5F0F\u5316\u524D\u540E\u7684diff\u800C\u4E0D\u662F\u5199\u5165\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662Ffalse</td>
</tr>
<tr>
<td>-e</td>
<td>\u6253\u5370\u6240\u6709\u7684\u8BED\u6CD5\u9519\u8BEF\u5230\u6807\u51C6\u8F93\u51FA\u3002\u5982\u679C\u4E0D\u4F7F\u7528\u6B64\u6807\u8BB0\uFF0C\u5219\u53EA\u4F1A\u6253\u5370\u4E0D\u540C\u884C\u7684\u524D10\u4E2A\u9519\u8BEF\u3002</td>
</tr>
<tr>
<td>-cpuprofile</td>
<td>\u652F\u6301\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u5199\u5165\u76F8\u5E94\u7684cpufile\u5230\u6307\u5B9A\u7684\u6587\u4EF6</td>
</tr>
</tbody>
</table>
<h4>go get</h4>
<p>\u7528\u4E8E\u4E0B\u8F7D\u3001\u5B89\u88C5\u548C\u66F4\u65B0Go\u8BED\u8A00\u5305(\u6A21\u5757)\u4EE5\u53CA\u5B83\u4EEC\u7684\u4F9D\u8010\u9879\u3002\u8FD9\u4E2A\u547D\u4EE4\u901A\u5E38\u7528\u4E8E\u83B7\u53D6\u5916\u90E8\u5305\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-d</td>
<td>\u53EA\u4E0B\u8F7D\u4E0D\u5B89\u88C5</td>
</tr>
<tr>
<td>-f</td>
<td>\u53EA\u6709\u5728\u5305\u542B\u4E86-u\u53C2\u6570\u7684\u65F6\u5019\u624D\u6709\u6548\uFF0C\u4E0D\u8BA9-u\u53BB\u9A8C\u8BC1import\u4E2D\u7684\u6BCF\u4E00\u4E2A\u90FD\u5DF2\u7ECF\u83B7\u53D6\u4E86\uFF0C\u8FD9\u5BF9\u4E8E\u672C\u5730fork\u7684\u5305\u7279\u522B\u6709\u7528</td>
</tr>
<tr>
<td>-fix</td>
<td>\u5728\u83B7\u53D6\u6E90\u7801\u4E4B\u540E\u5148\u8FD0\u884Cfix\uFF0C\u7136\u540E\u518D\u53BB\u505A\u5176\u4ED6\u7684\u4E8B\u60C5</td>
</tr>
<tr>
<td>-t</td>
<td>\u540C\u65F6\u4E5F\u4E0B\u8F7D\u9700\u8981\u4E3A\u8FD0\u884C\u6D4B\u8BD5\u6240\u9700\u8981\u7684\u5305</td>
</tr>
<tr>
<td>-u</td>
<td>\u5F3A\u5236\u4F7F\u7528\u7F51\u7EDC\u53BB\u66F4\u65B0\u5305\u548C\u5B83\u7684\u4F9D\u8D56\u5305</td>
</tr>
<tr>
<td>-v</td>
<td>\u663E\u793A\u6267\u884C\u7684\u547D\u4EE4</td>
</tr>
</tbody>
</table>
<h4>go install</h4>
<p>\u7528\u4E8E\u7F16\u8BD1\u548C\u5B89\u88C5Go\u5305\u6216\u7A0B\u5E8F\u3002\u5F53\u8FD0\u884Cgo install\u65F6\uFF0C\u5B83\u4F1A\u7F16\u8BD1\u5F53\u524D\u76EE\u5F55\u4E2D\u7684Go\u4EE3\u7801\uFF0C\u5E76\u5C06\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u53EF\u6267\u884C\u6587\u4EF6\u653E\u7F6E\u5728\u4F60\u7684Go\u5DE5\u4F5C\u7A7A\u95F4bin\u76EE\u5F55\u4E2D(\u901A\u5E38\u4F4D\u4E8EGOPATH\u4E2D)\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>-i</td>
<td>\u5B89\u88C5\u5230GOBIN\u73AF\u5883\u53D8\u91CF\u6307\u5B9A\u7684\u76EE\u5F55,\u9ED8\u8BA4\u4E3AGOPATH/bin\u3002</td>
</tr>
<tr>
<td>-n</td>
<td>\u6253\u5370\u5C06\u8981\u6267\u884C\u7684\u547D\u4EE4,\u4F46\u4E0D\u6267\u884C\u3002</td>
</tr>
<tr>
<td>-v</td>
<td>\u663E\u793A\u6267\u884C\u7684\u547D\u4EE4\u3002</td>
</tr>
<tr>
<td>-x</td>
<td>\u6253\u5370\u6267\u884C\u7684\u547D\u4EE4\u53CA\u5176\u53C2\u6570\u3002</td>
</tr>
<tr>
<td>-work</td>
<td>\u6253\u5370\u4E34\u65F6\u5DE5\u4F5C\u76EE\u5F55\u7684\u540D\u79F0,\u7136\u540E\u9000\u51FA\u3002</td>
</tr>
<tr>
<td>-pcgo</td>
<td>\u9488\u5BF9cgo enabled\u7684\u5305,\u8C03\u7528gcc\u6765\u7F16\u8BD1\u3002</td>
</tr>
<tr>
<td>-pkgdir</td>
<td>\u5B89\u88C5\u5B8C\u6210\u540E\u7684\u5305\u6587\u4EF6\u5B58\u653E\u76EE\u5F55\u3002</td>
</tr>
<tr>
<td>-tags</td>
<td>\u6784\u5EFA\u6807\u7B7E,\u7528\u4E8E\u9009\u62E9\u6027\u5730\u7F16\u8BD1\u76F8\u5E94\u7684\u4EE3\u7801\u3002</td>
</tr>
<tr>
<td>-trimpath</td>
<td>\u79FB\u9664\u6587\u4EF6\u540D\u4E2D\u7684GOPATH\u8DEF\u5F84\u524D\u7F00\u3002</td>
</tr>
<tr>
<td>-mod</td>
<td>\u6A21\u5757\u4E0B\u8F7D\u548C\u89E3\u6790\u6A21\u5F0F,\u53EF\u8BBE\u4E3Amod\u3001vendor\u7B49\u3002</td>
</tr>
</tbody>
</table>
<h3>\u57FA\u7840\u8BED\u6CD5</h3>
<h4>\u57FA\u7840\u8BED\u6CD5</h4>
<blockquote>
<p>Go\u7A0B\u5E8F\u7531\u591A\u4E2A\u6807\u8BB0\u7EC4\u6210\uFF0C\u53EF\u4EE5\u662F\u5173\u952E\u5B57\uFF0C\u6807\u8BC6\u7B26\uFF0C\u5E38\u91CF\uFF0C\u5B57\u7B26\u4E32\uFF0C\u7B26\u53F7\u3002Go\u8BED\u8A00\u7279\u70B9\uFF0C\u7B80\u5355\uFF0C\u5F88\u591A\u5173\u952E\u5B57\u90FD\u662F\u7B80\u5199\uFF0C\u5206\u53F7\u7ED3\u675F\u4E00\u822C\u90FD\u4E0D\u9700\u8981\u5199\u3002</p>
</blockquote>
<ul>
<li>
<p>var    \u58F0\u660E\u53D8\u91CF</p>
</li>
<li>
<p>const   \u58F0\u65F6\u5E38\u91CF</p>
</li>
<li>
<p>type  \u58F0\u660E\u7C7B\u578B</p>
</li>
<li>
<p>func  \u58F0\u660E\u51FD\u6570</p>
</li>
</ul>
<p>\u4F8B\u5982\u4E00\u4E2A\u7B80\u5355\u8BED\u53E5</p>
<pre><code class="hljs">fmt.Println(<span class="hljs-string">&quot;Hello, World!&quot;</span>)
</code></pre>
<h4>\u8BED\u8A00\u7ED3\u6784</h4>
<ul>
<li>
<p>\u5305\u58F0\u660E</p>
</li>
<li>
<p>\u5F15\u5165\u5305</p>
</li>
<li>
<p>\u51FD\u6570</p>
</li>
<li>
<p>\u53D8\u91CF</p>
</li>
<li>
<p>\u8BED\u53E5 &amp; \u8868\u8FBE\u5F0F</p>
</li>
<li>
<p>\u6CE8\u91CA</p>
</li>
</ul>
<p>helloword.go</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main <span class="hljs-comment">// \u5305\u58F0\u660E</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span> <span class="hljs-comment">// \u5F15\u5165\u5305</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> { <span class="hljs-comment">// \u4E3B\u51FD\u6570</span>
   <span class="hljs-comment">/* \u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A\u7B80\u5355\u7684\u7A0B\u5E8F */</span>
   fmt.Println(<span class="hljs-string">&quot;Hello, World!&quot;</span>) <span class="hljs-comment">//\u6267\u884C\u7684\u8BED\u53E5</span>
}
</code></pre>
<h4>\u6570\u636E\u7C7B\u578B</h4>
<blockquote>
<p>\u6570\u636E\u7C7B\u578B\u662F\u4E3A\u4E86\u628A\u6570\u636E\u5206\u6210\u6240\u9700\u5185\u5B58\u5927\u5C0F\u4E0D\u540C\u7684\u6570\u636E\uFF0C\u7F16\u7A0B\u7684\u65F6\u5019\u9700\u8981\u7528\u5927\u6570\u636E\u7684\u65F6\u5019\u624D\u9700\u8981\u7533\u8BF7\u5927\u5185\u5B58\uFF0C\u5C31\u53EF\u4EE5\u5145\u5206\u5229\u7528\u5185\u5B58\u3002</p>
</blockquote>
<p>Go\u8BED\u8A00\u6309\u7C7B\u522B\u6709\u4EE5\u4E0B\u51E0\u79CD\u7C7B\u578B</p>
<ul>
<li>
<p>\u5E03\u5C14\u578B    \u5E03\u5C14\u578B\u7684\u503C\u53EA\u53EF\u4EE5\u662F\u5E38\u91CFtrue,\u6216\u8005false\u3002\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50 var b bool = true</p>
</li>
<li>
<p>\u6570\u5B57\u7C7B\u578B  \u6574\u578Bint\u548C\u6D6E\u70B9float32\u3001float64\u3001Go\u8BED\u8A00\u652F\u6301\u6574\u578B\u548C\u6D6E\u70B9\u578B\u6570\u5B57\uFF0C\u5E76\u4E14\u652F\u6301\u590D\u6570\uFF0C\u5176\u4E2D\u4F4D\u7684\u8FD0\u7B97\u91C7\u7528\u8865\u7801\u3002</p>
</li>
<li>
<p>\u5B57\u7B26\u4E32\u7C7B\u578B    \u5B57\u7B26\u4E32\u5C31\u662F\u4E00\u4E32\u56FA\u5B9A\u957F\u5EA6\u7684\u5B57\u7B26\u8FDE\u63A5\u8D77\u6765\u7684\u5B57\u7B26\u5E8F\u5217\u3002Go\u7684\u5B57\u7B26\u4E32\u662F\u7531\u5355\u4E2A\u5B57\u8282\u8FDE\u63A5\u8D77\u6765\u7684\u3002Go\u7684\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u4F7F\u7528UTF-8\u7F16\u7801\u6807\u8BC6Unicode\u6587\u672C\u3002</p>
</li>
<li>
<p>\u6D3E\u751F\u7C7B\u578B\uFF1A</p>
<ul>
<li>
<p>\u6307\u9488\u7C7B\u578B pointer</p>
</li>
<li>
<p>\u6570\u7EC4\u7C7B\u578B</p>
</li>
<li>
<p>\u7ED3\u6784\u5316\u7C7B\u578B struct</p>
</li>
<li>
<p>Channel\u7C7B\u578B</p>
</li>
<li>
<p>\u51FD\u6570\u7C7B\u578B</p>
</li>
<li>
<p>\u5207\u7247\u7C7B\u578B</p>
</li>
<li>
<p>\u63A5\u53E3\u7C7B\u578B interface</p>
</li>
<li>
<p>Map\u7C7B\u578B</p>
</li>
</ul>
</li>
</ul>
<h4>\u53D8\u91CF</h4>
<blockquote>
<p>\u53D8\u91CF\u6765\u6E90\u4E8E\u6570\u5B66\uFF0C\u662F\u8BA1\u7B97\u673A\u8BED\u8A00\u4E2D\u5B58\u50A8\u8BA1\u7B97\u7ED3\u679C\u6216\u80FD\u8868\u793A\u503C\u62BD\u8C61\u6982\u5FF5\u3002</p>
<p>\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7\u53D8\u91CF\u540D\u8BBF\u95EE\u3002</p>
<p>Go\u8BED\u8A00\u53D8\u91CF\u540D\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u7EC4\u6210\uFF0C\u5176\u4E2D\u9996\u5B57\u7B26\u4E0D\u80FD\u4E3A\u6570\u5B57\u3002</p>
</blockquote>
<p>\u58F0\u660E\u53D8\u91CF\u7684\u4E00\u822C\u5F62\u5F0F\u662F\u4F7F\u7528var\u5173\u952E\u5B57</p>
<pre><code class="hljs"><span class="hljs-keyword">var</span> idn <span class="hljs-type">int</span>
</code></pre>
<p>\u53EF\u4EE5\u4E00\u6B21\u58F0\u660E\u591A\u4E2A\u53D8\u91CF</p>
<pre><code class="hljs"><span class="hljs-comment">//\u7C7B\u578B\u76F8\u540C\u591A\u4E2A\u53D8\u91CF, \u975E\u5168\u5C40\u53D8\u91CF</span>
<span class="hljs-keyword">var</span> vname1, vname2, vname3 <span class="hljs-keyword">type</span>
vname1, vname2, vname3 = v1, v2, v3

<span class="hljs-keyword">var</span> vname1, vname2, vname3 = v1, v2, v3 <span class="hljs-comment">// \u548C python \u5F88\u50CF,\u4E0D\u9700\u8981\u663E\u793A\u58F0\u660E\u7C7B\u578B\uFF0C\u81EA\u52A8\u63A8\u65AD</span>

vname1, vname2, vname3 := v1, v2, v3 <span class="hljs-comment">// \u51FA\u73B0\u5728 := \u5DE6\u4FA7\u7684\u53D8\u91CF\u4E0D\u5E94\u8BE5\u662F\u5DF2\u7ECF\u88AB\u58F0\u660E\u8FC7\u7684\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF// \u5168\u5C40\u58F0\u660E\u591A\xA0\xA0\xA0\xA0// \u8FD9\u79CD\u56E0\u5F0F\u5206\u89E3\u5173\u952E\u5B57\u7684\u5199\u6CD5\u4E00\u822C\u7528\u4E8E\u58F0\u660E\u5168\u5C40\u53D8\u91CF</span>
<span class="hljs-keyword">var</span> (
    vname1 v_type1
    vname2 v_type2
)
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>

<span class="hljs-keyword">var</span> x, y <span class="hljs-type">int</span>
<span class="hljs-keyword">var</span> (  <span class="hljs-comment">// \u8FD9\u79CD\u56E0\u5F0F\u5206\u89E3\u5173\u952E\u5B57\u7684\u5199\u6CD5\u4E00\u822C\u7528\u4E8E\u58F0\u660E\u5168\u5C40\u53D8\u91CF</span>
    a <span class="hljs-type">int</span>
    b <span class="hljs-type">bool</span>
)

<span class="hljs-keyword">var</span> c, d <span class="hljs-type">int</span> = <span class="hljs-number">1</span>, <span class="hljs-number">2</span>
<span class="hljs-keyword">var</span> e, f = <span class="hljs-number">123</span>, <span class="hljs-string">&quot;hello&quot;</span>

<span class="hljs-comment">//\u8FD9\u79CD\u4E0D\u5E26\u58F0\u660E\u683C\u5F0F\u7684\u53EA\u80FD\u5728\u51FD\u6570\u4F53\u4E2D\u51FA\u73B0</span>
<span class="hljs-comment">//g, h := 123, &quot;hello&quot;</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span>{
    g, h := <span class="hljs-number">123</span>, <span class="hljs-string">&quot;hello&quot;</span>
    fmt.Println(x, y, a, b, c, d, e, f, g, h)
}
</code></pre>
<p><strong>\u503C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B</strong></p>
<p>\u6240\u6709\u50CFint\u3001float\u3001bool\u548Cstring\u8FD9\u4E9B\u57FA\u672C\u7C7B\u578B\u90FD\u5C5E\u4E8E\u503C\u7C7B\u578B\uFF0C\u4F7F\u7528\u8FD9\u4E9B\u7C7B\u578B\u7684\u53D8\u91CF\u76F4\u63A5\u6307\u5411\u5B58\u5728\u5185\u5B58\u4E2D\u7684\u503C\u3002</p>
<p>\u5F53\u4F7F\u7528\u7B49\u53F7=\u5C06\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u8D4B\u503C\u7ED9\u53E6\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u5982 j=i\uFF0C\u5B9E\u9645\u4E0A\u662F\u5728\u5185\u5B58\u4E2D\u5C06i\u7684\u503C\u8FDB\u884C\u4E86\u62F7\u8D1D\u3002</p>
<p>\u4F60\u53EF\u4EE5\u901A\u8FC7&amp;i\u6765\u83B7\u53D6\u53D8\u91CFi\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4F8B\u59820xf840000040\uFF08\u6BCF\u6B21\u7684\u5730\u5740\u90FD\u53EF\u80FD\u4E0D\u4E00\u6837\uFF09\u3002</p>
<p>\u503C\u7C7B\u578B\u53D8\u91CF\u7684\u503C\u5B58\u50A8\u5728\u5806\u4E2D\u3002</p>
<p>\u5185\u5B58\u5730\u5740\u4F1A\u6839\u636E\u673A\u5668\u7684\u4E0D\u540C\u800C\u6709\u6240\u4E0D\u540C\uFF0C\u751A\u81F3\u673A\u540C\u7684\u7A0B\u5E8F\u5728\u4E0D\u540C\u7684\u673A\u5668\u4E0A\u6267\u884C\u540E\u4E5F\u4F1A\u6709\u4E0D\u540C\u7684\u5185\u5B58\u5730\u5740\u3002\u56E0\u4E3A\u6BCF\u53F0\u673A\u5668\u53EF\u80FD\u6709\u4E0D\u540C\u7684\u5B58\u50A8\u5668\u5E03\u5C40\uFF0C\u5E76\u4E14\u4F4D\u7F6E\u5206\u914D\u4E5F\u53EF\u80FD\u4E0D\u540C\u3002</p>
<p>\u66F4\u590D\u6742\u7684\u6570\u636E\u901A\u5E38\u4F1A\u9700\u8981\u4F7F\u7528\u591A\u4E2A\u5B57\uFF0C\u8FD9\u4E9B\u6570\u636E\u4E00\u822C\u4F7F\u7528\u5F15\u7528\u7C7B\u578B\u4FDD\u5B58\u3002</p>
<p>\u8FD9\u4E2A\u5185\u5B58\u7684\u5730\u5740\u79F0\u4E3A\u6307\u4E4B\u4E3A\u6307\u9488\uFF0C\u8FD9\u4E2A\u6307\u9488\u5B9E\u9645\u4E0A\u4E5F\u88AB\u5B58\u5728\u53E6\u5916\u7684\u67D0\u4E00\u4E2A\u503C\u4E2D\u3002</p>
<p>\u540C\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u6307\u9488\u6307\u5411\u591A\u4E2A\u5B57\u53EF\u4EE5\u662F\u5728\u8FDE\u7EED\u7684\u5185\u5B58\u4E2D(\u5185\u5B58\u5E03\u5C40\u662F\u8FDE\u7EED\u7684)\uFF0C\u8FD9\u4E5F\u662F\u8BA1\u7B97\u6548\u7387\u6700\u9AD8\u7684\u4E00\u79CD\u5B58\u50A8\u5F62\u5F0F\uFF1B\u4E5F\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u5B57\u5206\u6563\u5B58\u653E\u5728\u5185\u5B58\u4E2D\uFF0C\u6BCF\u4E2A\u5B57\u90FD\u6307\u793A\u4E86\u4E0B\u4E00\u4E2A\u5B57\u6240\u5728\u7684\u5185\u5B58\u5730\u5740\u3002</p>
<p><strong>\u53D8\u91CF\u4F5C\u7528\u57DF\uFF1A</strong></p>
<p>\u4F5C\u7528\u57DF\u4E3A\u5DF2\u58F0\u660E\u6807\u8BC6\u7B26\u6240\u8868\u793A\u7684\u5E38\u91CF\u3001\u7C7B\u578B\u3001\u53D8\u91CF\u3001\u51FD\u6570\u6216\u5305\u5728\u6E90\u4EE3\u7801\u4E2D\u7684\u4F5C\u7528\u8303\u56F4\u3002</p>
<p>Go\u8BED\u8A00\u4E2D\u53D8\u91CF\u53EF\u4EE5\u5728\u4E09\u4E2A\u5730\u65B9\u58F0\u65F6\uFF1A</p>
<ul>
<li>
<p>\u51FD\u6570\u5185\u5B9A\u4E49\u7684\u53D8\u91CF\u79F0\u4E3A\u5C40\u90E8\u53D8\u91CF</p>
</li>
<li>
<p>\u51FD\u6570\u5916\u5B9A\u4E49\u7684\u53D8\u91CF\u79F0\u4E3A\u5168\u5C40\u53D8\u91CF</p>
</li>
<li>
<p>\u51FD\u6570\u5B9A\u4E49\u4E2D\u53D8\u91CF\u79F0\u4E3A\u5F62\u5F0F\u53C2\u6570</p>
</li>
</ul>
<p>\u5C40\u90E8\u53D8\u91CF\u7684\u4F8B\u5B50</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
   <span class="hljs-comment">/* \u58F0\u660E\u5C40\u90E8\u53D8\u91CF */</span>
   <span class="hljs-keyword">var</span> a, b, c <span class="hljs-type">int</span>
   <span class="hljs-comment">/* \u521D\u59CB\u5316\u53C2\u6570 */</span>
   a = <span class="hljs-number">10</span>
   b = <span class="hljs-number">20</span>
   c = a + b
   fmt.Printf (<span class="hljs-string">&quot;\u7ED3\u679C\uFF1A a = %d, b = %d and c = %d\\n&quot;</span>, a, b, c)
}
</code></pre>
<p>\u5168\u5C40\u53D8\u91CF\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-comment">/* \u58F0\u660E\u5168\u5C40\u53D8\u91CF */</span>
<span class="hljs-keyword">var</span> g <span class="hljs-type">int</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
   <span class="hljs-comment">/* \u58F0\u660E\u5C40\u90E8\u53D8\u91CF */</span>
   <span class="hljs-keyword">var</span> a, b <span class="hljs-type">int</span>
   <span class="hljs-comment">/* \u521D\u59CB\u5316\u53C2\u6570 */</span>
   a = <span class="hljs-number">10</span>
   b = <span class="hljs-number">20</span>
   g = a + b
   fmt.Printf(<span class="hljs-string">&quot;\u7ED3\u679C\uFF1A a = %d, b = %d and g = %d\\n&quot;</span>, a, b, g)
}
</code></pre>
<p>\u5F62\u53C2\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-comment">/* \u58F0\u660E\u5168\u5C40\u53D8\u91CF */</span>
<span class="hljs-keyword">var</span> a <span class="hljs-type">int</span> = <span class="hljs-number">20</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
   <span class="hljs-comment">/* main \u51FD\u6570\u4E2D\u58F0\u660E\u5C40\u90E8\u53D8\u91CF */</span>
   <span class="hljs-keyword">var</span> a <span class="hljs-type">int</span> = <span class="hljs-number">10</span>
   <span class="hljs-keyword">var</span> b <span class="hljs-type">int</span> = <span class="hljs-number">20</span>
   <span class="hljs-keyword">var</span> c <span class="hljs-type">int</span> = <span class="hljs-number">0</span>
   fmt.Printf(<span class="hljs-string">&quot;main()\u51FD\u6570\u4E2D a = %d\\n&quot;</span>,  a)
   c = sum( a, b)
   fmt.Printf(<span class="hljs-string">&quot;main()\u51FD\u6570\u4E2D c = %d\\n&quot;</span>,  c)
}

<span class="hljs-comment">/* \u51FD\u6570\u5B9A\u4E49-\u4E24\u6570\u76F8\u52A0 */</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">sum</span><span class="hljs-params">(a, b <span class="hljs-type">int</span>)</span></span> <span class="hljs-type">int</span> {
   fmt.Printf(<span class="hljs-string">&quot;sum() \u51FD\u6570\u4E2D a = %d\\n&quot;</span>,  a)
   fmt.Printf(<span class="hljs-string">&quot;sum() \u51FD\u6570\u4E2D b = %d\\n&quot;</span>,  b)
   <span class="hljs-keyword">return</span> a + b
}
</code></pre>
<p>\u53D8\u91CF\u9ED8\u8BA4\u503C</p>
<table>
<thead>
<tr>
<th>\u6570\u636E\u7C7B\u578B</th>
<th>\u521D\u59CB\u5316\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>int</td>
<td>0</td>
</tr>
<tr>
<td>float32</td>
<td>0</td>
</tr>
<tr>
<td>pointer</td>
<td>nil</td>
</tr>
</tbody>
</table>
<h4>\u6570\u7EC4</h4>
<blockquote>
<p>\u6570\u7EC4\u58F0\u660E\u9700\u8981\u6307\u5B9A\u5143\u7D20\u7C7B\u578B\u53CA\u5143\u7D20\u4E2A\u6570\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
</blockquote>
<pre><code class="hljs"><span class="hljs-keyword">var</span> arrayName [size]dataType
</code></pre>
<p>\u5176\u4E2D arrayName\u662F\u6570\u7EC4\u7684\u540D\u79F0, size\u4E3A\u6570\u7EC4\u7684\u5927\u5C0F\uFF0CdataType\u662F\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B\u3002</p>
<p>\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-keyword">var</span> numbers [<span class="hljs-number">5</span>]<span class="hljs-type">int</span> <span class="hljs-comment">// \u9ED8\u8BA4\u521D\u59CB\u5316 \uFF0C\u521D\u59CB\u503C\u4E3A0</span>
<span class="hljs-keyword">var</span> numbers = [<span class="hljs-number">5</span>]<span class="hljs-type">int</span>{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>} <span class="hljs-comment">// \u53EF\u4EE5\u4F7F\u7528\u521D\u59CB\u5316\u5217\u8868\u6765\u521D\u59CB\u5316\u6570\u7EC4\u7684\u5143\u7D20</span>
numbers := [<span class="hljs-number">5</span>]<span class="hljs-type">int</span>{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>} <span class="hljs-comment">// \u4F7F\u7528:=\u7B80\u77ED\u58F0\u660E\u8BED\u6CD5\u6765\u58F0\u660E\u548C\u521D\u59CB\u5316\u6570\u7EC4</span>
<span class="hljs-keyword">var</span> balance = [<span class="hljs-number">5</span>]<span class="hljs-type">float32</span>{<span class="hljs-number">1000.0</span>, <span class="hljs-number">2.0</span>, <span class="hljs-number">3.4</span>, <span class="hljs-number">7.0</span>, <span class="hljs-number">50.0</span>}


fmt.Println(numbers[<span class="hljs-number">0</span>]) <span class="hljs-comment">//\u8BBF\u95EE\u6570\u7EC4\u7684\u5143fmt.Println(numbers[0]) //\u8BBF\u95EE\u6570\u7EC4\u7684\u5143</span>
</code></pre>
<h4>\u51FD\u6570</h4>
<blockquote>
<p>\u51FD\u6570\u662F\u57FA\u672C\u7684\u4EE3\u7801\u5757\uFF0C\u7528\u4E8E\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1\uFF0CGo\u8BED\u8A00\u6700\u5C11\u6709\u4E00\u4E2Amain()\u51FD\u6570\u3002\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u6765\u5212\u5206\u4E0D\u540C\u529F\u80FD\uFF0C\u903B\u8F91\u4E0A\u6BCF\u4E2A\u51FD\u6570\u6267\u884C\u7684\u662F\u6307\u5B9A\u7684\u4EFB\u52A1\u3002</p>
<p>\u51FD\u6570\u58F0\u660E\u544A\u8BC9\u4E86\u7F16\u8BD1\u5668\u51FD\u6570\u7684\u540D\u79F0\u3001\u8FD4\u56DE\u7C7B\u578B\uFF0C\u548C\u53C2\u6570\u3002</p>
<p>Go\u8BED\u8A00\u6807\u51C6\u5E93\u63D0\u4F9B\u4E86\u591A\u79CD\u53EF\u52A8\u7528\u7684\u5185\u7F6E\u7684\u51FD\u6570\u3002\u4F8B\u5982\uFF0Clen()\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E0D\u540C\u7C7B\u578B\u53C2\u6570\u5E76\u8FD4\u56DE\u8BE5\u7C7B\u578B\u7684\u957F\u5EA6\u3002</p>
</blockquote>
<p>\u51FD\u6570\u7684\u5B9A\u4E49</p>
<p>Go\u51FD\u6570\u7684\u5B9A\u4E49\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">function_name</span><span class="hljs-params">( [parameter list] )</span></span> [return_types] {
   \u51FD\u6570\u4F53
}
</code></pre>
<p>\u51FD\u6570\u5B9A\u4E49\u89E3\u6790\uFF1A</p>
<ul>
<li>
<p>func\uFF1A \u51FD\u6570\u7531func\u5F00\u59CB\u58F0\u660E</p>
</li>
<li>
<p>function_name: \u51FD\u6570\u540D\u79F0\uFF0C\u53C2\u6570\u5217\u8868\u548C\u8FD4\u56DE\u503C\u7C7B\u5F00\u6784\u6210\u4E86\u51FD\u6570\u7B7E\u540D</p>
</li>
<li>
<p>parameter list: \u53C2\u6570\u5217\u8868\uFF0C\u53C2\u6570\u5C31\u50CF\u4E00\u4E2A\u5360\u4F4D\u7B26\uFF0C\u5F53\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5C06\u503C\u4F20\u9012\u7ED9\u53C2\u6570</p>
</li>
<li>
<p>return_types\uFF1A \u8FD4\u56DE\u7C7B\u578B\uFF0C\u51FD\u6570\u8FD4\u56DE\u4E00\u5217\u503C\u3002return_types\u662F\u8BE5\u5217\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u6709\u4E9B\u529F\u80FD\u4E0D\u9700\u8981\u8FD4\u56DE\u503C\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0Breturn_types\u4E0D\u662F\u5FC5\u987B\u7684\u3002</p>
</li>
<li>
<p>\u51FD\u6570\u4F53\uFF1A\u51FD\u6570\u5B9A\u4E49\u7684\u4EE3\u7801\u96C6\u5408\u3002</p>
</li>
</ul>
<p>\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-comment">/* \u51FD\u6570\u8FD4\u56DE\u4E24\u4E2A\u6570\u7684\u6700\u5927\u503C */</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">max</span><span class="hljs-params">(num1, num2 <span class="hljs-type">int</span>)</span></span> <span class="hljs-type">int</span> {
   <span class="hljs-comment">/* \u58F0\u660E\u5C40\u90E8\u53D8\u91CF */</span>
   <span class="hljs-keyword">var</span> result <span class="hljs-type">int</span>

   <span class="hljs-keyword">if</span> (num1 &gt; num2) {
      result = num1
   } <span class="hljs-keyword">else</span> {
      result = num2
   }
   <span class="hljs-keyword">return</span> result
}
</code></pre>
<h4>\u5207\u7247Slice</h4>
<blockquote>
<p>Go\u8BED\u8A00\u5207\u7247\u662F\u5BF9\u6570\u7EC4\u7684\u62BD\u8C61\u3002</p>
<p>Go\u8BED\u8A00\u6570\u7EC4\u7684\u957F\u5EA6\u4E0D\u53EF\u6539\u53D8\uFF0C\u5728\u7279\u5B9A\u573A\u666F\u4E2D\u8FD9\u6837\u96C6\u5408\u5C31\u4E0D\u592A\u9002\u7528\uFF0CGo\u4E2D\u63D0\u4F9B\u4E86\u4E00\u79CD\u7075\u6D3B\uFF0C\u529F\u80FD\u5F3A\u608D\u7684\u5185\u7F6E\u7C7B\u578B\u5207\u7247(\u52A8\u6001\u6570\u7EC4)\uFF0C\u4E0E\u6570\u7EC4\u76F8\u6BD4\u5207\u7247\u7684\u957F\u5EA6\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u53EF\u4EE5\u8FFD\u52A0\u5143\u7D20\uFF0C\u5728\u8FFD\u52A0\u65F6\u53EF\u80FD\u4F7F\u5207\u7247\u7684\u5BB9\u91CF\u589E\u5927\u3002</p>
</blockquote>
<p>\u5B9A\u4E49\u5207\u7247</p>
<p>\u58F0\u660E\u4E00\u4E2A\u672A\u6307\u5B9A\u5927\u5C0F\u7684\u6570\u7EC4\u6765\u5B9A\u4E49\u7684\u5207\u7247\uFF1A</p>
<pre><code class="hljs"><span class="hljs-keyword">var</span> identifier []<span class="hljs-keyword">type</span>
</code></pre>
<p>\u5207\u7247\u4E0D\u9700\u8981\u957F\u5EA6\u8BF4\u660E, \u4F7F\u7528make()\u51FD\u6570\u6765\u521B\u5EFA\u5207\u7247</p>
<pre><code class="hljs"><span class="hljs-keyword">var</span> slice1 []<span class="hljs-keyword">type</span> = <span class="hljs-built_in">make</span>([]<span class="hljs-keyword">type</span>, <span class="hljs-built_in">len</span>)
<span class="hljs-comment">//\u4E5F\u53EF\u4EE5\u7B80\u5199\u4E3A</span>
slice1 := <span class="hljs-built_in">make</span>([]<span class="hljs-keyword">type</span>, <span class="hljs-built_in">len</span>)
</code></pre>
<p>\u5207\u7247\u521D\u59CB\u5316</p>
<pre><code class="hljs">s :=[] <span class="hljs-type">int</span> {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span> }  <span class="hljs-comment">// \u76F4\u63A5\u521D\u59CB\u5316\u5207\u7247\uFF0C[] \u8868\u793A\u662F\u5207\u7247\u7C7B\u578B\uFF0C{1,2,3} \u521D\u59CB\u5316\u503C\u4F9D\u6B21\u662F 1,2,3\uFF0C\u5176 cap=len=3\u3002</span>
</code></pre>
<p>\u5207\u7247\u622A\u53D6</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
   <span class="hljs-comment">/* \u521B\u5EFA\u5207\u7247 */</span>
   numbers := []<span class="hljs-type">int</span>{<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>}  
   printSlice(numbers)

   <span class="hljs-comment">/* \u6253\u5370\u539F\u59CB\u5207\u7247 */</span>
   fmt.Println(<span class="hljs-string">&quot;numbers ==&quot;</span>, numbers)

   <span class="hljs-comment">/* \u6253\u5370\u5B50\u5207\u7247\u4ECE\u7D22\u5F151(\u5305\u542B) \u5230\u7D22\u5F154(\u4E0D\u5305\u542B)*/</span>
   fmt.Println(<span class="hljs-string">&quot;numbers[1:4] ==&quot;</span>, numbers[<span class="hljs-number">1</span>:<span class="hljs-number">4</span>])

   <span class="hljs-comment">/* \u9ED8\u8BA4\u4E0B\u9650\u4E3A 0*/</span>
   fmt.Println(<span class="hljs-string">&quot;numbers[:3] ==&quot;</span>, numbers[:<span class="hljs-number">3</span>])

   <span class="hljs-comment">/* \u9ED8\u8BA4\u4E0A\u9650\u4E3A len(s)*/</span>
   fmt.Println(<span class="hljs-string">&quot;numbers[4:] ==&quot;</span>, numbers[<span class="hljs-number">4</span>:])

   numbers1 := <span class="hljs-built_in">make</span>([]<span class="hljs-type">int</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>)
   printSlice(numbers1)

   <span class="hljs-comment">/* \u6253\u5370\u5B50\u5207\u7247\u4ECE\u7D22\u5F15  0(\u5305\u542B) \u5230\u7D22\u5F15 2(\u4E0D\u5305\u542B) */</span>
   number2 := numbers[:<span class="hljs-number">2</span>]
   printSlice(number2)

   <span class="hljs-comment">/* \u6253\u5370\u5B50\u5207\u7247\u4ECE\u7D22\u5F15 2(\u5305\u542B) \u5230\u7D22\u5F15 5(\u4E0D\u5305\u542B) */</span>
   number3 := numbers[<span class="hljs-number">2</span>:<span class="hljs-number">5</span>]
   printSlice(number3)

}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">printSlice</span><span class="hljs-params">(x []<span class="hljs-type">int</span>)</span></span>{
   fmt.Printf(<span class="hljs-string">&quot;len=%d cap=%d slice=%v\\n&quot;</span>,<span class="hljs-built_in">len</span>(x),<span class="hljs-built_in">cap</span>(x),x)
}
</code></pre>
<h4>\u6307\u9488</h4>
<p>\u533A\u522B\u4E8EC/C++\u4E2D\u7684\u6307\u9488\uFF0CGo\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u4E0D\u80FD\u8FDB\u884C\u504F\u79FB\u548C\u8FD0\u7B97\uFF0C\u662F\u5B89\u5168\u6307\u9488\u3002</p>
<p>Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u9700\u8981\u5148\u77E5\u90533\u4E2A\u6982\u5FF5\uFF1A\u6307\u9488\u5730\u5740\u3001\u6307\u9488\u7C7B\u578B\u548C\u6307\u9488\u53D6\u503C\u3002</p>
<p>Go\u8BED\u8A00\u4E2D\u7684\u51FD\u6570\u4F20\u53C2\u662F\u503C\u62F7\u8D1D\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u4FEE\u6539\u67D0\u4E2A\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u6307\u5411\u8BE5\u53D8\u91CF\u7684\u6307\u9488\u53D8\u91CF\u3002\u4F20\u9012\u6570\u636E\u4F7F\u7528\u6307\u9488\uFF0C\u800C\u65E0\u987B\u62F7\u8D1D\u6570\u636E\u3002\u7C7B\u578B\u6307\u9488\u4E0D\u80FD\u8FDB\u884C\u504F\u79FB\u548C\u8FD0\u7B97\u3002Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u64CD\u4F5C\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7\uFF1A<code>&amp;</code>\u53D6\u5730\u5740\u64CD\u4F5C\u7B26\u548C<code>*</code> \u89E3\u5F15\u7528\u64CD\u4F5C\u7B26(\u6839\u636E\u5730\u5740\u53D6\u503C)\u3002</p>
<h5>\u6307\u9488\u5730\u5740\u548C\u6307\u9488\u7C7B\u578B</h5>
<p>\u6BCF\u4E2A\u53D8\u91CF\u5728\u8FD0\u884C\u65F6\u90FD\u62E5\u6709\u4E00\u4E2A\u5730\u5740\uFF0C\u8FD9\u4E2A\u5730\u5740\u4EE3\u8868\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u7684\u4F4D\u7F6E\u3002Go\u8BED\u8A00\u4E2D\u4F7F\u7528&amp;\u5B57\u7B26\u653E\u5728\u53D8\u91CF\u524D\u9762\u5BF9\u53D8\u91CF\u8FDB\u884C\u201C\u53D6\u5730\u5740\u201D\u64CD\u4F5C\u3002Go\u8BED\u8A00\u4E2D\u7684\u503C\u7C7B\u578B(int\u3001float\u3001bool\u3001string\u3001array\u3001struct)\u90FD\u6709\u5BF9\u5E94\u7684\u6307\u9488\u7C7B\u578B\uFF0C\u5982\uFF1A<code>*int</code>\u3001<code>*int64</code>\u3001<code>*string</code>\u7B49\u3002</p>
<p>\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs">  ptr := &amp;v    <span class="hljs-comment">// v\u7684\u7C7B\u578B\u4E3AT</span>
</code></pre>
<p>\u5176\u4E2D\uFF1A</p>
<p>v\uFF1A\u4EE3\u8868\u88AB\u53D6\u5730\u5740\u7684\u53D8\u91CF\uFF0C\u7C7B\u578B\u4E3AT</p>
<p>ptr\uFF1A \u7528\u4E8E\u63A5\u6536\u7684\u53D8\u91CF\uFF0Cptr\u7684\u7C7B\u578B\u5C31\u4E3A*T\uFF0C\u79F0\u505AT\u7684\u6307\u9488\u7C7B\u578B\u3002*\u4EE3\u8868\u6307\u9488\u3002</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    a := <span class="hljs-number">10</span>
    b := &amp;a
    fmt.Printf(<span class="hljs-string">&quot;a:%d ptr:%p\\n&quot;</span>, a, &amp;a) <span class="hljs-comment">// a:10 ptr:0xc00001a078</span>
    fmt.Printf(<span class="hljs-string">&quot;b:%p type:%T\\n&quot;</span>, b, b) <span class="hljs-comment">// b:0xc00001a078 type:*int</span>
    fmt.Println(&amp;b)                    <span class="hljs-comment">// 0xc00000e018</span>
}
</code></pre>
<h5>\u6307\u9488\u53D6\u503C</h5>
<p>\u5728\u5BF9\u666E\u901A\u53D8\u91CF\u4F7F\u7528&amp;\u64CD\u4F5C\u7B26\u53D6\u5730\u5740\u540E\u4F1A\u83B7\u5F97\u8FD9\u4E2A\u53D8\u91CF\u7684\u6307\u9488\uFF0C\u7136\u540E\u53EF\u4EE5\u5BF9\u6307\u9488\u4F7F\u7528*\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u6307\u9488\u53D6\u503C\u3002</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-comment">//\u6307\u9488\u53D6\u503C</span>
    a := <span class="hljs-number">10</span>
    b := &amp;a <span class="hljs-comment">// \u53D6\u53D8\u91CFa\u7684\u5730\u5740\uFF0C\u5C06\u6307\u9488\u4FDD\u5B58\u5230b\u4E2D</span>
    fmt.Printf(<span class="hljs-string">&quot;type of b:%T\\n&quot;</span>, b)
    c := *b <span class="hljs-comment">// \u6307\u9488\u53D6\u503C\uFF08\u6839\u636E\u6307\u9488\u53BB\u5185\u5B58\u53D6\u503C\uFF09</span>
    fmt.Printf(<span class="hljs-string">&quot;type of c:%T\\n&quot;</span>, c)
    fmt.Printf(<span class="hljs-string">&quot;value of c:%v\\n&quot;</span>, c)
}
</code></pre>
<p>\u8F93\u51FA\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs">type of b:*int
type of c:int
value of c:10
</code></pre>
<p>\u603B\u7ED3\uFF1A \u53D6\u5730\u5740\u64CD\u4F5C\u7B26&amp;\u548C\u53D6\u503C\u64CD\u4F5C\u7B26<code>*</code>\u662F\u4E00\u5BF9\u4E92\u8865\u64CD\u4F5C\u7B26\uFF0C<code>&amp;</code>\u53D6\u51FA\u5730\u5740\uFF0C<code>*</code>\u6839\u636E\u5730\u5740\u53D6\u51FA\u5730\u5740\u6307\u5411\u7684\u503C\u3002</p>
<p>\u53D8\u91CF\u3001\u6307\u9488\u5730\u5740\u3001\u6307\u9488\u53D8\u91CF\u3001\u53D6\u5730\u5740\u3001\u53D6\u503C\u7684\u76F8\u4E92\u5173\u7CFB\u548C\u7279\u6027\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs">1.\u5BF9\u53D8\u91CF\u8FDB\u884C\u53D6\u5730\u5740\uFF08&amp;\uFF09\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u83B7\u5F97\u8FD9\u4E2A\u53D8\u91CF\u7684\u6307\u9488\u53D8\u91CF\u3002
2.\u6307\u9488\u53D8\u91CF\u7684\u503C\u662F\u6307\u9488\u5730\u5740\u3002
3.\u5BF9\u6307\u9488\u53D8\u91CF\u8FDB\u884C\u53D6\u503C\uFF08*\uFF09\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u83B7\u5F97\u6307\u9488\u53D8\u91CF\u6307\u5411\u7684\u539F\u53D8\u91CF\u7684\u503C\u3002
</code></pre>
<p>\u6307\u9488\u4F20\u503C\u793A\u4F8B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">modify1</span><span class="hljs-params">(x <span class="hljs-type">int</span>)</span></span> {
    x = <span class="hljs-number">100</span>
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">modify2</span><span class="hljs-params">(x *<span class="hljs-type">int</span>)</span></span> {
    *x = <span class="hljs-number">100</span>
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    a := <span class="hljs-number">10</span>
    modify1(a)
    fmt.Println(a) <span class="hljs-comment">// 10</span>
    modify2(&amp;a)
    fmt.Println(a) <span class="hljs-comment">// 100</span>
}
</code></pre>
<h5>\u7A7A\u6307\u9488</h5>
<ul>
<li>\u5F53\u4E00\u4E2A\u6307\u9488\u88AB\u5B9A\u4E49\u540E\u6CA1\u6709\u5206\u914D\u5230\u4EFB\u4F55\u53D8\u91CF\u65F6\uFF0C\u5B83\u7684\u503C\u4E3A nil</li>
<li>\u7A7A\u6307\u9488\u7684\u5224\u65AD</li>
</ul>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> p *<span class="hljs-type">string</span>
    fmt.Println(p)
    fmt.Printf(<span class="hljs-string">&quot;p\u7684\u503C\u662F%s/n&quot;</span>, p)
    <span class="hljs-keyword">if</span> p != <span class="hljs-literal">nil</span> {
        fmt.Println(<span class="hljs-string">&quot;\u975E\u7A7A&quot;</span>)
    } <span class="hljs-keyword">else</span> {
        fmt.Println(<span class="hljs-string">&quot;\u7A7A\u503C&quot;</span>)
    }
}
</code></pre>
<h5>new\u548Cmake</h5>
<p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> a *<span class="hljs-type">int</span>
    *a = <span class="hljs-number">100</span>
    fmt.Println(*a)

    <span class="hljs-keyword">var</span> b <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>
    b[<span class="hljs-string">&quot;\u6D4B\u8BD5&quot;</span>] = <span class="hljs-number">100</span>
    fmt.Println(b)
}
</code></pre>
<p>\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\u4F1A\u5F15\u53D1panic\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F \u5728Go\u8BED\u8A00\u4E2D\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u4EC5\u8981\u58F0\u660E\u5B83\uFF0C\u8FD8\u8981\u4E3A\u5B83\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u5426\u5219\u6211\u4EEC\u7684\u503C\u5C31\u6CA1\u529E\u6CD5\u5B58\u50A8\u3002\u800C\u5BF9\u4E8E\u503C\u7C7B\u578B\u7684\u58F0\u660E\u4E0D\u9700\u8981\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u662F\u56E0\u4E3A\u5B83\u4EEC\u5728\u58F0\u660E\u7684\u65F6\u5019\u5DF2\u7ECF\u9ED8\u8BA4\u5206\u914D\u597D\u4E86\u5185\u5B58\u7A7A\u95F4\u3002\u8981\u5206\u914D\u5185\u5B58\uFF0C\u5C31\u5F15\u51FA\u6765\u4ECA\u5929\u7684new\u548Cmake\u3002 Go\u8BED\u8A00\u4E2Dnew\u548Cmake\u662F\u5185\u5EFA\u7684\u4E24\u4E2A\u51FD\u6570\uFF0C\u4E3B\u8981\u7528\u6765\u5206\u914D\u5185\u5B58\u3002</p>
<h5>new</h5>
<p>new\u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u5B83\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">new</span><span class="hljs-params">(Type)</span></span> *Type
</code></pre>
<p>\u5176\u4E2D\uFF0C</p>
<pre><code class="hljs">1.Type\u8868\u793A\u7C7B\u578B\uFF0Cnew\u51FD\u6570\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u7C7B\u578B
2.*Type\u8868\u793A\u7C7B\u578B\u6307\u9488\uFF0Cnew\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u8BE5\u7C7B\u578B\u5185\u5B58\u5730\u5740\u7684\u6307\u9488\u3002
</code></pre>
<p>new\u51FD\u6570\u4E0D\u592A\u5E38\u7528\uFF0C\u4F7F\u7528new\u51FD\u6570\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u5E76\u4E14\u8BE5\u6307\u9488\u5BF9\u5E94\u7684\u503C\u4E3A\u8BE5\u7C7B\u578B\u7684\u96F6\u503C\u3002</p>
<p>\u4F8B\u5982\uFF1A</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    a := <span class="hljs-built_in">new</span>(<span class="hljs-type">int</span>)
    b := <span class="hljs-built_in">new</span>(<span class="hljs-type">bool</span>)
    fmt.Printf(<span class="hljs-string">&quot;%T\\n&quot;</span>, a) <span class="hljs-comment">// *int</span>
    fmt.Printf(<span class="hljs-string">&quot;%T\\n&quot;</span>, b) <span class="hljs-comment">// *bool</span>
    fmt.Println(*a)       <span class="hljs-comment">// 0</span>
    fmt.Println(*b)       <span class="hljs-comment">// false</span>
}
</code></pre>
<p>\u793A\u4F8B\u4EE3\u7801\u4E2D<code>var a *int</code>\u53EA\u662F\u58F0\u660E\u4E86\u4E00\u4E2A\u6307\u9488\u53D8\u91CFa\u4F46\u662F\u6CA1\u6709\u521D\u59CB\u5316\uFF0C\u6307\u9488\u4F5C\u4E3A\u5F15\u7528\u7C7B\u578B\u9700\u8981\u521D\u59CB\u5316\u540E\u624D\u4F1A\u62E5\u6709\u5185\u5B58\u7A7A\u95F4\uFF0C\u624D\u53EF\u4EE5\u7ED9\u5B83\u8D4B\u503C\u3002\u5E94\u8BE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u4F7F\u7528\u5185\u7F6E\u7684new\u51FD\u6570\u5BF9a\u8FDB\u884C\u521D\u59CB\u5316\u4E4B\u540E\u5C31\u53EF\u4EE5\u6B63\u5E38\u5BF9\u5176\u8D4B\u503C\u4E86\uFF1A</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> a *<span class="hljs-type">int</span>
    a = <span class="hljs-built_in">new</span>(<span class="hljs-type">int</span>)
    *a = <span class="hljs-number">10</span>
    fmt.Println(*a)
}
</code></pre>
<h5>make</h5>
<p>make\u4E5F\u662F\u7528\u4E8E\u5185\u5B58\u5206\u914D\u7684\uFF0C\u533A\u522B\u4E8Enew\uFF0C\u5B83\u53EA\u7528\u4E8Eslice\u3001map\u4EE5\u53CAchan\u7684\u5185\u5B58\u521B\u5EFA\uFF0C\u800C\u4E14\u5B83\u8FD4\u56DE\u7684\u7C7B\u578B\u5C31\u662F\u8FD9\u4E09\u4E2A\u7C7B\u578B\u672C\u8EAB\uFF0C\u800C\u4E0D\u662F\u4ED6\u4EEC\u7684\u6307\u9488\u7C7B\u578B\uFF0C\u56E0\u4E3A\u8FD9\u4E09\u79CD\u7C7B\u578B\u5C31\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709\u5FC5\u8981\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6307\u9488\u4E86\u3002make\u51FD\u6570\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs">func make(t Type, size ...IntegerType) Type
</code></pre>
<p>make\u51FD\u6570\u662F\u65E0\u53EF\u66FF\u4EE3\u7684\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528slice\u3001map\u4EE5\u53CAchannel\u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u4F7F\u7528make\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u7136\u540E\u624D\u53EF\u4EE5\u5BF9\u5B83\u4EEC\u8FDB\u884C\u64CD\u4F5C\u3002\u8FD9\u4E2A\u6211\u4EEC\u5728\u4E0A\u4E00\u7AE0\u4E2D\u90FD\u6709\u8BF4\u660E\uFF0C\u5173\u4E8Echannel\u6211\u4EEC\u4F1A\u5728\u540E\u7EED\u7684\u7AE0\u8282\u8BE6\u7EC6\u8BF4\u660E\u3002</p>
<p>\u672C\u8282\u5F00\u59CB\u7684\u793A\u4F8B\u4E2D<code>var b map[string]int</code>\u53EA\u662F\u58F0\u660E\u53D8\u91CFb\u662F\u4E00\u4E2Amap\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u9700\u8981\u50CF\u4E0B\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u4E00\u6837\u4F7F\u7528make\u51FD\u6570\u8FDB\u884C\u521D\u59CB\u5316\u64CD\u4F5C\u4E4B\u540E\uFF0C\u624D\u80FD\u5BF9\u5176\u8FDB\u884C\u952E\u503C\u5BF9\u8D4B\u503C\uFF1A</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> b <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>
    b = <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>, <span class="hljs-number">10</span>)
    b[<span class="hljs-string">&quot;\u6D4B\u8BD5&quot;</span>] = <span class="hljs-number">100</span>
    fmt.Println(b)
}
</code></pre>
<h5>new\u4E0Emake\u7684\u533A\u522B</h5>
<pre><code class="hljs">1.\u4E8C\u8005\u90FD\u662F\u7528\u6765\u505A\u5185\u5B58\u5206\u914D\u7684\u3002
2.make\u53EA\u7528\u4E8Eslice\u3001map\u4EE5\u53CAchannel\u7684\u521D\u59CB\u5316\uFF0C\u8FD4\u56DE\u7684\u8FD8\u662F\u8FD9\u4E09\u4E2A\u5F15\u7528\u7C7B\u578B\u672C\u8EAB\uFF1B
3.\u800Cnew\u7528\u4E8E\u7C7B\u578B\u7684\u5185\u5B58\u5206\u914D\uFF0C\u5E76\u4E14\u5185\u5B58\u5BF9\u5E94\u7684\u503C\u4E3A\u7C7B\u578B\u96F6\u503C\uFF0C\u8FD4\u56DE\u7684\u662F\u6307\u5411\u7C7B\u578B\u7684\u6307\u9488\u3002
</code></pre>
<h4>\u7ED3\u6784\u4F53</h4>
<p>Go\u8BED\u8A00\u4E2D\u6570\u7EC4\u53EF\u4EE5\u5B58\u50A8\u540C\u4E00\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F46\u5728\u7ED3\u6784\u4F53\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4E3A\u4E0D\u540C\u9879\u5B9A\u4E49\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002</p>
<p>\u7ED3\u6784\u4F53\u662F\u7531\u4E00\u7CFB\u5217\u5177\u6709\u76F8\u540C\u7C7B\u578B\u6216\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u96C6\u5408\u3002</p>
<p>\u5B9A\u4E49\u7ED3\u6784\u4F53</p>
<p>\u7ED3\u6784\u4F53\u5B9A\u4E49\u9700\u8981\u4F7F\u7528type\u548Cstruct\u8BED\u53E5\u3002struct\u8BED\u53E5\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7ED3\u6784\u4F53\u4E2D\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\u3002type\u8BED\u53E5\u8BBE\u5B9A\u4E86\u7ED3\u6784\u4F53\u7684\u540D\u79F0\u3002\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-keyword">type</span> struct_variable_type <span class="hljs-keyword">struct</span> {
   member definition
   member definition
   ...
   member definition
}
</code></pre>
<p>\u4E00\u65E6\u5B9A\u4E49\u4E86\u7ED3\u6784\u4F53\u7C7B\u578B\uFF0C\u5B83\u5C31\u80FD\u7528\u4E8E\u53D8\u91CF\u7684\u58F0\u660E\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs">variable_name := structure_variable_type {value1, value2...valuen}
\u6216
variable_name := structure_variable_type { key1: value1, key2: value2..., keyn: valuen}
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-keyword">type</span> Books <span class="hljs-keyword">struct</span> {
   title <span class="hljs-type">string</span>
   author <span class="hljs-type">string</span>
   subject <span class="hljs-type">string</span>
   book_id <span class="hljs-type">int</span>
}
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7ED3\u6784\u4F53</span>
    fmt.Println(Books{<span class="hljs-string">&quot;Go \u8BED\u8A00&quot;</span>, <span class="hljs-string">&quot;www.runoob.com&quot;</span>, <span class="hljs-string">&quot;Go \u8BED\u8A00\u6559\u7A0B&quot;</span>, <span class="hljs-number">6495407</span>})
    <span class="hljs-comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528 key =&gt; value \u683C\u5F0F</span>
    fmt.Println(Books{title: <span class="hljs-string">&quot;Go \u8BED\u8A00&quot;</span>, author: <span class="hljs-string">&quot;www.runoob.com&quot;</span>, subject: <span class="hljs-string">&quot;Go \u8BED\u8A00\u6559\u7A0B&quot;</span>, book_id: <span class="hljs-number">6495407</span>})
    <span class="hljs-comment">// \u5FFD\u7565\u7684\u5B57\u6BB5\u4E3A 0 \u6216 \u7A7A</span>
   fmt.Println(Books{title: <span class="hljs-string">&quot;Go \u8BED\u8A00&quot;</span>, author: <span class="hljs-string">&quot;www.runoob.com&quot;</span>})
}
</code></pre>
<p>\u7ED3\u6784\u4F53\u53D8\u91CF\u4F7F\u7528struct\u5173\u952E\u5B57\u5B9A\u4E49\uFF0C\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>

<span class="hljs-keyword">type</span> Books <span class="hljs-keyword">struct</span> {
   title <span class="hljs-type">string</span>
   author <span class="hljs-type">string</span>
   subject <span class="hljs-type">string</span>
   book_id <span class="hljs-type">int</span>
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
   <span class="hljs-keyword">var</span> Book1 Books        <span class="hljs-comment">/* \u58F0\u660E Book1 \u4E3A Books \u7C7B\u578B */</span>
   <span class="hljs-keyword">var</span> Book2 Books        <span class="hljs-comment">/* \u58F0\u660E Book2 \u4E3A Books \u7C7B\u578B */</span>

   <span class="hljs-comment">/* book 1 \u63CF\u8FF0 */</span>
   Book1.title = <span class="hljs-string">&quot;Go \u8BED\u8A00&quot;</span>
   Book1.author = <span class="hljs-string">&quot;www.runoob.com&quot;</span>
   Book1.subject = <span class="hljs-string">&quot;Go \u8BED\u8A00\u6559\u7A0B&quot;</span>
   Book1.book_id = <span class="hljs-number">6495407</span>

   <span class="hljs-comment">/* book 2 \u63CF\u8FF0 */</span>
   Book2.title = <span class="hljs-string">&quot;Python \u6559\u7A0B&quot;</span>
   Book2.author = <span class="hljs-string">&quot;www.runoob.com&quot;</span>
   Book2.subject = <span class="hljs-string">&quot;Python \u8BED\u8A00\u6559\u7A0B&quot;</span>
   Book2.book_id = <span class="hljs-number">6495700</span>

   <span class="hljs-comment">/* \u6253\u5370 Book1 \u4FE1\u606F */</span>
   fmt.Printf( <span class="hljs-string">&quot;Book 1 title : %s\\n&quot;</span>, Book1.title)
   fmt.Printf( <span class="hljs-string">&quot;Book 1 author : %s\\n&quot;</span>, Book1.author)
   fmt.Printf( <span class="hljs-string">&quot;Book 1 subject : %s\\n&quot;</span>, Book1.subject)
   fmt.Printf( <span class="hljs-string">&quot;Book 1 book_id : %d\\n&quot;</span>, Book1.book_id)

   <span class="hljs-comment">/* \u6253\u5370 Book2 \u4FE1\u606F */</span>
   fmt.Printf( <span class="hljs-string">&quot;Book 2 title : %s\\n&quot;</span>, Book2.title)
   fmt.Printf( <span class="hljs-string">&quot;Book 2 author : %s\\n&quot;</span>, Book2.author)
   fmt.Printf( <span class="hljs-string">&quot;Book 2 subject : %s\\n&quot;</span>, Book2.subject)
   fmt.Printf( <span class="hljs-string">&quot;Book 2 book_id : %d\\n&quot;</span>, Book2.book_id)
}
</code></pre>
<h4>Map(\u96C6\u5408)</h4>
<blockquote>
<p>Map\u662F\u4E00\u79CD\u65E0\u5E8F\u7684\u952E\u503C\u5BF9\u7684\u96C6\u5408\u3002</p>
<p>Map\u6700\u91CD\u8981\u7684\u4E00\u70B9\u662F\u901A\u8FC7key\u6765\u5FEB\u901F\u68C0\u7D22\u6570\u636E\uFF0Ckey\u7C7B\u4F3C\u4E8E\u7D22\u5F15\uFF0C\u6307\u5411\u6570\u636E\u7684\u503C\u3002</p>
<p>Map\u662F\u4E00\u79CD\u96C6\u5408\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u50CF\u8FED\u4EE3\u6570\u7EC4\u548C\u5207\u7247\u4E00\u6837\u8FED\u4EE3\u5B83\uFF0C\u4E0D\u8FC7\uFF0CMap\u662F\u65E0\u5E8F\u7684\uFF0C\u904D\u5386Map\u65F6\u8FD4\u56DE\u7684\u952E\u503C\u5BF9\u7684\u987A\u5E8F\u662F\u4E0D\u786E\u5B9A\u7684\u3002\u5728\u83B7\u53D6Map\u7684\u503C\u65F6\uFF0C\u5982\u679C\u952E\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u8BE5\u7C7B\u578B\u7684\u96F6\u503C\uFF0C\u4F8B\u5982int\u7C7B\u578B\u7684\u96F6\u503C\u662F0\uFF0Cstring\u7C7B\u578B\u7684\u96F6\u503C</p>
<p>Map\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5982\u679C\u5C06\u4E00\u4E2AMap\u4F20\u9012\u7ED9\u4E00\u4E2A\u51FD\u6570\u6216\u8D4B\u503C\u7ED9\u53E6\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5B83\u4EEC\u6307\u5411\u540C\u4E00\u4E2A\u5E95\u5C42\u6570\u636E\u7ED3\u6784\uFF0C\u56E0\u6B64\u5BF9Map\u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u6240\u6709\u5F15\u7528\u5B83\u7684\u53D8\u91CF\u3002</p>
</blockquote>
<p>\u5B9A\u4E49Map</p>
<p>\u53EF\u4EE5\u4F7F\u7528\u5185\u5EFA\u51FD\u6570make\u6216\u4F7F\u7528map\u5173\u952E\u5B57\u6765\u5B9A\u4E49Map:</p>
<pre><code class="hljs"><span class="hljs-comment">/* \u4F7F\u7528 make \u51FD\u6570 */</span>
map_variable := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[KeyType]ValueType, initialCapacity)
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 Map</span>
m := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>)
<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u521D\u59CB\u5BB9\u91CF\u4E3A 10 \u7684 Map</span>
m := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>, <span class="hljs-number">10</span>)
</code></pre>
<p>\u7ED3\u5408\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> siteMap <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">string</span> <span class="hljs-comment">/*\u521B\u5EFA\u96C6\u5408 */</span>
    siteMap = <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">string</span>)

    <span class="hljs-comment">/* map \u63D2\u5165 key - value \u5BF9,\u5404\u4E2A\u56FD\u5BB6\u5BF9\u5E94\u7684\u9996\u90FD */</span>
    siteMap [<span class="hljs-string">&quot;Google&quot;</span>] = <span class="hljs-string">&quot;\u8C37\u6B4C&quot;</span>
    siteMap [<span class="hljs-string">&quot;Runoob&quot;</span>] = <span class="hljs-string">&quot;\u83DC\u9E1F\u6559\u7A0B&quot;</span>
    siteMap [<span class="hljs-string">&quot;Baidu&quot;</span>] = <span class="hljs-string">&quot;\u767E\u5EA6&quot;</span>
    siteMap [<span class="hljs-string">&quot;Wiki&quot;</span>] = <span class="hljs-string">&quot;\u7EF4\u57FA\u767E\u79D1&quot;</span>

    <span class="hljs-comment">/*\u4F7F\u7528\u952E\u8F93\u51FA\u5730\u56FE\u503C */</span>
    <span class="hljs-keyword">for</span> site := <span class="hljs-keyword">range</span> siteMap {
        fmt.Println(site, <span class="hljs-string">&quot;\u9996\u90FD\u662F&quot;</span>, siteMap[site])
    }

    <span class="hljs-comment">/*\u67E5\u770B\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728 */</span>
    name, ok := siteMap [<span class="hljs-string">&quot;Facebook&quot;</span>] <span class="hljs-comment">/*\u5982\u679C\u786E\u5B9A\u662F\u771F\u5B9E\u7684,\u5219\u5B58\u5728,\u5426\u5219\u4E0D\u5B58\u5728 */</span>
    <span class="hljs-comment">/*fmt.Println(capital) */</span>
    <span class="hljs-comment">/*fmt.Println(ok) */</span>
    <span class="hljs-keyword">if</span> (ok) {
        fmt.Println(<span class="hljs-string">&quot;Facebook \u7684 \u7AD9\u70B9\u662F&quot;</span>, name)
    } <span class="hljs-keyword">else</span> {
        fmt.Println(<span class="hljs-string">&quot;Facebook \u7AD9\u70B9\u4E0D\u5B58\u5728&quot;</span>)
    }
}
</code></pre>
<p>delete()\u51FD\u6570</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
        <span class="hljs-comment">/* \u521B\u5EFAmap */</span>
        countryCapitalMap := <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">string</span>{<span class="hljs-string">&quot;France&quot;</span>: <span class="hljs-string">&quot;Paris&quot;</span>, <span class="hljs-string">&quot;Italy&quot;</span>: <span class="hljs-string">&quot;Rome&quot;</span>, <span class="hljs-string">&quot;Japan&quot;</span>: <span class="hljs-string">&quot;Tokyo&quot;</span>, <span class="hljs-string">&quot;India&quot;</span>: <span class="hljs-string">&quot;New delhi&quot;</span>}

        fmt.Println(<span class="hljs-string">&quot;\u539F\u59CB\u5730\u56FE&quot;</span>)

        <span class="hljs-comment">/* \u6253\u5370\u5730\u56FE */</span>
        <span class="hljs-keyword">for</span> country := <span class="hljs-keyword">range</span> countryCapitalMap {
                fmt.Println(country, <span class="hljs-string">&quot;\u9996\u90FD\u662F&quot;</span>, countryCapitalMap [ country ])
        }

        <span class="hljs-comment">/*\u5220\u9664\u5143\u7D20*/</span> 
        <span class="hljs-built_in">delete</span>(countryCapitalMap, <span class="hljs-string">&quot;France&quot;</span>)
        fmt.Println(<span class="hljs-string">&quot;\u6CD5\u56FD\u6761\u76EE\u88AB\u5220\u9664&quot;</span>)

        fmt.Println(<span class="hljs-string">&quot;\u5220\u9664\u5143\u7D20\u540E\u5730\u56FE&quot;</span>)

        <span class="hljs-comment">/*\u6253\u5370\u5730\u56FE*/</span>
        <span class="hljs-keyword">for</span> country := <span class="hljs-keyword">range</span> countryCapitalMap {
                fmt.Println(country, <span class="hljs-string">&quot;\u9996\u90FD\u662F&quot;</span>, countryCapitalMap[country])
        }
}
</code></pre>
<h4>interface</h4>
<h5>\u63A5\u53E3</h5>
<blockquote>
<p>\u63A5\u53E3\u662FGo\u8BED\u8A00\u4E2D\u6570\u636E\u7C7B\u578B\u7684\u5173\u952E\u3002\u51E0\u4E4E\u6240\u6709\u7684\u6570\u636E\u7ED3\u6784\u90FD\u56F4\u7ED5\u63A5\u53E3\u5C55\u5F00\uFF0C\u63A5\u53E3\u662FGo\u8BED\u8A00\u4E2D\u6240\u6709\u6570\u636E\u7ED3\u6784\u7684\u6838\u5FC3\u3002Go\u8BED\u8A00\u7684\u63A5\u53E3\u5B9E\u9645\u4E0A\u662F\u4E00\u7EC4\u65B9\u6CD5\u7684\u96C6\u5408(\u63A5\u53E3\u4E0D\u80FD\u58F0\u660E\u5C5E\u6027)\u3002</p>
</blockquote>
<pre><code class="hljs"><span class="hljs-comment">/* \u5B9A\u4E49\u63A5\u53E3 */</span>
<span class="hljs-keyword">type</span> \u63A5\u53E3\u540D <span class="hljs-keyword">interface</span> {
   \u65B9\u6CD5<span class="hljs-number">1</span> [\u8FD4\u56DE\u7C7B\u578B]
   \u65B9\u6CD5<span class="hljs-number">2</span> [\u8FD4\u56DE\u7C7B\u578B]
   \u65B9\u6CD5<span class="hljs-number">3</span> [\u8FD4\u56DE\u7C7B\u578B]
   ...
   \u65B9\u6CD5N [\u8FD4\u56DE\u7C7B\u578B]
}
</code></pre>
<p>\u5B9E\u4F8B1</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-comment">// \u5B9A\u4E49Animal\u63A5\u53E3</span>
<span class="hljs-keyword">type</span> Animal <span class="hljs-keyword">interface</span> {
    sleep()
}
<span class="hljs-comment">// \u5B9A\u4E49Dog\u548CCat\u4E24\u4E2A\u7ED3\u6784\u4F53</span>
<span class="hljs-keyword">type</span> Dog <span class="hljs-keyword">struct</span> {
    name <span class="hljs-type">string</span>
}
<span class="hljs-keyword">type</span> Cat <span class="hljs-keyword">struct</span> {
    name <span class="hljs-type">string</span>
}
<span class="hljs-comment">// Dog \u5B9E\u73B0\u4E86Animal\u63A5\u53E3</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-params">(d Dog)</span></span> sleep() {
    fmt.Printf(<span class="hljs-string">&quot;%s\u6B63\u5728\u7761\u89C9\\n&quot;</span>, d.name)
}
<span class="hljs-comment">// Cat\u5B9E\u73B0\u4E86animal\u63A5\u53E3</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-params">(c Cat)</span></span> sleep() {
    fmt.Printf(<span class="hljs-string">&quot;%s\u6B63\u5728\u7761\u89C9\\n&quot;</span>, c.name)
}
<span class="hljs-comment">// \u63A5\u53E3\u7C7B\u578B\u53D8\u91CF</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">foo</span><span class="hljs-params">(ani Animal)</span></span> {
    ani.sleep()
}
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> a Animal
    <span class="hljs-keyword">var</span> d = Dog{<span class="hljs-string">&quot;\u5C0F\u9ED1&quot;</span>}
    <span class="hljs-keyword">var</span> c = Cat{<span class="hljs-string">&quot;\u5C0F\u82B1&quot;</span>}
    <span class="hljs-comment">// \u5206\u522B\u5B9E\u73B0\u7684\u65B9\u6CD5</span>
    a = d
    a.sleep()
    a = c
    a.sleep()
    <span class="hljs-comment">// \u4F5C\u4E3A\u53C2\u6570</span>
    foo(d)
    foo(c)
}
</code></pre>
<h5>\u7A7A\u63A5\u53E3</h5>
<blockquote>
<p>interface{}\u7A7A\u63A5\u53E3\u53EF\u7528\u4E8E\u4FDD\u5B58\u4EFB\u4F55\u6570\u636E\uFF0C\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u6709\u7528\u7684\u53C2\u6570\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u7C7B\u578B\u3002</p>
<p>interface{}\u7C7B\u578B\u662F\u6CA1\u6709\u65B9\u6CD5\u7684\u63A5\u53E3\u3002\u6240\u6709\u7C7B\u578B\u90FD\u81F3\u5C11\u5B9E\u73B0\u96F6\u4E2A\u65B9\u6CD5\uFF0C\u5E76\u4E14\u81EA\u52A8\u6EE1\u8DB3\u63A5\u53E3\uFF0C\u6240\u6709\u7C7B\u578B\u90FD\u6EE1\u8DB3\u7A7A\u63A5\u53E3</p>
<p>\u56E0\u6B64\u7A7A\u63A5\u53E3\u4F5C\u4E3A\u53C2\u6570\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u63A5\u53D7\u4EFB\u4F55\u7C7B\u578B\u3002</p>
</blockquote>
<p>\u7A7A\u63A5\u53E3\u5B9E\u4F8B</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;os&quot;</span>

<span class="hljs-comment">// \u7A7A\u63A5\u53E3\u53C2\u6570</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">log</span><span class="hljs-params">(v ...<span class="hljs-keyword">interface</span>{})</span></span> {
    fmt.Println(v...)
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    log(<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3.23</span>)
    <span class="hljs-comment">// \u7A7A\u63A5\u53E3\u7C7B\u578B</span>
    f,_ := os.Open(<span class="hljs-string">&quot;text.txt&quot;</span>)
    <span class="hljs-keyword">var</span> i1 <span class="hljs-keyword">interface</span>{}
    i1 = f
}
</code></pre>
<h4>\u6CDB\u578B</h4>
<blockquote>
<p>\u6CDB\u578B\u662Fgo 1.18\u53CA\u4EE5\u4E0A\u7248\u672C\u7684\u65B0\u7279\u6027\u3002</p>
</blockquote>
<p>\u57FA\u672C\u8BED\u6CD5</p>
<p>\u57FA\u672C\u8BED\u6CD5\u662F\u5728\u51FD\u6570\u540E\u7528\u65B9\u62EC\u53F7\u6307\u5B9A\u6CDB\u578B\u53C2\u6570</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> \u51FD\u6570\u540D[\u6CDB\u578B\u7C7B\u578B]<span class="hljs-params">(\u51FD\u6570\u53C2\u6570)</span></span>{\u51FD\u6570\u4F53}
</code></pre>
<p>\u4F8B\u5982</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">max</span>[<span class="hljs-title">T</span> <span class="hljs-title">int</span> | <span class="hljs-title">float64</span>]<span class="hljs-params">(a, b T)</span></span> T {
  <span class="hljs-keyword">if</span> a &gt; b {
    <span class="hljs-keyword">return</span> a
  }
  <span class="hljs-keyword">return</span> b
}
</code></pre>
<p>\u4F8B2</p>
<pre><code class="hljs"><span class="hljs-keyword">type</span> Ord <span class="hljs-keyword">interface</span> {
  <span class="hljs-type">byte</span> | <span class="hljs-type">int8</span> | <span class="hljs-type">int16</span> | <span class="hljs-type">int32</span> | <span class="hljs-type">int64</span> | <span class="hljs-type">int</span> | <span class="hljs-type">float32</span> | <span class="hljs-type">float64</span> | <span class="hljs-type">string</span>
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">max</span>[<span class="hljs-title">T</span> <span class="hljs-title">Ord</span>]<span class="hljs-params">(a, b T)</span></span> T {
  <span class="hljs-keyword">if</span> a &gt; b {
    <span class="hljs-keyword">return</span> a
  }
  <span class="hljs-keyword">return</span> b
}
</code></pre>
<h4>\u9AD8\u9636\u51FD\u6570</h4>
<blockquote>
<p>\u51FD\u6570\u5728Go\u8BED\u8A00\u4E2D\u5C5E\u4E8E\u4E00\u7B49\u516C\u6C11\uFF0C\u62E5\u6709\u4E00\u7B49\u516C\u6C11\u5F85\u9047\u7684\u8BED\u6CD5\u5143\u7D20\u53EF\u4EE5\u5982\u4E0B\u4F7F\u7528</p>
<ul>
<li>
<p>\u53EF\u4EE5\u5B58\u50A8\u5728\u53D8\u91CF\u4E2D</p>
</li>
<li>
<p>\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u51FD\u6570</p>
</li>
<li>
<p>\u53EF\u4EE5\u5728\u51FD\u6570\u5185\u90E8\u521B\u5EFA\u5E76\u53EF\u4EE5\u4F5C\u4E3A\u8FD4\u56DE\u503C\u4ECE\u51FD\u6570\u8FD4\u56DE</p>
</li>
</ul>
<p>\u4EC0\u4E48\u662F\u9AD8\u9636\u51FD\u6570\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u9AD8\u9636\u51FD\u6570\u53EF\u4EE5\u6EE1\u8DB3\u4E0B\u9762\u7684\u4E24\u4E2A\u6761\u4EF6\u4E4B\u4E00</p>
<ul>
<li>
<p>\u63A5\u53D7\u5176\u4ED6\u7684\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570</p>
</li>
<li>
<p>\u628A\u5176\u4ED6\u7684\u51FD\u6570\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE</p>
</li>
</ul>
</blockquote>
<p>\u51FD\u6570\u53EF\u4EE5\u5B58\u50A8\u5728\u53D8\u91CF\u4E2D</p>
<pre><code class="hljs"><span class="hljs-keyword">var</span> (
    myFprintf = <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(w io.Writer, format <span class="hljs-type">string</span>, a ...<span class="hljs-keyword">interface</span>{})</span></span> (<span class="hljs-type">int</span>, <span class="hljs-type">error</span>) {
        <span class="hljs-keyword">return</span> fmt.Fprintf(w, format, a...)
    }
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    fmt.Printf(<span class="hljs-string">&quot;%T\\n&quot;</span>, myFprintf) <span class="hljs-comment">// func(io.Writer, string, ...interface {}) (int, error)</span>
    myFprintf(os.Stdout, <span class="hljs-string">&quot;%s\\n&quot;</span>, <span class="hljs-string">&quot;Hello, Go&quot;</span>) <span class="hljs-comment">// \u8F93\u51FAHello\uFF0CGo</span>
}
</code></pre>
<p>\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u51FD\u6570</p>
<pre><code class="hljs"><span class="hljs-comment">// \u904D\u5386\u5207\u7247\u7684\u6BCF\u4E2A\u5143\u7D20, \u901A\u8FC7\u7ED9\u5B9A\u51FD\u6570\u8FDB\u884C\u5143\u7D20\u8BBF\u95EE</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">visit</span><span class="hljs-params">(list []<span class="hljs-type">int</span>, f <span class="hljs-keyword">func</span>(<span class="hljs-type">int</span>)</span></span>) {
    <span class="hljs-keyword">for</span> _, v := <span class="hljs-keyword">range</span> list {
        f(v)
    }
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-comment">// \u4F7F\u7528\u533F\u540D\u51FD\u6570\u6253\u5370\u5207\u7247\u5185\u5BB9</span>
    visit([]<span class="hljs-type">int</span>{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>}, <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(v <span class="hljs-type">int</span>)</span></span> {
        fmt.Println(v)
    })
}
</code></pre>
<p>\u51FD\u6570\u652F\u6301\u5728\u51FD\u6570\u5185\u521B\u5EFA\u5E76\u901A\u8FC7\u8FD4\u56DE\u503C\u8FD4\u56DE</p>
<pre><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">setup</span><span class="hljs-params">(task <span class="hljs-type">string</span>)</span></span> <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">()</span></span> {
    <span class="hljs-built_in">println</span>(<span class="hljs-string">&quot;do some setup stuff for&quot;</span>, task)
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">()</span></span> {
        <span class="hljs-built_in">println</span>(<span class="hljs-string">&quot;do some teardown stuff for&quot;</span>, task)
    }
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    teardown := setup(<span class="hljs-string">&quot;demo&quot;</span>)
    <span class="hljs-keyword">defer</span> teardown()
    <span class="hljs-built_in">println</span>(<span class="hljs-string">&quot;do some bussiness stuff&quot;</span>)
}
</code></pre>
<p>\u62E5\u6709\u81EA\u5DF2\u7684\u7C7B\u578B</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span>

<span class="hljs-keyword">type</span> CalculateType <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(<span class="hljs-type">int</span>, <span class="hljs-type">int</span>)</span></span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-params">(c *CalculateType)</span></span> Server() {
    fmt.Println(<span class="hljs-string">&quot;\u8FD9\u662F\u51FD\u6570\u7C7B\u578B&quot;</span>)
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">add</span><span class="hljs-params">(a, b <span class="hljs-type">int</span>)</span></span> {
    fmt.Println(a + b)
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">mul</span><span class="hljs-params">(a, b <span class="hljs-type">int</span>)</span></span> {
    fmt.Println(a * b)
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    a := CalculateType(add)
    b := CalculateType(mul)

    a(<span class="hljs-number">2</span>, <span class="hljs-number">4</span>)
    b(<span class="hljs-number">2</span>, <span class="hljs-number">4</span>)

    a.Server()
    b.Server()
}
</code></pre>
<p>\u9AD8\u9636\u51FD\u6570</p>
<p>\u51FD\u6570\u4F5C\u4E3A\u503C\u65F6\uFF0C\u53EF\u4EE5\u7528\u6765\u63D0\u5347\u670D\u52A1\u7684\u6269\u5C55\u6027\u3002</p>
<pre><code class="hljs"><span class="hljs-keyword">var</span> opMap = <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(<span class="hljs-type">int</span>, <span class="hljs-type">int</span>)</span></span> <span class="hljs-type">int</span>{
    <span class="hljs-string">&quot;+&quot;</span>: add,
    <span class="hljs-string">&quot;-&quot;</span>: sub,
    <span class="hljs-string">&quot;*&quot;</span>: mul,
    <span class="hljs-string">&quot;/&quot;</span>: div,
}

f := opMap[op]
f()
</code></pre>
<h3>\u5305(package)</h3>
<blockquote>
<p>Go\u8BED\u8A00\u4E2D\u652F\u6301\u6A21\u5757\u5316\u7684\u5F00\u53D1\u7406\u5FF5\uFF0C\u4E00\u4E2A\u5305\u662F\u4E00\u4E2A\u6216\u591A\u4E2AGo\u6E90\u7801\u6587\u4EF6(.go\u7ED3\u5C3E\u7684\u6587\u4EF6)\u7EC4\u6210\uFF0C\u662F\u4E00\u79CD\u9AD8\u7EA7\u7684\u4EE3\u7801\u590D\u7528\u65B9\u6848\uFF0CGo\u8BED\u8A00\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u5F88\u591A\u5185\u7F6E\u5305\uFF0C\u5982<code>fmt</code>\u3001<code>os</code>\u3001<code>io</code>\u7B49\u3002\u4F7F\u7528\u5305\u7684\u5BF9\u8C61\u6216\u8005\u51FD\u6570\u65F6\uFF0C\u9996\u5148\u8981\u901A\u8FC7import\u5F15\u5165\u5B83\u3002</p>
<ul>
<li>
<p>\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\u9762\u4E0B\u9762\u76F4\u63A5\u5305\u542B\u7684\u6587\u4EF6\u53EA\u80FD\u5F52\u5C5E\u4E00\u4E2Apackage\uFF0C\u540C\u6837\u4E00\u4E2Apackage\u7684\u6587\u4EF6\u4E0D\u80FD\u5728\u591A\u4E2A\u6587\u4EF6\u5939\u4E0B\u3002</p>
</li>
<li>
<p>\u5305\u540D\u53EF\u4EE5\u4E0D\u548C\u6587\u4EF6\u5939\u540D\u5B57\u4E00\u6837\uFF0C\u5305\u540D\u4E0D\u80FD\u5305\u542B<code>-</code>\u7B26\u53F7\u3002</p>
</li>
<li>
<p>\u5305\u540D\u4E3Amain\u7684\u5305\u4E3A\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\u5305\uFF0C\u8FD9\u79CD\u5305\u7F16\u8BD1\u540E\u4F1A\u5F97\u5230\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u800C\u7F16\u8BD1\u4E0D\u5305\u542Bmain\u5305\u7684\u6E90\u4EE3\u7801\u5219\u4E0D\u4F1A\u5F97\u5230\u53EF\u6267\u884C\u6587\u4EF6\u3002</p>
</li>
</ul>
</blockquote>
<h4>\u5305\u8DEF\u5F84</h4>
<ol>
<li>\u76F8\u5BF9\u8DEF\u5F84</li>
</ol>
<pre><code class="hljs"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;./module&quot;</span> <span class="hljs-comment">// \u5F15\u5165\u7684\u5305\u5728\u5F53\u524D\u6587\u4EF6\u540C\u4E00\u76EE\u5F55\u7684 module \u76EE\u5F55</span>
</code></pre>
<ol start="2">
<li>\u7EDD\u5BF9\u8DEF\u5F84</li>
</ol>
<pre><code class="hljs"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;LearnGo/init&quot;</span> <span class="hljs-comment">// \u5F15\u5165\u7684\u5305\u5728 gopath/src/LearnGo/init \u76EE\u5F55\u3002</span>
</code></pre>
<ol start="3">
<li>Go Module\u6A21\u5F0F\u4E0B</li>
</ol>
<p>\u6839\u76EE\u5F55\u4E2D\u5305\u542B\xA0<code>go.mod</code>\xA0\u6587\u4EF6\uFF0C<code>go.mod</code>\xA0\u6587\u4EF6\u5B9A\u4E49\u4E86\u6A21\u5757\u7684\u6A21\u5757\u8DEF\u5F84\uFF0C\u5B83\u4E5F\u662F\u7528\u4E8E\u6839\u76EE\u5F55\u7684\u5BFC\u5165\u8DEF\u5F84\uFF0C\u4EE5\u53CA\u5B83\u7684\u4F9D\u8D56\u6027\u8981\u6C42\u3002\u6BCF\u4E2A\u4F9D\u8D56\u6027\u8981\u6C42\u90FD\u88AB\u5199\u4E3A\u6A21\u5757\u8DEF\u5F84\u548C\u7279\u5B9A\u8BED\u4E49\u7248\u672C\u3002</p>
<p><code>go.mod</code>\xA0\u6587\u4EF6\u6240\u5728\u7684\u9876\u5C42\u76EE\u5F55\u4E5F\u88AB\u79F0\u4E3A\xA0<code>module</code>\xA0\u7684\u6839\u76EE\u5F55\uFF0C<code>module</code>\xA0\u6839\u76EE\u5F55\u4EE5\u53CA\u5B83\u5B50\u76EE\u5F55\u4E0B\u7684\u6240\u6709 Go \u5305\u5747\u5F52\u5C5E\u4E8E\u8FD9\u4E2A Go Module\uFF0C\u8FD9\u4E2A module \u4E5F\u88AB\u79F0\u4E3A\xA0<strong>main module</strong>\u3002</p>
<p>go mod\u4E5F\u662F1.13\u4E4B\u540E\uFF0C\u4E0D\u9700\u8981\u5728\u7279\u5B9A\u7684\u76EE\u5F55\u4E2D\u521B\u5EFA\u9879\u76EE\uFF0C\u53EF\u4EE5\u4EFB\u4F55\u76EE\u5F55\u4E0B\u521B\u5EFA\u9879\u76EE\uFF0C1.16\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u5C31\u5F00\u542F\uFF0C\u4E5F\u662FGo\u63A8\u8350\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u7B80\u5355\u65B9\u4FBF\u3002</p>
<h4>\u5F15\u5165\u5305\u7684\u7279\u6B8A\u65B9\u5F0F</h4>
<ul>
<li>
<p>\u70B9\u64CD\u4F5C</p>
<p>\u8FD9\u4E2A\u70B9\u64CD\u4F5C\u7684\u542B\u4E49\u5C31\u662F\u8FD9\u4E2A\u5305\u5BFC\u5165\u4E4B\u540E\uFF0C\u5728\u8C03\u7528\u8FD9\u4E2A\u5305\u7684\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u7701\u7565\u524D\u7F00\u7684\u5305\u540D\u3002</p>
</li>
</ul>
<pre><code class="hljs"><span class="hljs-keyword">import</span> . <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-comment">// \u4F8B\u5982\uFF1Afmt.Println(&quot;hello world&quot;) \u53EF\u4EE5\u7701\u7565\u7684\u5199\u6210 Println(&quot;hello world&quot;)\u3002</span>
</code></pre>
<p>\u7279\u522B\u8BF4\u660E\uFF0C\u56E0\u4E3A.\u5BFC\u5165\u5BB9\u6613\u9020\u6210\u547D\u540D\u51B2\u7A81\uFF0C\u4E00\u822C\u5F88\u5C11\u7528\uFF0C<code>.</code> \u5BFC\u5165\u4F1A\u6709\u4E00\u4E2A\u8B66\u544Ashould not use dot imports (ST1001)go-staticcheck</p>
<ul>
<li>\u522B\u540D\u64CD\u4F5C</li>
</ul>
<p>\u522B\u540D\u64CD\u4F5C\u53EF\u4EE5\u5305\u547D\u540D\u6210\u53E6\u4E00\u4E2A\u540D\u5B57</p>
<pre><code class="hljs"><span class="hljs-keyword">import</span> f <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-comment">// \u522B\u540D\u64CD\u4F5C\u7684\u8BDD\u8C03\u7528\u5305\u51FD\u6570\u65F6\u524D\u7F00\u53D8\u6210\u4E86\u6211\u4EEC\u7684\u524D\u7F00\uFF0C\u5373 f.Println(&quot;hello world&quot;)\u3002</span>
</code></pre>
<ul>
<li><code>_</code>\u64CD\u4F5C</li>
</ul>
<p><code>_</code>\u64CD\u4F5C\u662F\u5F15\u5165\u8BE5\u5305\uFF0C\u8C03\u7528\u8BE5\u5305\u91CC\u7684init\u51FD\u6570\u3002\u800C\u4E0D\u76F4\u63A5\u4F7F\u7528\u5305\u91CC\u9762\u7684\u51FD\u6570\u3002</p>
<pre><code class="hljs"><span class="hljs-keyword">import</span> _ <span class="hljs-string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="hljs-comment">// _\u64CD\u4F5C\u5176\u5B9E\u662F\u5F15\u5165\u8BE5\u5305\uFF0C\u800C\u4E0D\u76F4\u63A5\u4F7F\u7528\u5305\u91CC\u9762\u7684\u51FD\u6570\uFF0C\u800C\u662F\u8C03\u7528\u4E86\u8BE5\u5305\u91CC\u9762\u7684 init \u51FD\u6570\u3002</span>
</code></pre>
<h3>init\u51FD\u6570</h3>
<blockquote>
<p>Go init\u51FD\u6570\u662F\u4E00\u79CD\u7279\u6B8A\u51FD\u6570\uFF0C\u7528\u4E8E\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\u81EA\u52A8\u6267\u884C\u4E00\u6B21\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B8C\u6210\u7A0B\u5E8F\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u5982\u521D\u59CB\u5316\u6570\u636E\u7684\u8FDE\u63A5\u3001\u8F7D\u5165\u672C\u5730\u914D\u7F6E\u6587\u4EF6\u7B49\uFF0C\u6BCF\u4E2A\u5305\u53EF\u4EE5\u5305\u542B\u591A\u4E2Ainit\u51FD\u6570\uFF0C\u6240\u6709\u7684init\u51FD\u6570\u90FD\u5728main\u51FD\u6570\u6267\u884C\u524D\u88AB\u8C03\u7528\u3002</p>
</blockquote>
<p>init\u51FD\u6570\u4E0E\u5305\u7EA7\u53D8\u91CF\u7684\u521D\u59CB\u5316\u987A\u5E8F\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<!-- ![init\u51FD\u6570\u6267\u884C\u987A\u5E8F](./img/go-init.png) -->
<img src="./img/go-init.png" width="680" height="300" alt="init\u51FD\u6570\u6267\u884C\u987A\u5E8F" />
<p><strong>\u7279\u70B9</strong></p>
<ul>
<li>
<p>init\u51FD\u6570\u5148\u4E8Emain\u51FD\u6570\u81EA\u52A8\u6267\u884C\uFF0C\u4E0D\u80FD\u88AB\u5176\u4ED6\u51FD\u6570\u8C03\u7528\uFF1B</p>
</li>
<li>
<p>init\u51FD\u6570\u6CA1\u6709\u8F93\u5165\u53C2\u6570\u3001\u8FD4\u56DE\u503C\uFF1B</p>
</li>
<li>
<p>\u6BCF\u4E2A\u5305\u53EF\u4EE5\u6709\u591A\u4E2Ainit\u51FD\u6570\uFF1B</p>
</li>
<li>
<p>\u540C\u4E00\u4E2A\u5305\u7684init\u6267\u884C\u987A\u5E8F\uFF0Cgo\u6CA1\u6709\u660E\u786E\u5B9A\u4E49\uFF0C\u7F16\u7A0B\u65F6\u8981\u6CE8\u610F\u7A0B\u5E8F\u4E0D\u8981\u4F9D\u8010\u8FD9\u4E2A\u6267\u884C\u987A\u5E8F\uFF1B</p>
</li>
<li>
<p>\u4E0D\u540C\u5305\u7684init\u51FD\u6570\u6309\u7167\u5305\u5BFC\u5165\u7684\u4F9D\u8010\u5173\u7CFB\u51B3\u5B9A\u6267\u884C\u987A\u5E8F\u3002</p>
</li>
</ul>
<h3>\u6587\u4EF6\u53CA\u76EE\u5F55\u64CD\u4F5C</h3>
<blockquote>
<p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u6587\u4EF6\u4F7F\u7528\u6307\u5411os.File\u7C7B\u578B\u7684\u6307\u9488\u6765\u8868\u793A\u7684\uFF0C\u4E5F\u53EB\u505A\u6587\u4EF6\u53E5\u67C4\u3002\u4F7F\u7528\u8FC7\u6807\u51C6\u8F93\u5165os.Stdio\u548Cos.Stdout\uFF0C\u4ED6\u4EEC\u7684\u7C7B\u578B\u90FD\u662F*os.File\u3002</p>
</blockquote>
<h4>\u6587\u4EF6\u8BFB\u53D6</h4>
<p><strong>\u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528os.Open\u548C\u5207\u7247\u7684\u8BFB\u53D6\u6587\u4EF6</strong></p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;io&quot;</span>
    <span class="hljs-string">&quot;net/http&quot;</span>
    <span class="hljs-string">&quot;os&quot;</span>

    <span class="hljs-string">&quot;github.com/gin-gonic/gin&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    file, err := os.Open(<span class="hljs-string">&quot;./demo.log&quot;</span>)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(err)
        <span class="hljs-keyword">return</span>
    }
    <span class="hljs-keyword">defer</span> file.Close()
    <span class="hljs-keyword">var</span> content []<span class="hljs-type">byte</span>
    <span class="hljs-comment">// \u5FAA\u73AF\u8BFB\u53D6\u5168\u90E8\u5185\u5BB9</span>
    <span class="hljs-keyword">for</span> {
        <span class="hljs-comment">// \u521B\u5EFA\u5207\u7247\u4FDD\u5B58\u5B57\u8282</span>
        <span class="hljs-keyword">var</span> temStr = <span class="hljs-built_in">make</span>([]<span class="hljs-type">byte</span>, <span class="hljs-number">128</span>)
        <span class="hljs-comment">//\u4F7F\u7528file.Read\u8BFB\u53D6\u5185\u5BB9</span>
        <span class="hljs-built_in">len</span>, err := file.Read(temStr)
        <span class="hljs-comment">// \u8BFB\u53D6\u5B8C\u6BD5</span>
        <span class="hljs-keyword">if</span> err == io.EOF {
            <span class="hljs-keyword">break</span>
        } <span class="hljs-keyword">else</span> {
            content = <span class="hljs-built_in">append</span>(content, temStr[:<span class="hljs-built_in">len</span>]...)
        }
    }
    fmt.Println(<span class="hljs-type">string</span>(content))
}
</code></pre>
<p><strong>\u65B9\u6CD5\u4E8C\uFF1A\u901A\u8FC7bufio\u65B9\u5F0F\uFF0C\u9010\u884C\u8BFB\u53D6</strong></p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;bufio&quot;</span>
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;io&quot;</span>
    <span class="hljs-string">&quot;net/http&quot;</span>
    <span class="hljs-string">&quot;os&quot;</span>

    <span class="hljs-string">&quot;github.com/gin-gonic/gin&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    f, err := os.Open(<span class="hljs-string">&quot;demo.log&quot;</span>)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(err)
        <span class="hljs-keyword">return</span>
    }
    <span class="hljs-keyword">defer</span> f.Close()
    reader := bufio.NewReader(f)
    <span class="hljs-keyword">var</span> content <span class="hljs-type">string</span>
    <span class="hljs-keyword">for</span> {
        <span class="hljs-comment">// \u4E00\u6B21\u8BFB\u53D6\u4E00\u884C</span>
        str, err := reader.ReadString(<span class="hljs-string">&#x27;\\n&#x27;</span>)
        <span class="hljs-keyword">if</span> err == io.EOF {
            <span class="hljs-comment">// \u62FC\u63A5\u6700\u540E\u4E00\u884C</span>
            content += str
            <span class="hljs-comment">// \u8DF3\u51FA\u5F53\u524D\u5FAA\u73AF</span>
            <span class="hljs-keyword">break</span>
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-comment">// \u62FC\u63A5\u5176\u4ED6\u884C</span>
            content += str
        }
    }
    fmt.Println(content)
}
</code></pre>
<p><strong>\u65B9\u6CD5\u4E09\uFF1A\u901A\u8FC7os.ReadFile\u76F4\u63A5\u8BFB\u53D6\u6574\u4E2A\u6587\u4EF6\u5185\u5BB9(ioutil\u5305\u57281.16\u4E4B\u540E\u5DF2\u5F03\u7528)</strong></p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;net/http&quot;</span>
    <span class="hljs-string">&quot;os&quot;</span>

    <span class="hljs-string">&quot;github.com/gin-gonic/gin&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    msg, err := os.ReadFile(<span class="hljs-string">&quot;demo.log&quot;</span>)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(err)
        <span class="hljs-keyword">return</span>
    }
    fmt.Println(msg)
}
</code></pre>
<h4>\u6587\u4EF6\u5199\u5165</h4>
<p>\u5199\u6587\u4EF6\uFF0C\u5148\u901A\u8FC7os.OpenFile\u6587\u4EF6\u53E5\u67C4\uFF0C\u7136\u540E\u518D\u901A\u8FC7bufio.NewWriter\u4EE5\u53CAWriteString\u6765\u5199\u5165\u5B57\u7B26\u4E32\uFF0C\u8BE6\u7EC6\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;bufio&quot;</span>
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;net/http&quot;</span>
    <span class="hljs-string">&quot;os&quot;</span>

    <span class="hljs-string">&quot;github.com/gin-gonic/gin&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    pf, err := os.OpenFile(<span class="hljs-string">&quot;demo.log&quot;</span>, os.O_WRONLY|os.O_CREATE, <span class="hljs-number">0666</span>)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(err)
        <span class="hljs-keyword">return</span>
    }
    <span class="hljs-keyword">defer</span> pf.Close()

    outWriter := bufio.NewWriter(pf)
    outString := <span class="hljs-string">&quot;hello world!\\n&quot;</span>

    <span class="hljs-keyword">for</span> i := <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++ {
        outWriter.WriteString(outString)
    }
    outWriter.Flush()
}
</code></pre>
<p>\u4EE5\u4E0A\u662F\u9010\u884C\u5199\u5165\uFF0C\u4E5F\u53EF\u4E00\u6B21\u5199\u5165\uFF0C\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;net/http&quot;</span>
    <span class="hljs-string">&quot;os&quot;</span>

    <span class="hljs-string">&quot;github.com/gin-gonic/gin&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">(c *gin.Context)</span></span> {
    f, err := os.OpenFile(<span class="hljs-string">&quot;demo.log&quot;</span>, os.O_WRONLY|os.O_CREATE, <span class="hljs-number">0666</span>)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(err)
        <span class="hljs-keyword">return</span>
    }
    <span class="hljs-keyword">defer</span> f.Close()
    f.Write([]<span class="hljs-type">byte</span>(<span class="hljs-string">&quot;hello go lang&quot;</span>))
    c.String(http.StatusOK, <span class="hljs-string">&quot;hello golang&quot;</span>)
}
</code></pre>
<p>OpenFile\u51FD\u6570\u6709\u4E09\u4E2A\u53C2\u6570\uFF1A \u6587\u4EF6\u540D\u3001\u4E00\u4E2A\u6216\u591A\u4E2A\u6807\u5FD7(\u4F7F\u7528\u903B\u8F91\u7B26&quot;|&quot;\u8FDE\u63A5)\uFF0C\u4F7F\u7528\u7684\u6587\u4EF6\u6743\u9650\u3002</p>
<p>\u6211\u4EEC\u901A\u5E38\u4F1A\u7528\u5230\u4EE5\u4E0B\u6807\u5FD7\uFF1A</p>
<ul>
<li><code>os.O_RDONLY</code>\uFF1A\u53EA\u8BFB\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6</li>
<li><code>os.O_WRONLY</code>\uFF1A\u53EA\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6</li>
<li><code>os.O_RDWR</code>\uFF1A\u8BFB\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6</li>
<li><code>O_APPEND</code>\uFF1A\u5199\u64CD\u4F5C\u65F6\u5C06\u6570\u636E\u9644\u52A0\u5230\u6587\u4EF6\u5C3E\u90E8</li>
<li><code>os.O_CREATE</code>\uFF1A\u521B\u5EFA\uFF1A\u5982\u679C\u6307\u5B9A\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5C31\u521B\u5EFA\u8BE5\u6587\u4EF6\u3002</li>
<li><code>os.O_EXCL</code>\uFF1A\u548CO_CREATE\u914D\u5408\u4F7F\u7528\uFF0C\u6587\u4EF6\u5FC5\u987B\u4E0D\u5B58\u5728</li>
<li><code>O_SYNC</code>\uFF1A\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u540C\u6B65I/O</li>
<li><code>os.O_TRUNC</code>\uFF1A\u622A\u65AD\uFF1A\u5982\u679C\u6307\u5B9A\u6587\u4EF6\u5DF2\u5B58\u5728\uFF0C\u5C31\u5C06\u8BE5\u6587\u4EF6\u7684\u957F\u5EA6\u622A\u4E3A0\u3002</li>
</ul>
<h4>bufio\u5305</h4>
<blockquote>
<p>bufio\u662Fbuffered I/O\u7684\u7F29\u5199\uFF0C\u8FD9\u4E2A\u4EE3\u7801\u5305\u7684\u7A0B\u5E8F\u5B9E\u4F53\u5B9E\u73B0\u7684I/O\u64CD\u4F5C\u90FD\u5185\u7F6E\u4E86\u7F13\u51B2\u533A\u3002</p>
</blockquote>
<p>bufio\u5305\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u4E3B\u8981\u6709\uFF1A</p>
<ul>
<li>Reader</li>
<li>Scanner</li>
<li>Writer\u548CReadWriter</li>
</ul>
<p>\u8FD9\u4E9B\u6570\u636E\u7C7B\u578B\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u9700\u8981\u5305\u88C5\u4E00\u4E2A\u6216\u591A\u4E2A\u7B80\u5355I/O\u63A5\u53E3\u7C7B\u578B\u7684\u503C\u3002</p>
<h3>\u5E76\u53D1\u7F16\u7A0B(\u534F\u7A0B)</h3>
<blockquote>
<p>\u6709\u4EBA\u628AGo\u8BED\u8A00\u6BD4\u4F5C21\u4E16\u7EAA\u7684C\u8BED\u8A00\uFF0C\u7B2C\u4E00\u662F\u56E0\u4E3AGo\u8BED\u8A00\u8BBE\u8BA1\u7B80\u5355\uFF0C\u7B2C\u4E8C\u5219\u662F\u56E0\u4E3A21\u4E16\u7EAA\u6700\u91CD\u8981\u7684\u5C31\u662F\u5E76\u53D1\u8BBE\u8BA1\uFF0C\u800CGo\u4ECE\u8BED\u8A00\u5C42\u9762\u5C31\u652F\u6301\u5E76\u53D1\u3002\u540C\u65F6\u5B9E\u73B0\u4E86\u81EA\u52A8\u5783\u573E\u56DE\u6536\u673A\u5236\u3002</p>
<p>Go\u8BED\u8A00\u7684\u5E76\u53D1\u673A\u5236\u8FD0\u7528\u8D77\u6765\u975E\u5E38\u7B80\u4FBF\uFF0C\u5728\u542F\u52A8\u5E76\u53D1\u7684\u65B9\u5F0F\u4E0A\u76F4\u63A5\u6DFB\u52A0\u4E86\u8BED\u8A00\u7EA7\u7684\u5173\u952E\u5B57\u5C31\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u548C\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u6BD4\u66F4\u52A0\u8F7B\u91CF\u3002</p>
<p>\u5176\u4ED6\u8BED\u8A00\uFF0C\u9AD8\u5E76\u53D1\u573A\u666F\u591A\u4F7F\u7528\u591A\u7EBF\u7A0B\u6765\u652F\u6301\uFF0C\u800CGo\u5929\u7136\u652F\u6301\u5E76\u53D1\uFF0C\u8FD9\u662F\u56E0\u4E3AGo\u91C7\u7528\u66F4\u4E0A\u5C42\u7684goroutine\u6765\u652F\u6301\u9AD8\u5E76\u53D1\u573A\u666F\u3002goroutine\u53EA\u662F\u7531\u5B98\u65B9\u5B9E\u73B0\u7684\u7528\u6237\u6001\u4E0B\u7684\u8D85\u7EA7\u201C\u7EBF\u7A0B\u6C60\u201D\uFF0C\u6BCF\u4E2A4~5KB\u7684\u6808\u5185\u5B58\u5360\u7528\u548C\u7531\u4E8E\u5B9E\u73B0\u673A\u5236\u800C\u5927\u798F\u51CF\u5C11\u7684\u521B\u5EFA\u548C\u9500\u6BC1\u5F00\u9500\u662Fgo\u9AD8\u5E76\u53D1\u7684\u6839\u672C\u539F\u56E0\u3002</p>
</blockquote>
<h4>Goroutine</h4>
<blockquote>
<p>goroutine\u662F\u4E00\u79CD\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u5B9E\u73B0\uFF0C\u53EF\u5728\u5355\u4E2A\u8FDB\u7A0B\u91CC\u6267\u884C\u6210\u5343\u4E0A\u4E07\u7684\u5E76\u53D1\u4EFB\u52A1\uFF0C\u5B83\u662FGo\u8BED\u8A00\u5E76\u53D1\u8BBE\u8BA1\u7684\u6838\u5FC3\u3002</p>
<p>\u4E00\u4E2Agoroutine\u7684\u6808\u5728\u5176\u751F\u547D\u5468\u671F\u5F00\u59CB\u65F6\u53EA\u6709\u5F88\u5C0F\u7684\u6808(\u5178\u578B\u60C5\u51B5\u4E0B2KB)\uFF0Cgoruntine\u7684\u6808\u4E0D\u662F\u56FA\u5B9A\u7684\uFF0C\u4ED6\u53EF\u4EE5\u6309\u9700\u589E\u5927\u548C\u7F29\u5C0F\uFF0Cgoroutine\u7684\u6808\u5927\u5C0F\u9650\u5236\u53EF\u4EE5\u8FBE\u52301GB\uFF0C\u867D\u7136\u6781\u5C11\u4F1A\u7528\u5230\u8FD9\u4E48\u5927\u3002\u6240\u4EE5\u5728Go\u8BED\u8A00\u4E2D\u4E00\u6B21\u521B\u5EFA10\u4E07\u5DE6\u53F3\u7684goroutine\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p>
<p>\u4F7F\u7528go\u5173\u952E\u5B57\u5C31\u53EF\u4EE5\u521B\u5EFAgoroutine\uFF0C\u5C06go\u58F0\u660E\u653E\u5230\u4E00\u4E2A\u9700\u8C03\u7528\u7684\u51FD\u6570\u4E4B\u524D\uFF0C\u5728\u76F8\u540C\u5730\u5740\u7A7A\u95F4\u8C03\u7528\u8FD0\u884C\u8FD9\u4E2A\u51FD\u6570\uFF0C\u8FD9\u6837\u8BE5\u51FD\u6570\u6267\u884C\u65F6\u4FBF\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E76\u53D1\u7EBF\u7A0B\uFF0C\u8FD9\u79CD\u7EBF\u7A0B\u5728Go\u8BED\u8A00\u4E2D\u5219\u88AB\u79F0\u4E3Agoroutine\u3002</p>
</blockquote>
<p>\u9996\u5148\u89C2\u5BDF\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u4F7F\u7528go\u5173\u952E\u5B57\u53BB\u542F\u52A8\u4E00\u4E2A\u534F\u7A0B\uFF0C\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p>
<p>main.go</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> (
        <span class="hljs-string">&quot;fmt&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">Say</span><span class="hljs-params">(msg <span class="hljs-type">string</span>)</span></span> {
        fmt.Println(msg)
}
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
        <span class="hljs-keyword">go</span> Say(<span class="hljs-string">&quot;func say : hello world!!!&quot;</span>)
        fmt.Println(<span class="hljs-string">&quot;main say : hello world&quot;</span>)
}
</code></pre>
<p>\u6267\u884Cgo run main.go\u540E\uFF0C\u53D1\u73B0\u8F93\u51FA\u53EA\u6709main say: hello world,\u800C\u6CA1\u6709Say\u51FD\u6570\u7684\u8F93\u51FA\u3002</p>
<p>\u539F\u56E0\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u4E3B\u51FD\u6570main\u9996\u5148\u6267\u884C\u5B8C\u5E76\u8FD4\u56DEreturn\u4E86\uFF0C\u800Cgo Say(&quot;func say : hello world!!!&quot;)\u9700\u8981\u4E3A\u534F\u7A0B\u521D\u59CB\u5316\u6D88\u8017\u4E00\u4E9B\u65F6\u95F4\uFF0C\u56E0\u4E3A\u665A\u4E8Emain\u7684return\uFF0C\u56E0\u4E3A\u5C31\u6CA1\u6709\u8F93\u51FA\u6253\u5370\u3002</p>
<p>\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0B\u7A0B\u5E8F</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> (
        <span class="hljs-string">&quot;fmt&quot;</span>
        <span class="hljs-string">&quot;time&quot;</span>
)
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">Say</span><span class="hljs-params">(msg <span class="hljs-type">string</span>)</span></span> {
        fmt.Println(msg)
}


<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
        <span class="hljs-keyword">go</span> Say(<span class="hljs-string">&quot;func say : hello world!!!&quot;</span>)
        fmt.Println(<span class="hljs-string">&quot;main say : hello world&quot;</span>)
        time.Sleep(time.Second * <span class="hljs-number">3</span>) <span class="hljs-comment">//\u8BA9\u4E3B\u7A0B\u5E8F\u4F11\u77203\u79D2</span>
}
</code></pre>
<p>\u8BA9main\u51FD\u6570\u4F11\u77203\u79D2\uFF0CSay\u51FD\u6570\u7684\u6253\u5370\u5C31\u987A\u5229\u8F93\u51FA\u4E86\u3002</p>
<p>\u5728Go\u4E2D\u4F7F\u7528goroutine\u8FDB\u884C\u5E76\u53D1\u7F16\u7A0B\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u4F46\u662F\u8DDF\u591A\u7EBF\u7A0B\u4E00\u6837\uFF0C\u5E76\u53D1\u7F16\u7A0B\u96BE\u70B9\u5728\u4E8E\u7EBF\u7A0B\u540C\u6B65\u548C\u7EBF\u7A0B\u5B89\u5168\uFF0C\u56E0\u4E3A\u4E0B\u6587\u91CD\u5360\u63A2\u7A76goroutine\u5982\u4F55\u5B9E\u73B0\u5E76\u53D1\u63A7\u5236\u548C\u5E76\u53D1\u5B89\u5168\u3002</p>
<h4>\u5E76\u53D1\u63A7\u5236</h4>
<p>\u591A\u7EBF\u7A0B\u4F1A\u6709\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF0C\u5982\u4F55\u4FDD\u8BC1\u7EBF\u7A0B\u95F4\u901A\u4FE1\u548C\u6570\u636E\u5171\u4EAB\u662F\u591A\u7EBF\u7A0B\u7F16\u7A0B\u4E2D\u7684\u5927\u96BE\u9898\u3002\u534F\u7A0B\u4F5C\u4E3A\u7528\u6237\u7EA7\u7EBF\u7A0B\u540C\u6837\u4E5F\u4F1A\u9762\u4E34\u4E00\u6837\u7684\u95EE\u9898\uFF0CGo\u7684\u5E76\u53D1\u63A7\u5236\u662F\u901A\u8FC7\u8FD9\u51E0\u79CD\u65B9\u5F0F\u8FDB\u884C\u7684\u3002</p>
<ul>
<li>
<p>\u5168\u5C40\u53D8\u91CF</p>
</li>
<li>
<p>WaitGroup</p>
</li>
<li>
<p>channel</p>
</li>
<li>
<p>context</p>
</li>
</ul>
<h5>Sync.WaitGroup</h5>
<p>Sync.WaitGroup\u662F\u4E00\u79CD\u5B9E\u73B0\u5E76\u53D1\u63A7\u5236\u65B9\u5F0F\uFF0CWaitGroup\u5BF9\u8C61\u5185\u90E8\u6709\u4E00\u4E2A\u8BA1\u6570\u5668\uFF0C\u6700\u521D\u4E3A0\u5F00\u59CB\uFF0C\u5B83\u6709\u4E09\u4E2A\u65B9\u6CD5\uFF1AAdd()\uFF0CDone()\uFF0CWait()\u7528\u6765\u63A7\u5236\u8BA1\u6570\u5668\u7684\u6570\u91CF\u3002</p>
<ul>
<li>
<p>Add(n) \u628A\u8BA1\u6570\u5668\u8BBE\u7F6E\u4E3An</p>
</li>
<li>
<p>Done() \u6BCF\u6B21\u628A\u8BA1\u6570\u5668-1</p>
</li>
<li>
<p>Wait() \u4F1A\u963B\u585E\u4EE3\u7801\u7684\u8FD0\u884C\uFF0C\u76F4\u5230\u8BA1\u6570\u5668\u51CF\u4E3A0</p>
</li>
</ul>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main
<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;sync&quot;</span>
)
<span class="hljs-comment">// \u5E76\u53D1\u63A7\u5236</span>
<span class="hljs-keyword">var</span> wg sync.WaitGroup
<span class="hljs-comment">// \u534F\u7A0B\u51FD\u6570</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">Say</span><span class="hljs-params">(msg <span class="hljs-type">string</span>)</span></span> {
    <span class="hljs-keyword">defer</span> wg.Done() <span class="hljs-comment">// \u8BA1\u6570\u5668\u51CF1</span>
    fmt.Println(msg)
}
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">for</span> i := <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++ {
        wg.Add(<span class="hljs-number">1</span>)                                          <span class="hljs-comment">// \u8BA1\u6570\u5668\u52A01</span>
        <span class="hljs-keyword">go</span> Say(fmt.Sprintf(<span class="hljs-string">&quot;func %d say: hello world&quot;</span>, i)) <span class="hljs-comment">// \u542F\u52A8\u534F\u7A0B</span>
    }
    wg.Wait() <span class="hljs-comment">// \u7B49\u5F85\u534F\u7A0B\u5B8C\u6210</span>
    fmt.Println(<span class="hljs-string">&quot;main say: hello world&quot;</span>)
}
</code></pre>
<h4>channel(\u4FE1\u9053)</h4>
<p>Go\u8BED\u8A00\u4E2D\u7684\u901A\u9053(channel)\u662F\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u3002\u901A\u9053\u50CF\u4E00\u4E2A\u4F20\u9012\u5E26\u6216\u8005\u961F\u5217\uFF0C\u603B\u662F\u9075\u5FAA\u5148\u5165\u5148\u51FA\u7684\u89C4\u5219\uFF0C\u4FDD\u8BC1\u6536\u53D1\u6570\u636E\u7684\u987A\u5E8F\u3002channel\u8DDFLinux\u4E2D\u7684\u53CC\u5411\u7BA1\u9053\u5F88\u50CF\uFF0C\u4E5F\u662F\u7528\u4E8E\u8FDB\u7A0B\u548C\u534F\u7A0B\u95F4\u901A\u4FE1\u3002</p>
<p>channel\u7684\u5B9A\u4E49\u6253\u5F00\u3001\u53D1\u9001\u3001\u63A5\u6536\u3001\u5173\u95ED</p>
<pre><code class="hljs"><span class="hljs-keyword">chan</span> T          <span class="hljs-comment">// \u53EF\u4EE5\u63A5\u6536\u548C\u53D1\u9001\u7C7B\u578B\u4E3A T \u7684\u6570\u636E</span>
<span class="hljs-keyword">chan</span>&lt;- <span class="hljs-type">float64</span>  <span class="hljs-comment">// \u53EA\u53EF\u4EE5\u7528\u6765\u53D1\u9001 float64 \u7C7B\u578B\u7684\u6570\u636E</span>
&lt;-<span class="hljs-keyword">chan</span> <span class="hljs-type">int</span>      <span class="hljs-comment">// \u53EA\u53EF\u4EE5\u7528\u6765\u63A5\u6536 int \u7C7B\u578B\u7684\u6570\u636E</span>

ch1 := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">chan</span> <span class="hljs-type">int</span>, <span class="hljs-number">10</span>) <span class="hljs-comment">// \u5B9A\u4E49channel\uFF0C\u91CC\u9762\u53EF\u4EE5\u585E\u7684\u6570\u636E\u7ED3\u6784\u662Fint\uFF0C\u7F13\u51B2\u957F\u5EA6\u4E3A10</span>
ch2 := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">chan</span> []<span class="hljs-type">int</span>) <span class="hljs-comment">// \u5B9A\u4E49channel\uFF0C\u91CC\u9762\u53EF\u4EE5\u585E\u7684\u6570\u636E\u7ED3\u6784\u662F[]int\uFF0C\u7F13\u51B2\u957F\u5EA6\u4E3A0\uFF08\u4E5F\u5C31\u662F\u65E0\u7F13\u51B2channel\uFF09\uFF0C\u5F80\u91CC\u9762\u53D1\u4E86\u6570\u636E\uFF0C\u4F1A\u963B\u585E\u76F4\u5230\u6570\u636E\u88AB\u63A5\u6536</span>


ch1 &lt;- <span class="hljs-number">10</span>  <span class="hljs-comment">//\u53D1\u9001\u4E00\u4E2A\u6570\u636E</span>
x := &lt;- ch1  <span class="hljs-comment">// \u63A5\u6536\u4E00\u4E2A\u6570\u636E</span>

<span class="hljs-built_in">close</span>(ch1) <span class="hljs-comment">// \u5173\u95EDchannel</span>
</code></pre>
<p>\u4FE1\u9053\u5B9E\u4F8B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;time&quot;</span>
)

<span class="hljs-keyword">var</span> msgChan = <span class="hljs-built_in">make</span>(<span class="hljs-keyword">chan</span> <span class="hljs-type">string</span>) <span class="hljs-comment">//\u58F0\u660E\u5E76\u521D\u59CB\u5316\u4E00\u4E2A\u957F\u5EA6\u4E3A0\u7684\u4FE1\u9053,\u65E0\u7F13\u51B2\u901A\u9053</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">Say</span><span class="hljs-params">(msg <span class="hljs-type">string</span>)</span></span> {
    <span class="hljs-comment">// fmt.Println(msg)</span>
    msgChan &lt;- msg <span class="hljs-comment">// \u5C06msg\u5B57\u7B26\u63A8\u7ED9msgChan\u4FE1\u9053</span>
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">for</span> i := <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">1000</span>; i++ {
        <span class="hljs-keyword">go</span> Say(fmt.Sprintf(<span class="hljs-string">&quot;func %d say: hello world!!!&quot;</span>, i))
        msg := &lt;-msgChan <span class="hljs-comment">//\u5C06\u4FE1\u9053\u91CC\u7684\u5185\u5BB9\uFF0C\u8D4B\u503C\u7ED9msg</span>
        fmt.Println(<span class="hljs-string">&quot;Channel&quot;</span>, msg)
    }
    fmt.Println(<span class="hljs-string">&quot;main say: hello world&quot;</span>)
}
</code></pre>
<h4>Context</h4>
<blockquote>
<p>Context\u662FGo1.7\u5F15\u5165\u5230\u6807\u51C6\u5E93\u7684\uFF0C\u51C6\u786E\u8BF4\u5B83\u662Fgoroutine\u7684\u4E0A\u4E0B\u6587\uFF0C\u5305\u542Bgoroutine\u7684\u8FD0\u884C\u72B6\u6001\u3001\u73AF\u5883\u3001\u73B0\u573A\u7B49\u4FE1\u606F\u3002Context\u4E3B\u8981\u7528\u6765\u5728goroutine\u4E4B\u95F4\u4F20\u9012\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002Context\u51E0\u4E4E\u6210\u4E3A\u4E86\u5E76\u53D1\u63A7\u5236\u548C\u8D85\u65F6\u63A7\u5236\u7684\u6807\u51C6\u505A\u6CD5\u3002</p>
</blockquote>
<p>Context\u63A5\u53E3\u5B9A\u4E49\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs"><span class="hljs-keyword">type</span> Context <span class="hljs-keyword">interface</span> {
    Deadline() (deadline time.Time, ok <span class="hljs-type">bool</span>)
    Done() &lt;-<span class="hljs-keyword">chan</span> <span class="hljs-keyword">struct</span>{}
    Err() <span class="hljs-type">error</span>
    Value(key <span class="hljs-keyword">interface</span>{}) <span class="hljs-keyword">interface</span>{}
}
</code></pre>
<ul>
<li>Deadline\uFF1A\u8FD4\u56DE\u7684\u7B2C\u4E00\u4E2A\u503C\u662F\xA0<strong>\u622A\u6B62\u65F6\u95F4</strong>\uFF0C\u5230\u4E86\u8FD9\u4E2A\u65F6\u95F4\u70B9\uFF0CContext \u4F1A\u81EA\u52A8\u89E6\u53D1 Cancel \u52A8\u4F5C\u3002\u8FD4\u56DE\u7684\u7B2C\u4E8C\u4E2A\u503C\u662F \u4E00\u4E2A\u5E03\u5C14\u503C\uFF0Ctrue \u8868\u793A\u8BBE\u7F6E\u4E86\u622A\u6B62\u65F6\u95F4\uFF0Cfalse \u8868\u793A\u6CA1\u6709\u8BBE\u7F6E\u622A\u6B62\u65F6\u95F4\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u622A\u6B62\u65F6\u95F4\uFF0C\u5C31\u8981\u624B\u52A8\u8C03\u7528 cancel \u51FD\u6570\u53D6\u6D88 Context\u3002</li>
</ul>
<ul>
<li>
<p>Done\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFB\u7684\u901A\u9053\uFF08\u53EA\u6709\u5728\u88ABcancel\u540E\u624D\u4F1A\u8FD4\u56DE\uFF09\uFF0C\u7C7B\u578B\u4E3A\xA0<code>struct{}</code>\u3002\u5F53\u8FD9\u4E2A\u901A\u9053\u53EF\u8BFB\u65F6\uFF0C\u610F\u5473\u7740parent context\u5DF2\u7ECF\u53D1\u8D77\u4E86\u53D6\u6D88\u8BF7\u6C42\uFF0C\u6839\u636E\u8FD9\u4E2A\u4FE1\u53F7\uFF0C\u5F00\u53D1\u8005\u5C31\u53EF\u4EE5\u505A\u4E00\u4E9B\u6E05\u7406\u52A8\u4F5C\uFF0C\u9000\u51FAgoroutine\u3002</p>
</li>
<li>
<p>Err\uFF1A\u8FD4\u56DE context \u88AB cancel \u7684\u539F\u56E0\u3002</p>
</li>
<li>
<p>Value\uFF1A\u8FD4\u56DE\u88AB\u7ED1\u5B9A\u5230 Context \u7684\u503C\uFF0C\u662F\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C\u6240\u4EE5\u8981\u901A\u8FC7\u4E00\u4E2AKey\u624D\u53EF\u4EE5\u83B7\u53D6\u5BF9\u5E94\u7684\u503C\uFF0C\u8FD9\u4E2A\u503C\u4E00\u822C\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002</p>
</li>
</ul>
<p>\u4E0A\u9762\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u662F\u7528\u4E8E\u8BFB\u53D6\u7684\uFF0C\u4E0D\u80FD\u8FDB\u884C\u8BBE\u7F6E</p>
<p><strong>\u4F55\u65F6\u9700\u8981Context</strong></p>
<p>\u5F53\u4E00\u4E2A\u534F\u7A0B\u5F00\u542F\u540E\uFF0C\u6211\u4EEC\u662F\u65E0\u6CD5\u5F3A\u5236\u5173\u95ED\u5B83\u7684\u3002</p>
<p>\u5E38\u89C1\u7684\u5173\u95ED\u534F\u7A0B\u7684\u539F\u56E0\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A</p>
<ul>
<li>
<p>\u534F\u7A0B\u6267\u884C\u5B8C\uFF0C\u6B63\u5E38\u9000\u51FA</p>
</li>
<li>
<p>\u4E3B\u534F\u7A0B\u9000\u51FA\uFF0C\u5B50\u534F\u7A0B\u88AB\u8FEB\u9000\u51FA</p>
</li>
<li>
<p>\u901A\u8FC7\u4FE1\u9053\u53D1\u9001\u4FE1\u53F7\uFF0C\u5F15\u5BFC\u534F\u7A0B\u5173\u95ED</p>
</li>
</ul>
<p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u4FE1\u9053\u63A7\u5236\u534F\u7A0B\u7684\u4F8B\u5B50</p>
<pre><code class="hljs"><span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;fmt&quot;</span>
    <span class="hljs-string">&quot;time&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    c := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">chan</span> <span class="hljs-type">bool</span>) <span class="hljs-comment">//\u5B9A\u4E49\u4FE1\u9053</span>

    <span class="hljs-keyword">go</span> <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">()</span></span> {
        <span class="hljs-keyword">for</span> {
            <span class="hljs-keyword">select</span> {
            <span class="hljs-keyword">case</span> &lt;-c:
                fmt.Println(<span class="hljs-string">&quot;\u76D1\u63A7\u9000\u51FA\uFF0C\u505C\u6B62\u4E86&quot;</span>)
                <span class="hljs-keyword">return</span>
            <span class="hljs-keyword">default</span>:
                fmt.Println(<span class="hljs-string">&quot;\u76D1\u63A7\u5B50\u534F\u7A0B\u4E2D...&quot;</span>)
                time.Sleep(<span class="hljs-number">2</span> * time.Second)
            }
        }
    }()

    time.Sleep(<span class="hljs-number">10</span> * time.Second)
    fmt.Println(<span class="hljs-string">&quot;\u901A\u77E5\u76D1\u63A7\u505C\u6B62&quot;</span>)
    c &lt;- <span class="hljs-literal">true</span>
    time.Sleep(<span class="hljs-number">5</span> * time.Second) <span class="hljs-comment">// \u4E3A\u4E86\u68C0\u6D4B\u76D1\u63A7\u662F\u5426\u505C\u6B62\uFF0C\u5982\u679C\u6CA1\u6709\u76D1\u63A7\u8F93\u51FA\uFF0C\u5C31\u8868\u793A\u505C\u6B62\u4E86</span>
}
</code></pre>
<h3>\u70ED\u66F4\u65B0</h3>
<blockquote>
<p>\u7531\u4E8Ego\u662F\u9759\u6001\u7F16\u8BD1\u8BED\u8A00\uFF0C\u5BF9\u4E8E\u5F00\u53D1\u65F6\u5E76\u4E0D\u662F\u5F88\u53CB\u597D\uFF0CAir\u662F\u4E3AGo\u5E94\u7528\u5F00\u53D1\u8BBE\u8BA1\u7684\u4E00\u4E2A\u70ED\u91CD\u8F7D\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u5F53\u7F16\u5199\u7684\u9879\u76EE\u4EE3\u7801\u53D1\u751F\u53D8\u5316\u65F6\u81EA\u52A8\u91CD\u65B0\u7F16\u8BD1\u8FD0\u5730\u9879\u76EE\u3002</p>
<p>\u53EA\u9700\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u8F93\u5165air\u5373\u53EF</p>
<p>\u6CE8\u610F\uFF1A\u8BE5\u5DE5\u5177\u4E0E\u751F\u4EA7\u73AF\u5883\u7684\u70ED\u90E8\u7F72\u65E0\u5173\u3002</p>
</blockquote>
<h4>\u5B89\u88C5Air</h4>
<p>\u901A\u8FC7go\u6765\u5B89\u88C5air\u547D\u4EE4</p>
<pre><code class="hljs">go install github.com/cosmtrek/air@latest
</code></pre>
<p>macOS/linux\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</p>
<p>\u5982\u6DFB\u52A0\u5230~/.zshrc</p>
<pre><code class="hljs">export PATH=$PATH:$(go env GOPATH)/bin
</code></pre>
<h4>\u6D4B\u8BD5</h4>
<p>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\u6839\u76EE\u5F55</p>
<pre><code class="hljs">air -v
</code></pre>
<h4>\u4F7F\u7528Air</h4>
<p>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\u6839\u76EE\u5F55</p>
<p>\u521D\u59CB\u5316\u9ED8\u8BA4\u914D\u7F6E\u5230\u5F53\u524D\u8DEF\u5F84\u4E0B\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210.air.toml\u6587\u4EF6\u5230\u9879\u76EE\u6839\u76EE\u5F55\u4E0B</p>
<pre><code class="hljs">air init
</code></pre>
<p>\u4E4B\u540E\u5F00\u53D1\u65F6\uFF0C\u53EA\u9700\u8981\u6267\u884Cair\u547D\u4EE4\uFF0C\u5373\u53EF\u5B9E\u73B0\u70ED\u91CD\u66F4\u529F\u80FD\u3002</p>
<pre><code class="hljs">air
</code></pre>
<h4>\u914D\u7F6E\u6587\u4EF6(.air.toml)\u8BF4\u660E</h4>
<pre><code class="hljs"><span class="hljs-comment"># \u6839\u76EE\u5F55</span>
<span class="hljs-attr">root</span> = <span class="hljs-string">&quot;.&quot;</span>
<span class="hljs-attr">testdata_dir</span> = <span class="hljs-string">&quot;testdata&quot;</span>
<span class="hljs-comment"># \u4E34\u65F6\u6587\u4EF6\u76EE\u5F55</span>
<span class="hljs-attr">tmp_dir</span> = <span class="hljs-string">&quot;tmp&quot;</span>

<span class="hljs-section">[build]</span>
<span class="hljs-comment"># \u8FD0\u884C\u65F6\u53C2\u6570</span>
<span class="hljs-attr">args_bin</span> = []
<span class="hljs-comment"># \u7F16\u8BD1\u6587\u4EF6\u4F4D\u7F6E</span>
<span class="hljs-attr">bin</span> = <span class="hljs-string">&quot;tmp\\\\main.exe&quot;</span>
<span class="hljs-comment"># \u7F16\u8BD1\u547D\u4EE4</span>
<span class="hljs-attr">cmd</span> = <span class="hljs-string">&quot;go build -o ./tmp/main.exe .&quot;</span>
<span class="hljs-attr">delay</span> = <span class="hljs-number">0</span>
<span class="hljs-comment"># \u6392\u9664\u76EE\u5F55</span>
<span class="hljs-attr">exclude_dir</span> = [<span class="hljs-string">&quot;assets&quot;</span>, <span class="hljs-string">&quot;tmp&quot;</span>, <span class="hljs-string">&quot;vendor&quot;</span>, <span class="hljs-string">&quot;testdata&quot;</span>]
<span class="hljs-comment"># \u6392\u9664\u6587\u4EF6</span>
<span class="hljs-attr">exclude_file</span> = []
<span class="hljs-comment"># \u6392\u9664\u7279\u5B9A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</span>
<span class="hljs-attr">exclude_regex</span> = [<span class="hljs-string">&quot;_test.go&quot;</span>]
<span class="hljs-attr">exclude_unchanged</span> = <span class="hljs-literal">false</span>
<span class="hljs-attr">follow_symlink</span> = <span class="hljs-literal">false</span>
<span class="hljs-attr">full_bin</span> = <span class="hljs-string">&quot;&quot;</span>
<span class="hljs-comment"># \u89C2\u5BDF\u76EE\u5F55</span>
<span class="hljs-attr">include_dir</span> = []
<span class="hljs-comment"># \u89C2\u5BDF\u6587\u4EF6\u6269\u5C55\u540D</span>
<span class="hljs-attr">include_ext</span> = [<span class="hljs-string">&quot;go&quot;</span>, <span class="hljs-string">&quot;tpl&quot;</span>, <span class="hljs-string">&quot;tmpl&quot;</span>, <span class="hljs-string">&quot;html&quot;</span>]
<span class="hljs-comment"># \u89C2\u5BDF\u6587\u4EF6</span>
<span class="hljs-attr">include_file</span> = []
<span class="hljs-attr">kill_delay</span> = <span class="hljs-string">&quot;0s&quot;</span>
<span class="hljs-attr">log</span> = <span class="hljs-string">&quot;build-errors.log&quot;</span>
<span class="hljs-attr">poll</span> = <span class="hljs-literal">false</span>
<span class="hljs-attr">poll_interval</span> = <span class="hljs-number">0</span>
<span class="hljs-attr">rerun</span> = <span class="hljs-literal">false</span>
<span class="hljs-attr">rerun_delay</span> = <span class="hljs-number">500</span>
<span class="hljs-attr">send_interrupt</span> = <span class="hljs-literal">false</span>
<span class="hljs-comment"># \u9519\u8BEF\u65F6\u505C\u6B62\u76D1\u6D4B</span>
<span class="hljs-attr">stop_on_error</span> = <span class="hljs-literal">false</span>
</code></pre>
`}};(0,hf.hydrateRoot)(document.getElementById("root"),ff.default.createElement(df,{...Oy}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
