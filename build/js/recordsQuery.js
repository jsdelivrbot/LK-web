/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/**
 * @preserve jQuery DateTimePicker plugin v2.4.5
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * (c) 2014, Chupurnov Valeriy.
 */
/*global document,window,jQuery,setTimeout,clearTimeout,HighlightedDate,getCurrentValue*/
(function ($) {
	'use strict';
	var default_options  = {
		i18n: {
			ar: { // Arabic
				months: [
					"كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
				],
				dayOfWeek: [
					"ن", "ث", "ع", "خ", "ج", "س", "ح"
				]
			},
			ro: { // Romanian
				months: [
					"ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"
				],
				dayOfWeek: [
					"l", "ma", "mi", "j", "v", "s", "d"
				]
			},
			id: { // Indonesian
				months: [
					"Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
				],
				dayOfWeek: [
					"Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"
				]
			},
			is: { // Icelandic
				months: [
					"Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"
				],
				dayOfWeek: [
					"Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"
				]
			},
			bg: { // Bulgarian
				months: [
					"Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
				],
				dayOfWeek: [
					"Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				]
			},
			fa: { // Persian/Farsi
				months: [
					'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
				],
				dayOfWeek: [
					'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
				]
			},
			ru: { // Russian
				months: [
					'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
				],
				dayOfWeek: [
					"Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				]
			},
			uk: { // Ukrainian
				months: [
					'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
				],
				dayOfWeek: [
					"Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"
				]
			},
			en: { // English
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeek: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				]
			},
			el: { // Ελληνικά
				months: [
					"Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
				],
				dayOfWeek: [
					"Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
				]
			},
			de: { // German
				months: [
					'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
				],
				dayOfWeek: [
					"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
				]
			},
			nl: { // Dutch
				months: [
					"januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
				],
				dayOfWeek: [
					"zo", "ma", "di", "wo", "do", "vr", "za"
				]
			},
			tr: { // Turkish
				months: [
					"Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
				],
				dayOfWeek: [
					"Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
				]
			},
			fr: { //French
				months: [
					"Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
				],
				dayOfWeek: [
					"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
				]
			},
			es: { // Spanish
				months: [
					"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
				]
			},
			th: { // Thai
				months: [
					'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
				],
				dayOfWeek: [
					'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
				]
			},
			pl: { // Polish
				months: [
					"styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
				],
				dayOfWeek: [
					"nd", "pn", "wt", "śr", "cz", "pt", "sb"
				]
			},
			pt: { // Portuguese
				months: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeek: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
				]
			},
			ch: { // Simplified Chinese
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeek: [
					"日", "一", "二", "三", "四", "五", "六"
				]
			},
			se: { // Swedish
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",  "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
				]
			},
			kr: { // Korean
				months: [
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				dayOfWeek: [
					"일", "월", "화", "수", "목", "금", "토"
				]
			},
			it: { // Italian
				months: [
					"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
				]
			},
			da: { // Dansk
				months: [
					"January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
				]
			},
			no: { // Norwegian
				months: [
					"Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
				],
				dayOfWeek: [
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
				]
			},
			ja: { // Japanese
				months: [
					"1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
				],
				dayOfWeek: [
					"日", "月", "火", "水", "木", "金", "土"
				]
			},
			vi: { // Vietnamese
				months: [
					"Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
				],
				dayOfWeek: [
					"CN", "T2", "T3", "T4", "T5", "T6", "T7"
				]
			},
			sl: { // Slovenščina
				months: [
					"Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
				]
			},
			cs: { // Čeština
				months: [
					"Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
				],
				dayOfWeek: [
					"Ne", "Po", "Út", "St", "Čt", "Pá", "So"
				]
			},
			hu: { // Hungarian
				months: [
					"Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
				],
				dayOfWeek: [
					"Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"
				]
			},
			az: { //Azerbaijanian (Azeri)
				months: [
					"Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
				],
				dayOfWeek: [
					"B", "Be", "Ça", "Ç", "Ca", "C", "Ş"
				]
			},
			bs: { //Bosanski
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeek: [
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
				]
			},
			ca: { //Català
				months: [
					"Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
				],
				dayOfWeek: [
					"Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
				]
			},
			'en-GB': { //English (British)
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeek: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				]
			},
			et: { //"Eesti"
				months: [
					"Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
				],
				dayOfWeek: [
					"P", "E", "T", "K", "N", "R", "L"
				]
			},
			eu: { //Euskara
				months: [
					"Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
				],
				dayOfWeek: [
					"Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
				]
			},
			fi: { //Finnish (Suomi)
				months: [
					"Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
				],
				dayOfWeek: [
					"Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
				]
			},
			gl: { //Galego
				months: [
					"Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
				]
			},
			hr: { //Hrvatski
				months: [
					"Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
				],
				dayOfWeek: [
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
				]
			},
			ko: { //Korean (한국어)
				months: [
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				dayOfWeek: [
					"일", "월", "화", "수", "목", "금", "토"
				]
			},
			lt: { //Lithuanian (lietuvių)
				months: [
					"Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
				],
				dayOfWeek: [
					"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"
				]
			},
			lv: { //Latvian (Latviešu)
				months: [
					"Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
				],
				dayOfWeek: [
					"Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
				]
			},
			mk: { //Macedonian (Македонски)
				months: [
					"јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
				],
				dayOfWeek: [
					"нед", "пон", "вто", "сре", "чет", "пет", "саб"
				]
			},
			mn: { //Mongolian (Монгол)
				months: [
					"1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
				],
				dayOfWeek: [
					"Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"
				]
			},
			'pt-BR': { //Português(Brasil)
				months: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeek: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
				]
			},
			sk: { //Slovenčina
				months: [
					"Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
				],
				dayOfWeek: [
					"Ne", "Po", "Ut", "St", "Št", "Pi", "So"
				]
			},
			sq: { //Albanian (Shqip)
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeek: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				]
			},
			'sr-YU': { //Serbian (Srpski)
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeek: [
					"Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"
				]
			},
			sr: { //Serbian Cyrillic (Српски)
				months: [
					"јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
				],
				dayOfWeek: [
					"нед", "пон", "уто", "сре", "чет", "пет", "суб"
				]
			},
			sv: { //Svenska
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
				]
			},
			'zh-TW': { //Traditional Chinese (繁體中文)
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeek: [
					"日", "一", "二", "三", "四", "五", "六"
				]
			},
			zh: { //Simplified Chinese (简体中文)
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeek: [
					"日", "一", "二", "三", "四", "五", "六"
				]
			},
			he: { //Hebrew (עברית)
				months: [
					'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
				],
				dayOfWeek: [
					'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
				]
			},
			hy: { // Armenian
				months: [
					"Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
				],
				dayOfWeek: [
					"Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"
				]
			},
            kg: { // Kyrgyz
                months: [
                    'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
                ],
                dayOfWeek: [
                    "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"
                ]
            }
		},
		value: '',
		lang: 'en',

		format:	'Y/m/d H:i',
		formatTime:	'H:i',
		formatDate:	'Y/m/d',

		startDate:	false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
		step: 60,
		monthChangeSpinner: true,

		closeOnDateSelect: false,
		closeOnTimeSelect: true,
		closeOnWithoutClick: true,
		closeOnInputClick: true,

		timepicker: true,
		datepicker: true,
		weeks: false,

		defaultTime: false,	// use formatTime format (ex. '10:00' for formatTime:	'H:i')
		defaultDate: false,	// use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

		minDate: false,
		maxDate: false,
		minTime: false,
		maxTime: false,
		disabledMinTime: false,
		disabledMaxTime: false,

		allowTimes: [],
		opened: false,
		initTime: true,
		inline: false,
		theme: '',

		onSelectDate: function () {},
		onSelectTime: function () {},
		onChangeMonth: function () {},
		onChangeYear: function () {},
		onChangeDateTime: function () {},
		onShow: function () {},
		onClose: function () {},
		onGenerate: function () {},

		withoutCopyright: true,
		inverseButton: false,
		hours12: false,
		next: 'xdsoft_next',
		prev : 'xdsoft_prev',
		dayOfWeekStart: 0,
		parentID: 'body',
		timeHeightInTimePicker: 25,
		timepickerScrollbar: true,
		todayButton: true,
		prevButton: true,
		nextButton: true,
		defaultSelect: true,

		scrollMonth: true,
		scrollTime: true,
		scrollInput: true,

		lazyInit: false,
		mask: false,
		validateOnBlur: true,
		allowBlank: true,
		yearStart: 1950,
		yearEnd: 2050,
		monthStart: 0,
		monthEnd: 11,
		style: '',
		id: '',
		fixed: false,
		roundTime: 'round', // ceil, floor
		className: '',
		weekends: [],
		highlightedDates: [],
		highlightedPeriods: [],
		disabledDates : [],
		disabledWeekDays: [],
		yearOffset: 0,
		beforeShowDay: null,

		enterLikeTab: true,
        showApplyButton: false
	};
	// fix for ie8
	if (!window.getComputedStyle) {
		window.getComputedStyle = function (el, pseudo) {
			this.el = el;
			this.getPropertyValue = function (prop) {
				var re = /(\-([a-z]){1})/g;
				if (prop === 'float') {
					prop = 'styleFloat';
				}
				if (re.test(prop)) {
					prop = prop.replace(re, function (a, b, c) {
						return c.toUpperCase();
					});
				}
				return el.currentStyle[prop] || null;
			};
			return this;
		};
	}
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (obj, start) {
			var i, j;
			for (i = (start || 0), j = this.length; i < j; i += 1) {
				if (this[i] === obj) { return i; }
			}
			return -1;
		};
	}
	Date.prototype.countDaysInMonth = function () {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
	};
	$.fn.xdsoftScroller = function (percent) {
		return this.each(function () {
			var timeboxparent = $(this),
				pointerEventToXY = function (e) {
					var out = {x: 0, y: 0},
						touch;
					if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
						touch  = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						out.x = touch.clientX;
						out.y = touch.clientY;
					} else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
						out.x = e.clientX;
						out.y = e.clientY;
					}
					return out;
				},
				move = 0,
				timebox,
				parentHeight,
				height,
				scrollbar,
				scroller,
				maximumOffset = 100,
				start = false,
				startY = 0,
				startTop = 0,
				h1 = 0,
				touchStart = false,
				startTopScroll = 0,
				calcOffset = function () {};
			if (percent === 'hide') {
				timeboxparent.find('.xdsoft_scrollbar').hide();
				return;
			}
			if (!$(this).hasClass('xdsoft_scroller_box')) {
				timebox = timeboxparent.children().eq(0);
				parentHeight = timeboxparent[0].clientHeight;
				height = timebox[0].offsetHeight;
				scrollbar = $('<div class="xdsoft_scrollbar"></div>');
				scroller = $('<div class="xdsoft_scroller"></div>');
				scrollbar.append(scroller);

				timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
				calcOffset = function calcOffset(event) {
					var offset = pointerEventToXY(event).y - startY + startTopScroll;
					if (offset < 0) {
						offset = 0;
					}
					if (offset + scroller[0].offsetHeight > h1) {
						offset = h1 - scroller[0].offsetHeight;
					}
					timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
				};

				scroller
					.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
						}

						startY = pointerEventToXY(event).y;
						startTopScroll = parseInt(scroller.css('margin-top'), 10);
						h1 = scrollbar[0].offsetHeight;

						if (event.type === 'mousedown') {
							if (document) {
								$(document.body).addClass('xdsoft_noselect');
							}
							$([document.body, window]).on('mouseup.xdsoft_scroller', function arguments_callee() {
								$([document.body, window]).off('mouseup.xdsoft_scroller', arguments_callee)
									.off('mousemove.xdsoft_scroller', calcOffset)
									.removeClass('xdsoft_noselect');
							});
							$(document.body).on('mousemove.xdsoft_scroller', calcOffset);
						} else {
							touchStart = true;
							event.stopPropagation();
							event.preventDefault();
						}
					})
					.on('touchmove', function (event) {
						if (touchStart) {
							event.preventDefault();
							calcOffset(event);
						}
					})
					.on('touchend touchcancel', function (event) {
						touchStart =  false;
						startTopScroll = 0;
					});

				timeboxparent
					.on('scroll_element.xdsoft_scroller', function (event, percentage) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
						}
						percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;

						scroller.css('margin-top', maximumOffset * percentage);

						setTimeout(function () {
							timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
						}, 10);
					})
					.on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
						var percent, sh;
						parentHeight = timeboxparent[0].clientHeight;
						height = timebox[0].offsetHeight;
						percent = parentHeight / height;
						sh = percent * scrollbar[0].offsetHeight;
						if (percent > 1) {
							scroller.hide();
						} else {
							scroller.show();
							scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
							maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
							if (noTriggerScroll !== true) {
								timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
							}
						}
					});

				timeboxparent.on('mousewheel', function (event) {
					var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

					top = top - (event.deltaY * 20);
					if (top < 0) {
						top = 0;
					}

					timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
					event.stopPropagation();
					return false;
				});

				timeboxparent.on('touchstart', function (event) {
					start = pointerEventToXY(event);
					startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
				});

				timeboxparent.on('touchmove', function (event) {
					if (start) {
						event.preventDefault();
						var coord = pointerEventToXY(event);
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
					}
				});

				timeboxparent.on('touchend touchcancel', function (event) {
					start = false;
					startTop = 0;
				});
			}
			timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
		});
	};

	$.fn.datetimepicker = function (opt) {
		var KEY0 = 48,
			KEY9 = 57,
			_KEY0 = 96,
			_KEY9 = 105,
			CTRLKEY = 17,
			DEL = 46,
			ENTER = 13,
			ESC = 27,
			BACKSPACE = 8,
			ARROWLEFT = 37,
			ARROWUP = 38,
			ARROWRIGHT = 39,
			ARROWDOWN = 40,
			TAB = 9,
			F5 = 116,
			AKEY = 65,
			CKEY = 67,
			VKEY = 86,
			ZKEY = 90,
			YKEY = 89,
			ctrlDown	=	false,
			options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),

			lazyInitTimer = 0,
			createDateTimePicker,
			destroyDateTimePicker,

			lazyInit = function (input) {
				input
					.on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function initOnActionCallback(event) {
						if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
							return;
						}
						clearTimeout(lazyInitTimer);
						lazyInitTimer = setTimeout(function () {

							if (!input.data('xdsoft_datetimepicker')) {
								createDateTimePicker(input);
							}
							input
								.off('open.xdsoft focusin.xdsoft mousedown.xdsoft', initOnActionCallback)
								.trigger('open.xdsoft');
						}, 100);
					});
			};

		createDateTimePicker = function (input) {
			var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
				xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				datepicker = $('<div class="xdsoft_datepicker active"></div>'),
				mounth_picker = $('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
					'<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +
					'<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +
					'<button type="button" class="xdsoft_next"></button></div>'),
				calendar = $('<div class="xdsoft_calendar"></div>'),
				timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
				timebox = $('<div class="xdsoft_time_variant"></div>'),
                applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
				/*scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
				scroller = $('<div class="xdsoft_scroller"></div>'),*/
				monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
				yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
				triggerAfterOpen = false,
				XDSoft_datetime,
				//scroll_element,
				xchangeTimer,
				timerclick,
				current_time_index,
				setPos,
				timer = 0,
				timer1 = 0,
				_xdsoft_datetime;

			if (options.id) {
				datetimepicker.attr('id', options.id);
			}
			if (options.style) {
				datetimepicker.attr('style', options.style);
			}
			if (options.weeks) {
				datetimepicker.addClass('xdsoft_showweeks');
			}

			datetimepicker.addClass('xdsoft_' + options.theme);
			datetimepicker.addClass(options.className);

			mounth_picker
				.find('.xdsoft_month span')
					.after(monthselect);
			mounth_picker
				.find('.xdsoft_year span')
					.after(yearselect);

			mounth_picker
				.find('.xdsoft_month,.xdsoft_year')
					.on('mousedown.xdsoft', function (event) {
					var select = $(this).find('.xdsoft_select').eq(0),
						val = 0,
						top = 0,
						visible = select.is(':visible'),
						items,
						i;

					mounth_picker
						.find('.xdsoft_select')
							.hide();
					if (_xdsoft_datetime.currentTime) {
						val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
					}

					select[visible ? 'hide' : 'show']();
					for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
						if (items.eq(i).data('value') === val) {
							break;
						} else {
							top += items[0].offsetHeight;
						}
					}

					select.xdsoftScroller(top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
					event.stopPropagation();
					return false;
				});

			mounth_picker
				.find('.xdsoft_select')
					.xdsoftScroller()
				.on('mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
				})
				.on('mousedown.xdsoft', '.xdsoft_option', function (event) {

					if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
					}

					var year = _xdsoft_datetime.currentTime.getFullYear();
					if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
						_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
					}

					$(this).parent().parent().hide();

					datetimepicker.trigger('xchange.xdsoft');
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
				});

			datetimepicker.setOptions = function (_options) {
				var highlightedDates = {},
					getCaretPos = function (input) {
						try {
							if (document.selection && document.selection.createRange) {
								var range = document.selection.createRange();
								return range.getBookmark().charCodeAt(2) - 2;
							}
							if (input.setSelectionRange) {
								return input.selectionStart;
							}
						} catch (e) {
							return 0;
						}
					},
					setCaretPos = function (node, pos) {
						node = (typeof node === "string" || node instanceof String) ? document.getElementById(node) : node;
						if (!node) {
							return false;
						}
						if (node.createTextRange) {
							var textRange = node.createTextRange();
							textRange.collapse(true);
							textRange.moveEnd('character', pos);
							textRange.moveStart('character', pos);
							textRange.select();
							return true;
						}
						if (node.setSelectionRange) {
							node.setSelectionRange(pos, pos);
							return true;
						}
						return false;
					},
					isValidValue = function (mask, value) {
						var reg = mask
							.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')
							.replace(/_/g, '{digit+}')
							.replace(/([0-9]{1})/g, '{digit$1}')
							.replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')
							.replace(/\{digit[\+]\}/g, '[0-9_]{1}');
						return (new RegExp(reg)).test(value);
					};
				options = $.extend(true, {}, options, _options);

				if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
					options.allowTimes = $.extend(true, [], _options.allowTimes);
				}

				if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
					options.weekends = $.extend(true, [], _options.weekends);
				}

				if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
					$.each(_options.highlightedDates, function (index, value) {
						var splitData = $.map(value.split(','), $.trim),
							exDesc,
							hDate = new HighlightedDate(Date.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]), // date, desc, style
							keyDate = hDate.date.dateFormat(options.formatDate);
						if (highlightedDates[keyDate] !== undefined) {
							exDesc = highlightedDates[keyDate].desc;
							if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
								highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
							}
						} else {
							highlightedDates[keyDate] = hDate;
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
					highlightedDates = $.extend(true, [], options.highlightedDates);
					$.each(_options.highlightedPeriods, function (index, value) {
						var splitData = $.map(value.split(','), $.trim),
							dateTest = Date.parseDate(splitData[0], options.formatDate), // start date
							dateEnd = Date.parseDate(splitData[1], options.formatDate),
							desc = splitData[2],
							hDate,
							keyDate,
							exDesc,
							style = splitData[3];

						while (dateTest <= dateEnd) {
							hDate = new HighlightedDate(dateTest, desc, style);
							keyDate = dateTest.dateFormat(options.formatDate);
							dateTest.setDate(dateTest.getDate() + 1);
							if (highlightedDates[keyDate] !== undefined) {
								exDesc = highlightedDates[keyDate].desc;
								if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
									highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
								}
							} else {
								highlightedDates[keyDate] = hDate;
							}
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
					options.disabledDates = $.extend(true, [], _options.disabledDates);
				}

				if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
				    options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
				}

				if ((options.open || options.opened) && (!options.inline)) {
					input.trigger('open.xdsoft');
				}

				if (options.inline) {
					triggerAfterOpen = true;
					datetimepicker.addClass('xdsoft_inline');
					input.after(datetimepicker).hide();
				}

				if (options.inverseButton) {
					options.next = 'xdsoft_prev';
					options.prev = 'xdsoft_next';
				}

				if (options.datepicker) {
					datepicker.addClass('active');
				} else {
					datepicker.removeClass('active');
				}

				if (options.timepicker) {
					timepicker.addClass('active');
				} else {
					timepicker.removeClass('active');
				}

				if (options.value) {
					_xdsoft_datetime.setCurrentTime(options.value);
					if (input && input.val) {
						input.val(_xdsoft_datetime.str);
					}
				}

				if (isNaN(options.dayOfWeekStart)) {
					options.dayOfWeekStart = 0;
				} else {
					options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
				}

				if (!options.timepickerScrollbar) {
					timeboxparent.xdsoftScroller('hide');
				}

				if (options.minDate && /^-(.*)$/.test(options.minDate)) {
					options.minDate = _xdsoft_datetime.strToDateTime(options.minDate).dateFormat(options.formatDate);
				}

				if (options.maxDate &&  /^\+(.*)$/.test(options.maxDate)) {
					options.maxDate = _xdsoft_datetime.strToDateTime(options.maxDate).dateFormat(options.formatDate);
				}

				applyButton.toggle(options.showApplyButton);

				mounth_picker
					.find('.xdsoft_today_button')
						.css('visibility', !options.todayButton ? 'hidden' : 'visible');

				mounth_picker
					.find('.' + options.prev)
						.css('visibility', !options.prevButton ? 'hidden' : 'visible');

				mounth_picker
					.find('.' + options.next)
						.css('visibility', !options.nextButton ? 'hidden' : 'visible');

				if (options.mask) {
					input.off('keydown.xdsoft');

					if (options.mask === true) {
						options.mask = options.format
							.replace(/Y/g, '9999')
							.replace(/F/g, '9999')
							.replace(/m/g, '19')
							.replace(/d/g, '39')
							.replace(/H/g, '29')
							.replace(/i/g, '59')
							.replace(/s/g, '59');
					}

					if ($.type(options.mask) === 'string') {
						if (!isValidValue(options.mask, input.val())) {
							input.val(options.mask.replace(/[0-9]/g, '_'));
						}

						input.on('keydown.xdsoft', function (event) {
							var val = this.value,
								key = event.which,
								pos,
								digit;

							if (((key >= KEY0 && key <= KEY9) || (key >= _KEY0 && key <= _KEY9)) || (key === BACKSPACE || key === DEL)) {
								pos = getCaretPos(this);
								digit = (key !== BACKSPACE && key !== DEL) ? String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key) : '_';

								if ((key === BACKSPACE || key === DEL) && pos) {
									pos -= 1;
									digit = '_';
								}

								while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
									pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
								}

								val = val.substr(0, pos) + digit + val.substr(pos + 1);
								if ($.trim(val) === '') {
									val = options.mask.replace(/[0-9]/g, '_');
								} else {
									if (pos === options.mask.length) {
										event.preventDefault();
										return false;
									}
								}

								pos += (key === BACKSPACE || key === DEL) ? 0 : 1;
								while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
									pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
								}

								if (isValidValue(options.mask, val)) {
									this.value = val;
									setCaretPos(this, pos);
								} else if ($.trim(val) === '') {
									this.value = options.mask.replace(/[0-9]/g, '_');
								} else {
									input.trigger('error_input.xdsoft');
								}
							} else {
								if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
									return true;
								}
							}

							event.preventDefault();
							return false;
						});
					}
				}
				if (options.validateOnBlur) {
					input
						.off('blur.xdsoft')
						.on('blur.xdsoft', function () {
							if (options.allowBlank && !$.trim($(this).val()).length) {
								$(this).val(null);
								datetimepicker.data('xdsoft_datetime').empty();
							} else if (!Date.parseDate($(this).val(), options.format)) {
								var splittedHours   = +([$(this).val()[0], $(this).val()[1]].join('')),
									splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));

								// parse the numbers as 0312 => 03:12
								if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
									$(this).val([splittedHours, splittedMinutes].map(function (item) {
										return item > 9 ? item : '0' + item;
									}).join(':'));
								} else {
									$(this).val((_xdsoft_datetime.now()).dateFormat(options.format));
								}

								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							} else {
								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							}

							datetimepicker.trigger('changedatetime.xdsoft');
						});
				}
				options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;

				datetimepicker
					.trigger('xchange.xdsoft')
					.trigger('afterOpen.xdsoft');
			};

			datetimepicker
				.data('options', options)
				.on('mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
					yearselect.hide();
					monthselect.hide();
					return false;
				});

			//scroll_element = timepicker.find('.xdsoft_time_box');
			timeboxparent.append(timebox);
			timeboxparent.xdsoftScroller();

			datetimepicker.on('afterOpen.xdsoft', function () {
				timeboxparent.xdsoftScroller();
			});

			datetimepicker
				.append(datepicker)
				.append(timepicker);

			if (options.withoutCopyright !== true) {
				datetimepicker
					.append(xdsoft_copyright);
			}

			datepicker
				.append(mounth_picker)
				.append(calendar)
				.append(applyButton);

			$(options.parentID)
				.append(datetimepicker);

			XDSoft_datetime = function () {
				var _this = this;
				_this.now = function (norecursion) {
					var d = new Date(),
						date,
						time;

					if (!norecursion && options.defaultDate) {
						date = _this.strToDateTime(options.defaultDate);
						d.setFullYear(date.getFullYear());
						d.setMonth(date.getMonth());
						d.setDate(date.getDate());
					}

					if (options.yearOffset) {
						d.setFullYear(d.getFullYear() + options.yearOffset);
					}

					if (!norecursion && options.defaultTime) {
						time = _this.strtotime(options.defaultTime);
						d.setHours(time.getHours());
						d.setMinutes(time.getMinutes());
					}
					return d;
				};

				_this.isValidDate = function (d) {
					if (Object.prototype.toString.call(d) !== "[object Date]") {
						return false;
					}
					return !isNaN(d.getTime());
				};

				_this.setCurrentTime = function (dTime) {
					_this.currentTime = (typeof dTime === 'string') ? _this.strToDateTime(dTime) : _this.isValidDate(dTime) ? dTime : _this.now();
					datetimepicker.trigger('xchange.xdsoft');
				};

				_this.empty = function () {
					_this.currentTime = null;
				};

				_this.getCurrentTime = function (dTime) {
					return _this.currentTime;
				};

				_this.nextMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() + 1,
						year;
					if (month === 12) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
						month = 0;
					}

					year = _this.currentTime.getFullYear();

					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);

					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.prevMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() - 1;
					if (month === -1) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
						month = 11;
					}
					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.getWeekOfYear = function (datetime) {
					var onejan = new Date(datetime.getFullYear(), 0, 1);
					return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
				};

				_this.strToDateTime = function (sDateTime) {
					var tmpDate = [], timeOffset, currentTime;

					if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
						return sDateTime;
					}

					tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);
					if (tmpDate) {
						tmpDate[2] = Date.parseDate(tmpDate[2], options.formatDate);
					}
					if (tmpDate  && tmpDate[2]) {
						timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
						currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
					} else {
						currentTime = sDateTime ? Date.parseDate(sDateTime, options.format) : _this.now();
					}

					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now();
					}

					return currentTime;
				};

				_this.strToDate = function (sDate) {
					if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
						return sDate;
					}

					var currentTime = sDate ? Date.parseDate(sDate, options.formatDate) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.strtotime = function (sTime) {
					if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
						return sTime;
					}
					var currentTime = sTime ? Date.parseDate(sTime, options.formatTime) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.str = function () {
					return _this.currentTime.dateFormat(options.format);
				};
				_this.currentTime = this.now();
			};

			_xdsoft_datetime = new XDSoft_datetime();

			applyButton.on('click', function (e) {//pathbrite
                e.preventDefault();
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(getCurrentValue());
                input.val(_xdsoft_datetime.str());
                datetimepicker.trigger('close.xdsoft');
            });
			mounth_picker
				.find('.xdsoft_today_button')
				.on('mousedown.xdsoft', function () {
					datetimepicker.data('changed', true);
					_xdsoft_datetime.setCurrentTime(0);
					datetimepicker.trigger('afterOpen.xdsoft');
				}).on('dblclick.xdsoft', function () {
					var currentDate = _xdsoft_datetime.getCurrentTime(), minDate, maxDate;
					currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
					minDate = _xdsoft_datetime.strToDate(options.minDate);
					minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
					if (currentDate < minDate) {
						return;
					}
					maxDate = _xdsoft_datetime.strToDate(options.maxDate);
					maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
					if (currentDate > maxDate) {
						return;
					}
					input.val(_xdsoft_datetime.str());
					datetimepicker.trigger('close.xdsoft');
				});
			mounth_picker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false;

					(function arguments_callee1(v) {
						if ($this.hasClass(options.next)) {
							_xdsoft_datetime.nextMonth();
						} else if ($this.hasClass(options.prev)) {
							_xdsoft_datetime.prevMonth();
						}
						if (options.monthChangeSpinner) {
							if (!stop) {
								timer = setTimeout(arguments_callee1, v || 100);
							}
						}
					}(500));

					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee2() {
						clearTimeout(timer);
						stop = true;
						$([document.body, window]).off('mouseup.xdsoft', arguments_callee2);
					});
				});

			timepicker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false,
						period = 110;
					(function arguments_callee4(v) {
						var pheight = timeboxparent[0].clientHeight,
							height = timebox[0].offsetHeight,
							top = Math.abs(parseInt(timebox.css('marginTop'), 10));
						if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {
							timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
						} else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
							timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
						}
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox.css('marginTop'), 10) / (height - pheight))]);
						period = (period > 10) ? 10 : period - 10;
						if (!stop) {
							timer = setTimeout(arguments_callee4, v || period);
						}
					}(500));
					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee5() {
						clearTimeout(timer);
						stop = true;
						$([document.body, window])
							.off('mouseup.xdsoft', arguments_callee5);
					});
				});

			xchangeTimer = 0;
			// base handler - generating a calendar and timepicker
			datetimepicker
				.on('xchange.xdsoft', function (event) {
					clearTimeout(xchangeTimer);
					xchangeTimer = setTimeout(function () {

						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						}

						var table =	'',
							start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
							i = 0,
							j,
							today = _xdsoft_datetime.now(),
							maxDate = false,
							minDate = false,
							hDate,
							day,
							d,
							y,
							m,
							w,
							classes = [],
							customDateSettings,
							newRow = true,
							time = '',
							h = '',
							line_time,
							description;

						while (start.getDay() !== options.dayOfWeekStart) {
							start.setDate(start.getDate() - 1);
						}

						table += '<table><thead><tr>';

						if (options.weeks) {
							table += '<th></th>';
						}

						for (j = 0; j < 7; j += 1) {
							table += '<th>' + options.i18n[options.lang].dayOfWeek[(j + options.dayOfWeekStart) % 7] + '</th>';
						}

						table += '</tr></thead>';
						table += '<tbody>';

						if (options.maxDate !== false) {
							maxDate = _xdsoft_datetime.strToDate(options.maxDate);
							maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
						}

						if (options.minDate !== false) {
							minDate = _xdsoft_datetime.strToDate(options.minDate);
							minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
						}

						while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
							classes = [];
							i += 1;

							day = start.getDay();
							d = start.getDate();
							y = start.getFullYear();
							m = start.getMonth();
							w = _xdsoft_datetime.getWeekOfYear(start);
							description = '';

							classes.push('xdsoft_date');

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
								customDateSettings = options.beforeShowDay.call(datetimepicker, start);
							} else {
								customDateSettings = null;
							}

							if ((maxDate !== false && start > maxDate) || (minDate !== false && start < minDate) || (customDateSettings && customDateSettings[0] === false)) {
								classes.push('xdsoft_disabled');
							} else if (options.disabledDates.indexOf(start.dateFormat(options.formatDate)) !== -1) {
								classes.push('xdsoft_disabled');
							} else if (options.disabledWeekDays.indexOf(day) !== -1) {
							    classes.push('xdsoft_disabled');
							}

							if (customDateSettings && customDateSettings[1] !== "") {
								classes.push(customDateSettings[1]);
							}

							if (_xdsoft_datetime.currentTime.getMonth() !== m) {
								classes.push('xdsoft_other_month');
							}

							if ((options.defaultSelect || datetimepicker.data('changed')) && _xdsoft_datetime.currentTime.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
								classes.push('xdsoft_current');
							}

							if (today.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
								classes.push('xdsoft_today');
							}

							if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(start.dateFormat(options.formatDate)) !== -1) {
								classes.push('xdsoft_weekend');
							}

							if (options.highlightedDates[start.dateFormat(options.formatDate)] !== undefined) {
								hDate = options.highlightedDates[start.dateFormat(options.formatDate)];
								classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
								description = hDate.desc === undefined ? '' : hDate.desc;
							}

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
								classes.push(options.beforeShowDay(start));
							}

							if (newRow) {
								table += '<tr>';
								newRow = false;
								if (options.weeks) {
									table += '<th>' + w + '</th>';
								}
							}

							table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' +
										'<div>' + d + '</div>' +
									'</td>';

							if (start.getDay() === options.dayOfWeekStartPrev) {
								table += '</tr>';
								newRow = true;
							}

							start.setDate(d + 1);
						}
						table += '</tbody></table>';

						calendar.html(table);

						mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[options.lang].months[_xdsoft_datetime.currentTime.getMonth()]);
						mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

						// generate timebox
						time = '';
						h = '';
						m = '';
						line_time = function line_time(h, m) {
							var now = _xdsoft_datetime.now(), optionDateTime, current_time;
							now.setHours(h);
							h = parseInt(now.getHours(), 10);
							now.setMinutes(m);
							m = parseInt(now.getMinutes(), 10);
							optionDateTime = new Date(_xdsoft_datetime.currentTime);
							optionDateTime.setHours(h);
							optionDateTime.setMinutes(m);
							classes = [];
							if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || (options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime()) || (options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime())) {
								classes.push('xdsoft_disabled');
							}
							if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || ((options.disabledMinTime !== false && now.getTime() > _xdsoft_datetime.strtotime(options.disabledMinTime).getTime()) && (options.disabledMaxTime !== false && now.getTime() < _xdsoft_datetime.strtotime(options.disabledMaxTime).getTime()))) {
								classes.push('xdsoft_disabled');
							}

							current_time = new Date(_xdsoft_datetime.currentTime);
							current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));
							current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);

							if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
								if (options.defaultSelect || datetimepicker.data('changed')) {
									classes.push('xdsoft_current');
								} else if (options.initTime) {
									classes.push('xdsoft_init_time');
								}
							}
							if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
								classes.push('xdsoft_today');
							}
							time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + now.dateFormat(options.formatTime) + '</div>';
						};

						if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
							for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
								for (j = 0; j < 60; j += options.step) {
									h = (i < 10 ? '0' : '') + i;
									m = (j < 10 ? '0' : '') + j;
									line_time(h, m);
								}
							}
						} else {
							for (i = 0; i < options.allowTimes.length; i += 1) {
								h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
								m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
								line_time(h, m);
							}
						}

						timebox.html(time);

						opt = '';
						i = 0;

						for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
						}
						yearselect.children().eq(0)
												.html(opt);

						for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[options.lang].months[i] + '</div>';
						}
						monthselect.children().eq(0).html(opt);
						$(datetimepicker)
							.trigger('generate.xdsoft');
					}, 10);
					event.stopPropagation();
				})
				.on('afterOpen.xdsoft', function () {
					if (options.timepicker) {
						var classType, pheight, height, top;
						if (timebox.find('.xdsoft_current').length) {
							classType = '.xdsoft_current';
						} else if (timebox.find('.xdsoft_init_time').length) {
							classType = '.xdsoft_init_time';
						}
						if (classType) {
							pheight = timeboxparent[0].clientHeight;
							height = timebox[0].offsetHeight;
							top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
							if ((height - pheight) < top) {
								top = height - pheight;
							}
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
						} else {
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
						}
					}
				});

			timerclick = 0;
			calendar
				.on('click.xdsoft', 'td', function (xdevent) {
					xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
					timerclick += 1;
					var $this = $(this),
						currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}

					currentTime.setDate(1);
					currentTime.setFullYear($this.data('year'));
					currentTime.setMonth($this.data('month'));
					currentTime.setDate($this.data('date'));

					datetimepicker.trigger('select.xdsoft', [currentTime]);

					input.val(_xdsoft_datetime.str());
					if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === false && !options.timepicker))) && !options.inline) {
						datetimepicker.trigger('close.xdsoft');
					}

					if (options.onSelectDate &&	$.isFunction(options.onSelectDate)) {
						options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}

					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
					setTimeout(function () {
						timerclick = 0;
					}, 200);
				});

			timebox
				.on('click.xdsoft', 'div', function (xdevent) {
					xdevent.stopPropagation();
					var $this = $(this),
						currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}
					currentTime.setHours($this.data('hour'));
					currentTime.setMinutes($this.data('minute'));
					datetimepicker.trigger('select.xdsoft', [currentTime]);

					datetimepicker.data('input').val(_xdsoft_datetime.str());

                    if (options.inline !== true && options.closeOnTimeSelect === true) {
                        datetimepicker.trigger('close.xdsoft');
                    }

					if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
						options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}
					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
				});


			datepicker
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollMonth) {
						return true;
					}
					if (event.deltaY < 0) {
						_xdsoft_datetime.nextMonth();
					} else {
						_xdsoft_datetime.prevMonth();
					}
					return false;
				});

			input
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollInput) {
						return true;
					}
					if (!options.datepicker && options.timepicker) {
						current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
						if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
							current_time_index += event.deltaY;
						}
						if (timebox.children().eq(current_time_index).length) {
							timebox.children().eq(current_time_index).trigger('mousedown');
						}
						return false;
					}
					if (options.datepicker && !options.timepicker) {
						datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
						if (input.val) {
							input.val(_xdsoft_datetime.str());
						}
						datetimepicker.trigger('changedatetime.xdsoft');
						return false;
					}
				});

			datetimepicker
				.on('changedatetime.xdsoft', function (event) {
					if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
						var $input = datetimepicker.data('input');
						options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
						delete options.value;
						$input.trigger('change');
					}
				})
				.on('generate.xdsoft', function () {
					if (options.onGenerate && $.isFunction(options.onGenerate)) {
						options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					if (triggerAfterOpen) {
						datetimepicker.trigger('afterOpen.xdsoft');
						triggerAfterOpen = false;
					}
				})
				.on('click.xdsoft', function (xdevent) {
					xdevent.stopPropagation();
				});

			current_time_index = 0;

			setPos = function () {
				var offset = datetimepicker.data('input').offset(), top = offset.top + datetimepicker.data('input')[0].offsetHeight - 1, left = offset.left, position = "absolute", node;
				if (options.fixed) {
					top -= $(window).scrollTop();
					left -= $(window).scrollLeft();
					position = "fixed";
				} else {
					if (top + datetimepicker[0].offsetHeight > $(window).height() + $(window).scrollTop()) {
						top = offset.top - datetimepicker[0].offsetHeight + 1;
					}
					if (top < 0) {
						top = 0;
					}
					if (left + datetimepicker[0].offsetWidth > $(window).width()) {
						left = $(window).width() - datetimepicker[0].offsetWidth;
					}
				}

				node = datetimepicker[0];
				do {
					node = node.parentNode;
					if (window.getComputedStyle(node).getPropertyValue('position') === 'relative' && $(window).width() >= node.offsetWidth) {
						left = left - (($(window).width() - node.offsetWidth) / 2);
						break;
					}
				} while (node.nodeName !== 'HTML');
				datetimepicker.css({
					left: left,
					top: top,
					position: position
				});
			};
			datetimepicker
				.on('open.xdsoft', function (event) {
					var onShow = true;
					if (options.onShow && $.isFunction(options.onShow)) {
						onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onShow !== false) {
						datetimepicker.show();
						setPos();
						$(window)
							.off('resize.xdsoft', setPos)
							.on('resize.xdsoft', setPos);

						if (options.closeOnWithoutClick) {
							$([document.body, window]).on('mousedown.xdsoft', function arguments_callee6() {
								datetimepicker.trigger('close.xdsoft');
								$([document.body, window]).off('mousedown.xdsoft', arguments_callee6);
							});
						}
					}
				})
				.on('close.xdsoft', function (event) {
					var onClose = true;
					mounth_picker
						.find('.xdsoft_month,.xdsoft_year')
							.find('.xdsoft_select')
								.hide();
					if (options.onClose && $.isFunction(options.onClose)) {
						onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onClose !== false && !options.opened && !options.inline) {
						datetimepicker.hide();
					}
					event.stopPropagation();
				})
				.on('toggle.xdsoft', function (event) {
					if (datetimepicker.is(':visible')) {
						datetimepicker.trigger('close.xdsoft');
					} else {
						datetimepicker.trigger('open.xdsoft');
					}
				})
				.data('input', input);

			timer = 0;
			timer1 = 0;

			datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
			datetimepicker.setOptions(options);

			function getCurrentValue() {
				var ct = false, time;

				if (options.startDate) {
					ct = _xdsoft_datetime.strToDate(options.startDate);
				} else {
					ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
					if (ct) {
						ct = _xdsoft_datetime.strToDateTime(ct);
					} else if (options.defaultDate) {
						ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
						if (options.defaultTime) {
							time = _xdsoft_datetime.strtotime(options.defaultTime);
							ct.setHours(time.getHours());
							ct.setMinutes(time.getMinutes());
						}
					}
				}

				if (ct && _xdsoft_datetime.isValidDate(ct)) {
					datetimepicker.data('changed', true);
				} else {
					ct = '';
				}

				return ct || 0;
			}

			_xdsoft_datetime.setCurrentTime(getCurrentValue());

			input
				.data('xdsoft_datetimepicker', datetimepicker)
				.on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function (event) {
					if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
						return;
					}
					clearTimeout(timer);
					timer = setTimeout(function () {
						if (input.is(':disabled')) {
							return;
						}

						triggerAfterOpen = true;
						_xdsoft_datetime.setCurrentTime(getCurrentValue());

						datetimepicker.trigger('open.xdsoft');
					}, 100);
				})
				.on('keydown.xdsoft', function (event) {
					var val = this.value, elementSelector,
						key = event.which;
					if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
						elementSelector = $("input:visible,textarea:visible");
						datetimepicker.trigger('close.xdsoft');
						elementSelector.eq(elementSelector.index(this) + 1).focus();
						return false;
					}
					if ([TAB].indexOf(key) !== -1) {
						datetimepicker.trigger('close.xdsoft');
						return true;
					}
				});
		};
		destroyDateTimePicker = function (input) {
			var datetimepicker = input.data('xdsoft_datetimepicker');
			if (datetimepicker) {
				datetimepicker.data('xdsoft_datetime', null);
				datetimepicker.remove();
				input
					.data('xdsoft_datetimepicker', null)
					.off('.xdsoft');
				$(window).off('resize.xdsoft');
				$([window, document.body]).off('mousedown.xdsoft');
				if (input.unmousewheel) {
					input.unmousewheel();
				}
			}
		};
		$(document)
			.off('keydown.xdsoftctrl keyup.xdsoftctrl')
			.on('keydown.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = true;
				}
			})
			.on('keyup.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = false;
				}
			});
		return this.each(function () {
			var datetimepicker = $(this).data('xdsoft_datetimepicker'), $input;
			if (datetimepicker) {
				if ($.type(opt) === 'string') {
					switch (opt) {
					case 'show':
						$(this).select().focus();
						datetimepicker.trigger('open.xdsoft');
						break;
					case 'hide':
						datetimepicker.trigger('close.xdsoft');
						break;
					case 'toggle':
						datetimepicker.trigger('toggle.xdsoft');
						break;
					case 'destroy':
						destroyDateTimePicker($(this));
						break;
					case 'reset':
						this.value = this.defaultValue;
						if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value, options.format))) {
							datetimepicker.data('changed', false);
						}
						datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
						break;
					case 'validate':
						$input = datetimepicker.data('input');
						$input.trigger('blur.xdsoft');
						break;
					}
				} else {
					datetimepicker
						.setOptions(opt);
				}
				return 0;
			}
			if ($.type(opt) !== 'string') {
				if (!options.lazyInit || options.open || options.inline) {
					createDateTimePicker($(this));
				} else {
					lazyInit($(this));
				}
			}
		});
	};
	$.fn.datetimepicker.defaults = default_options;
}(jQuery));

