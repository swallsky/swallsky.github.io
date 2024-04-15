(()=>{var jf=Object.create;var Ti=Object.defineProperty;var wf=Object.getOwnPropertyDescriptor;var kf=Object.getOwnPropertyNames;var _f=Object.getPrototypeOf,Sf=Object.prototype.hasOwnProperty;var he=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var xf=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of kf(e))!Sf.call(n,r)&&r!==t&&Ti(n,r,{get:()=>e[r],enumerable:!(s=wf(e,r))||s.enumerable});return n};var me=(n,e,t)=>(t=n!=null?jf(_f(n)):{},xf(e||!n||!n.__esModule?Ti(t,"default",{value:n,enumerable:!0}):t,n));var Ui=he(N=>{"use strict";var Xt=Symbol.for("react.element"),Ef=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),zf=Symbol.for("react.memo"),Lf=Symbol.for("react.lazy"),Oi=Symbol.iterator;function If(n){return n===null||typeof n!="object"?null:(n=Oi&&n[Oi]||n["@@iterator"],typeof n=="function"?n:null)}var Ii={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ri=Object.assign,Di={};function it(n,e,t){this.props=n,this.context=e,this.refs=Di,this.updater=t||Ii}it.prototype.isReactComponent={};it.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};it.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Fi(){}Fi.prototype=it.prototype;function $l(n,e,t){this.props=n,this.context=e,this.refs=Di,this.updater=t||Ii}var Wl=$l.prototype=new Fi;Wl.constructor=$l;Ri(Wl,it.prototype);Wl.isPureReactComponent=!0;var zi=Array.isArray,Mi=Object.prototype.hasOwnProperty,Ql={current:null},Ai={key:!0,ref:!0,__self:!0,__source:!0};function Bi(n,e,t){var s,r={},l=null,a=null;if(e!=null)for(s in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(l=""+e.key),e)Mi.call(e,s)&&!Ai.hasOwnProperty(s)&&(r[s]=e[s]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+2];r.children=i}if(n&&n.defaultProps)for(s in o=n.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:Xt,type:n,key:l,ref:a,props:r,_owner:Ql.current}}function Rf(n,e){return{$$typeof:Xt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gl(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xt}function Df(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Li=/\/+/g;function Vl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Df(""+n.key):e.toString(36)}function tr(n,e,t,s,r){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Xt:case Ef:a=!0}}if(a)return a=n,r=r(a),n=s===""?"."+Vl(a,0):s,zi(r)?(t="",n!=null&&(t=n.replace(Li,"$&/")+"/"),tr(r,e,t,"",function(u){return u})):r!=null&&(Gl(r)&&(r=Rf(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Li,"$&/")+"/")+n)),e.push(r)),1;if(a=0,s=s===""?".":s+":",zi(n))for(var o=0;o<n.length;o++){l=n[o];var i=s+Vl(l,o);a+=tr(l,e,t,i,r)}else if(i=If(n),typeof i=="function")for(n=i.call(n),o=0;!(l=n.next()).done;)l=l.value,i=s+Vl(l,o++),a+=tr(l,e,t,i,r);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function er(n,e,t){if(n==null)return n;var s=[],r=0;return tr(n,s,"","",function(l){return e.call(t,l,r++)}),s}function Ff(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},sr={transition:null},Mf={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:sr,ReactCurrentOwner:Ql};N.Children={map:er,forEach:function(n,e,t){er(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return er(n,function(){e++}),e},toArray:function(n){return er(n,function(e){return e})||[]},only:function(n){if(!Gl(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};N.Component=it;N.Fragment=Cf;N.Profiler=Nf;N.PureComponent=$l;N.StrictMode=qf;N.Suspense=Of;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;N.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var s=Ri({},n.props),r=n.key,l=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,a=Ql.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(i in e)Mi.call(e,i)&&!Ai.hasOwnProperty(i)&&(s[i]=e[i]===void 0&&o!==void 0?o[i]:e[i])}var i=arguments.length-2;if(i===1)s.children=t;else if(1<i){o=Array(i);for(var u=0;u<i;u++)o[u]=arguments[u+2];s.children=o}return{$$typeof:Xt,type:n.type,key:r,ref:l,props:s,_owner:a}};N.createContext=function(n){return n={$$typeof:bf,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Pf,_context:n},n.Consumer=n};N.createElement=Bi;N.createFactory=function(n){var e=Bi.bind(null,n);return e.type=n,e};N.createRef=function(){return{current:null}};N.forwardRef=function(n){return{$$typeof:Tf,render:n}};N.isValidElement=Gl;N.lazy=function(n){return{$$typeof:Lf,_payload:{_status:-1,_result:n},_init:Ff}};N.memo=function(n,e){return{$$typeof:zf,type:n,compare:e===void 0?null:e}};N.startTransition=function(n){var e=sr.transition;sr.transition={};try{n()}finally{sr.transition=e}};N.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};N.useCallback=function(n,e){return un.current.useCallback(n,e)};N.useContext=function(n){return un.current.useContext(n)};N.useDebugValue=function(){};N.useDeferredValue=function(n){return un.current.useDeferredValue(n)};N.useEffect=function(n,e){return un.current.useEffect(n,e)};N.useId=function(){return un.current.useId()};N.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};N.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};N.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};N.useMemo=function(n,e){return un.current.useMemo(n,e)};N.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};N.useRef=function(n){return un.current.useRef(n)};N.useState=function(n){return un.current.useState(n)};N.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};N.useTransition=function(){return un.current.useTransition()};N.version="18.2.0"});var ge=he((Lg,Hi)=>{"use strict";Hi.exports=Ui()});var Zi=he(I=>{"use strict";function Jl(n,e){var t=n.length;n.push(e);n:for(;0<t;){var s=t-1>>>1,r=n[s];if(0<rr(r,e))n[s]=e,n[t]=r,t=s;else break n}}function In(n){return n.length===0?null:n[0]}function ar(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;n:for(var s=0,r=n.length,l=r>>>1;s<l;){var a=2*(s+1)-1,o=n[a],i=a+1,u=n[i];if(0>rr(o,t))i<r&&0>rr(u,o)?(n[s]=u,n[i]=t,s=i):(n[s]=o,n[a]=t,s=a);else if(i<r&&0>rr(u,t))n[s]=u,n[i]=t,s=i;else break n}}return e}function rr(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Vi=performance,I.unstable_now=function(){return Vi.now()}):(Yl=Date,$i=Yl.now(),I.unstable_now=function(){return Yl.now()-$i});var Vi,Yl,$i,$n=[],ye=[],Af=1,Cn=null,sn=3,or=!1,Ue=!1,Zt=!1,Gi=typeof setTimeout=="function"?setTimeout:null,Yi=typeof clearTimeout=="function"?clearTimeout:null,Wi=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Zl(n){for(var e=In(ye);e!==null;){if(e.callback===null)ar(ye);else if(e.startTime<=n)ar(ye),e.sortIndex=e.expirationTime,Jl($n,e);else break;e=In(ye)}}function na(n){if(Zt=!1,Zl(n),!Ue)if(In($n)!==null)Ue=!0,ta(ea);else{var e=In(ye);e!==null&&sa(na,e.startTime-n)}}function ea(n,e){Ue=!1,Zt&&(Zt=!1,Yi(ns),ns=-1),or=!0;var t=sn;try{for(Zl(e),Cn=In($n);Cn!==null&&(!(Cn.expirationTime>e)||n&&!Ji());){var s=Cn.callback;if(typeof s=="function"){Cn.callback=null,sn=Cn.priorityLevel;var r=s(Cn.expirationTime<=e);e=I.unstable_now(),typeof r=="function"?Cn.callback=r:Cn===In($n)&&ar($n),Zl(e)}else ar($n);Cn=In($n)}if(Cn!==null)var l=!0;else{var a=In(ye);a!==null&&sa(na,a.startTime-e),l=!1}return l}finally{Cn=null,sn=t,or=!1}}var ir=!1,lr=null,ns=-1,Ki=5,Xi=-1;function Ji(){return!(I.unstable_now()-Xi<Ki)}function Kl(){if(lr!==null){var n=I.unstable_now();Xi=n;var e=!0;try{e=lr(!0,n)}finally{e?Jt():(ir=!1,lr=null)}}else ir=!1}var Jt;typeof Wi=="function"?Jt=function(){Wi(Kl)}:typeof MessageChannel<"u"?(Xl=new MessageChannel,Qi=Xl.port2,Xl.port1.onmessage=Kl,Jt=function(){Qi.postMessage(null)}):Jt=function(){Gi(Kl,0)};var Xl,Qi;function ta(n){lr=n,ir||(ir=!0,Jt())}function sa(n,e){ns=Gi(function(){n(I.unstable_now())},e)}I.unstable_IdlePriority=5;I.unstable_ImmediatePriority=1;I.unstable_LowPriority=4;I.unstable_NormalPriority=3;I.unstable_Profiling=null;I.unstable_UserBlockingPriority=2;I.unstable_cancelCallback=function(n){n.callback=null};I.unstable_continueExecution=function(){Ue||or||(Ue=!0,ta(ea))};I.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ki=0<n?Math.floor(1e3/n):5};I.unstable_getCurrentPriorityLevel=function(){return sn};I.unstable_getFirstCallbackNode=function(){return In($n)};I.unstable_next=function(n){switch(sn){case 1:case 2:case 3:var e=3;break;default:e=sn}var t=sn;sn=e;try{return n()}finally{sn=t}};I.unstable_pauseExecution=function(){};I.unstable_requestPaint=function(){};I.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=sn;sn=n;try{return e()}finally{sn=t}};I.unstable_scheduleCallback=function(n,e,t){var s=I.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:Af++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>s?(n.sortIndex=t,Jl(ye,n),In($n)===null&&n===In(ye)&&(Zt?(Yi(ns),ns=-1):Zt=!0,sa(na,t-s))):(n.sortIndex=r,Jl($n,n),Ue||or||(Ue=!0,ta(ea))),n};I.unstable_shouldYield=Ji;I.unstable_wrapCallback=function(n){var e=sn;return function(){var t=sn;sn=e;try{return n.apply(this,arguments)}finally{sn=t}}}});var ec=he((Rg,nc)=>{"use strict";nc.exports=Zi()});var od=he(En=>{"use strict";var iu=ge(),Sn=ec();function v(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,_s={};function et(n,e){Pt(n,e),Pt(n+"Capture",e)}function Pt(n,e){for(_s[n]=e,n=0;n<e.length;n++)cu.add(e[n])}var re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,Bf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tc={},sc={};function Uf(n){return Ca.call(sc,n)?!0:Ca.call(tc,n)?!1:Bf.test(n)?sc[n]=!0:(tc[n]=!0,!1)}function Hf(n,e,t,s){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Vf(n,e,t,s){if(e===null||typeof e>"u"||Hf(n,e,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,s,r,l,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){tn[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];tn[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){tn[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){tn[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){tn[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){tn[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){tn[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){tn[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){tn[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var jo=/[\-:]([a-z])/g;function wo(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(jo,wo);tn[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(jo,wo);tn[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(jo,wo);tn[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){tn[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});tn.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){tn[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ko(n,e,t,s){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:s||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vf(e,t,r,s)&&(t=null),s||r===null?Uf(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,s=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?n.setAttributeNS(s,e,t):n.setAttribute(e,t))))}var ie=iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),pt=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),_o=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),uu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),So=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),xo=Symbol.for("react.memo"),je=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var du=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var rc=Symbol.iterator;function es(n){return n===null||typeof n!="object"?null:(n=rc&&n[rc]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,ra;function cs(n){if(ra===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ra=e&&e[1]||""}return`
`+ra+n}var la=!1;function aa(n,e){if(!n||la)return"";la=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var s=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){s=u}n.call(e.prototype)}else{try{throw Error()}catch(u){s=u}n()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),l=s.stack.split(`
`),a=r.length-1,o=l.length-1;1<=a&&0<=o&&r[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==l[o]){var i=`
`+r[a].replace(" at new "," at ");return n.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",n.displayName)),i}while(1<=a&&0<=o);break}}}finally{la=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?cs(n):""}function $f(n){switch(n.tag){case 5:return cs(n.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 2:case 15:return n=aa(n.type,!1),n;case 11:return n=aa(n.type.render,!1),n;case 1:return n=aa(n.type,!0),n;default:return""}}function ba(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case dt:return"Fragment";case pt:return"Portal";case qa:return"Profiler";case _o:return"StrictMode";case Na:return"Suspense";case Pa:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case pu:return(n.displayName||"Context")+".Consumer";case uu:return(n._context.displayName||"Context")+".Provider";case So:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xo:return e=n.displayName||null,e!==null?e:ba(n.type)||"Memo";case je:e=n._payload,n=n._init;try{return ba(n(e))}catch{}}return null}function Wf(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ba(e);case 8:return e===_o?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ze(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fu(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qf(n){var e=fu(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),s=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,l.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ur(n){n._valueTracker||(n._valueTracker=Qf(n))}function hu(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),s="";return n&&(s=fu(n)?n.checked?"true":"false":n.value),n=s,n!==t?(e.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ta(n,e){var t=e.checked;return H({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function lc(n,e){var t=e.defaultValue==null?"":e.defaultValue,s=e.checked!=null?e.checked:e.defaultChecked;t=ze(e.value!=null?e.value:t),n._wrapperState={initialChecked:s,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mu(n,e){e=e.checked,e!=null&&ko(n,"checked",e,!1)}function Oa(n,e){mu(n,e);var t=ze(e.value),s=e.type;if(t!=null)s==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(s==="submit"||s==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?za(n,e.type,t):e.hasOwnProperty("defaultValue")&&za(n,e.type,ze(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ac(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var s=e.type;if(!(s!=="submit"&&s!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function za(n,e,t){(e!=="number"||Fr(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var us=Array.isArray;function St(n,e,t,s){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&s&&(n[t].defaultSelected=!0)}else{for(t=""+ze(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,s&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function La(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return H({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function oc(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(v(92));if(us(t)){if(1<t.length)throw Error(v(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ze(t)}}function gu(n,e){var t=ze(e.value),s=ze(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),s!=null&&(n.defaultValue=""+s)}function ic(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function yu(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?yu(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pr,vu=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,s,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,s,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ss(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gf=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(n){Gf.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),fs[e]=fs[n]})});function ju(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||fs.hasOwnProperty(n)&&fs[n]?(""+e).trim():e+"px"}function wu(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=ju(t,e[t],s);t==="float"&&(t="cssFloat"),s?n.setProperty(t,r):n[t]=r}}var Yf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ra(n,e){if(e){if(Yf[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function Da(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Eo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ma=null,xt=null,Et=null;function cc(n){if(n=Bs(n)){if(typeof Ma!="function")throw Error(v(280));var e=n.stateNode;e&&(e=dl(e),Ma(n.stateNode,n.type,e))}}function ku(n){xt?Et?Et.push(n):Et=[n]:xt=n}function _u(){if(xt){var n=xt,e=Et;if(Et=xt=null,cc(n),e)for(n=0;n<e.length;n++)cc(e[n])}}function Su(n,e){return n(e)}function xu(){}var oa=!1;function Eu(n,e,t){if(oa)return n(e,t);oa=!0;try{return Su(n,e,t)}finally{oa=!1,(xt!==null||Et!==null)&&(xu(),_u())}}function xs(n,e){var t=n.stateNode;if(t===null)return null;var s=dl(t);if(s===null)return null;t=s[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(v(231,e,typeof t));return t}var Aa=!1;if(re)try{ct={},Object.defineProperty(ct,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",ct,ct),window.removeEventListener("test",ct,ct)}catch{Aa=!1}var ct;function Kf(n,e,t,s,r,l,a,o,i){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var hs=!1,Mr=null,Ar=!1,Ba=null,Xf={onError:function(n){hs=!0,Mr=n}};function Jf(n,e,t,s,r,l,a,o,i){hs=!1,Mr=null,Kf.apply(Xf,arguments)}function Zf(n,e,t,s,r,l,a,o,i){if(Jf.apply(this,arguments),hs){if(hs){var u=Mr;hs=!1,Mr=null}else throw Error(v(198));Ar||(Ar=!0,Ba=u)}}function tt(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Cu(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function uc(n){if(tt(n)!==n)throw Error(v(188))}function nh(n){var e=n.alternate;if(!e){if(e=tt(n),e===null)throw Error(v(188));return e!==n?null:n}for(var t=n,s=e;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return uc(r),n;if(l===s)return uc(r),e;l=l.sibling}throw Error(v(188))}if(t.return!==s.return)t=r,s=l;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,s=l;break}if(o===s){a=!0,s=r,t=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===t){a=!0,t=l,s=r;break}if(o===s){a=!0,s=l,t=r;break}o=o.sibling}if(!a)throw Error(v(189))}}if(t.alternate!==s)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?n:e}function qu(n){return n=nh(n),n!==null?Nu(n):null}function Nu(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Nu(n);if(e!==null)return e;n=n.sibling}return null}var Pu=Sn.unstable_scheduleCallback,pc=Sn.unstable_cancelCallback,eh=Sn.unstable_shouldYield,th=Sn.unstable_requestPaint,Q=Sn.unstable_now,sh=Sn.unstable_getCurrentPriorityLevel,Co=Sn.unstable_ImmediatePriority,bu=Sn.unstable_UserBlockingPriority,Br=Sn.unstable_NormalPriority,rh=Sn.unstable_LowPriority,Tu=Sn.unstable_IdlePriority,il=null,Yn=null;function lh(n){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(il,n,void 0,(n.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:ih,ah=Math.log,oh=Math.LN2;function ih(n){return n>>>=0,n===0?32:31-(ah(n)/oh|0)|0}var dr=64,fr=4194304;function ps(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ur(n,e){var t=n.pendingLanes;if(t===0)return 0;var s=0,r=n.suspendedLanes,l=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?s=ps(o):(l&=a,l!==0&&(s=ps(l)))}else a=t&~r,a!==0?s=ps(a):l!==0&&(s=ps(l));if(s===0)return 0;if(e!==0&&e!==s&&!(e&r)&&(r=s&-s,l=e&-e,r>=l||r===16&&(l&4194240)!==0))return e;if(s&4&&(s|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=s;0<e;)t=31-An(e),r=1<<t,s|=n[t],e&=~r;return s}function ch(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uh(n,e){for(var t=n.suspendedLanes,s=n.pingedLanes,r=n.expirationTimes,l=n.pendingLanes;0<l;){var a=31-An(l),o=1<<a,i=r[a];i===-1?(!(o&t)||o&s)&&(r[a]=ch(o,e)):i<=e&&(n.expiredLanes|=o),l&=~o}}function Ua(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ou(){var n=dr;return dr<<=1,!(dr&4194240)&&(dr=64),n}function ia(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ms(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-An(e),n[e]=t}function ph(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var s=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-An(t),l=1<<r;e[r]=0,s[r]=-1,n[r]=-1,t&=~l}}function qo(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var s=31-An(t),r=1<<s;r&e|n[s]&e&&(n[s]|=e),t&=~r}}var z=0;function zu(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Lu,No,Iu,Ru,Du,Ha=!1,hr=[],Ee=null,Ce=null,qe=null,Es=new Map,Cs=new Map,ke=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(n,e){switch(n){case"focusin":case"focusout":Ee=null;break;case"dragenter":case"dragleave":Ce=null;break;case"mouseover":case"mouseout":qe=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}function ts(n,e,t,s,r,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:s,nativeEvent:l,targetContainers:[r]},e!==null&&(e=Bs(e),e!==null&&No(e)),n):(n.eventSystemFlags|=s,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function fh(n,e,t,s,r){switch(e){case"focusin":return Ee=ts(Ee,n,e,t,s,r),!0;case"dragenter":return Ce=ts(Ce,n,e,t,s,r),!0;case"mouseover":return qe=ts(qe,n,e,t,s,r),!0;case"pointerover":var l=r.pointerId;return Es.set(l,ts(Es.get(l)||null,n,e,t,s,r)),!0;case"gotpointercapture":return l=r.pointerId,Cs.set(l,ts(Cs.get(l)||null,n,e,t,s,r)),!0}return!1}function Fu(n){var e=$e(n.target);if(e!==null){var t=tt(e);if(t!==null){if(e=t.tag,e===13){if(e=Cu(t),e!==null){n.blockedOn=e,Du(n.priority,function(){Iu(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Nr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Va(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var s=new t.constructor(t.type,t);Fa=s,t.target.dispatchEvent(s),Fa=null}else return e=Bs(t),e!==null&&No(e),n.blockedOn=t,!1;e.shift()}return!0}function fc(n,e,t){Nr(n)&&t.delete(e)}function hh(){Ha=!1,Ee!==null&&Nr(Ee)&&(Ee=null),Ce!==null&&Nr(Ce)&&(Ce=null),qe!==null&&Nr(qe)&&(qe=null),Es.forEach(fc),Cs.forEach(fc)}function ss(n,e){n.blockedOn===e&&(n.blockedOn=null,Ha||(Ha=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,hh)))}function qs(n){function e(r){return ss(r,n)}if(0<hr.length){ss(hr[0],n);for(var t=1;t<hr.length;t++){var s=hr[t];s.blockedOn===n&&(s.blockedOn=null)}}for(Ee!==null&&ss(Ee,n),Ce!==null&&ss(Ce,n),qe!==null&&ss(qe,n),Es.forEach(e),Cs.forEach(e),t=0;t<ke.length;t++)s=ke[t],s.blockedOn===n&&(s.blockedOn=null);for(;0<ke.length&&(t=ke[0],t.blockedOn===null);)Fu(t),t.blockedOn===null&&ke.shift()}var Ct=ie.ReactCurrentBatchConfig,Hr=!0;function mh(n,e,t,s){var r=z,l=Ct.transition;Ct.transition=null;try{z=1,Po(n,e,t,s)}finally{z=r,Ct.transition=l}}function gh(n,e,t,s){var r=z,l=Ct.transition;Ct.transition=null;try{z=4,Po(n,e,t,s)}finally{z=r,Ct.transition=l}}function Po(n,e,t,s){if(Hr){var r=Va(n,e,t,s);if(r===null)ma(n,e,s,Vr,t),dc(n,s);else if(fh(r,n,e,t,s))s.stopPropagation();else if(dc(n,s),e&4&&-1<dh.indexOf(n)){for(;r!==null;){var l=Bs(r);if(l!==null&&Lu(l),l=Va(n,e,t,s),l===null&&ma(n,e,s,Vr,t),l===r)break;r=l}r!==null&&s.stopPropagation()}else ma(n,e,s,null,t)}}var Vr=null;function Va(n,e,t,s){if(Vr=null,n=Eo(s),n=$e(n),n!==null)if(e=tt(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Cu(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Vr=n,null}function Mu(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case Co:return 1;case bu:return 4;case Br:case rh:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var Se=null,bo=null,Pr=null;function Au(){if(Pr)return Pr;var n,e=bo,t=e.length,s,r="value"in Se?Se.value:Se.textContent,l=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(s=1;s<=a&&e[t-s]===r[l-s];s++);return Pr=r.slice(n,1<s?1-s:void 0)}function br(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function mr(){return!0}function hc(){return!1}function xn(n){function e(t,s,r,l,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mr:hc,this.isPropagationStopped=hc,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),e}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=xn(Rt),As=H({},Rt,{view:0,detail:0}),yh=xn(As),ca,ua,rs,cl=H({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rs&&(rs&&n.type==="mousemove"?(ca=n.screenX-rs.screenX,ua=n.screenY-rs.screenY):ua=ca=0,rs=n),ca)},movementY:function(n){return"movementY"in n?n.movementY:ua}}),mc=xn(cl),vh=H({},cl,{dataTransfer:0}),jh=xn(vh),wh=H({},As,{relatedTarget:0}),pa=xn(wh),kh=H({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),_h=xn(kh),Sh=H({},Rt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xh=xn(Sh),Eh=H({},Rt,{data:0}),gc=xn(Eh),Ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ph(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Nh[n])?!!e[n]:!1}function Oo(){return Ph}var bh=H({},As,{key:function(n){if(n.key){var e=Ch[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=br(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qh[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(n){return n.type==="keypress"?br(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?br(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Th=xn(bh),Oh=H({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=xn(Oh),zh=H({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),Lh=xn(zh),Ih=H({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rh=xn(Ih),Dh=H({},cl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fh=xn(Dh),Mh=[9,13,27,32],zo=re&&"CompositionEvent"in window,ms=null;re&&"documentMode"in document&&(ms=document.documentMode);var Ah=re&&"TextEvent"in window&&!ms,Bu=re&&(!zo||ms&&8<ms&&11>=ms),vc=" ",jc=!1;function Uu(n,e){switch(n){case"keyup":return Mh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ft=!1;function Bh(n,e){switch(n){case"compositionend":return Hu(e);case"keypress":return e.which!==32?null:(jc=!0,vc);case"textInput":return n=e.data,n===vc&&jc?null:n;default:return null}}function Uh(n,e){if(ft)return n==="compositionend"||!zo&&Uu(n,e)?(n=Au(),Pr=bo=Se=null,ft=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bu&&e.locale!=="ko"?null:e.data;default:return null}}var Hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Hh[n.type]:e==="textarea"}function Vu(n,e,t,s){ku(s),e=$r(e,"onChange"),0<e.length&&(t=new To("onChange","change",null,t,s),n.push({event:t,listeners:e}))}var gs=null,Ns=null;function Vh(n){ep(n,0)}function ul(n){var e=gt(n);if(hu(e))return n}function $h(n,e){if(n==="change")return e}var $u=!1;re&&(re?(yr="oninput"in document,yr||(da=document.createElement("div"),da.setAttribute("oninput","return;"),yr=typeof da.oninput=="function"),gr=yr):gr=!1,$u=gr&&(!document.documentMode||9<document.documentMode));var gr,yr,da;function kc(){gs&&(gs.detachEvent("onpropertychange",Wu),Ns=gs=null)}function Wu(n){if(n.propertyName==="value"&&ul(Ns)){var e=[];Vu(e,Ns,n,Eo(n)),Eu(Vh,e)}}function Wh(n,e,t){n==="focusin"?(kc(),gs=e,Ns=t,gs.attachEvent("onpropertychange",Wu)):n==="focusout"&&kc()}function Qh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ul(Ns)}function Gh(n,e){if(n==="click")return ul(e)}function Yh(n,e){if(n==="input"||n==="change")return ul(e)}function Kh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Un=typeof Object.is=="function"?Object.is:Kh;function Ps(n,e){if(Un(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),s=Object.keys(e);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!Ca.call(e,r)||!Un(n[r],e[r]))return!1}return!0}function _c(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sc(n,e){var t=_c(n);n=0;for(var s;t;){if(t.nodeType===3){if(s=n+t.textContent.length,n<=e&&s>=e)return{node:t,offset:e-n};n=s}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=_c(t)}}function Qu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Gu(){for(var n=window,e=Fr();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Fr(n.document)}return e}function Lo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Xh(n){var e=Gu(),t=n.focusedElem,s=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qu(t.ownerDocument.documentElement,t)){if(s!==null&&Lo(t)){if(e=s.start,n=s.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,l=Math.min(s.start,r);s=s.end===void 0?l:Math.min(s.end,r),!n.extend&&l>s&&(r=s,s=l,l=r),r=Sc(t,l);var a=Sc(t,s);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),l>s?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Jh=re&&"documentMode"in document&&11>=document.documentMode,ht=null,$a=null,ys=null,Wa=!1;function xc(n,e,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wa||ht==null||ht!==Fr(s)||(s=ht,"selectionStart"in s&&Lo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ys&&Ps(ys,s)||(ys=s,s=$r($a,"onSelect"),0<s.length&&(e=new To("onSelect","select",null,e,t),n.push({event:e,listeners:s}),e.target=ht)))}function vr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var mt={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},fa={},Yu={};re&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function pl(n){if(fa[n])return fa[n];if(!mt[n])return n;var e=mt[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Yu)return fa[n]=e[t];return n}var Ku=pl("animationend"),Xu=pl("animationiteration"),Ju=pl("animationstart"),Zu=pl("transitionend"),np=new Map,Ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ie(n,e){np.set(n,e),et(e,[n])}for(jr=0;jr<Ec.length;jr++)wr=Ec[jr],Cc=wr.toLowerCase(),qc=wr[0].toUpperCase()+wr.slice(1),Ie(Cc,"on"+qc);var wr,Cc,qc,jr;Ie(Ku,"onAnimationEnd");Ie(Xu,"onAnimationIteration");Ie(Ju,"onAnimationStart");Ie("dblclick","onDoubleClick");Ie("focusin","onFocus");Ie("focusout","onBlur");Ie(Zu,"onTransitionEnd");Pt("onMouseEnter",["mouseout","mouseover"]);Pt("onMouseLeave",["mouseout","mouseover"]);Pt("onPointerEnter",["pointerout","pointerover"]);Pt("onPointerLeave",["pointerout","pointerover"]);et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));et("onBeforeInput",["compositionend","keypress","textInput","paste"]);et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function Nc(n,e,t){var s=n.type||"unknown-event";n.currentTarget=t,Zf(s,e,void 0,n),n.currentTarget=null}function ep(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var s=n[t],r=s.event;s=s.listeners;n:{var l=void 0;if(e)for(var a=s.length-1;0<=a;a--){var o=s[a],i=o.instance,u=o.currentTarget;if(o=o.listener,i!==l&&r.isPropagationStopped())break n;Nc(r,o,u),l=i}else for(a=0;a<s.length;a++){if(o=s[a],i=o.instance,u=o.currentTarget,o=o.listener,i!==l&&r.isPropagationStopped())break n;Nc(r,o,u),l=i}}}if(Ar)throw n=Ba,Ar=!1,Ba=null,n}function D(n,e){var t=e[Xa];t===void 0&&(t=e[Xa]=new Set);var s=n+"__bubble";t.has(s)||(tp(e,n,2,!1),t.add(s))}function ha(n,e,t){var s=0;e&&(s|=4),tp(t,n,s,e)}var kr="_reactListening"+Math.random().toString(36).slice(2);function bs(n){if(!n[kr]){n[kr]=!0,cu.forEach(function(t){t!=="selectionchange"&&(Zh.has(t)||ha(t,!1,n),ha(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[kr]||(e[kr]=!0,ha("selectionchange",!1,e))}}function tp(n,e,t,s){switch(Mu(e)){case 1:var r=mh;break;case 4:r=gh;break;default:r=Po}t=r.bind(null,e,t,n),r=void 0,!Aa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),s?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ma(n,e,t,s,r){var l=s;if(!(e&1)&&!(e&2)&&s!==null)n:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var o=s.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var i=a.tag;if((i===3||i===4)&&(i=a.stateNode.containerInfo,i===r||i.nodeType===8&&i.parentNode===r))return;a=a.return}for(;o!==null;){if(a=$e(o),a===null)return;if(i=a.tag,i===5||i===6){s=l=a;continue n}o=o.parentNode}}s=s.return}Eu(function(){var u=l,f=Eo(t),m=[];n:{var h=np.get(n);if(h!==void 0){var y=To,w=n;switch(n){case"keypress":if(br(t)===0)break n;case"keydown":case"keyup":y=Th;break;case"focusin":w="focus",y=pa;break;case"focusout":w="blur",y=pa;break;case"beforeblur":case"afterblur":y=pa;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Lh;break;case Ku:case Xu:case Ju:y=_h;break;case Zu:y=Rh;break;case"scroll":y=yh;break;case"wheel":y=Fh;break;case"copy":case"cut":case"paste":y=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=yc}var k=(e&4)!==0,P=!k&&n==="scroll",p=k?h!==null?h+"Capture":null:h;k=[];for(var c=u,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,p!==null&&(g=xs(c,p),g!=null&&k.push(Ts(c,g,d)))),P)break;c=c.return}0<k.length&&(h=new y(h,w,null,t,f),m.push({event:h,listeners:k}))}}if(!(e&7)){n:{if(h=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",h&&t!==Fa&&(w=t.relatedTarget||t.fromElement)&&($e(w)||w[le]))break n;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=u,w=w?$e(w):null,w!==null&&(P=tt(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(k=mc,g="onMouseLeave",p="onMouseEnter",c="mouse",(n==="pointerout"||n==="pointerover")&&(k=yc,g="onPointerLeave",p="onPointerEnter",c="pointer"),P=y==null?h:gt(y),d=w==null?h:gt(w),h=new k(g,c+"leave",y,t,f),h.target=P,h.relatedTarget=d,g=null,$e(f)===u&&(k=new k(p,c+"enter",w,t,f),k.target=d,k.relatedTarget=P,g=k),P=g,y&&w)e:{for(k=y,p=w,c=0,d=k;d;d=ut(d))c++;for(d=0,g=p;g;g=ut(g))d++;for(;0<c-d;)k=ut(k),c--;for(;0<d-c;)p=ut(p),d--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break e;k=ut(k),p=ut(p)}k=null}else k=null;y!==null&&Pc(m,h,y,k,!1),w!==null&&P!==null&&Pc(m,P,w,k,!0)}}n:{if(h=u?gt(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var _=$h;else if(wc(h))if($u)_=Yh;else{_=Qh;var S=Wh}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Gh);if(_&&(_=_(n,u))){Vu(m,_,t,f);break n}S&&S(n,h,u),n==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&za(h,"number",h.value)}switch(S=u?gt(u):window,n){case"focusin":(wc(S)||S.contentEditable==="true")&&(ht=S,$a=u,ys=null);break;case"focusout":ys=$a=ht=null;break;case"mousedown":Wa=!0;break;case"contextmenu":case"mouseup":case"dragend":Wa=!1,xc(m,t,f);break;case"selectionchange":if(Jh)break;case"keydown":case"keyup":xc(m,t,f)}var j;if(zo)n:{switch(n){case"compositionstart":var E="onCompositionStart";break n;case"compositionend":E="onCompositionEnd";break n;case"compositionupdate":E="onCompositionUpdate";break n}E=void 0}else ft?Uu(n,t)&&(E="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Bu&&t.locale!=="ko"&&(ft||E!=="onCompositionStart"?E==="onCompositionEnd"&&ft&&(j=Au()):(Se=f,bo="value"in Se?Se.value:Se.textContent,ft=!0)),S=$r(u,E),0<S.length&&(E=new gc(E,n,null,t,f),m.push({event:E,listeners:S}),j?E.data=j:(j=Hu(t),j!==null&&(E.data=j)))),(j=Ah?Bh(n,t):Uh(n,t))&&(u=$r(u,"onBeforeInput"),0<u.length&&(f=new gc("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:u}),f.data=j))}ep(m,e)})}function Ts(n,e,t){return{instance:n,listener:e,currentTarget:t}}function $r(n,e){for(var t=e+"Capture",s=[];n!==null;){var r=n,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=xs(n,t),l!=null&&s.unshift(Ts(n,l,r)),l=xs(n,e),l!=null&&s.push(Ts(n,l,r))),n=n.return}return s}function ut(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pc(n,e,t,s,r){for(var l=e._reactName,a=[];t!==null&&t!==s;){var o=t,i=o.alternate,u=o.stateNode;if(i!==null&&i===s)break;o.tag===5&&u!==null&&(o=u,r?(i=xs(t,l),i!=null&&a.unshift(Ts(t,i,o))):r||(i=xs(t,l),i!=null&&a.push(Ts(t,i,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var nm=/\r\n?/g,em=/\u0000|\uFFFD/g;function bc(n){return(typeof n=="string"?n:""+n).replace(nm,`
`).replace(em,"")}function _r(n,e,t){if(e=bc(e),bc(n)!==e&&t)throw Error(v(425))}function Wr(){}var Qa=null,Ga=null;function Ya(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,tm=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(n){return Tc.resolve(null).then(n).catch(rm)}:Ka;function rm(n){setTimeout(function(){throw n})}function ga(n,e){var t=e,s=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){n.removeChild(r),qs(e);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);qs(e)}function Ne(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Oc(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Dt=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Dt,Os="__reactProps$"+Dt,le="__reactContainer$"+Dt,Xa="__reactEvents$"+Dt,lm="__reactListeners$"+Dt,am="__reactHandles$"+Dt;function $e(n){var e=n[Gn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[le]||t[Gn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Oc(n);n!==null;){if(t=n[Gn])return t;n=Oc(n)}return e}n=t,t=n.parentNode}return null}function Bs(n){return n=n[Gn]||n[le],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(v(33))}function dl(n){return n[Os]||null}var Ja=[],yt=-1;function Re(n){return{current:n}}function F(n){0>yt||(n.current=Ja[yt],Ja[yt]=null,yt--)}function R(n,e){yt++,Ja[yt]=n.current,n.current=e}var Le={},on=Re(Le),yn=Re(!1),Ke=Le;function bt(n,e){var t=n.type.contextTypes;if(!t)return Le;var s=n.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===e)return s.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in t)r[l]=e[l];return s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function Qr(){F(yn),F(on)}function zc(n,e,t){if(on.current!==Le)throw Error(v(168));R(on,e),R(yn,t)}function sp(n,e,t){var s=n.stateNode;if(e=e.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in e))throw Error(v(108,Wf(n)||"Unknown",r));return H({},t,s)}function Gr(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Le,Ke=on.current,R(on,n),R(yn,yn.current),!0}function Lc(n,e,t){var s=n.stateNode;if(!s)throw Error(v(169));t?(n=sp(n,e,Ke),s.__reactInternalMemoizedMergedChildContext=n,F(yn),F(on),R(on,n)):F(yn),R(yn,t)}var ne=null,fl=!1,ya=!1;function rp(n){ne===null?ne=[n]:ne.push(n)}function om(n){fl=!0,rp(n)}function De(){if(!ya&&ne!==null){ya=!0;var n=0,e=z;try{var t=ne;for(z=1;n<t.length;n++){var s=t[n];do s=s(!0);while(s!==null)}ne=null,fl=!1}catch(r){throw ne!==null&&(ne=ne.slice(n+1)),Pu(Co,De),r}finally{z=e,ya=!1}}return null}var vt=[],jt=0,Yr=null,Kr=0,qn=[],Nn=0,Xe=null,ee=1,te="";function He(n,e){vt[jt++]=Kr,vt[jt++]=Yr,Yr=n,Kr=e}function lp(n,e,t){qn[Nn++]=ee,qn[Nn++]=te,qn[Nn++]=Xe,Xe=n;var s=ee;n=te;var r=32-An(s)-1;s&=~(1<<r),t+=1;var l=32-An(e)+r;if(30<l){var a=r-r%5;l=(s&(1<<a)-1).toString(32),s>>=a,r-=a,ee=1<<32-An(e)+r|t<<r|s,te=l+n}else ee=1<<l|t<<r|s,te=n}function Io(n){n.return!==null&&(He(n,1),lp(n,1,0))}function Ro(n){for(;n===Yr;)Yr=vt[--jt],vt[jt]=null,Kr=vt[--jt],vt[jt]=null;for(;n===Xe;)Xe=qn[--Nn],qn[Nn]=null,te=qn[--Nn],qn[Nn]=null,ee=qn[--Nn],qn[Nn]=null}var _n=null,kn=null,A=!1,Mn=null;function ap(n,e){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ic(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,_n=n,kn=Ne(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,_n=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Xe!==null?{id:ee,overflow:te}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,_n=n,kn=null,!0):!1;default:return!1}}function Za(n){return(n.mode&1)!==0&&(n.flags&128)===0}function no(n){if(A){var e=kn;if(e){var t=e;if(!Ic(n,e)){if(Za(n))throw Error(v(418));e=Ne(t.nextSibling);var s=_n;e&&Ic(n,e)?ap(s,t):(n.flags=n.flags&-4097|2,A=!1,_n=n)}}else{if(Za(n))throw Error(v(418));n.flags=n.flags&-4097|2,A=!1,_n=n}}}function Rc(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_n=n}function Sr(n){if(n!==_n)return!1;if(!A)return Rc(n),A=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ya(n.type,n.memoizedProps)),e&&(e=kn)){if(Za(n))throw op(),Error(v(418));for(;e;)ap(n,e),e=Ne(e.nextSibling)}if(Rc(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){kn=Ne(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=_n?Ne(n.stateNode.nextSibling):null;return!0}function op(){for(var n=kn;n;)n=Ne(n.nextSibling)}function Tt(){kn=_n=null,A=!1}function Do(n){Mn===null?Mn=[n]:Mn.push(n)}var im=ie.ReactCurrentBatchConfig;function Dn(n,e){if(n&&n.defaultProps){e=H({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Xr=Re(null),Jr=null,wt=null,Fo=null;function Mo(){Fo=wt=Jr=null}function Ao(n){var e=Xr.current;F(Xr),n._currentValue=e}function eo(n,e,t){for(;n!==null;){var s=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),n===t)break;n=n.return}}function qt(n,e){Jr=n,Fo=wt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(gn=!0),n.firstContext=null)}function Tn(n){var e=n._currentValue;if(Fo!==n)if(n={context:n,memoizedValue:e,next:null},wt===null){if(Jr===null)throw Error(v(308));wt=n,Jr.dependencies={lanes:0,firstContext:n}}else wt=wt.next=n;return e}var We=null;function Bo(n){We===null?We=[n]:We.push(n)}function ip(n,e,t,s){var r=e.interleaved;return r===null?(t.next=t,Bo(e)):(t.next=r.next,r.next=t),e.interleaved=t,ae(n,s)}function ae(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var we=!1;function Uo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function se(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Pe(n,e,t){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,T&2){var r=s.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),s.pending=e,ae(n,t)}return r=s.interleaved,r===null?(e.next=e,Bo(s)):(e.next=r.next,r.next=e),s.interleaved=e,ae(n,t)}function Tr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var s=e.lanes;s&=n.pendingLanes,t|=s,e.lanes=t,qo(n,t)}}function Dc(n,e){var t=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?r=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?r=l=e:l=l.next=e}else r=l=e;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:s.shared,effects:s.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Zr(n,e,t,s){var r=n.updateQueue;we=!1;var l=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var i=o,u=i.next;i.next=null,a===null?l=u:a.next=u,a=i;var f=n.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=i))}if(l!==null){var m=r.baseState;a=0,f=u=i=null,o=l;do{var h=o.lane,y=o.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var w=n,k=o;switch(h=e,y=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(y,m,h);break n}m=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(y,m,h):w,h==null)break n;m=H({},m,h);break n;case 2:we=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else y={eventTime:y,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=y,i=m):f=f.next=y,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(i=m),r.baseState=i,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else l===null&&(r.shared.lanes=0);Ze|=a,n.lanes=a,n.memoizedState=m}}function Fc(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var s=n[e],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(v(191,r));r.call(s)}}}var up=new iu.Component().refs;function to(n,e,t,s){e=n.memoizedState,t=t(s,e),t=t==null?e:H({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hl={isMounted:function(n){return(n=n._reactInternals)?tt(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var s=dn(),r=Te(n),l=se(s,r);l.payload=e,t!=null&&(l.callback=t),e=Pe(n,l,r),e!==null&&(Bn(e,n,r,s),Tr(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var s=dn(),r=Te(n),l=se(s,r);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=Pe(n,l,r),e!==null&&(Bn(e,n,r,s),Tr(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=dn(),s=Te(n),r=se(t,s);r.tag=2,e!=null&&(r.callback=e),e=Pe(n,r,s),e!==null&&(Bn(e,n,s,t),Tr(e,n,s))}};function Mc(n,e,t,s,r,l,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,l,a):e.prototype&&e.prototype.isPureReactComponent?!Ps(t,s)||!Ps(r,l):!0}function pp(n,e,t){var s=!1,r=Le,l=e.contextType;return typeof l=="object"&&l!==null?l=Tn(l):(r=vn(e)?Ke:on.current,s=e.contextTypes,l=(s=s!=null)?bt(n,r):Le),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,n.stateNode=e,e._reactInternals=n,s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=l),e}function Ac(n,e,t,s){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,s),e.state!==n&&hl.enqueueReplaceState(e,e.state,null)}function so(n,e,t,s){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=up,Uo(n);var l=e.contextType;typeof l=="object"&&l!==null?r.context=Tn(l):(l=vn(e)?Ke:on.current,r.context=bt(n,l)),r.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(to(n,e,l,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hl.enqueueReplaceState(r,r.state,null),Zr(n,t,r,s),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ls(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var s=t.stateNode}if(!s)throw Error(v(147,n));var r=s,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(a){var o=r.refs;o===up&&(o=r.refs={}),a===null?delete o[l]:o[l]=a},e._stringRef=l,e)}if(typeof n!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,n))}return n}function xr(n,e){throw n=Object.prototype.toString.call(e),Error(v(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Bc(n){var e=n._init;return e(n._payload)}function dp(n){function e(p,c){if(n){var d=p.deletions;d===null?(p.deletions=[c],p.flags|=16):d.push(c)}}function t(p,c){if(!n)return null;for(;c!==null;)e(p,c),c=c.sibling;return null}function s(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function r(p,c){return p=Oe(p,c),p.index=0,p.sibling=null,p}function l(p,c,d){return p.index=d,n?(d=p.alternate,d!==null?(d=d.index,d<c?(p.flags|=2,c):d):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return n&&p.alternate===null&&(p.flags|=2),p}function o(p,c,d,g){return c===null||c.tag!==6?(c=xa(d,p.mode,g),c.return=p,c):(c=r(c,d),c.return=p,c)}function i(p,c,d,g){var _=d.type;return _===dt?f(p,c,d.props.children,g,d.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===je&&Bc(_)===c.type)?(g=r(c,d.props),g.ref=ls(p,c,d),g.return=p,g):(g=Dr(d.type,d.key,d.props,null,p.mode,g),g.ref=ls(p,c,d),g.return=p,g)}function u(p,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ea(d,p.mode,g),c.return=p,c):(c=r(c,d.children||[]),c.return=p,c)}function f(p,c,d,g,_){return c===null||c.tag!==7?(c=Ye(d,p.mode,g,_),c.return=p,c):(c=r(c,d),c.return=p,c)}function m(p,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=xa(""+c,p.mode,d),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case cr:return d=Dr(c.type,c.key,c.props,null,p.mode,d),d.ref=ls(p,null,c),d.return=p,d;case pt:return c=Ea(c,p.mode,d),c.return=p,c;case je:var g=c._init;return m(p,g(c._payload),d)}if(us(c)||es(c))return c=Ye(c,p.mode,d,null),c.return=p,c;xr(p,c)}return null}function h(p,c,d,g){var _=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:o(p,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case cr:return d.key===_?i(p,c,d,g):null;case pt:return d.key===_?u(p,c,d,g):null;case je:return _=d._init,h(p,c,_(d._payload),g)}if(us(d)||es(d))return _!==null?null:f(p,c,d,g,null);xr(p,d)}return null}function y(p,c,d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(d)||null,o(c,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case cr:return p=p.get(g.key===null?d:g.key)||null,i(c,p,g,_);case pt:return p=p.get(g.key===null?d:g.key)||null,u(c,p,g,_);case je:var S=g._init;return y(p,c,d,S(g._payload),_)}if(us(g)||es(g))return p=p.get(d)||null,f(c,p,g,_,null);xr(c,g)}return null}function w(p,c,d,g){for(var _=null,S=null,j=c,E=c=0,M=null;j!==null&&E<d.length;E++){j.index>E?(M=j,j=null):M=j.sibling;var b=h(p,j,d[E],g);if(b===null){j===null&&(j=M);break}n&&j&&b.alternate===null&&e(p,j),c=l(b,c,E),S===null?_=b:S.sibling=b,S=b,j=M}if(E===d.length)return t(p,j),A&&He(p,E),_;if(j===null){for(;E<d.length;E++)j=m(p,d[E],g),j!==null&&(c=l(j,c,E),S===null?_=j:S.sibling=j,S=j);return A&&He(p,E),_}for(j=s(p,j);E<d.length;E++)M=y(j,p,E,d[E],g),M!==null&&(n&&M.alternate!==null&&j.delete(M.key===null?E:M.key),c=l(M,c,E),S===null?_=M:S.sibling=M,S=M);return n&&j.forEach(function(Vn){return e(p,Vn)}),A&&He(p,E),_}function k(p,c,d,g){var _=es(d);if(typeof _!="function")throw Error(v(150));if(d=_.call(d),d==null)throw Error(v(151));for(var S=_=null,j=c,E=c=0,M=null,b=d.next();j!==null&&!b.done;E++,b=d.next()){j.index>E?(M=j,j=null):M=j.sibling;var Vn=h(p,j,b.value,g);if(Vn===null){j===null&&(j=M);break}n&&j&&Vn.alternate===null&&e(p,j),c=l(Vn,c,E),S===null?_=Vn:S.sibling=Vn,S=Vn,j=M}if(b.done)return t(p,j),A&&He(p,E),_;if(j===null){for(;!b.done;E++,b=d.next())b=m(p,b.value,g),b!==null&&(c=l(b,c,E),S===null?_=b:S.sibling=b,S=b);return A&&He(p,E),_}for(j=s(p,j);!b.done;E++,b=d.next())b=y(j,p,E,b.value,g),b!==null&&(n&&b.alternate!==null&&j.delete(b.key===null?E:b.key),c=l(b,c,E),S===null?_=b:S.sibling=b,S=b);return n&&j.forEach(function(Al){return e(p,Al)}),A&&He(p,E),_}function P(p,c,d,g){if(typeof d=="object"&&d!==null&&d.type===dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case cr:n:{for(var _=d.key,S=c;S!==null;){if(S.key===_){if(_=d.type,_===dt){if(S.tag===7){t(p,S.sibling),c=r(S,d.props.children),c.return=p,p=c;break n}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===je&&Bc(_)===S.type){t(p,S.sibling),c=r(S,d.props),c.ref=ls(p,S,d),c.return=p,p=c;break n}t(p,S);break}else e(p,S);S=S.sibling}d.type===dt?(c=Ye(d.props.children,p.mode,g,d.key),c.return=p,p=c):(g=Dr(d.type,d.key,d.props,null,p.mode,g),g.ref=ls(p,c,d),g.return=p,p=g)}return a(p);case pt:n:{for(S=d.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(p,c.sibling),c=r(c,d.children||[]),c.return=p,p=c;break n}else{t(p,c);break}else e(p,c);c=c.sibling}c=Ea(d,p.mode,g),c.return=p,p=c}return a(p);case je:return S=d._init,P(p,c,S(d._payload),g)}if(us(d))return w(p,c,d,g);if(es(d))return k(p,c,d,g);xr(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(p,c.sibling),c=r(c,d),c.return=p,p=c):(t(p,c),c=xa(d,p.mode,g),c.return=p,p=c),a(p)):t(p,c)}return P}var Ot=dp(!0),fp=dp(!1),Us={},Kn=Re(Us),zs=Re(Us),Ls=Re(Us);function Qe(n){if(n===Us)throw Error(v(174));return n}function Ho(n,e){switch(R(Ls,e),R(zs,n),R(Kn,Us),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ia(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ia(e,n)}F(Kn),R(Kn,e)}function zt(){F(Kn),F(zs),F(Ls)}function hp(n){Qe(Ls.current);var e=Qe(Kn.current),t=Ia(e,n.type);e!==t&&(R(zs,n),R(Kn,t))}function Vo(n){zs.current===n&&(F(Kn),F(zs))}var B=Re(0);function nl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=[];function $o(){for(var n=0;n<va.length;n++)va[n]._workInProgressVersionPrimary=null;va.length=0}var Or=ie.ReactCurrentDispatcher,ja=ie.ReactCurrentBatchConfig,Je=0,U=null,K=null,J=null,el=!1,vs=!1,Is=0,cm=0;function rn(){throw Error(v(321))}function Wo(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Un(n[t],e[t]))return!1;return!0}function Qo(n,e,t,s,r,l){if(Je=l,U=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Or.current=n===null||n.memoizedState===null?fm:hm,n=t(s,r),vs){l=0;do{if(vs=!1,Is=0,25<=l)throw Error(v(301));l+=1,J=K=null,e.updateQueue=null,Or.current=mm,n=t(s,r)}while(vs)}if(Or.current=tl,e=K!==null&&K.next!==null,Je=0,J=K=U=null,el=!1,e)throw Error(v(300));return n}function Go(){var n=Is!==0;return Is=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?U.memoizedState=J=n:J=J.next=n,J}function On(){if(K===null){var n=U.alternate;n=n!==null?n.memoizedState:null}else n=K.next;var e=J===null?U.memoizedState:J.next;if(e!==null)J=e,K=n;else{if(n===null)throw Error(v(310));K=n,n={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?U.memoizedState=J=n:J=J.next=n}return J}function Rs(n,e){return typeof e=="function"?e(n):e}function wa(n){var e=On(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var s=K,r=s.baseQueue,l=t.pending;if(l!==null){if(r!==null){var a=r.next;r.next=l.next,l.next=a}s.baseQueue=r=l,t.pending=null}if(r!==null){l=r.next,s=s.baseState;var o=a=null,i=null,u=l;do{var f=u.lane;if((Je&f)===f)i!==null&&(i=i.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:n(s,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};i===null?(o=i=m,a=s):i=i.next=m,U.lanes|=f,Ze|=f}u=u.next}while(u!==null&&u!==l);i===null?a=s:i.next=o,Un(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseState=a,e.baseQueue=i,t.lastRenderedState=s}if(n=t.interleaved,n!==null){r=n;do l=r.lane,U.lanes|=l,Ze|=l,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ka(n){var e=On(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var s=t.dispatch,r=t.pending,l=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do l=n(l,a.action),a=a.next;while(a!==r);Un(l,e.memoizedState)||(gn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,s]}function mp(){}function gp(n,e){var t=U,s=On(),r=e(),l=!Un(s.memoizedState,r);if(l&&(s.memoizedState=r,gn=!0),s=s.queue,Yo(jp.bind(null,t,s,n),[n]),s.getSnapshot!==e||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,Ds(9,vp.bind(null,t,s,r,e),void 0,null),Z===null)throw Error(v(349));Je&30||yp(t,e,r)}return r}function yp(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=U.updateQueue,e===null?(e={lastEffect:null,stores:null},U.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function vp(n,e,t,s){e.value=t,e.getSnapshot=s,wp(e)&&kp(n)}function jp(n,e,t){return t(function(){wp(e)&&kp(n)})}function wp(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Un(n,t)}catch{return!0}}function kp(n){var e=ae(n,1);e!==null&&Bn(e,n,1,-1)}function Uc(n){var e=Qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:n},e.queue=n,n=n.dispatch=dm.bind(null,U,n),[e.memoizedState,n]}function Ds(n,e,t,s){return n={tag:n,create:e,destroy:t,deps:s,next:null},e=U.updateQueue,e===null?(e={lastEffect:null,stores:null},U.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(s=t.next,t.next=n,n.next=s,e.lastEffect=n)),n}function _p(){return On().memoizedState}function zr(n,e,t,s){var r=Qn();U.flags|=n,r.memoizedState=Ds(1|e,t,void 0,s===void 0?null:s)}function ml(n,e,t,s){var r=On();s=s===void 0?null:s;var l=void 0;if(K!==null){var a=K.memoizedState;if(l=a.destroy,s!==null&&Wo(s,a.deps)){r.memoizedState=Ds(e,t,l,s);return}}U.flags|=n,r.memoizedState=Ds(1|e,t,l,s)}function Hc(n,e){return zr(8390656,8,n,e)}function Yo(n,e){return ml(2048,8,n,e)}function Sp(n,e){return ml(4,2,n,e)}function xp(n,e){return ml(4,4,n,e)}function Ep(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Cp(n,e,t){return t=t!=null?t.concat([n]):null,ml(4,4,Ep.bind(null,e,n),t)}function Ko(){}function qp(n,e){var t=On();e=e===void 0?null:e;var s=t.memoizedState;return s!==null&&e!==null&&Wo(e,s[1])?s[0]:(t.memoizedState=[n,e],n)}function Np(n,e){var t=On();e=e===void 0?null:e;var s=t.memoizedState;return s!==null&&e!==null&&Wo(e,s[1])?s[0]:(n=n(),t.memoizedState=[n,e],n)}function Pp(n,e,t){return Je&21?(Un(t,e)||(t=Ou(),U.lanes|=t,Ze|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t)}function um(n,e){var t=z;z=t!==0&&4>t?t:4,n(!0);var s=ja.transition;ja.transition={};try{n(!1),e()}finally{z=t,ja.transition=s}}function bp(){return On().memoizedState}function pm(n,e,t){var s=Te(n);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Tp(n))Op(e,t);else if(t=ip(n,e,t,s),t!==null){var r=dn();Bn(t,n,s,r),zp(t,e,s)}}function dm(n,e,t){var s=Te(n),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Tp(n))Op(e,r);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var a=e.lastRenderedState,o=l(a,t);if(r.hasEagerState=!0,r.eagerState=o,Un(o,a)){var i=e.interleaved;i===null?(r.next=r,Bo(e)):(r.next=i.next,i.next=r),e.interleaved=r;return}}catch{}finally{}t=ip(n,e,r,s),t!==null&&(r=dn(),Bn(t,n,s,r),zp(t,e,s))}}function Tp(n){var e=n.alternate;return n===U||e!==null&&e===U}function Op(n,e){vs=el=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function zp(n,e,t){if(t&4194240){var s=e.lanes;s&=n.pendingLanes,t|=s,e.lanes=t,qo(n,t)}}var tl={readContext:Tn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},fm={readContext:Tn,useCallback:function(n,e){return Qn().memoizedState=[n,e===void 0?null:e],n},useContext:Tn,useEffect:Hc,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,zr(4194308,4,Ep.bind(null,e,n),t)},useLayoutEffect:function(n,e){return zr(4194308,4,n,e)},useInsertionEffect:function(n,e){return zr(4,2,n,e)},useMemo:function(n,e){var t=Qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var s=Qn();return e=t!==void 0?t(e):e,s.memoizedState=s.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},s.queue=n,n=n.dispatch=pm.bind(null,U,n),[s.memoizedState,n]},useRef:function(n){var e=Qn();return n={current:n},e.memoizedState=n},useState:Uc,useDebugValue:Ko,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Uc(!1),e=n[0];return n=um.bind(null,n[1]),Qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var s=U,r=Qn();if(A){if(t===void 0)throw Error(v(407));t=t()}else{if(t=e(),Z===null)throw Error(v(349));Je&30||yp(s,e,t)}r.memoizedState=t;var l={value:t,getSnapshot:e};return r.queue=l,Hc(jp.bind(null,s,l,n),[n]),s.flags|=2048,Ds(9,vp.bind(null,s,l,t,e),void 0,null),t},useId:function(){var n=Qn(),e=Z.identifierPrefix;if(A){var t=te,s=ee;t=(s&~(1<<32-An(s)-1)).toString(32)+t,e=":"+e+"R"+t,t=Is++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=cm++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},hm={readContext:Tn,useCallback:qp,useContext:Tn,useEffect:Yo,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:xp,useMemo:Np,useReducer:wa,useRef:_p,useState:function(){return wa(Rs)},useDebugValue:Ko,useDeferredValue:function(n){var e=On();return Pp(e,K.memoizedState,n)},useTransition:function(){var n=wa(Rs)[0],e=On().memoizedState;return[n,e]},useMutableSource:mp,useSyncExternalStore:gp,useId:bp,unstable_isNewReconciler:!1},mm={readContext:Tn,useCallback:qp,useContext:Tn,useEffect:Yo,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:xp,useMemo:Np,useReducer:ka,useRef:_p,useState:function(){return ka(Rs)},useDebugValue:Ko,useDeferredValue:function(n){var e=On();return K===null?e.memoizedState=n:Pp(e,K.memoizedState,n)},useTransition:function(){var n=ka(Rs)[0],e=On().memoizedState;return[n,e]},useMutableSource:mp,useSyncExternalStore:gp,useId:bp,unstable_isNewReconciler:!1};function Lt(n,e){try{var t="",s=e;do t+=$f(s),s=s.return;while(s);var r=t}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:r,digest:null}}function _a(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ro(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function Lp(n,e,t){t=se(-1,t),t.tag=3,t.payload={element:null};var s=e.value;return t.callback=function(){rl||(rl=!0,mo=s),ro(n,e)},t}function Ip(n,e,t){t=se(-1,t),t.tag=3;var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=e.value;t.payload=function(){return s(r)},t.callback=function(){ro(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ro(n,e),typeof s!="function"&&(be===null?be=new Set([this]):be.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Vc(n,e,t){var s=n.pingCache;if(s===null){s=n.pingCache=new gm;var r=new Set;s.set(e,r)}else r=s.get(e),r===void 0&&(r=new Set,s.set(e,r));r.has(t)||(r.add(t),n=bm.bind(null,n,e,t),e.then(n,n))}function $c(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wc(n,e,t,s,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=se(-1,1),e.tag=2,Pe(t,e,1))),t.lanes|=1),n)}var ym=ie.ReactCurrentOwner,gn=!1;function pn(n,e,t,s){e.child=n===null?fp(e,null,t,s):Ot(e,n.child,t,s)}function Qc(n,e,t,s,r){t=t.render;var l=e.ref;return qt(e,r),s=Qo(n,e,t,s,l,r),t=Go(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,oe(n,e,r)):(A&&t&&Io(e),e.flags|=1,pn(n,e,s,r),e.child)}function Gc(n,e,t,s,r){if(n===null){var l=t.type;return typeof l=="function"&&!ri(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,Rp(n,e,l,s,r)):(n=Dr(t.type,null,s,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&r)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:Ps,t(a,s)&&n.ref===e.ref)return oe(n,e,r)}return e.flags|=1,n=Oe(l,s),n.ref=e.ref,n.return=e,e.child=n}function Rp(n,e,t,s,r){if(n!==null){var l=n.memoizedProps;if(Ps(l,s)&&n.ref===e.ref)if(gn=!1,e.pendingProps=s=l,(n.lanes&r)!==0)n.flags&131072&&(gn=!0);else return e.lanes=n.lanes,oe(n,e,r)}return lo(n,e,t,s,r)}function Dp(n,e,t){var s=e.pendingProps,r=s.children,l=n!==null?n.memoizedState:null;if(s.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(_t,wn),wn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,R(_t,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=l!==null?l.baseLanes:t,R(_t,wn),wn|=s}else l!==null?(s=l.baseLanes|t,e.memoizedState=null):s=t,R(_t,wn),wn|=s;return pn(n,e,r,t),e.child}function Fp(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function lo(n,e,t,s,r){var l=vn(t)?Ke:on.current;return l=bt(e,l),qt(e,r),t=Qo(n,e,t,s,l,r),s=Go(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,oe(n,e,r)):(A&&s&&Io(e),e.flags|=1,pn(n,e,t,r),e.child)}function Yc(n,e,t,s,r){if(vn(t)){var l=!0;Gr(e)}else l=!1;if(qt(e,r),e.stateNode===null)Lr(n,e),pp(e,t,s),so(e,t,s,r),s=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var i=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=vn(t)?Ke:on.current,u=bt(e,u));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==s||i!==u)&&Ac(e,a,s,u),we=!1;var h=e.memoizedState;a.state=h,Zr(e,s,a,r),i=e.memoizedState,o!==s||h!==i||yn.current||we?(typeof f=="function"&&(to(e,t,f,s),i=e.memoizedState),(o=we||Mc(e,t,o,s,h,i,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=i),a.props=s,a.state=i,a.context=u,s=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{a=e.stateNode,cp(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:Dn(e.type,o),a.props=u,m=e.pendingProps,h=a.context,i=t.contextType,typeof i=="object"&&i!==null?i=Tn(i):(i=vn(t)?Ke:on.current,i=bt(e,i));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||h!==i)&&Ac(e,a,s,i),we=!1,h=e.memoizedState,a.state=h,Zr(e,s,a,r);var w=e.memoizedState;o!==m||h!==w||yn.current||we?(typeof y=="function"&&(to(e,t,y,s),w=e.memoizedState),(u=we||Mc(e,t,u,s,h,w,i)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,w,i),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,w,i)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=w),a.props=s,a.state=w,a.context=i,s=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),s=!1)}return ao(n,e,t,s,l,r)}function ao(n,e,t,s,r,l){Fp(n,e);var a=(e.flags&128)!==0;if(!s&&!a)return r&&Lc(e,t,!1),oe(n,e,l);s=e.stateNode,ym.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return e.flags|=1,n!==null&&a?(e.child=Ot(e,n.child,null,l),e.child=Ot(e,null,o,l)):pn(n,e,o,l),e.memoizedState=s.state,r&&Lc(e,t,!0),e.child}function Mp(n){var e=n.stateNode;e.pendingContext?zc(n,e.pendingContext,e.pendingContext!==e.context):e.context&&zc(n,e.context,!1),Ho(n,e.containerInfo)}function Kc(n,e,t,s,r){return Tt(),Do(r),e.flags|=256,pn(n,e,t,s),e.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function io(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ap(n,e,t){var s=e.pendingProps,r=B.current,l=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),R(B,r&1),n===null)return no(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=s.children,n=s.fallback,l?(s=e.mode,l=e.child,a={mode:"hidden",children:a},!(s&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=vl(a,s,0,null),n=Ye(n,s,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=io(t),e.memoizedState=oo,n):Xo(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return vm(n,e,a,s,o,r,t);if(l){l=s.fallback,a=e.mode,r=n.child,o=r.sibling;var i={mode:"hidden",children:s.children};return!(a&1)&&e.child!==r?(s=e.child,s.childLanes=0,s.pendingProps=i,e.deletions=null):(s=Oe(r,i),s.subtreeFlags=r.subtreeFlags&14680064),o!==null?l=Oe(o,l):(l=Ye(l,a,t,null),l.flags|=2),l.return=e,s.return=e,s.sibling=l,e.child=s,s=l,l=e.child,a=n.child.memoizedState,a=a===null?io(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=n.childLanes&~t,e.memoizedState=oo,s}return l=n.child,n=l.sibling,s=Oe(l,{mode:"visible",children:s.children}),!(e.mode&1)&&(s.lanes=t),s.return=e,s.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=s,e.memoizedState=null,s}function Xo(n,e){return e=vl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Er(n,e,t,s){return s!==null&&Do(s),Ot(e,n.child,null,t),n=Xo(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function vm(n,e,t,s,r,l,a){if(t)return e.flags&256?(e.flags&=-257,s=_a(Error(v(422))),Er(n,e,a,s)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=s.fallback,r=e.mode,s=vl({mode:"visible",children:s.children},r,0,null),l=Ye(l,r,a,null),l.flags|=2,s.return=e,l.return=e,s.sibling=l,e.child=s,e.mode&1&&Ot(e,n.child,null,a),e.child.memoizedState=io(a),e.memoizedState=oo,l);if(!(e.mode&1))return Er(n,e,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var o=s.dgst;return s=o,l=Error(v(419)),s=_a(l,s,void 0),Er(n,e,a,s)}if(o=(a&n.childLanes)!==0,gn||o){if(s=Z,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,ae(n,r),Bn(s,n,r,-1))}return si(),s=_a(Error(v(421))),Er(n,e,a,s)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Tm.bind(null,n),r._reactRetry=e,null):(n=l.treeContext,kn=Ne(r.nextSibling),_n=e,A=!0,Mn=null,n!==null&&(qn[Nn++]=ee,qn[Nn++]=te,qn[Nn++]=Xe,ee=n.id,te=n.overflow,Xe=e),e=Xo(e,s.children),e.flags|=4096,e)}function Xc(n,e,t){n.lanes|=e;var s=n.alternate;s!==null&&(s.lanes|=e),eo(n.return,e,t)}function Sa(n,e,t,s,r){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=t,l.tailMode=r)}function Bp(n,e,t){var s=e.pendingProps,r=s.revealOrder,l=s.tail;if(pn(n,e,s.children,t),s=B.current,s&2)s=s&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xc(n,t,e);else if(n.tag===19)Xc(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}if(R(B,s),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Sa(e,!1,r,t,l);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Sa(e,!0,t,null,l);break;case"together":Sa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function oe(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ze|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(v(153));if(e.child!==null){for(n=e.child,t=Oe(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Oe(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function jm(n,e,t){switch(e.tag){case 3:Mp(e),Tt();break;case 5:hp(e);break;case 1:vn(e.type)&&Gr(e);break;case 4:Ho(e,e.stateNode.containerInfo);break;case 10:var s=e.type._context,r=e.memoizedProps.value;R(Xr,s._currentValue),s._currentValue=r;break;case 13:if(s=e.memoizedState,s!==null)return s.dehydrated!==null?(R(B,B.current&1),e.flags|=128,null):t&e.child.childLanes?Ap(n,e,t):(R(B,B.current&1),n=oe(n,e,t),n!==null?n.sibling:null);R(B,B.current&1);break;case 19:if(s=(t&e.childLanes)!==0,n.flags&128){if(s)return Bp(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),R(B,B.current),s)break;return null;case 22:case 23:return e.lanes=0,Dp(n,e,t)}return oe(n,e,t)}var Up,co,Hp,Vp;Up=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};co=function(){};Hp=function(n,e,t,s){var r=n.memoizedProps;if(r!==s){n=e.stateNode,Qe(Kn.current);var l=null;switch(t){case"input":r=Ta(n,r),s=Ta(n,s),l=[];break;case"select":r=H({},r,{value:void 0}),s=H({},s,{value:void 0}),l=[];break;case"textarea":r=La(n,r),s=La(n,s),l=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(n.onclick=Wr)}Ra(t,s);var a;t=null;for(u in r)if(!s.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_s.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in s){var i=s[u];if(o=r?.[u],s.hasOwnProperty(u)&&i!==o&&(i!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||i&&i.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in i)i.hasOwnProperty(a)&&o[a]!==i[a]&&(t||(t={}),t[a]=i[a])}else t||(l||(l=[]),l.push(u,t)),t=i;else u==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(l=l||[]).push(u,i)):u==="children"?typeof i!="string"&&typeof i!="number"||(l=l||[]).push(u,""+i):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_s.hasOwnProperty(u)?(i!=null&&u==="onScroll"&&D("scroll",n),l||o===i||(l=[])):(l=l||[]).push(u,i))}t&&(l=l||[]).push("style",t);var u=l;(e.updateQueue=u)&&(e.flags|=4)}};Vp=function(n,e,t,s){t!==s&&(e.flags|=4)};function as(n,e){if(!A)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function ln(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,s=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=s,n.childLanes=t,e}function wm(n,e,t){var s=e.pendingProps;switch(Ro(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return vn(e.type)&&Qr(),ln(e),null;case 3:return s=e.stateNode,zt(),F(yn),F(on),$o(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Sr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(vo(Mn),Mn=null))),co(n,e),ln(e),null;case 5:Vo(e);var r=Qe(Ls.current);if(t=e.type,n!==null&&e.stateNode!=null)Hp(n,e,t,s,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!s){if(e.stateNode===null)throw Error(v(166));return ln(e),null}if(n=Qe(Kn.current),Sr(e)){s=e.stateNode,t=e.type;var l=e.memoizedProps;switch(s[Gn]=e,s[Os]=l,n=(e.mode&1)!==0,t){case"dialog":D("cancel",s),D("close",s);break;case"iframe":case"object":case"embed":D("load",s);break;case"video":case"audio":for(r=0;r<ds.length;r++)D(ds[r],s);break;case"source":D("error",s);break;case"img":case"image":case"link":D("error",s),D("load",s);break;case"details":D("toggle",s);break;case"input":lc(s,l),D("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!l.multiple},D("invalid",s);break;case"textarea":oc(s,l),D("invalid",s)}Ra(t,l),r=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?s.textContent!==o&&(l.suppressHydrationWarning!==!0&&_r(s.textContent,o,n),r=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&_r(s.textContent,o,n),r=["children",""+o]):_s.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&D("scroll",s)}switch(t){case"input":ur(s),ac(s,l,!0);break;case"textarea":ur(s),ic(s);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(s.onclick=Wr)}s=r,e.updateQueue=s,s!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=yu(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof s.is=="string"?n=a.createElement(t,{is:s.is}):(n=a.createElement(t),t==="select"&&(a=n,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):n=a.createElementNS(n,t),n[Gn]=e,n[Os]=s,Up(n,e,!1,!1),e.stateNode=n;n:{switch(a=Da(t,s),t){case"dialog":D("cancel",n),D("close",n),r=s;break;case"iframe":case"object":case"embed":D("load",n),r=s;break;case"video":case"audio":for(r=0;r<ds.length;r++)D(ds[r],n);r=s;break;case"source":D("error",n),r=s;break;case"img":case"image":case"link":D("error",n),D("load",n),r=s;break;case"details":D("toggle",n),r=s;break;case"input":lc(n,s),r=Ta(n,s),D("invalid",n);break;case"option":r=s;break;case"select":n._wrapperState={wasMultiple:!!s.multiple},r=H({},s,{value:void 0}),D("invalid",n);break;case"textarea":oc(n,s),r=La(n,s),D("invalid",n);break;default:r=s}Ra(t,r),o=r;for(l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="style"?wu(n,i):l==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&vu(n,i)):l==="children"?typeof i=="string"?(t!=="textarea"||i!=="")&&Ss(n,i):typeof i=="number"&&Ss(n,""+i):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_s.hasOwnProperty(l)?i!=null&&l==="onScroll"&&D("scroll",n):i!=null&&ko(n,l,i,a))}switch(t){case"input":ur(n),ac(n,s,!1);break;case"textarea":ur(n),ic(n);break;case"option":s.value!=null&&n.setAttribute("value",""+ze(s.value));break;case"select":n.multiple=!!s.multiple,l=s.value,l!=null?St(n,!!s.multiple,l,!1):s.defaultValue!=null&&St(n,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Wr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break n;case"img":s=!0;break n;default:s=!1}}s&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(n&&e.stateNode!=null)Vp(n,e,n.memoizedProps,s);else{if(typeof s!="string"&&e.stateNode===null)throw Error(v(166));if(t=Qe(Ls.current),Qe(Kn.current),Sr(e)){if(s=e.stateNode,t=e.memoizedProps,s[Gn]=e,(l=s.nodeValue!==t)&&(n=_n,n!==null))switch(n.tag){case 3:_r(s.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_r(s.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Gn]=e,e.stateNode=s}return ln(e),null;case 13:if(F(B),s=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(A&&kn!==null&&e.mode&1&&!(e.flags&128))op(),Tt(),e.flags|=98560,l=!1;else if(l=Sr(e),s!==null&&s.dehydrated!==null){if(n===null){if(!l)throw Error(v(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Gn]=e}else Tt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),l=!1}else Mn!==null&&(vo(Mn),Mn=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(s=s!==null,s!==(n!==null&&n.memoizedState!==null)&&s&&(e.child.flags|=8192,e.mode&1&&(n===null||B.current&1?X===0&&(X=3):si())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return zt(),co(n,e),n===null&&bs(e.stateNode.containerInfo),ln(e),null;case 10:return Ao(e.type._context),ln(e),null;case 17:return vn(e.type)&&Qr(),ln(e),null;case 19:if(F(B),l=e.memoizedState,l===null)return ln(e),null;if(s=(e.flags&128)!==0,a=l.rendering,a===null)if(s)as(l,!1);else{if(X!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=nl(n),a!==null){for(e.flags|=128,as(l,!1),s=a.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),e.subtreeFlags=0,s=t,t=e.child;t!==null;)l=t,n=s,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,n=a.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return R(B,B.current&1|2),e.child}n=n.sibling}l.tail!==null&&Q()>It&&(e.flags|=128,s=!0,as(l,!1),e.lanes=4194304)}else{if(!s)if(n=nl(a),n!==null){if(e.flags|=128,s=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),as(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!A)return ln(e),null}else 2*Q()-l.renderingStartTime>It&&t!==1073741824&&(e.flags|=128,s=!0,as(l,!1),e.lanes=4194304);l.isBackwards?(a.sibling=e.child,e.child=a):(t=l.last,t!==null?t.sibling=a:e.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Q(),e.sibling=null,t=B.current,R(B,s?t&1|2:t&1),e):(ln(e),null);case 22:case 23:return ti(),s=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==s&&(e.flags|=8192),s&&e.mode&1?wn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function km(n,e){switch(Ro(e),e.tag){case 1:return vn(e.type)&&Qr(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return zt(),F(yn),F(on),$o(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Vo(e),null;case 13:if(F(B),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Tt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return F(B),null;case 4:return zt(),null;case 10:return Ao(e.type._context),null;case 22:case 23:return ti(),null;case 24:return null;default:return null}}var Cr=!1,an=!1,_m=typeof WeakSet=="function"?WeakSet:Set,x=null;function kt(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){V(n,e,s)}else t.current=null}function uo(n,e,t){try{t()}catch(s){V(n,e,s)}}var Jc=!1;function Sm(n,e){if(Qa=Hr,n=Gu(),Lo(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var a=0,o=-1,i=-1,u=0,f=0,m=n,h=null;e:for(;;){for(var y;m!==t||r!==0&&m.nodeType!==3||(o=a+r),m!==l||s!==0&&m.nodeType!==3||(i=a+s),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===n)break e;if(h===t&&++u===r&&(o=a),h===l&&++f===s&&(i=a),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}t=o===-1||i===-1?null:{start:o,end:i}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ga={focusedElem:n,selectionRange:t},Hr=!1,x=e;x!==null;)if(e=x,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,x=n;else for(;x!==null;){e=x;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,P=w.memoizedState,p=e.stateNode,c=p.getSnapshotBeforeUpdate(e.elementType===e.type?k:Dn(e.type,k),P);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){V(e,e.return,g)}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}return w=Jc,Jc=!1,w}function js(n,e,t){var s=e.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&n)===n){var l=r.destroy;r.destroy=void 0,l!==void 0&&uo(e,t,l)}r=r.next}while(r!==s)}}function gl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var s=t.create;t.destroy=s()}t=t.next}while(t!==e)}}function po(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $p(n){var e=n.alternate;e!==null&&(n.alternate=null,$p(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Gn],delete e[Os],delete e[Xa],delete e[lm],delete e[am])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Zc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fo(n,e,t){var s=n.tag;if(s===5||s===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Wr));else if(s!==4&&(n=n.child,n!==null))for(fo(n,e,t),n=n.sibling;n!==null;)fo(n,e,t),n=n.sibling}function ho(n,e,t){var s=n.tag;if(s===5||s===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(s!==4&&(n=n.child,n!==null))for(ho(n,e,t),n=n.sibling;n!==null;)ho(n,e,t),n=n.sibling}var nn=null,Fn=!1;function ve(n,e,t){for(t=t.child;t!==null;)Qp(n,e,t),t=t.sibling}function Qp(n,e,t){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(il,t)}catch{}switch(t.tag){case 5:an||kt(t,e);case 6:var s=nn,r=Fn;nn=null,ve(n,e,t),nn=s,Fn=r,nn!==null&&(Fn?(n=nn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):nn.removeChild(t.stateNode));break;case 18:nn!==null&&(Fn?(n=nn,t=t.stateNode,n.nodeType===8?ga(n.parentNode,t):n.nodeType===1&&ga(n,t),qs(n)):ga(nn,t.stateNode));break;case 4:s=nn,r=Fn,nn=t.stateNode.containerInfo,Fn=!0,ve(n,e,t),nn=s,Fn=r;break;case 0:case 11:case 14:case 15:if(!an&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var l=r,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&uo(t,e,a),r=r.next}while(r!==s)}ve(n,e,t);break;case 1:if(!an&&(kt(t,e),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(o){V(t,e,o)}ve(n,e,t);break;case 21:ve(n,e,t);break;case 22:t.mode&1?(an=(s=an)||t.memoizedState!==null,ve(n,e,t),an=s):ve(n,e,t);break;default:ve(n,e,t)}}function nu(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new _m),e.forEach(function(s){var r=Om.bind(null,n,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Rn(n,e){var t=e.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var l=n,a=e,o=a;n:for(;o!==null;){switch(o.tag){case 5:nn=o.stateNode,Fn=!1;break n;case 3:nn=o.stateNode.containerInfo,Fn=!0;break n;case 4:nn=o.stateNode.containerInfo,Fn=!0;break n}o=o.return}if(nn===null)throw Error(v(160));Qp(l,a,r),nn=null,Fn=!1;var i=r.alternate;i!==null&&(i.return=null),r.return=null}catch(u){V(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gp(e,n),e=e.sibling}function Gp(n,e){var t=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(e,n),Wn(n),s&4){try{js(3,n,n.return),gl(3,n)}catch(k){V(n,n.return,k)}try{js(5,n,n.return)}catch(k){V(n,n.return,k)}}break;case 1:Rn(e,n),Wn(n),s&512&&t!==null&&kt(t,t.return);break;case 5:if(Rn(e,n),Wn(n),s&512&&t!==null&&kt(t,t.return),n.flags&32){var r=n.stateNode;try{Ss(r,"")}catch(k){V(n,n.return,k)}}if(s&4&&(r=n.stateNode,r!=null)){var l=n.memoizedProps,a=t!==null?t.memoizedProps:l,o=n.type,i=n.updateQueue;if(n.updateQueue=null,i!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&mu(r,l),Da(o,a);var u=Da(o,l);for(a=0;a<i.length;a+=2){var f=i[a],m=i[a+1];f==="style"?wu(r,m):f==="dangerouslySetInnerHTML"?vu(r,m):f==="children"?Ss(r,m):ko(r,f,m,u)}switch(o){case"input":Oa(r,l);break;case"textarea":gu(r,l);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?St(r,!!l.multiple,y,!1):h!==!!l.multiple&&(l.defaultValue!=null?St(r,!!l.multiple,l.defaultValue,!0):St(r,!!l.multiple,l.multiple?[]:"",!1))}r[Os]=l}catch(k){V(n,n.return,k)}}break;case 6:if(Rn(e,n),Wn(n),s&4){if(n.stateNode===null)throw Error(v(162));r=n.stateNode,l=n.memoizedProps;try{r.nodeValue=l}catch(k){V(n,n.return,k)}}break;case 3:if(Rn(e,n),Wn(n),s&4&&t!==null&&t.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(k){V(n,n.return,k)}break;case 4:Rn(e,n),Wn(n);break;case 13:Rn(e,n),Wn(n),r=n.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(ni=Q())),s&4&&nu(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(an=(u=an)||f,Rn(e,n),an=u):Rn(e,n),Wn(n),s&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&n.mode&1)for(x=n,f=n.child;f!==null;){for(m=x=f;x!==null;){switch(h=x,y=h.child,h.tag){case 0:case 11:case 14:case 15:js(4,h,h.return);break;case 1:kt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){s=h,t=h.return;try{e=s,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(k){V(s,t,k)}}break;case 5:kt(h,h.return);break;case 22:if(h.memoizedState!==null){tu(m);continue}}y!==null?(y.return=h,x=y):tu(m)}f=f.sibling}n:for(f=null,m=n;;){if(m.tag===5){if(f===null){f=m;try{r=m.stateNode,u?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=m.stateNode,i=m.memoizedProps.style,a=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=ju("display",a))}catch(k){V(n,n.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(k){V(n,n.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===n)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break n;for(;m.sibling===null;){if(m.return===null||m.return===n)break n;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Rn(e,n),Wn(n),s&4&&nu(n);break;case 21:break;default:Rn(e,n),Wn(n)}}function Wn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Wp(t)){var s=t;break n}t=t.return}throw Error(v(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(Ss(r,""),s.flags&=-33);var l=Zc(n);ho(n,l,r);break;case 3:case 4:var a=s.stateNode.containerInfo,o=Zc(n);fo(n,o,a);break;default:throw Error(v(161))}}catch(i){V(n,n.return,i)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function xm(n,e,t){x=n,Yp(n,e,t)}function Yp(n,e,t){for(var s=(n.mode&1)!==0;x!==null;){var r=x,l=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||Cr;if(!a){var o=r.alternate,i=o!==null&&o.memoizedState!==null||an;o=Cr;var u=an;if(Cr=a,(an=i)&&!u)for(x=r;x!==null;)a=x,i=a.child,a.tag===22&&a.memoizedState!==null?su(r):i!==null?(i.return=a,x=i):su(r);for(;l!==null;)x=l,Yp(l,e,t),l=l.sibling;x=r,Cr=o,an=u}eu(n,e,t)}else r.subtreeFlags&8772&&l!==null?(l.return=r,x=l):eu(n,e,t)}}function eu(n){for(;x!==null;){var e=x;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||gl(5,e);break;case 1:var s=e.stateNode;if(e.flags&4&&!an)if(t===null)s.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Dn(e.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&Fc(e,l,s);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Fc(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var i=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&t.focus();break;case"img":i.src&&(t.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&qs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}an||e.flags&512&&po(e)}catch(h){V(e,e.return,h)}}if(e===n){x=null;break}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}}function tu(n){for(;x!==null;){var e=x;if(e===n){x=null;break}var t=e.sibling;if(t!==null){t.return=e.return,x=t;break}x=e.return}}function su(n){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{gl(4,e)}catch(i){V(e,t,i)}break;case 1:var s=e.stateNode;if(typeof s.componentDidMount=="function"){var r=e.return;try{s.componentDidMount()}catch(i){V(e,r,i)}}var l=e.return;try{po(e)}catch(i){V(e,l,i)}break;case 5:var a=e.return;try{po(e)}catch(i){V(e,a,i)}}}catch(i){V(e,e.return,i)}if(e===n){x=null;break}var o=e.sibling;if(o!==null){o.return=e.return,x=o;break}x=e.return}}var Em=Math.ceil,sl=ie.ReactCurrentDispatcher,Jo=ie.ReactCurrentOwner,bn=ie.ReactCurrentBatchConfig,T=0,Z=null,G=null,en=0,wn=0,_t=Re(0),X=0,Fs=null,Ze=0,yl=0,Zo=0,ws=null,mn=null,ni=0,It=1/0,Zn=null,rl=!1,mo=null,be=null,qr=!1,xe=null,ll=0,ks=0,go=null,Ir=-1,Rr=0;function dn(){return T&6?Q():Ir!==-1?Ir:Ir=Q()}function Te(n){return n.mode&1?T&2&&en!==0?en&-en:im.transition!==null?(Rr===0&&(Rr=Ou()),Rr):(n=z,n!==0||(n=window.event,n=n===void 0?16:Mu(n.type)),n):1}function Bn(n,e,t,s){if(50<ks)throw ks=0,go=null,Error(v(185));Ms(n,t,s),(!(T&2)||n!==Z)&&(n===Z&&(!(T&2)&&(yl|=t),X===4&&_e(n,en)),jn(n,s),t===1&&T===0&&!(e.mode&1)&&(It=Q()+500,fl&&De()))}function jn(n,e){var t=n.callbackNode;uh(n,e);var s=Ur(n,n===Z?en:0);if(s===0)t!==null&&pc(t),n.callbackNode=null,n.callbackPriority=0;else if(e=s&-s,n.callbackPriority!==e){if(t!=null&&pc(t),e===1)n.tag===0?om(ru.bind(null,n)):rp(ru.bind(null,n)),sm(function(){!(T&6)&&De()}),t=null;else{switch(zu(s)){case 1:t=Co;break;case 4:t=bu;break;case 16:t=Br;break;case 536870912:t=Tu;break;default:t=Br}t=sd(t,Kp.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Kp(n,e){if(Ir=-1,Rr=0,T&6)throw Error(v(327));var t=n.callbackNode;if(Nt()&&n.callbackNode!==t)return null;var s=Ur(n,n===Z?en:0);if(s===0)return null;if(s&30||s&n.expiredLanes||e)e=al(n,s);else{e=s;var r=T;T|=2;var l=Jp();(Z!==n||en!==e)&&(Zn=null,It=Q()+500,Ge(n,e));do try{Nm();break}catch(o){Xp(n,o)}while(!0);Mo(),sl.current=l,T=r,G!==null?e=0:(Z=null,en=0,e=X)}if(e!==0){if(e===2&&(r=Ua(n),r!==0&&(s=r,e=yo(n,r))),e===1)throw t=Fs,Ge(n,0),_e(n,s),jn(n,Q()),t;if(e===6)_e(n,s);else{if(r=n.current.alternate,!(s&30)&&!Cm(r)&&(e=al(n,s),e===2&&(l=Ua(n),l!==0&&(s=l,e=yo(n,l))),e===1))throw t=Fs,Ge(n,0),_e(n,s),jn(n,Q()),t;switch(n.finishedWork=r,n.finishedLanes=s,e){case 0:case 1:throw Error(v(345));case 2:Ve(n,mn,Zn);break;case 3:if(_e(n,s),(s&130023424)===s&&(e=ni+500-Q(),10<e)){if(Ur(n,0)!==0)break;if(r=n.suspendedLanes,(r&s)!==s){dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ka(Ve.bind(null,n,mn,Zn),e);break}Ve(n,mn,Zn);break;case 4:if(_e(n,s),(s&4194240)===s)break;for(e=n.eventTimes,r=-1;0<s;){var a=31-An(s);l=1<<a,a=e[a],a>r&&(r=a),s&=~l}if(s=r,s=Q()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Em(s/1960))-s,10<s){n.timeoutHandle=Ka(Ve.bind(null,n,mn,Zn),s);break}Ve(n,mn,Zn);break;case 5:Ve(n,mn,Zn);break;default:throw Error(v(329))}}}return jn(n,Q()),n.callbackNode===t?Kp.bind(null,n):null}function yo(n,e){var t=ws;return n.current.memoizedState.isDehydrated&&(Ge(n,e).flags|=256),n=al(n,e),n!==2&&(e=mn,mn=t,e!==null&&vo(e)),n}function vo(n){mn===null?mn=n:mn.push.apply(mn,n)}function Cm(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],l=r.getSnapshot;r=r.value;try{if(!Un(l(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _e(n,e){for(e&=~Zo,e&=~yl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-An(e),s=1<<t;n[t]=-1,e&=~s}}function ru(n){if(T&6)throw Error(v(327));Nt();var e=Ur(n,0);if(!(e&1))return jn(n,Q()),null;var t=al(n,e);if(n.tag!==0&&t===2){var s=Ua(n);s!==0&&(e=s,t=yo(n,s))}if(t===1)throw t=Fs,Ge(n,0),_e(n,e),jn(n,Q()),t;if(t===6)throw Error(v(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ve(n,mn,Zn),jn(n,Q()),null}function ei(n,e){var t=T;T|=1;try{return n(e)}finally{T=t,T===0&&(It=Q()+500,fl&&De())}}function nt(n){xe!==null&&xe.tag===0&&!(T&6)&&Nt();var e=T;T|=1;var t=bn.transition,s=z;try{if(bn.transition=null,z=1,n)return n()}finally{z=s,bn.transition=t,T=e,!(T&6)&&De()}}function ti(){wn=_t.current,F(_t)}function Ge(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,tm(t)),G!==null)for(t=G.return;t!==null;){var s=t;switch(Ro(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Qr();break;case 3:zt(),F(yn),F(on),$o();break;case 5:Vo(s);break;case 4:zt();break;case 13:F(B);break;case 19:F(B);break;case 10:Ao(s.type._context);break;case 22:case 23:ti()}t=t.return}if(Z=n,G=n=Oe(n.current,null),en=wn=e,X=0,Fs=null,Zo=yl=Ze=0,mn=ws=null,We!==null){for(e=0;e<We.length;e++)if(t=We[e],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,l=t.pending;if(l!==null){var a=l.next;l.next=r,s.next=a}t.pending=s}We=null}return n}function Xp(n,e){do{var t=G;try{if(Mo(),Or.current=tl,el){for(var s=U.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}el=!1}if(Je=0,J=K=U=null,vs=!1,Is=0,Jo.current=null,t===null||t.return===null){X=1,Fs=e,G=null;break}n:{var l=n,a=t.return,o=t,i=e;if(e=en,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var u=i,f=o,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=$c(a);if(y!==null){y.flags&=-257,Wc(y,a,o,l,e),y.mode&1&&Vc(l,u,e),e=y,i=u;var w=e.updateQueue;if(w===null){var k=new Set;k.add(i),e.updateQueue=k}else w.add(i);break n}else{if(!(e&1)){Vc(l,u,e),si();break n}i=Error(v(426))}}else if(A&&o.mode&1){var P=$c(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Wc(P,a,o,l,e),Do(Lt(i,o));break n}}l=i=Lt(i,o),X!==4&&(X=2),ws===null?ws=[l]:ws.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var p=Lp(l,i,e);Dc(l,p);break n;case 1:o=i;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(be===null||!be.has(d)))){l.flags|=65536,e&=-e,l.lanes|=e;var g=Ip(l,o,e);Dc(l,g);break n}}l=l.return}while(l!==null)}nd(t)}catch(_){e=_,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function Jp(){var n=sl.current;return sl.current=tl,n===null?tl:n}function si(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Ze&268435455)&&!(yl&268435455)||_e(Z,en)}function al(n,e){var t=T;T|=2;var s=Jp();(Z!==n||en!==e)&&(Zn=null,Ge(n,e));do try{qm();break}catch(r){Xp(n,r)}while(!0);if(Mo(),T=t,sl.current=s,G!==null)throw Error(v(261));return Z=null,en=0,X}function qm(){for(;G!==null;)Zp(G)}function Nm(){for(;G!==null&&!eh();)Zp(G)}function Zp(n){var e=td(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?nd(n):G=e,Jo.current=null}function nd(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=km(t,e),t!==null){t.flags&=32767,G=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{X=6,G=null;return}}else if(t=wm(t,e,wn),t!==null){G=t;return}if(e=e.sibling,e!==null){G=e;return}G=e=n}while(e!==null);X===0&&(X=5)}function Ve(n,e,t){var s=z,r=bn.transition;try{bn.transition=null,z=1,Pm(n,e,t,s)}finally{bn.transition=r,z=s}return null}function Pm(n,e,t,s){do Nt();while(xe!==null);if(T&6)throw Error(v(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(v(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(ph(n,l),n===Z&&(G=Z=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||qr||(qr=!0,sd(Br,function(){return Nt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=bn.transition,bn.transition=null;var a=z;z=1;var o=T;T|=4,Jo.current=null,Sm(n,t),Gp(t,n),Xh(Ga),Hr=!!Qa,Ga=Qa=null,n.current=t,xm(t,n,r),th(),T=o,z=a,bn.transition=l}else n.current=t;if(qr&&(qr=!1,xe=n,ll=r),l=n.pendingLanes,l===0&&(be=null),lh(t.stateNode,s),jn(n,Q()),e!==null)for(s=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(rl)throw rl=!1,n=mo,mo=null,n;return ll&1&&n.tag!==0&&Nt(),l=n.pendingLanes,l&1?n===go?ks++:(ks=0,go=n):ks=0,De(),null}function Nt(){if(xe!==null){var n=zu(ll),e=bn.transition,t=z;try{if(bn.transition=null,z=16>n?16:n,xe===null)var s=!1;else{if(n=xe,xe=null,ll=0,T&6)throw Error(v(331));var r=T;for(T|=4,x=n.current;x!==null;){var l=x,a=l.child;if(x.flags&16){var o=l.deletions;if(o!==null){for(var i=0;i<o.length;i++){var u=o[i];for(x=u;x!==null;){var f=x;switch(f.tag){case 0:case 11:case 15:js(8,f,l)}var m=f.child;if(m!==null)m.return=f,x=m;else for(;x!==null;){f=x;var h=f.sibling,y=f.return;if($p(f),f===u){x=null;break}if(h!==null){h.return=y,x=h;break}x=y}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}x=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,x=a;else n:for(;x!==null;){if(l=x,l.flags&2048)switch(l.tag){case 0:case 11:case 15:js(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,x=p;break n}x=l.return}}var c=n.current;for(x=c;x!==null;){a=x;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,x=d;else n:for(a=c;x!==null;){if(o=x,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:gl(9,o)}}catch(_){V(o,o.return,_)}if(o===a){x=null;break n}var g=o.sibling;if(g!==null){g.return=o.return,x=g;break n}x=o.return}}if(T=r,De(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(il,n)}catch{}s=!0}return s}finally{z=t,bn.transition=e}}return!1}function lu(n,e,t){e=Lt(t,e),e=Lp(n,e,1),n=Pe(n,e,1),e=dn(),n!==null&&(Ms(n,1,e),jn(n,e))}function V(n,e,t){if(n.tag===3)lu(n,n,t);else for(;e!==null;){if(e.tag===3){lu(e,n,t);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(be===null||!be.has(s))){n=Lt(t,n),n=Ip(e,n,1),e=Pe(e,n,1),n=dn(),e!==null&&(Ms(e,1,n),jn(e,n));break}}e=e.return}}function bm(n,e,t){var s=n.pingCache;s!==null&&s.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&t,Z===n&&(en&t)===t&&(X===4||X===3&&(en&130023424)===en&&500>Q()-ni?Ge(n,0):Zo|=t),jn(n,e)}function ed(n,e){e===0&&(n.mode&1?(e=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):e=1);var t=dn();n=ae(n,e),n!==null&&(Ms(n,e,t),jn(n,t))}function Tm(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ed(n,t)}function Om(n,e){var t=0;switch(n.tag){case 13:var s=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=n.stateNode;break;default:throw Error(v(314))}s!==null&&s.delete(e),ed(n,t)}var td;td=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||yn.current)gn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return gn=!1,jm(n,e,t);gn=!!(n.flags&131072)}else gn=!1,A&&e.flags&1048576&&lp(e,Kr,e.index);switch(e.lanes=0,e.tag){case 2:var s=e.type;Lr(n,e),n=e.pendingProps;var r=bt(e,on.current);qt(e,t),r=Qo(null,e,s,n,r,t);var l=Go();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(s)?(l=!0,Gr(e)):l=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uo(e),r.updater=hl,e.stateNode=r,r._reactInternals=e,so(e,s,n,t),e=ao(null,e,s,!0,l,t)):(e.tag=0,A&&l&&Io(e),pn(null,e,r,t),e=e.child),e;case 16:s=e.elementType;n:{switch(Lr(n,e),n=e.pendingProps,r=s._init,s=r(s._payload),e.type=s,r=e.tag=Lm(s),n=Dn(s,n),r){case 0:e=lo(null,e,s,n,t);break n;case 1:e=Yc(null,e,s,n,t);break n;case 11:e=Qc(null,e,s,n,t);break n;case 14:e=Gc(null,e,s,Dn(s.type,n),t);break n}throw Error(v(306,s,""))}return e;case 0:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Dn(s,r),lo(n,e,s,r,t);case 1:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Dn(s,r),Yc(n,e,s,r,t);case 3:n:{if(Mp(e),n===null)throw Error(v(387));s=e.pendingProps,l=e.memoizedState,r=l.element,cp(n,e),Zr(e,s,null,t);var a=e.memoizedState;if(s=a.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){r=Lt(Error(v(423)),e),e=Kc(n,e,s,t,r);break n}else if(s!==r){r=Lt(Error(v(424)),e),e=Kc(n,e,s,t,r);break n}else for(kn=Ne(e.stateNode.containerInfo.firstChild),_n=e,A=!0,Mn=null,t=fp(e,null,s,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),s===r){e=oe(n,e,t);break n}pn(n,e,s,t)}e=e.child}return e;case 5:return hp(e),n===null&&no(e),s=e.type,r=e.pendingProps,l=n!==null?n.memoizedProps:null,a=r.children,Ya(s,r)?a=null:l!==null&&Ya(s,l)&&(e.flags|=32),Fp(n,e),pn(n,e,a,t),e.child;case 6:return n===null&&no(e),null;case 13:return Ap(n,e,t);case 4:return Ho(e,e.stateNode.containerInfo),s=e.pendingProps,n===null?e.child=Ot(e,null,s,t):pn(n,e,s,t),e.child;case 11:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Dn(s,r),Qc(n,e,s,r,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(s=e.type._context,r=e.pendingProps,l=e.memoizedProps,a=r.value,R(Xr,s._currentValue),s._currentValue=a,l!==null)if(Un(l.value,a)){if(l.children===r.children&&!yn.current){e=oe(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var i=o.firstContext;i!==null;){if(i.context===s){if(l.tag===1){i=se(-1,t&-t),i.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i}}l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),eo(l.return,t,e),o.lanes|=t;break}i=i.next}}else if(l.tag===10)a=l.type===e.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(v(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),eo(a,t,e),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===e){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}pn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,s=e.pendingProps.children,qt(e,t),r=Tn(r),s=s(r),e.flags|=1,pn(n,e,s,t),e.child;case 14:return s=e.type,r=Dn(s,e.pendingProps),r=Dn(s.type,r),Gc(n,e,s,r,t);case 15:return Rp(n,e,e.type,e.pendingProps,t);case 17:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Dn(s,r),Lr(n,e),e.tag=1,vn(s)?(n=!0,Gr(e)):n=!1,qt(e,t),pp(e,s,r),so(e,s,r,t),ao(null,e,s,!0,n,t);case 19:return Bp(n,e,t);case 22:return Dp(n,e,t)}throw Error(v(156,e.tag))};function sd(n,e){return Pu(n,e)}function zm(n,e,t,s){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,e,t,s){return new zm(n,e,t,s)}function ri(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lm(n){if(typeof n=="function")return ri(n)?1:0;if(n!=null){if(n=n.$$typeof,n===So)return 11;if(n===xo)return 14}return 2}function Oe(n,e){var t=n.alternate;return t===null?(t=Pn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Dr(n,e,t,s,r,l){var a=2;if(s=n,typeof n=="function")ri(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case dt:return Ye(t.children,r,l,e);case _o:a=8,r|=8;break;case qa:return n=Pn(12,t,e,r|2),n.elementType=qa,n.lanes=l,n;case Na:return n=Pn(13,t,e,r),n.elementType=Na,n.lanes=l,n;case Pa:return n=Pn(19,t,e,r),n.elementType=Pa,n.lanes=l,n;case du:return vl(t,r,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case uu:a=10;break n;case pu:a=9;break n;case So:a=11;break n;case xo:a=14;break n;case je:a=16,s=null;break n}throw Error(v(130,n==null?n:typeof n,""))}return e=Pn(a,t,e,r),e.elementType=n,e.type=s,e.lanes=l,e}function Ye(n,e,t,s){return n=Pn(7,n,s,e),n.lanes=t,n}function vl(n,e,t,s){return n=Pn(22,n,s,e),n.elementType=du,n.lanes=t,n.stateNode={isHidden:!1},n}function xa(n,e,t){return n=Pn(6,n,null,e),n.lanes=t,n}function Ea(n,e,t){return e=Pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Im(n,e,t,s,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function li(n,e,t,s,r,l,a,o,i){return n=new Im(n,e,t,o,i),e===1?(e=1,l===!0&&(e|=8)):e=0,l=Pn(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uo(l),n}function Rm(n,e,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pt,key:s==null?null:""+s,children:n,containerInfo:e,implementation:t}}function rd(n){if(!n)return Le;n=n._reactInternals;n:{if(tt(n)!==n||n.tag!==1)throw Error(v(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(v(171))}if(n.tag===1){var t=n.type;if(vn(t))return sp(n,t,e)}return e}function ld(n,e,t,s,r,l,a,o,i){return n=li(t,s,!0,n,r,l,a,o,i),n.context=rd(null),t=n.current,s=dn(),r=Te(t),l=se(s,r),l.callback=e??null,Pe(t,l,r),n.current.lanes=r,Ms(n,r,s),jn(n,s),n}function jl(n,e,t,s){var r=e.current,l=dn(),a=Te(r);return t=rd(t),e.context===null?e.context=t:e.pendingContext=t,e=se(l,a),e.payload={element:n},s=s===void 0?null:s,s!==null&&(e.callback=s),n=Pe(r,e,a),n!==null&&(Bn(n,r,a,l),Tr(n,r,a)),a}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function au(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ai(n,e){au(n,e),(n=n.alternate)&&au(n,e)}function Dm(){return null}var ad=typeof reportError=="function"?reportError:function(n){console.error(n)};function oi(n){this._internalRoot=n}wl.prototype.render=oi.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(v(409));jl(n,e,null,null)};wl.prototype.unmount=oi.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;nt(function(){jl(null,n,null,null)}),e[le]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ru();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ke.length&&e!==0&&e<ke[t].priority;t++);ke.splice(t,0,n),t===0&&Fu(n)}};function ii(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ou(){}function Fm(n,e,t,s,r){if(r){if(typeof s=="function"){var l=s;s=function(){var u=ol(a);l.call(u)}}var a=ld(e,s,n,0,null,!1,!1,"",ou);return n._reactRootContainer=a,n[le]=a.current,bs(n.nodeType===8?n.parentNode:n),nt(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof s=="function"){var o=s;s=function(){var u=ol(i);o.call(u)}}var i=li(n,0,!1,null,null,!1,!1,"",ou);return n._reactRootContainer=i,n[le]=i.current,bs(n.nodeType===8?n.parentNode:n),nt(function(){jl(e,i,t,s)}),i}function _l(n,e,t,s,r){var l=t._reactRootContainer;if(l){var a=l;if(typeof r=="function"){var o=r;r=function(){var i=ol(a);o.call(i)}}jl(e,a,n,r)}else a=Fm(t,e,n,r,s);return ol(a)}Lu=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ps(e.pendingLanes);t!==0&&(qo(e,t|1),jn(e,Q()),!(T&6)&&(It=Q()+500,De()))}break;case 13:nt(function(){var s=ae(n,1);if(s!==null){var r=dn();Bn(s,n,1,r)}}),ai(n,1)}};No=function(n){if(n.tag===13){var e=ae(n,134217728);if(e!==null){var t=dn();Bn(e,n,134217728,t)}ai(n,134217728)}};Iu=function(n){if(n.tag===13){var e=Te(n),t=ae(n,e);if(t!==null){var s=dn();Bn(t,n,e,s)}ai(n,e)}};Ru=function(){return z};Du=function(n,e){var t=z;try{return z=n,e()}finally{z=t}};Ma=function(n,e,t){switch(e){case"input":if(Oa(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var s=t[e];if(s!==n&&s.form===n.form){var r=dl(s);if(!r)throw Error(v(90));hu(s),Oa(s,r)}}}break;case"textarea":gu(n,t);break;case"select":e=t.value,e!=null&&St(n,!!t.multiple,e,!1)}};Su=ei;xu=nt;var Mm={usingClientEntryPoint:!1,Events:[Bs,gt,dl,ku,_u,ei]},os={findFiberByHostInstance:$e,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Am={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qu(n),n===null?null:n.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||Dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(is=__REACT_DEVTOOLS_GLOBAL_HOOK__,!is.isDisabled&&is.supportsFiber))try{il=is.inject(Am),Yn=is}catch{}var is;En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;En.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ii(e))throw Error(v(200));return Rm(n,e,null,t)};En.createRoot=function(n,e){if(!ii(n))throw Error(v(299));var t=!1,s="",r=ad;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=li(n,1,!1,null,null,t,!1,s,r),n[le]=e.current,bs(n.nodeType===8?n.parentNode:n),new oi(e)};En.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(v(188)):(n=Object.keys(n).join(","),Error(v(268,n)));return n=qu(e),n=n===null?null:n.stateNode,n};En.flushSync=function(n){return nt(n)};En.hydrate=function(n,e,t){if(!kl(e))throw Error(v(200));return _l(null,n,e,!0,t)};En.hydrateRoot=function(n,e,t){if(!ii(n))throw Error(v(405));var s=t!=null&&t.hydratedSources||null,r=!1,l="",a=ad;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=ld(e,null,n,1,t??null,r,!1,l,a),n[le]=e.current,bs(n),s)for(n=0;n<s.length;n++)t=s[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new wl(e)};En.render=function(n,e,t){if(!kl(e))throw Error(v(200));return _l(null,n,e,!1,t)};En.unmountComponentAtNode=function(n){if(!kl(n))throw Error(v(40));return n._reactRootContainer?(nt(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[le]=null})}),!0):!1};En.unstable_batchedUpdates=ei;En.unstable_renderSubtreeIntoContainer=function(n,e,t,s){if(!kl(t))throw Error(v(200));if(n==null||n._reactInternals===void 0)throw Error(v(38));return _l(n,e,t,!1,s)};En.version="18.2.0-next-9e3b772b8-20220608"});var ud=he((Fg,cd)=>{"use strict";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(n){console.error(n)}}id(),cd.exports=od()});var dd=he(ci=>{"use strict";var pd=ud();ci.createRoot=pd.createRoot,ci.hydrateRoot=pd.hydrateRoot;var Mg});var hd=he((Wg,fd)=>{fd.exports=function(e,t,s,r){var l=s?s.call(r,e,t):void 0;if(l!==void 0)return!!l;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var f=a[u];if(!i(f))return!1;var m=e[f],h=t[f];if(l=s?s.call(r,m,h,f):void 0,l===!1||l===void 0&&m!==h)return!1}return!0}});var ff=me(ge()),hf=me(dd());var ot=me(ge());var Ml=me(ge());var q=me(ge());var cn=function(){return cn=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},cn.apply(this,arguments)};function Hs(n,e,t){if(t||arguments.length===2)for(var s=0,r=e.length,l;s<r;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return n.concat(l||Array.prototype.slice.call(e))}var W=me(ge()),$d=me(hd());var L="-ms-",st="-moz-",O="-webkit-",Sl="comm",Fe="rule",Ft="decl";var md="@import";var xl="@keyframes";var gd="@layer";var ui=Math.abs,Vs=String.fromCharCode,$s=Object.assign;function yd(n,e){return $(n,0)^45?(((e<<2^$(n,0))<<2^$(n,1))<<2^$(n,2))<<2^$(n,3):0}function El(n){return n.trim()}function Hn(n,e){return(n=e.exec(n))?n[0]:n}function C(n,e,t){return n.replace(e,t)}function Mt(n,e,t){return n.indexOf(e,t)}function $(n,e){return n.charCodeAt(e)|0}function Xn(n,e,t){return n.slice(e,t)}function hn(n){return n.length}function Cl(n){return n.length}function rt(n,e){return e.push(n),n}function vd(n,e){return n.map(e).join("")}function pi(n,e){return n.filter(function(t){return!Hn(t,e)})}var ql=1,At=1,jd=0,zn=0,Y=0,Bt="";function Ws(n,e,t,s,r,l,a,o){return{value:n,root:e,parent:t,type:s,props:r,children:l,line:ql,column:At,length:a,return:"",siblings:o}}function ce(n,e){return $s(Ws("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function lt(n){for(;n.root;)n=ce(n.root,{children:[n]});rt(n,n.siblings)}function wd(){return Y}function kd(){return Y=zn>0?$(Bt,--zn):0,At--,Y===10&&(At=1,ql--),Y}function Ln(){return Y=zn<jd?$(Bt,zn++):0,At++,Y===10&&(At=1,ql++),Y}function Me(){return $(Bt,zn)}function Qs(){return zn}function Nl(n,e){return Xn(Bt,n,e)}function di(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _d(n){return ql=At=1,jd=hn(Bt=n),zn=0,[]}function Sd(n){return Bt="",n}function Pl(n){return El(Nl(zn-1,fi(n===91?n+2:n===40?n+1:n)))}function xd(n){for(;(Y=Me())&&Y<33;)Ln();return di(n)>2||di(Y)>3?"":" "}function Ed(n,e){for(;--e&&Ln()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return Nl(n,Qs()+(e<6&&Me()==32&&Ln()==32))}function fi(n){for(;Ln();)switch(Y){case n:return zn;case 34:case 39:n!==34&&n!==39&&fi(Y);break;case 40:n===41&&fi(n);break;case 92:Ln();break}return zn}function Cd(n,e){for(;Ln()&&n+Y!==57;)if(n+Y===84&&Me()===47)break;return"/*"+Nl(e,zn-1)+"*"+Vs(n===47?n:Ln())}function qd(n){for(;!di(Me());)Ln();return Nl(n,zn)}function bd(n){return Sd(bl("",null,null,null,[""],n=_d(n),0,[0],n))}function bl(n,e,t,s,r,l,a,o,i){for(var u=0,f=0,m=a,h=0,y=0,w=0,k=1,P=1,p=1,c=0,d="",g=r,_=l,S=s,j=d;P;)switch(w=c,c=Ln()){case 40:if(w!=108&&$(j,m-1)==58){Mt(j+=C(Pl(c),"&","&\f"),"&\f",ui(u?o[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:j+=Pl(c);break;case 9:case 10:case 13:case 32:j+=xd(w);break;case 92:j+=Ed(Qs()-1,7);continue;case 47:switch(Me()){case 42:case 47:rt(Bm(Cd(Ln(),Qs()),e,t,i),i);break;default:j+="/"}break;case 123*k:o[u++]=hn(j)*p;case 125*k:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+f:p==-1&&(j=C(j,/\f/g,"")),y>0&&hn(j)-m&&rt(y>32?Pd(j+";",s,t,m-1,i):Pd(C(j," ","")+";",s,t,m-2,i),i);break;case 59:j+=";";default:if(rt(S=Nd(j,e,t,u,f,r,o,d,g=[],_=[],m,l),l),c===123)if(f===0)bl(j,e,S,S,g,l,m,o,_);else switch(h===99&&$(j,3)===110?100:h){case 100:case 108:case 109:case 115:bl(n,S,S,s&&rt(Nd(n,S,S,0,0,r,o,d,r,g=[],m,_),_),r,_,m,o,s?g:_);break;default:bl(j,S,S,S,[""],_,0,o,_)}}u=f=y=0,k=p=1,d=j="",m=a;break;case 58:m=1+hn(j),y=w;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&kd()==125)continue}switch(j+=Vs(c),c*k){case 38:p=f>0?1:(j+="\f",-1);break;case 44:o[u++]=(hn(j)-1)*p,p=1;break;case 64:Me()===45&&(j+=Pl(Ln())),h=Me(),f=m=hn(d=j+=qd(Qs())),c++;break;case 45:w===45&&hn(j)==2&&(k=0)}}return l}function Nd(n,e,t,s,r,l,a,o,i,u,f,m){for(var h=r-1,y=r===0?l:[""],w=Cl(y),k=0,P=0,p=0;k<s;++k)for(var c=0,d=Xn(n,h+1,h=ui(P=a[k])),g=n;c<w;++c)(g=El(P>0?y[c]+" "+d:C(d,/&\f/g,y[c])))&&(i[p++]=g);return Ws(n,e,t,r===0?Fe:o,i,u,f,m)}function Bm(n,e,t,s){return Ws(n,e,t,Sl,Vs(wd()),Xn(n,2,-2),0,s)}function Pd(n,e,t,s,r){return Ws(n,e,t,Ft,Xn(n,0,s),Xn(n,s+1,-1),s,r)}function hi(n,e,t){switch(yd(n,e)){case 5103:return O+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+n+n;case 4789:return st+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return O+n+st+n+L+n+n;case 5936:switch($(n,e+11)){case 114:return O+n+L+C(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return O+n+L+C(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return O+n+L+C(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return O+n+L+n+n;case 6165:return O+n+L+"flex-"+n+n;case 5187:return O+n+C(n,/(\w+).+(:[^]+)/,O+"box-$1$2"+L+"flex-$1$2")+n;case 5443:return O+n+L+"flex-item-"+C(n,/flex-|-self/g,"")+(Hn(n,/flex-|baseline/)?"":L+"grid-row-"+C(n,/flex-|-self/g,""))+n;case 4675:return O+n+L+"flex-line-pack"+C(n,/align-content|flex-|-self/g,"")+n;case 5548:return O+n+L+C(n,"shrink","negative")+n;case 5292:return O+n+L+C(n,"basis","preferred-size")+n;case 6060:return O+"box-"+C(n,"-grow","")+O+n+L+C(n,"grow","positive")+n;case 4554:return O+C(n,/([^-])(transform)/g,"$1"+O+"$2")+n;case 6187:return C(C(C(n,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),n,"")+n;case 5495:case 3959:return C(n,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return C(C(n,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+n+n;case 4200:if(!Hn(n,/flex-|baseline/))return L+"grid-column-align"+Xn(n,e)+n;break;case 2592:case 3360:return L+C(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(s,r){return e=r,Hn(s.props,/grid-\w+-end/)})?~Mt(n+(t=t[e].value),"span",0)?n:L+C(n,"-start","")+n+L+"grid-row-span:"+(~Mt(t,"span",0)?Hn(t,/\d+/):+Hn(t,/\d+/)-+Hn(n,/\d+/))+";":L+C(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(s){return Hn(s.props,/grid-\w+-start/)})?n:L+C(C(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return C(n,/(.+)-inline(.+)/,O+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(n)-1-e>6)switch($(n,e+1)){case 109:if($(n,e+4)!==45)break;case 102:return C(n,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+st+($(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Mt(n,"stretch",0)?hi(C(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return C(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,r,l,a,o,i,u){return L+r+":"+l+u+(a?L+r+"-span:"+(o?i:+i-+l)+u:"")+n});case 4949:if($(n,e+6)===121)return C(n,":",":"+O)+n;break;case 6444:switch($(n,$(n,14)===45?18:11)){case 120:return C(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+($(n,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+L+"$2box$3")+n;case 100:return C(n,":",":"+L)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(n,"scroll-","scroll-snap-")+n}return n}function Ut(n,e){for(var t="",s=0;s<n.length;s++)t+=e(n[s],s,n,e)||"";return t}function Td(n,e,t,s){switch(n.type){case gd:if(n.children.length)break;case md:case Ft:return n.return=n.return||n.value;case Sl:return"";case xl:return n.return=n.value+"{"+Ut(n.children,s)+"}";case Fe:if(!hn(n.value=n.props.join(",")))return""}return hn(t=Ut(n.children,s))?n.return=n.value+"{"+t+"}":""}function Od(n){var e=Cl(n);return function(t,s,r,l){for(var a="",o=0;o<e;o++)a+=n[o](t,s,r,l)||"";return a}}function zd(n){return function(e){e.root||(e=e.return)&&n(e)}}function Ld(n,e,t,s){if(n.length>-1&&!n.return)switch(n.type){case Ft:n.return=hi(n.value,n.length,t);return;case xl:return Ut([ce(n,{value:C(n.value,"@","@"+O)})],s);case Fe:if(n.length)return vd(t=n.props,function(r){switch(Hn(r,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(ce(n,{props:[C(r,/:(read-\w+)/,":"+st+"$1")]})),lt(ce(n,{props:[r]})),$s(n,{props:pi(t,s)});break;case"::placeholder":lt(ce(n,{props:[C(r,/:(plac\w+)/,":"+O+"input-$1")]})),lt(ce(n,{props:[C(r,/:(plac\w+)/,":"+st+"$1")]})),lt(ce(n,{props:[C(r,/:(plac\w+)/,L+"input-$1")]})),lt(ce(n,{props:[r]})),$s(n,{props:pi(t,s)});break}return""})}}var Um={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Id=Um;var pe=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Wd="active",Il="data-styled-version",Vt="6.1.8",xi=`/*!sc*/
`,Ei=typeof window<"u"&&"HTMLElement"in window,Hm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var Fl=Object.freeze([]),$t=Object.freeze({});function Vm(n,e,t){return t===void 0&&(t=$t),n.theme!==t.theme&&n.theme||e||t.theme}var Qd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$m=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wm=/(^-|-$)/g;function Rd(n){return n.replace($m,"-").replace(Wm,"")}var Qm=/(a)(d)/gi,Tl=52,Dd=function(n){return String.fromCharCode(n+(n>25?39:97))};function vi(n){var e,t="";for(e=Math.abs(n);e>Tl;e=e/Tl|0)t=Dd(e%Tl)+t;return(Dd(e%Tl)+t).replace(Qm,"$1-$2")}var mi,Gd=5381,Ht=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Yd=function(n){return Ht(Gd,n)};function Gm(n){return vi(Yd(n)>>>0)}function Ym(n){return n.displayName||n.name||"Component"}function gi(n){return typeof n=="string"&&!0}var Kd=typeof Symbol=="function"&&Symbol.for,Xd=Kd?Symbol.for("react.memo"):60115,Km=Kd?Symbol.for("react.forward_ref"):60112,Xm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zm=((mi={})[Km]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mi[Xd]=Jd,mi);function Fd(n){return("type"in(e=n)&&e.type.$$typeof)===Xd?Jd:"$$typeof"in n?Zm[n.$$typeof]:Xm;var e}var ng=Object.defineProperty,eg=Object.getOwnPropertyNames,Md=Object.getOwnPropertySymbols,tg=Object.getOwnPropertyDescriptor,sg=Object.getPrototypeOf,Ad=Object.prototype;function Zd(n,e,t){if(typeof e!="string"){if(Ad){var s=sg(e);s&&s!==Ad&&Zd(n,s,t)}var r=eg(e);Md&&(r=r.concat(Md(e)));for(var l=Fd(n),a=Fd(e),o=0;o<r.length;++o){var i=r[o];if(!(i in Jm||t&&t[i]||a&&i in a||l&&i in l)){var u=tg(e,i);try{ng(n,i,u)}catch{}}}}return n}function Wt(n){return typeof n=="function"}function Ci(n){return typeof n=="object"&&"styledComponentId"in n}function at(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Rl(n,e){if(n.length===0)return"";for(var t=n[0],s=1;s<n.length;s++)t+=e?e+n[s]:n[s];return t}function Gs(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ji(n,e,t){if(t===void 0&&(t=!1),!t&&!Gs(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)n[s]=ji(n[s],e[s]);else if(Gs(e))for(var s in e)n[s]=ji(n[s],e[s]);return n}function qi(n,e){Object.defineProperty(n,"toString",{value:e})}function ue(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var rg=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,r=s.length,l=r;e>=l;)if((l<<=1)<0)throw ue(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var a=r;a<l;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),r=s+t;this.groupSizes[e]=0;for(var l=s;l<r;l++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],r=this.indexOfGroup(e),l=r+s,a=r;a<l;a++)t+="".concat(this.tag.getRule(a)).concat(xi);return t},n}(),zl=new Map,Dl=new Map,Ll=1,Ol=function(n){if(zl.has(n))return zl.get(n);for(;Dl.has(Ll);)Ll++;var e=Ll++;return zl.set(n,e),Dl.set(e,n),e},lg=function(n,e){Ll=e+1,zl.set(n,e),Dl.set(e,n)},ag="style[".concat(pe,"][").concat(Il,'="').concat(Vt,'"]'),og=new RegExp("^".concat(pe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ig=function(n,e,t){for(var s,r=t.split(","),l=0,a=r.length;l<a;l++)(s=r[l])&&n.registerName(e,s)},cg=function(n,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(xi),r=[],l=0,a=s.length;l<a;l++){var o=s[l].trim();if(o){var i=o.match(og);if(i){var u=0|parseInt(i[1],10),f=i[2];u!==0&&(lg(f,u),ig(n,f,i[3]),n.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}};function wi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nf=function(n){var e=document.head,t=n||e,s=document.createElement("style"),r=function(o){var i=Array.from(o.querySelectorAll("style[".concat(pe,"]")));return i[i.length-1]}(t),l=r!==void 0?r.nextSibling:null;s.setAttribute(pe,Wd),s.setAttribute(Il,Vt);var a=wi();return a&&s.setAttribute("nonce",a),t.insertBefore(s,l),s},ug=function(){function n(e){this.element=nf(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,r=0,l=s.length;r<l;r++){var a=s[r];if(a.ownerNode===t)return a}throw ue(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),pg=function(){function n(e){this.element=nf(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),dg=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Bd=Ei,fg={isServer:!Ei,useCSSOMInjection:!Hm},Ys=function(){function n(e,t,s){e===void 0&&(e=$t),t===void 0&&(t={});var r=this;this.options=cn(cn({},fg),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Ei&&Bd&&(Bd=!1,function(l){for(var a=document.querySelectorAll(ag),o=0,i=a.length;o<i;o++){var u=a[o];u&&u.getAttribute(pe)!==Wd&&(cg(l,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),qi(this,function(){return function(l){for(var a=l.getTag(),o=a.length,i="",u=function(m){var h=function(p){return Dl.get(p)}(m);if(h===void 0)return"continue";var y=l.names.get(h),w=a.getGroup(m);if(y===void 0||w.length===0)return"continue";var k="".concat(pe,".g").concat(m,'[id="').concat(h,'"]'),P="";y!==void 0&&y.forEach(function(p){p.length>0&&(P+="".concat(p,","))}),i+="".concat(w).concat(k,'{content:"').concat(P,'"}').concat(xi)},f=0;f<o;f++)u(f);return i}(r)})}return n.registerId=function(e){return Ol(e)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(cn(cn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,r=t.target;return t.isServer?new dg(r):s?new ug(r):new pg(r)}(this.options),new rg(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Ol(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},n.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Ol(e),s)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Ol(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),hg=/&/g,mg=/^\s*\/\/.*$/gm;function ef(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=ef(t.children,e)),t})}function tf(n){var e,t,s,r=n===void 0?$t:n,l=r.options,a=l===void 0?$t:l,o=r.plugins,i=o===void 0?Fl:o,u=function(h,y,w){return w.startsWith(t)&&w.endsWith(t)&&w.replaceAll(t,"").length>0?".".concat(e):h},f=i.slice();f.push(function(h){h.type===Fe&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(hg,t).replace(s,u))}),a.prefix&&f.push(Ld),f.push(Td);var m=function(h,y,w,k){y===void 0&&(y=""),w===void 0&&(w=""),k===void 0&&(k="&"),e=k,t=y,s=new RegExp("\\".concat(t,"\\b"),"g");var P=h.replace(mg,""),p=bd(w||y?"".concat(w," ").concat(y," { ").concat(P," }"):P);a.namespace&&(p=ef(p,a.namespace));var c=[];return Ut(p,Od(f.concat(zd(function(d){return c.push(d)})))),c};return m.hash=i.length?i.reduce(function(h,y){return y.name||ue(15),Ht(h,y.name)},Gd).toString():"",m}var gg=new Ys,ki=tf(),Ni=W.default.createContext({shouldForwardProp:void 0,styleSheet:gg,stylis:ki}),_y=Ni.Consumer,yg=W.default.createContext(void 0);function _i(){return(0,W.useContext)(Ni)}function vg(n){var e=(0,W.useState)(n.stylisPlugins),t=e[0],s=e[1],r=_i().styleSheet,l=(0,W.useMemo)(function(){var i=r;return n.sheet?i=n.sheet:n.target&&(i=i.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(i=i.reconstructWithOptions({useCSSOMInjection:!1})),i},[n.disableCSSOMInjection,n.sheet,n.target,r]),a=(0,W.useMemo)(function(){return tf({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:t})},[n.enableVendorPrefixes,n.namespace,t]);(0,W.useEffect)(function(){(0,$d.default)(t,n.stylisPlugins)||s(n.stylisPlugins)},[n.stylisPlugins]);var o=(0,W.useMemo)(function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:l,stylis:a}},[n.shouldForwardProp,l,a]);return W.default.createElement(Ni.Provider,{value:o},W.default.createElement(yg.Provider,{value:a},n.children))}var jg=function(){function n(e,t){var s=this;this.inject=function(r,l){l===void 0&&(l=ki);var a=s.name+l.hash;r.hasNameForId(s.id,a)||r.insertRules(s.id,a,l(s.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qi(this,function(){throw ue(12,String(s.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=ki),this.name+e.hash},n}(),wg=function(n){return n>="A"&&n<="Z"};function Ud(n){for(var e="",t=0;t<n.length;t++){var s=n[t];if(t===1&&s==="-"&&n[0]==="-")return n;wg(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var sf=function(n){return n==null||n===!1||n===""},rf=function(n){var e,t,s=[];for(var r in n){var l=n[r];n.hasOwnProperty(r)&&!sf(l)&&(Array.isArray(l)&&l.isCss||Wt(l)?s.push("".concat(Ud(r),":"),l,";"):Gs(l)?s.push.apply(s,Hs(Hs(["".concat(r," {")],rf(l),!1),["}"],!1)):s.push("".concat(Ud(r),": ").concat((e=r,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Id||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function Ae(n,e,t,s){if(sf(n))return[];if(Ci(n))return[".".concat(n.styledComponentId)];if(Wt(n)){if(!Wt(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var r=n(e);return Ae(r,e,t,s)}var l;return n instanceof jg?t?(n.inject(t,s),[n.getName(s)]):[n]:Gs(n)?rf(n):Array.isArray(n)?Array.prototype.concat.apply(Fl,n.map(function(a){return Ae(a,e,t,s)})):[n.toString()]}function lf(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Wt(t)&&!Ci(t))return!1}return!0}var kg=Yd(Vt),_g=function(){function n(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&lf(e),this.componentId=t,this.baseHash=Ht(kg,t),this.baseStyle=s,Ys.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,s){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=at(r,this.staticRulesId);else{var l=Rl(Ae(this.rules,e,t,s)),a=vi(Ht(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=s(l,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=at(r,a),this.staticRulesId=a}else{for(var i=Ht(this.baseHash,s.hash),u="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")u+=m;else if(m){var h=Rl(Ae(m,e,t,s));i=Ht(i,h+f),u+=h}}if(u){var y=vi(i>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,s(u,".".concat(y),void 0,this.componentId)),r=at(r,y)}}return r},n}(),af=W.default.createContext(void 0),Sy=af.Consumer;var yi={};function Sg(n,e,t){var s=Ci(n),r=n,l=!gi(n),a=e.attrs,o=a===void 0?Fl:a,i=e.componentId,u=i===void 0?function(g,_){var S=typeof g!="string"?"sc":Rd(g);yi[S]=(yi[S]||0)+1;var j="".concat(S,"-").concat(Gm(Vt+S+yi[S]));return _?"".concat(_,"-").concat(j):j}(e.displayName,e.parentComponentId):i,f=e.displayName,m=f===void 0?function(g){return gi(g)?"styled.".concat(g):"Styled(".concat(Ym(g),")")}(n):f,h=e.displayName&&e.componentId?"".concat(Rd(e.displayName),"-").concat(e.componentId):e.componentId||u,y=s&&r.attrs?r.attrs.concat(o).filter(Boolean):o,w=e.shouldForwardProp;if(s&&r.shouldForwardProp){var k=r.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;w=function(g,_){return k(g,_)&&P(g,_)}}else w=k}var p=new _g(t,h,s?r.componentStyle:void 0);function c(g,_){return function(S,j,E){var M=S.attrs,b=S.componentStyle,Vn=S.defaultProps,Al=S.foldedComponentIds,mf=S.styledComponentId,gf=S.target,yf=W.default.useContext(af),vf=_i(),Bl=S.shouldForwardProp||vf.shouldForwardProp,Pi=Vm(j,yf,Vn)||$t,Jn=function(Js,Yt,Zs){for(var Kt,Be=cn(cn({},Yt),{className:void 0,theme:Zs}),Hl=0;Hl<Js.length;Hl+=1){var nr=Wt(Kt=Js[Hl])?Kt(Be):Kt;for(var fe in nr)Be[fe]=fe==="className"?at(Be[fe],nr[fe]):fe==="style"?cn(cn({},Be[fe]),nr[fe]):nr[fe]}return Yt.className&&(Be.className=at(Be.className,Yt.className)),Be}(M,j,Pi),Xs=Jn.as||gf,Gt={};for(var de in Jn)Jn[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&Jn.theme===Pi||(de==="forwardedAs"?Gt.as=Jn.forwardedAs:Bl&&!Bl(de,Xs)||(Gt[de]=Jn[de]));var bi=function(Js,Yt){var Zs=_i(),Kt=Js.generateAndInjectStyles(Yt,Zs.styleSheet,Zs.stylis);return Kt}(b,Jn),Ul=at(Al,mf);return bi&&(Ul+=" "+bi),Jn.className&&(Ul+=" "+Jn.className),Gt[gi(Xs)&&!Qd.has(Xs)?"class":"className"]=Ul,Gt.ref=E,(0,W.createElement)(Xs,Gt)}(d,g,_)}c.displayName=m;var d=W.default.forwardRef(c);return d.attrs=y,d.componentStyle=p,d.displayName=m,d.shouldForwardProp=w,d.foldedComponentIds=s?at(r.foldedComponentIds,r.styledComponentId):"",d.styledComponentId=h,d.target=s?r.target:n,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=s?function(_){for(var S=[],j=1;j<arguments.length;j++)S[j-1]=arguments[j];for(var E=0,M=S;E<M.length;E++)ji(_,M[E],!0);return _}({},r.defaultProps,g):g}}),qi(d,function(){return".".concat(d.styledComponentId)}),l&&Zd(d,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Hd(n,e){for(var t=[n[0]],s=0,r=e.length;s<r;s+=1)t.push(e[s],n[s+1]);return t}var Vd=function(n){return Object.assign(n,{isCss:!0})};function xg(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Wt(n)||Gs(n))return Vd(Ae(Hd(Fl,Hs([n],e,!0))));var s=n;return e.length===0&&s.length===1&&typeof s[0]=="string"?Ae(s):Vd(Ae(Hd(s,e)))}function Si(n,e,t){if(t===void 0&&(t=$t),!e)throw ue(1,e);var s=function(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return n(e,t,xg.apply(void 0,Hs([r],l,!1)))};return s.attrs=function(r){return Si(n,e,cn(cn({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},s.withConfig=function(r){return Si(n,e,cn(cn({},t),r))},s}var of=function(n){return Si(Sg,n)},Ks=of;Qd.forEach(function(n){Ks[n]=of(n)});var xy=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=lf(e),Ys.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,s,r){var l=r(Rl(Ae(this.rules,t,s,r)),""),a=this.componentId+e;s.insertRules(a,a,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,s,r){e>2&&Ys.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,r)},n}();var Ey=function(){function n(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),s=wi(),r=Rl([s&&'nonce="'.concat(s,'"'),"".concat(pe,'="true"'),"".concat(Il,'="').concat(Vt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ue(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ue(2);var s=((t={})[pe]="",t[Il]=Vt,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=wi();return r&&(s.nonce=r),[W.default.createElement("style",cn({},s,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ys({isServer:!0}),this.sealed=!1}return n.prototype.collectStyles=function(e){if(this.sealed)throw ue(2);return W.default.createElement(vg,{sheet:this.instance},e)},n.prototype.interleaveWithNodeStream=function(e){throw ue(3)},n}();var Cy="__sc-".concat(pe,"__");var Eg=Ks.div`
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
            /* width: 100px; */
            a {
                text-decoration: none;
                color: #666;
                font-size: 16px;
            }
            ul.sub-menu {
                display: flex;
                flex-direction: column;
                background-color: #F9F9f9;
                border: 1px solid #DDD;
                margin-top: -5px;
                margin-left: -12px;
                position: absolute;
                li {
                    height: 35px;
                    line-height: 35px;
                    border-bottom: 1px solid #DDD;
                }
            }
        }
    }
`;function Cg(){let[n,e]=q.default.useState([]),t=s=>{n[s]=!n[s],e([...n])};return q.default.createElement(Eg,null,q.default.createElement("ul",null,q.default.createElement("li",null,q.default.createElement("a",{href:"./"},"\u9996\u9875")),q.default.createElement("li",{onMouseEnter:()=>t(0),onMouseLeave:()=>t(0)},q.default.createElement("a",{href:"./go-base.html"},"Go\u8BED\u8A00"),n[0]&&q.default.createElement("ul",{className:"sub-menu"},q.default.createElement("li",null,q.default.createElement("a",{href:"./go-base.html"},"\u57FA\u7840\u8BED\u6CD5")),q.default.createElement("li",null,q.default.createElement("a",{href:"./go-cobra.html"},"Cobra")),q.default.createElement("li",null,q.default.createElement("a",{href:"./go-viper.html"},"Viper")),q.default.createElement("li",null,q.default.createElement("a",{href:"./go-gin.html"},"Gin\u6846\u67B6")),q.default.createElement("li",null,q.default.createElement("a",{href:"./go-net.html"},"Net")))),q.default.createElement("li",{onMouseEnter:()=>t(1),onMouseLeave:()=>t(1)},q.default.createElement("a",{href:"./node-base.html"},"Node.js"),n[1]&&q.default.createElement("ul",{className:"sub-menu"},q.default.createElement("li",null,q.default.createElement("a",{href:"./node-base.html"},"Node.js\u5165\u95E8")),q.default.createElement("li",null,q.default.createElement("a",{href:"./node-base2.html"},"Node.js\u57FA\u7840")),q.default.createElement("li",null,q.default.createElement("a",{href:"./node-typescript.html"},"TypeScript")))),q.default.createElement("li",{onMouseEnter:()=>t(2),onMouseLeave:()=>t(2)},q.default.createElement("a",{href:"./ft-react-communication.html"},"\u524D\u7AEF"),n[2]&&q.default.createElement("ul",{className:"sub-menu"},q.default.createElement("li",null,q.default.createElement("a",{href:"./ft-nextjs.html"},"Next.js")),q.default.createElement("li",null,q.default.createElement("a",{href:"./ft-react-communication.html"},"React\u901A\u8BAF")),q.default.createElement("li",null,q.default.createElement("a",{href:"./markdown-base.html"},"Markdown"))))))}var cf=Cg;var Qt=me(ge());function qg(n){let[e,t]=(0,Qt.useState)(!1);return(0,Qt.useEffect)(()=>{t(!0)},[]),Qt.default.createElement("div",{style:{display:e?"":"none"}},n.children)}var uf=qg;var Ng=Ks.div`
  display: flex;
  background-color: #f5f5f5;
  margin-top: 60px;
  div.menu {
    width: 300px;
    height: 100vh;
    div.title {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-weight: bold;
      border-right: 1px solid #ccc;
      position:fixed;
      left:0;
      width: 300px;
      text-indent: 12px;
    }
    nav {
      border-right: 1px solid #ccc;
      position: fixed;
      width: 290px;
      height: calc(100vh - 90px);
      top: 90px;
      left: 10px;
      overflow: auto;
      ol {
        padding-left: 20px;
        li {
          margin: 0;
          padding: 0;
          &::marker {
            color: #747373;
            font-size: 14px;
            margin-right: 10px;
          }
          a {
            display: block;
            color: #333;
            text-decoration: none;
            font-size: 14px;
          }
        }
      }
    }
  }
  div.cnt {
    width: 1090px;
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
        border-bottom: 1px solid #f0efef;
        padding: 10px;
      }
    }
    /* 复制代码 */
    div.code-copy {
      text-align: left;
      font-size: 14px;
      padding: 0.6em 1em;
      cursor: pointer;
      background-color: #bcbaba;
    }
  }
`;function Pg(n){return Ml.default.createElement(uf,null,Ml.default.createElement(cf,null),Ml.default.createElement(Ng,null,n.children))}var pf=Pg;function bg(n){return ot.default.createElement(pf,null,ot.default.createElement("div",{className:"menu"},ot.default.createElement("div",{className:"title"},n.title),ot.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.serData.markdown.menus}})),ot.default.createElement("div",{className:"cnt"},ot.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.serData.markdown.content}})))}var df=bg;var Tg={title:"Node.js\u57FA\u7840",mdfile:"node-base2.md",serData:{markdown:{content:`<h2 id="node-js" tabindex="-1">Node.js  \u57FA\u7840\u7BC7 <a class="header-anchor" href="#node-js">\xA7</a></h2>
<h3 id="repl" tabindex="-1">REPL(\u4EA4\u4E92\u89E3\u91CA\u5668) <a class="header-anchor" href="#repl">\xA7</a></h3>
<blockquote>
<p>Node.js REPL(Read Eval Print Loop: \u4EA4\u4E92\u89E3\u91CA\u5668)\u7C7B\u4F3CUnix/Linux shell\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165\u547D\u4EE4\uFF0C\u5E76\u63A5\u6536\u7CFB\u7EDF\u7684\u54CD\u5E94\u3002</p>
<p>Node\u81EA\u5E26\u4E86\u4EA4\u4E92\u5F0F\u89E3\u91CA\u5668\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u4EFB\u52A1\uFF1A</p>
</blockquote>
<ul>
<li>
<p>\u8BFB\u53D6    \u8BFB\u53D6\u7528\u6237\u8F93\u5165\uFF0C\u89E3\u6790\u8F93\u5165\u7684Javascript\u6570\u636E\u7ED3\u6784\u5E76\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002</p>
</li>
<li>
<p>\u6267\u884C    \u6267\u884C\u8F93\u5165\u7684\u6570\u636E\u7ED3\u6784\u3002</p>
</li>
<li>
<p>\u6253\u5370    \u8F93\u51FA\u7ED3\u679C\u3002</p>
</li>
<li>
<p>\u5FAA\u73AF    \u5FAA\u73AF\u64CD\u4F5C\u4EE5\u4E0A\u6B65\u9AA4\u5230\u7528\u6237\u4E24\u6B21\u6309ctrl+c\u6309\u94AE\u9000\u51FA\u3002</p>
</li>
</ul>
<p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8F93\u5165node,\u5373\u53EF\u8FDB\u5165REPL\u4EA4\u4E92\u89E3\u91CA\u5668\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-meta prompt_">$ </span><span class="language-bash">node</span>
<span class="hljs-meta prompt_">&gt; </span><span class="language-bash">
</span></code></pre>
<p>\u8FD9\u91CC\u5C31\u53EF\u4EE5\u5728&gt;\u540E\u8F93\u5165\u7B80\u5355\u7684\u8868\u8FBE\u5F0F\uFF0C\u56DE\u8F66\u6765\u663E\u793A\u7ED3\u679C</p>
<p>\u4F8B\u5982\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-meta prompt_">$ </span><span class="language-bash">node</span>
<span class="hljs-meta prompt_">&gt; </span><span class="language-bash">1+4</span>
5
</code></pre>
<h3 id="" tabindex="-1">\u56DE\u8C03\u51FD\u6570 <a class="header-anchor" href="#">\xA7</a></h3>
<blockquote>
<p>Node.js\u5F02\u6B65\u7F16\u7A0B\u7684\u76F4\u63A5\u4F53\u73B0\u5C31\u662F\u56DE\u8C03\u3002\u5F02\u6B65\u7F16\u7A0B\u4F9D\u6258\u56DE\u8C03\u6765\u5B9E\u73B0\uFF0C\u4F46\u4E0D\u80FD\u8BF4\u4F7F\u7528\u4E86\u56DE\u8C03\u540E\u7A0B\u5E8F\u5C31\u662F\u5F02\u6B65\u5316\u4E86\u3002</p>
<p>\u56DE\u8C03\u51FD\u6570\u5728\u5B8C\u6210\u4EFB\u52A1\u540E\u5C31\u4F1A\u88AB\u8C03\u7528\uFF0CNode \u4F7F\u7528\u4E86\u5927\u91CF\u7684\u56DE\u8C03\u51FD\u6570\uFF0CNode \u6240\u6709 API \u90FD\u652F\u6301\u56DE\u8C03\u51FD\u6570\u3002</p>
<p>\u4F8B\u5982\uFF1A \u4E00\u8FB9\u8BFB\u53D6\u6587\u4EF6\uFF0C\u4E00\u8FB9\u6267\u884C\u5176\u4ED6\u7684\u547D\u4EE4\uFF0C\u5728\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0C\u5C06\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u8FD4\u56DE\uFF0C\u8FD9\u6837\u5728\u6267\u884C\u4EE3\u7801\u65F6\u5C31\u6CA1\u6709\u963B\u585E\u6216\u7B49\u5F85\u6587\u4EF6I/O\u64CD\u4F5C\u3002\u8FD9\u5C31\u5927\u5927\u63D0\u9AD8\u4E86Node.js\u7684\u6027\u80FD\uFF0C\u53EF\u4EE5\u5904\u7406\u5927\u91CF\u7684\u5E76\u53D1\u8BF7\u6C42\u3002</p>
</blockquote>
<p>\u5F02\u6B65\u4EE3\u7801\u5B9E\u4F8B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);

<span class="hljs-comment">// \u6587\u4EF6\u8BFB\u53D6\u540E\uFF0C\u5F02\u6B65\u6267\u884C\u5904\u7406</span>
fs.<span class="hljs-title function_">readFile</span>(<span class="hljs-string">&quot;test.txt&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err,data</span>){
    <span class="hljs-keyword">if</span>(err) <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(data.<span class="hljs-title function_">toString</span>());
});
</code></pre>
<h3 id="-1" tabindex="-1">\u4E8B\u4EF6\u9A71\u52A8\u7F16\u7A0B <a class="header-anchor" href="#-1">\xA7</a></h3>
<blockquote>
<p>\u4E8B\u4EF6\u9A71\u52A8\u7F16\u7A0B\u662F\u4E00\u79CD\u7F16\u7A0B\u8303\u5F0F\uFF0C\u5176\u4E2D\u7A0B\u5E8F\u7684\u6267\u884C\u6D41\u7A0B\u53D6\u51B3\u4E8E\u4E8B\u4EF6\u7684\u53D1\u751F\u548C\u5904\u7406\u3002\u5728\u4F20\u7EDF\u7684\u547D\u4EE4\u5F0F\u7F16\u4E2D\uFF0C\u7A0B\u5E8F\u6309\u7167\u9884\u5B9A\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u3002\u800C\u5728\u4E8B\u4EF6\u9A71\u52A8\u7F16\u7A0B\u4E2D\uFF0C\u7A0B\u5E8F\u901A\u8FC7\u76D1\u542C\u4E8B\u4EF6\u6765\u76F8\u5E94\u7684\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u6765\u6267\u884C\u3002\u8FD9\u79CD\u6A21\u5F0F\u53EF\u4EE5\u63D0\u9AD8\u5E76\u53D1\u6027\u548C\u53EF\u6269\u5C55\u6027\uFF0C\u5C24\u5176\u9002\u7528\u4E8E\u5927\u91CF\u5E76\u53D1\u8BF7\u6C42\u7684\u60C5\u51B5\u3002</p>
</blockquote>
<h4 id="event-emitter" tabindex="-1">EventEmitter <a class="header-anchor" href="#event-emitter">\xA7</a></h4>
<blockquote>
<p>EventEmitter\u662FNode.js\u4E2D\u5185\u7F6E\u7684\u4E00\u4E2A\u6838\u5FC3\u6A21\u5757\u3002</p>
<p>Node.js\u6240\u6709\u7684\u5F02\u6B65I/O\u64CD\u4F5C\u5728\u5B8C\u6210\u65F6\u90FD\u4F1A\u53D1\u9001\u4E00\u4E2A\u4E8B\u4EF6\u5230\u4E8B\u4EF6\u961F\u5217\u3002</p>
<p>Node.js\u91CC\u9762\u7684\u8BB8\u591A\u5BF9\u8C61\u90FD\u4F1A\u5206\u53D1\u4E8B\u4EF6\uFF1A</p>
<ul>
<li>
<p>\u4E00\u4E2Anet.Server\u5BF9\u8C61\u4F1A\u5728\u6BCF\u6B21\u6709\u65B0\u8FDE\u63A5\u65F6\u89E6\u53D1\u4E00\u4EF6\u4E8B\u4EF6\u3002</p>
</li>
<li>
<p>\u4E00\u4E2Afs.readStream\u5BF9\u8C61\u4F1A\u5728\u6587\u4EF6\u88AB\u6253\u5F00\u65F6\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\u3002</p>
</li>
<li>
<p>\u2026</p>
</li>
</ul>
<p>\u6240\u6709\u8FD9\u4E9B\u4EA7\u751F\u4E8B\u4EF6\u7684\u5BF9\u8C61\u90FD\u662Fevents.EventEmitter\u7684\u5B9E\u4F8B\u3002</p>
</blockquote>
<p>\u5E38\u7528\u7684\u65B9\u6CD5\uFF1A</p>
<ul>
<li>
<p>on(event, listener)\uFF1A\u6CE8\u518C\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5F53\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002</p>
</li>
<li>
<p>emit(event, [args])\uFF1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u5E76\u5C06\u53EF\u9009\u53C2\u6570\u4F20\u9012\u7ED9\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</p>
</li>
<li>
<p>removeListener(event, listener)\uFF1A\u79FB\u9664\u6307\u5B9A\u4E8B\u4EF6\u7684\u76D1\u542C\u5668\u3002</p>
</li>
<li>
<p>once(event, listener)\uFF1A\u6CE8\u518C\u4E00\u4E2A\u4E00\u6B21\u6027\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u8BE5\u76D1\u542C\u5668\u5728\u89E6\u53D1\u4E00\u6B21\u540E\u5C06\u88AB\u79FB\u9664\u3002</p>
</li>
</ul>
<h4 id="-2" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#-2">\xA7</a></h4>
<blockquote>
<p>Node.js\u4F7F\u7528\u4E8B\u4EF6\u5FAA\u73AF\u6765\u7BA1\u7406\u4E8B\u4EF6\u7684\u89E6\u53D1\u548C\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u662F\u4E00\u4E2A\u6301\u7EED\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF0C\u5B83\u7B49\u5F85\u4E8B\u4EF6\u7684\u89E6\u53D1\u5E76\u8C03\u7528\u76F8\u5E94\u7684\u56DE\u8C03\u51FD\u6570\u3002</p>
</blockquote>
<blockquote>
<p>\u4E8B\u4EF6\u5FAA\u73AF\u7684\u4E3B\u8981\u7EC4\u6210\u90E8\u5206\uFF1A</p>
<ul>
<li>
<p>\u4E8B\u4EF6\u89E6\u53D1\u5668\uFF08Event Triggers\uFF09\uFF1A\u53D1\u5C04\u4E8B\u4EF6\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u662F Node.js \u7684\u6838\u5FC3\u6A21\u5757\u3001\u81EA\u5B9A\u4E49\u5BF9\u8C61\u6216\u7B2C\u4E09\u65B9\u6A21\u5757\u3002</p>
</li>
<li>
<p>\u4E8B\u4EF6\u961F\u5217\uFF08Event Queue\uFF09\uFF1A\u5B58\u50A8\u5F85\u5904\u7406\u4E8B\u4EF6\u7684\u961F\u5217\u3002\u5F53\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\uFF0C\u76F8\u5173\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u88AB\u6DFB\u52A0\u5230\u4E8B\u4EF6\u961F\u5217\u4E2D\u3002</p>
</li>
<li>
<p>\u4E8B\u4EF6\u5904\u7406\u5668\uFF08Event Handlers\uFF09\uFF1A\u4ECE\u4E8B\u4EF6\u961F\u5217\u4E2D\u53D6\u51FA\u4E8B\u4EF6\u53CA\u5176\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002</p>
</li>
<li>
<p>\u4E8B\u4EF6\u5FAA\u73AF\uFF08Event Loop\uFF09\uFF1A\u8D1F\u8D23\u4E0D\u65AD\u4E8B\u4EF6\u961F\u5217\u4E2D\u83B7\u53D6\u4E8B\u4EF6\uFF0C\u5E76\u5C06\u5176\u5206\u53D1\u7ED9\u5BF9\u5E94\u7684\u4E8B\u4EF6\u5904\u7406\u5668\u8FDB\u884C\u5904\u7406\u3002</p>
</li>
</ul>
</blockquote>
<p>\u4E8B\u4EF6\u5FAA\u73AF\u56FE\u5982\u4E0B\uFF1A</p>
<p><img src="./imgs/event_loop.jpg" alt="" /></p>
<h4 id="-3" tabindex="-1">\u5B9E\u4F8B\u4EE3\u7801: <a class="header-anchor" href="#-3">\xA7</a></h4>
<h5 id="-4" tabindex="-1">\u7B80\u5355\u5B9E\u4F8B <a class="header-anchor" href="#-4">\xA7</a></h5>
<p>\u4EE3\u7801\u6587\u4EF6\uFF1Aevent-emitter.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">// \u5F15\u5165events\u5185\u7F6E\u6A21\u5757</span>
<span class="hljs-keyword">const</span> events = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;events&quot;</span>);
<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2AeventEitter\u5BF9\u8C61</span>
<span class="hljs-keyword">const</span> eventEmitter = <span class="hljs-keyword">new</span> events.<span class="hljs-title class_">EventEmitter</span>();

<span class="hljs-comment">// \u521B\u5EFA\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
<span class="hljs-keyword">const</span> connectHandler = <span class="hljs-keyword">function</span> <span class="hljs-title function_">connected</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u8FDE\u63A5\u6210\u529F&quot;</span>);
};

<span class="hljs-comment">// \u7ED1\u5B9A\u4E00\u4E2Aconnect\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
eventEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;connect&quot;</span>,connectHandler);

<span class="hljs-comment">// \u89E6\u53D1connect\u4E8B\u4EF6</span>
eventEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;connect&quot;</span>);
</code></pre>
<h5 id="-5" tabindex="-1">\u591A\u4E2A\u4E8B\u4EF6\u5904\u7406 <a class="header-anchor" href="#-5">\xA7</a></h5>
<p>\u4EE3\u7801\u6587\u4EF6\uFF1Aevent-emitter.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">// \u5F15\u5165events\u5185\u7F6E\u6A21\u5757</span>
<span class="hljs-keyword">const</span> events = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;events&quot;</span>);
<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2AeventEitter\u5BF9\u8C61</span>
<span class="hljs-keyword">const</span> eventEmitter = <span class="hljs-keyword">new</span> events.<span class="hljs-title class_">EventEmitter</span>();

<span class="hljs-comment">// \u521B\u5EFA\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
<span class="hljs-keyword">const</span> connectHandler = <span class="hljs-keyword">function</span> <span class="hljs-title function_">connected</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u8FDE\u63A5\u6210\u529F&quot;</span>);

    <span class="hljs-comment">// \u89E3\u53D1\u53E6\u4E00\u4E2A\u6570\u636E\u83B7\u53D6\u5904\u7406\u4E8B\u4EF6</span>
    eventEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;data_received&quot;</span>);
};

<span class="hljs-comment">// \u7ED1\u5B9A\u4E00\u4E2Aconnect\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
eventEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;connect&quot;</span>,connectHandler);

<span class="hljs-comment">// \u4F7F\u7528\u533F\u540D\u51FD\u6570\u7248\u5B9A data_received\u4E8B\u4EF6</span>
eventEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;data_received&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u6570\u636E\u63A5\u6536\u6210\u529F\u3002&quot;</span>);
});

<span class="hljs-comment">// \u89E6\u53D1connect\u4E8B\u4EF6</span>
eventEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;connect&quot;</span>);
</code></pre>
<h5 id="-6" tabindex="-1">\u5E26\u53C2\u6570\u7684\u4E8B\u4EF6\u5904\u7406 <a class="header-anchor" href="#-6">\xA7</a></h5>
<p>\u4EE3\u7801\u6587\u4EF6\uFF1Aevent-emitter-arg.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> events = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;events&quot;</span>);
<span class="hljs-keyword">const</span> eventEmitter = <span class="hljs-keyword">new</span> events.<span class="hljs-title class_">EventEmitter</span>();

eventEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;someEvent&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">arg1,arg2</span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;listener1&quot;</span>,arg1,arg2);
});

eventEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;someEvent&quot;</span>,<span class="hljs-string">&quot;arg1\u53C2\u6570&quot;</span>,<span class="hljs-string">&quot;arg2\u53C2\u6570&quot;</span>);
</code></pre>
<h5 id="-7" tabindex="-1">\u76D1\u542C\u5668\u7EDF\u8BA1 <a class="header-anchor" href="#-7">\xA7</a></h5>
<blockquote>
<p>\u5982\u679C\u4E3A\u7279\u5B9A\u7684\u4E8B\u4EF6\u6DFB\u52A0\u8D85\u8FC7\u8BBE\u7F6E\u7684\u76D1\u542C\u6570\u91CF\uFF0C\u5219EventEmitter\u4F1A\u62A5\u9519\uFF0C\u8FD9\u6709\u52A9\u4E8E\u53D1\u73B0\u5185\u5B58\u6CC4\u6F0F\u7B49\u95EE\u9898\u3002</p>
</blockquote>
<p>\u4EE3\u7801\u6587\u4EF6\uFF1Aevent-emitter-count.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> events = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;events&quot;</span>);
<span class="hljs-keyword">const</span> eventEmitter = <span class="hljs-keyword">new</span> events.<span class="hljs-title class_">EventEmitter</span>();

<span class="hljs-comment">// \u76D1\u542C\u5668 #1</span>
<span class="hljs-keyword">const</span> listener1 = <span class="hljs-keyword">function</span> <span class="hljs-title function_">listener1</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u76D1\u542C\u5668 listener1&quot;</span>);
}

<span class="hljs-comment">// \u76D1\u542C\u5668 #1</span>
<span class="hljs-keyword">const</span> listener2 = <span class="hljs-keyword">function</span> <span class="hljs-title function_">listener2</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u76D1\u542C\u5668 listener2&quot;</span>);
}

<span class="hljs-comment">// \u7ED1\u5B9A connect\u4E8B\u4EF6\uFF0C\u5904\u7406\u51FD\u6570\u4E3A listener1</span>
eventEmitter.<span class="hljs-title function_">addListener</span>(<span class="hljs-string">&quot;connect&quot;</span>,listener1);

<span class="hljs-comment">// \u7ED1\u5B9A connect\u4E8B\u4EF6\uFF0C\u5904\u7406\u51FD\u6570\u4E3A listener2</span>
eventEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;connect&quot;</span>,listener2);

<span class="hljs-comment">// \u67E5\u770B connect \u76D1\u542C\u5668\u6570\u91CF</span>
<span class="hljs-keyword">const</span> eventListeners = eventEmitter.<span class="hljs-title function_">listenerCount</span>(<span class="hljs-string">&quot;connect&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(eventListeners + <span class="hljs-string">&quot;\u4E2A\u76D1\u542C\u5668\u76D1\u542C\u8FDE\u63A5\u4E8B\u4EF6\u3002&quot;</span>);

<span class="hljs-comment">// \u89E6\u53D1 connect \u4E8B\u4EF6</span>
eventEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;connect&quot;</span>);

<span class="hljs-comment">// \u79FB\u9664\u7ED1\u5B9A\u7684 listener1 \u51FD\u6570</span>
eventEmitter.<span class="hljs-title function_">removeListener</span>(<span class="hljs-string">&quot;connect&quot;</span>,listener1);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot; listener1 \u5DF2\u88AB\u79FB\u9664\uFF0C\u4E0D\u518D\u76D1\u542C &quot;</span>);

<span class="hljs-comment">// \u89E6\u53D1 connect \u4E8B\u4EF6</span>
eventEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;connect&quot;</span>);

<span class="hljs-comment">// \u67E5\u770B\u65B0\u7684\u76D1\u542C\u4E2A\u6570</span>
<span class="hljs-keyword">const</span> eventListeners2 = eventEmitter.<span class="hljs-title function_">listenerCount</span>(<span class="hljs-string">&quot;connect&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(eventListeners2 + <span class="hljs-string">&quot;\u4E2A\u76D1\u542C\u5668\u76D1\u542C\u8FDE\u63A5\u4E8B\u4EF6\u3002&quot;</span>);
</code></pre>
<h5 id="error" tabindex="-1">error\u4E8B\u4EF6 <a class="header-anchor" href="#error">\xA7</a></h5>
<blockquote>
<p>EventEmitter\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7279\u6B8A\u7684\u4E8B\u4EF6error\uFF0C\u5B83\u5305\u542B\u4E86\u9519\u8BEF\u7684\u8BED\u4E49\uFF0C\u6211\u4EEC\u5728\u9047\u5230\u5F02\u5E38\u7684\u65F6\u5019\u901A\u5E38\u4F1A\u89E6\u53D1error\u4E8B\u4EF6\u3002</p>
<p>\u5F53error\u4E8B\u4EF6\u88AB\u89E6\u53D1\uFF0CEventEmitter\u89C4\u5B9A\u5982\u679C\u6CA1\u6709\u54CD\u5E94\u7684\u76D1\u542C\u5668\uFF0CNode.js\u4F1A\u628A\u5B83\u5F53\u4F5C\u5F02\u5E38\uFF0C\u9000\u51FA\u7A0B\u5E8F\u5E76\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F\u3002</p>
<p>\u6211\u4EEC\u4E00\u822C\u8981\u4E3A\u4F1A\u89E6\u53D1error\u4E8B\u4EF6\u7684\u5BF9\u8C61\u8BBE\u7F6E\u76D1\u542C\u5668\uFF0C\u907F\u514D\u9047\u5230\u9519\u8BEF\u540E\u6574\u4E2A\u7A0B\u5E8F\u5D29\u6E83\u3002\u4F8B\u5982\uFF1A</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> events = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;events&quot;</span>);
<span class="hljs-keyword">const</span> emitter = <span class="hljs-keyword">new</span> events.<span class="hljs-title class_">EventEmitter</span>();
emitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;error&quot;</span>);
</code></pre>
<h5 id="event-emitter-1" tabindex="-1">\u7EE7\u627FEventEmitter <a class="header-anchor" href="#event-emitter-1">\xA7</a></h5>
<blockquote>
<p>\u5927\u591A\u6570\u65F6\u5019\u6211\u4EEC\u4E0D\u4F1A\u76F4\u63A5\u4F7F\u7528EventEmitter\uFF0C\u800C\u662F\u5728\u5BF9\u8C61\u4E2D\u7EE7\u627F\u5B83\u3002\u5305\u62ECfs\u3001net\u3001http\u5728\u5185\u7684\uFF0C\u53EA\u8981\u662F\u652F\u6301\u4E8B\u4EF6\u54CD\u5E94\u7684\u6838\u5FC3\u6A21\u5757\u90FD\u662FEventEmitter\u7684\u5B50\u7C7B\u3002</p>
<p>\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\u505A\u5462\uFF1F\u539F\u56E0\u6709\u4E24\u70B9\uFF1A</p>
<ul>
<li>
<p>\u9996\u5148\uFF0C\u5177\u6709\u67D0\u4E2A\u5B9E\u4F53\u529F\u80FD\u7684\u5BF9\u8C61\u5B9E\u73B0\u4E8B\u4EF6\u7B26\u5408\u8BED\u4E49\uFF0C\u4E8B\u4EF6\u7684\u76D1\u542C\u548C\u53D1\u751F\u5E94\u8BE5\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002</p>
</li>
<li>
<p>\u5176\u6B21JavaScript\u7684\u5BF9\u8C61\u673A\u5236\u662F\u57FA\u4E8E\u539F\u578B\u7684\uFF0C\u652F\u6301\u90E8\u5206\u591A\u91CD\u7EE7\u627F\uFF0C\u7EE7\u627FEventEmitter\u4E0D\u4F1A\u6253\u4E71\u5BF9\u8C61\u539F\u6709\u7684\u7EE7\u627F\u5173\u7CFB\u3002</p>
</li>
</ul>
</blockquote>
<p>\u4EE3\u7801\u5B9E\u4F8B\uFF1Aevent-emitter-extends.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title class_">EventEmitter</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;events&quot;</span>);

<span class="hljs-comment">// \u7EE7\u627F EventEmitter</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">EvtDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">EventEmitter</span> {};

<span class="hljs-keyword">const</span> myEmitter = <span class="hljs-keyword">new</span> <span class="hljs-title class_">EvtDemo</span>();

myEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;myEvent&quot;</span>,<span class="hljs-function">(<span class="hljs-params">args</span>)=&gt;</span>{
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u4E8B\u4EF6\u88AB\u89E6\u53D1\uFF0C\u53C2\u6570\u4E3A:&quot;</span>,args);
});

myEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;myEvent&quot;</span>,<span class="hljs-string">&quot;Hello World&quot;</span>);
</code></pre>
<h4 id="-8" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#-8">\xA7</a></h4>
<blockquote>
<p>\u901A\u8FC7\u6DF1\u5165\u4E86\u89E3Node.js\u7684EventEmitter\u7C7B\u53CA\u5176\u4E8B\u4EF6\u5904\u7406\u673A\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7075\u6D3B\u5730\u5904\u7406\u548C\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u5B9E\u73B0\u4E8B\u4EF6\u9A71\u52A8\u7684\u7F16\u7A0B\u6A21\u578B\u3002EventEmitter\u7C7B\u7684\u65B9\u6CD5\u548C\u4E8B\u4EF6\u4F7F\u5F97\u6211\u4EEC\u80FD\u591F\u5199\u51FA\u66F4\u52A0\u7075\u6D3B\u548C\u53EF\u6269\u5C55\u7684\u4EE3\u7801\uFF0C\u63D0\u9AD8\u7A0B\u5E8F\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002</p>
<p>\u8BA9\u6211\u4EEC\u6DF1\u5165\u63A2\u7D22\u548C\u5E94\u7528Node.js\u7684EventEmitter\u7C7B\uFF0C\u53D1\u6325\u4E8B\u4EF6\u9A71\u52A8\u7F16\u7A0B\u7684\u5A01\u529B\uFF0C\u5F00\u53D1\u51FA\u66F4\u52A0\u9AD8\u6548\u548C\u53EF\u9760\u7684\u5E94\u7528\u7A0B\u5E8F\uFF01</p>
</blockquote>
<h3 id="buffer" tabindex="-1">Buffer(\u7F13\u51B2\u533A) <a class="header-anchor" href="#buffer">\xA7</a></h3>
<blockquote>
<p>JavaScript\u8BED\u8A00\u81EA\u8EAB\u53EA\u6709\u5B57\u7B26\u4E32\u6570\u636E\u7C7B\u578B\uFF0C\u6CA1\u6709\u4E8C\u8FDB\u5236\u6570\u636E\u7C7B\u578B\u3002</p>
<p>\u4F46\u5728\u5904\u7406\u50CFTCP\u6D41\u6216\u6587\u4EF6\u6D41\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u5230\u4E8C\u8FDB\u5236\u6570\u636E\u3002\u56E0\u6B64\u5728Node.js\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2ABuffer\u7C7B\uFF0C\u8BE5\u7C7B\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u4E13\u95E8\u5B58\u653E\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u7F13\u51B2\u533A\u3002</p>
<p>\u5728Node.js\u4E2D\uFF0CBuffer\u7C7B\u662F\u968FNode\u5185\u6838\u4E00\u8D77\u53D1\u5E03\u7684\u6838\u5FC3\u5E93\u3002Buffer\u5E93\u4E3ANode.js\u5E26\u6765\u4E86\u4E00\u79CD\u5B58\u50A8\u539F\u59CB\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9Node.js\u5904\u7406\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u6BCF\u5F53\u9700\u8981\u5728Node.js\u4E2D\u5904\u7406I/O\u64CD\u4F5C\u4E2D\u79FB\u52A8\u7684\u6570\u636E\u65F6\uFF0C\u5C31\u6709\u53EF\u80FD\u4F7F\u7528Buffer\u5E93\u3002\u539F\u59CB\u6570\u636E\u5B58\u50A8\u5728Buffer\u7C7B\u7684\u5B9E\u4F8B\u4E2D\u3002\u4E00\u4E2ABuffer\u7C7B\u4F3C\u4E8E\u4E00\u4E2A\u6574\u6570\u6570\u7EC4\uFF0C\u4F46\u5B83\u5BF9\u5E94\u4E8EV8\u5806\u5185\u5B58\u4E4B\u5916\u7684\u4E00\u5757\u539F\u59CB\u5185\u5B58\u3002</p>
</blockquote>
<h4 id="buffer-1" tabindex="-1">Buffer\u4E0E\u5B57\u7B26\u4E32\u7F16\u7801 <a class="header-anchor" href="#buffer-1">\xA7</a></h4>
<blockquote>
<p>Buffer\u5B9E\u4F8B\u4E00\u822C\u7528\u4E8E\u8868\u793A\u7F16\u7801\u5B57\u7B26\u7684\u5E8F\u5217\uFF0C\u6BD4\u5982UTF-8\u3001UCS2\u3001Base64\u3001\u6216\u5341\u516D\u8FDB\u5236\u7F16\u7801\u7684\u6570\u636E\u3002\u901A\u8FC7\u4F7F\u7528\u663E\u5F0F\u7684\u5B57\u7B26\u7F16\u7801\uFF0C\u5C31\u53EF\u4EE5\u5728Buffer\u5B9E\u4F8B\u4E0E\u666E\u901A\u7684JavaScript\u5B57\u7B26\u4E32\u4E4B\u95F4\u8FDB\u884C\u76F8\u4E92\u8F6C\u6362\u3002</p>
<p>Node.js \u76EE\u524D\u652F\u6301\u7684\u5B57\u7B26\u7F16\u7801\u5305\u62EC\uFF1A</p>
<ul>
<li>
<p><strong>ascii</strong>\xA0- \u4EC5\u652F\u6301 7 \u4F4D ASCII \u6570\u636E\u3002\u5982\u679C\u8BBE\u7F6E\u53BB\u6389\u9AD8\u4F4D\u7684\u8BDD\uFF0C\u8FD9\u79CD\u7F16\u7801\u662F\u975E\u5E38\u5FEB\u7684\u3002</p>
</li>
<li>
<p><strong>utf8</strong>\xA0- \u591A\u5B57\u8282\u7F16\u7801\u7684 Unicode \u5B57\u7B26\u3002\u8BB8\u591A\u7F51\u9875\u548C\u5176\u4ED6\u6587\u6863\u683C\u5F0F\u90FD\u4F7F\u7528 UTF-8 \u3002</p>
</li>
<li>
<p><strong>utf16le</strong>\xA0- 2 \u6216 4 \u4E2A\u5B57\u8282\uFF0C\u5C0F\u5B57\u8282\u5E8F\u7F16\u7801\u7684 Unicode \u5B57\u7B26\u3002\u652F\u6301\u4EE3\u7406\u5BF9\uFF08U+10000 \u81F3 U+10FFFF\uFF09\u3002</p>
</li>
<li>
<p><strong>ucs2</strong>\xA0-\xA0<strong>utf16le</strong>\xA0\u7684\u522B\u540D\u3002</p>
</li>
<li>
<p><strong>base64</strong>\xA0- Base64 \u7F16\u7801\u3002</p>
</li>
<li>
<p><strong>latin1</strong>\xA0- \u4E00\u79CD\u628A\xA0<strong>Buffer</strong>\xA0\u7F16\u7801\u6210\u4E00\u5B57\u8282\u7F16\u7801\u7684\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u3002</p>
</li>
<li>
<p><strong>binary</strong>\xA0-\xA0<strong>latin1</strong>\xA0\u7684\u522B\u540D\u3002</p>
</li>
<li>
<p><strong>hex</strong>\xA0- \u5C06\u6BCF\u4E2A\u5B57\u8282\u7F16\u7801\u4E3A\u4E24\u4E2A\u5341\u516D\u8FDB\u5236\u5B57\u7B26\u3002</p>
</li>
</ul>
</blockquote>
<p>\u4EE3\u7801\u6587\u4EF6\uFF1Abuffer-string.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> buf = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;hello&quot;</span>,<span class="hljs-string">&#x27;ascii&#x27;</span>);
<span class="hljs-comment">// \u8F93\u51FA\u5341\u516D\u8FDB\u5236</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">toString</span>(<span class="hljs-string">&#x27;hex&#x27;</span>));
<span class="hljs-comment">// \u8F93\u51FA base64</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">toString</span>(<span class="hljs-string">&#x27;base64&#x27;</span>));
</code></pre>
<h4 id="buffer-2" tabindex="-1">\u521B\u5EFABuffer\u7C7B <a class="header-anchor" href="#buffer-2">\xA7</a></h4>
<blockquote>
<p>Buffer\u63D0\u4F9B\u4E86\u4EE5\u4E0BAPI\u6765\u521B\u5EFABuffer\u7C7B\uFF1A</p>
<ul>
<li>
<p><strong>Buffer.alloc(size[, fill[, encoding]])\uFF1A</strong>\xA0\u8FD4\u56DE\u4E00\u4E2A\u6307\u5B9A\u5927\u5C0F\u7684 Buffer \u5B9E\u4F8B\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E fill\uFF0C\u5219\u9ED8\u8BA4\u586B\u6EE1 0</p>
</li>
<li>
<p><strong>Buffer.allocUnsafe(size)\uFF1A</strong>\xA0\u8FD4\u56DE\u4E00\u4E2A\u6307\u5B9A\u5927\u5C0F\u7684 Buffer \u5B9E\u4F8B\uFF0C\u4F46\u662F\u5B83\u4E0D\u4F1A\u88AB\u521D\u59CB\u5316\uFF0C\u6240\u4EE5\u5B83\u53EF\u80FD\u5305\u542B\u654F\u611F\u7684\u6570\u636E</p>
</li>
<li>
<p><strong>Buffer.allocUnsafeSlow(size)</strong> \u4E0EallocUnsafe\u4E0D\u540C\uFF0C\u4F1A\u76F4\u63A5\u521B\u5EFA\u7F13\u51B2\u533A\uFF0C\u901F\u5EA6\u4F1A\u6BD4allocUnsafe\u6162</p>
</li>
<li>
<p><strong>Buffer.from(array)\uFF1A</strong>\xA0\u8FD4\u56DE\u4E00\u4E2A\u88AB array \u7684\u503C\u521D\u59CB\u5316\u7684\u65B0\u7684 Buffer \u5B9E\u4F8B\uFF08\u4F20\u5165\u7684 array \u7684\u5143\u7D20\u53EA\u80FD\u662F\u6570\u5B57\uFF0C\u4E0D\u7136\u5C31\u4F1A\u81EA\u52A8\u88AB 0 \u8986\u76D6\uFF09</p>
</li>
<li>
<p><strong>Buffer.from(arrayBuffer[, byteOffset[, length]])\uFF1A</strong>\xA0\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5EFA\u7684\u4E0E\u7ED9\u5B9A\u7684 ArrayBuffer \u5171\u4EAB\u540C\u4E00\u5185\u5B58\u7684 Buffer\u3002</p>
</li>
<li>
<p><strong>Buffer.from(buffer)\uFF1A</strong>\xA0\u590D\u5236\u4F20\u5165\u7684 Buffer \u5B9E\u4F8B\u7684\u6570\u636E\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Buffer \u5B9E\u4F8B</p>
</li>
<li>
<p><strong>Buffer.from(string[, encoding])\uFF1A</strong>\xA0\u8FD4\u56DE\u4E00\u4E2A\u88AB string \u7684\u503C\u521D\u59CB\u5316\u7684\u65B0\u7684 Buffer \u5B9E\u4F8B</p>
</li>
</ul>
</blockquote>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A10\uFF0C\u4E14\u75280\u586B\u5145\u7684Buffer</span>
<span class="hljs-keyword">const</span> buf1 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">alloc</span>(<span class="hljs-number">10</span>);
<span class="hljs-comment">// Buffer\u7C7B\u578B &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt;</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf1);

<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2ABuffer\u7C7B\uFF0C\u957F\u5EA6\u4E3A10\uFF0C\u4E14\u752801\u6765\u586B\u5145</span>
<span class="hljs-keyword">const</span> buf2 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">alloc</span>(<span class="hljs-number">10</span>, <span class="hljs-number">1</span>);
<span class="hljs-comment">// &lt;Buffer 01 01 01 01 01 01 01 01 01 01&gt;</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf2);

<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A10\uFF0C\u4E14\u672A\u521D\u59CB\u5316\u7684Buffer.</span>
<span class="hljs-comment">// \u8FD9\u4E2A\u65B9\u6CD5\u6BD4\u8C03\u7528 Buffer.alloc()\u66F4\u5FEB\uFF0C</span>
<span class="hljs-comment">// \u4F46\u8FD4\u56DE\u7684Buffer\u5B9E\u4F8B\u53EF\u80FD\u5305\u542B\u65E7\u6570\u636E</span>
<span class="hljs-comment">// \u56E0\u6B64\u9700\u8981\u4F7F\u7528fill()\u6216write()\u91CD\u5199\u3002</span>
<span class="hljs-keyword">const</span> buf3 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">allocUnsafe</span>(<span class="hljs-number">10</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf3);

<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u5305\u542B &lt;Buffer 01 02 03&gt; \u7684Buffer</span>
<span class="hljs-keyword">const</span> buf4 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf4);

<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u5305\u542BUTF-8\u5B57\u8282 &lt;Buffer 74 65 73 74&gt; \u7684Buffer</span>
<span class="hljs-keyword">const</span> buf5 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;test&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf5);

<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u5305\u542BLatin-1\u5B57\u8282 &lt;Buffer 74 65 73 74&gt; \u7684Buffer</span>
<span class="hljs-keyword">const</span> buf6 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;test&quot;</span>,<span class="hljs-string">&quot;latin1&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf6);
</code></pre>
<h4 id="-9" tabindex="-1">\u5199\u5165\u7F13\u51B2\u533A <a class="header-anchor" href="#-9">\xA7</a></h4>
<blockquote>
<p>\u5199\u5165Node\u7F13\u51B2\u533A\u7684\u8BED\u6CD5\u5982\u4E0B:</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf.<span class="hljs-title function_">write</span>(string[, offset[, length]][, encoding])
</code></pre>
<p>\u53C2\u6570\u5982\u4E0B\uFF1A</p>
<ul>
<li>
<p><strong>string</strong>\xA0- \u5199\u5165\u7F13\u51B2\u533A\u7684\u5B57\u7B26\u4E32\u3002</p>
</li>
<li>
<p><strong>offset</strong>\xA0- \u7F13\u51B2\u533A\u5F00\u59CB\u5199\u5165\u7684\u7D22\u5F15\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0 \u3002</p>
</li>
<li>
<p><strong>length</strong>\xA0- \u5199\u5165\u7684\u5B57\u8282\u6570\uFF0C\u9ED8\u8BA4\u4E3A buffer.length</p>
</li>
<li>
<p><strong>encoding</strong>\xA0- \u4F7F\u7528\u7684\u7F16\u7801\u3002\u9ED8\u8BA4\u4E3A \u2018utf8\u2019 \u3002</p>
</li>
</ul>
<p>\u6839\u636E encoding \u7684\u5B57\u7B26\u7F16\u7801\u5199\u5165 string \u5230 buf \u4E2D\u7684 offset \u4F4D\u7F6E\u3002 length \u53C2\u6570\u662F\u5199\u5165\u7684\u5B57\u8282\u6570\u3002 \u5982\u679C buf \u6CA1\u6709\u8DB3\u591F\u7684\u7A7A\u95F4\u4FDD\u5B58\u6574\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5219\u53EA\u4F1A\u5199\u5165 string \u7684\u4E00\u90E8\u5206\u3002 \u53EA\u90E8\u5206\u89E3\u7801\u7684\u5B57\u7B26\u4E0D\u4F1A\u88AB\u5199\u5165\u3002</p>
<p>\u8FD4\u56DE\u503C</p>
<p>\u8FD4\u56DE\u5B9E\u9645\u5199\u5165\u7684\u5927\u5C0F\u3002\u5982\u679Cbuffer\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u5219\u53EA\u4F1A\u5199\u5165\u90E8\u5206\u5B57\u7B26\u4E32\u3002</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">alloc</span>(<span class="hljs-number">256</span>);
len = buf.<span class="hljs-title function_">write</span>(<span class="hljs-string">&quot;hello wolrd&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u5199\u5165\u5B57\u8282\u6570\uFF1A&quot;</span>+len);
</code></pre>
<h4 id="-10" tabindex="-1">\u4ECE\u7F13\u51B2\u533A\u8BFB\u53D6\u6570\u636E <a class="header-anchor" href="#-10">\xA7</a></h4>
<blockquote>
<p>\u8BFB\u53D6Node.js\u7F13\u51B2\u533A\u6570\u636E\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf.<span class="hljs-title function_">toString</span>([encoding[, start[, end]]])
</code></pre>
<p>\u53C2\u6570</p>
<ul>
<li>
<p><strong>encoding</strong>\xA0- \u4F7F\u7528\u7684\u7F16\u7801\u3002\u9ED8\u8BA4\u4E3A \u2018utf8\u2019 \u3002</p>
</li>
<li>
<p><strong>start</strong>\xA0- \u6307\u5B9A\u5F00\u59CB\u8BFB\u53D6\u7684\u7D22\u5F15\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A 0\u3002</p>
</li>
<li>
<p><strong>end</strong>\xA0- \u7ED3\u675F\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A\u7F13\u51B2\u533A\u7684\u672B\u5C3E\u3002</p>
</li>
</ul>
<p>\u8FD4\u56DE\u503C</p>
<p>\u89E3\u7801\u7F13\u51B2\u533A\u6570\u636E\u5E76\u4F7F\u7528\u6307\u5B9A\u7684\u7F16\u7801\u8FD4\u56DE\u5B57\u7B26\u4E32\u3002</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">alloc</span>(<span class="hljs-number">26</span>);
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span> ; i &lt; <span class="hljs-number">26</span> ; i++) {
  buf[i] = i + <span class="hljs-number">97</span>;
}
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">toString</span>(<span class="hljs-string">&#x27;ascii&#x27;</span>));       <span class="hljs-comment">// \u8F93\u51FA: abcdefghijklmnopqrstuvwxyz</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">toString</span>(<span class="hljs-string">&#x27;ascii&#x27;</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>));   <span class="hljs-comment">//\u4F7F\u7528 &#x27;ascii&#x27; \u7F16\u7801, \u5E76\u8F93\u51FA: abcde</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">toString</span>(<span class="hljs-string">&#x27;utf8&#x27;</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>));    <span class="hljs-comment">// \u4F7F\u7528 &#x27;utf8&#x27; \u7F16\u7801, \u5E76\u8F93\u51FA: abcde</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">toString</span>(<span class="hljs-literal">undefined</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>)); <span class="hljs-comment">// \u4F7F\u7528\u9ED8\u8BA4\u7684 &#x27;utf8&#x27; \u7F16\u7801, \u5E76\u8F93\u51FA: abcde</span>
</code></pre>
<h4 id="buffer-json" tabindex="-1">Buffer\u8F6C\u6362\u4E3AJSON\u5BF9\u8C61 <a class="header-anchor" href="#buffer-json">\xA7</a></h4>
<blockquote>
<p>\u5C06Node.js Buffer\u8F6C\u6362\u4E3AJSON\u5BF9\u8C61\u7684\u51FD\u6570\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<p>\u5F53\u5B57\u7B26\u4E32\u4E00\u4E2ABuffer\u5B9E\u4F8B\u65F6\uFF0CJSON.stringify()\u4F1A\u9690\u5F0F\u5730\u8C03\u7528\u8BE5toJSON()</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf.<span class="hljs-title function_">toJSON</span>()
</code></pre>
<p>\u8FD4\u56DE\u503C\uFF1A \u8FD4\u56DEJSON\u5BF9\u8C61\u3002</p>
</blockquote>
<p>\u4EE3\u7801\u5B9E\u4F8B\uFF1Abuffer-json.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">// \u5C06Buffer\u8F6C\u6362\u4E3AJSON</span>
<span class="hljs-keyword">const</span> buf = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>([<span class="hljs-number">0x1</span>,<span class="hljs-number">0x2</span>,<span class="hljs-number">0x3</span>,<span class="hljs-number">0x4</span>,<span class="hljs-number">0x5</span>]);
<span class="hljs-keyword">const</span> json = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(buf);
<span class="hljs-comment">// {&quot;type&quot;:&quot;Buffer&quot;,&quot;data&quot;:[1,2,3,4,5]}</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(json);

<span class="hljs-comment">// \u5C06JSON\u8F6C\u6362\u4E3ABuffer</span>
<span class="hljs-keyword">const</span> copy = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(json,<span class="hljs-function">(<span class="hljs-params">key,value</span>)=&gt;</span>{
    <span class="hljs-keyword">return</span> value &amp;&amp; value.<span class="hljs-property">type</span> === <span class="hljs-string">&quot;Buffer&quot;</span>?<span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(value.<span class="hljs-property">data</span>):value;
});
<span class="hljs-comment">// \u8F93\u51FA: &lt;Buffer 01 02 03 04 05&gt;</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(copy);
</code></pre>
<h4 id="-11" tabindex="-1">\u7F13\u51B2\u533A\u5408\u5E76 <a class="header-anchor" href="#-11">\xA7</a></h4>
<blockquote>
<p>Node.js\u7F13\u51B2\u533A\u5408\u5E76\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">concat</span>(list[, totalLength])
</code></pre>
<p>\u53C2\u6570</p>
<ul>
<li>
<p><strong>list</strong>\xA0- \u7528\u4E8E\u5408\u5E76\u7684 Buffer \u5BF9\u8C61\u6570\u7EC4\u5217\u8868\u3002</p>
</li>
<li>
<p><strong>totalLength</strong>\xA0- \u6307\u5B9A\u5408\u5E76\u540EBuffer\u5BF9\u8C61\u7684\u603B\u957F\u5EA6\u3002</p>
</li>
</ul>
<p>\u8FD4\u56DE\u503C\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u591A\u4E2A\u6210\u5458\u5408\u5E76\u7684\u65B0Buffer\u5BF9\u8C61\u3002</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> buf1 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;Hello &quot;</span>);
<span class="hljs-keyword">const</span> buf2 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;World&quot;</span>);
<span class="hljs-keyword">const</span> buf3 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">concat</span>([buf1,buf2]);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>+buf3.<span class="hljs-title function_">toString</span>());
</code></pre>
<h4 id="-12" tabindex="-1">\u7F13\u51B2\u533A\u6BD4\u8F83 <a class="header-anchor" href="#-12">\xA7</a></h4>
<blockquote>
<p>Node Buffer\u6BD4\u8F83\u7684\u51FD\u6570\u662F\u5728v0.12.2\u7248\u672C\u5F15\u5165\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf.<span class="hljs-title function_">compare</span>(otherBuffer);
</code></pre>
<p>\u53C2\u6570\uFF1A</p>
<ul>
<li><strong>otherBuffer</strong>\xA0- \u4E0E\xA0<strong>buf</strong>\xA0\u5BF9\u8C61\u6BD4\u8F83\u7684\u53E6\u5916\u4E00\u4E2A Buffer \u5BF9\u8C61\u3002</li>
</ul>
<p>\u8FD4\u987A\u503C\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\uFF0C\u8868\u793Abuf\u5728otherBuffer\u4E4B\u524D\uFF0C\u4E4B\u540E\u6216\u76F8\u540C\u3002</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> buf1 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;ABC&quot;</span>);
<span class="hljs-keyword">const</span> buf2 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;ABCD&quot;</span>);
<span class="hljs-keyword">const</span> result = buf1.<span class="hljs-title function_">compare</span>(buf2);
<span class="hljs-comment">// -1 :buf1\u5B57\u7B26\u957F\u5EA6\u5C0F\u4E8Ebuf2\uFF0C\u5927\u4E8E0\u65F6\uFF0Cbuf1\u5B57\u7B26\u957F\u5EA6\u5927\u4E8Ebuf2\uFF0C=0\u65F6\uFF0C\u5219\u4E24\u5B57\u7B26\u957F\u5EA6\u76F8\u540C</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result);
</code></pre>
<h4 id="-13" tabindex="-1">\u62F7\u8D1D\u7F13\u51B2\u533A <a class="header-anchor" href="#-13">\xA7</a></h4>
<blockquote>
<p>Node.js\u7F13\u51B2\u533A\u62F7\u8D1D\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf.<span class="hljs-title function_">copy</span>(targetBuffer[,targetStart[,sourceStart[, sourceEnd])
</code></pre>
<p>\u53C2\u6570</p>
<ul>
<li>
<p><strong>targetBuffer</strong>\xA0- \u8981\u62F7\u8D1D\u7684 Buffer \u5BF9\u8C61\u3002</p>
</li>
<li>
<p><strong>targetStart</strong>\xA0- \u6570\u5B57, \u53EF\u9009, \u9ED8\u8BA4: 0</p>
</li>
<li>
<p><strong>sourceStart</strong>\xA0- \u6570\u5B57, \u53EF\u9009, \u9ED8\u8BA4: 0</p>
</li>
<li>
<p><strong>sourceEnd</strong>\xA0- \u6570\u5B57, \u53EF\u9009, \u9ED8\u8BA4: buffer.length</p>
</li>
</ul>
<p>\u8FD4\u56DE\u503C\uFF1A \u6CA1\u6709\u8FD4\u56DE\u503C</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> buf1 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;abcdefg&quot;</span>);
<span class="hljs-keyword">const</span> buf2 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;hik&quot;</span>);
<span class="hljs-comment">//\u5C06buf2\u63D2\u5165\u5230buf1\u6307\u5B9A\u4F4D\u7F6E\u4E0A</span>
buf2.<span class="hljs-title function_">copy</span>(buf1,<span class="hljs-number">2</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf1.<span class="hljs-title function_">toString</span>());
</code></pre>
<h4 id="-14" tabindex="-1">\u7F13\u51B2\u533A\u88C1\u526A <a class="header-anchor" href="#-14">\xA7</a></h4>
<blockquote>
<p>Node.js\u7F13\u51B2\u533A\u88C1\u526A\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf.<span class="hljs-title function_">slice</span>([start[,end])
</code></pre>
<p>\u53C2\u6570</p>
<ul>
<li>
<p><strong>start</strong>\xA0- \u6570\u5B57, \u53EF\u9009, \u9ED8\u8BA4: 0</p>
</li>
<li>
<p><strong>end</strong>\xA0- \u6570\u5B57, \u53EF\u9009, \u9ED8\u8BA4: buffer.length</p>
</li>
</ul>
<p>\u8FD4\u56DE\u503C\uFF1A \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u7F13\u51B2\u533A\uFF0C\u5B83\u548C\u65E7\u7F13\u51B2\u533A\u6307\u5411\u540C\u4E00\u5757\u5185\u5B58\uFF0C\u4F46\u662F\u4ECE\u7D22\u5F15start\u5230end\u7684\u4F4D\u7F6E\u526A\u88C1\u3002</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> buf1 = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;hello world&quot;</span>);
<span class="hljs-comment">// \u526A\u88C1\u7F13\u51B2\u533A</span>
<span class="hljs-keyword">const</span> buf2 = buf1.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>,<span class="hljs-number">2</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;buffer2 content: &quot;</span> + buf2.<span class="hljs-title function_">toString</span>());
</code></pre>
<h4 id="-15" tabindex="-1">\u7F13\u51B2\u533A\u957F\u5EA6 <a class="header-anchor" href="#-15">\xA7</a></h4>
<blockquote>
<p>Node.js\u7F13\u51B2\u533A\u957F\u5EA6\u8BA1\u7B97\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">buf.<span class="hljs-property">length</span>;
</code></pre>
<p>\u8FD4\u56DE\u503C\uFF1A\u8FD4\u56DEBuffer\u5BF9\u8C61\u6240\u5360\u636E\u7684\u5185\u5B58\u957F\u5EA6\u3002</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> buf = <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">from</span>(<span class="hljs-string">&quot;www.hello.com&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;Buffer length: &quot;</span>+buf.<span class="hljs-property">length</span>);
</code></pre>
<h3 id="stream" tabindex="-1">Stream(\u6D41) <a class="header-anchor" href="#stream">\xA7</a></h3>
<blockquote>
<p>Stream\u662F\u4E00\u4E2A\u62BD\u8C61\u63A5\u53E3\uFF0CNode\u4E2D\u6709\u5F88\u591A\u5BF9\u8C61\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u63A5\u53E3\u3002\u4F8B\u5982\uFF0C\u5BF9http\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\u7684request\u5BF9\u8C61\u5C31\u662F\u4E00\u4E2AStream\uFF0C\u8FD8\u6709stdout(\u6807\u51C6\u8F93\u51FA)\u3002</p>
<p>Stream\u6709\u56DB\u79CD\u6D41\u7C7B\u578B\uFF1A</p>
<ul>
<li>
<p><strong>Readable</strong>\xA0- \u53EF\u8BFB\u64CD\u4F5C\u3002</p>
</li>
<li>
<p><strong>Writable</strong>\xA0- \u53EF\u5199\u64CD\u4F5C\u3002</p>
</li>
<li>
<p><strong>Duplex</strong>\xA0- \u53EF\u8BFB\u53EF\u5199\u64CD\u4F5C\u3002</p>
</li>
<li>
<p><strong>Transform</strong>\xA0- \u64CD\u4F5C\u88AB\u5199\u5165\u6570\u636E\uFF0C\u7136\u540E\u8BFB\u51FA\u7ED3\u679C\u3002</p>
</li>
</ul>
<p>Stream\u5BF9\u8C61\u90FD\u662FEventEmitter\u7684\u5B9E\u4F8B\u3002\u5E38\u7528\u7684\u4E8B\u4EF6\u6709\uFF1A</p>
<ul>
<li>
<p><strong>data</strong>\xA0- \u5F53\u6709\u6570\u636E\u53EF\u8BFB\u65F6\u89E6\u53D1\u3002</p>
</li>
<li>
<p><strong>end</strong>\xA0- \u6CA1\u6709\u66F4\u591A\u7684\u6570\u636E\u53EF\u8BFB\u65F6\u89E6\u53D1\u3002</p>
</li>
<li>
<p><strong>error</strong>\xA0- \u5728\u63A5\u6536\u548C\u5199\u5165\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\u65F6\u89E6\u53D1\u3002</p>
</li>
<li>
<p><strong>finish</strong>\xA0- \u6240\u6709\u6570\u636E\u5DF2\u88AB\u5199\u5165\u5230\u5E95\u5C42\u7CFB\u7EDF\u65F6\u89E6\u53D1\u3002</p>
</li>
</ul>
</blockquote>
<h4 id="-16" tabindex="-1">\u4ECE\u6D41\u4E2D\u8BFB\u53D6\u6570\u636E <a class="header-anchor" href="#-16">\xA7</a></h4>
<p>\u8BFB\u53D6test.txt\u4E2D\u5185\u5BB9\uFF0C\u4EE3\u7801(stream-read.js)\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-keyword">var</span> data= <span class="hljs-string">&quot;&quot;</span>;
<span class="hljs-comment">// \u521B\u5EFA\u53EF\u8BFB\u6D41</span>
<span class="hljs-keyword">const</span> reader = fs.<span class="hljs-title function_">createReadStream</span>(<span class="hljs-string">&quot;test.txt&quot;</span>);
<span class="hljs-comment">// \u8BBE\u7F6E\u7F16\u7801\u4E3A utf8</span>
reader.<span class="hljs-title function_">setEncoding</span>(<span class="hljs-string">&quot;UTF8&quot;</span>);
<span class="hljs-comment">// \u5904\u7406\u6D41\u4E8B\u4EF6 --&gt;data,end, and error</span>
reader.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;data&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">chunk</span>){
    data += chunk;
});
<span class="hljs-comment">// \u6D41\u4E8B\u4EF6\u7ED3\u675F</span>
reader.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;end&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(data);
});
<span class="hljs-comment">// \u9519\u8BEF\u5904\u7406</span>
reader.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;error&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err.<span class="hljs-property">stack</span>);
});
</code></pre>
<h4 id="-17" tabindex="-1">\u5199\u5165\u6D41 <a class="header-anchor" href="#-17">\xA7</a></h4>
<p>\u5199\u5165\u5B57\u7B26\u5185\u5BB9\u5230output.txt\uFF0C\u4EE3\u7801(stream-write.js)\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-keyword">const</span> data = <span class="hljs-string">&quot;www.nodejs.org\u7684\u6559\u7A0B&quot;</span>;
<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u5199\u5165\u7684\u6D41\uFF0C\u5199\u5165\u5230\u6587\u4EF6output.txt\u4E2D</span>
<span class="hljs-keyword">const</span> writeStream = fs.<span class="hljs-title function_">createWriteStream</span>(<span class="hljs-string">&quot;output.txt&quot;</span>);
<span class="hljs-comment">// \u4F7F\u7528utf8\u7F16\u7801\u5199\u5165\u6570\u636E</span>
writeStream.<span class="hljs-title function_">write</span>(data,<span class="hljs-string">&#x27;UTF8&#x27;</span>);
<span class="hljs-comment">// \u6807\u8BB0\u6587\u4EF6\u672B\u5C3E</span>
writeStream.<span class="hljs-title function_">end</span>();
<span class="hljs-comment">// \u5904\u7406\u6D41\u4E8B\u4EF6 --&gt; finish\u3001error</span>
writeStream.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;finish&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u5199\u5165\u5B8C\u6210\u3002&quot;</span>);
});
<span class="hljs-comment">// \u6D41\u9519\u8BEF\u5904\u7406</span>
writeStream.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;error&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err.<span class="hljs-property">stack</span>);
});
</code></pre>
<h4 id="-18" tabindex="-1">\u7BA1\u9053\u6D41 <a class="header-anchor" href="#-18">\xA7</a></h4>
<blockquote>
<p>\u7BA1\u9053\u63D0\u4F9B\u4E86\u4E00\u4E2A\u8F93\u51FA\u6D41\u5230\u8F93\u5165\u6D41\u7684\u673A\u5236\u3002\u901A\u5E38\u6211\u4EEC\u7528\u4E8E\u4ECE\u4E00\u4E2A\u6D41\u4E2D\u83B7\u53D6\u6570\u62D3\u5E76\u5C06\u6570\u636E\u4F20\u9012\u5230\u53E6\u5916\u4E00\u4E2A\u6D41\u4E2D\u3002</p>
<img title="" src="./imgs/pipe.png" alt="" width="230">
<p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u6211\u4EEC\u628A\u6587\u4EF6\u6BD4\u4F5C\u88C5\u6C34\u7684\u6876\uFF0C\u800C\u6C34\u5C31\u662F\u6587\u4EF6\u91CC\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u7528\u4E00\u6839\u7BA1\u5B50(pipe)\u8FDE\u63A5\u4E24\u4E2A\u6876\uFF0C\u4F7F\u5F97\u6C34\u4ECE\u4E00\u4E2A\u6876\u6D41\u5165\u5230\u53E6\u5916\u4E00\u4E2A\u6876\u91CC\uFF0C\u8FD9\u6837\u5C31\u6162\u6162\u7684\u5B9E\u73B0\u4E86\u5927\u6587\u4EF6\u7684\u590D\u5236\u8FC7\u7A0B\u3002</p>
</blockquote>
<p>\u4EE3\u7801(stream-pipe.js)\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u53EF\u8BFB\u6D41</span>
<span class="hljs-keyword">const</span> readerStream = fs.<span class="hljs-title function_">createReadStream</span>(<span class="hljs-string">&quot;test.txt&quot;</span>);
<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u53EF\u5199\u6D41</span>
<span class="hljs-keyword">const</span> writerStream = fs.<span class="hljs-title function_">createWriteStream</span>(<span class="hljs-string">&quot;output.txt&quot;</span>);
<span class="hljs-comment">// \u7BA1\u9053\u8BFB\u5199\u64CD\u4F5C \u8BFB\u53D6test.txt\u5185\u5BB9\uFF0C\u5E76\u5C06\u5185\u5BB9\u5199\u5165\u5230output.txt\u6587\u4EF6\u4E2D</span>
readerStream.<span class="hljs-title function_">pipe</span>(writerStream);
</code></pre>
<h4 id="-19" tabindex="-1">\u94FE\u5F0F\u6D41 <a class="header-anchor" href="#-19">\xA7</a></h4>
<blockquote>
<p>\u94FE\u5F0F\u662F\u901A\u8FC7\u8FDE\u63A5\u8F93\u51FA\u6D41\u5230\u53E6\u5916\u4E00\u4E2A\u6D41\u5E76\u521B\u5EFA\u591A\u4E2A\u6D41\u64CD\u4F5C\u94FE\u7684\u673A\u5236\u3002\u94FE\u5F0F\u6D41\u4E00\u822C\u7528\u4E8E\u7BA1\u9053\u64CD\u4F5C\u3002</p>
<p>\u5229\u7528\u7BA1\u9053\u548C\u94FE\u5F0F\u6765\u538B\u7F29\u6587\u4EF6\u548C\u89E3\u538B\u6587\u4EF6\u3002</p>
</blockquote>
<p>\u538B\u7F29\u4EE3\u7801\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-keyword">const</span> zlib = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;zlib&quot;</span>);
<span class="hljs-comment">// \u538B\u7F29 test.txt \u4E3A test.txt.gz</span>
fs.<span class="hljs-title function_">createReadStream</span>(<span class="hljs-string">&quot;test.txt&quot;</span>)
\xA0\xA0\xA0\xA0.<span class="hljs-title function_">pipe</span>(zlib.<span class="hljs-title function_">createGzip</span>())
\xA0\xA0\xA0\xA0.<span class="hljs-title function_">pipe</span>(fs.<span class="hljs-title function_">createWriteStream</span>(<span class="hljs-string">&quot;test.txt.gz&quot;</span>));
</code></pre>
<p>\u89E3\u538B\u4EE3\u7801\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-keyword">const</span> zlib = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;zlib&quot;</span>);
<span class="hljs-comment">// \u89E3\u538B test.txt.gz \u4E3A test.txt</span>
fs.<span class="hljs-title function_">createReadStream</span>(<span class="hljs-string">&quot;test.txt.gz&quot;</span>)
    .<span class="hljs-title function_">pipe</span>(zlib.<span class="hljs-title function_">createGunzip</span>())
    .<span class="hljs-title function_">pipe</span>(fs.<span class="hljs-title function_">createWriteStream</span>(<span class="hljs-string">&quot;test.txt&quot;</span>));
