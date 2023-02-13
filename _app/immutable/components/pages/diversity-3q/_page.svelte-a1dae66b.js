import{S as Vr,i as Qr,s as Yr,k as a,q as _,a as o,x as Xr,l,m as i,r as d,h as r,c as u,y as Zr,n as t,p as $r,b as il,I as e,K as nl,z as xr,L as Lt,u as h,f as es,t as ts,A as as,M as ls,J as Kr,o as rs,N as ss,v as is}from"../../../chunks/index-257418f0.js";import{b as ns}from"../../../chunks/paths-c0de9dde.js";import{b as pr,a as Rr,l as os}from"../../../chunks/index-1c36e539.js";import{M as us}from"../../../chunks/MainButton-40ad1ba0.js";const s={en:{step:"Step",of:"of",introduction:"Towards greater diversity, inclusion and equity we are asking you to provide general information about gender,  ethics and race. It will help us establish measure towards greater diversity, inclusion and equity. Your responses will not be visible outside.",which_gender:"With which gender do you identify most?",choose_option:"Choose one option.",woman:"Woman",man:"Man",non_binary:"Non-binary or gender diverse",not_to_disclose:"I prefer not to disclose",what_ethnic:"What are your ethnic origins or ancestry?",select_all_areas:"Select all geographic areas from which your ancestors first originated.",self_describe:"Self describe",western_europe:"Western Europe (e.g., Greece, Sweden, United Kingdom)",eastern_europe:"Eastern Europe (e.g., Hungary, Poland, Russia)",north_africa:"North Africa (e.g., Egypt, Morocco, Sudan)",sub_saharan_africa:"Sub-Saharan Africa (e.g., Kenya, Nigeria, South Africa)",west_asia:"West Asia / Middle East (e.g., Iran, Israel, Saudi Arabia)",south_asia:"South and Southeast Asia (e.g., India, Indonesia, Singapore)",east_asia:"East and Central Asia (e.g., China, Japan, Uzbekistan)",pacific:"Pacific / Oceania (e.g., Australia, Fiji, Papua New Guinea)",north_america:"North America (Canada, United States)",central_america:"Central America and Caribbean (e.g., Jamaica, Mexico, Panama)",south_america:"South America (e.g., Brazil, Chile, Colombia)",how_identify:"How would you identify yourself in terms of race?",select_all_groups:"Select all groups that apply to you.",asian_or_pacific_islander:"Asian or Pacific Islander",black:"Black",hispanic_or_latino:"Hispanic or Latino/a/x",indigenous:"Indigenous (e.g., North American Indian Navajo, South American Indian Quechua, Aboriginal or Torres Strait Islander)",middle_eastern_or_north_african:"Middle Eastern or North African",white:"White",continue:"CONTINUE"},ru:{step:"Шаг",of:"из",introduction:"В целях большего разнообразия, интеграции и справедливости мы просим вас предоставить общую информацию о поле, происхождении и расе. Это поможет нам установить меру для большего разнообразия, инклюзивности и справедливости. Ваши ответы не будут видны посторонним.",which_gender:"С каким полом вы больше всего себя ассоциируете?",choose_option:"Выберите один вариант.",woman:"Женщина",man:"Мужчина",non_binary:"Не бинарный или гендерфлюид",not_to_disclose:"Предпочитаю не сообщать",what_ethnic:"Каково этническое происхождение у вас или у ваших предков?",select_all_areas:"Выберите все географические районы, из которых произошли ваши предки.",self_describe:"Другое",western_europe:"Западная Европа (например, Греция, Швеция, Великобритания)",eastern_europe:"Восточная Европа (например, Венгрия, Польша, Россия)",north_africa:"Северная Африка (например, Египет, Марокко, Судан)",sub_saharan_africa:"Африка к югу от Сахары (например, Кения, Нигерия, Южная Африка)",west_asia:"Западная Азия/Ближний Восток (например, Иран, Израиль, Саудовская Аравия)",south_asia:"Южная и Юго-Восточная Азия (например, Индия, Индонезия, Сингапур)",east_asia:"Восточная и Центральная Азия (например, Китай, Япония, Узбекистан)",pacific:"Тихий океан / Океания (например, Австралия, Фиджи, Папуа-Новая Гвинея)",north_america:"Северная Америка (Канада, США)",central_america:"Центральная Америка и Карибский бассейн (например, Ямайка, Мексика, Панама)",south_america:"Южная Америка (например, Бразилия, Чили, Колумбия)",how_identify:"Как бы вы определили себя с точки зрения расы?",select_all_groups:"Выберите все группы, которые относятся к вам.",asian_or_pacific_islander:"Житель азиатских или тихоокеанских островов",black:"Черный",hispanic_or_latino:"Латиноамериканец",indigenous:"Коренные жители (например, североамериканские индейцы навахо, южноамериканские индейцы кечуа, аборигены или жители островов Торресова пролива)",middle_eastern_or_north_african:"Ближний Восток или Северная Африка",white:"Белый",continue:"ПРОДОЛЖИТЬ"}};function cs(c){let I,y,W=s[c[3]].step+"",O,he,B=s[c[3]].of+"",fe,g,D,_e,de=s[c[3]].introduction+"",be,wt,N,k,v,L=s[c[3]].which_gender+"",q,me,ve,It=s[c[3]].choose_option+"",la,ol,w,F,Ee,ul,ge,At=s[c[3]].woman+"",ra,cl,j,ye,pl,Pe,Nt=s[c[3]].man+"",sa,fl,z,Le,_l,we,kt=s[c[3]].non_binary+"",ia,dl,G,Ie,hl,Ae,Tt=s[c[3]].not_to_disclose+"",na,bl,U,Bt,Ut=s[c[3]].what_ethnic+"",oa,ml,Ne,St=s[c[3]].select_all_areas+"",ua,vl,b,J,ke,El,Te,Ct=s[c[3]].western_europe+"",ca,gl,K,Be,yl,Ue,Mt=s[c[3]].eastern_europe+"",pa,Pl,R,Se,Ll,Ce,Wt=s[c[3]].north_africa+"",fa,wl,V,Me,Il,We,Ht=s[c[3]].sub_saharan_africa+"",_a,Al,Q,He,Nl,Oe,Ot=s[c[3]].west_asia+"",da,kl,Y,De,Tl,qe,Dt=s[c[3]].south_asia+"",ha,Bl,X,Fe,Ul,je,qt=s[c[3]].east_asia+"",ba,Sl,Z,ze,Cl,Ge,Ft=s[c[3]].pacific+"",ma,Ml,$,Je,Wl,Ke,jt=s[c[3]].north_america+"",va,Hl,x,Re,Ol,Ve,zt=s[c[3]].central_america+"",Ea,Dl,ee,Qe,ql,Ye,Gt=s[c[3]].south_america+"",ga,Fl,S,Xe,jl,Ze,Jt=s[c[3]].self_describe+"",ya,zl,T,Pa,Gl,te,$e,Jl,xe,Kt=s[c[3]].not_to_disclose+"",La,Kl,C,Rt,Vt=s[c[3]].how_identify+"",wa,Rl,et,Qt=s[c[3]].select_all_groups+"",Ia,Vl,E,ae,tt,Ql,at,Yt=s[c[3]].asian_or_pacific_islander+"",Aa,Yl,le,lt,Xl,rt,Xt=s[c[3]].black+"",Na,Zl,re,st,$l,it,Zt=s[c[3]].hispanic_or_latino+"",ka,xl,se,nt,er,ot,$t=s[c[3]].indigenous+"",Ta,tr,ie,ut,ar,ct,xt=s[c[3]].middle_eastern_or_north_african+"",Ba,lr,ne,pt,rr,ft,ea=s[c[3]].white+"",Ua,sr,M,_t,ir,dt,ta=s[c[3]].self_describe+"",Sa,nr,A,Ca,or,oe,ht,ur,bt,aa=s[c[3]].not_to_disclose+"",Ma,Wa,ue,Ha,ce,f,cr,fr;return ce=new us({props:{text:s[c[3]].continue,visible:c[2],onClick:c[6]}}),{c(){I=a("section"),y=a("h3"),O=_(W),he=_(" 1 "),fe=_(B),g=_(" 13"),D=o(),_e=a("p"),be=_(de),wt=o(),N=a("form"),k=a("div"),v=a("h3"),q=_(L),me=o(),ve=a("p"),la=_(It),ol=o(),w=a("fieldset"),F=a("p"),Ee=a("input"),ul=o(),ge=a("label"),ra=_(At),cl=o(),j=a("p"),ye=a("input"),pl=o(),Pe=a("label"),sa=_(Nt),fl=o(),z=a("p"),Le=a("input"),_l=o(),we=a("label"),ia=_(kt),dl=o(),G=a("p"),Ie=a("input"),hl=o(),Ae=a("label"),na=_(Tt),bl=o(),U=a("div"),Bt=a("h3"),oa=_(Ut),ml=o(),Ne=a("p"),ua=_(St),vl=o(),b=a("fieldset"),J=a("p"),ke=a("input"),El=o(),Te=a("label"),ca=_(Ct),gl=o(),K=a("p"),Be=a("input"),yl=o(),Ue=a("label"),pa=_(Mt),Pl=o(),R=a("p"),Se=a("input"),Ll=o(),Ce=a("label"),fa=_(Wt),wl=o(),V=a("p"),Me=a("input"),Il=o(),We=a("label"),_a=_(Ht),Al=o(),Q=a("p"),He=a("input"),Nl=o(),Oe=a("label"),da=_(Ot),kl=o(),Y=a("p"),De=a("input"),Tl=o(),qe=a("label"),ha=_(Dt),Bl=o(),X=a("p"),Fe=a("input"),Ul=o(),je=a("label"),ba=_(qt),Sl=o(),Z=a("p"),ze=a("input"),Cl=o(),Ge=a("label"),ma=_(Ft),Ml=o(),$=a("p"),Je=a("input"),Wl=o(),Ke=a("label"),va=_(jt),Hl=o(),x=a("p"),Re=a("input"),Ol=o(),Ve=a("label"),Ea=_(zt),Dl=o(),ee=a("p"),Qe=a("input"),ql=o(),Ye=a("label"),ga=_(Gt),Fl=o(),S=a("p"),Xe=a("input"),jl=o(),Ze=a("label"),ya=_(Jt),zl=o(),T=a("input"),Gl=o(),te=a("p"),$e=a("input"),Jl=o(),xe=a("label"),La=_(Kt),Kl=o(),C=a("div"),Rt=a("h3"),wa=_(Vt),Rl=o(),et=a("p"),Ia=_(Qt),Vl=o(),E=a("fieldset"),ae=a("p"),tt=a("input"),Ql=o(),at=a("label"),Aa=_(Yt),Yl=o(),le=a("p"),lt=a("input"),Xl=o(),rt=a("label"),Na=_(Xt),Zl=o(),re=a("p"),st=a("input"),$l=o(),it=a("label"),ka=_(Zt),xl=o(),se=a("p"),nt=a("input"),er=o(),ot=a("label"),Ta=_($t),tr=o(),ie=a("p"),ut=a("input"),ar=o(),ct=a("label"),Ba=_(xt),lr=o(),ne=a("p"),pt=a("input"),rr=o(),ft=a("label"),Ua=_(ea),sr=o(),M=a("p"),_t=a("input"),ir=o(),dt=a("label"),Sa=_(ta),nr=o(),A=a("input"),or=o(),oe=a("p"),ht=a("input"),ur=o(),bt=a("label"),Ma=_(aa),Wa=o(),ue=a("a"),Ha=o(),Xr(ce.$$.fragment),this.h()},l(n){I=l(n,"SECTION",{});var p=i(I);y=l(p,"H3",{});var H=i(y);O=d(H,W),he=d(H," 1 "),fe=d(H,B),g=d(H," 13"),H.forEach(r),D=u(p),_e=l(p,"P",{});var _r=i(_e);be=d(_r,de),_r.forEach(r),wt=u(p),N=l(p,"FORM",{class:!0});var mt=i(N);k=l(mt,"DIV",{class:!0});var vt=i(k);v=l(vt,"H3",{});var dr=i(v);q=d(dr,L),dr.forEach(r),me=u(vt),ve=l(vt,"P",{class:!0});var hr=i(ve);la=d(hr,It),hr.forEach(r),ol=u(vt),w=l(vt,"FIELDSET",{id:!0,class:!0});var pe=i(w);F=l(pe,"P",{class:!0});var Oa=i(F);Ee=l(Oa,"INPUT",{type:!0,id:!0,name:!0}),ul=u(Oa),ge=l(Oa,"LABEL",{for:!0});var br=i(ge);ra=d(br,At),br.forEach(r),Oa.forEach(r),cl=u(pe),j=l(pe,"P",{class:!0});var Da=i(j);ye=l(Da,"INPUT",{type:!0,id:!0,name:!0}),pl=u(Da),Pe=l(Da,"LABEL",{for:!0});var mr=i(Pe);sa=d(mr,Nt),mr.forEach(r),Da.forEach(r),fl=u(pe),z=l(pe,"P",{class:!0});var qa=i(z);Le=l(qa,"INPUT",{type:!0,id:!0,name:!0}),_l=u(qa),we=l(qa,"LABEL",{for:!0});var vr=i(we);ia=d(vr,kt),vr.forEach(r),qa.forEach(r),dl=u(pe),G=l(pe,"P",{class:!0});var Fa=i(G);Ie=l(Fa,"INPUT",{type:!0,id:!0,name:!0}),hl=u(Fa),Ae=l(Fa,"LABEL",{for:!0});var Er=i(Ae);na=d(Er,Tt),Er.forEach(r),Fa.forEach(r),pe.forEach(r),vt.forEach(r),bl=u(mt),U=l(mt,"DIV",{class:!0});var Et=i(U);Bt=l(Et,"H3",{});var gr=i(Bt);oa=d(gr,Ut),gr.forEach(r),ml=u(Et),Ne=l(Et,"P",{class:!0});var yr=i(Ne);ua=d(yr,St),yr.forEach(r),vl=u(Et),b=l(Et,"FIELDSET",{id:!0,class:!0});var m=i(b);J=l(m,"P",{class:!0});var ja=i(J);ke=l(ja,"INPUT",{type:!0,id:!0,name:!0}),El=u(ja),Te=l(ja,"LABEL",{for:!0});var Pr=i(Te);ca=d(Pr,Ct),Pr.forEach(r),ja.forEach(r),gl=u(m),K=l(m,"P",{class:!0});var za=i(K);Be=l(za,"INPUT",{type:!0,id:!0,name:!0}),yl=u(za),Ue=l(za,"LABEL",{for:!0});var Lr=i(Ue);pa=d(Lr,Mt),Lr.forEach(r),za.forEach(r),Pl=u(m),R=l(m,"P",{class:!0});var Ga=i(R);Se=l(Ga,"INPUT",{type:!0,id:!0,name:!0}),Ll=u(Ga),Ce=l(Ga,"LABEL",{for:!0});var wr=i(Ce);fa=d(wr,Wt),wr.forEach(r),Ga.forEach(r),wl=u(m),V=l(m,"P",{class:!0});var Ja=i(V);Me=l(Ja,"INPUT",{type:!0,id:!0,name:!0}),Il=u(Ja),We=l(Ja,"LABEL",{for:!0});var Ir=i(We);_a=d(Ir,Ht),Ir.forEach(r),Ja.forEach(r),Al=u(m),Q=l(m,"P",{class:!0});var Ka=i(Q);He=l(Ka,"INPUT",{type:!0,id:!0,name:!0}),Nl=u(Ka),Oe=l(Ka,"LABEL",{for:!0});var Ar=i(Oe);da=d(Ar,Ot),Ar.forEach(r),Ka.forEach(r),kl=u(m),Y=l(m,"P",{class:!0});var Ra=i(Y);De=l(Ra,"INPUT",{type:!0,id:!0,name:!0}),Tl=u(Ra),qe=l(Ra,"LABEL",{for:!0});var Nr=i(qe);ha=d(Nr,Dt),Nr.forEach(r),Ra.forEach(r),Bl=u(m),X=l(m,"P",{class:!0});var Va=i(X);Fe=l(Va,"INPUT",{type:!0,id:!0,name:!0}),Ul=u(Va),je=l(Va,"LABEL",{for:!0});var kr=i(je);ba=d(kr,qt),kr.forEach(r),Va.forEach(r),Sl=u(m),Z=l(m,"P",{class:!0});var Qa=i(Z);ze=l(Qa,"INPUT",{type:!0,id:!0,name:!0}),Cl=u(Qa),Ge=l(Qa,"LABEL",{for:!0});var Tr=i(Ge);ma=d(Tr,Ft),Tr.forEach(r),Qa.forEach(r),Ml=u(m),$=l(m,"P",{class:!0});var Ya=i($);Je=l(Ya,"INPUT",{type:!0,id:!0,name:!0}),Wl=u(Ya),Ke=l(Ya,"LABEL",{for:!0});var Br=i(Ke);va=d(Br,jt),Br.forEach(r),Ya.forEach(r),Hl=u(m),x=l(m,"P",{class:!0});var Xa=i(x);Re=l(Xa,"INPUT",{type:!0,id:!0,name:!0}),Ol=u(Xa),Ve=l(Xa,"LABEL",{for:!0});var Ur=i(Ve);Ea=d(Ur,zt),Ur.forEach(r),Xa.forEach(r),Dl=u(m),ee=l(m,"P",{class:!0});var Za=i(ee);Qe=l(Za,"INPUT",{type:!0,id:!0,name:!0}),ql=u(Za),Ye=l(Za,"LABEL",{for:!0});var Sr=i(Ye);ga=d(Sr,Gt),Sr.forEach(r),Za.forEach(r),Fl=u(m),S=l(m,"P",{class:!0});var gt=i(S);Xe=l(gt,"INPUT",{type:!0,id:!0,name:!0}),jl=u(gt),Ze=l(gt,"LABEL",{for:!0});var Cr=i(Ze);ya=d(Cr,Jt),Cr.forEach(r),zl=u(gt),T=l(gt,"INPUT",{class:!0,name:!0,maxlength:!0}),gt.forEach(r),Gl=u(m),te=l(m,"P",{class:!0});var $a=i(te);$e=l($a,"INPUT",{type:!0,id:!0,name:!0}),Jl=u($a),xe=l($a,"LABEL",{for:!0});var Mr=i(xe);La=d(Mr,Kt),Mr.forEach(r),$a.forEach(r),m.forEach(r),Et.forEach(r),Kl=u(mt),C=l(mt,"DIV",{class:!0});var yt=i(C);Rt=l(yt,"H3",{});var Wr=i(Rt);wa=d(Wr,Vt),Wr.forEach(r),Rl=u(yt),et=l(yt,"P",{class:!0});var Hr=i(et);Ia=d(Hr,Qt),Hr.forEach(r),Vl=u(yt),E=l(yt,"FIELDSET",{id:!0,class:!0});var P=i(E);ae=l(P,"P",{class:!0});var xa=i(ae);tt=l(xa,"INPUT",{type:!0,id:!0,name:!0}),Ql=u(xa),at=l(xa,"LABEL",{for:!0});var Or=i(at);Aa=d(Or,Yt),Or.forEach(r),xa.forEach(r),Yl=u(P),le=l(P,"P",{class:!0});var el=i(le);lt=l(el,"INPUT",{type:!0,id:!0,name:!0}),Xl=u(el),rt=l(el,"LABEL",{for:!0});var Dr=i(rt);Na=d(Dr,Xt),Dr.forEach(r),el.forEach(r),Zl=u(P),re=l(P,"P",{class:!0});var tl=i(re);st=l(tl,"INPUT",{type:!0,id:!0,name:!0}),$l=u(tl),it=l(tl,"LABEL",{for:!0});var qr=i(it);ka=d(qr,Zt),qr.forEach(r),tl.forEach(r),xl=u(P),se=l(P,"P",{class:!0});var al=i(se);nt=l(al,"INPUT",{type:!0,id:!0,name:!0}),er=u(al),ot=l(al,"LABEL",{for:!0});var Fr=i(ot);Ta=d(Fr,$t),Fr.forEach(r),al.forEach(r),tr=u(P),ie=l(P,"P",{class:!0});var ll=i(ie);ut=l(ll,"INPUT",{type:!0,id:!0,name:!0}),ar=u(ll),ct=l(ll,"LABEL",{for:!0});var jr=i(ct);Ba=d(jr,xt),jr.forEach(r),ll.forEach(r),lr=u(P),ne=l(P,"P",{class:!0});var rl=i(ne);pt=l(rl,"INPUT",{type:!0,id:!0,name:!0}),rr=u(rl),ft=l(rl,"LABEL",{for:!0});var zr=i(ft);Ua=d(zr,ea),zr.forEach(r),rl.forEach(r),sr=u(P),M=l(P,"P",{class:!0});var Pt=i(M);_t=l(Pt,"INPUT",{type:!0,id:!0,name:!0}),ir=u(Pt),dt=l(Pt,"LABEL",{for:!0});var Gr=i(dt);Sa=d(Gr,ta),Gr.forEach(r),nr=u(Pt),A=l(Pt,"INPUT",{class:!0,name:!0,maxlength:!0}),Pt.forEach(r),or=u(P),oe=l(P,"P",{class:!0});var sl=i(oe);ht=l(sl,"INPUT",{type:!0,id:!0,name:!0}),ur=u(sl),bt=l(sl,"LABEL",{for:!0});var Jr=i(bt);Ma=d(Jr,aa),Jr.forEach(r),sl.forEach(r),P.forEach(r),yt.forEach(r),mt.forEach(r),p.forEach(r),Wa=u(n),ue=l(n,"A",{href:!0}),i(ue).forEach(r),Ha=u(n),Zr(ce.$$.fragment,n),this.h()},h(){t(ve,"class","svelte-4miyne"),t(Ee,"type","radio"),t(Ee,"id","woman"),t(Ee,"name","gender"),t(ge,"for","woman"),t(F,"class","svelte-4miyne"),t(ye,"type","radio"),t(ye,"id","man"),t(ye,"name","gender"),t(Pe,"for","man"),t(j,"class","svelte-4miyne"),t(Le,"type","radio"),t(Le,"id","non-binary"),t(Le,"name","gender"),t(we,"for","non-binary"),t(z,"class","svelte-4miyne"),t(Ie,"type","radio"),t(Ie,"id","not-disclose-gender"),t(Ie,"name","gender"),t(Ae,"for","not-disclose-gender"),t(G,"class","svelte-4miyne"),t(w,"id","gender"),t(w,"class","svelte-4miyne"),t(k,"class","svelte-4miyne"),t(Ne,"class","svelte-4miyne"),t(ke,"type","checkbox"),t(ke,"id","western-europe"),t(ke,"name","origins"),t(Te,"for","western-europe"),t(J,"class","svelte-4miyne"),t(Be,"type","checkbox"),t(Be,"id","eastern-europe"),t(Be,"name","origins"),t(Ue,"for","eastern-europe"),t(K,"class","svelte-4miyne"),t(Se,"type","checkbox"),t(Se,"id","north-africa"),t(Se,"name","origins"),t(Ce,"for","north-africa"),t(R,"class","svelte-4miyne"),t(Me,"type","checkbox"),t(Me,"id","sub-saharan-africa"),t(Me,"name","origins"),t(We,"for","sub-saharan-africa"),t(V,"class","svelte-4miyne"),t(He,"type","checkbox"),t(He,"id","west-asia"),t(He,"name","origins"),t(Oe,"for","west-asia"),t(Q,"class","svelte-4miyne"),t(De,"type","checkbox"),t(De,"id","south-asia"),t(De,"name","origins"),t(qe,"for","south-asia"),t(Y,"class","svelte-4miyne"),t(Fe,"type","checkbox"),t(Fe,"id","east-asia"),t(Fe,"name","origins"),t(je,"for","east-asia"),t(X,"class","svelte-4miyne"),t(ze,"type","checkbox"),t(ze,"id","pacific"),t(ze,"name","origins"),t(Ge,"for","pacific"),t(Z,"class","svelte-4miyne"),t(Je,"type","checkbox"),t(Je,"id","north-america"),t(Je,"name","origins"),t(Ke,"for","north-america"),t($,"class","svelte-4miyne"),t(Re,"type","checkbox"),t(Re,"id","central-america"),t(Re,"name","origins"),t(Ve,"for","central-america"),t(x,"class","svelte-4miyne"),t(Qe,"type","checkbox"),t(Qe,"id","south-america"),t(Qe,"name","origins"),t(Ye,"for","south-america"),t(ee,"class","svelte-4miyne"),t(Xe,"type","checkbox"),t(Xe,"id","self-describe-origins"),t(Xe,"name","origins"),t(Ze,"for","self-describe-origins"),t(T,"class","self-describe-value"),t(T,"name","origins"),t(T,"maxlength","30"),T.disabled=Pa=!c[0].origins["self-describe-origins"],t(S,"class","svelte-4miyne"),t($e,"type","checkbox"),t($e,"id","not-disclose-origins"),t($e,"name","origins"),t(xe,"for","not-disclose-origins"),t(te,"class","svelte-4miyne"),t(b,"id","origins"),t(b,"class","svelte-4miyne"),t(U,"class","svelte-4miyne"),t(et,"class","svelte-4miyne"),t(tt,"type","checkbox"),t(tt,"id","asian-or-pacific-islander"),t(tt,"name","race"),t(at,"for","asian-or-pacific-islander"),t(ae,"class","svelte-4miyne"),t(lt,"type","checkbox"),t(lt,"id","black"),t(lt,"name","race"),t(rt,"for","black"),t(le,"class","svelte-4miyne"),t(st,"type","checkbox"),t(st,"id","hispanic-or-latino"),t(st,"name","race"),t(it,"for","hispanic-or-latino"),t(re,"class","svelte-4miyne"),t(nt,"type","checkbox"),t(nt,"id","indigenous"),t(nt,"name","race"),t(ot,"for","indigenous"),t(se,"class","svelte-4miyne"),t(ut,"type","checkbox"),t(ut,"id","middle-eastern-or-north-african"),t(ut,"name","race"),t(ct,"for","middle-eastern-or-north-african"),t(ie,"class","svelte-4miyne"),t(pt,"type","checkbox"),t(pt,"id","white"),t(pt,"name","race"),t(ft,"for","white"),t(ne,"class","svelte-4miyne"),t(_t,"type","checkbox"),t(_t,"id","self-describe-race"),t(_t,"name","race"),t(dt,"for","self-describe-race"),t(A,"class","self-describe-value"),t(A,"name","race"),t(A,"maxlength","30"),A.disabled=Ca=!c[0].race["self-describe-race"],t(M,"class","svelte-4miyne"),t(ht,"type","checkbox"),t(ht,"id","not-disclose-race"),t(ht,"name","race"),t(bt,"for","not-disclose-race"),t(oe,"class","svelte-4miyne"),t(E,"id","race"),t(E,"class","svelte-4miyne"),t(C,"class","svelte-4miyne"),t(N,"class","svelte-4miyne"),t(ue,"href",ns+"/image-instruction"),$r(ue,"display","none")},m(n,p){il(n,I,p),e(I,y),e(y,O),e(y,he),e(y,fe),e(y,g),e(I,D),e(I,_e),e(_e,be),e(I,wt),e(I,N),e(N,k),e(k,v),e(v,q),e(k,me),e(k,ve),e(ve,la),e(k,ol),e(k,w),e(w,F),e(F,Ee),e(F,ul),e(F,ge),e(ge,ra),e(w,cl),e(w,j),e(j,ye),e(j,pl),e(j,Pe),e(Pe,sa),e(w,fl),e(w,z),e(z,Le),e(z,_l),e(z,we),e(we,ia),e(w,dl),e(w,G),e(G,Ie),e(G,hl),e(G,Ae),e(Ae,na),e(N,bl),e(N,U),e(U,Bt),e(Bt,oa),e(U,ml),e(U,Ne),e(Ne,ua),e(U,vl),e(U,b),e(b,J),e(J,ke),e(J,El),e(J,Te),e(Te,ca),e(b,gl),e(b,K),e(K,Be),e(K,yl),e(K,Ue),e(Ue,pa),e(b,Pl),e(b,R),e(R,Se),e(R,Ll),e(R,Ce),e(Ce,fa),e(b,wl),e(b,V),e(V,Me),e(V,Il),e(V,We),e(We,_a),e(b,Al),e(b,Q),e(Q,He),e(Q,Nl),e(Q,Oe),e(Oe,da),e(b,kl),e(b,Y),e(Y,De),e(Y,Tl),e(Y,qe),e(qe,ha),e(b,Bl),e(b,X),e(X,Fe),e(X,Ul),e(X,je),e(je,ba),e(b,Sl),e(b,Z),e(Z,ze),e(Z,Cl),e(Z,Ge),e(Ge,ma),e(b,Ml),e(b,$),e($,Je),e($,Wl),e($,Ke),e(Ke,va),e(b,Hl),e(b,x),e(x,Re),e(x,Ol),e(x,Ve),e(Ve,Ea),e(b,Dl),e(b,ee),e(ee,Qe),e(ee,ql),e(ee,Ye),e(Ye,ga),e(b,Fl),e(b,S),e(S,Xe),e(S,jl),e(S,Ze),e(Ze,ya),e(S,zl),e(S,T),nl(T,c[0].origins["self-describe-value"]),e(b,Gl),e(b,te),e(te,$e),e(te,Jl),e(te,xe),e(xe,La),e(N,Kl),e(N,C),e(C,Rt),e(Rt,wa),e(C,Rl),e(C,et),e(et,Ia),e(C,Vl),e(C,E),e(E,ae),e(ae,tt),e(ae,Ql),e(ae,at),e(at,Aa),e(E,Yl),e(E,le),e(le,lt),e(le,Xl),e(le,rt),e(rt,Na),e(E,Zl),e(E,re),e(re,st),e(re,$l),e(re,it),e(it,ka),e(E,xl),e(E,se),e(se,nt),e(se,er),e(se,ot),e(ot,Ta),e(E,tr),e(E,ie),e(ie,ut),e(ie,ar),e(ie,ct),e(ct,Ba),e(E,lr),e(E,ne),e(ne,pt),e(ne,rr),e(ne,ft),e(ft,Ua),e(E,sr),e(E,M),e(M,_t),e(M,ir),e(M,dt),e(dt,Sa),e(M,nr),e(M,A),nl(A,c[0].race["self-describe-value"]),e(E,or),e(E,oe),e(oe,ht),e(oe,ur),e(oe,bt),e(bt,Ma),il(n,Wa,p),il(n,ue,p),c[11](ue),il(n,Ha,p),xr(ce,n,p),f=!0,cr||(fr=[Lt(w,"change",c[4]),Lt(T,"input",c[9]),Lt(b,"change",c[4]),Lt(A,"input",c[10]),Lt(A,"change",c[5]),Lt(E,"change",c[4])],cr=!0)},p(n,[p]){(!f||p&8)&&W!==(W=s[n[3]].step+"")&&h(O,W),(!f||p&8)&&B!==(B=s[n[3]].of+"")&&h(fe,B),(!f||p&8)&&de!==(de=s[n[3]].introduction+"")&&h(be,de),(!f||p&8)&&L!==(L=s[n[3]].which_gender+"")&&h(q,L),(!f||p&8)&&It!==(It=s[n[3]].choose_option+"")&&h(la,It),(!f||p&8)&&At!==(At=s[n[3]].woman+"")&&h(ra,At),(!f||p&8)&&Nt!==(Nt=s[n[3]].man+"")&&h(sa,Nt),(!f||p&8)&&kt!==(kt=s[n[3]].non_binary+"")&&h(ia,kt),(!f||p&8)&&Tt!==(Tt=s[n[3]].not_to_disclose+"")&&h(na,Tt),(!f||p&8)&&Ut!==(Ut=s[n[3]].what_ethnic+"")&&h(oa,Ut),(!f||p&8)&&St!==(St=s[n[3]].select_all_areas+"")&&h(ua,St),(!f||p&8)&&Ct!==(Ct=s[n[3]].western_europe+"")&&h(ca,Ct),(!f||p&8)&&Mt!==(Mt=s[n[3]].eastern_europe+"")&&h(pa,Mt),(!f||p&8)&&Wt!==(Wt=s[n[3]].north_africa+"")&&h(fa,Wt),(!f||p&8)&&Ht!==(Ht=s[n[3]].sub_saharan_africa+"")&&h(_a,Ht),(!f||p&8)&&Ot!==(Ot=s[n[3]].west_asia+"")&&h(da,Ot),(!f||p&8)&&Dt!==(Dt=s[n[3]].south_asia+"")&&h(ha,Dt),(!f||p&8)&&qt!==(qt=s[n[3]].east_asia+"")&&h(ba,qt),(!f||p&8)&&Ft!==(Ft=s[n[3]].pacific+"")&&h(ma,Ft),(!f||p&8)&&jt!==(jt=s[n[3]].north_america+"")&&h(va,jt),(!f||p&8)&&zt!==(zt=s[n[3]].central_america+"")&&h(Ea,zt),(!f||p&8)&&Gt!==(Gt=s[n[3]].south_america+"")&&h(ga,Gt),(!f||p&8)&&Jt!==(Jt=s[n[3]].self_describe+"")&&h(ya,Jt),(!f||p&1&&Pa!==(Pa=!n[0].origins["self-describe-origins"]))&&(T.disabled=Pa),p&1&&T.value!==n[0].origins["self-describe-value"]&&nl(T,n[0].origins["self-describe-value"]),(!f||p&8)&&Kt!==(Kt=s[n[3]].not_to_disclose+"")&&h(La,Kt),(!f||p&8)&&Vt!==(Vt=s[n[3]].how_identify+"")&&h(wa,Vt),(!f||p&8)&&Qt!==(Qt=s[n[3]].select_all_groups+"")&&h(Ia,Qt),(!f||p&8)&&Yt!==(Yt=s[n[3]].asian_or_pacific_islander+"")&&h(Aa,Yt),(!f||p&8)&&Xt!==(Xt=s[n[3]].black+"")&&h(Na,Xt),(!f||p&8)&&Zt!==(Zt=s[n[3]].hispanic_or_latino+"")&&h(ka,Zt),(!f||p&8)&&$t!==($t=s[n[3]].indigenous+"")&&h(Ta,$t),(!f||p&8)&&xt!==(xt=s[n[3]].middle_eastern_or_north_african+"")&&h(Ba,xt),(!f||p&8)&&ea!==(ea=s[n[3]].white+"")&&h(Ua,ea),(!f||p&8)&&ta!==(ta=s[n[3]].self_describe+"")&&h(Sa,ta),(!f||p&1&&Ca!==(Ca=!n[0].race["self-describe-race"]))&&(A.disabled=Ca),p&1&&A.value!==n[0].race["self-describe-value"]&&nl(A,n[0].race["self-describe-value"]),(!f||p&8)&&aa!==(aa=s[n[3]].not_to_disclose+"")&&h(Ma,aa);const H={};p&8&&(H.text=s[n[3]].continue),p&4&&(H.visible=n[2]),ce.$set(H)},i(n){f||(es(ce.$$.fragment,n),f=!0)},o(n){ts(ce.$$.fragment,n),f=!1},d(n){n&&r(I),n&&r(Wa),n&&r(ue),c[11](null),n&&r(Ha),as(ce,n),cr=!1,ls(fr)}}}function ps(c,I,y){let W,O,he,B,fe;Kr(c,Rr,v=>y(12,B=v)),Kr(c,os,v=>y(3,fe=v));const g={gender:null,origins:{},race:{}};let D;rs(()=>pr("diversity|start"));function _e({target:{type:v,name:L,id:q,checked:me}}){pr("diversity|answer",{type:v,name:L,id:q,checked:me}),v==="radio"&&y(0,g[L]=q,g),v==="checkbox"&&y(0,g[L][q]=me,g)}function de({target:{name:v,value:L}}){pr("diversity|text"+v+"|"+L)}function be(){ss(Rr,B={...B,["diversity-3q"]:g},B),D.click()}function wt(){g.origins["self-describe-value"]=this.value,y(0,g)}function N(){g.race["self-describe-value"]=this.value,y(0,g)}function k(v){is[v?"unshift":"push"](()=>{D=v,y(1,D)})}return c.$$.update=()=>{c.$$.dirty&1&&y(8,W=Object.entries(g.origins).filter(([v])=>!v.startsWith("self-describe")).some(([v,L])=>Boolean(L))||g.origins["self-describe-origins"]&&g.origins["self-describe-value"]),c.$$.dirty&1&&y(7,O=Object.entries(g.race).filter(([v])=>!v.startsWith("self-describe")).some(([v,L])=>Boolean(L))||g.race["self-describe-race"]&&g.race["self-describe-value"]),c.$$.dirty&385&&y(2,he=Boolean(g.gender&&W&&O))},[g,D,he,fe,_e,de,be,O,W,wt,N,k]}class bs extends Vr{constructor(I){super(),Qr(this,I,ps,cs,Yr,{})}}export{bs as default};