function HighlightedDate(date, desc, style) {
	"use strict";
	this.date = date;
	this.desc = desc;
	this.style = style;
}

(function () {

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

// Parse and Format Library
//http://www.xaprb.com/blog/2005/12/12/javascript-closures-for-runtime-efficiency/
/*
 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the
 * Free Software Foundation, version 2.1.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
 * details.
 */
Date.parseFunctions={count:0};Date.parseRegexes=[];Date.formatFunctions={count:0};Date.prototype.dateFormat=function(b){if(b=="unixtime"){return parseInt(this.getTime()/1000);}if(Date.formatFunctions[b]==null){Date.createNewFormat(b);}var a=Date.formatFunctions[b];return this[a]();};Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;var codePrefix="Date.prototype."+funcName+" = function() {return ";var code="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;code+="'"+String.escape(ch)+"' + ";}else{code+=Date.getFormatCode(ch);}}}if(code.length==0){code="\"\"";}else{code=code.substring(0,code.length-3);}eval(codePrefix+code+";}");};Date.getFormatCode=function(a){switch(a){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(a)+"' + ";}};Date.parseDate=function(a,c){if(c=="unixtime"){return new Date(!isNaN(parseInt(a))?parseInt(a)*1000:0);}if(Date.parseFunctions[c]==null){Date.createParser(c);}var b=Date.parseFunctions[c];return Date[b](a);};Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++;var regexNum=Date.parseRegexes.length;var currentGroup=1;Date.parseFunctions[format]=funcName;var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {";var regex="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;regex+=String.escape(ch);}else{obj=Date.formatCodeToRegex(ch,currentGroup);currentGroup+=obj.g;regex+=obj.s;if(obj.g&&obj.c){code+=obj.c;}}}}code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$",'i');eval(code);};Date.formatCodeToRegex=function(b,a){switch(b){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+a+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+a+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+a+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+a+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+a+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+a+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(b)};}};Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");};Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0");};Date.prototype.getDayOfYear=function(){var a=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var b=0;b<this.getMonth();++b){a+=Date.daysInMonth[b];}return a+this.getDate();};Date.prototype.getWeekOfYear=function(){var b=this.getDayOfYear()+(4-this.getDay());var a=new Date(this.getFullYear(),0,1);var c=(7-a.getDay()+4);return String.leftPad(Math.ceil((b-c)/7)+1,2,"0");};Date.prototype.isLeapYear=function(){var a=this.getFullYear();return((a&3)==0&&(a%100||(a%400==0&&a)));};Date.prototype.getFirstDayOfMonth=function(){var a=(this.getDay()-(this.getDate()-1))%7;return(a<0)?(a+7):a;};Date.prototype.getLastDayOfMonth=function(){var a=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return(a<0)?(a+7):a;};Date.prototype.getDaysInMonth=function(){Date.daysInMonth[1]=this.isLeapYear()?29:28;return Date.daysInMonth[this.getMonth()];};Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};String.escape=function(a){return a.replace(/('|\\)/g,"\\$1");};String.leftPad=function(d,b,c){var a=new String(d);if(c==null){c=" ";}while(a.length<b){a=c+a;}return a;};Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.y2kYear=50;Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"};
}());