</code></pre>
<h3 id="-20" tabindex="-1">\u6A21\u5757\u7CFB\u7EDF <a class="header-anchor" href="#-20">\xA7</a></h3>
<blockquote>
<p>\u6A21\u5757\u662FNode.js\u5E94\u7528\u7A0B\u5E8F\u7684\u57FA\u672C\u7EC4\u6210\u90E8\u5206\uFF0C\u6587\u4EF6\u548C\u6A21\u5757\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u3002\u5373\u4E00\u4E2ANode.js\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u53EF\u80FD\u662FJavaScript\u4EE3\u7801\u3001JSON\u6216\u8005\u7F16\u8BD1\u8FC7\u7684C/C++\u6269\u5C55\u7B49\u3002</p>
</blockquote>
<h4 id="-21" tabindex="-1">\u5F15\u5165\u6A21\u5757 <a class="header-anchor" href="#-21">\xA7</a></h4>
<p>mods/hello.js\u6A21\u5757\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-built_in">exports</span>.<span class="hljs-property">world</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;Hello World&quot;</span>);
}
</code></pre>
<p>\u5728mods/test.js\u4E2D\u5F15\u5165hello\u6A21\u5757\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> hello = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;./hello&quot;</span>);
hello.<span class="hljs-title function_">world</span>();
</code></pre>
<p>hello.js\u901A\u8FC7exports\u5BF9\u8C61\u628Aworld\u51FD\u6570\u4F5C\u4E3A\u6A21\u5757\u7684\u8BBF\u95EE\u63A5\u53E3\uFF0C\u7136\u540E\u901A\u8FC7require(\u201C./hello\u201D)\u52A0\u8F7D\u8FD9\u4E2A\u6A21\u5757\uFF0C\u5373\u53EF\u76F4\u63A5\u8BBF\u95EEexports\u5BF9\u8C61\u7684\u6210\u5458\u51FD\u6570\u4E86\u3002</p>
<h4 id="-22" tabindex="-1">\u5BF9\u8C61\u6A21\u5757 <a class="header-anchor" href="#-22">\xA7</a></h4>
<p>\u5982\u679C\u5E0C\u671B\u628A\u4E00\u4E2A\u5BF9\u8C61\u5C01\u88C5\u5230\u6A21\u5757\u4E2D\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
    <span class="hljs-comment">// TODO</span>
}
</code></pre>
<p>\u4F8B\u5982(mods/md-hello.js)\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = <span class="hljs-keyword">function</span> <span class="hljs-title function_">Hello</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">var</span> name;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">setName</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params">thyName</span>){
        name = thyName;
    };
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">sayHello</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;Hello &quot;</span>+name);
    };
};
</code></pre>
<p>\u5728(mods/md-test.js)\u4E2D\u5F15\u7528\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title class_">Hello</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;./md-hello&quot;</span>);
<span class="hljs-keyword">const</span> hello = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Hello</span>();
hello.<span class="hljs-title function_">setName</span>(<span class="hljs-string">&quot;By Modules&quot;</span>);
hello.<span class="hljs-title function_">sayHello</span>();
</code></pre>
<h4 id="-23" tabindex="-1">\u5185\u7F6E\u6A21\u5757 <a class="header-anchor" href="#-23">\xA7</a></h4>
<blockquote>
<p>Node.js\u7684\u5185\u7F6E\u6A21\u5757\uFF0C\u4F8B\u5982http\u6A21\u5757\u7B49\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\uFF0C\u53EA\u9700\u5C06\u5B83\u8FD4\u56DE\u503C\u8D4B\u7ED9\u4E00\u4E2A\u672C\u5730\u53D8\u91CF\u3002</p>
</blockquote>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;http&quot;</span>);
...
http.<span class="hljs-title function_">createServer</span>(...);
</code></pre>
<p>Node.js\u7684require\u65B9\u6CD5\u4E2D\u7684\u6587\u4EF6\u67E5\u627E\u7B56\u7565\u5982\u4E0B\uFF1A</p>
<p><img src="./imgs/nodejs-require.jpg" alt="" /></p>
<h4 id="exports-module-exports" tabindex="-1">exports\u548Cmodule.exports <a class="header-anchor" href="#exports-module-exports">\xA7</a></h4>
<blockquote>
<p>\u5982\u679C\u8981\u5BF9\u5916\u66B4\u9732\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u5C31\u7528exports\u5C31\u884C\uFF0C\u8981\u66B4\u9732\u5BF9\u8C61(\u7C7B\u4F3Cclass\uFF0C\u5305\u542B\u5F88\u591A\u5C5E\u6027\u548C\u65B9\u6CD5)\uFF0C\u5C31\u7528module.exports</p>
<p>\u4E0D\u5EFA\u8BAE\u540C\u65F6\u4F7F\u7528exports\u548Cmodule.exports\u3002</p>
<p>\u5982\u679C\u5148\u4F7F\u7528exports\u5BF9\u5916\u66B4\u9732\u5C5E\u6027\u6216\u8005\u65B9\u6CD5\uFF0C\u518D\u4F7F\u7528module.exports\u66B4\u9732\u5BF9\u8C61\uFF0C\u4F1A\u4F7F\u5F97exports\u4E0A\u66B4\u9732\u7684\u5C5E\u6027\u6216\u8005\u65B9\u6CD5\u5931\u6548\u3002</p>
</blockquote>
<h3 id="and" tabindex="-1">\u5168\u5C40\u5BF9\u8C61&amp;\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#and">\xA7</a></h3>
<blockquote>
<p>JavaScript\u4E2D\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u79F0\u4E3A\u5168\u5C40\u5BF9\u8C61\uFF0C\u5B83\u53CA\u5176\u6240\u6709\u5C5E\u6027\u90FD\u53EF\u4EE5\u5728\u7A0B\u5E8F\u7684\u4EFB\u4F55\u5730\u65B9\u8BBF\u95EE\uFF0C\u5373\u5168\u5C40\u53D8\u91CF\u3002</p>
<p>\u5728\u6D4F\u89C8\u5668\u7684JavaScript\u4E2D\uFF0C\u901A\u5E38window\u662F\u5168\u5C40\u5BF9\u8C61\uFF0C\u800CNode.js\u4E2D\u7684\u5168\u5C40\u5BF9\u8C61\u662Fglobal\uFF0C\u5728ECMAScript 2020\u51FA\u73B0\u4E4B\u540E\uFF0C\u5168\u5C40\u53D8\u91CF\u662FglobalThis\uFF0C\u5728Node.js\u73AF\u5883\u4F1A\u81EA\u52A8\u5207\u6362\u6210global,\u6D4F\u89C8\u5668\u73AF\u5883\u81EA\u52A8\u5207\u6362window\u975E\u5E38\u65B9\u4FBF\u3002</p>
</blockquote>
<h4 id="-24" tabindex="-1">\u81EA\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#-24">\xA7</a></h4>
<p>main.js\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">globalThis.<span class="hljs-property">version</span> = <span class="hljs-number">2.0</span>
<span class="hljs-keyword">const</span> <span class="hljs-title class_">Hello</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;hello.js&quot;</span>);
</code></pre>
<p>hello.js\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(globalThis.<span class="hljs-property">version</span>);
}
</code></pre>
<h4 id="-25" tabindex="-1">\u5185\u7F6E\u5168\u5C40\u5BF9\u8C61\u4E0E\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#-25">\xA7</a></h4>
<p><strong>__filename</strong></p>
<blockquote>
<p>\u6267\u884C\u7684\u811A\u672C\u7684\u6587\u4EF6\u540D(\u8F93\u51FA \u6587\u4EF6\u6240\u5728\u7684\u7EDD\u5BF9\u8DEF\u5F84)\u3002</p>
</blockquote>
<p><strong>__dirname</strong></p>
<blockquote>
<p>\u5F53\u524D\u6267\u884C\u811A\u672C\u6240\u5728\u7684\u76EE\u5F55\u3002</p>
</blockquote>
<p><strong>setTimeout(cb,ms)</strong></p>
<blockquote>
<p>\u5728\u6307\u5B9A\u7684\u6BEB\u79D2\u6570(ms)\u540E\u6267\u884C\u6267\u5B9A\u7684\u51FD\u6570(cb)</p>
<p>\u53C2\u6570\u8BF4\u660E</p>
<ul>
<li>
<p>cb \u4E3A\u8981\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570</p>
</li>
<li>
<p>\u6307\u5B9A\u7684\u6BEB\u79D2ms</p>
</li>
</ul>
<p>setTimeout()\u53EA\u6267\u884C\u4E00\u6B21\u6307\u5B9A\u7684\u51FD\u6570</p>
</blockquote>
<p><strong>clearTimeout(t)</strong></p>
<blockquote>
<p>\u7528\u4E8E\u505C\u6B62\u4E4B\u524D\u521B\u5EFA\u7684\u5B9A\u65F6\u5668\u3002</p>
<p>\u53C2\u6570\u8BF4\u660E</p>
<ul>
<li>t \u5B9A\u65F6\u5668\u8FD4\u56DE\u7684\u53E5\u67C4</li>
</ul>
</blockquote>
<p>time.js\u4EE3\u7801\u5B9E\u4F8B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">printHello</span>(<span class="hljs-params"></span>){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;Hello World!&quot;</span>);
}
<span class="hljs-comment">// \u4E24\u79D2\u540E\u6267\u884C</span>
<span class="hljs-keyword">let</span> t = <span class="hljs-built_in">setTimeout</span>(printHello,<span class="hljs-number">2000</span>);
<span class="hljs-comment">// \u6E05\u9664\u5B9A\u65F6\u5668</span>
<span class="hljs-built_in">clearTimeout</span>(t);
</code></pre>
<p><strong>setInterval(cb, ms)</strong></p>
<blockquote>
<p>\u4E0EsetTimeout\u4E0D\u540C\u662F\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u4E0D\u505C\u5730\u8C03\u7528\u51FD\u6570\uFF0C\u76F4\u5230clearInterval()\u88AB\u8C03\u7528\u6216\u7A97\u53E3\u88AB\u5173\u95ED\u3002</p>
<p>\u53C2\u6570\u540CsetTimeout</p>
</blockquote>
<p><strong>clearInterval(t)</strong></p>
<blockquote>
<p>\u6E05\u9664setInterval\u5B9A\u65F6\u5668</p>
<ul>
<li>t setInterval\u5B9A\u65F6\u5668\u53E5\u67C4</li>
</ul>
</blockquote>
<p><strong>console</strong></p>
<blockquote>
<p>console\u7528\u4E8E\u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA\uFF0CNode.js\u6CBF\u7528\u6D4F\u89C8\u5668\u7684\u5B9E\u65BD\u6807\u51C6\u3002</p>
<p><strong>console.log(data)</strong>  \u8F93\u51FA\u5B57\u7B26\u4E32\uFF0C\u53EF\u63A5\u6536\u82E5\u5E72\u53C2\u6570\u3002</p>
<p><strong><a href="http://console.info">console.info</a>(data)</strong> \u4E0Econsole.log\u5DEE\u522B\u4E0D\u5927\uFF0C\u8FD4\u56DE\u4FE1\u606F\u6027\u6D88\u606F\u3002</p>
<p><strong>console.error(data)</strong> \u8F93\u51FA\u9519\u8BEF\u4FE1\u606F\u3002</p>
<p><strong>console.warn(data)</strong> \u8F93\u51FA\u8B66\u544A\u4FE1\u606F\u3002</p>
<p><strong>console.dir(obj[,options])</strong> \u7528\u6765\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u8FDB\u884C\u68C0\u67E5\uFF0C\u5E76\u4EE5\u6613\u4E8E\u9605\u8BFB\u548C\u6253\u5370\u7684\u683C\u5F0F\u663E\u793A\u3002</p>
<p><strong>console.trace(message[,\u2026])</strong> \u5F53\u524D\u6267\u884C\u7684\u4EE3\u7801\u5728\u5806\u6808\u4E2D\u7684\u8C03\u7528\u8DEF\u5F84\uFF0C\u8FD9\u4E2A\u6D4B\u8BD5\u51FD\u6570\u8FD0\u884C\u5F88\u6709\u5E2E\u52A9\uFF0C\u53EA\u8981\u7ED9\u60F3\u6D4B\u8BD5\u7684\u51FD\u6570\u52A0\u5165console.trace\u5C31\u884C\u3002</p>
<p><strong>console.assert(value[,message][,\u2026])</strong> \u7528\u4E8E\u5224\u65AD\u67D0\u4E2A\u8868\u8FBE\u5F0F\u6216\u53D8\u91CF\u662F\u5426\u4E3A\u771F\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u548C\u662F\u8868\u8FBE\u5F0F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5B57\u7B26\u4E32\u3002\u53EA\u6709\u5F53\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3Afalse,\u624D\u4F1A\u8F93\u51FA\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5426\u5219\u4E0D\u4F1A\u6709\u4EFB\u4F55\u7ED3\u679C\u3002</p>
</blockquote>
<p><strong>process</strong></p>
<blockquote>
<p>process\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u5373global\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p>
<p>\u5B83\u7528\u4E8E\u63CF\u8FF0\u5F53\u524DNode.js\u8FDB\u7A0B\u72B6\u6001\u7684\u5BF9\u8C61\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7B80\u5355\u63A5\u53E3\u3002</p>
</blockquote>
<p>\u4E8B\u4EF6\u65B9\u6CD5\uFF1A</p>
<blockquote>
<p>exit** \u5F53\u8FDB\u7A0B\u51C6\u5907\u9000\u51FA\u65F6\u89E6\u53D1\u3002</p>
<p><strong>beforeExit</strong> \u5F53node\u6E05\u7A7A\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5E76\u4E14\u6CA1\u6709\u5176\u4ED6\u5B89\u6392\u65F6\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6\u3002\u5F53\u6CA1\u6709\u8FDB\u7A0B\u5B89\u6392\u65F6node\u9000\u51FA\uFF0C\u4F46\u662FbeforeExit\u7684\u76D1\u542C\u5668\u53EF\u4EE5\u5F02\u6B65\u8C03\u7528\uFF0C\u8FD9\u6837node\u5C31\u4F1A\u7EE7\u7EED\u6267\u884C\u3002</p>
<p><strong>uncaughtException</strong> \u5F53\u4E00\u4E2A\u5F02\u5E38\u5192\u6CE1\u56DE\u5230\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6\u3002\u5982\u679C\u7ED9\u5F02\u5E38\u6DFB\u52A0\u4E86\u76D1\u542C\u5668\uFF0C\u9ED8\u8BA4\u7684\u64CD\u4F5C(\u6253\u5370\u5806\u6808\u8DDF\u8E2A\u4FE1\u606F\u5E76\u9000\u51FA)\u5C31\u4E0D\u4F1A\u53D1\u751F\u3002</p>
<p><strong>Signal\u4E8B\u4EF6</strong> \u5F53\u8FDB\u7A0B\u63A5\u6536\u5230\u4FE1\u53F7\u65F6\u5C31\u89E6\u53D1\u3002</p>
</blockquote>
<p>main.js\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">process.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#x27;exit&#x27;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">code</span>){
    <span class="hljs-comment">// \u4E0D\u4F1A\u6267\u884C</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;never&quot;</span>);
    },<span class="hljs-number">0</span>);

    <span class="hljs-comment">// \u9000\u51FA\u4E1A\u52A1\u903B\u8F91\u5904\u7406</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u9000\u51FA\u4EE3\u7801\uFF1A&quot;</span>,code);
});
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u7A0B\u5E8F\u6267\u884C\u7ED3\u675F&quot;</span>);
</code></pre>
<p>\u6267\u884Cmain.js\u6587\u4EF6\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">node main.js
\u7A0B\u5E8F\u6267\u884C\u7ED3\u675F
\u9000\u51FA\u7801
</code></pre>
<p><strong>\u5E38\u7528\u5C5E\u6027\u6216\u65B9\u6CD5</strong></p>
<blockquote>
<p>stdout  \u6807\u51C6\u8F93\u51FA\u6D41\u3002</p>
<p>stderr   \u6807\u51C6\u9519\u8BEF\u6D41\u3002</p>
<p>stdin     \u6807\u51C6\u8F93\u5165\u6D41\u3002</p>
<p>argv    \u8FD4\u56DE\u547D\u4EE4\u884C\u53C2\u6570\u7684\u6570\u7EC4\u3002</p>
<p>execPath   \u8FD4\u56DE\u6267\u884C\u5F53\u524D\u811A\u672C\u7684 Node \u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</p>
<p>execArgv   \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u547D\u4EE4\u884C\u4E0B\u6267\u884C\u811A\u672C\u65F6\uFF0C\u5728Node\u53EF\u6267\u884C\u6587\u4EF6\u4E0E\u811A\u672C\u6587\u4EF6\u4E4B\u95F4\u7684\u547D\u4EE4\u884C\u53C2\u6570\u3002</p>
<p>env\xA0\xA0\xA0\xA0\xA0\u8FD4\u56DE\u5F53\u524D\u73AF\u5883\u53D8\u91CF\u7684\u5BF9\u8C61\u3002</p>
<p>exitCode   \u8FDB\u7A0B\u9000\u51FA\u65F6\u7684\u4EE3\u7801\uFF0C\u5982\u679C\u8FDB\u7A0B\u4F18\u901A\u8FC7 process.exit() \u9000\u51FA\uFF0C\u4E0D\u9700\u8981\u6307\u5B9A\u9000\u51FA\u7801\u3002</p>
<p>version    Node \u7684\u7248\u672C\u3002</p>
<p>cwd()  \u8FD4\u56DE\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u8DEF\u5F84\u3002</p>
<p>pid      \u8FD4\u56DE\u5F53\u524D\u8FDB\u7A0B\u7684PID(\u8FDB\u7A0BID)\u3002</p>
<p>title     \u8FDB\u7A0B\u540D\uFF0C\u9ED8\u8BA4\u503C\u4E3A&quot;node&quot;\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8BE5\u503C\u3002</p>
<p>arch   \u5F53\u524D CPU \u7684\u67B6\u6784\uFF1A\u2018arm\u2019\u3001\u2018ia32\u2019 \u6216\u8005 \u2018x64\u2019\u3002</p>
<p>platform   \u8FD0\u884C\u7A0B\u5E8F\u6240\u5728\u7684\u5E73\u53F0\u7CFB\u7EDF \u2018darwin\u2019, \u2018freebsd\u2019, \u2018linux\u2019, \u2018sunos\u2019 \u6216 \u2018win32\u2019\u3002</p>
<p>exit([code])  \u9000\u51FA\u5F53\u524D\u7684Node.js\u8FDB\u7A0B\u3002\u60A8\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u53EF\u9009\u7684\u9000\u51FA\u7801\u4F5C\u4E3A\u53C2\u6570\u3002</p>
</blockquote>
<p>\u4EE3\u7801(process-alt.js)\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">// \u8F93\u51FA\u5230\u7EC8\u7AEF</span>
process.<span class="hljs-property">stdout</span>.<span class="hljs-title function_">write</span>(<span class="hljs-string">&quot;Hello World!&quot;</span> + <span class="hljs-string">&quot;\\n&quot;</span>);
<span class="hljs-comment">// \u901A\u8FC7\u53C2\u6570\u8BFB\u53D6</span>
process.<span class="hljs-property">argv</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">val, index, array</span>) {
   <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(index + <span class="hljs-string">&#x27;: &#x27;</span> + val);
});
<span class="hljs-comment">// \u83B7\u53D6\u6267\u884C\u8DEF\u5F84</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(process.<span class="hljs-property">execPath</span>);
<span class="hljs-comment">// \u5E73\u53F0\u4FE1\u606F</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(process.<span class="hljs-property">platform</span>);
</code></pre>
<p>\u6267\u884Cprocess-alt.js\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-meta prompt_">$ </span><span class="language-bash">node process-alt.js</span>
Hello World!
0: node
1: /web/www/node/process-alt.js
/usr/local/node/0.10.36/bin/node
darwin
</code></pre>
<h3 id="-26" tabindex="-1">\u5DE5\u5177\u6A21\u5757 <a class="header-anchor" href="#-26">\xA7</a></h3>
<h4 id="util" tabindex="-1">util\u5DE5\u5177 <a class="header-anchor" href="#util">\xA7</a></h4>
<blockquote>
<p>util\u662F\u4E00\u4E2ANode.js\u6838\u5FC3\u6A21\u5757\uFF0C\u63D0\u4F9B\u5E38\u7528\u51FD\u6570\u96C6\u5408\uFF0C\u7528\u4E8E\u5F25\u8865\u6838\u5FC3JavaScript\u7684\u529F\u80FD\u8FC7\u4E8E\u7CBE\u7B80\u7684\u4E0D\u8DB3\u3002</p>
</blockquote>
<p><strong>util.isArray(object)</strong></p>
<p>\u7ED9\u5B9A\u7684\u53C2\u6570object\u662F\u4E00\u4E2A\u6570\u7EC4\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> util = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;util&quot;</span>);
util.<span class="hljs-title function_">isArray</span>([]); <span class="hljs-comment">// true</span>
util.<span class="hljs-title function_">isArray</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>); <span class="hljs-comment">// true</span>
util.<span class="hljs-title function_">isArray</span>({}); <span class="hljs-comment">//false</span>
</code></pre>
<p><strong>util.isRegExp(object)</strong></p>
<p>\u7ED9\u5B9A\u7684\u53C2\u6570object\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DE flase\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> util = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;util&quot;</span>);
util.<span class="hljs-title function_">isRegExp</span>(<span class="hljs-regexp">/some regexp/</span>); <span class="hljs-comment">// true</span>
util.<span class="hljs-title function_">isRegExp</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">RegExp</span>(<span class="hljs-string">&#x27;another regexp&#x27;</span>); <span class="hljs-comment">// true</span>
util.<span class="hljs-title function_">isRegExp</span>({});  <span class="hljs-comment">// false</span>
</code></pre>
<p><strong>util.isDate(object)</strong></p>
<p>\u7ED9\u5B9A\u7684\u53C2\u6570object\u662F\u4E00\u4E2A\u65E5\u671F\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> util = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;util&quot;</span>);
util.<span class="hljs-title function_">isDate</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>()); <span class="hljs-comment">// true</span>
util.<span class="hljs-title function_">isDate</span>(<span class="hljs-title class_">Date</span>()); <span class="hljs-comment">// false (without &#x27;new&#x27; returns a String)</span>
util.<span class="hljs-title function_">isDate</span>({}); <span class="hljs-comment">// false</span>
</code></pre>
<h4 id="os" tabindex="-1">OS\u6A21\u5757 <a class="header-anchor" href="#os">\xA7</a></h4>
<blockquote>
<p>Node.js OS\u6A21\u5757\u63D0\u4F9B\u4E86\u4E00\u4E9B\u57FA\u672C\u7684\u7CFB\u7EDF\u64CD\u4F5C\u51FD\u6570\u3002\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5F15\u5165\u6A21\u5757\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> os = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;os&quot;</span>)
</code></pre>
<p>\u65B9\u6CD5\uFF1A</p>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>os.tmpdir()</td>
<td>\u8FD4\u56DE\u64CD\u4F5C\u7CFB\u7EDF\u7684\u9ED8\u8BA4\u4E34\u65F6\u6587\u4EF6\u5939\u3002</td>
</tr>
<tr>
<td>os.endianness()</td>
<td>\u8FD4\u56DE CPU \u7684\u5B57\u8282\u5E8F\uFF0C\u53EF\u80FD\u7684\u662F \u201CBE\u201D \u6216 \u201CLE\u201D\u3002</td>
</tr>
<tr>
<td>os.hostname()</td>
<td>\u8FD4\u56DE\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E3B\u673A\u540D\u3002</td>
</tr>
<tr>
<td>os.type()</td>
<td>\u8FD4\u56DE\u64CD\u4F5C\u7CFB\u7EDF\u540D</td>
</tr>
<tr>
<td>os.platform()</td>
<td>\u8FD4\u56DE\u7F16\u8BD1\u65F6\u7684\u64CD\u4F5C\u7CFB\u7EDF\u540D</td>
</tr>
<tr>
<td>os.arch()</td>
<td>\u8FD4\u56DE\u64CD\u4F5C\u7CFB\u7EDF CPU \u67B6\u6784\uFF0C\u53EF\u80FD\u7684\u503C\u6709 \u201Cx64\u201D\u3001\u201Carm\u201D \u548C \u201Cia32\u201D\u3002</td>
</tr>
<tr>
<td>os.release()</td>
<td>\u8FD4\u56DE\u64CD\u4F5C\u7CFB\u7EDF\u7684\u53D1\u884C\u7248\u672C\u3002</td>
</tr>
<tr>
<td>os.uptime()</td>
<td>\u8FD4\u56DE\u64CD\u4F5C\u7CFB\u7EDF\u8FD0\u884C\u7684\u65F6\u95F4\uFF0C\u4EE5\u79D2\u4E3A\u5355\u4F4D\u3002</td>
</tr>
<tr>
<td>os.loadavg()</td>
<td>\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B 1\u30015\u300115 \u5206\u949F\u5E73\u5747\u8D1F\u8F7D\u7684\u6570\u7EC4\u3002</td>
</tr>
<tr>
<td>os.totalmem()</td>
<td>\u8FD4\u56DE\u7CFB\u7EDF\u5185\u5B58\u603B\u91CF\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\u3002</td>
</tr>
<tr>
<td>os.freemem()</td>
<td>\u8FD4\u56DE\u64CD\u4F5C\u7CFB\u7EDF\u7A7A\u95F2\u5185\u5B58\u91CF\uFF0C\u5355\u4F4D\u662F\u5B57\u8282\u3002</td>
</tr>
<tr>
<td>os.cpus()</td>
<td>\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5305\u542B\u6240\u5B89\u88C5\u7684\u6BCF\u4E2A CPU/\u5185\u6838\u7684\u4FE1\u606F\uFF1A\u578B\u53F7\u3001\u901F\u5EA6\uFF08\u5355\u4F4D MHz\uFF09\u3001\u65F6\u95F4\uFF08\u4E00\u4E2A\u5305\u542B user\u3001nice\u3001sys\u3001idle \u548C irq \u6240\u4F7F\u7528 CPU/\u5185\u6838\u6BEB\u79D2\u6570\u7684\u5BF9\u8C61\uFF09\u3002</td>
</tr>
<tr>
<td>os.networkInterfaces()</td>
<td>\u83B7\u5F97\u7F51\u7EDC\u63A5\u53E3\u5217\u8868\u3002</td>
</tr>
</tbody>
</table>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> os = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;os&quot;</span>);
<span class="hljs-comment">// CPU \u7684\u5B57\u8282\u5E8F</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;endianness : &#x27;</span> + os.<span class="hljs-title function_">endianness</span>());
<span class="hljs-comment">// \u64CD\u4F5C\u7CFB\u7EDF\u540D</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;type : &#x27;</span> + os.<span class="hljs-title function_">type</span>());
<span class="hljs-comment">// \u64CD\u4F5C\u7CFB\u7EDF\u540D</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;platform : &#x27;</span> + os.<span class="hljs-title function_">platform</span>());
<span class="hljs-comment">// \u7CFB\u7EDF\u5185\u5B58\u603B\u91CF</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;total memory : &#x27;</span> + os.<span class="hljs-title function_">totalmem</span>() + <span class="hljs-string">&quot; bytes.&quot;</span>);
<span class="hljs-comment">// \u64CD\u4F5C\u7CFB\u7EDF\u7A7A\u95F2\u5185\u5B58\u91CF</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;free memory : &#x27;</span> + os.<span class="hljs-title function_">freemem</span>() + <span class="hljs-string">&quot; bytes.&quot;</span>);
</code></pre>
<h4 id="path" tabindex="-1">Path\u6A21\u5757 <a class="header-anchor" href="#path">\xA7</a></h4>
<blockquote>
<p>Node.js path\u6A21\u5757\u63D0\u4F9B\u4E86\u4E00\u4E9B\u7528\u4E8E\u5904\u7406\u6587\u4EF6\u8DEF\u5F84\u7684\u5C0F\u5DE5\u5177\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5F15\u5165\u6A21\u5757</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;path&quot;</span>)
</code></pre>
<p><strong>\u5C5E\u6027\uFF1A</strong></p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u65B9\u6CD5</th>
</tr>
</thead>
<tbody>
<tr>
<td>path.sep</td>
<td>\u5E73\u53F0\u7684\u6587\u4EF6\u8DEF\u5F84\u5206\u9694\u7B26\uFF0C\u2018\\\u2019 \u6216 \u2018/\u2019\u3002</td>
</tr>
<tr>
<td>path.delimiter</td>
<td>\u5E73\u53F0\u7684\u5206\u9694\u7B26, ; or \u2018:\u2019.</td>
</tr>
<tr>
<td>path.posix</td>
<td>\u63D0\u4F9B\u4E0A\u8FF0 path \u7684\u65B9\u6CD5\uFF0C\u4E0D\u8FC7\u603B\u662F\u4EE5 posix \u517C\u5BB9\u7684\u65B9\u5F0F\u4EA4\u4E92\u3002</td>
</tr>
<tr>
<td>path.win32</td>
<td>\u63D0\u4F9B\u4E0A\u8FF0 path \u7684\u65B9\u6CD5\uFF0C\u4E0D\u8FC7\u603B\u662F\u4EE5 win32 \u517C\u5BB9\u7684\u65B9\u5F0F\u4EA4\u4E92\u3002</td>
</tr>
</tbody>
</table>
<p><strong>\u65B9\u6CD5\uFF1A</strong></p>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>path.normalize(p)</td>
<td>\u8F93\u51FA\u89C4\u8303\u683C\u5F0F\u7684path\u5B57\u7B26\u4E32\u3002</td>
</tr>
<tr>
<td>path.join([path1][, path2][, \u2026])</td>
<td>\u7528\u4E8E\u8FDE\u63A5\u8DEF\u5F84\u3002\u8BE5\u65B9\u6CD5\u7684\u4E3B\u8981\u7528\u9014\u5728\u4E8E\uFF0C\u4F1A\u6B63\u786E\u4F7F\u7528\u5F53\u524D\u7CFB\u7EDF\u7684\u8DEF\u5F84\u5206\u9694\u7B26\uFF0CUnix\u7CFB\u7EDF\u662F&quot;/\u201C\uFF0CWindows\u7CFB\u7EDF\u662F\u201D&quot;\u3002</td>
</tr>
<tr>
<td>path.resolve([from \u2026], to)</td>
<td>\u5C06 to \u53C2\u6570\u89E3\u6790\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u7ED9\u5B9A\u7684\u8DEF\u5F84\u7684\u5E8F\u5217\u662F\u4ECE\u53F3\u5F80\u5DE6\u88AB\u5904\u7406\u7684\uFF0C\u540E\u9762\u6BCF\u4E2A path \u88AB\u4F9D\u6B21\u89E3\u6790\uFF0C\u76F4\u5230\u6784\u9020\u5B8C\u6210\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u3002 \u4F8B\u5982\uFF0C\u7ED9\u5B9A\u7684\u8DEF\u5F84\u7247\u6BB5\u7684\u5E8F\u5217\u4E3A\uFF1A/foo\u3001/bar\u3001baz\uFF0C\u5219\u8C03\u7528 path.resolve(\u2018/foo\u2019, \u2018/bar\u2019, \u2018baz\u2019) \u4F1A\u8FD4\u56DE /bar/baz\u3002</td>
</tr>
<tr>
<td>path.isAbsolute(path)</td>
<td>\u5224\u65AD\u53C2\u6570 path \u662F\u5426\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002</td>
</tr>
<tr>
<td>path.relative(from, to)</td>
<td>\u7528\u4E8E\u5C06\u7EDD\u5BF9\u8DEF\u5F84\u8F6C\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u8FD4\u56DE\u4ECE from \u5230 to \u7684\u76F8\u5BF9\u8DEF\u5F84\uFF08\u57FA\u4E8E\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\uFF09\u3002</td>
</tr>
<tr>
<td>path.dirname(p)</td>
<td>\u8FD4\u56DE\u8DEF\u5F84\u4E2D\u4EE3\u8868\u6587\u4EF6\u5939\u7684\u90E8\u5206\uFF0C\u540C Unix \u7684dirname \u547D\u4EE4\u7C7B\u4F3C\u3002</td>
</tr>
<tr>
<td>path.basename(p[, ext])</td>
<td>\u8FD4\u56DE\u8DEF\u5F84\u4E2D\u7684\u6700\u540E\u4E00\u90E8\u5206\u3002\u540C Unix \u547D\u4EE4 bashname \u7C7B\u4F3C\u3002</td>
</tr>
<tr>
<td>path.extname(p)</td>
<td>\u8FD4\u56DE\u8DEF\u5F84\u4E2D\u6587\u4EF6\u7684\u540E\u7F00\u540D\uFF0C\u5373\u8DEF\u5F84\u4E2D\u6700\u540E\u4E00\u4E2A\u2019.\u2018\u4E4B\u540E\u7684\u90E8\u5206\u3002\u5982\u679C\u4E00\u4E2A\u8DEF\u5F84\u4E2D\u5E76\u4E0D\u5305\u542B\u2019.\u2018\u6216\u8BE5\u8DEF\u5F84\u53EA\u5305\u542B\u4E00\u4E2A\u2019.\u2019 \u4E14\u8FD9\u4E2A\u2019.'\u4E3A\u8DEF\u5F84\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5219\u6B64\u547D\u4EE4\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002</td>
</tr>
<tr>
<td>path.parse(pathString)</td>
<td>\u8FD4\u56DE\u8DEF\u5F84\u5B57\u7B26\u4E32\u7684\u5BF9\u8C61\u3002</td>
</tr>
<tr>
<td>path.format(pathObject)</td>
<td>\u4ECE\u5BF9\u8C61\u4E2D\u8FD4\u56DE\u8DEF\u5F84\u5B57\u7B26\u4E32\uFF0C\u548C path.parse \u76F8\u53CD\u3002</td>
</tr>
</tbody>
</table>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;path&quot;</span>);
<span class="hljs-comment">// \u683C\u5F0F\u5316\u8DEF\u5F84</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;normalization : &#x27;</span> + path.<span class="hljs-title function_">normalize</span>(<span class="hljs-string">&#x27;/test/test1//2slashes/1slash/tab/..&#x27;</span>));
<span class="hljs-comment">// \u8FDE\u63A5\u8DEF\u5F84</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;joint path : &#x27;</span> + path.<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;/test&#x27;</span>, <span class="hljs-string">&#x27;test1&#x27;</span>, <span class="hljs-string">&#x27;2slashes/1slash&#x27;</span>, <span class="hljs-string">&#x27;tab&#x27;</span>, <span class="hljs-string">&#x27;..&#x27;</span>));
<span class="hljs-comment">// \u8F6C\u6362\u4E3A\u7EDD\u5BF9\u8DEF\u5F84</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;resolve : &#x27;</span> + path.<span class="hljs-title function_">resolve</span>(<span class="hljs-string">&#x27;main.js&#x27;</span>));
<span class="hljs-comment">// \u8DEF\u5F84\u4E2D\u6587\u4EF6\u7684\u540E\u7F00\u540D</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;ext name : &#x27;</span> + path.<span class="hljs-title function_">extname</span>(<span class="hljs-string">&#x27;main.js&#x27;</span>));
</code></pre>
<h3 id="http" tabindex="-1">http\u6A21\u5757 <a class="header-anchor" href="#http">\xA7</a></h3>
<h4 id="url" tabindex="-1">\u83B7\u53D6URL\u8DEF\u5F84 <a class="header-anchor" href="#url">\xA7</a></h4>
<blockquote>
<p>\u83B7\u53D6URL\u8DEF\u5F84\uFF0C\u9700\u8981\u5185\u7F6E\u6A21\u5757http,\u4EE5\u53CAurl\u6A21\u5757\uFF0C\u4EE5\u4E0B\u662F\u4EE3\u7801\u5B9E\u4F8B</p>
</blockquote>
<p>\u4EE3\u7801\u6587\u4EF6\uFF1Ahttp-url.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;http&quot;</span>);
<span class="hljs-keyword">const</span> url = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;url&quot;</span>);
http.<span class="hljs-title function_">createServer</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">req,res</span>){
    <span class="hljs-keyword">let</span> urls = url.<span class="hljs-title function_">parse</span>(req.<span class="hljs-property">url</span>);
    <span class="hljs-keyword">let</span> pathname = urls.<span class="hljs-property">pathname</span>;
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(pathname); <span class="hljs-comment">//\u6253\u5370URL\u8DEF\u5F84</span>
    res.<span class="hljs-title function_">writeHead</span>(<span class="hljs-number">200</span>,{<span class="hljs-string">&quot;Content-Type&quot;</span>: <span class="hljs-string">&quot;text/plain&quot;</span>});
    res.<span class="hljs-title function_">write</span>(pathname);
    res.<span class="hljs-title function_">end</span>();
}).<span class="hljs-title function_">listen</span>(<span class="hljs-number">8888</span>);
</code></pre>
<p>\u547D\u4EE4\u884C\u6267\u884C</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">node http-url.js
</code></pre>
<p>\u53EF\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE<a href="http://localhost:8888/start%EF%BC%8C%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E4%B8%BA/start%E3%80%82">http://localhost:8888/start\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4E3A/start\u3002</a></p>
<h4 id="url-1" tabindex="-1">\u83B7\u53D6url\u53C2\u6570 <a class="header-anchor" href="#url-1">\xA7</a></h4>
<blockquote>
<p>\u83B7\u53D6url\u53C2\u6570\uFF0C\u9700\u8981\u5185\u7F6E\u6A21\u5757querystring\uFF0C\u4EE5\u4E0B\u662F\u4EE3\u7801\u5B9E\u4F8B</p>
</blockquote>
<p>\u4EE3\u7801\u6587\u4EF6\uFF1Ahttp-query.js</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;http&quot;</span>);
<span class="hljs-keyword">const</span> url = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;url&quot;</span>);
<span class="hljs-keyword">const</span> querystring = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;querystring&quot;</span>);

