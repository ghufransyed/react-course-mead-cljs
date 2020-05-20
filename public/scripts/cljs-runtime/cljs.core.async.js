goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30018 = arguments.length;
switch (G__30018) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30024 = (function (f,blockable,meta30025){
this.f = f;
this.blockable = blockable;
this.meta30025 = meta30025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30026,meta30025__$1){
var self__ = this;
var _30026__$1 = this;
return (new cljs.core.async.t_cljs$core$async30024(self__.f,self__.blockable,meta30025__$1));
}));

(cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30026){
var self__ = this;
var _30026__$1 = this;
return self__.meta30025;
}));

(cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30025","meta30025",459968698,null)], null);
}));

(cljs.core.async.t_cljs$core$async30024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30024");

(cljs.core.async.t_cljs$core$async30024.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30024.
 */
cljs.core.async.__GT_t_cljs$core$async30024 = (function cljs$core$async$__GT_t_cljs$core$async30024(f__$1,blockable__$1,meta30025){
return (new cljs.core.async.t_cljs$core$async30024(f__$1,blockable__$1,meta30025));
});

}

return (new cljs.core.async.t_cljs$core$async30024(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30054 = arguments.length;
switch (G__30054) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30066 = arguments.length;
switch (G__30066) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30083 = arguments.length;
switch (G__30083) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32421 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32421) : fn1.call(null,val_32421));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32421) : fn1.call(null,val_32421));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30088 = arguments.length;
switch (G__30088) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32447 = n;
var x_32448 = (0);
while(true){
if((x_32448 < n__4613__auto___32447)){
(a[x_32448] = x_32448);

var G__32452 = (x_32448 + (1));
x_32448 = G__32452;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30106 = (function (flag,meta30107){
this.flag = flag;
this.meta30107 = meta30107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30108,meta30107__$1){
var self__ = this;
var _30108__$1 = this;
return (new cljs.core.async.t_cljs$core$async30106(self__.flag,meta30107__$1));
}));

(cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30108){
var self__ = this;
var _30108__$1 = this;
return self__.meta30107;
}));

(cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30107","meta30107",739480091,null)], null);
}));

(cljs.core.async.t_cljs$core$async30106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30106");

(cljs.core.async.t_cljs$core$async30106.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30106.
 */
cljs.core.async.__GT_t_cljs$core$async30106 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30106(flag__$1,meta30107){
return (new cljs.core.async.t_cljs$core$async30106(flag__$1,meta30107));
});

}