//Dialog的基类

(function () {
	function IMDialog (opt) {
		this.opt = opt;
	}

	IMDialog.prototype.showOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('modal-dialog-deactive');
		this.zone.addClass('modal-dialog-active');
	};

	IMDialog.prototype.hideOverlay = function () {
		this.zone.removeClass('modal-dialog-active');
		this.zone.addClass('modal-dialog-deactive');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.showContentOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('content-dialog-deactive');
		this.zone.addClass('content-dialog-active');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.hideContentOverlay = function () {
		this.zone.removeClass('content-dialog-active');
		this.zone.addClass('content-dialog-deactive');
	};

	IMDialog.prototype.bindOverlayEvents = function () {
		var that = this;

		this.isPC = !Util.isMobile.any();

		if (this.isPC) {
			this.zone.find('.dialog').css('transition', 'all .5s');
		}

		this.zone.next('.overlay').click(function () {
			that.hide();
		});
	};

	window.IMDialog = IMDialog;
}());
/*
** 继承自IMDialog
*/

(function () {
	function ConfirmDialog (opt) {
		IMDialog.call(this, (opt || {}));

		this.text = this.opt.text;
		this.el   = this.initDom();
	}

	ConfirmDialog.prototype = new IMDialog();

	ConfirmDialog.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '取消',
			className: 'cancel-button'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button'
		});

		temp = 	'<div class="confirm-dialog">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="title">温馨提示</div>'+
							'<div class="content">' +
								this.text +
							'</div>' +
							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	ConfirmDialog.prototype.getDom = function () {
		return this.el;
	};

	ConfirmDialog.prototype.show = function (text) {
		this.zone.find('.content').empty();
		this.zone.find('.content').text(text);
		this.showOverlay();
	};
	ConfirmDialog.prototype.showConfirm = function (text1,text2,text3) {
		this.zone.find('.content').empty();
		var str = '';
		if(text3){
			str +='<div class="diawNumber">当前'
		}else{
			str += '<div class="diawNumber">'
		}
			str += '<span>'+text1+'</span>期';
		if(text3){
			str += '追号<span>'+text3+'</span>期'
		}
		str +='</div><div class="totalMoney">投注总额<span>'+Util.addDotToNumber(text2,2)+'</span></div>';
		this.zone.find('.content').append(str);
		this.showOverlay();
	};
	ConfirmDialog.prototype.hide = function () {
		this.hideOverlay();
	};

	ConfirmDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('.confirm-dialog');
		
		this.zone.find('.cancel-button').click(function () {
			if ((that.opt.cancelCallback) && (typeof that.opt.cancelCallback === 'function')) {
				that.opt.cancelCallback();
			}

			that.hide();
		});

		this.zone.find('.ok-button').click(function () {
			if ((that.opt.okCallback) && (typeof that.opt.okCallback === 'function')) {
				that.opt.okCallback();
			}

			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.ConfirmDialog = ConfirmDialog;
}());

(function () {

	function IMBettingTimes (opt) {
		var i;

		this.opt = opt;
		this.id  = this.opt.id;
		this.options = [1, 5, 10, 50, 100, 200];

		this.el  = 	'<div class="im-betting-times" id="' + this.id + '">' +
						'<span class="name">投注倍数：</span>' +
						'<div class="control">' +
							'<div class="minus">-</div>' +
							'<div class="select">' +
								'<input type="text" value="1"/>' +
								'<ul class="options">';

		for (i = 0; i < this.options.length; i++) {
			this.el +=     			'<li class="item">' + this.options[i] + '</li>';
		}

		this.el +=				'</ul>' +
							'</div>' +
							'<div class="plus">+</div>' +
						'</div>' +
					'</div>' +

					'<div class="select-overlay"></div>';
	}

	IMBettingTimes.prototype.getDom = function () {
		return this.el;
	};

	IMBettingTimes.prototype.getValue = function () {
		return parseInt(this.zone.find('input').val());
	};

	IMBettingTimes.prototype.bindEvents = function () {
		var ul;
		var input;
		var value;
		var plus;
		var minus;
		var control;
		var select;
		var overlay;
		var that = this;
		var clickOrTouch = Util.isMobile.any()?'touchstart': 'click';

		this.zone = $('#' + this.id);
		control   = this.zone.find('.control');
		select    = this.zone.find('.select');
		ul        = this.zone.find('.options');
		input     = this.zone.find('input');
		plus      = this.zone.find('.plus');
		minus     = this.zone.find('.minus');
		overlay   = this.zone.next('.select-overlay');

		ul.delegate('li', 'click', function (e) {
			value = $(this).text();
			value = that.getCount(value).num;
			input.val(value);
			that.setModelZoneData(BetRuleInstance, value);
			ul.hide();
			e.stopPropagation();
		});

		input.focus(function (e) {
			ul.show();
			overlay.show();
			e.stopPropagation();
		}).keyup(function () {
			value = input.val();
			if (isNaN(value)) {
				value = 1;
				input.val(1);
			}
			value = parseInt(value);
			value = that.getCount(value).num;
			input.val(value);
			that.setModelZoneData(BetRuleInstance, value);
		});

		plus.click(function () {
			value = parseInt(input.val());
			if (value >= 0) {
				value++;
				value = that.getCount(value).num;
				input.val(value);
				that.setModelZoneData(BetRuleInstance, value);
			}
		});

		minus.click(function () {
			value = parseInt(input.val());

			if (value > 1) {
				value--;
				input.val(value);
				that.setModelZoneData(BetRuleInstance, value);
			}
		});

		overlay.click(function (){
			ul.hide();
			overlay.hide();
		});

		this.getCount = function(value){
			var maxCount = 0;
			var num = 0;
			switch (BetRuleInstance.betUnit){
				case 2 :maxCount = BetRuleInstance.maxCount; break;
				case 0.2 : maxCount =  BetRuleInstance.maxCount * 10 ;break;
				case 0.02 : maxCount =  BetRuleInstance.maxCount * 100 ;break;
			}
			num = value < maxCount ? value : maxCount;
			var numers = {
				maxCount : maxCount,
				num :num
			}
			return numers;
		}

		this.setModelZoneData = function(sender, betTimes){
			sender.multiple = betTimes;
			var opt = BetAlgorithm.getModelZoneData(sender.betCount, sender.multiple);
			sender.setModelZoneData(sender.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, betTimes);
		}
	};

	window.IMBettingTimes = IMBettingTimes;
}());


(function () {

	function IMButton (opt) {
		this.id   = opt.id;
		this.opt  = opt;
		this.isPC = !Util.isMobile.any();
		this.el   = this.initDom();
	}

	IMButton.prototype.getDom = function () {
		return this.el;
	};

	IMButton.prototype.initDom = function () {
		var classes         = 'im-button';
		var padClass        = this.isPC?' btn-hover': '';
		var additionalClass = (this.opt.className?(' ' + this.opt.className): '');

		classes += additionalClass + padClass;

		var temp = 	'<a' + (this.id?(' id="' + this.id + '"'): '') + ' class="' + classes + '">' +
						'<div class="im-button-wrapper">' +
							'<div class="button-overturn im-button-row1">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text">' + this.opt.text + '</span>' +
							'</div>' +
							'<div class="button-overturn im-button-row2">' +
							'</div>' +
							'<div class="button-overturn im-button-row3">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text">' + this.opt.text + '</span>' +
							'</div>' +
						'</div>' +
					'</a>';
		return temp;
	};

	IMButton.prototype.disabled = function () {
		if(!this.zone)this.zone = $('#' + this.id);
		this.zone.attr('disabled', 'disabled');
		this.zone.addClass('btn-disabled');
		this.zone.removeClass('btn-hover');
	};

	IMButton.prototype.enabled = function () {
		this.zone.removeAttr('disabled');
		this.zone.addClass('btn-hover');
		this.zone.removeClass('btn-disabled');
	};

	IMButton.prototype.inProgress = function () {
		this.setImage('../img/loading.png');
		this.setText('提交中');
		this.zone.addClass('but-noClick');
		this.zone.addClass('btn-disabled');
		if (this.isPC) {
			this.zone.removeClass('btn-hover');
		}
	};
	IMButton.prototype.inNormal = function () {
		this.setImage('../img/select-mark.png');
		this.setText('确定');
		this.zone.removeClass('but-noClick');
		this.zone.removeClass('btn-disabled');
		if (this.isPC) {
			this.zone.removeClass('btn-hover');
		}
	};
	IMButton.prototype.recover = function () {
		if (this.opt.imgSrc) {
			this.setImage(this.opt.imgSrc);
		}
		
		this.setText(this.opt.text);

		if (this.isPC) {
			this.zone.addClass('btn-hover');
		}
	};

	IMButton.prototype.setImage = function (src) {
		this.zone.find('img').attr('src', src);
	};

	IMButton.prototype.setText = function (text) {
		this.zone.find('.text').text(text);
	};

	IMButton.prototype.bindEvents = function (callback) {
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';
		this.zone = $('#' + this.id);

		this.zone.bind(clickOrtouch, function () {
			if (typeof callback === 'function') {
				callback();
			}
		});
	};

	window.IMButton = IMButton;
}());


(function () {

	function IMCheckBox (opt) {
		this.opt = opt || {};
		this.el = this.initDom();
	}

	IMCheckBox.prototype.getDom = function () {
		return this.el;
	};

	IMCheckBox.prototype.initDom = function () {
		var temp = 	'<div class="im-checkbox' +
							(this.opt.checked? ' checked': '')  + '"' + 
							(this.opt.id?(' id="' + this.opt.id + '"'): '') + 
							(this.opt.value?(' data-value="' + this.opt.value + '"'): '') +
							'>' +
						'<div class="circle"></div>' +
						(this.opt.text? ('<span class="text">' + this.opt.text + '</span>'): '') +
					'</div>';

		return temp;
	};

	IMCheckBox.prototype.bindEvents = function () {
	};

	window.IMCheckBox = IMCheckBox;
}());


(function () {
	function IMDatetimepicker (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-datetimepicker ' + this.opt.className + '">' +
						'<div class="time-label">' + this.opt.text + '</div>' +
	                    '<input type="text"/>' +
	                '</div>';
	}

	IMDatetimepicker.prototype.getDom = function () {
		return this.el;
	};

	window.IMDatetimepicker = IMDatetimepicker;
}());
(function () {
	function IMInput (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-input ' + this.opt.className + '">' +
						'<div class="input-label">' + this.opt.text + '</div>' +
	                    '<input type="text" placeholder="' + (this.opt.placeHolder || '') + '"/>' +
	                '</div>';
	}

	IMInput.prototype.getDom = function () {
		return this.el;
	};

	window.IMInput = IMInput;
}());

(function () {

	function IMMoneyModel (opt) {
		this.opt = opt;
		this.id  = opt.id;

		this.el  =	'<div class="im-money-model" id="' + this.id + '">' +
						'<div class="name">资金模式：</div>' +
						'<div class="unit">' +
							'<div class="item yuan selected"><span>元</span></div>' +
							'<div class="item jiao"><span>角</span></div>' +
							'<div class="item fen"><span>分</span></div>' +
							'<div class="trick">元</div>' +
						'</div>' +
					'</div>';
	}

	IMMoneyModel.prototype.getDom = function () {
		return this.el;
	};

	IMMoneyModel.prototype.bindEvents = function () {
		var left;
		var trick;
		var gap;
		var yuan;
		var unit = 0;
		var that = this;

		this.zone = $('#' + this.id);
		trick     = this.zone.find('.trick');
		yuan      = this.zone.find('.yuan');

		this.zone.delegate('.item', 'click', function () {
			trick.text('');

			that.zone.find('.item').removeClass('selected');
			$(this).addClass('selected');

			gap = parseInt(yuan.width());

			if ($(this).hasClass('yuan')) {
				left = 0;
			} else if ($(this).hasClass('jiao')) {
				left = gap;
			} else {
				left = gap*2;
			}

			trick.css('left', left + 'px');

			it = BetRuleInstance;
			if ($(this).hasClass('yuan')) {
				trick.text('元');
				it.betUnit = 2;
			} else if ($(this).hasClass('jiao')) {
				trick.text('角');
				it.betUnit = 0.2;	
			} else {
				trick.text('分');
				it.betUnit = 0.02;	
			}
			that.setModelZoneData(it);	
		});

		this.setModelZoneData = function(sender){
			var it = BetRuleInstance;
			var currentNum =  it.multiple == undefined ? 1 : it.multiple ;
			var max = app.currentModule.modelZone.bettingTimes.getCount(currentNum).maxCount;
			var inputVal = currentNum < max ? currentNum : max;
			app.currentModule.modelZone.bettingTimes.zone.find('input').val(inputVal);
			it.multiple = inputVal;
			var opt = BetAlgorithm.getModelZoneData(sender.betCount, sender.multiple);
			sender.setModelZoneData(sender.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, inputVal);
		}

		this.getBetUnit = function(target){
			var unit = this.zone.find('.item.selected');
	        if (unit.hasClass('yuan')) {
	            target.betUnit = 2;
	        } else if (unit.hasClass('jiao')) {
	            target.betUnit = 0.2;
	        } else {
	            target.betUnit = 0.02;
	        }
		}

	};

	window.IMMoneyModel = IMMoneyModel;
}());


(function () {
	function IMOverlay (opt) {
		this.opt = opt;
		this.el = '<div class="im-overlay"></div>';

		opt.position.append(this.el);
		this.zone = opt.position.children('.im-overlay');
	}

	IMOverlay.prototype.show = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.css('height', height);
		this.zone.show();
	};
	IMOverlay.prototype.showImg = function () {
		var str = '<div class="overlay-loading"></div>';
		$('body').append(str);
	};
	IMOverlay.prototype.hideImg = function () {
		$('.overlay-loading').remove()
	};
	IMOverlay.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMOverlay = IMOverlay;
}());