http.<span class="hljs-title function_">createServer</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">req,res</span>){
    <span class="hljs-keyword">let</span> urls = url.<span class="hljs-title function_">parse</span>(req.<span class="hljs-property">url</span>);
    <span class="hljs-keyword">let</span> pathname = urls.<span class="hljs-property">pathname</span>;
    <span class="hljs-comment">// console.log(pathname);</span>
    <span class="hljs-keyword">let</span> params = querystring.<span class="hljs-title function_">parse</span>(urls.<span class="hljs-property">query</span>);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(params);
    res.<span class="hljs-title function_">writeHead</span>(<span class="hljs-number">200</span>,{<span class="hljs-string">&quot;Content-Type&quot;</span>: <span class="hljs-string">&quot;text/plain&quot;</span>});
    res.<span class="hljs-title function_">write</span>(params);
    res.<span class="hljs-title function_">end</span>();
}).<span class="hljs-title function_">listen</span>(<span class="hljs-number">8888</span>);
</code></pre>
<p>\u547D\u4EE4\u884C\u6267\u884C</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">node http-query.js
</code></pre>
<p>\u53EF\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE<a href="http://localhost:8888/start?foo=bar&amp;hello=world%EF%BC%8C%E5%8F%AF%E5%9C%A8%E5%91%BD%E4%BB%A4%E4%B8%8B%E6%9F%A5%E7%9C%8B%E5%8F%82%E6%95%B0%E6%95%B0%E7%BB%84">http://localhost:8888/start?foo=bar&amp;hello=world\uFF0C\u53EF\u5728\u547D\u4EE4\u4E0B\u67E5\u770B\u53C2\u6570\u6570\u7EC4</a></p>
<h4 id="-27" tabindex="-1">\u57FA\u4E8E\u4E8B\u4EF6\u9A71\u52A8\u7684\u8DEF\u7531\u5B9E\u4F8B <a class="header-anchor" href="#-27">\xA7</a></h4>
<blockquote>
<p>\u6839\u636E\u524D\u9762\u8BB2\u7684EventEmitter\u4E8B\u4EF6\u9A71\u52A8\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5199\u4E00\u4E2A\u7B80\u5355\u7684web\u6846\u67B6\u3002</p>
</blockquote>
<p>\u4EE3\u7801(http-router.js)\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;http&quot;</span>);
<span class="hljs-keyword">const</span> events = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;events&quot;</span>);
<span class="hljs-comment">// \u521B\u5EFAeventEmitter\u5BF9\u8C61</span>
<span class="hljs-keyword">const</span> eventEmitter = <span class="hljs-keyword">new</span> events.<span class="hljs-title class_">EventEmitter</span>();
<span class="hljs-comment">// route \u6839\u8DEF\u5F84</span>
eventEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;/&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">method,response</span>){
    response.<span class="hljs-title function_">writeHead</span>(<span class="hljs-number">200</span>,{<span class="hljs-string">&#x27;Content-Type&#x27;</span>: <span class="hljs-string">&#x27;text/plain&#x27;</span>});
    response.<span class="hljs-title function_">end</span>(<span class="hljs-string">&quot;Hello World&quot;</span>);
});
<span class="hljs-comment">// route 404</span>
eventEmitter.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;404&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">method,url,response</span>){
    response.<span class="hljs-title function_">writeHead</span>(<span class="hljs-number">404</span>,{<span class="hljs-string">&#x27;Content-Type&#x27;</span>: <span class="hljs-string">&#x27;text/plain&#x27;</span>});
    response.<span class="hljs-title function_">end</span>(<span class="hljs-string">&quot;404 Not Found&quot;</span>);
});
<span class="hljs-comment">//\u542F\u52A8\u670D\u52A1</span>
http.<span class="hljs-title function_">createServer</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">request,response</span>){
    <span class="hljs-comment">//\u6253\u5370\u5F53\u524D\u7684url</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(request.<span class="hljs-property">url</span>);
    <span class="hljs-comment">// \u5206\u53D1\u4E8B\u4EF6</span>
    <span class="hljs-keyword">if</span>(eventEmitter.<span class="hljs-title function_">listenerCount</span>(request.<span class="hljs-property">url</span>)&gt;<span class="hljs-number">0</span>){
        eventEmitter.<span class="hljs-title function_">emit</span>(request.<span class="hljs-property">url</span>,request.<span class="hljs-property">method</span>,response);
    }<span class="hljs-keyword">else</span>{
        eventEmitter.<span class="hljs-title function_">emit</span>(<span class="hljs-string">&quot;404&quot;</span>,request.<span class="hljs-property">method</span>,request.<span class="hljs-property">url</span>,response);
    }
}).<span class="hljs-title function_">listen</span>(<span class="hljs-number">8000</span>);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;Server running at http://127.0.0.1:8000&quot;</span>);
</code></pre>
<p>\u547D\u4EE4\u884C\u6267\u884C</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">node http-router.js
</code></pre>
<p>\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF1A</p>
<p><a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> \u8FD4\u56DE\u7ED3\u679C: Hello World</p>
<p><a href="http://127.0.0.1:8000/not">http://127.0.0.1:8000/not</a> \u8FD4\u56DE\u7ED3\u679C\uFF1A404 Not Found</p>
<h3 id="-28" tabindex="-1">\u6587\u4EF6\u7CFB\u7EDF <a class="header-anchor" href="#-28">\xA7</a></h3>
<blockquote>
<p>Node.js\u63D0\u4F9B\u4E00\u7EC4\u7C7B\u4F3CUNIX(POSIX)\u6807\u51C6\u7684\u6587\u4EF6\u64CD\u4F5CAPI\u3002Node\u5BFC\u5165\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757fs\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
</code></pre>
</blockquote>
<h4 id="-29" tabindex="-1">\u5F02\u6B65\u548C\u540C\u6B65 <a class="header-anchor" href="#-29">\xA7</a></h4>
<blockquote>
<p>Node.js\u6587\u4EF6\u7CFB\u7EDF(fs\u6A21\u5757)\u6A21\u5757\u4E2D\u7684\u65B9\u6CD5\u5747\u6709\u5F02\u6B65\u548C\u540C\u6B65\u7248\u672C\uFF0C\u4F8B\u5982\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u7684\u51FD\u6570\u6709\u5F02\u6B65\u7684fs.readFile()\u548C\u540C\u6B65\u7684fs.readFileSync()\u3002</p>
<p>\u5EFA\u8BAE\u5927\u5BB6\u4F7F\u7528\u5F02\u6B65\u65B9\u6CD5\uFF0C\u6BD4\u8D77\u540C\u6B65\uFF0C\u5F02\u6B65\u65B9\u6CD5\u6027\u80FD\u66F4\u9AD8\uFF0C\u901F\u5EA6\u66F4\u5FEB\uFF0C\u800C\u4E14\u6CA1\u6709\u963B\u585E\u3002</p>
</blockquote>
<p>\u5B9E\u4F8Bfile-demo1.js\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);

