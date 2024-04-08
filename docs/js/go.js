(()=>{var wf=Object.create;var Ra=Object.defineProperty;var Sf=Object.getOwnPropertyDescriptor;var kf=Object.getOwnPropertyNames;var xf=Object.getPrototypeOf,Ef=Object.prototype.hasOwnProperty;var mn=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var _f=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of kf(n))!Ef.call(e,o)&&o!==t&&Ra(e,o,{get:()=>n[o],enumerable:!(r=Sf(n,o))||r.enumerable});return e};var hn=(e,n,t)=>(t=e!=null?wf(xf(e)):{},_f(n||!e||!e.__esModule?Ra(t,"default",{value:e,enumerable:!0}):t,e));var Ua=mn(q=>{"use strict";var Xt=Symbol.for("react.element"),Pf=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),Tf=Symbol.for("react.provider"),Of=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Lf=Symbol.for("react.memo"),If=Symbol.for("react.lazy"),za=Symbol.iterator;function Df(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var Da={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ma=Object.assign,Aa={};function ut(e,n,t){this.props=e,this.context=n,this.refs=Aa,this.updater=t||Da}ut.prototype.isReactComponent={};ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ja(){}ja.prototype=ut.prototype;function Vi(e,n,t){this.props=e,this.context=n,this.refs=Aa,this.updater=t||Da}var $i=Vi.prototype=new ja;$i.constructor=Vi;Ma($i,ut.prototype);$i.isPureReactComponent=!0;var La=Array.isArray,Fa=Object.prototype.hasOwnProperty,Wi={current:null},Ga={key:!0,ref:!0,__self:!0,__source:!0};function Ba(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Fa.call(n,r)&&!Ga.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(u===1)o.children=t;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Xt,type:e,key:i,ref:l,props:o,_owner:Wi.current}}function Mf(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function Af(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ia=/\/+/g;function Ui(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Af(""+e.key):n.toString(36)}function eo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xt:case Pf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ui(l,0):r,La(o)?(t="",e!=null&&(t=e.replace(Ia,"$&/")+"/"),eo(o,n,t,"",function(c){return c})):o!=null&&(Hi(o)&&(o=Mf(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ia,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",La(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+Ui(i,u);l+=eo(i,n,t,a,o)}else if(a=Df(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+Ui(i,u++),l+=eo(i,n,t,a,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function br(e,n,t){if(e==null)return e;var r=[],o=0;return eo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function jf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},no={transition:null},Ff={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:no,ReactCurrentOwner:Wi};q.Children={map:br,forEach:function(e,n,t){br(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return br(e,function(){n++}),n},toArray:function(e){return br(e,function(n){return n})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ut;q.Fragment=Cf;q.Profiler=Nf;q.PureComponent=Vi;q.StrictMode=qf;q.Suspense=zf;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;q.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ma({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Wi.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)Fa.call(n,a)&&!Ga.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Xt,type:e.type,key:o,ref:i,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:Of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tf,_context:e},e.Consumer=e};q.createElement=Ba;q.createFactory=function(e){var n=Ba.bind(null,e);return n.type=e,n};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Rf,render:e}};q.isValidElement=Hi;q.lazy=function(e){return{$$typeof:If,_payload:{_status:-1,_result:e},_init:jf}};q.memo=function(e,n){return{$$typeof:Lf,type:e,compare:n===void 0?null:n}};q.startTransition=function(e){var n=no.transition;no.transition={};try{e()}finally{no.transition=n}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,n){return ae.current.useCallback(e,n)};q.useContext=function(e){return ae.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};q.useEffect=function(e,n){return ae.current.useEffect(e,n)};q.useId=function(){return ae.current.useId()};q.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};q.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};q.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};q.useMemo=function(e,n){return ae.current.useMemo(e,n)};q.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};q.useRef=function(e){return ae.current.useRef(e)};q.useState=function(e){return ae.current.useState(e)};q.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};q.useTransition=function(){return ae.current.useTransition()};q.version="18.2.0"});var gn=mn((Lg,Va)=>{"use strict";Va.exports=Ua()});var ba=mn(I=>{"use strict";function Xi(e,n){var t=e.length;e.push(n);e:for(;0<t;){var r=t-1>>>1,o=e[r];if(0<to(o,n))e[r]=n,e[t]=o,t=r;else break e}}function Le(e){return e.length===0?null:e[0]}function oo(e){if(e.length===0)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,u=e[l],a=l+1,c=e[a];if(0>to(u,t))a<o&&0>to(c,u)?(e[r]=c,e[a]=t,r=a):(e[r]=u,e[l]=t,r=l);else if(a<o&&0>to(c,t))e[r]=c,e[a]=t,r=a;else break e}}return n}function to(e,n){var t=e.sortIndex-n.sortIndex;return t!==0?t:e.id-n.id}typeof performance=="object"&&typeof performance.now=="function"?($a=performance,I.unstable_now=function(){return $a.now()}):(Qi=Date,Wa=Qi.now(),I.unstable_now=function(){return Qi.now()-Wa});var $a,Qi,Wa,Ve=[],yn=[],Gf=1,_e=null,te=3,io=!1,Un=!1,Jt=!1,Ya=typeof setTimeout=="function"?setTimeout:null,Ka=typeof clearTimeout=="function"?clearTimeout:null,Ha=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Zi(e){for(var n=Le(yn);n!==null;){if(n.callback===null)oo(yn);else if(n.startTime<=e)oo(yn),n.sortIndex=n.expirationTime,Xi(Ve,n);else break;n=Le(yn)}}function Ji(e){if(Jt=!1,Zi(e),!Un)if(Le(Ve)!==null)Un=!0,el(bi);else{var n=Le(yn);n!==null&&nl(Ji,n.startTime-e)}}function bi(e,n){Un=!1,Jt&&(Jt=!1,Ka(bt),bt=-1),io=!0;var t=te;try{for(Zi(n),_e=Le(Ve);_e!==null&&(!(_e.expirationTime>n)||e&&!Ja());){var r=_e.callback;if(typeof r=="function"){_e.callback=null,te=_e.priorityLevel;var o=r(_e.expirationTime<=n);n=I.unstable_now(),typeof o=="function"?_e.callback=o:_e===Le(Ve)&&oo(Ve),Zi(n)}else oo(Ve);_e=Le(Ve)}if(_e!==null)var i=!0;else{var l=Le(yn);l!==null&&nl(Ji,l.startTime-n),i=!1}return i}finally{_e=null,te=t,io=!1}}var lo=!1,ro=null,bt=-1,Xa=5,Za=-1;function Ja(){return!(I.unstable_now()-Za<Xa)}function Yi(){if(ro!==null){var e=I.unstable_now();Za=e;var n=!0;try{n=ro(!0,e)}finally{n?Zt():(lo=!1,ro=null)}}else lo=!1}var Zt;typeof Ha=="function"?Zt=function(){Ha(Yi)}:typeof MessageChannel<"u"?(Ki=new MessageChannel,Qa=Ki.port2,Ki.port1.onmessage=Yi,Zt=function(){Qa.postMessage(null)}):Zt=function(){Ya(Yi,0)};var Ki,Qa;function el(e){ro=e,lo||(lo=!0,Zt())}function nl(e,n){bt=Ya(function(){e(I.unstable_now())},n)}I.unstable_IdlePriority=5;I.unstable_ImmediatePriority=1;I.unstable_LowPriority=4;I.unstable_NormalPriority=3;I.unstable_Profiling=null;I.unstable_UserBlockingPriority=2;I.unstable_cancelCallback=function(e){e.callback=null};I.unstable_continueExecution=function(){Un||io||(Un=!0,el(bi))};I.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xa=0<e?Math.floor(1e3/e):5};I.unstable_getCurrentPriorityLevel=function(){return te};I.unstable_getFirstCallbackNode=function(){return Le(Ve)};I.unstable_next=function(e){switch(te){case 1:case 2:case 3:var n=3;break;default:n=te}var t=te;te=n;try{return e()}finally{te=t}};I.unstable_pauseExecution=function(){};I.unstable_requestPaint=function(){};I.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=te;te=e;try{return n()}finally{te=t}};I.unstable_scheduleCallback=function(e,n,t){var r=I.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?r+t:r):t=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,e={id:Gf++,callback:n,priorityLevel:e,startTime:t,expirationTime:o,sortIndex:-1},t>r?(e.sortIndex=t,Xi(yn,e),Le(Ve)===null&&e===Le(yn)&&(Jt?(Ka(bt),bt=-1):Jt=!0,nl(Ji,t-r))):(e.sortIndex=o,Xi(Ve,e),Un||io||(Un=!0,el(bi))),e};I.unstable_shouldYield=Ja;I.unstable_wrapCallback=function(e){var n=te;return function(){var t=te;te=n;try{return e.apply(this,arguments)}finally{te=t}}}});var ns=mn((Dg,es)=>{"use strict";es.exports=ba()});var up=mn(Ee=>{"use strict";var ac=gn(),ke=ns();function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sc=new Set,kr={};function nt(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(kr[e]=n,e=0;e<n.length;e++)sc.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,Bf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ts={},rs={};function Uf(e){return _l.call(rs,e)?!0:_l.call(ts,e)?!1:Bf.test(e)?rs[e]=!0:(ts[e]=!0,!1)}function Vf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $f(e,n,t,r){if(n===null||typeof n>"u"||Vf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var gu=/[\-:]([a-z])/g;function yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(gu,yu);ne[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(gu,yu);ne[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(gu,yu);ne[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function vu(e,n,t,r){var o=ne.hasOwnProperty(n)?ne[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($f(n,t,o,r)&&(t=null),r||o===null?Uf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var un=ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),ct=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),wn=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var pc=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var os=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,tl;function ar(e){if(tl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);tl=n&&n[1]||""}return`
`+tl+e}var rl=!1;function ol(e,n){if(!e||rl)return"";rl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{rl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ar(e):""}function Wf(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function Nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dt:return"Fragment";case ct:return"Portal";case Pl:return"Profiler";case wu:return"StrictMode";case Cl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dc:return(e.displayName||"Context")+".Consumer";case cc:return(e._context.displayName||"Context")+".Provider";case Su:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return n=e.displayName||null,n!==null?n:Nl(e.type)||"Memo";case wn:n=e._payload,e=e._init;try{return Nl(e(n))}catch{}}return null}function Hf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nl(n);case 8:return n===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qf(e){var n=fc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ao(e){e._valueTracker||(e._valueTracker=Qf(e))}function mc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function is(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Ln(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hc(e,n){n=n.checked,n!=null&&vu(e,"checked",n,!1)}function Ol(e,n){hc(e,n);var t=Ln(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Rl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Rl(e,n.type,Ln(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ls(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Rl(e,n,t){(n!=="number"||Ao(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var sr=Array.isArray;function xt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Ln(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function zl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(sr(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Ln(t)}}function gc(e,n){var t=Ln(n.value),r=Ln(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function as(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function yc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ll(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?yc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,vc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function xr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yf=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){Yf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),pr[n]=pr[e]})});function wc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||pr.hasOwnProperty(e)&&pr[e]?(""+n).trim():n+"px"}function Sc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=wc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Kf=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(e,n){if(n){if(Kf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function Dl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Et=null,_t=null;function ss(e){if(e=Gr(e)){if(typeof Al!="function")throw Error(v(280));var n=e.stateNode;n&&(n=di(n),Al(e.stateNode,e.type,n))}}function kc(e){Et?_t?_t.push(e):_t=[e]:Et=e}function xc(){if(Et){var e=Et,n=_t;if(_t=Et=null,ss(e),n)for(e=0;e<n.length;e++)ss(n[e])}}function Ec(e,n){return e(n)}function _c(){}var il=!1;function Pc(e,n,t){if(il)return e(n,t);il=!0;try{return Ec(e,n,t)}finally{il=!1,(Et!==null||_t!==null)&&(_c(),xc())}}function Er(e,n){var t=e.stateNode;if(t===null)return null;var r=di(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var jl=!1;if(tn)try{at={},Object.defineProperty(at,"passive",{get:function(){jl=!0}}),window.addEventListener("test",at,at),window.removeEventListener("test",at,at)}catch{jl=!1}var at;function Xf(e,n,t,r,o,i,l,u,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var fr=!1,jo=null,Fo=!1,Fl=null,Zf={onError:function(e){fr=!0,jo=e}};function Jf(e,n,t,r,o,i,l,u,a){fr=!1,jo=null,Xf.apply(Zf,arguments)}function bf(e,n,t,r,o,i,l,u,a){if(Jf.apply(this,arguments),fr){if(fr){var c=jo;fr=!1,jo=null}else throw Error(v(198));Fo||(Fo=!0,Fl=c)}}function tt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Cc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cs(e){if(tt(e)!==e)throw Error(v(188))}function em(e){var n=e.alternate;if(!n){if(n=tt(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return cs(o),e;if(i===r)return cs(o),n;i=i.sibling}throw Error(v(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function qc(e){return e=em(e),e!==null?Nc(e):null}function Nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Nc(e);if(n!==null)return n;e=e.sibling}return null}var Tc=ke.unstable_scheduleCallback,ds=ke.unstable_cancelCallback,nm=ke.unstable_shouldYield,tm=ke.unstable_requestPaint,H=ke.unstable_now,rm=ke.unstable_getCurrentPriorityLevel,Eu=ke.unstable_ImmediatePriority,Oc=ke.unstable_UserBlockingPriority,Go=ke.unstable_NormalPriority,om=ke.unstable_LowPriority,Rc=ke.unstable_IdlePriority,ui=null,Qe=null;function im(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:am,lm=Math.log,um=Math.LN2;function am(e){return e>>>=0,e===0?32:31-(lm(e)/um|0)|0}var co=64,po=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~o;u!==0?r=cr(u):(i&=l,i!==0&&(r=cr(i)))}else l=t&~o,l!==0?r=cr(l):i!==0&&(r=cr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-je(n),o=1<<t,r|=e[t],n&=~o;return r}function sm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-je(i),u=1<<l,a=o[l];a===-1?(!(u&t)||u&r)&&(o[l]=sm(u,n)):a<=n&&(e.expiredLanes|=u),i&=~u}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zc(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function ll(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function jr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-je(n),e[n]=t}function dm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-je(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function _u(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-je(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var z=0;function Lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ic,Pu,Dc,Mc,Ac,Bl=!1,fo=[],Pn=null,Cn=null,qn=null,_r=new Map,Pr=new Map,kn=[],pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,n){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":_r.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(n.pointerId)}}function nr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Gr(n),n!==null&&Pu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function fm(e,n,t,r,o){switch(n){case"focusin":return Pn=nr(Pn,e,n,t,r,o),!0;case"dragenter":return Cn=nr(Cn,e,n,t,r,o),!0;case"mouseover":return qn=nr(qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return _r.set(i,nr(_r.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Pr.set(i,nr(Pr.get(i)||null,e,n,t,r,o)),!0}return!1}function jc(e){var n=Wn(e.target);if(n!==null){var t=tt(n);if(t!==null){if(n=t.tag,n===13){if(n=Cc(t),n!==null){e.blockedOn=n,Ac(e.priority,function(){Dc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ul(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ml=r,t.target.dispatchEvent(r),Ml=null}else return n=Gr(t),n!==null&&Pu(n),e.blockedOn=t,!1;n.shift()}return!0}function fs(e,n,t){qo(e)&&t.delete(n)}function mm(){Bl=!1,Pn!==null&&qo(Pn)&&(Pn=null),Cn!==null&&qo(Cn)&&(Cn=null),qn!==null&&qo(qn)&&(qn=null),_r.forEach(fs),Pr.forEach(fs)}function tr(e,n){e.blockedOn===n&&(e.blockedOn=null,Bl||(Bl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,mm)))}function Cr(e){function n(o){return tr(o,e)}if(0<fo.length){tr(fo[0],e);for(var t=1;t<fo.length;t++){var r=fo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&tr(Pn,e),Cn!==null&&tr(Cn,e),qn!==null&&tr(qn,e),_r.forEach(n),Pr.forEach(n),t=0;t<kn.length;t++)r=kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(t=kn[0],t.blockedOn===null);)jc(t),t.blockedOn===null&&kn.shift()}var Pt=un.ReactCurrentBatchConfig,Uo=!0;function hm(e,n,t,r){var o=z,i=Pt.transition;Pt.transition=null;try{z=1,Cu(e,n,t,r)}finally{z=o,Pt.transition=i}}function gm(e,n,t,r){var o=z,i=Pt.transition;Pt.transition=null;try{z=4,Cu(e,n,t,r)}finally{z=o,Pt.transition=i}}function Cu(e,n,t,r){if(Uo){var o=Ul(e,n,t,r);if(o===null)fl(e,n,r,Vo,t),ps(e,r);else if(fm(o,e,n,t,r))r.stopPropagation();else if(ps(e,r),n&4&&-1<pm.indexOf(e)){for(;o!==null;){var i=Gr(o);if(i!==null&&Ic(i),i=Ul(e,n,t,r),i===null&&fl(e,n,r,Vo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else fl(e,n,r,null,t)}}var Vo=null;function Ul(e,n,t,r){if(Vo=null,e=xu(r),e=Wn(e),e!==null)if(n=tt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Cc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Vo=e,null}function Fc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rm()){case Eu:return 1;case Oc:return 4;case Go:case om:return 16;case Rc:return 536870912;default:return 16}default:return 16}}var En=null,qu=null,No=null;function Gc(){if(No)return No;var e,n=qu,t=n.length,r,o="value"in En?En.value:En.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return No=o.slice(e,1<r?1-r:void 0)}function To(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function ms(){return!1}function xe(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mo:ms,this.isPropagationStopped=ms,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),n}var Dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=xe(Dt),Fr=U({},Dt,{view:0,detail:0}),ym=xe(Fr),ul,al,rr,ai=U({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(ul=e.screenX-rr.screenX,al=e.screenY-rr.screenY):al=ul=0,rr=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:al}}),hs=xe(ai),vm=U({},ai,{dataTransfer:0}),wm=xe(vm),Sm=U({},Fr,{relatedTarget:0}),sl=xe(Sm),km=U({},Dt,{animationName:0,elapsedTime:0,pseudoElement:0}),xm=xe(km),Em=U({},Dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_m=xe(Em),Pm=U({},Dt,{data:0}),gs=xe(Pm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nm[e])?!!n[e]:!1}function Tu(){return Tm}var Om=U({},Fr,{key:function(e){if(e.key){var n=Cm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rm=xe(Om),zm=U({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=xe(zm),Lm=U({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Im=xe(Lm),Dm=U({},Dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=xe(Dm),Am=U({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jm=xe(Am),Fm=[9,13,27,32],Ou=tn&&"CompositionEvent"in window,mr=null;tn&&"documentMode"in document&&(mr=document.documentMode);var Gm=tn&&"TextEvent"in window&&!mr,Bc=tn&&(!Ou||mr&&8<mr&&11>=mr),vs=" ",ws=!1;function Uc(e,n){switch(e){case"keyup":return Fm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pt=!1;function Bm(e,n){switch(e){case"compositionend":return Vc(n);case"keypress":return n.which!==32?null:(ws=!0,vs);case"textInput":return e=n.data,e===vs&&ws?null:e;default:return null}}function Um(e,n){if(pt)return e==="compositionend"||!Ou&&Uc(e,n)?(e=Gc(),No=qu=En=null,pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bc&&n.locale!=="ko"?null:n.data;default:return null}}var Vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Vm[e.type]:n==="textarea"}function $c(e,n,t,r){kc(r),n=$o(n,"onChange"),0<n.length&&(t=new Nu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var hr=null,qr=null;function $m(e){nd(e,0)}function si(e){var n=ht(e);if(mc(n))return e}function Wm(e,n){if(e==="change")return n}var Wc=!1;tn&&(tn?(go="oninput"in document,go||(cl=document.createElement("div"),cl.setAttribute("oninput","return;"),go=typeof cl.oninput=="function"),ho=go):ho=!1,Wc=ho&&(!document.documentMode||9<document.documentMode));var ho,go,cl;function ks(){hr&&(hr.detachEvent("onpropertychange",Hc),qr=hr=null)}function Hc(e){if(e.propertyName==="value"&&si(qr)){var n=[];$c(n,qr,e,xu(e)),Pc($m,n)}}function Hm(e,n,t){e==="focusin"?(ks(),hr=n,qr=t,hr.attachEvent("onpropertychange",Hc)):e==="focusout"&&ks()}function Qm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(qr)}function Ym(e,n){if(e==="click")return si(n)}function Km(e,n){if(e==="input"||e==="change")return si(n)}function Xm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:Xm;function Nr(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!_l.call(n,o)||!Ge(e[o],n[o]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,n){var t=xs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xs(t)}}function Qc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yc(){for(var e=window,n=Ao();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ao(e.document)}return n}function Ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zm(e){var n=Yc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qc(t.ownerDocument.documentElement,t)){if(r!==null&&Ru(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Es(t,i);var l=Es(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jm=tn&&"documentMode"in document&&11>=document.documentMode,ft=null,Vl=null,gr=null,$l=!1;function _s(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$l||ft==null||ft!==Ao(r)||(r=ft,"selectionStart"in r&&Ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Nr(gr,r)||(gr=r,r=$o(Vl,"onSelect"),0<r.length&&(n=new Nu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ft)))}function yo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var mt={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},dl={},Kc={};tn&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function ci(e){if(dl[e])return dl[e];if(!mt[e])return e;var n=mt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Kc)return dl[e]=n[t];return e}var Xc=ci("animationend"),Zc=ci("animationiteration"),Jc=ci("animationstart"),bc=ci("transitionend"),ed=new Map,Ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){ed.set(e,n),nt(n,[e])}for(vo=0;vo<Ps.length;vo++)wo=Ps[vo],Cs=wo.toLowerCase(),qs=wo[0].toUpperCase()+wo.slice(1),Dn(Cs,"on"+qs);var wo,Cs,qs,vo;Dn(Xc,"onAnimationEnd");Dn(Zc,"onAnimationIteration");Dn(Jc,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(bc,"onTransitionEnd");Nt("onMouseEnter",["mouseout","mouseover"]);Nt("onMouseLeave",["mouseout","mouseover"]);Nt("onPointerEnter",["pointerout","pointerover"]);Nt("onPointerLeave",["pointerout","pointerover"]);nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Ns(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,bf(r,n,void 0,e),e.currentTarget=null}function nd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&o.isPropagationStopped())break e;Ns(o,u,c),i=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&o.isPropagationStopped())break e;Ns(o,u,c),i=a}}}if(Fo)throw e=Fl,Fo=!1,Fl=null,e}function M(e,n){var t=n[Kl];t===void 0&&(t=n[Kl]=new Set);var r=e+"__bubble";t.has(r)||(td(n,e,2,!1),t.add(r))}function pl(e,n,t){var r=0;n&&(r|=4),td(t,e,r,n)}var So="_reactListening"+Math.random().toString(36).slice(2);function Tr(e){if(!e[So]){e[So]=!0,sc.forEach(function(t){t!=="selectionchange"&&(bm.has(t)||pl(t,!1,e),pl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[So]||(n[So]=!0,pl("selectionchange",!1,n))}}function td(e,n,t,r){switch(Fc(n)){case 1:var o=hm;break;case 4:o=gm;break;default:o=Cu}t=o.bind(null,n,t,e),o=void 0,!jl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function fl(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;u!==null;){if(l=Wn(u),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}u=u.parentNode}}r=r.return}Pc(function(){var c=i,f=xu(t),h=[];e:{var m=ed.get(e);if(m!==void 0){var y=Nu,S=e;switch(e){case"keypress":if(To(t)===0)break e;case"keydown":case"keyup":y=Rm;break;case"focusin":S="focus",y=sl;break;case"focusout":S="blur",y=sl;break;case"beforeblur":case"afterblur":y=sl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Im;break;case Xc:case Zc:case Jc:y=xm;break;case bc:y=Mm;break;case"scroll":y=ym;break;case"wheel":y=jm;break;case"copy":case"cut":case"paste":y=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ys}var k=(n&4)!==0,N=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var s=c,p;s!==null;){p=s;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,d!==null&&(g=Er(s,d),g!=null&&k.push(Or(s,g,p)))),N)break;s=s.return}0<k.length&&(m=new y(m,S,null,t,f),h.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==Ml&&(S=t.relatedTarget||t.fromElement)&&(Wn(S)||S[rn]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=c,S=S?Wn(S):null,S!==null&&(N=tt(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(k=hs,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=ys,g="onPointerLeave",d="onPointerEnter",s="pointer"),N=y==null?m:ht(y),p=S==null?m:ht(S),m=new k(g,s+"leave",y,t,f),m.target=N,m.relatedTarget=p,g=null,Wn(f)===c&&(k=new k(d,s+"enter",S,t,f),k.target=p,k.relatedTarget=N,g=k),N=g,y&&S)n:{for(k=y,d=S,s=0,p=k;p;p=st(p))s++;for(p=0,g=d;g;g=st(g))p++;for(;0<s-p;)k=st(k),s--;for(;0<p-s;)d=st(d),p--;for(;s--;){if(k===d||d!==null&&k===d.alternate)break n;k=st(k),d=st(d)}k=null}else k=null;y!==null&&Ts(h,m,y,k,!1),S!==null&&N!==null&&Ts(h,N,S,k,!0)}}e:{if(m=c?ht(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var x=Wm;else if(Ss(m))if(Wc)x=Km;else{x=Qm;var E=Hm}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=Ym);if(x&&(x=x(e,c))){$c(h,x,t,f);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Rl(m,"number",m.value)}switch(E=c?ht(c):window,e){case"focusin":(Ss(E)||E.contentEditable==="true")&&(ft=E,Vl=c,gr=null);break;case"focusout":gr=Vl=ft=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,_s(h,t,f);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":_s(h,t,f)}var w;if(Ou)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pt?Uc(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Bc&&t.locale!=="ko"&&(pt||P!=="onCompositionStart"?P==="onCompositionEnd"&&pt&&(w=Gc()):(En=f,qu="value"in En?En.value:En.textContent,pt=!0)),E=$o(c,P),0<E.length&&(P=new gs(P,e,null,t,f),h.push({event:P,listeners:E}),w?P.data=w:(w=Vc(t),w!==null&&(P.data=w)))),(w=Gm?Bm(e,t):Um(e,t))&&(c=$o(c,"onBeforeInput"),0<c.length&&(f=new gs("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:c}),f.data=w))}nd(h,n)})}function Or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function $o(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Er(e,t),i!=null&&r.unshift(Or(e,i,o)),i=Er(e,n),i!=null&&r.push(Or(e,i,o))),e=e.return}return r}function st(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ts(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var u=t,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,o?(a=Er(t,i),a!=null&&l.unshift(Or(t,a,u))):o||(a=Er(t,i),a!=null&&l.push(Or(t,a,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var eh=/\r\n?/g,nh=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(eh,`
`).replace(nh,"")}function ko(e,n,t){if(n=Os(n),Os(e)!==n&&t)throw Error(v(425))}function Wo(){}var Wl=null,Hl=null;function Ql(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0,Rs=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Rs<"u"?function(e){return Rs.resolve(null).then(e).catch(oh)}:Yl;function oh(e){setTimeout(function(){throw e})}function ml(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Cr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Cr(n)}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function zs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),He="__reactFiber$"+Mt,Rr="__reactProps$"+Mt,rn="__reactContainer$"+Mt,Kl="__reactEvents$"+Mt,ih="__reactListeners$"+Mt,lh="__reactHandles$"+Mt;function Wn(e){var n=e[He];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[He]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=zs(e);e!==null;){if(t=e[He])return t;e=zs(e)}return n}e=t,t=e.parentNode}return null}function Gr(e){return e=e[He]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function di(e){return e[Rr]||null}var Xl=[],gt=-1;function Mn(e){return{current:e}}function A(e){0>gt||(e.current=Xl[gt],Xl[gt]=null,gt--)}function D(e,n){gt++,Xl[gt]=e.current,e.current=n}var In={},le=Mn(In),he=Mn(!1),Xn=In;function Tt(e,n){var t=e.type.contextTypes;if(!t)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function ge(e){return e=e.childContextTypes,e!=null}function Ho(){A(he),A(le)}function Ls(e,n,t){if(le.current!==In)throw Error(v(168));D(le,n),D(he,t)}function rd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(v(108,Hf(e)||"Unknown",o));return U({},t,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Xn=le.current,D(le,e),D(he,he.current),!0}function Is(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=rd(e,n,Xn),r.__reactInternalMemoizedMergedChildContext=e,A(he),A(le),D(le,e)):A(he),D(he,t)}var Je=null,pi=!1,hl=!1;function od(e){Je===null?Je=[e]:Je.push(e)}function uh(e){pi=!0,od(e)}function An(){if(!hl&&Je!==null){hl=!0;var e=0,n=z;try{var t=Je;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Je=null,pi=!1}catch(o){throw Je!==null&&(Je=Je.slice(e+1)),Tc(Eu,An),o}finally{z=n,hl=!1}}return null}var yt=[],vt=0,Yo=null,Ko=0,Pe=[],Ce=0,Zn=null,be=1,en="";function Vn(e,n){yt[vt++]=Ko,yt[vt++]=Yo,Yo=e,Ko=n}function id(e,n,t){Pe[Ce++]=be,Pe[Ce++]=en,Pe[Ce++]=Zn,Zn=e;var r=be;e=en;var o=32-je(r)-1;r&=~(1<<o),t+=1;var i=32-je(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,be=1<<32-je(n)+o|t<<o|r,en=i+e}else be=1<<i|t<<o|r,en=e}function zu(e){e.return!==null&&(Vn(e,1),id(e,1,0))}function Lu(e){for(;e===Yo;)Yo=yt[--vt],yt[vt]=null,Ko=yt[--vt],yt[vt]=null;for(;e===Zn;)Zn=Pe[--Ce],Pe[Ce]=null,en=Pe[--Ce],Pe[Ce]=null,be=Pe[--Ce],Pe[Ce]=null}var Se=null,we=null,F=!1,Ae=null;function ld(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ds(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,we=Nn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Zn!==null?{id:be,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,we=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(F){var n=we;if(n){var t=n;if(!Ds(e,n)){if(Zl(e))throw Error(v(418));n=Nn(t.nextSibling);var r=Se;n&&Ds(e,n)?ld(r,t):(e.flags=e.flags&-4097|2,F=!1,Se=e)}}else{if(Zl(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,Se=e}}}function Ms(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function xo(e){if(e!==Se)return!1;if(!F)return Ms(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ql(e.type,e.memoizedProps)),n&&(n=we)){if(Zl(e))throw ud(),Error(v(418));for(;n;)ld(e,n),n=Nn(n.nextSibling)}if(Ms(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=Nn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Se?Nn(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=we;e;)e=Nn(e.nextSibling)}function Ot(){we=Se=null,F=!1}function Iu(e){Ae===null?Ae=[e]:Ae.push(e)}var ah=un.ReactCurrentBatchConfig;function De(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Xo=Mn(null),Zo=null,wt=null,Du=null;function Mu(){Du=wt=Zo=null}function Au(e){var n=Xo.current;A(Xo),e._currentValue=n}function bl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ct(e,n){Zo=e,Du=wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(Du!==e)if(e={context:e,memoizedValue:n,next:null},wt===null){if(Zo===null)throw Error(v(308));wt=e,Zo.dependencies={lanes:0,firstContext:e}}else wt=wt.next=e;return n}var Hn=null;function ju(e){Hn===null?Hn=[e]:Hn.push(e)}function ad(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ju(n)):(t.next=o.next,o.next=t),n.interleaved=t,on(e,r)}function on(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Sn=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Tn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,on(e,t)}return o=r.interleaved,o===null?(n.next=n,ju(r)):(n.next=o.next,o.next=n),r.interleaved=n,on(e,t)}function Oo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_u(e,t)}}function As(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Jo(e,n,t,r){var o=e.updateQueue;Sn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==l&&(u===null?f.firstBaseUpdate=c:u.next=c,f.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,f=c=a=null,u=i;do{var m=u.lane,y=u.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,k=u;switch(m=n,y=t,k.tag){case 1:if(S=k.payload,typeof S=="function"){h=S.call(y,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(y,h,m):S,m==null)break e;h=U({},h,m);break e;case 2:Sn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[u]:m.push(u))}else y={eventTime:y,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(c=f=y,a=h):f=f.next=y,l|=m;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;m=u,u=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(a=h),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);bn|=l,e.lanes=l,e.memoizedState=h}}function js(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(v(191,o));o.call(r)}}}var cd=new ac.Component().refs;function eu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var fi={isMounted:function(e){return(e=e._reactInternals)?tt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),o=Rn(e),i=nn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Tn(e,i,o),n!==null&&(Fe(n,e,o,r),Oo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),o=Rn(e),i=nn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Tn(e,i,o),n!==null&&(Fe(n,e,o,r),Oo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=Rn(e),o=nn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Tn(e,o,r),n!==null&&(Fe(n,e,r,t),Oo(n,e,r))}};function Fs(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Nr(t,r)||!Nr(o,i):!0}function dd(e,n,t){var r=!1,o=In,i=n.contextType;return typeof i=="object"&&i!==null?i=Te(i):(o=ge(n)?Xn:le.current,r=n.contextTypes,i=(r=r!=null)?Tt(e,o):In),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Gs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&fi.enqueueReplaceState(n,n.state,null)}function nu(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=cd,Fu(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Te(i):(i=ge(n)?Xn:le.current,o.context=Tt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(eu(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&fi.enqueueReplaceState(o,o.state,null),Jo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var u=o.refs;u===cd&&(u=o.refs={}),l===null?delete u[i]:u[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function Eo(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bs(e){var n=e._init;return n(e._payload)}function pd(e){function n(d,s){if(e){var p=d.deletions;p===null?(d.deletions=[s],d.flags|=16):p.push(s)}}function t(d,s){if(!e)return null;for(;s!==null;)n(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function o(d,s){return d=zn(d,s),d.index=0,d.sibling=null,d}function i(d,s,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<s?(d.flags|=2,s):p):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,s,p,g){return s===null||s.tag!==6?(s=xl(p,d.mode,g),s.return=d,s):(s=o(s,p),s.return=d,s)}function a(d,s,p,g){var x=p.type;return x===dt?f(d,s,p.props.children,g,p.key):s!==null&&(s.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===wn&&Bs(x)===s.type)?(g=o(s,p.props),g.ref=or(d,s,p),g.return=d,g):(g=Mo(p.type,p.key,p.props,null,d.mode,g),g.ref=or(d,s,p),g.return=d,g)}function c(d,s,p,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=El(p,d.mode,g),s.return=d,s):(s=o(s,p.children||[]),s.return=d,s)}function f(d,s,p,g,x){return s===null||s.tag!==7?(s=Kn(p,d.mode,g,x),s.return=d,s):(s=o(s,p),s.return=d,s)}function h(d,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=xl(""+s,d.mode,p),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case uo:return p=Mo(s.type,s.key,s.props,null,d.mode,p),p.ref=or(d,null,s),p.return=d,p;case ct:return s=El(s,d.mode,p),s.return=d,s;case wn:var g=s._init;return h(d,g(s._payload),p)}if(sr(s)||er(s))return s=Kn(s,d.mode,p,null),s.return=d,s;Eo(d,s)}return null}function m(d,s,p,g){var x=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:u(d,s,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case uo:return p.key===x?a(d,s,p,g):null;case ct:return p.key===x?c(d,s,p,g):null;case wn:return x=p._init,m(d,s,x(p._payload),g)}if(sr(p)||er(p))return x!==null?null:f(d,s,p,g,null);Eo(d,p)}return null}function y(d,s,p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(p)||null,u(s,d,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uo:return d=d.get(g.key===null?p:g.key)||null,a(s,d,g,x);case ct:return d=d.get(g.key===null?p:g.key)||null,c(s,d,g,x);case wn:var E=g._init;return y(d,s,p,E(g._payload),x)}if(sr(g)||er(g))return d=d.get(p)||null,f(s,d,g,x,null);Eo(s,g)}return null}function S(d,s,p,g){for(var x=null,E=null,w=s,P=s=0,j=null;w!==null&&P<p.length;P++){w.index>P?(j=w,w=null):j=w.sibling;var T=m(d,w,p[P],g);if(T===null){w===null&&(w=j);break}e&&w&&T.alternate===null&&n(d,w),s=i(T,s,P),E===null?x=T:E.sibling=T,E=T,w=j}if(P===p.length)return t(d,w),F&&Vn(d,P),x;if(w===null){for(;P<p.length;P++)w=h(d,p[P],g),w!==null&&(s=i(w,s,P),E===null?x=w:E.sibling=w,E=w);return F&&Vn(d,P),x}for(w=r(d,w);P<p.length;P++)j=y(w,d,P,p[P],g),j!==null&&(e&&j.alternate!==null&&w.delete(j.key===null?P:j.key),s=i(j,s,P),E===null?x=j:E.sibling=j,E=j);return e&&w.forEach(function(Ue){return n(d,Ue)}),F&&Vn(d,P),x}function k(d,s,p,g){var x=er(p);if(typeof x!="function")throw Error(v(150));if(p=x.call(p),p==null)throw Error(v(151));for(var E=x=null,w=s,P=s=0,j=null,T=p.next();w!==null&&!T.done;P++,T=p.next()){w.index>P?(j=w,w=null):j=w.sibling;var Ue=m(d,w,T.value,g);if(Ue===null){w===null&&(w=j);break}e&&w&&Ue.alternate===null&&n(d,w),s=i(Ue,s,P),E===null?x=Ue:E.sibling=Ue,E=Ue,w=j}if(T.done)return t(d,w),F&&Vn(d,P),x;if(w===null){for(;!T.done;P++,T=p.next())T=h(d,T.value,g),T!==null&&(s=i(T,s,P),E===null?x=T:E.sibling=T,E=T);return F&&Vn(d,P),x}for(w=r(d,w);!T.done;P++,T=p.next())T=y(w,d,P,T.value,g),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?P:T.key),s=i(T,s,P),E===null?x=T:E.sibling=T,E=T);return e&&w.forEach(function(ji){return n(d,ji)}),F&&Vn(d,P),x}function N(d,s,p,g){if(typeof p=="object"&&p!==null&&p.type===dt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case uo:e:{for(var x=p.key,E=s;E!==null;){if(E.key===x){if(x=p.type,x===dt){if(E.tag===7){t(d,E.sibling),s=o(E,p.props.children),s.return=d,d=s;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===wn&&Bs(x)===E.type){t(d,E.sibling),s=o(E,p.props),s.ref=or(d,E,p),s.return=d,d=s;break e}t(d,E);break}else n(d,E);E=E.sibling}p.type===dt?(s=Kn(p.props.children,d.mode,g,p.key),s.return=d,d=s):(g=Mo(p.type,p.key,p.props,null,d.mode,g),g.ref=or(d,s,p),g.return=d,d=g)}return l(d);case ct:e:{for(E=p.key;s!==null;){if(s.key===E)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){t(d,s.sibling),s=o(s,p.children||[]),s.return=d,d=s;break e}else{t(d,s);break}else n(d,s);s=s.sibling}s=El(p,d.mode,g),s.return=d,d=s}return l(d);case wn:return E=p._init,N(d,s,E(p._payload),g)}if(sr(p))return S(d,s,p,g);if(er(p))return k(d,s,p,g);Eo(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(t(d,s.sibling),s=o(s,p),s.return=d,d=s):(t(d,s),s=xl(p,d.mode,g),s.return=d,d=s),l(d)):t(d,s)}return N}var Rt=pd(!0),fd=pd(!1),Br={},Ye=Mn(Br),zr=Mn(Br),Lr=Mn(Br);function Qn(e){if(e===Br)throw Error(v(174));return e}function Gu(e,n){switch(D(Lr,n),D(zr,e),D(Ye,Br),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ll(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ll(n,e)}A(Ye),D(Ye,n)}function zt(){A(Ye),A(zr),A(Lr)}function md(e){Qn(Lr.current);var n=Qn(Ye.current),t=Ll(n,e.type);n!==t&&(D(zr,e),D(Ye,t))}function Bu(e){zr.current===e&&(A(Ye),A(zr))}var G=Mn(0);function bo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gl=[];function Uu(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Ro=un.ReactCurrentDispatcher,yl=un.ReactCurrentBatchConfig,Jn=0,B=null,K=null,Z=null,ei=!1,yr=!1,Ir=0,sh=0;function re(){throw Error(v(321))}function Vu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function $u(e,n,t,r,o,i){if(Jn=i,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ro.current=e===null||e.memoizedState===null?fh:mh,e=t(r,o),yr){i=0;do{if(yr=!1,Ir=0,25<=i)throw Error(v(301));i+=1,Z=K=null,n.updateQueue=null,Ro.current=hh,e=t(r,o)}while(yr)}if(Ro.current=ni,n=K!==null&&K.next!==null,Jn=0,Z=K=B=null,ei=!1,n)throw Error(v(300));return e}function Wu(){var e=Ir!==0;return Ir=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Oe(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Z===null?B.memoizedState:Z.next;if(n!==null)Z=n,K=e;else{if(e===null)throw Error(v(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function Dr(e,n){return typeof n=="function"?n(e):n}function vl(e){var n=Oe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=K,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,a=null,c=i;do{var f=c.lane;if((Jn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=h,l=r):a=a.next=h,B.lanes|=f,bn|=f}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=u,Ge(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,B.lanes|=i,bn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function wl(e){var n=Oe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ge(i,n.memoizedState)||(me=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function hd(){}function gd(e,n){var t=B,r=Oe(),o=n(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,me=!0),r=r.queue,Hu(wd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,Mr(9,vd.bind(null,t,r,o,n),void 0,null),J===null)throw Error(v(349));Jn&30||yd(t,n,o)}return o}function yd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vd(e,n,t,r){n.value=t,n.getSnapshot=r,Sd(n)&&kd(e)}function wd(e,n,t){return t(function(){Sd(n)&&kd(e)})}function Sd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function kd(e){var n=on(e,1);n!==null&&Fe(n,e,1,-1)}function Us(e){var n=We();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},n.queue=e,e=e.dispatch=ph.bind(null,B,e),[n.memoizedState,e]}function Mr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function xd(){return Oe().memoizedState}function zo(e,n,t,r){var o=We();B.flags|=e,o.memoizedState=Mr(1|n,t,void 0,r===void 0?null:r)}function mi(e,n,t,r){var o=Oe();r=r===void 0?null:r;var i=void 0;if(K!==null){var l=K.memoizedState;if(i=l.destroy,r!==null&&Vu(r,l.deps)){o.memoizedState=Mr(n,t,i,r);return}}B.flags|=e,o.memoizedState=Mr(1|n,t,i,r)}function Vs(e,n){return zo(8390656,8,e,n)}function Hu(e,n){return mi(2048,8,e,n)}function Ed(e,n){return mi(4,2,e,n)}function _d(e,n){return mi(4,4,e,n)}function Pd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cd(e,n,t){return t=t!=null?t.concat([e]):null,mi(4,4,Pd.bind(null,n,e),t)}function Qu(){}function qd(e,n){var t=Oe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Nd(e,n){var t=Oe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Td(e,n,t){return Jn&21?(Ge(t,n)||(t=zc(),B.lanes|=t,bn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function ch(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),n()}finally{z=t,yl.transition=r}}function Od(){return Oe().memoizedState}function dh(e,n,t){var r=Rn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Rd(e))zd(n,t);else if(t=ad(e,n,t,r),t!==null){var o=ce();Fe(t,e,r,o),Ld(t,n,r)}}function ph(e,n,t){var r=Rn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))zd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,u=i(l,t);if(o.hasEagerState=!0,o.eagerState=u,Ge(u,l)){var a=n.interleaved;a===null?(o.next=o,ju(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=ad(e,n,o,r),t!==null&&(o=ce(),Fe(t,e,r,o),Ld(t,n,r))}}function Rd(e){var n=e.alternate;return e===B||n!==null&&n===B}function zd(e,n){yr=ei=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ld(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_u(e,t)}}var ni={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},fh={readContext:Te,useCallback:function(e,n){return We().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:Vs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,zo(4194308,4,Pd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return zo(4194308,4,e,n)},useInsertionEffect:function(e,n){return zo(4,2,e,n)},useMemo:function(e,n){var t=We();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=We();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=dh.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=We();return e={current:e},n.memoizedState=e},useState:Us,useDebugValue:Qu,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Us(!1),n=e[0];return e=ch.bind(null,e[1]),We().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,o=We();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),J===null)throw Error(v(349));Jn&30||yd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Vs(wd.bind(null,r,i,e),[e]),r.flags|=2048,Mr(9,vd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=We(),n=J.identifierPrefix;if(F){var t=en,r=be;t=(r&~(1<<32-je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ir++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=sh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},mh={readContext:Te,useCallback:qd,useContext:Te,useEffect:Hu,useImperativeHandle:Cd,useInsertionEffect:Ed,useLayoutEffect:_d,useMemo:Nd,useReducer:vl,useRef:xd,useState:function(){return vl(Dr)},useDebugValue:Qu,useDeferredValue:function(e){var n=Oe();return Td(n,K.memoizedState,e)},useTransition:function(){var e=vl(Dr)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:gd,useId:Od,unstable_isNewReconciler:!1},hh={readContext:Te,useCallback:qd,useContext:Te,useEffect:Hu,useImperativeHandle:Cd,useInsertionEffect:Ed,useLayoutEffect:_d,useMemo:Nd,useReducer:wl,useRef:xd,useState:function(){return wl(Dr)},useDebugValue:Qu,useDeferredValue:function(e){var n=Oe();return K===null?n.memoizedState=e:Td(n,K.memoizedState,e)},useTransition:function(){var e=wl(Dr)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:gd,useId:Od,unstable_isNewReconciler:!1};function Lt(e,n){try{var t="",r=n;do t+=Wf(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Sl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function tu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var gh=typeof WeakMap=="function"?WeakMap:Map;function Id(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ri||(ri=!0,pu=r),tu(e,n)},t}function Dd(e,n,t){t=nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){tu(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){tu(e,n),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function $s(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new gh;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Oh.bind(null,e,n,t),n.then(e,e))}function Ws(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Hs(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,Tn(t,n,1))),t.lanes|=1),e)}var yh=un.ReactCurrentOwner,me=!1;function se(e,n,t,r){n.child=e===null?fd(n,null,t,r):Rt(n,e.child,t,r)}function Qs(e,n,t,r,o){t=t.render;var i=n.ref;return Ct(n,o),r=$u(e,n,t,r,i,o),t=Wu(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,ln(e,n,o)):(F&&t&&zu(n),n.flags|=1,se(e,n,r,o),n.child)}function Ys(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!na(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Md(e,n,i,r,o)):(e=Mo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Nr,t(l,r)&&e.ref===n.ref)return ln(e,n,o)}return n.flags|=1,e=zn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Md(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Nr(i,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,ln(e,n,o)}return ru(e,n,t,r,o)}function Ad(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(kt,ve),ve|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(kt,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,D(kt,ve),ve|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,D(kt,ve),ve|=r;return se(e,n,o,t),n.child}function jd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ru(e,n,t,r,o){var i=ge(t)?Xn:le.current;return i=Tt(n,i),Ct(n,o),t=$u(e,n,t,r,i,o),r=Wu(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,ln(e,n,o)):(F&&r&&zu(n),n.flags|=1,se(e,n,t,o),n.child)}function Ks(e,n,t,r,o){if(ge(t)){var i=!0;Qo(n)}else i=!1;if(Ct(n,o),n.stateNode===null)Lo(e,n),dd(n,t,r),nu(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var a=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ge(t)?Xn:le.current,c=Tt(n,c));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Gs(n,l,r,c),Sn=!1;var m=n.memoizedState;l.state=m,Jo(n,r,l,o),a=n.memoizedState,u!==r||m!==a||he.current||Sn?(typeof f=="function"&&(eu(n,t,f,r),a=n.memoizedState),(u=Sn||Fs(n,t,u,r,m,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=c,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,sd(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:De(n.type,u),l.props=c,h=n.pendingProps,m=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Te(a):(a=ge(t)?Xn:le.current,a=Tt(n,a));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==h||m!==a)&&Gs(n,l,r,a),Sn=!1,m=n.memoizedState,l.state=m,Jo(n,r,l,o);var S=n.memoizedState;u!==h||m!==S||he.current||Sn?(typeof y=="function"&&(eu(n,t,y,r),S=n.memoizedState),(c=Sn||Fs(n,t,c,r,m,S,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),l.props=r,l.state=S,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ou(e,n,t,r,i,o)}function ou(e,n,t,r,o,i){jd(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Is(n,t,!1),ln(e,n,i);r=n.stateNode,yh.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Rt(n,e.child,null,i),n.child=Rt(n,null,u,i)):se(e,n,u,i),n.memoizedState=r.state,o&&Is(n,t,!0),n.child}function Fd(e){var n=e.stateNode;n.pendingContext?Ls(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ls(e,n.context,!1),Gu(e,n.containerInfo)}function Xs(e,n,t,r,o){return Ot(),Iu(o),n.flags|=256,se(e,n,t,r),n.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,n,t){var r=n.pendingProps,o=G.current,i=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(G,o&1),e===null)return Jl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=yi(l,r,0,null),e=Kn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=lu(t),n.memoizedState=iu,e):Yu(n,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return vh(e,n,l,r,u,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=zn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=zn(u,i):(i=Kn(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?lu(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=iu,r}return i=e.child,e=i.sibling,r=zn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Yu(e,n){return n=yi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _o(e,n,t,r){return r!==null&&Iu(r),Rt(n,e.child,null,t),e=Yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vh(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Sl(Error(v(422))),_o(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=yi({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Rt(n,e.child,null,l),n.child.memoizedState=lu(l),n.memoizedState=iu,i);if(!(n.mode&1))return _o(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(v(419)),r=Sl(i,r,void 0),_o(e,n,l,r)}if(u=(l&e.childLanes)!==0,me||u){if(r=J,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,on(e,o),Fe(r,e,o,-1))}return ea(),r=Sl(Error(v(421))),_o(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Rh.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,we=Nn(o.nextSibling),Se=n,F=!0,Ae=null,e!==null&&(Pe[Ce++]=be,Pe[Ce++]=en,Pe[Ce++]=Zn,be=e.id,en=e.overflow,Zn=n),n=Yu(n,r.children),n.flags|=4096,n)}function Zs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),bl(e.return,n,t)}function kl(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Bd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(se(e,n,r.children,t),r=G.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,t,n);else if(e.tag===19)Zs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(G,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&bo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),kl(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&bo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}kl(n,!0,t,null,i);break;case"together":kl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Lo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),bn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function wh(e,n,t){switch(n.tag){case 3:Fd(n),Ot();break;case 5:md(n);break;case 1:ge(n.type)&&Qo(n);break;case 4:Gu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;D(Xo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D(G,G.current&1),n.flags|=128,null):t&n.child.childLanes?Gd(e,n,t):(D(G,G.current&1),e=ln(e,n,t),e!==null?e.sibling:null);D(G,G.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Bd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(G,G.current),r)break;return null;case 22:case 23:return n.lanes=0,Ad(e,n,t)}return ln(e,n,t)}var Ud,uu,Vd,$d;Ud=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};uu=function(){};Vd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Qn(Ye.current);var i=null;switch(t){case"input":o=Tl(e,o),r=Tl(e,r),i=[];break;case"select":o=U({},o,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":o=zl(e,o),r=zl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wo)}Il(t,r);var l;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(kr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=o?.[c],r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(kr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&M("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};$d=function(e,n,t,r){t!==r&&(n.flags|=4)};function ir(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Sh(e,n,t){var r=n.pendingProps;switch(Lu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ge(n.type)&&Ho(),oe(n),null;case 3:return r=n.stateNode,zt(),A(he),A(le),Uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(hu(Ae),Ae=null))),uu(e,n),oe(n),null;case 5:Bu(n);var o=Qn(Lr.current);if(t=n.type,e!==null&&n.stateNode!=null)Vd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return oe(n),null}if(e=Qn(Ye.current),xo(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[He]=n,r[Rr]=i,e=(n.mode&1)!==0,t){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(o=0;o<dr.length;o++)M(dr[o],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":is(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":us(r,i),M("invalid",r)}Il(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&ko(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&ko(r.textContent,u,e),o=["children",""+u]):kr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&M("scroll",r)}switch(t){case"input":ao(r),ls(r,i,!0);break;case"textarea":ao(r),as(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[He]=n,e[Rr]=r,Ud(e,n,!1,!1),n.stateNode=e;e:{switch(l=Dl(t,r),t){case"dialog":M("cancel",e),M("close",e),o=r;break;case"iframe":case"object":case"embed":M("load",e),o=r;break;case"video":case"audio":for(o=0;o<dr.length;o++)M(dr[o],e);o=r;break;case"source":M("error",e),o=r;break;case"img":case"image":case"link":M("error",e),M("load",e),o=r;break;case"details":M("toggle",e),o=r;break;case"input":is(e,r),o=Tl(e,r),M("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=U({},r,{value:void 0}),M("invalid",e);break;case"textarea":us(e,r),o=zl(e,r),M("invalid",e);break;default:o=r}Il(t,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?Sc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vc(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(kr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&M("scroll",e):a!=null&&vu(e,i,a,l))}switch(t){case"input":ao(e),ls(e,r,!1);break;case"textarea":ao(e),as(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ln(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xt(e,!!r.multiple,i,!1):r.defaultValue!=null&&xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)$d(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Qn(Lr.current),Qn(Ye.current),xo(n)){if(r=n.stateNode,t=n.memoizedProps,r[He]=n,(i=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:ko(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[He]=n,n.stateNode=r}return oe(n),null;case 13:if(A(G),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&we!==null&&n.mode&1&&!(n.flags&128))ud(),Ot(),n.flags|=98560,i=!1;else if(i=xo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[He]=n}else Ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),i=!1}else Ae!==null&&(hu(Ae),Ae=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||G.current&1?X===0&&(X=3):ea())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return zt(),uu(e,n),e===null&&Tr(n.stateNode.containerInfo),oe(n),null;case 10:return Au(n.type._context),oe(n),null;case 17:return ge(n.type)&&Ho(),oe(n),null;case 19:if(A(G),i=n.memoizedState,i===null)return oe(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)ir(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=bo(e),l!==null){for(n.flags|=128,ir(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D(G,G.current&1|2),n.child}e=e.sibling}i.tail!==null&&H()>It&&(n.flags|=128,r=!0,ir(i,!1),n.lanes=4194304)}else{if(!r)if(e=bo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!F)return oe(n),null}else 2*H()-i.renderingStartTime>It&&t!==1073741824&&(n.flags|=128,r=!0,ir(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=H(),n.sibling=null,t=G.current,D(G,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return bu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function kh(e,n){switch(Lu(n),n.tag){case 1:return ge(n.type)&&Ho(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),A(he),A(le),Uu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Bu(n),null;case 13:if(A(G),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A(G),null;case 4:return zt(),null;case 10:return Au(n.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var Po=!1,ie=!1,xh=typeof WeakSet=="function"?WeakSet:Set,_=null;function St(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function au(e,n,t){try{t()}catch(r){V(e,n,r)}}var Js=!1;function Eh(e,n){if(Wl=Uo,e=Yc(),Ru(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,u=-1,a=-1,c=0,f=0,h=e,m=null;n:for(;;){for(var y;h!==t||o!==0&&h.nodeType!==3||(u=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break n;if(m===t&&++c===o&&(u=l),m===i&&++f===r&&(a=l),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hl={focusedElem:e,selectionRange:t},Uo=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,N=S.memoizedState,d=n.stateNode,s=d.getSnapshotBeforeUpdate(n.elementType===n.type?k:De(n.type,k),N);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){V(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return S=Js,Js=!1,S}function vr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&au(n,t,i)}o=o.next}while(o!==r)}}function hi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function su(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wd(e){var n=e.alternate;n!==null&&(e.alternate=null,Wd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[Rr],delete n[Kl],delete n[ih],delete n[lh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Wo));else if(r!==4&&(e=e.child,e!==null))for(cu(e,n,t),e=e.sibling;e!==null;)cu(e,n,t),e=e.sibling}function du(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(du(e,n,t),e=e.sibling;e!==null;)du(e,n,t),e=e.sibling}var b=null,Me=!1;function vn(e,n,t){for(t=t.child;t!==null;)Qd(e,n,t),t=t.sibling}function Qd(e,n,t){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(ui,t)}catch{}switch(t.tag){case 5:ie||St(t,n);case 6:var r=b,o=Me;b=null,vn(e,n,t),b=r,Me=o,b!==null&&(Me?(e=b,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):b.removeChild(t.stateNode));break;case 18:b!==null&&(Me?(e=b,t=t.stateNode,e.nodeType===8?ml(e.parentNode,t):e.nodeType===1&&ml(e,t),Cr(e)):ml(b,t.stateNode));break;case 4:r=b,o=Me,b=t.stateNode.containerInfo,Me=!0,vn(e,n,t),b=r,Me=o;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&au(t,n,l),o=o.next}while(o!==r)}vn(e,n,t);break;case 1:if(!ie&&(St(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){V(t,n,u)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,vn(e,n,t),ie=r):vn(e,n,t);break;default:vn(e,n,t)}}function ec(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new xh),n.forEach(function(r){var o=zh.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ie(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:b=u.stateNode,Me=!1;break e;case 3:b=u.stateNode.containerInfo,Me=!0;break e;case 4:b=u.stateNode.containerInfo,Me=!0;break e}u=u.return}if(b===null)throw Error(v(160));Qd(i,l,o),b=null,Me=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){V(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Yd(n,e),n=n.sibling}function Yd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),$e(e),r&4){try{vr(3,e,e.return),hi(3,e)}catch(k){V(e,e.return,k)}try{vr(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Ie(n,e),$e(e),r&512&&t!==null&&St(t,t.return);break;case 5:if(Ie(n,e),$e(e),r&512&&t!==null&&St(t,t.return),e.flags&32){var o=e.stateNode;try{xr(o,"")}catch(k){V(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&hc(o,i),Dl(u,l);var c=Dl(u,i);for(l=0;l<a.length;l+=2){var f=a[l],h=a[l+1];f==="style"?Sc(o,h):f==="dangerouslySetInnerHTML"?vc(o,h):f==="children"?xr(o,h):vu(o,f,h,c)}switch(u){case"input":Ol(o,i);break;case"textarea":gc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?xt(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?xt(o,!!i.multiple,i.defaultValue,!0):xt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Rr]=i}catch(k){V(e,e.return,k)}}break;case 6:if(Ie(n,e),$e(e),r&4){if(e.stateNode===null)throw Error(v(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(Ie(n,e),$e(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Ie(n,e),$e(e);break;case 13:Ie(n,e),$e(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zu=H())),r&4&&ec(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(c=ie)||f,Ie(n,e),ie=c):Ie(n,e),$e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(h=_=f;_!==null;){switch(m=_,y=m.child,m.tag){case 0:case 11:case 14:case 15:vr(4,m,m.return);break;case 1:St(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(k){V(r,t,k)}}break;case 5:St(m,m.return);break;case 22:if(m.memoizedState!==null){tc(h);continue}}y!==null?(y.return=m,_=y):tc(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=wc("display",l))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ie(n,e),$e(e),r&4&&ec(e);break;case 21:break;default:Ie(n,e),$e(e)}}function $e(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hd(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xr(o,""),r.flags&=-33);var i=bs(e);du(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=bs(e);cu(e,u,l);break;default:throw Error(v(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _h(e,n,t){_=e,Kd(e,n,t)}function Kd(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Po;if(!l){var u=o.alternate,a=u!==null&&u.memoizedState!==null||ie;u=Po;var c=ie;if(Po=l,(ie=a)&&!c)for(_=o;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?rc(o):a!==null?(a.return=l,_=a):rc(o);for(;i!==null;)_=i,Kd(i,n,t),i=i.sibling;_=o,Po=u,ie=c}nc(e,n,t)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):nc(e,n,t)}}function nc(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||hi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&js(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}js(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Cr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ie||n.flags&512&&su(n)}catch(m){V(n,n.return,m)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function tc(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function rc(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{hi(4,n)}catch(a){V(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){V(n,o,a)}}var i=n.return;try{su(n)}catch(a){V(n,i,a)}break;case 5:var l=n.return;try{su(n)}catch(a){V(n,l,a)}}}catch(a){V(n,n.return,a)}if(n===e){_=null;break}var u=n.sibling;if(u!==null){u.return=n.return,_=u;break}_=n.return}}var Ph=Math.ceil,ti=un.ReactCurrentDispatcher,Ku=un.ReactCurrentOwner,Ne=un.ReactCurrentBatchConfig,O=0,J=null,Q=null,ee=0,ve=0,kt=Mn(0),X=0,Ar=null,bn=0,gi=0,Xu=0,wr=null,fe=null,Zu=0,It=1/0,Ze=null,ri=!1,pu=null,On=null,Co=!1,_n=null,oi=0,Sr=0,fu=null,Io=-1,Do=0;function ce(){return O&6?H():Io!==-1?Io:Io=H()}function Rn(e){return e.mode&1?O&2&&ee!==0?ee&-ee:ah.transition!==null?(Do===0&&(Do=zc()),Do):(e=z,e!==0||(e=window.event,e=e===void 0?16:Fc(e.type)),e):1}function Fe(e,n,t,r){if(50<Sr)throw Sr=0,fu=null,Error(v(185));jr(e,t,r),(!(O&2)||e!==J)&&(e===J&&(!(O&2)&&(gi|=t),X===4&&xn(e,ee)),ye(e,r),t===1&&O===0&&!(n.mode&1)&&(It=H()+500,pi&&An()))}function ye(e,n){var t=e.callbackNode;cm(e,n);var r=Bo(e,e===J?ee:0);if(r===0)t!==null&&ds(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ds(t),n===1)e.tag===0?uh(oc.bind(null,e)):od(oc.bind(null,e)),rh(function(){!(O&6)&&An()}),t=null;else{switch(Lc(r)){case 1:t=Eu;break;case 4:t=Oc;break;case 16:t=Go;break;case 536870912:t=Rc;break;default:t=Go}t=rp(t,Xd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Xd(e,n){if(Io=-1,Do=0,O&6)throw Error(v(327));var t=e.callbackNode;if(qt()&&e.callbackNode!==t)return null;var r=Bo(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ii(e,r);else{n=r;var o=O;O|=2;var i=Jd();(J!==e||ee!==n)&&(Ze=null,It=H()+500,Yn(e,n));do try{Nh();break}catch(u){Zd(e,u)}while(!0);Mu(),ti.current=i,O=o,Q!==null?n=0:(J=null,ee=0,n=X)}if(n!==0){if(n===2&&(o=Gl(e),o!==0&&(r=o,n=mu(e,o))),n===1)throw t=Ar,Yn(e,0),xn(e,r),ye(e,H()),t;if(n===6)xn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ch(o)&&(n=ii(e,r),n===2&&(i=Gl(e),i!==0&&(r=i,n=mu(e,i))),n===1))throw t=Ar,Yn(e,0),xn(e,r),ye(e,H()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:$n(e,fe,Ze);break;case 3:if(xn(e,r),(r&130023424)===r&&(n=Zu+500-H(),10<n)){if(Bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Yl($n.bind(null,e,fe,Ze),n);break}$n(e,fe,Ze);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-je(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ph(r/1960))-r,10<r){e.timeoutHandle=Yl($n.bind(null,e,fe,Ze),r);break}$n(e,fe,Ze);break;case 5:$n(e,fe,Ze);break;default:throw Error(v(329))}}}return ye(e,H()),e.callbackNode===t?Xd.bind(null,e):null}function mu(e,n){var t=wr;return e.current.memoizedState.isDehydrated&&(Yn(e,n).flags|=256),e=ii(e,n),e!==2&&(n=fe,fe=t,n!==null&&hu(n)),e}function hu(e){fe===null?fe=e:fe.push.apply(fe,e)}function Ch(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xn(e,n){for(n&=~Xu,n&=~gi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-je(n),r=1<<t;e[t]=-1,n&=~r}}function oc(e){if(O&6)throw Error(v(327));qt();var n=Bo(e,0);if(!(n&1))return ye(e,H()),null;var t=ii(e,n);if(e.tag!==0&&t===2){var r=Gl(e);r!==0&&(n=r,t=mu(e,r))}if(t===1)throw t=Ar,Yn(e,0),xn(e,n),ye(e,H()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,$n(e,fe,Ze),ye(e,H()),null}function Ju(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(It=H()+500,pi&&An())}}function et(e){_n!==null&&_n.tag===0&&!(O&6)&&qt();var n=O;O|=1;var t=Ne.transition,r=z;try{if(Ne.transition=null,z=1,e)return e()}finally{z=r,Ne.transition=t,O=n,!(O&6)&&An()}}function bu(){ve=kt.current,A(kt)}function Yn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,th(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:zt(),A(he),A(le),Uu();break;case 5:Bu(r);break;case 4:zt();break;case 13:A(G);break;case 19:A(G);break;case 10:Au(r.type._context);break;case 22:case 23:bu()}t=t.return}if(J=e,Q=e=zn(e.current,null),ee=ve=n,X=0,Ar=null,Xu=gi=bn=0,fe=wr=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}Hn=null}return e}function Zd(e,n){do{var t=Q;try{if(Mu(),Ro.current=ni,ei){for(var r=B.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ei=!1}if(Jn=0,Z=K=B=null,yr=!1,Ir=0,Ku.current=null,t===null||t.return===null){X=1,Ar=n,Q=null;break}e:{var i=e,l=t.return,u=t,a=n;if(n=ee,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=u,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Ws(l);if(y!==null){y.flags&=-257,Hs(y,l,u,i,n),y.mode&1&&$s(i,c,n),n=y,a=c;var S=n.updateQueue;if(S===null){var k=new Set;k.add(a),n.updateQueue=k}else S.add(a);break e}else{if(!(n&1)){$s(i,c,n),ea();break e}a=Error(v(426))}}else if(F&&u.mode&1){var N=Ws(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Hs(N,l,u,i,n),Iu(Lt(a,u));break e}}i=a=Lt(a,u),X!==4&&(X=2),wr===null?wr=[i]:wr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Id(i,a,n);As(i,d);break e;case 1:u=a;var s=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(On===null||!On.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var g=Dd(i,u,n);As(i,g);break e}}i=i.return}while(i!==null)}ep(t)}catch(x){n=x,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Jd(){var e=ti.current;return ti.current=ni,e===null?ni:e}function ea(){(X===0||X===3||X===2)&&(X=4),J===null||!(bn&268435455)&&!(gi&268435455)||xn(J,ee)}function ii(e,n){var t=O;O|=2;var r=Jd();(J!==e||ee!==n)&&(Ze=null,Yn(e,n));do try{qh();break}catch(o){Zd(e,o)}while(!0);if(Mu(),O=t,ti.current=r,Q!==null)throw Error(v(261));return J=null,ee=0,X}function qh(){for(;Q!==null;)bd(Q)}function Nh(){for(;Q!==null&&!nm();)bd(Q)}function bd(e){var n=tp(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?ep(e):Q=n,Ku.current=null}function ep(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=kh(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(t=Sh(t,n,ve),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);X===0&&(X=5)}function $n(e,n,t){var r=z,o=Ne.transition;try{Ne.transition=null,z=1,Th(e,n,t,r)}finally{Ne.transition=o,z=r}return null}function Th(e,n,t,r){do qt();while(_n!==null);if(O&6)throw Error(v(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(dm(e,i),e===J&&(Q=J=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Co||(Co=!0,rp(Go,function(){return qt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var l=z;z=1;var u=O;O|=4,Ku.current=null,Eh(e,t),Yd(t,e),Zm(Hl),Uo=!!Wl,Hl=Wl=null,e.current=t,_h(t,e,o),tm(),O=u,z=l,Ne.transition=i}else e.current=t;if(Co&&(Co=!1,_n=e,oi=o),i=e.pendingLanes,i===0&&(On=null),im(t.stateNode,r),ye(e,H()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ri)throw ri=!1,e=pu,pu=null,e;return oi&1&&e.tag!==0&&qt(),i=e.pendingLanes,i&1?e===fu?Sr++:(Sr=0,fu=e):Sr=0,An(),null}function qt(){if(_n!==null){var e=Lc(oi),n=Ne.transition,t=z;try{if(Ne.transition=null,z=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,oi=0,O&6)throw Error(v(331));var o=O;for(O|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(_=c;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:vr(8,f,i)}var h=f.child;if(h!==null)h.return=f,_=h;else for(;_!==null;){f=_;var m=f.sibling,y=f.return;if(Wd(f),f===c){_=null;break}if(m!==null){m.return=y,_=m;break}_=y}}}var S=i.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,_=d;break e}_=i.return}}var s=e.current;for(_=s;_!==null;){l=_;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,_=p;else e:for(l=s;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:hi(9,u)}}catch(x){V(u,u.return,x)}if(u===l){_=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,_=g;break e}_=u.return}}if(O=o,An(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(ui,e)}catch{}r=!0}return r}finally{z=t,Ne.transition=n}}return!1}function ic(e,n,t){n=Lt(t,n),n=Id(e,n,1),e=Tn(e,n,1),n=ce(),e!==null&&(jr(e,1,n),ye(e,n))}function V(e,n,t){if(e.tag===3)ic(e,e,t);else for(;n!==null;){if(n.tag===3){ic(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Lt(t,e),e=Dd(n,e,1),n=Tn(n,e,1),e=ce(),n!==null&&(jr(n,1,e),ye(n,e));break}}n=n.return}}function Oh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(ee&t)===t&&(X===4||X===3&&(ee&130023424)===ee&&500>H()-Zu?Yn(e,0):Xu|=t),ye(e,n)}function np(e,n){n===0&&(e.mode&1?(n=po,po<<=1,!(po&130023424)&&(po=4194304)):n=1);var t=ce();e=on(e,n),e!==null&&(jr(e,n,t),ye(e,t))}function Rh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),np(e,t)}function zh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),np(e,t)}var tp;tp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,wh(e,n,t);me=!!(e.flags&131072)}else me=!1,F&&n.flags&1048576&&id(n,Ko,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Lo(e,n),e=n.pendingProps;var o=Tt(n,le.current);Ct(n,t),o=$u(null,n,r,e,o,t);var i=Wu();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ge(r)?(i=!0,Qo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fu(n),o.updater=fi,n.stateNode=o,o._reactInternals=n,nu(n,r,e,t),n=ou(null,n,r,!0,i,t)):(n.tag=0,F&&i&&zu(n),se(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Lo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Ih(r),e=De(r,e),o){case 0:n=ru(null,n,r,e,t);break e;case 1:n=Ks(null,n,r,e,t);break e;case 11:n=Qs(null,n,r,e,t);break e;case 14:n=Ys(null,n,r,De(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:De(r,o),ru(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:De(r,o),Ks(e,n,r,o,t);case 3:e:{if(Fd(n),e===null)throw Error(v(387));r=n.pendingProps,i=n.memoizedState,o=i.element,sd(e,n),Jo(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Lt(Error(v(423)),n),n=Xs(e,n,r,t,o);break e}else if(r!==o){o=Lt(Error(v(424)),n),n=Xs(e,n,r,t,o);break e}else for(we=Nn(n.stateNode.containerInfo.firstChild),Se=n,F=!0,Ae=null,t=fd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),r===o){n=ln(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return md(n),e===null&&Jl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ql(r,o)?l=null:i!==null&&Ql(r,i)&&(n.flags|=32),jd(e,n),se(e,n,l,t),n.child;case 6:return e===null&&Jl(n),null;case 13:return Gd(e,n,t);case 4:return Gu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Rt(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:De(r,o),Qs(e,n,r,o,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,D(Xo,r._currentValue),r._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===o.children&&!he.current){n=ln(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=nn(-1,t&-t),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),bl(i.return,t,n),u.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(v(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),bl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}se(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Ct(n,t),o=Te(o),r=r(o),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,o=De(r,n.pendingProps),o=De(r.type,o),Ys(e,n,r,o,t);case 15:return Md(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:De(r,o),Lo(e,n),n.tag=1,ge(r)?(e=!0,Qo(n)):e=!1,Ct(n,t),dd(n,r,o),nu(n,r,o,t),ou(null,n,r,!0,e,t);case 19:return Bd(e,n,t);case 22:return Ad(e,n,t)}throw Error(v(156,n.tag))};function rp(e,n){return Tc(e,n)}function Lh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,r){return new Lh(e,n,t,r)}function na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ih(e){if(typeof e=="function")return na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Su)return 11;if(e===ku)return 14}return 2}function zn(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Mo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")na(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dt:return Kn(t.children,o,i,n);case wu:l=8,o|=8;break;case Pl:return e=qe(12,t,n,o|2),e.elementType=Pl,e.lanes=i,e;case Cl:return e=qe(13,t,n,o),e.elementType=Cl,e.lanes=i,e;case ql:return e=qe(19,t,n,o),e.elementType=ql,e.lanes=i,e;case pc:return yi(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cc:l=10;break e;case dc:l=9;break e;case Su:l=11;break e;case ku:l=14;break e;case wn:l=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=qe(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Kn(e,n,t,r){return e=qe(7,e,r,n),e.lanes=t,e}function yi(e,n,t,r){return e=qe(22,e,r,n),e.elementType=pc,e.lanes=t,e.stateNode={isHidden:!1},e}function xl(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function El(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Dh(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ta(e,n,t,r,o,i,l,u,a){return e=new Dh(e,n,t,u,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=qe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(i),e}function Mh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ct,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function op(e){if(!e)return In;e=e._reactInternals;e:{if(tt(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(ge(t))return rd(e,t,n)}return n}function ip(e,n,t,r,o,i,l,u,a){return e=ta(t,r,!0,e,o,i,l,u,a),e.context=op(null),t=e.current,r=ce(),o=Rn(t),i=nn(r,o),i.callback=n??null,Tn(t,i,o),e.current.lanes=o,jr(e,o,r),ye(e,r),e}function vi(e,n,t,r){var o=n.current,i=ce(),l=Rn(o);return t=op(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Tn(o,n,l),e!==null&&(Fe(e,o,l,i),Oo(e,o,l)),l}function li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ra(e,n){lc(e,n),(e=e.alternate)&&lc(e,n)}function Ah(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function oa(e){this._internalRoot=e}wi.prototype.render=oa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));vi(e,n,null,null)};wi.prototype.unmount=oa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;et(function(){vi(null,e,null,null)}),n[rn]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kn.length&&n!==0&&n<kn[t].priority;t++);kn.splice(t,0,e),t===0&&jc(e)}};function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function jh(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=li(l);i.call(c)}}var l=ip(n,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=l,e[rn]=l.current,Tr(e.nodeType===8?e.parentNode:e),et(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=li(a);u.call(c)}}var a=ta(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=a,e[rn]=a.current,Tr(e.nodeType===8?e.parentNode:e),et(function(){vi(n,a,t,r)}),a}function ki(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var a=li(l);u.call(a)}}vi(n,l,e,o)}else l=jh(t,n,e,o,r);return li(l)}Ic=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=cr(n.pendingLanes);t!==0&&(_u(n,t|1),ye(n,H()),!(O&6)&&(It=H()+500,An()))}break;case 13:et(function(){var r=on(e,1);if(r!==null){var o=ce();Fe(r,e,1,o)}}),ra(e,1)}};Pu=function(e){if(e.tag===13){var n=on(e,134217728);if(n!==null){var t=ce();Fe(n,e,134217728,t)}ra(e,134217728)}};Dc=function(e){if(e.tag===13){var n=Rn(e),t=on(e,n);if(t!==null){var r=ce();Fe(t,e,n,r)}ra(e,n)}};Mc=function(){return z};Ac=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};Al=function(e,n,t){switch(n){case"input":if(Ol(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=di(r);if(!o)throw Error(v(90));mc(r),Ol(r,o)}}}break;case"textarea":gc(e,t);break;case"select":n=t.value,n!=null&&xt(e,!!t.multiple,n,!1)}};Ec=Ju;_c=et;var Fh={usingClientEntryPoint:!1,Events:[Gr,ht,di,kc,xc,Ju]},lr={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gh={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||Ah,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ur=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ur.isDisabled&&ur.supportsFiber))try{ui=ur.inject(Gh),Qe=ur}catch{}var ur;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fh;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ia(n))throw Error(v(200));return Mh(e,n,null,t)};Ee.createRoot=function(e,n){if(!ia(e))throw Error(v(299));var t=!1,r="",o=lp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ta(e,1,!1,null,null,t,!1,r,o),e[rn]=n.current,Tr(e.nodeType===8?e.parentNode:e),new oa(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=qc(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return et(e)};Ee.hydrate=function(e,n,t){if(!Si(n))throw Error(v(200));return ki(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!ia(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=lp;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=ip(n,null,e,1,t??null,o,!1,i,l),e[rn]=n.current,Tr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new wi(n)};Ee.render=function(e,n,t){if(!Si(n))throw Error(v(200));return ki(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Si(e))throw Error(v(40));return e._reactRootContainer?(et(function(){ki(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ju;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Si(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return ki(e,n,t,!1,r)};Ee.version="18.2.0-next-9e3b772b8-20220608"});var cp=mn((Ag,sp)=>{"use strict";function ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap)}catch(e){console.error(e)}}ap(),sp.exports=up()});var pp=mn(la=>{"use strict";var dp=cp();la.createRoot=dp.createRoot,la.hydrateRoot=dp.hydrateRoot;var jg});var mp=mn((Wg,fp)=>{fp.exports=function(n,t,r,o){var i=r?r.call(o,n,t):void 0;if(i!==void 0)return!!i;if(n===t)return!0;if(typeof n!="object"||!n||typeof t!="object"||!t)return!1;var l=Object.keys(n),u=Object.keys(t);if(l.length!==u.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<l.length;c++){var f=l[c];if(!a(f))return!1;var h=n[f],m=t[f];if(i=r?r.call(o,h,m,f):void 0,i===!1||i===void 0&&h!==m)return!1}return!0}});var ff=hn(gn()),mf=hn(pp());var Na=hn(gn());var qa=hn(gn());var dn=hn(gn());var ue=function(){return ue=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ue.apply(this,arguments)};function Ur(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}var W=hn(gn()),Wp=hn(mp());var L="-ms-",rt="-moz-",R="-webkit-",xi="comm",jn="rule",At="decl";var hp="@import";var Ei="@keyframes";var gp="@layer";var ua=Math.abs,Vr=String.fromCharCode,$r=Object.assign;function yp(e,n){return $(e,0)^45?(((n<<2^$(e,0))<<2^$(e,1))<<2^$(e,2))<<2^$(e,3):0}function _i(e){return e.trim()}function Be(e,n){return(e=n.exec(e))?e[0]:e}function C(e,n,t){return e.replace(n,t)}function jt(e,n,t){return e.indexOf(n,t)}function $(e,n){return e.charCodeAt(n)|0}function Ke(e,n,t){return e.slice(n,t)}function pe(e){return e.length}function Pi(e){return e.length}function ot(e,n){return n.push(e),e}function vp(e,n){return e.map(n).join("")}function aa(e,n){return e.filter(function(t){return!Be(t,n)})}var Ci=1,Ft=1,wp=0,Re=0,Y=0,Gt="";function Wr(e,n,t,r,o,i,l,u){return{value:e,root:n,parent:t,type:r,props:o,children:i,line:Ci,column:Ft,length:l,return:"",siblings:u}}function an(e,n){return $r(Wr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function it(e){for(;e.root;)e=an(e.root,{children:[e]});ot(e,e.siblings)}function Sp(){return Y}function kp(){return Y=Re>0?$(Gt,--Re):0,Ft--,Y===10&&(Ft=1,Ci--),Y}function ze(){return Y=Re<wp?$(Gt,Re++):0,Ft++,Y===10&&(Ft=1,Ci++),Y}function Fn(){return $(Gt,Re)}function Hr(){return Re}function qi(e,n){return Ke(Gt,e,n)}function sa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xp(e){return Ci=Ft=1,wp=pe(Gt=e),Re=0,[]}function Ep(e){return Gt="",e}function Ni(e){return _i(qi(Re-1,ca(e===91?e+2:e===40?e+1:e)))}function _p(e){for(;(Y=Fn())&&Y<33;)ze();return sa(e)>2||sa(Y)>3?"":" "}function Pp(e,n){for(;--n&&ze()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return qi(e,Hr()+(n<6&&Fn()==32&&ze()==32))}function ca(e){for(;ze();)switch(Y){case e:return Re;case 34:case 39:e!==34&&e!==39&&ca(Y);break;case 40:e===41&&ca(e);break;case 92:ze();break}return Re}function Cp(e,n){for(;ze()&&e+Y!==57;)if(e+Y===84&&Fn()===47)break;return"/*"+qi(n,Re-1)+"*"+Vr(e===47?e:ze())}function qp(e){for(;!sa(Fn());)ze();return qi(e,Re)}function Op(e){return Ep(Ti("",null,null,null,[""],e=xp(e),0,[0],e))}function Ti(e,n,t,r,o,i,l,u,a){for(var c=0,f=0,h=l,m=0,y=0,S=0,k=1,N=1,d=1,s=0,p="",g=o,x=i,E=r,w=p;N;)switch(S=s,s=ze()){case 40:if(S!=108&&$(w,h-1)==58){jt(w+=C(Ni(s),"&","&\f"),"&\f",ua(c?u[c-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:w+=Ni(s);break;case 9:case 10:case 13:case 32:w+=_p(S);break;case 92:w+=Pp(Hr()-1,7);continue;case 47:switch(Fn()){case 42:case 47:ot(Bh(Cp(ze(),Hr()),n,t,a),a);break;default:w+="/"}break;case 123*k:u[c++]=pe(w)*d;case 125*k:case 59:case 0:switch(s){case 0:case 125:N=0;case 59+f:d==-1&&(w=C(w,/\f/g,"")),y>0&&pe(w)-h&&ot(y>32?Tp(w+";",r,t,h-1,a):Tp(C(w," ","")+";",r,t,h-2,a),a);break;case 59:w+=";";default:if(ot(E=Np(w,n,t,c,f,o,u,p,g=[],x=[],h,i),i),s===123)if(f===0)Ti(w,n,E,E,g,i,h,u,x);else switch(m===99&&$(w,3)===110?100:m){case 100:case 108:case 109:case 115:Ti(e,E,E,r&&ot(Np(e,E,E,0,0,o,u,p,o,g=[],h,x),x),o,x,h,u,r?g:x);break;default:Ti(w,E,E,E,[""],x,0,u,x)}}c=f=y=0,k=d=1,p=w="",h=l;break;case 58:h=1+pe(w),y=S;default:if(k<1){if(s==123)--k;else if(s==125&&k++==0&&kp()==125)continue}switch(w+=Vr(s),s*k){case 38:d=f>0?1:(w+="\f",-1);break;case 44:u[c++]=(pe(w)-1)*d,d=1;break;case 64:Fn()===45&&(w+=Ni(ze())),m=Fn(),f=h=pe(p=w+=qp(Hr())),s++;break;case 45:S===45&&pe(w)==2&&(k=0)}}return i}function Np(e,n,t,r,o,i,l,u,a,c,f,h){for(var m=o-1,y=o===0?i:[""],S=Pi(y),k=0,N=0,d=0;k<r;++k)for(var s=0,p=Ke(e,m+1,m=ua(N=l[k])),g=e;s<S;++s)(g=_i(N>0?y[s]+" "+p:C(p,/&\f/g,y[s])))&&(a[d++]=g);return Wr(e,n,t,o===0?jn:u,a,c,f,h)}function Bh(e,n,t,r){return Wr(e,n,t,xi,Vr(Sp()),Ke(e,2,-2),0,r)}function Tp(e,n,t,r,o){return Wr(e,n,t,At,Ke(e,0,r),Ke(e,r+1,-1),r,o)}function da(e,n,t){switch(yp(e,n)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 4789:return rt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+rt+e+L+e+e;case 5936:switch($(e,n+11)){case 114:return R+e+L+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+L+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+L+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+L+e+e;case 6165:return R+e+L+"flex-"+e+e;case 5187:return R+e+C(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return R+e+L+"flex-item-"+C(e,/flex-|-self/g,"")+(Be(e,/flex-|baseline/)?"":L+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return R+e+L+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+L+C(e,"shrink","negative")+e;case 5292:return R+e+L+C(e,"basis","preferred-size")+e;case 6060:return R+"box-"+C(e,"-grow","")+R+e+L+C(e,"grow","positive")+e;case 4554:return R+C(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4200:if(!Be(e,/flex-|baseline/))return L+"grid-column-align"+Ke(e,n)+e;break;case 2592:case 3360:return L+C(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(r,o){return n=o,Be(r.props,/grid-\w+-end/)})?~jt(e+(t=t[n].value),"span",0)?e:L+C(e,"-start","")+e+L+"grid-row-span:"+(~jt(t,"span",0)?Be(t,/\d+/):+Be(t,/\d+/)-+Be(e,/\d+/))+";":L+C(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(r){return Be(r.props,/grid-\w+-start/)})?e:L+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pe(e)-1-n>6)switch($(e,n+1)){case 109:if($(e,n+4)!==45)break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+rt+($(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~jt(e,"stretch",0)?da(C(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,u,a,c){return L+o+":"+i+c+(l?L+o+"-span:"+(u?a:+a-+i)+c:"")+e});case 4949:if($(e,n+6)===121)return C(e,":",":"+R)+e;break;case 6444:switch($(e,$(e,14)===45?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+($(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+L+"$2box$3")+e;case 100:return C(e,":",":"+L)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function Bt(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function Rp(e,n,t,r){switch(e.type){case gp:if(e.children.length)break;case hp:case At:return e.return=e.return||e.value;case xi:return"";case Ei:return e.return=e.value+"{"+Bt(e.children,r)+"}";case jn:if(!pe(e.value=e.props.join(",")))return""}return pe(t=Bt(e.children,r))?e.return=e.value+"{"+t+"}":""}function zp(e){var n=Pi(e);return function(t,r,o,i){for(var l="",u=0;u<n;u++)l+=e[u](t,r,o,i)||"";return l}}function Lp(e){return function(n){n.root||(n=n.return)&&e(n)}}function Ip(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case At:e.return=da(e.value,e.length,t);return;case Ei:return Bt([an(e,{value:C(e.value,"@","@"+R)})],r);case jn:if(e.length)return vp(t=e.props,function(o){switch(Be(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":it(an(e,{props:[C(o,/:(read-\w+)/,":"+rt+"$1")]})),it(an(e,{props:[o]})),$r(e,{props:aa(t,r)});break;case"::placeholder":it(an(e,{props:[C(o,/:(plac\w+)/,":"+R+"input-$1")]})),it(an(e,{props:[C(o,/:(plac\w+)/,":"+rt+"$1")]})),it(an(e,{props:[C(o,/:(plac\w+)/,L+"input-$1")]})),it(an(e,{props:[o]})),$r(e,{props:aa(t,r)});break}return""})}}var Uh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dp=Uh;var cn=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Hp="active",Ii="data-styled-version",Vt="6.1.8",ka=`/*!sc*/
`,xa=typeof window<"u"&&"HTMLElement"in window,Vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var Ai=Object.freeze([]),$t=Object.freeze({});function $h(e,n,t){return t===void 0&&(t=$t),e.theme!==t.theme&&e.theme||n||t.theme}var Qp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hh=/(^-|-$)/g;function Mp(e){return e.replace(Wh,"-").replace(Hh,"")}var Qh=/(a)(d)/gi,Oi=52,Ap=function(e){return String.fromCharCode(e+(e>25?39:97))};function ha(e){var n,t="";for(n=Math.abs(e);n>Oi;n=n/Oi|0)t=Ap(n%Oi)+t;return(Ap(n%Oi)+t).replace(Qh,"$1-$2")}var pa,Yp=5381,Ut=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Kp=function(e){return Ut(Yp,e)};function Yh(e){return ha(Kp(e)>>>0)}function Kh(e){return e.displayName||e.name||"Component"}function fa(e){return typeof e=="string"&&!0}var Xp=typeof Symbol=="function"&&Symbol.for,Zp=Xp?Symbol.for("react.memo"):60115,Xh=Xp?Symbol.for("react.forward_ref"):60112,Zh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bh=((pa={})[Xh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pa[Zp]=Jp,pa);function jp(e){return("type"in(n=e)&&n.type.$$typeof)===Zp?Jp:"$$typeof"in e?bh[e.$$typeof]:Zh;var n}var eg=Object.defineProperty,ng=Object.getOwnPropertyNames,Fp=Object.getOwnPropertySymbols,tg=Object.getOwnPropertyDescriptor,rg=Object.getPrototypeOf,Gp=Object.prototype;function bp(e,n,t){if(typeof n!="string"){if(Gp){var r=rg(n);r&&r!==Gp&&bp(e,r,t)}var o=ng(n);Fp&&(o=o.concat(Fp(n)));for(var i=jp(e),l=jp(n),u=0;u<o.length;++u){var a=o[u];if(!(a in Jh||t&&t[a]||l&&a in l||i&&a in i)){var c=tg(n,a);try{eg(e,a,c)}catch{}}}}return e}function Wt(e){return typeof e=="function"}function Ea(e){return typeof e=="object"&&"styledComponentId"in e}function lt(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Di(e,n){if(e.length===0)return"";for(var t=e[0],r=1;r<e.length;r++)t+=n?n+e[r]:e[r];return t}function Qr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ga(e,n,t){if(t===void 0&&(t=!1),!t&&!Qr(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var r=0;r<n.length;r++)e[r]=ga(e[r],n[r]);else if(Qr(n))for(var r in n)e[r]=ga(e[r],n[r]);return e}function _a(e,n){Object.defineProperty(e,"toString",{value:n})}function sn(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var og=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var t=0,r=0;r<n;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(n,t){if(n>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;n>=i;)if((i<<=1)<0)throw sn(16,"".concat(n));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),a=(l=0,t.length);l<a;l++)this.tag.insertRule(u,t[l])&&(this.groupSizes[n]++,u++)},e.prototype.clearGroup=function(n){if(n<this.length){var t=this.groupSizes[n],r=this.indexOfGroup(n),o=r+t;this.groupSizes[n]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(n){var t="";if(n>=this.length||this.groupSizes[n]===0)return t;for(var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r,l=o;l<i;l++)t+="".concat(this.tag.getRule(l)).concat(ka);return t},e}(),zi=new Map,Mi=new Map,Li=1,Ri=function(e){if(zi.has(e))return zi.get(e);for(;Mi.has(Li);)Li++;var n=Li++;return zi.set(e,n),Mi.set(n,e),n},ig=function(e,n){Li=n+1,zi.set(e,n),Mi.set(n,e)},lg="style[".concat(cn,"][").concat(Ii,'="').concat(Vt,'"]'),ug=new RegExp("^".concat(cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ag=function(e,n,t){for(var r,o=t.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(n,r)},sg=function(e,n){for(var t,r=((t=n.textContent)!==null&&t!==void 0?t:"").split(ka),o=[],i=0,l=r.length;i<l;i++){var u=r[i].trim();if(u){var a=u.match(ug);if(a){var c=0|parseInt(a[1],10),f=a[2];c!==0&&(ig(f,c),ag(e,f,a[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(u)}}};function ya(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ef=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(u){var a=Array.from(u.querySelectorAll("style[".concat(cn,"]")));return a[a.length-1]}(t),i=o!==void 0?o.nextSibling:null;r.setAttribute(cn,Hp),r.setAttribute(Ii,Vt);var l=ya();return l&&r.setAttribute("nonce",l),t.insertBefore(r,i),r},cg=function(){function e(n){this.element=ef(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===t)return l}throw sn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,t){try{return this.sheet.insertRule(t,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var t=this.sheet.cssRules[n];return t&&t.cssText?t.cssText:""},e}(),dg=function(){function e(n){this.element=ef(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,t){if(n<=this.length&&n>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),pg=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,t){return n<=this.length&&(this.rules.splice(n,0,t),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Bp=xa,fg={isServer:!xa,useCSSOMInjection:!Vh},Yr=function(){function e(n,t,r){n===void 0&&(n=$t),t===void 0&&(t={});var o=this;this.options=ue(ue({},fg),n),this.gs=t,this.names=new Map(r),this.server=!!n.isServer,!this.server&&xa&&Bp&&(Bp=!1,function(i){for(var l=document.querySelectorAll(lg),u=0,a=l.length;u<a;u++){var c=l[u];c&&c.getAttribute(cn)!==Hp&&(sg(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),_a(this,function(){return function(i){for(var l=i.getTag(),u=l.length,a="",c=function(h){var m=function(d){return Mi.get(d)}(h);if(m===void 0)return"continue";var y=i.names.get(m),S=l.getGroup(h);if(y===void 0||S.length===0)return"continue";var k="".concat(cn,".g").concat(h,'[id="').concat(m,'"]'),N="";y!==void 0&&y.forEach(function(d){d.length>0&&(N+="".concat(d,","))}),a+="".concat(S).concat(k,'{content:"').concat(N,'"}').concat(ka)},f=0;f<u;f++)c(f);return a}(o)})}return e.registerId=function(n){return Ri(n)},e.prototype.reconstructWithOptions=function(n,t){return t===void 0&&(t=!0),new e(ue(ue({},this.options),n),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(t){var r=t.useCSSOMInjection,o=t.target;return t.isServer?new pg(o):r?new cg(o):new dg(o)}(this.options),new og(n)));var n},e.prototype.hasNameForId=function(n,t){return this.names.has(n)&&this.names.get(n).has(t)},e.prototype.registerName=function(n,t){if(Ri(n),this.names.has(n))this.names.get(n).add(t);else{var r=new Set;r.add(t),this.names.set(n,r)}},e.prototype.insertRules=function(n,t,r){this.registerName(n,t),this.getTag().insertRules(Ri(n),r)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Ri(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mg=/&/g,hg=/^\s*\/\/.*$/gm;function nf(e,n){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(r){return"".concat(n," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=nf(t.children,n)),t})}function tf(e){var n,t,r,o=e===void 0?$t:e,i=o.options,l=i===void 0?$t:i,u=o.plugins,a=u===void 0?Ai:u,c=function(m,y,S){return S.startsWith(t)&&S.endsWith(t)&&S.replaceAll(t,"").length>0?".".concat(n):m},f=a.slice();f.push(function(m){m.type===jn&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(mg,t).replace(r,c))}),l.prefix&&f.push(Ip),f.push(Rp);var h=function(m,y,S,k){y===void 0&&(y=""),S===void 0&&(S=""),k===void 0&&(k="&"),n=k,t=y,r=new RegExp("\\".concat(t,"\\b"),"g");var N=m.replace(hg,""),d=Op(S||y?"".concat(S," ").concat(y," { ").concat(N," }"):N);l.namespace&&(d=nf(d,l.namespace));var s=[];return Bt(d,zp(f.concat(Lp(function(p){return s.push(p)})))),s};return h.hash=a.length?a.reduce(function(m,y){return y.name||sn(15),Ut(m,y.name)},Yp).toString():"",h}var gg=new Yr,va=tf(),Pa=W.default.createContext({shouldForwardProp:void 0,styleSheet:gg,stylis:va}),ky=Pa.Consumer,yg=W.default.createContext(void 0);function wa(){return(0,W.useContext)(Pa)}function vg(e){var n=(0,W.useState)(e.stylisPlugins),t=n[0],r=n[1],o=wa().styleSheet,i=(0,W.useMemo)(function(){var a=o;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,W.useMemo)(function(){return tf({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:t})},[e.enableVendorPrefixes,e.namespace,t]);(0,W.useEffect)(function(){(0,Wp.default)(t,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var u=(0,W.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}},[e.shouldForwardProp,i,l]);return W.default.createElement(Pa.Provider,{value:u},W.default.createElement(yg.Provider,{value:l},e.children))}var wg=function(){function e(n,t){var r=this;this.inject=function(o,i){i===void 0&&(i=va);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=t,_a(this,function(){throw sn(12,String(r.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=va),this.name+n.hash},e}(),Sg=function(e){return e>="A"&&e<="Z"};function Up(e){for(var n="",t=0;t<e.length;t++){var r=e[t];if(t===1&&r==="-"&&e[0]==="-")return e;Sg(r)?n+="-"+r.toLowerCase():n+=r}return n.startsWith("ms-")?"-"+n:n}var rf=function(e){return e==null||e===!1||e===""},of=function(e){var n,t,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!rf(i)&&(Array.isArray(i)&&i.isCss||Wt(i)?r.push("".concat(Up(o),":"),i,";"):Qr(i)?r.push.apply(r,Ur(Ur(["".concat(o," {")],of(i),!1),["}"],!1)):r.push("".concat(Up(o),": ").concat((n=o,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||n in Dp||n.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Gn(e,n,t,r){if(rf(e))return[];if(Ea(e))return[".".concat(e.styledComponentId)];if(Wt(e)){if(!Wt(i=e)||i.prototype&&i.prototype.isReactComponent||!n)return[e];var o=e(n);return Gn(o,n,t,r)}var i;return e instanceof wg?t?(e.inject(t,r),[e.getName(r)]):[e]:Qr(e)?of(e):Array.isArray(e)?Array.prototype.concat.apply(Ai,e.map(function(l){return Gn(l,n,t,r)})):[e.toString()]}function lf(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(Wt(t)&&!Ea(t))return!1}return!0}var kg=Kp(Vt),xg=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lf(n),this.componentId=t,this.baseHash=Ut(kg,t),this.baseStyle=r,Yr.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=lt(o,this.staticRulesId);else{var i=Di(Gn(this.rules,n,t,r)),l=ha(Ut(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,l)){var u=r(i,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,u)}o=lt(o,l),this.staticRulesId=l}else{for(var a=Ut(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var m=Di(Gn(h,n,t,r));a=Ut(a,m+f),c+=m}}if(c){var y=ha(a>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),o=lt(o,y)}}return o},e}(),uf=W.default.createContext(void 0),xy=uf.Consumer;var ma={};function Eg(e,n,t){var r=Ea(e),o=e,i=!fa(e),l=n.attrs,u=l===void 0?Ai:l,a=n.componentId,c=a===void 0?function(g,x){var E=typeof g!="string"?"sc":Mp(g);ma[E]=(ma[E]||0)+1;var w="".concat(E,"-").concat(Yh(Vt+E+ma[E]));return x?"".concat(x,"-").concat(w):w}(n.displayName,n.parentComponentId):a,f=n.displayName,h=f===void 0?function(g){return fa(g)?"styled.".concat(g):"Styled(".concat(Kh(g),")")}(e):f,m=n.displayName&&n.componentId?"".concat(Mp(n.displayName),"-").concat(n.componentId):n.componentId||c,y=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,S=n.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(n.shouldForwardProp){var N=n.shouldForwardProp;S=function(g,x){return k(g,x)&&N(g,x)}}else S=k}var d=new xg(t,m,r?o.componentStyle:void 0);function s(g,x){return function(E,w,P){var j=E.attrs,T=E.componentStyle,Ue=E.defaultProps,ji=E.foldedComponentIds,hf=E.styledComponentId,gf=E.target,yf=W.default.useContext(uf),vf=wa(),Fi=E.shouldForwardProp||vf.shouldForwardProp,Ta=$h(w,yf,Ue)||$t,Xe=function(Xr,Yt,Zr){for(var Kt,Bn=ue(ue({},Yt),{className:void 0,theme:Zr}),Bi=0;Bi<Xr.length;Bi+=1){var Jr=Wt(Kt=Xr[Bi])?Kt(Bn):Kt;for(var fn in Jr)Bn[fn]=fn==="className"?lt(Bn[fn],Jr[fn]):fn==="style"?ue(ue({},Bn[fn]),Jr[fn]):Jr[fn]}return Yt.className&&(Bn.className=lt(Bn.className,Yt.className)),Bn}(j,w,Ta),Kr=Xe.as||gf,Qt={};for(var pn in Xe)Xe[pn]===void 0||pn[0]==="$"||pn==="as"||pn==="theme"&&Xe.theme===Ta||(pn==="forwardedAs"?Qt.as=Xe.forwardedAs:Fi&&!Fi(pn,Kr)||(Qt[pn]=Xe[pn]));var Oa=function(Xr,Yt){var Zr=wa(),Kt=Xr.generateAndInjectStyles(Yt,Zr.styleSheet,Zr.stylis);return Kt}(T,Xe),Gi=lt(ji,hf);return Oa&&(Gi+=" "+Oa),Xe.className&&(Gi+=" "+Xe.className),Qt[fa(Kr)&&!Qp.has(Kr)?"class":"className"]=Gi,Qt.ref=P,(0,W.createElement)(Kr,Qt)}(p,g,x)}s.displayName=h;var p=W.default.forwardRef(s);return p.attrs=y,p.componentStyle=d,p.displayName=h,p.shouldForwardProp=S,p.foldedComponentIds=r?lt(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=m,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(x){for(var E=[],w=1;w<arguments.length;w++)E[w-1]=arguments[w];for(var P=0,j=E;P<j.length;P++)ga(x,j[P],!0);return x}({},o.defaultProps,g):g}}),_a(p,function(){return".".concat(p.styledComponentId)}),i&&bp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Vp(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t}var $p=function(e){return Object.assign(e,{isCss:!0})};function _g(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(Wt(e)||Qr(e))return $p(Gn(Vp(Ai,Ur([e],n,!0))));var r=e;return n.length===0&&r.length===1&&typeof r[0]=="string"?Gn(r):$p(Gn(Vp(r,n)))}function Sa(e,n,t){if(t===void 0&&(t=$t),!n)throw sn(1,n);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(n,t,_g.apply(void 0,Ur([o],i,!1)))};return r.attrs=function(o){return Sa(e,n,ue(ue({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Sa(e,n,ue(ue({},t),o))},r}var af=function(e){return Sa(Eg,e)},Ca=af;Qp.forEach(function(e){Ca[e]=af(e)});var Ey=function(){function e(n,t){this.rules=n,this.componentId=t,this.isStatic=lf(n),Yr.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,t,r,o){var i=o(Di(Gn(this.rules,t,r,o)),""),l=this.componentId+n;r.insertRules(l,l,i)},e.prototype.removeStyles=function(n,t){t.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,t,r,o){n>2&&Yr.registerId(this.componentId+n),this.removeStyles(n,r),this.createStyles(n,t,r,o)},e}();var _y=function(){function e(){var n=this;this._emitSheetCSS=function(){var t=n.instance.toString(),r=ya(),o=Di([r&&'nonce="'.concat(r,'"'),"".concat(cn,'="true"'),"".concat(Ii,'="').concat(Vt,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(n.sealed)throw sn(2);return n._emitSheetCSS()},this.getStyleElement=function(){var t;if(n.sealed)throw sn(2);var r=((t={})[cn]="",t[Ii]=Vt,t.dangerouslySetInnerHTML={__html:n.instance.toString()},t),o=ya();return o&&(r.nonce=o),[W.default.createElement("style",ue({},r,{key:"sc-0-0"}))]},this.seal=function(){n.sealed=!0},this.instance=new Yr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(n){if(this.sealed)throw sn(2);return W.default.createElement(vg,{sheet:this.instance},n)},e.prototype.interleaveWithNodeStream=function(n){throw sn(3)},e}();var Py="__sc-".concat(cn,"__");var Pg=Ca.div`
    position: fixed;
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
`;function Cg(){return dn.default.createElement(Pg,null,dn.default.createElement("ul",null,dn.default.createElement("li",null,dn.default.createElement("a",{href:"./"},"\u9996\u9875")),dn.default.createElement("li",null,dn.default.createElement("a",{href:"./markdown.html"},"Markdown")),dn.default.createElement("li",null,dn.default.createElement("a",{href:"./go.html"},"Go\u57FA\u7840"))))}var sf=Cg;var Ht=hn(gn());function qg(e){let[n,t]=(0,Ht.useState)(!1);return(0,Ht.useEffect)(()=>{t(!0)},[]),Ht.default.createElement("div",{style:{display:n?"":"none"}},e.children)}var cf=qg;function Ng(e){return qa.default.createElement(cf,null,qa.default.createElement(sf,null),e.children)}var df=Ng;function Tg(e){return Na.default.createElement(df,null,Na.default.createElement("div",{className:"warp",dangerouslySetInnerHTML:{__html:e.serData.gobase}}))}var pf=Tg;var Og={title:"go\u57FA\u7840",serData:{gobase:`<h3>\u7B80\u4ECB</h3>
<blockquote>
<p>Go\u662FGoogle\u516C\u53F82009\u5E7411\u6708\u6B63\u5F0F\u5BF9\u5916\u516C\u5F00\u7684\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\u3002</p>
<p>Go\u8BED\u8A00\u7684\u63A8\u51FA\uFF0C\u65E8\u5728\u4E0D\u635F\u5931\u5E94\u7528\u7A0B\u5E8F\u6027\u80FD\u7684\u60C5\u51B5\u4E0B\u964D\u4F4E\u4EE3\u7801\u7684\u590D\u6742\u6027\uFF0C\u5177\u6709\u201C\u90E8\u7F72\u7B80\u5355\u3001\u5E76\u53D1\u6027\u597D\u3001\u8BED\u8A00\u8BBE\u8BA1\u826F\u597D\u3001\u6267\u884C\u6027\u80FD\u597D\u201D\u7B49\u4F18\u52BF\uFF0C\u76EE\u524D\u56FD\u5185\u8BF8\u591A IT \u516C\u53F8\u5747\u5DF2\u91C7\u7528Go\u8BED\u8A00\u5F00\u53D1\u9879\u76EE\u3002</p>
</blockquote>
<h3>\u5B89\u88C5</h3>
<blockquote>
<p>Go\u8BED\u8A00\u7ECF\u8FC7\u591A\u5E74\u7684\u53D1\u5C55\uFF0C\u73B0\u5728\u5B89\u88C5\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EF\u76F4\u63A5\u4ECE\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u3002</p>
</blockquote>
<h4>\u4E0B\u8F7D\u5B89\u88C5</h4>
<p>\u5B98\u7F51\u4E0B\u8F7D\u5730\u5740\uFF1A https://go.dev/dl/</p>
<p>\u56FD\u5185\u4E0B\u8F7D\u5730\u5740\uFF1A https://golang.google.cn/dl/</p>
<p>\u6839\u636E\u81EA\u5DF2\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684\u7248\u672C\u5B89\u88C5\u5373\u53EF\u3002</p>
<p>\u4F8B\u5982\uFF1A</p>
<p>Windows\uFF0C\u4E0B\u8F7D Microsoft Windows https://golang.google.cn/dl/go1.21.4.windows-amd64.msi</p>
<p>Apple macOS(x86-64)\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684 https://golang.google.cn/dl/go1.21.4.darwin-amd64.pkg</p>
<h4>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h4>
<p>vim ~/.bash_profile</p>
<pre><code class="language-shell">export GOPATH=/Users/xjz/go # go\u7B2C\u4E09\u65B9\u5305\u76EE\u5F55
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
<pre><code class="language-shell">go env -w GOBIN=/usr/local/go/bin              #\u914D\u7F6E\u4E0Bgo bin
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
<pre><code class="language-go">fmt.Println(&quot;Hello, World!&quot;)
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
<pre><code class="language-go">package main // \u5305\u58F0\u660E

import &quot;fmt&quot; // \u5F15\u5165\u5305

func main() { // \u4E3B\u51FD\u6570
   /* \u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A\u7B80\u5355\u7684\u7A0B\u5E8F */
   fmt.Println(&quot;Hello, World!&quot;) //\u6267\u884C\u7684\u8BED\u53E5
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
<pre><code class="language-go">var idn int
</code></pre>
<p>\u53EF\u4EE5\u4E00\u6B21\u58F0\u660E\u591A\u4E2A\u53D8\u91CF</p>
<pre><code class="language-go">//\u7C7B\u578B\u76F8\u540C\u591A\u4E2A\u53D8\u91CF, \u975E\u5168\u5C40\u53D8\u91CF
var vname1, vname2, vname3 type
vname1, vname2, vname3 = v1, v2, v3

var vname1, vname2, vname3 = v1, v2, v3 // \u548C python \u5F88\u50CF,\u4E0D\u9700\u8981\u663E\u793A\u58F0\u660E\u7C7B\u578B\uFF0C\u81EA\u52A8\u63A8\u65AD

vname1, vname2, vname3 := v1, v2, v3 // \u51FA\u73B0\u5728 := \u5DE6\u4FA7\u7684\u53D8\u91CF\u4E0D\u5E94\u8BE5\u662F\u5DF2\u7ECF\u88AB\u58F0\u660E\u8FC7\u7684\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF// \u5168\u5C40\u58F0\u660E\u591A\xA0\xA0\xA0\xA0// \u8FD9\u79CD\u56E0\u5F0F\u5206\u89E3\u5173\u952E\u5B57\u7684\u5199\u6CD5\u4E00\u822C\u7528\u4E8E\u58F0\u660E\u5168\u5C40\u53D8\u91CF
var (
    vname1 v_type1
    vname2 v_type2
)
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><code class="language-go">package main
import &quot;fmt&quot;

var x, y int
var (  // \u8FD9\u79CD\u56E0\u5F0F\u5206\u89E3\u5173\u952E\u5B57\u7684\u5199\u6CD5\u4E00\u822C\u7528\u4E8E\u58F0\u660E\u5168\u5C40\u53D8\u91CF
    a int
    b bool
)

var c, d int = 1, 2
var e, f = 123, &quot;hello&quot;

//\u8FD9\u79CD\u4E0D\u5E26\u58F0\u660E\u683C\u5F0F\u7684\u53EA\u80FD\u5728\u51FD\u6570\u4F53\u4E2D\u51FA\u73B0
//g, h := 123, &quot;hello&quot;

func main(){
    g, h := 123, &quot;hello&quot;
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
<pre><code class="language-go">package main
import &quot;fmt&quot;
func main() {
   /* \u58F0\u660E\u5C40\u90E8\u53D8\u91CF */
   var a, b, c int
   /* \u521D\u59CB\u5316\u53C2\u6570 */
   a = 10
   b = 20
   c = a + b
   fmt.Printf (&quot;\u7ED3\u679C\uFF1A a = %d, b = %d and c = %d\\n&quot;, a, b, c)
}
</code></pre>
<p>\u5168\u5C40\u53D8\u91CF\u5B9E\u4F8B</p>
<pre><code class="language-go">package main
import &quot;fmt&quot;
/* \u58F0\u660E\u5168\u5C40\u53D8\u91CF */
var g int
func main() {
   /* \u58F0\u660E\u5C40\u90E8\u53D8\u91CF */
   var a, b int
   /* \u521D\u59CB\u5316\u53C2\u6570 */
   a = 10
   b = 20
   g = a + b
   fmt.Printf(&quot;\u7ED3\u679C\uFF1A a = %d, b = %d and g = %d\\n&quot;, a, b, g)
}
</code></pre>
<p>\u5F62\u53C2\u5B9E\u4F8B</p>
<pre><code class="language-go">package main
import &quot;fmt&quot;
/* \u58F0\u660E\u5168\u5C40\u53D8\u91CF */
var a int = 20
func main() {
   /* main \u51FD\u6570\u4E2D\u58F0\u660E\u5C40\u90E8\u53D8\u91CF */
   var a int = 10
   var b int = 20
   var c int = 0
   fmt.Printf(&quot;main()\u51FD\u6570\u4E2D a = %d\\n&quot;,  a)
   c = sum( a, b)
   fmt.Printf(&quot;main()\u51FD\u6570\u4E2D c = %d\\n&quot;,  c)
}

/* \u51FD\u6570\u5B9A\u4E49-\u4E24\u6570\u76F8\u52A0 */
func sum(a, b int) int {
   fmt.Printf(&quot;sum() \u51FD\u6570\u4E2D a = %d\\n&quot;,  a)
   fmt.Printf(&quot;sum() \u51FD\u6570\u4E2D b = %d\\n&quot;,  b)
   return a + b
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
<pre><code class="language-go">var arrayName [size]dataType
</code></pre>
<p>\u5176\u4E2D arrayName\u662F\u6570\u7EC4\u7684\u540D\u79F0, size\u4E3A\u6570\u7EC4\u7684\u5927\u5C0F\uFF0CdataType\u662F\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B\u3002</p>
<p>\u5B9E\u4F8B</p>
<pre><code class="language-go">var numbers [5]int // \u9ED8\u8BA4\u521D\u59CB\u5316 \uFF0C\u521D\u59CB\u503C\u4E3A0
var numbers = [5]int{1, 2, 3, 4, 5} // \u53EF\u4EE5\u4F7F\u7528\u521D\u59CB\u5316\u5217\u8868\u6765\u521D\u59CB\u5316\u6570\u7EC4\u7684\u5143\u7D20
numbers := [5]int{1, 2, 3, 4, 5} // \u4F7F\u7528:=\u7B80\u77ED\u58F0\u660E\u8BED\u6CD5\u6765\u58F0\u660E\u548C\u521D\u59CB\u5316\u6570\u7EC4
var balance = [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}


fmt.Println(numbers[0]) //\u8BBF\u95EE\u6570\u7EC4\u7684\u5143fmt.Println(numbers[0]) //\u8BBF\u95EE\u6570\u7EC4\u7684\u5143
</code></pre>
<h4>\u51FD\u6570</h4>
<blockquote>
<p>\u51FD\u6570\u662F\u57FA\u672C\u7684\u4EE3\u7801\u5757\uFF0C\u7528\u4E8E\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1\uFF0CGo\u8BED\u8A00\u6700\u5C11\u6709\u4E00\u4E2Amain()\u51FD\u6570\u3002\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u6765\u5212\u5206\u4E0D\u540C\u529F\u80FD\uFF0C\u903B\u8F91\u4E0A\u6BCF\u4E2A\u51FD\u6570\u6267\u884C\u7684\u662F\u6307\u5B9A\u7684\u4EFB\u52A1\u3002</p>
<p>\u51FD\u6570\u58F0\u660E\u544A\u8BC9\u4E86\u7F16\u8BD1\u5668\u51FD\u6570\u7684\u540D\u79F0\u3001\u8FD4\u56DE\u7C7B\u578B\uFF0C\u548C\u53C2\u6570\u3002</p>
<p>Go\u8BED\u8A00\u6807\u51C6\u5E93\u63D0\u4F9B\u4E86\u591A\u79CD\u53EF\u52A8\u7528\u7684\u5185\u7F6E\u7684\u51FD\u6570\u3002\u4F8B\u5982\uFF0Clen()\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E0D\u540C\u7C7B\u578B\u53C2\u6570\u5E76\u8FD4\u56DE\u8BE5\u7C7B\u578B\u7684\u957F\u5EA6\u3002</p>
</blockquote>
<p>\u51FD\u6570\u7684\u5B9A\u4E49</p>
<p>Go\u51FD\u6570\u7684\u5B9A\u4E49\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">func function_name( [parameter list] ) [return_types] {
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
<pre><code class="language-go">/* \u51FD\u6570\u8FD4\u56DE\u4E24\u4E2A\u6570\u7684\u6700\u5927\u503C */
func max(num1, num2 int) int {
   /* \u58F0\u660E\u5C40\u90E8\u53D8\u91CF */
   var result int

   if (num1 &gt; num2) {
      result = num1
   } else {
      result = num2
   }
   return result
}
</code></pre>
<h4>\u5207\u7247Slice</h4>
<blockquote>
<p>Go\u8BED\u8A00\u5207\u7247\u662F\u5BF9\u6570\u7EC4\u7684\u62BD\u8C61\u3002</p>
<p>Go\u8BED\u8A00\u6570\u7EC4\u7684\u957F\u5EA6\u4E0D\u53EF\u6539\u53D8\uFF0C\u5728\u7279\u5B9A\u573A\u666F\u4E2D\u8FD9\u6837\u96C6\u5408\u5C31\u4E0D\u592A\u9002\u7528\uFF0CGo\u4E2D\u63D0\u4F9B\u4E86\u4E00\u79CD\u7075\u6D3B\uFF0C\u529F\u80FD\u5F3A\u608D\u7684\u5185\u7F6E\u7C7B\u578B\u5207\u7247(\u52A8\u6001\u6570\u7EC4)\uFF0C\u4E0E\u6570\u7EC4\u76F8\u6BD4\u5207\u7247\u7684\u957F\u5EA6\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u53EF\u4EE5\u8FFD\u52A0\u5143\u7D20\uFF0C\u5728\u8FFD\u52A0\u65F6\u53EF\u80FD\u4F7F\u5207\u7247\u7684\u5BB9\u91CF\u589E\u5927\u3002</p>
</blockquote>
<p>\u5B9A\u4E49\u5207\u7247</p>
<p>\u58F0\u660E\u4E00\u4E2A\u672A\u6307\u5B9A\u5927\u5C0F\u7684\u6570\u7EC4\u6765\u5B9A\u4E49\u7684\u5207\u7247\uFF1A</p>
<pre><code class="language-go">var identifier []type
</code></pre>
<p>\u5207\u7247\u4E0D\u9700\u8981\u957F\u5EA6\u8BF4\u660E, \u4F7F\u7528make()\u51FD\u6570\u6765\u521B\u5EFA\u5207\u7247</p>
<pre><code class="language-go">var slice1 []type = make([]type, len)
//\u4E5F\u53EF\u4EE5\u7B80\u5199\u4E3A
slice1 := make([]type, len)
</code></pre>
<p>\u5207\u7247\u521D\u59CB\u5316</p>
<pre><code class="language-go">s :=[] int {1,2,3 }  // \u76F4\u63A5\u521D\u59CB\u5316\u5207\u7247\uFF0C[] \u8868\u793A\u662F\u5207\u7247\u7C7B\u578B\uFF0C{1,2,3} \u521D\u59CB\u5316\u503C\u4F9D\u6B21\u662F 1,2,3\uFF0C\u5176 cap=len=3\u3002
</code></pre>
<p>\u5207\u7247\u622A\u53D6</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

func main() {
   /* \u521B\u5EFA\u5207\u7247 */
   numbers := []int{0,1,2,3,4,5,6,7,8}  
   printSlice(numbers)

   /* \u6253\u5370\u539F\u59CB\u5207\u7247 */
   fmt.Println(&quot;numbers ==&quot;, numbers)

   /* \u6253\u5370\u5B50\u5207\u7247\u4ECE\u7D22\u5F151(\u5305\u542B) \u5230\u7D22\u5F154(\u4E0D\u5305\u542B)*/
   fmt.Println(&quot;numbers[1:4] ==&quot;, numbers[1:4])

   /* \u9ED8\u8BA4\u4E0B\u9650\u4E3A 0*/
   fmt.Println(&quot;numbers[:3] ==&quot;, numbers[:3])

   /* \u9ED8\u8BA4\u4E0A\u9650\u4E3A len(s)*/
   fmt.Println(&quot;numbers[4:] ==&quot;, numbers[4:])

   numbers1 := make([]int,0,5)
   printSlice(numbers1)

   /* \u6253\u5370\u5B50\u5207\u7247\u4ECE\u7D22\u5F15  0(\u5305\u542B) \u5230\u7D22\u5F15 2(\u4E0D\u5305\u542B) */
   number2 := numbers[:2]
   printSlice(number2)

   /* \u6253\u5370\u5B50\u5207\u7247\u4ECE\u7D22\u5F15 2(\u5305\u542B) \u5230\u7D22\u5F15 5(\u4E0D\u5305\u542B) */
   number3 := numbers[2:5]
   printSlice(number3)

}

func printSlice(x []int){
   fmt.Printf(&quot;len=%d cap=%d slice=%v\\n&quot;,len(x),cap(x),x)
}
</code></pre>
<h4>\u6307\u9488</h4>
<p>\u533A\u522B\u4E8EC/C++\u4E2D\u7684\u6307\u9488\uFF0CGo\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u4E0D\u80FD\u8FDB\u884C\u504F\u79FB\u548C\u8FD0\u7B97\uFF0C\u662F\u5B89\u5168\u6307\u9488\u3002</p>
<p>Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u9700\u8981\u5148\u77E5\u90533\u4E2A\u6982\u5FF5\uFF1A\u6307\u9488\u5730\u5740\u3001\u6307\u9488\u7C7B\u578B\u548C\u6307\u9488\u53D6\u503C\u3002</p>
<p>Go\u8BED\u8A00\u4E2D\u7684\u51FD\u6570\u4F20\u53C2\u662F\u503C\u62F7\u8D1D\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u4FEE\u6539\u67D0\u4E2A\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u6307\u5411\u8BE5\u53D8\u91CF\u7684\u6307\u9488\u53D8\u91CF\u3002\u4F20\u9012\u6570\u636E\u4F7F\u7528\u6307\u9488\uFF0C\u800C\u65E0\u987B\u62F7\u8D1D\u6570\u636E\u3002\u7C7B\u578B\u6307\u9488\u4E0D\u80FD\u8FDB\u884C\u504F\u79FB\u548C\u8FD0\u7B97\u3002Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u64CD\u4F5C\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7\uFF1A<code>&amp;</code>\u53D6\u5730\u5740\u64CD\u4F5C\u7B26\u548C<code>*</code> \u89E3\u5F15\u7528\u64CD\u4F5C\u7B26(\u6839\u636E\u5730\u5740\u53D6\u503C)\u3002</p>
<h5>\u6307\u9488\u5730\u5740\u548C\u6307\u9488\u7C7B\u578B</h5>
<p>\u6BCF\u4E2A\u53D8\u91CF\u5728\u8FD0\u884C\u65F6\u90FD\u62E5\u6709\u4E00\u4E2A\u5730\u5740\uFF0C\u8FD9\u4E2A\u5730\u5740\u4EE3\u8868\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u7684\u4F4D\u7F6E\u3002Go\u8BED\u8A00\u4E2D\u4F7F\u7528&amp;\u5B57\u7B26\u653E\u5728\u53D8\u91CF\u524D\u9762\u5BF9\u53D8\u91CF\u8FDB\u884C\u201C\u53D6\u5730\u5740\u201D\u64CD\u4F5C\u3002Go\u8BED\u8A00\u4E2D\u7684\u503C\u7C7B\u578B(int\u3001float\u3001bool\u3001string\u3001array\u3001struct)\u90FD\u6709\u5BF9\u5E94\u7684\u6307\u9488\u7C7B\u578B\uFF0C\u5982\uFF1A<code>*int</code>\u3001<code>*int64</code>\u3001<code>*string</code>\u7B49\u3002</p>
<p>\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">  ptr := &amp;v    // v\u7684\u7C7B\u578B\u4E3AT
</code></pre>
<p>\u5176\u4E2D\uFF1A</p>
<p>v\uFF1A\u4EE3\u8868\u88AB\u53D6\u5730\u5740\u7684\u53D8\u91CF\uFF0C\u7C7B\u578B\u4E3AT</p>
<p>ptr\uFF1A \u7528\u4E8E\u63A5\u6536\u7684\u53D8\u91CF\uFF0Cptr\u7684\u7C7B\u578B\u5C31\u4E3A*T\uFF0C\u79F0\u505AT\u7684\u6307\u9488\u7C7B\u578B\u3002*\u4EE3\u8868\u6307\u9488\u3002</p>
<pre><code class="language-go">func main() {
    a := 10
    b := &amp;a
    fmt.Printf(&quot;a:%d ptr:%p\\n&quot;, a, &amp;a) // a:10 ptr:0xc00001a078
    fmt.Printf(&quot;b:%p type:%T\\n&quot;, b, b) // b:0xc00001a078 type:*int
    fmt.Println(&amp;b)                    // 0xc00000e018
}
</code></pre>
<h5>\u6307\u9488\u53D6\u503C</h5>
<p>\u5728\u5BF9\u666E\u901A\u53D8\u91CF\u4F7F\u7528&amp;\u64CD\u4F5C\u7B26\u53D6\u5730\u5740\u540E\u4F1A\u83B7\u5F97\u8FD9\u4E2A\u53D8\u91CF\u7684\u6307\u9488\uFF0C\u7136\u540E\u53EF\u4EE5\u5BF9\u6307\u9488\u4F7F\u7528*\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u6307\u9488\u53D6\u503C\u3002</p>
<pre><code class="language-go">func main() {
    //\u6307\u9488\u53D6\u503C
    a := 10
    b := &amp;a // \u53D6\u53D8\u91CFa\u7684\u5730\u5740\uFF0C\u5C06\u6307\u9488\u4FDD\u5B58\u5230b\u4E2D
    fmt.Printf(&quot;type of b:%T\\n&quot;, b)
    c := *b // \u6307\u9488\u53D6\u503C\uFF08\u6839\u636E\u6307\u9488\u53BB\u5185\u5B58\u53D6\u503C\uFF09
    fmt.Printf(&quot;type of c:%T\\n&quot;, c)
    fmt.Printf(&quot;value of c:%v\\n&quot;, c)
}
</code></pre>
<p>\u8F93\u51FA\u5982\u4E0B\uFF1A</p>
<pre><code>type of b:*int
type of c:int
value of c:10
</code></pre>
<p>\u603B\u7ED3\uFF1A \u53D6\u5730\u5740\u64CD\u4F5C\u7B26&amp;\u548C\u53D6\u503C\u64CD\u4F5C\u7B26<code>*</code>\u662F\u4E00\u5BF9\u4E92\u8865\u64CD\u4F5C\u7B26\uFF0C<code>&amp;</code>\u53D6\u51FA\u5730\u5740\uFF0C<code>*</code>\u6839\u636E\u5730\u5740\u53D6\u51FA\u5730\u5740\u6307\u5411\u7684\u503C\u3002</p>
<p>\u53D8\u91CF\u3001\u6307\u9488\u5730\u5740\u3001\u6307\u9488\u53D8\u91CF\u3001\u53D6\u5730\u5740\u3001\u53D6\u503C\u7684\u76F8\u4E92\u5173\u7CFB\u548C\u7279\u6027\u5982\u4E0B\uFF1A</p>
<pre><code>1.\u5BF9\u53D8\u91CF\u8FDB\u884C\u53D6\u5730\u5740\uFF08&amp;\uFF09\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u83B7\u5F97\u8FD9\u4E2A\u53D8\u91CF\u7684\u6307\u9488\u53D8\u91CF\u3002
2.\u6307\u9488\u53D8\u91CF\u7684\u503C\u662F\u6307\u9488\u5730\u5740\u3002
3.\u5BF9\u6307\u9488\u53D8\u91CF\u8FDB\u884C\u53D6\u503C\uFF08*\uFF09\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u83B7\u5F97\u6307\u9488\u53D8\u91CF\u6307\u5411\u7684\u539F\u53D8\u91CF\u7684\u503C\u3002
</code></pre>
<p>\u6307\u9488\u4F20\u503C\u793A\u4F8B\uFF1A</p>
<pre><code class="language-go">func modify1(x int) {
    x = 100
}

func modify2(x *int) {
    *x = 100
}

func main() {
    a := 10
    modify1(a)
    fmt.Println(a) // 10
    modify2(&amp;a)
    fmt.Println(a) // 100
}
</code></pre>
<h5>\u7A7A\u6307\u9488</h5>
<ul>
<li>\u5F53\u4E00\u4E2A\u6307\u9488\u88AB\u5B9A\u4E49\u540E\u6CA1\u6709\u5206\u914D\u5230\u4EFB\u4F55\u53D8\u91CF\u65F6\uFF0C\u5B83\u7684\u503C\u4E3A nil</li>
<li>\u7A7A\u6307\u9488\u7684\u5224\u65AD</li>
</ul>
<pre><code class="language-go">package main

import &quot;fmt&quot;

func main() {
    var p *string
    fmt.Println(p)
    fmt.Printf(&quot;p\u7684\u503C\u662F%s/n&quot;, p)
    if p != nil {
        fmt.Println(&quot;\u975E\u7A7A&quot;)
    } else {
        fmt.Println(&quot;\u7A7A\u503C&quot;)
    }
}
</code></pre>
<h5>new\u548Cmake</h5>
<p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p>
<pre><code class="language-go">func main() {
    var a *int
    *a = 100
    fmt.Println(*a)

    var b map[string]int
    b[&quot;\u6D4B\u8BD5&quot;] = 100
    fmt.Println(b)
}
</code></pre>
<p>\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\u4F1A\u5F15\u53D1panic\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F \u5728Go\u8BED\u8A00\u4E2D\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u4EC5\u8981\u58F0\u660E\u5B83\uFF0C\u8FD8\u8981\u4E3A\u5B83\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u5426\u5219\u6211\u4EEC\u7684\u503C\u5C31\u6CA1\u529E\u6CD5\u5B58\u50A8\u3002\u800C\u5BF9\u4E8E\u503C\u7C7B\u578B\u7684\u58F0\u660E\u4E0D\u9700\u8981\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u662F\u56E0\u4E3A\u5B83\u4EEC\u5728\u58F0\u660E\u7684\u65F6\u5019\u5DF2\u7ECF\u9ED8\u8BA4\u5206\u914D\u597D\u4E86\u5185\u5B58\u7A7A\u95F4\u3002\u8981\u5206\u914D\u5185\u5B58\uFF0C\u5C31\u5F15\u51FA\u6765\u4ECA\u5929\u7684new\u548Cmake\u3002 Go\u8BED\u8A00\u4E2Dnew\u548Cmake\u662F\u5185\u5EFA\u7684\u4E24\u4E2A\u51FD\u6570\uFF0C\u4E3B\u8981\u7528\u6765\u5206\u914D\u5185\u5B58\u3002</p>
<h5>new</h5>
<p>new\u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u5B83\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">func new(Type) *Type
</code></pre>
<p>\u5176\u4E2D\uFF0C</p>
<pre><code>1.Type\u8868\u793A\u7C7B\u578B\uFF0Cnew\u51FD\u6570\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u7C7B\u578B
2.*Type\u8868\u793A\u7C7B\u578B\u6307\u9488\uFF0Cnew\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u8BE5\u7C7B\u578B\u5185\u5B58\u5730\u5740\u7684\u6307\u9488\u3002
</code></pre>
<p>new\u51FD\u6570\u4E0D\u592A\u5E38\u7528\uFF0C\u4F7F\u7528new\u51FD\u6570\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u5E76\u4E14\u8BE5\u6307\u9488\u5BF9\u5E94\u7684\u503C\u4E3A\u8BE5\u7C7B\u578B\u7684\u96F6\u503C\u3002</p>
<p>\u4F8B\u5982\uFF1A</p>
<pre><code class="language-go">func main() {
    a := new(int)
    b := new(bool)
    fmt.Printf(&quot;%T\\n&quot;, a) // *int
    fmt.Printf(&quot;%T\\n&quot;, b) // *bool
    fmt.Println(*a)       // 0
    fmt.Println(*b)       // false
}
</code></pre>
<p>\u793A\u4F8B\u4EE3\u7801\u4E2D<code>var a *int</code>\u53EA\u662F\u58F0\u660E\u4E86\u4E00\u4E2A\u6307\u9488\u53D8\u91CFa\u4F46\u662F\u6CA1\u6709\u521D\u59CB\u5316\uFF0C\u6307\u9488\u4F5C\u4E3A\u5F15\u7528\u7C7B\u578B\u9700\u8981\u521D\u59CB\u5316\u540E\u624D\u4F1A\u62E5\u6709\u5185\u5B58\u7A7A\u95F4\uFF0C\u624D\u53EF\u4EE5\u7ED9\u5B83\u8D4B\u503C\u3002\u5E94\u8BE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u4F7F\u7528\u5185\u7F6E\u7684new\u51FD\u6570\u5BF9a\u8FDB\u884C\u521D\u59CB\u5316\u4E4B\u540E\u5C31\u53EF\u4EE5\u6B63\u5E38\u5BF9\u5176\u8D4B\u503C\u4E86\uFF1A</p>
<pre><code class="language-go">func main() {
    var a *int
    a = new(int)
    *a = 10
    fmt.Println(*a)
}
</code></pre>
<h5>make</h5>
<p>make\u4E5F\u662F\u7528\u4E8E\u5185\u5B58\u5206\u914D\u7684\uFF0C\u533A\u522B\u4E8Enew\uFF0C\u5B83\u53EA\u7528\u4E8Eslice\u3001map\u4EE5\u53CAchan\u7684\u5185\u5B58\u521B\u5EFA\uFF0C\u800C\u4E14\u5B83\u8FD4\u56DE\u7684\u7C7B\u578B\u5C31\u662F\u8FD9\u4E09\u4E2A\u7C7B\u578B\u672C\u8EAB\uFF0C\u800C\u4E0D\u662F\u4ED6\u4EEC\u7684\u6307\u9488\u7C7B\u578B\uFF0C\u56E0\u4E3A\u8FD9\u4E09\u79CD\u7C7B\u578B\u5C31\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709\u5FC5\u8981\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6307\u9488\u4E86\u3002make\u51FD\u6570\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A</p>
<pre><code>func make(t Type, size ...IntegerType) Type
</code></pre>
<p>make\u51FD\u6570\u662F\u65E0\u53EF\u66FF\u4EE3\u7684\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528slice\u3001map\u4EE5\u53CAchannel\u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u4F7F\u7528make\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u7136\u540E\u624D\u53EF\u4EE5\u5BF9\u5B83\u4EEC\u8FDB\u884C\u64CD\u4F5C\u3002\u8FD9\u4E2A\u6211\u4EEC\u5728\u4E0A\u4E00\u7AE0\u4E2D\u90FD\u6709\u8BF4\u660E\uFF0C\u5173\u4E8Echannel\u6211\u4EEC\u4F1A\u5728\u540E\u7EED\u7684\u7AE0\u8282\u8BE6\u7EC6\u8BF4\u660E\u3002</p>
<p>\u672C\u8282\u5F00\u59CB\u7684\u793A\u4F8B\u4E2D<code>var b map[string]int</code>\u53EA\u662F\u58F0\u660E\u53D8\u91CFb\u662F\u4E00\u4E2Amap\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u9700\u8981\u50CF\u4E0B\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u4E00\u6837\u4F7F\u7528make\u51FD\u6570\u8FDB\u884C\u521D\u59CB\u5316\u64CD\u4F5C\u4E4B\u540E\uFF0C\u624D\u80FD\u5BF9\u5176\u8FDB\u884C\u952E\u503C\u5BF9\u8D4B\u503C\uFF1A</p>
<pre><code class="language-go">func main() {
    var b map[string]int
    b = make(map[string]int, 10)
    b[&quot;\u6D4B\u8BD5&quot;] = 100
    fmt.Println(b)
}
</code></pre>
<h5>new\u4E0Emake\u7684\u533A\u522B</h5>
<pre><code>1.\u4E8C\u8005\u90FD\u662F\u7528\u6765\u505A\u5185\u5B58\u5206\u914D\u7684\u3002
2.make\u53EA\u7528\u4E8Eslice\u3001map\u4EE5\u53CAchannel\u7684\u521D\u59CB\u5316\uFF0C\u8FD4\u56DE\u7684\u8FD8\u662F\u8FD9\u4E09\u4E2A\u5F15\u7528\u7C7B\u578B\u672C\u8EAB\uFF1B
3.\u800Cnew\u7528\u4E8E\u7C7B\u578B\u7684\u5185\u5B58\u5206\u914D\uFF0C\u5E76\u4E14\u5185\u5B58\u5BF9\u5E94\u7684\u503C\u4E3A\u7C7B\u578B\u96F6\u503C\uFF0C\u8FD4\u56DE\u7684\u662F\u6307\u5411\u7C7B\u578B\u7684\u6307\u9488\u3002
</code></pre>
<h4>\u7ED3\u6784\u4F53</h4>
<p>Go\u8BED\u8A00\u4E2D\u6570\u7EC4\u53EF\u4EE5\u5B58\u50A8\u540C\u4E00\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F46\u5728\u7ED3\u6784\u4F53\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4E3A\u4E0D\u540C\u9879\u5B9A\u4E49\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002</p>
<p>\u7ED3\u6784\u4F53\u662F\u7531\u4E00\u7CFB\u5217\u5177\u6709\u76F8\u540C\u7C7B\u578B\u6216\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u96C6\u5408\u3002</p>
<p>\u5B9A\u4E49\u7ED3\u6784\u4F53</p>
<p>\u7ED3\u6784\u4F53\u5B9A\u4E49\u9700\u8981\u4F7F\u7528type\u548Cstruct\u8BED\u53E5\u3002struct\u8BED\u53E5\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7ED3\u6784\u4F53\u4E2D\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\u3002type\u8BED\u53E5\u8BBE\u5B9A\u4E86\u7ED3\u6784\u4F53\u7684\u540D\u79F0\u3002\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">type struct_variable_type struct {
   member definition
   member definition
   ...
   member definition
}
</code></pre>
<p>\u4E00\u65E6\u5B9A\u4E49\u4E86\u7ED3\u6784\u4F53\u7C7B\u578B\uFF0C\u5B83\u5C31\u80FD\u7528\u4E8E\u53D8\u91CF\u7684\u58F0\u660E\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">variable_name := structure_variable_type {value1, value2...valuen}
\u6216
variable_name := structure_variable_type { key1: value1, key2: value2..., keyn: valuen}
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><code class="language-go">package main
import &quot;fmt&quot;
type Books struct {
   title string
   author string
   subject string
   book_id int
}
func main() {
    // \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7ED3\u6784\u4F53
    fmt.Println(Books{&quot;Go \u8BED\u8A00&quot;, &quot;www.runoob.com&quot;, &quot;Go \u8BED\u8A00\u6559\u7A0B&quot;, 6495407})
    // \u4E5F\u53EF\u4EE5\u4F7F\u7528 key =&gt; value \u683C\u5F0F
    fmt.Println(Books{title: &quot;Go \u8BED\u8A00&quot;, author: &quot;www.runoob.com&quot;, subject: &quot;Go \u8BED\u8A00\u6559\u7A0B&quot;, book_id: 6495407})
    // \u5FFD\u7565\u7684\u5B57\u6BB5\u4E3A 0 \u6216 \u7A7A
   fmt.Println(Books{title: &quot;Go \u8BED\u8A00&quot;, author: &quot;www.runoob.com&quot;})
}
</code></pre>
<p>\u7ED3\u6784\u4F53\u53D8\u91CF\u4F7F\u7528struct\u5173\u952E\u5B57\u5B9A\u4E49\uFF0C\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type Books struct {
   title string
   author string
   subject string
   book_id int
}

func main() {
   var Book1 Books        /* \u58F0\u660E Book1 \u4E3A Books \u7C7B\u578B */
   var Book2 Books        /* \u58F0\u660E Book2 \u4E3A Books \u7C7B\u578B */

   /* book 1 \u63CF\u8FF0 */
   Book1.title = &quot;Go \u8BED\u8A00&quot;
   Book1.author = &quot;www.runoob.com&quot;
   Book1.subject = &quot;Go \u8BED\u8A00\u6559\u7A0B&quot;
   Book1.book_id = 6495407

   /* book 2 \u63CF\u8FF0 */
   Book2.title = &quot;Python \u6559\u7A0B&quot;
   Book2.author = &quot;www.runoob.com&quot;
   Book2.subject = &quot;Python \u8BED\u8A00\u6559\u7A0B&quot;
   Book2.book_id = 6495700

   /* \u6253\u5370 Book1 \u4FE1\u606F */
   fmt.Printf( &quot;Book 1 title : %s\\n&quot;, Book1.title)
   fmt.Printf( &quot;Book 1 author : %s\\n&quot;, Book1.author)
   fmt.Printf( &quot;Book 1 subject : %s\\n&quot;, Book1.subject)
   fmt.Printf( &quot;Book 1 book_id : %d\\n&quot;, Book1.book_id)

   /* \u6253\u5370 Book2 \u4FE1\u606F */
   fmt.Printf( &quot;Book 2 title : %s\\n&quot;, Book2.title)
   fmt.Printf( &quot;Book 2 author : %s\\n&quot;, Book2.author)
   fmt.Printf( &quot;Book 2 subject : %s\\n&quot;, Book2.subject)
   fmt.Printf( &quot;Book 2 book_id : %d\\n&quot;, Book2.book_id)
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
<pre><code class="language-go">/* \u4F7F\u7528 make \u51FD\u6570 */
map_variable := make(map[KeyType]ValueType, initialCapacity)
</code></pre>
<p>\u5B9E\u4F8B</p>
<pre><code class="language-go">// \u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 Map
m := make(map[string]int)
// \u521B\u5EFA\u4E00\u4E2A\u521D\u59CB\u5BB9\u91CF\u4E3A 10 \u7684 Map
m := make(map[string]int, 10)
</code></pre>
<p>\u7ED3\u5408\u5B9E\u4F8B</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

func main() {
    var siteMap map[string]string /*\u521B\u5EFA\u96C6\u5408 */
    siteMap = make(map[string]string)

    /* map \u63D2\u5165 key - value \u5BF9,\u5404\u4E2A\u56FD\u5BB6\u5BF9\u5E94\u7684\u9996\u90FD */
    siteMap [&quot;Google&quot;] = &quot;\u8C37\u6B4C&quot;
    siteMap [&quot;Runoob&quot;] = &quot;\u83DC\u9E1F\u6559\u7A0B&quot;
    siteMap [&quot;Baidu&quot;] = &quot;\u767E\u5EA6&quot;
    siteMap [&quot;Wiki&quot;] = &quot;\u7EF4\u57FA\u767E\u79D1&quot;

    /*\u4F7F\u7528\u952E\u8F93\u51FA\u5730\u56FE\u503C */
    for site := range siteMap {
        fmt.Println(site, &quot;\u9996\u90FD\u662F&quot;, siteMap[site])
    }

    /*\u67E5\u770B\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728 */
    name, ok := siteMap [&quot;Facebook&quot;] /*\u5982\u679C\u786E\u5B9A\u662F\u771F\u5B9E\u7684,\u5219\u5B58\u5728,\u5426\u5219\u4E0D\u5B58\u5728 */
    /*fmt.Println(capital) */
    /*fmt.Println(ok) */
    if (ok) {
        fmt.Println(&quot;Facebook \u7684 \u7AD9\u70B9\u662F&quot;, name)
    } else {
        fmt.Println(&quot;Facebook \u7AD9\u70B9\u4E0D\u5B58\u5728&quot;)
    }
}
</code></pre>
<p>delete()\u51FD\u6570</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

func main() {
        /* \u521B\u5EFAmap */
        countryCapitalMap := map[string]string{&quot;France&quot;: &quot;Paris&quot;, &quot;Italy&quot;: &quot;Rome&quot;, &quot;Japan&quot;: &quot;Tokyo&quot;, &quot;India&quot;: &quot;New delhi&quot;}

        fmt.Println(&quot;\u539F\u59CB\u5730\u56FE&quot;)

        /* \u6253\u5370\u5730\u56FE */
        for country := range countryCapitalMap {
                fmt.Println(country, &quot;\u9996\u90FD\u662F&quot;, countryCapitalMap [ country ])
        }

        /*\u5220\u9664\u5143\u7D20*/ 
        delete(countryCapitalMap, &quot;France&quot;)
        fmt.Println(&quot;\u6CD5\u56FD\u6761\u76EE\u88AB\u5220\u9664&quot;)

        fmt.Println(&quot;\u5220\u9664\u5143\u7D20\u540E\u5730\u56FE&quot;)

        /*\u6253\u5370\u5730\u56FE*/
        for country := range countryCapitalMap {
                fmt.Println(country, &quot;\u9996\u90FD\u662F&quot;, countryCapitalMap[country])
        }
}
</code></pre>
<h4>interface</h4>
<h5>\u63A5\u53E3</h5>
<blockquote>
<p>\u63A5\u53E3\u662FGo\u8BED\u8A00\u4E2D\u6570\u636E\u7C7B\u578B\u7684\u5173\u952E\u3002\u51E0\u4E4E\u6240\u6709\u7684\u6570\u636E\u7ED3\u6784\u90FD\u56F4\u7ED5\u63A5\u53E3\u5C55\u5F00\uFF0C\u63A5\u53E3\u662FGo\u8BED\u8A00\u4E2D\u6240\u6709\u6570\u636E\u7ED3\u6784\u7684\u6838\u5FC3\u3002Go\u8BED\u8A00\u7684\u63A5\u53E3\u5B9E\u9645\u4E0A\u662F\u4E00\u7EC4\u65B9\u6CD5\u7684\u96C6\u5408(\u63A5\u53E3\u4E0D\u80FD\u58F0\u660E\u5C5E\u6027)\u3002</p>
</blockquote>
<pre><code class="language-go">/* \u5B9A\u4E49\u63A5\u53E3 */
type \u63A5\u53E3\u540D interface {
   \u65B9\u6CD51 [\u8FD4\u56DE\u7C7B\u578B]
   \u65B9\u6CD52 [\u8FD4\u56DE\u7C7B\u578B]
   \u65B9\u6CD53 [\u8FD4\u56DE\u7C7B\u578B]
   ...
   \u65B9\u6CD5N [\u8FD4\u56DE\u7C7B\u578B]
}
</code></pre>
<p>\u5B9E\u4F8B1</p>
<pre><code class="language-go">package main
import &quot;fmt&quot;
// \u5B9A\u4E49Animal\u63A5\u53E3
type Animal interface {
    sleep()
}
// \u5B9A\u4E49Dog\u548CCat\u4E24\u4E2A\u7ED3\u6784\u4F53
type Dog struct {
    name string
}
type Cat struct {
    name string
}
// Dog \u5B9E\u73B0\u4E86Animal\u63A5\u53E3
func (d Dog) sleep() {
    fmt.Printf(&quot;%s\u6B63\u5728\u7761\u89C9\\n&quot;, d.name)
}
// Cat\u5B9E\u73B0\u4E86animal\u63A5\u53E3
func (c Cat) sleep() {
    fmt.Printf(&quot;%s\u6B63\u5728\u7761\u89C9\\n&quot;, c.name)
}
// \u63A5\u53E3\u7C7B\u578B\u53D8\u91CF
func foo(ani Animal) {
    ani.sleep()
}
func main() {
    var a Animal
    var d = Dog{&quot;\u5C0F\u9ED1&quot;}
    var c = Cat{&quot;\u5C0F\u82B1&quot;}
    // \u5206\u522B\u5B9E\u73B0\u7684\u65B9\u6CD5
    a = d
    a.sleep()
    a = c
    a.sleep()
    // \u4F5C\u4E3A\u53C2\u6570
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
<pre><code class="language-go">package main

import &quot;fmt&quot;
import &quot;os&quot;

// \u7A7A\u63A5\u53E3\u53C2\u6570
func log(v ...interface{}) {
    fmt.Println(v...)
}

func main() {
    log(&quot;hello&quot;, 1, 3.23)
    // \u7A7A\u63A5\u53E3\u7C7B\u578B
    f,_ := os.Open(&quot;text.txt&quot;)
    var i1 interface{}
    i1 = f
}
</code></pre>
<h4>\u6CDB\u578B</h4>
<blockquote>
<p>\u6CDB\u578B\u662Fgo 1.18\u53CA\u4EE5\u4E0A\u7248\u672C\u7684\u65B0\u7279\u6027\u3002</p>
</blockquote>
<p>\u57FA\u672C\u8BED\u6CD5</p>
<p>\u57FA\u672C\u8BED\u6CD5\u662F\u5728\u51FD\u6570\u540E\u7528\u65B9\u62EC\u53F7\u6307\u5B9A\u6CDB\u578B\u53C2\u6570</p>
<pre><code class="language-go">func \u51FD\u6570\u540D[\u6CDB\u578B\u7C7B\u578B](\u51FD\u6570\u53C2\u6570){\u51FD\u6570\u4F53}
</code></pre>
<p>\u4F8B\u5982</p>
<pre><code class="language-go">func max[T int | float64](a, b T) T {
  if a &gt; b {
    return a
  }
  return b
}
</code></pre>
<p>\u4F8B2</p>
<pre><code class="language-go">type Ord interface {
  byte | int8 | int16 | int32 | int64 | int | float32 | float64 | string
}

func max[T Ord](a, b T) T {
  if a &gt; b {
    return a
  }
  return b
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
<pre><code class="language-go">var (
    myFprintf = func(w io.Writer, format string, a ...interface{}) (int, error) {
        return fmt.Fprintf(w, format, a...)
    }
)

func main() {
    fmt.Printf(&quot;%T\\n&quot;, myFprintf) // func(io.Writer, string, ...interface {}) (int, error)
    myFprintf(os.Stdout, &quot;%s\\n&quot;, &quot;Hello, Go&quot;) // \u8F93\u51FAHello\uFF0CGo
}
</code></pre>
<p>\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u51FD\u6570</p>
<pre><code class="language-go">// \u904D\u5386\u5207\u7247\u7684\u6BCF\u4E2A\u5143\u7D20, \u901A\u8FC7\u7ED9\u5B9A\u51FD\u6570\u8FDB\u884C\u5143\u7D20\u8BBF\u95EE
func visit(list []int, f func(int)) {
    for _, v := range list {
        f(v)
    }
}

func main() {
    // \u4F7F\u7528\u533F\u540D\u51FD\u6570\u6253\u5370\u5207\u7247\u5185\u5BB9
    visit([]int{1, 2, 3, 4}, func(v int) {
        fmt.Println(v)
    })
}
</code></pre>
<p>\u51FD\u6570\u652F\u6301\u5728\u51FD\u6570\u5185\u521B\u5EFA\u5E76\u901A\u8FC7\u8FD4\u56DE\u503C\u8FD4\u56DE</p>
<pre><code class="language-go">func setup(task string) func() {
    println(&quot;do some setup stuff for&quot;, task)
    return func() {
        println(&quot;do some teardown stuff for&quot;, task)
    }
}

func main() {
    teardown := setup(&quot;demo&quot;)
    defer teardown()
    println(&quot;do some bussiness stuff&quot;)
}
</code></pre>
<p>\u62E5\u6709\u81EA\u5DF2\u7684\u7C7B\u578B</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type CalculateType func(int, int)

func (c *CalculateType) Server() {
    fmt.Println(&quot;\u8FD9\u662F\u51FD\u6570\u7C7B\u578B&quot;)
}

func add(a, b int) {
    fmt.Println(a + b)
}

func mul(a, b int) {
    fmt.Println(a * b)
}

func main() {
    a := CalculateType(add)
    b := CalculateType(mul)

    a(2, 4)
    b(2, 4)

    a.Server()
    b.Server()
}
</code></pre>
<p>\u9AD8\u9636\u51FD\u6570</p>
<p>\u51FD\u6570\u4F5C\u4E3A\u503C\u65F6\uFF0C\u53EF\u4EE5\u7528\u6765\u63D0\u5347\u670D\u52A1\u7684\u6269\u5C55\u6027\u3002</p>
<pre><code class="language-go">var opMap = map[string]func(int, int) int{
    &quot;+&quot;: add,
    &quot;-&quot;: sub,
    &quot;*&quot;: mul,
    &quot;/&quot;: div,
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
<pre><code class="language-go">import &quot;./module&quot; // \u5F15\u5165\u7684\u5305\u5728\u5F53\u524D\u6587\u4EF6\u540C\u4E00\u76EE\u5F55\u7684 module \u76EE\u5F55
</code></pre>
<ol start="2">
<li>\u7EDD\u5BF9\u8DEF\u5F84</li>
</ol>
<pre><code class="language-go">import &quot;LearnGo/init&quot; // \u5F15\u5165\u7684\u5305\u5728 gopath/src/LearnGo/init \u76EE\u5F55\u3002
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
<pre><code class="language-go">import . &quot;fmt&quot;
// \u4F8B\u5982\uFF1Afmt.Println(&quot;hello world&quot;) \u53EF\u4EE5\u7701\u7565\u7684\u5199\u6210 Println(&quot;hello world&quot;)\u3002
</code></pre>
<p>\u7279\u522B\u8BF4\u660E\uFF0C\u56E0\u4E3A.\u5BFC\u5165\u5BB9\u6613\u9020\u6210\u547D\u540D\u51B2\u7A81\uFF0C\u4E00\u822C\u5F88\u5C11\u7528\uFF0C<code>.</code> \u5BFC\u5165\u4F1A\u6709\u4E00\u4E2A\u8B66\u544Ashould not use dot imports (ST1001)go-staticcheck</p>
<ul>
<li>\u522B\u540D\u64CD\u4F5C</li>
</ul>
<p>\u522B\u540D\u64CD\u4F5C\u53EF\u4EE5\u5305\u547D\u540D\u6210\u53E6\u4E00\u4E2A\u540D\u5B57</p>
<pre><code class="language-go">import f &quot;fmt&quot;
// \u522B\u540D\u64CD\u4F5C\u7684\u8BDD\u8C03\u7528\u5305\u51FD\u6570\u65F6\u524D\u7F00\u53D8\u6210\u4E86\u6211\u4EEC\u7684\u524D\u7F00\uFF0C\u5373 f.Println(&quot;hello world&quot;)\u3002
</code></pre>
<ul>
<li><code>_</code>\u64CD\u4F5C</li>
</ul>
<p><code>_</code>\u64CD\u4F5C\u662F\u5F15\u5165\u8BE5\u5305\uFF0C\u8C03\u7528\u8BE5\u5305\u91CC\u7684init\u51FD\u6570\u3002\u800C\u4E0D\u76F4\u63A5\u4F7F\u7528\u5305\u91CC\u9762\u7684\u51FD\u6570\u3002</p>
<pre><code class="language-go">import _ &quot;github.com/go-sql-driver/mysql&quot;
// _\u64CD\u4F5C\u5176\u5B9E\u662F\u5F15\u5165\u8BE5\u5305\uFF0C\u800C\u4E0D\u76F4\u63A5\u4F7F\u7528\u5305\u91CC\u9762\u7684\u51FD\u6570\uFF0C\u800C\u662F\u8C03\u7528\u4E86\u8BE5\u5305\u91CC\u9762\u7684 init \u51FD\u6570\u3002
</code></pre>
<h3>init\u51FD\u6570</h3>
<blockquote>
<p>Go init\u51FD\u6570\u662F\u4E00\u79CD\u7279\u6B8A\u51FD\u6570\uFF0C\u7528\u4E8E\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\u81EA\u52A8\u6267\u884C\u4E00\u6B21\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B8C\u6210\u7A0B\u5E8F\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u5982\u521D\u59CB\u5316\u6570\u636E\u7684\u8FDE\u63A5\u3001\u8F7D\u5165\u672C\u5730\u914D\u7F6E\u6587\u4EF6\u7B49\uFF0C\u6BCF\u4E2A\u5305\u53EF\u4EE5\u5305\u542B\u591A\u4E2Ainit\u51FD\u6570\uFF0C\u6240\u6709\u7684init\u51FD\u6570\u90FD\u5728main\u51FD\u6570\u6267\u884C\u524D\u88AB\u8C03\u7528\u3002</p>
</blockquote>
<p>init\u51FD\u6570\u4E0E\u5305\u7EA7\u53D8\u91CF\u7684\u521D\u59CB\u5316\u987A\u5E8F\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<p><img src="./img/go-init.png" alt="init\u51FD\u6570\u6267\u884C\u987A\u5E8F"></p>
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
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;io&quot;
    &quot;net/http&quot;
    &quot;os&quot;

    &quot;github.com/gin-gonic/gin&quot;
)

func main() {
    file, err := os.Open(&quot;./demo.log&quot;)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()
    var content []byte
    // \u5FAA\u73AF\u8BFB\u53D6\u5168\u90E8\u5185\u5BB9
    for {
        // \u521B\u5EFA\u5207\u7247\u4FDD\u5B58\u5B57\u8282
        var temStr = make([]byte, 128)
        //\u4F7F\u7528file.Read\u8BFB\u53D6\u5185\u5BB9
        len, err := file.Read(temStr)
        // \u8BFB\u53D6\u5B8C\u6BD5
        if err == io.EOF {
            break
        } else {
            content = append(content, temStr[:len]...)
        }
    }
    fmt.Println(string(content))
}
</code></pre>
<p><strong>\u65B9\u6CD5\u4E8C\uFF1A\u901A\u8FC7bufio\u65B9\u5F0F\uFF0C\u9010\u884C\u8BFB\u53D6</strong></p>
<pre><code class="language-go">package main

import (
    &quot;bufio&quot;
    &quot;fmt&quot;
    &quot;io&quot;
    &quot;net/http&quot;
    &quot;os&quot;

    &quot;github.com/gin-gonic/gin&quot;
)

func main() {
    f, err := os.Open(&quot;demo.log&quot;)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer f.Close()
    reader := bufio.NewReader(f)
    var content string
    for {
        // \u4E00\u6B21\u8BFB\u53D6\u4E00\u884C
        str, err := reader.ReadString('\\n')
        if err == io.EOF {
            // \u62FC\u63A5\u6700\u540E\u4E00\u884C
            content += str
            // \u8DF3\u51FA\u5F53\u524D\u5FAA\u73AF
            break
        } else {
            // \u62FC\u63A5\u5176\u4ED6\u884C
            content += str
        }
    }
    fmt.Println(content)
}
</code></pre>
<p><strong>\u65B9\u6CD5\u4E09\uFF1A\u901A\u8FC7os.ReadFile\u76F4\u63A5\u8BFB\u53D6\u6574\u4E2A\u6587\u4EF6\u5185\u5BB9(ioutil\u5305\u57281.16\u4E4B\u540E\u5DF2\u5F03\u7528)</strong></p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;net/http&quot;
    &quot;os&quot;

    &quot;github.com/gin-gonic/gin&quot;
)

func main() {
    msg, err := os.ReadFile(&quot;demo.log&quot;)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(msg)
}
</code></pre>
<h4>\u6587\u4EF6\u5199\u5165</h4>
<p>\u5199\u6587\u4EF6\uFF0C\u5148\u901A\u8FC7os.OpenFile\u6587\u4EF6\u53E5\u67C4\uFF0C\u7136\u540E\u518D\u901A\u8FC7bufio.NewWriter\u4EE5\u53CAWriteString\u6765\u5199\u5165\u5B57\u7B26\u4E32\uFF0C\u8BE6\u7EC6\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">package main

import (
    &quot;bufio&quot;
    &quot;fmt&quot;
    &quot;net/http&quot;
    &quot;os&quot;

    &quot;github.com/gin-gonic/gin&quot;
)

func main() {
    pf, err := os.OpenFile(&quot;demo.log&quot;, os.O_WRONLY|os.O_CREATE, 0666)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer pf.Close()

    outWriter := bufio.NewWriter(pf)
    outString := &quot;hello world!\\n&quot;

    for i := 0; i &lt; 10; i++ {
        outWriter.WriteString(outString)
    }
    outWriter.Flush()
}
</code></pre>
<p>\u4EE5\u4E0A\u662F\u9010\u884C\u5199\u5165\uFF0C\u4E5F\u53EF\u4E00\u6B21\u5199\u5165\uFF0C\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;net/http&quot;
    &quot;os&quot;

    &quot;github.com/gin-gonic/gin&quot;
)

func main(c *gin.Context) {
    f, err := os.OpenFile(&quot;demo.log&quot;, os.O_WRONLY|os.O_CREATE, 0666)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer f.Close()
    f.Write([]byte(&quot;hello go lang&quot;))
    c.String(http.StatusOK, &quot;hello golang&quot;)
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
<pre><code class="language-go">package main
import (
        &quot;fmt&quot;
)

func Say(msg string) {
        fmt.Println(msg)
}
func main() {
        go Say(&quot;func say : hello world!!!&quot;)
        fmt.Println(&quot;main say : hello world&quot;)
}
</code></pre>
<p>\u6267\u884Cgo run main.go\u540E\uFF0C\u53D1\u73B0\u8F93\u51FA\u53EA\u6709main say: hello world,\u800C\u6CA1\u6709Say\u51FD\u6570\u7684\u8F93\u51FA\u3002</p>
<p>\u539F\u56E0\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u4E3B\u51FD\u6570main\u9996\u5148\u6267\u884C\u5B8C\u5E76\u8FD4\u56DEreturn\u4E86\uFF0C\u800Cgo Say(&quot;func say : hello world!!!&quot;)\u9700\u8981\u4E3A\u534F\u7A0B\u521D\u59CB\u5316\u6D88\u8017\u4E00\u4E9B\u65F6\u95F4\uFF0C\u56E0\u4E3A\u665A\u4E8Emain\u7684return\uFF0C\u56E0\u4E3A\u5C31\u6CA1\u6709\u8F93\u51FA\u6253\u5370\u3002</p>
<p>\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0B\u7A0B\u5E8F</p>
<pre><code class="language-go">package main
import (
        &quot;fmt&quot;
        &quot;time&quot;
)
func Say(msg string) {
        fmt.Println(msg)
}


func main() {
        go Say(&quot;func say : hello world!!!&quot;)
        fmt.Println(&quot;main say : hello world&quot;)
        time.Sleep(time.Second * 3) //\u8BA9\u4E3B\u7A0B\u5E8F\u4F11\u77203\u79D2
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
<pre><code class="language-go">package main
import (
    &quot;fmt&quot;
    &quot;sync&quot;
)
// \u5E76\u53D1\u63A7\u5236
var wg sync.WaitGroup
// \u534F\u7A0B\u51FD\u6570
func Say(msg string) {
    defer wg.Done() // \u8BA1\u6570\u5668\u51CF1
    fmt.Println(msg)
}
func main() {
    for i := 0; i &lt; 10; i++ {
        wg.Add(1)                                          // \u8BA1\u6570\u5668\u52A01
        go Say(fmt.Sprintf(&quot;func %d say: hello world&quot;, i)) // \u542F\u52A8\u534F\u7A0B
    }
    wg.Wait() // \u7B49\u5F85\u534F\u7A0B\u5B8C\u6210
    fmt.Println(&quot;main say: hello world&quot;)
}
</code></pre>
<h4>channel(\u4FE1\u9053)</h4>
<p>Go\u8BED\u8A00\u4E2D\u7684\u901A\u9053(channel)\u662F\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u3002\u901A\u9053\u50CF\u4E00\u4E2A\u4F20\u9012\u5E26\u6216\u8005\u961F\u5217\uFF0C\u603B\u662F\u9075\u5FAA\u5148\u5165\u5148\u51FA\u7684\u89C4\u5219\uFF0C\u4FDD\u8BC1\u6536\u53D1\u6570\u636E\u7684\u987A\u5E8F\u3002channel\u8DDFLinux\u4E2D\u7684\u53CC\u5411\u7BA1\u9053\u5F88\u50CF\uFF0C\u4E5F\u662F\u7528\u4E8E\u8FDB\u7A0B\u548C\u534F\u7A0B\u95F4\u901A\u4FE1\u3002</p>
<p>channel\u7684\u5B9A\u4E49\u6253\u5F00\u3001\u53D1\u9001\u3001\u63A5\u6536\u3001\u5173\u95ED</p>
<pre><code class="language-go">chan T          // \u53EF\u4EE5\u63A5\u6536\u548C\u53D1\u9001\u7C7B\u578B\u4E3A T \u7684\u6570\u636E
chan&lt;- float64  // \u53EA\u53EF\u4EE5\u7528\u6765\u53D1\u9001 float64 \u7C7B\u578B\u7684\u6570\u636E
&lt;-chan int      // \u53EA\u53EF\u4EE5\u7528\u6765\u63A5\u6536 int \u7C7B\u578B\u7684\u6570\u636E

ch1 := make(chan int, 10) // \u5B9A\u4E49channel\uFF0C\u91CC\u9762\u53EF\u4EE5\u585E\u7684\u6570\u636E\u7ED3\u6784\u662Fint\uFF0C\u7F13\u51B2\u957F\u5EA6\u4E3A10
ch2 := make(chan []int) // \u5B9A\u4E49channel\uFF0C\u91CC\u9762\u53EF\u4EE5\u585E\u7684\u6570\u636E\u7ED3\u6784\u662F[]int\uFF0C\u7F13\u51B2\u957F\u5EA6\u4E3A0\uFF08\u4E5F\u5C31\u662F\u65E0\u7F13\u51B2channel\uFF09\uFF0C\u5F80\u91CC\u9762\u53D1\u4E86\u6570\u636E\uFF0C\u4F1A\u963B\u585E\u76F4\u5230\u6570\u636E\u88AB\u63A5\u6536


ch1 &lt;- 10  //\u53D1\u9001\u4E00\u4E2A\u6570\u636E
x := &lt;- ch1  // \u63A5\u6536\u4E00\u4E2A\u6570\u636E

close(ch1) // \u5173\u95EDchannel
</code></pre>
<p>\u4FE1\u9053\u5B9E\u4F8B\uFF1A</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;time&quot;
)

var msgChan = make(chan string) //\u58F0\u660E\u5E76\u521D\u59CB\u5316\u4E00\u4E2A\u957F\u5EA6\u4E3A0\u7684\u4FE1\u9053,\u65E0\u7F13\u51B2\u901A\u9053

func Say(msg string) {
    // fmt.Println(msg)
    msgChan &lt;- msg // \u5C06msg\u5B57\u7B26\u63A8\u7ED9msgChan\u4FE1\u9053
}

func main() {
    for i := 0; i &lt; 1000; i++ {
        go Say(fmt.Sprintf(&quot;func %d say: hello world!!!&quot;, i))
        msg := &lt;-msgChan //\u5C06\u4FE1\u9053\u91CC\u7684\u5185\u5BB9\uFF0C\u8D4B\u503C\u7ED9msg
        fmt.Println(&quot;Channel&quot;, msg)
    }
    fmt.Println(&quot;main say: hello world&quot;)
}
</code></pre>
<h4>Context</h4>
<blockquote>
<p>Context\u662FGo1.7\u5F15\u5165\u5230\u6807\u51C6\u5E93\u7684\uFF0C\u51C6\u786E\u8BF4\u5B83\u662Fgoroutine\u7684\u4E0A\u4E0B\u6587\uFF0C\u5305\u542Bgoroutine\u7684\u8FD0\u884C\u72B6\u6001\u3001\u73AF\u5883\u3001\u73B0\u573A\u7B49\u4FE1\u606F\u3002Context\u4E3B\u8981\u7528\u6765\u5728goroutine\u4E4B\u95F4\u4F20\u9012\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002Context\u51E0\u4E4E\u6210\u4E3A\u4E86\u5E76\u53D1\u63A7\u5236\u548C\u8D85\u65F6\u63A7\u5236\u7684\u6807\u51C6\u505A\u6CD5\u3002</p>
</blockquote>
<p>Context\u63A5\u53E3\u5B9A\u4E49\u5982\u4E0B\uFF1A</p>
<pre><code class="language-go">type Context interface {
    Deadline() (deadline time.Time, ok bool)
    Done() &lt;-chan struct{}
    Err() error
    Value(key interface{}) interface{}
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
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;time&quot;
)

func main() {
    c := make(chan bool) //\u5B9A\u4E49\u4FE1\u9053

    go func() {
        for {
            select {
            case &lt;-c:
                fmt.Println(&quot;\u76D1\u63A7\u9000\u51FA\uFF0C\u505C\u6B62\u4E86&quot;)
                return
            default:
                fmt.Println(&quot;\u76D1\u63A7\u5B50\u534F\u7A0B\u4E2D...&quot;)
                time.Sleep(2 * time.Second)
            }
        }
    }()

    time.Sleep(10 * time.Second)
    fmt.Println(&quot;\u901A\u77E5\u76D1\u63A7\u505C\u6B62&quot;)
    c &lt;- true
    time.Sleep(5 * time.Second) // \u4E3A\u4E86\u68C0\u6D4B\u76D1\u63A7\u662F\u5426\u505C\u6B62\uFF0C\u5982\u679C\u6CA1\u6709\u76D1\u63A7\u8F93\u51FA\uFF0C\u5C31\u8868\u793A\u505C\u6B62\u4E86
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
<pre><code class="language-shell">go install github.com/cosmtrek/air@latest
</code></pre>
<p>macOS/linux\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</p>
<p>\u5982\u6DFB\u52A0\u5230~/.zshrc</p>
<pre><code class="language-shell">export PATH=$PATH:$(go env GOPATH)/bin
</code></pre>
<h4>\u6D4B\u8BD5</h4>
<p>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\u6839\u76EE\u5F55</p>
<pre><code class="language-shell">air -v
</code></pre>
<h4>\u4F7F\u7528Air</h4>
<p>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\u6839\u76EE\u5F55</p>
<p>\u521D\u59CB\u5316\u9ED8\u8BA4\u914D\u7F6E\u5230\u5F53\u524D\u8DEF\u5F84\u4E0B\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210.air.toml\u6587\u4EF6\u5230\u9879\u76EE\u6839\u76EE\u5F55\u4E0B</p>
<pre><code class="language-shell">air init
</code></pre>
<p>\u4E4B\u540E\u5F00\u53D1\u65F6\uFF0C\u53EA\u9700\u8981\u6267\u884Cair\u547D\u4EE4\uFF0C\u5373\u53EF\u5B9E\u73B0\u70ED\u91CD\u66F4\u529F\u80FD\u3002</p>
<pre><code class="language-shell">air
</code></pre>
<h4>\u914D\u7F6E\u6587\u4EF6(.air.toml)\u8BF4\u660E</h4>
<pre><code class="language-toml"># \u6839\u76EE\u5F55
root = &quot;.&quot;
testdata_dir = &quot;testdata&quot;
# \u4E34\u65F6\u6587\u4EF6\u76EE\u5F55
tmp_dir = &quot;tmp&quot;

[build]
# \u8FD0\u884C\u65F6\u53C2\u6570
args_bin = []
# \u7F16\u8BD1\u6587\u4EF6\u4F4D\u7F6E
bin = &quot;tmp\\\\main.exe&quot;
# \u7F16\u8BD1\u547D\u4EE4
cmd = &quot;go build -o ./tmp/main.exe .&quot;
delay = 0
# \u6392\u9664\u76EE\u5F55
exclude_dir = [&quot;assets&quot;, &quot;tmp&quot;, &quot;vendor&quot;, &quot;testdata&quot;]
# \u6392\u9664\u6587\u4EF6
exclude_file = []
# \u6392\u9664\u7279\u5B9A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
exclude_regex = [&quot;_test.go&quot;]
exclude_unchanged = false
follow_symlink = false
full_bin = &quot;&quot;
# \u89C2\u5BDF\u76EE\u5F55
include_dir = []
# \u89C2\u5BDF\u6587\u4EF6\u6269\u5C55\u540D
include_ext = [&quot;go&quot;, &quot;tpl&quot;, &quot;tmpl&quot;, &quot;html&quot;]
# \u89C2\u5BDF\u6587\u4EF6
include_file = []
kill_delay = &quot;0s&quot;
log = &quot;build-errors.log&quot;
poll = false
poll_interval = 0
rerun = false
rerun_delay = 500
send_interrupt = false
# \u9519\u8BEF\u65F6\u505C\u6B62\u76D1\u6D4B
stop_on_error = false
</code></pre>
`}};(0,mf.hydrateRoot)(document.getElementById("root"),ff.default.createElement(pf,{...Og}));})();
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
