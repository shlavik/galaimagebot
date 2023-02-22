import{S as Rr,i as Vr,s as Qr,k as t,r as _,a as o,z as Yr,l,m as i,u as d,h as r,c as u,A as Xr,p as a,q as Zr,b as sl,I as e,K as il,B as $r,L as Pa,v as h,g as xr,d as es,C as as,M as ts,J as Jr,o as ls,N as rs,x as ss}from"../chunks/index.c9e1d74b.mjs";import{b as is}from"../chunks/paths.1669e34a.mjs";import{b as ns,a as Kr,l as os}from"../chunks/index.8dd57b2e.mjs";import{M as us}from"../chunks/MainButton.ca2e9883.mjs";const s={en:{step:"Step",of:"of",introduction:"Towards greater diversity, inclusion and equity we are asking you to provide general information about gender,  ethics and race. It will help us establish measure towards greater diversity, inclusion and equity. Your responses will not be visible outside.",which_gender:"With which gender do you identify most?",choose_option:"Choose one option.",woman:"Woman",man:"Man",non_binary:"Non-binary or gender diverse",not_to_disclose:"I prefer not to disclose",what_ethnic:"What are your ethnic origins or ancestry?",select_all_areas:"Select all geographic areas from which your ancestors first originated.",self_describe:"Self describe",western_europe:"Western Europe (e.g., Greece, Sweden, United Kingdom)",eastern_europe:"Eastern Europe (e.g., Hungary, Poland, Russia)",north_africa:"North Africa (e.g., Egypt, Morocco, Sudan)",sub_saharan_africa:"Sub-Saharan Africa (e.g., Kenya, Nigeria, South Africa)",west_asia:"West Asia / Middle East (e.g., Iran, Israel, Saudi Arabia)",south_asia:"South and Southeast Asia (e.g., India, Indonesia, Singapore)",east_asia:"East and Central Asia (e.g., China, Japan, Uzbekistan)",pacific:"Pacific / Oceania (e.g., Australia, Fiji, Papua New Guinea)",north_america:"North America (Canada, United States)",central_america:"Central America and Caribbean (e.g., Jamaica, Mexico, Panama)",south_america:"South America (e.g., Brazil, Chile, Colombia)",how_identify:"How would you identify yourself in terms of race?",select_all_groups:"Select all groups that apply to you.",asian_or_pacific_islander:"Asian or Pacific Islander",black:"Black",hispanic_or_latino:"Hispanic or Latino/a/x",indigenous:"Indigenous (e.g., North American Indian Navajo, South American Indian Quechua, Aboriginal or Torres Strait Islander)",middle_eastern_or_north_african:"Middle Eastern or North African",white:"White",continue:"CONTINUE"},ru:{step:"Шаг",of:"из",introduction:"В целях большего разнообразия, интеграции и справедливости мы просим вас предоставить общую информацию о поле, происхождении и расе. Это поможет нам установить меру для большего разнообразия, инклюзивности и справедливости. Ваши ответы не будут видны посторонним.",which_gender:"С каким полом вы больше всего себя ассоциируете?",choose_option:"Выберите один вариант.",woman:"Женщина",man:"Мужчина",non_binary:"Не бинарный или гендерфлюид",not_to_disclose:"Предпочитаю не сообщать",what_ethnic:"Каково этническое происхождение у вас или у ваших предков?",select_all_areas:"Выберите все географические районы, из которых произошли ваши предки.",self_describe:"Другое",western_europe:"Западная Европа (например, Греция, Швеция, Великобритания)",eastern_europe:"Восточная Европа (например, Венгрия, Польша, Россия)",north_africa:"Северная Африка (например, Египет, Марокко, Судан)",sub_saharan_africa:"Африка к югу от Сахары (например, Кения, Нигерия, Южная Африка)",west_asia:"Западная Азия/Ближний Восток (например, Иран, Израиль, Саудовская Аравия)",south_asia:"Южная и Юго-Восточная Азия (например, Индия, Индонезия, Сингапур)",east_asia:"Восточная и Центральная Азия (например, Китай, Япония, Узбекистан)",pacific:"Тихий океан / Океания (например, Австралия, Фиджи, Папуа-Новая Гвинея)",north_america:"Северная Америка (Канада, США)",central_america:"Центральная Америка и Карибский бассейн (например, Ямайка, Мексика, Панама)",south_america:"Южная Америка (например, Бразилия, Чили, Колумбия)",how_identify:"Как бы вы определили себя с точки зрения расы?",select_all_groups:"Выберите все группы, которые относятся к вам.",asian_or_pacific_islander:"Житель азиатских или тихоокеанских островов",black:"Черный",hispanic_or_latino:"Латиноамериканец",indigenous:"Коренные жители (например, североамериканские индейцы навахо, южноамериканские индейцы кечуа, аборигены или жители островов Торресова пролива)",middle_eastern_or_north_african:"Ближний Восток или Северная Африка",white:"Белый",continue:"ПРОДОЛЖИТЬ"}};function cs(c){let L,y,M=s[c[3]].step+"",H,de,T=s[c[3]].of+"",pe,g,O,fe,_e=s[c[3]].introduction+"",he,La,A,b,N,q=s[c[3]].which_gender+"",me,nl,be,wa=s[c[3]].choose_option+"",tt,ol,w,D,ve,ul,Ee,Ia=s[c[3]].woman+"",lt,cl,F,ge,pl,ye,Aa=s[c[3]].man+"",rt,fl,j,Pe,_l,Le,Na=s[c[3]].non_binary+"",st,dl,z,we,hl,Ie,ka=s[c[3]].not_to_disclose+"",it,ml,B,Ta,Ba=s[c[3]].what_ethnic+"",nt,bl,Ae,Ua=s[c[3]].select_all_areas+"",ot,vl,m,G,Ne,El,ke,Sa=s[c[3]].western_europe+"",ut,gl,J,Te,yl,Be,Ca=s[c[3]].eastern_europe+"",ct,Pl,K,Ue,Ll,Se,Ma=s[c[3]].north_africa+"",pt,wl,R,Ce,Il,Me,Wa=s[c[3]].sub_saharan_africa+"",ft,Al,V,We,Nl,He,Ha=s[c[3]].west_asia+"",_t,kl,Q,Oe,Tl,qe,Oa=s[c[3]].south_asia+"",dt,Bl,Y,De,Ul,Fe,qa=s[c[3]].east_asia+"",ht,Sl,X,je,Cl,ze,Da=s[c[3]].pacific+"",mt,Ml,Z,Ge,Wl,Je,Fa=s[c[3]].north_america+"",bt,Hl,$,Ke,Ol,Re,ja=s[c[3]].central_america+"",vt,ql,x,Ve,Dl,Qe,za=s[c[3]].south_america+"",Et,Fl,U,Ye,jl,Xe,Ga=s[c[3]].self_describe+"",gt,zl,k,yt,Gl,ee,Ze,Jl,$e,Ja=s[c[3]].not_to_disclose+"",Pt,Kl,S,Ka,Ra=s[c[3]].how_identify+"",Lt,Rl,xe,Va=s[c[3]].select_all_groups+"",wt,Vl,E,ae,ea,Ql,aa,Qa=s[c[3]].asian_or_pacific_islander+"",It,Yl,te,ta,Xl,la,Ya=s[c[3]].black+"",At,Zl,le,ra,$l,sa,Xa=s[c[3]].hispanic_or_latino+"",Nt,xl,re,ia,er,na,Za=s[c[3]].indigenous+"",kt,ar,se,oa,tr,ua,$a=s[c[3]].middle_eastern_or_north_african+"",Tt,lr,ie,ca,rr,pa,xa=s[c[3]].white+"",Bt,sr,C,fa,ir,_a,et=s[c[3]].self_describe+"",Ut,nr,I,St,or,ne,da,ur,ha,at=s[c[3]].not_to_disclose+"",Ct,Mt,oe,Wt,ue,f,cr,pr;return ue=new us({props:{text:s[c[3]].continue,visible:c[2],onClick:c[5]}}),{c(){L=t("section"),y=t("h3"),H=_(M),de=_(" 1 "),pe=_(T),g=_(" 13"),O=o(),fe=t("p"),he=_(_e),La=o(),A=t("form"),b=t("div"),N=t("h3"),me=_(q),nl=o(),be=t("p"),tt=_(wa),ol=o(),w=t("fieldset"),D=t("p"),ve=t("input"),ul=o(),Ee=t("label"),lt=_(Ia),cl=o(),F=t("p"),ge=t("input"),pl=o(),ye=t("label"),rt=_(Aa),fl=o(),j=t("p"),Pe=t("input"),_l=o(),Le=t("label"),st=_(Na),dl=o(),z=t("p"),we=t("input"),hl=o(),Ie=t("label"),it=_(ka),ml=o(),B=t("div"),Ta=t("h3"),nt=_(Ba),bl=o(),Ae=t("p"),ot=_(Ua),vl=o(),m=t("fieldset"),G=t("p"),Ne=t("input"),El=o(),ke=t("label"),ut=_(Sa),gl=o(),J=t("p"),Te=t("input"),yl=o(),Be=t("label"),ct=_(Ca),Pl=o(),K=t("p"),Ue=t("input"),Ll=o(),Se=t("label"),pt=_(Ma),wl=o(),R=t("p"),Ce=t("input"),Il=o(),Me=t("label"),ft=_(Wa),Al=o(),V=t("p"),We=t("input"),Nl=o(),He=t("label"),_t=_(Ha),kl=o(),Q=t("p"),Oe=t("input"),Tl=o(),qe=t("label"),dt=_(Oa),Bl=o(),Y=t("p"),De=t("input"),Ul=o(),Fe=t("label"),ht=_(qa),Sl=o(),X=t("p"),je=t("input"),Cl=o(),ze=t("label"),mt=_(Da),Ml=o(),Z=t("p"),Ge=t("input"),Wl=o(),Je=t("label"),bt=_(Fa),Hl=o(),$=t("p"),Ke=t("input"),Ol=o(),Re=t("label"),vt=_(ja),ql=o(),x=t("p"),Ve=t("input"),Dl=o(),Qe=t("label"),Et=_(za),Fl=o(),U=t("p"),Ye=t("input"),jl=o(),Xe=t("label"),gt=_(Ga),zl=o(),k=t("input"),Gl=o(),ee=t("p"),Ze=t("input"),Jl=o(),$e=t("label"),Pt=_(Ja),Kl=o(),S=t("div"),Ka=t("h3"),Lt=_(Ra),Rl=o(),xe=t("p"),wt=_(Va),Vl=o(),E=t("fieldset"),ae=t("p"),ea=t("input"),Ql=o(),aa=t("label"),It=_(Qa),Yl=o(),te=t("p"),ta=t("input"),Xl=o(),la=t("label"),At=_(Ya),Zl=o(),le=t("p"),ra=t("input"),$l=o(),sa=t("label"),Nt=_(Xa),xl=o(),re=t("p"),ia=t("input"),er=o(),na=t("label"),kt=_(Za),ar=o(),se=t("p"),oa=t("input"),tr=o(),ua=t("label"),Tt=_($a),lr=o(),ie=t("p"),ca=t("input"),rr=o(),pa=t("label"),Bt=_(xa),sr=o(),C=t("p"),fa=t("input"),ir=o(),_a=t("label"),Ut=_(et),nr=o(),I=t("input"),or=o(),ne=t("p"),da=t("input"),ur=o(),ha=t("label"),Ct=_(at),Mt=o(),oe=t("a"),Wt=o(),Yr(ue.$$.fragment),this.h()},l(n){L=l(n,"SECTION",{});var p=i(L);y=l(p,"H3",{});var W=i(y);H=d(W,M),de=d(W," 1 "),pe=d(W,T),g=d(W," 13"),W.forEach(r),O=u(p),fe=l(p,"P",{});var fr=i(fe);he=d(fr,_e),fr.forEach(r),La=u(p),A=l(p,"FORM",{class:!0});var ma=i(A);b=l(ma,"DIV",{class:!0});var ba=i(b);N=l(ba,"H3",{});var _r=i(N);me=d(_r,q),_r.forEach(r),nl=u(ba),be=l(ba,"P",{class:!0});var dr=i(be);tt=d(dr,wa),dr.forEach(r),ol=u(ba),w=l(ba,"FIELDSET",{id:!0,class:!0});var ce=i(w);D=l(ce,"P",{class:!0});var Ht=i(D);ve=l(Ht,"INPUT",{type:!0,id:!0,name:!0}),ul=u(Ht),Ee=l(Ht,"LABEL",{for:!0});var hr=i(Ee);lt=d(hr,Ia),hr.forEach(r),Ht.forEach(r),cl=u(ce),F=l(ce,"P",{class:!0});var Ot=i(F);ge=l(Ot,"INPUT",{type:!0,id:!0,name:!0}),pl=u(Ot),ye=l(Ot,"LABEL",{for:!0});var mr=i(ye);rt=d(mr,Aa),mr.forEach(r),Ot.forEach(r),fl=u(ce),j=l(ce,"P",{class:!0});var qt=i(j);Pe=l(qt,"INPUT",{type:!0,id:!0,name:!0}),_l=u(qt),Le=l(qt,"LABEL",{for:!0});var br=i(Le);st=d(br,Na),br.forEach(r),qt.forEach(r),dl=u(ce),z=l(ce,"P",{class:!0});var Dt=i(z);we=l(Dt,"INPUT",{type:!0,id:!0,name:!0}),hl=u(Dt),Ie=l(Dt,"LABEL",{for:!0});var vr=i(Ie);it=d(vr,ka),vr.forEach(r),Dt.forEach(r),ce.forEach(r),ba.forEach(r),ml=u(ma),B=l(ma,"DIV",{class:!0});var va=i(B);Ta=l(va,"H3",{});var Er=i(Ta);nt=d(Er,Ba),Er.forEach(r),bl=u(va),Ae=l(va,"P",{class:!0});var gr=i(Ae);ot=d(gr,Ua),gr.forEach(r),vl=u(va),m=l(va,"FIELDSET",{id:!0,class:!0});var v=i(m);G=l(v,"P",{class:!0});var Ft=i(G);Ne=l(Ft,"INPUT",{type:!0,id:!0,name:!0}),El=u(Ft),ke=l(Ft,"LABEL",{for:!0});var yr=i(ke);ut=d(yr,Sa),yr.forEach(r),Ft.forEach(r),gl=u(v),J=l(v,"P",{class:!0});var jt=i(J);Te=l(jt,"INPUT",{type:!0,id:!0,name:!0}),yl=u(jt),Be=l(jt,"LABEL",{for:!0});var Pr=i(Be);ct=d(Pr,Ca),Pr.forEach(r),jt.forEach(r),Pl=u(v),K=l(v,"P",{class:!0});var zt=i(K);Ue=l(zt,"INPUT",{type:!0,id:!0,name:!0}),Ll=u(zt),Se=l(zt,"LABEL",{for:!0});var Lr=i(Se);pt=d(Lr,Ma),Lr.forEach(r),zt.forEach(r),wl=u(v),R=l(v,"P",{class:!0});var Gt=i(R);Ce=l(Gt,"INPUT",{type:!0,id:!0,name:!0}),Il=u(Gt),Me=l(Gt,"LABEL",{for:!0});var wr=i(Me);ft=d(wr,Wa),wr.forEach(r),Gt.forEach(r),Al=u(v),V=l(v,"P",{class:!0});var Jt=i(V);We=l(Jt,"INPUT",{type:!0,id:!0,name:!0}),Nl=u(Jt),He=l(Jt,"LABEL",{for:!0});var Ir=i(He);_t=d(Ir,Ha),Ir.forEach(r),Jt.forEach(r),kl=u(v),Q=l(v,"P",{class:!0});var Kt=i(Q);Oe=l(Kt,"INPUT",{type:!0,id:!0,name:!0}),Tl=u(Kt),qe=l(Kt,"LABEL",{for:!0});var Ar=i(qe);dt=d(Ar,Oa),Ar.forEach(r),Kt.forEach(r),Bl=u(v),Y=l(v,"P",{class:!0});var Rt=i(Y);De=l(Rt,"INPUT",{type:!0,id:!0,name:!0}),Ul=u(Rt),Fe=l(Rt,"LABEL",{for:!0});var Nr=i(Fe);ht=d(Nr,qa),Nr.forEach(r),Rt.forEach(r),Sl=u(v),X=l(v,"P",{class:!0});var Vt=i(X);je=l(Vt,"INPUT",{type:!0,id:!0,name:!0}),Cl=u(Vt),ze=l(Vt,"LABEL",{for:!0});var kr=i(ze);mt=d(kr,Da),kr.forEach(r),Vt.forEach(r),Ml=u(v),Z=l(v,"P",{class:!0});var Qt=i(Z);Ge=l(Qt,"INPUT",{type:!0,id:!0,name:!0}),Wl=u(Qt),Je=l(Qt,"LABEL",{for:!0});var Tr=i(Je);bt=d(Tr,Fa),Tr.forEach(r),Qt.forEach(r),Hl=u(v),$=l(v,"P",{class:!0});var Yt=i($);Ke=l(Yt,"INPUT",{type:!0,id:!0,name:!0}),Ol=u(Yt),Re=l(Yt,"LABEL",{for:!0});var Br=i(Re);vt=d(Br,ja),Br.forEach(r),Yt.forEach(r),ql=u(v),x=l(v,"P",{class:!0});var Xt=i(x);Ve=l(Xt,"INPUT",{type:!0,id:!0,name:!0}),Dl=u(Xt),Qe=l(Xt,"LABEL",{for:!0});var Ur=i(Qe);Et=d(Ur,za),Ur.forEach(r),Xt.forEach(r),Fl=u(v),U=l(v,"P",{class:!0});var Ea=i(U);Ye=l(Ea,"INPUT",{type:!0,id:!0,name:!0}),jl=u(Ea),Xe=l(Ea,"LABEL",{for:!0});var Sr=i(Xe);gt=d(Sr,Ga),Sr.forEach(r),zl=u(Ea),k=l(Ea,"INPUT",{class:!0,name:!0,maxlength:!0}),Ea.forEach(r),Gl=u(v),ee=l(v,"P",{class:!0});var Zt=i(ee);Ze=l(Zt,"INPUT",{type:!0,id:!0,name:!0}),Jl=u(Zt),$e=l(Zt,"LABEL",{for:!0});var Cr=i($e);Pt=d(Cr,Ja),Cr.forEach(r),Zt.forEach(r),v.forEach(r),va.forEach(r),Kl=u(ma),S=l(ma,"DIV",{class:!0});var ga=i(S);Ka=l(ga,"H3",{});var Mr=i(Ka);Lt=d(Mr,Ra),Mr.forEach(r),Rl=u(ga),xe=l(ga,"P",{class:!0});var Wr=i(xe);wt=d(Wr,Va),Wr.forEach(r),Vl=u(ga),E=l(ga,"FIELDSET",{id:!0,class:!0});var P=i(E);ae=l(P,"P",{class:!0});var $t=i(ae);ea=l($t,"INPUT",{type:!0,id:!0,name:!0}),Ql=u($t),aa=l($t,"LABEL",{for:!0});var Hr=i(aa);It=d(Hr,Qa),Hr.forEach(r),$t.forEach(r),Yl=u(P),te=l(P,"P",{class:!0});var xt=i(te);ta=l(xt,"INPUT",{type:!0,id:!0,name:!0}),Xl=u(xt),la=l(xt,"LABEL",{for:!0});var Or=i(la);At=d(Or,Ya),Or.forEach(r),xt.forEach(r),Zl=u(P),le=l(P,"P",{class:!0});var el=i(le);ra=l(el,"INPUT",{type:!0,id:!0,name:!0}),$l=u(el),sa=l(el,"LABEL",{for:!0});var qr=i(sa);Nt=d(qr,Xa),qr.forEach(r),el.forEach(r),xl=u(P),re=l(P,"P",{class:!0});var al=i(re);ia=l(al,"INPUT",{type:!0,id:!0,name:!0}),er=u(al),na=l(al,"LABEL",{for:!0});var Dr=i(na);kt=d(Dr,Za),Dr.forEach(r),al.forEach(r),ar=u(P),se=l(P,"P",{class:!0});var tl=i(se);oa=l(tl,"INPUT",{type:!0,id:!0,name:!0}),tr=u(tl),ua=l(tl,"LABEL",{for:!0});var Fr=i(ua);Tt=d(Fr,$a),Fr.forEach(r),tl.forEach(r),lr=u(P),ie=l(P,"P",{class:!0});var ll=i(ie);ca=l(ll,"INPUT",{type:!0,id:!0,name:!0}),rr=u(ll),pa=l(ll,"LABEL",{for:!0});var jr=i(pa);Bt=d(jr,xa),jr.forEach(r),ll.forEach(r),sr=u(P),C=l(P,"P",{class:!0});var ya=i(C);fa=l(ya,"INPUT",{type:!0,id:!0,name:!0}),ir=u(ya),_a=l(ya,"LABEL",{for:!0});var zr=i(_a);Ut=d(zr,et),zr.forEach(r),nr=u(ya),I=l(ya,"INPUT",{class:!0,name:!0,maxlength:!0}),ya.forEach(r),or=u(P),ne=l(P,"P",{class:!0});var rl=i(ne);da=l(rl,"INPUT",{type:!0,id:!0,name:!0}),ur=u(rl),ha=l(rl,"LABEL",{for:!0});var Gr=i(ha);Ct=d(Gr,at),Gr.forEach(r),rl.forEach(r),P.forEach(r),ga.forEach(r),ma.forEach(r),p.forEach(r),Mt=u(n),oe=l(n,"A",{href:!0}),i(oe).forEach(r),Wt=u(n),Xr(ue.$$.fragment,n),this.h()},h(){a(be,"class","svelte-4miyne"),a(ve,"type","radio"),a(ve,"id","woman"),a(ve,"name","gender"),a(Ee,"for","woman"),a(D,"class","svelte-4miyne"),a(ge,"type","radio"),a(ge,"id","man"),a(ge,"name","gender"),a(ye,"for","man"),a(F,"class","svelte-4miyne"),a(Pe,"type","radio"),a(Pe,"id","non-binary"),a(Pe,"name","gender"),a(Le,"for","non-binary"),a(j,"class","svelte-4miyne"),a(we,"type","radio"),a(we,"id","not-disclose-gender"),a(we,"name","gender"),a(Ie,"for","not-disclose-gender"),a(z,"class","svelte-4miyne"),a(w,"id","gender"),a(w,"class","svelte-4miyne"),a(b,"class","svelte-4miyne"),a(Ae,"class","svelte-4miyne"),a(Ne,"type","checkbox"),a(Ne,"id","western-europe"),a(Ne,"name","origins"),a(ke,"for","western-europe"),a(G,"class","svelte-4miyne"),a(Te,"type","checkbox"),a(Te,"id","eastern-europe"),a(Te,"name","origins"),a(Be,"for","eastern-europe"),a(J,"class","svelte-4miyne"),a(Ue,"type","checkbox"),a(Ue,"id","north-africa"),a(Ue,"name","origins"),a(Se,"for","north-africa"),a(K,"class","svelte-4miyne"),a(Ce,"type","checkbox"),a(Ce,"id","sub-saharan-africa"),a(Ce,"name","origins"),a(Me,"for","sub-saharan-africa"),a(R,"class","svelte-4miyne"),a(We,"type","checkbox"),a(We,"id","west-asia"),a(We,"name","origins"),a(He,"for","west-asia"),a(V,"class","svelte-4miyne"),a(Oe,"type","checkbox"),a(Oe,"id","south-asia"),a(Oe,"name","origins"),a(qe,"for","south-asia"),a(Q,"class","svelte-4miyne"),a(De,"type","checkbox"),a(De,"id","east-asia"),a(De,"name","origins"),a(Fe,"for","east-asia"),a(Y,"class","svelte-4miyne"),a(je,"type","checkbox"),a(je,"id","pacific"),a(je,"name","origins"),a(ze,"for","pacific"),a(X,"class","svelte-4miyne"),a(Ge,"type","checkbox"),a(Ge,"id","north-america"),a(Ge,"name","origins"),a(Je,"for","north-america"),a(Z,"class","svelte-4miyne"),a(Ke,"type","checkbox"),a(Ke,"id","central-america"),a(Ke,"name","origins"),a(Re,"for","central-america"),a($,"class","svelte-4miyne"),a(Ve,"type","checkbox"),a(Ve,"id","south-america"),a(Ve,"name","origins"),a(Qe,"for","south-america"),a(x,"class","svelte-4miyne"),a(Ye,"type","checkbox"),a(Ye,"id","self-describe-origins"),a(Ye,"name","origins"),a(Xe,"for","self-describe-origins"),a(k,"class","self-describe-value"),a(k,"name","origins"),a(k,"maxlength","30"),k.disabled=yt=!c[0].origins["self-describe-origins"],a(U,"class","svelte-4miyne"),a(Ze,"type","checkbox"),a(Ze,"id","not-disclose-origins"),a(Ze,"name","origins"),a($e,"for","not-disclose-origins"),a(ee,"class","svelte-4miyne"),a(m,"id","origins"),a(m,"class","svelte-4miyne"),a(B,"class","svelte-4miyne"),a(xe,"class","svelte-4miyne"),a(ea,"type","checkbox"),a(ea,"id","asian-or-pacific-islander"),a(ea,"name","race"),a(aa,"for","asian-or-pacific-islander"),a(ae,"class","svelte-4miyne"),a(ta,"type","checkbox"),a(ta,"id","black"),a(ta,"name","race"),a(la,"for","black"),a(te,"class","svelte-4miyne"),a(ra,"type","checkbox"),a(ra,"id","hispanic-or-latino"),a(ra,"name","race"),a(sa,"for","hispanic-or-latino"),a(le,"class","svelte-4miyne"),a(ia,"type","checkbox"),a(ia,"id","indigenous"),a(ia,"name","race"),a(na,"for","indigenous"),a(re,"class","svelte-4miyne"),a(oa,"type","checkbox"),a(oa,"id","middle-eastern-or-north-african"),a(oa,"name","race"),a(ua,"for","middle-eastern-or-north-african"),a(se,"class","svelte-4miyne"),a(ca,"type","checkbox"),a(ca,"id","white"),a(ca,"name","race"),a(pa,"for","white"),a(ie,"class","svelte-4miyne"),a(fa,"type","checkbox"),a(fa,"id","self-describe-race"),a(fa,"name","race"),a(_a,"for","self-describe-race"),a(I,"class","self-describe-value"),a(I,"name","race"),a(I,"maxlength","30"),I.disabled=St=!c[0].race["self-describe-race"],a(C,"class","svelte-4miyne"),a(da,"type","checkbox"),a(da,"id","not-disclose-race"),a(da,"name","race"),a(ha,"for","not-disclose-race"),a(ne,"class","svelte-4miyne"),a(E,"id","race"),a(E,"class","svelte-4miyne"),a(S,"class","svelte-4miyne"),a(A,"class","svelte-4miyne"),a(oe,"href",is+"/image-instruction"),Zr(oe,"display","none")},m(n,p){sl(n,L,p),e(L,y),e(y,H),e(y,de),e(y,pe),e(y,g),e(L,O),e(L,fe),e(fe,he),e(L,La),e(L,A),e(A,b),e(b,N),e(N,me),e(b,nl),e(b,be),e(be,tt),e(b,ol),e(b,w),e(w,D),e(D,ve),e(D,ul),e(D,Ee),e(Ee,lt),e(w,cl),e(w,F),e(F,ge),e(F,pl),e(F,ye),e(ye,rt),e(w,fl),e(w,j),e(j,Pe),e(j,_l),e(j,Le),e(Le,st),e(w,dl),e(w,z),e(z,we),e(z,hl),e(z,Ie),e(Ie,it),e(A,ml),e(A,B),e(B,Ta),e(Ta,nt),e(B,bl),e(B,Ae),e(Ae,ot),e(B,vl),e(B,m),e(m,G),e(G,Ne),e(G,El),e(G,ke),e(ke,ut),e(m,gl),e(m,J),e(J,Te),e(J,yl),e(J,Be),e(Be,ct),e(m,Pl),e(m,K),e(K,Ue),e(K,Ll),e(K,Se),e(Se,pt),e(m,wl),e(m,R),e(R,Ce),e(R,Il),e(R,Me),e(Me,ft),e(m,Al),e(m,V),e(V,We),e(V,Nl),e(V,He),e(He,_t),e(m,kl),e(m,Q),e(Q,Oe),e(Q,Tl),e(Q,qe),e(qe,dt),e(m,Bl),e(m,Y),e(Y,De),e(Y,Ul),e(Y,Fe),e(Fe,ht),e(m,Sl),e(m,X),e(X,je),e(X,Cl),e(X,ze),e(ze,mt),e(m,Ml),e(m,Z),e(Z,Ge),e(Z,Wl),e(Z,Je),e(Je,bt),e(m,Hl),e(m,$),e($,Ke),e($,Ol),e($,Re),e(Re,vt),e(m,ql),e(m,x),e(x,Ve),e(x,Dl),e(x,Qe),e(Qe,Et),e(m,Fl),e(m,U),e(U,Ye),e(U,jl),e(U,Xe),e(Xe,gt),e(U,zl),e(U,k),il(k,c[0].origins["self-describe-value"]),e(m,Gl),e(m,ee),e(ee,Ze),e(ee,Jl),e(ee,$e),e($e,Pt),e(A,Kl),e(A,S),e(S,Ka),e(Ka,Lt),e(S,Rl),e(S,xe),e(xe,wt),e(S,Vl),e(S,E),e(E,ae),e(ae,ea),e(ae,Ql),e(ae,aa),e(aa,It),e(E,Yl),e(E,te),e(te,ta),e(te,Xl),e(te,la),e(la,At),e(E,Zl),e(E,le),e(le,ra),e(le,$l),e(le,sa),e(sa,Nt),e(E,xl),e(E,re),e(re,ia),e(re,er),e(re,na),e(na,kt),e(E,ar),e(E,se),e(se,oa),e(se,tr),e(se,ua),e(ua,Tt),e(E,lr),e(E,ie),e(ie,ca),e(ie,rr),e(ie,pa),e(pa,Bt),e(E,sr),e(E,C),e(C,fa),e(C,ir),e(C,_a),e(_a,Ut),e(C,nr),e(C,I),il(I,c[0].race["self-describe-value"]),e(E,or),e(E,ne),e(ne,da),e(ne,ur),e(ne,ha),e(ha,Ct),sl(n,Mt,p),sl(n,oe,p),c[10](oe),sl(n,Wt,p),$r(ue,n,p),f=!0,cr||(pr=[Pa(w,"change",c[4]),Pa(k,"input",c[8]),Pa(m,"change",c[4]),Pa(I,"input",c[9]),Pa(I,"change",ps),Pa(E,"change",c[4])],cr=!0)},p(n,[p]){(!f||p&8)&&M!==(M=s[n[3]].step+"")&&h(H,M),(!f||p&8)&&T!==(T=s[n[3]].of+"")&&h(pe,T),(!f||p&8)&&_e!==(_e=s[n[3]].introduction+"")&&h(he,_e),(!f||p&8)&&q!==(q=s[n[3]].which_gender+"")&&h(me,q),(!f||p&8)&&wa!==(wa=s[n[3]].choose_option+"")&&h(tt,wa),(!f||p&8)&&Ia!==(Ia=s[n[3]].woman+"")&&h(lt,Ia),(!f||p&8)&&Aa!==(Aa=s[n[3]].man+"")&&h(rt,Aa),(!f||p&8)&&Na!==(Na=s[n[3]].non_binary+"")&&h(st,Na),(!f||p&8)&&ka!==(ka=s[n[3]].not_to_disclose+"")&&h(it,ka),(!f||p&8)&&Ba!==(Ba=s[n[3]].what_ethnic+"")&&h(nt,Ba),(!f||p&8)&&Ua!==(Ua=s[n[3]].select_all_areas+"")&&h(ot,Ua),(!f||p&8)&&Sa!==(Sa=s[n[3]].western_europe+"")&&h(ut,Sa),(!f||p&8)&&Ca!==(Ca=s[n[3]].eastern_europe+"")&&h(ct,Ca),(!f||p&8)&&Ma!==(Ma=s[n[3]].north_africa+"")&&h(pt,Ma),(!f||p&8)&&Wa!==(Wa=s[n[3]].sub_saharan_africa+"")&&h(ft,Wa),(!f||p&8)&&Ha!==(Ha=s[n[3]].west_asia+"")&&h(_t,Ha),(!f||p&8)&&Oa!==(Oa=s[n[3]].south_asia+"")&&h(dt,Oa),(!f||p&8)&&qa!==(qa=s[n[3]].east_asia+"")&&h(ht,qa),(!f||p&8)&&Da!==(Da=s[n[3]].pacific+"")&&h(mt,Da),(!f||p&8)&&Fa!==(Fa=s[n[3]].north_america+"")&&h(bt,Fa),(!f||p&8)&&ja!==(ja=s[n[3]].central_america+"")&&h(vt,ja),(!f||p&8)&&za!==(za=s[n[3]].south_america+"")&&h(Et,za),(!f||p&8)&&Ga!==(Ga=s[n[3]].self_describe+"")&&h(gt,Ga),(!f||p&1&&yt!==(yt=!n[0].origins["self-describe-origins"]))&&(k.disabled=yt),p&1&&k.value!==n[0].origins["self-describe-value"]&&il(k,n[0].origins["self-describe-value"]),(!f||p&8)&&Ja!==(Ja=s[n[3]].not_to_disclose+"")&&h(Pt,Ja),(!f||p&8)&&Ra!==(Ra=s[n[3]].how_identify+"")&&h(Lt,Ra),(!f||p&8)&&Va!==(Va=s[n[3]].select_all_groups+"")&&h(wt,Va),(!f||p&8)&&Qa!==(Qa=s[n[3]].asian_or_pacific_islander+"")&&h(It,Qa),(!f||p&8)&&Ya!==(Ya=s[n[3]].black+"")&&h(At,Ya),(!f||p&8)&&Xa!==(Xa=s[n[3]].hispanic_or_latino+"")&&h(Nt,Xa),(!f||p&8)&&Za!==(Za=s[n[3]].indigenous+"")&&h(kt,Za),(!f||p&8)&&$a!==($a=s[n[3]].middle_eastern_or_north_african+"")&&h(Tt,$a),(!f||p&8)&&xa!==(xa=s[n[3]].white+"")&&h(Bt,xa),(!f||p&8)&&et!==(et=s[n[3]].self_describe+"")&&h(Ut,et),(!f||p&1&&St!==(St=!n[0].race["self-describe-race"]))&&(I.disabled=St),p&1&&I.value!==n[0].race["self-describe-value"]&&il(I,n[0].race["self-describe-value"]),(!f||p&8)&&at!==(at=s[n[3]].not_to_disclose+"")&&h(Ct,at);const W={};p&8&&(W.text=s[n[3]].continue),p&4&&(W.visible=n[2]),ue.$set(W)},i(n){f||(xr(ue.$$.fragment,n),f=!0)},o(n){es(ue.$$.fragment,n),f=!1},d(n){n&&r(L),n&&r(Mt),n&&r(oe),c[10](null),n&&r(Wt),as(ue,n),cr=!1,ts(pr)}}}function ps({target:{name:c,value:L}}){}function fs(c,L,y){let M,H,de,T,pe;Jr(c,Kr,b=>y(11,T=b)),Jr(c,os,b=>y(3,pe=b));const g={gender:null,origins:{},race:{}};let O;ls(()=>ns("3q|start"));function fe({target:{type:b,name:N,id:q,checked:me}}){b==="radio"&&y(0,g[N]=q,g),b==="checkbox"&&y(0,g[N][q]=me,g)}function _e(){rs(Kr,T={...T,["diversity-3q"]:g},T),O.click()}function he(){g.origins["self-describe-value"]=this.value,y(0,g)}function La(){g.race["self-describe-value"]=this.value,y(0,g)}function A(b){ss[b?"unshift":"push"](()=>{O=b,y(1,O)})}return c.$$.update=()=>{c.$$.dirty&1&&y(7,M=Object.entries(g.origins).filter(([b])=>!b.startsWith("self-describe")).some(([b,N])=>Boolean(N))||g.origins["self-describe-origins"]&&g.origins["self-describe-value"]),c.$$.dirty&1&&y(6,H=Object.entries(g.race).filter(([b])=>!b.startsWith("self-describe")).some(([b,N])=>Boolean(N))||g.race["self-describe-race"]&&g.race["self-describe-value"]),c.$$.dirty&193&&y(2,de=Boolean(g.gender&&M&&H))},[g,O,de,pe,fe,_e,H,M,he,La,A]}class bs extends Rr{constructor(L){super(),Vr(this,L,fs,cs,Qr,{})}}export{bs as default};
