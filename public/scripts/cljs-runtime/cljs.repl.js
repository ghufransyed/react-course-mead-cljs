goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51246){
var map__51247 = p__51246;
var map__51247__$1 = (((((!((map__51247 == null))))?(((((map__51247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51247):map__51247);
var m = map__51247__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51247__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51250_51457 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51251_51458 = null;
var count__51252_51459 = (0);
var i__51253_51460 = (0);
while(true){
if((i__51253_51460 < count__51252_51459)){
var f_51461 = chunk__51251_51458.cljs$core$IIndexed$_nth$arity$2(null,i__51253_51460);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51461], 0));


var G__51462 = seq__51250_51457;
var G__51463 = chunk__51251_51458;
var G__51464 = count__51252_51459;
var G__51465 = (i__51253_51460 + (1));
seq__51250_51457 = G__51462;
chunk__51251_51458 = G__51463;
count__51252_51459 = G__51464;
i__51253_51460 = G__51465;
continue;
} else {
var temp__5735__auto___51467 = cljs.core.seq(seq__51250_51457);
if(temp__5735__auto___51467){
var seq__51250_51468__$1 = temp__5735__auto___51467;
if(cljs.core.chunked_seq_QMARK_(seq__51250_51468__$1)){
var c__4556__auto___51469 = cljs.core.chunk_first(seq__51250_51468__$1);
var G__51470 = cljs.core.chunk_rest(seq__51250_51468__$1);
var G__51471 = c__4556__auto___51469;
var G__51472 = cljs.core.count(c__4556__auto___51469);
var G__51473 = (0);
seq__51250_51457 = G__51470;
chunk__51251_51458 = G__51471;
count__51252_51459 = G__51472;
i__51253_51460 = G__51473;
continue;
} else {
var f_51474 = cljs.core.first(seq__51250_51468__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51474], 0));


var G__51475 = cljs.core.next(seq__51250_51468__$1);
var G__51476 = null;
var G__51477 = (0);
var G__51478 = (0);
seq__51250_51457 = G__51475;
chunk__51251_51458 = G__51476;
count__51252_51459 = G__51477;
i__51253_51460 = G__51478;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51479 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51479], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51479)))?cljs.core.second(arglists_51479):arglists_51479)], 0));
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
var seq__51256_51481 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51257_51482 = null;
var count__51258_51483 = (0);
var i__51259_51484 = (0);
while(true){
if((i__51259_51484 < count__51258_51483)){
var vec__51272_51485 = chunk__51257_51482.cljs$core$IIndexed$_nth$arity$2(null,i__51259_51484);
var name_51486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51272_51485,(0),null);
var map__51275_51487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51272_51485,(1),null);
var map__51275_51488__$1 = (((((!((map__51275_51487 == null))))?(((((map__51275_51487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51275_51487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51275_51487):map__51275_51487);
var doc_51489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51275_51488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51275_51488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51486], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51490], 0));

if(cljs.core.truth_(doc_51489)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51489], 0));
} else {
}


var G__51491 = seq__51256_51481;
var G__51492 = chunk__51257_51482;
var G__51493 = count__51258_51483;
var G__51494 = (i__51259_51484 + (1));
seq__51256_51481 = G__51491;
chunk__51257_51482 = G__51492;
count__51258_51483 = G__51493;
i__51259_51484 = G__51494;
continue;
} else {
var temp__5735__auto___51495 = cljs.core.seq(seq__51256_51481);
if(temp__5735__auto___51495){
var seq__51256_51496__$1 = temp__5735__auto___51495;
if(cljs.core.chunked_seq_QMARK_(seq__51256_51496__$1)){
var c__4556__auto___51497 = cljs.core.chunk_first(seq__51256_51496__$1);
var G__51498 = cljs.core.chunk_rest(seq__51256_51496__$1);
var G__51499 = c__4556__auto___51497;
var G__51500 = cljs.core.count(c__4556__auto___51497);
var G__51501 = (0);
seq__51256_51481 = G__51498;
chunk__51257_51482 = G__51499;
count__51258_51483 = G__51500;
i__51259_51484 = G__51501;
continue;
} else {
var vec__51278_51502 = cljs.core.first(seq__51256_51496__$1);
var name_51503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51278_51502,(0),null);
var map__51281_51504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51278_51502,(1),null);
var map__51281_51505__$1 = (((((!((map__51281_51504 == null))))?(((((map__51281_51504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51281_51504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51281_51504):map__51281_51504);
var doc_51506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51281_51505__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51281_51505__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51503], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51507], 0));

if(cljs.core.truth_(doc_51506)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51506], 0));
} else {
}


var G__51508 = cljs.core.next(seq__51256_51496__$1);
var G__51509 = null;
var G__51510 = (0);
var G__51511 = (0);
seq__51256_51481 = G__51508;
chunk__51257_51482 = G__51509;
count__51258_51483 = G__51510;
i__51259_51484 = G__51511;
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

var seq__51283 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51284 = null;
var count__51285 = (0);
var i__51286 = (0);
while(true){
if((i__51286 < count__51285)){
var role = chunk__51284.cljs$core$IIndexed$_nth$arity$2(null,i__51286);
var temp__5735__auto___51512__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51512__$1)){
var spec_51513 = temp__5735__auto___51512__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51513)], 0));
} else {
}


