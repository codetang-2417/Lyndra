import{g as q}from"./_commonjsHelpers.Cpj98o6Y.js";import{r as C}from"./dayjs.min.CYiS1e1k.js";var h={exports:{}},S=h.exports,H;function $(){return H||(H=1,function(p,g){(function(n,u){p.exports=u()})(S,function(){return function(n,u,s){n=n||{};var e=u.prototype,t={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(r,i,l,c){return e.fromToBase(r,i,l,c)}s.en.relativeTime=t,e.fromToBase=function(r,i,l,c,D){for(var v,f,M,y=l.$locale().relativeTime||t,x=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],k=x.length,_=0;_<k;_+=1){var a=x[_];a.d&&(v=c?s(r).diff(l,a.d,!0):l.diff(r,a.d,!0));var m=(n.rounding||Math.round)(Math.abs(v));if(M=v>0,m<=a.r||!a.r){m<=1&&_>0&&(a=x[_-1]);var T=y[a.l];D&&(m=D(""+m)),f=typeof T=="string"?T.replace("%d",m):T(m,i,a.l,M);break}}if(i)return f;var L=M?y.future:y.past;return typeof L=="function"?L(f):L.replace("%s",f)},e.to=function(r,i){return d(r,i,this,!0)},e.from=function(r,i){return d(r,i,this)};var o=function(r){return r.$u?s.utc():s()};e.toNow=function(r){return this.to(o(this),r)},e.fromNow=function(r){return this.from(o(this),r)}}})}(h)),h.exports}var R=$();const B=q(R);var Y={exports:{}},b=Y.exports,w;function j(){return w||(w=1,function(p,g){(function(n,u){p.exports=u(C())})(b,function(n){function u(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var s=u(n),e={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,d){return d==="W"?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,d){var o=100*t+d;return o<600?"凌晨":o<900?"早上":o<1100?"上午":o<1300?"中午":o<1800?"下午":"晚上"}};return s.default.locale(e,null,!0),e})}(Y)),Y.exports}j();export{B as r};