return (new cljs.core.async.t_cljs$core$async30106(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30118 = (function (flag,cb,meta30119){
this.flag = flag;
this.cb = cb;
this.meta30119 = meta30119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30120,meta30119__$1){
var self__ = this;
var _30120__$1 = this;
return (new cljs.core.async.t_cljs$core$async30118(self__.flag,self__.cb,meta30119__$1));
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30120){
var self__ = this;
var _30120__$1 = this;
return self__.meta30119;
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30119","meta30119",378297151,null)], null);
}));

(cljs.core.async.t_cljs$core$async30118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30118");

(cljs.core.async.t_cljs$core$async30118.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30118.
 */
cljs.core.async.__GT_t_cljs$core$async30118 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30118(flag__$1,cb__$1,meta30119){
return (new cljs.core.async.t_cljs$core$async30118(flag__$1,cb__$1,meta30119));
});

}

return (new cljs.core.async.t_cljs$core$async30118(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30131_SHARP_){
var G__30142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30131_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30142) : fret.call(null,G__30142));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30132_SHARP_){
var G__30145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30132_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30145) : fret.call(null,G__30145));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32484 = (i + (1));
i = G__32484;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32487 = arguments.length;
var i__4737__auto___32488 = (0);
while(true){
if((i__4737__auto___32488 < len__4736__auto___32487)){
args__4742__auto__.push((arguments[i__4737__auto___32488]));

var G__32489 = (i__4737__auto___32488 + (1));
i__4737__auto___32488 = G__32489;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30155){
var map__30156 = p__30155;
var map__30156__$1 = (((((!((map__30156 == null))))?(((((map__30156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30156):map__30156);
var opts = map__30156__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30152){
var G__30153 = cljs.core.first(seq30152);
var seq30152__$1 = cljs.core.next(seq30152);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30153,seq30152__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30164 = arguments.length;
switch (G__30164) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29917__auto___32509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30214){
var state_val_30215 = (state_30214[(1)]);
if((state_val_30215 === (7))){
var inst_30209 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
var statearr_30220_32513 = state_30214__$1;
(statearr_30220_32513[(2)] = inst_30209);

(statearr_30220_32513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (1))){
var state_30214__$1 = state_30214;
var statearr_30221_32516 = state_30214__$1;
(statearr_30221_32516[(2)] = null);

(statearr_30221_32516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (4))){
var inst_30189 = (state_30214[(7)]);
var inst_30189__$1 = (state_30214[(2)]);
var inst_30190 = (inst_30189__$1 == null);
var state_30214__$1 = (function (){var statearr_30223 = state_30214;
(statearr_30223[(7)] = inst_30189__$1);

return statearr_30223;
})();
if(cljs.core.truth_(inst_30190)){
var statearr_30226_32518 = state_30214__$1;
(statearr_30226_32518[(1)] = (5));

} else {
var statearr_30227_32519 = state_30214__$1;
(statearr_30227_32519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (13))){
var state_30214__$1 = state_30214;
var statearr_30229_32520 = state_30214__$1;
(statearr_30229_32520[(2)] = null);

(statearr_30229_32520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (6))){
var inst_30189 = (state_30214[(7)]);
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30214__$1,(11),to,inst_30189);
} else {
if((state_val_30215 === (3))){
var inst_30211 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30214__$1,inst_30211);
} else {
if((state_val_30215 === (12))){
var state_30214__$1 = state_30214;
var statearr_30244_32521 = state_30214__$1;
(statearr_30244_32521[(2)] = null);

(statearr_30244_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (2))){
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30214__$1,(4),from);
} else {
if((state_val_30215 === (11))){
var inst_30202 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
if(cljs.core.truth_(inst_30202)){
var statearr_30247_32522 = state_30214__$1;
(statearr_30247_32522[(1)] = (12));

} else {
var statearr_30248_32523 = state_30214__$1;
(statearr_30248_32523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (9))){
var state_30214__$1 = state_30214;
var statearr_30249_32524 = state_30214__$1;
(statearr_30249_32524[(2)] = null);

(statearr_30249_32524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (5))){
var state_30214__$1 = state_30214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30252_32525 = state_30214__$1;
(statearr_30252_32525[(1)] = (8));

} else {
var statearr_30253_32526 = state_30214__$1;
(statearr_30253_32526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (14))){
var inst_30207 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
var statearr_30254_32527 = state_30214__$1;
(statearr_30254_32527[(2)] = inst_30207);

(statearr_30254_32527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (10))){
var inst_30199 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
var statearr_30255_32528 = state_30214__$1;
(statearr_30255_32528[(2)] = inst_30199);

(statearr_30255_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (8))){
var inst_30196 = cljs.core.async.close_BANG_(to);
var state_30214__$1 = state_30214;
var statearr_30256_32529 = state_30214__$1;
(statearr_30256_32529[(2)] = inst_30196);

(statearr_30256_32529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_30257 = [null,null,null,null,null,null,null,null];
(statearr_30257[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_30257[(1)] = (1));

return statearr_30257;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_30214){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30214);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30258){var ex__29764__auto__ = e30258;
var statearr_30259_32530 = state_30214;
(statearr_30259_32530[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30214[(4)]))){
var statearr_30260_32531 = state_30214;
(statearr_30260_32531[(1)] = cljs.core.first((state_30214[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32535 = state_30214;
state_30214 = G__32535;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_30214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_30214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30262 = f__29918__auto__();
(statearr_30262[(6)] = c__29917__auto___32509);

return statearr_30262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30267){
var vec__30268 = p__30267;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30268,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30268,(1),null);
var job = vec__30268;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29917__auto___32540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30275){
var state_val_30276 = (state_30275[(1)]);
if((state_val_30276 === (1))){
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30275__$1,(2),res,v);
} else {
if((state_val_30276 === (2))){
var inst_30272 = (state_30275[(2)]);
var inst_30273 = cljs.core.async.close_BANG_(res);
var state_30275__$1 = (function (){var statearr_30278 = state_30275;
(statearr_30278[(7)] = inst_30272);

return statearr_30278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30275__$1,inst_30273);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0 = (function (){
var statearr_30280 = [null,null,null,null,null,null,null,null];
(statearr_30280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__);

(statearr_30280[(1)] = (1));

return statearr_30280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1 = (function (state_30275){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30275);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30282){var ex__29764__auto__ = e30282;
var statearr_30283_32543 = state_30275;
(statearr_30283_32543[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30275[(4)]))){
var statearr_30286_32544 = state_30275;
(statearr_30286_32544[(1)] = cljs.core.first((state_30275[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32545 = state_30275;
state_30275 = G__32545;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = function(state_30275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1.call(this,state_30275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30296 = f__29918__auto__();
(statearr_30296[(6)] = c__29917__auto___32540);

return statearr_30296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30297){
var vec__30298 = p__30297;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30298,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30298,(1),null);
var job = vec__30298;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32550 = n;
var __32551 = (0);
while(true){
if((__32551 < n__4613__auto___32550)){
var G__30308_32552 = type;
var G__30308_32553__$1 = (((G__30308_32552 instanceof cljs.core.Keyword))?G__30308_32552.fqn:null);
switch (G__30308_32553__$1) {
case "compute":
var c__29917__auto___32555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32551,c__29917__auto___32555,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async){
return (function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = ((function (__32551,c__29917__auto___32555,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async){
return (function (state_30323){
var state_val_30324 = (state_30323[(1)]);
if((state_val_30324 === (1))){
var state_30323__$1 = state_30323;
var statearr_30326_32558 = state_30323__$1;
(statearr_30326_32558[(2)] = null);

(statearr_30326_32558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (2))){
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30323__$1,(4),jobs);
} else {
if((state_val_30324 === (3))){
var inst_30321 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30323__$1,inst_30321);
} else {
if((state_val_30324 === (4))){
var inst_30313 = (state_30323[(2)]);
var inst_30314 = process(inst_30313);
var state_30323__$1 = state_30323;
if(cljs.core.truth_(inst_30314)){
var statearr_30330_32566 = state_30323__$1;
(statearr_30330_32566[(1)] = (5));

} else {
var statearr_30331_32567 = state_30323__$1;
(statearr_30331_32567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (5))){
var state_30323__$1 = state_30323;
var statearr_30333_32573 = state_30323__$1;
(statearr_30333_32573[(2)] = null);

(statearr_30333_32573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (6))){
var state_30323__$1 = state_30323;
var statearr_30339_32574 = state_30323__$1;
(statearr_30339_32574[(2)] = null);

(statearr_30339_32574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (7))){
var inst_30319 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30347_32580 = state_30323__$1;
(statearr_30347_32580[(2)] = inst_30319);

(statearr_30347_32580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32551,c__29917__auto___32555,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async))
;
return ((function (__32551,switch__29760__auto__,c__29917__auto___32555,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0 = (function (){
var statearr_30350 = [null,null,null,null,null,null,null];
(statearr_30350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__);

(statearr_30350[(1)] = (1));

return statearr_30350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1 = (function (state_30323){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30323);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30353){var ex__29764__auto__ = e30353;
var statearr_30354_32582 = state_30323;
(statearr_30354_32582[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30323[(4)]))){
var statearr_30356_32584 = state_30323;
(statearr_30356_32584[(1)] = cljs.core.first((state_30323[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32586 = state_30323;
state_30323 = G__32586;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = function(state_30323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1.call(this,state_30323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__;
})()
;})(__32551,switch__29760__auto__,c__29917__auto___32555,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async))
})();
var state__29919__auto__ = (function (){var statearr_30357 = f__29918__auto__();
(statearr_30357[(6)] = c__29917__auto___32555);

return statearr_30357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
});})(__32551,c__29917__auto___32555,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async))
);


break;
case "async":
var c__29917__auto___32589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32551,c__29917__auto___32589,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async){
return (function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = ((function (__32551,c__29917__auto___32589,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async){
return (function (state_30374){
var state_val_30375 = (state_30374[(1)]);
if((state_val_30375 === (1))){
var state_30374__$1 = state_30374;
var statearr_30376_32591 = state_30374__$1;
(statearr_30376_32591[(2)] = null);

(statearr_30376_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (2))){
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30374__$1,(4),jobs);
} else {
if((state_val_30375 === (3))){
var inst_30372 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30374__$1,inst_30372);
} else {
if((state_val_30375 === (4))){
var inst_30360 = (state_30374[(2)]);
var inst_30365 = async(inst_30360);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30365)){
var statearr_30377_32594 = state_30374__$1;
(statearr_30377_32594[(1)] = (5));

} else {
var statearr_30378_32595 = state_30374__$1;
(statearr_30378_32595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (5))){
var state_30374__$1 = state_30374;
var statearr_30379_32597 = state_30374__$1;
(statearr_30379_32597[(2)] = null);

(statearr_30379_32597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (6))){
var state_30374__$1 = state_30374;
var statearr_30380_32598 = state_30374__$1;
(statearr_30380_32598[(2)] = null);

(statearr_30380_32598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (7))){
var inst_30370 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30381_32599 = state_30374__$1;
(statearr_30381_32599[(2)] = inst_30370);

(statearr_30381_32599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32551,c__29917__auto___32589,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async))
;
return ((function (__32551,switch__29760__auto__,c__29917__auto___32589,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0 = (function (){
var statearr_30383 = [null,null,null,null,null,null,null];
(statearr_30383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__);

(statearr_30383[(1)] = (1));

return statearr_30383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1 = (function (state_30374){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30374);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30385){var ex__29764__auto__ = e30385;
var statearr_30386_32602 = state_30374;
(statearr_30386_32602[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30374[(4)]))){
var statearr_30391_32603 = state_30374;
(statearr_30391_32603[(1)] = cljs.core.first((state_30374[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32604 = state_30374;
state_30374 = G__32604;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = function(state_30374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1.call(this,state_30374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__;
})()
;})(__32551,switch__29760__auto__,c__29917__auto___32589,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async))
})();
var state__29919__auto__ = (function (){var statearr_30393 = f__29918__auto__();
(statearr_30393[(6)] = c__29917__auto___32589);

return statearr_30393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
});})(__32551,c__29917__auto___32589,G__30308_32552,G__30308_32553__$1,n__4613__auto___32550,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30308_32553__$1)].join('')));

}

var G__32607 = (__32551 + (1));
__32551 = G__32607;
continue;
} else {
}
break;
}

var c__29917__auto___32608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30420){
var state_val_30421 = (state_30420[(1)]);
if((state_val_30421 === (7))){
var inst_30416 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30423_32609 = state_30420__$1;
(statearr_30423_32609[(2)] = inst_30416);

(statearr_30423_32609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (1))){
var state_30420__$1 = state_30420;
var statearr_30428_32612 = state_30420__$1;
(statearr_30428_32612[(2)] = null);

(statearr_30428_32612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (4))){
var inst_30400 = (state_30420[(7)]);
var inst_30400__$1 = (state_30420[(2)]);
var inst_30401 = (inst_30400__$1 == null);
var state_30420__$1 = (function (){var statearr_30431 = state_30420;
(statearr_30431[(7)] = inst_30400__$1);

return statearr_30431;
})();
if(cljs.core.truth_(inst_30401)){
var statearr_30432_32620 = state_30420__$1;
(statearr_30432_32620[(1)] = (5));

} else {
var statearr_30433_32621 = state_30420__$1;
(statearr_30433_32621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (6))){
var inst_30400 = (state_30420[(7)]);
var inst_30405 = (state_30420[(8)]);
var inst_30405__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30406 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30407 = [inst_30400,inst_30405__$1];
var inst_30408 = (new cljs.core.PersistentVector(null,2,(5),inst_30406,inst_30407,null));
var state_30420__$1 = (function (){var statearr_30440 = state_30420;
(statearr_30440[(8)] = inst_30405__$1);

return statearr_30440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30420__$1,(8),jobs,inst_30408);
} else {
if((state_val_30421 === (3))){
var inst_30418 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30420__$1,inst_30418);
} else {
if((state_val_30421 === (2))){
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30420__$1,(4),from);
} else {
if((state_val_30421 === (9))){
var inst_30413 = (state_30420[(2)]);
var state_30420__$1 = (function (){var statearr_30441 = state_30420;
(statearr_30441[(9)] = inst_30413);

return statearr_30441;
})();
var statearr_30442_32629 = state_30420__$1;
(statearr_30442_32629[(2)] = null);

(statearr_30442_32629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (5))){
var inst_30403 = cljs.core.async.close_BANG_(jobs);
var state_30420__$1 = state_30420;
var statearr_30443_32632 = state_30420__$1;
(statearr_30443_32632[(2)] = inst_30403);

(statearr_30443_32632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (8))){
var inst_30405 = (state_30420[(8)]);
var inst_30410 = (state_30420[(2)]);
var state_30420__$1 = (function (){var statearr_30446 = state_30420;
(statearr_30446[(10)] = inst_30410);

return statearr_30446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30420__$1,(9),results,inst_30405);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0 = (function (){
var statearr_30448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__);

(statearr_30448[(1)] = (1));

return statearr_30448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1 = (function (state_30420){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30420);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30452){var ex__29764__auto__ = e30452;
var statearr_30453_32650 = state_30420;
(statearr_30453_32650[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30420[(4)]))){
var statearr_30454_32651 = state_30420;
(statearr_30454_32651[(1)] = cljs.core.first((state_30420[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32652 = state_30420;
state_30420 = G__32652;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = function(state_30420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1.call(this,state_30420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30457 = f__29918__auto__();
(statearr_30457[(6)] = c__29917__auto___32608);

return statearr_30457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


var c__29917__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30499){
var state_val_30500 = (state_30499[(1)]);
if((state_val_30500 === (7))){
var inst_30493 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30505_32662 = state_30499__$1;
(statearr_30505_32662[(2)] = inst_30493);

(statearr_30505_32662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (20))){
var state_30499__$1 = state_30499;
var statearr_30507_32669 = state_30499__$1;
(statearr_30507_32669[(2)] = null);

(statearr_30507_32669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (1))){
var state_30499__$1 = state_30499;
var statearr_30508_32670 = state_30499__$1;
(statearr_30508_32670[(2)] = null);

(statearr_30508_32670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (4))){
var inst_30460 = (state_30499[(7)]);
var inst_30460__$1 = (state_30499[(2)]);
var inst_30463 = (inst_30460__$1 == null);
var state_30499__$1 = (function (){var statearr_30511 = state_30499;
(statearr_30511[(7)] = inst_30460__$1);

return statearr_30511;
})();
if(cljs.core.truth_(inst_30463)){
var statearr_30512_32672 = state_30499__$1;
(statearr_30512_32672[(1)] = (5));

} else {
var statearr_30517_32674 = state_30499__$1;
(statearr_30517_32674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (15))){
var inst_30475 = (state_30499[(8)]);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30499__$1,(18),to,inst_30475);
} else {
if((state_val_30500 === (21))){
var inst_30488 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30520_32678 = state_30499__$1;
(statearr_30520_32678[(2)] = inst_30488);

(statearr_30520_32678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (13))){
var inst_30490 = (state_30499[(2)]);
var state_30499__$1 = (function (){var statearr_30521 = state_30499;
(statearr_30521[(9)] = inst_30490);

return statearr_30521;
})();
var statearr_30522_32683 = state_30499__$1;
(statearr_30522_32683[(2)] = null);

(statearr_30522_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (6))){
var inst_30460 = (state_30499[(7)]);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30499__$1,(11),inst_30460);
} else {
if((state_val_30500 === (17))){
var inst_30483 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30483)){
var statearr_30524_32687 = state_30499__$1;
(statearr_30524_32687[(1)] = (19));

} else {
var statearr_30525_32689 = state_30499__$1;
(statearr_30525_32689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (3))){
var inst_30496 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30499__$1,inst_30496);
} else {
if((state_val_30500 === (12))){
var inst_30472 = (state_30499[(10)]);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30499__$1,(14),inst_30472);
} else {
if((state_val_30500 === (2))){
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30499__$1,(4),results);
} else {
if((state_val_30500 === (19))){
var state_30499__$1 = state_30499;
var statearr_30529_32695 = state_30499__$1;
(statearr_30529_32695[(2)] = null);

(statearr_30529_32695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (11))){
var inst_30472 = (state_30499[(2)]);
var state_30499__$1 = (function (){var statearr_30530 = state_30499;
(statearr_30530[(10)] = inst_30472);

return statearr_30530;
})();
var statearr_30531_32697 = state_30499__$1;
(statearr_30531_32697[(2)] = null);

(statearr_30531_32697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (9))){
var state_30499__$1 = state_30499;
var statearr_30532_32703 = state_30499__$1;
(statearr_30532_32703[(2)] = null);

(statearr_30532_32703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (5))){
var state_30499__$1 = state_30499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30533_32706 = state_30499__$1;
(statearr_30533_32706[(1)] = (8));

} else {
var statearr_30534_32707 = state_30499__$1;
(statearr_30534_32707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (14))){
var inst_30475 = (state_30499[(8)]);
var inst_30475__$1 = (state_30499[(2)]);
var inst_30476 = (inst_30475__$1 == null);
var inst_30477 = cljs.core.not(inst_30476);
var state_30499__$1 = (function (){var statearr_30535 = state_30499;
(statearr_30535[(8)] = inst_30475__$1);

return statearr_30535;
})();
if(inst_30477){
var statearr_30537_32718 = state_30499__$1;
(statearr_30537_32718[(1)] = (15));

} else {
var statearr_30538_32719 = state_30499__$1;
(statearr_30538_32719[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (16))){
var state_30499__$1 = state_30499;
var statearr_30539_32720 = state_30499__$1;
(statearr_30539_32720[(2)] = false);

(statearr_30539_32720[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (10))){
var inst_30469 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30541_32726 = state_30499__$1;
(statearr_30541_32726[(2)] = inst_30469);

(statearr_30541_32726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (18))){
var inst_30480 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30542_32727 = state_30499__$1;
(statearr_30542_32727[(2)] = inst_30480);

(statearr_30542_32727[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (8))){
var inst_30466 = cljs.core.async.close_BANG_(to);
var state_30499__$1 = state_30499;
var statearr_30543_32731 = state_30499__$1;
(statearr_30543_32731[(2)] = inst_30466);

(statearr_30543_32731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1 = (function (state_30499){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30499);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30546){var ex__29764__auto__ = e30546;
var statearr_30548_32733 = state_30499;
(statearr_30548_32733[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30499[(4)]))){
var statearr_30549_32734 = state_30499;
(statearr_30549_32734[(1)] = cljs.core.first((state_30499[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32738 = state_30499;
state_30499 = G__32738;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__ = function(state_30499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1.call(this,state_30499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30552 = f__29918__auto__();
(statearr_30552[(6)] = c__29917__auto__);

return statearr_30552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));

return c__29917__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30557 = arguments.length;
switch (G__30557) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30564 = arguments.length;
switch (G__30564) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30578 = arguments.length;
switch (G__30578) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29917__auto___32775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30610){
var state_val_30611 = (state_30610[(1)]);
if((state_val_30611 === (7))){
var inst_30606 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30620_32783 = state_30610__$1;
(statearr_30620_32783[(2)] = inst_30606);

(statearr_30620_32783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (1))){
var state_30610__$1 = state_30610;
var statearr_30621_32785 = state_30610__$1;
(statearr_30621_32785[(2)] = null);

(statearr_30621_32785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (4))){
var inst_30585 = (state_30610[(7)]);
var inst_30585__$1 = (state_30610[(2)]);
var inst_30586 = (inst_30585__$1 == null);
var state_30610__$1 = (function (){var statearr_30622 = state_30610;
(statearr_30622[(7)] = inst_30585__$1);

return statearr_30622;
})();
if(cljs.core.truth_(inst_30586)){
var statearr_30623_32788 = state_30610__$1;
(statearr_30623_32788[(1)] = (5));

} else {
var statearr_30624_32789 = state_30610__$1;
(statearr_30624_32789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (13))){
var state_30610__$1 = state_30610;
var statearr_30625_32790 = state_30610__$1;
(statearr_30625_32790[(2)] = null);

(statearr_30625_32790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (6))){
var inst_30585 = (state_30610[(7)]);
var inst_30593 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30585) : p.call(null,inst_30585));
var state_30610__$1 = state_30610;
if(cljs.core.truth_(inst_30593)){
var statearr_30630_32794 = state_30610__$1;
(statearr_30630_32794[(1)] = (9));

} else {
var statearr_30631_32796 = state_30610__$1;
(statearr_30631_32796[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (3))){
var inst_30608 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30610__$1,inst_30608);
} else {
if((state_val_30611 === (12))){
var state_30610__$1 = state_30610;
var statearr_30632_32799 = state_30610__$1;
(statearr_30632_32799[(2)] = null);

(statearr_30632_32799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (2))){
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30610__$1,(4),ch);
} else {
if((state_val_30611 === (11))){
var inst_30585 = (state_30610[(7)]);
var inst_30597 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30610__$1,(8),inst_30597,inst_30585);
} else {
if((state_val_30611 === (9))){
var state_30610__$1 = state_30610;
var statearr_30633_32801 = state_30610__$1;
(statearr_30633_32801[(2)] = tc);

(statearr_30633_32801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (5))){
var inst_30588 = cljs.core.async.close_BANG_(tc);
var inst_30589 = cljs.core.async.close_BANG_(fc);
var state_30610__$1 = (function (){var statearr_30634 = state_30610;
(statearr_30634[(8)] = inst_30588);

return statearr_30634;
})();
var statearr_30635_32804 = state_30610__$1;
(statearr_30635_32804[(2)] = inst_30589);

(statearr_30635_32804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (14))){
var inst_30604 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30637_32805 = state_30610__$1;
(statearr_30637_32805[(2)] = inst_30604);

(statearr_30637_32805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (10))){
var state_30610__$1 = state_30610;
var statearr_30638_32807 = state_30610__$1;
(statearr_30638_32807[(2)] = fc);

(statearr_30638_32807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (8))){
var inst_30599 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
if(cljs.core.truth_(inst_30599)){
var statearr_30640_32810 = state_30610__$1;
(statearr_30640_32810[(1)] = (12));

} else {
var statearr_30642_32811 = state_30610__$1;
(statearr_30642_32811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_30644 = [null,null,null,null,null,null,null,null,null];
(statearr_30644[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_30644[(1)] = (1));

return statearr_30644;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_30610){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30610);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30645){var ex__29764__auto__ = e30645;
var statearr_30646_32813 = state_30610;
(statearr_30646_32813[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30610[(4)]))){
var statearr_30647_32816 = state_30610;
(statearr_30647_32816[(1)] = cljs.core.first((state_30610[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32818 = state_30610;
state_30610 = G__32818;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30648 = f__29918__auto__();
(statearr_30648[(6)] = c__29917__auto___32775);

return statearr_30648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29917__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30672){
var state_val_30673 = (state_30672[(1)]);
if((state_val_30673 === (7))){
var inst_30668 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30674_32819 = state_30672__$1;
(statearr_30674_32819[(2)] = inst_30668);

(statearr_30674_32819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (1))){
var inst_30649 = init;
var inst_30650 = inst_30649;
var state_30672__$1 = (function (){var statearr_30675 = state_30672;
(statearr_30675[(7)] = inst_30650);

return statearr_30675;
})();
var statearr_30676_32820 = state_30672__$1;
(statearr_30676_32820[(2)] = null);

(statearr_30676_32820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (4))){
var inst_30654 = (state_30672[(8)]);
var inst_30654__$1 = (state_30672[(2)]);
var inst_30655 = (inst_30654__$1 == null);
var state_30672__$1 = (function (){var statearr_30677 = state_30672;
(statearr_30677[(8)] = inst_30654__$1);

return statearr_30677;
})();
if(cljs.core.truth_(inst_30655)){
var statearr_30678_32825 = state_30672__$1;
(statearr_30678_32825[(1)] = (5));

} else {
var statearr_30679_32826 = state_30672__$1;
(statearr_30679_32826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (6))){
var inst_30650 = (state_30672[(7)]);
var inst_30654 = (state_30672[(8)]);
var inst_30658 = (state_30672[(9)]);
var inst_30658__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30650,inst_30654) : f.call(null,inst_30650,inst_30654));
var inst_30659 = cljs.core.reduced_QMARK_(inst_30658__$1);
var state_30672__$1 = (function (){var statearr_30681 = state_30672;
(statearr_30681[(9)] = inst_30658__$1);

return statearr_30681;
})();
if(inst_30659){
var statearr_30684_32832 = state_30672__$1;
(statearr_30684_32832[(1)] = (8));

} else {
var statearr_30685_32833 = state_30672__$1;
(statearr_30685_32833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (3))){
var inst_30670 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30672__$1,inst_30670);
} else {
if((state_val_30673 === (2))){
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30672__$1,(4),ch);
} else {
if((state_val_30673 === (9))){
var inst_30658 = (state_30672[(9)]);
var inst_30650 = inst_30658;
var state_30672__$1 = (function (){var statearr_30687 = state_30672;
(statearr_30687[(7)] = inst_30650);

return statearr_30687;
})();
var statearr_30688_32839 = state_30672__$1;
(statearr_30688_32839[(2)] = null);

(statearr_30688_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (5))){
var inst_30650 = (state_30672[(7)]);
var state_30672__$1 = state_30672;
var statearr_30689_32842 = state_30672__$1;
(statearr_30689_32842[(2)] = inst_30650);

(statearr_30689_32842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (10))){
var inst_30666 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30691_32846 = state_30672__$1;
(statearr_30691_32846[(2)] = inst_30666);

(statearr_30691_32846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (8))){
var inst_30658 = (state_30672[(9)]);
var inst_30661 = cljs.core.deref(inst_30658);
var state_30672__$1 = state_30672;
var statearr_30692_32848 = state_30672__$1;
(statearr_30692_32848[(2)] = inst_30661);

(statearr_30692_32848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29761__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29761__auto____0 = (function (){
var statearr_30694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30694[(0)] = cljs$core$async$reduce_$_state_machine__29761__auto__);

(statearr_30694[(1)] = (1));

return statearr_30694;
});
var cljs$core$async$reduce_$_state_machine__29761__auto____1 = (function (state_30672){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30672);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30695){var ex__29764__auto__ = e30695;
var statearr_30696_32859 = state_30672;
(statearr_30696_32859[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30672[(4)]))){
var statearr_30697_32860 = state_30672;
(statearr_30697_32860[(1)] = cljs.core.first((state_30672[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32862 = state_30672;
state_30672 = G__32862;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29761__auto__ = function(state_30672){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29761__auto____1.call(this,state_30672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29761__auto____0;
cljs$core$async$reduce_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29761__auto____1;
return cljs$core$async$reduce_$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30698 = f__29918__auto__();
(statearr_30698[(6)] = c__29917__auto__);

return statearr_30698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));

return c__29917__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29917__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30706){
var state_val_30707 = (state_30706[(1)]);
if((state_val_30707 === (1))){
var inst_30701 = cljs.core.async.reduce(f__$1,init,ch);
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30706__$1,(2),inst_30701);
} else {
if((state_val_30707 === (2))){
var inst_30703 = (state_30706[(2)]);
var inst_30704 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30703) : f__$1.call(null,inst_30703));
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30706__$1,inst_30704);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29761__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29761__auto____0 = (function (){
var statearr_30710 = [null,null,null,null,null,null,null];
(statearr_30710[(0)] = cljs$core$async$transduce_$_state_machine__29761__auto__);

(statearr_30710[(1)] = (1));

return statearr_30710;
});
var cljs$core$async$transduce_$_state_machine__29761__auto____1 = (function (state_30706){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30706);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30711){var ex__29764__auto__ = e30711;
var statearr_30712_32876 = state_30706;
(statearr_30712_32876[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30706[(4)]))){
var statearr_30715_32879 = state_30706;
(statearr_30715_32879[(1)] = cljs.core.first((state_30706[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32880 = state_30706;
state_30706 = G__32880;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29761__auto__ = function(state_30706){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29761__auto____1.call(this,state_30706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29761__auto____0;
cljs$core$async$transduce_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29761__auto____1;
return cljs$core$async$transduce_$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30717 = f__29918__auto__();
(statearr_30717[(6)] = c__29917__auto__);

return statearr_30717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));

return c__29917__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30723 = arguments.length;
switch (G__30723) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29917__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30752){
var state_val_30753 = (state_30752[(1)]);
if((state_val_30753 === (7))){
var inst_30732 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30757_32891 = state_30752__$1;
(statearr_30757_32891[(2)] = inst_30732);

(statearr_30757_32891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (1))){
var inst_30724 = cljs.core.seq(coll);
var inst_30725 = inst_30724;
var state_30752__$1 = (function (){var statearr_30760 = state_30752;
(statearr_30760[(7)] = inst_30725);

return statearr_30760;
})();
var statearr_30762_32898 = state_30752__$1;
(statearr_30762_32898[(2)] = null);

(statearr_30762_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (4))){
var inst_30725 = (state_30752[(7)]);
var inst_30730 = cljs.core.first(inst_30725);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30752__$1,(7),ch,inst_30730);
} else {
if((state_val_30753 === (13))){
var inst_30746 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30767_32901 = state_30752__$1;
(statearr_30767_32901[(2)] = inst_30746);

(statearr_30767_32901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (6))){
var inst_30735 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
if(cljs.core.truth_(inst_30735)){
var statearr_30768_32910 = state_30752__$1;
(statearr_30768_32910[(1)] = (8));

} else {
var statearr_30769_32912 = state_30752__$1;
(statearr_30769_32912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (3))){
var inst_30750 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30752__$1,inst_30750);
} else {
if((state_val_30753 === (12))){
var state_30752__$1 = state_30752;
var statearr_30770_32925 = state_30752__$1;
(statearr_30770_32925[(2)] = null);

(statearr_30770_32925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (2))){
var inst_30725 = (state_30752[(7)]);
var state_30752__$1 = state_30752;
if(cljs.core.truth_(inst_30725)){
var statearr_30774_32931 = state_30752__$1;
(statearr_30774_32931[(1)] = (4));

} else {
var statearr_30775_32933 = state_30752__$1;
(statearr_30775_32933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (11))){
var inst_30743 = cljs.core.async.close_BANG_(ch);
var state_30752__$1 = state_30752;
var statearr_30779_32935 = state_30752__$1;
(statearr_30779_32935[(2)] = inst_30743);

(statearr_30779_32935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (9))){
var state_30752__$1 = state_30752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30780_32936 = state_30752__$1;
(statearr_30780_32936[(1)] = (11));

} else {
var statearr_30781_32937 = state_30752__$1;
(statearr_30781_32937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (5))){
var inst_30725 = (state_30752[(7)]);
var state_30752__$1 = state_30752;
var statearr_30784_32942 = state_30752__$1;
(statearr_30784_32942[(2)] = inst_30725);

(statearr_30784_32942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (10))){
var inst_30748 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30785_32947 = state_30752__$1;
(statearr_30785_32947[(2)] = inst_30748);

(statearr_30785_32947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (8))){
var inst_30725 = (state_30752[(7)]);
var inst_30738 = cljs.core.next(inst_30725);
var inst_30725__$1 = inst_30738;
var state_30752__$1 = (function (){var statearr_30786 = state_30752;
(statearr_30786[(7)] = inst_30725__$1);

return statearr_30786;
})();
var statearr_30788_32950 = state_30752__$1;
(statearr_30788_32950[(2)] = null);

(statearr_30788_32950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_30790 = [null,null,null,null,null,null,null,null];
(statearr_30790[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_30790[(1)] = (1));

return statearr_30790;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_30752){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30752);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e30791){var ex__29764__auto__ = e30791;
var statearr_30792_32955 = state_30752;
(statearr_30792_32955[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30752[(4)]))){
var statearr_30794_32956 = state_30752;
(statearr_30794_32956[(1)] = cljs.core.first((state_30752[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32957 = state_30752;
state_30752 = G__32957;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_30752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_30752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30796 = f__29918__auto__();
(statearr_30796[(6)] = c__29917__auto__);

return statearr_30796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));

return c__29917__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30800 = arguments.length;
switch (G__30800) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32971 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32971(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32979 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32979(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32995 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32995(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33000 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33000(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30830 = (function (ch,cs,meta30831){
this.ch = ch;
this.cs = cs;
this.meta30831 = meta30831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30832,meta30831__$1){
var self__ = this;
var _30832__$1 = this;
return (new cljs.core.async.t_cljs$core$async30830(self__.ch,self__.cs,meta30831__$1));
}));

(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30832){
var self__ = this;
var _30832__$1 = this;
return self__.meta30831;
}));

(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30830.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30831","meta30831",-381553025,null)], null);
}));

(cljs.core.async.t_cljs$core$async30830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30830");

(cljs.core.async.t_cljs$core$async30830.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30830.
 */
cljs.core.async.__GT_t_cljs$core$async30830 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30830(ch__$1,cs__$1,meta30831){
return (new cljs.core.async.t_cljs$core$async30830(ch__$1,cs__$1,meta30831));
});

}

return (new cljs.core.async.t_cljs$core$async30830(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29917__auto___33025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_30991){
var state_val_30992 = (state_30991[(1)]);
if((state_val_30992 === (7))){
var inst_30983 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_30995_33030 = state_30991__$1;
(statearr_30995_33030[(2)] = inst_30983);

(statearr_30995_33030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (20))){
var inst_30881 = (state_30991[(7)]);
var inst_30893 = cljs.core.first(inst_30881);
var inst_30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30893,(0),null);
var inst_30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30893,(1),null);
var state_30991__$1 = (function (){var statearr_30996 = state_30991;
(statearr_30996[(8)] = inst_30894);

return statearr_30996;
})();
if(cljs.core.truth_(inst_30895)){
var statearr_30997_33035 = state_30991__$1;
(statearr_30997_33035[(1)] = (22));

} else {
var statearr_30998_33036 = state_30991__$1;
(statearr_30998_33036[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (27))){
var inst_30931 = (state_30991[(9)]);
var inst_30924 = (state_30991[(10)]);
var inst_30926 = (state_30991[(11)]);
var inst_30843 = (state_30991[(12)]);
var inst_30931__$1 = cljs.core._nth(inst_30924,inst_30926);
var inst_30932 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30931__$1,inst_30843,done);
var state_30991__$1 = (function (){var statearr_31001 = state_30991;
(statearr_31001[(9)] = inst_30931__$1);

return statearr_31001;
})();
if(cljs.core.truth_(inst_30932)){
var statearr_31002_33037 = state_30991__$1;
(statearr_31002_33037[(1)] = (30));

} else {
var statearr_31003_33040 = state_30991__$1;
(statearr_31003_33040[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (1))){
var state_30991__$1 = state_30991;
var statearr_31006_33041 = state_30991__$1;
(statearr_31006_33041[(2)] = null);

(statearr_31006_33041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (24))){
var inst_30881 = (state_30991[(7)]);
var inst_30900 = (state_30991[(2)]);
var inst_30902 = cljs.core.next(inst_30881);
var inst_30855 = inst_30902;
var inst_30856 = null;
var inst_30857 = (0);
var inst_30858 = (0);
var state_30991__$1 = (function (){var statearr_31010 = state_30991;
(statearr_31010[(13)] = inst_30900);

(statearr_31010[(14)] = inst_30855);

(statearr_31010[(15)] = inst_30857);

(statearr_31010[(16)] = inst_30858);

(statearr_31010[(17)] = inst_30856);

return statearr_31010;
})();
var statearr_31011_33042 = state_30991__$1;
(statearr_31011_33042[(2)] = null);

(statearr_31011_33042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (39))){
var state_30991__$1 = state_30991;
var statearr_31015_33043 = state_30991__$1;
(statearr_31015_33043[(2)] = null);

(statearr_31015_33043[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (4))){
var inst_30843 = (state_30991[(12)]);
var inst_30843__$1 = (state_30991[(2)]);
var inst_30844 = (inst_30843__$1 == null);
var state_30991__$1 = (function (){var statearr_31016 = state_30991;
(statearr_31016[(12)] = inst_30843__$1);

return statearr_31016;
})();
if(cljs.core.truth_(inst_30844)){
var statearr_31017_33046 = state_30991__$1;
(statearr_31017_33046[(1)] = (5));

} else {
var statearr_31018_33048 = state_30991__$1;
(statearr_31018_33048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (15))){
var inst_30855 = (state_30991[(14)]);
var inst_30857 = (state_30991[(15)]);
var inst_30858 = (state_30991[(16)]);
var inst_30856 = (state_30991[(17)]);
var inst_30876 = (state_30991[(2)]);
var inst_30878 = (inst_30858 + (1));
var tmp31012 = inst_30855;
var tmp31013 = inst_30857;
var tmp31014 = inst_30856;
var inst_30855__$1 = tmp31012;
var inst_30856__$1 = tmp31014;
var inst_30857__$1 = tmp31013;
var inst_30858__$1 = inst_30878;
var state_30991__$1 = (function (){var statearr_31022 = state_30991;
(statearr_31022[(14)] = inst_30855__$1);

(statearr_31022[(15)] = inst_30857__$1);

(statearr_31022[(16)] = inst_30858__$1);

(statearr_31022[(18)] = inst_30876);

(statearr_31022[(17)] = inst_30856__$1);

return statearr_31022;
})();
var statearr_31023_33055 = state_30991__$1;
(statearr_31023_33055[(2)] = null);

(statearr_31023_33055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (21))){
var inst_30905 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31031_33058 = state_30991__$1;
(statearr_31031_33058[(2)] = inst_30905);

(statearr_31031_33058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (31))){
var inst_30931 = (state_30991[(9)]);
var inst_30935 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30931);
var state_30991__$1 = state_30991;
var statearr_31032_33063 = state_30991__$1;
(statearr_31032_33063[(2)] = inst_30935);

(statearr_31032_33063[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (32))){
var inst_30925 = (state_30991[(19)]);
var inst_30924 = (state_30991[(10)]);
var inst_30926 = (state_30991[(11)]);
var inst_30923 = (state_30991[(20)]);
var inst_30937 = (state_30991[(2)]);
var inst_30938 = (inst_30926 + (1));
var tmp31028 = inst_30925;
var tmp31029 = inst_30924;
var tmp31030 = inst_30923;
var inst_30923__$1 = tmp31030;
var inst_30924__$1 = tmp31029;
var inst_30925__$1 = tmp31028;
var inst_30926__$1 = inst_30938;
var state_30991__$1 = (function (){var statearr_31033 = state_30991;
(statearr_31033[(19)] = inst_30925__$1);

(statearr_31033[(10)] = inst_30924__$1);

(statearr_31033[(21)] = inst_30937);

(statearr_31033[(11)] = inst_30926__$1);

(statearr_31033[(20)] = inst_30923__$1);

return statearr_31033;
})();
var statearr_31034_33074 = state_30991__$1;
(statearr_31034_33074[(2)] = null);

(statearr_31034_33074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (40))){
var inst_30954 = (state_30991[(22)]);
var inst_30959 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30954);
var state_30991__$1 = state_30991;
var statearr_31040_33079 = state_30991__$1;
(statearr_31040_33079[(2)] = inst_30959);

(statearr_31040_33079[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (33))){
var inst_30941 = (state_30991[(23)]);
var inst_30944 = cljs.core.chunked_seq_QMARK_(inst_30941);
var state_30991__$1 = state_30991;
if(inst_30944){
var statearr_31045_33080 = state_30991__$1;
(statearr_31045_33080[(1)] = (36));

} else {
var statearr_31046_33081 = state_30991__$1;
(statearr_31046_33081[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (13))){
var inst_30870 = (state_30991[(24)]);
var inst_30873 = cljs.core.async.close_BANG_(inst_30870);
var state_30991__$1 = state_30991;
var statearr_31047_33082 = state_30991__$1;
(statearr_31047_33082[(2)] = inst_30873);

(statearr_31047_33082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (22))){
var inst_30894 = (state_30991[(8)]);
var inst_30897 = cljs.core.async.close_BANG_(inst_30894);
var state_30991__$1 = state_30991;
var statearr_31055_33083 = state_30991__$1;
(statearr_31055_33083[(2)] = inst_30897);

(statearr_31055_33083[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (36))){
var inst_30941 = (state_30991[(23)]);
var inst_30949 = cljs.core.chunk_first(inst_30941);
var inst_30950 = cljs.core.chunk_rest(inst_30941);
var inst_30951 = cljs.core.count(inst_30949);
var inst_30923 = inst_30950;
var inst_30924 = inst_30949;
var inst_30925 = inst_30951;
var inst_30926 = (0);
var state_30991__$1 = (function (){var statearr_31060 = state_30991;
(statearr_31060[(19)] = inst_30925);

(statearr_31060[(10)] = inst_30924);

(statearr_31060[(11)] = inst_30926);

(statearr_31060[(20)] = inst_30923);

return statearr_31060;
})();
var statearr_31062_33085 = state_30991__$1;
(statearr_31062_33085[(2)] = null);

(statearr_31062_33085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (41))){
var inst_30941 = (state_30991[(23)]);
var inst_30961 = (state_30991[(2)]);
var inst_30962 = cljs.core.next(inst_30941);
var inst_30923 = inst_30962;
var inst_30924 = null;
var inst_30925 = (0);
var inst_30926 = (0);
var state_30991__$1 = (function (){var statearr_31067 = state_30991;
(statearr_31067[(19)] = inst_30925);

(statearr_31067[(10)] = inst_30924);

(statearr_31067[(11)] = inst_30926);

(statearr_31067[(20)] = inst_30923);

(statearr_31067[(25)] = inst_30961);

return statearr_31067;
})();
var statearr_31070_33088 = state_30991__$1;
(statearr_31070_33088[(2)] = null);

(statearr_31070_33088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (43))){
var state_30991__$1 = state_30991;
var statearr_31072_33089 = state_30991__$1;
(statearr_31072_33089[(2)] = null);

(statearr_31072_33089[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (29))){
var inst_30971 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31076_33090 = state_30991__$1;
(statearr_31076_33090[(2)] = inst_30971);

(statearr_31076_33090[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (44))){
var inst_30980 = (state_30991[(2)]);
var state_30991__$1 = (function (){var statearr_31077 = state_30991;
(statearr_31077[(26)] = inst_30980);

return statearr_31077;
})();
var statearr_31078_33092 = state_30991__$1;
(statearr_31078_33092[(2)] = null);

(statearr_31078_33092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (6))){
var inst_30915 = (state_30991[(27)]);
var inst_30914 = cljs.core.deref(cs);
var inst_30915__$1 = cljs.core.keys(inst_30914);
var inst_30916 = cljs.core.count(inst_30915__$1);
var inst_30917 = cljs.core.reset_BANG_(dctr,inst_30916);
var inst_30922 = cljs.core.seq(inst_30915__$1);
var inst_30923 = inst_30922;
var inst_30924 = null;
var inst_30925 = (0);
var inst_30926 = (0);
var state_30991__$1 = (function (){var statearr_31079 = state_30991;
(statearr_31079[(27)] = inst_30915__$1);

(statearr_31079[(19)] = inst_30925);

(statearr_31079[(10)] = inst_30924);

(statearr_31079[(11)] = inst_30926);

(statearr_31079[(28)] = inst_30917);

(statearr_31079[(20)] = inst_30923);

return statearr_31079;
})();
var statearr_31080_33095 = state_30991__$1;
(statearr_31080_33095[(2)] = null);

(statearr_31080_33095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (28))){
var inst_30941 = (state_30991[(23)]);
var inst_30923 = (state_30991[(20)]);
var inst_30941__$1 = cljs.core.seq(inst_30923);
var state_30991__$1 = (function (){var statearr_31088 = state_30991;
(statearr_31088[(23)] = inst_30941__$1);

return statearr_31088;
})();
if(inst_30941__$1){
var statearr_31089_33098 = state_30991__$1;
(statearr_31089_33098[(1)] = (33));

} else {
var statearr_31090_33099 = state_30991__$1;
(statearr_31090_33099[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (25))){
var inst_30925 = (state_30991[(19)]);
var inst_30926 = (state_30991[(11)]);
var inst_30928 = (inst_30926 < inst_30925);
var inst_30929 = inst_30928;
var state_30991__$1 = state_30991;
if(cljs.core.truth_(inst_30929)){
var statearr_31094_33102 = state_30991__$1;
(statearr_31094_33102[(1)] = (27));

} else {
var statearr_31095_33103 = state_30991__$1;
(statearr_31095_33103[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (34))){
var state_30991__$1 = state_30991;
var statearr_31096_33107 = state_30991__$1;
(statearr_31096_33107[(2)] = null);

(statearr_31096_33107[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (17))){
var state_30991__$1 = state_30991;
var statearr_31097_33109 = state_30991__$1;
(statearr_31097_33109[(2)] = null);

(statearr_31097_33109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (3))){
var inst_30985 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30991__$1,inst_30985);
} else {
if((state_val_30992 === (12))){
var inst_30910 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31099_33116 = state_30991__$1;
(statearr_31099_33116[(2)] = inst_30910);

(statearr_31099_33116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (2))){
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30991__$1,(4),ch);
} else {
if((state_val_30992 === (23))){
var state_30991__$1 = state_30991;
var statearr_31102_33119 = state_30991__$1;
(statearr_31102_33119[(2)] = null);

(statearr_31102_33119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (35))){
var inst_30969 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31103_33121 = state_30991__$1;
(statearr_31103_33121[(2)] = inst_30969);

(statearr_31103_33121[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (19))){
var inst_30881 = (state_30991[(7)]);
var inst_30885 = cljs.core.chunk_first(inst_30881);
var inst_30886 = cljs.core.chunk_rest(inst_30881);
var inst_30887 = cljs.core.count(inst_30885);
var inst_30855 = inst_30886;
var inst_30856 = inst_30885;
var inst_30857 = inst_30887;
var inst_30858 = (0);
var state_30991__$1 = (function (){var statearr_31107 = state_30991;
(statearr_31107[(14)] = inst_30855);

(statearr_31107[(15)] = inst_30857);

(statearr_31107[(16)] = inst_30858);

(statearr_31107[(17)] = inst_30856);

return statearr_31107;
})();
var statearr_31108_33135 = state_30991__$1;
(statearr_31108_33135[(2)] = null);

(statearr_31108_33135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (11))){
var inst_30855 = (state_30991[(14)]);
var inst_30881 = (state_30991[(7)]);
var inst_30881__$1 = cljs.core.seq(inst_30855);
var state_30991__$1 = (function (){var statearr_31109 = state_30991;
(statearr_31109[(7)] = inst_30881__$1);

return statearr_31109;
})();
if(inst_30881__$1){
var statearr_31110_33136 = state_30991__$1;
(statearr_31110_33136[(1)] = (16));

} else {
var statearr_31111_33137 = state_30991__$1;
(statearr_31111_33137[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (9))){
var inst_30912 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31112_33138 = state_30991__$1;
(statearr_31112_33138[(2)] = inst_30912);

(statearr_31112_33138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (5))){
var inst_30850 = cljs.core.deref(cs);
var inst_30851 = cljs.core.seq(inst_30850);
var inst_30855 = inst_30851;
var inst_30856 = null;
var inst_30857 = (0);
var inst_30858 = (0);
var state_30991__$1 = (function (){var statearr_31113 = state_30991;
(statearr_31113[(14)] = inst_30855);

(statearr_31113[(15)] = inst_30857);

(statearr_31113[(16)] = inst_30858);

(statearr_31113[(17)] = inst_30856);

return statearr_31113;
})();
var statearr_31117_33142 = state_30991__$1;
(statearr_31117_33142[(2)] = null);

(statearr_31117_33142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (14))){
var state_30991__$1 = state_30991;
var statearr_31118_33143 = state_30991__$1;
(statearr_31118_33143[(2)] = null);

(statearr_31118_33143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (45))){
var inst_30977 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31123_33144 = state_30991__$1;
(statearr_31123_33144[(2)] = inst_30977);

(statearr_31123_33144[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (26))){
var inst_30915 = (state_30991[(27)]);
var inst_30973 = (state_30991[(2)]);
var inst_30974 = cljs.core.seq(inst_30915);
var state_30991__$1 = (function (){var statearr_31127 = state_30991;
(statearr_31127[(29)] = inst_30973);

return statearr_31127;
})();
if(inst_30974){
var statearr_31131_33149 = state_30991__$1;
(statearr_31131_33149[(1)] = (42));

} else {
var statearr_31134_33150 = state_30991__$1;
(statearr_31134_33150[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (16))){
var inst_30881 = (state_30991[(7)]);
var inst_30883 = cljs.core.chunked_seq_QMARK_(inst_30881);
var state_30991__$1 = state_30991;
if(inst_30883){
var statearr_31139_33153 = state_30991__$1;
(statearr_31139_33153[(1)] = (19));

} else {
var statearr_31140_33154 = state_30991__$1;
(statearr_31140_33154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (38))){
var inst_30966 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31141_33157 = state_30991__$1;
(statearr_31141_33157[(2)] = inst_30966);

(statearr_31141_33157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (30))){
var state_30991__$1 = state_30991;
var statearr_31142_33158 = state_30991__$1;
(statearr_31142_33158[(2)] = null);

(statearr_31142_33158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (10))){
var inst_30858 = (state_30991[(16)]);
var inst_30856 = (state_30991[(17)]);
var inst_30869 = cljs.core._nth(inst_30856,inst_30858);
var inst_30870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30869,(0),null);
var inst_30871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30869,(1),null);
var state_30991__$1 = (function (){var statearr_31143 = state_30991;
(statearr_31143[(24)] = inst_30870);

return statearr_31143;
})();
if(cljs.core.truth_(inst_30871)){
var statearr_31144_33162 = state_30991__$1;
(statearr_31144_33162[(1)] = (13));

} else {
var statearr_31145_33164 = state_30991__$1;
(statearr_31145_33164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (18))){
var inst_30908 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31146_33165 = state_30991__$1;
(statearr_31146_33165[(2)] = inst_30908);

(statearr_31146_33165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (42))){
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30991__$1,(45),dchan);
} else {
if((state_val_30992 === (37))){
var inst_30941 = (state_30991[(23)]);
var inst_30954 = (state_30991[(22)]);
var inst_30843 = (state_30991[(12)]);
var inst_30954__$1 = cljs.core.first(inst_30941);
var inst_30956 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30954__$1,inst_30843,done);
var state_30991__$1 = (function (){var statearr_31148 = state_30991;
(statearr_31148[(22)] = inst_30954__$1);

return statearr_31148;
})();
if(cljs.core.truth_(inst_30956)){
var statearr_31149_33169 = state_30991__$1;
(statearr_31149_33169[(1)] = (39));

} else {
var statearr_31150_33170 = state_30991__$1;
(statearr_31150_33170[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (8))){
var inst_30857 = (state_30991[(15)]);
var inst_30858 = (state_30991[(16)]);
var inst_30862 = (inst_30858 < inst_30857);
var inst_30863 = inst_30862;
var state_30991__$1 = state_30991;
if(cljs.core.truth_(inst_30863)){
var statearr_31151_33175 = state_30991__$1;
(statearr_31151_33175[(1)] = (10));

} else {
var statearr_31154_33176 = state_30991__$1;
(statearr_31154_33176[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29761__auto__ = null;
var cljs$core$async$mult_$_state_machine__29761__auto____0 = (function (){
var statearr_31159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31159[(0)] = cljs$core$async$mult_$_state_machine__29761__auto__);

(statearr_31159[(1)] = (1));

return statearr_31159;
});
var cljs$core$async$mult_$_state_machine__29761__auto____1 = (function (state_30991){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_30991);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e31160){var ex__29764__auto__ = e31160;
var statearr_31162_33180 = state_30991;
(statearr_31162_33180[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_30991[(4)]))){
var statearr_31165_33181 = state_30991;
(statearr_31165_33181[(1)] = cljs.core.first((state_30991[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33182 = state_30991;
state_30991 = G__33182;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29761__auto__ = function(state_30991){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29761__auto____1.call(this,state_30991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29761__auto____0;
cljs$core$async$mult_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29761__auto____1;
return cljs$core$async$mult_$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31166 = f__29918__auto__();
(statearr_31166[(6)] = c__29917__auto___33025);

return statearr_31166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31168 = arguments.length;
switch (G__31168) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33194 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33194(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33202 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33202(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33203 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33203(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33205 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33205(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33209 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33209(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33210 = arguments.length;
var i__4737__auto___33211 = (0);
while(true){
if((i__4737__auto___33211 < len__4736__auto___33210)){
args__4742__auto__.push((arguments[i__4737__auto___33211]));

var G__33212 = (i__4737__auto___33211 + (1));
i__4737__auto___33211 = G__33212;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31192){
var map__31193 = p__31192;
var map__31193__$1 = (((((!((map__31193 == null))))?(((((map__31193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31193):map__31193);
var opts = map__31193__$1;
var statearr_31195_33213 = state;
(statearr_31195_33213[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31196_33214 = state;
(statearr_31196_33214[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31197_33216 = state;
(statearr_31197_33216[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31183){
var G__31184 = cljs.core.first(seq31183);
var seq31183__$1 = cljs.core.next(seq31183);
var G__31185 = cljs.core.first(seq31183__$1);
var seq31183__$2 = cljs.core.next(seq31183__$1);
var G__31186 = cljs.core.first(seq31183__$2);
var seq31183__$3 = cljs.core.next(seq31183__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31184,G__31185,G__31186,seq31183__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31208 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31209){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31209 = meta31209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31210,meta31209__$1){
var self__ = this;
var _31210__$1 = this;
return (new cljs.core.async.t_cljs$core$async31208(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31209__$1));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31210){
var self__ = this;
var _31210__$1 = this;
return self__.meta31209;
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31209","meta31209",577914476,null)], null);
}));

(cljs.core.async.t_cljs$core$async31208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31208");

(cljs.core.async.t_cljs$core$async31208.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31208.
 */
cljs.core.async.__GT_t_cljs$core$async31208 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31208(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31209){
return (new cljs.core.async.t_cljs$core$async31208(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31209));
});

}

return (new cljs.core.async.t_cljs$core$async31208(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29917__auto___33231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_31331){
var state_val_31332 = (state_31331[(1)]);
if((state_val_31332 === (7))){
var inst_31231 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31338_33235 = state_31331__$1;
(statearr_31338_33235[(2)] = inst_31231);

(statearr_31338_33235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (20))){
var inst_31244 = (state_31331[(7)]);
var state_31331__$1 = state_31331;
var statearr_31339_33236 = state_31331__$1;
(statearr_31339_33236[(2)] = inst_31244);

(statearr_31339_33236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (27))){
var state_31331__$1 = state_31331;
var statearr_31345_33237 = state_31331__$1;
(statearr_31345_33237[(2)] = null);

(statearr_31345_33237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (1))){
var inst_31218 = (state_31331[(8)]);
var inst_31218__$1 = calc_state();
var inst_31220 = (inst_31218__$1 == null);
var inst_31221 = cljs.core.not(inst_31220);
var state_31331__$1 = (function (){var statearr_31350 = state_31331;
(statearr_31350[(8)] = inst_31218__$1);

return statearr_31350;
})();
if(inst_31221){
var statearr_31351_33238 = state_31331__$1;
(statearr_31351_33238[(1)] = (2));

} else {
var statearr_31352_33239 = state_31331__$1;
(statearr_31352_33239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (24))){
var inst_31292 = (state_31331[(9)]);
var inst_31269 = (state_31331[(10)]);
var inst_31278 = (state_31331[(11)]);
var inst_31292__$1 = (inst_31269.cljs$core$IFn$_invoke$arity$1 ? inst_31269.cljs$core$IFn$_invoke$arity$1(inst_31278) : inst_31269.call(null,inst_31278));
var state_31331__$1 = (function (){var statearr_31358 = state_31331;
(statearr_31358[(9)] = inst_31292__$1);

return statearr_31358;
})();
if(cljs.core.truth_(inst_31292__$1)){
var statearr_31359_33240 = state_31331__$1;
(statearr_31359_33240[(1)] = (29));

} else {
var statearr_31360_33241 = state_31331__$1;
(statearr_31360_33241[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (4))){
var inst_31234 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31234)){
var statearr_31361_33242 = state_31331__$1;
(statearr_31361_33242[(1)] = (8));

} else {
var statearr_31362_33243 = state_31331__$1;
(statearr_31362_33243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (15))){
var inst_31263 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31263)){
var statearr_31363_33244 = state_31331__$1;
(statearr_31363_33244[(1)] = (19));

} else {
var statearr_31364_33245 = state_31331__$1;
(statearr_31364_33245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (21))){
var inst_31268 = (state_31331[(12)]);
var inst_31268__$1 = (state_31331[(2)]);
var inst_31269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31268__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31268__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31268__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31331__$1 = (function (){var statearr_31365 = state_31331;
(statearr_31365[(10)] = inst_31269);

(statearr_31365[(13)] = inst_31270);

(statearr_31365[(12)] = inst_31268__$1);

return statearr_31365;
})();
return cljs.core.async.ioc_alts_BANG_(state_31331__$1,(22),inst_31271);
} else {
if((state_val_31332 === (31))){
var inst_31300 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31300)){
var statearr_31366_33248 = state_31331__$1;
(statearr_31366_33248[(1)] = (32));

} else {
var statearr_31369_33249 = state_31331__$1;
(statearr_31369_33249[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (32))){
var inst_31277 = (state_31331[(14)]);
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31331__$1,(35),out,inst_31277);
} else {
if((state_val_31332 === (33))){
var inst_31268 = (state_31331[(12)]);
var inst_31244 = inst_31268;
var state_31331__$1 = (function (){var statearr_31370 = state_31331;
(statearr_31370[(7)] = inst_31244);

return statearr_31370;
})();
var statearr_31371_33250 = state_31331__$1;
(statearr_31371_33250[(2)] = null);

(statearr_31371_33250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (13))){
var inst_31244 = (state_31331[(7)]);
var inst_31252 = inst_31244.cljs$lang$protocol_mask$partition0$;
var inst_31253 = (inst_31252 & (64));
var inst_31254 = inst_31244.cljs$core$ISeq$;
var inst_31255 = (cljs.core.PROTOCOL_SENTINEL === inst_31254);
var inst_31256 = ((inst_31253) || (inst_31255));
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31256)){
var statearr_31372_33251 = state_31331__$1;
(statearr_31372_33251[(1)] = (16));

} else {
var statearr_31373_33252 = state_31331__$1;
(statearr_31373_33252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (22))){
var inst_31277 = (state_31331[(14)]);
var inst_31278 = (state_31331[(11)]);
var inst_31276 = (state_31331[(2)]);
var inst_31277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31276,(0),null);
var inst_31278__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31276,(1),null);
var inst_31279 = (inst_31277__$1 == null);
var inst_31280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31278__$1,change);
var inst_31281 = ((inst_31279) || (inst_31280));
var state_31331__$1 = (function (){var statearr_31374 = state_31331;
(statearr_31374[(14)] = inst_31277__$1);

(statearr_31374[(11)] = inst_31278__$1);

return statearr_31374;
})();
if(cljs.core.truth_(inst_31281)){
var statearr_31375_33256 = state_31331__$1;
(statearr_31375_33256[(1)] = (23));

} else {
var statearr_31376_33257 = state_31331__$1;
(statearr_31376_33257[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (36))){
var inst_31268 = (state_31331[(12)]);
var inst_31244 = inst_31268;
var state_31331__$1 = (function (){var statearr_31377 = state_31331;
(statearr_31377[(7)] = inst_31244);

return statearr_31377;
})();
var statearr_31378_33258 = state_31331__$1;
(statearr_31378_33258[(2)] = null);

(statearr_31378_33258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (29))){
var inst_31292 = (state_31331[(9)]);
var state_31331__$1 = state_31331;
var statearr_31379_33259 = state_31331__$1;
(statearr_31379_33259[(2)] = inst_31292);

(statearr_31379_33259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (6))){
var state_31331__$1 = state_31331;
var statearr_31386_33260 = state_31331__$1;
(statearr_31386_33260[(2)] = false);

(statearr_31386_33260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (28))){
var inst_31288 = (state_31331[(2)]);
var inst_31289 = calc_state();
var inst_31244 = inst_31289;
var state_31331__$1 = (function (){var statearr_31387 = state_31331;
(statearr_31387[(15)] = inst_31288);

(statearr_31387[(7)] = inst_31244);

return statearr_31387;
})();
var statearr_31388_33261 = state_31331__$1;
(statearr_31388_33261[(2)] = null);

(statearr_31388_33261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (25))){
var inst_31318 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31389_33262 = state_31331__$1;
(statearr_31389_33262[(2)] = inst_31318);

(statearr_31389_33262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (34))){
var inst_31312 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31390_33263 = state_31331__$1;
(statearr_31390_33263[(2)] = inst_31312);

(statearr_31390_33263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (17))){
var state_31331__$1 = state_31331;
var statearr_31391_33267 = state_31331__$1;
(statearr_31391_33267[(2)] = false);

(statearr_31391_33267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (3))){
var state_31331__$1 = state_31331;
var statearr_31393_33268 = state_31331__$1;
(statearr_31393_33268[(2)] = false);

(statearr_31393_33268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (12))){
var inst_31320 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31331__$1,inst_31320);
} else {
if((state_val_31332 === (2))){
var inst_31218 = (state_31331[(8)]);
var inst_31223 = inst_31218.cljs$lang$protocol_mask$partition0$;
var inst_31224 = (inst_31223 & (64));
var inst_31225 = inst_31218.cljs$core$ISeq$;
var inst_31226 = (cljs.core.PROTOCOL_SENTINEL === inst_31225);
var inst_31227 = ((inst_31224) || (inst_31226));
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31227)){
var statearr_31397_33269 = state_31331__$1;
(statearr_31397_33269[(1)] = (5));

} else {
var statearr_31398_33270 = state_31331__$1;
(statearr_31398_33270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (23))){
var inst_31277 = (state_31331[(14)]);
var inst_31283 = (inst_31277 == null);
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31283)){
var statearr_31399_33271 = state_31331__$1;
(statearr_31399_33271[(1)] = (26));

} else {
var statearr_31401_33272 = state_31331__$1;
(statearr_31401_33272[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (35))){
var inst_31303 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
if(cljs.core.truth_(inst_31303)){
var statearr_31404_33273 = state_31331__$1;
(statearr_31404_33273[(1)] = (36));

} else {
var statearr_31405_33274 = state_31331__$1;
(statearr_31405_33274[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (19))){
var inst_31244 = (state_31331[(7)]);
var inst_31265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31244);
var state_31331__$1 = state_31331;
var statearr_31406_33275 = state_31331__$1;
(statearr_31406_33275[(2)] = inst_31265);

(statearr_31406_33275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (11))){
var inst_31244 = (state_31331[(7)]);
var inst_31248 = (inst_31244 == null);
var inst_31249 = cljs.core.not(inst_31248);
var state_31331__$1 = state_31331;
if(inst_31249){
var statearr_31407_33282 = state_31331__$1;
(statearr_31407_33282[(1)] = (13));

} else {
var statearr_31408_33283 = state_31331__$1;
(statearr_31408_33283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (9))){
var inst_31218 = (state_31331[(8)]);
var state_31331__$1 = state_31331;
var statearr_31409_33284 = state_31331__$1;
(statearr_31409_33284[(2)] = inst_31218);

(statearr_31409_33284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (5))){
var state_31331__$1 = state_31331;
var statearr_31410_33285 = state_31331__$1;
(statearr_31410_33285[(2)] = true);

(statearr_31410_33285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (14))){
var state_31331__$1 = state_31331;
var statearr_31411_33286 = state_31331__$1;
(statearr_31411_33286[(2)] = false);

(statearr_31411_33286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (26))){
var inst_31278 = (state_31331[(11)]);
var inst_31285 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31278);
var state_31331__$1 = state_31331;
var statearr_31412_33287 = state_31331__$1;
(statearr_31412_33287[(2)] = inst_31285);

(statearr_31412_33287[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (16))){
var state_31331__$1 = state_31331;
var statearr_31415_33289 = state_31331__$1;
(statearr_31415_33289[(2)] = true);

(statearr_31415_33289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (38))){
var inst_31308 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31417_33290 = state_31331__$1;
(statearr_31417_33290[(2)] = inst_31308);

(statearr_31417_33290[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (30))){
var inst_31269 = (state_31331[(10)]);
var inst_31278 = (state_31331[(11)]);
var inst_31270 = (state_31331[(13)]);
var inst_31295 = cljs.core.empty_QMARK_(inst_31269);
var inst_31296 = (inst_31270.cljs$core$IFn$_invoke$arity$1 ? inst_31270.cljs$core$IFn$_invoke$arity$1(inst_31278) : inst_31270.call(null,inst_31278));
var inst_31297 = cljs.core.not(inst_31296);
var inst_31298 = ((inst_31295) && (inst_31297));
var state_31331__$1 = state_31331;
var statearr_31420_33296 = state_31331__$1;
(statearr_31420_33296[(2)] = inst_31298);

(statearr_31420_33296[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (10))){
var inst_31218 = (state_31331[(8)]);
var inst_31239 = (state_31331[(2)]);
var inst_31240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31239,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31239,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31239,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31244 = inst_31218;
var state_31331__$1 = (function (){var statearr_31426 = state_31331;
(statearr_31426[(16)] = inst_31241);

(statearr_31426[(17)] = inst_31240);

(statearr_31426[(7)] = inst_31244);

(statearr_31426[(18)] = inst_31243);

return statearr_31426;
})();
var statearr_31431_33298 = state_31331__$1;
(statearr_31431_33298[(2)] = null);

(statearr_31431_33298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (18))){
var inst_31260 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31435_33299 = state_31331__$1;
(statearr_31435_33299[(2)] = inst_31260);

(statearr_31435_33299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (37))){
var state_31331__$1 = state_31331;
var statearr_31436_33300 = state_31331__$1;
(statearr_31436_33300[(2)] = null);

(statearr_31436_33300[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (8))){
var inst_31218 = (state_31331[(8)]);
var inst_31236 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31218);
var state_31331__$1 = state_31331;
var statearr_31438_33301 = state_31331__$1;
(statearr_31438_33301[(2)] = inst_31236);

(statearr_31438_33301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29761__auto__ = null;
var cljs$core$async$mix_$_state_machine__29761__auto____0 = (function (){
var statearr_31443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31443[(0)] = cljs$core$async$mix_$_state_machine__29761__auto__);

(statearr_31443[(1)] = (1));

return statearr_31443;
});
var cljs$core$async$mix_$_state_machine__29761__auto____1 = (function (state_31331){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_31331);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e31444){var ex__29764__auto__ = e31444;
var statearr_31445_33302 = state_31331;
(statearr_31445_33302[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_31331[(4)]))){
var statearr_31446_33303 = state_31331;
(statearr_31446_33303[(1)] = cljs.core.first((state_31331[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33305 = state_31331;
state_31331 = G__33305;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29761__auto__ = function(state_31331){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29761__auto____1.call(this,state_31331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29761__auto____0;
cljs$core$async$mix_$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29761__auto____1;
return cljs$core$async$mix_$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31447 = f__29918__auto__();
(statearr_31447[(6)] = c__29917__auto___33231);

return statearr_31447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33310 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33310(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33311 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33311(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33314 = (function() {
var G__33315 = null;
var G__33315__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33315__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33315 = function(p,v){
switch(arguments.length){
case 1:
return G__33315__1.call(this,p);
case 2:
return G__33315__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33315.cljs$core$IFn$_invoke$arity$1 = G__33315__1;
G__33315.cljs$core$IFn$_invoke$arity$2 = G__33315__2;
return G__33315;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31454 = arguments.length;
switch (G__31454) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33314(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33314(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31465 = arguments.length;
switch (G__31465) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31457_SHARP_){
if(cljs.core.truth_((p1__31457_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31457_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31457_SHARP_.call(null,topic)))){
return p1__31457_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31457_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31487 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31488){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31488 = meta31488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31489,meta31488__$1){
var self__ = this;
var _31489__$1 = this;
return (new cljs.core.async.t_cljs$core$async31487(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31488__$1));
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31489){
var self__ = this;
var _31489__$1 = this;
return self__.meta31488;
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31488","meta31488",1457856249,null)], null);
}));

(cljs.core.async.t_cljs$core$async31487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31487");

(cljs.core.async.t_cljs$core$async31487.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31487.
 */
cljs.core.async.__GT_t_cljs$core$async31487 = (function cljs$core$async$__GT_t_cljs$core$async31487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31488){
return (new cljs.core.async.t_cljs$core$async31487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31488));
});

}

return (new cljs.core.async.t_cljs$core$async31487(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29917__auto___33342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (7))){
var inst_31559 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31566_33345 = state_31563__$1;
(statearr_31566_33345[(2)] = inst_31559);

(statearr_31566_33345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (20))){
var state_31563__$1 = state_31563;
var statearr_31568_33347 = state_31563__$1;
(statearr_31568_33347[(2)] = null);

(statearr_31568_33347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (1))){
var state_31563__$1 = state_31563;
var statearr_31570_33348 = state_31563__$1;
(statearr_31570_33348[(2)] = null);

(statearr_31570_33348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (24))){
var inst_31542 = (state_31563[(7)]);
var inst_31551 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31542);
var state_31563__$1 = state_31563;
var statearr_31571_33349 = state_31563__$1;
(statearr_31571_33349[(2)] = inst_31551);

(statearr_31571_33349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (4))){
var inst_31494 = (state_31563[(8)]);
var inst_31494__$1 = (state_31563[(2)]);
var inst_31495 = (inst_31494__$1 == null);
var state_31563__$1 = (function (){var statearr_31572 = state_31563;
(statearr_31572[(8)] = inst_31494__$1);

return statearr_31572;
})();
if(cljs.core.truth_(inst_31495)){
var statearr_31573_33350 = state_31563__$1;
(statearr_31573_33350[(1)] = (5));

} else {
var statearr_31574_33351 = state_31563__$1;
(statearr_31574_33351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (15))){
var inst_31536 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31576_33352 = state_31563__$1;
(statearr_31576_33352[(2)] = inst_31536);

(statearr_31576_33352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (21))){
var inst_31556 = (state_31563[(2)]);
var state_31563__$1 = (function (){var statearr_31578 = state_31563;
(statearr_31578[(9)] = inst_31556);

return statearr_31578;
})();
var statearr_31579_33353 = state_31563__$1;
(statearr_31579_33353[(2)] = null);

(statearr_31579_33353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (13))){
var inst_31518 = (state_31563[(10)]);
var inst_31520 = cljs.core.chunked_seq_QMARK_(inst_31518);
var state_31563__$1 = state_31563;
if(inst_31520){
var statearr_31582_33354 = state_31563__$1;
(statearr_31582_33354[(1)] = (16));

} else {
var statearr_31583_33355 = state_31563__$1;
(statearr_31583_33355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (22))){
var inst_31548 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31548)){
var statearr_31584_33357 = state_31563__$1;
(statearr_31584_33357[(1)] = (23));

} else {
var statearr_31585_33358 = state_31563__$1;
(statearr_31585_33358[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (6))){
var inst_31494 = (state_31563[(8)]);
var inst_31542 = (state_31563[(7)]);
var inst_31544 = (state_31563[(11)]);
var inst_31542__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31494) : topic_fn.call(null,inst_31494));
var inst_31543 = cljs.core.deref(mults);
var inst_31544__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31543,inst_31542__$1);
var state_31563__$1 = (function (){var statearr_31586 = state_31563;
(statearr_31586[(7)] = inst_31542__$1);

(statearr_31586[(11)] = inst_31544__$1);

return statearr_31586;
})();
if(cljs.core.truth_(inst_31544__$1)){
var statearr_31587_33361 = state_31563__$1;
(statearr_31587_33361[(1)] = (19));

} else {
var statearr_31588_33362 = state_31563__$1;
(statearr_31588_33362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (25))){
var inst_31553 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31589_33363 = state_31563__$1;
(statearr_31589_33363[(2)] = inst_31553);

(statearr_31589_33363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (17))){
var inst_31518 = (state_31563[(10)]);
var inst_31527 = cljs.core.first(inst_31518);
var inst_31528 = cljs.core.async.muxch_STAR_(inst_31527);
var inst_31529 = cljs.core.async.close_BANG_(inst_31528);
var inst_31530 = cljs.core.next(inst_31518);
var inst_31504 = inst_31530;
var inst_31505 = null;
var inst_31506 = (0);
var inst_31507 = (0);
var state_31563__$1 = (function (){var statearr_31590 = state_31563;
(statearr_31590[(12)] = inst_31505);

(statearr_31590[(13)] = inst_31529);

(statearr_31590[(14)] = inst_31507);

(statearr_31590[(15)] = inst_31506);

(statearr_31590[(16)] = inst_31504);

return statearr_31590;
})();
var statearr_31591_33367 = state_31563__$1;
(statearr_31591_33367[(2)] = null);

(statearr_31591_33367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (3))){
var inst_31561 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31563__$1,inst_31561);
} else {
if((state_val_31564 === (12))){
var inst_31538 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31592_33368 = state_31563__$1;
(statearr_31592_33368[(2)] = inst_31538);

(statearr_31592_33368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (2))){
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31563__$1,(4),ch);
} else {
if((state_val_31564 === (23))){
var state_31563__$1 = state_31563;
var statearr_31593_33370 = state_31563__$1;
(statearr_31593_33370[(2)] = null);

(statearr_31593_33370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (19))){
var inst_31494 = (state_31563[(8)]);
var inst_31544 = (state_31563[(11)]);
var inst_31546 = cljs.core.async.muxch_STAR_(inst_31544);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31563__$1,(22),inst_31546,inst_31494);
} else {
if((state_val_31564 === (11))){
var inst_31504 = (state_31563[(16)]);
var inst_31518 = (state_31563[(10)]);
var inst_31518__$1 = cljs.core.seq(inst_31504);
var state_31563__$1 = (function (){var statearr_31596 = state_31563;
(statearr_31596[(10)] = inst_31518__$1);

return statearr_31596;
})();
if(inst_31518__$1){
var statearr_31597_33373 = state_31563__$1;
(statearr_31597_33373[(1)] = (13));

} else {
var statearr_31598_33377 = state_31563__$1;
(statearr_31598_33377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (9))){
var inst_31540 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31602_33380 = state_31563__$1;
(statearr_31602_33380[(2)] = inst_31540);

(statearr_31602_33380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (5))){
var inst_31501 = cljs.core.deref(mults);
var inst_31502 = cljs.core.vals(inst_31501);
var inst_31503 = cljs.core.seq(inst_31502);
var inst_31504 = inst_31503;
var inst_31505 = null;
var inst_31506 = (0);
var inst_31507 = (0);
var state_31563__$1 = (function (){var statearr_31605 = state_31563;
(statearr_31605[(12)] = inst_31505);

(statearr_31605[(14)] = inst_31507);

(statearr_31605[(15)] = inst_31506);

(statearr_31605[(16)] = inst_31504);

return statearr_31605;
})();
var statearr_31606_33388 = state_31563__$1;
(statearr_31606_33388[(2)] = null);

(statearr_31606_33388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (14))){
var state_31563__$1 = state_31563;
var statearr_31611_33389 = state_31563__$1;
(statearr_31611_33389[(2)] = null);

(statearr_31611_33389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (16))){
var inst_31518 = (state_31563[(10)]);
var inst_31522 = cljs.core.chunk_first(inst_31518);
var inst_31523 = cljs.core.chunk_rest(inst_31518);
var inst_31524 = cljs.core.count(inst_31522);
var inst_31504 = inst_31523;
var inst_31505 = inst_31522;
var inst_31506 = inst_31524;
var inst_31507 = (0);
var state_31563__$1 = (function (){var statearr_31612 = state_31563;
(statearr_31612[(12)] = inst_31505);

(statearr_31612[(14)] = inst_31507);

(statearr_31612[(15)] = inst_31506);

(statearr_31612[(16)] = inst_31504);

return statearr_31612;
})();
var statearr_31615_33395 = state_31563__$1;
(statearr_31615_33395[(2)] = null);

(statearr_31615_33395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (10))){
var inst_31505 = (state_31563[(12)]);
var inst_31507 = (state_31563[(14)]);
var inst_31506 = (state_31563[(15)]);
var inst_31504 = (state_31563[(16)]);
var inst_31512 = cljs.core._nth(inst_31505,inst_31507);
var inst_31513 = cljs.core.async.muxch_STAR_(inst_31512);
var inst_31514 = cljs.core.async.close_BANG_(inst_31513);
var inst_31515 = (inst_31507 + (1));
var tmp31608 = inst_31505;
var tmp31609 = inst_31506;
var tmp31610 = inst_31504;
var inst_31504__$1 = tmp31610;
var inst_31505__$1 = tmp31608;
var inst_31506__$1 = tmp31609;
var inst_31507__$1 = inst_31515;
var state_31563__$1 = (function (){var statearr_31622 = state_31563;
(statearr_31622[(12)] = inst_31505__$1);

(statearr_31622[(14)] = inst_31507__$1);

(statearr_31622[(15)] = inst_31506__$1);

(statearr_31622[(16)] = inst_31504__$1);

(statearr_31622[(17)] = inst_31514);

return statearr_31622;
})();
var statearr_31623_33402 = state_31563__$1;
(statearr_31623_33402[(2)] = null);

(statearr_31623_33402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (18))){
var inst_31533 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31625_33406 = state_31563__$1;
(statearr_31625_33406[(2)] = inst_31533);

(statearr_31625_33406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (8))){
var inst_31507 = (state_31563[(14)]);
var inst_31506 = (state_31563[(15)]);
var inst_31509 = (inst_31507 < inst_31506);
var inst_31510 = inst_31509;
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31510)){
var statearr_31627_33407 = state_31563__$1;
(statearr_31627_33407[(1)] = (10));

} else {
var statearr_31629_33408 = state_31563__$1;
(statearr_31629_33408[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_31563){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_31563);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e31634){var ex__29764__auto__ = e31634;
var statearr_31635_33413 = state_31563;
(statearr_31635_33413[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_31563[(4)]))){
var statearr_31636_33420 = state_31563;
(statearr_31636_33420[(1)] = cljs.core.first((state_31563[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33421 = state_31563;
state_31563 = G__33421;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31637 = f__29918__auto__();
(statearr_31637[(6)] = c__29917__auto___33342);

return statearr_31637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31642 = arguments.length;
switch (G__31642) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31646 = arguments.length;
switch (G__31646) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31650 = arguments.length;
switch (G__31650) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29917__auto___33462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_31693){
var state_val_31694 = (state_31693[(1)]);
if((state_val_31694 === (7))){
var state_31693__$1 = state_31693;
var statearr_31695_33463 = state_31693__$1;
(statearr_31695_33463[(2)] = null);

(statearr_31695_33463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (1))){
var state_31693__$1 = state_31693;
var statearr_31696_33464 = state_31693__$1;
(statearr_31696_33464[(2)] = null);

(statearr_31696_33464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (4))){
var inst_31654 = (state_31693[(7)]);
var inst_31653 = (state_31693[(8)]);
var inst_31656 = (inst_31654 < inst_31653);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31656)){
var statearr_31697_33465 = state_31693__$1;
(statearr_31697_33465[(1)] = (6));

} else {
var statearr_31698_33466 = state_31693__$1;
(statearr_31698_33466[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (15))){
var inst_31679 = (state_31693[(9)]);
var inst_31684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31679);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31693__$1,(17),out,inst_31684);
} else {
if((state_val_31694 === (13))){
var inst_31679 = (state_31693[(9)]);
var inst_31679__$1 = (state_31693[(2)]);
var inst_31680 = cljs.core.some(cljs.core.nil_QMARK_,inst_31679__$1);
var state_31693__$1 = (function (){var statearr_31699 = state_31693;
(statearr_31699[(9)] = inst_31679__$1);

return statearr_31699;
})();
if(cljs.core.truth_(inst_31680)){
var statearr_31700_33470 = state_31693__$1;
(statearr_31700_33470[(1)] = (14));

} else {
var statearr_31701_33471 = state_31693__$1;
(statearr_31701_33471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (6))){
var state_31693__$1 = state_31693;
var statearr_31702_33472 = state_31693__$1;
(statearr_31702_33472[(2)] = null);

(statearr_31702_33472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (17))){
var inst_31686 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31717 = state_31693;
(statearr_31717[(10)] = inst_31686);

return statearr_31717;
})();
var statearr_31718_33473 = state_31693__$1;
(statearr_31718_33473[(2)] = null);

(statearr_31718_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (3))){
var inst_31691 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31693__$1,inst_31691);
} else {
if((state_val_31694 === (12))){
var _ = (function (){var statearr_31719 = state_31693;
(statearr_31719[(4)] = cljs.core.rest((state_31693[(4)])));

return statearr_31719;
})();
var state_31693__$1 = state_31693;
var ex31711 = (state_31693__$1[(2)]);
var statearr_31720_33474 = state_31693__$1;
(statearr_31720_33474[(5)] = ex31711);


if((ex31711 instanceof Object)){
var statearr_31723_33475 = state_31693__$1;
(statearr_31723_33475[(1)] = (11));

(statearr_31723_33475[(5)] = null);

} else {
throw ex31711;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (2))){
var inst_31652 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31653 = cnt;
var inst_31654 = (0);
var state_31693__$1 = (function (){var statearr_31724 = state_31693;
(statearr_31724[(11)] = inst_31652);

(statearr_31724[(7)] = inst_31654);

(statearr_31724[(8)] = inst_31653);

return statearr_31724;
})();
var statearr_31725_33482 = state_31693__$1;
(statearr_31725_33482[(2)] = null);

(statearr_31725_33482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (11))){
var inst_31658 = (state_31693[(2)]);
var inst_31659 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31693__$1 = (function (){var statearr_31727 = state_31693;
(statearr_31727[(12)] = inst_31658);

return statearr_31727;
})();
var statearr_31728_33483 = state_31693__$1;
(statearr_31728_33483[(2)] = inst_31659);

(statearr_31728_33483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (9))){
var inst_31654 = (state_31693[(7)]);
var _ = (function (){var statearr_31729 = state_31693;
(statearr_31729[(4)] = cljs.core.cons((12),(state_31693[(4)])));

return statearr_31729;
})();
var inst_31665 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31654) : chs__$1.call(null,inst_31654));
var inst_31666 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31654) : done.call(null,inst_31654));
var inst_31667 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31665,inst_31666);
var ___$1 = (function (){var statearr_31730 = state_31693;
(statearr_31730[(4)] = cljs.core.rest((state_31693[(4)])));

return statearr_31730;
})();
var state_31693__$1 = state_31693;
var statearr_31731_33484 = state_31693__$1;
(statearr_31731_33484[(2)] = inst_31667);

(statearr_31731_33484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (5))){
var inst_31677 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31732 = state_31693;
(statearr_31732[(13)] = inst_31677);

return statearr_31732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31693__$1,(13),dchan);
} else {
if((state_val_31694 === (14))){
var inst_31682 = cljs.core.async.close_BANG_(out);
var state_31693__$1 = state_31693;
var statearr_31733_33486 = state_31693__$1;
(statearr_31733_33486[(2)] = inst_31682);

(statearr_31733_33486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (16))){
var inst_31689 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31734_33487 = state_31693__$1;
(statearr_31734_33487[(2)] = inst_31689);

(statearr_31734_33487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (10))){
var inst_31654 = (state_31693[(7)]);
var inst_31670 = (state_31693[(2)]);
var inst_31671 = (inst_31654 + (1));
var inst_31654__$1 = inst_31671;
var state_31693__$1 = (function (){var statearr_31737 = state_31693;
(statearr_31737[(7)] = inst_31654__$1);

(statearr_31737[(14)] = inst_31670);

return statearr_31737;
})();
var statearr_31738_33494 = state_31693__$1;
(statearr_31738_33494[(2)] = null);

(statearr_31738_33494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (8))){
var inst_31675 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31741_33495 = state_31693__$1;
(statearr_31741_33495[(2)] = inst_31675);

(statearr_31741_33495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_31742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31742[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_31742[(1)] = (1));

return statearr_31742;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_31693){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_31693);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e31743){var ex__29764__auto__ = e31743;
var statearr_31744_33504 = state_31693;
(statearr_31744_33504[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_31693[(4)]))){
var statearr_31745_33509 = state_31693;
(statearr_31745_33509[(1)] = cljs.core.first((state_31693[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33510 = state_31693;
state_31693 = G__33510;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_31693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_31693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31746 = f__29918__auto__();
(statearr_31746[(6)] = c__29917__auto___33462);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31751 = arguments.length;
switch (G__31751) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29917__auto___33515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_31785){
var state_val_31789 = (state_31785[(1)]);
if((state_val_31789 === (7))){
var inst_31764 = (state_31785[(7)]);
var inst_31763 = (state_31785[(8)]);
var inst_31763__$1 = (state_31785[(2)]);
var inst_31764__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31763__$1,(0),null);
var inst_31765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31763__$1,(1),null);
var inst_31766 = (inst_31764__$1 == null);
var state_31785__$1 = (function (){var statearr_31796 = state_31785;
(statearr_31796[(7)] = inst_31764__$1);

(statearr_31796[(8)] = inst_31763__$1);

(statearr_31796[(9)] = inst_31765);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31766)){
var statearr_31798_33522 = state_31785__$1;
(statearr_31798_33522[(1)] = (8));

} else {
var statearr_31799_33523 = state_31785__$1;
(statearr_31799_33523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (1))){
var inst_31753 = cljs.core.vec(chs);
var inst_31754 = inst_31753;
var state_31785__$1 = (function (){var statearr_31804 = state_31785;
(statearr_31804[(10)] = inst_31754);

return statearr_31804;
})();
var statearr_31805_33524 = state_31785__$1;
(statearr_31805_33524[(2)] = null);

(statearr_31805_33524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (4))){
var inst_31754 = (state_31785[(10)]);
var state_31785__$1 = state_31785;
return cljs.core.async.ioc_alts_BANG_(state_31785__$1,(7),inst_31754);
} else {
if((state_val_31789 === (6))){
var inst_31780 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31808_33528 = state_31785__$1;
(statearr_31808_33528[(2)] = inst_31780);

(statearr_31808_33528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (3))){
var inst_31782 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31785__$1,inst_31782);
} else {
if((state_val_31789 === (2))){
var inst_31754 = (state_31785[(10)]);
var inst_31756 = cljs.core.count(inst_31754);
var inst_31757 = (inst_31756 > (0));
var state_31785__$1 = state_31785;
if(cljs.core.truth_(inst_31757)){
var statearr_31810_33529 = state_31785__$1;
(statearr_31810_33529[(1)] = (4));

} else {
var statearr_31811_33530 = state_31785__$1;
(statearr_31811_33530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (11))){
var inst_31754 = (state_31785[(10)]);
var inst_31773 = (state_31785[(2)]);
var tmp31809 = inst_31754;
var inst_31754__$1 = tmp31809;
var state_31785__$1 = (function (){var statearr_31814 = state_31785;
(statearr_31814[(11)] = inst_31773);

(statearr_31814[(10)] = inst_31754__$1);

return statearr_31814;
})();
var statearr_31815_33531 = state_31785__$1;
(statearr_31815_33531[(2)] = null);

(statearr_31815_33531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (9))){
var inst_31764 = (state_31785[(7)]);
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31785__$1,(11),out,inst_31764);
} else {
if((state_val_31789 === (5))){
var inst_31778 = cljs.core.async.close_BANG_(out);
var state_31785__$1 = state_31785;
var statearr_31816_33537 = state_31785__$1;
(statearr_31816_33537[(2)] = inst_31778);

(statearr_31816_33537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (10))){
var inst_31776 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31817_33540 = state_31785__$1;
(statearr_31817_33540[(2)] = inst_31776);

(statearr_31817_33540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (8))){
var inst_31764 = (state_31785[(7)]);
var inst_31754 = (state_31785[(10)]);
var inst_31763 = (state_31785[(8)]);
var inst_31765 = (state_31785[(9)]);
var inst_31768 = (function (){var cs = inst_31754;
var vec__31759 = inst_31763;
var v = inst_31764;
var c = inst_31765;
return (function (p1__31747_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31747_SHARP_);
});
})();
var inst_31769 = cljs.core.filterv(inst_31768,inst_31754);
var inst_31754__$1 = inst_31769;
var state_31785__$1 = (function (){var statearr_31825 = state_31785;
(statearr_31825[(10)] = inst_31754__$1);

return statearr_31825;
})();
var statearr_31826_33544 = state_31785__$1;
(statearr_31826_33544[(2)] = null);

(statearr_31826_33544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_31828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31828[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_31828[(1)] = (1));

return statearr_31828;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_31785){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_31785);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e31829){var ex__29764__auto__ = e31829;
var statearr_31830_33554 = state_31785;
(statearr_31830_33554[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_31785[(4)]))){
var statearr_31831_33555 = state_31785;
(statearr_31831_33555[(1)] = cljs.core.first((state_31785[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33556 = state_31785;
state_31785 = G__33556;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_31785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_31785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31832 = f__29918__auto__();
(statearr_31832[(6)] = c__29917__auto___33515);

return statearr_31832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31837 = arguments.length;
switch (G__31837) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29917__auto___33567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_31865){
var state_val_31866 = (state_31865[(1)]);
if((state_val_31866 === (7))){
var inst_31847 = (state_31865[(7)]);
var inst_31847__$1 = (state_31865[(2)]);
var inst_31848 = (inst_31847__$1 == null);
var inst_31849 = cljs.core.not(inst_31848);
var state_31865__$1 = (function (){var statearr_31872 = state_31865;
(statearr_31872[(7)] = inst_31847__$1);

return statearr_31872;
})();
if(inst_31849){
var statearr_31873_33568 = state_31865__$1;
(statearr_31873_33568[(1)] = (8));

} else {
var statearr_31874_33569 = state_31865__$1;
(statearr_31874_33569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (1))){
var inst_31838 = (0);
var state_31865__$1 = (function (){var statearr_31875 = state_31865;
(statearr_31875[(8)] = inst_31838);

return statearr_31875;
})();
var statearr_31876_33570 = state_31865__$1;
(statearr_31876_33570[(2)] = null);

(statearr_31876_33570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (4))){
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31865__$1,(7),ch);
} else {
if((state_val_31866 === (6))){
var inst_31860 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
var statearr_31877_33571 = state_31865__$1;
(statearr_31877_33571[(2)] = inst_31860);

(statearr_31877_33571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (3))){
var inst_31862 = (state_31865[(2)]);
var inst_31863 = cljs.core.async.close_BANG_(out);
var state_31865__$1 = (function (){var statearr_31878 = state_31865;
(statearr_31878[(9)] = inst_31862);

return statearr_31878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31865__$1,inst_31863);
} else {
if((state_val_31866 === (2))){
var inst_31838 = (state_31865[(8)]);
var inst_31840 = (inst_31838 < n);
var state_31865__$1 = state_31865;
if(cljs.core.truth_(inst_31840)){
var statearr_31881_33578 = state_31865__$1;
(statearr_31881_33578[(1)] = (4));

} else {
var statearr_31882_33579 = state_31865__$1;
(statearr_31882_33579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (11))){
var inst_31838 = (state_31865[(8)]);
var inst_31852 = (state_31865[(2)]);
var inst_31853 = (inst_31838 + (1));
var inst_31838__$1 = inst_31853;
var state_31865__$1 = (function (){var statearr_31885 = state_31865;
(statearr_31885[(10)] = inst_31852);

(statearr_31885[(8)] = inst_31838__$1);

return statearr_31885;
})();
var statearr_31886_33583 = state_31865__$1;
(statearr_31886_33583[(2)] = null);

(statearr_31886_33583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (9))){
var state_31865__$1 = state_31865;
var statearr_31890_33584 = state_31865__$1;
(statearr_31890_33584[(2)] = null);

(statearr_31890_33584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (5))){
var state_31865__$1 = state_31865;
var statearr_31891_33585 = state_31865__$1;
(statearr_31891_33585[(2)] = null);

(statearr_31891_33585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (10))){
var inst_31857 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
var statearr_31892_33586 = state_31865__$1;
(statearr_31892_33586[(2)] = inst_31857);

(statearr_31892_33586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (8))){
var inst_31847 = (state_31865[(7)]);
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31865__$1,(11),out,inst_31847);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_31893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31893[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_31893[(1)] = (1));

return statearr_31893;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_31865){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_31865);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e31894){var ex__29764__auto__ = e31894;
var statearr_31895_33589 = state_31865;
(statearr_31895_33589[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_31865[(4)]))){
var statearr_31899_33590 = state_31865;
(statearr_31899_33590[(1)] = cljs.core.first((state_31865[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33591 = state_31865;
state_31865 = G__33591;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_31865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_31865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31900 = f__29918__auto__();
(statearr_31900[(6)] = c__29917__auto___33567);

return statearr_31900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31907 = (function (f,ch,meta31908){
this.f = f;
this.ch = ch;
this.meta31908 = meta31908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31909,meta31908__$1){
var self__ = this;
var _31909__$1 = this;
return (new cljs.core.async.t_cljs$core$async31907(self__.f,self__.ch,meta31908__$1));
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31909){
var self__ = this;
var _31909__$1 = this;
return self__.meta31908;
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31913 = (function (f,ch,meta31908,_,fn1,meta31914){
this.f = f;
this.ch = ch;
this.meta31908 = meta31908;
this._ = _;
this.fn1 = fn1;
this.meta31914 = meta31914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31915,meta31914__$1){
var self__ = this;
var _31915__$1 = this;
return (new cljs.core.async.t_cljs$core$async31913(self__.f,self__.ch,self__.meta31908,self__._,self__.fn1,meta31914__$1));
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31915){
var self__ = this;
var _31915__$1 = this;
return self__.meta31914;
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31901_SHARP_){
var G__31924 = (((p1__31901_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31901_SHARP_) : self__.f.call(null,p1__31901_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31924) : f1.call(null,G__31924));
});
}));

(cljs.core.async.t_cljs$core$async31913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31908","meta31908",-522566899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31907","cljs.core.async/t_cljs$core$async31907",-1622902674,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31914","meta31914",-178376901,null)], null);
}));

(cljs.core.async.t_cljs$core$async31913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31913");

(cljs.core.async.t_cljs$core$async31913.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31913.
 */
cljs.core.async.__GT_t_cljs$core$async31913 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31913(f__$1,ch__$1,meta31908__$1,___$2,fn1__$1,meta31914){
return (new cljs.core.async.t_cljs$core$async31913(f__$1,ch__$1,meta31908__$1,___$2,fn1__$1,meta31914));
});

}

return (new cljs.core.async.t_cljs$core$async31913(self__.f,self__.ch,self__.meta31908,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31925 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31925) : self__.f.call(null,G__31925));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31908","meta31908",-522566899,null)], null);
}));

(cljs.core.async.t_cljs$core$async31907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31907");

(cljs.core.async.t_cljs$core$async31907.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31907.
 */
cljs.core.async.__GT_t_cljs$core$async31907 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31907(f__$1,ch__$1,meta31908){
return (new cljs.core.async.t_cljs$core$async31907(f__$1,ch__$1,meta31908));
});

}

return (new cljs.core.async.t_cljs$core$async31907(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31932 = (function (f,ch,meta31933){
this.f = f;
this.ch = ch;
this.meta31933 = meta31933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31934,meta31933__$1){
var self__ = this;
var _31934__$1 = this;
return (new cljs.core.async.t_cljs$core$async31932(self__.f,self__.ch,meta31933__$1));
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31934){
var self__ = this;
var _31934__$1 = this;
return self__.meta31933;
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31933","meta31933",-949665991,null)], null);
}));

(cljs.core.async.t_cljs$core$async31932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31932");

(cljs.core.async.t_cljs$core$async31932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31932.
 */
cljs.core.async.__GT_t_cljs$core$async31932 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31932(f__$1,ch__$1,meta31933){
return (new cljs.core.async.t_cljs$core$async31932(f__$1,ch__$1,meta31933));
});

}

return (new cljs.core.async.t_cljs$core$async31932(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31936 = (function (p,ch,meta31937){
this.p = p;
this.ch = ch;
this.meta31937 = meta31937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31938,meta31937__$1){
var self__ = this;
var _31938__$1 = this;
return (new cljs.core.async.t_cljs$core$async31936(self__.p,self__.ch,meta31937__$1));
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31938){
var self__ = this;
var _31938__$1 = this;
return self__.meta31937;
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31937","meta31937",391974294,null)], null);
}));

(cljs.core.async.t_cljs$core$async31936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31936");

(cljs.core.async.t_cljs$core$async31936.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31936.
 */
cljs.core.async.__GT_t_cljs$core$async31936 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31936(p__$1,ch__$1,meta31937){
return (new cljs.core.async.t_cljs$core$async31936(p__$1,ch__$1,meta31937));
});

}

return (new cljs.core.async.t_cljs$core$async31936(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31955 = arguments.length;
switch (G__31955) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29917__auto___33614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_32004){
var state_val_32005 = (state_32004[(1)]);
if((state_val_32005 === (7))){
var inst_32000 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32006_33615 = state_32004__$1;
(statearr_32006_33615[(2)] = inst_32000);

(statearr_32006_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (1))){
var state_32004__$1 = state_32004;
var statearr_32012_33616 = state_32004__$1;
(statearr_32012_33616[(2)] = null);

(statearr_32012_33616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (4))){
var inst_31986 = (state_32004[(7)]);
var inst_31986__$1 = (state_32004[(2)]);
var inst_31987 = (inst_31986__$1 == null);
var state_32004__$1 = (function (){var statearr_32013 = state_32004;
(statearr_32013[(7)] = inst_31986__$1);

return statearr_32013;
})();
if(cljs.core.truth_(inst_31987)){
var statearr_32014_33617 = state_32004__$1;
(statearr_32014_33617[(1)] = (5));

} else {
var statearr_32015_33618 = state_32004__$1;
(statearr_32015_33618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (6))){
var inst_31986 = (state_32004[(7)]);
var inst_31991 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31986) : p.call(null,inst_31986));
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31991)){
var statearr_32016_33623 = state_32004__$1;
(statearr_32016_33623[(1)] = (8));

} else {
var statearr_32017_33624 = state_32004__$1;
(statearr_32017_33624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (3))){
var inst_32002 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32004__$1,inst_32002);
} else {
if((state_val_32005 === (2))){
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32004__$1,(4),ch);
} else {
if((state_val_32005 === (11))){
var inst_31994 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32018_33629 = state_32004__$1;
(statearr_32018_33629[(2)] = inst_31994);

(statearr_32018_33629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (9))){
var state_32004__$1 = state_32004;
var statearr_32020_33630 = state_32004__$1;
(statearr_32020_33630[(2)] = null);

(statearr_32020_33630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (5))){
var inst_31989 = cljs.core.async.close_BANG_(out);
var state_32004__$1 = state_32004;
var statearr_32022_33635 = state_32004__$1;
(statearr_32022_33635[(2)] = inst_31989);

(statearr_32022_33635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (10))){
var inst_31997 = (state_32004[(2)]);
var state_32004__$1 = (function (){var statearr_32023 = state_32004;
(statearr_32023[(8)] = inst_31997);

return statearr_32023;
})();
var statearr_32024_33636 = state_32004__$1;
(statearr_32024_33636[(2)] = null);

(statearr_32024_33636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (8))){
var inst_31986 = (state_32004[(7)]);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32004__$1,(11),out,inst_31986);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_32004){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_32004);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e32026){var ex__29764__auto__ = e32026;
var statearr_32027_33641 = state_32004;
(statearr_32027_33641[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_32004[(4)]))){
var statearr_32028_33642 = state_32004;
(statearr_32028_33642[(1)] = cljs.core.first((state_32004[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33647 = state_32004;
state_32004 = G__33647;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_32004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_32004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_32029 = f__29918__auto__();
(statearr_32029[(6)] = c__29917__auto___33614);

return statearr_32029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32031 = arguments.length;
switch (G__32031) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29917__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_32093){
var state_val_32094 = (state_32093[(1)]);
if((state_val_32094 === (7))){
var inst_32089 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32096_33659 = state_32093__$1;
(statearr_32096_33659[(2)] = inst_32089);

(statearr_32096_33659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (20))){
var inst_32059 = (state_32093[(7)]);
var inst_32070 = (state_32093[(2)]);
var inst_32071 = cljs.core.next(inst_32059);
var inst_32045 = inst_32071;
var inst_32046 = null;
var inst_32047 = (0);
var inst_32048 = (0);
var state_32093__$1 = (function (){var statearr_32097 = state_32093;
(statearr_32097[(8)] = inst_32070);

(statearr_32097[(9)] = inst_32046);

(statearr_32097[(10)] = inst_32048);

(statearr_32097[(11)] = inst_32047);

(statearr_32097[(12)] = inst_32045);

return statearr_32097;
})();
var statearr_32098_33663 = state_32093__$1;
(statearr_32098_33663[(2)] = null);

(statearr_32098_33663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (1))){
var state_32093__$1 = state_32093;
var statearr_32099_33664 = state_32093__$1;
(statearr_32099_33664[(2)] = null);

(statearr_32099_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (4))){
var inst_32034 = (state_32093[(13)]);
var inst_32034__$1 = (state_32093[(2)]);
var inst_32035 = (inst_32034__$1 == null);
var state_32093__$1 = (function (){var statearr_32103 = state_32093;
(statearr_32103[(13)] = inst_32034__$1);

return statearr_32103;
})();
if(cljs.core.truth_(inst_32035)){
var statearr_32104_33666 = state_32093__$1;
(statearr_32104_33666[(1)] = (5));

} else {
var statearr_32105_33667 = state_32093__$1;
(statearr_32105_33667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (15))){
var state_32093__$1 = state_32093;
var statearr_32109_33668 = state_32093__$1;
(statearr_32109_33668[(2)] = null);

(statearr_32109_33668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (21))){
var state_32093__$1 = state_32093;
var statearr_32111_33669 = state_32093__$1;
(statearr_32111_33669[(2)] = null);

(statearr_32111_33669[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (13))){
var inst_32046 = (state_32093[(9)]);
var inst_32048 = (state_32093[(10)]);
var inst_32047 = (state_32093[(11)]);
var inst_32045 = (state_32093[(12)]);
var inst_32055 = (state_32093[(2)]);
var inst_32056 = (inst_32048 + (1));
var tmp32106 = inst_32046;
var tmp32107 = inst_32047;
var tmp32108 = inst_32045;
var inst_32045__$1 = tmp32108;
var inst_32046__$1 = tmp32106;
var inst_32047__$1 = tmp32107;
var inst_32048__$1 = inst_32056;
var state_32093__$1 = (function (){var statearr_32113 = state_32093;
(statearr_32113[(9)] = inst_32046__$1);

(statearr_32113[(10)] = inst_32048__$1);

(statearr_32113[(14)] = inst_32055);

(statearr_32113[(11)] = inst_32047__$1);

(statearr_32113[(12)] = inst_32045__$1);

return statearr_32113;
})();
var statearr_32114_33670 = state_32093__$1;
(statearr_32114_33670[(2)] = null);

(statearr_32114_33670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (22))){
var state_32093__$1 = state_32093;
var statearr_32115_33673 = state_32093__$1;
(statearr_32115_33673[(2)] = null);

(statearr_32115_33673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (6))){
var inst_32034 = (state_32093[(13)]);
var inst_32043 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32034) : f.call(null,inst_32034));
var inst_32044 = cljs.core.seq(inst_32043);
var inst_32045 = inst_32044;
var inst_32046 = null;
var inst_32047 = (0);
var inst_32048 = (0);
var state_32093__$1 = (function (){var statearr_32118 = state_32093;
(statearr_32118[(9)] = inst_32046);

(statearr_32118[(10)] = inst_32048);

(statearr_32118[(11)] = inst_32047);

(statearr_32118[(12)] = inst_32045);

return statearr_32118;
})();
var statearr_32119_33676 = state_32093__$1;
(statearr_32119_33676[(2)] = null);

(statearr_32119_33676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (17))){
var inst_32059 = (state_32093[(7)]);
var inst_32063 = cljs.core.chunk_first(inst_32059);
var inst_32064 = cljs.core.chunk_rest(inst_32059);
var inst_32065 = cljs.core.count(inst_32063);
var inst_32045 = inst_32064;
var inst_32046 = inst_32063;
var inst_32047 = inst_32065;
var inst_32048 = (0);
var state_32093__$1 = (function (){var statearr_32120 = state_32093;
(statearr_32120[(9)] = inst_32046);

(statearr_32120[(10)] = inst_32048);

(statearr_32120[(11)] = inst_32047);

(statearr_32120[(12)] = inst_32045);

return statearr_32120;
})();
var statearr_32121_33680 = state_32093__$1;
(statearr_32121_33680[(2)] = null);

(statearr_32121_33680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (3))){
var inst_32091 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32093__$1,inst_32091);
} else {
if((state_val_32094 === (12))){
var inst_32079 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32125_33682 = state_32093__$1;
(statearr_32125_33682[(2)] = inst_32079);

(statearr_32125_33682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (2))){
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32093__$1,(4),in$);
} else {
if((state_val_32094 === (23))){
var inst_32087 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32126_33693 = state_32093__$1;
(statearr_32126_33693[(2)] = inst_32087);

(statearr_32126_33693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (19))){
var inst_32074 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32127_33695 = state_32093__$1;
(statearr_32127_33695[(2)] = inst_32074);

(statearr_32127_33695[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (11))){
var inst_32059 = (state_32093[(7)]);
var inst_32045 = (state_32093[(12)]);
var inst_32059__$1 = cljs.core.seq(inst_32045);
var state_32093__$1 = (function (){var statearr_32128 = state_32093;
(statearr_32128[(7)] = inst_32059__$1);

return statearr_32128;
})();
if(inst_32059__$1){
var statearr_32129_33713 = state_32093__$1;
(statearr_32129_33713[(1)] = (14));

} else {
var statearr_32131_33718 = state_32093__$1;
(statearr_32131_33718[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (9))){
var inst_32081 = (state_32093[(2)]);
var inst_32082 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32093__$1 = (function (){var statearr_32132 = state_32093;
(statearr_32132[(15)] = inst_32081);

return statearr_32132;
})();
if(cljs.core.truth_(inst_32082)){
var statearr_32133_33736 = state_32093__$1;
(statearr_32133_33736[(1)] = (21));

} else {
var statearr_32134_33737 = state_32093__$1;
(statearr_32134_33737[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (5))){
var inst_32037 = cljs.core.async.close_BANG_(out);
var state_32093__$1 = state_32093;
var statearr_32137_33744 = state_32093__$1;
(statearr_32137_33744[(2)] = inst_32037);

(statearr_32137_33744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (14))){
var inst_32059 = (state_32093[(7)]);
var inst_32061 = cljs.core.chunked_seq_QMARK_(inst_32059);
var state_32093__$1 = state_32093;
if(inst_32061){
var statearr_32138_33753 = state_32093__$1;
(statearr_32138_33753[(1)] = (17));

} else {
var statearr_32139_33754 = state_32093__$1;
(statearr_32139_33754[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (16))){
var inst_32077 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32142_33762 = state_32093__$1;
(statearr_32142_33762[(2)] = inst_32077);

(statearr_32142_33762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (10))){
var inst_32046 = (state_32093[(9)]);
var inst_32048 = (state_32093[(10)]);
var inst_32053 = cljs.core._nth(inst_32046,inst_32048);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32093__$1,(13),out,inst_32053);
} else {
if((state_val_32094 === (18))){
var inst_32059 = (state_32093[(7)]);
var inst_32068 = cljs.core.first(inst_32059);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32093__$1,(20),out,inst_32068);
} else {
if((state_val_32094 === (8))){
var inst_32048 = (state_32093[(10)]);
var inst_32047 = (state_32093[(11)]);
var inst_32050 = (inst_32048 < inst_32047);
var inst_32051 = inst_32050;
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32051)){
var statearr_32148_33783 = state_32093__$1;
(statearr_32148_33783[(1)] = (10));

} else {
var statearr_32149_33784 = state_32093__$1;
(statearr_32149_33784[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29761__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29761__auto____0 = (function (){
var statearr_32150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32150[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29761__auto__);

(statearr_32150[(1)] = (1));

return statearr_32150;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29761__auto____1 = (function (state_32093){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_32093);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e32151){var ex__29764__auto__ = e32151;
var statearr_32152_33789 = state_32093;
(statearr_32152_33789[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_32093[(4)]))){
var statearr_32153_33792 = state_32093;
(statearr_32153_33792[(1)] = cljs.core.first((state_32093[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33793 = state_32093;
state_32093 = G__33793;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29761__auto__ = function(state_32093){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29761__auto____1.call(this,state_32093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29761__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29761__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_32154 = f__29918__auto__();
(statearr_32154[(6)] = c__29917__auto__);

return statearr_32154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));

return c__29917__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32156 = arguments.length;
switch (G__32156) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32167 = arguments.length;
switch (G__32167) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32171 = arguments.length;
switch (G__32171) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29917__auto___33821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_32195){
var state_val_32196 = (state_32195[(1)]);
if((state_val_32196 === (7))){
var inst_32190 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32197_33822 = state_32195__$1;
(statearr_32197_33822[(2)] = inst_32190);

(statearr_32197_33822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (1))){
var inst_32172 = null;
var state_32195__$1 = (function (){var statearr_32198 = state_32195;
(statearr_32198[(7)] = inst_32172);

return statearr_32198;
})();
var statearr_32199_33825 = state_32195__$1;
(statearr_32199_33825[(2)] = null);

(statearr_32199_33825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (4))){
var inst_32175 = (state_32195[(8)]);
var inst_32175__$1 = (state_32195[(2)]);
var inst_32176 = (inst_32175__$1 == null);
var inst_32177 = cljs.core.not(inst_32176);
var state_32195__$1 = (function (){var statearr_32204 = state_32195;
(statearr_32204[(8)] = inst_32175__$1);

return statearr_32204;
})();
if(inst_32177){
var statearr_32209_33844 = state_32195__$1;
(statearr_32209_33844[(1)] = (5));

} else {
var statearr_32210_33846 = state_32195__$1;
(statearr_32210_33846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (6))){
var state_32195__$1 = state_32195;
var statearr_32211_33852 = state_32195__$1;
(statearr_32211_33852[(2)] = null);

(statearr_32211_33852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (3))){
var inst_32192 = (state_32195[(2)]);
var inst_32193 = cljs.core.async.close_BANG_(out);
var state_32195__$1 = (function (){var statearr_32216 = state_32195;
(statearr_32216[(9)] = inst_32192);

return statearr_32216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32195__$1,inst_32193);
} else {
if((state_val_32196 === (2))){
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32195__$1,(4),ch);
} else {
if((state_val_32196 === (11))){
var inst_32175 = (state_32195[(8)]);
var inst_32184 = (state_32195[(2)]);
var inst_32172 = inst_32175;
var state_32195__$1 = (function (){var statearr_32217 = state_32195;
(statearr_32217[(10)] = inst_32184);

(statearr_32217[(7)] = inst_32172);

return statearr_32217;
})();
var statearr_32218_33862 = state_32195__$1;
(statearr_32218_33862[(2)] = null);

(statearr_32218_33862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (9))){
var inst_32175 = (state_32195[(8)]);
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32195__$1,(11),out,inst_32175);
} else {
if((state_val_32196 === (5))){
var inst_32175 = (state_32195[(8)]);
var inst_32172 = (state_32195[(7)]);
var inst_32179 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32175,inst_32172);
var state_32195__$1 = state_32195;
if(inst_32179){
var statearr_32220_33866 = state_32195__$1;
(statearr_32220_33866[(1)] = (8));

} else {
var statearr_32221_33875 = state_32195__$1;
(statearr_32221_33875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (10))){
var inst_32187 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32222_33880 = state_32195__$1;
(statearr_32222_33880[(2)] = inst_32187);

(statearr_32222_33880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (8))){
var inst_32172 = (state_32195[(7)]);
var tmp32219 = inst_32172;
var inst_32172__$1 = tmp32219;
var state_32195__$1 = (function (){var statearr_32223 = state_32195;
(statearr_32223[(7)] = inst_32172__$1);

return statearr_32223;
})();
var statearr_32224_33892 = state_32195__$1;
(statearr_32224_33892[(2)] = null);

(statearr_32224_33892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_32225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32225[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_32225[(1)] = (1));

return statearr_32225;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_32195){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_32195);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e32226){var ex__29764__auto__ = e32226;
var statearr_32227_33917 = state_32195;
(statearr_32227_33917[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_32195[(4)]))){
var statearr_32228_33918 = state_32195;
(statearr_32228_33918[(1)] = cljs.core.first((state_32195[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33923 = state_32195;
state_32195 = G__33923;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_32195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_32195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_32229 = f__29918__auto__();
(statearr_32229[(6)] = c__29917__auto___33821);

return statearr_32229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32231 = arguments.length;
switch (G__32231) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29917__auto___33938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_32281){
var state_val_32282 = (state_32281[(1)]);
if((state_val_32282 === (7))){
var inst_32277 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
var statearr_32283_33940 = state_32281__$1;
(statearr_32283_33940[(2)] = inst_32277);

(statearr_32283_33940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (1))){
var inst_32238 = (new Array(n));
var inst_32239 = inst_32238;
var inst_32240 = (0);
var state_32281__$1 = (function (){var statearr_32284 = state_32281;
(statearr_32284[(7)] = inst_32240);

(statearr_32284[(8)] = inst_32239);

return statearr_32284;
})();
var statearr_32285_33945 = state_32281__$1;
(statearr_32285_33945[(2)] = null);

(statearr_32285_33945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (4))){
var inst_32243 = (state_32281[(9)]);
var inst_32243__$1 = (state_32281[(2)]);
var inst_32244 = (inst_32243__$1 == null);
var inst_32245 = cljs.core.not(inst_32244);
var state_32281__$1 = (function (){var statearr_32288 = state_32281;
(statearr_32288[(9)] = inst_32243__$1);

return statearr_32288;
})();
if(inst_32245){
var statearr_32289_33949 = state_32281__$1;
(statearr_32289_33949[(1)] = (5));

} else {
var statearr_32290_33951 = state_32281__$1;
(statearr_32290_33951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (15))){
var inst_32271 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
var statearr_32293_33952 = state_32281__$1;
(statearr_32293_33952[(2)] = inst_32271);

(statearr_32293_33952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (13))){
var state_32281__$1 = state_32281;
var statearr_32295_33953 = state_32281__$1;
(statearr_32295_33953[(2)] = null);

(statearr_32295_33953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (6))){
var inst_32240 = (state_32281[(7)]);
var inst_32267 = (inst_32240 > (0));
var state_32281__$1 = state_32281;
if(cljs.core.truth_(inst_32267)){
var statearr_32297_33958 = state_32281__$1;
(statearr_32297_33958[(1)] = (12));

} else {
var statearr_32298_33960 = state_32281__$1;
(statearr_32298_33960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (3))){
var inst_32279 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32281__$1,inst_32279);
} else {
if((state_val_32282 === (12))){
var inst_32239 = (state_32281[(8)]);
var inst_32269 = cljs.core.vec(inst_32239);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32281__$1,(15),out,inst_32269);
} else {
if((state_val_32282 === (2))){
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32281__$1,(4),ch);
} else {
if((state_val_32282 === (11))){
var inst_32261 = (state_32281[(2)]);
var inst_32262 = (new Array(n));
var inst_32239 = inst_32262;
var inst_32240 = (0);
var state_32281__$1 = (function (){var statearr_32305 = state_32281;
(statearr_32305[(7)] = inst_32240);

(statearr_32305[(10)] = inst_32261);

(statearr_32305[(8)] = inst_32239);

return statearr_32305;
})();
var statearr_32306_33975 = state_32281__$1;
(statearr_32306_33975[(2)] = null);

(statearr_32306_33975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (9))){
var inst_32239 = (state_32281[(8)]);
var inst_32259 = cljs.core.vec(inst_32239);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32281__$1,(11),out,inst_32259);
} else {
if((state_val_32282 === (5))){
var inst_32240 = (state_32281[(7)]);
var inst_32249 = (state_32281[(11)]);
var inst_32243 = (state_32281[(9)]);
var inst_32239 = (state_32281[(8)]);
var inst_32248 = (inst_32239[inst_32240] = inst_32243);
var inst_32249__$1 = (inst_32240 + (1));
var inst_32250 = (inst_32249__$1 < n);
var state_32281__$1 = (function (){var statearr_32307 = state_32281;
(statearr_32307[(12)] = inst_32248);

(statearr_32307[(11)] = inst_32249__$1);

return statearr_32307;
})();
if(cljs.core.truth_(inst_32250)){
var statearr_32308_33977 = state_32281__$1;
(statearr_32308_33977[(1)] = (8));

} else {
var statearr_32309_33978 = state_32281__$1;
(statearr_32309_33978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (14))){
var inst_32274 = (state_32281[(2)]);
var inst_32275 = cljs.core.async.close_BANG_(out);
var state_32281__$1 = (function (){var statearr_32311 = state_32281;
(statearr_32311[(13)] = inst_32274);

return statearr_32311;
})();
var statearr_32312_33980 = state_32281__$1;
(statearr_32312_33980[(2)] = inst_32275);

(statearr_32312_33980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (10))){
var inst_32265 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
var statearr_32313_33983 = state_32281__$1;
(statearr_32313_33983[(2)] = inst_32265);

(statearr_32313_33983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (8))){
var inst_32249 = (state_32281[(11)]);
var inst_32239 = (state_32281[(8)]);
var tmp32310 = inst_32239;
var inst_32239__$1 = tmp32310;
var inst_32240 = inst_32249;
var state_32281__$1 = (function (){var statearr_32314 = state_32281;
(statearr_32314[(7)] = inst_32240);

(statearr_32314[(8)] = inst_32239__$1);

return statearr_32314;
})();
var statearr_32315_33990 = state_32281__$1;
(statearr_32315_33990[(2)] = null);

(statearr_32315_33990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_32316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32316[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_32316[(1)] = (1));

return statearr_32316;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_32281){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_32281);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e32317){var ex__29764__auto__ = e32317;
var statearr_32318_33992 = state_32281;
(statearr_32318_33992[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_32281[(4)]))){
var statearr_32319_33994 = state_32281;
(statearr_32319_33994[(1)] = cljs.core.first((state_32281[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33995 = state_32281;
state_32281 = G__33995;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_32281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_32281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_32320 = f__29918__auto__();
(statearr_32320[(6)] = c__29917__auto___33938);

return statearr_32320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32323 = arguments.length;
switch (G__32323) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29917__auto___33998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29918__auto__ = (function (){var switch__29760__auto__ = (function (state_32369){
var state_val_32370 = (state_32369[(1)]);
if((state_val_32370 === (7))){
var inst_32365 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32371_33999 = state_32369__$1;
(statearr_32371_33999[(2)] = inst_32365);

(statearr_32371_33999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (1))){
var inst_32326 = [];
var inst_32327 = inst_32326;
var inst_32328 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32369__$1 = (function (){var statearr_32372 = state_32369;
(statearr_32372[(7)] = inst_32327);

(statearr_32372[(8)] = inst_32328);

return statearr_32372;
})();
var statearr_32373_34000 = state_32369__$1;
(statearr_32373_34000[(2)] = null);

(statearr_32373_34000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (4))){
var inst_32332 = (state_32369[(9)]);
var inst_32332__$1 = (state_32369[(2)]);
var inst_32333 = (inst_32332__$1 == null);
var inst_32334 = cljs.core.not(inst_32333);
var state_32369__$1 = (function (){var statearr_32374 = state_32369;
(statearr_32374[(9)] = inst_32332__$1);

return statearr_32374;
})();
if(inst_32334){
var statearr_32375_34001 = state_32369__$1;
(statearr_32375_34001[(1)] = (5));

} else {
var statearr_32376_34002 = state_32369__$1;
(statearr_32376_34002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (15))){
var inst_32359 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32377_34003 = state_32369__$1;
(statearr_32377_34003[(2)] = inst_32359);

(statearr_32377_34003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (13))){
var state_32369__$1 = state_32369;
var statearr_32378_34004 = state_32369__$1;
(statearr_32378_34004[(2)] = null);

(statearr_32378_34004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (6))){
var inst_32327 = (state_32369[(7)]);
var inst_32354 = inst_32327.length;
var inst_32355 = (inst_32354 > (0));
var state_32369__$1 = state_32369;
if(cljs.core.truth_(inst_32355)){
var statearr_32379_34005 = state_32369__$1;
(statearr_32379_34005[(1)] = (12));

} else {
var statearr_32380_34006 = state_32369__$1;
(statearr_32380_34006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (3))){
var inst_32367 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32369__$1,inst_32367);
} else {
if((state_val_32370 === (12))){
var inst_32327 = (state_32369[(7)]);
var inst_32357 = cljs.core.vec(inst_32327);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32369__$1,(15),out,inst_32357);
} else {
if((state_val_32370 === (2))){
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32369__$1,(4),ch);
} else {
if((state_val_32370 === (11))){
var inst_32332 = (state_32369[(9)]);
var inst_32336 = (state_32369[(10)]);
var inst_32347 = (state_32369[(2)]);
var inst_32348 = [];
var inst_32349 = inst_32348.push(inst_32332);
var inst_32327 = inst_32348;
var inst_32328 = inst_32336;
var state_32369__$1 = (function (){var statearr_32381 = state_32369;
(statearr_32381[(7)] = inst_32327);

(statearr_32381[(8)] = inst_32328);

(statearr_32381[(11)] = inst_32347);

(statearr_32381[(12)] = inst_32349);

return statearr_32381;
})();
var statearr_32382_34014 = state_32369__$1;
(statearr_32382_34014[(2)] = null);

(statearr_32382_34014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (9))){
var inst_32327 = (state_32369[(7)]);
var inst_32344 = cljs.core.vec(inst_32327);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32369__$1,(11),out,inst_32344);
} else {
if((state_val_32370 === (5))){
var inst_32332 = (state_32369[(9)]);
var inst_32328 = (state_32369[(8)]);
var inst_32336 = (state_32369[(10)]);
var inst_32336__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32332) : f.call(null,inst_32332));
var inst_32337 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32336__$1,inst_32328);
var inst_32338 = cljs.core.keyword_identical_QMARK_(inst_32328,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32339 = ((inst_32337) || (inst_32338));
var state_32369__$1 = (function (){var statearr_32386 = state_32369;
(statearr_32386[(10)] = inst_32336__$1);

return statearr_32386;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32388_34016 = state_32369__$1;
(statearr_32388_34016[(1)] = (8));

} else {
var statearr_32389_34017 = state_32369__$1;
(statearr_32389_34017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (14))){
var inst_32362 = (state_32369[(2)]);
var inst_32363 = cljs.core.async.close_BANG_(out);
var state_32369__$1 = (function (){var statearr_32394 = state_32369;
(statearr_32394[(13)] = inst_32362);

return statearr_32394;
})();
var statearr_32395_34018 = state_32369__$1;
(statearr_32395_34018[(2)] = inst_32363);

(statearr_32395_34018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (10))){
var inst_32352 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32396_34020 = state_32369__$1;
(statearr_32396_34020[(2)] = inst_32352);

(statearr_32396_34020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32370 === (8))){
var inst_32332 = (state_32369[(9)]);
var inst_32327 = (state_32369[(7)]);
var inst_32336 = (state_32369[(10)]);
var inst_32341 = inst_32327.push(inst_32332);
var tmp32392 = inst_32327;
var inst_32327__$1 = tmp32392;
var inst_32328 = inst_32336;
var state_32369__$1 = (function (){var statearr_32400 = state_32369;
(statearr_32400[(7)] = inst_32327__$1);

(statearr_32400[(8)] = inst_32328);

(statearr_32400[(14)] = inst_32341);

return statearr_32400;
})();
var statearr_32401_34031 = state_32369__$1;
(statearr_32401_34031[(2)] = null);

(statearr_32401_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29761__auto__ = null;
var cljs$core$async$state_machine__29761__auto____0 = (function (){
var statearr_32402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32402[(0)] = cljs$core$async$state_machine__29761__auto__);

(statearr_32402[(1)] = (1));

return statearr_32402;
});
var cljs$core$async$state_machine__29761__auto____1 = (function (state_32369){
while(true){
var ret_value__29762__auto__ = (function (){try{while(true){
var result__29763__auto__ = switch__29760__auto__(state_32369);
if(cljs.core.keyword_identical_QMARK_(result__29763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29763__auto__;
}
break;
}
}catch (e32403){var ex__29764__auto__ = e32403;
var statearr_32404_34032 = state_32369;
(statearr_32404_34032[(2)] = ex__29764__auto__);


if(cljs.core.seq((state_32369[(4)]))){
var statearr_32405_34033 = state_32369;
(statearr_32405_34033[(1)] = cljs.core.first((state_32369[(4)])));

} else {
throw ex__29764__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34035 = state_32369;
state_32369 = G__34035;
continue;
} else {
return ret_value__29762__auto__;
}
break;
}
});
cljs$core$async$state_machine__29761__auto__ = function(state_32369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29761__auto____1.call(this,state_32369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29761__auto____0;
cljs$core$async$state_machine__29761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29761__auto____1;
return cljs$core$async$state_machine__29761__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_32406 = f__29918__auto__();
(statearr_32406[(6)] = c__29917__auto___33998);

return statearr_32406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29919__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