(function () {
	function IMPager (opt) {
		this.opt            = opt;
		this.id             = this.opt.id;
		this.currentPage    = 1;
		this.totalPage      = 1;
		this.pageRange      = 4;
		this.firstItemValue = 1;
		this.el             = this.initDom();
	}
	IMPager.prototype.initDom = function () {
		var temp;
		
        temp  = '<ul class="im-pager" id="' + this.id + '">' +
					'<li><a class="btn first"    href="#">第一页</a></li>' +
					'<li><a class="btn previous" href="#">上一页</a></li>' +
					'<li><a class="item selected" href="#" data-value="1">1</a></li>' +
					'<li><a class="item"     	 href="#" data-value="2">2</a></li>' +
					'<li><a class="item"     	 href="#" data-value="3">3</a></li>' +
					'<li><a class="item"     	 href="#" data-value="4">4</a></li>' +
					'<li><a class="item more"    href="#">...</a></li>' +
					'<li><a class="btn next"     href="#">下一页</a></li>' +
					'<li><a class="btn last"     href="#">最后一页</a></li>' +
                '</ul>';

		return temp;
	};

	IMPager.prototype.getDom = function () {
		return this.el;
	};

	IMPager.prototype.reloadPageItem = function (start) {
		var i;
		var items = this.zone.find('.item');

		for (i = 0; i < this.pageRange; i++) {
			if (start + i <= this.totalPage) {
				$(items[i]).text(start + i);
				$(items[i]).attr('data-value', start + i);
				$(items[i]).show();
			} else {
				$(items[i]).hide();
			}
		}
	};

	IMPager.prototype.setSelected = function (value) {
		var i;
		var items = this.zone.find('.item');

		for (i = 0; i < 4; i++) {
			if (parseInt($(items[i]).attr('data-value')) === this.currentPage) {
				items.removeClass('selected');
				$(items[i]).addClass('selected');
			}
		}
	};
	IMPager.prototype.isDisable = function(){
		var zone = this.zone;
		if(this.currentPage == 1){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.first').addClass('btn-disabled');
			zone.find('.previous').addClass('btn-disabled');
			if(this.currentPage == this.totalPage){
				zone.find('.more').hide();
			}else{
				zone.find('.more').show();
			}
		}else if(this.currentPage == this.totalPage){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.next').addClass('btn-disabled');
			zone.find('.last').addClass('btn-disabled');
			zone.find('.more').hide();
		}else{
			zone.find('.more').show();
			zone.find('.btn').removeClass('btn-disabled');
		}
	};
	IMPager.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('#' + this.id);

		this.reloadPageItem(this.currentPage);

		this.zone.delegate('a', 'click', function () {
			var currentPage = that.currentPage;
			if ($(this).hasClass('first')) {
				that.currentPage = 1;
				that.firstItemValue = 1;
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('last')) {
				that.currentPage = that.totalPage;
				that.firstItemValue = parseInt(that.totalPage/that.pageRange) * that.pageRange;
				if(that.totalPage%that.pageRange != 0){
					that.firstItemValue++
				}
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('previous')) {
				if (that.currentPage > 1) {
					if (that.currentPage === that.firstItemValue) {
						that.firstItemValue -= that.pageRange;
						if(that.firstItemValue == 0){
							that.firstItemValue = 1
						}
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage -= 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('next')) {
				if (that.currentPage < that.totalPage) {
					if (that.currentPage === (that.firstItemValue + (that.pageRange - 1))) {
						that.firstItemValue += that.pageRange;
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage += 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('more')) {
				that.zone.find('.item').removeClass('selected');
				that.firstItemValue = parseInt(that.zone.find('.item:first').attr('data-value'));

				if (that.firstItemValue + (that.pageRange - 1) < that.totalPage) {
					that.firstItemValue += that.pageRange;
					that.currentPage = that.firstItemValue;
					that.reloadPageItem(that.firstItemValue);
				}

				that.setSelected();
			} else {
				that.currentPage = parseInt($(this).attr('data-value'));
				that.setSelected();
			}
			if(currentPage != that.currentPage){
				if(typeof(app) != 'undefined'){
					if(app.bettingRecords.type == 1){
						app.bettingRecords.getBetHistory();
					}else{
						app.bettingRecords.getChaseHistory();
					}

				}else{
					if(recordsQuery.type == 1){
						recordsQuery.getBetHistory();
					}else{
						recordsQuery.getChaseHistory();
					}
				}
			}
			that.isDisable()
		});
	};

	window.IMPager = IMPager;
}());


(function () {

	function IMRangeSlider (id) {
		this.data = {
			0: {
				turnOver: '0%',
				jjz: 1950
			},
			0.5: {
				turnOver: '0.5%',
				jjz: 1940
			},
			1: {
				turnOver: '1%',
				jjz: 1930
			},
			1.5: {
				turnOver: '1.5%',
				jjz: 1920
			},
			2: {
				turnOver: '2%',
				jjz: 1900
			},
			2.5: {
				turnOver: '2.5%',
				jjz: 1890
			},
			3: {
				turnOver: '3%',
				jjz: 1880
			},
			3.5: {
				turnOver: '3.5%',
				jjz: 1870
			},
			4: {
				turnOver: '4%',
				jjz: 1860
			},
			4.5: {
				turnOver: '4.5%',
				jjz: 1850
			},
			5: {
				turnOver: '5%',
				jjz: 1840
			},
			5.5: {
				turnOver: '5.5%',
				jjz: 1830
			},
			6: {
				turnOver: '6%',
				jjz: 1820
			},
			6.5: {
				turnOver: '6.5%',
				jjz: 1810
			},
			7: {
				turnOver: '7%',
				jjz: 1800
			},
			7.5: {
				turnOver: '7.5%',
				jjz: 1790
			},
			8: {
				turnOver: '8%',
				jjz: 1780
			},
			8.5: {
				turnOver: '8.5%',
				jjz: 1770
			},
			9: {
				turnOver: '9%',
				jjz: 1760
			},
			9.5: {
				turnOver: '9.5%',
				jjz: 1750
			},
			10: {
				turnOver: '10%',
				jjz: 1740
			}
		};
		
		this.el = 	'<div class="row im-range-slider">' +
						'<div class="col-md-3 turn-over">' +
							'返点' +
							'<span class="turn-over-value">7.5%</span>' +
						'</div>' +
						'<div class="col-md-6 range-slider-zone">' +
							'<input type="range" min="0" max="10" step="0.5" value="7.5">' +
						'</div>' +
						'<div class="col-md-3 jjz">' +
							'<span class="jjz-value">1800</span>' +
							'奖金组' +
						'</div>' +
					'</div>';
	}

	IMRangeSlider.prototype.getDom = function () {
		return this.el;
	};

	IMRangeSlider.prototype.bindEvents = function () {
		var jjz;
		var turnOver;
		var that = this;

		this.zone   = $('.im-range-slider');
		this.slider = this.zone.find('input[type="range"]');
		jjz         = this.zone.find('.jjz-value');
		turnOver    = this.zone.find('.turn-over-value');

		this.slider.rangeslider({
		    polyfill: false,
		    rangeClass: 'rangeslider',
		    disabledClass: 'rangeslider--disabled',
		    horizontalClass: 'rangeslider--horizontal',
		    verticalClass: 'rangeslider--vertical',
		    fillClass: 'rangeslider__fill',
		    handleClass: 'rangeslider__handle',
		    onInit: function() {},
		    onSlide: function(position, value) {
		    	turnOver.text(that.data[value].turnOver);
		    	jjz.text(that.data[value].jjz);
		    },
		    onSlideEnd: function(position, value) {
		    }
		});
	};

	window.IMRangeSlider = IMRangeSlider;
}());


(function () {
	function IMSelect (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = this['initType' + this.opt.type]() + '<div class="select-overlay"></div>';
	}

	IMSelect.prototype.getDom = function () {
		return this.el;
	};

	IMSelect.prototype.initType1 = function () {
		var temp = 	'<div class="im-select' + (this.opt.className? (' ' + this.opt.className) : '') + '" id="' + this.id + '">' +
						  	'<button id="' + this.id + '-button' + '">' +
						    	'<span class="buttonName">' +
						    		this.opt.data[0].text +
						    	'</span>' +
						    	'<div class="select-down-arrow"></div>' +
						 	'</button>' +
						  	'<ul class="dropdown-menu">' +
						    	this.generateTypeList() +
						  	'</ul>' +
					'</div>';

		return temp;
	};

	IMSelect.prototype.initType2 = function () {
		var temp = 	'<div class="im-select' + (this.opt.className? (' ' + this.opt.className) : '') + '" id="' + this.id + '">' +
						  	'<button id="' + this.id + '-button' + '">' +
								'<div class="select-label">' +
									this.opt.text +
								'</div>' +
						    	'<span class="buttonName">' +
						    		this.opt.data[0].text +
						    	'</span>' +
						    	'<div class="select-down-arrow"></div>' +
						 	'</button>' +

						  	'<ul class="dropdown-menu">' +
						    	this.generateTypeList() +
						  	'</ul>' +
					'</div>';

		return temp;
	};

	IMSelect.prototype.generateTypeList = function () {
		var i;
		var temp = '';
		var data = this.opt.data;

		for (i = 0; i < data.length; i++) {
			temp += ' <li><a href="#" data-value="' + data[i].value + '">' + data[i].text + '</a></li>'
		}

		return temp;
	};

	IMSelect.prototype.getValue = function () {
		return this.value;
	};

	IMSelect.prototype.bindEvents = function () {
		var ul;
		var value;
		var text;
		var buttonName;
		var button;
		var overlay;
		var that = this;
		that.value = that.opt.data[0].value;
		this.zone  = $('#' + this.id);
		overlay    = this.zone.next('.select-overlay');
		ul         = this.zone.find('ul.dropdown-menu');
		button     = this.zone.find('button');
		buttonName = this.zone.find('.buttonName');

		button.click(function (e) {
			e.preventDefault();
			ul.toggle();
			overlay.toggle();
		});

		ul.delegate('li', 'click', function (e) {
			e.preventDefault();
	    	text       = $(this).children('a').text();
			value      = $(this).children('a').attr('data-value');
			that.value = value;
			buttonName.text(text);
			if (that.opt.callback && typeof that.opt.callback == 'function') {
				that.opt.callback(that.value.split('--')[0]);
			};
			ul.hide();
			overlay.hide();
		});

		overlay.click(function (){
			ul.hide();
			overlay.hide();
		});
	};

	window.IMSelect = IMSelect;
}());


(function () {
	function IMTip (opt) {
		this.opt = opt;
		this.el = this.init();
	}

	IMTip.prototype.init = function () {
		var temp = 	'<div class="im-tip">' +
						'<div class="tip-content" id="title"></div>' +'<div class="tip-content" id="method"></div>'+
						'<div class="arrow"></div>' +
					'</div>';
		return temp;
	};

	IMTip.prototype.getDom = function () {
		return this.el;
	};

	IMTip.prototype.show = function (opt) {
		this.zone = $('.im-tip');
		this.zone.find('#title').text(opt.text.methodName);
		this.zone.find('#method').text(opt.text.winningRule);
		
		delete opt.text;
		opt.display = 'inline-block';
		this.zone.css(opt);
	};

	IMTip.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMTip = IMTip;
}());


(function () {
	function ProgressLine (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = 	'<div class="im-progressline" id="' + this.id + '">' +
						'<div class="progress"></div>' +
					'</div>';
	}

	ProgressLine.prototype.getDom = function () {
		return this.el;
	};

	ProgressLine.prototype.active = function () {
		this.zone.children('.progress').addClass('active');
	};

	ProgressLine.prototype.deactive = function () {
		this.zone.children('.progress').removeClass('active');
	};

	ProgressLine.prototype.start = function (beginTimeSerials, closeTimeSerials, endTimeSerials) {
		var timeout;
		var start = 0;
		var that  = this;
		var serverTimeSerials = (new Date()).getTime() + window.jetLag;
		var totalTime = closeTimeSerials - beginTimeSerials;
		var progress = this.zone.children('.progress');

		progress.css({
			'transition-duration': '0s',
			'width': '0px'
		});

		this.zone.css({
			'opacity': '1'
		});

		if (beginTimeSerials > serverTimeSerials) totalTime = closeTimeSerials - serverTimeSerials;

		timeout = setTimeout(function () {
			that.zone.css('background-color', '#5B6483');
			progress.css({
				'transition-duration': '.3s',
				'width': (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'),
			    '-webkit-transition-timing-function': 'ease-in',
			    'transition-timing-function': 'ease-in'
			});
			clearTimeout(timeout);
		}, 100);

		this.timeout = setTimeout(function () {
			progress.attr('style','');
			progress.css('width', (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'));
			that.interval && clearInterval(that.interval);
			that.interval = setInterval(function(){
				serverTimeSerials = (new Date()).getTime() + window.jetLag;
				progress.css('width', (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'));
			},1000);

			clearTimeout(that.timeout);
		}, 600);

	};

	ProgressLine.prototype.stop = function () {
		var timeout1;
		var timeout2;
		var that = this;
		var width;
		var zoneWidth;
		var progress = this.zone.children('.progress');

		width     = parseInt(progress.css('width'));
		zoneWidth = parseInt(this.zone.css('width'));

		clearTimeout(this.timeout);
		clearInterval(this.interval);
		progress.attr('style', '');
		progress.css('width', ((width / zoneWidth)*100 + '%'));
		this.zone.css('background-color', 'transparent');

		timeout1 = setTimeout(function () {
			progress.css({
				'transition-duration': '.3s',
				'width': '0px',
			    '-webkit-transition-timing-function': 'ease-in',
			    'transition-timing-function': 'ease-in'
			});

			clearTimeout(timeout1);
		}, 100);

		timeout2 = setTimeout(function () {
			that.zone.css({
				'opacity': '0'
			});

			clearTimeout(timeout2);
		}, 600);
	};

	ProgressLine.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);
	};

	window.ProgressLine = ProgressLine;
}());


var mm = mm || {};
mm.config = {};

mm.getSerialNo = function() {
    return new Date().format("yyyyMMddhhmmss") + Math.random();
};

mm.isFunction = function(obj) {
    return typeof obj == 'function';
};

mm.getConfig = function(){
    $.ajax({
        url: '../config/service.json',
        async: false,
        success: function(data){
            mm.config['service'] = data.service;
            mm.config['debug'] = data.debug;
        },
        cache:false
    });
}

mm.consoleLog = function(data){
    if (mm.config.debug) {
        console.log(data);
    }
}

mm.Commands = {
    LOGIN: 101,
    DRAWINFO: 20,
    ACCTINFO: 3,
    RESULTLIST: 111,
    GAMESETTING: 106,
    SERVERTIME: 6,
    COMMITBET: 109,
    BETHISTORY: 113,
    CHASEHISTORY: 114,
    OPENDRAWLIST: 102,
    CHASEDETAIL: 115,
    CHASENUNBER: 108,
    MULTIPLECHASE:119,
    CANCELBETHISTORY: 110,
    CANCELCHASEHISTORY: 116,
    BATCHPLACEBET: 107,
    PAPERQUESTION: 121,
    PAPERANSWER: 122,
    MARKETLIST: 103
};

mm.Service = function() {
    var _url = null;
    var _socket = null;
    var _queue = [];
    var _register = [];
    var _session = [];
    var that = this;

    mm.Service.it = this;

    var _connect = function() {
        if (!mm.config["service"]) mm.getConfig();
        _url = mm.config["service"];
        mm.consoleLog("connect:" + _url);
        _socket = new WebSocket(_url);
        _socket.onopen = _onOpen;
        _socket.onclose = _onClose;
        _socket.onerror = _onError;
        _socket.onmessage = _onMessage;
    };

    var _send = function(command, dat, callback, sender, isMask) {
        isMask = isMask == undefined ? true : isMask;

        if (_socket && _socket.readyState == 1) {
            var serialNo = mm.getSerialNo();
            _register[serialNo] = { callback: callback, sender: sender, isMask: isMask };

            dat = dat || {};
            dat.serialNo = serialNo;
            if (command != mm.Commands.LOGIN) {
                dat.sessionId = _session["sessionId"];
                dat.token = _session["token"];
            }

            var jsData = command + "." + JSON.stringify(dat);
            _socket.send(jsData);
            return mm.consoleLog("Send:::::" + jsData);
        }

        _queue.push({
            command: command,
            dat: dat,
            callback: callback,
            sender: sender
        });
        if (!_socket || _socket.readyState == _socket.CLOSED) _connect();
    };

    /******* event ********/
    var _onOpen = function() {
        mm.consoleLog("socket open");
        while (_queue.length > 0) {
            var data = _queue.shift();
            _send(data.command, data.dat, data.callback, data.sender);
        }
    };
    var _onClose = function() {
        mm.consoleLog("socket closed");
        that.onClose();
    };
    var _onError = function() {
        mm.consoleLog("socket err");
        that.onError();
    };
    var _onMessage = function(e) {
        mm.consoleLog("Receive:::::" + e.data);
        var service = mm.Service.it;
        var obj = _getObject(e.data);
        if (!obj) return;

        var command = obj.command,
            dat = obj.dat;
        if (command == mm.Commands.LOGIN) {

            _session["sessionId"] = dat.sessionId;
            _session["token"] = dat.token;
            window.session = dat.sessionId;
            window.token = dat.token;
        }

        if (command > 0) {
            var serialNo = dat.serialNo,
                fns = _register[serialNo];
            if (!fns) return;
            delete _register[serialNo];
            that.deal(dat, fns);

        } else {
            // push message
            var fns = _register[command];
            if (fns && fns.callback && mm.isFunction(fns.callback)) fns.callback.call(fns.sender, dat);
        }
    };

    this.bindPushEvent = function(command, callback, sender) {
        _register[command] = { callback: callback, sender: sender };
    };

    this.unBindPushEvent = function(command, callback, sender) {
        delete _register[command];
    };

    /***** util *****/
    var _getObject = function(str) {
        try {
            var i = str.indexOf("{");
            return { command: parseInt(str.substr(0, i)), dat: JSON.parse(str.substr(i)) };
        } catch (e) {
            mm.consoleLog("parse json err");
            return null;
        }
    };

    /*********** api ************/
    //101
    this.login = function(req, callback, sender) {
        _send(mm.Commands.LOGIN, req, callback, sender);
    };

    //20
    this.queryDrawInfo = function(req, callback, sender) {
        _send(mm.Commands.DRAWINFO, req, callback, sender);
    };

    //3
    this.queryAcctInfo = function(req, callback, sender) {
        _send(mm.Commands.ACCTINFO, req, callback, sender);
    };

    //111
    this.queryResultList = function(req, callback, sender) {
        _send(mm.Commands.RESULTLIST, req, callback, sender);
    };

    //106
    this.queryGameSetting = function(req, callback, sender) {
        _send(mm.Commands.GAMESETTING, req, callback, sender);
    };

    this.queryServerTime = function(req, callback, sender) {
        _send(mm.Commands.SERVERTIME, req, callback, sender);
    };

    //109
    this.placeBet = function(req, callback, sender) {
        _send(mm.Commands.COMMITBET, req, callback, sender);
    };

    //113
    this.betHistory = function(req, callback, sender) {
        _send(mm.Commands.BETHISTORY, req, callback, sender);
    };

    //114
    this.chaseHistory = function(req, callback, sender) {
        _send(mm.Commands.CHASEHISTORY, req, callback, sender);
    };

    //115
    this.chaseDetail = function(req, callback, sender) {
        _send(mm.Commands.CHASEDETAIL, req, callback, sender);
    };

    //102
    this.openDrawList = function(req, callback, sender) {
        _send(mm.Commands.OPENDRAWLIST, req, callback, sender);
    };

    //108
    this.chaseNumber = function(req, callback, sender) {
        _send(mm.Commands.CHASENUNBER, req, callback, sender);
    };

    //119
    this.multipleChase = function(req, callback, sender) {
        _send(mm.Commands.MULTIPLECHASE, req, callback, sender);
    };

    //110
    this.cancelBetHistory = function(req, callback, sender) {
        _send(mm.Commands.CANCELBETHISTORY, req, callback, sender);
    };

    //116
    this.cancelChaseHistory = function(req, callback, sender) {
        _send(mm.Commands.CANCELCHASEHISTORY, req, callback, sender);
    };

    //107
    this.betchPlaceBet = function(req, callback, sender) {
        _send(mm.Commands.BATCHPLACEBET, req, callback, sender);
    };

    //121
    this.paperQuestion = function(req, callback, sender) {
        _send(mm.Commands.PAPERQUESTION, req, callback, sender);
    };

    //122
    this.paperAnswer = function(req, callback, sender) {
        _send(mm.Commands.PAPERANSWER, req, callback, sender);
    }

    //103
    this.queryHotAndNew = function(req, callback, sender) {
        _send(mm.Commands.MARKETLIST, req, callback, sender);
    }

    //fix bug firefox < 48
    window.onbeforeunload = function() {
        mm.consoleLog('page refresh');
        _socket.close();
    }

};

mm.Service.prototype.deal = function(dat, fns) {
    delete dat.sessionId;
    delete dat.token;
    delete dat.serialNo;
    var callback = fns.callback,
        sender = fns.sender;
    if (mm.isFunction(callback)) callback.call(sender, dat);
};

mm.Service.prototype.onClose = function() {};
mm.Service.prototype.onError = function() {};

mm.Service.create = function() {
    mm.Service.it = mm.Service.it || new mm.Service();
    return mm.Service.it;
};

var service = mm.Service.create();

(function() {
    'use strict';

    var MILLI_SECONDS_PER_DAY = 24*60*60*1000;

    function Util () {}

    Util.prototype.initPlaceHolder = function(lang) {
        $('input, textarea').placeholder();
    };
    Util.prototype.getQueryString = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    
    Util.prototype.initIE8 = function(lang) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        
        if (msie > 0) {
            if (ua.substring(msie + 5, msie + 8) === '8.0') {
                $('body').addClass('ie8');
            }
        }
    };
    
    Util.prototype.getTimepickerLang = function() {
        var lang = localStorage.getItem('*lang');
        var dict = {
            'zh-cn': 'zh',
            'zh-tw': 'zh-TW',
            'en-us': 'en'
        }

        return dict[lang];
    };

    Util.prototype.getDatatableLanguageConfig = function() {
        var temp = {
            'lengthMenu': i18n.t('show') + " _MENU_ " + i18n.t('records-per-page'),
            'emptyTable': i18n.t('no-data-available'),
            'paginate': {
                'next':     i18n.t('next-page'),
                'previous': i18n.t('previous-page')
            }
        };
        
        return temp;
    };

    Util.prototype.initI18next = function(lang, callback) {
        if (typeof lang == 'function') {
            callback = lang;
            lang = '';
        }

        var localePath  = '../data/i18n/';
        var browserLang = navigator.language || navigator.userLanguage;
        var storageLang = localStorage.getItem('*lang');
        var l           = lang || storageLang|| browserLang.toLowerCase();
        
        var options = {
            sendType: 'GET',
            lng: l,
            resGetPath: localePath + l + '.json',
            useLocalStorage: false,
            getAsync: false
        };
        
        if (i18n.lng() && i18n.lng() === lang) {
            return;
        }
        
        if(i18n.lng()) {
            i18n.setLng(lang, options);
        } else {
            i18n.init(options, function(){
                if (callback) {
                    callback();
                }
            });
        }
        
        if (localStorage) {
            localStorage.setItem('*lang', l);
        }

        $('body').i18n();
    };

    Util.prototype.createTable = function(options) {
        /*
        ** options = {
        **     titles: [],
        **     id: '',
        **     rownum: '',
        **     colnum: ''
        ** }
        */
        var i;

        var temp =  '<table id="' + options.id + '"cellspacing="0">' +

                        '<thead>' +
        
                            '<tr>';

        for (i = 0; i < options.titles.length; i++) {
            temp +=             '<td>' + options.titles[i] + '</td>';
        }

        temp +=             '</tr>' +

                        '</thead>' +

                        '<tbody>' +

                            this.createTableRow(options.rownum, options.colnum) +

                        '</tbody>' +
        
                    '</table>';

        return temp;
    };

    Util.prototype.createTableRow = function(rownum, colnum) {
        var i;
        var j;
        var temp = '';

        for (i = 0; i < rownum; i++) {
            if (i%2 === 0) {
                temp += '<tr class="odd">';
            } else {
                temp += '<tr class="even">';
            }
            
            for (j = 0; j < colnum; j++) {
                temp +=  '<td>--</td>';
            }
            
            temp += '</tr>';
        }

        return temp;
    };

    Util.prototype.fillTableRows = function(data, rows) {
        var i;
        var j;
        var tr;
        var cols;

        for (i = 0; i < rows.length; i++) {
            tr = rows[i];
            cols = $(tr).children('td');

            for (j = 0; j < cols.length; j++) {
                if (!data[i] || !data[i][j]) {
                    $(cols[j]).text('--');
                } else {
                    $(cols[j]).text(data[i][j]);
                }
            }
        }
    };

    Util.prototype.addTableRows = function(data, tbody) {
        var i;
        var j;
        var coldata;
        var temp = '';
        
        for (i = 0; i < data.length; i++) {
            coldata = data[i];
            
            temp += '<tr>';
            for (j = 0; j < coldata.length; j++) {
                temp += '<td>' +  coldata[j] + '</td>';
            }
            temp += '</tr>';
        }

        $(temp).appendTo(tbody);
    };

    Util.prototype.getIntervalDate = function (startDate, interval) {
        var temp = new Date(startDate.getTime() + MILLI_SECONDS_PER_DAY*interval);
        return temp;
    };

    Util.prototype.isMobile = {
        android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        blackberry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        ios7up: function() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS [7|8|9]_\d/i);
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        ipad: function () {
            var ios = this.ios();
            return !!(ios && ios[0] === 'iPad');
        },
        any: function() {
            return (this.android() || this.blackberry() || this.ios() || this.opera() || this.windows());
        }
    };

    /* ----- Date ----- */
    /**
     * Format a date as 'yyyy/MM/dd hh/mm'
     */
    Date.prototype.formatDateAndTime = function () {
        return this.formatDate() +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes()) +
               ':' + (this.getSeconds() < 10 ? '0' + this.getSeconds(): this.getSeconds());
    };

    /**
     * Format a date as 'MM-dd hh:mm'
     */
    Date.prototype.formatShortDateAndTime = function () {
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               '-' + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate()) +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes());
    };

    /**
     * Format a date as 'yyyy/MM/dd'
     */
    Date.prototype.formatDate = function (divider) {
        divider = divider || '/';
        return this.getFullYear() + divider + this.formatShortDate(divider);
    };

    /**
     * Format a date as 'MM/dd'
     */
    Date.prototype.formatShortDate = function (divider) {
        divider = divider || '/';
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               divider + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate());
    };

    Util.prototype.getDateByDateString = function(dataString){
        var arr = dataString.replace(/-| |:/g,',').split(',');
        var date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4], arr[5]);
        return date;
    };

    /**
     *

     *  Format a date as yyyy-mm-dd hh:mm:00
     */
    Util.prototype.getLocalTime = function (nS) {
       var now = new Date(nS);
        var   year=now.getFullYear();
        var   month=now.getMonth()+1;
        var   date=now.getDate();
        var   hour=now.getHours();
        var   minute=now.getMinutes();
        var   second=now.getSeconds();
        if(hour < 10){
            hour = '0'+hour
        }
        if(month<10){
            month = '0'+month
        }
        if(date < 10){
            date = '0' + date
        }
        if(minute < 10){
            minute = '0' + minute
        }
        if(second < 10){
            second = '0' + second
        }
        return   year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
    };

    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

    Array.prototype.add = function(val){
        this.remove(val);
        this.push(val);
    }

    Array.prototype.eqaul = function(arr) {
        if (this.length > 0 && this.sort().toString() == arr.sort().toString()){
            return true;
        }
        return false;
    }

    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    Util.prototype.addDotToNumber=function(num,dotLength){
        dotLength = dotLength || 2;
        num = num.toString().replace(/\$|\,/g,'');  
        if(isNaN(num))  num = "0.00";  
        var sign = (num == (num = Math.abs(num)));  
        num = Math.floor(num * Math.pow(10, dotLength) + 0.50000000001);  
        var cents = num % Math.pow(10, dotLength);  
        num = Math.floor(num / Math.pow(10, dotLength)).toString();
        if (dotLength == 2) {
            if (parseInt(cents) < 10)  cents = '0' + cents;
        }  
        if (dotLength == 3) {
            if (parseInt(cents) < 10) cents = '00' + cents;
            if (10 < parseInt(cents) && parseInt(cents) < 100) cents = '0' + cents;
        }
        if (dotLength == 4) {
            if (parseInt(cents) < 10) cents = '000' + cents;
            if (10 <= parseInt(cents) && parseInt(cents) < 100) cents = '00' + cents;
            if (100 <= parseInt(cents) && parseInt(cents) < 1000) cents = '0' + cents;
        }
        for (var i = 0; i < Math.floor((num.length - ( 1 + i )) / 3); i++)  
        num = num.substring(0,num.length - (4 * i + 3)) +','+ num.substring(num.length - (4 * i + 3)); 
        // if(isCents == false) return (((sign)? '' : '-') + num);
        return (((sign)? '' : '-') + num + '.' + cents); 
    };

    Util.prototype.rmoney = function (num) {
        return parseFloat(num.replace(/[^\d\.-]/g, ""));
    };

    Util.prototype.rangeCount = function(x, y) {
        var fx = 1,
            fy = 1;
        while (y) {
            fx *= x;
            x--;
            fy *= y;
            y--;
        }
        return fx / fy;
    };

    Util.prototype.combination = function(x, y) {
        var fx = 1,
            fy = 1;
        while (y) {
            fx *= x;
            x--;
            y--;
        }
        return fx
    };

    Util.prototype.sameBallCount = function(multiBallArr,singleBallArr) {
        var count = 0;    
        for(var i in singleBallArr){
            if(multiBallArr.indexOf(singleBallArr[i]) > -1)
                count ++;
        }
        return count;
    };
    //错误提示
    Util.prototype.errorModel = function(code,subTitle){
        var obj;
        if(!subTitle){
            subTitle = '失败'
        }
        if(typeof(app) != 'undefined'){
            obj = app;
        }else{
            obj = recordsQuery
        }
        obj.noticeDialog.show({
            subTitle: subTitle,
            text: Local[code],
            buttonName: "确定",
            autoHide: true,
            timeout: 3000
        });
    };
    //去掉重复
    Util.prototype.removeRepeat = function(list) {
        //去重复
        var a = list;
        for(var i in list){
            for(var x = list.length-1 ;x>i;x--){
                if(list[i].split("").sort().toString() == list[x].split("").sort().toString()){
                    a.splice(x,1)
                }
            }
        }
        return a
    };
    //过滤特殊字符;返回的是字符串
    Util.prototype.fifter = function(text,type){
        var val,isNum,filterText,errorText,resultText,flagError;
        val = text;
        if(typeof val == 'object')val = val.toString();
        isNum = /[^\d]/;
        filterText = '';//过滤
        errorText = [];//错误
        resultText = [];//结果
        for(var i in val) {
            if(!isNum.test(val[i])){
                filterText = filterText+''+val[i];
            }else{
                filterText = filterText+' ';
                if(val[i] != ' ' && val[i] != '|' && val[i] != ',' && val[i] != '/' && val[i] != '\n')flagError = true;
            }
        }
        var filterTextSplit = filterText.split(" ");
        for(var x = 0;x< filterTextSplit.length;x++){
            if(filterTextSplit[x].length != type){
                if(filterTextSplit[x] != ''){
                    errorText.push(filterTextSplit[x]);
                }
            }else{
                if(resultText.indexOf(filterTextSplit[x])>=0){
                    errorText.push(filterTextSplit[x]);
                }else{
                    resultText.push(filterTextSplit[x]);
                }
            }
        }
        BetRuleInstance.errorBetText_1 = errorText.join(' ');
        if(flagError)BetRuleInstance.flagError = flagError;
        return resultText;
    };
    //2个字符必须相同(array:['123','321'])
    Util.prototype.pairTwo = function(array){
        var errorText = '';
        for(var i= array.length -1;i>=0;i--){
            var num=array[i];
            var shou=array[i][0];
            var zhong=array[i][1];
            var wei=array[i][2];
            if((shou==zhong&&zhong==wei)||(shou!=zhong&&zhong!=wei&&shou!=wei)){
                errorText += array[i] + ' ';
                array.splice(i,1);
            }
        }
        BetRuleInstance.errorBetText_2 = errorText;
        return array;
    };
    //3个号不能是豹子号
    Util.prototype.pairThreeNo = function(array){
        var errorText = '';
        for(var i = array.length-1;i>=0;i--){
            if(array[i][0] == array[i][1] && array[i][0] == array[i][2] && array[i][1] == array[i][2]){
                errorText += array[i] + ' ';
                array.splice(i,1)
            }
        }
        BetRuleInstance.errorBetText_3 = errorText;
        return array
    };
    //2个号 不能是对子号；
    Util.prototype.noPair = function(array){
        var errorText = '';
        for(var i = array.length-1;i>=0;i--){
            if(array[i][0] == array[i][1] ){
                errorText += array[i] + ' ';
                array.splice(i,1)
            }
        }
        BetRuleInstance.errorBetText_4 = errorText;
        return array
    };
    //3个字符都不相同
    Util.prototype.noIdentical = function(array){
        var errorText = '';
        for(var i = array.length-1;i>=0;i--){
            if(array[i][0] == array[i][1] || array[i][0] == array[i][2] || array[i][1] == array[i][2]){
                errorText += array[i] + ' ';
                array.splice(i,1)
            }
        }
        BetRuleInstance.errorBetText_5 = errorText;
        return array
    };
    //order:排序方式（从大到小，还是从小到大）sortBy：需要比较的字段
    Util.prototype.sortNumber =  function(order, sortBy) {
        var ordAlpah = (order == 'asc') ? '>' : '<';
        var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
        return sortFun;
    }
    window.Util = new Util();
}());

