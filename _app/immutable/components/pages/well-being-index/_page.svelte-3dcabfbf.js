import{S as Re,i as Ge,s as Ye,k as i,a as _,q as H,l as r,m,c as d,r as q,h as u,n as t,b as Xe,I as e,L as Ke,C as Ce,P as Qe,v as je,U as Me,x as ge,y as be,z as we,V as ze,f as Ee,t as $e,A as Ie,J as Fe,o as We,N as Ze}from"../../../chunks/index-257418f0.js";import{b as ye,a as Je,c as xe}from"../../../chunks/index-1c36e539.js";import{M as et}from"../../../chunks/MainButton-40ad1ba0.js";function tt(a){let l,h,w,E,g,f,P,z,Z,D,v,S,O,s,x,b,ee,V,$,R,ie,G,T,ae,re,L,A,le,fe,I,ue,ne,C,j,y,se,k,Y,me,B,K,F,U,M,he,X,J,te,Pe,Le;return{c(){l=i("fieldset"),h=i("p"),w=i("input"),g=_(),f=i("label"),P=H("All of the time"),Z=_(),D=i("p"),v=i("input"),O=_(),s=i("label"),x=H("Most of the time"),ee=_(),V=i("p"),$=i("input"),ie=_(),G=i("label"),T=H("More than half of the time"),re=_(),L=i("p"),A=i("input"),fe=_(),I=i("label"),ue=H("Less than half of the time"),C=_(),j=i("p"),y=i("input"),k=_(),Y=i("label"),me=H("Some of the time"),K=_(),F=i("p"),U=i("input"),he=_(),X=i("label"),J=H("At no time"),this.h()},l(p){l=r(p,"FIELDSET",{id:!0,class:!0});var o=m(l);h=r(o,"P",{class:!0});var ve=m(h);w=r(ve,"INPUT",{type:!0,id:!0,name:!0}),g=d(ve),f=r(ve,"LABEL",{for:!0});var Ae=m(f);P=q(Ae,"All of the time"),Ae.forEach(u),ve.forEach(u),Z=d(o),D=r(o,"P",{class:!0});var _e=m(D);v=r(_e,"INPUT",{type:!0,id:!0,name:!0}),O=d(_e),s=r(_e,"LABEL",{for:!0});var Ne=m(s);x=q(Ne,"Most of the time"),Ne.forEach(u),_e.forEach(u),ee=d(o),V=r(o,"P",{class:!0});var de=m(V);$=r(de,"INPUT",{type:!0,id:!0,name:!0}),ie=d(de),G=r(de,"LABEL",{for:!0});var Se=m(G);T=q(Se,"More than half of the time"),Se.forEach(u),de.forEach(u),re=d(o),L=r(o,"P",{class:!0});var n=m(L);A=r(n,"INPUT",{type:!0,id:!0,name:!0}),fe=d(n),I=r(n,"LABEL",{for:!0});var c=m(I);ue=q(c,"Less than half of the time"),c.forEach(u),n.forEach(u),C=d(o),j=r(o,"P",{class:!0});var Q=m(j);y=r(Q,"INPUT",{type:!0,id:!0,name:!0}),k=d(Q),Y=r(Q,"LABEL",{for:!0});var oe=m(Y);me=q(oe,"Some of the time"),oe.forEach(u),Q.forEach(u),K=d(o),F=r(o,"P",{class:!0});var W=m(F);U=r(W,"INPUT",{type:!0,id:!0,name:!0}),he=d(W),X=r(W,"LABEL",{for:!0});var N=m(X);J=q(N,"At no time"),N.forEach(u),W.forEach(u),o.forEach(u),this.h()},h(){t(w,"type","radio"),t(w,"id",E="all-time-"+a[0]),t(w,"name",a[0]),w.value="5",t(f,"for",z="all-time-"+a[0]),t(h,"class","svelte-1x31x4m"),t(v,"type","radio"),t(v,"id",S="most-time-"+a[0]),t(v,"name",a[0]),v.value="4",t(s,"for",b="most-time-"+a[0]),t(D,"class","svelte-1x31x4m"),t($,"type","radio"),t($,"id",R="more-half-time-"+a[0]),t($,"name",a[0]),$.value="3",t(G,"for",ae="more-half-time-"+a[0]),t(V,"class","svelte-1x31x4m"),t(A,"type","radio"),t(A,"id",le="less-half-time-"+a[0]),t(A,"name",a[0]),A.value="2",t(I,"for",ne="less-half-time-"+a[0]),t(L,"class","svelte-1x31x4m"),t(y,"type","radio"),t(y,"id",se="some-time-"+a[0]),t(y,"name",a[0]),y.value="1",t(Y,"for",B="some-time-"+a[0]),t(j,"class","svelte-1x31x4m"),t(U,"type","radio"),t(U,"id",M="no-time-"+a[0]),t(U,"name",a[0]),U.value="0",t(X,"for",te="no-time-"+a[0]),t(F,"class","svelte-1x31x4m"),t(l,"id",a[0]),t(l,"class","svelte-1x31x4m")},m(p,o){Xe(p,l,o),e(l,h),e(h,w),e(h,g),e(h,f),e(f,P),e(l,Z),e(l,D),e(D,v),e(D,O),e(D,s),e(s,x),e(l,ee),e(l,V),e(V,$),e(V,ie),e(V,G),e(G,T),e(l,re),e(l,L),e(L,A),e(L,fe),e(L,I),e(I,ue),e(l,C),e(l,j),e(j,y),e(j,k),e(j,Y),e(Y,me),e(l,K),e(l,F),e(F,U),e(F,he),e(F,X),e(X,J),Pe||(Le=Ke(l,"change",a[1]),Pe=!0)},p(p,[o]){o&1&&E!==(E="all-time-"+p[0])&&t(w,"id",E),o&1&&t(w,"name",p[0]),o&1&&z!==(z="all-time-"+p[0])&&t(f,"for",z),o&1&&S!==(S="most-time-"+p[0])&&t(v,"id",S),o&1&&t(v,"name",p[0]),o&1&&b!==(b="most-time-"+p[0])&&t(s,"for",b),o&1&&R!==(R="more-half-time-"+p[0])&&t($,"id",R),o&1&&t($,"name",p[0]),o&1&&ae!==(ae="more-half-time-"+p[0])&&t(G,"for",ae),o&1&&le!==(le="less-half-time-"+p[0])&&t(A,"id",le),o&1&&t(A,"name",p[0]),o&1&&ne!==(ne="less-half-time-"+p[0])&&t(I,"for",ne),o&1&&se!==(se="some-time-"+p[0])&&t(y,"id",se),o&1&&t(y,"name",p[0]),o&1&&B!==(B="some-time-"+p[0])&&t(Y,"for",B),o&1&&M!==(M="no-time-"+p[0])&&t(U,"id",M),o&1&&t(U,"name",p[0]),o&1&&te!==(te="no-time-"+p[0])&&t(X,"for",te),o&1&&t(l,"id",p[0])},i:Ce,o:Ce,d(p){p&&u(l),Pe=!1,Le()}}}function at(a,l,h){const w=Qe();let{name:E=Math.trunc(Math.random()*Number.MAX_SAFE_INTEGER)}=l,{value:g}=l;function f({target:P}){const z=P.id.slice(0,-2);h(2,g=Number(P.value)),w("answer",{name:E,id:z,value:g})}return a.$$set=P=>{"name"in P&&h(0,E=P.name),"value"in P&&h(2,g=P.value)},[E,f,g]}class De extends Re{constructor(l){super(),Ge(this,l,at,tt,Ye,{name:0,value:2})}}function lt(a){let l,h,w,E,g,f,P,z,Z,D,v,S,O,s,x,b,ee,V,$,R,ie,G,T,ae,re,L,A,le,fe,I,ue,ne,C,j,y,se,k,Y,me,B,K,F,U,M,he,X,J,te;function Pe(n){a[4](n)}let Le={name:"1"};a[0][0]!==void 0&&(Le.value=a[0][0]),b=new De({props:Le}),je.push(()=>Me(b,"value",Pe)),b.$on("answer",a[2]);function p(n){a[5](n)}let o={name:"2"};a[0][1]!==void 0&&(o.value=a[0][1]),T=new De({props:o}),je.push(()=>Me(T,"value",p)),T.$on("answer",a[2]);function ve(n){a[6](n)}let Ae={name:"3"};a[0][2]!==void 0&&(Ae.value=a[0][2]),I=new De({props:Ae}),je.push(()=>Me(I,"value",ve)),I.$on("answer",a[2]);function _e(n){a[7](n)}let Ne={name:"4"};a[0][3]!==void 0&&(Ne.value=a[0][3]),k=new De({props:Ne}),je.push(()=>Me(k,"value",_e)),k.$on("answer",a[2]);function de(n){a[8](n)}let Se={name:"5"};return a[0][4]!==void 0&&(Se.value=a[0][4]),M=new De({props:Se}),je.push(()=>Me(M,"value",de)),M.$on("answer",a[2]),J=new et({props:{text:a[1]?"FINISH":"",visible:a[1],onClick:a[3]}}),{c(){l=i("section"),h=i("h3"),w=H("Step 13 of 13"),E=_(),g=i("p"),f=H("You are on the final step."),P=_(),z=i("p"),Z=H(`Please indicate for each of the five statements which is closet to how you
    have been feeling over the last two weeks.`),D=_(),v=i("form"),S=i("div"),O=i("h3"),s=H("1) I have felt cheerful and in good spirits"),x=_(),ge(b.$$.fragment),V=_(),$=i("div"),R=i("h3"),ie=H("2) I have felt calm and relaxed"),G=_(),ge(T.$$.fragment),re=_(),L=i("div"),A=i("h3"),le=H("3) I have felt active and vigorous"),fe=_(),ge(I.$$.fragment),ne=_(),C=i("div"),j=i("h3"),y=H("4) I woke up feeling fresh and rested"),se=_(),ge(k.$$.fragment),me=_(),B=i("div"),K=i("h3"),F=H("5) My daily life has been filled with things that interest me"),U=_(),ge(M.$$.fragment),X=_(),ge(J.$$.fragment),this.h()},l(n){l=r(n,"SECTION",{});var c=m(l);h=r(c,"H3",{});var Q=m(h);w=q(Q,"Step 13 of 13"),Q.forEach(u),E=d(c),g=r(c,"P",{});var oe=m(g);f=q(oe,"You are on the final step."),oe.forEach(u),P=d(c),z=r(c,"P",{});var W=m(z);Z=q(W,`Please indicate for each of the five statements which is closet to how you
    have been feeling over the last two weeks.`),W.forEach(u),D=d(c),v=r(c,"FORM",{class:!0});var N=m(v);S=r(N,"DIV",{class:!0});var pe=m(S);O=r(pe,"H3",{class:!0});var ce=m(O);s=q(ce,"1) I have felt cheerful and in good spirits"),ce.forEach(u),x=d(pe),be(b.$$.fragment,pe),pe.forEach(u),V=d(N),$=r(N,"DIV",{class:!0});var Te=m($);R=r(Te,"H3",{class:!0});var Be=m(R);ie=q(Be,"2) I have felt calm and relaxed"),Be.forEach(u),G=d(Te),be(T.$$.fragment,Te),Te.forEach(u),re=d(N),L=r(N,"DIV",{class:!0});var ke=m(L);A=r(ke,"H3",{class:!0});var Ue=m(A);le=q(Ue,"3) I have felt active and vigorous"),Ue.forEach(u),fe=d(ke),be(I.$$.fragment,ke),ke.forEach(u),ne=d(N),C=r(N,"DIV",{class:!0});var He=m(C);j=r(He,"H3",{class:!0});var Oe=m(j);y=q(Oe,"4) I woke up feeling fresh and rested"),Oe.forEach(u),se=d(He),be(k.$$.fragment,He),He.forEach(u),me=d(N),B=r(N,"DIV",{class:!0});var qe=m(B);K=r(qe,"H3",{class:!0});var Ve=m(K);F=q(Ve,"5) My daily life has been filled with things that interest me"),Ve.forEach(u),U=d(qe),be(M.$$.fragment,qe),qe.forEach(u),N.forEach(u),X=d(c),be(J.$$.fragment,c),c.forEach(u),this.h()},h(){t(O,"class","svelte-1w0jzf1"),t(S,"class","svelte-1w0jzf1"),t(R,"class","svelte-1w0jzf1"),t($,"class","svelte-1w0jzf1"),t(A,"class","svelte-1w0jzf1"),t(L,"class","svelte-1w0jzf1"),t(j,"class","svelte-1w0jzf1"),t(C,"class","svelte-1w0jzf1"),t(K,"class","svelte-1w0jzf1"),t(B,"class","svelte-1w0jzf1"),t(v,"class","svelte-1w0jzf1")},m(n,c){Xe(n,l,c),e(l,h),e(h,w),e(l,E),e(l,g),e(g,f),e(l,P),e(l,z),e(z,Z),e(l,D),e(l,v),e(v,S),e(S,O),e(O,s),e(S,x),we(b,S,null),e(v,V),e(v,$),e($,R),e(R,ie),e($,G),we(T,$,null),e(v,re),e(v,L),e(L,A),e(A,le),e(L,fe),we(I,L,null),e(v,ne),e(v,C),e(C,j),e(j,y),e(C,se),we(k,C,null),e(v,me),e(v,B),e(B,K),e(K,F),e(B,U),we(M,B,null),e(l,X),we(J,l,null),te=!0},p(n,[c]){const Q={};!ee&&c&1&&(ee=!0,Q.value=n[0][0],ze(()=>ee=!1)),b.$set(Q);const oe={};!ae&&c&1&&(ae=!0,oe.value=n[0][1],ze(()=>ae=!1)),T.$set(oe);const W={};!ue&&c&1&&(ue=!0,W.value=n[0][2],ze(()=>ue=!1)),I.$set(W);const N={};!Y&&c&1&&(Y=!0,N.value=n[0][3],ze(()=>Y=!1)),k.$set(N);const pe={};!he&&c&1&&(he=!0,pe.value=n[0][4],ze(()=>he=!1)),M.$set(pe);const ce={};c&2&&(ce.text=n[1]?"FINISH":""),c&2&&(ce.visible=n[1]),J.$set(ce)},i(n){te||(Ee(b.$$.fragment,n),Ee(T.$$.fragment,n),Ee(I.$$.fragment,n),Ee(k.$$.fragment,n),Ee(M.$$.fragment,n),Ee(J.$$.fragment,n),te=!0)},o(n){$e(b.$$.fragment,n),$e(T.$$.fragment,n),$e(I.$$.fragment,n),$e(k.$$.fragment,n),$e(M.$$.fragment,n),$e(J.$$.fragment,n),te=!1},d(n){n&&u(l),Ie(b),Ie(T),Ie(I),Ie(k),Ie(M),Ie(J)}}}function nt(a,l,h){let w,E,g;Fe(a,xe,s=>h(9,E=s)),Fe(a,Je,s=>h(10,g=s));const f=[null,null,null,null,null];We(()=>ye("well-being-index|start"));function P({detail:s}){ye("well-being-index|answer",s)}function z(s){ye("well-being-index|finish"),Ze(Je,g={...g,["well-being-index"]:f},g);try{const b=JSON.stringify({answers:g,logs:E});s.sendData(b)}catch{const b={answers:g,logs:[E[0],[null,"ERASED"],E[E.length-1]]},ee=JSON.stringify(b);s.sendData(ee)}}function Z(s){a.$$.not_equal(f[0],s)&&(f[0]=s,h(0,f))}function D(s){a.$$.not_equal(f[1],s)&&(f[1]=s,h(0,f))}function v(s){a.$$.not_equal(f[2],s)&&(f[2]=s,h(0,f))}function S(s){a.$$.not_equal(f[3],s)&&(f[3]=s,h(0,f))}function O(s){a.$$.not_equal(f[4],s)&&(f[4]=s,h(0,f))}return a.$$.update=()=>{a.$$.dirty&1&&h(1,w=f.every(s=>s!==null))},[f,w,P,z,Z,D,v,S,O]}class rt extends Re{constructor(l){super(),Ge(this,l,nt,lt,Ye,{})}}export{rt as default};
