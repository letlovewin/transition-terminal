import{j as p,_ as $r,C as eo,r as Ds,k as K,l as Bn,m as Ne,n as to,p as no,q as so,t as st,v as Ht,w as xt,x as Yn,L as io,y as ro,z as ki,D as zn,B as oo,E as lo,G as Ms,H as xi,I as ao,J as co,K as nn,b as lt,d as ho,e as uo,f as bn,h as fo,M as _o,S as po,N as mo,g as Qe,O as Os,i as Ls,u as Fs}from"../chunks/index-dd468b12.p6hoiiBQ.js";import{g as Ws,i as go}from"../chunks/entry.aI1T4fYj.js";import{s as sn,f as qt,a as S,n as ke,r as Pi,e as Gt,v as vo,c as yo,h as Co}from"../chunks/scheduler.BEDwlmZC.js";import{S as Kn,i as jn,d as we,v as Qn,e as R,s as Y,t as Je,c as k,a as M,g as z,b as Ze,f as w,u as m,w as Ce,h as ne,j as C,k as Nn,G as We,H as Ue,q as He,y as Et,n as Eo,o as Us,p as wo,r as Vs,x as Gs,l as Hs,m as qs,z as Bs}from"../chunks/index.4gfCqfBS.js";import{g as Ys,c as zs,r as _n,a as Ks,b as Io}from"../chunks/index.esm2017.xa4U4bPS.js";import{b as To}from"../chunks/environment.xBoTdvbE.js";import{p as pn}from"../chunks/stores.R_P2ZKE6.js";import{M as Ai}from"../chunks/Modal.G52m9gS2.js";var js={};const Qs="@firebase/database",Xs="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="";function So(n){Di=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Bn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ne(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bo(e)}}catch{}return new No},Ve=Mi("localStorage"),Rn=Mi("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new io("@firebase/database"),Ro=function(){let n=1;return function(){return n++}}(),Oi=function(n){const e=to(n),t=new no;t.update(e);const s=t.digest();return so.encodeByteArray(s)},Pt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pt.apply(null,s):typeof s=="object"?e+=K(s):e+=s,e+=" "}return e};let qe=null,Js=!0;const ko=function(n,e){p(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?($e.logLevel=ro.VERBOSE,qe=$e.log.bind($e),e&&Rn.set("logging_enabled",!0)):typeof n=="function"?qe=n:(qe=null,Rn.remove("logging_enabled"))},se=function(...n){if(Js===!0&&(Js=!1,qe===null&&Rn.get("logging_enabled")===!0&&ko(!0)),qe){const e=Pt.apply(null,n);qe(e)}},At=function(n){return function(...e){se(n,...e)}},kn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Pt(...n);$e.error(e)},be=function(...n){const e=`FIREBASE FATAL ERROR: ${Pt(...n)}`;throw $e.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+Pt(...n);$e.warn(e)},xo=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Li=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Po=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},it="[MIN_NAME]",Be="[MAX_NAME]",at=function(n,e){if(n===e)return 0;if(n===it||e===Be)return-1;if(e===it||n===Be)return 1;{const t=Zs(n),s=Zs(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ao=function(n,e){return n===e?0:n<e?-1:1},dt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+K(e))},Xn=function(n){if(typeof n!="object"||n===null)return K(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=K(e[s]),t+=":",t+=Xn(n[e[s]]);return t+="}",t},Fi=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function he(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Wi=function(n){p(!Li(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(a=0;a<64;a+=8){let u=parseInt(h.substr(a,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},Do=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mo=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Oo(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Lo=new RegExp("^-?(0*)\\d{1,10}$"),Fo=-2147483648,Wo=2147483647,Zs=function(n){if(Lo.test(n)){const e=Number(n);if(e>=Fo&&e<=Wo)return e}return null},ct=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Uo=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class et{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}et.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="5",Ui="v",Vi="s",Gi="r",Hi="f",qi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bi="ls",Yi="p",xn="ac",zi="websocket",Ki="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ve.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ve.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ho(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Qi(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let s;if(e===zi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ki)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ho(n)&&(t.ns=n.namespace);const i=[];return he(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.counters_={}}incrementCounter(e,t=1){Ne(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _o(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={},gn={};function Zn(n){const e=n.toString();return mn[e]||(mn[e]=new qo),mn[e]}function Bo(n,e){const t=n.toString();return gn[t]||(gn[t]=e()),gn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ct(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="start",zo="close",Ko="pLPCommand",jo="pRTLPCB",Xi="id",Ji="pw",Zi="ser",Qo="cb",Xo="seg",Jo="ts",Zo="d",$o="dframe",$i=1870,er=30,el=$i-er,tl=25e3,nl=3e4;class Xe{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=At(e),this.stats_=Zn(t),this.urlFn=a=>(this.appCheckToken&&(a[xn]=this.appCheckToken),Qi(t,Ki,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yo(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nl)),Po(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $n((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$s)this.id=l,this.password=a;else if(o===zo)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[$s]="t",s[Zi]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Qo]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ui]=Jn,this.transportSessionId&&(s[Vi]=this.transportSessionId),this.lastSessionId&&(s[Bi]=this.lastSessionId),this.applicationId&&(s[Yi]=this.applicationId),this.appCheckToken&&(s[xn]=this.appCheckToken),typeof location<"u"&&location.hostname&&qi.test(location.hostname)&&(s[Gi]=Hi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xe.forceAllow_=!0}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){return Xe.forceAllow_?!0:!Xe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Do()&&!Mo()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=mo(t),i=Fi(s,el);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[$o]="t",s[Xi]=e,s[Ji]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=K(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $n{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ro(),window[Ko+this.uniqueCallbackIdentifier]=e,window[jo+this.uniqueCallbackIdentifier]=t,this.myIFrame=$n.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){se("frame writing exception"),l.stack&&se(l.stack),se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xi]=this.myID,e[Ji]=this.myPW,e[Zi]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+er+s.length<=$i;){const o=this.pendingSegs.shift();s=s+"&"+Xo+i+"="+o.seg+"&"+Jo+i+"="+o.ts+"&"+Zo+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(tl)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=16384,il=45e3;let Bt=null;typeof MozWebSocket<"u"?Bt=MozWebSocket:typeof WebSocket<"u"&&(Bt=WebSocket);class pe{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=At(this.connId),this.stats_=Zn(t),this.connURL=pe.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ui]=Jn,typeof location<"u"&&location.hostname&&qi.test(location.hostname)&&(o[Gi]=Hi),t&&(o[Vi]=t),s&&(o[Bi]=s),i&&(o[xn]=i),r&&(o[Yi]=r),Qi(e,zi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ve.set("previous_websocket_failure",!0);try{let s;ki(),this.mySock=new Bt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Bt!==null&&!pe.forceDisallow_}static previouslyFailed(){return Ve.isInMemoryStorage||Ve.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ve.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Bn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Fi(t,sl);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(il))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pe.responsesRequiredToBeHealthy=2;pe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xe,pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=pe&&pe.isAvailable();let s=t&&!pe.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pe];else{const i=this.transports_=[];for(const r of wt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);wt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=6e4,ol=5e3,ll=10*1024,al=100*1024,vn="t",ei="d",cl="s",ti="r",hl="e",ni="o",si="a",ii="n",ri="p",ul="h";class dl{constructor(e,t,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=At("c:"+this.id+":"),this.transportManager_=new wt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>al?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ll?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vn in e){const t=e[vn];t===si?this.upgradeIfSecondaryHealthy_():t===ti?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ni&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=dt("t",e),s=dt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ri,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:si,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ii,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=dt("t",e),s=dt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=dt(vn,e);if(ei in e){const s=e[ei];if(t===ul){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ii){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===cl?this.onConnectionShutdown_(s):t===ti?this.onReset_(s):t===hl?kn("Server Error: "+s):t===ni?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Jn!==s&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),gt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ol))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ri,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ve.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends nr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yt}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=32,li=768;class O{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function D(){return new O("")}function P(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ae(n){return n.pieces_.length-n.pieceNum_}function F(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new O(n.pieces_,e)}function sr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function fl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ir(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function rr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new O(e,0)}function j(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof O)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new O(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function re(n,e){const t=P(n),s=P(e);if(t===null)return e;if(t===s)return re(F(n),F(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function or(n,e){if(Ae(n)!==Ae(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function me(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ae(n)>Ae(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class _l{constructor(e,t){this.errorPrefix_=t,this.parts_=ir(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=nn(this.parts_[s]);lr(this)}}function pl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=nn(e),lr(n)}function ml(n){const e=n.parts_.pop();n.byteLength_-=nn(e),n.parts_.length>0&&(n.byteLength_-=1)}function lr(n){if(n.byteLength_>li)throw new Error(n.errorPrefix_+"has a key path longer than "+li+" bytes ("+n.byteLength_+").");if(n.parts_.length>oi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oi+") or object contains a cycle "+Le(n))}function Le(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends nr{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new es}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=1e3,gl=60*5*1e3,ai=30*1e3,vl=1.3,yl=3e4,Cl="server_kill",ci=3;class Se extends tr{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Se.nextPersistentConnectionId_++,this.log_=At("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ft,this.maxReconnectDelay_=gl,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ki())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");es.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(K(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new zn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Se.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ne(e,"w")){const s=st(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ai)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=lo(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):kn("Unrecognized action received from server: "+K(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ft,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ft,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yl&&(this.reconnectDelay_=ft),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Se.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(d){p(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,l=new dl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{ce(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Cl)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ce(d),a())}}}interrupt(e){se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ms(this.interruptReasons_)&&(this.reconnectDelay_=ft,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Xn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new O(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ci&&(this.reconnectDelay_=ai,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ci&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Di.replace(/\./g,"-")]=1,xi()?e["framework.cordova"]=1:ao()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yt.getInstance().currentlyOnline();return Ms(this.interruptReasons_)&&e}}Se.nextPersistentConnectionId_=0;Se.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new N(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new N(it,e),i=new N(it,t);return this.compare(s,i)!==0}minPost(){return N.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class ar extends rn{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return at(e.name,t.name)}isDefinedOn(e){throw xt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return N.MIN}maxPost(){return new N(Be,Ut)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,Ut)}toString(){return".key"}}const tt=new ar;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Z{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Z.RED,this.left=i??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,t,s,i,r){return new Z(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Z.RED=!0;Z.BLACK=!1;class El{copy(e,t,s,i,r){return this}insert(e,t,s){return new Z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,t=ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Z.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Z.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new El;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e){return at(n.name,e.name)}function ts(n,e){return at(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn;function Il(n){Pn=n}const cr=function(n){return typeof n=="number"?"number:"+Wi(n):"string:"+n},hr=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ne(e,".sv"),"Priority must be a string or number.")}else p(n===Pn||n.isEmpty(),"priority of unexpected type.");p(n===Pn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class J{constructor(e,t=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hr(this.priorityNode_)}static set __childrenNodeConstructor(e){hi=e}static get __childrenNodeConstructor(){return hi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new J(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:P(e)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=P(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||Ae(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(F(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Wi(this.value_):e+=this.value_,this.lazyHash_=Oi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===J.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof J.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=J.VALUE_TYPE_ORDER.indexOf(t),r=J.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur,dr;function Tl(n){ur=n}function Sl(n){dr=n}class bl extends rn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?at(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return N.MIN}maxPost(){return new N(Be,new J("[PRIORITY-POST]",dr))}makePost(e,t){const s=ur(e);return new N(t,new J("[PRIORITY-POST]",s))}toString(){return".priority"}}const q=new bl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=Math.log(2);class Rl{constructor(e){const t=r=>parseInt(Math.log(r)/Nl,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zt=function(n,e,t,s){n.sort(e);const i=function(a,c){const h=c-a;let d,u;if(h===0)return null;if(h===1)return d=n[a],u=t?t(d):d,new Z(u,d.node,Z.BLACK,null,null);{const _=parseInt(h/2,10)+a,f=i(a,_),I=i(_+1,c);return d=n[_],u=t?t(d):d,new Z(u,d.node,Z.BLACK,f,I)}},r=function(a){let c=null,h=null,d=n.length;const u=function(f,I){const v=d-f,y=d;d-=f;const A=i(v+1,y),b=n[v],ee=t?t(b):b;_(new Z(ee,b.node,I,null,A))},_=function(f){c?(c.left=f,c=f):(h=f,c=f)};for(let f=0;f<a.count;++f){const I=a.nextBitIsOne(),v=Math.pow(2,a.count-(f+1));I?u(v,Z.BLACK):(u(v,Z.BLACK),u(v,Z.RED))}return h},o=new Rl(n.length),l=r(o);return new ae(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;const je={};class Te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return p(je&&q,"ChildrenNode.ts has not been loaded"),yn=yn||new Te({".priority":je},{".priority":q}),yn}get(e){const t=st(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ae?t:null}hasIndex(e){return Ne(this.indexSet_,e.toString())}addIndex(e,t){p(e!==tt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(N.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=zt(s,e.getCompare()):l=je;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Te(h,c)}addToIndexes(e,t){const s=Ht(this.indexes_,(i,r)=>{const o=st(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===je)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(N.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),zt(l,o.getCompare())}else return je;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new N(e.name,l))),a.insert(e,e.node)}});return new Te(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ht(this.indexes_,i=>{if(i===je)return i;{const r=t.get(e.name);return r?i.remove(new N(e.name,r)):i}});return new Te(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _t;class E{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&hr(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _t||(_t=new E(new ae(ts),null,Te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_t}updatePriority(e){return this.children_.isEmpty()?this:new E(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_t:t}}getChild(e){const t=P(e);return t===null?this:this.getImmediateChild(t).getChild(F(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new N(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?_t:this.priorityNode_;return new E(i,o,r)}}updateChild(e,t){const s=P(e);if(s===null)return t;{p(P(e)!==".priority"||Ae(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(F(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(q,(o,l)=>{t[o]=l.val(e),s++,r&&E.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cr(this.getPriority().val())+":"),this.forEachChild(q,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Oi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new N(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new N(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new N(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dt?-1:0}withIndex(e){if(e===tt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new E(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===tt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(q),i=t.getIterator(q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===tt?null:this.indexMap_.get(e.toString())}}E.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kl extends E{constructor(){super(new ae(ts),E.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return E.EMPTY_NODE}isEmpty(){return!1}}const Dt=new kl;Object.defineProperties(N,{MIN:{value:new N(it,E.EMPTY_NODE)},MAX:{value:new N(Be,Dt)}});ar.__EMPTY_NODE=E.EMPTY_NODE;J.__childrenNodeConstructor=E;Il(Dt);Sl(Dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=!0;function $(n,e=null){if(n===null)return E.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new J(t,$(e))}if(!(n instanceof Array)&&xl){const t=[];let s=!1;if(he(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=$(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new N(o,a)))}}),t.length===0)return E.EMPTY_NODE;const r=zt(t,wl,o=>o.name,ts);if(s){const o=zt(t,q.getCompare());return new E(r,$(e),new Te({".priority":o},{".priority":q}))}else return new E(r,$(e),Te.Default)}else{let t=E.EMPTY_NODE;return he(n,(s,i)=>{if(Ne(n,s)&&s.substring(0,1)!=="."){const r=$(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority($(e))}}Tl($);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends rn{constructor(e){super(),this.indexPath_=e,p(!x(e)&&P(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?at(e.name,t.name):r}makePost(e,t){const s=$(e),i=E.EMPTY_NODE.updateChild(this.indexPath_,s);return new N(t,i)}maxPost(){const e=E.EMPTY_NODE.updateChild(this.indexPath_,Dt);return new N(Be,e)}toString(){return ir(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends rn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?at(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,t){const s=$(e);return new N(t,s)}toString(){return".value"}}const Dl=new Al;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){return{type:"value",snapshotNode:n}}function rt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function It(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Tt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ml(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(It(t,l)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(rt(t,s)):o.trackChildChange(Tt(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(q,(i,r)=>{t.hasChild(i)||s.trackChildChange(It(i,r))}),t.isLeafNode()||t.forEachChild(q,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Tt(i,r,o))}else s.trackChildChange(rt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?E.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.indexedFilter_=new ns(e.getIndex()),this.index_=e.getIndex(),this.startPost_=St.getStartPost_(e),this.endPost_=St.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new N(t,s))||(s=E.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=E.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(E.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,l)=>{r.matches(new N(o,l))||(i=i.updateImmediateChild(o,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new St(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new N(t,s))||(s=E.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=E.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(E.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,_)=>d(_,u)}else o=this.index_.getCompare();const l=e;p(l.numChildren()===this.limit_,"");const a=new N(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(t)){const d=l.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||l.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const _=u==null?1:o(u,a);if(h&&!s.isEmpty()&&_>=0)return r?.trackChildChange(Tt(t,s,d)),l.updateImmediateChild(t,s);{r?.trackChildChange(It(t,d));const I=l.updateImmediateChild(t,E.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(rt(u.name,u.node)),I.updateImmediateChild(u.name,u.node)):I}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(It(c.name,c.node)),r.trackChildChange(rt(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,E.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:it}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new ss;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ll(n){return n.loadsAllData()?new ns(n.getIndex()):n.hasLimit()?new Ol(n):new St(n)}function ui(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===Dl?t="$value":n.index_===tt?t="$key":(p(n.index_ instanceof Pl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=K(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=K(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+K(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=K(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+K(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function di(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends tr{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=At("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Kt.getListenId_(e,s),l={};this.listens_[o]=l;const a=ui(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),st(this.listens_,o)===l){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,t){const s=Kt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ui(e._queryParams),s=e._path.toString(),i=new zn;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+co(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Bn(l.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.rootNode_=E.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return{value:null,children:new Map}}function _r(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=P(e);n.children.has(s)||n.children.set(s,jt());const i=n.children.get(s);e=F(e),_r(i,e,t)}}function An(n,e,t){n.value!==null?t(e,n.value):Wl(n,(s,i)=>{const r=new O(e.toString()+"/"+s);An(i,r,t)})}function Wl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&he(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=10*1e3,Vl=30*1e3,Gl=5*60*1e3;class Hl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ul(e);const s=fi+(Vl-fi)*Math.random();gt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;he(e,(i,r)=>{r>0&&Ne(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),gt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gl))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ge||(ge={}));function pr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function is(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ge.ACK_USER_WRITE,this.source=pr()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new O(e));return new Qt(D(),t,this.revert)}}else return p(P(this.path)===e,"operationForChild called for unrelated child."),new Qt(F(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){this.source=e,this.path=t,this.type=ge.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new bt(this.source,D()):new bt(this.source,F(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ge.OVERWRITE}operationForChild(e){return x(this.path)?new Ye(this.source,D(),this.snap.getImmediateChild(e)):new Ye(this.source,F(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ge.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new O(e));return t.isEmpty()?null:t.value?new Ye(this.source,D(),t.value):new Nt(this.source,D(),t)}else return p(P(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nt(this.source,F(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=P(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bl(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ml(o.childName,o.snapshotNode))}),pt(n,i,"child_removed",e,s,t),pt(n,i,"child_added",e,s,t),pt(n,i,"child_moved",r,s,t),pt(n,i,"child_changed",e,s,t),pt(n,i,"value",e,s,t),i}function pt(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>zl(n,l,a)),o.forEach(l=>{const a=Yl(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Yl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zl(n,e,t){if(e.childName==null||t.childName==null)throw xt("Should only compare child_ events.");const s=new N(e.childName,e.snapshotNode),i=new N(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n,e){return{eventCache:n,serverCache:e}}function vt(n,e,t,s){return on(new De(e,t,s),n.serverCache)}function mr(n,e,t,s){return on(n.eventCache,new De(e,t,s))}function Xt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ze(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn;const Kl=()=>(Cn||(Cn=new ae(Ao)),Cn);class V{constructor(e,t=Kl()){this.value=e,this.children=t}static fromObject(e){let t=new V(null);return he(e,(s,i)=>{t=t.set(new O(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:D(),value:this.value};if(x(e))return null;{const s=P(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(F(e),t);return r!=null?{path:j(new O(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=P(e),s=this.children.get(t);return s!==null?s.subtree(F(e)):new V(null)}}set(e,t){if(x(e))return new V(t,this.children);{const s=P(e),r=(this.children.get(s)||new V(null)).set(F(e),t),o=this.children.insert(s,r);return new V(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new V(null):new V(null,this.children);{const t=P(e),s=this.children.get(t);if(s){const i=s.remove(F(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new V(null):new V(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=P(e),s=this.children.get(t);return s?s.get(F(e)):null}}setTree(e,t){if(x(e))return t;{const s=P(e),r=(this.children.get(s)||new V(null)).setTree(F(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new V(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(j(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,D(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(x(e))return null;{const r=P(e),o=this.children.get(r);return o?o.findOnPath_(F(e),j(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,D(),t)}foreachOnPath_(e,t,s){if(x(e))return this;{this.value&&s(t,this.value);const i=P(e),r=this.children.get(i);return r?r.foreachOnPath_(F(e),j(t,i),s):new V(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(j(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new V(null))}}function yt(n,e,t){if(x(e))return new ve(new V(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=re(i,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(i,r))}else{const i=new V(t),r=n.writeTree_.setTree(e,i);return new ve(r)}}}function _i(n,e,t){let s=n;return he(t,(i,r)=>{s=yt(s,j(e,i),r)}),s}function pi(n,e){if(x(e))return ve.empty();{const t=n.writeTree_.setTree(e,new V(null));return new ve(t)}}function Dn(n,e){return Ke(n,e)!=null}function Ke(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(re(t.path,e)):null}function mi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(s,i)=>{e.push(new N(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new N(s,i.value))}),e}function xe(n,e){if(x(e))return n;{const t=Ke(n,e);return t!=null?new ve(new V(t)):new ve(n.writeTree_.subtree(e))}}function Mn(n){return n.writeTree_.isEmpty()}function ot(n,e){return gr(D(),n.writeTree_,e)}function gr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=gr(j(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(j(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n,e){return Er(e,n)}function jl(n,e,t,s,i){p(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=yt(n.visibleWrites,e,t)),n.lastWriteId=s}function Ql(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Xl(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Jl(l,s.path)?i=!1:me(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Zl(n),!0;if(s.snap)n.visibleWrites=pi(n.visibleWrites,s.path);else{const l=s.children;he(l,a=>{n.visibleWrites=pi(n.visibleWrites,j(s.path,a))})}return!0}else return!1}function Jl(n,e){if(n.snap)return me(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&me(j(n.path,t),e))return!0;return!1}function Zl(n){n.visibleWrites=vr(n.allWrites,$l,D()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function $l(n){return n.visible}function vr(n,e,t){let s=ve.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)me(t,o)?(l=re(t,o),s=yt(s,l,r.snap)):me(o,t)&&(l=re(o,t),s=yt(s,D(),r.snap.getChild(l)));else if(r.children){if(me(t,o))l=re(t,o),s=_i(s,l,r.children);else if(me(o,t))if(l=re(o,t),x(l))s=_i(s,D(),r.children);else{const a=st(r.children,P(l));if(a){const c=a.getChild(F(l));s=yt(s,D(),c)}}}else throw xt("WriteRecord should have .snap or .children")}}return s}function yr(n,e,t,s,i){if(!s&&!i){const r=Ke(n.visibleWrites,e);if(r!=null)return r;{const o=xe(n.visibleWrites,e);if(Mn(o))return t;if(t==null&&!Dn(o,D()))return null;{const l=t||E.EMPTY_NODE;return ot(o,l)}}}else{const r=xe(n.visibleWrites,e);if(!i&&Mn(r))return t;if(!i&&t==null&&!Dn(r,D()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(me(c.path,e)||me(e,c.path))},l=vr(n.allWrites,o,e),a=t||E.EMPTY_NODE;return ot(l,a)}}}function ea(n,e,t){let s=E.EMPTY_NODE;const i=Ke(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=xe(n.visibleWrites,e);return t.forEachChild(q,(o,l)=>{const a=ot(xe(r,new O(o)),l);s=s.updateImmediateChild(o,a)}),mi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xe(n.visibleWrites,e);return mi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ta(n,e,t,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(Dn(n.visibleWrites,r))return null;{const o=xe(n.visibleWrites,r);return Mn(o)?i.getChild(t):ot(o,i.getChild(t))}}function na(n,e,t,s){const i=j(e,t),r=Ke(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=xe(n.visibleWrites,i);return ot(o,s.getNode().getImmediateChild(t))}else return null}function sa(n,e){return Ke(n.visibleWrites,e)}function ia(n,e,t,s,i,r,o){let l;const a=xe(n.visibleWrites,e),c=Ke(a,D());if(c!=null)l=c;else if(t!=null)l=ot(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),u=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=u.getNext();for(;_&&h.length<i;)d(_,s)!==0&&h.push(_),_=u.getNext();return h}else return[]}function ra(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function Jt(n,e,t,s){return yr(n.writeTree,n.treePath,e,t,s)}function os(n,e){return ea(n.writeTree,n.treePath,e)}function gi(n,e,t,s){return ta(n.writeTree,n.treePath,e,t,s)}function Zt(n,e){return sa(n.writeTree,j(n.treePath,e))}function oa(n,e,t,s,i,r){return ia(n.writeTree,n.treePath,e,t,s,i,r)}function ls(n,e,t){return na(n.writeTree,n.treePath,e,t)}function Cr(n,e){return Er(j(n.treePath,e),n.writeTree)}function Er(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Tt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,It(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,rt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Tt(s,e.snapshotNode,i.oldSnap));else throw xt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const wr=new aa;class as{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new De(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ls(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ze(this.viewCache_),r=oa(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){return{filter:n}}function ha(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ua(n,e,t,s,i){const r=new la;let o,l;if(t.type===ge.OVERWRITE){const c=t;c.source.fromUser?o=On(n,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!x(c.path),o=$t(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===ge.MERGE){const c=t;c.source.fromUser?o=fa(n,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ln(n,e,c.path,c.children,s,i,l,r))}else if(t.type===ge.ACK_USER_WRITE){const c=t;c.revert?o=ma(n,e,c.path,s,i,r):o=_a(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===ge.LISTEN_COMPLETE)o=pa(n,e,t.path,s,r);else throw xt("Unknown operation type: "+t.type);const a=r.getChanges();return da(e,o,a),{viewCache:o,changes:a}}function da(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(fr(Xt(e)))}}function Ir(n,e,t,s,i,r){const o=e.eventCache;if(Zt(s,t)!=null)return e;{let l,a;if(x(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ze(e),h=c instanceof E?c:E.EMPTY_NODE,d=os(s,h);l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Jt(s,ze(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=P(t);if(c===".priority"){p(Ae(t)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=gi(s,t,h,a);d!=null?l=n.filter.updatePriority(h,d):l=o.getNode()}else{const h=F(t);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const u=gi(s,t,o.getNode(),a);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=ls(s,c,e.serverCache);d!=null?l=n.filter.updateChild(o.getNode(),c,d,h,i,r):l=o.getNode()}}return vt(e,l,o.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function $t(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(x(t))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(t,s);c=h.updateFullNode(a.getNode(),_,null)}else{const _=P(t);if(!a.isCompleteForPath(t)&&Ae(t)>1)return e;const f=F(t),v=a.getNode().getImmediateChild(_).updateChild(f,s);_===".priority"?c=h.updatePriority(a.getNode(),v):c=h.updateChild(a.getNode(),_,v,f,wr,null)}const d=mr(e,c,a.isFullyInitialized()||x(t),h.filtersNodes()),u=new as(i,d,r);return Ir(n,d,t,i,u,l)}function On(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const h=new as(i,e,r);if(x(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=vt(e,c,!0,n.filter.filtersNodes());else{const d=P(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=vt(e,c,l.isFullyInitialized(),l.isFiltered());else{const u=F(t),_=l.getNode().getImmediateChild(d);let f;if(x(u))f=s;else{const I=h.getCompleteChild(d);I!=null?sr(u)===".priority"&&I.getChild(rr(u)).isEmpty()?f=I:f=I.updateChild(u,s):f=E.EMPTY_NODE}if(_.equals(f))a=e;else{const I=n.filter.updateChild(l.getNode(),d,f,u,h,o);a=vt(e,I,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function vi(n,e){return n.eventCache.isCompleteForChild(e)}function fa(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=j(t,a);vi(e,P(h))&&(l=On(n,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=j(t,a);vi(e,P(h))||(l=On(n,l,h,c,i,r,o))}),l}function yi(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ln(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;x(t)?c=s:c=new V(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),f=yi(n,_,u);a=$t(n,a,new O(d),f,i,r,o,l)}}),c.children.inorderTraversal((d,u)=>{const _=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!_){const f=e.serverCache.getNode().getImmediateChild(d),I=yi(n,f,u);a=$t(n,a,new O(d),I,i,r,o,l)}}),a}function _a(n,e,t,s,i,r,o){if(Zt(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(x(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return $t(n,e,t,a.getNode().getChild(t),i,r,l,o);if(x(t)){let c=new V(null);return a.getNode().forEachChild(tt,(h,d)=>{c=c.set(new O(h),d)}),Ln(n,e,t,c,i,r,l,o)}else return e}else{let c=new V(null);return s.foreach((h,d)=>{const u=j(t,h);a.isCompleteForPath(u)&&(c=c.set(h,a.getNode().getChild(u)))}),Ln(n,e,t,c,i,r,l,o)}}function pa(n,e,t,s,i){const r=e.serverCache,o=mr(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return Ir(n,o,t,s,wr,i)}function ma(n,e,t,s,i,r){let o;if(Zt(s,t)!=null)return e;{const l=new as(s,e,i),a=e.eventCache.getNode();let c;if(x(t)||P(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Jt(s,ze(e));else{const d=e.serverCache.getNode();p(d instanceof E,"serverChildren would be complete if leaf node"),h=os(s,d)}h=h,c=n.filter.updateFullNode(a,h,r)}else{const h=P(t);let d=ls(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?c=n.filter.updateChild(a,h,d,F(t),l,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(a,h,E.EMPTY_NODE,F(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jt(s,ze(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zt(s,D())!=null,vt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ns(s.getIndex()),r=Ll(s);this.processor_=ca(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(E.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(E.EMPTY_NODE,l.getNode(),null),h=new De(a,o.isFullyInitialized(),i.filtersNodes()),d=new De(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=on(d,h),this.eventGenerator_=new ql(this.query_)}get query(){return this.query_}}function va(n){return n.viewCache_.serverCache.getNode()}function ya(n){return Xt(n.viewCache_)}function Ca(n,e){const t=ze(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(P(e)).isEmpty())?t.getChild(e):null}function Ci(n){return n.eventRegistrations_.length===0}function Ea(n,e){n.eventRegistrations_.push(e)}function Ei(n,e,t){const s=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function wi(n,e,t,s){e.type===ge.MERGE&&e.source.queryId!==null&&(p(ze(n.viewCache_),"We should always have a full cache before handling merges"),p(Xt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=ua(n.processor_,i,e,t,s);return ha(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Tr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function wa(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{s.push(rt(r,o))}),t.isFullyInitialized()&&s.push(fr(t.getNode())),Tr(n,s,t.getNode(),e)}function Tr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Bl(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en;class Sr{constructor(){this.views=new Map}}function Ia(n){p(!en,"__referenceConstructor has already been defined"),en=n}function Ta(){return p(en,"Reference.ts has not been loaded"),en}function Sa(n){return n.views.size===0}function cs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),wi(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(wi(o,e,t,s));return r}}function br(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Jt(t,i?s:null),a=!1;l?a=!0:s instanceof E?(l=os(t,s),a=!1):(l=E.EMPTY_NODE,a=!1);const c=on(new De(l,a,!1),new De(s,i,!1));return new ga(e,c)}return o}function ba(n,e,t,s,i,r){const o=br(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ea(o,t),wa(o,t)}function Na(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Me(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Ei(c,t,s)),Ci(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Ei(a,t,s)),Ci(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Me(n)&&r.push(new(Ta())(e._repo,e._path)),{removed:r,events:o}}function Nr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Pe(n,e){let t=null;for(const s of n.views.values())t=t||Ca(s,e);return t}function Rr(n,e){if(e._queryParams.loadsAllData())return an(n);{const s=e._queryIdentifier;return n.views.get(s)}}function kr(n,e){return Rr(n,e)!=null}function Me(n){return an(n)!=null}function an(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn;function Ra(n){p(!tn,"__referenceConstructor has already been defined"),tn=n}function ka(){return p(tn,"Reference.ts has not been loaded"),tn}let xa=1;class Ii{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=ra(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xr(n,e,t,s,i){return jl(n.pendingWriteTree_,e,t,s,i),i?Ot(n,new Ye(pr(),e,t)):[]}function Ge(n,e,t=!1){const s=Ql(n.pendingWriteTree_,e);if(Xl(n.pendingWriteTree_,e)){let r=new V(null);return s.snap!=null?r=r.set(D(),!0):he(s.children,o=>{r=r.set(new O(o),!0)}),Ot(n,new Qt(s.path,r,t))}else return[]}function Mt(n,e,t){return Ot(n,new Ye(is(),e,t))}function Pa(n,e,t){const s=V.fromObject(t);return Ot(n,new Nt(is(),e,s))}function Aa(n,e){return Ot(n,new bt(is(),e))}function Da(n,e,t){const s=us(n,t);if(s){const i=ds(s),r=i.path,o=i.queryId,l=re(r,e),a=new bt(rs(o),l);return fs(n,r,a)}else return[]}function Pr(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||kr(o,e))){const a=Na(o,e,t,s);Sa(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,_)=>Me(_));if(h&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const _=Fa(u);for(let f=0;f<_.length;++f){const I=_[f],v=I.query,y=Or(n,I);n.listenProvider_.startListening(Ct(v),Rt(n,v),y.hashFn,y.onComplete)}}}!d&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Ct(e),null):c.forEach(u=>{const _=n.queryToTagMap.get(cn(u));n.listenProvider_.stopListening(Ct(u),_)}))}Wa(n,c)}return l}function Ar(n,e,t,s){const i=us(n,s);if(i!=null){const r=ds(i),o=r.path,l=r.queryId,a=re(o,e),c=new Ye(rs(l),a,t);return fs(n,o,c)}else return[]}function Ma(n,e,t,s){const i=us(n,s);if(i){const r=ds(i),o=r.path,l=r.queryId,a=re(o,e),c=V.fromObject(t),h=new Nt(rs(l),a,c);return fs(n,o,h)}else return[]}function Oa(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,_)=>{const f=re(u,i);r=r||Pe(_,f),o=o||Me(_)});let l=n.syncPointTree_.get(i);l?(o=o||Me(l),r=r||Pe(l,D())):(l=new Sr,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=E.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,f)=>{const I=Pe(f,D());I&&(r=r.updateImmediateChild(_,I))}));const c=kr(l,e);if(!c&&!e._queryParams.loadsAllData()){const u=cn(e);p(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const _=Ua();n.queryToTagMap.set(u,_),n.tagToQueryMap.set(_,u)}const h=ln(n.pendingWriteTree_,i);let d=ba(l,e,t,h,r,a);if(!c&&!o&&!s){const u=Rr(l,e);d=d.concat(Va(n,e,u))}return d}function hs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=re(o,e),c=Pe(l,a);if(c)return c});return yr(i,e,r,t,!0)}function La(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const d=re(c,t);s=s||Pe(h,d)});let i=n.syncPointTree_.get(t);i?s=s||Pe(i,D()):(i=new Sr,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new De(s,!0,!1):null,l=ln(n.pendingWriteTree_,e._path),a=br(i,e,l,r?o.getNode():E.EMPTY_NODE,r);return ya(a)}function Ot(n,e){return Dr(e,n.syncPointTree_,null,ln(n.pendingWriteTree_,D()))}function Dr(n,e,t,s){if(x(n.path))return Mr(n,e,t,s);{const i=e.get(D());t==null&&i!=null&&(t=Pe(i,D()));let r=[];const o=P(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,h=Cr(s,o);r=r.concat(Dr(l,a,c,h))}return i&&(r=r.concat(cs(i,n,s,t))),r}}function Mr(n,e,t,s){const i=e.get(D());t==null&&i!=null&&(t=Pe(i,D()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Cr(s,o),h=n.operationForChild(o);h&&(r=r.concat(Mr(h,l,a,c)))}),i&&(r=r.concat(cs(i,n,s,t))),r}function Or(n,e){const t=e.query,s=Rt(n,t);return{hashFn:()=>(va(e)||E.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Da(n,t._path,s):Aa(n,t._path);{const r=Oo(i,t);return Pr(n,t,null,r)}}}}function Rt(n,e){const t=cn(e);return n.queryToTagMap.get(t)}function cn(n){return n._path.toString()+"$"+n._queryIdentifier}function us(n,e){return n.tagToQueryMap.get(e)}function ds(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new O(n.substr(0,e))}}function fs(n,e,t){const s=n.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=ln(n.pendingWriteTree_,e);return cs(s,t,i,null)}function Fa(n){return n.fold((e,t,s)=>{if(t&&Me(t))return[an(t)];{let i=[];return t&&(i=Nr(t)),he(s,(r,o)=>{i=i.concat(o)}),i}})}function Ct(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ka())(n._repo,n._path):n}function Wa(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=cn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ua(){return xa++}function Va(n,e,t){const s=e._path,i=Rt(n,e),r=Or(n,t),o=n.listenProvider_.startListening(Ct(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)p(!Me(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,d)=>{if(!x(c)&&h&&Me(h))return[an(h).query];{let u=[];return h&&(u=u.concat(Nr(h).map(_=>_.query))),he(d,(_,f)=>{u=u.concat(f)}),u}});for(let c=0;c<a.length;++c){const h=a[c];n.listenProvider_.stopListening(Ct(h),Rt(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _s(t)}node(){return this.node_}}class ps{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new ps(this.syncTree_,t)}node(){return hs(this.syncTree_,this.path_)}}const Ga=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ti=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Ha(n[".sv"],e,t);if(typeof n[".sv"]=="object")return qa(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Ha=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},qa=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ba=function(n,e,t,s){return ms(e,new ps(t,n),s)},Lr=function(n,e,t){return ms(n,new _s(e),t)};function ms(n,e,t){const s=n.getPriority().val(),i=Ti(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Ti(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new J(l,$(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new J(i))),o.forEachChild(q,(l,a)=>{const c=ms(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function vs(n,e){let t=e instanceof O?e:new O(e),s=n,i=P(t);for(;i!==null;){const r=st(s.node.children,i)||{children:{},childCount:0};s=new gs(i,s,r),t=F(t),i=P(t)}return s}function ht(n){return n.node.value}function Fr(n,e){n.node.value=e,Fn(n)}function Wr(n){return n.node.childCount>0}function Ya(n){return ht(n)===void 0&&!Wr(n)}function hn(n,e){he(n.node.children,(t,s)=>{e(new gs(t,n,s))})}function Ur(n,e,t,s){t&&!s&&e(n),hn(n,i=>{Ur(i,e,!0,s)}),t&&s&&e(n)}function za(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Lt(n){return new O(n.parent===null?n.name:Lt(n.parent)+"/"+n.name)}function Fn(n){n.parent!==null&&Ka(n.parent,n.name,n)}function Ka(n,e,t){const s=Ya(t),i=Ne(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Fn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Fn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=/[\[\].#$\/\u0000-\u001F\u007F]/,Qa=/[\[\].#$\u0000-\u001F\u007F]/,En=10*1024*1024,Vr=function(n){return typeof n=="string"&&n.length!==0&&!ja.test(n)},Gr=function(n){return typeof n=="string"&&n.length!==0&&!Qa.test(n)},Xa=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gr(n)},Ja=function(n,e,t,s){s&&e===void 0||ys(Yn(n,"value"),e,t)},ys=function(n,e,t){const s=t instanceof O?new _l(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Le(s));if(typeof e=="function")throw new Error(n+"contains a function "+Le(s)+" with contents = "+e.toString());if(Li(e))throw new Error(n+"contains "+e.toString()+" "+Le(s));if(typeof e=="string"&&e.length>En/3&&nn(e)>En)throw new Error(n+"contains a string greater than "+En+" utf8 bytes "+Le(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(he(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Le(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pl(s,o),ys(n,l,s),ml(s)}),i&&r)throw new Error(n+' contains ".value" child '+Le(s)+" in addition to actual children.")}},Hr=function(n,e,t,s){if(!(s&&t===void 0)&&!Gr(t))throw new Error(Yn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Za=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hr(n,e,t,s)},$a=function(n,e){if(P(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ec=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Xa(t))throw new Error(Yn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!or(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ee(n,e,t){qr(n,t),nc(n,s=>me(s,e)||me(e,s))}function nc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(sc(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function sc(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();qe&&se("event: "+t.toString()),ct(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="repo_interrupt",rc=25;class oc{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jt(),this.transactionQueueTree_=new gs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lc(n,e,t){if(n.stats_=Zn(n.repoInfo_),n.forceRestClient_||Uo())n.server_=new Kt(n.repoInfo_,(s,i,r,o)=>{Si(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>bi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Se(n.repoInfo_,e,(s,i,r,o)=>{Si(n,s,i,r,o)},s=>{bi(n,s)},s=>{cc(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Bo(n.repoInfo_,()=>new Hl(n.stats_,n.server_)),n.infoData_=new Fl,n.infoSyncTree_=new Ii({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Mt(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Es(n,"connected",!1),n.serverSyncTree_=new Ii({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Ee(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ac(n){const t=n.infoData_.getNode(new O(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Cs(n){return Ga({timestamp:ac(n)})}function Si(n,e,t,s,i){n.dataUpdateCount++;const r=new O(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Ht(t,c=>$(c));o=Ma(n.serverSyncTree_,r,a,i)}else{const a=$(t);o=Ar(n.serverSyncTree_,r,a,i)}else if(s){const a=Ht(t,c=>$(c));o=Pa(n.serverSyncTree_,r,a)}else{const a=$(t);o=Mt(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=dn(n,r)),Ee(n.eventQueue_,l,o)}function bi(n,e){Es(n,"connected",e),e===!1&&dc(n)}function cc(n,e){he(e,(t,s)=>{Es(n,t,s)})}function Es(n,e,t){const s=new O("/.info/"+e),i=$(t);n.infoData_.updateSnapshot(s,i);const r=Mt(n.infoSyncTree_,s,i);Ee(n.eventQueue_,s,r)}function Br(n){return n.nextWriteId_++}function hc(n,e,t){const s=La(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=$(i).withIndex(e._queryParams.getIndex());Oa(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Mt(n.serverSyncTree_,e._path,r);else{const l=Rt(n.serverSyncTree_,e);o=Ar(n.serverSyncTree_,e._path,r,l)}return Ee(n.eventQueue_,e._path,o),Pr(n.serverSyncTree_,e,t,null,!0),r},i=>(un(n,"get for query "+K(e)+" failed: "+i),Promise.reject(new Error(i))))}function uc(n,e,t,s,i){un(n,"set",{path:e.toString(),value:t,priority:s});const r=Cs(n),o=$(t,s),l=hs(n.serverSyncTree_,e),a=Lr(o,l,r),c=Br(n),h=xr(n.serverSyncTree_,e,a,c,!0);qr(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(u,_)=>{const f=u==="ok";f||ce("set at "+e+" failed: "+u);const I=Ge(n.serverSyncTree_,c,!f);Ee(n.eventQueue_,e,I),_c(n,i,u,_)});const d=Qr(n,e);dn(n,d),Ee(n.eventQueue_,d,[])}function dc(n){un(n,"onDisconnectEvents");const e=Cs(n),t=jt();An(n.onDisconnect_,D(),(i,r)=>{const o=Ba(i,r,n.serverSyncTree_,e);_r(t,i,o)});let s=[];An(t,D(),(i,r)=>{s=s.concat(Mt(n.serverSyncTree_,i,r));const o=Qr(n,i);dn(n,o)}),n.onDisconnect_=jt(),Ee(n.eventQueue_,D(),s)}function fc(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ic)}function un(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),se(t,...e)}function _c(n,e,t,s){e&&ct(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Yr(n,e,t){return hs(n.serverSyncTree_,e,t)||E.EMPTY_NODE}function ws(n,e=n.transactionQueueTree_){if(e||fn(n,e),ht(e)){const t=Kr(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&pc(n,Lt(e),t)}else Wr(e)&&hn(e,t=>{ws(n,t)})}function pc(n,e,t){const s=t.map(c=>c.currentWriteId),i=Yr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];p(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=re(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{un(n,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(Ge(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();fn(n,vs(n.transactionQueueTree_,e)),ws(n,n.transactionQueueTree_),Ee(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)ct(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{ce("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}dn(n,e)}},o)}function dn(n,e){const t=zr(n,e),s=Lt(t),i=Kr(n,t);return mc(n,i,s),s}function mc(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=re(t,a.path);let h=!1,d;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,i=i.concat(Ge(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=rc)h=!0,d="maxretry",i=i.concat(Ge(n.serverSyncTree_,a.currentWriteId,!0));else{const u=Yr(n,a.path,o);a.currentInputSnapshot=u;const _=e[l].update(u.val());if(_!==void 0){ys("transaction failed: Data returned ",_,a.path);let f=$(_);typeof _=="object"&&_!=null&&Ne(_,".priority")||(f=f.updatePriority(u.getPriority()));const v=a.currentWriteId,y=Cs(n),A=Lr(f,u,y);a.currentOutputSnapshotRaw=f,a.currentOutputSnapshotResolved=A,a.currentWriteId=Br(n),o.splice(o.indexOf(v),1),i=i.concat(xr(n.serverSyncTree_,a.path,A,a.currentWriteId,a.applyLocally)),i=i.concat(Ge(n.serverSyncTree_,v,!0))}else h=!0,d="nodata",i=i.concat(Ge(n.serverSyncTree_,a.currentWriteId,!0))}Ee(n.eventQueue_,t,i),i=[],h&&(e[l].status=2,function(u){setTimeout(u,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}fn(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)ct(s[l]);ws(n,n.transactionQueueTree_)}function zr(n,e){let t,s=n.transactionQueueTree_;for(t=P(e);t!==null&&ht(s)===void 0;)s=vs(s,t),e=F(e),t=P(e);return s}function Kr(n,e){const t=[];return jr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function jr(n,e,t){const s=ht(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);hn(e,i=>{jr(n,i,t)})}function fn(n,e){const t=ht(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Fr(e,t.length>0?t:void 0)}hn(e,s=>{fn(n,s)})}function Qr(n,e){const t=Lt(zr(n,e)),s=vs(n.transactionQueueTree_,e);return za(s,i=>{wn(n,i)}),wn(n,s),Ur(s,i=>{wn(n,i)}),t}function wn(n,e){const t=ht(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ge(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fr(e,void 0):t.length=r+1,Ee(n.eventQueue_,Lt(e),i);for(let o=0;o<s.length;o++)ct(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vc(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ni=function(n,e){const t=yc(n),s=t.namespace;t.domain==="firebase.com"&&be(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xo();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ji(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new O(t.pathString)}},yc=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(i=gc(n.substring(h,d)));const u=vc(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const f=e.indexOf(".");s=e.substring(0,f).toLowerCase(),t=e.substring(f+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+K(this.snapshot.exportVal())}}class Ec{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return x(this._path)?null:sr(this._path)}get ref(){return new Re(this._repo,this._path)}get _queryIdentifier(){const e=di(this._queryParams),t=Xn(e);return t==="{}"?"default":t}get _queryObject(){return di(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof Is))return!1;const t=this._repo===e._repo,s=or(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fl(this._path)}}class Re extends Is{constructor(e,t){super(e,t,new ss,!1)}get parent(){const e=rr(this._path);return e===null?null:new Re(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new O(e),s=nt(this.ref,e);return new kt(this._node.getChild(t),s,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new kt(i,nt(this.ref,s),q)))}hasChild(e){const t=new O(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Oe(n,e){return n=lt(n),n._checkNotDeleted("ref"),e!==void 0?nt(n._root,e):n._root}function nt(n,e){return n=lt(n),P(n._path)===null?Za("child","path",e,!1):Hr("child","path",e,!1),new Re(n._repo,j(n._path,e))}function mt(n,e){n=lt(n),$a("set",n._path),Ja("set",e,n._path,!1);const t=new zn;return uc(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function In(n){n=lt(n);const e=new wc(()=>{}),t=new Ts(e);return hc(n._repo,n,t).then(s=>new kt(s,new Re(n._repo,n._path),n._queryParams.getIndex()))}class Ts{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Cc("value",this,new kt(e.snapshotNode,new Re(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ec(this,e,t):null}matches(e){return e instanceof Ts?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Ia(Re);Ra(Re);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="FIREBASE_DATABASE_EMULATOR_HOST",Wn={};let Tc=!1;function Sc(n,e,t,s){n.repoInfo_=new ji(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function bc(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ni(r,i),l=o.repoInfo,a,c;typeof process<"u"&&js&&(c=js[Ic]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ni(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new et(et.OWNER):new Go(n.name,n.options,e);ec("Invalid Firebase Database URL",o),x(o.path)||be("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Rc(l,n,h,new Vo(n.name,t));return new kc(d,n)}function Nc(n,e){const t=Wn[e];(!t||t[n.key]!==n)&&be(`Database ${e}(${n.repoInfo_}) has already been deleted.`),fc(n),delete t[n.key]}function Rc(n,e,t,s){let i=Wn[e.name];i||(i={},Wn[e.name]=i);let r=i[n.toURLString()];return r&&be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oc(n,Tc,t,s),i[n.toURLString()]=r,r}class kc{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Re(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&be("Cannot call "+e+" on a deleted database.")}}function Tn(n=bn(),e){const t=ho(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=uo("database");s&&xc(t,...s)}return t}function xc(n,e,t,s={}){n=lt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&be("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new et(et.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:fo(s.mockUserToken,n.app.options.projectId);r=new et(o)}Sc(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){So(po),$r(new eo("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return bc(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ds(Qs,Xs,n),Ds(Qs,Xs,"esm2017")}Se.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Se.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Pc();const Ac=!1;async function Dc({params:n}){}const Kc=Object.freeze(Object.defineProperty({__proto__:null,load:Dc,ssr:Ac},Symbol.toStringTag,{value:"Module"})),Fe="src/routes/home/Post.svelte";function Un(n){let e,t;const s={c:function(){e=R("p"),t=Je(n[0]),this.h()},l:function(r){e=k(r,"P",{class:!0});var o=M(e);t=Ze(o,n[0]),o.forEach(w),this.h()},h:function(){m(e,"class","card-text"),S(e,Fe,12,16,375)},m:function(r,o){ne(r,e,o),C(e,t)},p:function(r,o){o&1&&Nn(t,r[0])},d:function(r){r&&w(e)}};return we("SvelteRegisterBlock",{block:s,id:Un.name,type:"if",source:"(12:12) {#if content}",ctx:n}),s}function Vn(n){let e,t,s,i,r,o,l,a,c,h,d,u,_,f=n[0]&&Un(n);const I={c:function(){e=R("div"),t=R("img"),i=Y(),r=R("div"),o=R("p"),l=Je("Posted by "),a=R("strong"),c=Je(n[3]),h=Y(),f&&f.c(),d=Y(),u=R("p"),_=Je(n[1]),this.h()},l:function(y){e=k(y,"DIV",{class:!0,id:!0,style:!0});var A=M(e);t=k(A,"IMG",{src:!0,class:!0,alt:!0}),i=z(A),r=k(A,"DIV",{class:!0});var b=M(r);o=k(b,"P",{class:!0});var ee=M(o);l=Ze(ee,"Posted by "),a=k(ee,"STRONG",{});var _e=M(a);c=Ze(_e,n[3]),_e.forEach(w),ee.forEach(w),h=z(b),f&&f.l(b),d=z(b),u=k(b,"P",{class:!0});var H=M(u);_=Ze(H,n[1]),H.forEach(w),b.forEach(w),A.forEach(w),this.h()},h:function(){qt(t.src,s=n[2])||m(t,"src",s),m(t,"class","card-img-top"),m(t,"alt","..."),S(t,Fe,8,8,177),S(a,Fe,10,43,303),m(o,"class","card-text"),S(o,Fe,10,12,272),m(u,"class","subtext mt-2 text-secondary"),S(u,Fe,15,12,453),m(r,"class","card-body"),S(r,Fe,9,8,236),m(e,"class","card my-5 s-Qob7s8P0_B9V"),m(e,"id","post"),Ce(e,"margin","auto"),S(e,Fe,7,4,114)},m:function(y,A){ne(y,e,A),C(e,t),C(e,i),C(e,r),C(r,o),C(o,l),C(o,a),C(a,c),C(r,h),f&&f.m(r,null),C(r,d),C(r,u),C(u,_)},p:function(y,[A]){A&4&&!qt(t.src,s=y[2])&&m(t,"src",s),A&8&&Nn(c,y[3]),y[0]?f?f.p(y,A):(f=Un(y),f.c(),f.m(r,d)):f&&(f.d(1),f=null),A&2&&Nn(_,y[1])},i:ke,o:ke,d:function(y){y&&w(e),f&&f.d()}};return we("SvelteRegisterBlock",{block:I,id:Vn.name,type:"component",source:"",ctx:n}),I}function Mc(n,e,t){let{$$slots:s={},$$scope:i}=e;Qn("Post",s,[]);let{content:r}=e,{date:o}=e,{image:l}=e,{poster:a}=e;n.$$.on_mount.push(function(){r===void 0&&!("content"in e||n.$$.bound[n.$$.props.content])&&console.warn("<Post> was created without expected prop 'content'"),o===void 0&&!("date"in e||n.$$.bound[n.$$.props.date])&&console.warn("<Post> was created without expected prop 'date'"),l===void 0&&!("image"in e||n.$$.bound[n.$$.props.image])&&console.warn("<Post> was created without expected prop 'image'"),a===void 0&&!("poster"in e||n.$$.bound[n.$$.props.poster])&&console.warn("<Post> was created without expected prop 'poster'")});const c=["content","date","image","poster"];return Object.keys(e).forEach(h=>{!~c.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<Post> was created with unknown prop '${h}'`)}),n.$$set=h=>{"content"in h&&t(0,r=h.content),"date"in h&&t(1,o=h.date),"image"in h&&t(2,l=h.image),"poster"in h&&t(3,a=h.poster)},n.$capture_state=()=>({content:r,date:o,image:l,poster:a}),n.$inject_state=h=>{"content"in h&&t(0,r=h.content),"date"in h&&t(1,o=h.date),"image"in h&&t(2,l=h.image),"poster"in h&&t(3,a=h.poster)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[r,o,l,a]}class Ri extends Kn{constructor(e){super(e),jn(this,e,Mc,Vn,sn,{content:0,date:1,image:2,poster:3}),we("SvelteRegisterComponent",{component:this,tagName:"Post",options:e,id:Vn.name})}get content(){throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set content(e){throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get date(){throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set date(e){throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get image(){throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set image(e){throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get poster(){throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set poster(e){throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const B="src/routes/Navigation.svelte";function Gn(n){let e,t,s,i,r,o,l,a,c,h,d,u,_,f,I="Sign out",v,y,A,b,ee,_e,H,G,Q,oe,Ie,fe,X,ue,g="Sign out",ie,W;const T={c:function(){e=R("div"),t=R("a"),s=R("img"),r=Y(),o=R("div"),l=R("button"),a=We("svg"),c=We("path"),h=Je(`
            More`),d=Y(),u=R("ul"),_=R("li"),f=R("button"),f.textContent=I,v=Y(),y=R("div"),A=R("a"),b=R("img"),_e=Y(),H=R("div"),G=R("button"),Q=We("svg"),oe=We("path"),Ie=Y(),fe=R("ul"),X=R("li"),ue=R("button"),ue.textContent=g,this.h()},l:function(L){e=k(L,"DIV",{class:!0,id:!0});var le=M(e);t=k(le,"A",{href:!0});var de=M(t);s=k(de,"IMG",{src:!0,alt:!0,style:!0,class:!0}),de.forEach(w),r=z(le),o=k(le,"DIV",{class:!0});var ye=M(o);l=k(ye,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"aria-expanded":!0});var ut=M(l);a=Ue(ut,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var Ss=M(a);c=Ue(Ss,"path",{"fill-rule":!0,d:!0}),M(c).forEach(w),Ss.forEach(w),h=Ze(ut,`
            More`),ut.forEach(w),d=z(ye),u=k(ye,"UL",{class:!0});var bs=M(u);_=k(bs,"LI",{});var Ns=M(_);f=k(Ns,"BUTTON",{class:!0,"data-svelte-h":!0}),He(f)!=="svelte-r188sr"&&(f.textContent=I),Ns.forEach(w),bs.forEach(w),ye.forEach(w),le.forEach(w),v=z(L),y=k(L,"DIV",{class:!0,style:!0,id:!0});var Ft=M(y);A=k(Ft,"A",{href:!0});var Rs=M(A);b=k(Rs,"IMG",{src:!0,alt:!0,style:!0,class:!0}),Rs.forEach(w),_e=z(Ft),H=k(Ft,"DIV",{class:!0});var Wt=M(H);G=k(Wt,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"aria-expanded":!0});var ks=M(G);Q=Ue(ks,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var xs=M(Q);oe=Ue(xs,"path",{"fill-rule":!0,d:!0}),M(oe).forEach(w),xs.forEach(w),ks.forEach(w),Ie=z(Wt),fe=k(Wt,"UL",{class:!0});var Ps=M(fe);X=k(Ps,"LI",{});var As=M(X);ue=k(As,"BUTTON",{class:!0,"data-svelte-h":!0}),He(ue)!=="svelte-r188sr"&&(ue.textContent=g),As.forEach(w),Ps.forEach(w),Wt.forEach(w),Ft.forEach(w),this.h()},h:function(){qt(s.src,i="icon.png")||m(s,"src",i),m(s,"alt","Greek symbol for Lambda in pink"),Ce(s,"width","50px"),Ce(s,"height","50px"),m(s,"class","mx-4 mt-2"),S(s,B,14,8,437),m(t,"href","/home"),S(t,B,13,4,412),m(c,"fill-rule","evenodd"),m(c,"d","M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"),S(c,B,24,16,1017),m(a,"xmlns","http://www.w3.org/2000/svg"),m(a,"width","32"),m(a,"height","32"),m(a,"fill","currentColor"),m(a,"class","bi bi-list"),m(a,"viewBox","0 0 16 16"),S(a,B,23,12,878),m(l,"type","button"),m(l,"class","btn btn-sm my-2 btn-outline-primary rounded-pill dropdown-toggle border-0"),m(l,"data-bs-toggle","dropdown"),m(l,"aria-expanded","false"),S(l,B,22,8,713),m(f,"class","btn btn-sm"),S(f,B,29,16,1334),S(_,B,29,12,1330),m(u,"class","dropdown-menu"),S(u,B,28,8,1291),m(o,"class","btn-group dropend position-absolute bottom-0 start-50 translate-middle-x"),S(o,B,21,4,618),m(e,"class","position-fixed vstack gap-3 border-end top-0 h-100 z-3 bg-light s-oJqktDhFOa2K"),m(e,"id","desktop-navbar"),S(e,B,12,0,310),qt(b.src,ee="icon.png")||m(b,"src",ee),m(b,"alt","Greek symbol for Lambda in pink"),Ce(b,"width","30px"),Ce(b,"height","30px"),m(b,"class","mx-4 mt-2"),S(b,B,37,8,1575),m(A,"href","/home"),S(A,B,36,4,1550),m(oe,"fill-rule","evenodd"),m(oe,"d","M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"),S(oe,B,47,16,2129),m(Q,"xmlns","http://www.w3.org/2000/svg"),m(Q,"width","32"),m(Q,"height","32"),m(Q,"fill","currentColor"),m(Q,"class","bi bi-list"),m(Q,"viewBox","0 0 16 16"),S(Q,B,46,12,1990),m(G,"class","btn btn-sm btn-outline-primary border-0 dropdown-toggle me-2"),m(G,"type","button"),m(G,"data-bs-toggle","dropdown"),m(G,"aria-expanded","false"),S(G,B,45,8,1838),m(ue,"class","btn btn-sm"),S(ue,B,51,16,2429),S(X,B,51,12,2425),m(fe,"class","dropdown-menu"),S(fe,B,50,8,2386),m(H,"class","dropup-center dropup position-absolute mb-1 bottom-0 end-0"),S(H,B,44,4,1757),m(y,"class","position-fixed bottom-0 border-top w-100 z-3 bg-light s-oJqktDhFOa2K"),Ce(y,"height","50px"),m(y,"id","mobile-navbar"),S(y,B,35,0,1438)},m:function(L,le){ne(L,e,le),C(e,t),C(t,s),C(e,r),C(e,o),C(o,l),C(l,a),C(a,c),C(l,h),C(o,d),C(o,u),C(u,_),C(_,f),ne(L,v,le),ne(L,y,le),C(y,A),C(A,b),C(y,_e),C(y,H),C(H,G),C(G,Q),C(Q,oe),C(H,Ie),C(H,fe),C(fe,X),C(X,ue),ie||(W=[Et(f,"click",n[0],!1,!1,!1,!1),Et(ue,"click",n[0],!1,!1,!1,!1)],ie=!0)},p:ke,i:ke,o:ke,d:function(L){L&&(w(e),w(v),w(y)),ie=!1,Pi(W)}};return we("SvelteRegisterBlock",{block:T,id:Gn.name,type:"component",source:"",ctx:n}),T}function Oc(n,e,t){let{$$slots:s={},$$scope:i}=e;Qn("Navigation",s,[]);const r=bn(),o=Qe(r);function l(){Os(o)}const a=[];return Object.keys(e).forEach(c=>{!~a.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Navigation> was created with unknown prop '${c}'`)}),n.$capture_state=()=>({getApp:bn,getAuth:Qe,signOut:Os,app:r,auth:o,logOut:l}),[l]}class Xr extends Kn{constructor(e){super(e),jn(this,e,Oc,Gn,sn,{}),we("SvelteRegisterComponent",{component:this,tagName:"Navigation",options:e,id:Gn.name})}}const{Object:Lc,console:Fc}=Io,te="src/routes/home/+page.svelte";function Hn(n){let e;const t={c:function(){e=R("div"),this.h()},l:function(i){e=k(i,"DIV",{style:!0,id:!0}),M(e).forEach(w),this.h()},h:function(){Ce(e,"margin-bottom","10px"),m(e,"id","div-post-display"),S(e,te,280,4,9750)},m:function(i,r){ne(i,e,r),n[10](e)},p:ke,d:function(i){i&&w(e),n[10](null)}};return we("SvelteRegisterBlock",{block:t,id:Hn.name,type:"key",source:"(280:0) {#key $page.url.pathname}",ctx:n}),t}function Jr(n){let e,t="Welcome to Lambda! Before you start, can you pick a username?",s,i,r,o="@",l,a,c,h,d="Choose",u,_;const f={c:function(){e=R("p"),e.textContent=t,s=Y(),i=R("div"),r=R("span"),r.textContent=o,l=Y(),a=R("input"),c=Y(),h=R("button"),h.textContent=d,this.h()},l:function(v){e=k(v,"P",{"data-svelte-h":!0}),He(e)!=="svelte-1aoulqt"&&(e.textContent=t),s=z(v),i=k(v,"DIV",{class:!0});var y=M(i);r=k(y,"SPAN",{class:!0,id:!0,"data-svelte-h":!0}),He(r)!=="svelte-kr7wb3"&&(r.textContent=o),l=z(y),a=k(y,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),y.forEach(w),c=z(v),h=k(v,"BUTTON",{class:!0,"data-svelte-h":!0}),He(h)!=="svelte-mjb076"&&(h.textContent=d),this.h()},h:function(){S(e,te,289,4,9965),m(r,"class","input-group-text"),m(r,"id","basic-addon1"),S(r,te,291,8,10077),m(a,"type","text"),m(a,"class","form-control"),m(a,"placeholder","Username"),m(a,"aria-label","Username"),m(a,"aria-describedby","basic-addon1"),S(a,te,292,8,10143),m(i,"class","input-group mb-3"),S(i,te,290,4,10038),m(h,"class","btn btn-primary rounded-pill"),S(h,te,301,4,10386)},m:function(v,y){ne(v,e,y),ne(v,s,y),ne(v,i,y),C(i,r),C(i,l),C(i,a),n[11](a),ne(v,c,y),ne(v,h,y),u||(_=Et(h,"click",n[7],!1,!1,!1,!1),u=!0)},p:ke,d:function(v){v&&(w(e),w(s),w(i),w(c),w(h)),n[11](null),u=!1,_()}};return we("SvelteRegisterBlock",{block:f,id:Jr.name,type:"slot",source:'(288:0) <Modal bind:showModal closeButton=\\"false\\">',ctx:n}),f}function Zr(n){let e,t="Choose a username";const s={c:function(){e=R("h2"),e.textContent=t,this.h()},l:function(r){e=k(r,"H2",{slot:!0,"data-svelte-h":!0}),He(e)!=="svelte-1063xhw"&&(e.textContent=t),this.h()},h:function(){m(e,"slot","header"),S(e,te,288,4,9920)},m:function(r,o){ne(r,e,o)},p:ke,d:function(r){r&&w(e)}};return we("SvelteRegisterBlock",{block:s,id:Zr.name,type:"slot",source:"(289:4) ",ctx:n}),s}function qn(n){let e,t,s,i,r,o="Create a post",l,a,c,h,d,u,_,f,I,v,y,A,b,ee,_e=n[5].url.pathname,H,G,Q,oe,Ie,fe;t=new Xr({$$inline:!0});let X=Hn(n);function ue(W){n[12](W)}let g={closeButton:"false",$$slots:{header:[Zr],default:[Jr]},$$scope:{ctx:n}};n[3]!==void 0&&(g.showModal=n[3]),G=new Ai({props:g,$$inline:!0}),Gt.push(()=>Eo(G,"showModal",ue));const ie={c:function(){e=Y(),Us(t.$$.fragment),s=Y(),i=R("div"),r=R("h5"),r.textContent=o,l=Y(),a=R("div"),c=R("label"),h=We("svg"),d=We("path"),u=We("path"),_=Y(),f=R("input"),I=Y(),v=R("br"),y=Je(`
            Upload a photo`),A=Y(),b=R("input"),ee=Y(),X.c(),H=Y(),Us(G.$$.fragment),this.h()},l:function(T){wo("svelte-vvayrk",document.head).forEach(w),e=z(T),Vs(t.$$.fragment,T),s=z(T),i=k(T,"DIV",{class:!0,id:!0,style:!0});var L=M(i);r=k(L,"H5",{class:!0,"data-svelte-h":!0}),He(r)!=="svelte-8my6w5"&&(r.textContent=o),l=z(L),a=k(L,"DIV",{class:!0});var le=M(a);c=k(le,"LABEL",{class:!0,style:!0});var de=M(c);h=Ue(de,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var ye=M(h);d=Ue(ye,"path",{d:!0}),M(d).forEach(w),u=Ue(ye,"path",{d:!0}),M(u).forEach(w),ye.forEach(w),_=z(de),f=k(de,"INPUT",{type:!0,accept:!0}),I=z(de),v=k(de,"BR",{}),y=Ze(de,`
            Upload a photo`),de.forEach(w),le.forEach(w),A=z(L),b=k(L,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0}),L.forEach(w),ee=z(T),X.l(T),H=z(T),Vs(G.$$.fragment,T),this.h()},h:function(){document.title="Lambda",m(r,"class","text-center mt-2"),S(r,te,242,4,8227),m(d,"d","M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"),S(d,te,253,16,8646),m(u,"d","M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"),S(u,te,256,16,9067),m(h,"xmlns","http://www.w3.org/2000/svg"),m(h,"width","32"),m(h,"height","32"),m(h,"fill","currentColor"),m(h,"class","bi bi-camera"),m(h,"viewBox","0 0 16 16"),S(h,te,245,12,8396),m(f,"type","file"),m(f,"accept","image/gif,image/jpeg,image/png,image/webp"),f.hidden=!0,S(f,te,260,12,9265),S(v,te,265,15,9444),m(c,"class","btn btn-default"),Ce(c,"margin","auto"),Ce(c,"text-align","center"),S(c,te,244,8,8313),m(a,"class","text-center"),S(a,te,243,4,8279),m(b,"type","textarea"),m(b,"class","form-control border-0 mb-2"),m(b,"placeholder","Write a caption (optional)"),m(b,"aria-label","Optional caption"),S(b,te,270,4,9511),m(i,"class","container mt-5 border border-start rounded s-A-bC3Hke5zSn"),m(i,"id","post-textarea"),Ce(i,"margin","auto"),S(i,te,237,0,8113)},m:function(T,U){ne(T,e,U),Gs(t,T,U),ne(T,s,U),ne(T,i,U),C(i,r),C(i,l),C(i,a),C(a,c),C(c,h),C(h,d),C(h,u),C(c,_),C(c,f),C(c,I),C(c,v),C(c,y),C(i,A),C(i,b),n[9](b),ne(T,ee,U),X.m(T,U),ne(T,H,U),Gs(G,T,U),oe=!0,Ie||(fe=[Et(window,"keydown",n[8],!1,!1,!1,!1),Et(f,"change",n[6],!1,!1,!1,!1)],Ie=!0)},p:function(T,[U]){U&32&&sn(_e,_e=T[5].url.pathname)?(X.d(1),X=Hn(T),X.c(),X.m(H.parentNode,H)):X.p(T,U);const L={};U&16777220&&(L.$$scope={dirty:U,ctx:T}),!Q&&U&8&&(Q=!0,L.showModal=T[3],Co(()=>Q=!1)),G.$set(L)},i:function(T){oe||(Hs(t.$$.fragment,T),Hs(G.$$.fragment,T),oe=!0)},o:function(T){qs(t.$$.fragment,T),qs(G.$$.fragment,T),oe=!1},d:function(T){T&&(w(e),w(s),w(i),w(ee),w(H)),Bs(t,T),n[9](null),X.d(T),Bs(G,T),Ie=!1,Pi(fe)}};return we("SvelteRegisterBlock",{block:ie,id:qn.name,type:"component",source:"",ctx:n}),ie}function Sn(){var n=new Date,e=String(n.getDate()).padStart(2,"0"),t=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return n=t+"/"+e+"/"+s,n}function Wc(n,e,t){let s;vo(pn,"page"),yo(n,pn,g=>t(5,s=g));let{$$slots:i={},$$scope:r}=e;Qn("Page",i,[]);const o={apiKey:"AIzaSyDTyfRBAraHLshds-X3p5zwNE8ITnmXYWk",authDomain:"transition-terminal.firebaseapp.com",databaseURL:"https://transition-terminal-default-rtdb.firebaseio.com",projectId:"transition-terminal",storageBucket:"transition-terminal.appspot.com",messagingSenderId:"314390865424",appId:"1:314390865424:web:6b8da509ac009b5dad0c95",measurementId:"G-3WXEVRFJVD"},l=Ls(o),a=Qe(l),c=Tn(l),h=Ys(l);let d="",u,_,f=!1,I=!1,v=!1,y="",A,b=0;function ee(g){for(const[ie,W]of Object.entries(g).reverse())if(ie!="postcount"){let T=new Date(Sn()),U=new Date(W.post_date),L=Math.round((T.getTime()-U.getTime())/(1e3*3600*24)),le="";L>1&&(le="s");let de=`${L} day${le} ago`;L<=0&&(de="Today");let ye=_n(h,W.post_image);zs(ye).then(ut=>{new Ri({target:u,props:{content:W.post_content,image:ut,date:de,poster:W.post_username}})})}}function _e(){if(f==!0){for(;u.firstChild;)console.log("Removing child"),u.removeChild(u.firstChild);ee(A)}}function H(){{const g=Tn(l);if(Qe(l).currentUser!=null){const ie=Qe(l).currentUser.uid;let W=1;In(nt(Oe(g),`users/${ie}/posts/postcount`)).then(T=>{T.exists()?(mt(Oe(g,`users/${ie}/posts/postcount`),T.val()+1),W=T.val()+1):mt(Oe(g,`users/${ie}/posts/postcount`),1)}).then(()=>{const U=this.files[0];console.log(U.name);const L=_n(h,`posts/${y}/post${W}`);Ks(L,U).then(()=>{console.log(a.currentUser.displayName),mt(Oe(g,`users/${ie}/posts/post${W}/`),{post_content:d.value,post_date:Sn(),post_image:`posts/${y}/post${W}`,post_username:a.currentUser.displayName}).then(()=>{location="/home"})})})}}}function G(){if(a.currentUser){t(3,v=!1),console.log(_.value);let g=a.currentUser;mt(Oe(c,`users/${g.uid}`),{email:g.email,uid:g.uid,username:_.value,friends:{},friend_requests:{}}).then(()=>{Fs(a.currentUser,{displayName:_.value}).then(()=>{t(3,v=!1)})})}}a.onAuthStateChanged(g=>{if(g){if(I=!0,y=g.uid,f==!1){let ie=Oe(c);In(nt(ie,`users/${g.uid}/posts`)).then(W=>{W.exists()?(A=W.val(),ee(A),f=!0):g.displayName==null&&t(3,v=!0)})}}else Ws("/signin")});const Q=[];Lc.keys(e).forEach(g=>{!~Q.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&Fc.warn(`<Page> was created with unknown prop '${g}'`)});const oe=g=>{g.key=="Escape"&&(t(4,b++,b),b%3==0&&console.log("Redirect nao!!"),setTimeout(function(){t(4,b=0)},500))};function Ie(g){Gt[g?"unshift":"push"](()=>{d=g,t(0,d)})}function fe(g){Gt[g?"unshift":"push"](()=>{u=g,t(1,u)})}function X(g){Gt[g?"unshift":"push"](()=>{_=g,t(2,_)})}function ue(g){v=g,t(3,v)}return n.$capture_state=()=>({browser:To,initializeApp:Ls,getAuth:Qe,updateProfile:Fs,set:mt,getDatabase:Tn,ref:Oe,get:In,child:nt,goto:Ws,invalidateAll:go,page:pn,firebaseConfig:o,app:l,auth:a,database:c,storage:h,Post:Ri,Navigation:Xr,Modal:Ai,getDownloadURL:zs,getStorage:Ys,sRef:_n,uploadBytes:Ks,postTextArea:d,postDisplay:u,userDisplayName:_,isLoaded:f,isLoggedIn:I,showModal:v,userId:y,posts:A,escapeCount:b,getCurrentDate:Sn,loadPosts:ee,reloadPosts:_e,createPost:H,askForUsername:G,$page:s}),n.$inject_state=g=>{"postTextArea"in g&&t(0,d=g.postTextArea),"postDisplay"in g&&t(1,u=g.postDisplay),"userDisplayName"in g&&t(2,_=g.userDisplayName),"isLoaded"in g&&(f=g.isLoaded),"isLoggedIn"in g&&(I=g.isLoggedIn),"showModal"in g&&t(3,v=g.showModal),"userId"in g&&(y=g.userId),"posts"in g&&(A=g.posts),"escapeCount"in g&&t(4,b=g.escapeCount)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[d,u,_,v,b,s,H,G,oe,Ie,fe,X,ue]}class jc extends Kn{constructor(e){super(e),jn(this,e,Wc,qn,sn,{}),we("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:qn.name})}}export{jc as component,Kc as universal};