/*
** 继承自IMDialog
*/

(function () {
	function BetOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.el = this.initDom();
	}

	BetOrderDetail.prototype = new IMDialog();

	BetOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '撤单',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="bet-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="close-dialog">✕</div>' +
							'<div class="content">' +
								'<table>' +
									'<tbody>' +
										'<tr class="even ">' +
											'<td class="text">注单编号：</td>' +
											'<td class="value singleNumber" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">游戏名称</td>' +
											'<td class="value gameName" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">游戏玩法：</td>' +
											'<td class="value gamePlay" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">游戏期号：</td>' +
											'<td class="value gameSeries" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">投注时间：</td>' +
											'<td class="value betTime"></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">开奖号码：</td>' +
											'<td class="value lotteryNumbers" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">开奖金额：</td>' +
											'<td class="value amount" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">倍数：</td>' +
											'<td class="value multiple"></td>' +
										'</tr>' +
										//'<tr class="odd">' +
										//	'<td class="text">单位：</td>' +
										//	'<td class="value betUnit"></td>' +
										//'</tr>' +
										'<tr class="odd">' +
											'<td class="text">注数：</td>' +
											'<td class="value betCount"></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">投注金额：</td>' +
											'<td class="value betAmount"></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">奖金组及返点：</td>' +
											'<td class="value groupRebates" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">下注金额(返水后）：</td>' +
											'<td class="value netAmount"></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">状态：</td>' +
											'<td class="value betType" ></td>' +
										'</tr>' +
									'</tbody>' +
								'</table>' +

								'<div class="number-content">' +
									'投注内容: ' +
								'</div>' +
								'<div class="textarea">' +
									'<textarea></textarea>' +
								'</div>' +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="overlay overlay2"></div>';

		return temp;
	};

	BetOrderDetail.prototype.getDom = function () {
		return this.el;
	};
	BetOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.ticketId = data.ticketId;
		this.showOverlay();
	};

	BetOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};

	BetOrderDetail.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			if ($(this).parent('.cancel').hasClass('can-not-cancel')) {
				return;
			}

			var okCallback = function () {
				var req = {
					ticketId:that.ticketId
				};
				var obj = [];
				if(typeof(app) != 'undefined'){
					obj = app;
				}else{
					obj = recordsQuery
				}
				service.cancelBetHistory(req,function(res){
					if(res.code == 0){
						that.hide();
						obj.noticeDialog.show({
							subTitle : "取消成功",
							text: "取消成功",
							buttonName: "确定",
							autoHide: true,
							timeout: 3000
						});
						if(typeof(app) != 'undefined'){
							app.bettingRecords.getBetHistory();
						}else{
							recordsQuery.getBetHistory();
						}
						that.hide();
					}else{
						Util.errorModel(res.code,'取消失败');
					}
				})
			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '确定取消当前投注吗？',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消当前投注吗？');
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.BetOrderDetail = BetOrderDetail;
}());

/*
** 继承自IMDialog
*/

(function () {
	function NoticeDialog (opt) {
		IMDialog.call(this, opt || {});
		this.id  = this.opt.id;
		this.opt = opt || {};
		this.el  = this.initDom();
	}

	NoticeDialog.prototype = new IMDialog();
	
	NoticeDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: '确定',
			className: 'sure',
			id: this.id + '-sure'
		});

		temp = 	'<div class="notice-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog' + (this.opt.subTitle?'': ' no-sub-title') + '">' +
							'<div class="title">温馨提示</div>' +
							'<div class="image">' +
								'<img src="../img/notice.png">' +
							'</div>' +
							'<div class="sub-title">' +
								(this.opt.subTitle || '') +
							'</div>' +
							'<div class="content">' +
								(this.opt.text || '') +
							'</div>' +

							'<div class="button-zone">' +
								this.sure.getDom() +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' + 

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	NoticeDialog.prototype.getDom = function () {
		return this.el;
	};

	NoticeDialog.prototype.show = function (data) {
		var that = this;

		if (data.okCallback) {
			this.okCallback = data.okCallback;
		} else {
			this.okCallback = null;
		}

		if (data.subTitle) {
			this.zone.find('.sub-title').show();
			this.zone.find('.sub-title').text(data.subTitle);
		} else {
			this.zone.find('.dialog').addClass('no-sub-title');
		}

		this.zone.find('.content').text(data.text);
		this.zone.find('.button-zone .im-button .text').text(data.buttonName);
		this.showOverlay();

		if (data.autoHide) {
			this.timeout = setTimeout(function () {
				that.hide();
			}, data.timeout || 3000);
		}
	};

	NoticeDialog.prototype.hide = function () {
		if (this.okCallback) this.okCallback();
		clearTimeout(this.timeout);
		this.hideOverlay();
	};

	NoticeDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);
		button = this.zone.find('.sure');

		button.click(function (e) {
			e.preventDefault();
			
			if (typeof that.okCallback === 'function') {
				that.okCallback();
			}
			clearTimeout(this.timeout);
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.NoticeDialog = NoticeDialog;
}());

