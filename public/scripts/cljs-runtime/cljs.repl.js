goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36690){
var map__36691 = p__36690;
var map__36691__$1 = (((((!((map__36691 == null))))?(((((map__36691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36691):map__36691);
var m = map__36691__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36691__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36691__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36695_36901 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36696_36902 = null;
var count__36697_36903 = (0);
var i__36698_36904 = (0);
while(true){
if((i__36698_36904 < count__36697_36903)){
var f_36905 = chunk__36696_36902.cljs$core$IIndexed$_nth$arity$2(null,i__36698_36904);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36905], 0));


var G__36906 = seq__36695_36901;
var G__36907 = chunk__36696_36902;
var G__36908 = count__36697_36903;
var G__36909 = (i__36698_36904 + (1));
seq__36695_36901 = G__36906;
chunk__36696_36902 = G__36907;
count__36697_36903 = G__36908;
i__36698_36904 = G__36909;
continue;
} else {
var temp__5735__auto___36910 = cljs.core.seq(seq__36695_36901);
if(temp__5735__auto___36910){
var seq__36695_36912__$1 = temp__5735__auto___36910;
if(cljs.core.chunked_seq_QMARK_(seq__36695_36912__$1)){
var c__4556__auto___36913 = cljs.core.chunk_first(seq__36695_36912__$1);
var G__36914 = cljs.core.chunk_rest(seq__36695_36912__$1);
var G__36915 = c__4556__auto___36913;
var G__36916 = cljs.core.count(c__4556__auto___36913);
var G__36917 = (0);
seq__36695_36901 = G__36914;
chunk__36696_36902 = G__36915;
count__36697_36903 = G__36916;
i__36698_36904 = G__36917;
continue;
} else {
var f_36918 = cljs.core.first(seq__36695_36912__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36918], 0));


var G__36919 = cljs.core.next(seq__36695_36912__$1);
var G__36920 = null;
var G__36921 = (0);
var G__36922 = (0);
seq__36695_36901 = G__36919;
chunk__36696_36902 = G__36920;
count__36697_36903 = G__36921;
i__36698_36904 = G__36922;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36923 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36923], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36923)))?cljs.core.second(arglists_36923):arglists_36923)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36700_36924 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36701_36925 = null;
var count__36702_36926 = (0);
var i__36703_36927 = (0);
while(true){
if((i__36703_36927 < count__36702_36926)){
var vec__36716_36928 = chunk__36701_36925.cljs$core$IIndexed$_nth$arity$2(null,i__36703_36927);
var name_36929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36716_36928,(0),null);
var map__36719_36930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36716_36928,(1),null);
var map__36719_36931__$1 = (((((!((map__36719_36930 == null))))?(((((map__36719_36930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36719_36930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36719_36930):map__36719_36930);
var doc_36932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36719_36931__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36719_36931__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36929], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36933], 0));

if(cljs.core.truth_(doc_36932)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36932], 0));
} else {
}


var G__36935 = seq__36700_36924;
var G__36936 = chunk__36701_36925;
var G__36937 = count__36702_36926;
var G__36938 = (i__36703_36927 + (1));
seq__36700_36924 = G__36935;
chunk__36701_36925 = G__36936;
count__36702_36926 = G__36937;
i__36703_36927 = G__36938;
continue;
} else {
var temp__5735__auto___36939 = cljs.core.seq(seq__36700_36924);
if(temp__5735__auto___36939){
var seq__36700_36940__$1 = temp__5735__auto___36939;
if(cljs.core.chunked_seq_QMARK_(seq__36700_36940__$1)){
var c__4556__auto___36941 = cljs.core.chunk_first(seq__36700_36940__$1);
var G__36942 = cljs.core.chunk_rest(seq__36700_36940__$1);
var G__36943 = c__4556__auto___36941;
var G__36944 = cljs.core.count(c__4556__auto___36941);
var G__36945 = (0);
seq__36700_36924 = G__36942;
chunk__36701_36925 = G__36943;
count__36702_36926 = G__36944;
i__36703_36927 = G__36945;
continue;
} else {
var vec__36722_36946 = cljs.core.first(seq__36700_36940__$1);
var name_36947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722_36946,(0),null);
var map__36725_36948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722_36946,(1),null);
var map__36725_36949__$1 = (((((!((map__36725_36948 == null))))?(((((map__36725_36948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36725_36948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36725_36948):map__36725_36948);
var doc_36950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36725_36949__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36725_36949__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36947], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36951], 0));

if(cljs.core.truth_(doc_36950)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36950], 0));
} else {
}


var G__36952 = cljs.core.next(seq__36700_36940__$1);
var G__36953 = null;
var G__36954 = (0);
var G__36955 = (0);
seq__36700_36924 = G__36952;
chunk__36701_36925 = G__36953;
count__36702_36926 = G__36954;
i__36703_36927 = G__36955;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36727 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36728 = null;
var count__36729 = (0);
var i__36730 = (0);
while(true){
if((i__36730 < count__36729)){
var role = chunk__36728.cljs$core$IIndexed$_nth$arity$2(null,i__36730);
var temp__5735__auto___36956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36956__$1)){
var spec_36957 = temp__5735__auto___36956__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36957)], 0));
} else {
}


