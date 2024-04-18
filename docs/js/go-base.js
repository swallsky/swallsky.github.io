(()=>{var jf=Object.create;var Oi=Object.defineProperty;var wf=Object.getOwnPropertyDescriptor;var kf=Object.getOwnPropertyNames;var Sf=Object.getPrototypeOf,xf=Object.prototype.hasOwnProperty;var he=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Cf=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of kf(e))!xf.call(n,r)&&r!==t&&Oi(n,r,{get:()=>e[r],enumerable:!(s=wf(e,r))||s.enumerable});return n};var me=(n,e,t)=>(t=n!=null?jf(Sf(n)):{},Cf(e||!n||!n.__esModule?Oi(t,"default",{value:n,enumerable:!0}):t,n));var Bi=he(q=>{"use strict";var Xt=Symbol.for("react.element"),_f=Symbol.for("react.portal"),Ef=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Tf=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Lf=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),zi=Symbol.iterator;function If(n){return n===null||typeof n!="object"?null:(n=zi&&n[zi]||n["@@iterator"],typeof n=="function"?n:null)}var Ii={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Di=Object.assign,Ri={};function it(n,e,t){this.props=n,this.context=e,this.refs=Ri,this.updater=t||Ii}it.prototype.isReactComponent={};it.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};it.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ai(){}Ai.prototype=it.prototype;function $l(n,e,t){this.props=n,this.context=e,this.refs=Ri,this.updater=t||Ii}var Wl=$l.prototype=new Ai;Wl.constructor=$l;Di(Wl,it.prototype);Wl.isPureReactComponent=!0;var Li=Array.isArray,bi=Object.prototype.hasOwnProperty,Hl={current:null},Fi={key:!0,ref:!0,__self:!0,__source:!0};function Gi(n,e,t){var s,r={},l=null,a=null;if(e!=null)for(s in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(l=""+e.key),e)bi.call(e,s)&&!Fi.hasOwnProperty(s)&&(r[s]=e[s]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var i=Array(o),c=0;c<o;c++)i[c]=arguments[c+2];r.children=i}if(n&&n.defaultProps)for(s in o=n.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:Xt,type:n,key:l,ref:a,props:r,_owner:Hl.current}}function Df(n,e){return{$$typeof:Xt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ql(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xt}function Rf(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Mi=/\/+/g;function Vl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Rf(""+n.key):e.toString(36)}function tr(n,e,t,s,r){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Xt:case _f:a=!0}}if(a)return a=n,r=r(a),n=s===""?"."+Vl(a,0):s,Li(r)?(t="",n!=null&&(t=n.replace(Mi,"$&/")+"/"),tr(r,e,t,"",function(c){return c})):r!=null&&(Ql(r)&&(r=Df(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Mi,"$&/")+"/")+n)),e.push(r)),1;if(a=0,s=s===""?".":s+":",Li(n))for(var o=0;o<n.length;o++){l=n[o];var i=s+Vl(l,o);a+=tr(l,e,t,i,r)}else if(i=If(n),typeof i=="function")for(n=i.call(n),o=0;!(l=n.next()).done;)l=l.value,i=s+Vl(l,o++),a+=tr(l,e,t,i,r);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function er(n,e,t){if(n==null)return n;var s=[],r=0;return tr(n,s,"","",function(l){return e.call(t,l,r++)}),s}function Af(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},sr={transition:null},bf={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:sr,ReactCurrentOwner:Hl};q.Children={map:er,forEach:function(n,e,t){er(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return er(n,function(){e++}),e},toArray:function(n){return er(n,function(e){return e})||[]},only:function(n){if(!Ql(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};q.Component=it;q.Fragment=Ef;q.Profiler=qf;q.PureComponent=$l;q.StrictMode=Pf;q.Suspense=zf;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;q.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var s=Di({},n.props),r=n.key,l=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,a=Hl.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(i in e)bi.call(e,i)&&!Fi.hasOwnProperty(i)&&(s[i]=e[i]===void 0&&o!==void 0?o[i]:e[i])}var i=arguments.length-2;if(i===1)s.children=t;else if(1<i){o=Array(i);for(var c=0;c<i;c++)o[c]=arguments[c+2];s.children=o}return{$$typeof:Xt,type:n.type,key:r,ref:l,props:s,_owner:a}};q.createContext=function(n){return n={$$typeof:Tf,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Nf,_context:n},n.Consumer=n};q.createElement=Gi;q.createFactory=function(n){var e=Gi.bind(null,n);return e.type=n,e};q.createRef=function(){return{current:null}};q.forwardRef=function(n){return{$$typeof:Of,render:n}};q.isValidElement=Ql;q.lazy=function(n){return{$$typeof:Mf,_payload:{_status:-1,_result:n},_init:Af}};q.memo=function(n,e){return{$$typeof:Lf,type:n,compare:e===void 0?null:e}};q.startTransition=function(n){var e=sr.transition;sr.transition={};try{n()}finally{sr.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(n,e){return cn.current.useCallback(n,e)};q.useContext=function(n){return cn.current.useContext(n)};q.useDebugValue=function(){};q.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};q.useEffect=function(n,e){return cn.current.useEffect(n,e)};q.useId=function(){return cn.current.useId()};q.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};q.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};q.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};q.useMemo=function(n,e){return cn.current.useMemo(n,e)};q.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};q.useRef=function(n){return cn.current.useRef(n)};q.useState=function(n){return cn.current.useState(n)};q.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};q.useTransition=function(){return cn.current.useTransition()};q.version="18.2.0"});var ye=he((My,Ui)=>{"use strict";Ui.exports=Bi()});var Ji=he(I=>{"use strict";function Zl(n,e){var t=n.length;n.push(e);n:for(;0<t;){var s=t-1>>>1,r=n[s];if(0<rr(r,e))n[s]=e,n[t]=r,t=s;else break n}}function In(n){return n.length===0?null:n[0]}function ar(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;n:for(var s=0,r=n.length,l=r>>>1;s<l;){var a=2*(s+1)-1,o=n[a],i=a+1,c=n[i];if(0>rr(o,t))i<r&&0>rr(c,o)?(n[s]=c,n[i]=t,s=i):(n[s]=o,n[a]=t,s=a);else if(i<r&&0>rr(c,t))n[s]=c,n[i]=t,s=i;else break n}}return e}function rr(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Vi=performance,I.unstable_now=function(){return Vi.now()}):(Yl=Date,$i=Yl.now(),I.unstable_now=function(){return Yl.now()-$i});var Vi,Yl,$i,$n=[],ge=[],Ff=1,En=null,sn=3,or=!1,Be=!1,Jt=!1,Qi=typeof setTimeout=="function"?setTimeout:null,Yi=typeof clearTimeout=="function"?clearTimeout:null,Wi=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Jl(n){for(var e=In(ge);e!==null;){if(e.callback===null)ar(ge);else if(e.startTime<=n)ar(ge),e.sortIndex=e.expirationTime,Zl($n,e);else break;e=In(ge)}}function na(n){if(Jt=!1,Jl(n),!Be)if(In($n)!==null)Be=!0,ta(ea);else{var e=In(ge);e!==null&&sa(na,e.startTime-n)}}function ea(n,e){Be=!1,Jt&&(Jt=!1,Yi(ns),ns=-1),or=!0;var t=sn;try{for(Jl(e),En=In($n);En!==null&&(!(En.expirationTime>e)||n&&!Zi());){var s=En.callback;if(typeof s=="function"){En.callback=null,sn=En.priorityLevel;var r=s(En.expirationTime<=e);e=I.unstable_now(),typeof r=="function"?En.callback=r:En===In($n)&&ar($n),Jl(e)}else ar($n);En=In($n)}if(En!==null)var l=!0;else{var a=In(ge);a!==null&&sa(na,a.startTime-e),l=!1}return l}finally{En=null,sn=t,or=!1}}var ir=!1,lr=null,ns=-1,Ki=5,Xi=-1;function Zi(){return!(I.unstable_now()-Xi<Ki)}function Kl(){if(lr!==null){var n=I.unstable_now();Xi=n;var e=!0;try{e=lr(!0,n)}finally{e?Zt():(ir=!1,lr=null)}}else ir=!1}var Zt;typeof Wi=="function"?Zt=function(){Wi(Kl)}:typeof MessageChannel<"u"?(Xl=new MessageChannel,Hi=Xl.port2,Xl.port1.onmessage=Kl,Zt=function(){Hi.postMessage(null)}):Zt=function(){Qi(Kl,0)};var Xl,Hi;function ta(n){lr=n,ir||(ir=!0,Zt())}function sa(n,e){ns=Qi(function(){n(I.unstable_now())},e)}I.unstable_IdlePriority=5;I.unstable_ImmediatePriority=1;I.unstable_LowPriority=4;I.unstable_NormalPriority=3;I.unstable_Profiling=null;I.unstable_UserBlockingPriority=2;I.unstable_cancelCallback=function(n){n.callback=null};I.unstable_continueExecution=function(){Be||or||(Be=!0,ta(ea))};I.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ki=0<n?Math.floor(1e3/n):5};I.unstable_getCurrentPriorityLevel=function(){return sn};I.unstable_getFirstCallbackNode=function(){return In($n)};I.unstable_next=function(n){switch(sn){case 1:case 2:case 3:var e=3;break;default:e=sn}var t=sn;sn=e;try{return n()}finally{sn=t}};I.unstable_pauseExecution=function(){};I.unstable_requestPaint=function(){};I.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=sn;sn=n;try{return e()}finally{sn=t}};I.unstable_scheduleCallback=function(n,e,t){var s=I.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:Ff++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>s?(n.sortIndex=t,Zl(ge,n),In($n)===null&&n===In(ge)&&(Jt?(Yi(ns),ns=-1):Jt=!0,sa(na,t-s))):(n.sortIndex=r,Zl($n,n),Be||or||(Be=!0,ta(ea))),n};I.unstable_shouldYield=Zi;I.unstable_wrapCallback=function(n){var e=sn;return function(){var t=sn;sn=e;try{return n.apply(this,arguments)}finally{sn=t}}}});var eu=he((Dy,nu)=>{"use strict";nu.exports=Ji()});var od=he(_n=>{"use strict";var ic=ye(),xn=eu();function v(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uc=new Set,Ss={};function et(n,e){Nt(n,e),Nt(n+"Capture",e)}function Nt(n,e){for(Ss[n]=e,n=0;n<e.length;n++)uc.add(e[n])}var re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,Gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},su={};function Bf(n){return Ea.call(su,n)?!0:Ea.call(tu,n)?!1:Gf.test(n)?su[n]=!0:(tu[n]=!0,!1)}function Uf(n,e,t,s){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Vf(n,e,t,s){if(e===null||typeof e>"u"||Uf(n,e,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,s,r,l,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){tn[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];tn[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){tn[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){tn[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){tn[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){tn[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){tn[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){tn[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){tn[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var jo=/[\-:]([a-z])/g;function wo(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(jo,wo);tn[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(jo,wo);tn[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(jo,wo);tn[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){tn[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});tn.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){tn[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ko(n,e,t,s){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:s||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vf(e,t,r,s)&&(t=null),s||r===null?Bf(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,s=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?n.setAttributeNS(s,e,t):n.setAttribute(e,t))))}var ie=ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),pt=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),So=Symbol.for("react.strict_mode"),Pa=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),Co=Symbol.for("react.memo"),je=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var dc=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var ru=Symbol.iterator;function es(n){return n===null||typeof n!="object"?null:(n=ru&&n[ru]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,ra;function us(n){if(ra===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ra=e&&e[1]||""}return`
`+ra+n}var la=!1;function aa(n,e){if(!n||la)return"";la=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var s=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){s=c}n.call(e.prototype)}else{try{throw Error()}catch(c){s=c}n()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),l=s.stack.split(`
`),a=r.length-1,o=l.length-1;1<=a&&0<=o&&r[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==l[o]){var i=`
`+r[a].replace(" at new "," at ");return n.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",n.displayName)),i}while(1<=a&&0<=o);break}}}finally{la=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?us(n):""}function $f(n){switch(n.tag){case 5:return us(n.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 2:case 15:return n=aa(n.type,!1),n;case 11:return n=aa(n.type.render,!1),n;case 1:return n=aa(n.type,!0),n;default:return""}}function Ta(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case dt:return"Fragment";case pt:return"Portal";case Pa:return"Profiler";case So:return"StrictMode";case qa:return"Suspense";case Na:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case pc:return(n.displayName||"Context")+".Consumer";case cc:return(n._context.displayName||"Context")+".Provider";case xo:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Co:return e=n.displayName||null,e!==null?e:Ta(n.type)||"Memo";case je:e=n._payload,n=n._init;try{return Ta(n(e))}catch{}}return null}function Wf(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(e);case 8:return e===So?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fc(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hf(n){var e=fc(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),s=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,l.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function cr(n){n._valueTracker||(n._valueTracker=Hf(n))}function hc(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),s="";return n&&(s=fc(n)?n.checked?"true":"false":n.value),n=s,n!==t?(e.setValue(n),!0):!1}function Ar(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Oa(n,e){var t=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function lu(n,e){var t=e.defaultValue==null?"":e.defaultValue,s=e.checked!=null?e.checked:e.defaultChecked;t=Le(e.value!=null?e.value:t),n._wrapperState={initialChecked:s,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mc(n,e){e=e.checked,e!=null&&ko(n,"checked",e,!1)}function za(n,e){mc(n,e);var t=Le(e.value),s=e.type;if(t!=null)s==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(s==="submit"||s==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?La(n,e.type,t):e.hasOwnProperty("defaultValue")&&La(n,e.type,Le(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function au(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var s=e.type;if(!(s!=="submit"&&s!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function La(n,e,t){(e!=="number"||Ar(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var cs=Array.isArray;function xt(n,e,t,s){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&s&&(n[t].defaultSelected=!0)}else{for(t=""+Le(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,s&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ma(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ou(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(v(92));if(cs(t)){if(1<t.length)throw Error(v(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Le(t)}}function yc(n,e){var t=Le(e.value),s=Le(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),s!=null&&(n.defaultValue=""+s)}function iu(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function gc(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?gc(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pr,vc=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,s,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,s,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function xs(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qf=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(n){Qf.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),fs[e]=fs[n]})});function jc(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||fs.hasOwnProperty(n)&&fs[n]?(""+e).trim():e+"px"}function wc(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=jc(t,e[t],s);t==="float"&&(t="cssFloat"),s?n.setProperty(t,r):n[t]=r}}var Yf=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Da(n,e){if(e){if(Yf[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function Ra(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function _o(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ba=null,Ct=null,_t=null;function uu(n){if(n=Gs(n)){if(typeof ba!="function")throw Error(v(280));var e=n.stateNode;e&&(e=dl(e),ba(n.stateNode,n.type,e))}}function kc(n){Ct?_t?_t.push(n):_t=[n]:Ct=n}function Sc(){if(Ct){var n=Ct,e=_t;if(_t=Ct=null,uu(n),e)for(n=0;n<e.length;n++)uu(e[n])}}function xc(n,e){return n(e)}function Cc(){}var oa=!1;function _c(n,e,t){if(oa)return n(e,t);oa=!0;try{return xc(n,e,t)}finally{oa=!1,(Ct!==null||_t!==null)&&(Cc(),Sc())}}function Cs(n,e){var t=n.stateNode;if(t===null)return null;var s=dl(t);if(s===null)return null;t=s[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(v(231,e,typeof t));return t}var Fa=!1;if(re)try{ut={},Object.defineProperty(ut,"passive",{get:function(){Fa=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{Fa=!1}var ut;function Kf(n,e,t,s,r,l,a,o,i){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(f){this.onError(f)}}var hs=!1,br=null,Fr=!1,Ga=null,Xf={onError:function(n){hs=!0,br=n}};function Zf(n,e,t,s,r,l,a,o,i){hs=!1,br=null,Kf.apply(Xf,arguments)}function Jf(n,e,t,s,r,l,a,o,i){if(Zf.apply(this,arguments),hs){if(hs){var c=br;hs=!1,br=null}else throw Error(v(198));Fr||(Fr=!0,Ga=c)}}function tt(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ec(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function cu(n){if(tt(n)!==n)throw Error(v(188))}function nh(n){var e=n.alternate;if(!e){if(e=tt(n),e===null)throw Error(v(188));return e!==n?null:n}for(var t=n,s=e;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return cu(r),n;if(l===s)return cu(r),e;l=l.sibling}throw Error(v(188))}if(t.return!==s.return)t=r,s=l;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,s=l;break}if(o===s){a=!0,s=r,t=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===t){a=!0,t=l,s=r;break}if(o===s){a=!0,s=l,t=r;break}o=o.sibling}if(!a)throw Error(v(189))}}if(t.alternate!==s)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?n:e}function Pc(n){return n=nh(n),n!==null?qc(n):null}function qc(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=qc(n);if(e!==null)return e;n=n.sibling}return null}var Nc=xn.unstable_scheduleCallback,pu=xn.unstable_cancelCallback,eh=xn.unstable_shouldYield,th=xn.unstable_requestPaint,H=xn.unstable_now,sh=xn.unstable_getCurrentPriorityLevel,Eo=xn.unstable_ImmediatePriority,Tc=xn.unstable_UserBlockingPriority,Gr=xn.unstable_NormalPriority,rh=xn.unstable_LowPriority,Oc=xn.unstable_IdlePriority,il=null,Yn=null;function lh(n){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(il,n,void 0,(n.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:ih,ah=Math.log,oh=Math.LN2;function ih(n){return n>>>=0,n===0?32:31-(ah(n)/oh|0)|0}var dr=64,fr=4194304;function ps(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Br(n,e){var t=n.pendingLanes;if(t===0)return 0;var s=0,r=n.suspendedLanes,l=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?s=ps(o):(l&=a,l!==0&&(s=ps(l)))}else a=t&~r,a!==0?s=ps(a):l!==0&&(s=ps(l));if(s===0)return 0;if(e!==0&&e!==s&&!(e&r)&&(r=s&-s,l=e&-e,r>=l||r===16&&(l&4194240)!==0))return e;if(s&4&&(s|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=s;0<e;)t=31-Fn(e),r=1<<t,s|=n[t],e&=~r;return s}function uh(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ch(n,e){for(var t=n.suspendedLanes,s=n.pingedLanes,r=n.expirationTimes,l=n.pendingLanes;0<l;){var a=31-Fn(l),o=1<<a,i=r[a];i===-1?(!(o&t)||o&s)&&(r[a]=uh(o,e)):i<=e&&(n.expiredLanes|=o),l&=~o}}function Ba(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zc(){var n=dr;return dr<<=1,!(dr&4194240)&&(dr=64),n}function ia(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function bs(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Fn(e),n[e]=t}function ph(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var s=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Fn(t),l=1<<r;e[r]=0,s[r]=-1,n[r]=-1,t&=~l}}function Po(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var s=31-Fn(t),r=1<<s;r&e|n[s]&e&&(n[s]|=e),t&=~r}}var L=0;function Lc(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Mc,qo,Ic,Dc,Rc,Ua=!1,hr=[],_e=null,Ee=null,Pe=null,_s=new Map,Es=new Map,ke=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(n,e){switch(n){case"focusin":case"focusout":_e=null;break;case"dragenter":case"dragleave":Ee=null;break;case"mouseover":case"mouseout":Pe=null;break;case"pointerover":case"pointerout":_s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function ts(n,e,t,s,r,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:s,nativeEvent:l,targetContainers:[r]},e!==null&&(e=Gs(e),e!==null&&qo(e)),n):(n.eventSystemFlags|=s,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function fh(n,e,t,s,r){switch(e){case"focusin":return _e=ts(_e,n,e,t,s,r),!0;case"dragenter":return Ee=ts(Ee,n,e,t,s,r),!0;case"mouseover":return Pe=ts(Pe,n,e,t,s,r),!0;case"pointerover":var l=r.pointerId;return _s.set(l,ts(_s.get(l)||null,n,e,t,s,r)),!0;case"gotpointercapture":return l=r.pointerId,Es.set(l,ts(Es.get(l)||null,n,e,t,s,r)),!0}return!1}function Ac(n){var e=$e(n.target);if(e!==null){var t=tt(e);if(t!==null){if(e=t.tag,e===13){if(e=Ec(t),e!==null){n.blockedOn=e,Rc(n.priority,function(){Ic(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Va(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var s=new t.constructor(t.type,t);Aa=s,t.target.dispatchEvent(s),Aa=null}else return e=Gs(t),e!==null&&qo(e),n.blockedOn=t,!1;e.shift()}return!0}function fu(n,e,t){qr(n)&&t.delete(e)}function hh(){Ua=!1,_e!==null&&qr(_e)&&(_e=null),Ee!==null&&qr(Ee)&&(Ee=null),Pe!==null&&qr(Pe)&&(Pe=null),_s.forEach(fu),Es.forEach(fu)}function ss(n,e){n.blockedOn===e&&(n.blockedOn=null,Ua||(Ua=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,hh)))}function Ps(n){function e(r){return ss(r,n)}if(0<hr.length){ss(hr[0],n);for(var t=1;t<hr.length;t++){var s=hr[t];s.blockedOn===n&&(s.blockedOn=null)}}for(_e!==null&&ss(_e,n),Ee!==null&&ss(Ee,n),Pe!==null&&ss(Pe,n),_s.forEach(e),Es.forEach(e),t=0;t<ke.length;t++)s=ke[t],s.blockedOn===n&&(s.blockedOn=null);for(;0<ke.length&&(t=ke[0],t.blockedOn===null);)Ac(t),t.blockedOn===null&&ke.shift()}var Et=ie.ReactCurrentBatchConfig,Ur=!0;function mh(n,e,t,s){var r=L,l=Et.transition;Et.transition=null;try{L=1,No(n,e,t,s)}finally{L=r,Et.transition=l}}function yh(n,e,t,s){var r=L,l=Et.transition;Et.transition=null;try{L=4,No(n,e,t,s)}finally{L=r,Et.transition=l}}function No(n,e,t,s){if(Ur){var r=Va(n,e,t,s);if(r===null)ma(n,e,s,Vr,t),du(n,s);else if(fh(r,n,e,t,s))s.stopPropagation();else if(du(n,s),e&4&&-1<dh.indexOf(n)){for(;r!==null;){var l=Gs(r);if(l!==null&&Mc(l),l=Va(n,e,t,s),l===null&&ma(n,e,s,Vr,t),l===r)break;r=l}r!==null&&s.stopPropagation()}else ma(n,e,s,null,t)}}var Vr=null;function Va(n,e,t,s){if(Vr=null,n=_o(s),n=$e(n),n!==null)if(e=tt(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ec(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Vr=n,null}function bc(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case Eo:return 1;case Tc:return 4;case Gr:case rh:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var xe=null,To=null,Nr=null;function Fc(){if(Nr)return Nr;var n,e=To,t=e.length,s,r="value"in xe?xe.value:xe.textContent,l=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(s=1;s<=a&&e[t-s]===r[l-s];s++);return Nr=r.slice(n,1<s?1-s:void 0)}function Tr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function mr(){return!0}function hu(){return!1}function Cn(n){function e(t,s,r,l,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mr:hu,this.isPropagationStopped=hu,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),e}var Dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oo=Cn(Dt),Fs=U({},Dt,{view:0,detail:0}),gh=Cn(Fs),ua,ca,rs,ul=U({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rs&&(rs&&n.type==="mousemove"?(ua=n.screenX-rs.screenX,ca=n.screenY-rs.screenY):ca=ua=0,rs=n),ua)},movementY:function(n){return"movementY"in n?n.movementY:ca}}),mu=Cn(ul),vh=U({},ul,{dataTransfer:0}),jh=Cn(vh),wh=U({},Fs,{relatedTarget:0}),pa=Cn(wh),kh=U({},Dt,{animationName:0,elapsedTime:0,pseudoElement:0}),Sh=Cn(kh),xh=U({},Dt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ch=Cn(xh),_h=U({},Dt,{data:0}),yu=Cn(_h),Eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=qh[n])?!!e[n]:!1}function zo(){return Nh}var Th=U({},Fs,{key:function(n){if(n.key){var e=Eh[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Tr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ph[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(n){return n.type==="keypress"?Tr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Oh=Cn(Th),zh=U({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Cn(zh),Lh=U({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),Mh=Cn(Lh),Ih=U({},Dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=Cn(Ih),Rh=U({},ul,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=Cn(Rh),bh=[9,13,27,32],Lo=re&&"CompositionEvent"in window,ms=null;re&&"documentMode"in document&&(ms=document.documentMode);var Fh=re&&"TextEvent"in window&&!ms,Gc=re&&(!Lo||ms&&8<ms&&11>=ms),vu=" ",ju=!1;function Bc(n,e){switch(n){case"keyup":return bh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ft=!1;function Gh(n,e){switch(n){case"compositionend":return Uc(e);case"keypress":return e.which!==32?null:(ju=!0,vu);case"textInput":return n=e.data,n===vu&&ju?null:n;default:return null}}function Bh(n,e){if(ft)return n==="compositionend"||!Lo&&Bc(n,e)?(n=Fc(),Nr=To=xe=null,ft=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gc&&e.locale!=="ko"?null:e.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Uh[n.type]:e==="textarea"}function Vc(n,e,t,s){kc(s),e=$r(e,"onChange"),0<e.length&&(t=new Oo("onChange","change",null,t,s),n.push({event:t,listeners:e}))}var ys=null,qs=null;function Vh(n){ep(n,0)}function cl(n){var e=yt(n);if(hc(e))return n}function $h(n,e){if(n==="change")return e}var $c=!1;re&&(re?(gr="oninput"in document,gr||(da=document.createElement("div"),da.setAttribute("oninput","return;"),gr=typeof da.oninput=="function"),yr=gr):yr=!1,$c=yr&&(!document.documentMode||9<document.documentMode));var yr,gr,da;function ku(){ys&&(ys.detachEvent("onpropertychange",Wc),qs=ys=null)}function Wc(n){if(n.propertyName==="value"&&cl(qs)){var e=[];Vc(e,qs,n,_o(n)),_c(Vh,e)}}function Wh(n,e,t){n==="focusin"?(ku(),ys=e,qs=t,ys.attachEvent("onpropertychange",Wc)):n==="focusout"&&ku()}function Hh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cl(qs)}function Qh(n,e){if(n==="click")return cl(e)}function Yh(n,e){if(n==="input"||n==="change")return cl(e)}function Kh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Kh;function Ns(n,e){if(Bn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),s=Object.keys(e);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!Ea.call(e,r)||!Bn(n[r],e[r]))return!1}return!0}function Su(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xu(n,e){var t=Su(n);n=0;for(var s;t;){if(t.nodeType===3){if(s=n+t.textContent.length,n<=e&&s>=e)return{node:t,offset:e-n};n=s}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Su(t)}}function Hc(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Hc(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Qc(){for(var n=window,e=Ar();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ar(n.document)}return e}function Mo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Xh(n){var e=Qc(),t=n.focusedElem,s=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Hc(t.ownerDocument.documentElement,t)){if(s!==null&&Mo(t)){if(e=s.start,n=s.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,l=Math.min(s.start,r);s=s.end===void 0?l:Math.min(s.end,r),!n.extend&&l>s&&(r=s,s=l,l=r),r=xu(t,l);var a=xu(t,s);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),l>s?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zh=re&&"documentMode"in document&&11>=document.documentMode,ht=null,$a=null,gs=null,Wa=!1;function Cu(n,e,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wa||ht==null||ht!==Ar(s)||(s=ht,"selectionStart"in s&&Mo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),gs&&Ns(gs,s)||(gs=s,s=$r($a,"onSelect"),0<s.length&&(e=new Oo("onSelect","select",null,e,t),n.push({event:e,listeners:s}),e.target=ht)))}function vr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var mt={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},fa={},Yc={};re&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function pl(n){if(fa[n])return fa[n];if(!mt[n])return n;var e=mt[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Yc)return fa[n]=e[t];return n}var Kc=pl("animationend"),Xc=pl("animationiteration"),Zc=pl("animationstart"),Jc=pl("transitionend"),np=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ie(n,e){np.set(n,e),et(e,[n])}for(jr=0;jr<_u.length;jr++)wr=_u[jr],Eu=wr.toLowerCase(),Pu=wr[0].toUpperCase()+wr.slice(1),Ie(Eu,"on"+Pu);var wr,Eu,Pu,jr;Ie(Kc,"onAnimationEnd");Ie(Xc,"onAnimationIteration");Ie(Zc,"onAnimationStart");Ie("dblclick","onDoubleClick");Ie("focusin","onFocus");Ie("focusout","onBlur");Ie(Jc,"onTransitionEnd");Nt("onMouseEnter",["mouseout","mouseover"]);Nt("onMouseLeave",["mouseout","mouseover"]);Nt("onPointerEnter",["pointerout","pointerover"]);Nt("onPointerLeave",["pointerout","pointerover"]);et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));et("onBeforeInput",["compositionend","keypress","textInput","paste"]);et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function qu(n,e,t){var s=n.type||"unknown-event";n.currentTarget=t,Jf(s,e,void 0,n),n.currentTarget=null}function ep(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var s=n[t],r=s.event;s=s.listeners;n:{var l=void 0;if(e)for(var a=s.length-1;0<=a;a--){var o=s[a],i=o.instance,c=o.currentTarget;if(o=o.listener,i!==l&&r.isPropagationStopped())break n;qu(r,o,c),l=i}else for(a=0;a<s.length;a++){if(o=s[a],i=o.instance,c=o.currentTarget,o=o.listener,i!==l&&r.isPropagationStopped())break n;qu(r,o,c),l=i}}}if(Fr)throw n=Ga,Fr=!1,Ga=null,n}function R(n,e){var t=e[Xa];t===void 0&&(t=e[Xa]=new Set);var s=n+"__bubble";t.has(s)||(tp(e,n,2,!1),t.add(s))}function ha(n,e,t){var s=0;e&&(s|=4),tp(t,n,s,e)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Ts(n){if(!n[kr]){n[kr]=!0,uc.forEach(function(t){t!=="selectionchange"&&(Jh.has(t)||ha(t,!1,n),ha(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[kr]||(e[kr]=!0,ha("selectionchange",!1,e))}}function tp(n,e,t,s){switch(bc(e)){case 1:var r=mh;break;case 4:r=yh;break;default:r=No}t=r.bind(null,e,t,n),r=void 0,!Fa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),s?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ma(n,e,t,s,r){var l=s;if(!(e&1)&&!(e&2)&&s!==null)n:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var o=s.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var i=a.tag;if((i===3||i===4)&&(i=a.stateNode.containerInfo,i===r||i.nodeType===8&&i.parentNode===r))return;a=a.return}for(;o!==null;){if(a=$e(o),a===null)return;if(i=a.tag,i===5||i===6){s=l=a;continue n}o=o.parentNode}}s=s.return}_c(function(){var c=l,f=_o(t),m=[];n:{var h=np.get(n);if(h!==void 0){var g=Oo,w=n;switch(n){case"keypress":if(Tr(t)===0)break n;case"keydown":case"keyup":g=Oh;break;case"focusin":w="focus",g=pa;break;case"focusout":w="blur",g=pa;break;case"beforeblur":case"afterblur":g=pa;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mh;break;case Kc:case Xc:case Zc:g=Sh;break;case Jc:g=Dh;break;case"scroll":g=gh;break;case"wheel":g=Ah;break;case"copy":case"cut":case"paste":g=Ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gu}var k=(e&4)!==0,N=!k&&n==="scroll",p=k?h!==null?h+"Capture":null:h;k=[];for(var u=c,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,p!==null&&(y=Cs(u,p),y!=null&&k.push(Os(u,y,d)))),N)break;u=u.return}0<k.length&&(h=new g(h,w,null,t,f),m.push({event:h,listeners:k}))}}if(!(e&7)){n:{if(h=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",h&&t!==Aa&&(w=t.relatedTarget||t.fromElement)&&($e(w)||w[le]))break n;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=t.relatedTarget||t.toElement,g=c,w=w?$e(w):null,w!==null&&(N=tt(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(k=mu,y="onMouseLeave",p="onMouseEnter",u="mouse",(n==="pointerout"||n==="pointerover")&&(k=gu,y="onPointerLeave",p="onPointerEnter",u="pointer"),N=g==null?h:yt(g),d=w==null?h:yt(w),h=new k(y,u+"leave",g,t,f),h.target=N,h.relatedTarget=d,y=null,$e(f)===c&&(k=new k(p,u+"enter",w,t,f),k.target=d,k.relatedTarget=N,y=k),N=y,g&&w)e:{for(k=g,p=w,u=0,d=k;d;d=ct(d))u++;for(d=0,y=p;y;y=ct(y))d++;for(;0<u-d;)k=ct(k),u--;for(;0<d-u;)p=ct(p),d--;for(;u--;){if(k===p||p!==null&&k===p.alternate)break e;k=ct(k),p=ct(p)}k=null}else k=null;g!==null&&Nu(m,h,g,k,!1),w!==null&&N!==null&&Nu(m,N,w,k,!0)}}n:{if(h=c?yt(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=$h;else if(wu(h))if($c)S=Yh;else{S=Hh;var x=Wh}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Qh);if(S&&(S=S(n,c))){Vc(m,S,t,f);break n}x&&x(n,h,c),n==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&La(h,"number",h.value)}switch(x=c?yt(c):window,n){case"focusin":(wu(x)||x.contentEditable==="true")&&(ht=x,$a=c,gs=null);break;case"focusout":gs=$a=ht=null;break;case"mousedown":Wa=!0;break;case"contextmenu":case"mouseup":case"dragend":Wa=!1,Cu(m,t,f);break;case"selectionchange":if(Zh)break;case"keydown":case"keyup":Cu(m,t,f)}var j;if(Lo)n:{switch(n){case"compositionstart":var _="onCompositionStart";break n;case"compositionend":_="onCompositionEnd";break n;case"compositionupdate":_="onCompositionUpdate";break n}_=void 0}else ft?Bc(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Gc&&t.locale!=="ko"&&(ft||_!=="onCompositionStart"?_==="onCompositionEnd"&&ft&&(j=Fc()):(xe=f,To="value"in xe?xe.value:xe.textContent,ft=!0)),x=$r(c,_),0<x.length&&(_=new yu(_,n,null,t,f),m.push({event:_,listeners:x}),j?_.data=j:(j=Uc(t),j!==null&&(_.data=j)))),(j=Fh?Gh(n,t):Bh(n,t))&&(c=$r(c,"onBeforeInput"),0<c.length&&(f=new yu("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:c}),f.data=j))}ep(m,e)})}function Os(n,e,t){return{instance:n,listener:e,currentTarget:t}}function $r(n,e){for(var t=e+"Capture",s=[];n!==null;){var r=n,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=Cs(n,t),l!=null&&s.unshift(Os(n,l,r)),l=Cs(n,e),l!=null&&s.push(Os(n,l,r))),n=n.return}return s}function ct(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nu(n,e,t,s,r){for(var l=e._reactName,a=[];t!==null&&t!==s;){var o=t,i=o.alternate,c=o.stateNode;if(i!==null&&i===s)break;o.tag===5&&c!==null&&(o=c,r?(i=Cs(t,l),i!=null&&a.unshift(Os(t,i,o))):r||(i=Cs(t,l),i!=null&&a.push(Os(t,i,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var nm=/\r\n?/g,em=/\u0000|\uFFFD/g;function Tu(n){return(typeof n=="string"?n:""+n).replace(nm,`
`).replace(em,"")}function Sr(n,e,t){if(e=Tu(e),Tu(n)!==e&&t)throw Error(v(425))}function Wr(){}var Ha=null,Qa=null;function Ya(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,tm=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(n){return Ou.resolve(null).then(n).catch(rm)}:Ka;function rm(n){setTimeout(function(){throw n})}function ya(n,e){var t=e,s=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){n.removeChild(r),Ps(e);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);Ps(e)}function qe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function zu(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Rt=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Rt,zs="__reactProps$"+Rt,le="__reactContainer$"+Rt,Xa="__reactEvents$"+Rt,lm="__reactListeners$"+Rt,am="__reactHandles$"+Rt;function $e(n){var e=n[Qn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[le]||t[Qn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=zu(n);n!==null;){if(t=n[Qn])return t;n=zu(n)}return e}n=t,t=n.parentNode}return null}function Gs(n){return n=n[Qn]||n[le],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function yt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(v(33))}function dl(n){return n[zs]||null}var Za=[],gt=-1;function De(n){return{current:n}}function A(n){0>gt||(n.current=Za[gt],Za[gt]=null,gt--)}function D(n,e){gt++,Za[gt]=n.current,n.current=e}var Me={},on=De(Me),gn=De(!1),Ke=Me;function Tt(n,e){var t=n.type.contextTypes;if(!t)return Me;var s=n.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===e)return s.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in t)r[l]=e[l];return s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function Hr(){A(gn),A(on)}function Lu(n,e,t){if(on.current!==Me)throw Error(v(168));D(on,e),D(gn,t)}function sp(n,e,t){var s=n.stateNode;if(e=e.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in e))throw Error(v(108,Wf(n)||"Unknown",r));return U({},t,s)}function Qr(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Me,Ke=on.current,D(on,n),D(gn,gn.current),!0}function Mu(n,e,t){var s=n.stateNode;if(!s)throw Error(v(169));t?(n=sp(n,e,Ke),s.__reactInternalMemoizedMergedChildContext=n,A(gn),A(on),D(on,n)):A(gn),D(gn,t)}var ne=null,fl=!1,ga=!1;function rp(n){ne===null?ne=[n]:ne.push(n)}function om(n){fl=!0,rp(n)}function Re(){if(!ga&&ne!==null){ga=!0;var n=0,e=L;try{var t=ne;for(L=1;n<t.length;n++){var s=t[n];do s=s(!0);while(s!==null)}ne=null,fl=!1}catch(r){throw ne!==null&&(ne=ne.slice(n+1)),Nc(Eo,Re),r}finally{L=e,ga=!1}}return null}var vt=[],jt=0,Yr=null,Kr=0,Pn=[],qn=0,Xe=null,ee=1,te="";function Ue(n,e){vt[jt++]=Kr,vt[jt++]=Yr,Yr=n,Kr=e}function lp(n,e,t){Pn[qn++]=ee,Pn[qn++]=te,Pn[qn++]=Xe,Xe=n;var s=ee;n=te;var r=32-Fn(s)-1;s&=~(1<<r),t+=1;var l=32-Fn(e)+r;if(30<l){var a=r-r%5;l=(s&(1<<a)-1).toString(32),s>>=a,r-=a,ee=1<<32-Fn(e)+r|t<<r|s,te=l+n}else ee=1<<l|t<<r|s,te=n}function Io(n){n.return!==null&&(Ue(n,1),lp(n,1,0))}function Do(n){for(;n===Yr;)Yr=vt[--jt],vt[jt]=null,Kr=vt[--jt],vt[jt]=null;for(;n===Xe;)Xe=Pn[--qn],Pn[qn]=null,te=Pn[--qn],Pn[qn]=null,ee=Pn[--qn],Pn[qn]=null}var Sn=null,kn=null,F=!1,bn=null;function ap(n,e){var t=Nn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Iu(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Sn=n,kn=qe(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Sn=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Xe!==null?{id:ee,overflow:te}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Nn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Sn=n,kn=null,!0):!1;default:return!1}}function Ja(n){return(n.mode&1)!==0&&(n.flags&128)===0}function no(n){if(F){var e=kn;if(e){var t=e;if(!Iu(n,e)){if(Ja(n))throw Error(v(418));e=qe(t.nextSibling);var s=Sn;e&&Iu(n,e)?ap(s,t):(n.flags=n.flags&-4097|2,F=!1,Sn=n)}}else{if(Ja(n))throw Error(v(418));n.flags=n.flags&-4097|2,F=!1,Sn=n}}}function Du(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Sn=n}function xr(n){if(n!==Sn)return!1;if(!F)return Du(n),F=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ya(n.type,n.memoizedProps)),e&&(e=kn)){if(Ja(n))throw op(),Error(v(418));for(;e;)ap(n,e),e=qe(e.nextSibling)}if(Du(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){kn=qe(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=Sn?qe(n.stateNode.nextSibling):null;return!0}function op(){for(var n=kn;n;)n=qe(n.nextSibling)}function Ot(){kn=Sn=null,F=!1}function Ro(n){bn===null?bn=[n]:bn.push(n)}var im=ie.ReactCurrentBatchConfig;function Rn(n,e){if(n&&n.defaultProps){e=U({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Xr=De(null),Zr=null,wt=null,Ao=null;function bo(){Ao=wt=Zr=null}function Fo(n){var e=Xr.current;A(Xr),n._currentValue=e}function eo(n,e,t){for(;n!==null;){var s=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),n===t)break;n=n.return}}function Pt(n,e){Zr=n,Ao=wt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(yn=!0),n.firstContext=null)}function On(n){var e=n._currentValue;if(Ao!==n)if(n={context:n,memoizedValue:e,next:null},wt===null){if(Zr===null)throw Error(v(308));wt=n,Zr.dependencies={lanes:0,firstContext:n}}else wt=wt.next=n;return e}var We=null;function Go(n){We===null?We=[n]:We.push(n)}function ip(n,e,t,s){var r=e.interleaved;return r===null?(t.next=t,Go(e)):(t.next=r.next,r.next=t),e.interleaved=t,ae(n,s)}function ae(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var we=!1;function Bo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function se(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ne(n,e,t){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,O&2){var r=s.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),s.pending=e,ae(n,t)}return r=s.interleaved,r===null?(e.next=e,Go(s)):(e.next=r.next,r.next=e),s.interleaved=e,ae(n,t)}function Or(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var s=e.lanes;s&=n.pendingLanes,t|=s,e.lanes=t,Po(n,t)}}function Ru(n,e){var t=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?r=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?r=l=e:l=l.next=e}else r=l=e;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:s.shared,effects:s.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Jr(n,e,t,s){var r=n.updateQueue;we=!1;var l=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var i=o,c=i.next;i.next=null,a===null?l=c:a.next=c,a=i;var f=n.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=i))}if(l!==null){var m=r.baseState;a=0,f=c=i=null,o=l;do{var h=o.lane,g=o.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var w=n,k=o;switch(h=e,g=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(g,m,h);break n}m=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(g,m,h):w,h==null)break n;m=U({},m,h);break n;case 2:we=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,i=m):f=f.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(i=m),r.baseState=i,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else l===null&&(r.shared.lanes=0);Je|=a,n.lanes=a,n.memoizedState=m}}function Au(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var s=n[e],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(v(191,r));r.call(s)}}}var cp=new ic.Component().refs;function to(n,e,t,s){e=n.memoizedState,t=t(s,e),t=t==null?e:U({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hl={isMounted:function(n){return(n=n._reactInternals)?tt(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var s=dn(),r=Oe(n),l=se(s,r);l.payload=e,t!=null&&(l.callback=t),e=Ne(n,l,r),e!==null&&(Gn(e,n,r,s),Or(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var s=dn(),r=Oe(n),l=se(s,r);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=Ne(n,l,r),e!==null&&(Gn(e,n,r,s),Or(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=dn(),s=Oe(n),r=se(t,s);r.tag=2,e!=null&&(r.callback=e),e=Ne(n,r,s),e!==null&&(Gn(e,n,s,t),Or(e,n,s))}};function bu(n,e,t,s,r,l,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,l,a):e.prototype&&e.prototype.isPureReactComponent?!Ns(t,s)||!Ns(r,l):!0}function pp(n,e,t){var s=!1,r=Me,l=e.contextType;return typeof l=="object"&&l!==null?l=On(l):(r=vn(e)?Ke:on.current,s=e.contextTypes,l=(s=s!=null)?Tt(n,r):Me),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,n.stateNode=e,e._reactInternals=n,s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=l),e}function Fu(n,e,t,s){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,s),e.state!==n&&hl.enqueueReplaceState(e,e.state,null)}function so(n,e,t,s){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=cp,Bo(n);var l=e.contextType;typeof l=="object"&&l!==null?r.context=On(l):(l=vn(e)?Ke:on.current,r.context=Tt(n,l)),r.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(to(n,e,l,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hl.enqueueReplaceState(r,r.state,null),Jr(n,t,r,s),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ls(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var s=t.stateNode}if(!s)throw Error(v(147,n));var r=s,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(a){var o=r.refs;o===cp&&(o=r.refs={}),a===null?delete o[l]:o[l]=a},e._stringRef=l,e)}if(typeof n!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,n))}return n}function Cr(n,e){throw n=Object.prototype.toString.call(e),Error(v(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Gu(n){var e=n._init;return e(n._payload)}function dp(n){function e(p,u){if(n){var d=p.deletions;d===null?(p.deletions=[u],p.flags|=16):d.push(u)}}function t(p,u){if(!n)return null;for(;u!==null;)e(p,u),u=u.sibling;return null}function s(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function r(p,u){return p=ze(p,u),p.index=0,p.sibling=null,p}function l(p,u,d){return p.index=d,n?(d=p.alternate,d!==null?(d=d.index,d<u?(p.flags|=2,u):d):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return n&&p.alternate===null&&(p.flags|=2),p}function o(p,u,d,y){return u===null||u.tag!==6?(u=Ca(d,p.mode,y),u.return=p,u):(u=r(u,d),u.return=p,u)}function i(p,u,d,y){var S=d.type;return S===dt?f(p,u,d.props.children,y,d.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===je&&Gu(S)===u.type)?(y=r(u,d.props),y.ref=ls(p,u,d),y.return=p,y):(y=Rr(d.type,d.key,d.props,null,p.mode,y),y.ref=ls(p,u,d),y.return=p,y)}function c(p,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=_a(d,p.mode,y),u.return=p,u):(u=r(u,d.children||[]),u.return=p,u)}function f(p,u,d,y,S){return u===null||u.tag!==7?(u=Ye(d,p.mode,y,S),u.return=p,u):(u=r(u,d),u.return=p,u)}function m(p,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ca(""+u,p.mode,d),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ur:return d=Rr(u.type,u.key,u.props,null,p.mode,d),d.ref=ls(p,null,u),d.return=p,d;case pt:return u=_a(u,p.mode,d),u.return=p,u;case je:var y=u._init;return m(p,y(u._payload),d)}if(cs(u)||es(u))return u=Ye(u,p.mode,d,null),u.return=p,u;Cr(p,u)}return null}function h(p,u,d,y){var S=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:o(p,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ur:return d.key===S?i(p,u,d,y):null;case pt:return d.key===S?c(p,u,d,y):null;case je:return S=d._init,h(p,u,S(d._payload),y)}if(cs(d)||es(d))return S!==null?null:f(p,u,d,y,null);Cr(p,d)}return null}function g(p,u,d,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(d)||null,o(u,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ur:return p=p.get(y.key===null?d:y.key)||null,i(u,p,y,S);case pt:return p=p.get(y.key===null?d:y.key)||null,c(u,p,y,S);case je:var x=y._init;return g(p,u,d,x(y._payload),S)}if(cs(y)||es(y))return p=p.get(d)||null,f(u,p,y,S,null);Cr(u,y)}return null}function w(p,u,d,y){for(var S=null,x=null,j=u,_=u=0,b=null;j!==null&&_<d.length;_++){j.index>_?(b=j,j=null):b=j.sibling;var T=h(p,j,d[_],y);if(T===null){j===null&&(j=b);break}n&&j&&T.alternate===null&&e(p,j),u=l(T,u,_),x===null?S=T:x.sibling=T,x=T,j=b}if(_===d.length)return t(p,j),F&&Ue(p,_),S;if(j===null){for(;_<d.length;_++)j=m(p,d[_],y),j!==null&&(u=l(j,u,_),x===null?S=j:x.sibling=j,x=j);return F&&Ue(p,_),S}for(j=s(p,j);_<d.length;_++)b=g(j,p,_,d[_],y),b!==null&&(n&&b.alternate!==null&&j.delete(b.key===null?_:b.key),u=l(b,u,_),x===null?S=b:x.sibling=b,x=b);return n&&j.forEach(function(Vn){return e(p,Vn)}),F&&Ue(p,_),S}function k(p,u,d,y){var S=es(d);if(typeof S!="function")throw Error(v(150));if(d=S.call(d),d==null)throw Error(v(151));for(var x=S=null,j=u,_=u=0,b=null,T=d.next();j!==null&&!T.done;_++,T=d.next()){j.index>_?(b=j,j=null):b=j.sibling;var Vn=h(p,j,T.value,y);if(Vn===null){j===null&&(j=b);break}n&&j&&Vn.alternate===null&&e(p,j),u=l(Vn,u,_),x===null?S=Vn:x.sibling=Vn,x=Vn,j=b}if(T.done)return t(p,j),F&&Ue(p,_),S;if(j===null){for(;!T.done;_++,T=d.next())T=m(p,T.value,y),T!==null&&(u=l(T,u,_),x===null?S=T:x.sibling=T,x=T);return F&&Ue(p,_),S}for(j=s(p,j);!T.done;_++,T=d.next())T=g(j,p,_,T.value,y),T!==null&&(n&&T.alternate!==null&&j.delete(T.key===null?_:T.key),u=l(T,u,_),x===null?S=T:x.sibling=T,x=T);return n&&j.forEach(function(Fl){return e(p,Fl)}),F&&Ue(p,_),S}function N(p,u,d,y){if(typeof d=="object"&&d!==null&&d.type===dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ur:n:{for(var S=d.key,x=u;x!==null;){if(x.key===S){if(S=d.type,S===dt){if(x.tag===7){t(p,x.sibling),u=r(x,d.props.children),u.return=p,p=u;break n}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===je&&Gu(S)===x.type){t(p,x.sibling),u=r(x,d.props),u.ref=ls(p,x,d),u.return=p,p=u;break n}t(p,x);break}else e(p,x);x=x.sibling}d.type===dt?(u=Ye(d.props.children,p.mode,y,d.key),u.return=p,p=u):(y=Rr(d.type,d.key,d.props,null,p.mode,y),y.ref=ls(p,u,d),y.return=p,p=y)}return a(p);case pt:n:{for(x=d.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){t(p,u.sibling),u=r(u,d.children||[]),u.return=p,p=u;break n}else{t(p,u);break}else e(p,u);u=u.sibling}u=_a(d,p.mode,y),u.return=p,p=u}return a(p);case je:return x=d._init,N(p,u,x(d._payload),y)}if(cs(d))return w(p,u,d,y);if(es(d))return k(p,u,d,y);Cr(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(t(p,u.sibling),u=r(u,d),u.return=p,p=u):(t(p,u),u=Ca(d,p.mode,y),u.return=p,p=u),a(p)):t(p,u)}return N}var zt=dp(!0),fp=dp(!1),Bs={},Kn=De(Bs),Ls=De(Bs),Ms=De(Bs);function He(n){if(n===Bs)throw Error(v(174));return n}function Uo(n,e){switch(D(Ms,e),D(Ls,n),D(Kn,Bs),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ia(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ia(e,n)}A(Kn),D(Kn,e)}function Lt(){A(Kn),A(Ls),A(Ms)}function hp(n){He(Ms.current);var e=He(Kn.current),t=Ia(e,n.type);e!==t&&(D(Ls,n),D(Kn,t))}function Vo(n){Ls.current===n&&(A(Kn),A(Ls))}var G=De(0);function nl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=[];function $o(){for(var n=0;n<va.length;n++)va[n]._workInProgressVersionPrimary=null;va.length=0}var zr=ie.ReactCurrentDispatcher,ja=ie.ReactCurrentBatchConfig,Ze=0,B=null,K=null,Z=null,el=!1,vs=!1,Is=0,um=0;function rn(){throw Error(v(321))}function Wo(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Bn(n[t],e[t]))return!1;return!0}function Ho(n,e,t,s,r,l){if(Ze=l,B=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zr.current=n===null||n.memoizedState===null?fm:hm,n=t(s,r),vs){l=0;do{if(vs=!1,Is=0,25<=l)throw Error(v(301));l+=1,Z=K=null,e.updateQueue=null,zr.current=mm,n=t(s,r)}while(vs)}if(zr.current=tl,e=K!==null&&K.next!==null,Ze=0,Z=K=B=null,el=!1,e)throw Error(v(300));return n}function Qo(){var n=Is!==0;return Is=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=n:Z=Z.next=n,Z}function zn(){if(K===null){var n=B.alternate;n=n!==null?n.memoizedState:null}else n=K.next;var e=Z===null?B.memoizedState:Z.next;if(e!==null)Z=e,K=n;else{if(n===null)throw Error(v(310));K=n,n={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?B.memoizedState=Z=n:Z=Z.next=n}return Z}function Ds(n,e){return typeof e=="function"?e(n):e}function wa(n){var e=zn(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var s=K,r=s.baseQueue,l=t.pending;if(l!==null){if(r!==null){var a=r.next;r.next=l.next,l.next=a}s.baseQueue=r=l,t.pending=null}if(r!==null){l=r.next,s=s.baseState;var o=a=null,i=null,c=l;do{var f=c.lane;if((Ze&f)===f)i!==null&&(i=i.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:n(s,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};i===null?(o=i=m,a=s):i=i.next=m,B.lanes|=f,Je|=f}c=c.next}while(c!==null&&c!==l);i===null?a=s:i.next=o,Bn(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseState=a,e.baseQueue=i,t.lastRenderedState=s}if(n=t.interleaved,n!==null){r=n;do l=r.lane,B.lanes|=l,Je|=l,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ka(n){var e=zn(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var s=t.dispatch,r=t.pending,l=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do l=n(l,a.action),a=a.next;while(a!==r);Bn(l,e.memoizedState)||(yn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,s]}function mp(){}function yp(n,e){var t=B,s=zn(),r=e(),l=!Bn(s.memoizedState,r);if(l&&(s.memoizedState=r,yn=!0),s=s.queue,Yo(jp.bind(null,t,s,n),[n]),s.getSnapshot!==e||l||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,Rs(9,vp.bind(null,t,s,r,e),void 0,null),J===null)throw Error(v(349));Ze&30||gp(t,e,r)}return r}function gp(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function vp(n,e,t,s){e.value=t,e.getSnapshot=s,wp(e)&&kp(n)}function jp(n,e,t){return t(function(){wp(e)&&kp(n)})}function wp(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Bn(n,t)}catch{return!0}}function kp(n){var e=ae(n,1);e!==null&&Gn(e,n,1,-1)}function Bu(n){var e=Hn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:n},e.queue=n,n=n.dispatch=dm.bind(null,B,n),[e.memoizedState,n]}function Rs(n,e,t,s){return n={tag:n,create:e,destroy:t,deps:s,next:null},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(s=t.next,t.next=n,n.next=s,e.lastEffect=n)),n}function Sp(){return zn().memoizedState}function Lr(n,e,t,s){var r=Hn();B.flags|=n,r.memoizedState=Rs(1|e,t,void 0,s===void 0?null:s)}function ml(n,e,t,s){var r=zn();s=s===void 0?null:s;var l=void 0;if(K!==null){var a=K.memoizedState;if(l=a.destroy,s!==null&&Wo(s,a.deps)){r.memoizedState=Rs(e,t,l,s);return}}B.flags|=n,r.memoizedState=Rs(1|e,t,l,s)}function Uu(n,e){return Lr(8390656,8,n,e)}function Yo(n,e){return ml(2048,8,n,e)}function xp(n,e){return ml(4,2,n,e)}function Cp(n,e){return ml(4,4,n,e)}function _p(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ep(n,e,t){return t=t!=null?t.concat([n]):null,ml(4,4,_p.bind(null,e,n),t)}function Ko(){}function Pp(n,e){var t=zn();e=e===void 0?null:e;var s=t.memoizedState;return s!==null&&e!==null&&Wo(e,s[1])?s[0]:(t.memoizedState=[n,e],n)}function qp(n,e){var t=zn();e=e===void 0?null:e;var s=t.memoizedState;return s!==null&&e!==null&&Wo(e,s[1])?s[0]:(n=n(),t.memoizedState=[n,e],n)}function Np(n,e,t){return Ze&21?(Bn(t,e)||(t=zc(),B.lanes|=t,Je|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,yn=!0),n.memoizedState=t)}function cm(n,e){var t=L;L=t!==0&&4>t?t:4,n(!0);var s=ja.transition;ja.transition={};try{n(!1),e()}finally{L=t,ja.transition=s}}function Tp(){return zn().memoizedState}function pm(n,e,t){var s=Oe(n);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Op(n))zp(e,t);else if(t=ip(n,e,t,s),t!==null){var r=dn();Gn(t,n,s,r),Lp(t,e,s)}}function dm(n,e,t){var s=Oe(n),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Op(n))zp(e,r);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var a=e.lastRenderedState,o=l(a,t);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,a)){var i=e.interleaved;i===null?(r.next=r,Go(e)):(r.next=i.next,i.next=r),e.interleaved=r;return}}catch{}finally{}t=ip(n,e,r,s),t!==null&&(r=dn(),Gn(t,n,s,r),Lp(t,e,s))}}function Op(n){var e=n.alternate;return n===B||e!==null&&e===B}function zp(n,e){vs=el=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Lp(n,e,t){if(t&4194240){var s=e.lanes;s&=n.pendingLanes,t|=s,e.lanes=t,Po(n,t)}}var tl={readContext:On,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},fm={readContext:On,useCallback:function(n,e){return Hn().memoizedState=[n,e===void 0?null:e],n},useContext:On,useEffect:Uu,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Lr(4194308,4,_p.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Lr(4194308,4,n,e)},useInsertionEffect:function(n,e){return Lr(4,2,n,e)},useMemo:function(n,e){var t=Hn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var s=Hn();return e=t!==void 0?t(e):e,s.memoizedState=s.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},s.queue=n,n=n.dispatch=pm.bind(null,B,n),[s.memoizedState,n]},useRef:function(n){var e=Hn();return n={current:n},e.memoizedState=n},useState:Bu,useDebugValue:Ko,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=Bu(!1),e=n[0];return n=cm.bind(null,n[1]),Hn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var s=B,r=Hn();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=e(),J===null)throw Error(v(349));Ze&30||gp(s,e,t)}r.memoizedState=t;var l={value:t,getSnapshot:e};return r.queue=l,Uu(jp.bind(null,s,l,n),[n]),s.flags|=2048,Rs(9,vp.bind(null,s,l,t,e),void 0,null),t},useId:function(){var n=Hn(),e=J.identifierPrefix;if(F){var t=te,s=ee;t=(s&~(1<<32-Fn(s)-1)).toString(32)+t,e=":"+e+"R"+t,t=Is++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=um++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},hm={readContext:On,useCallback:Pp,useContext:On,useEffect:Yo,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:Cp,useMemo:qp,useReducer:wa,useRef:Sp,useState:function(){return wa(Ds)},useDebugValue:Ko,useDeferredValue:function(n){var e=zn();return Np(e,K.memoizedState,n)},useTransition:function(){var n=wa(Ds)[0],e=zn().memoizedState;return[n,e]},useMutableSource:mp,useSyncExternalStore:yp,useId:Tp,unstable_isNewReconciler:!1},mm={readContext:On,useCallback:Pp,useContext:On,useEffect:Yo,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:Cp,useMemo:qp,useReducer:ka,useRef:Sp,useState:function(){return ka(Ds)},useDebugValue:Ko,useDeferredValue:function(n){var e=zn();return K===null?e.memoizedState=n:Np(e,K.memoizedState,n)},useTransition:function(){var n=ka(Ds)[0],e=zn().memoizedState;return[n,e]},useMutableSource:mp,useSyncExternalStore:yp,useId:Tp,unstable_isNewReconciler:!1};function Mt(n,e){try{var t="",s=e;do t+=$f(s),s=s.return;while(s);var r=t}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:r,digest:null}}function Sa(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ro(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ym=typeof WeakMap=="function"?WeakMap:Map;function Mp(n,e,t){t=se(-1,t),t.tag=3,t.payload={element:null};var s=e.value;return t.callback=function(){rl||(rl=!0,mo=s),ro(n,e)},t}function Ip(n,e,t){t=se(-1,t),t.tag=3;var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=e.value;t.payload=function(){return s(r)},t.callback=function(){ro(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ro(n,e),typeof s!="function"&&(Te===null?Te=new Set([this]):Te.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Vu(n,e,t){var s=n.pingCache;if(s===null){s=n.pingCache=new ym;var r=new Set;s.set(e,r)}else r=s.get(e),r===void 0&&(r=new Set,s.set(e,r));r.has(t)||(r.add(t),n=Tm.bind(null,n,e,t),e.then(n,n))}function $u(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wu(n,e,t,s,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=se(-1,1),e.tag=2,Ne(t,e,1))),t.lanes|=1),n)}var gm=ie.ReactCurrentOwner,yn=!1;function pn(n,e,t,s){e.child=n===null?fp(e,null,t,s):zt(e,n.child,t,s)}function Hu(n,e,t,s,r){t=t.render;var l=e.ref;return Pt(e,r),s=Ho(n,e,t,s,l,r),t=Qo(),n!==null&&!yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,oe(n,e,r)):(F&&t&&Io(e),e.flags|=1,pn(n,e,s,r),e.child)}function Qu(n,e,t,s,r){if(n===null){var l=t.type;return typeof l=="function"&&!ri(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,Dp(n,e,l,s,r)):(n=Rr(t.type,null,s,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&r)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:Ns,t(a,s)&&n.ref===e.ref)return oe(n,e,r)}return e.flags|=1,n=ze(l,s),n.ref=e.ref,n.return=e,e.child=n}function Dp(n,e,t,s,r){if(n!==null){var l=n.memoizedProps;if(Ns(l,s)&&n.ref===e.ref)if(yn=!1,e.pendingProps=s=l,(n.lanes&r)!==0)n.flags&131072&&(yn=!0);else return e.lanes=n.lanes,oe(n,e,r)}return lo(n,e,t,s,r)}function Rp(n,e,t){var s=e.pendingProps,r=s.children,l=n!==null?n.memoizedState:null;if(s.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(St,wn),wn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,D(St,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=l!==null?l.baseLanes:t,D(St,wn),wn|=s}else l!==null?(s=l.baseLanes|t,e.memoizedState=null):s=t,D(St,wn),wn|=s;return pn(n,e,r,t),e.child}function Ap(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function lo(n,e,t,s,r){var l=vn(t)?Ke:on.current;return l=Tt(e,l),Pt(e,r),t=Ho(n,e,t,s,l,r),s=Qo(),n!==null&&!yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,oe(n,e,r)):(F&&s&&Io(e),e.flags|=1,pn(n,e,t,r),e.child)}function Yu(n,e,t,s,r){if(vn(t)){var l=!0;Qr(e)}else l=!1;if(Pt(e,r),e.stateNode===null)Mr(n,e),pp(e,t,s),so(e,t,s,r),s=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var i=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=On(c):(c=vn(t)?Ke:on.current,c=Tt(e,c));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==s||i!==c)&&Fu(e,a,s,c),we=!1;var h=e.memoizedState;a.state=h,Jr(e,s,a,r),i=e.memoizedState,o!==s||h!==i||gn.current||we?(typeof f=="function"&&(to(e,t,f,s),i=e.memoizedState),(o=we||bu(e,t,o,s,h,i,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=i),a.props=s,a.state=i,a.context=c,s=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{a=e.stateNode,up(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Rn(e.type,o),a.props=c,m=e.pendingProps,h=a.context,i=t.contextType,typeof i=="object"&&i!==null?i=On(i):(i=vn(t)?Ke:on.current,i=Tt(e,i));var g=t.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||h!==i)&&Fu(e,a,s,i),we=!1,h=e.memoizedState,a.state=h,Jr(e,s,a,r);var w=e.memoizedState;o!==m||h!==w||gn.current||we?(typeof g=="function"&&(to(e,t,g,s),w=e.memoizedState),(c=we||bu(e,t,c,s,h,w,i)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,w,i),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,w,i)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=w),a.props=s,a.state=w,a.context=i,s=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),s=!1)}return ao(n,e,t,s,l,r)}function ao(n,e,t,s,r,l){Ap(n,e);var a=(e.flags&128)!==0;if(!s&&!a)return r&&Mu(e,t,!1),oe(n,e,l);s=e.stateNode,gm.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return e.flags|=1,n!==null&&a?(e.child=zt(e,n.child,null,l),e.child=zt(e,null,o,l)):pn(n,e,o,l),e.memoizedState=s.state,r&&Mu(e,t,!0),e.child}function bp(n){var e=n.stateNode;e.pendingContext?Lu(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Lu(n,e.context,!1),Uo(n,e.containerInfo)}function Ku(n,e,t,s,r){return Ot(),Ro(r),e.flags|=256,pn(n,e,t,s),e.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function io(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,e,t){var s=e.pendingProps,r=G.current,l=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),D(G,r&1),n===null)return no(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=s.children,n=s.fallback,l?(s=e.mode,l=e.child,a={mode:"hidden",children:a},!(s&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=vl(a,s,0,null),n=Ye(n,s,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=io(t),e.memoizedState=oo,n):Xo(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return vm(n,e,a,s,o,r,t);if(l){l=s.fallback,a=e.mode,r=n.child,o=r.sibling;var i={mode:"hidden",children:s.children};return!(a&1)&&e.child!==r?(s=e.child,s.childLanes=0,s.pendingProps=i,e.deletions=null):(s=ze(r,i),s.subtreeFlags=r.subtreeFlags&14680064),o!==null?l=ze(o,l):(l=Ye(l,a,t,null),l.flags|=2),l.return=e,s.return=e,s.sibling=l,e.child=s,s=l,l=e.child,a=n.child.memoizedState,a=a===null?io(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=n.childLanes&~t,e.memoizedState=oo,s}return l=n.child,n=l.sibling,s=ze(l,{mode:"visible",children:s.children}),!(e.mode&1)&&(s.lanes=t),s.return=e,s.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=s,e.memoizedState=null,s}function Xo(n,e){return e=vl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function _r(n,e,t,s){return s!==null&&Ro(s),zt(e,n.child,null,t),n=Xo(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function vm(n,e,t,s,r,l,a){if(t)return e.flags&256?(e.flags&=-257,s=Sa(Error(v(422))),_r(n,e,a,s)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=s.fallback,r=e.mode,s=vl({mode:"visible",children:s.children},r,0,null),l=Ye(l,r,a,null),l.flags|=2,s.return=e,l.return=e,s.sibling=l,e.child=s,e.mode&1&&zt(e,n.child,null,a),e.child.memoizedState=io(a),e.memoizedState=oo,l);if(!(e.mode&1))return _r(n,e,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var o=s.dgst;return s=o,l=Error(v(419)),s=Sa(l,s,void 0),_r(n,e,a,s)}if(o=(a&n.childLanes)!==0,yn||o){if(s=J,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,ae(n,r),Gn(s,n,r,-1))}return si(),s=Sa(Error(v(421))),_r(n,e,a,s)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Om.bind(null,n),r._reactRetry=e,null):(n=l.treeContext,kn=qe(r.nextSibling),Sn=e,F=!0,bn=null,n!==null&&(Pn[qn++]=ee,Pn[qn++]=te,Pn[qn++]=Xe,ee=n.id,te=n.overflow,Xe=e),e=Xo(e,s.children),e.flags|=4096,e)}function Xu(n,e,t){n.lanes|=e;var s=n.alternate;s!==null&&(s.lanes|=e),eo(n.return,e,t)}function xa(n,e,t,s,r){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=t,l.tailMode=r)}function Gp(n,e,t){var s=e.pendingProps,r=s.revealOrder,l=s.tail;if(pn(n,e,s.children,t),s=G.current,s&2)s=s&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xu(n,t,e);else if(n.tag===19)Xu(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}if(D(G,s),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),xa(e,!1,r,t,l);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}xa(e,!0,t,null,l);break;case"together":xa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function oe(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Je|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(v(153));if(e.child!==null){for(n=e.child,t=ze(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ze(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function jm(n,e,t){switch(e.tag){case 3:bp(e),Ot();break;case 5:hp(e);break;case 1:vn(e.type)&&Qr(e);break;case 4:Uo(e,e.stateNode.containerInfo);break;case 10:var s=e.type._context,r=e.memoizedProps.value;D(Xr,s._currentValue),s._currentValue=r;break;case 13:if(s=e.memoizedState,s!==null)return s.dehydrated!==null?(D(G,G.current&1),e.flags|=128,null):t&e.child.childLanes?Fp(n,e,t):(D(G,G.current&1),n=oe(n,e,t),n!==null?n.sibling:null);D(G,G.current&1);break;case 19:if(s=(t&e.childLanes)!==0,n.flags&128){if(s)return Gp(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),D(G,G.current),s)break;return null;case 22:case 23:return e.lanes=0,Rp(n,e,t)}return oe(n,e,t)}var Bp,uo,Up,Vp;Bp=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};uo=function(){};Up=function(n,e,t,s){var r=n.memoizedProps;if(r!==s){n=e.stateNode,He(Kn.current);var l=null;switch(t){case"input":r=Oa(n,r),s=Oa(n,s),l=[];break;case"select":r=U({},r,{value:void 0}),s=U({},s,{value:void 0}),l=[];break;case"textarea":r=Ma(n,r),s=Ma(n,s),l=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(n.onclick=Wr)}Da(t,s);var a;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ss.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in s){var i=s[c];if(o=r?.[c],s.hasOwnProperty(c)&&i!==o&&(i!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||i&&i.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in i)i.hasOwnProperty(a)&&o[a]!==i[a]&&(t||(t={}),t[a]=i[a])}else t||(l||(l=[]),l.push(c,t)),t=i;else c==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(l=l||[]).push(c,i)):c==="children"?typeof i!="string"&&typeof i!="number"||(l=l||[]).push(c,""+i):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(c)?(i!=null&&c==="onScroll"&&R("scroll",n),l||o===i||(l=[])):(l=l||[]).push(c,i))}t&&(l=l||[]).push("style",t);var c=l;(e.updateQueue=c)&&(e.flags|=4)}};Vp=function(n,e,t,s){t!==s&&(e.flags|=4)};function as(n,e){if(!F)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function ln(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,s=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=s,n.childLanes=t,e}function wm(n,e,t){var s=e.pendingProps;switch(Do(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return vn(e.type)&&Hr(),ln(e),null;case 3:return s=e.stateNode,Lt(),A(gn),A(on),$o(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(xr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(vo(bn),bn=null))),uo(n,e),ln(e),null;case 5:Vo(e);var r=He(Ms.current);if(t=e.type,n!==null&&e.stateNode!=null)Up(n,e,t,s,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!s){if(e.stateNode===null)throw Error(v(166));return ln(e),null}if(n=He(Kn.current),xr(e)){s=e.stateNode,t=e.type;var l=e.memoizedProps;switch(s[Qn]=e,s[zs]=l,n=(e.mode&1)!==0,t){case"dialog":R("cancel",s),R("close",s);break;case"iframe":case"object":case"embed":R("load",s);break;case"video":case"audio":for(r=0;r<ds.length;r++)R(ds[r],s);break;case"source":R("error",s);break;case"img":case"image":case"link":R("error",s),R("load",s);break;case"details":R("toggle",s);break;case"input":lu(s,l),R("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!l.multiple},R("invalid",s);break;case"textarea":ou(s,l),R("invalid",s)}Da(t,l),r=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?s.textContent!==o&&(l.suppressHydrationWarning!==!0&&Sr(s.textContent,o,n),r=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Sr(s.textContent,o,n),r=["children",""+o]):Ss.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&R("scroll",s)}switch(t){case"input":cr(s),au(s,l,!0);break;case"textarea":cr(s),iu(s);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(s.onclick=Wr)}s=r,e.updateQueue=s,s!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gc(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof s.is=="string"?n=a.createElement(t,{is:s.is}):(n=a.createElement(t),t==="select"&&(a=n,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):n=a.createElementNS(n,t),n[Qn]=e,n[zs]=s,Bp(n,e,!1,!1),e.stateNode=n;n:{switch(a=Ra(t,s),t){case"dialog":R("cancel",n),R("close",n),r=s;break;case"iframe":case"object":case"embed":R("load",n),r=s;break;case"video":case"audio":for(r=0;r<ds.length;r++)R(ds[r],n);r=s;break;case"source":R("error",n),r=s;break;case"img":case"image":case"link":R("error",n),R("load",n),r=s;break;case"details":R("toggle",n),r=s;break;case"input":lu(n,s),r=Oa(n,s),R("invalid",n);break;case"option":r=s;break;case"select":n._wrapperState={wasMultiple:!!s.multiple},r=U({},s,{value:void 0}),R("invalid",n);break;case"textarea":ou(n,s),r=Ma(n,s),R("invalid",n);break;default:r=s}Da(t,r),o=r;for(l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="style"?wc(n,i):l==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&vc(n,i)):l==="children"?typeof i=="string"?(t!=="textarea"||i!=="")&&xs(n,i):typeof i=="number"&&xs(n,""+i):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ss.hasOwnProperty(l)?i!=null&&l==="onScroll"&&R("scroll",n):i!=null&&ko(n,l,i,a))}switch(t){case"input":cr(n),au(n,s,!1);break;case"textarea":cr(n),iu(n);break;case"option":s.value!=null&&n.setAttribute("value",""+Le(s.value));break;case"select":n.multiple=!!s.multiple,l=s.value,l!=null?xt(n,!!s.multiple,l,!1):s.defaultValue!=null&&xt(n,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Wr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break n;case"img":s=!0;break n;default:s=!1}}s&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(n&&e.stateNode!=null)Vp(n,e,n.memoizedProps,s);else{if(typeof s!="string"&&e.stateNode===null)throw Error(v(166));if(t=He(Ms.current),He(Kn.current),xr(e)){if(s=e.stateNode,t=e.memoizedProps,s[Qn]=e,(l=s.nodeValue!==t)&&(n=Sn,n!==null))switch(n.tag){case 3:Sr(s.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sr(s.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Qn]=e,e.stateNode=s}return ln(e),null;case 13:if(A(G),s=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(F&&kn!==null&&e.mode&1&&!(e.flags&128))op(),Ot(),e.flags|=98560,l=!1;else if(l=xr(e),s!==null&&s.dehydrated!==null){if(n===null){if(!l)throw Error(v(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Qn]=e}else Ot(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),l=!1}else bn!==null&&(vo(bn),bn=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(s=s!==null,s!==(n!==null&&n.memoizedState!==null)&&s&&(e.child.flags|=8192,e.mode&1&&(n===null||G.current&1?X===0&&(X=3):si())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return Lt(),uo(n,e),n===null&&Ts(e.stateNode.containerInfo),ln(e),null;case 10:return Fo(e.type._context),ln(e),null;case 17:return vn(e.type)&&Hr(),ln(e),null;case 19:if(A(G),l=e.memoizedState,l===null)return ln(e),null;if(s=(e.flags&128)!==0,a=l.rendering,a===null)if(s)as(l,!1);else{if(X!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=nl(n),a!==null){for(e.flags|=128,as(l,!1),s=a.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),e.subtreeFlags=0,s=t,t=e.child;t!==null;)l=t,n=s,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,n=a.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return D(G,G.current&1|2),e.child}n=n.sibling}l.tail!==null&&H()>It&&(e.flags|=128,s=!0,as(l,!1),e.lanes=4194304)}else{if(!s)if(n=nl(a),n!==null){if(e.flags|=128,s=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),as(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!F)return ln(e),null}else 2*H()-l.renderingStartTime>It&&t!==1073741824&&(e.flags|=128,s=!0,as(l,!1),e.lanes=4194304);l.isBackwards?(a.sibling=e.child,e.child=a):(t=l.last,t!==null?t.sibling=a:e.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=H(),e.sibling=null,t=G.current,D(G,s?t&1|2:t&1),e):(ln(e),null);case 22:case 23:return ti(),s=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==s&&(e.flags|=8192),s&&e.mode&1?wn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function km(n,e){switch(Do(e),e.tag){case 1:return vn(e.type)&&Hr(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Lt(),A(gn),A(on),$o(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Vo(e),null;case 13:if(A(G),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Ot()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return A(G),null;case 4:return Lt(),null;case 10:return Fo(e.type._context),null;case 22:case 23:return ti(),null;case 24:return null;default:return null}}var Er=!1,an=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,C=null;function kt(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){V(n,e,s)}else t.current=null}function co(n,e,t){try{t()}catch(s){V(n,e,s)}}var Zu=!1;function xm(n,e){if(Ha=Ur,n=Qc(),Mo(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var a=0,o=-1,i=-1,c=0,f=0,m=n,h=null;e:for(;;){for(var g;m!==t||r!==0&&m.nodeType!==3||(o=a+r),m!==l||s!==0&&m.nodeType!==3||(i=a+s),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===n)break e;if(h===t&&++c===r&&(o=a),h===l&&++f===s&&(i=a),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}t=o===-1||i===-1?null:{start:o,end:i}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qa={focusedElem:n,selectionRange:t},Ur=!1,C=e;C!==null;)if(e=C,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,C=n;else for(;C!==null;){e=C;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,N=w.memoizedState,p=e.stateNode,u=p.getSnapshotBeforeUpdate(e.elementType===e.type?k:Rn(e.type,k),N);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){V(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}return w=Zu,Zu=!1,w}function js(n,e,t){var s=e.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&n)===n){var l=r.destroy;r.destroy=void 0,l!==void 0&&co(e,t,l)}r=r.next}while(r!==s)}}function yl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var s=t.create;t.destroy=s()}t=t.next}while(t!==e)}}function po(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $p(n){var e=n.alternate;e!==null&&(n.alternate=null,$p(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Qn],delete e[zs],delete e[Xa],delete e[lm],delete e[am])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Ju(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fo(n,e,t){var s=n.tag;if(s===5||s===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Wr));else if(s!==4&&(n=n.child,n!==null))for(fo(n,e,t),n=n.sibling;n!==null;)fo(n,e,t),n=n.sibling}function ho(n,e,t){var s=n.tag;if(s===5||s===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(s!==4&&(n=n.child,n!==null))for(ho(n,e,t),n=n.sibling;n!==null;)ho(n,e,t),n=n.sibling}var nn=null,An=!1;function ve(n,e,t){for(t=t.child;t!==null;)Hp(n,e,t),t=t.sibling}function Hp(n,e,t){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(il,t)}catch{}switch(t.tag){case 5:an||kt(t,e);case 6:var s=nn,r=An;nn=null,ve(n,e,t),nn=s,An=r,nn!==null&&(An?(n=nn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):nn.removeChild(t.stateNode));break;case 18:nn!==null&&(An?(n=nn,t=t.stateNode,n.nodeType===8?ya(n.parentNode,t):n.nodeType===1&&ya(n,t),Ps(n)):ya(nn,t.stateNode));break;case 4:s=nn,r=An,nn=t.stateNode.containerInfo,An=!0,ve(n,e,t),nn=s,An=r;break;case 0:case 11:case 14:case 15:if(!an&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var l=r,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&co(t,e,a),r=r.next}while(r!==s)}ve(n,e,t);break;case 1:if(!an&&(kt(t,e),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(o){V(t,e,o)}ve(n,e,t);break;case 21:ve(n,e,t);break;case 22:t.mode&1?(an=(s=an)||t.memoizedState!==null,ve(n,e,t),an=s):ve(n,e,t);break;default:ve(n,e,t)}}function nc(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Sm),e.forEach(function(s){var r=zm.bind(null,n,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Dn(n,e){var t=e.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var l=n,a=e,o=a;n:for(;o!==null;){switch(o.tag){case 5:nn=o.stateNode,An=!1;break n;case 3:nn=o.stateNode.containerInfo,An=!0;break n;case 4:nn=o.stateNode.containerInfo,An=!0;break n}o=o.return}if(nn===null)throw Error(v(160));Hp(l,a,r),nn=null,An=!1;var i=r.alternate;i!==null&&(i.return=null),r.return=null}catch(c){V(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qp(e,n),e=e.sibling}function Qp(n,e){var t=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(e,n),Wn(n),s&4){try{js(3,n,n.return),yl(3,n)}catch(k){V(n,n.return,k)}try{js(5,n,n.return)}catch(k){V(n,n.return,k)}}break;case 1:Dn(e,n),Wn(n),s&512&&t!==null&&kt(t,t.return);break;case 5:if(Dn(e,n),Wn(n),s&512&&t!==null&&kt(t,t.return),n.flags&32){var r=n.stateNode;try{xs(r,"")}catch(k){V(n,n.return,k)}}if(s&4&&(r=n.stateNode,r!=null)){var l=n.memoizedProps,a=t!==null?t.memoizedProps:l,o=n.type,i=n.updateQueue;if(n.updateQueue=null,i!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&mc(r,l),Ra(o,a);var c=Ra(o,l);for(a=0;a<i.length;a+=2){var f=i[a],m=i[a+1];f==="style"?wc(r,m):f==="dangerouslySetInnerHTML"?vc(r,m):f==="children"?xs(r,m):ko(r,f,m,c)}switch(o){case"input":za(r,l);break;case"textarea":yc(r,l);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?xt(r,!!l.multiple,g,!1):h!==!!l.multiple&&(l.defaultValue!=null?xt(r,!!l.multiple,l.defaultValue,!0):xt(r,!!l.multiple,l.multiple?[]:"",!1))}r[zs]=l}catch(k){V(n,n.return,k)}}break;case 6:if(Dn(e,n),Wn(n),s&4){if(n.stateNode===null)throw Error(v(162));r=n.stateNode,l=n.memoizedProps;try{r.nodeValue=l}catch(k){V(n,n.return,k)}}break;case 3:if(Dn(e,n),Wn(n),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(k){V(n,n.return,k)}break;case 4:Dn(e,n),Wn(n);break;case 13:Dn(e,n),Wn(n),r=n.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(ni=H())),s&4&&nc(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(an=(c=an)||f,Dn(e,n),an=c):Dn(e,n),Wn(n),s&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!f&&n.mode&1)for(C=n,f=n.child;f!==null;){for(m=C=f;C!==null;){switch(h=C,g=h.child,h.tag){case 0:case 11:case 14:case 15:js(4,h,h.return);break;case 1:kt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){s=h,t=h.return;try{e=s,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(k){V(s,t,k)}}break;case 5:kt(h,h.return);break;case 22:if(h.memoizedState!==null){tc(m);continue}}g!==null?(g.return=h,C=g):tc(m)}f=f.sibling}n:for(f=null,m=n;;){if(m.tag===5){if(f===null){f=m;try{r=m.stateNode,c?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=m.stateNode,i=m.memoizedProps.style,a=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=jc("display",a))}catch(k){V(n,n.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){V(n,n.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===n)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break n;for(;m.sibling===null;){if(m.return===null||m.return===n)break n;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Dn(e,n),Wn(n),s&4&&nc(n);break;case 21:break;default:Dn(e,n),Wn(n)}}function Wn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Wp(t)){var s=t;break n}t=t.return}throw Error(v(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(xs(r,""),s.flags&=-33);var l=Ju(n);ho(n,l,r);break;case 3:case 4:var a=s.stateNode.containerInfo,o=Ju(n);fo(n,o,a);break;default:throw Error(v(161))}}catch(i){V(n,n.return,i)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Cm(n,e,t){C=n,Yp(n,e,t)}function Yp(n,e,t){for(var s=(n.mode&1)!==0;C!==null;){var r=C,l=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||Er;if(!a){var o=r.alternate,i=o!==null&&o.memoizedState!==null||an;o=Er;var c=an;if(Er=a,(an=i)&&!c)for(C=r;C!==null;)a=C,i=a.child,a.tag===22&&a.memoizedState!==null?sc(r):i!==null?(i.return=a,C=i):sc(r);for(;l!==null;)C=l,Yp(l,e,t),l=l.sibling;C=r,Er=o,an=c}ec(n,e,t)}else r.subtreeFlags&8772&&l!==null?(l.return=r,C=l):ec(n,e,t)}}function ec(n){for(;C!==null;){var e=C;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||yl(5,e);break;case 1:var s=e.stateNode;if(e.flags&4&&!an)if(t===null)s.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Rn(e.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&Au(e,l,s);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Au(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var i=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&t.focus();break;case"img":i.src&&(t.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ps(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}an||e.flags&512&&po(e)}catch(h){V(e,e.return,h)}}if(e===n){C=null;break}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}}function tc(n){for(;C!==null;){var e=C;if(e===n){C=null;break}var t=e.sibling;if(t!==null){t.return=e.return,C=t;break}C=e.return}}function sc(n){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{yl(4,e)}catch(i){V(e,t,i)}break;case 1:var s=e.stateNode;if(typeof s.componentDidMount=="function"){var r=e.return;try{s.componentDidMount()}catch(i){V(e,r,i)}}var l=e.return;try{po(e)}catch(i){V(e,l,i)}break;case 5:var a=e.return;try{po(e)}catch(i){V(e,a,i)}}}catch(i){V(e,e.return,i)}if(e===n){C=null;break}var o=e.sibling;if(o!==null){o.return=e.return,C=o;break}C=e.return}}var _m=Math.ceil,sl=ie.ReactCurrentDispatcher,Zo=ie.ReactCurrentOwner,Tn=ie.ReactCurrentBatchConfig,O=0,J=null,Q=null,en=0,wn=0,St=De(0),X=0,As=null,Je=0,gl=0,Jo=0,ws=null,mn=null,ni=0,It=1/0,Jn=null,rl=!1,mo=null,Te=null,Pr=!1,Ce=null,ll=0,ks=0,yo=null,Ir=-1,Dr=0;function dn(){return O&6?H():Ir!==-1?Ir:Ir=H()}function Oe(n){return n.mode&1?O&2&&en!==0?en&-en:im.transition!==null?(Dr===0&&(Dr=zc()),Dr):(n=L,n!==0||(n=window.event,n=n===void 0?16:bc(n.type)),n):1}function Gn(n,e,t,s){if(50<ks)throw ks=0,yo=null,Error(v(185));bs(n,t,s),(!(O&2)||n!==J)&&(n===J&&(!(O&2)&&(gl|=t),X===4&&Se(n,en)),jn(n,s),t===1&&O===0&&!(e.mode&1)&&(It=H()+500,fl&&Re()))}function jn(n,e){var t=n.callbackNode;ch(n,e);var s=Br(n,n===J?en:0);if(s===0)t!==null&&pu(t),n.callbackNode=null,n.callbackPriority=0;else if(e=s&-s,n.callbackPriority!==e){if(t!=null&&pu(t),e===1)n.tag===0?om(rc.bind(null,n)):rp(rc.bind(null,n)),sm(function(){!(O&6)&&Re()}),t=null;else{switch(Lc(s)){case 1:t=Eo;break;case 4:t=Tc;break;case 16:t=Gr;break;case 536870912:t=Oc;break;default:t=Gr}t=sd(t,Kp.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Kp(n,e){if(Ir=-1,Dr=0,O&6)throw Error(v(327));var t=n.callbackNode;if(qt()&&n.callbackNode!==t)return null;var s=Br(n,n===J?en:0);if(s===0)return null;if(s&30||s&n.expiredLanes||e)e=al(n,s);else{e=s;var r=O;O|=2;var l=Zp();(J!==n||en!==e)&&(Jn=null,It=H()+500,Qe(n,e));do try{qm();break}catch(o){Xp(n,o)}while(!0);bo(),sl.current=l,O=r,Q!==null?e=0:(J=null,en=0,e=X)}if(e!==0){if(e===2&&(r=Ba(n),r!==0&&(s=r,e=go(n,r))),e===1)throw t=As,Qe(n,0),Se(n,s),jn(n,H()),t;if(e===6)Se(n,s);else{if(r=n.current.alternate,!(s&30)&&!Em(r)&&(e=al(n,s),e===2&&(l=Ba(n),l!==0&&(s=l,e=go(n,l))),e===1))throw t=As,Qe(n,0),Se(n,s),jn(n,H()),t;switch(n.finishedWork=r,n.finishedLanes=s,e){case 0:case 1:throw Error(v(345));case 2:Ve(n,mn,Jn);break;case 3:if(Se(n,s),(s&130023424)===s&&(e=ni+500-H(),10<e)){if(Br(n,0)!==0)break;if(r=n.suspendedLanes,(r&s)!==s){dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ka(Ve.bind(null,n,mn,Jn),e);break}Ve(n,mn,Jn);break;case 4:if(Se(n,s),(s&4194240)===s)break;for(e=n.eventTimes,r=-1;0<s;){var a=31-Fn(s);l=1<<a,a=e[a],a>r&&(r=a),s&=~l}if(s=r,s=H()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*_m(s/1960))-s,10<s){n.timeoutHandle=Ka(Ve.bind(null,n,mn,Jn),s);break}Ve(n,mn,Jn);break;case 5:Ve(n,mn,Jn);break;default:throw Error(v(329))}}}return jn(n,H()),n.callbackNode===t?Kp.bind(null,n):null}function go(n,e){var t=ws;return n.current.memoizedState.isDehydrated&&(Qe(n,e).flags|=256),n=al(n,e),n!==2&&(e=mn,mn=t,e!==null&&vo(e)),n}function vo(n){mn===null?mn=n:mn.push.apply(mn,n)}function Em(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],l=r.getSnapshot;r=r.value;try{if(!Bn(l(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Se(n,e){for(e&=~Jo,e&=~gl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Fn(e),s=1<<t;n[t]=-1,e&=~s}}function rc(n){if(O&6)throw Error(v(327));qt();var e=Br(n,0);if(!(e&1))return jn(n,H()),null;var t=al(n,e);if(n.tag!==0&&t===2){var s=Ba(n);s!==0&&(e=s,t=go(n,s))}if(t===1)throw t=As,Qe(n,0),Se(n,e),jn(n,H()),t;if(t===6)throw Error(v(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ve(n,mn,Jn),jn(n,H()),null}function ei(n,e){var t=O;O|=1;try{return n(e)}finally{O=t,O===0&&(It=H()+500,fl&&Re())}}function nt(n){Ce!==null&&Ce.tag===0&&!(O&6)&&qt();var e=O;O|=1;var t=Tn.transition,s=L;try{if(Tn.transition=null,L=1,n)return n()}finally{L=s,Tn.transition=t,O=e,!(O&6)&&Re()}}function ti(){wn=St.current,A(St)}function Qe(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,tm(t)),Q!==null)for(t=Q.return;t!==null;){var s=t;switch(Do(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Hr();break;case 3:Lt(),A(gn),A(on),$o();break;case 5:Vo(s);break;case 4:Lt();break;case 13:A(G);break;case 19:A(G);break;case 10:Fo(s.type._context);break;case 22:case 23:ti()}t=t.return}if(J=n,Q=n=ze(n.current,null),en=wn=e,X=0,As=null,Jo=gl=Je=0,mn=ws=null,We!==null){for(e=0;e<We.length;e++)if(t=We[e],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,l=t.pending;if(l!==null){var a=l.next;l.next=r,s.next=a}t.pending=s}We=null}return n}function Xp(n,e){do{var t=Q;try{if(bo(),zr.current=tl,el){for(var s=B.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}el=!1}if(Ze=0,Z=K=B=null,vs=!1,Is=0,Zo.current=null,t===null||t.return===null){X=1,As=e,Q=null;break}n:{var l=n,a=t.return,o=t,i=e;if(e=en,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var c=i,f=o,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=$u(a);if(g!==null){g.flags&=-257,Wu(g,a,o,l,e),g.mode&1&&Vu(l,c,e),e=g,i=c;var w=e.updateQueue;if(w===null){var k=new Set;k.add(i),e.updateQueue=k}else w.add(i);break n}else{if(!(e&1)){Vu(l,c,e),si();break n}i=Error(v(426))}}else if(F&&o.mode&1){var N=$u(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Wu(N,a,o,l,e),Ro(Mt(i,o));break n}}l=i=Mt(i,o),X!==4&&(X=2),ws===null?ws=[l]:ws.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var p=Mp(l,i,e);Ru(l,p);break n;case 1:o=i;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Te===null||!Te.has(d)))){l.flags|=65536,e&=-e,l.lanes|=e;var y=Ip(l,o,e);Ru(l,y);break n}}l=l.return}while(l!==null)}nd(t)}catch(S){e=S,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Zp(){var n=sl.current;return sl.current=tl,n===null?tl:n}function si(){(X===0||X===3||X===2)&&(X=4),J===null||!(Je&268435455)&&!(gl&268435455)||Se(J,en)}function al(n,e){var t=O;O|=2;var s=Zp();(J!==n||en!==e)&&(Jn=null,Qe(n,e));do try{Pm();break}catch(r){Xp(n,r)}while(!0);if(bo(),O=t,sl.current=s,Q!==null)throw Error(v(261));return J=null,en=0,X}function Pm(){for(;Q!==null;)Jp(Q)}function qm(){for(;Q!==null&&!eh();)Jp(Q)}function Jp(n){var e=td(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?nd(n):Q=e,Zo.current=null}function nd(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=km(t,e),t!==null){t.flags&=32767,Q=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{X=6,Q=null;return}}else if(t=wm(t,e,wn),t!==null){Q=t;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=n}while(e!==null);X===0&&(X=5)}function Ve(n,e,t){var s=L,r=Tn.transition;try{Tn.transition=null,L=1,Nm(n,e,t,s)}finally{Tn.transition=r,L=s}return null}function Nm(n,e,t,s){do qt();while(Ce!==null);if(O&6)throw Error(v(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(v(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(ph(n,l),n===J&&(Q=J=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pr||(Pr=!0,sd(Gr,function(){return qt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Tn.transition,Tn.transition=null;var a=L;L=1;var o=O;O|=4,Zo.current=null,xm(n,t),Qp(t,n),Xh(Qa),Ur=!!Ha,Qa=Ha=null,n.current=t,Cm(t,n,r),th(),O=o,L=a,Tn.transition=l}else n.current=t;if(Pr&&(Pr=!1,Ce=n,ll=r),l=n.pendingLanes,l===0&&(Te=null),lh(t.stateNode,s),jn(n,H()),e!==null)for(s=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(rl)throw rl=!1,n=mo,mo=null,n;return ll&1&&n.tag!==0&&qt(),l=n.pendingLanes,l&1?n===yo?ks++:(ks=0,yo=n):ks=0,Re(),null}function qt(){if(Ce!==null){var n=Lc(ll),e=Tn.transition,t=L;try{if(Tn.transition=null,L=16>n?16:n,Ce===null)var s=!1;else{if(n=Ce,Ce=null,ll=0,O&6)throw Error(v(331));var r=O;for(O|=4,C=n.current;C!==null;){var l=C,a=l.child;if(C.flags&16){var o=l.deletions;if(o!==null){for(var i=0;i<o.length;i++){var c=o[i];for(C=c;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:js(8,f,l)}var m=f.child;if(m!==null)m.return=f,C=m;else for(;C!==null;){f=C;var h=f.sibling,g=f.return;if($p(f),f===c){C=null;break}if(h!==null){h.return=g,C=h;break}C=g}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}C=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,C=a;else n:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:js(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,C=p;break n}C=l.return}}var u=n.current;for(C=u;C!==null;){a=C;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,C=d;else n:for(a=u;C!==null;){if(o=C,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:yl(9,o)}}catch(S){V(o,o.return,S)}if(o===a){C=null;break n}var y=o.sibling;if(y!==null){y.return=o.return,C=y;break n}C=o.return}}if(O=r,Re(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(il,n)}catch{}s=!0}return s}finally{L=t,Tn.transition=e}}return!1}function lc(n,e,t){e=Mt(t,e),e=Mp(n,e,1),n=Ne(n,e,1),e=dn(),n!==null&&(bs(n,1,e),jn(n,e))}function V(n,e,t){if(n.tag===3)lc(n,n,t);else for(;e!==null;){if(e.tag===3){lc(e,n,t);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Te===null||!Te.has(s))){n=Mt(t,n),n=Ip(e,n,1),e=Ne(e,n,1),n=dn(),e!==null&&(bs(e,1,n),jn(e,n));break}}e=e.return}}function Tm(n,e,t){var s=n.pingCache;s!==null&&s.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&t,J===n&&(en&t)===t&&(X===4||X===3&&(en&130023424)===en&&500>H()-ni?Qe(n,0):Jo|=t),jn(n,e)}function ed(n,e){e===0&&(n.mode&1?(e=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):e=1);var t=dn();n=ae(n,e),n!==null&&(bs(n,e,t),jn(n,t))}function Om(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ed(n,t)}function zm(n,e){var t=0;switch(n.tag){case 13:var s=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=n.stateNode;break;default:throw Error(v(314))}s!==null&&s.delete(e),ed(n,t)}var td;td=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)yn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return yn=!1,jm(n,e,t);yn=!!(n.flags&131072)}else yn=!1,F&&e.flags&1048576&&lp(e,Kr,e.index);switch(e.lanes=0,e.tag){case 2:var s=e.type;Mr(n,e),n=e.pendingProps;var r=Tt(e,on.current);Pt(e,t),r=Ho(null,e,s,n,r,t);var l=Qo();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(s)?(l=!0,Qr(e)):l=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bo(e),r.updater=hl,e.stateNode=r,r._reactInternals=e,so(e,s,n,t),e=ao(null,e,s,!0,l,t)):(e.tag=0,F&&l&&Io(e),pn(null,e,r,t),e=e.child),e;case 16:s=e.elementType;n:{switch(Mr(n,e),n=e.pendingProps,r=s._init,s=r(s._payload),e.type=s,r=e.tag=Mm(s),n=Rn(s,n),r){case 0:e=lo(null,e,s,n,t);break n;case 1:e=Yu(null,e,s,n,t);break n;case 11:e=Hu(null,e,s,n,t);break n;case 14:e=Qu(null,e,s,Rn(s.type,n),t);break n}throw Error(v(306,s,""))}return e;case 0:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Rn(s,r),lo(n,e,s,r,t);case 1:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Rn(s,r),Yu(n,e,s,r,t);case 3:n:{if(bp(e),n===null)throw Error(v(387));s=e.pendingProps,l=e.memoizedState,r=l.element,up(n,e),Jr(e,s,null,t);var a=e.memoizedState;if(s=a.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){r=Mt(Error(v(423)),e),e=Ku(n,e,s,t,r);break n}else if(s!==r){r=Mt(Error(v(424)),e),e=Ku(n,e,s,t,r);break n}else for(kn=qe(e.stateNode.containerInfo.firstChild),Sn=e,F=!0,bn=null,t=fp(e,null,s,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),s===r){e=oe(n,e,t);break n}pn(n,e,s,t)}e=e.child}return e;case 5:return hp(e),n===null&&no(e),s=e.type,r=e.pendingProps,l=n!==null?n.memoizedProps:null,a=r.children,Ya(s,r)?a=null:l!==null&&Ya(s,l)&&(e.flags|=32),Ap(n,e),pn(n,e,a,t),e.child;case 6:return n===null&&no(e),null;case 13:return Fp(n,e,t);case 4:return Uo(e,e.stateNode.containerInfo),s=e.pendingProps,n===null?e.child=zt(e,null,s,t):pn(n,e,s,t),e.child;case 11:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Rn(s,r),Hu(n,e,s,r,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(s=e.type._context,r=e.pendingProps,l=e.memoizedProps,a=r.value,D(Xr,s._currentValue),s._currentValue=a,l!==null)if(Bn(l.value,a)){if(l.children===r.children&&!gn.current){e=oe(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var i=o.firstContext;i!==null;){if(i.context===s){if(l.tag===1){i=se(-1,t&-t),i.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i}}l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),eo(l.return,t,e),o.lanes|=t;break}i=i.next}}else if(l.tag===10)a=l.type===e.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(v(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),eo(a,t,e),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===e){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}pn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,s=e.pendingProps.children,Pt(e,t),r=On(r),s=s(r),e.flags|=1,pn(n,e,s,t),e.child;case 14:return s=e.type,r=Rn(s,e.pendingProps),r=Rn(s.type,r),Qu(n,e,s,r,t);case 15:return Dp(n,e,e.type,e.pendingProps,t);case 17:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:Rn(s,r),Mr(n,e),e.tag=1,vn(s)?(n=!0,Qr(e)):n=!1,Pt(e,t),pp(e,s,r),so(e,s,r,t),ao(null,e,s,!0,n,t);case 19:return Gp(n,e,t);case 22:return Rp(n,e,t)}throw Error(v(156,e.tag))};function sd(n,e){return Nc(n,e)}function Lm(n,e,t,s){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,e,t,s){return new Lm(n,e,t,s)}function ri(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Mm(n){if(typeof n=="function")return ri(n)?1:0;if(n!=null){if(n=n.$$typeof,n===xo)return 11;if(n===Co)return 14}return 2}function ze(n,e){var t=n.alternate;return t===null?(t=Nn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Rr(n,e,t,s,r,l){var a=2;if(s=n,typeof n=="function")ri(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case dt:return Ye(t.children,r,l,e);case So:a=8,r|=8;break;case Pa:return n=Nn(12,t,e,r|2),n.elementType=Pa,n.lanes=l,n;case qa:return n=Nn(13,t,e,r),n.elementType=qa,n.lanes=l,n;case Na:return n=Nn(19,t,e,r),n.elementType=Na,n.lanes=l,n;case dc:return vl(t,r,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case cc:a=10;break n;case pc:a=9;break n;case xo:a=11;break n;case Co:a=14;break n;case je:a=16,s=null;break n}throw Error(v(130,n==null?n:typeof n,""))}return e=Nn(a,t,e,r),e.elementType=n,e.type=s,e.lanes=l,e}function Ye(n,e,t,s){return n=Nn(7,n,s,e),n.lanes=t,n}function vl(n,e,t,s){return n=Nn(22,n,s,e),n.elementType=dc,n.lanes=t,n.stateNode={isHidden:!1},n}function Ca(n,e,t){return n=Nn(6,n,null,e),n.lanes=t,n}function _a(n,e,t){return e=Nn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Im(n,e,t,s,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function li(n,e,t,s,r,l,a,o,i){return n=new Im(n,e,t,o,i),e===1?(e=1,l===!0&&(e|=8)):e=0,l=Nn(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bo(l),n}function Dm(n,e,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pt,key:s==null?null:""+s,children:n,containerInfo:e,implementation:t}}function rd(n){if(!n)return Me;n=n._reactInternals;n:{if(tt(n)!==n||n.tag!==1)throw Error(v(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(v(171))}if(n.tag===1){var t=n.type;if(vn(t))return sp(n,t,e)}return e}function ld(n,e,t,s,r,l,a,o,i){return n=li(t,s,!0,n,r,l,a,o,i),n.context=rd(null),t=n.current,s=dn(),r=Oe(t),l=se(s,r),l.callback=e??null,Ne(t,l,r),n.current.lanes=r,bs(n,r,s),jn(n,s),n}function jl(n,e,t,s){var r=e.current,l=dn(),a=Oe(r);return t=rd(t),e.context===null?e.context=t:e.pendingContext=t,e=se(l,a),e.payload={element:n},s=s===void 0?null:s,s!==null&&(e.callback=s),n=Ne(r,e,a),n!==null&&(Gn(n,r,a,l),Or(n,r,a)),a}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ac(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ai(n,e){ac(n,e),(n=n.alternate)&&ac(n,e)}function Rm(){return null}var ad=typeof reportError=="function"?reportError:function(n){console.error(n)};function oi(n){this._internalRoot=n}wl.prototype.render=oi.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(v(409));jl(n,e,null,null)};wl.prototype.unmount=oi.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;nt(function(){jl(null,n,null,null)}),e[le]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Dc();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ke.length&&e!==0&&e<ke[t].priority;t++);ke.splice(t,0,n),t===0&&Ac(n)}};function ii(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function oc(){}function Am(n,e,t,s,r){if(r){if(typeof s=="function"){var l=s;s=function(){var c=ol(a);l.call(c)}}var a=ld(e,s,n,0,null,!1,!1,"",oc);return n._reactRootContainer=a,n[le]=a.current,Ts(n.nodeType===8?n.parentNode:n),nt(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof s=="function"){var o=s;s=function(){var c=ol(i);o.call(c)}}var i=li(n,0,!1,null,null,!1,!1,"",oc);return n._reactRootContainer=i,n[le]=i.current,Ts(n.nodeType===8?n.parentNode:n),nt(function(){jl(e,i,t,s)}),i}function Sl(n,e,t,s,r){var l=t._reactRootContainer;if(l){var a=l;if(typeof r=="function"){var o=r;r=function(){var i=ol(a);o.call(i)}}jl(e,a,n,r)}else a=Am(t,e,n,r,s);return ol(a)}Mc=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ps(e.pendingLanes);t!==0&&(Po(e,t|1),jn(e,H()),!(O&6)&&(It=H()+500,Re()))}break;case 13:nt(function(){var s=ae(n,1);if(s!==null){var r=dn();Gn(s,n,1,r)}}),ai(n,1)}};qo=function(n){if(n.tag===13){var e=ae(n,134217728);if(e!==null){var t=dn();Gn(e,n,134217728,t)}ai(n,134217728)}};Ic=function(n){if(n.tag===13){var e=Oe(n),t=ae(n,e);if(t!==null){var s=dn();Gn(t,n,e,s)}ai(n,e)}};Dc=function(){return L};Rc=function(n,e){var t=L;try{return L=n,e()}finally{L=t}};ba=function(n,e,t){switch(e){case"input":if(za(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var s=t[e];if(s!==n&&s.form===n.form){var r=dl(s);if(!r)throw Error(v(90));hc(s),za(s,r)}}}break;case"textarea":yc(n,t);break;case"select":e=t.value,e!=null&&xt(n,!!t.multiple,e,!1)}};xc=ei;Cc=nt;var bm={usingClientEntryPoint:!1,Events:[Gs,yt,dl,kc,Sc,ei]},os={findFiberByHostInstance:$e,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fm={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Pc(n),n===null?null:n.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(is=__REACT_DEVTOOLS_GLOBAL_HOOK__,!is.isDisabled&&is.supportsFiber))try{il=is.inject(Fm),Yn=is}catch{}var is;_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm;_n.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ii(e))throw Error(v(200));return Dm(n,e,null,t)};_n.createRoot=function(n,e){if(!ii(n))throw Error(v(299));var t=!1,s="",r=ad;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=li(n,1,!1,null,null,t,!1,s,r),n[le]=e.current,Ts(n.nodeType===8?n.parentNode:n),new oi(e)};_n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(v(188)):(n=Object.keys(n).join(","),Error(v(268,n)));return n=Pc(e),n=n===null?null:n.stateNode,n};_n.flushSync=function(n){return nt(n)};_n.hydrate=function(n,e,t){if(!kl(e))throw Error(v(200));return Sl(null,n,e,!0,t)};_n.hydrateRoot=function(n,e,t){if(!ii(n))throw Error(v(405));var s=t!=null&&t.hydratedSources||null,r=!1,l="",a=ad;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=ld(e,null,n,1,t??null,r,!1,l,a),n[le]=e.current,Ts(n),s)for(n=0;n<s.length;n++)t=s[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new wl(e)};_n.render=function(n,e,t){if(!kl(e))throw Error(v(200));return Sl(null,n,e,!1,t)};_n.unmountComponentAtNode=function(n){if(!kl(n))throw Error(v(40));return n._reactRootContainer?(nt(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[le]=null})}),!0):!1};_n.unstable_batchedUpdates=ei;_n.unstable_renderSubtreeIntoContainer=function(n,e,t,s){if(!kl(t))throw Error(v(200));if(n==null||n._reactInternals===void 0)throw Error(v(38));return Sl(n,e,t,!1,s)};_n.version="18.2.0-next-9e3b772b8-20220608"});var cd=he((Ay,ud)=>{"use strict";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(n){console.error(n)}}id(),ud.exports=od()});var dd=he(ui=>{"use strict";var pd=cd();ui.createRoot=pd.createRoot,ui.hydrateRoot=pd.hydrateRoot;var by});var hd=he((Wy,fd)=>{fd.exports=function(e,t,s,r){var l=s?s.call(r,e,t):void 0;if(l!==void 0)return!!l;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var f=a[c];if(!i(f))return!1;var m=e[f],h=t[f];if(l=s?s.call(r,m,h,f):void 0,l===!1||l===void 0&&m!==h)return!1}return!0}});var ff=me(ye()),hf=me(dd());var ot=me(ye());var bl=me(ye());var P=me(ye());var un=function(){return un=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},un.apply(this,arguments)};function Us(n,e,t){if(t||arguments.length===2)for(var s=0,r=e.length,l;s<r;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return n.concat(l||Array.prototype.slice.call(e))}var W=me(ye()),$d=me(hd());var M="-ms-",st="-moz-",z="-webkit-",xl="comm",Ae="rule",At="decl";var md="@import";var Cl="@keyframes";var yd="@layer";var ci=Math.abs,Vs=String.fromCharCode,$s=Object.assign;function gd(n,e){return $(n,0)^45?(((e<<2^$(n,0))<<2^$(n,1))<<2^$(n,2))<<2^$(n,3):0}function _l(n){return n.trim()}function Un(n,e){return(n=e.exec(n))?n[0]:n}function E(n,e,t){return n.replace(e,t)}function bt(n,e,t){return n.indexOf(e,t)}function $(n,e){return n.charCodeAt(e)|0}function Xn(n,e,t){return n.slice(e,t)}function hn(n){return n.length}function El(n){return n.length}function rt(n,e){return e.push(n),n}function vd(n,e){return n.map(e).join("")}function pi(n,e){return n.filter(function(t){return!Un(t,e)})}var Pl=1,Ft=1,jd=0,Ln=0,Y=0,Gt="";function Ws(n,e,t,s,r,l,a,o){return{value:n,root:e,parent:t,type:s,props:r,children:l,line:Pl,column:Ft,length:a,return:"",siblings:o}}function ue(n,e){return $s(Ws("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function lt(n){for(;n.root;)n=ue(n.root,{children:[n]});rt(n,n.siblings)}function wd(){return Y}function kd(){return Y=Ln>0?$(Gt,--Ln):0,Ft--,Y===10&&(Ft=1,Pl--),Y}function Mn(){return Y=Ln<jd?$(Gt,Ln++):0,Ft++,Y===10&&(Ft=1,Pl++),Y}function be(){return $(Gt,Ln)}function Hs(){return Ln}function ql(n,e){return Xn(Gt,n,e)}function di(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sd(n){return Pl=Ft=1,jd=hn(Gt=n),Ln=0,[]}function xd(n){return Gt="",n}function Nl(n){return _l(ql(Ln-1,fi(n===91?n+2:n===40?n+1:n)))}function Cd(n){for(;(Y=be())&&Y<33;)Mn();return di(n)>2||di(Y)>3?"":" "}function _d(n,e){for(;--e&&Mn()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return ql(n,Hs()+(e<6&&be()==32&&Mn()==32))}function fi(n){for(;Mn();)switch(Y){case n:return Ln;case 34:case 39:n!==34&&n!==39&&fi(Y);break;case 40:n===41&&fi(n);break;case 92:Mn();break}return Ln}function Ed(n,e){for(;Mn()&&n+Y!==57;)if(n+Y===84&&be()===47)break;return"/*"+ql(e,Ln-1)+"*"+Vs(n===47?n:Mn())}function Pd(n){for(;!di(be());)Mn();return ql(n,Ln)}function Td(n){return xd(Tl("",null,null,null,[""],n=Sd(n),0,[0],n))}function Tl(n,e,t,s,r,l,a,o,i){for(var c=0,f=0,m=a,h=0,g=0,w=0,k=1,N=1,p=1,u=0,d="",y=r,S=l,x=s,j=d;N;)switch(w=u,u=Mn()){case 40:if(w!=108&&$(j,m-1)==58){bt(j+=E(Nl(u),"&","&\f"),"&\f",ci(c?o[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:j+=Nl(u);break;case 9:case 10:case 13:case 32:j+=Cd(w);break;case 92:j+=_d(Hs()-1,7);continue;case 47:switch(be()){case 42:case 47:rt(Gm(Ed(Mn(),Hs()),e,t,i),i);break;default:j+="/"}break;case 123*k:o[c++]=hn(j)*p;case 125*k:case 59:case 0:switch(u){case 0:case 125:N=0;case 59+f:p==-1&&(j=E(j,/\f/g,"")),g>0&&hn(j)-m&&rt(g>32?Nd(j+";",s,t,m-1,i):Nd(E(j," ","")+";",s,t,m-2,i),i);break;case 59:j+=";";default:if(rt(x=qd(j,e,t,c,f,r,o,d,y=[],S=[],m,l),l),u===123)if(f===0)Tl(j,e,x,x,y,l,m,o,S);else switch(h===99&&$(j,3)===110?100:h){case 100:case 108:case 109:case 115:Tl(n,x,x,s&&rt(qd(n,x,x,0,0,r,o,d,r,y=[],m,S),S),r,S,m,o,s?y:S);break;default:Tl(j,x,x,x,[""],S,0,o,S)}}c=f=g=0,k=p=1,d=j="",m=a;break;case 58:m=1+hn(j),g=w;default:if(k<1){if(u==123)--k;else if(u==125&&k++==0&&kd()==125)continue}switch(j+=Vs(u),u*k){case 38:p=f>0?1:(j+="\f",-1);break;case 44:o[c++]=(hn(j)-1)*p,p=1;break;case 64:be()===45&&(j+=Nl(Mn())),h=be(),f=m=hn(d=j+=Pd(Hs())),u++;break;case 45:w===45&&hn(j)==2&&(k=0)}}return l}function qd(n,e,t,s,r,l,a,o,i,c,f,m){for(var h=r-1,g=r===0?l:[""],w=El(g),k=0,N=0,p=0;k<s;++k)for(var u=0,d=Xn(n,h+1,h=ci(N=a[k])),y=n;u<w;++u)(y=_l(N>0?g[u]+" "+d:E(d,/&\f/g,g[u])))&&(i[p++]=y);return Ws(n,e,t,r===0?Ae:o,i,c,f,m)}function Gm(n,e,t,s){return Ws(n,e,t,xl,Vs(wd()),Xn(n,2,-2),0,s)}function Nd(n,e,t,s,r){return Ws(n,e,t,At,Xn(n,0,s),Xn(n,s+1,-1),s,r)}function hi(n,e,t){switch(gd(n,e)){case 5103:return z+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+n+n;case 4789:return st+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return z+n+st+n+M+n+n;case 5936:switch($(n,e+11)){case 114:return z+n+M+E(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return z+n+M+E(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return z+n+M+E(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return z+n+M+n+n;case 6165:return z+n+M+"flex-"+n+n;case 5187:return z+n+E(n,/(\w+).+(:[^]+)/,z+"box-$1$2"+M+"flex-$1$2")+n;case 5443:return z+n+M+"flex-item-"+E(n,/flex-|-self/g,"")+(Un(n,/flex-|baseline/)?"":M+"grid-row-"+E(n,/flex-|-self/g,""))+n;case 4675:return z+n+M+"flex-line-pack"+E(n,/align-content|flex-|-self/g,"")+n;case 5548:return z+n+M+E(n,"shrink","negative")+n;case 5292:return z+n+M+E(n,"basis","preferred-size")+n;case 6060:return z+"box-"+E(n,"-grow","")+z+n+M+E(n,"grow","positive")+n;case 4554:return z+E(n,/([^-])(transform)/g,"$1"+z+"$2")+n;case 6187:return E(E(E(n,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),n,"")+n;case 5495:case 3959:return E(n,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return E(E(n,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+M+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+n+n;case 4200:if(!Un(n,/flex-|baseline/))return M+"grid-column-align"+Xn(n,e)+n;break;case 2592:case 3360:return M+E(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(s,r){return e=r,Un(s.props,/grid-\w+-end/)})?~bt(n+(t=t[e].value),"span",0)?n:M+E(n,"-start","")+n+M+"grid-row-span:"+(~bt(t,"span",0)?Un(t,/\d+/):+Un(t,/\d+/)-+Un(n,/\d+/))+";":M+E(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(s){return Un(s.props,/grid-\w+-start/)})?n:M+E(E(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return E(n,/(.+)-inline(.+)/,z+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(n)-1-e>6)switch($(n,e+1)){case 109:if($(n,e+4)!==45)break;case 102:return E(n,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+st+($(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~bt(n,"stretch",0)?hi(E(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return E(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,r,l,a,o,i,c){return M+r+":"+l+c+(a?M+r+"-span:"+(o?i:+i-+l)+c:"")+n});case 4949:if($(n,e+6)===121)return E(n,":",":"+z)+n;break;case 6444:switch($(n,$(n,14)===45?18:11)){case 120:return E(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+z+($(n,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+M+"$2box$3")+n;case 100:return E(n,":",":"+M)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(n,"scroll-","scroll-snap-")+n}return n}function Bt(n,e){for(var t="",s=0;s<n.length;s++)t+=e(n[s],s,n,e)||"";return t}function Od(n,e,t,s){switch(n.type){case yd:if(n.children.length)break;case md:case At:return n.return=n.return||n.value;case xl:return"";case Cl:return n.return=n.value+"{"+Bt(n.children,s)+"}";case Ae:if(!hn(n.value=n.props.join(",")))return""}return hn(t=Bt(n.children,s))?n.return=n.value+"{"+t+"}":""}function zd(n){var e=El(n);return function(t,s,r,l){for(var a="",o=0;o<e;o++)a+=n[o](t,s,r,l)||"";return a}}function Ld(n){return function(e){e.root||(e=e.return)&&n(e)}}function Md(n,e,t,s){if(n.length>-1&&!n.return)switch(n.type){case At:n.return=hi(n.value,n.length,t);return;case Cl:return Bt([ue(n,{value:E(n.value,"@","@"+z)})],s);case Ae:if(n.length)return vd(t=n.props,function(r){switch(Un(r,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(ue(n,{props:[E(r,/:(read-\w+)/,":"+st+"$1")]})),lt(ue(n,{props:[r]})),$s(n,{props:pi(t,s)});break;case"::placeholder":lt(ue(n,{props:[E(r,/:(plac\w+)/,":"+z+"input-$1")]})),lt(ue(n,{props:[E(r,/:(plac\w+)/,":"+st+"$1")]})),lt(ue(n,{props:[E(r,/:(plac\w+)/,M+"input-$1")]})),lt(ue(n,{props:[r]})),$s(n,{props:pi(t,s)});break}return""})}}var Bm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Id=Bm;var pe=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Wd="active",Il="data-styled-version",Vt="6.1.8",Ci=`/*!sc*/
`,_i=typeof window<"u"&&"HTMLElement"in window,Um=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var Al=Object.freeze([]),$t=Object.freeze({});function Vm(n,e,t){return t===void 0&&(t=$t),n.theme!==t.theme&&n.theme||e||t.theme}var Hd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$m=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wm=/(^-|-$)/g;function Dd(n){return n.replace($m,"-").replace(Wm,"")}var Hm=/(a)(d)/gi,Ol=52,Rd=function(n){return String.fromCharCode(n+(n>25?39:97))};function vi(n){var e,t="";for(e=Math.abs(n);e>Ol;e=e/Ol|0)t=Rd(e%Ol)+t;return(Rd(e%Ol)+t).replace(Hm,"$1-$2")}var mi,Qd=5381,Ut=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Yd=function(n){return Ut(Qd,n)};function Qm(n){return vi(Yd(n)>>>0)}function Ym(n){return n.displayName||n.name||"Component"}function yi(n){return typeof n=="string"&&!0}var Kd=typeof Symbol=="function"&&Symbol.for,Xd=Kd?Symbol.for("react.memo"):60115,Km=Kd?Symbol.for("react.forward_ref"):60112,Xm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jm=((mi={})[Km]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mi[Xd]=Zd,mi);function Ad(n){return("type"in(e=n)&&e.type.$$typeof)===Xd?Zd:"$$typeof"in n?Jm[n.$$typeof]:Xm;var e}var ny=Object.defineProperty,ey=Object.getOwnPropertyNames,bd=Object.getOwnPropertySymbols,ty=Object.getOwnPropertyDescriptor,sy=Object.getPrototypeOf,Fd=Object.prototype;function Jd(n,e,t){if(typeof e!="string"){if(Fd){var s=sy(e);s&&s!==Fd&&Jd(n,s,t)}var r=ey(e);bd&&(r=r.concat(bd(e)));for(var l=Ad(n),a=Ad(e),o=0;o<r.length;++o){var i=r[o];if(!(i in Zm||t&&t[i]||a&&i in a||l&&i in l)){var c=ty(e,i);try{ny(n,i,c)}catch{}}}}return n}function Wt(n){return typeof n=="function"}function Ei(n){return typeof n=="object"&&"styledComponentId"in n}function at(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Dl(n,e){if(n.length===0)return"";for(var t=n[0],s=1;s<n.length;s++)t+=e?e+n[s]:n[s];return t}function Qs(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ji(n,e,t){if(t===void 0&&(t=!1),!t&&!Qs(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)n[s]=ji(n[s],e[s]);else if(Qs(e))for(var s in e)n[s]=ji(n[s],e[s]);return n}function Pi(n,e){Object.defineProperty(n,"toString",{value:e})}function ce(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ry=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,r=s.length,l=r;e>=l;)if((l<<=1)<0)throw ce(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var a=r;a<l;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),r=s+t;this.groupSizes[e]=0;for(var l=s;l<r;l++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],r=this.indexOfGroup(e),l=r+s,a=r;a<l;a++)t+="".concat(this.tag.getRule(a)).concat(Ci);return t},n}(),Ll=new Map,Rl=new Map,Ml=1,zl=function(n){if(Ll.has(n))return Ll.get(n);for(;Rl.has(Ml);)Ml++;var e=Ml++;return Ll.set(n,e),Rl.set(e,n),e},ly=function(n,e){Ml=e+1,Ll.set(n,e),Rl.set(e,n)},ay="style[".concat(pe,"][").concat(Il,'="').concat(Vt,'"]'),oy=new RegExp("^".concat(pe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iy=function(n,e,t){for(var s,r=t.split(","),l=0,a=r.length;l<a;l++)(s=r[l])&&n.registerName(e,s)},uy=function(n,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(Ci),r=[],l=0,a=s.length;l<a;l++){var o=s[l].trim();if(o){var i=o.match(oy);if(i){var c=0|parseInt(i[1],10),f=i[2];c!==0&&(ly(f,c),iy(n,f,i[3]),n.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}};function wi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nf=function(n){var e=document.head,t=n||e,s=document.createElement("style"),r=function(o){var i=Array.from(o.querySelectorAll("style[".concat(pe,"]")));return i[i.length-1]}(t),l=r!==void 0?r.nextSibling:null;s.setAttribute(pe,Wd),s.setAttribute(Il,Vt);var a=wi();return a&&s.setAttribute("nonce",a),t.insertBefore(s,l),s},cy=function(){function n(e){this.element=nf(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,r=0,l=s.length;r<l;r++){var a=s[r];if(a.ownerNode===t)return a}throw ce(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),py=function(){function n(e){this.element=nf(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),dy=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Gd=_i,fy={isServer:!_i,useCSSOMInjection:!Um},Ys=function(){function n(e,t,s){e===void 0&&(e=$t),t===void 0&&(t={});var r=this;this.options=un(un({},fy),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&_i&&Gd&&(Gd=!1,function(l){for(var a=document.querySelectorAll(ay),o=0,i=a.length;o<i;o++){var c=a[o];c&&c.getAttribute(pe)!==Wd&&(uy(l,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Pi(this,function(){return function(l){for(var a=l.getTag(),o=a.length,i="",c=function(m){var h=function(p){return Rl.get(p)}(m);if(h===void 0)return"continue";var g=l.names.get(h),w=a.getGroup(m);if(g===void 0||w.length===0)return"continue";var k="".concat(pe,".g").concat(m,'[id="').concat(h,'"]'),N="";g!==void 0&&g.forEach(function(p){p.length>0&&(N+="".concat(p,","))}),i+="".concat(w).concat(k,'{content:"').concat(N,'"}').concat(Ci)},f=0;f<o;f++)c(f);return i}(r)})}return n.registerId=function(e){return zl(e)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(un(un({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,r=t.target;return t.isServer?new dy(r):s?new cy(r):new py(r)}(this.options),new ry(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(zl(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},n.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(zl(e),s)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(zl(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),hy=/&/g,my=/^\s*\/\/.*$/gm;function ef(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=ef(t.children,e)),t})}function tf(n){var e,t,s,r=n===void 0?$t:n,l=r.options,a=l===void 0?$t:l,o=r.plugins,i=o===void 0?Al:o,c=function(h,g,w){return w.startsWith(t)&&w.endsWith(t)&&w.replaceAll(t,"").length>0?".".concat(e):h},f=i.slice();f.push(function(h){h.type===Ae&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(hy,t).replace(s,c))}),a.prefix&&f.push(Md),f.push(Od);var m=function(h,g,w,k){g===void 0&&(g=""),w===void 0&&(w=""),k===void 0&&(k="&"),e=k,t=g,s=new RegExp("\\".concat(t,"\\b"),"g");var N=h.replace(my,""),p=Td(w||g?"".concat(w," ").concat(g," { ").concat(N," }"):N);a.namespace&&(p=ef(p,a.namespace));var u=[];return Bt(p,zd(f.concat(Ld(function(d){return u.push(d)})))),u};return m.hash=i.length?i.reduce(function(h,g){return g.name||ce(15),Ut(h,g.name)},Qd).toString():"",m}var yy=new Ys,ki=tf(),qi=W.default.createContext({shouldForwardProp:void 0,styleSheet:yy,stylis:ki}),Sg=qi.Consumer,gy=W.default.createContext(void 0);function Si(){return(0,W.useContext)(qi)}function vy(n){var e=(0,W.useState)(n.stylisPlugins),t=e[0],s=e[1],r=Si().styleSheet,l=(0,W.useMemo)(function(){var i=r;return n.sheet?i=n.sheet:n.target&&(i=i.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(i=i.reconstructWithOptions({useCSSOMInjection:!1})),i},[n.disableCSSOMInjection,n.sheet,n.target,r]),a=(0,W.useMemo)(function(){return tf({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:t})},[n.enableVendorPrefixes,n.namespace,t]);(0,W.useEffect)(function(){(0,$d.default)(t,n.stylisPlugins)||s(n.stylisPlugins)},[n.stylisPlugins]);var o=(0,W.useMemo)(function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:l,stylis:a}},[n.shouldForwardProp,l,a]);return W.default.createElement(qi.Provider,{value:o},W.default.createElement(gy.Provider,{value:a},n.children))}var jy=function(){function n(e,t){var s=this;this.inject=function(r,l){l===void 0&&(l=ki);var a=s.name+l.hash;r.hasNameForId(s.id,a)||r.insertRules(s.id,a,l(s.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Pi(this,function(){throw ce(12,String(s.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=ki),this.name+e.hash},n}(),wy=function(n){return n>="A"&&n<="Z"};function Bd(n){for(var e="",t=0;t<n.length;t++){var s=n[t];if(t===1&&s==="-"&&n[0]==="-")return n;wy(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var sf=function(n){return n==null||n===!1||n===""},rf=function(n){var e,t,s=[];for(var r in n){var l=n[r];n.hasOwnProperty(r)&&!sf(l)&&(Array.isArray(l)&&l.isCss||Wt(l)?s.push("".concat(Bd(r),":"),l,";"):Qs(l)?s.push.apply(s,Us(Us(["".concat(r," {")],rf(l),!1),["}"],!1)):s.push("".concat(Bd(r),": ").concat((e=r,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Id||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function Fe(n,e,t,s){if(sf(n))return[];if(Ei(n))return[".".concat(n.styledComponentId)];if(Wt(n)){if(!Wt(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var r=n(e);return Fe(r,e,t,s)}var l;return n instanceof jy?t?(n.inject(t,s),[n.getName(s)]):[n]:Qs(n)?rf(n):Array.isArray(n)?Array.prototype.concat.apply(Al,n.map(function(a){return Fe(a,e,t,s)})):[n.toString()]}function lf(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Wt(t)&&!Ei(t))return!1}return!0}var ky=Yd(Vt),Sy=function(){function n(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&lf(e),this.componentId=t,this.baseHash=Ut(ky,t),this.baseStyle=s,Ys.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,s){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=at(r,this.staticRulesId);else{var l=Dl(Fe(this.rules,e,t,s)),a=vi(Ut(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=s(l,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=at(r,a),this.staticRulesId=a}else{for(var i=Ut(this.baseHash,s.hash),c="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")c+=m;else if(m){var h=Dl(Fe(m,e,t,s));i=Ut(i,h+f),c+=h}}if(c){var g=vi(i>>>0);t.hasNameForId(this.componentId,g)||t.insertRules(this.componentId,g,s(c,".".concat(g),void 0,this.componentId)),r=at(r,g)}}return r},n}(),af=W.default.createContext(void 0),xg=af.Consumer;var gi={};function xy(n,e,t){var s=Ei(n),r=n,l=!yi(n),a=e.attrs,o=a===void 0?Al:a,i=e.componentId,c=i===void 0?function(y,S){var x=typeof y!="string"?"sc":Dd(y);gi[x]=(gi[x]||0)+1;var j="".concat(x,"-").concat(Qm(Vt+x+gi[x]));return S?"".concat(S,"-").concat(j):j}(e.displayName,e.parentComponentId):i,f=e.displayName,m=f===void 0?function(y){return yi(y)?"styled.".concat(y):"Styled(".concat(Ym(y),")")}(n):f,h=e.displayName&&e.componentId?"".concat(Dd(e.displayName),"-").concat(e.componentId):e.componentId||c,g=s&&r.attrs?r.attrs.concat(o).filter(Boolean):o,w=e.shouldForwardProp;if(s&&r.shouldForwardProp){var k=r.shouldForwardProp;if(e.shouldForwardProp){var N=e.shouldForwardProp;w=function(y,S){return k(y,S)&&N(y,S)}}else w=k}var p=new Sy(t,h,s?r.componentStyle:void 0);function u(y,S){return function(x,j,_){var b=x.attrs,T=x.componentStyle,Vn=x.defaultProps,Fl=x.foldedComponentIds,mf=x.styledComponentId,yf=x.target,gf=W.default.useContext(af),vf=Si(),Gl=x.shouldForwardProp||vf.shouldForwardProp,Ni=Vm(j,gf,Vn)||$t,Zn=function(Zs,Yt,Js){for(var Kt,Ge=un(un({},Yt),{className:void 0,theme:Js}),Ul=0;Ul<Zs.length;Ul+=1){var nr=Wt(Kt=Zs[Ul])?Kt(Ge):Kt;for(var fe in nr)Ge[fe]=fe==="className"?at(Ge[fe],nr[fe]):fe==="style"?un(un({},Ge[fe]),nr[fe]):nr[fe]}return Yt.className&&(Ge.className=at(Ge.className,Yt.className)),Ge}(b,j,Ni),Xs=Zn.as||yf,Qt={};for(var de in Zn)Zn[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&Zn.theme===Ni||(de==="forwardedAs"?Qt.as=Zn.forwardedAs:Gl&&!Gl(de,Xs)||(Qt[de]=Zn[de]));var Ti=function(Zs,Yt){var Js=Si(),Kt=Zs.generateAndInjectStyles(Yt,Js.styleSheet,Js.stylis);return Kt}(T,Zn),Bl=at(Fl,mf);return Ti&&(Bl+=" "+Ti),Zn.className&&(Bl+=" "+Zn.className),Qt[yi(Xs)&&!Hd.has(Xs)?"class":"className"]=Bl,Qt.ref=_,(0,W.createElement)(Xs,Qt)}(d,y,S)}u.displayName=m;var d=W.default.forwardRef(u);return d.attrs=g,d.componentStyle=p,d.displayName=m,d.shouldForwardProp=w,d.foldedComponentIds=s?at(r.foldedComponentIds,r.styledComponentId):"",d.styledComponentId=h,d.target=s?r.target:n,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=s?function(S){for(var x=[],j=1;j<arguments.length;j++)x[j-1]=arguments[j];for(var _=0,b=x;_<b.length;_++)ji(S,b[_],!0);return S}({},r.defaultProps,y):y}}),Pi(d,function(){return".".concat(d.styledComponentId)}),l&&Jd(d,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Ud(n,e){for(var t=[n[0]],s=0,r=e.length;s<r;s+=1)t.push(e[s],n[s+1]);return t}var Vd=function(n){return Object.assign(n,{isCss:!0})};function Cy(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Wt(n)||Qs(n))return Vd(Fe(Ud(Al,Us([n],e,!0))));var s=n;return e.length===0&&s.length===1&&typeof s[0]=="string"?Fe(s):Vd(Fe(Ud(s,e)))}function xi(n,e,t){if(t===void 0&&(t=$t),!e)throw ce(1,e);var s=function(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return n(e,t,Cy.apply(void 0,Us([r],l,!1)))};return s.attrs=function(r){return xi(n,e,un(un({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},s.withConfig=function(r){return xi(n,e,un(un({},t),r))},s}var of=function(n){return xi(xy,n)},Ks=of;Hd.forEach(function(n){Ks[n]=of(n)});var Cg=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=lf(e),Ys.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,s,r){var l=r(Dl(Fe(this.rules,t,s,r)),""),a=this.componentId+e;s.insertRules(a,a,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,s,r){e>2&&Ys.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,r)},n}();var _g=function(){function n(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),s=wi(),r=Dl([s&&'nonce="'.concat(s,'"'),"".concat(pe,'="true"'),"".concat(Il,'="').concat(Vt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ce(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ce(2);var s=((t={})[pe]="",t[Il]=Vt,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=wi();return r&&(s.nonce=r),[W.default.createElement("style",un({},s,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ys({isServer:!0}),this.sealed=!1}return n.prototype.collectStyles=function(e){if(this.sealed)throw ce(2);return W.default.createElement(vy,{sheet:this.instance},e)},n.prototype.interleaveWithNodeStream=function(e){throw ce(3)},n}();var Eg="__sc-".concat(pe,"__");var _y=Ks.div`
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
`;function Ey(){let[n,e]=P.default.useState([]),t=s=>{n[s]=!n[s],e([...n])};return P.default.createElement(_y,null,P.default.createElement("ul",null,P.default.createElement("li",null,P.default.createElement("a",{href:"./"},"\u9996\u9875")),P.default.createElement("li",{onMouseEnter:()=>t(0),onMouseLeave:()=>t(0)},P.default.createElement("a",{href:"./go-base.html"},"Go\u8BED\u8A00"),n[0]&&P.default.createElement("ul",{className:"sub-menu"},P.default.createElement("li",null,P.default.createElement("a",{href:"./go-base.html"},"\u57FA\u7840\u8BED\u6CD5")),P.default.createElement("li",null,P.default.createElement("a",{href:"./go-cobra.html"},"Cobra")),P.default.createElement("li",null,P.default.createElement("a",{href:"./go-viper.html"},"Viper")),P.default.createElement("li",null,P.default.createElement("a",{href:"./go-gin.html"},"Gin\u6846\u67B6")),P.default.createElement("li",null,P.default.createElement("a",{href:"./go-net.html"},"Net")),P.default.createElement("li",null,P.default.createElement("a",{href:"./go-reverse.html"},"\u53CD\u5411\u4EE3\u7406")))),P.default.createElement("li",{onMouseEnter:()=>t(1),onMouseLeave:()=>t(1)},P.default.createElement("a",{href:"./node-base.html"},"Node.js"),n[1]&&P.default.createElement("ul",{className:"sub-menu"},P.default.createElement("li",null,P.default.createElement("a",{href:"./node-base.html"},"Node.js\u5165\u95E8")),P.default.createElement("li",null,P.default.createElement("a",{href:"./node-base2.html"},"Node.js\u57FA\u7840")),P.default.createElement("li",null,P.default.createElement("a",{href:"./node-typescript.html"},"TypeScript")))),P.default.createElement("li",{onMouseEnter:()=>t(2),onMouseLeave:()=>t(2)},P.default.createElement("a",{href:"./ft-react-communication.html"},"\u524D\u7AEF"),n[2]&&P.default.createElement("ul",{className:"sub-menu"},P.default.createElement("li",null,P.default.createElement("a",{href:"./ft-nextjs.html"},"Next.js")),P.default.createElement("li",null,P.default.createElement("a",{href:"./ft-react-communication.html"},"React\u901A\u8BAF")),P.default.createElement("li",null,P.default.createElement("a",{href:"./markdown-base.html"},"Markdown"))))))}var uf=Ey;var Ht=me(ye());function Py(n){let[e,t]=(0,Ht.useState)(!1);return(0,Ht.useEffect)(()=>{t(!0)},[]),Ht.default.createElement("div",{style:{display:e?"":"none"}},n.children)}var cf=Py;var qy=Ks.div`
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
`;function Ny(n){return bl.default.createElement(cf,null,bl.default.createElement(uf,null),bl.default.createElement(qy,null,n.children))}var pf=Ny;function Ty(n){return ot.default.createElement(pf,null,ot.default.createElement("div",{className:"menu"},ot.default.createElement("div",{className:"title"},n.title),ot.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.serData.markdown.menus}})),ot.default.createElement("div",{className:"cnt"},ot.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.serData.markdown.content}})))}var df=Ty;var Oy={title:"Go\u57FA\u7840",mdfile:"go-base.md",serData:{markdown:{content:`<h3 id="" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#">\xA7</a></h3>
<blockquote>
<p>Go\u662FGoogle\u516C\u53F82009\u5E7411\u6708\u6B63\u5F0F\u5BF9\u5916\u516C\u5F00\u7684\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\u3002</p>
<p>Go\u8BED\u8A00\u7684\u63A8\u51FA\uFF0C\u65E8\u5728\u4E0D\u635F\u5931\u5E94\u7528\u7A0B\u5E8F\u6027\u80FD\u7684\u60C5\u51B5\u4E0B\u964D\u4F4E\u4EE3\u7801\u7684\u590D\u6742\u6027\uFF0C\u5177\u6709\u201C\u90E8\u7F72\u7B80\u5355\u3001\u5E76\u53D1\u6027\u597D\u3001\u8BED\u8A00\u8BBE\u8BA1\u826F\u597D\u3001\u6267\u884C\u6027\u80FD\u597D\u201D\u7B49\u4F18\u52BF\uFF0C\u76EE\u524D\u56FD\u5185\u8BF8\u591A IT \u516C\u53F8\u5747\u5DF2\u91C7\u7528Go\u8BED\u8A00\u5F00\u53D1\u9879\u76EE\u3002</p>
</blockquote>
<h3 id="-1" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#-1">\xA7</a></h3>
<blockquote>
<p>Go\u8BED\u8A00\u7ECF\u8FC7\u591A\u5E74\u7684\u53D1\u5C55\uFF0C\u73B0\u5728\u5B89\u88C5\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EF\u76F4\u63A5\u4ECE\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u3002</p>
</blockquote>
<h4 id="-2" tabindex="-1">\u4E0B\u8F7D\u5B89\u88C5 <a class="header-anchor" href="#-2">\xA7</a></h4>
<p>\u5B98\u7F51\u4E0B\u8F7D\u5730\u5740\uFF1A <a href="https://go.dev/dl/">https://go.dev/dl/</a></p>
<p>\u56FD\u5185\u4E0B\u8F7D\u5730\u5740\uFF1A <a href="https://golang.google.cn/dl/">https://golang.google.cn/dl/</a></p>
<p>\u6839\u636E\u81EA\u5DF2\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684\u7248\u672C\u5B89\u88C5\u5373\u53EF\u3002</p>
<p>\u4F8B\u5982\uFF1A</p>
<p>Windows\uFF0C\u4E0B\u8F7D Microsoft Windows <a href="https://golang.google.cn/dl/go1.21.4.windows-amd64.msi">https://golang.google.cn/dl/go1.21.4.windows-amd64.msi</a></p>
<p>Apple macOS(x86-64)\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684 <a href="https://golang.google.cn/dl/go1.21.4.darwin-amd64.pkg">https://golang.google.cn/dl/go1.21.4.darwin-amd64.pkg</a></p>
<h4 id="-3" tabindex="-1">\u914D\u7F6E\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#-3">\xA7</a></h4>
<p>vim ~/.bash_profile</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">export GOPATH=/Users/xjz/go # go\u7B2C\u4E09\u65B9\u5305\u76EE\u5F55
export GOROOT=/usr/local/go # go\u5B89\u88C5\u76EE\u5F55
export GO111MODULE=on  # go modules \u662F golang 1.11 \u65B0\u52A0\u7684\u7279\u6027, \u4E3A\u914D\u5408\u4E03\u725B\u56FD\u5185\u955C\u50CF\u5EFA\u8BAE\u5F00\u542F
export GOPROXY=https://goproxy.cn,direct # \u5F00\u542F\u7B2C\u4E09\u65B9\u5305\u56FD\u5185\u955C\u50CF\u5730\u5740
export PATH=$PATH:$GOPATH/bin # \u7B2C\u4E09\u65B9\u5168\u5C40\u547D\u4EE4\uFF0C\u53EF\u4E0D\u8BBE\u7F6E
</code></pre>
<p>source ~/.bash_profile</p>
<h3 id="go" tabindex="-1">Go\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#go">\xA7</a></h3>
<h4 id="-4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#-4">\xA7</a></h4>
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
<h4 id="go-mod" tabindex="-1">go mod <a class="header-anchor" href="#go-mod">\xA7</a></h4>
<p>go mod\u662FGo\u8BED\u8A00\u7684\u6A21\u5757\u7BA1\u7406\u5DE5\u5177\uFF0Cgo mod\u5FC5\u987B\u5C06golang\u5347\u7EA7\u52301.11\u4EE5\u4E0A\u7248\u672C\uFF0C\u914D\u7F6E\u5F00\u542Fgo mod\uFF0Cgo\u8BED\u8A001.16\u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u5F00\u542Fgo mod\u529F\u80FD\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">go env -w GOBIN=/usr/local/go/bin              #\u914D\u7F6E\u4E0Bgo bin
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
<h4 id="go-run" tabindex="-1">go run <a class="header-anchor" href="#go-run">\xA7</a></h4>
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
<h4 id="go-build" tabindex="-1">go build <a class="header-anchor" href="#go-build">\xA7</a></h4>
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
<td>-ccflags \u2018arg list\u2019</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED95c, 6c, 8c \u8C03\u7528</td>
</tr>
<tr>
<td>-compiler name</td>
<td>\u6307\u5B9A\u76F8\u5E94\u7684\u7F16\u8BD1\u5668\uFF0Cgccgo\u8FD8\u662Fgc</td>
</tr>
<tr>
<td>-gccgoflags \u2018arg list\u2019</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED9gccgo\u7F16\u8BD1\u8FDE\u63A5\u8C03\u7528</td>
</tr>
<tr>
<td>-gcflags \u2018arg list\u2019</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED95g, 6g, 8g \u8C03\u7528</td>
</tr>
<tr>
<td>-installsuffix suffix</td>
<td>\u4E3A\u4E86\u548C\u9ED8\u8BA4\u7684\u5B89\u88C5\u5305\u533A\u522B\u5F00\u6765\uFF0C\u91C7\u7528\u8FD9\u4E2A\u524D\u7F00\u6765\u91CD\u65B0\u5B89\u88C5\u90A3\u4E9B\u4F9D\u8D56\u7684\u5305\uFF0C-race\u7684\u65F6\u5019\u9ED8\u8BA4\u5DF2\u7ECF\u662F-installsuffix race,\u5927\u5BB6\u53EF\u4EE5\u901A\u8FC7-n\u547D\u4EE4\u6765\u9A8C\u8BC1</td>
</tr>
<tr>
<td>-ldflags \u2018flag list\u2019</td>
<td>\u4F20\u9012\u53C2\u6570\u7ED95l, 6l, 8l \u8C03\u7528</td>
</tr>
<tr>
<td>-tags \u2018tag list\u2019</td>
<td>\u8BBE\u7F6E\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u53EF\u4EE5\u9002\u914D\u7684\u90A3\u4E9Btag\uFF0C\u8BE6\u7EC6\u7684tag\u9650\u5236\u53C2\u8003\u91CC\u9762\u7684 Build Constraints</td>
</tr>
</tbody>
</table>
<h4 id="go-test" tabindex="-1">go test <a class="header-anchor" href="#go-test">\xA7</a></h4>
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
<h4 id="go-vet" tabindex="-1">go vet <a class="header-anchor" href="#go-vet">\xA7</a></h4>
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
<h4 id="go-clean" tabindex="-1">go clean <a class="header-anchor" href="#go-clean">\xA7</a></h4>
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
<h4 id="go-fmt" tabindex="-1">go fmt <a class="header-anchor" href="#go-fmt">\xA7</a></h4>
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
<h4 id="go-get" tabindex="-1">go get <a class="header-anchor" href="#go-get">\xA7</a></h4>
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
<h4 id="go-install" tabindex="-1">go install <a class="header-anchor" href="#go-install">\xA7</a></h4>
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
<h3 id="-5" tabindex="-1">\u57FA\u7840\u8BED\u6CD5 <a class="header-anchor" href="#-5">\xA7</a></h3>
<h4 id="-6" tabindex="-1">\u57FA\u7840\u8BED\u6CD5 <a class="header-anchor" href="#-6">\xA7</a></h4>
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">fmt.Println(<span class="hljs-string">&quot;Hello, World!&quot;</span>)
</code></pre>
<h4 id="-7" tabindex="-1">\u8BED\u8A00\u7ED3\u6784 <a class="header-anchor" href="#-7">\xA7</a></h4>
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main <span class="hljs-comment">// \u5305\u58F0\u660E</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;fmt&quot;</span> <span class="hljs-comment">// \u5F15\u5165\u5305</span>

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> { <span class="hljs-comment">// \u4E3B\u51FD\u6570</span>
   <span class="hljs-comment">/* \u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A\u7B80\u5355\u7684\u7A0B\u5E8F */</span>
   fmt.Println(<span class="hljs-string">&quot;Hello, World!&quot;</span>) <span class="hljs-comment">//\u6267\u884C\u7684\u8BED\u53E5</span>
}
</code></pre>
<h4 id="-8" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#-8">\xA7</a></h4>
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
<h4 id="-9" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#-9">\xA7</a></h4>
<blockquote>
<p>\u53D8\u91CF\u6765\u6E90\u4E8E\u6570\u5B66\uFF0C\u662F\u8BA1\u7B97\u673A\u8BED\u8A00\u4E2D\u5B58\u50A8\u8BA1\u7B97\u7ED3\u679C\u6216\u80FD\u8868\u793A\u503C\u62BD\u8C61\u6982\u5FF5\u3002</p>
<p>\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7\u53D8\u91CF\u540D\u8BBF\u95EE\u3002</p>
<p>Go\u8BED\u8A00\u53D8\u91CF\u540D\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u7EC4\u6210\uFF0C\u5176\u4E2D\u9996\u5B57\u7B26\u4E0D\u80FD\u4E3A\u6570\u5B57\u3002</p>
</blockquote>
<p>\u58F0\u660E\u53D8\u91CF\u7684\u4E00\u822C\u5F62\u5F0F\u662F\u4F7F\u7528var\u5173\u952E\u5B57</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> idn <span class="hljs-type">int</span>
</code></pre>
<p>\u53EF\u4EE5\u4E00\u6B21\u58F0\u660E\u591A\u4E2A\u53D8\u91CF</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">//\u7C7B\u578B\u76F8\u540C\u591A\u4E2A\u53D8\u91CF, \u975E\u5168\u5C40\u53D8\u91CF</span>
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<h4 id="-10" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#-10">\xA7</a></h4>
<blockquote>
<p>\u6570\u7EC4\u58F0\u660E\u9700\u8981\u6307\u5B9A\u5143\u7D20\u7C7B\u578B\u53CA\u5143\u7D20\u4E2A\u6570\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> arrayName [size]dataType
</code></pre>
<p>\u5176\u4E2D arrayName\u662F\u6570\u7EC4\u7684\u540D\u79F0, size\u4E3A\u6570\u7EC4\u7684\u5927\u5C0F\uFF0CdataType\u662F\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B\u3002</p>
<p>\u5B9E\u4F8B</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> numbers [<span class="hljs-number">5</span>]<span class="hljs-type">int</span> <span class="hljs-comment">// \u9ED8\u8BA4\u521D\u59CB\u5316 \uFF0C\u521D\u59CB\u503C\u4E3A0</span>
<span class="hljs-keyword">var</span> numbers = [<span class="hljs-number">5</span>]<span class="hljs-type">int</span>{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>} <span class="hljs-comment">// \u53EF\u4EE5\u4F7F\u7528\u521D\u59CB\u5316\u5217\u8868\u6765\u521D\u59CB\u5316\u6570\u7EC4\u7684\u5143\u7D20</span>
numbers := [<span class="hljs-number">5</span>]<span class="hljs-type">int</span>{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>} <span class="hljs-comment">// \u4F7F\u7528:=\u7B80\u77ED\u58F0\u660E\u8BED\u6CD5\u6765\u58F0\u660E\u548C\u521D\u59CB\u5316\u6570\u7EC4</span>
<span class="hljs-keyword">var</span> balance = [<span class="hljs-number">5</span>]<span class="hljs-type">float32</span>{<span class="hljs-number">1000.0</span>, <span class="hljs-number">2.0</span>, <span class="hljs-number">3.4</span>, <span class="hljs-number">7.0</span>, <span class="hljs-number">50.0</span>}


fmt.Println(numbers[<span class="hljs-number">0</span>]) <span class="hljs-comment">//\u8BBF\u95EE\u6570\u7EC4\u7684\u5143fmt.Println(numbers[0]) //\u8BBF\u95EE\u6570\u7EC4\u7684\u5143</span>
</code></pre>
<h4 id="-11" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#-11">\xA7</a></h4>
<blockquote>
<p>\u51FD\u6570\u662F\u57FA\u672C\u7684\u4EE3\u7801\u5757\uFF0C\u7528\u4E8E\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1\uFF0CGo\u8BED\u8A00\u6700\u5C11\u6709\u4E00\u4E2Amain()\u51FD\u6570\u3002\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u6765\u5212\u5206\u4E0D\u540C\u529F\u80FD\uFF0C\u903B\u8F91\u4E0A\u6BCF\u4E2A\u51FD\u6570\u6267\u884C\u7684\u662F\u6307\u5B9A\u7684\u4EFB\u52A1\u3002</p>
<p>\u51FD\u6570\u58F0\u660E\u544A\u8BC9\u4E86\u7F16\u8BD1\u5668\u51FD\u6570\u7684\u540D\u79F0\u3001\u8FD4\u56DE\u7C7B\u578B\uFF0C\u548C\u53C2\u6570\u3002</p>
<p>Go\u8BED\u8A00\u6807\u51C6\u5E93\u63D0\u4F9B\u4E86\u591A\u79CD\u53EF\u52A8\u7528\u7684\u5185\u7F6E\u7684\u51FD\u6570\u3002\u4F8B\u5982\uFF0Clen()\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E0D\u540C\u7C7B\u578B\u53C2\u6570\u5E76\u8FD4\u56DE\u8BE5\u7C7B\u578B\u7684\u957F\u5EA6\u3002</p>
</blockquote>
<p>\u51FD\u6570\u7684\u5B9A\u4E49</p>
<p>Go\u51FD\u6570\u7684\u5B9A\u4E49\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">function_name</span><span class="hljs-params">( [parameter list] )</span></span> [return_types] {
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">/* \u51FD\u6570\u8FD4\u56DE\u4E24\u4E2A\u6570\u7684\u6700\u5927\u503C */</span>
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
<h4 id="slice" tabindex="-1">\u5207\u7247Slice <a class="header-anchor" href="#slice">\xA7</a></h4>
<blockquote>
<p>Go\u8BED\u8A00\u5207\u7247\u662F\u5BF9\u6570\u7EC4\u7684\u62BD\u8C61\u3002</p>
<p>Go\u8BED\u8A00\u6570\u7EC4\u7684\u957F\u5EA6\u4E0D\u53EF\u6539\u53D8\uFF0C\u5728\u7279\u5B9A\u573A\u666F\u4E2D\u8FD9\u6837\u96C6\u5408\u5C31\u4E0D\u592A\u9002\u7528\uFF0CGo\u4E2D\u63D0\u4F9B\u4E86\u4E00\u79CD\u7075\u6D3B\uFF0C\u529F\u80FD\u5F3A\u608D\u7684\u5185\u7F6E\u7C7B\u578B\u5207\u7247(\u52A8\u6001\u6570\u7EC4)\uFF0C\u4E0E\u6570\u7EC4\u76F8\u6BD4\u5207\u7247\u7684\u957F\u5EA6\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u53EF\u4EE5\u8FFD\u52A0\u5143\u7D20\uFF0C\u5728\u8FFD\u52A0\u65F6\u53EF\u80FD\u4F7F\u5207\u7247\u7684\u5BB9\u91CF\u589E\u5927\u3002</p>
</blockquote>
<p>\u5B9A\u4E49\u5207\u7247</p>
<p>\u58F0\u660E\u4E00\u4E2A\u672A\u6307\u5B9A\u5927\u5C0F\u7684\u6570\u7EC4\u6765\u5B9A\u4E49\u7684\u5207\u7247\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> identifier []<span class="hljs-keyword">type</span>
</code></pre>
<p>\u5207\u7247\u4E0D\u9700\u8981\u957F\u5EA6\u8BF4\u660E, \u4F7F\u7528make()\u51FD\u6570\u6765\u521B\u5EFA\u5207\u7247</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> slice1 []<span class="hljs-keyword">type</span> = <span class="hljs-built_in">make</span>([]<span class="hljs-keyword">type</span>, <span class="hljs-built_in">len</span>)
<span class="hljs-comment">//\u4E5F\u53EF\u4EE5\u7B80\u5199\u4E3A</span>
slice1 := <span class="hljs-built_in">make</span>([]<span class="hljs-keyword">type</span>, <span class="hljs-built_in">len</span>)
</code></pre>
<p>\u5207\u7247\u521D\u59CB\u5316</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">s :=[] <span class="hljs-type">int</span> {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span> }  <span class="hljs-comment">// \u76F4\u63A5\u521D\u59CB\u5316\u5207\u7247\uFF0C[] \u8868\u793A\u662F\u5207\u7247\u7C7B\u578B\uFF0C{1,2,3} \u521D\u59CB\u5316\u503C\u4F9D\u6B21\u662F 1,2,3\uFF0C\u5176 cap=len=3\u3002</span>
</code></pre>
<p>\u5207\u7247\u622A\u53D6</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h4 id="-12" tabindex="-1">\u6307\u9488 <a class="header-anchor" href="#-12">\xA7</a></h4>
<p>\u533A\u522B\u4E8EC/C++\u4E2D\u7684\u6307\u9488\uFF0CGo\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u4E0D\u80FD\u8FDB\u884C\u504F\u79FB\u548C\u8FD0\u7B97\uFF0C\u662F\u5B89\u5168\u6307\u9488\u3002</p>
<p>Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u9700\u8981\u5148\u77E5\u90533\u4E2A\u6982\u5FF5\uFF1A\u6307\u9488\u5730\u5740\u3001\u6307\u9488\u7C7B\u578B\u548C\u6307\u9488\u53D6\u503C\u3002</p>
<p>Go\u8BED\u8A00\u4E2D\u7684\u51FD\u6570\u4F20\u53C2\u662F\u503C\u62F7\u8D1D\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u4FEE\u6539\u67D0\u4E2A\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u6307\u5411\u8BE5\u53D8\u91CF\u7684\u6307\u9488\u53D8\u91CF\u3002\u4F20\u9012\u6570\u636E\u4F7F\u7528\u6307\u9488\uFF0C\u800C\u65E0\u987B\u62F7\u8D1D\u6570\u636E\u3002\u7C7B\u578B\u6307\u9488\u4E0D\u80FD\u8FDB\u884C\u504F\u79FB\u548C\u8FD0\u7B97\u3002Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u64CD\u4F5C\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7\uFF1A<code>&amp;</code>\u53D6\u5730\u5740\u64CD\u4F5C\u7B26\u548C<code>*</code> \u89E3\u5F15\u7528\u64CD\u4F5C\u7B26(\u6839\u636E\u5730\u5740\u53D6\u503C)\u3002</p>
<h5 id="-13" tabindex="-1">\u6307\u9488\u5730\u5740\u548C\u6307\u9488\u7C7B\u578B <a class="header-anchor" href="#-13">\xA7</a></h5>
<p>\u6BCF\u4E2A\u53D8\u91CF\u5728\u8FD0\u884C\u65F6\u90FD\u62E5\u6709\u4E00\u4E2A\u5730\u5740\uFF0C\u8FD9\u4E2A\u5730\u5740\u4EE3\u8868\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u7684\u4F4D\u7F6E\u3002Go\u8BED\u8A00\u4E2D\u4F7F\u7528&amp;\u5B57\u7B26\u653E\u5728\u53D8\u91CF\u524D\u9762\u5BF9\u53D8\u91CF\u8FDB\u884C\u201C\u53D6\u5730\u5740\u201D\u64CD\u4F5C\u3002Go\u8BED\u8A00\u4E2D\u7684\u503C\u7C7B\u578B(int\u3001float\u3001bool\u3001string\u3001array\u3001struct)\u90FD\u6709\u5BF9\u5E94\u7684\u6307\u9488\u7C7B\u578B\uFF0C\u5982\uFF1A<code>*int</code>\u3001<code>*int64</code>\u3001<code>*string</code>\u7B49\u3002</p>
<p>\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">  ptr := &amp;v    <span class="hljs-comment">// v\u7684\u7C7B\u578B\u4E3AT</span>
</code></pre>
<p>\u5176\u4E2D\uFF1A</p>
<p>v\uFF1A\u4EE3\u8868\u88AB\u53D6\u5730\u5740\u7684\u53D8\u91CF\uFF0C\u7C7B\u578B\u4E3AT</p>
<p>ptr\uFF1A \u7528\u4E8E\u63A5\u6536\u7684\u53D8\u91CF\uFF0Cptr\u7684\u7C7B\u578B\u5C31\u4E3A*T\uFF0C\u79F0\u505AT\u7684\u6307\u9488\u7C7B\u578B\u3002*\u4EE3\u8868\u6307\u9488\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    a := <span class="hljs-number">10</span>
    b := &amp;a
    fmt.Printf(<span class="hljs-string">&quot;a:%d ptr:%p\\n&quot;</span>, a, &amp;a) <span class="hljs-comment">// a:10 ptr:0xc00001a078</span>
    fmt.Printf(<span class="hljs-string">&quot;b:%p type:%T\\n&quot;</span>, b, b) <span class="hljs-comment">// b:0xc00001a078 type:*int</span>
    fmt.Println(&amp;b)                    <span class="hljs-comment">// 0xc00000e018</span>
}
</code></pre>
<h5 id="-14" tabindex="-1">\u6307\u9488\u53D6\u503C <a class="header-anchor" href="#-14">\xA7</a></h5>
<p>\u5728\u5BF9\u666E\u901A\u53D8\u91CF\u4F7F\u7528&amp;\u64CD\u4F5C\u7B26\u53D6\u5730\u5740\u540E\u4F1A\u83B7\u5F97\u8FD9\u4E2A\u53D8\u91CF\u7684\u6307\u9488\uFF0C\u7136\u540E\u53EF\u4EE5\u5BF9\u6307\u9488\u4F7F\u7528*\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u6307\u9488\u53D6\u503C\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">modify1</span><span class="hljs-params">(x <span class="hljs-type">int</span>)</span></span> {
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
<h5 id="-15" tabindex="-1">\u7A7A\u6307\u9488 <a class="header-anchor" href="#-15">\xA7</a></h5>
<ul>
<li>\u5F53\u4E00\u4E2A\u6307\u9488\u88AB\u5B9A\u4E49\u540E\u6CA1\u6709\u5206\u914D\u5230\u4EFB\u4F55\u53D8\u91CF\u65F6\uFF0C\u5B83\u7684\u503C\u4E3A nil</li>
<li>\u7A7A\u6307\u9488\u7684\u5224\u65AD</li>
</ul>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h5 id="new-make" tabindex="-1">new\u548Cmake <a class="header-anchor" href="#new-make">\xA7</a></h5>
<p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> a *<span class="hljs-type">int</span>
    *a = <span class="hljs-number">100</span>
    fmt.Println(*a)

    <span class="hljs-keyword">var</span> b <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>
    b[<span class="hljs-string">&quot;\u6D4B\u8BD5&quot;</span>] = <span class="hljs-number">100</span>
    fmt.Println(b)
}
</code></pre>
<p>\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\u4F1A\u5F15\u53D1panic\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F \u5728Go\u8BED\u8A00\u4E2D\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u4EC5\u8981\u58F0\u660E\u5B83\uFF0C\u8FD8\u8981\u4E3A\u5B83\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u5426\u5219\u6211\u4EEC\u7684\u503C\u5C31\u6CA1\u529E\u6CD5\u5B58\u50A8\u3002\u800C\u5BF9\u4E8E\u503C\u7C7B\u578B\u7684\u58F0\u660E\u4E0D\u9700\u8981\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u662F\u56E0\u4E3A\u5B83\u4EEC\u5728\u58F0\u660E\u7684\u65F6\u5019\u5DF2\u7ECF\u9ED8\u8BA4\u5206\u914D\u597D\u4E86\u5185\u5B58\u7A7A\u95F4\u3002\u8981\u5206\u914D\u5185\u5B58\uFF0C\u5C31\u5F15\u51FA\u6765\u4ECA\u5929\u7684new\u548Cmake\u3002 Go\u8BED\u8A00\u4E2Dnew\u548Cmake\u662F\u5185\u5EFA\u7684\u4E24\u4E2A\u51FD\u6570\uFF0C\u4E3B\u8981\u7528\u6765\u5206\u914D\u5185\u5B58\u3002</p>
<h5 id="new" tabindex="-1">new <a class="header-anchor" href="#new">\xA7</a></h5>
<p>new\u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u5B83\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">new</span><span class="hljs-params">(Type)</span></span> *Type
</code></pre>
<p>\u5176\u4E2D\uFF0C</p>
<pre><code class="hljs">1.Type\u8868\u793A\u7C7B\u578B\uFF0Cnew\u51FD\u6570\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u7C7B\u578B
2.*Type\u8868\u793A\u7C7B\u578B\u6307\u9488\uFF0Cnew\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u8BE5\u7C7B\u578B\u5185\u5B58\u5730\u5740\u7684\u6307\u9488\u3002
</code></pre>
<p>new\u51FD\u6570\u4E0D\u592A\u5E38\u7528\uFF0C\u4F7F\u7528new\u51FD\u6570\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u5E76\u4E14\u8BE5\u6307\u9488\u5BF9\u5E94\u7684\u503C\u4E3A\u8BE5\u7C7B\u578B\u7684\u96F6\u503C\u3002</p>
<p>\u4F8B\u5982\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    a := <span class="hljs-built_in">new</span>(<span class="hljs-type">int</span>)
    b := <span class="hljs-built_in">new</span>(<span class="hljs-type">bool</span>)
    fmt.Printf(<span class="hljs-string">&quot;%T\\n&quot;</span>, a) <span class="hljs-comment">// *int</span>
    fmt.Printf(<span class="hljs-string">&quot;%T\\n&quot;</span>, b) <span class="hljs-comment">// *bool</span>
    fmt.Println(*a)       <span class="hljs-comment">// 0</span>
    fmt.Println(*b)       <span class="hljs-comment">// false</span>
}
</code></pre>
<p>\u793A\u4F8B\u4EE3\u7801\u4E2D<code>var a *int</code>\u53EA\u662F\u58F0\u660E\u4E86\u4E00\u4E2A\u6307\u9488\u53D8\u91CFa\u4F46\u662F\u6CA1\u6709\u521D\u59CB\u5316\uFF0C\u6307\u9488\u4F5C\u4E3A\u5F15\u7528\u7C7B\u578B\u9700\u8981\u521D\u59CB\u5316\u540E\u624D\u4F1A\u62E5\u6709\u5185\u5B58\u7A7A\u95F4\uFF0C\u624D\u53EF\u4EE5\u7ED9\u5B83\u8D4B\u503C\u3002\u5E94\u8BE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u4F7F\u7528\u5185\u7F6E\u7684new\u51FD\u6570\u5BF9a\u8FDB\u884C\u521D\u59CB\u5316\u4E4B\u540E\u5C31\u53EF\u4EE5\u6B63\u5E38\u5BF9\u5176\u8D4B\u503C\u4E86\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> a *<span class="hljs-type">int</span>
    a = <span class="hljs-built_in">new</span>(<span class="hljs-type">int</span>)
    *a = <span class="hljs-number">10</span>
    fmt.Println(*a)
}
</code></pre>
<h5 id="make" tabindex="-1">make <a class="header-anchor" href="#make">\xA7</a></h5>
<p>make\u4E5F\u662F\u7528\u4E8E\u5185\u5B58\u5206\u914D\u7684\uFF0C\u533A\u522B\u4E8Enew\uFF0C\u5B83\u53EA\u7528\u4E8Eslice\u3001map\u4EE5\u53CAchan\u7684\u5185\u5B58\u521B\u5EFA\uFF0C\u800C\u4E14\u5B83\u8FD4\u56DE\u7684\u7C7B\u578B\u5C31\u662F\u8FD9\u4E09\u4E2A\u7C7B\u578B\u672C\u8EAB\uFF0C\u800C\u4E0D\u662F\u4ED6\u4EEC\u7684\u6307\u9488\u7C7B\u578B\uFF0C\u56E0\u4E3A\u8FD9\u4E09\u79CD\u7C7B\u578B\u5C31\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709\u5FC5\u8981\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6307\u9488\u4E86\u3002make\u51FD\u6570\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs">func make(t Type, size ...IntegerType) Type
</code></pre>
<p>make\u51FD\u6570\u662F\u65E0\u53EF\u66FF\u4EE3\u7684\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528slice\u3001map\u4EE5\u53CAchannel\u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u4F7F\u7528make\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u7136\u540E\u624D\u53EF\u4EE5\u5BF9\u5B83\u4EEC\u8FDB\u884C\u64CD\u4F5C\u3002\u8FD9\u4E2A\u6211\u4EEC\u5728\u4E0A\u4E00\u7AE0\u4E2D\u90FD\u6709\u8BF4\u660E\uFF0C\u5173\u4E8Echannel\u6211\u4EEC\u4F1A\u5728\u540E\u7EED\u7684\u7AE0\u8282\u8BE6\u7EC6\u8BF4\u660E\u3002</p>
<p>\u672C\u8282\u5F00\u59CB\u7684\u793A\u4F8B\u4E2D<code>var b map[string]int</code>\u53EA\u662F\u58F0\u660E\u53D8\u91CFb\u662F\u4E00\u4E2Amap\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u9700\u8981\u50CF\u4E0B\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u4E00\u6837\u4F7F\u7528make\u51FD\u6570\u8FDB\u884C\u521D\u59CB\u5316\u64CD\u4F5C\u4E4B\u540E\uFF0C\u624D\u80FD\u5BF9\u5176\u8FDB\u884C\u952E\u503C\u5BF9\u8D4B\u503C\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">var</span> b <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>
    b = <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>, <span class="hljs-number">10</span>)
    b[<span class="hljs-string">&quot;\u6D4B\u8BD5&quot;</span>] = <span class="hljs-number">100</span>
    fmt.Println(b)
}
</code></pre>
<h5 id="new-make-1" tabindex="-1">new\u4E0Emake\u7684\u533A\u522B <a class="header-anchor" href="#new-make-1">\xA7</a></h5>
<pre><code class="hljs">1.\u4E8C\u8005\u90FD\u662F\u7528\u6765\u505A\u5185\u5B58\u5206\u914D\u7684\u3002
2.make\u53EA\u7528\u4E8Eslice\u3001map\u4EE5\u53CAchannel\u7684\u521D\u59CB\u5316\uFF0C\u8FD4\u56DE\u7684\u8FD8\u662F\u8FD9\u4E09\u4E2A\u5F15\u7528\u7C7B\u578B\u672C\u8EAB\uFF1B
3.\u800Cnew\u7528\u4E8E\u7C7B\u578B\u7684\u5185\u5B58\u5206\u914D\uFF0C\u5E76\u4E14\u5185\u5B58\u5BF9\u5E94\u7684\u503C\u4E3A\u7C7B\u578B\u96F6\u503C\uFF0C\u8FD4\u56DE\u7684\u662F\u6307\u5411\u7C7B\u578B\u7684\u6307\u9488\u3002
</code></pre>
<h4 id="-16" tabindex="-1">\u7ED3\u6784\u4F53 <a class="header-anchor" href="#-16">\xA7</a></h4>
<p>Go\u8BED\u8A00\u4E2D\u6570\u7EC4\u53EF\u4EE5\u5B58\u50A8\u540C\u4E00\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F46\u5728\u7ED3\u6784\u4F53\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4E3A\u4E0D\u540C\u9879\u5B9A\u4E49\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002</p>
<p>\u7ED3\u6784\u4F53\u662F\u7531\u4E00\u7CFB\u5217\u5177\u6709\u76F8\u540C\u7C7B\u578B\u6216\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u96C6\u5408\u3002</p>
<p>\u5B9A\u4E49\u7ED3\u6784\u4F53</p>
<p>\u7ED3\u6784\u4F53\u5B9A\u4E49\u9700\u8981\u4F7F\u7528type\u548Cstruct\u8BED\u53E5\u3002struct\u8BED\u53E5\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7ED3\u6784\u4F53\u4E2D\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\u3002type\u8BED\u53E5\u8BBE\u5B9A\u4E86\u7ED3\u6784\u4F53\u7684\u540D\u79F0\u3002\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">type</span> struct_variable_type <span class="hljs-keyword">struct</span> {
   member definition
   member definition
   ...
   member definition
}
</code></pre>
<p>\u4E00\u65E6\u5B9A\u4E49\u4E86\u7ED3\u6784\u4F53\u7C7B\u578B\uFF0C\u5B83\u5C31\u80FD\u7528\u4E8E\u53D8\u91CF\u7684\u58F0\u660E\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">variable_name := structure_variable_type {value1, value2...valuen}
\u6216
variable_name := structure_variable_type { key1: value1, key2: value2..., keyn: valuen}
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h4 id="map" tabindex="-1">Map(\u96C6\u5408) <a class="header-anchor" href="#map">\xA7</a></h4>
<blockquote>
<p>Map\u662F\u4E00\u79CD\u65E0\u5E8F\u7684\u952E\u503C\u5BF9\u7684\u96C6\u5408\u3002</p>
<p>Map\u6700\u91CD\u8981\u7684\u4E00\u70B9\u662F\u901A\u8FC7key\u6765\u5FEB\u901F\u68C0\u7D22\u6570\u636E\uFF0Ckey\u7C7B\u4F3C\u4E8E\u7D22\u5F15\uFF0C\u6307\u5411\u6570\u636E\u7684\u503C\u3002</p>
<p>Map\u662F\u4E00\u79CD\u96C6\u5408\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u50CF\u8FED\u4EE3\u6570\u7EC4\u548C\u5207\u7247\u4E00\u6837\u8FED\u4EE3\u5B83\uFF0C\u4E0D\u8FC7\uFF0CMap\u662F\u65E0\u5E8F\u7684\uFF0C\u904D\u5386Map\u65F6\u8FD4\u56DE\u7684\u952E\u503C\u5BF9\u7684\u987A\u5E8F\u662F\u4E0D\u786E\u5B9A\u7684\u3002\u5728\u83B7\u53D6Map\u7684\u503C\u65F6\uFF0C\u5982\u679C\u952E\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u8BE5\u7C7B\u578B\u7684\u96F6\u503C\uFF0C\u4F8B\u5982int\u7C7B\u578B\u7684\u96F6\u503C\u662F0\uFF0Cstring\u7C7B\u578B\u7684\u96F6\u503C</p>
<p>Map\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5982\u679C\u5C06\u4E00\u4E2AMap\u4F20\u9012\u7ED9\u4E00\u4E2A\u51FD\u6570\u6216\u8D4B\u503C\u7ED9\u53E6\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5B83\u4EEC\u6307\u5411\u540C\u4E00\u4E2A\u5E95\u5C42\u6570\u636E\u7ED3\u6784\uFF0C\u56E0\u6B64\u5BF9Map\u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u6240\u6709\u5F15\u7528\u5B83\u7684\u53D8\u91CF\u3002</p>
</blockquote>
<p>\u5B9A\u4E49Map</p>
<p>\u53EF\u4EE5\u4F7F\u7528\u5185\u5EFA\u51FD\u6570make\u6216\u4F7F\u7528map\u5173\u952E\u5B57\u6765\u5B9A\u4E49Map:</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">/* \u4F7F\u7528 make \u51FD\u6570 */</span>
map_variable := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[KeyType]ValueType, initialCapacity)
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 Map</span>
m := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>)
<span class="hljs-comment">// \u521B\u5EFA\u4E00\u4E2A\u521D\u59CB\u5BB9\u91CF\u4E3A 10 \u7684 Map</span>
m := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-type">int</span>, <span class="hljs-number">10</span>)
</code></pre>
<p>\u7ED3\u5408\u5B9E\u4F8B</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h4 id="interface" tabindex="-1">interface <a class="header-anchor" href="#interface">\xA7</a></h4>
<h5 id="-17" tabindex="-1">\u63A5\u53E3 <a class="header-anchor" href="#-17">\xA7</a></h5>
<blockquote>
<p>\u63A5\u53E3\u662FGo\u8BED\u8A00\u4E2D\u6570\u636E\u7C7B\u578B\u7684\u5173\u952E\u3002\u51E0\u4E4E\u6240\u6709\u7684\u6570\u636E\u7ED3\u6784\u90FD\u56F4\u7ED5\u63A5\u53E3\u5C55\u5F00\uFF0C\u63A5\u53E3\u662FGo\u8BED\u8A00\u4E2D\u6240\u6709\u6570\u636E\u7ED3\u6784\u7684\u6838\u5FC3\u3002Go\u8BED\u8A00\u7684\u63A5\u53E3\u5B9E\u9645\u4E0A\u662F\u4E00\u7EC4\u65B9\u6CD5\u7684\u96C6\u5408(\u63A5\u53E3\u4E0D\u80FD\u58F0\u660E\u5C5E\u6027)\u3002</p>
</blockquote>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">/* \u5B9A\u4E49\u63A5\u53E3 */</span>
<span class="hljs-keyword">type</span> \u63A5\u53E3\u540D <span class="hljs-keyword">interface</span> {
   \u65B9\u6CD5<span class="hljs-number">1</span> [\u8FD4\u56DE\u7C7B\u578B]
   \u65B9\u6CD5<span class="hljs-number">2</span> [\u8FD4\u56DE\u7C7B\u578B]
   \u65B9\u6CD5<span class="hljs-number">3</span> [\u8FD4\u56DE\u7C7B\u578B]
   ...
   \u65B9\u6CD5N [\u8FD4\u56DE\u7C7B\u578B]
}
</code></pre>
<p>\u5B9E\u4F8B1</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<h5 id="-18" tabindex="-1">\u7A7A\u63A5\u53E3 <a class="header-anchor" href="#-18">\xA7</a></h5>
<blockquote>
<p>interface{}\u7A7A\u63A5\u53E3\u53EF\u7528\u4E8E\u4FDD\u5B58\u4EFB\u4F55\u6570\u636E\uFF0C\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u6709\u7528\u7684\u53C2\u6570\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u7C7B\u578B\u3002</p>
<p>interface{}\u7C7B\u578B\u662F\u6CA1\u6709\u65B9\u6CD5\u7684\u63A5\u53E3\u3002\u6240\u6709\u7C7B\u578B\u90FD\u81F3\u5C11\u5B9E\u73B0\u96F6\u4E2A\u65B9\u6CD5\uFF0C\u5E76\u4E14\u81EA\u52A8\u6EE1\u8DB3\u63A5\u53E3\uFF0C\u6240\u6709\u7C7B\u578B\u90FD\u6EE1\u8DB3\u7A7A\u63A5\u53E3</p>
<p>\u56E0\u6B64\u7A7A\u63A5\u53E3\u4F5C\u4E3A\u53C2\u6570\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u63A5\u53D7\u4EFB\u4F55\u7C7B\u578B\u3002</p>
</blockquote>
<p>\u7A7A\u63A5\u53E3\u5B9E\u4F8B</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h4 id="-19" tabindex="-1">\u6CDB\u578B <a class="header-anchor" href="#-19">\xA7</a></h4>
<blockquote>
<p>\u6CDB\u578B\u662Fgo 1.18\u53CA\u4EE5\u4E0A\u7248\u672C\u7684\u65B0\u7279\u6027\u3002</p>
</blockquote>
<p>\u57FA\u672C\u8BED\u6CD5</p>
<p>\u57FA\u672C\u8BED\u6CD5\u662F\u5728\u51FD\u6570\u540E\u7528\u65B9\u62EC\u53F7\u6307\u5B9A\u6CDB\u578B\u53C2\u6570</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> \u51FD\u6570\u540D[\u6CDB\u578B\u7C7B\u578B]<span class="hljs-params">(\u51FD\u6570\u53C2\u6570)</span></span>{\u51FD\u6570\u4F53}
</code></pre>
<p>\u4F8B\u5982</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">max</span>[<span class="hljs-title">T</span> <span class="hljs-title">int</span> | <span class="hljs-title">float64</span>]<span class="hljs-params">(a, b T)</span></span> T {
  <span class="hljs-keyword">if</span> a &gt; b {
    <span class="hljs-keyword">return</span> a
  }
  <span class="hljs-keyword">return</span> b
}
</code></pre>
<p>\u4F8B2</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">type</span> Ord <span class="hljs-keyword">interface</span> {
  <span class="hljs-type">byte</span> | <span class="hljs-type">int8</span> | <span class="hljs-type">int16</span> | <span class="hljs-type">int32</span> | <span class="hljs-type">int64</span> | <span class="hljs-type">int</span> | <span class="hljs-type">float32</span> | <span class="hljs-type">float64</span> | <span class="hljs-type">string</span>
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">max</span>[<span class="hljs-title">T</span> <span class="hljs-title">Ord</span>]<span class="hljs-params">(a, b T)</span></span> T {
  <span class="hljs-keyword">if</span> a &gt; b {
    <span class="hljs-keyword">return</span> a
  }
  <span class="hljs-keyword">return</span> b
}
</code></pre>
<h4 id="-20" tabindex="-1">\u9AD8\u9636\u51FD\u6570 <a class="header-anchor" href="#-20">\xA7</a></h4>
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> (
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment">// \u904D\u5386\u5207\u7247\u7684\u6BCF\u4E2A\u5143\u7D20, \u901A\u8FC7\u7ED9\u5B9A\u51FD\u6570\u8FDB\u884C\u5143\u7D20\u8BBF\u95EE</span>
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">setup</span><span class="hljs-params">(task <span class="hljs-type">string</span>)</span></span> <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">()</span></span> {
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">var</span> opMap = <span class="hljs-keyword">map</span>[<span class="hljs-type">string</span>]<span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(<span class="hljs-type">int</span>, <span class="hljs-type">int</span>)</span></span> <span class="hljs-type">int</span>{
    <span class="hljs-string">&quot;+&quot;</span>: add,
    <span class="hljs-string">&quot;-&quot;</span>: sub,
    <span class="hljs-string">&quot;*&quot;</span>: mul,
    <span class="hljs-string">&quot;/&quot;</span>: div,
}

f := opMap[op]
f()
</code></pre>
<h3 id="package" tabindex="-1">\u5305(package) <a class="header-anchor" href="#package">\xA7</a></h3>
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
<h4 id="-21" tabindex="-1">\u5305\u8DEF\u5F84 <a class="header-anchor" href="#-21">\xA7</a></h4>
<ol>
<li>\u76F8\u5BF9\u8DEF\u5F84</li>
</ol>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;./module&quot;</span> <span class="hljs-comment">// \u5F15\u5165\u7684\u5305\u5728\u5F53\u524D\u6587\u4EF6\u540C\u4E00\u76EE\u5F55\u7684 module \u76EE\u5F55</span>
</code></pre>
<ol start="2">
<li>\u7EDD\u5BF9\u8DEF\u5F84</li>
</ol>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;LearnGo/init&quot;</span> <span class="hljs-comment">// \u5F15\u5165\u7684\u5305\u5728 gopath/src/LearnGo/init \u76EE\u5F55\u3002</span>
</code></pre>
<ol start="3">
<li>Go Module\u6A21\u5F0F\u4E0B</li>
</ol>
<p>\u6839\u76EE\u5F55\u4E2D\u5305\u542B\xA0<code>go.mod</code>\xA0\u6587\u4EF6\uFF0C<code>go.mod</code>\xA0\u6587\u4EF6\u5B9A\u4E49\u4E86\u6A21\u5757\u7684\u6A21\u5757\u8DEF\u5F84\uFF0C\u5B83\u4E5F\u662F\u7528\u4E8E\u6839\u76EE\u5F55\u7684\u5BFC\u5165\u8DEF\u5F84\uFF0C\u4EE5\u53CA\u5B83\u7684\u4F9D\u8D56\u6027\u8981\u6C42\u3002\u6BCF\u4E2A\u4F9D\u8D56\u6027\u8981\u6C42\u90FD\u88AB\u5199\u4E3A\u6A21\u5757\u8DEF\u5F84\u548C\u7279\u5B9A\u8BED\u4E49\u7248\u672C\u3002</p>
<p><code>go.mod</code>\xA0\u6587\u4EF6\u6240\u5728\u7684\u9876\u5C42\u76EE\u5F55\u4E5F\u88AB\u79F0\u4E3A\xA0<code>module</code>\xA0\u7684\u6839\u76EE\u5F55\uFF0C<code>module</code>\xA0\u6839\u76EE\u5F55\u4EE5\u53CA\u5B83\u5B50\u76EE\u5F55\u4E0B\u7684\u6240\u6709 Go \u5305\u5747\u5F52\u5C5E\u4E8E\u8FD9\u4E2A Go Module\uFF0C\u8FD9\u4E2A module \u4E5F\u88AB\u79F0\u4E3A\xA0<strong>main module</strong>\u3002</p>
<p>go mod\u4E5F\u662F1.13\u4E4B\u540E\uFF0C\u4E0D\u9700\u8981\u5728\u7279\u5B9A\u7684\u76EE\u5F55\u4E2D\u521B\u5EFA\u9879\u76EE\uFF0C\u53EF\u4EE5\u4EFB\u4F55\u76EE\u5F55\u4E0B\u521B\u5EFA\u9879\u76EE\uFF0C1.16\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u5C31\u5F00\u542F\uFF0C\u4E5F\u662FGo\u63A8\u8350\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u7B80\u5355\u65B9\u4FBF\u3002</p>
<h4 id="-22" tabindex="-1">\u5F15\u5165\u5305\u7684\u7279\u6B8A\u65B9\u5F0F <a class="header-anchor" href="#-22">\xA7</a></h4>
<ul>
<li>
<p>\u70B9\u64CD\u4F5C</p>
<p>\u8FD9\u4E2A\u70B9\u64CD\u4F5C\u7684\u542B\u4E49\u5C31\u662F\u8FD9\u4E2A\u5305\u5BFC\u5165\u4E4B\u540E\uFF0C\u5728\u8C03\u7528\u8FD9\u4E2A\u5305\u7684\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u7701\u7565\u524D\u7F00\u7684\u5305\u540D\u3002</p>
</li>
</ul>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">import</span> . <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-comment">// \u4F8B\u5982\uFF1Afmt.Println(&quot;hello world&quot;) \u53EF\u4EE5\u7701\u7565\u7684\u5199\u6210 Println(&quot;hello world&quot;)\u3002</span>
</code></pre>
<p>\u7279\u522B\u8BF4\u660E\uFF0C\u56E0\u4E3A.\u5BFC\u5165\u5BB9\u6613\u9020\u6210\u547D\u540D\u51B2\u7A81\uFF0C\u4E00\u822C\u5F88\u5C11\u7528\uFF0C<code>.</code> \u5BFC\u5165\u4F1A\u6709\u4E00\u4E2A\u8B66\u544Ashould not use dot imports (ST1001)go-staticcheck</p>
<ul>
<li>\u522B\u540D\u64CD\u4F5C</li>
</ul>
<p>\u522B\u540D\u64CD\u4F5C\u53EF\u4EE5\u5305\u547D\u540D\u6210\u53E6\u4E00\u4E2A\u540D\u5B57</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">import</span> f <span class="hljs-string">&quot;fmt&quot;</span>
<span class="hljs-comment">// \u522B\u540D\u64CD\u4F5C\u7684\u8BDD\u8C03\u7528\u5305\u51FD\u6570\u65F6\u524D\u7F00\u53D8\u6210\u4E86\u6211\u4EEC\u7684\u524D\u7F00\uFF0C\u5373 f.Println(&quot;hello world&quot;)\u3002</span>
</code></pre>
<ul>
<li><code>_</code>\u64CD\u4F5C</li>
</ul>
<p><code>_</code>\u64CD\u4F5C\u662F\u5F15\u5165\u8BE5\u5305\uFF0C\u8C03\u7528\u8BE5\u5305\u91CC\u7684init\u51FD\u6570\u3002\u800C\u4E0D\u76F4\u63A5\u4F7F\u7528\u5305\u91CC\u9762\u7684\u51FD\u6570\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">import</span> _ <span class="hljs-string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="hljs-comment">// _\u64CD\u4F5C\u5176\u5B9E\u662F\u5F15\u5165\u8BE5\u5305\uFF0C\u800C\u4E0D\u76F4\u63A5\u4F7F\u7528\u5305\u91CC\u9762\u7684\u51FD\u6570\uFF0C\u800C\u662F\u8C03\u7528\u4E86\u8BE5\u5305\u91CC\u9762\u7684 init \u51FD\u6570\u3002</span>
</code></pre>
<h3 id="init" tabindex="-1">init\u51FD\u6570 <a class="header-anchor" href="#init">\xA7</a></h3>
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
<h3 id="-23" tabindex="-1">\u6587\u4EF6\u53CA\u76EE\u5F55\u64CD\u4F5C <a class="header-anchor" href="#-23">\xA7</a></h3>
<blockquote>
<p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u6587\u4EF6\u4F7F\u7528\u6307\u5411os.File\u7C7B\u578B\u7684\u6307\u9488\u6765\u8868\u793A\u7684\uFF0C\u4E5F\u53EB\u505A\u6587\u4EF6\u53E5\u67C4\u3002\u4F7F\u7528\u8FC7\u6807\u51C6\u8F93\u5165os.Stdio\u548Cos.Stdout\uFF0C\u4ED6\u4EEC\u7684\u7C7B\u578B\u90FD\u662F*os.File\u3002</p>
</blockquote>
<h4 id="-24" tabindex="-1">\u6587\u4EF6\u8BFB\u53D6 <a class="header-anchor" href="#-24">\xA7</a></h4>
<p><strong>\u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528os.Open\u548C\u5207\u7247\u7684\u8BFB\u53D6\u6587\u4EF6</strong></p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h4 id="-25" tabindex="-1">\u6587\u4EF6\u5199\u5165 <a class="header-anchor" href="#-25">\xA7</a></h4>
<p>\u5199\u6587\u4EF6\uFF0C\u5148\u901A\u8FC7os.OpenFile\u6587\u4EF6\u53E5\u67C4\uFF0C\u7136\u540E\u518D\u901A\u8FC7bufio.NewWriter\u4EE5\u53CAWriteString\u6765\u5199\u5165\u5B57\u7B26\u4E32\uFF0C\u8BE6\u7EC6\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h4 id="bufio" tabindex="-1">bufio\u5305 <a class="header-anchor" href="#bufio">\xA7</a></h4>
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
<h3 id="-26" tabindex="-1">\u5E76\u53D1\u7F16\u7A0B(\u534F\u7A0B) <a class="header-anchor" href="#-26">\xA7</a></h3>
<blockquote>
<p>\u6709\u4EBA\u628AGo\u8BED\u8A00\u6BD4\u4F5C21\u4E16\u7EAA\u7684C\u8BED\u8A00\uFF0C\u7B2C\u4E00\u662F\u56E0\u4E3AGo\u8BED\u8A00\u8BBE\u8BA1\u7B80\u5355\uFF0C\u7B2C\u4E8C\u5219\u662F\u56E0\u4E3A21\u4E16\u7EAA\u6700\u91CD\u8981\u7684\u5C31\u662F\u5E76\u53D1\u8BBE\u8BA1\uFF0C\u800CGo\u4ECE\u8BED\u8A00\u5C42\u9762\u5C31\u652F\u6301\u5E76\u53D1\u3002\u540C\u65F6\u5B9E\u73B0\u4E86\u81EA\u52A8\u5783\u573E\u56DE\u6536\u673A\u5236\u3002</p>
<p>Go\u8BED\u8A00\u7684\u5E76\u53D1\u673A\u5236\u8FD0\u7528\u8D77\u6765\u975E\u5E38\u7B80\u4FBF\uFF0C\u5728\u542F\u52A8\u5E76\u53D1\u7684\u65B9\u5F0F\u4E0A\u76F4\u63A5\u6DFB\u52A0\u4E86\u8BED\u8A00\u7EA7\u7684\u5173\u952E\u5B57\u5C31\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u548C\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u6BD4\u66F4\u52A0\u8F7B\u91CF\u3002</p>
<p>\u5176\u4ED6\u8BED\u8A00\uFF0C\u9AD8\u5E76\u53D1\u573A\u666F\u591A\u4F7F\u7528\u591A\u7EBF\u7A0B\u6765\u652F\u6301\uFF0C\u800CGo\u5929\u7136\u652F\u6301\u5E76\u53D1\uFF0C\u8FD9\u662F\u56E0\u4E3AGo\u91C7\u7528\u66F4\u4E0A\u5C42\u7684goroutine\u6765\u652F\u6301\u9AD8\u5E76\u53D1\u573A\u666F\u3002goroutine\u53EA\u662F\u7531\u5B98\u65B9\u5B9E\u73B0\u7684\u7528\u6237\u6001\u4E0B\u7684\u8D85\u7EA7\u201C\u7EBF\u7A0B\u6C60\u201D\uFF0C\u6BCF\u4E2A4~5KB\u7684\u6808\u5185\u5B58\u5360\u7528\u548C\u7531\u4E8E\u5B9E\u73B0\u673A\u5236\u800C\u5927\u798F\u51CF\u5C11\u7684\u521B\u5EFA\u548C\u9500\u6BC1\u5F00\u9500\u662Fgo\u9AD8\u5E76\u53D1\u7684\u6839\u672C\u539F\u56E0\u3002</p>
</blockquote>
<h4 id="goroutine" tabindex="-1">Goroutine <a class="header-anchor" href="#goroutine">\xA7</a></h4>
<blockquote>
<p>goroutine\u662F\u4E00\u79CD\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u5B9E\u73B0\uFF0C\u53EF\u5728\u5355\u4E2A\u8FDB\u7A0B\u91CC\u6267\u884C\u6210\u5343\u4E0A\u4E07\u7684\u5E76\u53D1\u4EFB\u52A1\uFF0C\u5B83\u662FGo\u8BED\u8A00\u5E76\u53D1\u8BBE\u8BA1\u7684\u6838\u5FC3\u3002</p>
<p>\u4E00\u4E2Agoroutine\u7684\u6808\u5728\u5176\u751F\u547D\u5468\u671F\u5F00\u59CB\u65F6\u53EA\u6709\u5F88\u5C0F\u7684\u6808(\u5178\u578B\u60C5\u51B5\u4E0B2KB)\uFF0Cgoruntine\u7684\u6808\u4E0D\u662F\u56FA\u5B9A\u7684\uFF0C\u4ED6\u53EF\u4EE5\u6309\u9700\u589E\u5927\u548C\u7F29\u5C0F\uFF0Cgoroutine\u7684\u6808\u5927\u5C0F\u9650\u5236\u53EF\u4EE5\u8FBE\u52301GB\uFF0C\u867D\u7136\u6781\u5C11\u4F1A\u7528\u5230\u8FD9\u4E48\u5927\u3002\u6240\u4EE5\u5728Go\u8BED\u8A00\u4E2D\u4E00\u6B21\u521B\u5EFA10\u4E07\u5DE6\u53F3\u7684goroutine\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p>
<p>\u4F7F\u7528go\u5173\u952E\u5B57\u5C31\u53EF\u4EE5\u521B\u5EFAgoroutine\uFF0C\u5C06go\u58F0\u660E\u653E\u5230\u4E00\u4E2A\u9700\u8C03\u7528\u7684\u51FD\u6570\u4E4B\u524D\uFF0C\u5728\u76F8\u540C\u5730\u5740\u7A7A\u95F4\u8C03\u7528\u8FD0\u884C\u8FD9\u4E2A\u51FD\u6570\uFF0C\u8FD9\u6837\u8BE5\u51FD\u6570\u6267\u884C\u65F6\u4FBF\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E76\u53D1\u7EBF\u7A0B\uFF0C\u8FD9\u79CD\u7EBF\u7A0B\u5728Go\u8BED\u8A00\u4E2D\u5219\u88AB\u79F0\u4E3Agoroutine\u3002</p>
</blockquote>
<p>\u9996\u5148\u89C2\u5BDF\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u4F7F\u7528go\u5173\u952E\u5B57\u53BB\u542F\u52A8\u4E00\u4E2A\u534F\u7A0B\uFF0C\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p>
<p>main.go</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<p>\u539F\u56E0\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u4E3B\u51FD\u6570main\u9996\u5148\u6267\u884C\u5B8C\u5E76\u8FD4\u56DEreturn\u4E86\uFF0C\u800Cgo Say(\u201Cfunc say : hello world!!!\u201D)\u9700\u8981\u4E3A\u534F\u7A0B\u521D\u59CB\u5316\u6D88\u8017\u4E00\u4E9B\u65F6\u95F4\uFF0C\u56E0\u4E3A\u665A\u4E8Emain\u7684return\uFF0C\u56E0\u4E3A\u5C31\u6CA1\u6709\u8F93\u51FA\u6253\u5370\u3002</p>
<p>\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0B\u7A0B\u5E8F</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<h4 id="-27" tabindex="-1">\u5E76\u53D1\u63A7\u5236 <a class="header-anchor" href="#-27">\xA7</a></h4>
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
<h5 id="sync-wait-group" tabindex="-1">Sync.WaitGroup <a class="header-anchor" href="#sync-wait-group">\xA7</a></h5>
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main
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
<h4 id="channel" tabindex="-1">channel(\u4FE1\u9053) <a class="header-anchor" href="#channel">\xA7</a></h4>
<p>Go\u8BED\u8A00\u4E2D\u7684\u901A\u9053(channel)\u662F\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u3002\u901A\u9053\u50CF\u4E00\u4E2A\u4F20\u9012\u5E26\u6216\u8005\u961F\u5217\uFF0C\u603B\u662F\u9075\u5FAA\u5148\u5165\u5148\u51FA\u7684\u89C4\u5219\uFF0C\u4FDD\u8BC1\u6536\u53D1\u6570\u636E\u7684\u987A\u5E8F\u3002channel\u8DDFLinux\u4E2D\u7684\u53CC\u5411\u7BA1\u9053\u5F88\u50CF\uFF0C\u4E5F\u662F\u7528\u4E8E\u8FDB\u7A0B\u548C\u534F\u7A0B\u95F4\u901A\u4FE1\u3002</p>
<p>channel\u7684\u5B9A\u4E49\u6253\u5F00\u3001\u53D1\u9001\u3001\u63A5\u6536\u3001\u5173\u95ED</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">chan</span> T          <span class="hljs-comment">// \u53EF\u4EE5\u63A5\u6536\u548C\u53D1\u9001\u7C7B\u578B\u4E3A T \u7684\u6570\u636E</span>
<span class="hljs-keyword">chan</span>&lt;- <span class="hljs-type">float64</span>  <span class="hljs-comment">// \u53EA\u53EF\u4EE5\u7528\u6765\u53D1\u9001 float64 \u7C7B\u578B\u7684\u6570\u636E</span>
&lt;-<span class="hljs-keyword">chan</span> <span class="hljs-type">int</span>      <span class="hljs-comment">// \u53EA\u53EF\u4EE5\u7528\u6765\u63A5\u6536 int \u7C7B\u578B\u7684\u6570\u636E</span>

ch1 := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">chan</span> <span class="hljs-type">int</span>, <span class="hljs-number">10</span>) <span class="hljs-comment">// \u5B9A\u4E49channel\uFF0C\u91CC\u9762\u53EF\u4EE5\u585E\u7684\u6570\u636E\u7ED3\u6784\u662Fint\uFF0C\u7F13\u51B2\u957F\u5EA6\u4E3A10</span>
ch2 := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">chan</span> []<span class="hljs-type">int</span>) <span class="hljs-comment">// \u5B9A\u4E49channel\uFF0C\u91CC\u9762\u53EF\u4EE5\u585E\u7684\u6570\u636E\u7ED3\u6784\u662F[]int\uFF0C\u7F13\u51B2\u957F\u5EA6\u4E3A0\uFF08\u4E5F\u5C31\u662F\u65E0\u7F13\u51B2channel\uFF09\uFF0C\u5F80\u91CC\u9762\u53D1\u4E86\u6570\u636E\uFF0C\u4F1A\u963B\u585E\u76F4\u5230\u6570\u636E\u88AB\u63A5\u6536</span>


ch1 &lt;- <span class="hljs-number">10</span>  <span class="hljs-comment">//\u53D1\u9001\u4E00\u4E2A\u6570\u636E</span>
x := &lt;- ch1  <span class="hljs-comment">// \u63A5\u6536\u4E00\u4E2A\u6570\u636E</span>

<span class="hljs-built_in">close</span>(ch1) <span class="hljs-comment">// \u5173\u95EDchannel</span>
</code></pre>
<p>\u4FE1\u9053\u5B9E\u4F8B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h4 id="context" tabindex="-1">Context <a class="header-anchor" href="#context">\xA7</a></h4>
<blockquote>
<p>Context\u662FGo1.7\u5F15\u5165\u5230\u6807\u51C6\u5E93\u7684\uFF0C\u51C6\u786E\u8BF4\u5B83\u662Fgoroutine\u7684\u4E0A\u4E0B\u6587\uFF0C\u5305\u542Bgoroutine\u7684\u8FD0\u884C\u72B6\u6001\u3001\u73AF\u5883\u3001\u73B0\u573A\u7B49\u4FE1\u606F\u3002Context\u4E3B\u8981\u7528\u6765\u5728goroutine\u4E4B\u95F4\u4F20\u9012\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002Context\u51E0\u4E4E\u6210\u4E3A\u4E86\u5E76\u53D1\u63A7\u5236\u548C\u8D85\u65F6\u63A7\u5236\u7684\u6807\u51C6\u505A\u6CD5\u3002</p>
</blockquote>
<p>Context\u63A5\u53E3\u5B9A\u4E49\u5982\u4E0B\uFF1A</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">type</span> Context <span class="hljs-keyword">interface</span> {
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
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-keyword">package</span> main

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
<h3 id="-28" tabindex="-1">\u70ED\u66F4\u65B0 <a class="header-anchor" href="#-28">\xA7</a></h3>
<blockquote>
<p>\u7531\u4E8Ego\u662F\u9759\u6001\u7F16\u8BD1\u8BED\u8A00\uFF0C\u5BF9\u4E8E\u5F00\u53D1\u65F6\u5E76\u4E0D\u662F\u5F88\u53CB\u597D\uFF0CAir\u662F\u4E3AGo\u5E94\u7528\u5F00\u53D1\u8BBE\u8BA1\u7684\u4E00\u4E2A\u70ED\u91CD\u8F7D\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u5F53\u7F16\u5199\u7684\u9879\u76EE\u4EE3\u7801\u53D1\u751F\u53D8\u5316\u65F6\u81EA\u52A8\u91CD\u65B0\u7F16\u8BD1\u8FD0\u5730\u9879\u76EE\u3002</p>
<p>\u53EA\u9700\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u8F93\u5165air\u5373\u53EF</p>
<p>\u6CE8\u610F\uFF1A\u8BE5\u5DE5\u5177\u4E0E\u751F\u4EA7\u73AF\u5883\u7684\u70ED\u90E8\u7F72\u65E0\u5173\u3002</p>
</blockquote>
<h4 id="air" tabindex="-1">\u5B89\u88C5Air <a class="header-anchor" href="#air">\xA7</a></h4>
<p>\u901A\u8FC7go\u6765\u5B89\u88C5air\u547D\u4EE4</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">go install github.com/cosmtrek/air@latest
</code></pre>
<p>macOS/linux\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</p>
<p>\u5982\u6DFB\u52A0\u5230~/.zshrc</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">export PATH=$PATH:$(go env GOPATH)/bin
</code></pre>
<h4 id="-29" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#-29">\xA7</a></h4>
<p>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\u6839\u76EE\u5F55</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">air -v
</code></pre>
<h4 id="air-1" tabindex="-1">\u4F7F\u7528Air <a class="header-anchor" href="#air-1">\xA7</a></h4>
<p>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\u6839\u76EE\u5F55</p>
<p>\u521D\u59CB\u5316\u9ED8\u8BA4\u914D\u7F6E\u5230\u5F53\u524D\u8DEF\u5F84\u4E0B\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210.air.toml\u6587\u4EF6\u5230\u9879\u76EE\u6839\u76EE\u5F55\u4E0B</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">air init
</code></pre>
<p>\u4E4B\u540E\u5F00\u53D1\u65F6\uFF0C\u53EA\u9700\u8981\u6267\u884Cair\u547D\u4EE4\uFF0C\u5373\u53EF\u5B9E\u73B0\u70ED\u91CD\u66F4\u529F\u80FD\u3002</p>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs">air
</code></pre>
<h4 id="air-toml" tabindex="-1">\u914D\u7F6E\u6587\u4EF6(.air.toml)\u8BF4\u660E <a class="header-anchor" href="#air-toml">\xA7</a></h4>
<pre><div class="code-copy" onclick="CopyCode(this)">\u590D\u5236\u4EE3\u7801</div><code class="hljs"><span class="hljs-comment"># \u6839\u76EE\u5F55</span>
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
`,menus:'<nav class="table-of-contents"><ol><li><a href="#">\u7B80\u4ECB </a></li><li><a href="#-1">\u5B89\u88C5 </a><ol><li><a href="#-2">\u4E0B\u8F7D\u5B89\u88C5 </a></li><li><a href="#-3">\u914D\u7F6E\u73AF\u5883\u53D8\u91CF </a></li></ol></li><li><a href="#go">Go\u5E38\u7528\u547D\u4EE4 </a><ol><li><a href="#-4">\u5E38\u7528\u547D\u4EE4 </a></li><li><a href="#go-mod">go mod </a></li><li><a href="#go-run">go run </a></li><li><a href="#go-build">go build </a></li><li><a href="#go-test">go test </a></li><li><a href="#go-vet">go vet </a></li><li><a href="#go-clean">go clean </a></li><li><a href="#go-fmt">go fmt </a></li><li><a href="#go-get">go get </a></li><li><a href="#go-install">go install </a></li></ol></li><li><a href="#-5">\u57FA\u7840\u8BED\u6CD5 </a><ol><li><a href="#-6">\u57FA\u7840\u8BED\u6CD5 </a></li><li><a href="#-7">\u8BED\u8A00\u7ED3\u6784 </a></li><li><a href="#-8">\u6570\u636E\u7C7B\u578B </a></li><li><a href="#-9">\u53D8\u91CF </a></li><li><a href="#-10">\u6570\u7EC4 </a></li><li><a href="#-11">\u51FD\u6570 </a></li><li><a href="#slice">\u5207\u7247Slice </a></li><li><a href="#-12">\u6307\u9488 </a><ol><li><a href="#-13">\u6307\u9488\u5730\u5740\u548C\u6307\u9488\u7C7B\u578B </a></li><li><a href="#-14">\u6307\u9488\u53D6\u503C </a></li><li><a href="#-15">\u7A7A\u6307\u9488 </a></li><li><a href="#new-make">new\u548Cmake </a></li><li><a href="#new">new </a></li><li><a href="#make">make </a></li><li><a href="#new-make-1">new\u4E0Emake\u7684\u533A\u522B </a></li></ol></li><li><a href="#-16">\u7ED3\u6784\u4F53 </a></li><li><a href="#map">Map(\u96C6\u5408) </a></li><li><a href="#interface">interface </a><ol><li><a href="#-17">\u63A5\u53E3 </a></li><li><a href="#-18">\u7A7A\u63A5\u53E3 </a></li></ol></li><li><a href="#-19">\u6CDB\u578B </a></li><li><a href="#-20">\u9AD8\u9636\u51FD\u6570 </a></li></ol></li><li><a href="#package">\u5305(package) </a><ol><li><a href="#-21">\u5305\u8DEF\u5F84 </a></li><li><a href="#-22">\u5F15\u5165\u5305\u7684\u7279\u6B8A\u65B9\u5F0F </a></li></ol></li><li><a href="#init">init\u51FD\u6570 </a></li><li><a href="#-23">\u6587\u4EF6\u53CA\u76EE\u5F55\u64CD\u4F5C </a><ol><li><a href="#-24">\u6587\u4EF6\u8BFB\u53D6 </a></li><li><a href="#-25">\u6587\u4EF6\u5199\u5165 </a></li><li><a href="#bufio">bufio\u5305 </a></li></ol></li><li><a href="#-26">\u5E76\u53D1\u7F16\u7A0B(\u534F\u7A0B) </a><ol><li><a href="#goroutine">Goroutine </a></li><li><a href="#-27">\u5E76\u53D1\u63A7\u5236 </a><ol><li><a href="#sync-wait-group">Sync.WaitGroup </a></li></ol></li><li><a href="#channel">channel(\u4FE1\u9053) </a></li><li><a href="#context">Context </a></li></ol></li><li><a href="#-28">\u70ED\u66F4\u65B0 </a><ol><li><a href="#air">\u5B89\u88C5Air </a></li><li><a href="#-29">\u6D4B\u8BD5 </a></li><li><a href="#air-1">\u4F7F\u7528Air </a></li><li><a href="#air-toml">\u914D\u7F6E\u6587\u4EF6(.air.toml)\u8BF4\u660E </a></li></ol></li></ol></nav>'}}};(0,hf.hydrateRoot)(document.getElementById("root"),ff.default.createElement(df,{...Oy}));})();
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