//时时彩
var RULE_CONFIG = (RULE_CONFIG || []).concat([

    //五星
    {
        betType: 'N5P',
        gameCode: 'LT',
        name: '五星直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "五星-直选-直选复式",
        selectMethod: '从个、十、百、千、万位各选一个号码组成一注',
        winningRule: "从万位、千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖"
    }, { //特殊情况 上传
        betType: 'N5S',
        gameCode: 'LT',
        name: '五星直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "五星-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个五位数号码组成一注",
        winningRule: "手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：12345 23456 88767 33021 98897"
    }, {
        betType: 'N5C',
        gameCode: 'LT',
        name: '五星直选组合',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "五星-直选-直选组合",
        selectMethod: "从个、十、百、千、万位各选一个号码组成五注",
        winningRule: "从万位、千位、百位、十位、个位中各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码全部相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。"
    },

    {
        betType: 'G5X120',
        gameCode: 'LT',
        name: '五星组选120',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "五星-组选-组选120",
        selectMethod: "从0-9中选择5个号码组成一注",
        winningRule: "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。"
    }, {
        betType: 'G5X60',
        gameCode: 'LT',
        name: '五星组选60',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选60",
        selectMethod: "从“二重号”选择一个号码，“单号”中选择三个号码组成一注",
        winningRule: "选择1个“二重号”和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。"
    }, {
        betType: 'G5X30',
        gameCode: 'LT',
        name: '五星组选30',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选30",
        selectMethod: "从“二重号”选择两个号码，“单号”中选择一个号码组成一注",
        winningRule: "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖"
    }, {
        betType: 'G5X20',
        gameCode: 'LT',
        name: '五星组选20',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选20",
        selectMethod: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
        winningRule: "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。"
    }, {
        betType: 'G5X10',
        gameCode: 'LT',
        name: '五星组选10',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选10",
        selectMethod: "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注",
        winningRule: "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。"
    }, {
        betType: 'G5X5',
        gameCode: 'LT',
        name: '五星组选5',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选5",
        selectMethod: "从“四重号”选择一个号码，“单号”中选择一个号码组成一注",
        winningRule: "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。"
    },


    //四星玩法组规则
    {
        betType: 'N4P',
        gameCode: 'LT',
        name: '四星直选复式',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "四星-直选-直选复式",
        selectMethod: "从个、十、百、千位各选一个号码组成一注",
        winningRule: "从千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N4S',
        gameCode: 'LT',
        name: '四星直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "四星-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个四位数号码组成一注",
        winningRule: "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：1234 2345 8876 3301 9897"
    }, {
        betType: 'N4C',
        gameCode: 'LT',
        name: '四星组合',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "四星-直选-直选组合",
        selectMethod: "从个、十、百、千位各选一个号码组成四注",
        winningRule: "从千位、百位、十位、个位中至少各选一个号码组成1-4星的组合，共四注，所选号码的个位与开奖号码相同，则中1个4等奖；所选号码的个位、十位与开奖号码相同，则中1个4等奖以及1个3等奖，依此类推，最高可中4个奖。"
    },

    {
        betType: 'G4X24',
        gameCode: 'LT',
        name: '四星组选24',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "四星-组选-组选24",
        selectMethod: "从0-9中选择4个号码组成一注",
        winningRule: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖"
    }, {
        betType: 'G4X12',
        gameCode: 'LT',
        name: '四星组选12',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "四星-组选-组选12",
        selectMethod: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注",
        winningRule: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。"
    }, {
        betType: 'G4X6',
        gameCode: 'LT',
        name: '四星组选6',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "四星-组选-组选6",
        selectMethod: "从“二重号”选择两个号码组成一注",
        winningRule: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。"
    }, {
        betType: 'G4X4',
        gameCode: 'LT',
        name: '四星组选4',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "四星-组选-组选4",
        selectMethod: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
        winningRule: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。"
    },


    //前三玩法组规则
    {
        betType: 'N3PF',
        gameCode: 'LT',
        name: '前三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "前三-直选-直选复式",
        selectMethod: "从万、千、百位各选一个号码组成一注",
        winningRule: "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N3SF',
        gameCode: 'LT',
        name: '前三直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个三位数号码组成一注",
        winningRule: "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同且顺序一致，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'N3TF',
        gameCode: 'LT',
        name: '前三直选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "前三-直选-直选和值",
        selectMethod: "从0-27中任意选择1个或1个以上号码。",
        winningRule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。"
    }, {
        betType: 'N3DF',
        gameCode: 'LT',
        name: '前三直选跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-直选-直选跨度",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N3CF',
        gameCode: 'LT',
        name: '前三直选组合',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "前三-直选-直选组合",
        selectMethod: "从万、千、百位各选一个号码组成三注",
        winningRule: "从万位、千位、百位中至少各选择一个号码组成1-3星的组合共三注，当百位号码与开奖号码相同，则中1个3等奖；如果百位与千位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
    },

    {
        betType: 'G3X3F',
        gameCode: 'LT',
        name: '前三组三',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-组选-组三",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。"
    }, {
        betType: 'G3X6F',
        gameCode: 'LT',
        name: '前三组六',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-组选-组六",
        selectMethod: "从0-9中任意选择3个或3个以上号码",
        winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3MXF',
        gameCode: 'LT',
        name: '前三混合组选',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-组选-混合组选",
        selectMethod: "手动输入号码，至少输入1个三位数号码",
        winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'G3TF',
        gameCode: 'LT',
        name: '前三混合和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "前三-组选-组选和值",
        selectMethod: "从1-26中选择1个号码",
        winningRule: "所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3X3SF',
        gameCode: 'LT',
        name: '前三组三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-组选-组三单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        winningRule: "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：122 454 778 330 988"
    }, { //特殊情况 上传
        betType: 'G3X6SF',
        gameCode: 'LT',
        name: '前三组六单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-组选-组六单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
        winningRule: "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：123 456 768 350 987"
    }, {
        betType: 'G3BF',
        gameCode: 'LT',
        name: '前三包胆',
        dataFormatter: [
            []
        ],
        selectDataLength: [1],
        plateType: 3,
        title: "前三-组选-包胆",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的万位、千位、百位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。"
    },

    {
        betType: 'S3TDF',
        gameCode: 'LT',
        name: '前三和值尾数',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-其他-和值尾数",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和的尾数，即为中奖。"
    }, {
        betType: 'S3SF',
        gameCode: 'LT',
        name: '前三特殊号码',
        dataFormatter: [
            []
        ],
        plateType: 4,
        title: "前三-其他-特殊号码",
        selectMethod: "选择一个号码形态",
        winningRule: "所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.豹子号的万、千、百位出现三个相同号码； 2.顺子号的万、千、百位不分顺序；3.对子号指的是开奖号码的前三位当中，任意2位数字相同的三位数号码。"
    },


    //中三玩法组规则
    {
        betType: 'N3PM',
        gameCode: 'LT',
        name: '中三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "中三-直选-直选复式",
        selectMethod: "从千、百、十位各选一个号码组成一注",
        winningRule: "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N3SM',
        gameCode: 'LT',
        name: '中三直选单式',
        dataFormatter: [],
        plateType: 2,
        title: "中三-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个三位数号码组成一注",
        winningRule: "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同且顺序一致，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'N3TM',
        gameCode: 'LT',
        name: '中三直选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "中三-直选-直选和值",
        selectMethod: "从0-27中任意选择1个或1个以上号码。",
        winningRule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。"
    }, {
        betType: 'N3DM',
        gameCode: 'LT',
        name: '中三直选跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-直选-直选跨度",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的中间3位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N3CM',
        gameCode: 'LT',
        name: '中三直选组合',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "中三-直选-直选组合",
        selectMethod: "从千、百、十位各选一个号码组成三注",
        winningRule: "从千位、百位、十位中至少各选择一个号码组成1-3星的组合共三注，当十位号码与开奖号码相同，则中1个3等奖；如果十位与百位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
    },

    {
        betType: 'G3X3M',
        gameCode: 'LT',
        name: '中三组三',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-组选-组三",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。"
    }, {
        betType: 'G3X6M',
        gameCode: 'LT',
        name: '中三组六',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-组选-组六",
        selectMethod: "从0-9中任意选择3个或3个以上号码",
        winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3MXM',
        gameCode: 'LT',
        name: '中三混合组选',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "中三-组选-混合组选",
        selectMethod: "手动输入号码，至少输入1个三位数号码",
        winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'G3TM',
        gameCode: 'LT',
        name: '中三组选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "中三-组选-组选和值",
        selectMethod: "从1-26中选择1个号码",
        winningRule: "所选数值等于开奖号码千位、百位、十位三个数字相加之和(不含豹子号)，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3X3SM',
        gameCode: 'LT',
        name: '中三组三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "中三-组选-组三单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        winningRule: "手动输入组三号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：122 455 778 330 988"
    }, { //特殊情况 上传
        betType: 'G3X6SM',
        gameCode: 'LT',
        name: '中三组六单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "中三-组选-组六单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
        winningRule: "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：123 456 768 340 987"
    }, {
        betType: 'G3BM',
        gameCode: 'LT',
        name: '中三包胆',
        dataFormatter: [
            []
        ],
        selectDataLength: [1],
        plateType: 3,
        title: "中三-组选-包胆",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的千位、百位、十位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。"
    },

    {
        betType: 'S3TDM',
        gameCode: 'LT',
        name: '中三和值尾数',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-其他-和值尾数",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和的尾数，即为中奖。"
    }, {
        betType: 'S3SM',
        gameCode: 'LT',
        name: '中三特殊号码',
        dataFormatter: [
            []
        ],
        plateType: 4,
        title: "中三-其他-特殊号码",
        selectMethod: "选择一个号码形态",
        winningRule: "所选的号码特殊属性和开奖号码中间3位的属性一致，即为中奖。其中：1.豹子号的千、百、十位出现三个相同号码； 2.顺子号的千、百、十位不分顺序；3.对子号指的是开奖号码的中间三位当中，任意2位数字相同的三位数号码。"
    },


    //后三玩法组规则
    {
        betType: 'N3PL',
        gameCode: 'LT',
        name: '后三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "后三-直选-直选复式",
        selectMethod: "从个、十、百位各选一个号码组成一注",
        winningRule: "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N3SL',
        gameCode: 'LT',
        name: '后三直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个三位数号码组成一注",
        winningRule: "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'N3TL',
        gameCode: 'LT',
        name: '后三直选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "后三-直选-直选和值",
        selectMethod: "从0-27中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。"
    }, {
        betType: 'N3DL',
        gameCode: 'LT',
        name: '后三直选跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-直选-直选跨度",
        selectMethod: "从0-9中选择1个号码。",
        winningRule: "所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N3CL',
        gameCode: 'LT',
        name: '后三直选组合',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "后三-直选-直选组合",
        selectMethod: "从个、十、百位各选一个号码组成三注",
        winningRule: "从百位、十位、个位中至少各选择一个号码组成1-3星的组合共三注，当个位号码与开奖号码相同，则中1个3等奖；如果个位与十位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
    },

    {
        betType: 'G3X3L',
        gameCode: 'LT',
        name: '后三组三',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-组选-组三",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。"
    }, {
        betType: 'G3X6L',
        gameCode: 'LT',
        name: '后三组六',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-组选-组六",
        selectMethod: "从0-9中任意选择3个或3个以上号码。",
        winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3MXL',
        gameCode: 'LT',
        name: '后三混合组选',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-组选-混合组选",
        selectMethod: "手动输入号码，至少输入1个三位数号码。",
        winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'G3TL',
        gameCode: 'LT',
        name: '后三组选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "后三-组选-组选和值",
        selectMethod: "从1-26中选择1个号码",
        winningRule: "所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3X3SL',
        gameCode: 'LT',
        name: '后三组三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-组选-组三单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        winningRule: "手动输入组三号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：113 446 778 330 988"
    }, { //特殊情况 上传
        betType: 'G3X6SL',
        gameCode: 'LT',
        name: '后三组六单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-组选-组六单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
        winningRule: "手动输入组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：123 456 768 340 908"
    }, {
        betType: 'G3BL',
        gameCode: 'LT',
        name: '后三包胆',
        dataFormatter: [
            []
        ],
        selectDataLength: [1],
        plateType: 3,
        title: "后三-组选-包胆",
        selectMethod: "从0-9中选择1个号码。",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的百位、十位、个位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖。"
    },

    {
        betType: 'S3TDL',
        gameCode: 'LT',
        name: '后三和值尾数',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-其他-和值尾数",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和的尾数，即为中奖。"
    }, {
        betType: 'S3SL',
        gameCode: 'LT',
        name: '后三特殊号码',
        dataFormatter: [
            []
        ],
        plateType: 4,
        title: "后三-其他-特殊号码",
        selectMethod: "选择一个号码形态",
        winningRule: "所选的号码特殊属性和开奖号码后3位的属性一致，即为中奖。其中：1.豹子号的个、十、百位出现三个相同号码；2.顺子号的个、十、百位不分顺序；3.对子号指的是开奖号码的后三位当中，任意2位数字相同的三位数号码。"
    },


    //二星玩法组规则
    {
        betType: 'N2PL',
        gameCode: 'LT',
        name: '二星直选后二复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "二星-直选-后二复式",
        selectMethod: "从十、个位各选一个号码组成一注",
        winningRule: "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N2SL',
        gameCode: 'LT',
        name: '二星直选后二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-直选-后二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码",
        winningRule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：12 45 78 33 88"
    }, {
        betType: 'N2TL',
        gameCode: 'LT',
        name: '二星直选后二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-直选-后二和值",
        selectMethod: "从0-18中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。"
    }, {
        betType: 'N2DL',
        gameCode: 'LT',
        name: '二星直选后二跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-直选-后二跨度",
        selectMethod: "从0-9中任意选择1个号码 ",
        winningRule: "所选数值等于开奖号码的后2位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N2PF',
        gameCode: 'LT',
        name: '二星直选前二复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "二星-直选-前二复式",
        selectMethod: "从万、千位各选一个号码组成一注",
        winningRule: "从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的万位、千位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N2SF',
        gameCode: 'LT',
        name: '二星直选前二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-直选-前二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码",
        winningRule: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：12 45 78 33 88"
    }, {
        betType: 'N2TF',
        gameCode: 'LT',
        name: '二星直选前二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-直选-前二和值",
        selectMethod: "从0-18中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。"
    }, {
        betType: 'N2DF',
        gameCode: 'LT',
        name: '二星直选前二跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-直选-前二跨度",
        selectMethod: "从0-9中任意选择1个号码。",
        winningRule: "所选数值等于开奖号码的前2位最大与最小数字相减之差，即为中奖。"
    },

    {
        betType: 'G2L',
        gameCode: 'LT',
        name: '二星组选后二复式',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-组选-后二复式",
        selectMethod: "从0-9中任意选择2个或2个以上号码。",
        winningRule: "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。"
    }, { //特殊情况 上传
        betType: 'G2SL',
        gameCode: 'LT',
        name: '二星组选后二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-组选-后二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码",
        winningRule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
        betRuleTip: "格式范例：12 45 78 34 89"
    }, {
        betType: 'G2TL',
        gameCode: 'LT',
        name: '二星组选后二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-组选-后二和值",
        selectMethod: "从1-17中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。"
    }, {
        betType: 'G2BL',
        gameCode: 'LT',
        name: '二星组选后二包胆',
        dataFormatter: [
            []
        ],
        plateType: 3,
        selectDataLength: [1],
        title: "二星-组选-后二包胆",
        selectMethod: "从0-9中任意选择1个包胆号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的十位、个位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。"
    }, {
        betType: 'G2F',
        gameCode: 'LT',
        name: '二星组选前二复式',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-组选-前二复式",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限（不含对子号），即为中奖。"
    }, { //特殊情况 上传
        betType: 'G2SF',
        gameCode: 'LT',
        name: '二星组选前二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-组选-前二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码组成一注",
        winningRule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：12 45 78 34 89"
    }, {
        betType: 'G2TF',
        gameCode: 'LT',
        name: '二星组选前二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-组选-前二和值",
        selectMethod: "从1-17中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。"
    }, {
        betType: 'G2BF',
        gameCode: 'LT',
        name: '二星组选前二包胆',
        dataFormatter: [
            []
        ],
        plateType: 3,
        selectDataLength: [1],
        title: "二星-组选-前二包胆",
        selectMethod: "从0-9中任意选择1个包胆号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的万位、千位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。"
    },

    //一星玩法组规则
    {
        betType: 'N1',
        gameCode: 'LT',
        name: '一星定位胆',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "一星-定位胆-定位胆",
        selectMethod: "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码",
        winningRule: "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。"
    },


    //不定式玩法组规则
    {
        betType: 'A1L3',
        gameCode: 'LT',
        name: '后三一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-后三一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2L3',
        gameCode: 'LT',
        name: '后三二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-后三二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。"
    }, {
        betType: 'A1F3',
        gameCode: 'LT',
        name: '前三一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-前三一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2F3',
        gameCode: 'LT',
        name: '前三二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-前三二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。"
    }, {
        betType: 'A1M3',
        gameCode: 'LT',
        name: '中三一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-中三一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2M3',
        gameCode: 'LT',
        name: '中三二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-中三二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位中同时包含所选的2个号码，即为中奖。"
    },

    {
        betType: 'A1L4',
        gameCode: 'LT',
        name: '四星一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-四星不定位-四星一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2L4',
        gameCode: 'LT',
        name: '四星二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-四星不定位-四星二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖"
    },

    {
        betType: 'A2N5',
        gameCode: 'LT',
        name: '五星二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-五星不定位-五星二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。"
    }, {
        betType: 'A3N5',
        gameCode: 'LT',
        name: '五星三码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-五星不定位-五星三码不定位",
        selectMethod: "从0-9中任意选择3个以上号码",
        winningRule: "从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。"
    },


    //大小单双玩法组规则
    {
        betType: 'BSOEL2',
        gameCode: 'LT',
        name: '后二大小单双',
        dataFormatter: [
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-后二大小单双",
        selectMethod: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEL3',
        gameCode: 'LT',
        name: '后三大小单双',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-后三大小单双",
        selectMethod: "从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEF2',
        gameCode: 'LT',
        name: '前二大小单双',
        dataFormatter: [
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-前二大小单双",
        selectMethod: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对万位、千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEF3',
        gameCode: 'LT',
        name: '前三大小单双',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-前三大小单双",
        selectMethod: "从万位、千位、百位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对万位、千位和百位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEM3',
        gameCode: 'LT',
        name: '中三大小单双',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-中三大小单双",
        selectMethod: "从千位、百位、十位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对千位和百位、十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    },



    //趣味玩法组规则
    {
        betType: 'F5N3',
        gameCode: 'LT',
        name: '五码趣味三星',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1, 2],
        title: "趣味-趣味-五码趣味三星",
        selectMethod: "分别从万位与千位中各选择一个大小号属性，并从百位、十位、个位中至少各选1个号码组成一注",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位与万位的“大小号”中分别任选一种号码进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F4N3',
        gameCode: 'LT',
        name: '四码趣味三星',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-四码趣味三星",
        selectMethod: "选择一个千位的大小号属性，并从百位、十位、个位中至少各选1个号码",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位“大小号”中任选一种号码属性进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F3N2L',
        gameCode: 'LT',
        name: '后三趣味二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-后三趣味二星",
        selectMethod: "选择一个百位的大小号属性，并从十位、个位中至少各选1个号码",
        winningRule: "在个位、十位上至少各选1个号码，并从百位“大小号”中任选一种号码属性进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容和开奖号码的后二位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F3N2F',
        gameCode: 'LT',
        name: '前三趣味二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-前三趣味二星",
        selectMethod: "选择一个万位的大小号属性，并从千位、百位中至少各选1个号码",
        winningRule: "在千位、百位上至少各选1个号码，并从万位 “大小号”中任选一种号码属性进行投注。0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的千位和百位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F3N2M',
        gameCode: 'LT',
        name: '中三趣味二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-中三趣味二星",
        selectMethod: "选择一个千位的大小号属性，并从百位、十位中至少各选1个号码",
        winningRule: "在百位、十位上至少各选1个号码，并从千位 “大小号”中任选一种号码属性进行投注。0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的百位和十位相同，顺序一致，即可中奖。"
    },

    {
        betType: 'R5N3',
        gameCode: 'LT',
        name: '五码区间三星',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1, 2],
        title: "趣味-区间-五码区间三星",
        selectMethod: "分别从万位与千位中各选择一个区间，并从百位、十位、个位中至少各选1个号码组成一注",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位及万位的5个区间中至少分别选择一个区间进行投注。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R4N3',
        gameCode: 'LT',
        name: '四码区间三星',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-四码区间三星",
        selectMethod: "选择一个千位号码区间，并从百位、十位、个位中至少各选择1个号码组成一注",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位的5个区间中至少任选一个区间进行投注。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R3N2L',
        gameCode: 'LT',
        name: '后三区间二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-后三区间二星",
        selectMethod: "选择一个百位号码区间，并从十位、个位中至少各选择1个号码组成一注",
        winningRule: "选择一个百位号码区间，并从十位、个位中各选择1个号码组成一注。投注内容只要和开奖号码的后二位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R3N2F',
        gameCode: 'LT',
        name: '前三区间二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-前三区间二星",
        selectMethod: "选择一个万位号码区间，并从千位、百位中至少各选择1个号码组成一注",
        winningRule: "选择一个万位号码区间，并从千位、百位中至少各选择1个号码组成一注。投注内容只要和开奖号码的千位和百位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R3N2M',
        gameCode: 'LT',
        name: '中三区间二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-中三区间二星",
        selectMethod: "选择一个千位号码区间，并从百位、十位中至少各选择1个号码组成一注",
        winningRule: "选择一个千位号码区间，并从百位、十位中至少各选择1个号码组成一注。投注内容只要和开奖号码的百位和十位相同，顺序一致，即可中奖。"
    },

    {
        betType: 'SA1',
        gameCode: 'LT',
        name: '一帆风顺',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-一帆风顺",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。"
    }, {
        betType: 'SA2',
        gameCode: 'LT',
        name: '好事成双',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-好事成双",
        selectMethod: "从0-9中任意选择1个以上的二重号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。"
    }, {
        betType: 'SA3',
        gameCode: 'LT',
        name: '三星报喜',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-三星报喜",
        selectMethod: "从0-9中任意选择1个以上的三重号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。"
    }, {
        betType: 'SA4',
        gameCode: 'LT',
        name: '四季发财',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-四季发财",
        selectMethod: "从0-9中任意选择1个以上的四重号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。"
    },


    //任选玩法组规则
    {
        betType: 'A2P',
        gameCode: 'LT',
        name: '任选二直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "任选-任选二-直选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少两位上各选1个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，百位8。开奖号码：51812，即中任二直选。"
    }, { //特殊情况 上传
        betType: 'A2S',
        gameCode: 'LT',
        name: '任选二直选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选二-直选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：位置选择万位、百位，输入号码58。开奖号码：51812，即中任二直选单式。",
        betRuleTip: "格式范例：12 45 78 33 88"
    }, {
        betType: 'A2T',
        gameCode: 'LT',
        name: '任选二直选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        unitGroup: true,
        title: "任选-任选二-直选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
        winningRule: "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位，选择和值号码13。开奖号码：51812，即中任二直选和值。"
    }, {
        betType: 'A2G2',
        gameCode: 'LT',
        name: '任选二组选复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选二-组选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，号码区至少选择两个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选复试。"
    }, { //特殊情况 上传
        betType: 'A2G2S',
        gameCode: 'LT',
        name: '任选二组选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选二-组选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选单式。",
        betRuleTip: "格式范例：12 45 78 34 89"
    }, {
        betType: 'A2G2T',
        gameCode: 'LT',
        name: '任选二组选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        unitGroup: true,
        title: "任选-任选二-组选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
        winningRule: "所选号码数值等于开奖号码的二个数字相加之和，即为中奖。如投注方案：选择万位和百位，选择和值13。开奖号码：51812或81512，即中任二组选和值。"
    },

    {
        betType: 'A3P',
        gameCode: 'LT',
        name: '任选三直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "任选-任选三-直选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少三位上各选1个号码组成一注，",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，千位8，个位2。开奖号码58692，即中任三直选。"
    }, { //特殊情况 上传
        betType: 'A3S',
        gameCode: 'LT',
        name: '任选三直选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-直选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少手动输入一个三位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。投注方案：位置选择万位、百位和个位，输入号码528，开奖号码57298，即中任三直选（单式）。",
        betRuleTip: "格式范例：123 456 789 335 882"
    }, {
        betType: 'A3T',
        gameCode: 'LT',
        name: '任选三直选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        unitGroup: true,
        title: "任选-任选三-直选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注，所选号码与开奖号码的和值相同，即为中奖。",
        winningRule: "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位和个位，选择和值号码15，开奖号码51812，即中任三直选和值。"
    }, {
        betType: 'A3G3X3',
        gameCode: 'LT',
        name: '任选三组三复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选三-组三复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择两个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码12，开奖号码11812，即中任三组三。"
    }, { //特殊情况 上传
        betType: 'A3G3X3S',
        gameCode: 'LT',
        name: '任选三组三单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-组三单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动输入号码，至少1个三位数号码。（三个数字当中有两个数字相同）",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖，如投注方案：选择位置万位、十位、个位，输入号码112，开奖号码：17421，即中任三组三（单式）。",
        betRuleTip: "格式范例：122 446 779 335 882"
    }, {
        betType: 'A3G3X6',
        gameCode: 'LT',
        name: '任选三组六复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选三-组六复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择三个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码512，开奖号码51812，即中任三组六。"
    }, { //特殊情况 上传
        betType: 'A3G3X6S',
        gameCode: 'LT',
        name: '任选三组六单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-组六单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动输入至少三个号码构成一注（三个号码不相同）。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三组六（单式）。",
        betRuleTip: "格式范例：123 456 789 345 892"
    }, { //特殊情况 上传
        betType: 'A3G3MX',
        gameCode: 'LT',
        name: '任选三混合组选',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-混合组选",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动至少输入三个号码构成一注（不包含豹子号）。",
        winningRule: "所选号码与开奖号码的指定位置的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三混合组选。",
        betRuleTip: "格式范例：123 456 789 335 882"
    }, {
        betType: 'A3G3T',
        gameCode: 'LT',
        name: '任选三组选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        title: "任选-任选三-组选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注",
        winningRule: "所选号码与开奖号码（不含豹子号）的指定位置的号码之和相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择和值号码8，开奖号码51812，即中任三组选和值。"
    },

    {
        betType: 'A4P',
        gameCode: 'LT',
        name: '任选四直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "任选-任选四-直选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少四位上各选1个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，千位1，百位8，个位1，开奖号码51821，即中任四直选复式。"
    }, { //特殊情况 上传
        betType: 'A4S',
        gameCode: 'LT',
        name: '任选四直选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选四-直选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，至少手动输入一个四位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方式：选择万位、千位、百位和个位，输入号码5181，开奖号码51821，即中任四直选单式。",
        betRuleTip: "格式范例：1234 4567 6789 3352 8827"
    }, {
        betType: 'A4G4X24',
        gameCode: 'LT',
        name: '任选四组选24',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选24",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，号码区至少选择四个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择万位、百位、十位和个位，号码选择0568，开奖号码57086（顺序不限），即中任四组选24。"
    }, {
        betType: 'A4G4X12',
        gameCode: 'LT',
        name: '任选四组选12',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选12",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：8，单号：06，开奖号码58086（顺序不限），即中任四组选12。"
    }, {
        betType: 'A4G4X6',
        gameCode: 'LT',
        name: '任选四组选6',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选6",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”中至少选择两个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：28，开奖号码58282（顺序不限），即中任四组选6。"
    }, {
        betType: 'A4G4X4',
        gameCode: 'LT',
        name: '任选四组选4',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选4",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“三重号”中选择一个号码，“单号”中选择一个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，三重号：8，单号：2，开奖号码58882（顺序不限），即中任四组选4。"
    },


    //龙虎和玩法组规则 
    {
        betType: 'LH54',
        gameCode: 'LT',
        name: '龙虎和万千',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万千",
        selectMethod: "从万位、千位上选择一个形态组成一注。",
        winningRule: "根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH53',
        gameCode: 'LT',
        name: '龙虎和万百',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万百",
        selectMethod: "从万位、百位上选择一个形态组成一注。",
        winningRule: "根据万位、百位号码数值比大小，万位号码大于百位号码为龙，万位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH52',
        gameCode: 'LT',
        name: '龙虎和万十',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万十",
        selectMethod: "从万位、十位上选择一个形态组成一注。",
        winningRule: "根据万位、十位号码数值比大小，万位号码大于十位号码为龙，万位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH51',
        gameCode: 'LT',
        name: '龙虎和万个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万个",
        selectMethod: "从万位、个位上选择一个形态组成一注。",
        winningRule: "根据万位、个位号码数值比大小，万位号码大于个位号码为龙，万位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH43',
        gameCode: 'LT',
        name: '龙虎和千百',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-千百",
        selectMethod: "从千位、百位上选择一个形态组成一注。",
        winningRule: "根据千位、百位号码数值比大小，千位号码大于百位号码为龙，千位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH42',
        gameCode: 'LT',
        name: '龙虎和千十',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-千十",
        selectMethod: "从千位、十位上选择一个形态组成一注。",
        winningRule: "根据千位、十位号码数值比大小，千位号码大于十位号码为龙，千位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH41',
        gameCode: 'LT',
        name: '龙虎和千个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-千个",
        selectMethod: "从千位、个位上选择一个形态组成一注。",
        winningRule: "根据千位、个位号码数值比大小，千位号码大于个位号码为龙，千位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH32',
        gameCode: 'LT',
        name: '龙虎和百十',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-百十",
        selectMethod: "从百位、十位上选择一个形态组成一注。",
        winningRule: "根据百位、十位号码数值比大小，百位号码大于十位号码为龙，百位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH31',
        gameCode: 'LT',
        name: '龙虎和百个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-百个",
        selectMethod: "从百位、个位上选择一个形态组成一注。",
        winningRule: "根据百位、个位号码数值比大小，百位号码大于个位号码为龙，百位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH21',
        gameCode: 'LT',
        name: '龙虎和十个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-十个",
        selectMethod: "从十位、个位上选择一个形态组成一注。",
        winningRule: "根据十位、个位号码数值比大小，十位号码大于个位号码为龙，十位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }
]);

//11选5玩法
var RULE_CONFIG = (RULE_CONFIG || []).concat([

    //三码
    {
        betType: 'N3PH',
        gameCode: 'HL11x5',
        name: '前三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 10,
        title: "三码-直选-前三直选复式",
        selectMethod: "从第一位、第二位、第三位中至少各选择1个号码",
        winningRule: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。"
    }, {
        betType: 'N3SH',
        gameCode: 'HL11x5',
        name: '前三直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "三码-直选-前三直选单式",
        selectMethod: "手动输入至少3个号码组成一注",
        winningRule: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：01 02 03|03 04 05|07 08 11"
    },

    {
        betType: 'G3H',
        gameCode: 'HL11x5',
        name: '前三组选复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "三码-组选-前三组选复式",
        selectMethod: "从01-11中任意选择3个或3个以上号码",
        winningRule: "从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。"
    }, {
        betType: 'G3SH',
        gameCode: 'HL11x5',
        name: '前三组选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "三码-组选-前三组选单式",
        selectMethod: "手动输入至少3个号码组成一注",
        winningRule: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：01 02 03|03 04 05|07 08 11"
    }, {
        betType: 'G3BH',
        gameCode: 'HL11x5',
        name: '前三组选胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [2],
        title: "三码-组选-前三组选胆拖",
        selectMethod: "从01-11中，选取3个或3个以上号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个",
        winningRule: "分别从胆码和拖码的01-11中，选取3个及以上的号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个，所选单注号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。"
    },

    //二码
    {
        betType: 'N2PH',
        gameCode: 'HL11x5',
        name: '前二直选复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        title: "二码-直选-前二直选复式",
        selectMethod: "从第一位、第二位中至少各选择1个号码",
        winningRule: "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。"
    }, {
        betType: 'N2SH',
        gameCode: 'HL11x5',
        name: '前二直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二码-直选-前二直选单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码组成一注",
        winningRule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：01 02|03 04|07 08"
    },

    {
        betType: 'G2H',
        gameCode: 'HL11x5',
        name: '前二组选复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "二码-组选-前二组选复式",
        selectMethod: "从01-11中任意选择2个或2个以上号码",
        winningRule: "从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。"
    }, {
        betType: 'G2SH',
        gameCode: 'HL11x5',
        name: '前二组选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二码-组选-前二组选单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码组成一注",
        winningRule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：01 02|03 04|07 08"
    }, {
        betType: 'G2BH',
        gameCode: 'HL11x5',
        name: '前二组选胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [1],
        title: "二码-组选-前二组选胆拖",
        selectMethod: "从01-11中，选取2个或2个以上号码进行投注，胆码个数=1个，胆码加拖码个数≥2个",
        winningRule: "分别从胆码和拖码的01-11中，选取2个及以上的号码进行投注，胆码个数=1个，胆码加拖码个数≥2个，所选单注号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。"
    },

    //不定式
    {
        betType: 'A1H3',
        gameCode: 'HL11x5',
        name: '前三不定式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "不定位-不定位-前三不定位",
        selectMethod: "从01-11中任意选择1个或1个以上号码",
        winningRule: "从01-11中共11个号码中选择1个号码，每注号码由1个号码组成，只要当期顺利摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖"
    },

    //趣味型
    {
        betType: 'FOEC',
        gameCode: 'HL11x5',
        name: '定单双',
        dataFormatter: [
            []
        ],
        plateType: 9,
        title: "趣味型-趣味型-定单双",
        selectMethod: "从不同的单双组合中任意选择1个或1个以上的组合",
        winningRule: "从6种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。"
    }, {
        betType: 'FMN',
        gameCode: 'HL11x5',
        name: '猜中位',
        dataFormatter: [
            []
        ],
        plateType: 11,
        title: "趣味型-趣味型-猜中位",
        selectMethod: "从3-9中任意选择1个或1个以上数字",
        winningRule: "从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。"
    },

    //定位胆
    {
        betType: 'P3',
        gameCode: 'HL11x5',
        name: '定位胆',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 10,
        title: "定位胆-定位胆-定位胆",
        selectMethod: "从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码",
        winningRule: "从第一位、第二位、第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。"
    },

    //任选复式
    {
        betType: 'A1',
        gameCode: 'HL11x5',
        name: '任选一中一复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选一中一复式",
        selectMethod: "从01-11中任意选择1个或1个以上号码",
        winningRule: "从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {
        betType: 'A2',
        gameCode: 'HL11x5',
        name: '任选二中二复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选二中二复式",
        selectMethod: "从01-11中任意选择2个或2个以上号码",
        winningRule: "从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A3',
        gameCode: 'HL11x5',
        name: '任选三中三复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选三中三复式",
        selectMethod: "从01-11中任意选择3个或3个以上号码",
        winningRule: "从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A4',
        gameCode: 'HL11x5',
        name: '任选四中四复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选四中四复式",
        selectMethod: "从01-11中任意选择4个或4个以上号码",
        winningRule: "从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A5',
        gameCode: 'HL11x5',
        name: '任选五中五复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选五中五复式",
        selectMethod: "从01-11中任意选择5个或5个以上号码",
        winningRule: "从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A6',
        dataFormatter: [
            []
        ],
        plateType: 10,
        gameCode: 'HL11x5',
        name: '任选六中五复式',
        title: "任选复式-任选复式-任选六中五复式",
        selectMethod: "从01-11中任意选择6个或6个以上号码",
        winningRule: "投注方案：01 02 03 04 05 06；开奖号码包含01 02 03 04 05，顺序不限，即中任六中五一等奖"
    }, {
        betType: 'A7',
        gameCode: 'HL11x5',
        name: '任选七中五复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选七中五复式",
        selectMethod: "从01-11中任意选择7个或7个以上号码",
        winningRule: "从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"

    }, {
        betType: 'A8',
        gameCode: 'HL11x5',
        name: '任选八中五复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选八中五复式",
        selectMethod: "从01-11中任意选择8个或8个以上号码",
        winningRule: "从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    },

    //任选单式
    {
        betType: 'A1S',
        gameCode: 'HL11x5',
        name: '任选一中一单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选一中一单式",
        selectMethod: "手动输入号码，从01-11中任意输入1个号码组成一注",
        winningRule: "从01-11中手动输入1个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01|03|07"
    }, {
        betType: 'A2S',
        gameCode: 'HL11x5',
        name: '任选二中二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选二中二单式",
        selectMethod: "手动输入号码，从01-11中任意输入2个号码组成一注",
        winningRule: "从01-11中手动输入2个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02|03 04|07 08"
    }, {
        betType: 'A3S',
        gameCode: 'HL11x5',
        name: '任选三中三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选三中三单式",
        selectMethod: "手动输入号码，从01-11中任意输入3个号码组成一注",
        winningRule: "从01-11中手动输入3个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03|03 04 05|07 08 11"
    }, {
        betType: 'A4S',
        gameCode: 'HL11x5',
        name: '任选四中四单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选四中四单式",
        selectMethod: "手动输入号码，从01-11中任意输入4个号码组成一注",
        winningRule: "从01-11中手动输入4个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04|05 06 07 08"
    }, {
        betType: 'A5S',
        gameCode: 'HL11x5',
        name: '任选五中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选五中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入5个号码组成一注",
        winningRule: "从01-11中手动输入5个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05|04 05 06 07 08"
    }, {
        betType: 'A6S',
        gameCode: 'HL11x5',
        name: '任选六中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选六中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入6个号码组成一注",
        winningRule: "从01-11中手动输入6个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05 06|03 04 05 06 07 08"
    }, {
        betType: 'A7S',
        gameCode: 'HL11x5',
        name: '任选七中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选七中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入7个号码组成一注",
        winningRule: "从01-11中手动输入7个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05 06 07|02 03 04 05 06 07 08"
    }, {
        betType: 'A8S',
        gameCode: 'HL11x5',
        name: '任选八中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选八中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入8个号码组成一注",
        winningRule: "从01-11中手动输入8个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05 06 07 08|02 03 04 05 06 07 08 09"
    },

    //任选胆拖
    {
        betType: 'A2B',
        gameCode: 'HL11x5',
        name: '任选二中二胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [1],
        title: "任选胆拖-任选胆拖-任选二中二胆拖",
        selectMethod: "从01-11中，选取2个及以上的号码进行投注，每注需至少包括1个胆码及1个拖码",
        winningRule: "从01-11共11个号码中选择2个及以上号码进行投注，每注需至少包括1个胆码及1个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A3B',
        gameCode: 'HL11x5',
        name: '任选三中三胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [2],
        title: "任选胆拖-任选胆拖-任选三中三胆拖",
        selectMethod: "从01-11中，选取3个及以上的号码进行投注，每注需至少包括1个胆码及2个拖码",
        winningRule: "从01-11共11个号码中选择3个及以上号码进行投注，每注需至少包括1个胆码及2个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A4B',
        gameCode: 'HL11x5',
        name: '任选四中四胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [3],
        title: "任选胆拖-任选胆拖-任选四中四胆拖",
        selectMethod: "从01-11中，选取4个及以上的号码进行投注，每注需至少包括1个胆码及3个拖码",
        winningRule: "从01-11共11个号码中选择4个及以上号码进行投注，每注需至少包括1个胆码及3个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A5B',
        gameCode: 'HL11x5',
        name: '任选五中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [4],
        title: "任选胆拖-任选胆拖-任选五中五胆拖",
        selectMethod: "从01-11中，选取5个及以上的号码进行投注，每注需至少包括1个胆码及4个拖码",
        winningRule: "从01-11共11个号码中选择5个及以上号码进行投注，每注需至少包括1个胆码及4个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A6B',
        gameCode: 'HL11x5',
        name: '任选六中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [5],
        title: "任选胆拖-任选胆拖-任选六中五胆拖",
        selectMethod: "从01-11中，选取6个及以上的号码进行投注，每注需至少包括1个胆码及5个拖码",
        winningRule: "从01-11共11个号码中选择6个及以上号码进行投注，每注需至少包括1个胆码及5个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A7B',
        gameCode: 'HL11x5',
        name: '任选七中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [6],
        title: "任选胆拖-任选胆拖-任选七中五胆拖",
        selectMethod: "从01-11中，选取7个及以上的号码进行投注，每注需至少包括1个胆码及6个拖码",
        winningRule: "从01-11共11个号码中选择7个及以上号码进行投注，每注需至少包括1个胆码及6个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A8B',
        gameCode: 'HL11x5',
        name: '任选八中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [7],
        title: "任选胆拖-任选胆拖-任选八中五胆拖",
        selectMethod: "从01-11中，选取8个及以上的号码进行投注，每注需至少包括1个胆码及7个拖码",
        winningRule: "从01-11共11个号码中选择8个及以上号码进行投注，每注需至少包括1个胆码及7个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }
]);

//快3
var RULE_CONFIG = (RULE_CONFIG || []).concat([

    //和值
    {
        betType: 'N3T',
        gameCode: 'K3',
        name: '和值',
        dataFormatter: [
            []
        ],
        plateType: '12',
        title: "快3-快3-和值",
        selectMethod: '至少选择1个和值（3个号码之和）',//15.60
        winningRule: "至少选择1个和值（3个号码之和）进行投注，所选和值与开奖的3个号码的和值相同即中奖"
    },

    //三不同号
    {
        betType: 'N3D',
        gameCode: 'K3',
        name: '三不同号',
        dataFormatter: [
            []
        ],
        plateType: '13-1',
        title: "快3-快3-三不同号",
        selectMethod: '对所有3不同号进行单选或多选',//70.20
        winningRule: "对所有3不同号进行单选或多选，选号与开奖号相同（顺序不限）即中奖"
    },

    //三同号
    {
        betType: 'N3TRI',
        gameCode: 'K3',
        name: '三同号',
        dataFormatter: [
            []
        ],
        plateType: '13-2',
        title: "快3-快3-三同号",
        selectMethod: '豹子号（111，222，333，444，555，666）进行单选或通选',//421.20
        winningRule: "对豹子号（111，222，333，444，555，666）进行单选或通选投注，选号与开奖号相同即中奖"
    },

    //三连号
    {
        betType: 'N3SN',
        gameCode: 'K3',
        name: '三连号',
        dataFormatter: [
            []
        ],
        plateType: '13-3',
        title: "快3-快3-三连号",
        selectMethod: '3个相连的号码（123，234，345，456)进行单选或多选',//70.20
        winningRule: "对所有3个相连的号码（123，234，345，456)进行单选或多选投注，选号与开奖号相同（顺序不限）即中奖"
    },

    //二不同号
    {
        betType: 'N2D',
        gameCode: 'K3',
        name: '二不同号',
        dataFormatter: [
            []
        ],
        plateType: '13-4',
        title: "快3-快3-二不同号",
        selectMethod: '2不同号进行单选或多选',//14.04
        winningRule: "对所有2不同号进行单选或多选，选号与开奖号中任意2个号码相同即中奖"
    },

    //二同号
    {
        betType: 'N3PAIR',
        gameCode: 'K3',
        name: '二同号',
        dataFormatter: [
            []
        ],
        plateType: '13-5',
        title: "快3-快3-二同号",
        selectMethod: '选择1对相同号码和1个不同号码',//140.40
        winningRule: "选择1对相同号码和1个不同号码进行单选或者多选投注，选号与开奖号相同（顺序不限）即中奖"
    },

    //单挑一骰
    {
        betType: 'N1',
        gameCode: 'K3',
        name: '单挑一骰',
        dataFormatter: [
            []
        ],
        plateType: '14',
        title: "快3-快3-单挑一骰",
        selectMethod: '选择1个或者多个骰号',//4.63
        winningRule: "选择1个或者多个骰号，如果开奖号码中包含该号（顺序不限）即中奖"
    }

]);

OriginalItemObj = {

    LT:{
        //万千百十个
        WQBSG_item:[
            'N5P',
            'N5C',
            'N4P',
            'N4C',
            'N3PF',
            'N3CF',
            'N3PM',
            'N3CM',
            'N3PL',
            'N3CL',
            'N2PL',
            'N2PF',
            "N1",
            "A2P",
            "A3P",
            "A4P"
        ],
        //龙虎和大小单双,//趣味
        LHTDXDS_item:[
            "BSOEL2",
            "BSOEL3",
            "BSOEF2",
            "BSOEF3",
            "BSOEM3",
            "LH54",
            "LH53",
            "LH52",
            "LH51",
            "LH43",
            "LH42",
            "LH41",
            "LH32",
            "LH31",
            "LH21",
            "F5N3",
            "F4N3",
            "F3N2L",
            "F3N2F",
            "F3N2M",
            "R5N3",
            "R4N3",
            "R3N2L",
            "R3N2F",
            "R3N2F"
        ],
        //任选
        RX_item:[

            "A2S",
            "A2T",
            "A2G2",
            "A2G2S",
            "A2G2T",

            "A3S",
            "A3T",
            "A3G3X3",
            "A3G3X3S",
            "A3G3X6",
            "A3G3X6S",
            "A3G3MX",
            "A3G3T",

            "A4S",
            "A4G4X24",
            "A4G4X12",
            "A4G4X6",
            "A4G4X4"
        ],
        //单式
        DX_item:[
            'N5S',
            'G5X120',
            'N4S',
            'G4X24',
            'N3SF',
            'N3TF',
            'N3DF',
            'G3X3F',
            'G3X6F',
            'G3MXF',
            'G3TF',
            'G3X3SF',
            'G3X6SF',
            'G3BF',
            'S3TDF',
            'S3SF',
            'N3SM',
            'N3TM',
            'N3DM',
            'G3X3M',
            'G3X6M',
            'G3MXM',
            'G3TM',
            'G3X3SM',
            'G3X6SM',
            'G3BM',
            'S3TDM',
            'S3SM',
            'N3SL',
            'N3TL',
            'N3DL',
            'G3X3L',
            'G3X6L',
            'G3MXL',
            'G3TL',
            'G3X3SL',
            'G3X6SL',
            'G3BL',
            'S3TDL',
            'S3SL',
            'N2SL',
            'N2TL',
            'N2DL',
            'N2SF',
            'N2TF',
            "N2DF",
            "G2L",
            "G2SL",
            "G2TL",
            "G2BL",
            "G2F",
            "G2SF",
            "G2TF",
            "G2BF",
            "A1L3",
            "A2L3",
            "A1F3",
            "A2F3",
            "A1M3",
            "A2M3",
            "A1L4",
            "A2L4",
            "A2N5",
            "A3N5",
            "SA1",
            "SA2",
            "SA3",
            "SA4"
        ],
        //二重号-单号
        ZXR_item:[
            'G5X60',
            'G5X30',
            'G5X20',
            'G5X10',
            'G5X5',
            'G4X6',
            'G4X4',
            'G4X12'
        ]
    },
    /****************************************11x5**********************************************************/
    //复式
    //11x5直选复式
    HL11x5:{
        ZXFS11x5_item:[
            'N3PH',
            'N2PH',
            'P3'


        ],
        //单式
        DS11x5_item:[
            'N3SH',
            'G3SH',
            'N2SH',
            'G2SH',
            'A1S',
            'A2S',
            'A3S',
            'A4S',
            'A5S',
            'A6S',
            'A7S',
            'A8S'
        ],
        //胆拖
        DT11x5_item:[
            'G3BH',
            'G2BH',
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B'
        ],
        //前三  //前二
        QSQE11x5_item:[
            'G3H',
            'A1H3',
            'G2H'
        ],
        //任选复式
        RXFS11x5_item:[
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
            'A8'
        ],
        QW11x5_item:[
            'FOEC'
        ],
        CZW11x5_item:[
            'FMN'
        ]
    },
    /**************************快三*************************************/
    K3:{
        K3_item:[
            'N3T',
            'N3D',
            'N3TRI',
            'N3SN',
            'N3PAIR',
            'N2D',
            'N1'
        ]
    }
};
OriginalItem = {
    text:function(data){
        var betType;
        var gameCode;
        var functionName;
        betType = data.betType;
        gameCode = data.gameCode;
        functionName = this.createFunction(betType,gameCode);
        return	this[functionName](data)
    },
    //获取对应玩法的方法
    createFunction: function(betType,gameCode) {
        var functionName = "";
        for (var i in OriginalItemObj[gameCode]) {
            if ($.inArray(betType, OriginalItemObj[gameCode][i]) > -1) {
                functionName = i;
                break;
            }
        }
        return functionName.replace('_item', '');
    },
    ballNameMap:function(str){
        var list = {};
        var selectStr = ["Big", "Small", "Odd", "Even", "L", "H", "T", "TRI", "PAIR", "SN", "5th", "4th", "3rd", "2nd", "1st", "R1", "R2", "R3", "R4", "R5",'O5E0','O4E1','O3E2','O2E3','O1E4','O0E5'];
        var convertStr = ["大", "小", "单", "双", "龙", "虎", "和", "豹子", "对子", "顺子", "万", "千", "百", "十", "个", "一区", "二区", "三区", "四区", "五区",'5单0双','4单1双','3单2双','2单3双','1单4双','0单5双'];
        for(var i = 0;i < selectStr.length; i++){
            list[selectStr[i]] = convertStr[i]
        }
        var numList = str.replace(/,/g, "&&").split('&&');
        for(var x = 0; x< numList.length;x++){
            if(isNaN(numList[x])){
                if(numList[x].indexOf('|') >= 0){
                    numList[x] = numList[x].replace(/[ | ]/g, " ").split(' ');
                    for(var m = 0; m < numList[x].length; m++){
                        if(isNaN(numList[x][m])){
                            numList[x][m] = list[numList[x][m]]
                        }
                    }
                    numList[x] = numList[x].join('|');
                }else if(numList[x].indexOf('>') >= 0){
                    numList[x] = numList[x].replace(/[ > ]/g, " ").split(' ');
                    for(var m = 0; m < numList[x].length; m++){
                        if(isNaN(numList[x][m])){
                            numList[x][m] = list[numList[x][m]]
                        }
                    }
                    numList[x] = numList[x].join('>');
                }else if(!list[numList[x]]){
                    numList[x] = numList[x];
                }else{
                    numList[x] = list[numList[x]]
                }
            }
        }
        return numList.toString();
    },
    getTextFSWQBSG:function(selection){
        var text = '';
        for(var i = 0; i < selection.length; i++){
            var betItem = selection[i].betItem.toString();
            var drawType = selection[i].drawType;
            if(drawType == '5th')
                text += '万位：'+ betItem +"<br/>";
            else if(drawType == '4th')
                text += '千位：'+ betItem + '<br/>';
            else if(drawType == '3rd')
                text += '百位：'+ betItem +'<br/>';
            else if(drawType == '2nd')
                text += '十位：'+ betItem +'<br/>';
            else if(drawType == '1st')
                text += '个位：'+ betItem +'<br/>';
            else
                text += betItem;
        }
        return text;
    },
    getOrder:function(data){
        var list = data.split(',');
        list.sort(function(a,b){
            return b.substr(0, 1) - a.substr(0, 1)
        });
        return list.join(",");
    },
    getTextZX:function(selection,nameList){
        var text = '';
        for(var i = 0; i < selection.length; i++){
            var betItem = selection[i].betItem.toString();
            text += nameList[i] + ':' + betItem + "<br/>"
        }
        return text
    },
    getTextLHH:function(selection){
        var text = '';
        for(var i = 0; i < selection.length; i++){
            text += selection[i].betItem.toString()
        }
        text = this.ballNameMap(text);
        return text;
    },
    //复式
    WQBSG:function(data){
        var selection = JSON.parse(data.selection);
        var text = this.getTextFSWQBSG(selection);
        return text;
    },
    //单式
    DX:function(data){
        return this.ballNameMap(data.betNumber)
    },
    //二重号-单号
    ZXR:function(data){
        var nameList = [
            ['二重号','单号'],
            ['三重号','单号'],
            ['三重号','二重号'],
            ['四重号','单号'],
            ['二重号'],
        ];
        var betTypelist = [
            ['G5X60','G5X30','G4X12','A4G4X12'],//二重号-单号
            ['G5X20','G4X4','A4G4X4'],//三重号-单号
            ['G5X10'],//三重号-二重号
            ['G5X5'],//四重号-单号
            ['G4X6','A4G4X6']//二重号
        ];
        var num;
        for(var i = 0; i< betTypelist.length; i++){
            if(betTypelist[i].indexOf(data.betType) >= 0){
                num = i;
                break;
            }
        }
        var selection = JSON.parse(data.selection);
        return this.getTextZX(selection,nameList[num])
    },
    //龙虎和大小单双//趣味
    LHTDXDS:function(data){
        var selection = JSON.parse(data.selection);
        for(var i = 0; i< selection.length; i++){
            for(var x = 0; x< selection[i].betItem.length; x++){
                selection[i].betItem[x] = this.ballNameMap(selection[i].betItem[x])
            }
        };
        var text = this.getTextFSWQBSG(selection);
        return text;
    },
    //任选
    RX:function(data){
        var text = '';
        var list = ['A4G4X12','A4G4X4','A4G4X6'];
        var selection = JSON.parse(data.selection);
        var drawType = data.drawType;
        drawType =  this.getOrder(data.drawType);
        text += this.ballNameMap(drawType) + '<br/>';
        if(list.indexOf(data.betType)>=0){
            text += this.ZXR(data);
        }else{
            text += this.ballNameMap(data.betNumber)
        }
        return text ;
    },
    ZXFS11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection.length; i++){
            if(i == 0) text +='一位：'+selection[i].betItem.toString()+'<br/>';
            if(i == 1) text +='二位：'+selection[i].betItem.toString()+'<br/>';
            if(i == 2) text +='三位：'+selection[i].betItem.toString()+'<br/>';
        }
        return text;
    },
    DS11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var  i = 0; i < selection.length; i++){
            for(var x = 0; x < selection[i].betItem.length; x++){
                text += selection[i].betItem[x] + '|'
            }
        }
        return text.substring(0,text.length -1);
    },
    DT11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection.length; i++){
            if(i == 0) text +='胆码：'+selection[i].betItem.toString()+'<br/>';
            if(i == 1) text +='拖码：'+selection[i].betItem.toString()+'<br/>';
        }
        return text;
    },
    QSQE11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        if(data.betType == 'G2H'){
            text += '前二：'+selection[0].betItem.toString()+'<br/>';
        }else{
            text += '前三：'+selection[0].betItem.toString()+'<br/>';
        }

        return text;
    },
    RXFS11x5:function(data){
        var text = '';
        var b;
        var selection = JSON.parse(data.selection);
        var a = data.betType.substring(1,2);
        if(a >5){
            b = 5;
        }else{
            b = a;
        }
        text += '任'+a+'选'+b+'：'+selection[0].betItem.toString()+'<br/>';
        return text;
    },
    //定单双
    QW11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection[0].betItem.length; i++){
            if(selection[0].betItem[i] == 'O5E0') text += '5单0双' +',';
            if(selection[0].betItem[i] == 'O4E1') text += '4单1双' +',';
            if(selection[0].betItem[i] == 'O3E2') text += '3单2双' +',';
            if(selection[0].betItem[i] == 'O2E3') text += '2单3双' +',';
            if(selection[0].betItem[i] == 'O1E4') text += '1单4双' +',';
            if(selection[0].betItem[i] == 'O0E5') text += '0单5双' +','
        }
        return text.substring(0,text.length -1)
    },
    CZW11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        text += '猜中位：'+selection[0].betItem.toString()+'<br/>';
        return text;
    },
    K3:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        var betItem = selection[0].betItem.toString()
        var betType = data.betType;
        switch (betType) {
            case 'N3T':
                text = '合值：'+betItem;
                break;
            case 'N3D':
                text = '三不同号：'+betItem;
                break;
            case 'N3TRI':
                text = '三同号：'+betItem;
                break;
            case 'N3SN':
                text = '三连号：'+betItem;
                break;
            case 'N3PAIR':
                text = '二同号：'+betItem;
                break;
            case 'N2D':
                text = '二不同号：'+ betItem;
                break;
            case 'N1':
                text = '单挑一骰：'+ betItem;
                break;
            default: return
        }
        return text;
    }
};
Local =  {
    "1" : "系统错误！",
    "2" : "无效的请求！",
    "3" : "服务未通过！",
    "5" : "登陆过期！",
    "6" : "权限不足！",
    "7" : "会话过期！",
    "8" : "重复登录！",

    "100" : "请求超时！",
    "101" : "请求限制！",
    "102" : "会员限制！",
    "103" : "程序限制！",
    "104" : "禁止请求！",
    "105" : "参数丢失！",
    "106" : "无效的参数！",
    "107" : "重复的会话号！",
    "1000" : "请求超时！",

    "11101" : "余额不足！",
    "11102" : "停止投注！",
    "11103" : "该玩法暂不支持！",
    "11104" : "投注信息不完整！",
    "11105" : "帐号资料异常！",
    "11106" : "彩期不存在！",
    "11107" : "重复请求 ！",
    "11108" : "赔率已改变！",
    "11110" : "超出下注限制范围！",
    "11121" : '记录不存在',
    "11122" : '重复提交，您点的太快了',
    "11123" : '取消失败',

    "50010" : "账户不存在!",
    "50100" : "账户不存在!",
    "50101" : "账户未激活!",
    "50102" : "账户被限制交易!",
    "50103" : "账户被暂停交易!",
    "50104" : "账户验证失败!",
    "50110" : "余额不足!",
    "50111" : "超过最大交易额!",
    "50112" : "货币无效!",
    "50113" : "金额无效!"

};
Global = {
    //投注区变量
    betZoneData: [],

    //玩法设置集合
    betSetting: {},

    //市场列表信息
    marketList: [{
        id: 'cqssc',
        gameCode: 'LT',
        market: 'CQ',
        marketCNName: '重庆时时彩',
        drawNumLength: 3
    }, {
        id: 'tjssc',
        gameCode: 'LT',
        market: 'TJ',
        marketCNName: '天津时时彩',
        drawNumLength: 3
    }, {
        id: 'xjssc',
        gameCode: 'LT',
        market: 'XJ',
        marketCNName: '新疆时时彩',
        drawNumLength: 2
    },
    // {
    //     id: 'jxssc',
    //     gameCode: 'LT',
    //     market: 'JX',
    //     marketCNName: '江西时时彩',
    //     drawNumLength: 3 
    // },
    {
        id: 'sh11x5',
        gameCode: 'HL11x5',
        market: 'SH',
        marketCNName: '上海11选5',
        drawNumLength: 2
    }, {
        id: 'gd11x5',
        gameCode: 'HL11x5',
        market: 'GD',
        marketCNName: '广东11选5',
        drawNumLength: 2
    }, {
        id: 'jx11x5',
        gameCode: 'HL11x5',
        market: 'JX',
        marketCNName: '江西11选5',
        drawNumLength: 2
    }, {
        id: 'sd11x5',
        gameCode: 'HL11x5',
        market: 'SD',
        marketCNName: '山东11选5',
        drawNumLength: 2
    }, {
        id: 'jsk3',
        gameCode: 'K3',
        market: 'JS',
        marketCNName: '江苏快三',
        drawNumLength: 3
    }, {
        id: 'ahk3',
        gameCode: 'K3',
        market: 'AH',
        marketCNName: '安徽快三',
        drawNumLength: 3
    }
    //    , {
    //    id: 'cn3d',
    //    gameCode: 'LT',
    //    market: 'CN3D',
    //    marketCNName: '福彩3D',
    //    drawNumLength: 3
    //}
    ]
};

