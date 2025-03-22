(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2298:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6986,23)),Promise.resolve().then(r.t.bind(r,6874,23))},2757:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return l},urlObjectKeys:function(){return i}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",i=e.pathname||"",l=e.hash||"",a=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:r&&(f=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(f+=":"+e.port)),a&&"object"==typeof a&&(a=String(n.urlQueryToSearchParams(a)));let s=e.search||a&&"?"+a||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==f?(f="//"+(f||""),i&&"/"!==i[0]&&(i="/"+i)):f||(f=""),l&&"#"!==l[0]&&(l="#"+l),s&&"?"!==s[0]&&(s="?"+s),""+u+f+(i=i.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},6654:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=u(e,n)),t&&(o.current=u(t,n))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8229),o=r(5155),u=n._(r(2115)),i=r(2757),l=r(5227),a=r(9818),f=r(6654),s=r(9991),c=r(5929);r(3230);let p=r(4930);function d(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let h=u.default.forwardRef(function(e,t){let r,n;let{href:i,as:h,children:y,prefetch:g=null,passHref:m,replace:b,shallow:P,scroll:E,onClick:_,onMouseEnter:v,onTouchStart:O,legacyBehavior:j=!1,...C}=e;r=y,j&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let N=u.default.useContext(l.AppRouterContext),T=!1!==g,S=null===g?a.PrefetchKind.AUTO:a.PrefetchKind.FULL,{href:M,as:x}=u.default.useMemo(()=>{let e=d(i);return{href:e,as:h?d(h):e}},[i,h]);j&&(n=u.default.Children.only(r));let k=j?n&&"object"==typeof n&&n.ref:t,A=u.default.useCallback(e=>(T&&null!==N&&(0,p.mountLinkInstance)(e,M,N,S),()=>{(0,p.unmountLinkInstance)(e)}),[T,M,N,S]),w={ref:(0,f.useMergedRef)(A,k),onClick(e){j||"function"!=typeof _||_(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&!function(e,t,r,n,o,i,l){let{nodeName:a}=e.currentTarget;!("A"===a.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),u.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,N,M,x,b,P,E)},onMouseEnter(e){j||"function"!=typeof v||v(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&T&&(0,p.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){j||"function"!=typeof O||O(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&T&&(0,p.onNavigationIntent)(e.currentTarget)}};return(0,s.isAbsoluteUrl)(x)?w.href=x:j&&!m&&("a"!==n.type||"href"in n.props)||(w.href=(0,c.addBasePath)(x)),j?u.default.cloneElement(n,w):(0,o.jsx)("a",{...C,...w,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6986:()=>{},8859:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return m},NormalizeError:function(){return y},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return a},getLocationOrigin:function(){return i},getURL:function(){return l},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return s},stringifyError:function(){return P}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function l(){let{href:e}=window.location,t=i();return e.substring(t.length)}function a(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function s(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error('"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67,441,684,358],()=>t(2298)),_N_E=e.O()}]);