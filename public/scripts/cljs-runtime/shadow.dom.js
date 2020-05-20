goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33587 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33587(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33588 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33588(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32532 = coll;
var G__32533 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32532,G__32533) : shadow.dom.lazy_native_coll_seq.call(null,G__32532,G__32533));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32559 = arguments.length;
switch (G__32559) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32581 = arguments.length;
switch (G__32581) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32592 = arguments.length;
switch (G__32592) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32601 = arguments.length;
switch (G__32601) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32606 = arguments.length;
switch (G__32606) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32624){if((e32624 instanceof Object)){
var e = e32624;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32624;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32646 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32647 = null;
var count__32648 = (0);
var i__32649 = (0);
while(true){
if((i__32649 < count__32648)){
var el = chunk__32647.cljs$core$IIndexed$_nth$arity$2(null,i__32649);
var handler_33598__$1 = ((function (seq__32646,chunk__32647,count__32648,i__32649,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32646,chunk__32647,count__32648,i__32649,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33598__$1);


var G__33599 = seq__32646;
var G__33600 = chunk__32647;
var G__33601 = count__32648;
var G__33602 = (i__32649 + (1));
seq__32646 = G__33599;
chunk__32647 = G__33600;
count__32648 = G__33601;
i__32649 = G__33602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32646);
if(temp__5735__auto__){
var seq__32646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32646__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32646__$1);
var G__33603 = cljs.core.chunk_rest(seq__32646__$1);
var G__33604 = c__4556__auto__;
var G__33605 = cljs.core.count(c__4556__auto__);
var G__33606 = (0);
seq__32646 = G__33603;
chunk__32647 = G__33604;
count__32648 = G__33605;
i__32649 = G__33606;
continue;
} else {
var el = cljs.core.first(seq__32646__$1);
var handler_33607__$1 = ((function (seq__32646,chunk__32647,count__32648,i__32649,el,seq__32646__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32646,chunk__32647,count__32648,i__32649,el,seq__32646__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33607__$1);


var G__33609 = cljs.core.next(seq__32646__$1);
var G__33610 = null;
var G__33611 = (0);
var G__33612 = (0);
seq__32646 = G__33609;
chunk__32647 = G__33610;
count__32648 = G__33611;
i__32649 = G__33612;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32684 = arguments.length;
switch (G__32684) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32708 = cljs.core.seq(events);
var chunk__32709 = null;
var count__32710 = (0);
var i__32711 = (0);
while(true){
if((i__32711 < count__32710)){
var vec__32728 = chunk__32709.cljs$core$IIndexed$_nth$arity$2(null,i__32711);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33619 = seq__32708;
var G__33620 = chunk__32709;
var G__33621 = count__32710;
var G__33622 = (i__32711 + (1));
seq__32708 = G__33619;
chunk__32709 = G__33620;
count__32710 = G__33621;
i__32711 = G__33622;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32708);
if(temp__5735__auto__){
var seq__32708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32708__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32708__$1);
var G__33625 = cljs.core.chunk_rest(seq__32708__$1);
var G__33626 = c__4556__auto__;
var G__33627 = cljs.core.count(c__4556__auto__);
var G__33628 = (0);
seq__32708 = G__33625;
chunk__32709 = G__33626;
count__32710 = G__33627;
i__32711 = G__33628;
continue;
} else {
var vec__32735 = cljs.core.first(seq__32708__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32735,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33631 = cljs.core.next(seq__32708__$1);
var G__33632 = null;
var G__33633 = (0);
var G__33634 = (0);
seq__32708 = G__33631;
chunk__32709 = G__33632;
count__32710 = G__33633;
i__32711 = G__33634;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32745 = cljs.core.seq(styles);
var chunk__32746 = null;
var count__32747 = (0);
var i__32748 = (0);
while(true){
if((i__32748 < count__32747)){
var vec__32768 = chunk__32746.cljs$core$IIndexed$_nth$arity$2(null,i__32748);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33637 = seq__32745;
var G__33638 = chunk__32746;
var G__33639 = count__32747;
var G__33640 = (i__32748 + (1));
seq__32745 = G__33637;
chunk__32746 = G__33638;
count__32747 = G__33639;
i__32748 = G__33640;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32745);
if(temp__5735__auto__){
var seq__32745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32745__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32745__$1);
var G__33643 = cljs.core.chunk_rest(seq__32745__$1);
var G__33644 = c__4556__auto__;
var G__33645 = cljs.core.count(c__4556__auto__);
var G__33646 = (0);
seq__32745 = G__33643;
chunk__32746 = G__33644;
count__32747 = G__33645;
i__32748 = G__33646;
continue;
} else {
var vec__32780 = cljs.core.first(seq__32745__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32780,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33648 = cljs.core.next(seq__32745__$1);
var G__33649 = null;
var G__33650 = (0);
var G__33651 = (0);
seq__32745 = G__33648;
chunk__32746 = G__33649;
count__32747 = G__33650;
i__32748 = G__33651;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32791_33653 = key;
var G__32791_33654__$1 = (((G__32791_33653 instanceof cljs.core.Keyword))?G__32791_33653.fqn:null);
switch (G__32791_33654__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33660 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33660,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33660,"aria-");
}
})())){
el.setAttribute(ks_33660,value);
} else {
(el[ks_33660] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32843){
var map__32844 = p__32843;
var map__32844__$1 = (((((!((map__32844 == null))))?(((((map__32844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32844):map__32844);
var props = map__32844__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32851 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32851,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32851,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32851,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32858 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32858,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32858;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32885){
var vec__32886 = p__32885;
var seq__32887 = cljs.core.seq(vec__32886);
var first__32888 = cljs.core.first(seq__32887);
var seq__32887__$1 = cljs.core.next(seq__32887);
var nn = first__32888;
var first__32888__$1 = cljs.core.first(seq__32887__$1);
var seq__32887__$2 = cljs.core.next(seq__32887__$1);
var np = first__32888__$1;
var nc = seq__32887__$2;
var node = vec__32886;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32889 = nn;
var G__32890 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32889,G__32890) : create_fn.call(null,G__32889,G__32890));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32892 = nn;
var G__32893 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32892,G__32893) : create_fn.call(null,G__32892,G__32893));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32902 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32902,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32902,(1),null);
var seq__32906_33683 = cljs.core.seq(node_children);
var chunk__32907_33684 = null;
var count__32908_33685 = (0);
var i__32909_33686 = (0);
while(true){
if((i__32909_33686 < count__32908_33685)){
var child_struct_33687 = chunk__32907_33684.cljs$core$IIndexed$_nth$arity$2(null,i__32909_33686);
var children_33688 = shadow.dom.dom_node(child_struct_33687);
if(cljs.core.seq_QMARK_(children_33688)){
var seq__32980_33689 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33688));
var chunk__32982_33690 = null;
var count__32983_33691 = (0);
var i__32984_33692 = (0);
while(true){
if((i__32984_33692 < count__32983_33691)){
var child_33694 = chunk__32982_33690.cljs$core$IIndexed$_nth$arity$2(null,i__32984_33692);
if(cljs.core.truth_(child_33694)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33694);


var G__33696 = seq__32980_33689;
var G__33697 = chunk__32982_33690;
var G__33698 = count__32983_33691;
var G__33699 = (i__32984_33692 + (1));
seq__32980_33689 = G__33696;
chunk__32982_33690 = G__33697;
count__32983_33691 = G__33698;
i__32984_33692 = G__33699;
continue;
} else {
var G__33700 = seq__32980_33689;
var G__33701 = chunk__32982_33690;
var G__33702 = count__32983_33691;
var G__33703 = (i__32984_33692 + (1));
seq__32980_33689 = G__33700;
chunk__32982_33690 = G__33701;
count__32983_33691 = G__33702;
i__32984_33692 = G__33703;
continue;
}
} else {
var temp__5735__auto___33704 = cljs.core.seq(seq__32980_33689);
if(temp__5735__auto___33704){
var seq__32980_33705__$1 = temp__5735__auto___33704;
if(cljs.core.chunked_seq_QMARK_(seq__32980_33705__$1)){
var c__4556__auto___33706 = cljs.core.chunk_first(seq__32980_33705__$1);
var G__33707 = cljs.core.chunk_rest(seq__32980_33705__$1);
var G__33708 = c__4556__auto___33706;
var G__33709 = cljs.core.count(c__4556__auto___33706);
var G__33710 = (0);
seq__32980_33689 = G__33707;
chunk__32982_33690 = G__33708;
count__32983_33691 = G__33709;
i__32984_33692 = G__33710;
continue;
} else {
var child_33712 = cljs.core.first(seq__32980_33705__$1);
if(cljs.core.truth_(child_33712)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33712);


var G__33714 = cljs.core.next(seq__32980_33705__$1);
var G__33715 = null;
var G__33716 = (0);
var G__33717 = (0);
seq__32980_33689 = G__33714;
chunk__32982_33690 = G__33715;
count__32983_33691 = G__33716;
i__32984_33692 = G__33717;
continue;
} else {
var G__33719 = cljs.core.next(seq__32980_33705__$1);
var G__33720 = null;
var G__33721 = (0);
var G__33722 = (0);
seq__32980_33689 = G__33719;
chunk__32982_33690 = G__33720;
count__32983_33691 = G__33721;
i__32984_33692 = G__33722;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33688);
}


var G__33725 = seq__32906_33683;
var G__33726 = chunk__32907_33684;
var G__33727 = count__32908_33685;
var G__33728 = (i__32909_33686 + (1));
seq__32906_33683 = G__33725;
chunk__32907_33684 = G__33726;
count__32908_33685 = G__33727;
i__32909_33686 = G__33728;
continue;
} else {
var temp__5735__auto___33729 = cljs.core.seq(seq__32906_33683);
if(temp__5735__auto___33729){
var seq__32906_33730__$1 = temp__5735__auto___33729;
if(cljs.core.chunked_seq_QMARK_(seq__32906_33730__$1)){
var c__4556__auto___33731 = cljs.core.chunk_first(seq__32906_33730__$1);
var G__33732 = cljs.core.chunk_rest(seq__32906_33730__$1);
var G__33733 = c__4556__auto___33731;
var G__33734 = cljs.core.count(c__4556__auto___33731);
var G__33735 = (0);
seq__32906_33683 = G__33732;
chunk__32907_33684 = G__33733;
count__32908_33685 = G__33734;
i__32909_33686 = G__33735;
continue;
} else {
var child_struct_33738 = cljs.core.first(seq__32906_33730__$1);
var children_33739 = shadow.dom.dom_node(child_struct_33738);
if(cljs.core.seq_QMARK_(children_33739)){
var seq__33013_33740 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33739));
var chunk__33015_33741 = null;
var count__33016_33742 = (0);
var i__33017_33743 = (0);
while(true){
if((i__33017_33743 < count__33016_33742)){
var child_33747 = chunk__33015_33741.cljs$core$IIndexed$_nth$arity$2(null,i__33017_33743);
if(cljs.core.truth_(child_33747)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33747);


var G__33749 = seq__33013_33740;
var G__33750 = chunk__33015_33741;
var G__33751 = count__33016_33742;
var G__33752 = (i__33017_33743 + (1));
seq__33013_33740 = G__33749;
chunk__33015_33741 = G__33750;
count__33016_33742 = G__33751;
i__33017_33743 = G__33752;
continue;
} else {
var G__33755 = seq__33013_33740;
var G__33756 = chunk__33015_33741;
var G__33757 = count__33016_33742;
var G__33758 = (i__33017_33743 + (1));
seq__33013_33740 = G__33755;
chunk__33015_33741 = G__33756;
count__33016_33742 = G__33757;
i__33017_33743 = G__33758;
continue;
}
} else {
var temp__5735__auto___33759__$1 = cljs.core.seq(seq__33013_33740);
if(temp__5735__auto___33759__$1){
var seq__33013_33761__$1 = temp__5735__auto___33759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33013_33761__$1)){
var c__4556__auto___33763 = cljs.core.chunk_first(seq__33013_33761__$1);
var G__33764 = cljs.core.chunk_rest(seq__33013_33761__$1);
var G__33765 = c__4556__auto___33763;
var G__33766 = cljs.core.count(c__4556__auto___33763);
var G__33767 = (0);
seq__33013_33740 = G__33764;
chunk__33015_33741 = G__33765;
count__33016_33742 = G__33766;
i__33017_33743 = G__33767;
continue;
} else {
var child_33769 = cljs.core.first(seq__33013_33761__$1);
if(cljs.core.truth_(child_33769)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33769);


var G__33770 = cljs.core.next(seq__33013_33761__$1);
var G__33771 = null;
var G__33772 = (0);
var G__33773 = (0);
seq__33013_33740 = G__33770;
chunk__33015_33741 = G__33771;
count__33016_33742 = G__33772;
i__33017_33743 = G__33773;
continue;
} else {
var G__33774 = cljs.core.next(seq__33013_33761__$1);
var G__33775 = null;
var G__33776 = (0);
var G__33777 = (0);
seq__33013_33740 = G__33774;
chunk__33015_33741 = G__33775;
count__33016_33742 = G__33776;
i__33017_33743 = G__33777;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33739);
}


var G__33779 = cljs.core.next(seq__32906_33730__$1);
var G__33780 = null;
var G__33781 = (0);
var G__33782 = (0);
seq__32906_33683 = G__33779;
chunk__32907_33684 = G__33780;
count__32908_33685 = G__33781;
i__32909_33686 = G__33782;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33069 = cljs.core.seq(node);
var chunk__33070 = null;
var count__33071 = (0);
var i__33072 = (0);
while(true){
if((i__33072 < count__33071)){
var n = chunk__33070.cljs$core$IIndexed$_nth$arity$2(null,i__33072);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33794 = seq__33069;
var G__33795 = chunk__33070;
var G__33796 = count__33071;
var G__33797 = (i__33072 + (1));
seq__33069 = G__33794;
chunk__33070 = G__33795;
count__33071 = G__33796;
i__33072 = G__33797;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33069);
if(temp__5735__auto__){
var seq__33069__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33069__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33069__$1);
var G__33799 = cljs.core.chunk_rest(seq__33069__$1);
var G__33800 = c__4556__auto__;
var G__33801 = cljs.core.count(c__4556__auto__);
var G__33802 = (0);
seq__33069 = G__33799;
chunk__33070 = G__33800;
count__33071 = G__33801;
i__33072 = G__33802;
continue;
} else {
var n = cljs.core.first(seq__33069__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33805 = cljs.core.next(seq__33069__$1);
var G__33806 = null;
var G__33807 = (0);
var G__33808 = (0);
seq__33069 = G__33805;
chunk__33070 = G__33806;
count__33071 = G__33807;
i__33072 = G__33808;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33086 = arguments.length;
switch (G__33086) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33093 = arguments.length;
switch (G__33093) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33114 = arguments.length;
switch (G__33114) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33823 = arguments.length;
var i__4737__auto___33824 = (0);
while(true){
if((i__4737__auto___33824 < len__4736__auto___33823)){
args__4742__auto__.push((arguments[i__4737__auto___33824]));

var G__33826 = (i__4737__auto___33824 + (1));
i__4737__auto___33824 = G__33826;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33145_33833 = cljs.core.seq(nodes);
var chunk__33146_33834 = null;
var count__33147_33835 = (0);
var i__33148_33836 = (0);
while(true){
if((i__33148_33836 < count__33147_33835)){
var node_33837 = chunk__33146_33834.cljs$core$IIndexed$_nth$arity$2(null,i__33148_33836);
fragment.appendChild(shadow.dom._to_dom(node_33837));


var G__33839 = seq__33145_33833;
var G__33840 = chunk__33146_33834;
var G__33841 = count__33147_33835;
var G__33842 = (i__33148_33836 + (1));
seq__33145_33833 = G__33839;
chunk__33146_33834 = G__33840;
count__33147_33835 = G__33841;
i__33148_33836 = G__33842;
continue;
} else {
var temp__5735__auto___33843 = cljs.core.seq(seq__33145_33833);
if(temp__5735__auto___33843){
var seq__33145_33845__$1 = temp__5735__auto___33843;
if(cljs.core.chunked_seq_QMARK_(seq__33145_33845__$1)){
var c__4556__auto___33847 = cljs.core.chunk_first(seq__33145_33845__$1);
var G__33848 = cljs.core.chunk_rest(seq__33145_33845__$1);
var G__33849 = c__4556__auto___33847;
var G__33850 = cljs.core.count(c__4556__auto___33847);
var G__33851 = (0);
seq__33145_33833 = G__33848;
chunk__33146_33834 = G__33849;
count__33147_33835 = G__33850;
i__33148_33836 = G__33851;
continue;
} else {
var node_33853 = cljs.core.first(seq__33145_33845__$1);
fragment.appendChild(shadow.dom._to_dom(node_33853));


var G__33854 = cljs.core.next(seq__33145_33845__$1);
var G__33855 = null;
var G__33856 = (0);
var G__33857 = (0);
seq__33145_33833 = G__33854;
chunk__33146_33834 = G__33855;
count__33147_33835 = G__33856;
i__33148_33836 = G__33857;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33140){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33140));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33171_33858 = cljs.core.seq(scripts);
var chunk__33172_33859 = null;
var count__33173_33860 = (0);
var i__33174_33861 = (0);
while(true){
if((i__33174_33861 < count__33173_33860)){
var vec__33188_33863 = chunk__33172_33859.cljs$core$IIndexed$_nth$arity$2(null,i__33174_33861);
var script_tag_33864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33188_33863,(0),null);
var script_body_33865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33188_33863,(1),null);
eval(script_body_33865);


var G__33871 = seq__33171_33858;
var G__33872 = chunk__33172_33859;
var G__33873 = count__33173_33860;
var G__33874 = (i__33174_33861 + (1));
seq__33171_33858 = G__33871;
chunk__33172_33859 = G__33872;
count__33173_33860 = G__33873;
i__33174_33861 = G__33874;
continue;
} else {
var temp__5735__auto___33879 = cljs.core.seq(seq__33171_33858);
if(temp__5735__auto___33879){
var seq__33171_33881__$1 = temp__5735__auto___33879;
if(cljs.core.chunked_seq_QMARK_(seq__33171_33881__$1)){
var c__4556__auto___33886 = cljs.core.chunk_first(seq__33171_33881__$1);
var G__33887 = cljs.core.chunk_rest(seq__33171_33881__$1);
var G__33888 = c__4556__auto___33886;
var G__33889 = cljs.core.count(c__4556__auto___33886);
var G__33890 = (0);
seq__33171_33858 = G__33887;
chunk__33172_33859 = G__33888;
count__33173_33860 = G__33889;
i__33174_33861 = G__33890;
continue;
} else {
var vec__33195_33895 = cljs.core.first(seq__33171_33881__$1);
var script_tag_33896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33195_33895,(0),null);
var script_body_33897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33195_33895,(1),null);
eval(script_body_33897);


var G__33905 = cljs.core.next(seq__33171_33881__$1);
var G__33906 = null;
var G__33907 = (0);
var G__33908 = (0);
seq__33171_33858 = G__33905;
chunk__33172_33859 = G__33906;
count__33173_33860 = G__33907;
i__33174_33861 = G__33908;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33198){
var vec__33199 = p__33198;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33208 = arguments.length;
switch (G__33208) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33219 = cljs.core.seq(style_keys);
var chunk__33220 = null;
var count__33221 = (0);
var i__33222 = (0);
while(true){
if((i__33222 < count__33221)){
var it = chunk__33220.cljs$core$IIndexed$_nth$arity$2(null,i__33222);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33954 = seq__33219;
var G__33955 = chunk__33220;
var G__33956 = count__33221;
var G__33957 = (i__33222 + (1));
seq__33219 = G__33954;
chunk__33220 = G__33955;
count__33221 = G__33956;
i__33222 = G__33957;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33219);
if(temp__5735__auto__){
var seq__33219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33219__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33219__$1);
var G__33962 = cljs.core.chunk_rest(seq__33219__$1);
var G__33963 = c__4556__auto__;
var G__33964 = cljs.core.count(c__4556__auto__);
var G__33965 = (0);
seq__33219 = G__33962;
chunk__33220 = G__33963;
count__33221 = G__33964;
i__33222 = G__33965;
continue;
} else {
var it = cljs.core.first(seq__33219__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33968 = cljs.core.next(seq__33219__$1);
var G__33969 = null;
var G__33970 = (0);
var G__33971 = (0);
seq__33219 = G__33968;
chunk__33220 = G__33969;
count__33221 = G__33970;
i__33222 = G__33971;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33224,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33229 = k33224;
var G__33229__$1 = (((G__33229 instanceof cljs.core.Keyword))?G__33229.fqn:null);
switch (G__33229__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33224,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33230){
var vec__33232 = p__33230;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33223){
var self__ = this;
var G__33223__$1 = this;
return (new cljs.core.RecordIter((0),G__33223__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33225,other33226){
var self__ = this;
var this33225__$1 = this;
return (((!((other33226 == null)))) && ((this33225__$1.constructor === other33226.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33225__$1.x,other33226.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33225__$1.y,other33226.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33225__$1.__extmap,other33226.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33223){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33253 = cljs.core.keyword_identical_QMARK_;
var expr__33254 = k__4388__auto__;
if(cljs.core.truth_((pred__33253.cljs$core$IFn$_invoke$arity$2 ? pred__33253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33254) : pred__33253.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33254)))){
return (new shadow.dom.Coordinate(G__33223,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33253.cljs$core$IFn$_invoke$arity$2 ? pred__33253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33254) : pred__33253.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33254)))){
return (new shadow.dom.Coordinate(self__.x,G__33223,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33223),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33223){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33223,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33227){
var extmap__4419__auto__ = (function (){var G__33266 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33227,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33227)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33266);
} else {
return G__33266;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33227),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33277,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33288 = k33277;
var G__33288__$1 = (((G__33288 instanceof cljs.core.Keyword))?G__33288.fqn:null);
switch (G__33288__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33277,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33291){
var vec__33293 = p__33291;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33293,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33293,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33276){
var self__ = this;
var G__33276__$1 = this;
return (new cljs.core.RecordIter((0),G__33276__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33278,other33279){
var self__ = this;
var this33278__$1 = this;
return (((!((other33279 == null)))) && ((this33278__$1.constructor === other33279.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33278__$1.w,other33279.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33278__$1.h,other33279.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33278__$1.__extmap,other33279.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33276){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33307 = cljs.core.keyword_identical_QMARK_;
var expr__33308 = k__4388__auto__;
if(cljs.core.truth_((pred__33307.cljs$core$IFn$_invoke$arity$2 ? pred__33307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33308) : pred__33307.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33308)))){
return (new shadow.dom.Size(G__33276,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33307.cljs$core$IFn$_invoke$arity$2 ? pred__33307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33308) : pred__33307.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33308)))){
return (new shadow.dom.Size(self__.w,G__33276,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33276),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33276){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33276,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33281){
var extmap__4419__auto__ = (function (){var G__33313 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33281,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33281)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33313);
} else {
return G__33313;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33281),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33281),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34052 = (i + (1));
var G__34053 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34052;
ret = G__34053;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33333){
var vec__33334 = p__33333;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33339 = arguments.length;
switch (G__33339) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34056 = ps;
var G__34057 = (i + (1));
el__$1 = G__34056;
i = G__34057;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33374 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33381_34061 = cljs.core.seq(props);
var chunk__33382_34062 = null;
var count__33383_34063 = (0);
var i__33384_34064 = (0);
while(true){
if((i__33384_34064 < count__33383_34063)){
var vec__33399_34066 = chunk__33382_34062.cljs$core$IIndexed$_nth$arity$2(null,i__33384_34064);
var k_34067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399_34066,(0),null);
var v_34068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399_34066,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34067);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34067),v_34068);


var G__34069 = seq__33381_34061;
var G__34070 = chunk__33382_34062;
var G__34071 = count__33383_34063;
var G__34072 = (i__33384_34064 + (1));
seq__33381_34061 = G__34069;
chunk__33382_34062 = G__34070;
count__33383_34063 = G__34071;
i__33384_34064 = G__34072;
continue;
} else {
var temp__5735__auto___34073 = cljs.core.seq(seq__33381_34061);
if(temp__5735__auto___34073){
var seq__33381_34074__$1 = temp__5735__auto___34073;
if(cljs.core.chunked_seq_QMARK_(seq__33381_34074__$1)){
var c__4556__auto___34075 = cljs.core.chunk_first(seq__33381_34074__$1);
var G__34076 = cljs.core.chunk_rest(seq__33381_34074__$1);
var G__34077 = c__4556__auto___34075;
var G__34078 = cljs.core.count(c__4556__auto___34075);
var G__34079 = (0);
seq__33381_34061 = G__34076;
chunk__33382_34062 = G__34077;
count__33383_34063 = G__34078;
i__33384_34064 = G__34079;
continue;
} else {
var vec__33403_34081 = cljs.core.first(seq__33381_34074__$1);
var k_34082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403_34081,(0),null);
var v_34083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403_34081,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34082);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34082),v_34083);


var G__34084 = cljs.core.next(seq__33381_34074__$1);
var G__34085 = null;
var G__34086 = (0);
var G__34087 = (0);
seq__33381_34061 = G__34084;
chunk__33382_34062 = G__34085;
count__33383_34063 = G__34086;
i__33384_34064 = G__34087;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33410 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33410,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33410,(1),null);
var seq__33414_34091 = cljs.core.seq(node_children);
var chunk__33416_34092 = null;
var count__33417_34093 = (0);
var i__33418_34094 = (0);
while(true){
if((i__33418_34094 < count__33417_34093)){
var child_struct_34095 = chunk__33416_34092.cljs$core$IIndexed$_nth$arity$2(null,i__33418_34094);
if((!((child_struct_34095 == null)))){
if(typeof child_struct_34095 === 'string'){
var text_34096 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34096),child_struct_34095].join(''));
} else {
var children_34097 = shadow.dom.svg_node(child_struct_34095);
if(cljs.core.seq_QMARK_(children_34097)){
var seq__33476_34099 = cljs.core.seq(children_34097);
var chunk__33478_34100 = null;
var count__33479_34101 = (0);
var i__33480_34102 = (0);
while(true){
if((i__33480_34102 < count__33479_34101)){
var child_34103 = chunk__33478_34100.cljs$core$IIndexed$_nth$arity$2(null,i__33480_34102);
if(cljs.core.truth_(child_34103)){
node.appendChild(child_34103);


var G__34105 = seq__33476_34099;
var G__34106 = chunk__33478_34100;
var G__34107 = count__33479_34101;
var G__34108 = (i__33480_34102 + (1));
seq__33476_34099 = G__34105;
chunk__33478_34100 = G__34106;
count__33479_34101 = G__34107;
i__33480_34102 = G__34108;
continue;
} else {
var G__34109 = seq__33476_34099;
var G__34110 = chunk__33478_34100;
var G__34111 = count__33479_34101;
var G__34112 = (i__33480_34102 + (1));
seq__33476_34099 = G__34109;
chunk__33478_34100 = G__34110;
count__33479_34101 = G__34111;
i__33480_34102 = G__34112;
continue;
}
} else {
var temp__5735__auto___34113 = cljs.core.seq(seq__33476_34099);
if(temp__5735__auto___34113){
var seq__33476_34114__$1 = temp__5735__auto___34113;
if(cljs.core.chunked_seq_QMARK_(seq__33476_34114__$1)){
var c__4556__auto___34115 = cljs.core.chunk_first(seq__33476_34114__$1);
var G__34116 = cljs.core.chunk_rest(seq__33476_34114__$1);
var G__34117 = c__4556__auto___34115;
var G__34118 = cljs.core.count(c__4556__auto___34115);
var G__34119 = (0);
seq__33476_34099 = G__34116;
chunk__33478_34100 = G__34117;
count__33479_34101 = G__34118;
i__33480_34102 = G__34119;
continue;
} else {
var child_34120 = cljs.core.first(seq__33476_34114__$1);
if(cljs.core.truth_(child_34120)){
node.appendChild(child_34120);


var G__34121 = cljs.core.next(seq__33476_34114__$1);
var G__34122 = null;
var G__34123 = (0);
var G__34124 = (0);
seq__33476_34099 = G__34121;
chunk__33478_34100 = G__34122;
count__33479_34101 = G__34123;
i__33480_34102 = G__34124;
continue;
} else {
var G__34127 = cljs.core.next(seq__33476_34114__$1);
var G__34128 = null;
var G__34129 = (0);
var G__34130 = (0);
seq__33476_34099 = G__34127;
chunk__33478_34100 = G__34128;
count__33479_34101 = G__34129;
i__33480_34102 = G__34130;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34097);
}
}


var G__34133 = seq__33414_34091;
var G__34134 = chunk__33416_34092;
var G__34135 = count__33417_34093;
var G__34136 = (i__33418_34094 + (1));
seq__33414_34091 = G__34133;
chunk__33416_34092 = G__34134;
count__33417_34093 = G__34135;
i__33418_34094 = G__34136;
continue;
} else {
var G__34138 = seq__33414_34091;
var G__34139 = chunk__33416_34092;
var G__34140 = count__33417_34093;
var G__34141 = (i__33418_34094 + (1));
seq__33414_34091 = G__34138;
chunk__33416_34092 = G__34139;
count__33417_34093 = G__34140;
i__33418_34094 = G__34141;
continue;
}
} else {
var temp__5735__auto___34142 = cljs.core.seq(seq__33414_34091);
if(temp__5735__auto___34142){
var seq__33414_34144__$1 = temp__5735__auto___34142;
if(cljs.core.chunked_seq_QMARK_(seq__33414_34144__$1)){
var c__4556__auto___34145 = cljs.core.chunk_first(seq__33414_34144__$1);
var G__34146 = cljs.core.chunk_rest(seq__33414_34144__$1);
var G__34147 = c__4556__auto___34145;
var G__34148 = cljs.core.count(c__4556__auto___34145);
var G__34149 = (0);
seq__33414_34091 = G__34146;
chunk__33416_34092 = G__34147;
count__33417_34093 = G__34148;
i__33418_34094 = G__34149;
continue;
} else {
var child_struct_34150 = cljs.core.first(seq__33414_34144__$1);
if((!((child_struct_34150 == null)))){
if(typeof child_struct_34150 === 'string'){
var text_34151 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34151),child_struct_34150].join(''));
} else {
var children_34152 = shadow.dom.svg_node(child_struct_34150);
if(cljs.core.seq_QMARK_(children_34152)){
var seq__33488_34153 = cljs.core.seq(children_34152);
var chunk__33490_34154 = null;
var count__33491_34155 = (0);
var i__33492_34156 = (0);
while(true){
if((i__33492_34156 < count__33491_34155)){
var child_34157 = chunk__33490_34154.cljs$core$IIndexed$_nth$arity$2(null,i__33492_34156);
if(cljs.core.truth_(child_34157)){
node.appendChild(child_34157);


var G__34158 = seq__33488_34153;
var G__34159 = chunk__33490_34154;
var G__34160 = count__33491_34155;
var G__34161 = (i__33492_34156 + (1));
seq__33488_34153 = G__34158;
chunk__33490_34154 = G__34159;
count__33491_34155 = G__34160;
i__33492_34156 = G__34161;
continue;
} else {
var G__34162 = seq__33488_34153;
var G__34163 = chunk__33490_34154;
var G__34164 = count__33491_34155;
var G__34165 = (i__33492_34156 + (1));
seq__33488_34153 = G__34162;
chunk__33490_34154 = G__34163;
count__33491_34155 = G__34164;
i__33492_34156 = G__34165;
continue;
}
} else {
var temp__5735__auto___34166__$1 = cljs.core.seq(seq__33488_34153);
if(temp__5735__auto___34166__$1){
var seq__33488_34168__$1 = temp__5735__auto___34166__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33488_34168__$1)){
var c__4556__auto___34169 = cljs.core.chunk_first(seq__33488_34168__$1);
var G__34170 = cljs.core.chunk_rest(seq__33488_34168__$1);
var G__34171 = c__4556__auto___34169;
var G__34172 = cljs.core.count(c__4556__auto___34169);
var G__34173 = (0);
seq__33488_34153 = G__34170;
chunk__33490_34154 = G__34171;
count__33491_34155 = G__34172;
i__33492_34156 = G__34173;
continue;
} else {
var child_34174 = cljs.core.first(seq__33488_34168__$1);
if(cljs.core.truth_(child_34174)){
node.appendChild(child_34174);


var G__34176 = cljs.core.next(seq__33488_34168__$1);
var G__34177 = null;
var G__34178 = (0);
var G__34179 = (0);
seq__33488_34153 = G__34176;
chunk__33490_34154 = G__34177;
count__33491_34155 = G__34178;
i__33492_34156 = G__34179;
continue;
} else {
var G__34180 = cljs.core.next(seq__33488_34168__$1);
var G__34181 = null;
var G__34182 = (0);
var G__34183 = (0);
seq__33488_34153 = G__34180;
chunk__33490_34154 = G__34181;
count__33491_34155 = G__34182;
i__33492_34156 = G__34183;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34152);
}
}


var G__34184 = cljs.core.next(seq__33414_34144__$1);
var G__34185 = null;
var G__34186 = (0);
var G__34187 = (0);
seq__33414_34091 = G__34184;
chunk__33416_34092 = G__34185;
count__33417_34093 = G__34186;
i__33418_34094 = G__34187;
continue;
} else {
var G__34188 = cljs.core.next(seq__33414_34144__$1);
var G__34189 = null;
var G__34190 = (0);
var G__34191 = (0);
seq__33414_34091 = G__34188;
chunk__33416_34092 = G__34189;
count__33417_34093 = G__34190;
i__33418_34094 = G__34191;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34197 = arguments.length;
var i__4737__auto___34199 = (0);
while(true){
if((i__4737__auto___34199 < len__4736__auto___34197)){
args__4742__auto__.push((arguments[i__4737__auto___34199]));

var G__34200 = (i__4737__auto___34199 + (1));
i__4737__auto___34199 = G__34200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33520){
var G__33521 = cljs.core.first(seq33520);
var seq33520__$1 = cljs.core.next(seq33520);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33521,seq33520__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33535 = arguments.length;
switch (G__33535) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29917__auto___34204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_33549){
var state_val_33550 = (state_33549[(1)]);
if((state_val_33550 === (1))){
var state_33549__$1 = state_33549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33549__$1,(2),once_or_cleanup);
} else {
if((state_val_33550 === (2))){
var inst_33546 = (state_33549[(2)]);
var inst_33547 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33549__$1 = (function (){var statearr_33557 = state_33549;
(statearr_33557[(7)] = inst_33546);

return statearr_33557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33549__$1,inst_33547);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29761__auto__ = null;
var shadow$dom$state_machine__29761__auto____0 = (function (){
var statearr_33561 = [null,null,null,null,null,null,null,null];
(statearr_33561[(0)] = shadow$dom$state_machine__29761__auto__);

(statearr_33561[(1)] = (1));

return statearr_33561;
});
var shadow$dom$state_machine__29761__auto____1 = (function (state_33549){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_33549);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e33562){var ex__29764__auto__ = e33562;
var statearr_33563_34209 = state_33549;
(statearr_33563_34209[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_33549[(4)]))){
var statearr_33564_34210 = state_33549;
(statearr_33564_34210[(1)] = cljs.core.first((state_33549[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34211 = state_33549;
state_33549 = G__34211;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
shadow$dom$state_machine__29761__auto__ = function(state_33549){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29761__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29761__auto____1.call(this,state_33549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29761__auto____0;
shadow$dom$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29761__auto____1;
return shadow$dom$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_33566 = f__29918__auto__();
(statearr_33566[(6)] = c__29917__auto___34204);

return statearr_33566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
