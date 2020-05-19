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

var shadow$dom$IElement$_to_dom$dyn_48054 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_48054(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48058 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_48058(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47070 = coll;
var G__47071 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47070,G__47071) : shadow.dom.lazy_native_coll_seq.call(null,G__47070,G__47071));
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
var G__47098 = arguments.length;
switch (G__47098) {
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
var G__47109 = arguments.length;
switch (G__47109) {
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
var G__47114 = arguments.length;
switch (G__47114) {
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
var G__47121 = arguments.length;
switch (G__47121) {
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
var G__47132 = arguments.length;
switch (G__47132) {
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
var G__47150 = arguments.length;
switch (G__47150) {
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
}catch (e47156){if((e47156 instanceof Object)){
var e = e47156;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47156;

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
var seq__47160 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47161 = null;
var count__47162 = (0);
var i__47163 = (0);
while(true){
if((i__47163 < count__47162)){
var el = chunk__47161.cljs$core$IIndexed$_nth$arity$2(null,i__47163);
var handler_48105__$1 = ((function (seq__47160,chunk__47161,count__47162,i__47163,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47160,chunk__47161,count__47162,i__47163,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48105__$1);


var G__48106 = seq__47160;
var G__48107 = chunk__47161;
var G__48108 = count__47162;
var G__48109 = (i__47163 + (1));
seq__47160 = G__48106;
chunk__47161 = G__48107;
count__47162 = G__48108;
i__47163 = G__48109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47160);
if(temp__5735__auto__){
var seq__47160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47160__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47160__$1);
var G__48110 = cljs.core.chunk_rest(seq__47160__$1);
var G__48111 = c__4556__auto__;
var G__48112 = cljs.core.count(c__4556__auto__);
var G__48113 = (0);
seq__47160 = G__48110;
chunk__47161 = G__48111;
count__47162 = G__48112;
i__47163 = G__48113;
continue;
} else {
var el = cljs.core.first(seq__47160__$1);
var handler_48114__$1 = ((function (seq__47160,chunk__47161,count__47162,i__47163,el,seq__47160__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47160,chunk__47161,count__47162,i__47163,el,seq__47160__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48114__$1);


var G__48115 = cljs.core.next(seq__47160__$1);
var G__48116 = null;
var G__48117 = (0);
var G__48118 = (0);
seq__47160 = G__48115;
chunk__47161 = G__48116;
count__47162 = G__48117;
i__47163 = G__48118;
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
var G__47181 = arguments.length;
switch (G__47181) {
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
var seq__47188 = cljs.core.seq(events);
var chunk__47189 = null;
var count__47190 = (0);
var i__47191 = (0);
while(true){
if((i__47191 < count__47190)){
var vec__47199 = chunk__47189.cljs$core$IIndexed$_nth$arity$2(null,i__47191);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48123 = seq__47188;
var G__48124 = chunk__47189;
var G__48125 = count__47190;
var G__48126 = (i__47191 + (1));
seq__47188 = G__48123;
chunk__47189 = G__48124;
count__47190 = G__48125;
i__47191 = G__48126;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47188);
if(temp__5735__auto__){
var seq__47188__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47188__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47188__$1);
var G__48127 = cljs.core.chunk_rest(seq__47188__$1);
var G__48128 = c__4556__auto__;
var G__48129 = cljs.core.count(c__4556__auto__);
var G__48130 = (0);
seq__47188 = G__48127;
chunk__47189 = G__48128;
count__47190 = G__48129;
i__47191 = G__48130;
continue;
} else {
var vec__47203 = cljs.core.first(seq__47188__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48132 = cljs.core.next(seq__47188__$1);
var G__48133 = null;
var G__48134 = (0);
var G__48135 = (0);
seq__47188 = G__48132;
chunk__47189 = G__48133;
count__47190 = G__48134;
i__47191 = G__48135;
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
var seq__47209 = cljs.core.seq(styles);
var chunk__47210 = null;
var count__47211 = (0);
var i__47212 = (0);
while(true){
if((i__47212 < count__47211)){
var vec__47225 = chunk__47210.cljs$core$IIndexed$_nth$arity$2(null,i__47212);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47225,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48141 = seq__47209;
var G__48142 = chunk__47210;
var G__48143 = count__47211;
var G__48144 = (i__47212 + (1));
seq__47209 = G__48141;
chunk__47210 = G__48142;
count__47211 = G__48143;
i__47212 = G__48144;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47209);
if(temp__5735__auto__){
var seq__47209__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47209__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47209__$1);
var G__48146 = cljs.core.chunk_rest(seq__47209__$1);
var G__48147 = c__4556__auto__;
var G__48148 = cljs.core.count(c__4556__auto__);
var G__48149 = (0);
seq__47209 = G__48146;
chunk__47210 = G__48147;
count__47211 = G__48148;
i__47212 = G__48149;
continue;
} else {
var vec__47228 = cljs.core.first(seq__47209__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47228,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48152 = cljs.core.next(seq__47209__$1);
var G__48153 = null;
var G__48154 = (0);
var G__48155 = (0);
seq__47209 = G__48152;
chunk__47210 = G__48153;
count__47211 = G__48154;
i__47212 = G__48155;
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
var G__47247_48156 = key;
var G__47247_48157__$1 = (((G__47247_48156 instanceof cljs.core.Keyword))?G__47247_48156.fqn:null);
switch (G__47247_48157__$1) {
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
var ks_48168 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48168,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48168,"aria-");
}
})())){
el.setAttribute(ks_48168,value);
} else {
(el[ks_48168] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47264){
var map__47265 = p__47264;
var map__47265__$1 = (((((!((map__47265 == null))))?(((((map__47265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47265):map__47265);
var props = map__47265__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47265__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47271 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47271,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47271,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47271,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47275 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47275,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47275;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47279 = arguments.length;
switch (G__47279) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47289){
var vec__47290 = p__47289;
var seq__47291 = cljs.core.seq(vec__47290);
var first__47292 = cljs.core.first(seq__47291);
var seq__47291__$1 = cljs.core.next(seq__47291);
var nn = first__47292;
var first__47292__$1 = cljs.core.first(seq__47291__$1);
var seq__47291__$2 = cljs.core.next(seq__47291__$1);
var np = first__47292__$1;
var nc = seq__47291__$2;
var node = vec__47290;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47295 = nn;
var G__47296 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47295,G__47296) : create_fn.call(null,G__47295,G__47296));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47297 = nn;
var G__47299 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47297,G__47299) : create_fn.call(null,G__47297,G__47299));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47304 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47304,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47304,(1),null);
var seq__47309_48218 = cljs.core.seq(node_children);
var chunk__47310_48219 = null;
var count__47311_48220 = (0);
var i__47312_48221 = (0);
while(true){
if((i__47312_48221 < count__47311_48220)){
var child_struct_48225 = chunk__47310_48219.cljs$core$IIndexed$_nth$arity$2(null,i__47312_48221);
var children_48227 = shadow.dom.dom_node(child_struct_48225);
if(cljs.core.seq_QMARK_(children_48227)){
var seq__47369_48230 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48227));
var chunk__47371_48231 = null;
var count__47372_48232 = (0);
var i__47373_48233 = (0);
while(true){
if((i__47373_48233 < count__47372_48232)){
var child_48235 = chunk__47371_48231.cljs$core$IIndexed$_nth$arity$2(null,i__47373_48233);
if(cljs.core.truth_(child_48235)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48235);


var G__48236 = seq__47369_48230;
var G__48237 = chunk__47371_48231;
var G__48238 = count__47372_48232;
var G__48239 = (i__47373_48233 + (1));
seq__47369_48230 = G__48236;
chunk__47371_48231 = G__48237;
count__47372_48232 = G__48238;
i__47373_48233 = G__48239;
continue;
} else {
var G__48240 = seq__47369_48230;
var G__48241 = chunk__47371_48231;
var G__48242 = count__47372_48232;
var G__48243 = (i__47373_48233 + (1));
seq__47369_48230 = G__48240;
chunk__47371_48231 = G__48241;
count__47372_48232 = G__48242;
i__47373_48233 = G__48243;
continue;
}
} else {
var temp__5735__auto___48244 = cljs.core.seq(seq__47369_48230);
if(temp__5735__auto___48244){
var seq__47369_48245__$1 = temp__5735__auto___48244;
if(cljs.core.chunked_seq_QMARK_(seq__47369_48245__$1)){
var c__4556__auto___48246 = cljs.core.chunk_first(seq__47369_48245__$1);
var G__48247 = cljs.core.chunk_rest(seq__47369_48245__$1);
var G__48248 = c__4556__auto___48246;
var G__48249 = cljs.core.count(c__4556__auto___48246);
var G__48250 = (0);
seq__47369_48230 = G__48247;
chunk__47371_48231 = G__48248;
count__47372_48232 = G__48249;
i__47373_48233 = G__48250;
continue;
} else {
var child_48252 = cljs.core.first(seq__47369_48245__$1);
if(cljs.core.truth_(child_48252)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48252);


var G__48253 = cljs.core.next(seq__47369_48245__$1);
var G__48254 = null;
var G__48255 = (0);
var G__48256 = (0);
seq__47369_48230 = G__48253;
chunk__47371_48231 = G__48254;
count__47372_48232 = G__48255;
i__47373_48233 = G__48256;
continue;
} else {
var G__48257 = cljs.core.next(seq__47369_48245__$1);
var G__48258 = null;
var G__48259 = (0);
var G__48260 = (0);
seq__47369_48230 = G__48257;
chunk__47371_48231 = G__48258;
count__47372_48232 = G__48259;
i__47373_48233 = G__48260;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48227);
}


var G__48262 = seq__47309_48218;
var G__48263 = chunk__47310_48219;
var G__48264 = count__47311_48220;
var G__48265 = (i__47312_48221 + (1));
seq__47309_48218 = G__48262;
chunk__47310_48219 = G__48263;
count__47311_48220 = G__48264;
i__47312_48221 = G__48265;
continue;
} else {
var temp__5735__auto___48266 = cljs.core.seq(seq__47309_48218);
if(temp__5735__auto___48266){
var seq__47309_48267__$1 = temp__5735__auto___48266;
if(cljs.core.chunked_seq_QMARK_(seq__47309_48267__$1)){
var c__4556__auto___48268 = cljs.core.chunk_first(seq__47309_48267__$1);
var G__48269 = cljs.core.chunk_rest(seq__47309_48267__$1);
var G__48270 = c__4556__auto___48268;
var G__48271 = cljs.core.count(c__4556__auto___48268);
var G__48272 = (0);
seq__47309_48218 = G__48269;
chunk__47310_48219 = G__48270;
count__47311_48220 = G__48271;
i__47312_48221 = G__48272;
continue;
} else {
var child_struct_48276 = cljs.core.first(seq__47309_48267__$1);
var children_48277 = shadow.dom.dom_node(child_struct_48276);
if(cljs.core.seq_QMARK_(children_48277)){
var seq__47392_48279 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48277));
var chunk__47394_48280 = null;
var count__47395_48281 = (0);
var i__47396_48282 = (0);
while(true){
if((i__47396_48282 < count__47395_48281)){
var child_48284 = chunk__47394_48280.cljs$core$IIndexed$_nth$arity$2(null,i__47396_48282);
if(cljs.core.truth_(child_48284)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48284);


var G__48285 = seq__47392_48279;
var G__48286 = chunk__47394_48280;
var G__48287 = count__47395_48281;
var G__48288 = (i__47396_48282 + (1));
seq__47392_48279 = G__48285;
chunk__47394_48280 = G__48286;
count__47395_48281 = G__48287;
i__47396_48282 = G__48288;
continue;
} else {
var G__48289 = seq__47392_48279;
var G__48290 = chunk__47394_48280;
var G__48291 = count__47395_48281;
var G__48292 = (i__47396_48282 + (1));
seq__47392_48279 = G__48289;
chunk__47394_48280 = G__48290;
count__47395_48281 = G__48291;
i__47396_48282 = G__48292;
continue;
}
} else {
var temp__5735__auto___48296__$1 = cljs.core.seq(seq__47392_48279);
if(temp__5735__auto___48296__$1){
var seq__47392_48298__$1 = temp__5735__auto___48296__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47392_48298__$1)){
var c__4556__auto___48300 = cljs.core.chunk_first(seq__47392_48298__$1);
var G__48301 = cljs.core.chunk_rest(seq__47392_48298__$1);
var G__48302 = c__4556__auto___48300;
var G__48303 = cljs.core.count(c__4556__auto___48300);
var G__48304 = (0);
seq__47392_48279 = G__48301;
chunk__47394_48280 = G__48302;
count__47395_48281 = G__48303;
i__47396_48282 = G__48304;
continue;
} else {
var child_48307 = cljs.core.first(seq__47392_48298__$1);
if(cljs.core.truth_(child_48307)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48307);


var G__48309 = cljs.core.next(seq__47392_48298__$1);
var G__48310 = null;
var G__48311 = (0);
var G__48312 = (0);
seq__47392_48279 = G__48309;
chunk__47394_48280 = G__48310;
count__47395_48281 = G__48311;
i__47396_48282 = G__48312;
continue;
} else {
var G__48319 = cljs.core.next(seq__47392_48298__$1);
var G__48320 = null;
var G__48321 = (0);
var G__48322 = (0);
seq__47392_48279 = G__48319;
chunk__47394_48280 = G__48320;
count__47395_48281 = G__48321;
i__47396_48282 = G__48322;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48277);
}


var G__48323 = cljs.core.next(seq__47309_48267__$1);
var G__48324 = null;
var G__48325 = (0);
var G__48326 = (0);
seq__47309_48218 = G__48323;
chunk__47310_48219 = G__48324;
count__47311_48220 = G__48325;
i__47312_48221 = G__48326;
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
var seq__47428 = cljs.core.seq(node);
var chunk__47429 = null;
var count__47430 = (0);
var i__47431 = (0);
while(true){
if((i__47431 < count__47430)){
var n = chunk__47429.cljs$core$IIndexed$_nth$arity$2(null,i__47431);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48337 = seq__47428;
var G__48338 = chunk__47429;
var G__48339 = count__47430;
var G__48340 = (i__47431 + (1));
seq__47428 = G__48337;
chunk__47429 = G__48338;
count__47430 = G__48339;
i__47431 = G__48340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47428);
if(temp__5735__auto__){
var seq__47428__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47428__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47428__$1);
var G__48344 = cljs.core.chunk_rest(seq__47428__$1);
var G__48345 = c__4556__auto__;
var G__48346 = cljs.core.count(c__4556__auto__);
var G__48347 = (0);
seq__47428 = G__48344;
chunk__47429 = G__48345;
count__47430 = G__48346;
i__47431 = G__48347;
continue;
} else {
var n = cljs.core.first(seq__47428__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48351 = cljs.core.next(seq__47428__$1);
var G__48352 = null;
var G__48353 = (0);
var G__48354 = (0);
seq__47428 = G__48351;
chunk__47429 = G__48352;
count__47430 = G__48353;
i__47431 = G__48354;
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
var G__47448 = arguments.length;
switch (G__47448) {
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
var G__47456 = arguments.length;
switch (G__47456) {
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
var G__47485 = arguments.length;
switch (G__47485) {
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
var len__4736__auto___48376 = arguments.length;
var i__4737__auto___48377 = (0);
while(true){
if((i__4737__auto___48377 < len__4736__auto___48376)){
args__4742__auto__.push((arguments[i__4737__auto___48377]));

var G__48378 = (i__4737__auto___48377 + (1));
i__4737__auto___48377 = G__48378;
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
var seq__47533_48384 = cljs.core.seq(nodes);
var chunk__47534_48385 = null;
var count__47535_48386 = (0);
var i__47536_48387 = (0);
while(true){
if((i__47536_48387 < count__47535_48386)){
var node_48389 = chunk__47534_48385.cljs$core$IIndexed$_nth$arity$2(null,i__47536_48387);
fragment.appendChild(shadow.dom._to_dom(node_48389));


var G__48390 = seq__47533_48384;
var G__48391 = chunk__47534_48385;
var G__48392 = count__47535_48386;
var G__48393 = (i__47536_48387 + (1));
seq__47533_48384 = G__48390;
chunk__47534_48385 = G__48391;
count__47535_48386 = G__48392;
i__47536_48387 = G__48393;
continue;
} else {
var temp__5735__auto___48394 = cljs.core.seq(seq__47533_48384);
if(temp__5735__auto___48394){
var seq__47533_48395__$1 = temp__5735__auto___48394;
if(cljs.core.chunked_seq_QMARK_(seq__47533_48395__$1)){
var c__4556__auto___48396 = cljs.core.chunk_first(seq__47533_48395__$1);
var G__48397 = cljs.core.chunk_rest(seq__47533_48395__$1);
var G__48398 = c__4556__auto___48396;
var G__48399 = cljs.core.count(c__4556__auto___48396);
var G__48400 = (0);
seq__47533_48384 = G__48397;
chunk__47534_48385 = G__48398;
count__47535_48386 = G__48399;
i__47536_48387 = G__48400;
continue;
} else {
var node_48401 = cljs.core.first(seq__47533_48395__$1);
fragment.appendChild(shadow.dom._to_dom(node_48401));


var G__48402 = cljs.core.next(seq__47533_48395__$1);
var G__48403 = null;
var G__48404 = (0);
var G__48405 = (0);
seq__47533_48384 = G__48402;
chunk__47534_48385 = G__48403;
count__47535_48386 = G__48404;
i__47536_48387 = G__48405;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47525){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47525));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47558_48407 = cljs.core.seq(scripts);
var chunk__47559_48408 = null;
var count__47560_48409 = (0);
var i__47561_48410 = (0);
while(true){
if((i__47561_48410 < count__47560_48409)){
var vec__47587_48412 = chunk__47559_48408.cljs$core$IIndexed$_nth$arity$2(null,i__47561_48410);
var script_tag_48413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47587_48412,(0),null);
var script_body_48414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47587_48412,(1),null);
eval(script_body_48414);


var G__48416 = seq__47558_48407;
var G__48417 = chunk__47559_48408;
var G__48418 = count__47560_48409;
var G__48419 = (i__47561_48410 + (1));
seq__47558_48407 = G__48416;
chunk__47559_48408 = G__48417;
count__47560_48409 = G__48418;
i__47561_48410 = G__48419;
continue;
} else {
var temp__5735__auto___48421 = cljs.core.seq(seq__47558_48407);
if(temp__5735__auto___48421){
var seq__47558_48422__$1 = temp__5735__auto___48421;
if(cljs.core.chunked_seq_QMARK_(seq__47558_48422__$1)){
var c__4556__auto___48423 = cljs.core.chunk_first(seq__47558_48422__$1);
var G__48424 = cljs.core.chunk_rest(seq__47558_48422__$1);
var G__48425 = c__4556__auto___48423;
var G__48426 = cljs.core.count(c__4556__auto___48423);
var G__48427 = (0);
seq__47558_48407 = G__48424;
chunk__47559_48408 = G__48425;
count__47560_48409 = G__48426;
i__47561_48410 = G__48427;
continue;
} else {
var vec__47596_48429 = cljs.core.first(seq__47558_48422__$1);
var script_tag_48430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47596_48429,(0),null);
var script_body_48431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47596_48429,(1),null);
eval(script_body_48431);


var G__48432 = cljs.core.next(seq__47558_48422__$1);
var G__48433 = null;
var G__48434 = (0);
var G__48435 = (0);
seq__47558_48407 = G__48432;
chunk__47559_48408 = G__48433;
count__47560_48409 = G__48434;
i__47561_48410 = G__48435;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47601){
var vec__47602 = p__47601;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47602,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47602,(1),null);
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
var G__47621 = arguments.length;
switch (G__47621) {
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
var seq__47652 = cljs.core.seq(style_keys);
var chunk__47653 = null;
var count__47654 = (0);
var i__47655 = (0);
while(true){
if((i__47655 < count__47654)){
var it = chunk__47653.cljs$core$IIndexed$_nth$arity$2(null,i__47655);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48452 = seq__47652;
var G__48453 = chunk__47653;
var G__48454 = count__47654;
var G__48455 = (i__47655 + (1));
seq__47652 = G__48452;
chunk__47653 = G__48453;
count__47654 = G__48454;
i__47655 = G__48455;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47652);
if(temp__5735__auto__){
var seq__47652__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47652__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47652__$1);
var G__48461 = cljs.core.chunk_rest(seq__47652__$1);
var G__48462 = c__4556__auto__;
var G__48463 = cljs.core.count(c__4556__auto__);
var G__48464 = (0);
seq__47652 = G__48461;
chunk__47653 = G__48462;
count__47654 = G__48463;
i__47655 = G__48464;
continue;
} else {
var it = cljs.core.first(seq__47652__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48466 = cljs.core.next(seq__47652__$1);
var G__48467 = null;
var G__48468 = (0);
var G__48469 = (0);
seq__47652 = G__48466;
chunk__47653 = G__48467;
count__47654 = G__48468;
i__47655 = G__48469;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47670,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47685 = k47670;
var G__47685__$1 = (((G__47685 instanceof cljs.core.Keyword))?G__47685.fqn:null);
switch (G__47685__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47670,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47689){
var vec__47690 = p__47689;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47690,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47690,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47669){
var self__ = this;
var G__47669__$1 = this;
return (new cljs.core.RecordIter((0),G__47669__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47671,other47672){
var self__ = this;
var this47671__$1 = this;
return (((!((other47672 == null)))) && ((this47671__$1.constructor === other47672.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47671__$1.x,other47672.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47671__$1.y,other47672.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47671__$1.__extmap,other47672.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47669){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47729 = cljs.core.keyword_identical_QMARK_;
var expr__47730 = k__4388__auto__;
if(cljs.core.truth_((pred__47729.cljs$core$IFn$_invoke$arity$2 ? pred__47729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47730) : pred__47729.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47730)))){
return (new shadow.dom.Coordinate(G__47669,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47729.cljs$core$IFn$_invoke$arity$2 ? pred__47729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47730) : pred__47729.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47730)))){
return (new shadow.dom.Coordinate(self__.x,G__47669,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47669),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47669){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47669,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47677){
var extmap__4419__auto__ = (function (){var G__47760 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47677,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47677)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47760);
} else {
return G__47760;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47677),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47677),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47781,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47795 = k47781;
var G__47795__$1 = (((G__47795 instanceof cljs.core.Keyword))?G__47795.fqn:null);
switch (G__47795__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47781,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47802){
var vec__47803 = p__47802;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47803,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47803,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47780){
var self__ = this;
var G__47780__$1 = this;
return (new cljs.core.RecordIter((0),G__47780__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47782,other47783){
var self__ = this;
var this47782__$1 = this;
return (((!((other47783 == null)))) && ((this47782__$1.constructor === other47783.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47782__$1.w,other47783.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47782__$1.h,other47783.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47782__$1.__extmap,other47783.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47780){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47828 = cljs.core.keyword_identical_QMARK_;
var expr__47829 = k__4388__auto__;
if(cljs.core.truth_((pred__47828.cljs$core$IFn$_invoke$arity$2 ? pred__47828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47829) : pred__47828.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47829)))){
return (new shadow.dom.Size(G__47780,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47828.cljs$core$IFn$_invoke$arity$2 ? pred__47828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47829) : pred__47828.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47829)))){
return (new shadow.dom.Size(self__.w,G__47780,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47780),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47780){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47780,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47788){
var extmap__4419__auto__ = (function (){var G__47841 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47788,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47788)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47841);
} else {
return G__47841;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47788),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47788),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__48541 = (i + (1));
var G__48542 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48541;
ret = G__48542;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47866){
var vec__47867 = p__47866;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47867,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47872 = arguments.length;
switch (G__47872) {
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
var G__48547 = ps;
var G__48548 = (i + (1));
el__$1 = G__48547;
i = G__48548;
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
var vec__47889 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47889,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47889,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47889,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47894_48552 = cljs.core.seq(props);
var chunk__47895_48553 = null;
var count__47896_48554 = (0);
var i__47897_48555 = (0);
while(true){
if((i__47897_48555 < count__47896_48554)){
var vec__47913_48556 = chunk__47895_48553.cljs$core$IIndexed$_nth$arity$2(null,i__47897_48555);
var k_48557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47913_48556,(0),null);
var v_48558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47913_48556,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48557);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48557),v_48558);


var G__48563 = seq__47894_48552;
var G__48564 = chunk__47895_48553;
var G__48565 = count__47896_48554;
var G__48566 = (i__47897_48555 + (1));
seq__47894_48552 = G__48563;
chunk__47895_48553 = G__48564;
count__47896_48554 = G__48565;
i__47897_48555 = G__48566;
continue;
} else {
var temp__5735__auto___48567 = cljs.core.seq(seq__47894_48552);
if(temp__5735__auto___48567){
var seq__47894_48568__$1 = temp__5735__auto___48567;
if(cljs.core.chunked_seq_QMARK_(seq__47894_48568__$1)){
var c__4556__auto___48569 = cljs.core.chunk_first(seq__47894_48568__$1);
var G__48570 = cljs.core.chunk_rest(seq__47894_48568__$1);
var G__48571 = c__4556__auto___48569;
var G__48572 = cljs.core.count(c__4556__auto___48569);
var G__48573 = (0);
seq__47894_48552 = G__48570;
chunk__47895_48553 = G__48571;
count__47896_48554 = G__48572;
i__47897_48555 = G__48573;
continue;
} else {
var vec__47918_48574 = cljs.core.first(seq__47894_48568__$1);
var k_48575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47918_48574,(0),null);
var v_48576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47918_48574,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48575);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48575),v_48576);


var G__48579 = cljs.core.next(seq__47894_48568__$1);
var G__48580 = null;
var G__48581 = (0);
var G__48582 = (0);
seq__47894_48552 = G__48579;
chunk__47895_48553 = G__48580;
count__47896_48554 = G__48581;
i__47897_48555 = G__48582;
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
var vec__47925 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(1),null);
var seq__47929_48583 = cljs.core.seq(node_children);
var chunk__47931_48584 = null;
var count__47932_48585 = (0);
var i__47933_48586 = (0);
while(true){
if((i__47933_48586 < count__47932_48585)){
var child_struct_48588 = chunk__47931_48584.cljs$core$IIndexed$_nth$arity$2(null,i__47933_48586);
if((!((child_struct_48588 == null)))){
if(typeof child_struct_48588 === 'string'){
var text_48589 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48589),child_struct_48588].join(''));
} else {
var children_48590 = shadow.dom.svg_node(child_struct_48588);
if(cljs.core.seq_QMARK_(children_48590)){
var seq__47962_48591 = cljs.core.seq(children_48590);
var chunk__47964_48592 = null;
var count__47965_48593 = (0);
var i__47966_48594 = (0);
while(true){
if((i__47966_48594 < count__47965_48593)){
var child_48595 = chunk__47964_48592.cljs$core$IIndexed$_nth$arity$2(null,i__47966_48594);
if(cljs.core.truth_(child_48595)){
node.appendChild(child_48595);


var G__48596 = seq__47962_48591;
var G__48597 = chunk__47964_48592;
var G__48598 = count__47965_48593;
var G__48599 = (i__47966_48594 + (1));
seq__47962_48591 = G__48596;
chunk__47964_48592 = G__48597;
count__47965_48593 = G__48598;
i__47966_48594 = G__48599;
continue;
} else {
var G__48600 = seq__47962_48591;
var G__48601 = chunk__47964_48592;
var G__48602 = count__47965_48593;
var G__48603 = (i__47966_48594 + (1));
seq__47962_48591 = G__48600;
chunk__47964_48592 = G__48601;
count__47965_48593 = G__48602;
i__47966_48594 = G__48603;
continue;
}
} else {
var temp__5735__auto___48605 = cljs.core.seq(seq__47962_48591);
if(temp__5735__auto___48605){
var seq__47962_48606__$1 = temp__5735__auto___48605;
if(cljs.core.chunked_seq_QMARK_(seq__47962_48606__$1)){
var c__4556__auto___48607 = cljs.core.chunk_first(seq__47962_48606__$1);
var G__48608 = cljs.core.chunk_rest(seq__47962_48606__$1);
var G__48609 = c__4556__auto___48607;
var G__48610 = cljs.core.count(c__4556__auto___48607);
var G__48611 = (0);
seq__47962_48591 = G__48608;
chunk__47964_48592 = G__48609;
count__47965_48593 = G__48610;
i__47966_48594 = G__48611;
continue;
} else {
var child_48612 = cljs.core.first(seq__47962_48606__$1);
if(cljs.core.truth_(child_48612)){
node.appendChild(child_48612);


var G__48613 = cljs.core.next(seq__47962_48606__$1);
var G__48614 = null;
var G__48615 = (0);
var G__48616 = (0);
seq__47962_48591 = G__48613;
chunk__47964_48592 = G__48614;
count__47965_48593 = G__48615;
i__47966_48594 = G__48616;
continue;
} else {
var G__48617 = cljs.core.next(seq__47962_48606__$1);
var G__48618 = null;
var G__48619 = (0);
var G__48620 = (0);
seq__47962_48591 = G__48617;
chunk__47964_48592 = G__48618;
count__47965_48593 = G__48619;
i__47966_48594 = G__48620;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48590);
}
}


var G__48621 = seq__47929_48583;
var G__48622 = chunk__47931_48584;
var G__48623 = count__47932_48585;
var G__48624 = (i__47933_48586 + (1));
seq__47929_48583 = G__48621;
chunk__47931_48584 = G__48622;
count__47932_48585 = G__48623;
i__47933_48586 = G__48624;
continue;
} else {
var G__48625 = seq__47929_48583;
var G__48626 = chunk__47931_48584;
var G__48627 = count__47932_48585;
var G__48628 = (i__47933_48586 + (1));
seq__47929_48583 = G__48625;
chunk__47931_48584 = G__48626;
count__47932_48585 = G__48627;
i__47933_48586 = G__48628;
continue;
}
} else {
var temp__5735__auto___48629 = cljs.core.seq(seq__47929_48583);
if(temp__5735__auto___48629){
var seq__47929_48630__$1 = temp__5735__auto___48629;
if(cljs.core.chunked_seq_QMARK_(seq__47929_48630__$1)){
var c__4556__auto___48633 = cljs.core.chunk_first(seq__47929_48630__$1);
var G__48634 = cljs.core.chunk_rest(seq__47929_48630__$1);
var G__48635 = c__4556__auto___48633;
var G__48636 = cljs.core.count(c__4556__auto___48633);
var G__48637 = (0);
seq__47929_48583 = G__48634;
chunk__47931_48584 = G__48635;
count__47932_48585 = G__48636;
i__47933_48586 = G__48637;
continue;
} else {
var child_struct_48639 = cljs.core.first(seq__47929_48630__$1);
if((!((child_struct_48639 == null)))){
if(typeof child_struct_48639 === 'string'){
var text_48640 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48640),child_struct_48639].join(''));
} else {
var children_48641 = shadow.dom.svg_node(child_struct_48639);
if(cljs.core.seq_QMARK_(children_48641)){
var seq__47975_48642 = cljs.core.seq(children_48641);
var chunk__47977_48643 = null;
var count__47978_48644 = (0);
var i__47979_48645 = (0);
while(true){
if((i__47979_48645 < count__47978_48644)){
var child_48646 = chunk__47977_48643.cljs$core$IIndexed$_nth$arity$2(null,i__47979_48645);
if(cljs.core.truth_(child_48646)){
node.appendChild(child_48646);


var G__48647 = seq__47975_48642;
var G__48648 = chunk__47977_48643;
var G__48649 = count__47978_48644;
var G__48650 = (i__47979_48645 + (1));
seq__47975_48642 = G__48647;
chunk__47977_48643 = G__48648;
count__47978_48644 = G__48649;
i__47979_48645 = G__48650;
continue;
} else {
var G__48655 = seq__47975_48642;
var G__48656 = chunk__47977_48643;
var G__48657 = count__47978_48644;
var G__48658 = (i__47979_48645 + (1));
seq__47975_48642 = G__48655;
chunk__47977_48643 = G__48656;
count__47978_48644 = G__48657;
i__47979_48645 = G__48658;
continue;
}
} else {
var temp__5735__auto___48661__$1 = cljs.core.seq(seq__47975_48642);
if(temp__5735__auto___48661__$1){
var seq__47975_48662__$1 = temp__5735__auto___48661__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47975_48662__$1)){
var c__4556__auto___48667 = cljs.core.chunk_first(seq__47975_48662__$1);
var G__48668 = cljs.core.chunk_rest(seq__47975_48662__$1);
var G__48669 = c__4556__auto___48667;
var G__48670 = cljs.core.count(c__4556__auto___48667);
var G__48671 = (0);
seq__47975_48642 = G__48668;
chunk__47977_48643 = G__48669;
count__47978_48644 = G__48670;
i__47979_48645 = G__48671;
continue;
} else {
var child_48675 = cljs.core.first(seq__47975_48662__$1);
if(cljs.core.truth_(child_48675)){
node.appendChild(child_48675);


var G__48676 = cljs.core.next(seq__47975_48662__$1);
var G__48677 = null;
var G__48678 = (0);
var G__48679 = (0);
seq__47975_48642 = G__48676;
chunk__47977_48643 = G__48677;
count__47978_48644 = G__48678;
i__47979_48645 = G__48679;
continue;
} else {
var G__48684 = cljs.core.next(seq__47975_48662__$1);
var G__48685 = null;
var G__48686 = (0);
var G__48687 = (0);
seq__47975_48642 = G__48684;
chunk__47977_48643 = G__48685;
count__47978_48644 = G__48686;
i__47979_48645 = G__48687;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48641);
}
}


var G__48692 = cljs.core.next(seq__47929_48630__$1);
var G__48693 = null;
var G__48694 = (0);
var G__48695 = (0);
seq__47929_48583 = G__48692;
chunk__47931_48584 = G__48693;
count__47932_48585 = G__48694;
i__47933_48586 = G__48695;
continue;
} else {
var G__48701 = cljs.core.next(seq__47929_48630__$1);
var G__48702 = null;
var G__48703 = (0);
var G__48704 = (0);
seq__47929_48583 = G__48701;
chunk__47931_48584 = G__48702;
count__47932_48585 = G__48703;
i__47933_48586 = G__48704;
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
var len__4736__auto___48725 = arguments.length;
var i__4737__auto___48726 = (0);
while(true){
if((i__4737__auto___48726 < len__4736__auto___48725)){
args__4742__auto__.push((arguments[i__4737__auto___48726]));

var G__48730 = (i__4737__auto___48726 + (1));
i__4737__auto___48726 = G__48730;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47999){
var G__48000 = cljs.core.first(seq47999);
var seq47999__$1 = cljs.core.next(seq47999);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48000,seq47999__$1);
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
var G__48011 = arguments.length;
switch (G__48011) {
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
var c__44347__auto___48750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_48025){
var state_val_48026 = (state_48025[(1)]);
if((state_val_48026 === (1))){
var state_48025__$1 = state_48025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48025__$1,(2),once_or_cleanup);
} else {
if((state_val_48026 === (2))){
var inst_48021 = (state_48025[(2)]);
var inst_48023 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48025__$1 = (function (){var statearr_48033 = state_48025;
(statearr_48033[(7)] = inst_48021);

return statearr_48033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48025__$1,inst_48023);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44155__auto__ = null;
var shadow$dom$state_machine__44155__auto____0 = (function (){
var statearr_48035 = [null,null,null,null,null,null,null,null];
(statearr_48035[(0)] = shadow$dom$state_machine__44155__auto__);

(statearr_48035[(1)] = (1));

return statearr_48035;
});
var shadow$dom$state_machine__44155__auto____1 = (function (state_48025){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_48025);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e48038){var ex__44158__auto__ = e48038;
var statearr_48039_48753 = state_48025;
(statearr_48039_48753[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_48025[(4)]))){
var statearr_48040_48754 = state_48025;
(statearr_48040_48754[(1)] = cljs.core.first((state_48025[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48755 = state_48025;
state_48025 = G__48755;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
shadow$dom$state_machine__44155__auto__ = function(state_48025){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44155__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44155__auto____1.call(this,state_48025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44155__auto____0;
shadow$dom$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44155__auto____1;
return shadow$dom$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_48043 = f__44349__auto__();
(statearr_48043[(6)] = c__44347__auto___48750);

return statearr_48043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
