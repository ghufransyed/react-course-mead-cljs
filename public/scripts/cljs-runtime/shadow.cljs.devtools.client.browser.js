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
var len__4736__auto___35397 = arguments.length;
var i__4737__auto___35398 = (0);
while(true){
if((i__4737__auto___35398 < len__4736__auto___35397)){
args__4742__auto__.push((arguments[i__4737__auto___35398]));

var G__35399 = (i__4737__auto___35398 + (1));
i__4737__auto___35398 = G__35399;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35154){
var G__35155 = cljs.core.first(seq35154);
var seq35154__$1 = cljs.core.next(seq35154);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35155,seq35154__$1);
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
var seq__35157 = cljs.core.seq(sources);
var chunk__35158 = null;
var count__35159 = (0);
var i__35160 = (0);
while(true){
if((i__35160 < count__35159)){
var map__35171 = chunk__35158.cljs$core$IIndexed$_nth$arity$2(null,i__35160);
var map__35171__$1 = (((((!((map__35171 == null))))?(((((map__35171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35171):map__35171);
var src = map__35171__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35173){var e_35400 = e35173;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35400);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35400.message)].join('')));
}

var G__35402 = seq__35157;
var G__35403 = chunk__35158;
var G__35404 = count__35159;
var G__35405 = (i__35160 + (1));
seq__35157 = G__35402;
chunk__35158 = G__35403;
count__35159 = G__35404;
i__35160 = G__35405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35157);
if(temp__5735__auto__){
var seq__35157__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35157__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35157__$1);
var G__35407 = cljs.core.chunk_rest(seq__35157__$1);
var G__35408 = c__4556__auto__;
var G__35409 = cljs.core.count(c__4556__auto__);
var G__35410 = (0);
seq__35157 = G__35407;
chunk__35158 = G__35408;
count__35159 = G__35409;
i__35160 = G__35410;
continue;
} else {
var map__35175 = cljs.core.first(seq__35157__$1);
var map__35175__$1 = (((((!((map__35175 == null))))?(((((map__35175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35175):map__35175);
var src = map__35175__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35178){var e_35411 = e35178;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35411);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35411.message)].join('')));
}

var G__35412 = cljs.core.next(seq__35157__$1);
var G__35413 = null;
var G__35414 = (0);
var G__35415 = (0);
seq__35157 = G__35412;
chunk__35158 = G__35413;
count__35159 = G__35414;
i__35160 = G__35415;
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
var seq__35179 = cljs.core.seq(js_requires);
var chunk__35180 = null;
var count__35181 = (0);
var i__35182 = (0);
while(true){
if((i__35182 < count__35181)){
var js_ns = chunk__35180.cljs$core$IIndexed$_nth$arity$2(null,i__35182);
var require_str_35416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35416);


var G__35417 = seq__35179;
var G__35418 = chunk__35180;
var G__35419 = count__35181;
var G__35420 = (i__35182 + (1));
seq__35179 = G__35417;
chunk__35180 = G__35418;
count__35181 = G__35419;
i__35182 = G__35420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35179);
if(temp__5735__auto__){
var seq__35179__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35179__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35179__$1);
var G__35421 = cljs.core.chunk_rest(seq__35179__$1);
var G__35422 = c__4556__auto__;
var G__35423 = cljs.core.count(c__4556__auto__);
var G__35424 = (0);
seq__35179 = G__35421;
chunk__35180 = G__35422;
count__35181 = G__35423;
i__35182 = G__35424;
continue;
} else {
var js_ns = cljs.core.first(seq__35179__$1);
var require_str_35425 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35425);


var G__35426 = cljs.core.next(seq__35179__$1);
var G__35427 = null;
var G__35428 = (0);
var G__35429 = (0);
seq__35179 = G__35426;
chunk__35180 = G__35427;
count__35181 = G__35428;
i__35182 = G__35429;
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
var G__35187 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35187) : callback.call(null,G__35187));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35189){
var map__35191 = p__35189;
var map__35191__$1 = (((((!((map__35191 == null))))?(((((map__35191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35191):map__35191);
var msg = map__35191__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35191__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35191__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35196(s__35197){
return (new cljs.core.LazySeq(null,(function (){
var s__35197__$1 = s__35197;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35197__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35202 = cljs.core.first(xs__6292__auto__);
var map__35202__$1 = (((((!((map__35202 == null))))?(((((map__35202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35202):map__35202);
var src = map__35202__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35202__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35202__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35197__$1,map__35202,map__35202__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35191,map__35191__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35196_$_iter__35198(s__35199){
return (new cljs.core.LazySeq(null,((function (s__35197__$1,map__35202,map__35202__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35191,map__35191__$1,msg,info,reload_info){
return (function (){
var s__35199__$1 = s__35199;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35199__$1);
if(temp__5735__auto____$1){
var s__35199__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35199__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35199__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35201 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35200 = (0);
while(true){
if((i__35200 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35200);
cljs.core.chunk_append(b__35201,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35430 = (i__35200 + (1));
i__35200 = G__35430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35201),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35196_$_iter__35198(cljs.core.chunk_rest(s__35199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35201),null);
}
} else {
var warning = cljs.core.first(s__35199__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35196_$_iter__35198(cljs.core.rest(s__35199__$2)));
}
} else {
return null;
}
break;
}
});})(s__35197__$1,map__35202,map__35202__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35191,map__35191__$1,msg,info,reload_info))
,null,null));
});})(s__35197__$1,map__35202,map__35202__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35191,map__35191__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35196(cljs.core.rest(s__35197__$1)));
} else {
var G__35431 = cljs.core.rest(s__35197__$1);
s__35197__$1 = G__35431;
continue;
}
} else {
var G__35432 = cljs.core.rest(s__35197__$1);
s__35197__$1 = G__35432;
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
var seq__35222_35433 = cljs.core.seq(warnings);
var chunk__35223_35434 = null;
var count__35224_35435 = (0);
var i__35225_35436 = (0);
while(true){
if((i__35225_35436 < count__35224_35435)){
var map__35241_35437 = chunk__35223_35434.cljs$core$IIndexed$_nth$arity$2(null,i__35225_35436);
var map__35241_35438__$1 = (((((!((map__35241_35437 == null))))?(((((map__35241_35437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35241_35437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35241_35437):map__35241_35437);
var w_35439 = map__35241_35438__$1;
var msg_35440__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241_35438__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241_35438__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241_35438__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241_35438__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35443)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35441),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35442),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35440__$1)].join(''));


var G__35444 = seq__35222_35433;
var G__35445 = chunk__35223_35434;
var G__35446 = count__35224_35435;
var G__35447 = (i__35225_35436 + (1));
seq__35222_35433 = G__35444;
chunk__35223_35434 = G__35445;
count__35224_35435 = G__35446;
i__35225_35436 = G__35447;
continue;
} else {
var temp__5735__auto___35448 = cljs.core.seq(seq__35222_35433);
if(temp__5735__auto___35448){
var seq__35222_35449__$1 = temp__5735__auto___35448;
if(cljs.core.chunked_seq_QMARK_(seq__35222_35449__$1)){
var c__4556__auto___35450 = cljs.core.chunk_first(seq__35222_35449__$1);
var G__35451 = cljs.core.chunk_rest(seq__35222_35449__$1);
var G__35452 = c__4556__auto___35450;
var G__35453 = cljs.core.count(c__4556__auto___35450);
var G__35454 = (0);
seq__35222_35433 = G__35451;
chunk__35223_35434 = G__35452;
count__35224_35435 = G__35453;
i__35225_35436 = G__35454;
continue;
} else {
var map__35247_35455 = cljs.core.first(seq__35222_35449__$1);
var map__35247_35456__$1 = (((((!((map__35247_35455 == null))))?(((((map__35247_35455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247_35455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35247_35455):map__35247_35455);
var w_35457 = map__35247_35456__$1;
var msg_35458__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35456__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35456__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35456__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35456__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35461)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35459),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35460),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35458__$1)].join(''));


var G__35462 = cljs.core.next(seq__35222_35449__$1);
var G__35463 = null;
var G__35464 = (0);
var G__35465 = (0);
seq__35222_35433 = G__35462;
chunk__35223_35434 = G__35463;
count__35224_35435 = G__35464;
i__35225_35436 = G__35465;
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

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35188_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35188_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35277){
var map__35278 = p__35277;
var map__35278__$1 = (((((!((map__35278 == null))))?(((((map__35278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35278):map__35278);
var msg = map__35278__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35278__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35281 = cljs.core.seq(updates);
var chunk__35283 = null;
var count__35284 = (0);
var i__35285 = (0);
while(true){
if((i__35285 < count__35284)){
var path = chunk__35283.cljs$core$IIndexed$_nth$arity$2(null,i__35285);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35318_35472 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35321_35473 = null;
var count__35322_35474 = (0);
var i__35323_35475 = (0);
while(true){
if((i__35323_35475 < count__35322_35474)){
var node_35476 = chunk__35321_35473.cljs$core$IIndexed$_nth$arity$2(null,i__35323_35475);
var path_match_35477 = shadow.cljs.devtools.client.browser.match_paths(node_35476.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35477)){
var new_link_35478 = (function (){var G__35334 = node_35476.cloneNode(true);
G__35334.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35477),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35334;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35477], 0));

goog.dom.insertSiblingAfter(new_link_35478,node_35476);

goog.dom.removeNode(node_35476);


var G__35479 = seq__35318_35472;
var G__35480 = chunk__35321_35473;
var G__35481 = count__35322_35474;
var G__35482 = (i__35323_35475 + (1));
seq__35318_35472 = G__35479;
chunk__35321_35473 = G__35480;
count__35322_35474 = G__35481;
i__35323_35475 = G__35482;
continue;
} else {
var G__35483 = seq__35318_35472;
var G__35484 = chunk__35321_35473;
var G__35485 = count__35322_35474;
var G__35486 = (i__35323_35475 + (1));
seq__35318_35472 = G__35483;
chunk__35321_35473 = G__35484;
count__35322_35474 = G__35485;
i__35323_35475 = G__35486;
continue;
}
} else {
var temp__5735__auto___35487 = cljs.core.seq(seq__35318_35472);
if(temp__5735__auto___35487){
var seq__35318_35488__$1 = temp__5735__auto___35487;
if(cljs.core.chunked_seq_QMARK_(seq__35318_35488__$1)){
var c__4556__auto___35489 = cljs.core.chunk_first(seq__35318_35488__$1);
var G__35490 = cljs.core.chunk_rest(seq__35318_35488__$1);
var G__35491 = c__4556__auto___35489;
var G__35492 = cljs.core.count(c__4556__auto___35489);
var G__35493 = (0);
seq__35318_35472 = G__35490;
chunk__35321_35473 = G__35491;
count__35322_35474 = G__35492;
i__35323_35475 = G__35493;
continue;
} else {
var node_35494 = cljs.core.first(seq__35318_35488__$1);
var path_match_35495 = shadow.cljs.devtools.client.browser.match_paths(node_35494.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35495)){
var new_link_35496 = (function (){var G__35335 = node_35494.cloneNode(true);
G__35335.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35495),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35335;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35495], 0));

goog.dom.insertSiblingAfter(new_link_35496,node_35494);

goog.dom.removeNode(node_35494);


var G__35497 = cljs.core.next(seq__35318_35488__$1);
var G__35498 = null;
var G__35499 = (0);
var G__35500 = (0);
seq__35318_35472 = G__35497;
chunk__35321_35473 = G__35498;
count__35322_35474 = G__35499;
i__35323_35475 = G__35500;
continue;
} else {
var G__35501 = cljs.core.next(seq__35318_35488__$1);
var G__35502 = null;
var G__35503 = (0);
var G__35504 = (0);
seq__35318_35472 = G__35501;
chunk__35321_35473 = G__35502;
count__35322_35474 = G__35503;
i__35323_35475 = G__35504;
continue;
}
}
} else {
}
}
break;
}


var G__35509 = seq__35281;
var G__35510 = chunk__35283;
var G__35511 = count__35284;
var G__35512 = (i__35285 + (1));
seq__35281 = G__35509;
chunk__35283 = G__35510;
count__35284 = G__35511;
i__35285 = G__35512;
continue;
} else {
var G__35513 = seq__35281;
var G__35514 = chunk__35283;
var G__35515 = count__35284;
var G__35516 = (i__35285 + (1));
seq__35281 = G__35513;
chunk__35283 = G__35514;
count__35284 = G__35515;
i__35285 = G__35516;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35281);
if(temp__5735__auto__){
var seq__35281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35281__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35281__$1);
var G__35517 = cljs.core.chunk_rest(seq__35281__$1);
var G__35518 = c__4556__auto__;
var G__35519 = cljs.core.count(c__4556__auto__);
var G__35520 = (0);
seq__35281 = G__35517;
chunk__35283 = G__35518;
count__35284 = G__35519;
i__35285 = G__35520;
continue;
} else {
var path = cljs.core.first(seq__35281__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35336_35521 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35339_35522 = null;
var count__35340_35523 = (0);
var i__35341_35524 = (0);
while(true){
if((i__35341_35524 < count__35340_35523)){
var node_35525 = chunk__35339_35522.cljs$core$IIndexed$_nth$arity$2(null,i__35341_35524);
var path_match_35526 = shadow.cljs.devtools.client.browser.match_paths(node_35525.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35526)){
var new_link_35527 = (function (){var G__35346 = node_35525.cloneNode(true);
G__35346.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35526),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35346;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35526], 0));

goog.dom.insertSiblingAfter(new_link_35527,node_35525);

goog.dom.removeNode(node_35525);


var G__35528 = seq__35336_35521;
var G__35529 = chunk__35339_35522;
var G__35530 = count__35340_35523;
var G__35531 = (i__35341_35524 + (1));
seq__35336_35521 = G__35528;
chunk__35339_35522 = G__35529;
count__35340_35523 = G__35530;
i__35341_35524 = G__35531;
continue;
} else {
var G__35532 = seq__35336_35521;
var G__35533 = chunk__35339_35522;
var G__35534 = count__35340_35523;
var G__35535 = (i__35341_35524 + (1));
seq__35336_35521 = G__35532;
chunk__35339_35522 = G__35533;
count__35340_35523 = G__35534;
i__35341_35524 = G__35535;
continue;
}
} else {
var temp__5735__auto___35536__$1 = cljs.core.seq(seq__35336_35521);
if(temp__5735__auto___35536__$1){
var seq__35336_35537__$1 = temp__5735__auto___35536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35336_35537__$1)){
var c__4556__auto___35538 = cljs.core.chunk_first(seq__35336_35537__$1);
var G__35539 = cljs.core.chunk_rest(seq__35336_35537__$1);
var G__35540 = c__4556__auto___35538;
var G__35541 = cljs.core.count(c__4556__auto___35538);
var G__35542 = (0);
seq__35336_35521 = G__35539;
chunk__35339_35522 = G__35540;
count__35340_35523 = G__35541;
i__35341_35524 = G__35542;
continue;
} else {
var node_35543 = cljs.core.first(seq__35336_35537__$1);
var path_match_35544 = shadow.cljs.devtools.client.browser.match_paths(node_35543.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35544)){
var new_link_35545 = (function (){var G__35347 = node_35543.cloneNode(true);
G__35347.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35544),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35347;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35544], 0));

goog.dom.insertSiblingAfter(new_link_35545,node_35543);

goog.dom.removeNode(node_35543);


var G__35546 = cljs.core.next(seq__35336_35537__$1);
var G__35547 = null;
var G__35548 = (0);
var G__35549 = (0);
seq__35336_35521 = G__35546;
chunk__35339_35522 = G__35547;
count__35340_35523 = G__35548;
i__35341_35524 = G__35549;
continue;
} else {
var G__35550 = cljs.core.next(seq__35336_35537__$1);
var G__35551 = null;
var G__35552 = (0);
var G__35553 = (0);
seq__35336_35521 = G__35550;
chunk__35339_35522 = G__35551;
count__35340_35523 = G__35552;
i__35341_35524 = G__35553;
continue;
}
}
} else {
}
}
break;
}


var G__35554 = cljs.core.next(seq__35281__$1);
var G__35555 = null;
var G__35556 = (0);
var G__35557 = (0);
seq__35281 = G__35554;
chunk__35283 = G__35555;
count__35284 = G__35556;
i__35285 = G__35557;
continue;
} else {
var G__35559 = cljs.core.next(seq__35281__$1);
var G__35560 = null;
var G__35561 = (0);
var G__35562 = (0);
seq__35281 = G__35559;
chunk__35283 = G__35560;
count__35284 = G__35561;
i__35285 = G__35562;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35352){
var map__35353 = p__35352;
var map__35353__$1 = (((((!((map__35353 == null))))?(((((map__35353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35353):map__35353);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35358,done){
var map__35359 = p__35358;
var map__35359__$1 = (((((!((map__35359 == null))))?(((((map__35359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35359):map__35359);
var msg = map__35359__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35361){
var map__35362 = p__35361;
var map__35362__$1 = (((((!((map__35362 == null))))?(((((map__35362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35362):map__35362);
var src = map__35362__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35362__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e35367){var e = e35367;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35368,done){
var map__35369 = p__35368;
var map__35369__$1 = (((((!((map__35369 == null))))?(((((map__35369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35369):map__35369);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35371){
var map__35372 = p__35371;
var map__35372__$1 = (((((!((map__35372 == null))))?(((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35372):map__35372);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35374,done){
var map__35378 = p__35374;
var map__35378__$1 = (((((!((map__35378 == null))))?(((((map__35378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35378):map__35378);
var msg = map__35378__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35382_35570 = type;
var G__35382_35571__$1 = (((G__35382_35570 instanceof cljs.core.Keyword))?G__35382_35570.fqn:null);
switch (G__35382_35571__$1) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__35385 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35385.cljs$core$IFn$_invoke$arity$1 ? fexpr__35385.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__35385.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
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
}catch (e35388){var e = e35388;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35580 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35580)){
var s_35581 = temp__5735__auto___35580;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35581.onclose = (function (e){
return null;
}));

s_35581.close();

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