<span class="hljs-comment">// \u5F02\u6B65\u8BFB\u53D6</span>
fs.<span class="hljs-title function_">readFile</span>(<span class="hljs-string">&quot;test.txt&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err,data</span>){
    <span class="hljs-keyword">if</span>(err){
        <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
    }
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u5F02\u6B65\u8BFB\u53D6\uFF1A&quot;</span>+data.<span class="hljs-title function_">toString</span>());
});

<span class="hljs-comment">// \u540C\u6B65\u8BFB\u53D6</span>
<span class="hljs-keyword">const</span> data = fs.<span class="hljs-title function_">readFileSync</span>(<span class="hljs-string">&quot;test.txt&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u540C\u6B65\u8BFB\u53D6\uFF1A &quot;</span>+ data.<span class="hljs-title function_">toString</span>());
</code></pre>
<h4 id="-30" tabindex="-1">\u6253\u5F00\u6587\u4EF6 <a class="header-anchor" href="#-30">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">open</span>(path, flags[, mode], callback);
</code></pre>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li>
<p><strong>path</strong>\xA0- \u6587\u4EF6\u7684\u8DEF\u5F84\u3002</p>
</li>
<li>
<p><strong>flags</strong>\xA0- \u6587\u4EF6\u6253\u5F00\u7684\u884C\u4E3A\u3002</p>
</li>
<li>
<p><strong>mode</strong>\xA0- \u8BBE\u7F6E\u6587\u4EF6\u6A21\u5F0F(\u6743\u9650)\uFF0C\u6587\u4EF6\u521B\u5EFA\u9ED8\u8BA4\u6743\u9650\u4E3A 0666(\u53EF\u8BFB\uFF0C\u53EF\u5199)\u3002</p>
</li>
<li>
<p><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u5E26\u6709\u4E24\u4E2A\u53C2\u6570\u5982\uFF1Acallback(err, fd)\u3002</p>
</li>
</ul>
<p><strong>flags</strong>\u53C2\u6570\u8BF4\u660E</p>
<table>
<thead>
<tr>
<th>Flag</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>r</td>
<td>\u4EE5\u8BFB\u53D6\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\u3002\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>r+</td>
<td>\u4EE5\u8BFB\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\u3002\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>rs</td>
<td>\u4EE5\u540C\u6B65\u7684\u65B9\u5F0F\u8BFB\u53D6\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>rs+</td>
<td>\u4EE5\u540C\u6B65\u7684\u65B9\u5F0F\u8BFB\u53D6\u548C\u5199\u5165\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>w</td>
<td>\u4EE5\u5199\u5165\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u3002</td>
</tr>
<tr>
<td>wx</td>
<td>\u7C7B\u4F3Cw\uFF0C\u4F46\u662F\u5982\u679C\u6587\u4EF6\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u6587\u4EF6\u5199\u5165\u5931\u8D25\u3002</td>
</tr>
<tr>
<td>w+</td>
<td>\u4EE5\u8BFB\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u3002</td>
</tr>
<tr>
<td>wx+</td>
<td>\u7C7B\u4F3Cw+\uFF0C\u4F46\u662F\u5982\u679C\u6587\u4EF6\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u6587\u4EF6\u8BFB\u5199\u5931\u8D25\u3002</td>
</tr>
<tr>
<td>a</td>
<td>\u4EE5\u8FFD\u52A0\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u3002</td>
</tr>
<tr>
<td>ax</td>
<td>\u7C7B\u4F3Ca\uFF0C\u4F46\u662F\u5982\u679C\u6587\u4EF6\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u6587\u4EF6\u8FFD\u52A0\u5931\u8D25\u3002</td>
</tr>
<tr>
<td>a+</td>
<td>\u4EE5\u8BFB\u53D6\u8FFD\u52A0\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u3002</td>
</tr>
<tr>
<td>ax+</td>
<td>\u7C7B\u4F3Ca+\uFF0C\u4F46\u662F\u5982\u679C\u6587\u4EF6\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u6587\u4EF6\u8BFB\u53D6\u8FFD\u52A0\u5931\u8D25\u3002</td>
</tr>
</tbody>
</table>
</blockquote>
<p>\u5B9E\u4F8Bfile-demo2.js\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-comment">// \u5F02\u6B65\u6253\u5F00\u6587\u4EF6</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u51C6\u5907\u6253\u5F00\u6587\u4EF6\uFF01&quot;</span>);
fs.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;input.txt&#x27;</span>, <span class="hljs-string">&#x27;r+&#x27;</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err, fd</span>) {
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u6587\u4EF6\u6253\u5F00\u6210\u529F\uFF01&quot;</span>);     
});
</code></pre>
<h4 id="-31" tabindex="-1">\u83B7\u53D6\u6587\u4EF6\u4FE1\u606F <a class="header-anchor" href="#-31">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li>
<p><strong>path</strong>\xA0- \u6587\u4EF6\u8DEF\u5F84\u3002</p>
</li>
<li>
<p><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u5E26\u6709\u4E24\u4E2A\u53C2\u6570\u5982\uFF1A(err, stats),\xA0<strong>stats</strong>\xA0\u662F fs.Stats \u5BF9\u8C61\u3002</p>
</li>
</ul>
<p>fs.stat(path)\u6267\u884C\u540E\uFF0C\u4F1A\u5C06stats\u7C7B\u7684\u5B9E\u4F8B\u8FD4\u56DE\u7ED9\u5176\u56DE\u8C03\u51FD\u6570\u3002\u53EF\u4EE5\u901A\u8FC7stats\u7C7B\u4E2D\u63D0\u4F9B\u65B9\u6CD5\u5224\u65AD\u6587\u4EF6\u7684\u76F8\u5173\u5C5E\u6027\u3002</p>
<p>\u4F8B\u5982\u5224\u65AD\u662F\u5426\u4E3A\u6587\u4EF6\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
fs.<span class="hljs-title function_">stat</span>(<span class="hljs-string">&quot;/var/www/fs.fs&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err,stats</span>){
   <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(stats.<span class="hljs-title function_">isFile</span>());  <span class="hljs-comment">// true </span>
});
</code></pre>
<p>stats\u7C7B\u4E2D\u7684\u65B9\u6CD5\u6709\uFF1A</p>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>stats.isFile()</td>
<td>\u5982\u679C\u662F\u6587\u4EF6\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</td>
</tr>
<tr>
<td>stats.isDirectory()</td>
<td>\u5982\u679C\u662F\u76EE\u5F55\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</td>
</tr>
<tr>
<td>stats.isBlockDevice()</td>
<td>\u5982\u679C\u662F\u5757\u8BBE\u5907\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</td>
</tr>
<tr>
<td>stats.isCharacterDevice()</td>
<td>\u5982\u679C\u662F\u5B57\u7B26\u8BBE\u5907\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</td>
</tr>
<tr>
<td>stats.isSymbolicLink()</td>
<td>\u5982\u679C\u662F\u8F6F\u94FE\u63A5\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</td>
</tr>
<tr>
<td>stats.isFIFO()</td>
<td>\u5982\u679C\u662FFIFO\uFF0C\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002FIFO\u662FUNIX\u4E2D\u7684\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u7684\u547D\u4EE4\u7BA1\u9053\u3002</td>
</tr>
<tr>
<td>stats.isSocket()</td>
<td>\u5982\u679C\u662F Socket \u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</td>
</tr>
</tbody>
</table>
</blockquote>
<h4 id="-32" tabindex="-1">\u5199\u5165\u6587\u4EF6 <a class="header-anchor" href="#-32">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5</p>
<p>\u4EE5\u4E0B\u4E3A\u5F02\u6B65\u6A21\u5F0F\u4E0B\u5199\u5165\u6587\u4EF6\u7684\u8BED\u6CD5\u683C\u5F0F\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">writeFile</span>(file,data[, options],callback)
</code></pre>
<p>writeFile\u76F4\u63A5\u6253\u5F00\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662Fw\u6A21\u5F0F\uFF0C\u6240\u4EE5\u5982\u679C\u6587\u4EF6\u5B58\u5728\uFF0C\u8BE5\u65B9\u6CD5\u5199\u5165\u7684\u5185\u5BB9\u4F1A\u8986\u76D6\u65E7\u7684\u6587\u4EF6\u5185\u5BB9\u3002</p>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<p>\u53C2\u6570\u4F7F\u7528\u8BF4\u660E\u5982\u4E0B\uFF1A</p>
<ul>
<li>
<p><strong>file</strong>\xA0- \u6587\u4EF6\u540D\u6216\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</p>
</li>
<li>
<p><strong>data</strong>\xA0- \u8981\u5199\u5165\u6587\u4EF6\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u662F String(\u5B57\u7B26\u4E32) \u6216 Buffer(\u7F13\u51B2) \u5BF9\u8C61\u3002</p>
</li>
<li>
<p><strong>options</strong>\xA0- \u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B {encoding, mode, flag}\u3002\u9ED8\u8BA4\u7F16\u7801\u4E3A utf8, \u6A21\u5F0F\u4E3A 0666 \uFF0C flag \u4E3A \u2018w\u2019</p>
</li>
<li>
<p><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u51FD\u6570\u53EA\u5305\u542B\u9519\u8BEF\u4FE1\u606F\u53C2\u6570(err)\uFF0C\u5728\u5199\u5165\u5931\u8D25\u65F6\u8FD4\u56DE\u3002</p>
</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
fs.<span class="hljs-title function_">writeFile</span>(<span class="hljs-string">&#x27;input.txt&#x27;</span>, <span class="hljs-string">&#x27;hello world&#x27;</span>,  <span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>) {
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u8BFB\u53D6\u5199\u5165\u7684\u6570\u636E\uFF01&quot;</span>);
   fs.<span class="hljs-title function_">readFile</span>(<span class="hljs-string">&#x27;input.txt&#x27;</span>, <span class="hljs-keyword">function</span> (<span class="hljs-params">err, data</span>) {
      <span class="hljs-keyword">if</span> (err) {
         <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
      }
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u5F02\u6B65\u8BFB\u53D6\u6587\u4EF6\u6570\u636E: &quot;</span> + data.<span class="hljs-title function_">toString</span>());
   });
});
</code></pre>
<h4 id="-33" tabindex="-1">\u8BFB\u53D6\u6587\u4EF6 <a class="header-anchor" href="#-33">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5(\u4EE5\u4E0B\u4E3A\u5F02\u6B65\u6A21\u5F0F\u4E0B\u8BFB\u53D6\u6587\u4EF6\u7684\u8BED\u6CD5\u683C\u5F0F)\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">read</span>(fd, buffer, offset, length, position, callback)
</code></pre>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li>
<p><strong>fd</strong>\xA0- \u901A\u8FC7 fs.open() \u65B9\u6CD5\u8FD4\u56DE\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</p>
</li>
<li>
<p><strong>buffer</strong>\xA0- \u6570\u636E\u5199\u5165\u7684\u7F13\u51B2\u533A\u3002</p>
</li>
<li>
<p><strong>offset</strong>\xA0- \u7F13\u51B2\u533A\u5199\u5165\u7684\u5199\u5165\u504F\u79FB\u91CF\u3002</p>
</li>
<li>
<p><strong>length</strong>\xA0- \u8981\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u7684\u5B57\u8282\u6570\u3002</p>
</li>
<li>
<p><strong>position</strong>\xA0- \u6587\u4EF6\u8BFB\u53D6\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u5982\u679C position \u7684\u503C\u4E3A null\uFF0C\u5219\u4F1A\u4ECE\u5F53\u524D\u6587\u4EF6\u6307\u9488\u7684\u4F4D\u7F6E\u8BFB\u53D6\u3002</p>
</li>
<li>
<p><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u6709\u4E09\u4E2A\u53C2\u6570err, bytesRead, buffer\uFF0Cerr \u4E3A\u9519\u8BEF\u4FE1\u606F\uFF0C bytesRead \u8868\u793A\u8BFB\u53D6\u7684\u5B57\u8282\u6570\uFF0Cbuffer \u4E3A\u7F13\u51B2\u533A\u5BF9\u8C61\u3002</p>
</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-keyword">let</span> buf = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">alloc</span>(<span class="hljs-number">1024</span>);
<span class="hljs-comment">// \u51C6\u5907\u6253\u5F00\u5DF2\u5B58\u5728\u7684\u6587\u4EF6</span>
fs.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;input.txt&#x27;</span>, <span class="hljs-string">&#x27;r+&#x27;</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err, fd</span>) {
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   <span class="hljs-comment">// \u51C6\u5907\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9</span>
   fs.<span class="hljs-title function_">read</span>(fd, buf, <span class="hljs-number">0</span>, buf.<span class="hljs-property">length</span>, <span class="hljs-number">0</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err, bytes</span>){
      <span class="hljs-keyword">if</span> (err){
         <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
      }
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(bytes + <span class="hljs-string">&quot;  \u5B57\u8282\u88AB\u8BFB\u53D6&quot;</span>);

      <span class="hljs-comment">// \u4EC5\u8F93\u51FA\u8BFB\u53D6\u7684\u5B57\u8282</span>
      <span class="hljs-keyword">if</span>(bytes &gt; <span class="hljs-number">0</span>){
         <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, bytes).<span class="hljs-title function_">toString</span>());
      }
   });
});
</code></pre>
<h4 id="-34" tabindex="-1">\u5173\u95ED\u6587\u4EF6 <a class="header-anchor" href="#-34">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5(\u4EE5\u4E0B\u4E3A\u5F02\u6B65\u6A21\u5F0F\u4E0B\u5173\u95ED\u6587\u4EF6\u7684\u8BED\u6CD5\u683C\u5F0F)\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">close</span>(fd,callback)
</code></pre>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li><strong>fd</strong>\xA0- \u901A\u8FC7 fs.open() \u65B9\u6CD5\u8FD4\u56DE\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</li>
<li><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-keyword">let</span> buf = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">alloc</span>(<span class="hljs-number">1024</span>);
<span class="hljs-comment">// \u51C6\u5907\u6253\u5F00\u6587\u4EF6</span>
fs.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;input.txt&#x27;</span>, <span class="hljs-string">&#x27;r+&#x27;</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err, fd</span>) {
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   <span class="hljs-comment">// \u8BFB\u53D6\u6587\u4EF6</span>
   fs.<span class="hljs-title function_">read</span>(fd, buf, <span class="hljs-number">0</span>, buf.<span class="hljs-property">length</span>, <span class="hljs-number">0</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err, bytes</span>){
      <span class="hljs-keyword">if</span> (err){
         <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
      }

      <span class="hljs-comment">// \u4EC5\u8F93\u51FA\u8BFB\u53D6\u7684\u5B57\u8282</span>
      <span class="hljs-keyword">if</span>(bytes &gt; <span class="hljs-number">0</span>){
         <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, bytes).<span class="hljs-title function_">toString</span>());
      }

      <span class="hljs-comment">// \u5173\u95ED\u6587\u4EF6</span>
      fs.<span class="hljs-title function_">close</span>(fd, <span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>){
         <span class="hljs-keyword">if</span> (err){
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
         } 
         <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u6587\u4EF6\u5173\u95ED\u6210\u529F&quot;</span>);
      });
   });
});
</code></pre>
<h4 id="-35" tabindex="-1">\u622A\u53D6\u6587\u4EF6 <a class="header-anchor" href="#-35">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5(\u4EE5\u4E0B\u4E3A\u5F02\u6B65\u6A21\u5F0F\u4E0B\u622A\u53D6\u6587\u4EF6\u7684\u8BED\u6CD5\u683C\u5F0F)\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">ftruncate</span>(fd, len, callback)
</code></pre>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li><strong>fd</strong>\xA0- \u901A\u8FC7 fs.open() \u65B9\u6CD5\u8FD4\u56DE\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</li>
<li><strong>len</strong>\xA0- \u6587\u4EF6\u5185\u5BB9\u622A\u53D6\u7684\u957F\u5EA6\u3002</li>
<li><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-keyword">let</span> buf = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">alloc</span>(<span class="hljs-number">1024</span>);
<span class="hljs-comment">// \u51C6\u5907\u6253\u5F00\u6587\u4EF6</span>
fs.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;input.txt&#x27;</span>, <span class="hljs-string">&#x27;r+&#x27;</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err, fd</span>) {
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u6587\u4EF6\u6253\u5F00\u6210\u529F\uFF01&quot;</span>);
   <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u622A\u53D610\u5B57\u8282\u5185\u7684\u6587\u4EF6\u5185\u5BB9\uFF0C\u8D85\u51FA\u90E8\u5206\u5C06\u88AB\u53BB\u9664\u3002&quot;</span>);

   <span class="hljs-comment">// \u622A\u53D6\u6587\u4EF6</span>
   fs.<span class="hljs-title function_">ftruncate</span>(fd, <span class="hljs-number">10</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>){
      <span class="hljs-keyword">if</span> (err){
         <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
      } 
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u6587\u4EF6\u622A\u53D6\u6210\u529F\u3002&quot;</span>);
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u8BFB\u53D6\u76F8\u540C\u7684\u6587\u4EF6&quot;</span>); 
      fs.<span class="hljs-title function_">read</span>(fd, buf, <span class="hljs-number">0</span>, buf.<span class="hljs-property">length</span>, <span class="hljs-number">0</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err, bytes</span>){
         <span class="hljs-keyword">if</span> (err){
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
         }

         <span class="hljs-comment">// \u4EC5\u8F93\u51FA\u8BFB\u53D6\u7684\u5B57\u8282</span>
         <span class="hljs-keyword">if</span>(bytes &gt; <span class="hljs-number">0</span>){
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(buf.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, bytes).<span class="hljs-title function_">toString</span>());
         }

         <span class="hljs-comment">// \u5173\u95ED\u6587\u4EF6</span>
         fs.<span class="hljs-title function_">close</span>(fd, <span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>){
            <span class="hljs-keyword">if</span> (err){
               <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
            } 
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u6587\u4EF6\u5173\u95ED\u6210\u529F\uFF01&quot;</span>);
         });
      });
   });
});
</code></pre>
<h4 id="-36" tabindex="-1">\u5220\u9664\u6587\u4EF6 <a class="header-anchor" href="#-36">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5(\u4EE5\u4E0B\u4E3A\u5220\u9664\u6587\u4EF6\u7684\u8BED\u6CD5\u683C\u5F0F)\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">unlink</span>(path, callback)
</code></pre>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li><strong>path</strong>\xA0- \u6587\u4EF6\u8DEF\u5F84\u3002</li>
<li><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-comment">// &quot;\u51C6\u5907\u5220\u9664\u6587\u4EF6\uFF01</span>
fs.<span class="hljs-title function_">unlink</span>(<span class="hljs-string">&#x27;input.txt&#x27;</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>) {
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u6587\u4EF6\u5220\u9664\u6210\u529F\uFF01&quot;</span>);
});
</code></pre>
<h4 id="-37" tabindex="-1">\u521B\u5EFA\u76EE\u5F55 <a class="header-anchor" href="#-37">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5(\u4EE5\u4E0B\u4E3A\u5F02\u6B65\u6A21\u5F0F\u4E0B\u7684\u521B\u5EFA\u76EE\u5F55\u7684\u683C\u5F0F)</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">mkdir</span>(path[, options],callback)
</code></pre>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li>
<p><strong>path</strong>\xA0- \u6587\u4EF6\u8DEF\u5F84\u3002</p>
</li>
<li>
<p>options \u53C2\u6570\u53EF\u4EE5\u662F\uFF1A</p>
<ul>
<li><strong>recursive</strong>\xA0- \u662F\u5426\u4EE5\u9012\u5F52\u7684\u65B9\u5F0F\u521B\u5EFA\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A false\u3002</li>
<li><strong>mode</strong>\xA0- \u8BBE\u7F6E\u76EE\u5F55\u6743\u9650\uFF0C\u9ED8\u8BA4\u4E3A 0777\u3002</li>
</ul>
</li>
<li>
<p><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</p>
</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-comment">// \u521B\u5EFA/tmp/test\u76EE\u5F55</span>
fs.<span class="hljs-title function_">mkdir</span>(<span class="hljs-string">&quot;/tmp/test/&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>){
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;\u76EE\u5F55\u521B\u5EFA\u6210\u529F\u3002&quot;</span>);
});
</code></pre>
<h4 id="-38" tabindex="-1">\u8BFB\u53D6\u76EE\u5F55 <a class="header-anchor" href="#-38">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5(\u4EE5\u4E0B\u4E3A\u5F02\u6B65\u6A21\u5F0F\u4E0B\u7684\u8BED\u6CD5\u683C\u5F0F)\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">readdir</span>(path, callback)
</code></pre>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><strong>path</strong>\xA0- \u6587\u4EF6\u8DEF\u5F84\u3002</li>
<li><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u51FD\u6570\u5E26\u6709\u4E24\u4E2A\u53C2\u6570err, files\uFF0Cerr \u4E3A\u9519\u8BEF\u4FE1\u606F\uFF0Cfiles \u4E3A \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6570\u7EC4\u5217\u8868\u3002</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);

