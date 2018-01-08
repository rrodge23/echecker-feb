/*
jQWidgets v5.5.0 (2017-Dec)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/

(function(h,q,i){if(!q){return}h.jqx=h.jqx||{};h.jqx.AMD=false;var b=q.module("jqwidgets",[]);var u=q.module("jqwidgets-amd",[],function(){h.jqx.AMD=true});var f=null;var C=null;var v=null;var z=null;var s=null;var c=new Array();var D=new Array();var p=new Array();var r=new Array();var g=new Array();var d=new Array();var e={};var x=false;var l=function(){var E=document.getElementsByTagName("script");var G,F,H;for(G=0;F=E[G];G++){H=F.src;if(H.indexOf("jqxcore.js")>=0){var I=H.substring(0,H.indexOf("jqxcore.js"));break}}return I}();function y(I,J,E,G,F){if(G&&F){switch(I){case"jqxGrid":case"jqxDataTable":case"jqxTreeGrid":if(E.columns){var L=G.columns||G;var H=F.columns||F;if(L.length!=H.length){return false}var K={};h.each(L,function(M,O){var N=this;for(var P in this){if(N[P]!=H[M][P]){var Q=N.datafield||N.dataField;if(!K[Q]){K[Q]={}}K[Q][P]=N[P]}}});if(!h.isEmptyObject(K)){h.each(K,function(N,P){for(var O in P){var M=h(J).jqxProxy("getcolumnproperty",N,O);if(M!==P[O]){h(J).jqxProxy("setcolumnproperty",N,O,P[O])}}});return true}}break}}return false}function a(R,J,Q,I,N,M,E){var F=function(W){if(M==="jqxTree"||M==="jqxMenu"){return W}if(typeof W=="object"){if(W&&W._bindingUpdate!=null){return W}}var V={};var T=false;if(h.isArray(W)||(W instanceof Object&&!W.url&&!(W.localdata||W.localData))){if(M==="jqxChart"){return W}T=true;V.localData=W;V.type="array";if(W[0]){var U=new Array();if(h.type(W[0])=="object"){h.each(W[0],function(Y,Z){var aa={name:Y,type:h.type(Z)};U.push(aa)});V.datafields=U}}}else{if(W&&W.url){V=W}else{if(W&&(W.localdata||W.localData)){V=W}}}if(h.jqx.dataAdapter){var X=new h.jqx.dataAdapter(V);return X}else{if(T){return W}}return null};if(Q.jqxSource!=i){var O=R.$watchCollection(Q.jqxSource,function(V,U){if(V!=U){if(q.equals(V,U)){return}if(V&&U&&V._source&&U._source&&q.equals(V._source,U._source)){return}var T=F(V);h(J).jqxProxy({source:T});var W=q.extend({},R.$eval(Q.jqxSettings));if(Q.jqxSettings&&W&&W.propertyChanged){W.propertyChanged("source",U,V)}}});E.push(O)}else{if(Q.jqxSettings!=i){var L={};var H=null;var P=f(Q.jqxSettings)(R);var K=J.controller();for(var G in K){if(P&&K[G]==P.source){H=G;break}}if(!H){for(var G in R){if(P&&R[G]==P.source){H=G;break}}}if(H){var S="";for(var G in R){if(R[G]==K){S=G;break}}if(S!=""){H=S+"."+H}var O=N.$watchCollection(H,function(W,V){if(W!=V){if(q.equals(W,V)){return}if(W&&V&&W._source&&V._source&&q.equals(W._source,V._source)){return}var U=h.isArray(W)||h.type(W)==="array";if(new Date()-L["jqxSettings.source"]>1000||L=={}||!L["jqxSettings.source"]||U){var T=F(W);h(J).jqxProxy({source:T});var X=q.extend({},R.$eval(Q.jqxSettings));if(Q.jqxSettings&&X&&X.propertyChanged){X.propertyChanged("source",V,W)}L.property=new Date()}}});E.push(O)}var O=R.$watchCollection(Q.jqxSettings+".source",function(V,U){if(V!=U){if(q.equals(V,U)){return}if(V&&U&&V._source&&U._source&&q.equals(V._source,U._source)){return}if(new Date()-L.property>1000||!L["jqxSettings.property"]||L=={}){var T=F(V);h(J).jqxProxy({source:T});var W=q.extend({},R.$eval(Q.jqxSettings));if(Q.jqxSettings&&W&&W.propertyChanged){W.propertyChanged("source",U,V)}L["jqxSettings.source"]=new Date()}}});E.push(O);var O=R.$watchCollection(Q.jqxSettings,function(V,U){if(!V){return}if(!U){var T=F(V.source);h(J).jqxProxy({source:T});return}if(V.source!=U.source){if(q.equals(V.source,U.source)){return}if(V&&U&&V.source&&U.source&&V.source._source&&U.source._source&&q.equals(V.source._source,U.source._source)){return}if(V.source&&U.source&&h.isArray(V.source)&&h.isArray(U.source)){if(A(V.source)==A(U.source)){return}}if(new Date()-L.property>1000||!L["jqxSettings.source"]||L=={}){var T=F(V.source);h(J).jqxProxy({source:T});var W=q.extend({},R.$eval(Q.jqxSettings));if(Q.jqxSettings&&W&&W.propertyChanged){W.propertyChanged("source",U.source,V.source)}L["jqxSettings.source"]=new Date()}}});E.push(O)}}return F(I)}function A(E){if(E==null){return""}var F="";h.each(E,function(H){var J=this;if(H>0){F+=", "}F+="[";var G=0;if(h.type(J)=="object"){for(var I in J){if(G>0){F+=", "}F+="{"+I+":"+J[I]+"}";G++}}else{if(G>0){F+=", "}F+="{"+H+":"+J+"}";G++}F+="]"});return F}function k(I,G,F,E,H,J){h.extend(h.jqx["_"+E+""].prototype,{definedInstance:function(){if(this.element&&this.element!==G[0]){return true}if(this.base&&this.base.element!==G[0]){return true}var L=this;var K=function(M){h.each(J,function(P,Q){L.addHandler(h(M),P,function(R){I.$parent?h.proxy(Q,H)(R):Q(R);if(I.$root.$$phase!="$apply"&&I.$root.$$phase!="$digest"){I.$apply()}})});var N=F.$attr;h.each(F,function(S,T){if(S.indexOf("jqxOn")>=0){var P=N[S].substring(7);var R=h.camelCase(P);var Q=T;L.addHandler(h(M),R,function(V){V.data=F.data||F.jqxData;if(Q.indexOf("(")>=0){var U=Q.indexOf("(");var W=f(Q.substring(0,U))(I);if(W){W(V)}else{I.$emit(R,V)}}else{I.$emit(Q,V)}if(I.$root.$$phase!="$apply"&&I.$root.$$phase!="$digest"){I.$apply()}})}});if(F.jqxInstance){var O=f(F.jqxInstance).assign;if(O){O(I,L)}if(I.$root.$$phase!="$apply"&&I.$root.$$phase!="$digest"){I.$apply()}}};K(G);if(E=="jqxPopover"){setTimeout(function(){K(L.host)})}}})}function j(J,H,F,E,I,K){if(!F.jqxSettings){return}var G=f(F.jqxSettings)(J);if(!G){return}if(!G.apply){G.apply=G[E]=function(){var L=arguments;var M=new Array();if(L.length==0){return true}h.each(D[I.$id+E+F.jqxSettings],function(N,O){var P=this;M.push({widgetName:E,element:P,result:h.jqx.jqxWidgetProxy(E,P,L)})});if(M.length==1){return M[0].result}return M};G.digest=function(){if(!/^\$(digest|apply)$/.test(J.$root.$$phase)){J.$digest()}};G.refresh=function(P,O){var M={};var L=h(H)[E]("getInstance");h.each(G,function(Q,S){if(Q==="created"||Q==="propertyChanged"||Q=="data"||Q=="refresh"||Q==E||Q=="apply"){return true}var R=L.events||L._events;if((R&&R.indexOf(Q)>=0)||Q.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g)){return true}if(P!=i&&P.indexOf(Q)===-1){return true}M[Q]=S});if(M!=={}){if(O){h.each(M,function(Q,R){G[Q]=L[Q]});if(J.$root.$$phase!="$apply"&&J.$root.$$phase!="$digest"){J.$apply()}}else{h.each(D[I.$id+E+F.jqxSettings],function(Q,R){h(this).jqxProxy(M)});if(F.jqxWatchSettings!=i){if(I){var N=f(F.jqxSettings)(I);h.each(N,function(Q,U){if(Q.match(/(source|propertyChanged|created|data|apply|refresh)/g)){return true}var S=L.events||L._events;if((S&&S.indexOf(Q)>=0)||Q.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g)){return true}if(Q===E){return true}if(!p[F.jqxSettings+"."+Q]){var T=Q;var R=I.$watch(F.jqxSettings+"."+Q,function(X,W){if(X!=W){if(q.equals(X,W)){return}var V={};V[T]=X;h.each(D[I.$id+E+F.jqxSettings],function(aa,ab){var Z=y(E,h(this),V,X,W);if(!Z){h(this).jqxProxy(V)}});var Y=q.extend({},J.$eval(F.jqxSettings));if(F.jqxSettings&&Y&&Y.propertyChanged){Y.propertyChanged(T,W,X)}}},true);p[F.jqxSettings+"."+Q]=R}})}}}}if(e[H[0].id]){M={};h.each(e[H[0].id],function(){if(P!=i&&P.indexOf(h.camelCase(this.value.substring(4)))===-1){return true}M[h.camelCase(this.value.substring(4))]=J.$eval(this.label);if(O){var Q=h.parse(this.label)(J).assign;if(Q){Q(J,L[h.camelCase(this.value.substring(4))])}}});if(!O){h.each(D[I.$id+E+F.jqxSettings],function(Q,R){h(this).jqxProxy(M)})}else{if(J.$root.$$phase!="$apply"&&J.$root.$$phase!="$digest"){J.$apply()}}}};D[I.$id+E+F.jqxSettings]=new Array();D[I.$id+E+F.jqxSettings].push(K)}else{if(!D[I.$id+E+F.jqxSettings]){D[I.$id+E+F.jqxSettings]=new Array()}D[I.$id+E+F.jqxSettings].push(K)}}function m(O,J,N,F,K,H,I){var L=/(jqxGrid|jqxPivotGrid|jqxTree|jqxMenu|jqxDataTable|jqxTreeGrid|jqxListBox|jqxTreeMap|jqxComboBox|jqxDropDownList|jqxChart)/ig;if(N.jqxSettings&&H&&H.source===i&&N.jqxSource===i&&F.match(L)){if(F.match(/(jqxTree|jqxMenu)/ig)){if(J[0].innerHTML.toLowerCase().indexOf("ul")===-1){H.source=[]}}else{H.source=[]}}if(H.source!==i&&N.jqxSettings){H.source=a(O,J,N,H.source,K,F,I)}else{if(N.jqxSource!==i){var E=q.extend({},O.$eval(N.jqxSource));var G=N.jqxSource&&N.jqxSource.dataBind?true:false;if(G){H.source=a(O,J,N,N.jqxSource,K,F,I)}else{H.source=a(O,J,N,E,K,F,I)}}}var M=O.$watch(N.ngDisabled,function(R,Q){if(R!=i){if(R!=Q||h(J).jqxProxy("disabled")!==R){var P={};P.disabled=R;if(h(J).length>0){h(J).jqxProxy(P)}}}});I.push(M)}function n(Q,J,P,E,N){var H=new Array();var G=q.extend({},Q.$eval(P.jqxSettings));m(Q,J,P,E,N,G,H);var L={};var K={};if(e[J[0].id]){h.each(e[J[0].id],function(){var Y=this.label;var aa=this.value;var V=h.camelCase(aa.substring("4"));if(typeof P[Y]!=="undefined"){var T=Q.$eval(P[Y]);if(T===i&&h.type(P[Y])==="string"){T=P[Y]}if(V=="instance"){return true}if(h.type(T)==="array"&&E!=="source"){T=T.slice(0)}else{if(h.type(T)==="object"&&E!=="source"){T=h.extend({},T)}}var U=/(columnmenuopening|columnmenuclosing|aggregatesrenderer|tooltipFormatFunction|labelsFormatFunction|rendergridrows|draw|renderFiles|initTools|initFeedBack|onTargetDrop|drawBefore|dragStart|dragEnd|onDropTargetEnter|onDropTargetLeave|onDrag|createCommand|ready|render|initrowdetails|initTabContent|initContent|renderer|renderToolbar|renderStatusBar|groupsrenderer|pagerrenderer|groupcolumnrenderer|updatefilterconditions|handlekeyboardnavigation|updatefilterpanel|rendered|virtualModeCreateRecords|virtualModeRecordCreating|search|selectionRenderer)/ig;var S=/(searchMode)/ig;var W=/(ready|aggregatesrenderer|initrowdetails|initTabContent|initContent|renderToolbar|renderStatusBar|pagerRenderer)/ig;if(h.isFunction(T)&&!V.match(U)){K[index]=T}else{if(V.match(U)&&!V.match(S)){var X=function(){var ab=T.apply(this,arguments);if(V.match(W)&&!/^\$(digest|apply)$/.test(Q.$root.$$phase)){Q.$digest()}return ab};L[V]=X;return true}L[V]=T}var Z=function(af,ad){if(af!=ad){if(q.equals(af,ad)){return}var ae=h.camelCase(aa.substring("4"));if(ae=="watch"){if(P.jqxWatch.indexOf(",")>=0||P.jqxWatch.indexOf("[")>=0){var ah=P.jqxWatch;ah=ah.replace("[","");ah=ah.replace("]","");ah=ah.trim();ah=ah.split(",");h.each(ah,function(al,ao){var ap=this.split(".");for(var am=0;am<ap.length;am++){if(ap[am] in h(J).data().jqxWidget){ae=ap[am];break}else{if(ap[am].toLowerCase() in h(J).data().jqxWidget){ae=ap[am].toLowerCase();break}}}var aj={};aj[ae]=af[al];var ak=y(E,h(J),aj,af,ad);if(!ak){h(J).jqxProxy(aj);var an=q.extend({},Q.$eval(P.jqxSettings));if(P.jqxSettings&&an&&an.propertyChanged){an.propertyChanged(ae,ad,af)}}});return}var ah=P.jqxWatch.split(".");for(var ag=0;ag<ah.length;ag++){if(ah[ag] in h(J).data().jqxWidget){ae=ah[ag];break}else{if(ah[ag].toLowerCase() in h(J).data().jqxWidget){ae=ah[ag].toLowerCase();break}}}}var ab={};ab[ae]=af;var ac=y(E,h(J),ab,af,ad);if(!ac){h(J).jqxProxy(ab);var ai=q.extend({},Q.$eval(P.jqxSettings));if(P.jqxSettings&&ai&&ai.propertyChanged){ai.propertyChanged(ae,ad,af)}}}};if(V=="watch"){delete L[V];var Z=Q.$watch(P[Y],Z,true);H.push(Z)}else{var Z=Q.$watch(P[Y],Z);H.push(Z)}}})}if(J[0].id==""){if(i==c[E]){c[E]=0}J[0].id=E+c[E]++}else{if(J[0].id!=""&&J[0].id==E+"0"){if(i==c[E]){c[E]=0}J[0].id=E+c[E]++}}var F=h(J)[E];if(!F){throw new Error("Missing required JavaScript references for: "+E);return null}h.each(G,function(V,W){if(V==="data"||V==="created"||V==="propertyChanged"){return true}var T=/(columnmenuopening|columnmenuclosing|aggregatesrenderer|tooltipFormatFunction|labelsFormatFunction|rendergridrows|renderFiles|initTools|draw|drawBefore|dragStart|dragEnd|initFeedBack|onTargetDrop|onDropTargetEnter|onDropTargetLeave|onDrag|createCommand|ready|render|initrowdetails|initTabContent|initContent|renderer|renderToolbar|renderStatusBar|groupsrenderer|pagerrenderer|groupcolumnrenderer|updatefilterconditions|handlekeyboardnavigation|updatefilterpanel|rendered|virtualModeCreateRecords|virtualModeRecordCreating|search|selectionRenderer)/ig;var U=/(searchMode)/ig;var S=/(ready|aggregatesrenderer|initrowdetails|initTabContent|initContent|renderToolbar|renderStatusBar|pagerRenderer)/ig;if(h.isFunction(W)&&!V.match(T)){K[V]=W}else{if(V.match(T)&&!V.match(U)){var X=function(){var Y=W.apply(this,arguments);if(V.match(S)&&!/^\$(digest|apply)$/.test(Q.$root.$$phase)){Q.$digest()}return Y};L[V]=X;return true}if(h.type(W)==="array"&&V!=="source"){W=W.slice(0)}else{if(h.type(W)==="object"&&V!=="source"){W=h.extend({},W)}}L[V]=W}});k(Q,J,P,E,N,K);var M=J[0];j(Q,J,P,E,N,M);var I=h(J)[E](L);var R=h(J)[E]("getInstance");B(Q,J,P,E,N,G,M,R,L,H);var O=Q.$on("$destroy",function(){if(R&&R.destroy&&!R.isDestroyed){R.isDestroyed=true;if(h(J).parents().length>0){h(J)[E]("destroy")}R=null}else{h(J).remove();R=null}for(var S=0;S<H.length;S++){H[S]()}L=[];K=[];O()});return R}function B(O,H,N,E,K,G,J,P,I,F){if(N.jqxSettings){if(N.jqxWatchSettings!=i){if(K){var M=f(N.jqxSettings)(K);h.each(M,function(Q,U){if(Q.match(/(source|created|propertyChanged|data|apply|refresh)/g)){return true}var S=P.events||P._events;if((S&&S.indexOf(Q)>=0)||Q.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g)){return true}if(Q===E){return true}if(I.hasOwnProperty(Q)){var T=Q;var R=K.$watch(N.jqxSettings+"."+Q,function(Y,X){if(Y!=X){if(q.equals(Y,X)){return}var V={};V[T]=Y;var W=y(E,h(H),V,Y,X);if(!W){h(H).jqxProxy(V);var Z=q.extend({},O.$eval(N.jqxSettings));if(N.jqxSettings&&Z&&Z.propertyChanged){Z.propertyChanged(T,X,Y)}}}},true);p[N.jqxSettings+"."+Q]=R;F.push(R)}})}}var L=O.$watch(N.jqxSettings,function(U,T){var R={};var Q=false;if(U!=T){if(q.equals(U,T)){return}h.each(U,function(X,aa){if(X==="source"){if(T.source!=null){return true}else{var W=a(O,H,N,aa,K,F);R[X]=W}}if(X==="created"){return true}if(X==="propertyChanged"){return true}if(X==="data"){O.$apply();return true}var Y=P.events||P._events;if((Y&&Y.indexOf(X)>=0)||X.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g)){return true}var Z=function(ac){if(N.jqxWatchSettings!=i){if(K){if(!p[N.jqxSettings+"."+ac]){var ac=X;var ab=K.$watch(N.jqxSettings+"."+ac,function(ag,af){if(ag!=af){if(q.equals(ag,af)){return}var ad={};ad[ac]=ag;var ae=y(E,h(H),ad,ag,af);if(!ae){h(H).jqxProxy(ad);var ah=q.extend({},O.$eval(N.jqxSettings));if(N.jqxSettings&&ah&&ah.propertyChanged){ah.propertyChanged(ac,af,ag)}}}},true);p[N.jqxSettings+"."+ac]=ab;F.push(ab)}}}};if(!(aa instanceof Object)&&(T==null||aa!==T[X])){R[X]=aa;Z(X);Q=true}else{if(X!==E&&X!=="apply"&&X!=="created"&&X!=="propertyChanged"&&(aa instanceof Object)&&(T==null||(A(aa)!==A(T[X]))||(A(aa)==""&&A(T[X])==""))){R[X]=aa;Z(X);Q=true}}});if(R!=={}&&Q){var S=y(E,h(H),R,U,T);if(!S){h(H).jqxProxy(R);var V=q.extend({},O.$eval(N.jqxSettings));if(N.jqxSettings&&V&&V.propertyChanged){V.propertyChanged(index,T,U)}}}}});F.push(L)}}function w(K,G,S,E){var P=K[0].nodeName.toLowerCase();var Q=h(K).parent();var H=h(K).html();var R=Q&&Q[0]&&Q[0].nodeName.toLowerCase()=="ng-include"?true:false;if(h(K).parents("[ui-view]").length>0){R=true}if(R&&!G){h(K).attr("data-jqx-ng-include",true);return}var L='<div id="jqx-ngwidget">'+H+"</div>";if(P.indexOf("jqx")>=0){var I=K[0].attributes;var M=K;if(P.indexOf("input")>=0){if(P.indexOf("date")>=0||P.indexOf("number")>=0){h(K).replaceWith('<div id="jqx-ngwidget"></div>')}else{if(P.indexOf("password")>=0){h(K).replaceWith('<input id="jqx-ngwidget" type="password"/>')}else{h(K).replaceWith('<input id="jqx-ngwidget"/>')}}}else{if(P.indexOf("jqx-button")>=0&&P.indexOf("jqx-button-group")==-1){h(K).replaceWith('<button id="jqx-ngwidget">'+H+"</button>")}else{if(P.indexOf("jqx-toggle-button")>=0){h(K).replaceWith('<button id="jqx-ngwidget">'+H+"</button>")}else{if(P.indexOf("jqx-link-button")>=0){if(h(K).find("a").length>0){var J=h(K).find("a");J.attr("id","jqx-ngwidget");h(K).replaceWith(J)}else{h(K).replaceWith('<a id="jqx-ngwidget">'+H+"</a>")}}else{if(P.indexOf("jqx-data-table")>=0||P.indexOf("jqx-grid")>=0){if(h(K).find("tr").length>0){h(K).replaceWith('<div id="jqx-ngwidget">'+H+"</div>")}else{h(K).replaceWith('<div id="jqx-ngwidget"></div>')}}else{if(P.indexOf("jqx-list-box")>=0||P.indexOf("jqx-drop-down-list")>=0||P.indexOf("jqx-combo-box")>=0){if(h(K).find("option").length>0){h(K).replaceWith('<select id="jqx-ngwidget">'+H+"</select>")}else{if(h(K).find("li").length>0){h(K).replaceWith('<ul id="jqx-ngwidget">'+H+"</ul>")}else{h(K).replaceWith('<div id="jqx-ngwidget"></div>')}}}else{if(P.indexOf("jqx-list-menu")>=0){h(K).replaceWith('<ul id="jqx-ngwidget" data-role="listmenu">'+H+"</ul>")}else{if(P.indexOf("jqx-tooltip")>=0){var F=h(K).children();F.detach();h(F).insertAfter(h(K));h.each(I,function(){if(h(F)[0]){h(F)[0].setAttribute(this.name,this.value)}});h(K).remove();K=F}else{h(K).replaceWith(L)}}}}}}}}M=Q.find("#jqx-ngwidget").removeAttr("id");h.each(I,function(){if(h(M)[0]){h(M)[0].setAttribute(this.name,this.value)}})}var O=K[0];if(M&&M.length){O=M[0]}var N=this;if(O.id==""){if(i==c[E]){c[E]=0}O.id=E+c[E]++}h.each(S,function(T,U){if(T!==E&&T!="jqxNgModel"&&T.indexOf("jqxOn")==-1&&T!="jqxData"&&T!="jqxWatchSettings"&&T!="jqxCreated"&&T!="jqxSource"&&T!="jqxCreate"&&T!="jqxSettings"&&T.indexOf("jqx")>=0){if(!e[O.id]){e[O.id]=new Array()}e[O.id].push({label:T,value:S.$attr[T]})}});return h(O)}function t(G,H){function F(L){H.filesCount=0;var I=L.length;if(L.scripts){var K=L.scripts.length;for(var N in L.deps){K++;var M=L.deps[N];K+=M.length}I=K}var J=function(S,P){var R=0;var O=0;var Q=function(){var Y=S[R];var T=h('script[src*="'+Y+'"]').length;if(T===0){var V=document.getElementsByTagName("head")[0];var U=document.createElement("script");U.type="text/javascript";var X=function(){H.filesCount++;O++;g[Y]=false;if(r[Y]!=i){h.each(r[Y],function(){this.documentReady=true;if(this.scriptsLoaded){this.scriptsLoaded()}})}r[Y]=true;if(H.filesCount==I){H.documentReady=true;if(H.scriptsLoaded){H.scriptsLoaded()}return}if(O===S.length&&P){P()}};if(U.addEventListener){U.addEventListener("load",X,false)}else{if(window.attachEvent){U.attachEvent("onreadystatechange",function(){if(U.readyState=="complete"||U.readyState=="loaded"){X()}})}}g[Y]=true;var W=l;if(Y=="globalize.js"){W=l+"globalization/"}U.src=W+Y;V.appendChild(U);R++;if(R<S.length){Q()}}else{H.filesCount++;if(H.filesCount==I){if(r[Y]===true||g[Y]===i){H.documentReady=true;if(H.scriptsLoaded){H.scriptsLoaded()}return}else{if(r[Y]==i){r[Y]=new Array()}r[Y].push(H);return}}R++;if(R<S.length){Q()}O++;if(O===S.length&&P){P()}}};Q()};if(!L.scripts){J(L)}else{J(L.scripts);h.each(L.deps,function(Q,P){var O=new Array();O.push(Q);J(O,function(){J(P)})})}}var E={jqxCalendar:["jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxDateTimeInput:["jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxScheduler:["jqxscheduler.js","jqxscheduler.api.js","jqxdate.js","jqxmenu.js","jqxwindow.js","jqxcheckbox.js","jqxnumberinput.js","jqxscrollbar.js","jqxlistbox.js","jqxdropdownlist.js","jqxinput.js","jqxradiobutton.js","jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxListBox:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js"],jqxComboBox:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js","jqxcombobox.js"],jqxDropDownList:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js","jqxdropdownlist.js"],jqxKanban:["jqxkanban.js","jqxsortable.js"],jqxSortable:["jqxsortable.js"],jqxKnob:["jqxdraw.js","jqxknob.js"],jqxGrid:{scripts:["jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js"],deps:{"jqxgrid.js":["jqxgrid.selection.js","jqxgrid.filter.js","jqxgrid.sort.js","jqxgrid.storage.js","jqxgrid.grouping.js","jqxgrid.pager.js","jqxgrid.columnsresize.js","jqxgrid.columnsreorder.js","jqxgrid.edit.js","jqxgrid.export.js","jqxgrid.aggregates.js"],"jqxdata.js":["jqxdata.export.js"]}},jqxPivotGrid:{scripts:["jqxdatetimeinput.js","jqxcalendar.js","jqxdragdrop","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js"],deps:{"jqxpivotgrid.js":["jqxpivot.js","jqxpivotdesigner"],"jqxdata.js":["jqxdata.export.js"]}},jqxDataTable:{scripts:["jqxdatatable.js","jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js","jqxinput.js"],deps:{"jqxdata.js":["jqxdata.export.js"]}},jqxTreeGrid:{scripts:["jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js","jqxinput.js"],deps:{"jqxdatatable.js":["jqxtreegrid.js"],"jqxdata.js":["jqxdata.export.js"]}},jqxDockingLayout:{scripts:["jqxmenu.js"],deps:{"jqxlayout.js":["jqxdockinglayout.js"]}},jqxCheckBox:["jqxcheckbox.js"],jqxRadioButton:["jqxradiobutton.js"],jqxBulletChart:["jqxbulletchart.js","jqxtooltip.js"],jqxRangeSelector:["jqxrangeselector.js"],jqxScrollView:["jqxbuttons.js","jqxscrollview.js"],jqxSwitchButton:["jqxswitchbutton.js"],jqxTouch:["jqxtouch.js"],jqxColorPicker:["jqxcolorpicker.js"],jqxInput:["jqxinput.js"],jqxTextArea:["jqxtextarea.js","jqxbuttons.js","jqxscrollbar.js"],jqxTagCloud:["jqxtagcloud.js"],jqxPopover:["jqxpopover.js"],jqxLayout:["jqxlayout.js","jqxmenu.js","jqxwindow.js"],jqxLoader:["jqxloader.js"],jqxResponsivePanel:["jqxresponsivepanel.js"],jqxEditor:["jqxeditor.js"],jqxNumberInput:["jqxbuttons.js","jqxnumberinput.js"],jqxMaskedInput:["jqxmaskedinput.js"],jqxSlider:["jqxbuttons.js","jqxslider.js"],jqxPanel:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js"],jqxButton:["jqxbuttons.js"],jqxLinkButton:["jqxbuttons.js"],jqxToggleButton:["jqxbuttons.js"],jqxRepeatButton:["jqxbuttons.js"],jqxDropDownButton:["jqxdropdownbutton.js"],jqxNotification:["jqxnotification.js"],jqxDockPanel:["jqxdockpanel.js"],jqxProgressBar:["jqxprogressbar.js"],jqxListMenu:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js","jqxlistmenu.js"],jqxTree:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js","jqxtree.js","jqxdata.js"],jqxMenu:["jqxmenu.js","jqxdata.js"],jqxTabs:["jqxtabs.js","jqxbuttons.js"],jqxDragDrop:["jqxdragdrop.js"],jqxDraw:["jqxdraw.js"],jqxWindow:["jqxwindow.js"],jqxDocking:["jqxwindow.js","jqxdocking.js"],jqxButtonGroup:["jqxbuttons.js","jqxbuttongroup.js"],jqxChart:["jqxdata.js","jqxchart.js"],jqxNavigationBar:["jqxnavigationbar.js"],jqxExpander:["jqxexpander.js"],jqxResponse:["jqxresponse.js"],jqxPasswordInput:["jqxpasswordinput.js"],jqxRating:["jqxrating.js"],jqxSplitter:["jqxbuttons.js","jqxsplitter.js"],jqxValidator:["jqxvalidator.js"],jqxTooltip:["jqxtooltip.js"],jqxGauge:["jqxdraw.js","jqxgauge.js"],jqxLinearGauge:["jqxdraw.js","jqxgauge.js"],jqxTreeMap:["jqxtreemap.js"],jqxRibbon:["jqxbuttons.js","jqxribbon.js"],jqxFormattedInput:["jqxbuttons.js","jqxformattedinput.js"],jqxComplexInput:["jqxbuttons.js","jqxcomplexinput.js"],jqxToolBar:["jqxtoolbar.js"],jqxFileUpload:["jqxfileupload.js"],jqxNavBar:["jqxnavbar.js"]};F(E[G])}h.jqx.angularCompile=function(F,E){if(F.length>0){F=F[0]}var H=q.element(F);var G=H.injector();if(E==i){E=F.innerHTML}G.invoke(["$compile","$rootScope",function(K,I){var J=H.html(E).scope();K(H)(J||I);if(!/^\$(digest|apply)$/.test(I.$$phase)){I.$digest()}else{if(!/^\$(digest|apply)$/.test(J.$$phase)){J.$digest()}}}])};function o(E){var F={};var G=function(V,O,U,J,I){if(h(O).attr("data-jqx-ng-include")){h(O).removeAttr("data-jqx-ng-include");var K=h(O.children()).detach();O=w(O,true,U,E);O.append(K);z(O)(V);var T=true;for(var N in U){if(N.toString().indexOf("jqx")==-1){continue}if(V[U[N]]!=i){T=false}if(U[N].split(".").length>1){var L=U[N].split(".");for(var M=0;M<L.length;M++){if(V[L[M]]!=i){T=false}}}}if(T&&U.jqxSettings){if(!f(U.jqxSettings)(V)){T=false}}if(T){V=V.$parent}}if(h.jqx.AMD){var Q={};d[E]=false;Q.documentReady=false;t(E,Q)}var H=O[0].style.visibility;var P=O[0].style.display;O[0].style.visibility="hidden";O[0].style.display="none";var S=V;var R=v(function(){v.cancel(R);R=i;var Z=function(){var af=J[0];O[0].style.visibility=H;O[0].style.display=P;var ag=n(V,O,U,E,S);var aj=E.toLowerCase();var ai=E.match(/(input|list|radio|checkbox|combobox|rating|slider|scrollbar|progress|range|editor|picker|range|gauge|textarea|calendar|switch|button)/ig);var ah={element:O[0],name:E,instance:h(O).data().jqxWidget,id:O[0].id,scope:V};var ab=function(){V.$emit(E+"Created",ah);if(U.jqxSettings&&f(U.jqxSettings)(V)&&f(U.jqxSettings)(V).created){C(function(){var ak=f(U.jqxSettings)(V).created;ak(ah)})}if(U.jqxCreated){C(function(){var ak=f(U.jqxCreated)(V);ak(ah)})}};if(E==="jqxGrid"||E==="jqxDataTable"){var ac=0;var ad=v(function(){if(!h(O).data().jqxWidget){v.cancel(ad);ad=i}else{if(h(O).data().jqxWidget.initializedcall||ac==25){v.cancel(ad);ad=i;ab()}}ac++},100)}else{ab()}C(function ae(){if(af){af.$render=function(){var ao=af.$viewValue;if(ao===i){ao=af.$modelValue}if(E==="jqxRadioButton"){if(V.$eval(h(O).attr("value"))==af.$viewValue){h(O).val(true)}else{if(V.$eval(h(O).attr("value"))=="true"&&af.$viewValue==true){h(O).val(true)}else{h(O).val(false)}}return}else{if(E==="jqxCheckBox"){if(V.$eval(h(O).attr("ng-true-value"))==af.$viewValue){h(O).val(true)}if(V.$eval(h(O).attr("ng-false-value"))==af.$viewValue){h(O).val(false)}else{h(O).val(af.$viewValue)}return}}if(ao!=h(O).val()){C(function(){h(O).val(ao)})}};if(E==="jqxRadioButton"){if(V.$eval(h(O).attr("value"))==af.$viewValue){h(O).val(true)}else{if(V.$eval(h(O).attr("value"))=="true"&&af.$viewValue==true){h(O).val(true)}else{h(O).val(false)}}}else{if(E==="jqxCheckBox"){if(V.$eval(h(O).attr("ng-true-value"))==af.$viewValue){h(O).val(true)}if(V.$eval(h(O).attr("ng-false-value"))==af.$viewValue){h(O).val(false)}else{h(O).val(af.$viewValue)}}else{if(E==="jqxDropDownList"||E==="jqxComboBox"||E==="jqxListBox"||E==="jqxInput"||E==="jqxTextArea"){if(U.jqxNgModel!=i){var ak=h(O).data().jqxWidget;if(E!="jqxInput"){if(ak.valueMember){ak.selectItem(af.$viewValue[ak.valueMember])}else{if(ak.displayMember){ak.selectItem(af.$viewValue[ak.displayMember])}else{h(O).val(af.$viewValue)}}}else{h(O).val(af.$viewValue)}}else{h(O).val(af.$viewValue)}}else{if(E==="jqxDateTimeInput"||E==="jqxCalendar"){if(U.jqxNgModel!=i){var ak=h(O).data().jqxWidget;if(ak.selectionMode=="range"){ak.setRange(af.$viewValue)}else{ak.setDate(af.$viewValue)}}else{h(O).val(af.$viewValue)}}else{if(E=="jqxToggleButton"){var ak=h(O).data().jqxWidget;ak.toggled=true;ak.refresh()}else{h(O).val(af.$viewValue)}}}}}if(ai){var am="keyup change";if(E=="jqxScrollBar"){am="valueChanged"}if(E=="jqxToggleButton"){am="keyup click"}if(E=="jqxInput"){am="keyup change select"}var an;var al=ag.host;if(!al&&ag.base){al=ag.base.host}h(al).on(am,function(ap){var ao=ap.args;if(an){C.cancel(an)}an=C(function(){if(E==="jqxRadioButton"){if(ao&&ao.type!="api"){af.$setViewValue(V.$eval(h(O).attr("value")))}}else{if(E==="jqxCheckBox"){if(h(O).attr("ng-true-value")!=i&&ao.checked){af.$setViewValue(h(O).attr("ng-true-value"))}else{if(h(O).attr("ng-false-value")!=i&&!ao.checked){af.$setViewValue(h(O).attr("ng-false-value"))}else{af.$setViewValue(h(O).val())}}}else{if(E==="jqxDropDownList"||E==="jqxComboBox"||E==="jqxListBox"||E==="jqxInput"||E==="jqxTextArea"){var ar=h(O).val();if(U.jqxNgModel!=i){var aq=h(O).data().jqxWidget;if(aq.getSelectedItem){ar=aq.getSelectedItem();if(ar.originalItem){ar=ar.originalItem}}if(E==="jqxInput"||E==="jqxTextArea"){ar=aq.selectedItem}af.$setViewValue(ar)}else{af.$setViewValue(ar)}}else{if(E==="jqxDateTimeInput"||E==="jqxCalendar"){if(U.jqxNgModel!=i){var aq=h(O).data().jqxWidget;if(aq.selectionMode=="range"){af.$setViewValue(aq.getRange())}else{af.$setViewValue(aq.getDate())}}else{if(h.type(af.$viewValue)==="date"){var aq=h(O).data().jqxWidget;if(aq.selectionMode=="range"){af.$setViewValue(aq.getRange())}else{af.$setViewValue(aq.getDate())}}else{af.$setViewValue(h(O).val())}}}else{if(E=="jqxToggleButton"){var aq=h(O).data().jqxWidget;af.$setViewValue(aq.toggled)}else{af.$setViewValue(h(O).val())}}}}}V.$emit(E+"ModelChange",af.$viewValue)})})}}})};if(U.ngShow!==i&&U.jqxCreate===i){var Y=V.$watch(U.ngShow,function(ac,ab){if(ac){Z();Y()}});return}var aa=function(){if(U.jqxCreate!=null||U.jqxCreate!=null){if(U.jqxCreate===true||(U.jqxCreate!==null&&h.type(U.jqxCreate)=="object")){Z()}else{var ab=V.$watch(U.jqxCreate,function(ad,ac){if(typeof ad=="number"){C(Z,ad);ab()}else{if(ad){Z();ab()}}})}}else{Z()}};if(h.jqx.AMD){var X=function(){var ab=true;for(var ac in d){if(!d[ac]){ab=false;break}}if(ab){if(!x){V.$emit("jQWidgetsScriptsLoaded");x=true}for(var ac in d){h.each(d[ac],function(){this()});d[ac]=new Array()}}};if(Q.documentReady){var W={element:O[0],name:E,scope:V};V.$emit(E+"ScriptsLoaded",W);if(!d[E]){d[E]=new Array()}d[E].push(aa);X()}else{Q.scriptsLoaded=function(){var ab={element:O[0],name:E,scope:V};V.$emit(E+"ScriptsLoaded",ab);if(!d[E]){d[E]=new Array()}d[E].push(aa);X()}}}else{aa()}})};b.directive(E,["$timeout","$interval","$parse","$compile","$log",function(M,I,N,L,K){C=M;v=I;f=N;z=L;s=K;var J={};var H;return{restrict:"ACE",require:["?ngModel"],scope:false,template:function(P,O){w(P,false,O,E);H=this.scope},controller:["$scope","$attrs","$element","$transclude",function(R,O,Q,P){}],compile:function(P,O,Q){return{pre:function(V,T,R,U,S){},post:function(V,T,R,U,S){G(V,T,R,U,S)}}},link:G}}])}o("jqxBulletChart");o("jqxButtonGroup");o("jqxButton");o("jqxBarGauge");o("jqxRepeatButton");o("jqxToggleButton");o("jqxLinkButton");o("jqxCalendar");o("jqxChart");o("jqxCheckBox");o("jqxComplexInput");o("jqxColorPicker");o("jqxComboBox");o("jqxDataTable");o("jqxDateTimeInput");o("jqxDocking");o("jqxDockPanel");o("jqxDragDrop");o("jqxDraw");o("jqxDropDownButton");o("jqxDropDownList");o("jqxEditor");o("jqxExpander");o("jqxFormattedInput");o("jqxFileUpload");o("jqxGauge");o("jqxLinearGauge");o("jqxGrid");o("jqxInput");o("jqxListBox");o("jqxListMenu");o("jqxMaskedInput");o("jqxMenu");o("jqxNavigationBar");o("jqxNavBar");o("jqxNotification");o("jqxNumberInput");o("jqxPanel");o("jqxPasswordInput");o("jqxProgressBar");o("jqxRadioButton");o("jqxRangeSelector");o("jqxRating");o("jqxRibbon");o("jqxScrollBar");o("jqxScrollView");o("jqxSlider");o("jqxSplitter");o("jqxSwitchButton");o("jqxTabs");o("jqxToolBar");o("jqxTooltip");o("jqxTouch");o("jqxTree");o("jqxTreeGrid");o("jqxTreeMap");o("jqxValidator");o("jqxWindow");o("jqxTagCloud");o("jqxPopover");o("jqxKanban");o("jqxKnob");o("jqxSortablePlugin");o("jqxScheduler");o("jqxTextArea");o("jqxLayout");o("jqxDockingLayout");o("jqxResponsivePanel");o("jqxLoader");o("jqxPivotGrid")})(jqxBaseFramework,window.angular);

