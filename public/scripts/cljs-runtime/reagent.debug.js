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
var G__34888__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34892__i = 0, G__34892__a = new Array(arguments.length -  0);
while (G__34892__i < G__34892__a.length) {G__34892__a[G__34892__i] = arguments[G__34892__i + 0]; ++G__34892__i;}
  args = new cljs.core.IndexedSeq(G__34892__a,0,null);
} 
return G__34888__delegate.call(this,args);};
G__34888.cljs$lang$maxFixedArity = 0;
G__34888.cljs$lang$applyTo = (function (arglist__34897){
var args = cljs.core.seq(arglist__34897);
return G__34888__delegate(args);
});
G__34888.cljs$core$IFn$_invoke$arity$variadic = G__34888__delegate;
return G__34888;
})()
);

(o.error = (function() { 
var G__34898__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34900__i = 0, G__34900__a = new Array(arguments.length -  0);
while (G__34900__i < G__34900__a.length) {G__34900__a[G__34900__i] = arguments[G__34900__i + 0]; ++G__34900__i;}
  args = new cljs.core.IndexedSeq(G__34900__a,0,null);
} 
return G__34898__delegate.call(this,args);};
G__34898.cljs$lang$maxFixedArity = 0;
G__34898.cljs$lang$applyTo = (function (arglist__34901){
var args = cljs.core.seq(arglist__34901);
return G__34898__delegate(args);
});
G__34898.cljs$core$IFn$_invoke$arity$variadic = G__34898__delegate;
return G__34898;
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
