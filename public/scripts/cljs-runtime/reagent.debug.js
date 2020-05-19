goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__49534__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49535__i = 0, G__49535__a = new Array(arguments.length -  0);
while (G__49535__i < G__49535__a.length) {G__49535__a[G__49535__i] = arguments[G__49535__i + 0]; ++G__49535__i;}
  args = new cljs.core.IndexedSeq(G__49535__a,0,null);
} 
return G__49534__delegate.call(this,args);};
G__49534.cljs$lang$maxFixedArity = 0;
G__49534.cljs$lang$applyTo = (function (arglist__49536){
var args = cljs.core.seq(arglist__49536);
return G__49534__delegate(args);
});
G__49534.cljs$core$IFn$_invoke$arity$variadic = G__49534__delegate;
return G__49534;
})()
);

(o.error = (function() { 
var G__49538__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49539__i = 0, G__49539__a = new Array(arguments.length -  0);
while (G__49539__i < G__49539__a.length) {G__49539__a[G__49539__i] = arguments[G__49539__i + 0]; ++G__49539__i;}
  args = new cljs.core.IndexedSeq(G__49539__a,0,null);
} 
return G__49538__delegate.call(this,args);};
G__49538.cljs$lang$maxFixedArity = 0;
G__49538.cljs$lang$applyTo = (function (arglist__49540){
var args = cljs.core.seq(arglist__49540);
return G__49538__delegate(args);
});
G__49538.cljs$core$IFn$_invoke$arity$variadic = G__49538__delegate;
return G__49538;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