var G__36958 = seq__36727;
var G__36959 = chunk__36728;
var G__36960 = count__36729;
var G__36961 = (i__36730 + (1));
seq__36727 = G__36958;
chunk__36728 = G__36959;
count__36729 = G__36960;
i__36730 = G__36961;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36727);
if(temp__5735__auto____$1){
var seq__36727__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36727__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36727__$1);
var G__36962 = cljs.core.chunk_rest(seq__36727__$1);
var G__36963 = c__4556__auto__;
var G__36964 = cljs.core.count(c__4556__auto__);
var G__36965 = (0);
seq__36727 = G__36962;
chunk__36728 = G__36963;
count__36729 = G__36964;
i__36730 = G__36965;
continue;
} else {
var role = cljs.core.first(seq__36727__$1);
var temp__5735__auto___36966__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36966__$2)){
var spec_36967 = temp__5735__auto___36966__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36967)], 0));
} else {
}


var G__36968 = cljs.core.next(seq__36727__$1);
var G__36969 = null;
var G__36970 = (0);
var G__36971 = (0);
seq__36727 = G__36968;
chunk__36728 = G__36969;
count__36729 = G__36970;
i__36730 = G__36971;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36972 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36973 = cljs.core.ex_cause(t);
via = G__36972;
t = G__36973;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36752 = datafied_throwable;
var map__36752__$1 = (((((!((map__36752 == null))))?(((((map__36752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36752):map__36752);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36752__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36753 = cljs.core.last(via);
var map__36753__$1 = (((((!((map__36753 == null))))?(((((map__36753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36753):map__36753);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36754 = data;
var map__36754__$1 = (((((!((map__36754 == null))))?(((((map__36754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36754):map__36754);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36754__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36754__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36754__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36755 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36755__$1 = (((((!((map__36755 == null))))?(((((map__36755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36755):map__36755);
var top_data = map__36755__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36767 = phase;
var G__36767__$1 = (((G__36767 instanceof cljs.core.Keyword))?G__36767.fqn:null);
switch (G__36767__$1) {
case "read-source":
var map__36768 = data;
var map__36768__$1 = (((((!((map__36768 == null))))?(((((map__36768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36768):map__36768);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36768__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36768__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36781 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36781__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36781,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36781);
var G__36781__$2 = (cljs.core.truth_((function (){var fexpr__36785 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36785.cljs$core$IFn$_invoke$arity$1 ? fexpr__36785.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36785.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36781__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36781__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36781__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36781__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36786 = top_data;
var G__36786__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36786,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36786);
var G__36786__$2 = (cljs.core.truth_((function (){var fexpr__36791 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36791.cljs$core$IFn$_invoke$arity$1 ? fexpr__36791.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36791.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36786__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36786__$1);
var G__36786__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36786__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36786__$2);
var G__36786__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36786__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36786__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36786__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36786__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36799 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(3),null);
var G__36815 = top_data;
var G__36815__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36815,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36815);
var G__36815__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36815__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36815__$1);
var G__36815__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36815__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36815__$2);
var G__36815__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36815__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36815__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36815__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36815__$4;
}

break;
case "execution":
var vec__36816 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36734_SHARP_){
var or__4126__auto__ = (p1__36734_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36827 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36827.cljs$core$IFn$_invoke$arity$1 ? fexpr__36827.cljs$core$IFn$_invoke$arity$1(p1__36734_SHARP_) : fexpr__36827.call(null,p1__36734_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36828 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36828__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36828,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36828);
var G__36828__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36828__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36828__$1);
var G__36828__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36828__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36828__$2);
var G__36828__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36828__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36828__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36828__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36828__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36767__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36853){
var map__36854 = p__36853;
var map__36854__$1 = (((((!((map__36854 == null))))?(((((map__36854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36854):map__36854);
var triage_data = map__36854__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36860 = phase;
var G__36860__$1 = (((G__36860 instanceof cljs.core.Keyword))?G__36860.fqn:null);
switch (G__36860__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36862 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36863 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36864 = loc;
var G__36865 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36866_36984 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36867_36985 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36868_36986 = true;
var _STAR_print_fn_STAR__temp_val__36869_36987 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36868_36986);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36869_36987);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36843_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36843_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36867_36985);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36866_36984);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36862,G__36863,G__36864,G__36865) : format.call(null,G__36862,G__36863,G__36864,G__36865));

break;
case "macroexpansion":
var G__36870 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36871 = cause_type;
var G__36872 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36873 = loc;
var G__36874 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36870,G__36871,G__36872,G__36873,G__36874) : format.call(null,G__36870,G__36871,G__36872,G__36873,G__36874));

break;
case "compile-syntax-check":
var G__36876 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36877 = cause_type;
var G__36878 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36879 = loc;
var G__36880 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36876,G__36877,G__36878,G__36879,G__36880) : format.call(null,G__36876,G__36877,G__36878,G__36879,G__36880));

break;
case "compilation":
var G__36881 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36882 = cause_type;
var G__36883 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36884 = loc;
var G__36885 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36881,G__36882,G__36883,G__36884,G__36885) : format.call(null,G__36881,G__36882,G__36883,G__36884,G__36885));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36886 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36887 = symbol;
var G__36888 = loc;
var G__36889 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36890_36989 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36891_36990 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36892_36991 = true;
var _STAR_print_fn_STAR__temp_val__36893_36992 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36892_36991);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36893_36992);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36844_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36844_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36891_36990);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36890_36989);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36886,G__36887,G__36888,G__36889) : format.call(null,G__36886,G__36887,G__36888,G__36889));
} else {
var G__36894 = "Execution error%s at %s(%s).\n%s\n";
var G__36895 = cause_type;
var G__36896 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36897 = loc;
var G__36898 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36894,G__36895,G__36896,G__36897,G__36898) : format.call(null,G__36894,G__36895,G__36896,G__36897,G__36898));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36860__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
