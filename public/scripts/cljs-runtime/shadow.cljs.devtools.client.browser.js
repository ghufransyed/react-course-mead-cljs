goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49924 = arguments.length;
var i__4737__auto___49925 = (0);
while(true){
if((i__4737__auto___49925 < len__4736__auto___49924)){
args__4742__auto__.push((arguments[i__4737__auto___49925]));

var G__49926 = (i__4737__auto___49925 + (1));
i__4737__auto___49925 = G__49926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49689){
var G__49691 = cljs.core.first(seq49689);
var seq49689__$1 = cljs.core.next(seq49689);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49691,seq49689__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49695 = cljs.core.seq(sources);
var chunk__49696 = null;
var count__49697 = (0);
var i__49698 = (0);
while(true){
if((i__49698 < count__49697)){
var map__49710 = chunk__49696.cljs$core$IIndexed$_nth$arity$2(null,i__49698);
var map__49710__$1 = (((((!((map__49710 == null))))?(((((map__49710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49710):map__49710);
var src = map__49710__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49710__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49710__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49710__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49710__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49716){var e_49929 = e49716;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49929);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49929.message)].join('')));
}

var G__49930 = seq__49695;
var G__49931 = chunk__49696;
var G__49932 = count__49697;
var G__49933 = (i__49698 + (1));
seq__49695 = G__49930;
chunk__49696 = G__49931;
count__49697 = G__49932;
i__49698 = G__49933;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49695);
if(temp__5735__auto__){
var seq__49695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49695__$1);
var G__49934 = cljs.core.chunk_rest(seq__49695__$1);
var G__49935 = c__4556__auto__;
var G__49936 = cljs.core.count(c__4556__auto__);
var G__49937 = (0);
seq__49695 = G__49934;
chunk__49696 = G__49935;
count__49697 = G__49936;
i__49698 = G__49937;
continue;
} else {
var map__49717 = cljs.core.first(seq__49695__$1);
var map__49717__$1 = (((((!((map__49717 == null))))?(((((map__49717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49717):map__49717);
var src = map__49717__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49717__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49717__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49717__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49717__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49719){var e_49938 = e49719;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49938);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49938.message)].join('')));
}

var G__49939 = cljs.core.next(seq__49695__$1);
var G__49940 = null;
var G__49941 = (0);
var G__49942 = (0);
seq__49695 = G__49939;
chunk__49696 = G__49940;
count__49697 = G__49941;
i__49698 = G__49942;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49724 = cljs.core.seq(js_requires);
var chunk__49725 = null;
var count__49726 = (0);
var i__49727 = (0);
while(true){
if((i__49727 < count__49726)){
var js_ns = chunk__49725.cljs$core$IIndexed$_nth$arity$2(null,i__49727);
var require_str_49943 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49943);


var G__49944 = seq__49724;
var G__49945 = chunk__49725;
var G__49946 = count__49726;
var G__49947 = (i__49727 + (1));
seq__49724 = G__49944;
chunk__49725 = G__49945;
count__49726 = G__49946;
i__49727 = G__49947;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49724);
if(temp__5735__auto__){
var seq__49724__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49724__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49724__$1);
var G__49948 = cljs.core.chunk_rest(seq__49724__$1);
var G__49949 = c__4556__auto__;
var G__49950 = cljs.core.count(c__4556__auto__);
var G__49951 = (0);
seq__49724 = G__49948;
chunk__49725 = G__49949;
count__49726 = G__49950;
i__49727 = G__49951;
continue;
} else {
var js_ns = cljs.core.first(seq__49724__$1);
var require_str_49952 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49952);


var G__49953 = cljs.core.next(seq__49724__$1);
var G__49954 = null;
var G__49955 = (0);
var G__49956 = (0);
seq__49724 = G__49953;
chunk__49725 = G__49954;
count__49726 = G__49955;
i__49727 = G__49956;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__49729 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49729) : callback.call(null,G__49729));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49733){
var map__49734 = p__49733;
var map__49734__$1 = (((((!((map__49734 == null))))?(((((map__49734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49734):map__49734);
var msg = map__49734__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49734__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49734__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49737(s__49738){
return (new cljs.core.LazySeq(null,(function (){
var s__49738__$1 = s__49738;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49738__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49744 = cljs.core.first(xs__6292__auto__);
var map__49744__$1 = (((((!((map__49744 == null))))?(((((map__49744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49744):map__49744);
var src = map__49744__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49744__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49744__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__49738__$1,map__49744,map__49744__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49734,map__49734__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49737_$_iter__49739(s__49740){
return (new cljs.core.LazySeq(null,((function (s__49738__$1,map__49744,map__49744__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49734,map__49734__$1,msg,info,reload_info){
return (function (){
var s__49740__$1 = s__49740;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49740__$1);
if(temp__5735__auto____$1){
var s__49740__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49740__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49740__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49742 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49741 = (0);
while(true){
if((i__49741 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__49741);
cljs.core.chunk_append(b__49742,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49961 = (i__49741 + (1));
i__49741 = G__49961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49742),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49737_$_iter__49739(cljs.core.chunk_rest(s__49740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49742),null);
}
} else {
var warning = cljs.core.first(s__49740__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49737_$_iter__49739(cljs.core.rest(s__49740__$2)));
}
} else {
return null;
}
break;
}
});})(s__49738__$1,map__49744,map__49744__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49734,map__49734__$1,msg,info,reload_info))
,null,null));
});})(s__49738__$1,map__49744,map__49744__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49734,map__49734__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49737(cljs.core.rest(s__49738__$1)));
} else {
var G__49964 = cljs.core.rest(s__49738__$1);
s__49738__$1 = G__49964;
continue;
}
} else {
var G__49966 = cljs.core.rest(s__49738__$1);
s__49738__$1 = G__49966;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__49749_49967 = cljs.core.seq(warnings);
var chunk__49750_49968 = null;
var count__49751_49969 = (0);
var i__49752_49970 = (0);
while(true){
if((i__49752_49970 < count__49751_49969)){
var map__49757_49971 = chunk__49750_49968.cljs$core$IIndexed$_nth$arity$2(null,i__49752_49970);
var map__49757_49972__$1 = (((((!((map__49757_49971 == null))))?(((((map__49757_49971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49757_49971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49757_49971):map__49757_49971);
var w_49973 = map__49757_49972__$1;
var msg_49974__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49757_49972__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49757_49972__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49757_49972__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49757_49972__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49977)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49975),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49976),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49974__$1)].join(''));


var G__49978 = seq__49749_49967;
var G__49979 = chunk__49750_49968;
var G__49980 = count__49751_49969;
var G__49981 = (i__49752_49970 + (1));
seq__49749_49967 = G__49978;
chunk__49750_49968 = G__49979;
count__49751_49969 = G__49980;
i__49752_49970 = G__49981;
continue;
} else {
var temp__5735__auto___49982 = cljs.core.seq(seq__49749_49967);
if(temp__5735__auto___49982){
var seq__49749_49983__$1 = temp__5735__auto___49982;
if(cljs.core.chunked_seq_QMARK_(seq__49749_49983__$1)){
var c__4556__auto___49984 = cljs.core.chunk_first(seq__49749_49983__$1);
var G__49985 = cljs.core.chunk_rest(seq__49749_49983__$1);
var G__49986 = c__4556__auto___49984;
var G__49987 = cljs.core.count(c__4556__auto___49984);
var G__49988 = (0);
seq__49749_49967 = G__49985;
chunk__49750_49968 = G__49986;
count__49751_49969 = G__49987;
i__49752_49970 = G__49988;
continue;
} else {
var map__49760_49989 = cljs.core.first(seq__49749_49983__$1);
var map__49760_49990__$1 = (((((!((map__49760_49989 == null))))?(((((map__49760_49989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49760_49989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49760_49989):map__49760_49989);
var w_49991 = map__49760_49990__$1;
var msg_49992__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49760_49990__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49760_49990__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49760_49990__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49760_49990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49995)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49993),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49994),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49992__$1)].join(''));


var G__49999 = cljs.core.next(seq__49749_49983__$1);
var G__50000 = null;
var G__50001 = (0);
var G__50002 = (0);
seq__49749_49967 = G__49999;
chunk__49750_49968 = G__50000;
count__49751_49969 = G__50001;
i__49752_49970 = G__50002;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49732_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49732_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49764){
var map__49765 = p__49764;
var map__49765__$1 = (((((!((map__49765 == null))))?(((((map__49765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49765):map__49765);
var msg = map__49765__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49765__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49767 = cljs.core.seq(updates);
var chunk__49769 = null;
var count__49770 = (0);
var i__49771 = (0);
while(true){
if((i__49771 < count__49770)){
var path = chunk__49769.cljs$core$IIndexed$_nth$arity$2(null,i__49771);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49799_50003 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49802_50004 = null;
var count__49803_50005 = (0);
var i__49804_50006 = (0);
while(true){
if((i__49804_50006 < count__49803_50005)){
var node_50007 = chunk__49802_50004.cljs$core$IIndexed$_nth$arity$2(null,i__49804_50006);
var path_match_50008 = shadow.cljs.devtools.client.browser.match_paths(node_50007.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50008)){
var new_link_50009 = (function (){var G__49813 = node_50007.cloneNode(true);
G__49813.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50008),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49813;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50008], 0));

goog.dom.insertSiblingAfter(new_link_50009,node_50007);

goog.dom.removeNode(node_50007);


var G__50010 = seq__49799_50003;
var G__50011 = chunk__49802_50004;
var G__50012 = count__49803_50005;
var G__50013 = (i__49804_50006 + (1));
seq__49799_50003 = G__50010;
chunk__49802_50004 = G__50011;
count__49803_50005 = G__50012;
i__49804_50006 = G__50013;
continue;
} else {
var G__50014 = seq__49799_50003;
var G__50015 = chunk__49802_50004;
var G__50016 = count__49803_50005;
var G__50017 = (i__49804_50006 + (1));
seq__49799_50003 = G__50014;
chunk__49802_50004 = G__50015;
count__49803_50005 = G__50016;
i__49804_50006 = G__50017;
continue;
}
} else {
var temp__5735__auto___50018 = cljs.core.seq(seq__49799_50003);
if(temp__5735__auto___50018){
var seq__49799_50019__$1 = temp__5735__auto___50018;
if(cljs.core.chunked_seq_QMARK_(seq__49799_50019__$1)){
var c__4556__auto___50020 = cljs.core.chunk_first(seq__49799_50019__$1);
var G__50021 = cljs.core.chunk_rest(seq__49799_50019__$1);
var G__50022 = c__4556__auto___50020;
var G__50023 = cljs.core.count(c__4556__auto___50020);
var G__50024 = (0);
seq__49799_50003 = G__50021;
chunk__49802_50004 = G__50022;
count__49803_50005 = G__50023;
i__49804_50006 = G__50024;
continue;
} else {
var node_50025 = cljs.core.first(seq__49799_50019__$1);
var path_match_50026 = shadow.cljs.devtools.client.browser.match_paths(node_50025.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50026)){
var new_link_50030 = (function (){var G__49814 = node_50025.cloneNode(true);
G__49814.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50026),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49814;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50026], 0));

goog.dom.insertSiblingAfter(new_link_50030,node_50025);

goog.dom.removeNode(node_50025);


var G__50031 = cljs.core.next(seq__49799_50019__$1);
var G__50032 = null;
var G__50033 = (0);
var G__50034 = (0);
seq__49799_50003 = G__50031;
chunk__49802_50004 = G__50032;
count__49803_50005 = G__50033;
i__49804_50006 = G__50034;
continue;
} else {
var G__50035 = cljs.core.next(seq__49799_50019__$1);
var G__50036 = null;
var G__50037 = (0);
var G__50038 = (0);
seq__49799_50003 = G__50035;
chunk__49802_50004 = G__50036;
count__49803_50005 = G__50037;
i__49804_50006 = G__50038;
continue;
}
}
} else {
}
}
break;
}


var G__50041 = seq__49767;
var G__50042 = chunk__49769;
var G__50043 = count__49770;
var G__50044 = (i__49771 + (1));
seq__49767 = G__50041;
chunk__49769 = G__50042;
count__49770 = G__50043;
i__49771 = G__50044;
continue;
} else {
var G__50045 = seq__49767;
var G__50046 = chunk__49769;
var G__50047 = count__49770;
var G__50048 = (i__49771 + (1));
seq__49767 = G__50045;
chunk__49769 = G__50046;
count__49770 = G__50047;
i__49771 = G__50048;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49767);
if(temp__5735__auto__){
var seq__49767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49767__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49767__$1);
var G__50049 = cljs.core.chunk_rest(seq__49767__$1);
var G__50050 = c__4556__auto__;
var G__50051 = cljs.core.count(c__4556__auto__);
var G__50052 = (0);
seq__49767 = G__50049;
chunk__49769 = G__50050;
count__49770 = G__50051;
i__49771 = G__50052;
continue;
} else {
var path = cljs.core.first(seq__49767__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49815_50053 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49818_50054 = null;
var count__49819_50055 = (0);
var i__49820_50056 = (0);
while(true){
if((i__49820_50056 < count__49819_50055)){
var node_50057 = chunk__49818_50054.cljs$core$IIndexed$_nth$arity$2(null,i__49820_50056);
var path_match_50058 = shadow.cljs.devtools.client.browser.match_paths(node_50057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50058)){
var new_link_50059 = (function (){var G__49833 = node_50057.cloneNode(true);
G__49833.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50058),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49833;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50058], 0));

goog.dom.insertSiblingAfter(new_link_50059,node_50057);

goog.dom.removeNode(node_50057);


var G__50060 = seq__49815_50053;
var G__50061 = chunk__49818_50054;
var G__50062 = count__49819_50055;
var G__50063 = (i__49820_50056 + (1));
seq__49815_50053 = G__50060;
chunk__49818_50054 = G__50061;
count__49819_50055 = G__50062;
i__49820_50056 = G__50063;
continue;
} else {
var G__50066 = seq__49815_50053;
var G__50067 = chunk__49818_50054;
var G__50068 = count__49819_50055;
var G__50069 = (i__49820_50056 + (1));
seq__49815_50053 = G__50066;
chunk__49818_50054 = G__50067;
count__49819_50055 = G__50068;
i__49820_50056 = G__50069;
continue;
}
} else {
var temp__5735__auto___50070__$1 = cljs.core.seq(seq__49815_50053);
if(temp__5735__auto___50070__$1){
var seq__49815_50071__$1 = temp__5735__auto___50070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49815_50071__$1)){
var c__4556__auto___50072 = cljs.core.chunk_first(seq__49815_50071__$1);
var G__50073 = cljs.core.chunk_rest(seq__49815_50071__$1);
var G__50074 = c__4556__auto___50072;
var G__50075 = cljs.core.count(c__4556__auto___50072);
var G__50076 = (0);
seq__49815_50053 = G__50073;
chunk__49818_50054 = G__50074;
count__49819_50055 = G__50075;
i__49820_50056 = G__50076;
continue;
} else {
var node_50077 = cljs.core.first(seq__49815_50071__$1);
var path_match_50078 = shadow.cljs.devtools.client.browser.match_paths(node_50077.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50078)){
var new_link_50079 = (function (){var G__49839 = node_50077.cloneNode(true);
G__49839.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50078),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49839;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50078], 0));

goog.dom.insertSiblingAfter(new_link_50079,node_50077);

goog.dom.removeNode(node_50077);


var G__50080 = cljs.core.next(seq__49815_50071__$1);
var G__50081 = null;
var G__50082 = (0);
var G__50083 = (0);
seq__49815_50053 = G__50080;
chunk__49818_50054 = G__50081;
count__49819_50055 = G__50082;
i__49820_50056 = G__50083;
continue;
} else {
var G__50084 = cljs.core.next(seq__49815_50071__$1);
var G__50085 = null;
var G__50086 = (0);
var G__50087 = (0);
seq__49815_50053 = G__50084;
chunk__49818_50054 = G__50085;
count__49819_50055 = G__50086;
i__49820_50056 = G__50087;
continue;
}
}
} else {
}
}
break;
}


var G__50088 = cljs.core.next(seq__49767__$1);
var G__50089 = null;
var G__50090 = (0);
var G__50091 = (0);
seq__49767 = G__50088;
chunk__49769 = G__50089;
count__49770 = G__50090;
i__49771 = G__50091;
continue;
} else {
var G__50092 = cljs.core.next(seq__49767__$1);
var G__50093 = null;
var G__50094 = (0);
var G__50095 = (0);
seq__49767 = G__50092;
chunk__49769 = G__50093;
count__49770 = G__50094;
i__49771 = G__50095;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49849){
var map__49851 = p__49849;
var map__49851__$1 = (((((!((map__49851 == null))))?(((((map__49851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49851):map__49851);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49851__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49851__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49860,done){
var map__49861 = p__49860;
var map__49861__$1 = (((((!((map__49861 == null))))?(((((map__49861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49861):map__49861);
var msg = map__49861__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49869){
var map__49870 = p__49869;
var map__49870__$1 = (((((!((map__49870 == null))))?(((((map__49870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49870):map__49870);
var src = map__49870__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e49881){var e = e49881;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49890,done){
var map__49891 = p__49890;
var map__49891__$1 = (((((!((map__49891 == null))))?(((((map__49891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49891):map__49891);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49895){
var map__49896 = p__49895;
var map__49896__$1 = (((((!((map__49896 == null))))?(((((map__49896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49896):map__49896);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49896__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49896__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49903,done){
var map__49906 = p__49903;
var map__49906__$1 = (((((!((map__49906 == null))))?(((((map__49906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49906):map__49906);
var msg = map__49906__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49906__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49909_50105 = type;
var G__49909_50106__$1 = (((G__49909_50105 instanceof cljs.core.Keyword))?G__49909_50105.fqn:null);
switch (G__49909_50106__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__49912 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49912.cljs$core$IFn$_invoke$arity$1 ? fexpr__49912.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__49912.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

shadow.cljs.devtools.client.env.patch_goog_BANG_();

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e49916){var e = e49916;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50111 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50111)){
var s_50112 = temp__5735__auto___50111;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50112.onclose = (function (e){
return null;
}));

s_50112.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
