!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).brtloc=e()}(this,(function(){"use strict";let t={uuids:["AB8190D5-D11E-4941-ACC4-42F30510B408","FDA50693-A4E2-4FB1-AFCF-C6EB07647825","E2C56DB5-DFFB-48D2-B060-D0F5A71096E0"],mode:"online",tile:"https://web.sdk.map.brtbeacon.com",BigDataHost:"https://a2.brtbeacon.net",wxPushHost:"https://wx-push-cle.brtbeacon.net"};function e(t,e,i){"string"==typeof t&&"function"==typeof e&&(i[t]?i[t].indexOf(e)<0&&i[t].push(e):i[t]=[e])}function i(t,e,i){if(i[t]){let s=i[t].indexOf(e);s>-1&&i[t].splice(s,1)}}function s(){return"undefined"!=typeof wx?"wechat":"undefined"!=typeof my?"alipay":"devapp"}function n(){let t,e=s();return t="wechat"===e?wx.getSystemInfoSync():"alipay"===e?my.getSystemInfoSync():{platform:"other",version:"1.0.0"},t.env=e,t}const r=Math.PI/180,o=180/Math.PI,a=20037508.342789;function h(t,e){let i=[t,e];t instanceof Array?i=t:t instanceof Object&&(i=[t.x,t.y]);let s=i[0]/a*180,n=i[1]/a*180;return n=o*(2*Math.atan(Math.exp(n*r))-Math.PI/2),{lng:s,lat:n}}function u(t){let e=s(),i=`${e}_brtloc_user_id`;"wechat"===e?wx.setStorageSync(i,t):"alipay"===e&&my.setStorageSync({key:i,data:t})}function l(){let t=n(),e=new Date,i=Math.round(1e6*Math.random());return`${t.platform}${t.env}${e.getHours()}${e.getMinutes()}${e.getSeconds()}${i}`}function c(t,e={},i={}){return new Promise(((n,r)=>{let o={url:t,data:e,success:t=>{n(t.data)},fail:t=>{r(t)}},a=s();"wechat"===a?wx.request({...o,...i}):"alipay"===a&&("arraybuffer"===i.responseType&&(o={...o,dataType:"arraybuffer"}),my.request({...o,...i}))}))}let f={read:function(t,e){return t.readFields(f.callback,{success:!1,description:"",count:0,beacons:[],uuids:[]},e)},callback:function(t,e,i){1===t?e.success=i.readBoolean():2===t?e.description=i.readString():3===t?e.count=i.readVarint():5===t?e.beacons.push(d.read(i,i.readVarint()+i.pos)):6===t&&e.uuids.push(p.read(i,i.readVarint()+i.pos).uuid)}},d={read:function(t,e){return t.readFields(d.callback,{uuid:"",major:"",minor:"",x:"",y:"",floor:"",isp:0},e)},callback:function(t,e,i){1===t?e.uuid=i.readString():2===t?e.floor=i.readVarint(!0):3===t?e.major=i.readVarint(!0):4===t?e.minor=i.readVarint(!0):5===t?e.x=i.readDouble():6===t?e.y=i.readDouble():7===t&&(e.isp=i.readVarint(!0))}},p={read:function(t,e){return t.readFields(p.callback,{uuid:null},e)},callback:function(t,e,i){e.uuid=i.readString()}};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var _=function(t,e,i,s,n){var r,o,a=8*n-s-1,h=(1<<a)-1,u=h>>1,l=-7,c=i?n-1:0,f=i?-1:1,d=t[e+c];for(c+=f,r=d&(1<<-l)-1,d>>=-l,l+=a;l>0;r=256*r+t[e+c],c+=f,l-=8);for(o=r&(1<<-l)-1,r>>=-l,l+=s;l>0;o=256*o+t[e+c],c+=f,l-=8);if(0===r)r=1-u;else{if(r===h)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,s),r-=u}return(d?-1:1)*o*Math.pow(2,r-s)},b=function(t,e,i,s,n,r){var o,a,h,u=8*r-n-1,l=(1<<u)-1,c=l>>1,f=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,d=s?0:r-1,p=s?1:-1,_=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),(e+=o+c>=1?f/h:f*Math.pow(2,1-c))*h>=2&&(o++,h/=2),o+c>=l?(a=0,o=l):o+c>=1?(a=(e*h-1)*Math.pow(2,n),o+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,n),o=0));n>=8;t[i+d]=255&a,d+=p,a/=256,n-=8);for(o=o<<n|a,u+=n;u>0;t[i+d]=255&o,d+=p,o/=256,u-=8);t[i+d-p]|=128*_},w=y;function y(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}y.Varint=0,y.Fixed64=1,y.Bytes=2,y.Fixed32=5;var g=4294967296,F=1/g,m="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function x(t){return t.type===y.Bytes?t.readVarint()+t.pos:t.pos+1}function O(t,e,i){return i?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function R(t,e,i){var s=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));i.realloc(s);for(var n=i.pos-1;n>=t;n--)i.buf[n+s]=i.buf[n]}function S(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function v(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function I(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function P(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function T(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function C(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function B(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function L(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function M(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}function V(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function D(t,e,i){t[i]=e,t[i+1]=e>>>8,t[i+2]=e>>>16,t[i+3]=e>>>24}function k(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function E(e,i){return new Promise(((s,n)=>{(function(e,i){return new Promise(((s,n)=>{"online"===t.mode?c(`${t.tile}/web/3d/tile`,{buildingID:e,token:i}).then((t=>{s(t)})).catch((t=>{n(t)})):s(t.tile)}))})(e,i).then((e=>{(function(e){return new Promise(((i,s)=>{if("online"===t.mode){c(`${e.HOST}/${e.RELATIVE_URL}/js/beacon.pbf?code=${+new Date}`,{},{responseType:"arraybuffer"}).then((t=>{i(f.read(new w(new Uint8Array(t))))})).catch((t=>{s(t)}))}else t.tile.beaconsJson?i(t.tile.beaconsJson):t.tile.beaconsPbf?i(f.read(new w(new Uint8Array(t.tile.beaconsPbf)))):s(new Error("beacons: []"))}))})(e).then((t=>{let{beacons:i,uuids:n}=t;s({tile:e,beacons:i,uuids:n})})).catch((t=>{n(t)}))})).catch((t=>{n(t)}))}))}y.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var s=this.readVarint(),n=s>>3,r=this.pos;this.type=7&s,t(n,e,this),this.pos===r&&this.skip(s)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=V(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=k(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=V(this.buf,this.pos)+V(this.buf,this.pos+4)*g;return this.pos+=8,t},readSFixed64:function(){var t=V(this.buf,this.pos)+k(this.buf,this.pos+4)*g;return this.pos+=8,t},readFloat:function(){var t=_(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=_(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,i,s=this.buf;return e=127&(i=s[this.pos++]),i<128?e:(e|=(127&(i=s[this.pos++]))<<7,i<128?e:(e|=(127&(i=s[this.pos++]))<<14,i<128?e:(e|=(127&(i=s[this.pos++]))<<21,i<128?e:function(t,e,i){var s,n,r=i.buf;if(n=r[i.pos++],s=(112&n)>>4,n<128)return O(t,s,e);if(n=r[i.pos++],s|=(127&n)<<3,n<128)return O(t,s,e);if(n=r[i.pos++],s|=(127&n)<<10,n<128)return O(t,s,e);if(n=r[i.pos++],s|=(127&n)<<17,n<128)return O(t,s,e);if(n=r[i.pos++],s|=(127&n)<<24,n<128)return O(t,s,e);if(n=r[i.pos++],s|=(1&n)<<31,n<128)return O(t,s,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(i=s[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&m?function(t,e,i){return m.decode(t.subarray(e,i))}(this.buf,e,t):function(t,e,i){var s="",n=e;for(;n<i;){var r,o,a,h=t[n],u=null,l=h>239?4:h>223?3:h>191?2:1;if(n+l>i)break;1===l?h<128&&(u=h):2===l?128==(192&(r=t[n+1]))&&(u=(31&h)<<6|63&r)<=127&&(u=null):3===l?(r=t[n+1],o=t[n+2],128==(192&r)&&128==(192&o)&&((u=(15&h)<<12|(63&r)<<6|63&o)<=2047||u>=55296&&u<=57343)&&(u=null)):4===l&&(r=t[n+1],o=t[n+2],a=t[n+3],128==(192&r)&&128==(192&o)&&128==(192&a)&&((u=(15&h)<<18|(63&r)<<12|(63&o)<<6|63&a)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,l=1):u>65535&&(u-=65536,s+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),s+=String.fromCharCode(u),n+=l}return s}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==y.Bytes)return t.push(this.readVarint(e));var i=x(this);for(t=t||[];this.pos<i;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==y.Bytes)return t.push(this.readSVarint());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==y.Bytes)return t.push(this.readBoolean());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==y.Bytes)return t.push(this.readFloat());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==y.Bytes)return t.push(this.readDouble());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==y.Bytes)return t.push(this.readFixed32());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==y.Bytes)return t.push(this.readSFixed32());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==y.Bytes)return t.push(this.readFixed64());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==y.Bytes)return t.push(this.readSFixed64());var e=x(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===y.Varint)for(;this.buf[this.pos++]>127;);else if(e===y.Bytes)this.pos=this.readVarint()+this.pos;else if(e===y.Fixed32)this.pos+=4;else{if(e!==y.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var i=new Uint8Array(e);i.set(this.buf),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),D(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),D(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),D(this.buf,-1&t,this.pos),D(this.buf,Math.floor(t*F),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),D(this.buf,-1&t,this.pos),D(this.buf,Math.floor(t*F),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var i,s;t>=0?(i=t%4294967296|0,s=t/4294967296|0):(s=~(-t/4294967296),4294967295^(i=~(-t%4294967296))?i=i+1|0:(i=0,s=s+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,i){i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos]=127&t}(i,0,e),function(t,e){var i=(7&t)<<4;if(e.buf[e.pos++]|=i|((t>>>=3)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;e.buf[e.pos++]=127&t}(s,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,i){for(var s,n,r=0;r<e.length;r++){if((s=e.charCodeAt(r))>55295&&s<57344){if(!n){s>56319||r+1===e.length?(t[i++]=239,t[i++]=191,t[i++]=189):n=s;continue}if(s<56320){t[i++]=239,t[i++]=191,t[i++]=189,n=s;continue}s=n-55296<<10|s-56320|65536,n=null}else n&&(t[i++]=239,t[i++]=191,t[i++]=189,n=null);s<128?t[i++]=s:(s<2048?t[i++]=s>>6|192:(s<65536?t[i++]=s>>12|224:(t[i++]=s>>18|240,t[i++]=s>>12&63|128),t[i++]=s>>6&63|128),t[i++]=63&s|128)}return i}(this.buf,t,this.pos);var i=this.pos-e;i>=128&&R(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),b(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),b(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var i=0;i<e;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++;var i=this.pos;t(e,this);var s=this.pos-i;s>=128&&R(i,s,this),this.pos=i-1,this.writeVarint(s),this.pos+=s},writeMessage:function(t,e,i){this.writeTag(t,y.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,S,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,v,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,T,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,I,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,P,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,C,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,B,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,L,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,M,e)},writeBytesField:function(t,e){this.writeTag(t,y.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,y.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,y.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,y.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,y.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,y.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,y.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,y.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,y.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,y.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}};class N{constructor(t){this.brt=t,this.system=n(),this.beaconCacheTime=this.brt.beaconCacheTime,"android"===this.system.platform.toLowerCase()&&(this.beaconCacheTime=5e3),this.__CURRENT_FLOOR__=null,this.__PRIORITY_FLOOR__=null,this.__BEACONS_POOL__=[]}__cache_filter__(t){let e=+new Date;for(let t in this.__BEACONS_POOL__){let i=this.__BEACONS_POOL__[t];Math.abs(e-i.time)>this.beaconCacheTime&&delete this.__BEACONS_POOL__[t]}t.forEach((t=>{this.__BEACONS_POOL__[`${t.major}_${t.minor}`]={time:e,...t}}));let i=[];for(let t in this.__BEACONS_POOL__)i.push(this.__BEACONS_POOL__[t]);return this.__floor_filter__(i)}__floor_filter__(t){if(t.sort(((t,e)=>e.rssi-t.rssi)),this.__PRIORITY_FLOOR__)if(t[0]&&t[0].floor===this.__PRIORITY_FLOOR__)this.__CURRENT_FLOOR__=this.__PRIORITY_FLOOR__,this._changeFloorCount--;else if(t[1]&&t[1].floor===this.__PRIORITY_FLOOR__){let e=t[0],i=t[1];Math.abs(e.rssi)-Math.abs(i.rssi)<8&&(this.__CURRENT_FLOOR__=this.__PRIORITY_FLOOR__,this._changeFloorCount--)}else if(t[2]&&t[2].floor===this.__PRIORITY_FLOOR__){let e=t[0],i=t[2];(Math.abs(e.rssi)-Math.abs(i.rssi)<8||i.rssi>-75)&&(this.__CURRENT_FLOOR__=this.__PRIORITY_FLOOR__,this._changeFloorCount--)}let e={beacons:[],floor:null},i={beacons:[],floor:null},s=0;for(let n=0;n<t.length;n++){let r=t[n],o=r.floor;if(0===o){if(!this.__CURRENT_FLOOR__)continue;o=r.floor=this.__CURRENT_FLOOR__}else this.__CURRENT_FLOOR__||(this.__CURRENT_FLOOR__=o);if(0===s)o===this.__CURRENT_FLOOR__?(e.beacons.push(r),e.floor=o):(i.beacons.push(r),i.floor=o);else if(o===this.__CURRENT_FLOOR__){if(i.floor){if(i.beacons[0].rssi-r.rssi>8)continue;i.beacons=[],i.floor=null}e.beacons.push(r),e.floor=o}else o===i.floor&&i.beacons.push(r);s++}return i.floor?this._changeFloorCount++:(this._changeFloorCount--,this._changeFloorCount<0&&(this._changeFloorCount=0)),this._changeFloorCount>=this.brt.floorDelay/1e3&&(e=i,this._changeFloorCount=0,this.__PRIORITY_FLOOR__=null),this.__CURRENT_FLOOR__=e.floor,e.beacons}__calculate__(t){if(0===t.length)return null;let e=Math.min(t.length,6),i=[],s=0,n=0,r=0;for(let n,r,o=0;o<e;o++)n=t[o],r=1/Math.pow(n.accuracy,2),s+=r,i.push(r);for(let e,s=0;s<i.length;s++)e=t[s],n+=e.x*i[s],r+=e.y*i[s];return{x:n/s,y:r/s,floor:this.__CURRENT_FLOOR__}}analyze(t){return this.__calculate__(this.__cache_filter__(t))}reset(){this.__BEACONS_POOL__=[],this.__CURRENT_FLOOR__=null,this.__PRIORITY_FLOOR__=null}}function A(t){let e={},i={},s={beacons:[],toHashString:()=>{let e=Math.min(s.beacons.length,t.maxCount),i="";for(let t=0;t<e;t++){let e=s.beacons[t];i+=`~${e.major},${e.minor},${e.rssi},${e.accuracy.toFixed(2)}`}return i&&(i=i.substr(1)),`beacons[${i}]`}};this.setSource=t=>{for(let i,s=0;s<t.length;s++)i=t[s],e[i.major+"_"+i.minor]=i;return this};let n=()=>{};this.onChange=t=>(n=t||(()=>{}),this);let r=null;this.analyze=o=>{let a=+new Date;for(let t in i)a-i[t].time>=1e3&&delete i[t];o.sort(((t,e)=>e.rssi-t.rssi));for(let s,n,r,h=0;h<o.length;h++)if(s=o[h],n=s.major+"_"+s.minor,s.rssi=parseFloat(s.rssi),s.accuracy=parseFloat(s.accuracy),e[n]&&!(s.accuracy<=0||s.rssi>t.maxRssi)){if(s.rssi<t.minRssi)break;r=e[n],i[n]={time:a,rssi:s.rssi,accuracy:s.accuracy,major:r.major,minor:r.minor,x:r.x,y:r.y,floor:r.floor}}r&&clearTimeout(r),r=setTimeout((()=>{s.beacons=[];for(let t in i)s.beacons.push(i[t]);s.beacons.sort(((t,e)=>e.rssi-t.rssi)),n(s)}),100)}}let $={config:{buildingID:null,userId:null,applyId:null},init:()=>{$.config.applyId=+new Date;let t=s();t="wechat"===t?1:"alipay"===t?2:3,G({f:1,ct:t},!0)},upUser:t=>{G({u:{n:t.name||"",hi:t.image||"",se:t.sex||0,a:t.age||"",c:t.city||"",ad:t.address||""}})},upSource:t=>{G({s:{t:t.type||"",i:t.sId||"",pui:t.userId||""}})},upTerminal:t=>{G({vt:{b:t.brands||"",m:t.model||"",w:t.website||"",s:t.system||"",a:t.app||""}})}},U=[],j=0,Y=0;$.upPoint=t=>{let e=0;0===j&&(e=1),t.x=parseFloat(t.x.toFixed(4)),t.y=parseFloat(t.y.toFixed(4)),U.push({x:t.x||0,y:t.y||0,f:t.floor||0,pi:t.poiId||""}),Y=+new Date,Y-j>=5e3&&(j=Y,G({lc:e,xys:U}),U=[])},$.upShare=t=>{G({shl:[{ty:t.type||3,shi:+new Date+"",oi:t.operId||""}]})};let H=!1,z=500;function G(t={},e){let i={bi:$.config.buildingID,ai:$.config.applyId+"",ui:$.config.userId+"",f:0,lc:0,...t};e||H?K(i,(()=>{H=!0})):setTimeout((()=>{K(i)}),z+=500)}function K(e,i){c(`${t.BigDataHost}/d/u/o?bi=${e.bi}`,e,{method:"POST"}).then((t=>{1===t.data&&i&&i()}))}return{Config:t,Location:class extends class{constructor(){this._listener={},this._oneListener={}}on(t,i){return e(t,i,this._listener),this}once(t,i){return e(t,i,this._oneListener),this}off(t,e){if("function"==typeof e)i(t,e,this._listener),i(t,e,this._oneListener);else if(e instanceof Array)for(let i of e)this.off(t,i);else delete this._listener[t],delete this._oneListener[t];return this}emit(t,e){e=Array.prototype.slice.call(arguments).slice(1,arguments.length);let s=this._listener[t]?this._listener[t].slice():[];if(s)for(let t of s)t&&t.apply(this,e);let n=this._oneListener[t]?this._oneListener[t].slice():[];if(n)for(let s of n)s&&(s.apply(this,e),i(t,s,this._oneListener));return this}watch(t,e,i,s){let n=t[e];Object.defineProperty(t,e,{get:function(){return n},set:function(t){n!==t&&i&&i(n=t)}}),s&&i&&i(n)}setOptions(t){for(let e in t)void 0!==this[e]&&void 0!==t[e]&&null!==t[e]&&""!==t[e]&&(this[e]=t[e])}}{constructor(e={}){super(),this.uuids=t.uuids,this.buildingID=null,this.token=null,this.minRssi=-88,this.maxRssi=-15,this.maxCount=6,this.floorDelay=2e3,this.beaconCacheTime=2e3,this.debug=!1,this.userId=null,this.statistics=!0,this.wechatMode="hash",this.alipayContext=null,this.setOptions(e),this.initialize()}initialize(){this.__WORKING__=!0,this.userId?u(this.userId):this.userId=function(){let t=s(),e="",i=`${t}_brtloc_user_id`;return"wechat"===t?e=wx.getStorageSync(i):"alipay"===t&&(e=my.getStorageSync({key:i}).data),e||(e=l()),u(e),e}(),this.debug&&console.log("userId =>",this.userId),this.statistics&&this.__initBigData__(),new E(this.buildingID,this.token).then((t=>{this.debug&&(console.log("uuids =>",t.uuids),console.log("tile =>",t.tile),console.log("beacons =>",t.beacons)),t.uuids.length&&(this.uuids=t.uuids),this.$fib.setSource(t.beacons),this.emit("ready",this)})),this.$la=new N(this);let e=s();this.$fib=new A(this).onChange((i=>{this.debug&&console.log("beaconAnalysis() =>",i.beacons),"wechat"===e&&"http"===this.wechatMode?function(e,i=[],s=6){let n=Math.min(i.length,s),r=[];for(let t,e=0;e<n;e++)t=i[e],r.push({ma:t.major,mi:t.minor,ri:t.rssi,ac:parseFloat(t.accuracy.toFixed(4)),x:parseFloat(t.x.toFixed(4)),y:parseFloat(t.y.toFixed(4)),f:t.floor});c(`${t.wxPushHost}/beacon/report/sendTo`,{openId:e,beaconInfos:r},{method:"POST",timeout:3e3})}(this.userId,i.beacons,this.maxCount):"alipay"===e&&this.alipayContext&&this.alipayContext.postMessage({__BRT_BEACONS__:i.beacons}),this.emit("beacons",i),this._listener.location&&this.__calculate__(i.beacons)}))}beaconAnalysis(t){return this.__WORKING__&&t.length&&this.$fib.analyze(t),this}__calculate__(t){let e=this.$la.analyze(t);if(this.debug&&console.log("locatePoint =>",e),e){let t;this._lastLocatePoint&&e.floor===this._lastLocatePoint.floor?(i=this._lastLocatePoint,s=e,n=.5,t={x:i.x*(1-n)+s.x*n,y:i.y*(1-n)+s.y*n},t.floor=e.floor):t=e,t={...t,...h(t)},this.statistics&&$.upPoint(t),this.emit("location",this._lastLocatePoint=t)}else this._lastLocatePoint&&(this.statistics&&$.upPoint(this._lastLocatePoint),this.emit("location",this._lastLocatePoint));var i,s,n}__initBigData__(){$.config.buildingID=this.buildingID,$.config.userId=this.userId,$.init();let t=s();if("wechat"===t){let t=wx.getSystemInfoSync();$.upTerminal({brands:t.brand,model:t.model,website:"wechat",system:t.system,app:"wechat"}),wx.getSetting({success:t=>{t.authSetting["scope.userInfo"]&&wx.getUserInfo({success:({userInfo:t={}})=>{$.upUser({name:t.nickName,image:t.avatarUrl,sex:t.gender,city:t.city,address:t.province})}})}})}else if("alipay"===t){let t=my.getSystemInfoSync();$.upTerminal({brands:t.brand,model:t.model,website:"alipay",system:t.system,app:"alipay"})}}destroy(){this.__WORKING__=!1,this.reset()}reset(){this.$la.reset(),this._lastLocatePoint=null}},BigData:$,RandomUserId:l}}));