<span class="hljs-comment">// &quot;\u67E5\u770B /tmp \u76EE\u5F55&quot;</span>
fs.<span class="hljs-title function_">readdir</span>(<span class="hljs-string">&quot;/tmp/&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err, files</span>){
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   files.<span class="hljs-title function_">forEach</span>( <span class="hljs-keyword">function</span> (<span class="hljs-params">file</span>){
       <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>( file );
   });
});
</code></pre>
<h4 id="-39" tabindex="-1">\u5220\u9664\u76EE\u5F55 <a class="header-anchor" href="#-39">\xA7</a></h4>
<blockquote>
<p>\u8BED\u6CD5(\u4EE5\u4E0B\u4E3A\u5F02\u6B65\u6A21\u5F0F\u4E0B\u7684\u5220\u9664\u76EE\u5F55\u8BED\u6CD5\u683C\u5F0F)\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fs.<span class="hljs-title function_">rmdir</span>(path, callback)
</code></pre>
<p><strong>\u53C2\u6570\uFF1A</strong></p>
<ul>
<li><strong>path</strong>\xA0- \u6587\u4EF6\u8DEF\u5F84\u3002</li>
<li><strong>callback</strong>\xA0- \u56DE\u8C03\u51FD\u6570\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</li>
</ul>
</blockquote>
<p>\u5B9E\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;fs&quot;</span>);
<span class="hljs-comment">// \u6267\u884C\u524D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 /tmp/test \u76EE\u5F55</span>
fs.<span class="hljs-title function_">rmdir</span>(<span class="hljs-string">&quot;/tmp/test&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>){
   <span class="hljs-keyword">if</span> (err) {
       <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
   }
   <span class="hljs-comment">// \u8BFB\u53D6 /tmp \u76EE\u5F55</span>
   fs.<span class="hljs-title function_">readdir</span>(<span class="hljs-string">&quot;/tmp/&quot;</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">err, files</span>){
      <span class="hljs-keyword">if</span> (err) {
          <span class="hljs-keyword">return</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);
      }
      files.<span class="hljs-title function_">forEach</span>( <span class="hljs-keyword">function</span> (<span class="hljs-params">file</span>){
          <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>( file );
      });
   });
});
</code></pre>
<h4 id="-40" tabindex="-1">\u6587\u4EF6\u6A21\u5757\u5176\u4ED6\u65B9\u6CD5\u53C2\u8003 <a class="header-anchor" href="#-40">\xA7</a></h4>
<blockquote>
<p>\u4EE5\u4E0B\u4E3ANode.js\u6587\u4EF6\u6A21\u5757\u5176\u4ED6\u65B9\u6CD5\u5217\u8868\uFF1A</p>
</blockquote>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>fs.rename(oldPath, newPath, callback)</td>
<td>\u5F02\u6B65 rename().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.ftruncate(fd, len, callback)</td>
<td>\u5F02\u6B65 ftruncate().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.ftruncateSync(fd, len)</td>
<td>\u540C\u6B65\u7684ftruncate()</td>
</tr>
<tr>
<td>fs.truncate(path, len, callback)</td>
<td>\u5F02\u6B65 truncate().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.truncateSync(path, len)</td>
<td>\u540C\u6B65 truncate()</td>
</tr>
<tr>
<td>fs.chown(path, uid, gid, callback)</td>
<td>\u5F02\u6B65 chown().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.chownSync(path, uid, gid)</td>
<td>\u540C\u6B65 chown()</td>
</tr>
<tr>
<td>fs.fchown(fd, uid, gid, callback)</td>
<td>\u5F02\u6B65 fchown().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.fchownSync(fd, uid, gid)</td>
<td>\u540C\u6B65 fchown()</td>
</tr>
<tr>
<td>fs.lchown(path, uid, gid, callback)</td>
<td>\u5F02\u6B65 lchown().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.lchownSync(path, uid, gid)</td>
<td>\u540C\u6B65 lchown()</td>
</tr>
<tr>
<td>fs.chmod(path, mode, callback)</td>
<td>\u5F02\u6B65 chmod().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.chmodSync(path, mode)</td>
<td>\u540C\u6B65 chmod().</td>
</tr>
<tr>
<td>fs.fchmod(fd, mode, callback)</td>
<td>\u5F02\u6B65 fchmod().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.fchmodSync(fd, mode)</td>
<td>\u540C\u6B65 fchmod().</td>
</tr>
<tr>
<td>fs.lchmod(path, mode, callback)</td>
<td>\u5F02\u6B65 lchmod().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002Only available on Mac OS X.</td>
</tr>
<tr>
<td>fs.lchmodSync(path, mode)</td>
<td>\u540C\u6B65 lchmod().</td>
</tr>
<tr>
<td>fs.stat(path, callback)</td>
<td>\u5F02\u6B65 stat(). \u56DE\u8C03\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570 err, stats\uFF0Cstats \u662F fs.Stats \u5BF9\u8C61\u3002</td>
</tr>
<tr>
<td>fs.lstat(path, callback)</td>
<td>\u5F02\u6B65 lstat(). \u56DE\u8C03\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570 err, stats\uFF0Cstats \u662F fs.Stats \u5BF9\u8C61\u3002</td>
</tr>
<tr>
<td>fs.fstat(fd, callback)</td>
<td>\u5F02\u6B65 fstat(). \u56DE\u8C03\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570 err, stats\uFF0Cstats \u662F fs.Stats \u5BF9\u8C61\u3002</td>
</tr>
<tr>
<td>fs.statSync(path)</td>
<td>\u540C\u6B65 stat(). \u8FD4\u56DE fs.Stats \u7684\u5B9E\u4F8B\u3002</td>
</tr>
<tr>
<td>fs.lstatSync(path)</td>
<td>\u540C\u6B65 lstat(). \u8FD4\u56DE fs.Stats \u7684\u5B9E\u4F8B\u3002</td>
</tr>
<tr>
<td>fs.fstatSync(fd)</td>
<td>\u540C\u6B65 fstat(). \u8FD4\u56DE fs.Stats \u7684\u5B9E\u4F8B\u3002</td>
</tr>
<tr>
<td>fs.link(srcpath, dstpath, callback)</td>
<td>\u5F02\u6B65 link().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.linkSync(srcpath, dstpath)</td>
<td>\u540C\u6B65 link().</td>
</tr>
<tr>
<td>fs.symlink(srcpath, dstpath[, type], callback)</td>
<td>\u5F02\u6B65 symlink().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002 type \u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6E\u4E3A \u2018dir\u2019, \u2018file\u2019, \u6216 \u2018junction\u2019 (\u9ED8\u8BA4\u4E3A \u2018file\u2019) \u3002</td>
</tr>
<tr>
<td>fs.symlinkSync(srcpath, dstpath[, type])</td>
<td>\u540C\u6B65 symlink().</td>
</tr>
<tr>
<td>fs.readlink(path, callback)</td>
<td>\u5F02\u6B65 readlink(). \u56DE\u8C03\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570 err, linkString\u3002</td>
</tr>
<tr>
<td>fs.realpath(path[, cache], callback)</td>
<td>\u5F02\u6B65 realpath(). \u56DE\u8C03\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570 err, resolvedPath\u3002</td>
</tr>
<tr>
<td>fs.realpathSync(path[, cache])</td>
<td>\u540C\u6B65 realpath()\u3002\u8FD4\u56DE\u7EDD\u5BF9\u8DEF\u5F84\u3002</td>
</tr>
<tr>
<td>fs.unlink(path, callback)</td>
<td>\u5F02\u6B65 unlink().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.unlinkSync(path)</td>
<td>\u540C\u6B65 unlink().</td>
</tr>
<tr>
<td>fs.rmdir(path, callback)</td>
<td>\u5F02\u6B65 rmdir().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.rmdirSync(path)</td>
<td>\u540C\u6B65 rmdir().</td>
</tr>
<tr>
<td>fs.mkdir(path[, mode], callback)</td>
<td>S\u5F02\u6B65 mkdir(2).\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002 \u8BBF\u95EE\u6743\u9650\u9ED8\u8BA4\u4E3A 0777\u3002</td>
</tr>
<tr>
<td>fs.mkdirSync(path[, mode])</td>
<td>\u540C\u6B65 mkdir().</td>
</tr>
<tr>
<td>fs.readdir(path, callback)</td>
<td>\u5F02\u6B65 readdir(3). \u8BFB\u53D6\u76EE\u5F55\u7684\u5185\u5BB9\u3002</td>
</tr>
<tr>
<td>fs.readdirSync(path)</td>
<td>\u540C\u6B65 readdir().\u8FD4\u56DE\u6587\u4EF6\u6570\u7EC4\u5217\u8868\u3002</td>
</tr>
<tr>
<td>fs.close(fd, callback)</td>
<td>\u5F02\u6B65 close().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.closeSync(fd)</td>
<td>\u540C\u6B65 close().</td>
</tr>
<tr>
<td>fs.open(path, flags[, mode], callback)</td>
<td>\u5F02\u6B65\u6253\u5F00\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>fs.openSync(path, flags[, mode])</td>
<td>\u540C\u6B65fs.open().</td>
</tr>
<tr>
<td>fs.utimes(path, atime, mtime, callback)</td>
<td>\u4FEE\u6539\u6587\u4EF6\u65F6\u95F4\u6233\uFF0C\u6587\u4EF6\u901A\u8FC7\u6307\u5B9A\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</td>
</tr>
<tr>
<td>fs.utimesSync(path, atime, mtime)</td>
<td>\u540C\u6B65fs.utimes</td>
</tr>
<tr>
<td>fs.futimes(fd, atime, mtime, callback)</td>
<td>\u4FEE\u6539\u6587\u4EF6\u65F6\u95F4\u6233\uFF0C\u901A\u8FC7\u6587\u4EF6\u63CF\u8FF0\u7B26\u6307\u5B9A\u3002</td>
</tr>
<tr>
<td>fs.futimesSync(fd, atime, mtime)</td>
<td>\u540C\u6B65fs.futimes</td>
</tr>
<tr>
<td>fs.fsync(fd, callback)</td>
<td>\u5F02\u6B65 fsync.\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
<tr>
<td>fs.fsyncSync(fd)</td>
<td>\u540C\u6B65 fsync.</td>
</tr>
<tr>
<td>fs.write(fd, buffer, offset, length[, position], callback)</td>
<td>\u5C06\u7F13\u51B2\u533A\u5185\u5BB9\u5199\u5165\u5230\u901A\u8FC7\u6587\u4EF6\u63CF\u8FF0\u7B26\u6307\u5B9A\u7684\u6587\u4EF6\u3002</td>
</tr>
<tr>
<td>fs.write(fd, data[, position[, encoding]], callback)</td>
<td>\u901A\u8FC7\u6587\u4EF6\u63CF\u8FF0\u7B26 fd \u5199\u5165\u6587\u4EF6\u5185\u5BB9\u3002</td>
</tr>
<tr>
<td>fs.writeSync(fd, buffer, offset, length[, position])</td>
<td>\u540C\u6B65\u7248\u7684 fs.write()\u3002</td>
</tr>
<tr>
<td>fs.writeSync(fd, data[, position[, encoding]])</td>
<td>\u540C\u6B65\u7248\u7684 fs.write().</td>
</tr>
<tr>
<td>fs.read(fd, buffer, offset, length, position, callback)</td>
<td>\u901A\u8FC7\u6587\u4EF6\u63CF\u8FF0\u7B26 fd \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002</td>
</tr>
<tr>
<td>fs.readSync(fd, buffer, offset, length, position)</td>
<td>\u540C\u6B65\u7248\u7684 fs.read.</td>
</tr>
<tr>
<td>fs.readFile(filename[, options], callback)</td>
<td>\u5F02\u6B65\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002</td>
</tr>
<tr>
<td>fs.readFileSync(filename[, options])</td>
<td>\u540C\u6B65\u7684fs.readFile()</td>
</tr>
<tr>
<td>fs.writeFile(filename, data[, options], callback)</td>
<td>\u5F02\u6B65\u5199\u5165\u6587\u4EF6\u5185\u5BB9\u3002</td>
</tr>
<tr>
<td>fs.writeFileSync(filename, data[, options])</td>
<td>\u540C\u6B65\u7248\u7684 fs.writeFile\u3002</td>
</tr>
<tr>
<td>fs.appendFile(filename, data[, options], callback)</td>
<td>\u5F02\u6B65\u8FFD\u52A0\u6587\u4EF6\u5185\u5BB9\u3002</td>
</tr>
<tr>
<td>fs.appendFileSync(filename, data[, options])</td>
<td>The \u540C\u6B65 version of fs.appendFile.</td>
</tr>
<tr>
<td>fs.watchFile(filename[, options], listener)</td>
<td>\u67E5\u770B\u6587\u4EF6\u7684\u4FEE\u6539\u3002</td>
</tr>
<tr>
<td>fs.unwatchFile(filename[, listener])</td>
<td>\u505C\u6B62\u67E5\u770B filename \u7684\u4FEE\u6539\u3002</td>
</tr>
<tr>
<td>fs.watch(filename[, options][, listener])</td>
<td>\u67E5\u770B filename \u7684\u4FEE\u6539\uFF0Cfilename \u53EF\u4EE5\u662F\u6587\u4EF6\u6216\u76EE\u5F55\u3002\u8FD4\u56DE fs.FSWatcher \u5BF9\u8C61\u3002</td>
</tr>
<tr>
<td>fs.exists(path, callback)</td>
<td>\u68C0\u6D4B\u7ED9\u5B9A\u7684\u8DEF\u5F84\u662F\u5426\u5B58\u5728\u3002</td>
</tr>
<tr>
<td>fs.existsSync(path)</td>
<td>\u540C\u6B65\u7248\u7684 fs.exists.</td>
</tr>
<tr>
<td>fs.access(path[, mode], callback)</td>
<td>\u6D4B\u8BD5\u6307\u5B9A\u8DEF\u5F84\u7528\u6237\u6743\u9650\u3002</td>
</tr>
<tr>
<td>fs.accessSync(path[, mode])</td>
<td>\u540C\u6B65\u7248\u7684 fs.access\u3002</td>
</tr>
<tr>
<td>fs.createReadStream(path[, options])</td>
<td>\u8FD4\u56DEReadStream \u5BF9\u8C61\u3002</td>
</tr>
<tr>
<td>fs.createWriteStream(path[, options])</td>
<td>\u8FD4\u56DE WriteStream \u5BF9\u8C61\u3002</td>
</tr>
<tr>
<td>fs.symlink(srcpath, dstpath[, type], callback)</td>
<td>\u5F02\u6B65 symlink().\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u4F46\u53EF\u80FD\u629B\u51FA\u5F02\u5E38\u3002</td>
</tr>
</tbody>
</table>
`,menus:'<nav class="table-of-contents"><ol><li><a href="#node-js">Node.js  \u57FA\u7840\u7BC7 </a><ol><li><a href="#repl">REPL(\u4EA4\u4E92\u89E3\u91CA\u5668) </a></li><li><a href="#">\u56DE\u8C03\u51FD\u6570 </a></li><li><a href="#-1">\u4E8B\u4EF6\u9A71\u52A8\u7F16\u7A0B </a><ol><li><a href="#event-emitter">EventEmitter </a></li><li><a href="#-2">\u4E8B\u4EF6\u5FAA\u73AF </a></li><li><a href="#-3">\u5B9E\u4F8B\u4EE3\u7801: </a><ol><li><a href="#-4">\u7B80\u5355\u5B9E\u4F8B </a></li><li><a href="#-5">\u591A\u4E2A\u4E8B\u4EF6\u5904\u7406 </a></li><li><a href="#-6">\u5E26\u53C2\u6570\u7684\u4E8B\u4EF6\u5904\u7406 </a></li><li><a href="#-7">\u76D1\u542C\u5668\u7EDF\u8BA1 </a></li><li><a href="#error">error\u4E8B\u4EF6 </a></li><li><a href="#event-emitter-1">\u7EE7\u627FEventEmitter </a></li></ol></li><li><a href="#-8">\u7ED3\u8BED </a></li></ol></li><li><a href="#buffer">Buffer(\u7F13\u51B2\u533A) </a><ol><li><a href="#buffer-1">Buffer\u4E0E\u5B57\u7B26\u4E32\u7F16\u7801 </a></li><li><a href="#buffer-2">\u521B\u5EFABuffer\u7C7B </a></li><li><a href="#-9">\u5199\u5165\u7F13\u51B2\u533A </a></li><li><a href="#-10">\u4ECE\u7F13\u51B2\u533A\u8BFB\u53D6\u6570\u636E </a></li><li><a href="#buffer-json">Buffer\u8F6C\u6362\u4E3AJSON\u5BF9\u8C61 </a></li><li><a href="#-11">\u7F13\u51B2\u533A\u5408\u5E76 </a></li><li><a href="#-12">\u7F13\u51B2\u533A\u6BD4\u8F83 </a></li><li><a href="#-13">\u62F7\u8D1D\u7F13\u51B2\u533A </a></li><li><a href="#-14">\u7F13\u51B2\u533A\u88C1\u526A </a></li><li><a href="#-15">\u7F13\u51B2\u533A\u957F\u5EA6 </a></li></ol></li><li><a href="#stream">Stream(\u6D41) </a><ol><li><a href="#-16">\u4ECE\u6D41\u4E2D\u8BFB\u53D6\u6570\u636E </a></li><li><a href="#-17">\u5199\u5165\u6D41 </a></li><li><a href="#-18">\u7BA1\u9053\u6D41 </a></li><li><a href="#-19">\u94FE\u5F0F\u6D41 </a></li></ol></li><li><a href="#-20">\u6A21\u5757\u7CFB\u7EDF </a><ol><li><a href="#-21">\u5F15\u5165\u6A21\u5757 </a></li><li><a href="#-22">\u5BF9\u8C61\u6A21\u5757 </a></li><li><a href="#-23">\u5185\u7F6E\u6A21\u5757 </a></li><li><a href="#exports-module-exports">exports\u548Cmodule.exports </a></li></ol></li><li><a href="#and">\u5168\u5C40\u5BF9\u8C61&amp;\u5168\u5C40\u53D8\u91CF </a><ol><li><a href="#-24">\u81EA\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF </a></li><li><a href="#-25">\u5185\u7F6E\u5168\u5C40\u5BF9\u8C61\u4E0E\u5168\u5C40\u53D8\u91CF </a></li></ol></li><li><a href="#-26">\u5DE5\u5177\u6A21\u5757 </a><ol><li><a href="#util">util\u5DE5\u5177 </a></li><li><a href="#os">OS\u6A21\u5757 </a></li><li><a href="#path">Path\u6A21\u5757 </a></li></ol></li><li><a href="#http">http\u6A21\u5757 </a><ol><li><a href="#url">\u83B7\u53D6URL\u8DEF\u5F84 </a></li><li><a href="#url-1">\u83B7\u53D6url\u53C2\u6570 </a></li><li><a href="#-27">\u57FA\u4E8E\u4E8B\u4EF6\u9A71\u52A8\u7684\u8DEF\u7531\u5B9E\u4F8B </a></li></ol></li><li><a href="#-28">\u6587\u4EF6\u7CFB\u7EDF </a><ol><li><a href="#-29">\u5F02\u6B65\u548C\u540C\u6B65 </a></li><li><a href="#-30">\u6253\u5F00\u6587\u4EF6 </a></li><li><a href="#-31">\u83B7\u53D6\u6587\u4EF6\u4FE1\u606F </a></li><li><a href="#-32">\u5199\u5165\u6587\u4EF6 </a></li><li><a href="#-33">\u8BFB\u53D6\u6587\u4EF6 </a></li><li><a href="#-34">\u5173\u95ED\u6587\u4EF6 </a></li><li><a href="#-35">\u622A\u53D6\u6587\u4EF6 </a></li><li><a href="#-36">\u5220\u9664\u6587\u4EF6 </a></li><li><a href="#-37">\u521B\u5EFA\u76EE\u5F55 </a></li><li><a href="#-38">\u8BFB\u53D6\u76EE\u5F55 </a></li><li><a href="#-39">\u5220\u9664\u76EE\u5F55 </a></li><li><a href="#-40">\u6587\u4EF6\u6A21\u5757\u5176\u4ED6\u65B9\u6CD5\u53C2\u8003 </a></li></ol></li></ol></li></ol></nav>'}}};(0,hf.hydrateRoot)(document.getElementById("root"),ff.default.createElement(df,{...Tg}));})();
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