/*
** 继承自IMDialog
*/

(function () {
	function ChaseOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.data =  [];
		this.el   = this.initDom();
	}

	ChaseOrderDetail.prototype = new IMDialog();

	ChaseOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '停止追号',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png',
			id:this.id + 'btnCancel'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="chase-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="head">' +
								'<div class="head-text">' +
									'共<span class="total-issue">0</span>期，已完成' +
									'<span class="finished-issue">0</span>期' +
									//'<span>0</span>' +
								'</div>' +
								'<div class="close-dialog">✕</div>' +
							'</div>' +
							
							'<div class="content">' +
								this.createTable() +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="overlay overlay2"></div>';
		return temp;
	};

	ChaseOrderDetail.prototype.createTable = function () {
		var temp = '';
		var px = '20px';
		if(Util.isMobile.ios()){
			px = 0
		}
		temp =	'<table>' +
					'<thead>' +
						'<tr style="padding-right: '+px+'">' +
							'<td class="td-width tdW1">奖期</td>' +
							'<td class="td-width tdW2">追号内容</td>' +
							'<td class="td-width tdW3">追号倍数</td>' +
							'<td class="td-width tdW3">投注金额</td>' +
							'<td class="td-width tdW3">追号状态</td>' +
							'<td class="td-width tdW3">状态</td>' +
							'<td class="td-width tdW3">操作</td>' +
						'</tr>' +
					'</thead>' +

					'<tbody>' +
						this.createRows() +
					'</tbody>' +
				'</table>';

		return temp;
	};

	ChaseOrderDetail.prototype.createRows = function () {
		var i;
		var that = this;
		var temp = '';
		for (i = 0; i < this.data.length; i++) {
			temp +=	'<tr class="tdW">';

			for (j = 0; j < this.data[i].length; j++) {
				if (j === 0) {
					temp += '<td class="td-width"><span class="dot"></span>' + this.data[i][j] + '</td>';
				} else if (j === this.data[i].length-1 && this.data[i][j] === '取消本期'){
					temp += '<td class="td-width"><span class="cancel-current">' + this.data[i][j] + '</span></td>';
				} else if (j === this.data[i].length-1 && this.data[i][j] === '详情'){
					temp += '<td class="td-width"><span class="order-detail">' + this.data[i][j] + '</span></td>';
				} else if(j === 6){
					if( this.data[i][j] == 1){
						temp += '<td class="td-width cancel-order">撤单</td>';
					}else{
						temp += '<td class="td-width cancel-order can-not-cancel" >撤单</td>';
					}

				}else {
					if(j === 5 || j === 4){
						var color = '#cccccc';
						this.data[i][j] = this.data[i][j].replace(/[,]/g,'');
						if(!isNaN(this.data[i][j])) color = '#f86f70';
						if(this.data[i][j] == '用户撤销' || this.data[i][j] == '系统撤销') color = '#cccccc';
						if(this.data[i][j] == '未中奖') color = '#cccccc';
						if(this.data[i][j ]== '待开奖') color = '#a3e2cf';
						temp += '<td class="td-width" style="color: '+color+'">' + this.data[i][j] + '</td>';
					}else if(j=== 1){
						temp += '<td class="td-width" title="'+ this.data[i][j]+'">' + this.data[i][j] + '</td>';
					}else{
						temp += '<td class="td-width">' + this.data[i][j] + '</td>';
					}
				}
			}

			temp += '</tr>';
		}
		return temp;
	};
	ChaseOrderDetail.prototype.getDom = function () {
		return this.el;
	};

	ChaseOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.chaseId = data.dataList.chaseId;
		this.finishedDraw = data.dataList.finishedDraw;
		this.totalDraw  = data.dataList.totalDraw;
		this.zone.find('.total-issue').text(this.totalDraw);
		this.zone.find('.finished-issue').text(this.finishedDraw);
		this.showOverlay();
	};

	ChaseOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};

	ChaseOrderDetail.prototype.bindEvents = function () {
		var button;
		var table;
		var cancelOrder;
		var that = this;
		this.zone = $('#' + this.id);
		table = this.zone.find('table');
		table.delegate('.cancel-order','click',function(){
			var  data = that.resData.list;
			var index = $(this).parents('tr').index();
			$(this).addClass('btn-disabled can-not-cancel');
			var ticketId = data[index].ticketId;
			service.cancelBetHistory({ticketId:ticketId},function(res){
				if(res.code == 0){
					if(typeof(app) != 'undefined'){
						app.noticeDialog.show({
							subTitle : "撤单成功",
							text: '撤单成功',
							buttonName: "确定",
							autoHide: true,
							timeout: 3000,
							okCallback: app.bettingRecords.getChaseHistory()
						});
						app.bettingRecords.assignmentChaseModel();
					}else{
						recordsQuery.noticeDialog.show({
							subTitle : "撤单成功",
							text: '撤单成功',
							buttonName: "确定",
							autoHide: true,
							timeout: 3000,
							okCallback:recordsQuery.getChaseHistory()
						});
						recordsQuery.assignmentChaseModel()
					}
				}else{
					$(this).removeClass('btn-disabled can-not-cancel');
					Util.errorModel(res.code,'撤单失败');
					if(typeof(app) != 'undefined'){
						app.bettingRecords.assignmentChaseModel();
					}else{
						recordsQuery.assignmentChaseModel()
					}
				}
			})
		});
		table.delegate('td', 'click', function () {
			if (!$(this).children('span').hasClass('cancel-current')) {
				return;
			}

			if (!that.confirmDialog) {
				var okCallback = function () {
					that.hide();
				};

				that.confirmDialog = new ConfirmDialog({
					text: '',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消本期吗？');
		});

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			var okCallback = function () {
				that.confirmDialog.zone.find('.ok').addClass('.btn-disabled');
				service.cancelChaseHistory({'chaseId':that.chaseId},function(res){
					that.hide();
					that.confirmDialog.zone.find('.ok').removeClass('.btn-disabled');
					if(res.code == 0){
						if(typeof(app) != 'undefined'){
							app.noticeDialog.show({
								subTitle : "停止成功",
								text: '停止成功',
								buttonName: "确定",
								autoHide: true,
								timeout: 3000
							});
							app.bettingRecords.getChaseHistory();
						}else{
							recordsQuery.noticeDialog.show({
								subTitle : "停止成功",
								text: '停止成功',
								buttonName: "确定",
								autoHide: true,
								timeout: 3000
							});
							recordsQuery.getChaseHistory()
						}

					}else{
						Util.errorModel(res.code,'停止失败');
					}
				})

			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定停止追号吗？');
		});

		this.zone.find('.order-detail').click(function () {
			if (!app.betOrderDetail) {
				app.betOrderDetail = new BetOrderDetail({id: 'bet-order-detail'});
				$('body').append(app.betOrderDetail.getDom());
				app.betOrderDetail.bindEvents();
			}

			app.betOrderDetail.show({'canCancel': true});
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});
		this.bindOverlayEvents();
	};

	window.ChaseOrderDetail = ChaseOrderDetail;
}());

