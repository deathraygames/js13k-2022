"use strict";const h=Math.PI,da=t=>t<0?-t:t,ha=(t,i)=>t<i?t:i,ia=(t,i)=>i<t?t:i,ja=(t,i=0,s=1)=>t<i?i:s<t?s:t,ka=(t,i=0,s=1)=>s-i?ja((t-i)/(s-i)):0,la=(t,i=0,s=1)=>i+ja(t)*(s-i),ma=(t,i,s,a)=>2*da(t.x-s.x)<i.x+a.x&2*da(t.y-s.y)<i.y+a.y,t=(t=1,i=0)=>i+(t-i)*Math.random(),na=(i=1,s=0)=>0|t(i,s),pa=(i=1)=>0<i?oa(i*t(0/i,1)**.5):new v,oa=(i=1)=>qa(new v,t(2*h),i),ta=(i=new y,s=new y(0,0,0,1),a)=>a?i.fa(s,t()):new y(t(i.r,s.r),t(i.m,s.m),t(i.b,s.b),t(i.a,s.a)),B=(t=0,i)=>null==t.x?new v(t,null==i?t:i):new v(t.x,t.y);function qa(t,i=0,s=1){return t.x=s*Math.sin(i),t.y=s*Math.cos(i),t}function ua(t,i){return(t.x-i.x)**2+(t.y-i.y)**2}function va(t){var i=t.length();return 1<i?t.scale(1/i):t}function za(t,i){return 0<=t.x&&0<=t.y&&t.x<i.x&&t.y<i.y}class v{constructor(t=0,i=0){this.x=t,this.y=i}F(){return new v(this.x,this.y)}add(t){return new v(this.x+t.x,this.y+t.y)}v(t){return new v(this.x-t.x,this.y-t.y)}multiply(t){return new v(this.x*t.x,this.y*t.y)}ab(t){return new v(this.x/t.x,this.y/t.y)}scale(t){return new v(this.x*t,this.y*t)}length(){return(this.x**2+this.y**2)**.5}normalize(t=1){var i=this.length();return i?this.scale(t/i):new v(0,t)}angle(){return Math.atan2(this.x,this.y)}rotate(t){var i=Math.cos(t);return t=Math.sin(t),new v(this.x*i-this.y*t,this.x*t+this.y*i)}direction(){return da(this.x)>da(this.y)?this.x<0?3:1:this.y<0?2:0}floor(){return new v(Math.floor(this.x),Math.floor(this.y))}fa(t,i){return this.add(t.v(this).scale(ja(i)))}toString(t=3){return`(${(this.x<0?"":" ")+this.x.toFixed(t)},${(this.y<0?"":" ")+this.y.toFixed(t)} )`}}function Aa(t=0){var i=new y,s=(t,i,s)=>(s=(s%1+1)%1)<1/6?t+6*(i-t)*s:s<.5?i:s<2/3?t+(i-t)*(2/3-s)*6:t;return i.r=s(1.4-1,1,t+1/3),i.m=s(1.4-1,1,t),i.b=s(1.4-1,1,t-1/3),i.a=1,i}function Ba(t){return(255*t.r|0)+(255*t.m<<8)+(255*t.b<<16)+(255*t.a<<24)}class y{constructor(t=1,i=1,s=1,a=1){this.r=t,this.m=i,this.b=s,this.a=a}F(){return new y(this.r,this.m,this.b,this.a)}add(t){return new y(this.r+t.r,this.m+t.m,this.b+t.b,this.a+t.a)}v(t){return new y(this.r-t.r,this.m-t.m,this.b-t.b,this.a-t.a)}multiply(t){return new y(this.r*t.r,this.m*t.m,this.b*t.b,this.a*t.a)}ab(t){return new y(this.r/t.r,this.m/t.m,this.b/t.b,this.a/t.a)}scale(t,i=t){return new y(this.r*t,this.m*t,this.b*t,this.a*i)}fa(t,i){return this.add(t.v(this).scale(ja(i)))}toString(){return`rgb(${255*this.r|0},${255*this.m|0},${255*this.b|0},${this.a})`}}function Ca(t){return null!=t.time?ka(t.time-Ea,t.setTime,0):0}class Fa{constructor(t){this.time=null==t?void 0:Ea+t,this.setTime=t}set(t=0){this.time=Ea+t,this.setTime=t}active(){return Ea<=this.time}get(){return null!=this.time?Ea-this.time:0}toString(){}}let Ga=B(1920,1200),Ha=B(),Na=B(16),Oa=B(1),Sa=0,C=B(),H=ia(Na.x,Na.y);const Ta=1/60;let Ua=[],Va=[],Wa=0,Ea=0,Xa=0,Za=0,cb=0,db,eb;function fb(t,a,e,h,n,i){gb.onerror=gb.onload=()=>{eb=B(.3).ab(db=B(gb.width,gb.height)),document.body.style="margin:0;overflow:hidden;background:#000;touch-action:none;user-select:none;-webkit-user-select:none;-moz-user-select:none",document.body.appendChild(K=document.createElement("canvas")),hb=K.getContext("2d"),K.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",ib(),document.body.appendChild(M=document.createElement("canvas")),P=M.getContext("2d"),M.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",t(),r()};const r=(t=0)=>{var i=t-Za;for(Za=t,Xa+=i/1e3,cb=ha(cb+i,50),Ha.x?(M.width=K.width=Ha.x,M.height=K.height=Ha.y,t=innerWidth/innerHeight,i=K.width/K.height,K.style.width=M.style.width=t<i?"100%":"",K.style.height=M.style.height=t<i?"":"100%",jb&&(jb.style.width=K.style.width,jb.style.height=K.style.height)):(M.width=K.width=ha(innerWidth,Ga.x),M.height=K.height=ha(innerHeight,Ga.y)),kb=B(K.width,K.height),t=0,cb<0&&-9<cb&&(t=cb,cb=0);0<=cb;cb-=1e3/60)document.hasFocus()||(Q=[[]]),lb=mb(pb),qb(),a(),rb(),e(),sb();cb+=t,tb(),h(),Ua.sort((t,i)=>t.P-i.P);for(const s of Ua)s.V||s.aa();n(),ub(),vb(),requestAnimationFrame(r)};i?gb.src=i:gb.onload()}function tb(){kb=B(K.width,K.height),hb.imageSmoothingEnabled=!1;var t=K.width,i=K.height,s=C.x,a=C.y,e=H;U.viewport(0,0,jb.width=t,jb.height=i),U.clear(16384),U.bindTexture(3553,wb),U.useProgram(zb),Ab=void 0,t=2*e/t,i=2*e/i,U.uniformMatrix4fv(U.getUniformLocation(zb,"m"),0,new Float32Array([t,0,0,0,0,i,0,0,1,1,-1,1,-1-t*s,-1-i*a,0,0]))}function rb(){Va=Ua.filter(t=>t.Xa);const s=t=>{if(!t.V){t.update();for(const i of t.children)s(i)}};for(const t of Ua)t.parent||s(t);Ua=Ua.filter(t=>!t.V),Ea=++Wa/60}function Eb(t){if(!t.V){t.V=1,t.parent&&t.parent.removeChild(t);for(const i of t.children)Eb(i,i.parent=0)}}function Fb(t,i,s=B(),a=0){i.parent||t.children.includes(i),t.children.push(i),i.parent=t,i.ga=s.F(),i.lb=a}class Gb{constructor(t=B(),i=Oa,s=-1,a=Na,e=0,h,n=0){this.g=t.F(),this.size=i,this.W,this.o=s,this.u=a,this.angle=e,this.color=h,this.Ca,this.i=1,this.na=this.I=.99,this.A=0,this.Ma=.8,this.Y=1,this.P=n,this.h=new v,this.Da=0,this.sb=Ea,this.children=[],this.ba=1,Ua.push(this)}update(){var t=this.parent;if(t)this.g=this.ga.multiply(B(t.J?-1:1,1)).rotate(-t.angle).add(t.g),this.angle=(t.J?-1:1)*this.lb+t.angle;else if(this.h.x=ja(this.h.x,-1,1),this.h.y=ja(this.h.y,-1,1),t=this.g.F(),this.g.x+=this.h.x*=this.I,this.g.y+=this.h.y=this.I*this.h.y+Sa*this.Y,this.angle+=this.Da*=this.na,this.i){var i,s,a,e,h,n,r,c=this.h.y<0;if(this.Z&&(i=this.Z.h?this.Z.h.x:0,this.h.x=i+(this.h.x-i)*this.Ma,this.Z=0),this.Xa)for(var o of Va)!this.kb&!o.kb||o.V||o.parent||o==this||ma(this.g,this.size,o.g,o.size)&&(ma(t,this.size,o.g,o.size)?(i=(s=(i=t.v(o.g)).length())<.01?oa(.001):i.scale(.001/s),this.h=this.h.add(i),o.i&&(o.h=o.h.v(i))):(i=this.size.add(o.size),s=2*(t.y-o.g.y)>i.y+Sa,a=2*da(t.y-o.g.y)<i.y,e=2*da(t.x-o.g.x)<i.x,!s&&!e&&a||(this.g.y=o.g.y+(i.y/2+.001)*(t.y-o.g.y<0?-1:1),o.Z&&c||!o.i?(c&&(this.Z=o),this.h.y*=-this.A):o.i&&(h=(this.i*this.h.y+o.i*o.h.y)/(this.i+o.i),n=o.h.y*(o.i-this.i)/(this.i+o.i)+2*this.h.y*this.i/(this.i+o.i),r=ia(this.A,o.A),this.h.y=la(r,h,this.h.y*(this.i-o.i)/(this.i+o.i)+2*o.h.y*o.i/(this.i+o.i)),o.h.y=la(r,h,n))),s||!a&&e||(this.g.x=o.g.x+(i.x/2+.001)*(t.x-o.g.x<0?-1:1),o.i?(i=(this.i*this.h.x+o.i*o.h.x)/(this.i+o.i),s=o.h.x*(o.i-this.i)/(this.i+o.i)+2*this.h.x*this.i/(this.i+o.i),a=ia(this.A,o.A),this.h.x=la(a,i,this.h.x*(this.i-o.i)/(this.i+o.i)+2*o.h.x*o.i/(this.i+o.i)),o.h.x=la(a,i,s)):this.h.x*=-this.A)));this.ba&&Hb(this.g,this.size,this)&&!Hb(t,this.size,this)&&(o=Hb(new v(this.g.x,t.y),this.size,this),!Hb(new v(t.x,this.g.y),this.size,this)&&o||(this.Z=c,this.h.y*=-this.A,(c=(t.y-this.size.y/2|0)-(t.y-this.size.y/2))<0&&c>this.I*this.h.y+Sa*this.Y&&(this.h.y=this.I?(c-Sa*this.Y)/this.I:0),this.g.y=t.y),o&&(this.g.x=t.x,this.h.x*=-this.A))}}aa(){Ib(this.g,this.W||this.size,this.o,this.u,this.color,this.angle,this.J,this.Ca)}removeChild(t){t.parent==this&&this.children.includes(t),this.children.splice(this.children.indexOf(t),1),t.parent=0}toString(){}}const gb=new Image;let K,hb,M,P,kb=B();const mb=t=>t.add(B(.5)).v(kb.scale(.5)).multiply(B(1/H,-1/H)).add(C),Jb=t=>t.v(C).multiply(B(H,-H)).add(kb.scale(.5)).v(B(.5));function Ib(t,i=B(1),s=-1,a=Na,e=new y,h=0,n,r=new y(0,0,0,0)){var c,o,b;s<0||!gb.width?Kb(t.x,t.y,i.x,i.y,h,0,0,0,0,0,Ba(e)):(b=s%(c=db.x/a.x|0)*(o=a.x/db.x),s=(s/c|0)*(a=a.y/db.y),Kb(t.x,t.y,n?-i.x:i.x,i.y,h,b+eb.x,s+eb.y,b-eb.x+o,s-eb.y+a,Ba(e),Ba(r)))}function Lb(t,i=B(1),s){var a=Na;Ib(mb(t),i.scale(1/H),-1,a,s,void 0,0,0)}function Mb(t,i){var s=B(.055),a=hb;t=Jb(t),s=s.scale(H),a.save(),a.translate(t.x+.5|0,t.y-.5|0),a.rotate(0),a.scale(s.x,s.y),i(a),a.restore()}function Nb(t,i,s=1,a=new y,e=0,h=new y(0,0,0),n="center"){P.fillStyle=a,P.lineWidth=e,P.strokeStyle=h,P.textAlign=n,P.font=s+"px arial",P.textBaseline="middle",P.lineJoin="round",i=i.F(),(t+"").split("\n").forEach(t=>{e&&P.strokeText(t,i.x,i.y),P.fillText(t,i.x,i.y),i.y+=s})}let Ob;function Pb(r,t,c,o=4){const b=r.context,l=(b.save(),b.imageSmoothingEnabled=!1,r.u),u=l.add(r.uc).scale(o),d=r.image.width/r.u.x|0;t.split("\n").forEach((i,s)=>{var a=i.length*l.x*o/2|0;for(let t=i.length;t--;){((e=i[t].charCodeAt())<32||127<e)&&(e=127);var e=(h=r.Dc+e-32)%d,h=h/d|0,n=c.add(B(t,s).multiply(u));b.drawImage(r.image,e*l.x,h*l.y,l.x,l.y,n.x-a,n.y,l.x*o,l.y*o)}}),b.restore()}function Qb(t,i,s,a=1){Pb(t,i,Jb(s).floor(),a*H|0)}class Rb{constructor(){var t=B(8),i=B(0,1),s=P;Ob||((Ob=new Image).src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAYAQAAAAA9+x6JAAAAAnRSTlMAAHaTzTgAAAGiSURBVHjaZZABhxxBEIUf6ECLBdFY+Q0PMNgf0yCgsSAGZcT9sgIPtBWwIA5wgAPEoHUyJeeSlW+gjK+fegWwtROWpVQEyWh2npdpBmTUFVhb29RINgLIukoXr5LIAvYQ5ve+1FqWEMqNKTX3FAJHyQDRZvmKWubAACcv5z5Gtg2oyCWE+Yk/8JZQX1jTTCpKAFGIgza+dJCNBF2UskRlsgwitHbSV0QLgt9sTPtsRlvJjEr8C/FARWA2bJ/TtJ7lko34dNDn6usJUMzuErP89UUBJbWeozrwLLncXczd508deAjLWipLO4Q5XGPcJvPu92cNDaN0P5G1FL0nSOzddZOrJ6rNhbXGmeDvO3TF7DeJWl4bvaYQTNHCTeuqKZmbjHaSOFes+IX/+IhHrnAkXOAsfn24EM68XieIECoccD4KZLk/odiwzeo2rovYdhvb2HYFgyznJyDpYJdYOmfXgVdJTaUi4xA2uWYNYec9BLeqdl9EsoTw582mSFDX2DxVLbNt9U3YYoeatBad1c2Tj8t2akrjaIGJNywKB/7h75/gN3vCMSaadIUTAAAAAElFTkSuQmCC"),this.image=Ob,this.u=t,this.uc=i,this.Dc=0,this.context=s}}const Sb=(t,i=0)=>Q[i]&&1&Q[i][t]?1:0;let lb=B(),pb=B(),Tb=0,Ub=0;const Vb=(t,i=0)=>Sb(t,i+1);let Q=[[]];function sb(){for(const t of Q)for(const i in t)t[i]&=1;Tb=0}onkeydown=t=>{t.repeat||(Q[Ub=0][Wb(t.keyCode)]=3)},onkeyup=t=>{Q[0][Wb(t.keyCode)]=4};const Wb=t=>87==t?38:83==t?40:65==t?37:68==t?39:t,Xb=(onmousedown=t=>{Q[Ub=0][t.button]=3,onmousemove(t),t.button&&t.preventDefault()},onmouseup=t=>Q[0][t.button]=2&Q[0][t.button]|4,onmousemove=t=>{var i;return t=K?(i=K.getBoundingClientRect(),B(K.width,K.height).multiply(B(ka(t.x,i.left,i.right),ka(t.y,i.top,i.bottom)))):B(),pb=t},onwheel=t=>t.ctrlKey||(Tb=t.deltaY<0?-1:1),oncontextmenu=()=>!1,[]);function qb(){if(navigator.getGamepads&&document.hasFocus()){var i=navigator.getGamepads();for(let t=i.length;t--;){var s=i[t];const h=Q[t+1]||(Q[t+1]=[]),n=Xb[t]||(Xb[t]=[]);if(s){for(var a=t=>.3<t?ka(t,.3,.8):t<-.3?-ka(-t,.3,.8):0,e=0;e<s.axes.length-1;e+=2)n[e>>1]=va(B(a(s.axes[e]),a(-s.axes[e+1])));for(a=s.buttons.length;a--;)e=s.buttons[a],h[a]=e.pressed?1+2*!Vb(a,t):4*Vb(a,t),Ub|=!t&&e.pressed;(s=B(Vb(15,t)-Vb(14,t),Vb(12,t)-Vb(13,t))).x**2+s.y**2&&(n[0]=va(s))}}}}if(void 0!==window.ontouchstart){let s,a;ontouchstart=ontouchmove=ontouchend=t=>{t.button=0;var i=t.touches.length;return i?(a||Yb([Zb(...[0,a=1])]),t.x=t.touches[0].clientX,t.y=t.touches[0].clientY,(s?onmousemove:onmousedown)(t)):s&&onmouseup(t),s=i,!t.cancelable}}class dc{constructor(t,i=30,s=.7){this.yc=i,this.Ec=s,this.Oa=t[1]||0,t[1]=0,this.Eb=Zb(...t)}play(i,s=1,a=1,e=1){var h=0;if(i){if(h=this.yc){var n=ua(C,i);if(h*h<n)return;s*=ka(n**.5,h,h*this.Ec)}h=2*Jb(i).x/K.width-1}return Yb([this.Eb],s,a+a*this.Oa*e*t(-1,1),h)}}let ec;function Yb(t,i=1,s=1,a=0){var e,h;if((ec=ec||new(window.AudioContext||webkitAudioContext)).resume(),"running"==ec.state)return e=ec.createBuffer(t.length,t[0].length,44100),h=ec.createBufferSource(),t.forEach((t,i)=>e.getChannelData(i).set(t)),h.buffer=e,h.playbackRate.value=s,h.loop=0,(t=ec.createGain()).gain.value=.5*i,t.connect(ec.destination),(window.StereoPannerNode?h.connect(new StereoPannerNode(ec,{pan:ja(a,-1,1)})):h).connect(t),h.start(),h}function Zb(i=1,s=.05,a=220,e=0,n=0,r=.1,c=0,o=1,b=0,l=0,u=0,d=0,g=0,y=0,f=0,x=0,v=0,m=1,w=0,p=0){let B=2*h,A=b*=500*B/44100/44100,M=[],U=(s=a*=(1+s*t(-1,1))*B/44100,0),z=0,C=0,j=1,k=0,S=0,E=0,W,P;for(l*=500*B/44100**3,f*=B/44100,u*=B/44100,d*=44100,g=44100*g|0,P=(e=44100*e+9)+(w*=44100)+(n*=44100)+(r*=44100)+(v*=44100)|0;C<P;M[C++]=E)++S%(100*x|0)||(E=c?1<c?2<c?3<c?Math.sin((U%B)**3):ia(ha(Math.tan(U),1),-1):1-(2*U/B%2+2)%2:1-4*da(Math.round(U/B)-U/B):Math.sin(U),E=(g?1-p+p*Math.sin(B*C/g):1)*(E<0?-1:1)*(E<0?-E:E)**o*i*.5*(C<e?C/e:C<e+w?1-(C-e)/w*(1-m):C<e+w+n?m:C<P-v?(P-C-v)/r*m:0),E=v?E/2+(v>C?0:(C<P-v?1:(P-C)/v)*M[C-v|0]/2):E),W=(a+=b+=l)*Math.cos(f*z++),U+=W-W*y*(1-1e9*(Math.sin(C)+1)%2),j&&++j>d&&(a+=u,s+=u,j=0),!g||++k%g||(a=s,b=A,j=j||1);return M}let fc=[],gc=B();function hc(t){for(gc=t,t=(fc=[]).length=da(gc.x*gc.y);t--;)fc[t]=0}function Hb(t,i=B(),s){var a=ia(t.x-i.x/2|0,0),e=ia(t.y-i.y/2|0,0),h=ha(t.x+i.x/2,gc.x);for(t=ha(t.y+i.y/2,gc.y);e<t;++e)for(i=a;i<h;++i){var n=fc[e*gc.x+i];if(n&&(!s||0<n))return 1}}class ic{constructor(t,i=0,s=0,a=new y){this.Ra=t,this.direction=i,this.J=s,this.color=a}clear(){this.Ra=this.direction=this.J=0,color=new y}}function jc(t,i){var s=i.floor().add(t.g).add(B(.5));kc(t,s,t=>t.clearRect(-.5,-.5,1,1)),null!=(i=t.getData(i)).Ra&&Ib(s,B(1),i.Ra,t.u,i.color,i.direction*h/2,i.J)}function kc(t,i,s){var a=B(1);const e=t.context;e.save(),i=i.v(t.g).multiply(t.u),a=a.multiply(t.u),e.translate(i.x,t.canvas.height-i.y),e.rotate(0),e.scale(a.x,a.y),s(e),e.restore()}class lc extends Gb{constructor(t=gc){var i=B(1);for(super(B(),t,-1,Na,0,void 0,0),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.scale=i,this.dc,this.data=[],t=this.size,t=da(t.x*t.y);t--;)this.data.push(new ic)}setData(t,i,s){za(t,this.size)&&(this.data[(0|t.y)*this.size.x+t.x|0]=i,s&&jc(this,t))}getData(t){return za(t,this.size)&&this.data[(0|t.y)*this.size.x+t.x|0]}update(){}aa(){var t=Jb(this.g.add(B(0,this.size.y*this.scale.y)));(this.dc?P:hb).drawImage(this.canvas,t.x,t.y,H*this.size.x*this.scale.x,H*this.size.y*this.scale.y)}}function mc(i){var s=null!=i.Ha.x?new v(t(-.5,.5),t(-.5,.5)).multiply(i.Ha).rotate(i.angle):pa(.5*i.Ha),s=new nc(i.g.add(s),i.o,i.u,i.angle+t(i.pb,-i.pb));const a=i.Oa;var e=(c=i=>i+i*t(a,-a))(i.wc),h=c(i.Qa),n=c(i.Bc),r=c(i.speed),c=c(i.wb)*(2*(0|t(2))-1);const o=t(i.bb,-i.bb),b=ta(i.Ib,i.Jb,i.rb),l=ta(i.Gb,i.Hb,i.rb);s.qa=b,s.pa=l.v(b),s.h=qa(new v,i.angle+o,r),s.Da=c,s.jc=e,s.Qa=h,s.Cc=n-h,s.Ka=i.Ka,s.I=i.I,s.na=i.na,s.A=i.A,s.Ma=i.Ma,s.Y=i.Y,s.ba=i.ba,s.ma=i.ma,s.P=i.P,s.ia=i.ia,s.J=t()<.5,s.$a=i.Pc,i.vc&&i.vc(s)}class oc extends Gb{constructor(t,i,s=0,a=0,e=100,n=h,r=-1,c=Na,o=new y,b=new y,l=new y(1,1,1,0),u=new y(1,1,1,0),d=.5,g=.1,f=1,x=.1,m=.05,w=1,p=1,B=0,A=h,M=.1,U=.2,z,C,j=1,k=C?1e9:0){super(t,new v,r,c,i,void 0,k),this.Ha=s,this.cb=a,this.ta=e,this.bb=n,this.Ib=o,this.Jb=b,this.Gb=l,this.Hb=u,this.rb=j,this.wc=d,this.Qa=g,this.Bc=f,this.speed=x,this.wb=m,this.I=w,this.na=p,this.Y=B,this.pb=A,this.Ka=M,this.Oa=U,this.ba=z,this.ma=C,this.ca=this.ia=0}update(){if(this.parent&&super.update(),!this.cb||Ea-this.sb<=this.cb){if(+this.ta){var t=1/this.ta;for(this.ca+=Ta;0<this.ca;this.ca-=t)mc(this)}}else Eb(this)}aa(){}}class nc extends Gb{constructor(t,i,s,a){super(t,new v,i,s,a)}aa(){var t=ha((Ea-this.sb)/this.jc,1),i=this.Qa+t*this.Cc,i=new v(i,i),s=this.Ka/2,s=new y(this.qa.r+t*this.pa.r,this.qa.m+t*this.pa.m,this.qa.b+t*this.pa.b,(this.qa.a+t*this.pa.a)*(t<s?t/s:1-s<t?(1-t)/s:1));if(this.ma&&(Ab=1),this.ia){var a=this.h.length();const e=this.h.scale(1/a);a*=this.ia,i.y=ia(i.x,a),this.angle=e.angle(),Ib(this.g.add(e.multiply(B(0,-a/2))),i,this.o,this.u,s,this.angle,this.J)}else Ib(this.g,i,this.o,this.u,s,this.angle,this.J);this.ma&&(Ab=void 0),1==t&&(this.color=s,this.size=i,this.$a&&this.$a(this),this.V=1)}}let pc=[],qc;function ub(){var t,i;pc.length&&(t=pc[0],i=Xa-qc,qc?5<i?pc.shift(qc=0):t.aa():qc=Xa)}let jb,U,wb,zb,W,Y,rc,sc,Ab;function ib(){jb=document.createElement("canvas"),U=jb.getContext("webgl",{antialias:!1}),jb.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",wb=tc(),document.body.appendChild(jb),zb=uc();var t=new ArrayBuffer(9437184);vc(t.byteLength),W=new Float32Array(t),Y=new Uint32Array(t);let h=rc=0;(t=(t,i,s,a,e=0)=>{t=U.getAttribLocation(zb,t),U.enableVertexAttribArray(t),U.vertexAttribPointer(t,a,i,e,24,h),h+=a*s})("p",5126,4,2),t("t",5126,4,2),t("c",5121,1,4,1),t("a",5121,1,4,1)}function wc(t,i){return i=U.createShader(i),U.shaderSource(i,t),U.compileShader(i),i}function uc(){var t=U.createProgram();return U.attachShader(t,wc("precision highp float;uniform mat4 m;attribute vec2 p,t;attribute vec4 c,a;varying vec2 v;varying vec4 d,e;void main(){gl_Position=m*vec4(p,1,1);v=t;d=c;e=a;}",35633)),U.attachShader(t,wc("precision highp float;varying vec2 v;varying vec4 d,e;uniform sampler2D s;void main(){gl_FragColor=texture2D(s,v)*d+e;}",35632)),U.linkProgram(t),t}function vc(t){var i=U.createBuffer();U.bindBuffer(34962,i),U.bufferData(34962,t,35048)}function tc(){var t,i=gb;if(i&&i.width)return t=U.createTexture(),U.bindTexture(3553,t),U.texImage2D(3553,0,6408,6408,5121,i),U.texParameteri(3553,10241,9728),U.texParameteri(3553,10240,9728),U.texParameteri(3553,10242,33071),U.texParameteri(3553,10243,33071),t}function xc(){var t;rc&&(t=sc?1:771,U.blendFuncSeparate(770,t,1,t),U.enable(3042),U.bufferSubData(34962,0,W.subarray(0,36*rc)),U.drawArrays(4,0,6*rc),rc=0,sc=Ab)}function vb(t){var i=hb;(rc||t)&&(xc(),t&&i.drawImage(jb,0,0))}function Kb(t,i,s,a,e,h,n,r,c,o=4294967295,b=0){65536!=rc&&sc==Ab||xc();var l=Math.cos(e)/2,u=Math.sin(e)/2;e=l*s,l*=a,s*=u,a*=u,u=36*rc++,W[u++]=t-e-a,W[u++]=i-l+s,W[u++]=h,W[u++]=c,Y[u++]=o,Y[u++]=b,W[u++]=t+e+a,W[u++]=i+l-s,W[u++]=r,W[u++]=n,Y[u++]=o,Y[u++]=b,W[u++]=t-e+a,W[u++]=i+l+s,W[u++]=h,W[u++]=n,Y[u++]=o,Y[u++]=b,W[u++]=t-e-a,W[u++]=i-l+s,W[u++]=h,W[u++]=c,Y[u++]=o,Y[u++]=b,W[u++]=t+e-a,W[u++]=i-l-s,W[u++]=r,W[u++]=c,Y[u++]=o,Y[u++]=b,W[u++]=t+e+a,W[u++]=i+l-s,W[u++]=r,W[u++]=n,Y[u++]=o,Y[+u]=b}!function(){function U(t){return Math.max(Math.min(Math.round(t),24),0)}function z(t){t.Aa=U(t.x+t.R/2),t.Ba=U(t.y+t.S/2),t.eb=U(t.x+t.R),t.ua=U(t.y+t.S)}function s(t){var i=t?255*t.r:w(180)+20,s=t?255*t.m:w(180)+20,a=(t=t?255*t.b:w(180)+20,w(6,24*.6)),e=w(6,24*.6),h=w(5,24*.6),n=w(0,24-h-2),r=w(6,12),c=w(8,24*.6),o=w(0,24-r-24*.2),b=w(1,3),l=w(1,3),u=w(2,r-4),d=w(1,.5*c),g=w(3,c-4),y=w(1,2),f=w(2,r-u-y),x=w(-4,-1),v=w(-4,3),m=Math.min(a/2,w(1,6));return{yb:[i-20,s-20,t-10],xb:[i-40,s-40,t-20],Vb:[i,s,t],Mb:0===w(2)?[0,0,0]:[200,200,200],$b:c,Yb:r,Zb:o,Db:a,Bb:e,Ab:h,Cb:n,Qb:b,Ob:l,Pb:u,Nb:d,tc:g,rc:y,sc:f,Wb:x,Ic:v,fc:2,ic:m}}function a(a){var e;if(a)return e=s(),Object.keys(e).forEach(t=>{var s,i;0<w(20)&&(e[t]=(s=t,"number"==typeof(i=(t=a)[0][s])?(t=t.reduce((t,i)=>((i=i[s])<t[0]&&(t[0]=i),i>t[1]&&(t[1]=i),t),[1/0,-1/0]),w(t[0],t[1])):i))}),e}function j(t,i,s,a,e,h,n){var r=Math.floor((24-i)/2*n),c=24-r;return s-=r/2,[t,i,t+a,i,(e=Math.max(0,t+e+e*n))+h,s,t+a,c,t,c,e,s]}function i(t,a,i,s=4,e=0){Jb(a),t=i.yb;var h=i.xb,n=i.Vb,r=i.Mb,c=i.$b,o=i.Qb,b=i.Ob,l=i.Pb,u=i.Nb,d=i.tc,g=i.rc,y=i.sc,f=i.Wb,x=i.fc,v=i.ic,m=2<=s&&s<=6,w=[0,-.5,-1,-.5,0,.5,1,.5][s],p=[.5,.75,1,.75,.5,.25,0,.25][s],B=(s={x:(24-c)*p,y:i.Zb,R:c,S:i.Yb},(i.Db+i.Bb)/2),A=(i={x:(1-p+1)/3*(24-B),y:i.Cb,R:B,S:i.Ab},z(s),z(i),U(i.ua+(24-i.ua)/2)),M=(Math.sin(e)+1)/2;e=j(i.x,i.ua,A,v,f*=w,x,1-M),x=j(i.eb-v,i.ua,A,v,f,x,M),v=[s.Aa-c/4,s.Ba,s.Aa+c/4,s.Ba,i.Aa+B/4,i.Ba-1,i.Aa-B/4,i.Ba-1],o={x:(p=s.x+c*p)+(B=Math.max(1,u/2)),y:(u={x:p-B-o,y:s.y+l,R:o,S:b}).y,R:o,S:b},l={x:b=Math.max(p-d/2,s.x),y:s.y+l+y,R:Math.min(b+d,s.eb)-b,S:g},d=(i,n)=>{Mb(a,t=>{var s=t,a=-.5,e=-.5,h=i,t=n;s.fillStyle=k(t),s.beginPath(),h.forEach((t,i)=>{1!=i%2&&s[0===i?"moveTo":"lineTo"](Math.round(24*a+t),Math.round(24*e+h[i+1]))}),s.closePath(),s.fill()})},g=(i,s)=>{Mb(a,t=>{t.fillStyle=k(s),t.fillRect(Math.round(-12+i.x),Math.round(-12+i.y),Math.round(i.R),Math.round(i.S))})},m?(g(i,t),d(v,t),d(e,t),d(x,t),g(s,n),u.x>=s.x&&g(u,r),o.x<=s.x+c&&g(o,r),g(l,[0,0,0])):(g(s,h),d(v,t),d(e,t),d(x,t),g(i,t))}function k(t){return t?`rgb(${Math.max(0,Math.min(255,t[0]))},${Math.max(0,Math.min(255,t[1]))},`+Math.max(0,Math.min(255,t[2])):"#fff"}function e(i,s,a){const e=W*++F;return T(i,s,a,e,0),[6,5,4,3,3,2,2,2,1,1,1,1,1].forEach(t=>{T(N(i,6),N(s,6),N(a,6),e+N(W-t),0+N(W-t),t,t)}),e}function n(t,i,s){const a=e(t,i,s);[14,10,6,3,3,2,2,1,1,1].forEach(t=>T("b","b","c",a+N(W-t),0+N(W-t),t,t))}function r(s){return new Promise(t=>{const i=new Image;i.onload=()=>t(function(t){const i=t.createElement("canvas");return i.width=30*W,i.height=2*W,t.body.appendChild(i),P=i.getContext("2d"),i.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",P.drawImage(gb,1e3,1e3),T("f",0,0,0,0,12,12),T("f","f",0,12,12,12,12),e(2,4,3),e(2,4,2),e(3,4,3),e(4,3,3),P.fillStyle="#fff",P.font="20px serif","🔪 🩸 🍖 🌿 💕 ❕ 💢 💀 🍷 🍲 ⛏️ 🪓 🔨 🕯️ 🧱     ".split(" ").forEach(t=>{P.fillText(t,W*++F-1,20)}),n(3,4,3),n(4,3,3),i.toDataURL()}(document)),s?i.src=s:i.onload()})}function c(){(J=D.Rc=new E).bc(),G=new Rb,C=gc.scale(.5),H=42,Sa=0,(I=new oc(B(10,12),0,1,0,200,h,0,B(24),new y(1,1,1),new y(0,0,0),new y(1,1,1,0),new y(0,0,0,0),2,.2,.2,.1,.05,.99,1,.5,h,.05,.5,1,1)).A=.3,I.ia=2}function o(){var t=J.$;t!==D.$&&(D.$=t),Q[0]&&4&Q[0][13]&&(2===Y||3===Y?D.location.reload():0!==Y&&2!==Y||(Y=1,J.pc())),t&&(D.Gc=f,C=C.fa(t.g,.1),t.C()?Y=2:(24<=((t=t.Sb())?t.l:0)&&f.L(5),f.count()===f.length&&(Y=3))),H=ja(H*(1-Tb/10),1,1e3)}function b(){}function l(){}function u(){const t=J.$,s=new y,i=M.width/2,a=M.height/2;if(2===Y)Nb("YOU DIED",B(i,a-90),90,new y(1,0,0),4),Nb("Press Enter to restart",B(i,a),40,new y(1,.5,.5),4);else if(0===Y)Qb(G,"BIT BUTCHER",C.add(B(0,3)),.2),Qb(G,"Press Enter to start",C.add(B(0,.5)),.1);else if(1===Y||3===Y&&t){var e=t,h=M.width/2,n=e.G[e.ea];for(Qb(G,`${n?n.name:"Nothing"} equipped, 1-9: Equip item, E: Action`,mb(B(h,M.height-40)),2/H),n=1;n<=10;n++){const o=B(h-300+60*n,M.height-100);var r=n%10;Lb(o,B(50,70),r===e.ea?new y(.9,.9,.9,.3):new y(.1,.1,.1,.3)),(r=e.G[r])&&(Nb(r.X,o.add(B(0,-6)),28),Qb(G,""+r.l,mb(o.add(B(5,14))),2/H))}f.forEach((t,i)=>Nb(`[${t[1]?"X":" "}] `+t[0],B(M.width-260,100+30*i),18,t[1]?new y(.4,1,.4,.5):s,4,new y(0,0,0,t[1]?.5:1),"left"));var c=85<t.H?0:1,c=new y(1,c,c,.8);Lb(B(i,40),B(Math.max(0,100-t.H)/100*500,2),c),Nb("Age: "+Math.ceil(t.H),B(i,40),20,c,4),3===Y&&(Qb(G,"YOU WIN",C.add(B(0,5)),.2),Nb("Press Enter to play again",B(i,a-80),40,s,4))}}let d;const g=(t,i)=>{if(!dc)throw Error("no Sound");if(!(d=d||{hit:new dc([,,183,.03,.02,.09,,1.49,-1.8,,,,-.01,1.8,-1,.1,,.36,.08,.25]),attack:new dc([,,493,.01,.09,0,4,1.14,,,,,,,,.1,,.1,.01]),craft:new dc([,,7,.03,.28,.44,2,1.44,,-.3,20,.11,.04,,,.1,,.55,.29]),dud:new dc([.8,,112,,.07,.05,1,2.26,-.6,,,,,1.8,,.1,.2,.98,.1,.1]),powerup:new dc([,,1152,,.04,.17,,1.21,,,744,.08,,,,,,.91,.03]),pickup:new dc([1.05,,172,.02,,.17,2,.02,,,-409,.06,,,,.1,,.55,,.19]),walk:new dc([.2,.1,70,,,.01,4,,,,-9,.1,,,,,,.5]),consume:new dc([1.2,,16,.07,.18,.34,1,.38,-.1,-5.6,49,.15,.02,-.1,36,.1,,.39,.14])}))throw Error("no sounds");d[t]?d[t].play(i):console.warn("No sound",t,"in",d)};let f=[["Move (W,A,S,D or Arrows)"],["Pick up and equip knife"],["Stab an animal"],["Breed animals"],["Make forbidden wine"],["Collect 24 meat"],["Eat a meaty meal"]],x=f;x.L=t=>{x[t][1]||g("powerup"),x[t][1]=(x[t][1]||0)+1},x.count=()=>x.reduce((t,i)=>t+(i[1]?1:0),0);const w=na;class v extends Gb{constructor(t={}){var{g:t=B(),size:i=B(1),o:s=1,u:a,angle:e,j:n,sa:r=0,name:c=na(999),s:o=0}=t;super(t,i,s,a,e),this.name=c,this.j=n,this.facing=h,this.direction=4,this.U=new Fa,this.s=o,this.sa=r,this.W=B(1)}setDirection(){this.direction=Math.round(this.facing<0?4+4*(h+this.facing)/h:4*this.facing/h)%8}ra(t){if(this.C()||this.U.active())return 0;this.U.set(1);for(var i of this.children)i.U&&i.U.set(1);return t=ia(this.s-t,0),i=this.s-t,(this.s=t)||this.ya(),i}C(){return!this.s}ya(){Eb(this)}update(){var t;super.update(),this.setDirection(),this.C()||null==this.U.time?this.Ca=new y(0,0,0,0):(t=.5*ka(this.U.get(),.15,0),this.Ca=new y(t,.1,.1,.5))}La(){return this.j.T.find(t=>t.ec&&!t.C())}}class m extends v{constructor(i){super(i),this.la=new Fa,this.ha=new Fa,this.Na=new Fa(t(10)),this.Ua=new Fa,this.Fa=new Fa,this.Ja=null,this.M=new Fa,this.gb=new Fa,this.color=Aa(t()),this.Ea=i.Ea||null,this.species=i.species||a(this.Ea)||s(this.color),this.P=10,this.s=2,this.nb=.14,this.mb=7,this.ob=1/0,this.hb=this.ub=!1,this.Xa=1,this.kb=0,this.ba=1,this.ka=this.Sa=this.H=0,this.ja=1,this.D=B(),this.O=B(),this.max=B(window.Ta),this.G=[,,,,,,,,,,],this.ea=-1,this.K=this.B=null,Fb(this,this.Ia=new v({o:9})),this.Ia.ga=B(0,1.2),this.Pa(),Fb(this,this.Ga=new oc(B(),0,0,0,0,h,void 0,void 0,new y(1,.2,.2),new y(.5,.1,.1),new y(.4,.1,.1),new y(.4,.2,.2,.3),5,.2,.1,.07,.1,.95,.95,1,h,.01,.2,1),B(),0),this.Ga.A=.5}Pa(t){this.Ia.W=B(t?1:0),t&&(this.Ia.o={Lc:9,Mc:10,Hc:11,Kc:12}[t])}Fc(){var t,i;this.C()?this.Ja="dead":(t=-1*this.M.get(),i=-1*this.gb.get(),this.Ja=0<t&&i<t?"estrous":0<i?"fear":null),this.Pa(this.Ja)}ra(i,s){return(i=super.ra(i,s))<=0?0:(g("hit",this.g),s&&s.g&&(this.h=this.h.add(this.g.v(s.g).scale(t(.4,.8)))),this.Wa(),this.ha.time=void 0,i)}Wa(){this.Fa.active()||(this.Fa.set(this.C()?.5:.2),this.Ga.ta=100)}Fb(){this.Fa.active()||(this.Ga.ta=0)}Ub(s){var t=this.G.findIndex((t,i)=>t&&t.name===s&&(t.l||0)<(t.stack||0)&&0<i);return-1!==t?t:this.G.findIndex((t,i)=>!t&&0<i)}Sb(){var t=this.G.findIndex(t=>t&&"Meat"===t.name);return t<0?null:this.G[t]}va(){return this.G[this.ea]}qb(t){var i,s;"number"!=typeof i&&(i=this.Ub(t.name)),!t||i<1||9<i||((s=this.G[i])&&s.name===t.name&&(s.l||0)<(s.stack||0)?s.l=(s.l||0)+1:this.G[i]=t,g("pickup",this.g))}throw(){}Lb(t){t<-1||9<t||(this.ea=t,(t=this.G[this.ea])?("Butcher knife"===t.name&&f.L(1),this.B&&(this.B.W=B()),t.da||(t.da=new v(t),Fb(this,t.da,B(-.2,.2))),this.B=t.da):this.B=null)}jb(){var t=this.va();if(t)return t.Va||0}attack(){g("attack",this.g)}ib(t=[],a){let e;return t.reduce((t,i)=>{var s=ua(i.g,a)**.5;return s<t?(e=i,s):t},1/0),e}Tb(t=this.g){var i=this.j.T.filter(t=>!t.C()&&t!==this);const s=this.B;return i=i.filter(t=>ma(t.g,t.size,s.g,s.size)),this.ib(i,t)}Rb(t=this.g){(t=this.Tb(t))&&(t.s+=1,t.M.set(10))}Za(t){const i=this.va();"wine"===t?"Blood"!==i.name||i.l<10?g("dud",this.g):(i.l-=10,f.L(4),this.j.N("wine",this.g,2),g("craft")):"meal"===t&&("Meat"!==i.name||i.l<24?g("dud",this.g):(i.l-=24,this.j.N("meal",this.g,2),g("craft",this.g)))}Kb(t){t.l<=0||(--t.l,this.s+=1,this.H-=t.vb||0,"Meal"===t.name&&f.L(6),g("consume",this.g))}action(t){if(!this.la.active()){var i=this.va();if(this.la.set(.25),i)return"w"===i.type?this.attack():i.Va?this.Rb(t):("Blood"===i.name&&this.Za("wine"),void("Meat"===i.name?this.Za("meal"):i.Ya&&this.Kb(i)))}}xc(){var i;this.Na.active()||(this.Na.set(t(2,20)),i=this.j.size.scale(.5),this.K=(30<ua(this.g,i)**.5?i:this.g).add(B(t(-10,10),t(-10,10))),this.ja=t(1))}lc(){var t;this.ha.active()||(t=this.oc(),this.M.active()?this.nc():t||this.mc())}oc(){var i,s;return!this.ub||!(i=this.j.T.find(t=>t.Ac&&!t.C()&&!t.jb()&&t!==this))||(s=ua(i.g,this.g)**.5)>this.mb?0:(this.ha.set((s=s<6)?.5:t(.5,2)),this.gb.set(1),s&&(i=this.g.v(i.g).normalize(7),this.K=this.g.add(i),this.ja=1),s)}mc(){var i,s;!this.hb||!(i=this.La())||(s=ua(i.g,this.g)**.5)>this.mb||4<s||(s=i.va())&&i.jb()&&s.da&&(this.K=s.da.g.add(qa(B(),t(2*h),t(1,2))))}nc(){var t;this.M.active()&&(this.ha.set(1),t=this.j.T.filter(t=>!t.C()&&t.M.active()&&t!==this),console.log(t),t.length&&(t=this.ib(t,this.g),console.log(t),t&&(ma(t.g,t.size,this.g,this.size)?this.qc(t):this.K=t.g)))}qc(t){this.ha.set(5),t.M.time=void 0,this.M.time=void 0,f.L(3),this.j.za(this.g,[this.species,t.species])}Xb(){this.Ua.active()||(this.Ua.set(3),this.H+=1,this.cc()&&this.ra(1,this))}cc(){return this.H>this.ob}kc(){var t,i;this.C()||((i=(t=this.O.F()).x||t.y)&&(this.Na.set(60),this.K=null,this.ja=1),this.lc(),this.xc(),this.D=this.h.F(),i?(t=t.scale(.04*this.ja),this.D=this.D.add(t)):this.K&&2<ua(this.g,this.K)**.5&&(this.D=this.D.fa(this.K.v(this.g),.5)),t=this.nb*this.ja,this.D.x=ja(this.D.x,-t,t),this.D.y=ja(this.D.y,-t,t),this.h=B((this.h.x>t||this.h.x<-t?this.h:this.D).x,(this.h.y>t||this.h.y<-t?this.h:this.D).y),t=this.h.length(),this.Sa+=3.5*this.D.length(),this.ka+=.5*t,this.ka=.01<t?(this.ka%1+1)%1:0,this.facing=this.h.angle(),this.Xb())}update(){this.Fc(),this.kc(),this.Fb();const t=B(.9999);0===this.O.x&&(t.x=.9),0===this.O.y&&(t.y=.9),this.h=this.h.multiply(t),super.update()}aa(){let t=this.g;Ib((t=t.add(B(0,.05*Math.sin(this.ka*h)))).add(B(0,.75*-this.size.y)),B(this.size.x,.2),-1,Na,new y(0,0,0,.1),this.angle,0,0),Ib(t.add(B(0,.75*-this.size.y)),B(.9*this.size.x,.1),-1,Na,new y(0,0,0,.1),this.angle,0,0),i(hb,t,this.species,this.direction,this.Sa)}}class p extends m{constructor(t){super(t),this.ec=!0,this.s=5,this.nb=.2,this.P=10,this.H=18,this.ob=100}update(){[48,49,50,51,52,53,54,55,56,57].forEach(t=>{Sb(t)&&this.Lb(t-48)}),(Sb(81)||Vb(1))&&this.throw(),(Sb(69)||Sb(0)||Vb(0))&&this.action(lb),((this.O=Ub?Xb[0]&&Xb[0][0]||B():B(Sb(39)-Sb(37),Sb(38)-Sb(40)))&&this.O.x||this.O.y)&&f.L(0),this.Ac=!0,super.update();const t=this.B;var i;t&&(i=this.la.active()?1:.7,t.W=B(this.la.active()?1.2:1),t.ga=qa(B(),this.facing,i),i=B(),0===this.direction?i=B(.35,-.1):1===this.direction?i=B(.2,-.2):7===this.direction&&(i=B(-.2,-.1)),t.ga=t.ga.add(i),t.lb=this.facing+1.2*h,t.P=t.g.y<this.g.y?11:9)}}class A extends m{constructor(t){super(t),this.hb=this.ub=!0}ya(){g("hit",this.g),this.s=0,this.Wa(),this.Pa("dead"),setTimeout(()=>this.j.N("meat",this.g,1),500),setTimeout(()=>super.ya(),4e3)}update(){super.update();const t=this.La();!this.C()&&t&&t.B&&t.B.sa&&ma(this.g,this.size,t.B.g,t.B.size)&&(f.L(2),this.ra(t.B.sa,t.B)&&t.qb(this.j.xa.zb))}}class S extends v{constructor(t){super(t),this.wa=t.wa,this.o=this.wa.o,this.fb=new Fa}update(){super.update();const t=this.La();this.C()?(this.W=B(1-Ca(this.fb)),t&&(this.g=this.g.fa(t.g,.1))):t&&ma(this.g,this.size,t.g,t.size)&&(t.qb(this.wa),this.s=0,this.fb.set(.4),setTimeout(()=>this.ya(),400))}}class E{constructor(){this.j={size:B(100,100),Jc:[],items:[],T:[],xa:{Oc:{name:"Meat",o:7,l:1,stack:64,X:"🍖"},zb:{name:"Blood",o:6,l:1,stack:64,X:"🩸"},hc:{name:"Butcher knife",type:"w",o:5,l:1,stack:8,sa:1,X:"🔪"},ac:{name:"Herb",type:"b",o:8,l:1,stack:64,Va:1,X:"🌿"},Qc:{name:"Blood wine",o:13,l:1,stack:64,vb:10,Ya:1,X:"🍷"},Nc:{name:"Meal",o:14,l:1,stack:8,vb:1,Ya:1,X:"🍲"}}},this.j.za=(...t)=>this.za(...t),this.j.N=(...t)=>this.N(...t),this.tb=[],this.$=0,this.oa=B()}pc(){const t=this.j;this.$=new p({g:this.oa.F(),j:t}),t.T.push(this.$)}N(i,s,a=0){i="string"==typeof i?this.j.xa[i]:i,s=a?s.add(B(t(-a,a),t(-a,a))):s.F(),(a=this.j).items.push(new S({wa:i,g:s,s:1,j:a}))}za(t,i){const s=this.j;s.T.push(new A({o:0,g:t,j:s,Ea:i}))}bc(){const i=this.j,s=i.size;this.oa=i.size.scale(.5);let a;for(a=20;a--;)for(var e=2;e--;)this.za(B(t(100),t(100)));const n=i=>this.oa.add(qa(B(),t(2*h),i)),r=(this.N(i.xa.hc,n(10)),[20,50,t(20,50)].forEach(t=>this.N(i.xa.ac,n(t))),hc(s.F()),new lc(s));e=new lc(gc);let c=[];for(a=40;a--;)c.push({g:B(na(s.x),na(s.y)),elevation:na(4)});{var o=i=>{var s=t(),a=.985<s,e=a&&40<ua(i,this.oa)**.5;(e||a)&&za(i,gc)&&(fc[(0|i.y)*gc.x+i.x|0]=1);let h=(a=>{let e;return c.reduce((t,i)=>{var s=ua(i.g,a)**.5;return s<t?(e=i.elevation,s):t},1/0),e})(i)+1;s<.2?h=1:s<.5&&(h=na(1,5)),e&&(h=25+na(2)),s=a&&!e?ta():void 0,r.setData(i,new ic(h,na(4),na(2),s),void 0)};const b=B();for(b.x=s.x;b.x--;)for(b.y=s.y;b.y--;)o(b,(b.x,b.y,s.x))}this.tb=[r,e],this.tb.forEach(s=>{s.canvas.width=s.size.x*s.u.x,s.canvas.height=s.size.y*s.u.y,s.zc=[K,hb,C,H],K=s.canvas,hb=s.context,C=s.size.scale(.5),H=s.u.x,tb();for(let i=s.size.x;i--;)for(let t=s.size.y;t--;)jc(s,B(i,t));vb(1),[K,hb,C,H]=s.zc})}}const W=window.Ta||24;let P,F=0,N=na;const T=(t,i,s,a,e,h=W,n=W)=>{P.fillStyle="#"+t+i+s,P.fillRect(a,e,h,n)};let I;const D=window;let Y=0;D.Ta=24;let J,G;(async()=>{Na=B(24),fb(c,o,b,l,u,await r())})()}();