!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.wsgsig=t():e.wsgsig=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a}));var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=null!=("undefined"==typeof wx?"undefined":r(wx))&&"object"==("undefined"==typeof wx?"undefined":r(wx)),o=null!=("undefined"==typeof my?"undefined":r(my))&&"object"==("undefined"==typeof my?"undefined":r(my)),s=null!=("undefined"==typeof dd?"undefined":r(dd))&&"object"==("undefined"==typeof dd?"undefined":r(dd)),a=null!=("undefined"==typeof window?"undefined":r(window))&&"object"==("undefined"==typeof window?"undefined":r(window))},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return f}));var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){return Object.prototype.toString.call(e).slice(8,-1)}function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e){return"Array"===i(e)}function a(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))}function u(e,t){if(null!=e)if("object"!==(void 0===e?"undefined":r(e))&&(e=[e]),s(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function c(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t="",n=0;n<e;n++)t+="0123456789abcdef"[Math.floor(16*Math.random())];return t}function f(e){if(t=e,"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams)return e.toString();var t,n=[];return u(e,(function(e,t){null!=e&&(s(e)&&(t+="[]"),s(e)||(e=[e]),u(e,(function(e){!function(e){return"Date"===i(e)}(e)?a(e)&&(e=JSON.stringify(e)):e=e.toISOString(),n.push(o(t)+"="+o(e))})))})),n.join("&")}},function(e,t,n){"use strict";(function(e){var r=n(8),i=n(1),o=n(5),s=n(4),a=n(7),u=n(0),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function f(){this.params={env:"pro",bizId:"",appVer:"",sdkVer:a.version,os:"4"},this.uuid="",this.session="NTc5YmEzOTRiYWMzMWUxNDgyYzE3MGY4MTQ3YzczZjk",this.secretKey="NTc5YmEzOTRiYWMzMWUxNDgyYzE3MGY4MTQ3YzczZjk",this.hSession="yCJwBvgFlk91GhLZZgKaors6RQzqb7YR",this.isHoney="0",this.cipherType="0",this.expireTime=3e3,this.isDebug="0",this.isNodeEnv="0",this.initApiRetryArr=[300,500],this.initApiRetryIndex=0,this.defaultTime=3e5,this.isInitFail=!1}f.prototype=Object.create(r.a),f.prototype.getSign=function(e){return this.isInitFail&&"0"==this.cipherType&&this.initSession(),"dd05-"+this.aSign(e)+"##"+this.session},f.prototype.init=function(e){Object(i.b)(e)?(this.params=Object.assign(this.params,e),this.uuid=Object(i.a)(),this.initSession(),this.setIntervalDetection()):console.error("初始化失败: 请正确输入初始化参数！")},f.prototype.setIntervalDetection=function(){var e=this;setInterval((function(){e.detectionDebugEnv(),e.detectionNodeEnv()}),1e3)},f.prototype.detectionDebugEnv=function(){if(u.c){if("x"==sessionStorage.getItem("debugger"))return}else if(u.d){if("x"==wx.getStorageSync("debugger"))return}else if(u.a){if("x"==my.getStorageSync({key:"debugger"}).data)return}else if(u.b&&"x"==dd.getStorageSync("debugger"))return;var e=(new Date).getTime();debugger;(new Date).getTime()-e>400&&(this.isDebug="1",this.isHoney="1",this.secretKey=this.hSession)},f.prototype.detectionNodeEnv=function(){"object"==(void 0===e?"undefined":c(e))&&"undefined"==typeof window&&(this.isNodeEnv="1",this.isHoney="1",this.secretKey=this.hSession)},f.prototype.initSession=function(){var e=this,t=this.params,n=t.os,r=t.appVer,i=t.bizId,a=t.sdkVer,u={uuid:this.uuid,bizId:i,sdkVer:a,os:n,appVer:r};Object(o.a)(s.a[this.params.env]+"/v1/wsgsigsession/signinit",u,this.addSignHeader(u)).then((function(t){t&&t.data&&t.data.session&&(e.session=t.data.session,e.secretKey=t.data.session,e.cipherType=t.data.cipherType,e.expireTime=t.data.expireTime-Date.now()-e.defaultTime,e.timerUpdateSession())})).catch((function(t){var n=e.initApiRetryArr[e.initApiRetryIndex++];console.error("init session err",e.initApiRetryArr,e.initApiRetryIndex,n,e.isInitFail),n?setTimeout(e.initSession.bind(e),n):(e.isInitFail=!0,console.error("初始化失败",t,e.initApiRetryIndex))}))},f.prototype.timerUpdateSession=function(){var e=this;"number"!=typeof this.expireTime||this.expireTime<0||(this.expireTime,setTimeout((function(){e.updateSession()}),this.expireTime))},f.prototype.updateSession=function(){var e=this,t={uuid:this.uuid,session:this.session};return Object(o.a)(s.a[this.params.env]+"/v1/wsgsigsession/signupdate",t,this.addSignHeader(t)).then((function(t){t&&t.data&&t.data.session&&(e.session=t.data.session,e.cipherType=t.data.cipherType,"0"==e.isHoney&&(e.secretKey=t.data.session),e.expireTime=t.data.expireTime-Date.now()-e.defaultTime,e.timerUpdateSession())}))},f.prototype.addSignHeader=function(e){var t=this.aSign({body:Object.assign({},e),bodySerializer:JSON.stringify,contentType:"application/json",noDomainCheck:!0});return{header:{sign:t},headers:{sign:t}}};var d,p=(d=null,function(){return d||(d=new f),d});t.a=new p}).call(this,n(10))},function(e,t,n){var r,i,o,s,a;r=n(11),i=n(6).utf8,o=n(12),s=n(6).bin,(a=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?s.stringToBytes(e):i.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),u=8*e.length,c=1732584193,f=-271733879,d=-1732584194,p=271733878,h=0;h<n.length;h++)n[h]=16711935&(n[h]<<8|n[h]>>>24)|4278255360&(n[h]<<24|n[h]>>>8);n[u>>>5]|=128<<u%32,n[14+(u+64>>>9<<4)]=u;var l=a._ff,y=a._gg,g=a._hh,v=a._ii;for(h=0;h<n.length;h+=16){var b=c,m=f,S=d,w=p;c=l(c,f,d,p,n[h+0],7,-680876936),p=l(p,c,f,d,n[h+1],12,-389564586),d=l(d,p,c,f,n[h+2],17,606105819),f=l(f,d,p,c,n[h+3],22,-1044525330),c=l(c,f,d,p,n[h+4],7,-176418897),p=l(p,c,f,d,n[h+5],12,1200080426),d=l(d,p,c,f,n[h+6],17,-1473231341),f=l(f,d,p,c,n[h+7],22,-45705983),c=l(c,f,d,p,n[h+8],7,1770035416),p=l(p,c,f,d,n[h+9],12,-1958414417),d=l(d,p,c,f,n[h+10],17,-42063),f=l(f,d,p,c,n[h+11],22,-1990404162),c=l(c,f,d,p,n[h+12],7,1804603682),p=l(p,c,f,d,n[h+13],12,-40341101),d=l(d,p,c,f,n[h+14],17,-1502002290),c=y(c,f=l(f,d,p,c,n[h+15],22,1236535329),d,p,n[h+1],5,-165796510),p=y(p,c,f,d,n[h+6],9,-1069501632),d=y(d,p,c,f,n[h+11],14,643717713),f=y(f,d,p,c,n[h+0],20,-373897302),c=y(c,f,d,p,n[h+5],5,-701558691),p=y(p,c,f,d,n[h+10],9,38016083),d=y(d,p,c,f,n[h+15],14,-660478335),f=y(f,d,p,c,n[h+4],20,-405537848),c=y(c,f,d,p,n[h+9],5,568446438),p=y(p,c,f,d,n[h+14],9,-1019803690),d=y(d,p,c,f,n[h+3],14,-187363961),f=y(f,d,p,c,n[h+8],20,1163531501),c=y(c,f,d,p,n[h+13],5,-1444681467),p=y(p,c,f,d,n[h+2],9,-51403784),d=y(d,p,c,f,n[h+7],14,1735328473),c=g(c,f=y(f,d,p,c,n[h+12],20,-1926607734),d,p,n[h+5],4,-378558),p=g(p,c,f,d,n[h+8],11,-2022574463),d=g(d,p,c,f,n[h+11],16,1839030562),f=g(f,d,p,c,n[h+14],23,-35309556),c=g(c,f,d,p,n[h+1],4,-1530992060),p=g(p,c,f,d,n[h+4],11,1272893353),d=g(d,p,c,f,n[h+7],16,-155497632),f=g(f,d,p,c,n[h+10],23,-1094730640),c=g(c,f,d,p,n[h+13],4,681279174),p=g(p,c,f,d,n[h+0],11,-358537222),d=g(d,p,c,f,n[h+3],16,-722521979),f=g(f,d,p,c,n[h+6],23,76029189),c=g(c,f,d,p,n[h+9],4,-640364487),p=g(p,c,f,d,n[h+12],11,-421815835),d=g(d,p,c,f,n[h+15],16,530742520),c=v(c,f=g(f,d,p,c,n[h+2],23,-995338651),d,p,n[h+0],6,-198630844),p=v(p,c,f,d,n[h+7],10,1126891415),d=v(d,p,c,f,n[h+14],15,-1416354905),f=v(f,d,p,c,n[h+5],21,-57434055),c=v(c,f,d,p,n[h+12],6,1700485571),p=v(p,c,f,d,n[h+3],10,-1894986606),d=v(d,p,c,f,n[h+10],15,-1051523),f=v(f,d,p,c,n[h+1],21,-2054922799),c=v(c,f,d,p,n[h+8],6,1873313359),p=v(p,c,f,d,n[h+15],10,-30611744),d=v(d,p,c,f,n[h+6],15,-1560198380),f=v(f,d,p,c,n[h+13],21,1309151649),c=v(c,f,d,p,n[h+4],6,-145523070),p=v(p,c,f,d,n[h+11],10,-1120210379),d=v(d,p,c,f,n[h+2],15,718787259),f=v(f,d,p,c,n[h+9],21,-343485551),c=c+b>>>0,f=f+m>>>0,d=d+S>>>0,p=p+w>>>0}return r.endian([c,f,d,p])})._ff=function(e,t,n,r,i,o,s){var a=e+(t&n|~t&r)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._gg=function(e,t,n,r,i,o,s){var a=e+(t&r|n&~r)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._hh=function(e,t,n,r,i,o,s){var a=e+(t^n^r)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._ii=function(e,t,n,r,i,o,s){var a=e+(n^(t|~r))+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._blocksize=16,a._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(a(e,t));return t&&t.asBytes?n:t&&t.asString?s.bytesToString(n):r.bytesToHex(n)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={test:"http://10.190.35.142:8030",pro:"https://security.xiaojukeji.com/sign"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r.d&&"function"==typeof wx.request?wx.request:r.b&&"function"==typeof dd.request?dd.request:r.a&&"function"==typeof my.request?my.request:function(e){var t={method:"get",url:"",data:{},header:{},timeout:6e4,success:function(){},fail:function(){}},n=null;if(Object.assign(t,e),"undefined"!=typeof window){if((n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).timeout=t.timeout,n.onerror=function(){t.fail(Object.assign({},n,{responseText:"Network Error"})),n=null},n.ontimeout=function(e){t.fail(Object.assign({},e,{responseText:"timeout"})),n=null},n.open(t.method,t.url),"object"==i(t.header)&&null!=t.header)for(var r in t.header)n.setRequestHeader(r,t.header[r]);"POST"==t.method.toUpperCase()?(n.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.send(JSON.stringify(t.data))):n.send(),n.onreadystatechange=function(){if(4==n.readyState){var e="";try{e=JSON.parse(n.responseText)}catch(t){e=n.responseText}e&&t.success({data:e})}}}},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,i){o(s({url:e,method:"post",data:t},n,{success:function(e){r(e.data||{})},fail:i}))}))}},function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},function(e){e.exports=JSON.parse('{"name":"@didi/wsgsig","version":"4.0.5","description":"wsgsig","main":"dist/wsgsig.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","dev":"node_modules/.bin/webpack-dev-server","build":"node_modules/.bin/webpack --config webpack.config.lib.js -p","upload":"npm run build && npm publish","upload:beta":"npm run build && npm publish --tag beta"},"author":"kingrainwangyu","license":"ISC","devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-env":"^1.7.0","babel-preset-stage-2":"^6.24.1","html-webpack-plugin":"^4.5.0","terser-webpack-plugin":"^4.2.3","webpack":"^4.16.2","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.5"},"dependencies":{"md5":"^2.2.1"}}')},function(e,t,n){"use strict";var r,i,o,s,a,u=n(3),c=n.n(u),f=n(1),d={serialize:f.c,mapCs:function(e){return e.map((function(e){return e.k+"="+e.v})).join("&")},randombytes:function(){for(var e=[],t=0;t<8;t++)e.push(Math.floor(256*Math.random()));return e},derandbytes:function(){return new Uint8Array(new Uint32Array([Math.floor(4294967296*Math.random())]).buffer)},appendBuffer:function(e,t){var n=new Uint8Array(e.byteLength+t.byteLength);return n.set(new Uint8Array(e),0),n.set(new Uint8Array(t),e.byteLength),n},domainCheck:function(){var e=this,t=["IGlkJfxqIfZhLGlL4m6pK9==","IGlkJf6OMghPKmML4m6pK9==","IGlkJgFPHWhlgCZjKWU=","IGlkJg6OHfZnNfeL4m6pK9==","IGlkJg6UHgaPHVqoHWxT","MWFSKGeULmFoLWhPLFqoHWxT","IGlkJfFSJfIUgCZjKWU=","NmhPIGFiHfZjJGeL4m6pK9==","NGlhKWPVJWeQJeqoHWxT","IGlkJgahNGlL4m6pKeqoHWY=","JXehJfahIGlL4m6pK9==","MfahHWhlgCZjKWU=","IG6L4naU","7clUHghPLVqoKfxiJ9==","IGlkJeqoHWY=","LmrhHlqoKmeUgCZjK/==","IGlkJfMSKW2hKFqoHWxT","NGlhKWVVJmlL4mloImw=","LfloIXFPJWeQJeqoHWxT","NmhpKmMhKmIlKmMtJGFoIVqoHWxT","IGlkJbVmKWxkgCZjKWU=","7clhL0BL4m6pK9==","NGlhKWPVHWhlIneL4m6pK9==","JGxoIXlPHmxL4m6pKeqoHWY="].map((function(t){return e.atob(t)})),n=!1;try{t.forEach((function(e){new RegExp(e+"$").test(document.domain)&&(n=!0)}))}catch(e){}return n},genKeyMapFromUrlString:function(e,t){var n={};return e.split("&").forEach((function(e){var t=e.indexOf("=");t<0&&(t=e.length);var r=decodeURIComponent(e.slice(0,t))+decodeURIComponent(e.slice(t+1));r&&(n[r]=!0)})),Object.assign({},n,t)},byReverseOrder:function(e){return Object(f.b)(e)?Object.keys(e).sort().reverse().join(""):obj},tBase64:function(e,t){if(void 0===this.base64Map[t])return input;var n=this.base64Map[t],r=e.words,i=e.sigBytes;e.clamp();for(var o=[],s=0;s<i;s+=3)for(var a=(r[s>>>2]>>>24-s%4*8&255)<<16|(r[s+1>>>2]>>>24-(s+1)%4*8&255)<<8|r[s+2>>>2]>>>24-(s+2)%4*8&255,u=0;u<4&&s+.75*u<i;u++)o.push(n.charAt(a>>>6*(3-u)&63));var c=n.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},base64:function(e){for(var t="ABCDEFG0123456789abcdefgHIJKLMN+/hijklmnOPQRSTopqrstUVWXYZuvwxyz",n=""+e,r=void 0,i=void 0,o=0,s="";n.charAt(0|o)||(t="=",o%1);s+=t.charAt(63&r>>8-o%1*8)){if((i=n.charCodeAt(o+=3/4))>255)throw new Error("'base64' failed: The string to be encoded contains characters outside of the Latin1 range.");r=r<<8|i}return s.replace(/=*$/,"")},base64Map:{11:"uvwxyzABCDEFG6789abcdefgHIJKLMN+/hijklmnOPQRSTopqrstUVWXYZ012345",12:"ABCuvwxyzDEFG6789abcdHIJKefgLMN+/hmnOPQijklRSTopqrstUVWXYZ012345"},obfuse:function(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=e[r%4]^t.charCodeAt(r);return n=Array.prototype.slice.apply(e).concat(n),String.fromCharCode.apply(null,n)},obfuseC:function(e,t,n){for(var r=[],i=0;i<t.length;i++)r[i]=n[i%16]^t.charCodeAt(i);return r=Array.prototype.slice.apply(e).concat(r),String.fromCharCode.apply(null,r)},obfuseB:function(e,t){for(var n=[],r=0;r<16;r++)n[r]=16*parseInt(t[2*r],16)+parseInt(t[2*r+1],16);for(var i=0;i<16;i++)e[i]=e[i]^n[i];return e},sign:function(e,t){return c()(e+t)},md5:c.a,atob:function(e){var t=String(e).replace(/[=]+$/,"");if(t.length%4!=1){for(var n=0,r=void 0,i=void 0,o=0,s="";i=t.charAt(o++);~i&&(r=n%4?64*r+i:i,n++%4)?s+=String.fromCharCode(255&r>>(-2*n&6)):0)i="ABCDEFG0123456789abcdefgHIJKLMN+/hijklmnOPQRSTopqrstUVWXYZuvwxyz".indexOf(i);return s}console.error("'atob' failed: The string to be decoded is not correctly encoded.")},byteLength:function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var r=e.charCodeAt(n);r>127&&r<=2047?t++:r>2047&&r<=65535&&(t+=2),r>=56320&&r<=57343&&n--}return t},getBytes:function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}for(var i=0;i<t.length;i++){var o=t[i];o>127&&(t[i]=o-256)}return t}},p=p||function(e,t){var n={},r=n.lib={},i=function(){},o=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=r.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-i%4*8&255)<<24-(r+i)%4*8;else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new s.init(n,t)}}),a=n.enc={},u=a.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-r%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new s.init(n,t/2)}},c=a.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new s.init(n,t)}},f=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},d=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,o=this.blockSize,a=i/(4*o);if(t=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*o,i=e.min(4*t,i),t){for(var u=0;u<t;u+=o)this._doProcessBlock(r,u);u=r.splice(0,t),n.sigBytes-=i}return new s.init(u,i)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=d.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}});var p=n.algo={};return n}(Math);i=(a=(r=p).lib).WordArray,o=a.Hasher,s=[],a=r.algo.SHA1=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],a=n[3],u=n[4],c=0;80>c;c++){if(16>c)s[c]=0|e[t+c];else{var f=s[c-3]^s[c-8]^s[c-14]^s[c-16];s[c]=f<<1|f>>>31}f=(r<<5|r>>>27)+u+s[c],f=20>c?f+(1518500249+(i&o|~i&a)):40>c?f+(1859775393+(i^o^a)):60>c?f+((i&o|i&a|o&a)-1894007588):f+((i^o^a)-899497514),u=a,a=o,o=i<<30|i>>>2,i=r,r=f}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+a|0,n[4]=n[4]+u|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(r+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}}),r.SHA1=o._createHelper(a),r.HmacSHA1=o._createHmacHelper(a),function(){var e=p,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=t.parse(n));var r=e.blockSize,i=4*r;n.sigBytes>i&&(n=e.finalize(n)),n.clamp();for(var o=this._oKey=n.clone(),s=this._iKey=n.clone(),a=o.words,u=s.words,c=0;c<r;c++)a[c]^=1549556828,u[c]^=909522486;o.sigBytes=s.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}})}();var h=p,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y={};Object.assign(y,d),y.aSign=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.params,n=e.body,r=e.paramsString,i=void 0===r?"":r,o=e.bodyString,s=void 0===o?"":o,a=e.paramsSerializer,u=void 0===a?this.serialize:a,c=e.bodySerializer,f=e.contentType,d=void 0===f?"application/x-www-form-urlencoded":f,p=e.noDomainCheck,h=void 0!==p&&p;c=c||u,n&&(c&&"function"==typeof c?s=c(n)||s:console.error("BodySerializer must be passed to serialize body!")),t&&(u&&"function"==typeof u?i=u(t)||i:console.error("ParamsSerializer must be passed to serialize params!"));var l={},y=void 0;i&&(l=this.genKeyMapFromUrlString(i,l)),s&&(/application\/x-www-form-urlencoded/.test(d)?l=this.genKeyMapFromUrlString(s,l):/application\/json/.test(d)?l[s]=!0:console.error("ContentType must be application/json or application/x-www-form-urlencoded!")),y=this.byReverseOrder(l),h||this.domainCheck()||(y+=Math.random());var g=this.switchSign({content:y});return this.base64(g)},y.dd03=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).content,t=void 0===e?"":e,n=Math.floor(new Date/1e3),r=this.sign("R4doMFFeMNlliIWM",t),i=[{k:"ts",v:n},{k:"v",v:"1"},{k:"os",v:"web"},{k:"av",v:"02"},{k:"kv",v:"0000010001"},{k:"vl",v:this.byteLength(t)},{k:"sig",v:r},{k:"sv",v:this.params.sdkVer}],o=this.mapCs(i);return this.obfuse(this.derandbytes(),o)},y.dd05=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.content,n=e.xorStr,r=e.secretKey,i=this.tBase64(h.HmacSHA1(t,r),this.cipherType),o=this.params||{},s=o.bizId,a=o.appVer,u=o.os,c=o.sdkVer,f=[{k:"p0",v:this.uuid},{k:"p1",v:Date.now()},{k:"p2",v:s},{k:"p3",v:a},{k:"p4",v:u},{k:"p5",v:c},{k:"p6",v:this.byteLength(t)},{k:"p7",v:this.isDebug+"|"+this.isNodeEnv+"|"+this.isHoney},{k:"p8",v:i}],d=this.mapCs(f),p=this.randombytes(),l=new Uint8Array(this.getBytes(n).concat(p)),y=this.md5(this.getBytes(this.session));l=this.obfuseB(l,y);var g=this.obfuseC(p,d,l);return g},y.switchSign=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="",n="";switch(this.cipherType){case"0":return this.dd03(l({},e));case"11":return t="didijsv1",n=this.secretKey,this.dd05(l({},e,{xorStr:t,secretKey:n}));case"12":return t="didijsv2",n=this.md5(this.getBytes(this.secretKey).concat(this.getBytes(t))),this.dd05(l({},e,{xorStr:t,secretKey:n}))}};t.a=y},function(e,t,n){"use strict";n.r(t),n.d(t,"initSign",(function(){return i})),n.d(t,"getSign",(function(){return o}));var r=n(2),i=function(e){r.a.init(e)};function o(e){return r.a.getSign(e)}t.default=r.a},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],o=0;o<4;o++)8*r+6*o<=8*e.length?t.push(n.charAt(i>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&t.push((n.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|n.indexOf(e.charAt(r))>>>6-2*i);return t}},e.exports=r},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}}])}));