var G__51514 = seq__51283;
var G__51515 = chunk__51284;
var G__51516 = count__51285;
var G__51517 = (i__51286 + (1));
seq__51283 = G__51514;
chunk__51284 = G__51515;
count__51285 = G__51516;
i__51286 = G__51517;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51283);
if(temp__5735__auto____$1){
var seq__51283__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51283__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51283__$1);
var G__51518 = cljs.core.chunk_rest(seq__51283__$1);
var G__51519 = c__4556__auto__;
var G__51520 = cljs.core.count(c__4556__auto__);
var G__51521 = (0);
seq__51283 = G__51518;
chunk__51284 = G__51519;
count__51285 = G__51520;
i__51286 = G__51521;
continue;
} else {
var role = cljs.core.first(seq__51283__$1);
var temp__5735__auto___51522__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51522__$2)){
var spec_51523 = temp__5735__auto___51522__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51523)], 0));
} else {
}


var G__51524 = cljs.core.next(seq__51283__$1);
var G__51525 = null;
var G__51526 = (0);
var G__51527 = (0);
seq__51283 = G__51524;
chunk__51284 = G__51525;
count__51285 = G__51526;
i__51286 = G__51527;
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
var G__51528 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51529 = cljs.core.ex_cause(t);
via = G__51528;
t = G__51529;
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
var map__51308 = datafied_throwable;
var map__51308__$1 = (((((!((map__51308 == null))))?(((((map__51308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51308):map__51308);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51308__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51308__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51308__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51309 = cljs.core.last(via);
var map__51309__$1 = (((((!((map__51309 == null))))?(((((map__51309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51309):map__51309);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51309__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51309__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51310 = data;
var map__51310__$1 = (((((!((map__51310 == null))))?(((((map__51310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51310):map__51310);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51311 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51311__$1 = (((((!((map__51311 == null))))?(((((map__51311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51311):map__51311);
var top_data = map__51311__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51323 = phase;
var G__51323__$1 = (((G__51323 instanceof cljs.core.Keyword))?G__51323.fqn:null);
switch (G__51323__$1) {
case "read-source":
var map__51324 = data;
var map__51324__$1 = (((((!((map__51324 == null))))?(((((map__51324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51324):map__51324);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51333 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51333__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51333,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51333);
var G__51333__$2 = (cljs.core.truth_((function (){var fexpr__51341 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51341.cljs$core$IFn$_invoke$arity$1 ? fexpr__51341.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51341.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51333__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51333__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51333__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51333__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51342 = top_data;
var G__51342__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51342,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51342);
var G__51342__$2 = (cljs.core.truth_((function (){var fexpr__51343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51343.cljs$core$IFn$_invoke$arity$1 ? fexpr__51343.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51343.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51342__$1);
var G__51342__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51342__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51342__$2);
var G__51342__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51342__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51342__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51342__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51342__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51359 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359,(3),null);
var G__51371 = top_data;
var G__51371__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51371,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51371);
var G__51371__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51371__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51371__$1);
var G__51371__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51371__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51371__$2);
var G__51371__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51371__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51371__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51371__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51371__$4;
}

break;
case "execution":
var vec__51372 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51294_SHARP_){
var or__4126__auto__ = (p1__51294_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__51383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51383.cljs$core$IFn$_invoke$arity$1 ? fexpr__51383.cljs$core$IFn$_invoke$arity$1(p1__51294_SHARP_) : fexpr__51383.call(null,p1__51294_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__51384 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51384__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51384,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51384);
var G__51384__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51384__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51384__$1);
var G__51384__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51384__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51384__$2);
var G__51384__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51384__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51384__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51384__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51384__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51323__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51409){
var map__51410 = p__51409;
var map__51410__$1 = (((((!((map__51410 == null))))?(((((map__51410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51410):map__51410);
var triage_data = map__51410__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__51416 = phase;
var G__51416__$1 = (((G__51416 instanceof cljs.core.Keyword))?G__51416.fqn:null);
switch (G__51416__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51417 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51419 = loc;
var G__51420 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51422_51541 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51423_51542 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51424_51543 = true;
var _STAR_print_fn_STAR__temp_val__51425_51544 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51424_51543);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51425_51544);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51403_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51403_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51423_51542);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51422_51541);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51417,G__51418,G__51419,G__51420) : format.call(null,G__51417,G__51418,G__51419,G__51420));

break;
case "macroexpansion":
var G__51426 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51427 = cause_type;
var G__51428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51429 = loc;
var G__51430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51426,G__51427,G__51428,G__51429,G__51430) : format.call(null,G__51426,G__51427,G__51428,G__51429,G__51430));

break;
case "compile-syntax-check":
var G__51432 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51433 = cause_type;
var G__51434 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51435 = loc;
var G__51436 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51432,G__51433,G__51434,G__51435,G__51436) : format.call(null,G__51432,G__51433,G__51434,G__51435,G__51436));

break;
case "compilation":
var G__51437 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51438 = cause_type;
var G__51439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51440 = loc;
var G__51441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51437,G__51438,G__51439,G__51440,G__51441) : format.call(null,G__51437,G__51438,G__51439,G__51440,G__51441));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51442 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51443 = symbol;
var G__51444 = loc;
var G__51445 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51446_51545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51447_51546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51448_51547 = true;
var _STAR_print_fn_STAR__temp_val__51449_51548 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51448_51547);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51449_51548);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51408_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51408_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51447_51546);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51446_51545);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51442,G__51443,G__51444,G__51445) : format.call(null,G__51442,G__51443,G__51444,G__51445));
} else {
var G__51450 = "Execution error%s at %s(%s).\n%s\n";
var G__51451 = cause_type;
var G__51452 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51453 = loc;
var G__51454 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51450,G__51451,G__51452,G__51453,G__51454) : format.call(null,G__51450,G__51451,G__51452,G__51453,G__51454));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51416__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