/*
 *  RecordQuery页面入口函数
 */

(function () {
	function recordsQuery () {
		var that = this;
		var data = Global.marketList;
		this.marketList = data;
		this.data = [];
		this.obj = {};
		this.betName = {};
		for(var x = 0;x < RULE_CONFIG.length;x++){
			this.obj[RULE_CONFIG[x].betType + RULE_CONFIG[x].gameCode] = RULE_CONFIG[x].name
		}
		for(var x = 0;x < data.length;x++){
			this.betName[data[x].market + '_' + data[x].gameCode] = data[x].marketCNName
		}
		this.el = this.initDom();
		this.creatNoticeDialog();
		$('.records-query-page').html(this.el);
		this.bindEvents();

        if (Util.isMobile.any() && window.FastClick) {
            FastClick.attach(document.body);
        }
		(function init(callback) {
			//var acctId = Util.getQueryString("acctId");
			//acctId = (acctId == null || acctId == "") ? "test_player" : acctId;
			var sessionId = Util.getQueryString("sessionId");
			var token = Util.getQueryString("token");
			var req = {
				acctId: null,
				passwd: null,
				sessionId: sessionId,
				token: token
			};

			service.login(req, function(res) {
				if (res.code == 0) {
					that.getBetHistory();
				}else{
					that.promptModel('温馨提示',res)
				}
			});
		})();

	}
	recordsQuery.prototype.creatNoticeDialog = function () {
		if (!this.noticeDialog) {
			this.noticeDialog = new NoticeDialog({id: 'app-notice-dialog'});
			$('body').append(this.noticeDialog.getDom());
			this.noticeDialog.bindEvents();
		}
	};
	//投注记录
	recordsQuery.prototype.getBetHistory = function () {
		var that = this;
		var req = {
			"page": {
				"pageNo": this.pager1.currentPage || 1,
				"pageSize":20
			},
			"beginDate": $('.' +this.startTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"beginTime": $('.' +this.startTime.opt.className).find('input').val().split(' ')[1] +':00',
			"endDate": $('.' +this.endTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"endTime": $('.' +this.endTime.opt.className).find('input').val().split(' ')[1] + ':00',
			"status": this.statusSelect.value,
			"ticketId": isNaN(parseInt($('.' +this.input.opt.className).find('input').val()))?0:parseInt($('.' +this.input.opt.className).find('input').val()),
			gameCode: this.gameSelect.value.split('_')[0] == undefined ? "":this.gameSelect.value.split('_')[0] ,
			market:this.gameSelect.value.split('_')[1] == undefined ? "":this.gameSelect.value.split('_')[1]
		};
		service.betHistory(req, function(res) {
			if (res.code == 0) {
				that.betData = that.formatBetList(res);
				that.resBet = res;
				if(that.pager1.totalPage != res.page.pageCount){
					that.pager1.totalPage = res.page.pageCount || 1;
					that.pager1.initDom();
					that.zone.find('.content1 .pager-zone ').empty();
					that.zone.find('.content1 .pager-zone ').append(that.pager1.getDom())
					that.pager1.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//投注记录
	recordsQuery.prototype.formatBetList = function (res) {
		var that = this;
		var list = [];
		$.each(res.list,function(index,item){
			list.push([
				that.betName[item.market+'_'+item.gameCode],
				that.obj[item.betType + item.gameCode],
				item.drawNumber,
				item.result == undefined ?'-':item.result,
				OriginalItem.ballNameMap(item.betNumber) ,
				Util.addDotToNumber(item.betAmount) +'元',
				item.multiple+'倍',
				item.oddsGroup+'-'+  ( item.comm * 100 ).toFixed(2) + '%',
				that.getWinAndChaseIsState(item.winState,1,item.wlAmt,item.cancelBy),
				item.winState == 'P' ?1:0,
			])
		});
		return list;
	};
	//追号记录
	recordsQuery.prototype.getChaseHistory = function () {
		var that = this;
		var req = {
			"page": {
				"pageNo": this.pager2.currentPage || 1,
				"pageSize":20
			},
			"beginDate": $('.' +this.startTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"beginTime": $('.' +this.startTime.opt.className).find('input').val().split(' ')[1] + ':00',
			"endDate": $('.' +this.endTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"endTime": $('.' +this.endTime.opt.className).find('input').val().split(' ')[1] + ':00',
			"status": this.statusSelect.value,
			"ticketId": isNaN(parseInt($('.' +this.input.opt.className).find('input').val()))?0:parseInt($('.' +this.input.opt.className).find('input').val()),
			gameCode: this.gameSelect.value.split('_')[0] == undefined ? "":this.gameSelect.value.split('_')[0] ,
			market:this.gameSelect.value.split('_')[1] == undefined ? "":this.gameSelect.value.split('_')[1]
		};
		service.chaseHistory(req, function(res) {
			if (res.code == 0) {
				that.chaseData = that.formatChaseList(res);
				that.resChase = res;
				var chaseOrder = that.chaseOrderDetail;
				if(chaseOrder){
					var list = that.resChase.list[that.dataIndex];
					chaseOrder.zone.find('.total-issue').text(list.totalDraw);
					chaseOrder.zone.find('.finished-issue').text(list.finishedDraw);
				}
				if(that.pager2.totalPage != res.page.pageCount){
					that.pager2.totalPage = res.page.pageCount || 1;
					that.pager2.initDom();
					that.zone.find('.content2 .pager-zone ').empty();
					that.zone.find('.content2 .pager-zone ').append(that.pager2.getDom());
					that.pager2.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//追号记录
	recordsQuery.prototype.formatChaseList = function (res) {
		var that = this;
		var list = [];
		$.each(res.list,function(index,item){
			list.push([
				that.betName[item.market+'_'+item.gameCode],
				that.obj[item.betType + item.gameCode],
				item.drawNumber,
				OriginalItem.ballNameMap(item.betNumber),
				Util.addDotToNumber(item.betAmount) + '元',
				item.oddsGroup+'-'+ ( item.comm * 100 ).toFixed(2) + '%',
				item.stopUtilWin == true?'是':'否',
				item.finishedDraw+'/'+item.totalDraw,
				item.cancelled == false?'1':'0',
			])
		});
		return list;
	};



	recordsQuery.prototype.refreshHtml = function(){
		if(this.type == 1){
			this.data = this.betData;
			this.zone.find('.content1 .table-zone tbody').empty();
			this.zone.find('.content1 .table-zone tbody').append(this.createRows(1))
		}else{
			this.data = this.chaseData;
			this.zone.find('.content2 .table-zone tbody').empty();
			this.zone.find('.content2 .table-zone tbody').append(this.createRows(2))
		}

	};

	//投注点击，跟弹框赋值
	recordsQuery.prototype.assignmentModel = function(){
		var that = this;
		var betOrder;
		betOrder = this.betOrderDetail.zone;
		var modelList =  that.resBet.list[that.dataIndex];
		var modelData = [
			modelList.ticketId,
			that.betName[modelList.market+'_'+modelList.gameCode],
			that.obj[modelList.betType + modelList.gameCode],
			modelList.drawNumber,
			modelList.betTime,
			modelList.result == undefined ?'-':modelList.result,
			Util.addDotToNumber((modelList.odds * modelList.betUnit)/2,4),
			modelList.multiple + '倍',
			modelList.oddsGroup+'-'+ ( modelList.comm * 100 ).toFixed(2) + '%',
			modelList.selection,
			Util.addDotToNumber(modelList.betAmount) + '元',
			that.getWinAndChaseIsState(modelList.winState,1,modelList.wlAmt,modelList.cancelBy),
			Util.addDotToNumber(modelList.betUnit),
			modelList.betCount,
			Util.addDotToNumber(modelList.netAmount,4)
		];
		var color;
		if(!isNaN(modelData[11])) color = '#f86f70';
		if(modelData[11] == '用户撤销' || modelData[11] == '系统撤销') color = '#cccccc';
		if(modelData[11] == '未中奖') color = '#cccccc';
		if(modelData[11] == '待开奖') color = '#a3e2cf';
		betOrder.find('.singleNumber').text(modelData[0]);//注单编号
		betOrder.find(".gameName").text(modelData[1]);//游戏名称
		betOrder.find(".gamePlay").text(modelData[2]);
		betOrder.find(".gameSeries").text(modelData[3]);
		betOrder.find(".betTime").text(modelData[4]);
		betOrder.find(".lotteryNumbers").text(modelData[5]);
		betOrder.find(".amount").text(modelData[6]);
		betOrder.find(".multiple").text(modelData[7]);
		betOrder.find(".groupRebates").text(modelData[8]);
		betOrder.find(".betAmount").text(modelData[10]);
		betOrder.find(".betType").text(modelData[11]);
		betOrder.find(".betUnit").text(modelData[12]);
		betOrder.find(".betCount").text(modelData[13]);
		betOrder.find(".netAmount").text(modelData[14]);
		betOrder.find(".betType").css('color',color);
		betOrder.find(".textarea").html(OriginalItem.text(modelList));
	};
	//追号 点击，跟弹框赋值
	recordsQuery.prototype.assignmentChaseModel = function(){
		var that = this;
		var chaseOrder;
		chaseOrder = that.chaseOrderDetail;
		var list = this.resChase.list[this.dataIndex];
		var req = {
			chaseId:list.chaseId
		};
		service.chaseDetail(req,function(res){
			if(res.code == 0){
				var dataList = [];
				$.each(res.list,function(index,item){
					dataList.push([
						item.drawNumber,
						OriginalItem.ballNameMap(item.betNumber),
						item.multiple,
						Util.addDotToNumber(item.betAmount),
						that.getWinAndChaseIsState(item.chaseState,2,item.wlAmt,item.cancelBy),
						that.getWinAndChaseIsState(item.winState,1,item.wlAmt,item.cancelBy),
						item.chaseState == 'P'?1:0
					])
				});
				chaseOrder.data = dataList;
				chaseOrder.resData = res;
				chaseOrder.zone.find('tbody').empty();
				chaseOrder.zone.find('tbody').append(chaseOrder.createRows())
				if(!res.canStop)chaseOrder.cancel.disabled();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//type = 1 state = winState,type = 2 state = chaseState
	recordsQuery.prototype.getWinAndChaseIsState = function(state,type,wlAmt,cancelBy){
		var text;
		if(type == 1){
			if(state == 'W') text =  Util.addDotToNumber(wlAmt);
			if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'L') text = '未中奖';
			if(state == 'P') text = '待开奖';
		}else if(type == 2){
			if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'H') text = '已完成';
			if(state == 'P') text = '未开始';
			if(state == 'L') text = '未中奖';
			if(state == 'W') text = '已中奖';
		}
		return text;
	};
	recordsQuery.prototype.initDom = function () {
		var temp;
		var marketList = this.marketList;
		var gameSelectData = [{text:'所有市场',value:''}];
		for(var i = 0; i < marketList.length; i++){
			gameSelectData.push({
			 	text: marketList[i].marketCNName,
				value: marketList[i].gameCode + '_' + marketList[i].market
			})
		}
		var statusSelectData = [
			{ text: '全部',   value: ''},
			{ text: '已中奖', value: 'W'},
			{ text: '未中奖', value: 'L'},
			{ text: '未开奖', value: 'P '},
			{ text: '已撤消', value: 'C '}
		];

		this.pager1       = new IMPager({id: 'bet-records-query-pager'});
		this.pager2       = new IMPager({id: 'chase-records-query-pager'});
		this.startTime    = new IMDatetimepicker({className: 'starttime', text:'开始'});
		this.endTime      = new IMDatetimepicker({className: 'endtime', text:'结束'});
		this.tip          = new IMTip();

		this.input        = new IMInput({
			className: 'bs-input', 
			text: '编号:', 
			placeHolder: '请输入编号'
		});

		this.gameSelect   = new IMSelect({
			id: 'game-select',
			type: 1,
			className: 'game-select', 
			data: gameSelectData
		});

		this.statusSelect = new IMSelect({
			id: 'status-select', 
			type: 2, 
			className: 'status-select', 
			text: '注单状态:',
			data: statusSelectData
		});

		this.searchButton = new IMButton({
			text: '搜索',
			className: 'search',
			id:'search'
		});

		temp = 	'<div class="records-query">' +
					'<div class="wrapper">' +
						'<div class="headrow">' +
							'<div class="tab-head">' +
								'<ul class="tabs">' +
									'<li class="tab1 active"><span>我的投注</span></li>' +
									'<li class="tab2"><span>追号记录</span></li>' +
								'</ul>' +
								'<div class="stick"></div>' +
							'</div>' +

							'<div class="bar">' +
								this.startTime.getDom() +
								this.endTime.getDom() +
								this.input.getDom() +
								this.gameSelect.getDom() +
								this.statusSelect.getDom() +
								this.searchButton.getDom() +
							'</div>' +
						'</div>' +

						'<div class="cont content1">' +
							'<div class="table-zone">' +
								this.createTable('1') +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager1.getDom() +
							'</div>' +
						'</div>' +

						'<div class="cont content2">' +
							'<div class="table-zone">' +
								this.createTable('2') +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager2.getDom() +
							'</div>' +
						'</div>' +

						this.tip.getDom() +
					'</div>' +
				'</div>';

		return temp;
	};
	recordsQuery.prototype.promptModel = function(subTitle,res,text,buttonName){
		buttonName && (buttonName = '确定');
		if(res.code == 0){
			this.noticeDialog.show({
				subTitle : subTitle,
				text: text,
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}else{
			this.noticeDialog.show({
				subTitle : subTitle,
				text: Local[res.code],
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}
	}
	recordsQuery.prototype.getDom = function () {
		return this.el;
	};

	recordsQuery.prototype.show = function () {
		if (!this.zone) {
			$('.main').append(this.el);
			this.zone = $('.betting-records');
			this.bindEvents();
		}

		this.zone.show();
	};

	recordsQuery.prototype.hide = function () {
		this.zone.hide();
	};

	recordsQuery.prototype.bindEvents = function (state) {
		var left;
		var content1;
		var content2;
		var callback;
		var tabs;
		var betTable;
		var chaseTable;
		var temp;
		var that = this;
        var today = new Date();

        this.zone  = $('.records-query');

        today = today.formatDate();
        this.zone.find('.starttime input').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime input').datetimepicker({value: today + ' 23:59', lang: 'en'});
		
		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		content1   = this.zone.find('.content1');
		content2   = this.zone.find('.content2');
		betTable   = this.zone.find('.content1 table');
		chaseTable = this.zone.find('.content2 table');
		if(!that.type){
			that.type = 1
		}
		this.zone.find('.close-icon').click(function () {
			that.zone.hide();
			$('.bet-record').removeClass('highlight');
		});
		tabs.delegate('li', 'click', function () {
			tabs.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				content1.show();
				that.type = 1
			} else if ($(this).hasClass('tab2')) {
				left = 120;
				content2.show();
				that.type = 2;
				if(!that.chaseData){
					that.getChaseHistory();
				}
			}

			stick.css('left', left + 'px');
		});

		betTable.delegate('td', 'click', function () {
			temp = $(this).children('span');
			that.dataIndex = parseInt($(this).attr('data-Index'));
			if (temp && temp.hasClass('order-detail')) {
				if (!that.betOrderDetail) {
					that.betOrderDetail = new BetOrderDetail({id: 'bet-order-detail'});
					$('body').append(that.betOrderDetail.getDom());
					that.betOrderDetail.bindEvents();
					that.assignmentModel()
				}else{
					that.assignmentModel()
				}
				var canCancel =  parseInt($(this).attr('data-value'));
				var ticketId = that.resBet.list[that.dataIndex].ticketId;
				that.betOrderDetail.show({'canCancel':canCancel,ticketId:ticketId});
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});

		chaseTable.delegate('td', 'click', function () {
			temp = $(this).children('span');
			that.dataIndex = parseInt($(this).attr('data-Index'));
			if (temp && temp.hasClass('order-detail')) {
				if (!that.chaseOrderDetail) {
					that.chaseOrderDetail = new ChaseOrderDetail({id: 'chase-order-detail'});
					$('body').append(that.chaseOrderDetail.getDom());
					that.chaseOrderDetail.bindEvents();
					that.assignmentChaseModel()
				}else{
					that.assignmentChaseModel()
				}
				var list = that.resChase.list[that.dataIndex];
				var canCancel = parseInt($(this).attr('data-value'));
				var dataList = {
					finishedDraw:list.finishedDraw,
					totalDraw:list.totalDraw,
					chaseId:list.chaseId
				};
				that.chaseOrderDetail.show({'canCancel': canCancel,dataList:dataList});
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});

		betTable.delegate('.lottery-number', 'mouseover', function () {
			var offset;
			var left;
			var top;
			var text;
			var span = $(this).children('span');
			var pos  = span.position();

			left    = pos.left + parseInt(span.width())/2;
			top     = pos.top + parseInt(span.height());
			text    = span.text();
			that.tip.show({
				left: left, 
				top: top, 
				text: text
			});
		}).delegate('.lottery-number', 'mouseout', function () {
			that.tip.hide();	
		});

		chaseTable.delegate('.lottery-number', 'mouseover', function () {
			var offset;
			var left;
			var top;
			var text;
			var span = $(this).children('span');
			var pos  = span.position();

			left    = pos.left + parseInt(span.width())/2;
			top     = pos.top + parseInt(span.height());
			text    = span.text();
			that.tip.show({
				left: left,
				top: top,
				text: text
			});
		}).delegate('.lottery-number', 'mouseout', function () {
			that.tip.hide();
		});
		//搜索
		callback = function(){
			if(that.type == 1){
				that.getBetHistory();
			}else{
				that.getChaseHistory();
			}
		};
		that.searchButton.bindEvents(callback.bind(this));
		if(!state){
			this.pager1.bindEvents();
			this.pager2.bindEvents();
			this.gameSelect.bindEvents();
			this.statusSelect.bindEvents();
		}
	};

	recordsQuery.prototype.createTable = function (type) {
		var temp = '';
		if(type == 1){
			temp =	'<table>' +
				'<thead>' +
				'<tr>' +
				'<td>游戏</td>' +
				'<td>玩法</td>' +
				'<td>期号</td>' +
				'<td>开奖号</td>' +
				'<td>投注内容</td>' +
				'<td>投注金额</td>' +
				'<td>倍数</td>' +
				'<td>奖金组/返点</td>' +
				'<td>状态</td>' +
				'<td>操作</td>' +
				'</tr>' +
				'</thead>' +

				'<tbody>' +
				this.createRows(type) +
				'</tbody>' +
				'</table>';
		}else{
			temp =	'<table>' +
				'<thead>' +
				'<tr>' +
				'<td>游戏</td>' +
				'<td>玩法</td>' +
				'<td>起始期号</td>' +
				'<td>投注内容</td>' +
				'<td>追号总金额</td>' +
				'<td>奖金组/返点</td>' +
				'<td>追中即停</td>' +
				'<td>状态</td>' +
				'<td>操作</td>' +
				'</tr>' +
				'</thead>' +

				'<tbody>' +
				this.createRows(type) +
				'</tbody>' +
				'</table>';
		}
		return temp;
	};

	recordsQuery.prototype.createRows = function (type) {
		var i;
		var temp = '';
		for (i = 0; i < this.data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < this.data[i].length; j++) {
				if (j === 0) {
					temp += '<td><span class="dot"></span>' + this.data[i][j] + '</td>';
				} else if (j === 4 && type == 1 || j === 3 && type == 2) {
					temp += '<td title="' + this.data[i][j] +'"><span>' + this.data[i][j] + '</span></td>';
				}  else if (j === this.data[i].length-1) {
					temp += '<td data-Index ="'+i+'" data-value="' + this.data[i][j] + '"><span class="order-detail">' + '详情' + '</span></td>';
				} else if(j == 8){
					var state = this.data[i][j].replace(/[,]/g,'');
					var color;
					if(!isNaN(state)) color = '#f86f70';
					if(state == '用户撤销' || state == '系统撤销') color = '#cccccc';
					if(state == '未中奖') color = '#cccccc';
					if(state == '待开奖') color = '#a3e2cf';
					temp += '<td style="color: '+color+'">' + this.data[i][j] + '</td>';
				}else{
					temp += '<td>' + this.data[i][j] + '</td>';
				}
			}

			temp += '</tr>';
		}

		return temp;
	};
	window.recordsQuery = new recordsQuery();
}());

