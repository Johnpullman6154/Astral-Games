(window.webpackJsonp=window.webpackJsonp||[]).push([[36,10,11,14],{1011:function(t,e,r){"use strict";r(532)},1012:function(t,e,r){var n=r(107)(!1);n.push([t.i,".description[data-v-c8e12260]{font-size:28px;text-align:center;margin-top:50px;margin-bottom:10px;display:flex;align-items:center;justify-content:center}.hour-input[data-v-c8e12260]{width:60px;height:40px;font-size:22px;padding:5px;border:1px solid #d3d3d3;border-radius:5px;outline:none;margin-left:4px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.hour-input[data-v-c8e12260]::-webkit-inner-spin-button,.hour-input[data-v-c8e12260]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}@media only screen and (max-width:500px){.description[data-v-c8e12260]{font-size:25px;margin-top:40px}}",""]),t.exports=n},1013:function(t,e,r){"use strict";r(533)},1014:function(t,e,r){var n=r(107),o=r(200),l=r(1015),d=n(!1),c=o(l);d.push([t.i,"@font-face{font-family:PTSerif;src:url("+c+')}.wrapper[data-v-17032b01]{background:#fff;font-family:"PT Serif"}.mid-explanation[data-v-17032b01]{font-size:22px;text-align:center;margin-top:60px;margin-bottom:50px}.description[data-v-17032b01]{font-size:28px;text-align:center;margin-top:50px;margin-bottom:10px}.title-slide[data-v-17032b01]{height:45vh;display:flex;align-items:center;justify-content:center}.title[data-v-17032b01]{font-size:48px}.title-inner[data-v-17032b01]{text-align:center}.credit[data-v-17032b01]{font-size:20px;margin-top:15px}.thousand[data-v-17032b01]{max-height:75px;vertical-align:middle}.container[data-v-17032b01]{width:100%;overflow:hidden}.per-hour-count[data-v-17032b01]{font-size:21px}.border-top[data-v-17032b01]{width:100%;height:50px;background:url(/printing-money/border.png) repeat-x;background-size:auto 50px}.site-title[data-v-17032b01]{font-weight:700;max-width:140px;font-family:"Roboto";text-align:left;margin-left:15px;margin-top:7px}@media only screen and (max-width:500px){.description[data-v-17032b01]{font-size:25px;margin-top:40px}}@media only screen and (max-width:600px){.title[data-v-17032b01]{font-size:42px}.credit[data-v-17032b01]{margin-top:10px}.credit[data-v-17032b01],.per-hour-count[data-v-17032b01]{font-size:18px}.site-title[data-v-17032b01]{margin-left:15px;max-width:100px}}@media only screen and (max-width:400px){.border-top[data-v-17032b01]{background-size:100% 50px}}',""]),t.exports=d},1015:function(t,e,r){t.exports=r.p+"fonts/PTSerif-Regular.90d33b5.woff2"},1158:function(t,e,r){"use strict";r.r(e);r(276);var n={props:{rows:{type:Number,required:!0},image:{type:Array,required:!0},speed:{type:Number,required:!0},dollarsPerRow:{type:Number,required:!0},dollarsPerColumn:{type:Number,required:!1,default:1}},data:function(){var t=window.innerWidth<450;return{width:t?199:234,height:t?85:100}},mounted:function(){var t=this,canvas=this.$refs.canvas,e=canvas.getContext("2d",{alpha:!1});this.ctx=e;var r=function(){canvas.width=2*window.innerWidth,canvas.height=t.rows*t.height*2,canvas.style.width=window.innerWidth+"px",canvas.style.height=t.rows*t.height+"px",e.scale(2,2)};r(),this.$addEventListener("resize",(function(){r()})),this.$requestAnimationFrame(this.drawImage)},methods:{round:function(t){return t+.5<<0},drawImage:function(){var t=this.speed,e=this.rows,image=this.image,r=this.dollarsPerRow,n=this.dollarsPerColumn;if(image.complete)for(var o=this.width*r,l=this.height*n,d=1/r*o*t*Date.now()/1e3%o,c=-o;c<window.innerWidth;c+=o)for(var m=0;m<e*l;m+=l)this.ctx.drawImage(image,this.round(c+d),m,o,l);else this.ctx.fillStyle="white",this.ctx.fillRect(0,0,window.innerWidth,234*e)}}},o=r(28),l=Object(o.a)(n,(function(){return(0,this._self._c)("canvas",{ref:"canvas"})}),[],!1,null,"74b53cec",null).exports,d={components:{lineCanvas:l},data:function(){return{pay:0}},props:{image:{type:Array,required:!0}},methods:{perHour:function(t){return t/60/60},change:function(t){var e=parseInt(t.target.value);e<0&&(e=0),this.pay=e}}},c=(r(1011),{components:{lineCanvas:l,yourPay:Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"description"},[t._v("\n    Your Hourly Pay: $"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pay,expression:"pay"}],staticClass:"hour-input",attrs:{pattern:"\\d*",type:"number"},domProps:{value:t.pay},on:{input:function(e){e.target.composing||(t.pay=e.target.value)}}})]),t._v(" "),e("line-canvas",{attrs:{image:t.image,dollarsPerRow:3,rows:1,speed:this.perHour(Math.max(0,t.pay))}})],1)}),[],!1,null,"c8e12260",null).exports},data:function(){return{images:this.loadImages()}},methods:{perHour:function(t){return t/60/60},loadImages:function(){var t=new Image;t.src="/printing-money/minimized/dollar-3.png";var e=new Image;e.src="/printing-money/minimized/1000-3.png";var r=new Image;return r.src="/printing-money/minimized/1000-3-3.png",{dollars:t,thousand:e,thousandBig:r}}}}),m=(r(1013),Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"border-top"}),t._v(" "),e("div",{staticClass:"site-title"},[e("nuxt-link",{attrs:{to:"/"}},[e("logo",{attrs:{color:"black"}})],1)],1),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"container"},[t._m(1),t._v(" "),e("lineCanvas",{attrs:{image:t.images.dollars,dollarsPerRow:3,rows:1,speed:this.perHour(7.25)}}),t._v(" "),t._m(2),t._v(" "),e("lineCanvas",{attrs:{image:t.images.dollars,dollarsPerRow:3,rows:1,speed:this.perHour(16)}}),t._v(" "),t._m(3),t._v(" "),e("lineCanvas",{attrs:{image:t.images.dollars,dollarsPerRow:3,rows:1,speed:this.perHour(45)}}),t._v(" "),t._m(4),t._v(" "),e("lineCanvas",{attrs:{image:t.images.dollars,dollarsPerRow:3,rows:1,speed:this.perHour(90)}}),t._v(" "),t._m(5),t._v(" "),e("lineCanvas",{attrs:{rows:1,image:t.images.dollars,dollarsPerRow:3,speed:this.perHour(4e3)}}),t._v(" "),e("your-pay",{attrs:{image:t.images.dollars}}),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("lineCanvas",{attrs:{rows:1,image:t.images.thousand,dollarsPerRow:3,speed:this.perHour(350)}}),t._v(" "),t._m(8),t._v(" "),e("lineCanvas",{attrs:{rows:4,image:t.images.thousandBig,dollarsPerRow:3,dollarsPerColumn:3,speed:this.perHour(644.977)}}),t._v(" "),t._m(9),t._v(" "),e("lineCanvas",{attrs:{rows:4,image:t.images.thousandBig,dollarsPerRow:3,dollarsPerColumn:3,speed:this.perHour(2e3)}}),t._v(" "),t._m(10),t._v(" "),e("lineCanvas",{attrs:{rows:4,image:t.images.thousandBig,dollarsPerRow:3,dollarsPerColumn:3,speed:this.perHour(8e3)}}),t._v(" "),t._m(11),t._v(" "),e("lineCanvas",{attrs:{rows:4,image:t.images.thousandBig,dollarsPerRow:3,dollarsPerColumn:3,speed:this.perHour(14750)}}),t._v(" "),t._m(12),t._v(" "),e("lineCanvas",{attrs:{rows:5,image:t.images.thousandBig,dollarsPerRow:3,dollarsPerColumn:3,speed:this.perHour(16800)}}),t._v(" "),t._m(13),t._v(" "),e("lineCanvas",{attrs:{rows:7,image:t.images.thousandBig,dollarsPerRow:3,dollarsPerColumn:3,speed:this.perHour(125e6/7/1e3)}})],1),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-slide"},[e("div",{staticClass:"title-inner"},[e("div",{staticClass:"title"},[t._v("Printing Money")]),t._v(" "),e("div",{staticClass:"credit"},[t._v("Made by Neal Agarwal")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Minimum Wage "),e("span",{staticClass:"per-hour-count"},[t._v("($7.25/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Teacher "),e("span",{staticClass:"per-hour-count"},[t._v("($16/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Software Engineer "),e("span",{staticClass:"per-hour-count"},[t._v("($45/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Physician "),e("span",{staticClass:"per-hour-count"},[t._v("($90/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Fortune 500 CEO "),e("span",{staticClass:"per-hour-count"},[t._v("($4k/hr)")])])},function(){var t=this._self._c;return t("div",{staticClass:"mid-explanation"},[t("img",{staticClass:"thousand",attrs:{src:"/printing-money/minimized/1000.png"}}),this._v(" =\n      $1,000\n    ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Twitter Revenue "),e("span",{staticClass:"per-hour-count"},[t._v("($350k/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      NASA Spending "),e("span",{staticClass:"per-hour-count"},[t._v("($2.5m/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Facebook Revenue "),e("span",{staticClass:"per-hour-count"},[t._v("($8m/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Amazon Revenue "),e("span",{staticClass:"per-hour-count"},[t._v("($32m/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      Walmart Revenue "),e("span",{staticClass:"per-hour-count"},[t._v("($59m/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      U.S. Military Spending "),e("span",{staticClass:"per-hour-count"},[t._v("($84 mil/hr)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[t._v("\n      U.S. Deficit Increase "),e("span",{staticClass:"per-hour-count"},[t._v("($125 mil/hr)")])])}],!1,null,"17032b01",null));e.default=m.exports;installComponents(m,{Logo:r(288).default,Footer:r(295).default})},276:function(t,e,r){"use strict";var n=r(2),o=r(19),l=r(9),d=r(6),path=r(203),c=r(4),m=r(109),f=r(12),h=r(201),v=r(39),x=r(81),w=r(202),_=r(3),y=r(80).f,C=r(29).f,k=r(21).f,z=r(281),R=r(282).trim,S="Number",A=d[S],P=path[S],I=A.prototype,N=d.TypeError,E=c("".slice),$=c("".charCodeAt),M=function(t){var e=w(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,o,l,d,c,code,m=w(t,"number");if(x(m))throw N("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=R(m),43===(e=$(m,0))||45===e){if(88===(r=$(m,2))||120===r)return NaN}else if(48===e){switch($(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(d=(l=E(m,2)).length,c=0;c<d;c++)if((code=$(l,c))<48||code>o)return NaN;return parseInt(l,n)}return+m},L=m(S,!A(" 0o1")||!A("0b1")||A("+0x1")),W=function(t){return v(I,t)&&_((function(){z(t)}))},O=function(t){var e=arguments.length<1?0:A(M(t));return W(this)?h(Object(e),this,O):e};O.prototype=I,L&&!o&&(I.constructor=O),n({global:!0,constructor:!0,wrap:!0,forced:L},{Number:O});var H=function(t,source){for(var e,r=l?y(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),n=0;r.length>n;n++)f(source,e=r[n])&&!f(t,e)&&k(t,e,C(source,e))};o&&P&&H(path[S],P),(L||o)&&H(path[S],A)},277:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("f68e4eaa",content,!0,{sourceMap:!1})},278:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("db35a8f0",content,!0,{sourceMap:!1})},279:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("c9434642",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r.r(e);r(276);var n={props:{slotId:{type:String,required:!0},adFormat:{type:String,required:!0},isResponsive:{type:Boolean,required:!1,default:!1},adStyle:{type:String,required:!0},minWidth:{type:Number,required:!1,default:-1},maxWidth:{type:Number,required:!1,default:-1}},data:function(){return{hideAd:!1,shouldShow:this.shouldShowAd()}},mounted:function(){var t=this;this.createAds(),this.$addEventListener("resize",(function(){t.hideAd=!t.shouldShowAd()}))},watch:{$route:function(){this.firstLoad=!1,this.createAds()}},methods:{createAds:function(){var t=this;this.$nextTick((function(){t.shouldShowAd()&&(window.adsbygoogle=window.adsbygoogle||[],adsbygoogle.push({}))}))},shouldShowAd:function(){return(-1===this.minWidth||window.innerWidth>=this.minWidth)&&(-1===this.maxWidth||window.innerWidth<this.maxWidth)}},beforeDestroy:function(){window.top.__vm_remove=window.top.__vm_remove||[],window.top.__vm_remove.push(this.$refs.adPlacement)}},o=(r(284),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("client-only",[t.shouldShow?e("ins",{staticClass:"adsbygoogle",class:{hide:t.hideAd},style:t.adStyle,attrs:{"data-ad-client":"ca-pub-4556406968269041","data-ad-slot":t.slotId,"data-ad-format":t.adFormat,"data-full-width-responsive":t.isResponsive}}):e("div")])}),[],!1,null,"8af1cc2e",null);e.default=component.exports},281:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},282:function(t,e,r){var n=r(4),o=r(24),l=r(13),d=r(283),c=n("".replace),m=RegExp("^["+d+"]+"),f=RegExp("(^|[^"+d+"])["+d+"]+$"),h=function(t){return function(e){var r=l(o(e));return 1&t&&(r=c(r,m,"")),2&t&&(r=c(r,f,"$1")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},283:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},284:function(t,e,r){"use strict";r(277)},285:function(t,e,r){var n=r(107)(!1);n.push([t.i,".hide[data-v-8af1cc2e]{display:none!important}",""]),t.exports=n},286:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(111);var o=r(137),l=r(82);function d(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},287:function(t,e,r){t.exports=r.p+"fonts/RobotoCondensed-Light.f982e4a.woff2"},289:function(t,e,r){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!n.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},290:function(t,e,r){"use strict";r(278)},291:function(t,e,r){var n=r(107)(!1);n.push([t.i,".link{border-radius:19px;aspect-ratio:391/145;display:block;position:relative;z-index:2}.link-img{max-width:100%;cursor:pointer;transition:transform .07s linear,filter .1s ease-out,opacity .15s linear;opacity:0}.link-img:hover{transform:scale(1.02);filter:drop-shadow(3px 3px 5px rgba(0,0,0,.17))}",""]),t.exports=n},292:function(t,e,r){"use strict";r.r(e);var n={props:{title:{required:!0,type:String},path:{required:!0,type:String},preload:{required:!1,type:Boolean,default:!1}},data:function(){return{imageLoaded:!1}}},o=(r(290),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"link",style:{background:t.imageLoaded?"none":"#f1f2f6"},attrs:{prefetch:t.preload,to:"/".concat(t.path,"/")}},[e("img",{staticClass:"link-img",style:{opacity:t.imageLoaded?1:0},attrs:{onload:t.imageLoaded=!0,alt:t.title,src:"/link-images/".concat(t.path,".svg"),loading:"lazy"}})])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,r){"use strict";r(279)},294:function(t,e,r){var n=r(107),o=r(200),l=r(287),d=n(!1),c=o(l);d.push([t.i,"@font-face{font-family:RobotoCondensedLight;src:url("+c+")}.footer-wrapper[data-v-2b1aca38]{margin-top:15px;padding:30px 20px 45px;text-align:center;font-size:22px;font-family:RobotoCondensedLight,sans-serif}.related-text[data-v-2b1aca38]{font-size:22px}.site-title[data-v-2b1aca38]{margin-top:18px;max-width:140px}.related-posts[data-v-2b1aca38],.site-title[data-v-2b1aca38]{margin-left:auto;margin-right:auto}.related-posts[data-v-2b1aca38]{display:grid;max-width:870px;grid-template-columns:repeat(2,1fr);grid-gap:16px 18px;margin-top:15px;font-size:0}.made-by[data-v-2b1aca38]{font-size:16px;margin-top:15px;opacity:.6;display:none}.made-by a[data-v-2b1aca38]{color:#000}.heart[data-v-2b1aca38]{width:17px;height:17px;position:relative;top:4px}.site-title-logo[data-v-2b1aca38]{height:25px}.newsletter-text[data-v-2b1aca38]{font-size:19px;margin-bottom:8px}.newsletter-img[data-v-2b1aca38]{height:16px;position:relative;top:3px;margin-right:7px}.newsletter-input[data-v-2b1aca38]{font-size:17px;padding:7px 5px 7px 40px;border-radius:5px;border:1px solid #000;max-width:220px;width:100%;background-color:#fff;background-image:url(/general/mail.svg);background-repeat:no-repeat;background-size:auto 15px;background-position:10px;font-family:RobotoCondensedLight;outline:none;color:#000}.newsletter-input[data-v-2b1aca38]::-moz-placeholder{color:rgba(0,0,0,.8)}.newsletter-input[data-v-2b1aca38]::placeholder{color:rgba(0,0,0,.8)}.newsletter-subscribe[data-v-2b1aca38]{background:#fff5d9;font-size:17px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:1px solid #000;border-radius:5px;padding:7px 12px;margin-left:5px;height:100%;cursor:pointer;color:#000;font-family:RobotoCondensedLight}.newsletter-subscribe[data-v-2b1aca38]:hover{transform:scale(1.03)}.newsletter-box[data-v-2b1aca38]{padding:20px 10px;border-radius:5px;margin-left:auto;margin-right:auto;margin-top:10px}.newsletter-inner[data-v-2b1aca38]{display:flex;justify-content:center;height:42px}@media only screen and (max-width:700px){.footer-wrapper[data-v-2b1aca38]{padding-left:12px;padding-right:12px}.related-posts[data-v-2b1aca38]{grid-template-columns:repeat(1,1fr)}.site-title[data-v-2b1aca38]{max-width:145px;margin-top:25px}}",""]),t.exports=d},295:function(t,e,r){"use strict";r.r(e);var n,o=r(286),l=r(10),d=(r(45),r(15),r(204),r(60),r(297)),c=r.n(d),m=r(289),f={props:{color:{type:String,required:!1,default:"black"},bg:{type:String,required:!1,default:"white"}},data:function(){return{related:[],submittedEmail:!1,email:""}},mounted:function(){this.getRelated()},computed:{isValidEmail:function(){return m.validate(this.email)}},methods:{onEmailSubmit:(n=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isValidEmail){t.next=4;break}return this.submittedEmail=!0,t.next=4,c()({url:"https://neal.fun/api/newsletter/subscribe",method:"POST",data:{email:this.email}});case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),getRelated:function(){var t=window.innerWidth>500?4:3,e=Object(o.a)(this.$store.state.posts),r=this.$route.path;e=e.filter((function(t){return"/".concat(t.path,"/")!==r&&!t.hidden&&!t.hideInRecommended}));for(var n=[],l=0;l<t;l++){var d=Math.floor(Math.random()*e.length);n.push(e[d]),e.splice(d,1)}this.related=n}}},h=f,v=(r(293),r(28)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("Ad",{attrs:{slotId:"2834998355",adStyle:"display: block; margin-left: auto; margin-right: auto; max-width: min(970px, calc(100% - 60px)); margin-top: 15px;",adFormat:"auto",isResponsive:!0,minWidth:800}}),t._v(" "),e("Ad",{attrs:{slotId:"2834998355",adStyle:"display: block; margin-left: auto; margin-right: auto; margin-top: 15px;",adFormat:"auto",isResponsive:!0,maxWidth:800}}),t._v(" "),e("div",{staticClass:"footer-wrapper",style:{color:t.color,background:t.bg}},[e("div",{staticClass:"related-text"},[t._v("You may also like")]),t._v(" "),e("div",{staticClass:"related-posts"},t._l(t.related,(function(t){return e("page-link",{key:t.title,attrs:{bg:"#f1f2f6",path:t.path,title:t.title,preload:t.preload}})})),1),t._v(" "),e("div",{staticClass:"newsletter-box"},[e("div",{staticClass:"newsletter-text"},[t._v("\n        "+t._s(t.submittedEmail?"Thanks for subscribing :)":"Get new posts!")+"\n      ")]),t._v(" "),t.submittedEmail?t._e():e("form",{staticClass:"newsletter-inner",on:{submit:function(e){return e.preventDefault(),t.onEmailSubmit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"newsletter-input",attrs:{type:"email",placeholder:"Your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("button",{staticClass:"newsletter-subscribe"},[t._v("Subscribe")])])]),t._v(" "),e("div",{staticClass:"made-by"},[t._v("\n      Made with\n      "),e("svg",{staticClass:"heart",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512.001 512","xml:space":"preserve"}},[e("g",[e("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",fill:t.color,"data-original":"#000000"}})])]),t._v("\n      by Neal Agarwal\n    ")]),t._v(" "),e("div",{staticClass:"site-title"},[e("nuxt-link",{attrs:{to:"/"}},[e("logo",{attrs:{color:t.color}})],1)],1)])],1)}),[],!1,null,"2b1aca38",null);e.default=component.exports;installComponents(component,{Ad:r(280).default,PageLink:r(292).default,Logo:r(288).default})},532:function(t,e,r){var content=r(1012);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("b6983ae2",content,!0,{sourceMap:!1})},533:function(t,e,r){var content=r(1014);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("d54c5990",content,!0,{sourceMap:!1})}}]);