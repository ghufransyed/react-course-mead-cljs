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
var G__44430 = arguments.length;
switch (G__44430) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44440 = (function (f,blockable,meta44441){
this.f = f;
this.blockable = blockable;
this.meta44441 = meta44441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44442,meta44441__$1){
var self__ = this;
var _44442__$1 = this;
return (new cljs.core.async.t_cljs$core$async44440(self__.f,self__.blockable,meta44441__$1));
}));

(cljs.core.async.t_cljs$core$async44440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44442){
var self__ = this;
var _44442__$1 = this;
return self__.meta44441;
}));

(cljs.core.async.t_cljs$core$async44440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44441","meta44441",-134301425,null)], null);
}));

(cljs.core.async.t_cljs$core$async44440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44440");

(cljs.core.async.t_cljs$core$async44440.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44440.
 */
cljs.core.async.__GT_t_cljs$core$async44440 = (function cljs$core$async$__GT_t_cljs$core$async44440(f__$1,blockable__$1,meta44441){
return (new cljs.core.async.t_cljs$core$async44440(f__$1,blockable__$1,meta44441));
});

}

return (new cljs.core.async.t_cljs$core$async44440(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44467 = arguments.length;
switch (G__44467) {
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
var G__44503 = arguments.length;
switch (G__44503) {
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
var G__44535 = arguments.length;
switch (G__44535) {
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
var val_46935 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46935) : fn1.call(null,val_46935));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46935) : fn1.call(null,val_46935));
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
var G__44552 = arguments.length;
switch (G__44552) {
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
var n__4613__auto___46952 = n;
var x_46953 = (0);
while(true){
if((x_46953 < n__4613__auto___46952)){
(a[x_46953] = x_46953);

var G__46958 = (x_46953 + (1));
x_46953 = G__46958;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44590 = (function (flag,meta44591){
this.flag = flag;
this.meta44591 = meta44591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44592,meta44591__$1){
var self__ = this;
var _44592__$1 = this;
return (new cljs.core.async.t_cljs$core$async44590(self__.flag,meta44591__$1));
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44592){
var self__ = this;
var _44592__$1 = this;
return self__.meta44591;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44591","meta44591",-2006289438,null)], null);
}));

(cljs.core.async.t_cljs$core$async44590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44590");

(cljs.core.async.t_cljs$core$async44590.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44590.
 */
cljs.core.async.__GT_t_cljs$core$async44590 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44590(flag__$1,meta44591){
return (new cljs.core.async.t_cljs$core$async44590(flag__$1,meta44591));
});

}

return (new cljs.core.async.t_cljs$core$async44590(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44599 = (function (flag,cb,meta44600){
this.flag = flag;
this.cb = cb;
this.meta44600 = meta44600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44601,meta44600__$1){
var self__ = this;
var _44601__$1 = this;
return (new cljs.core.async.t_cljs$core$async44599(self__.flag,self__.cb,meta44600__$1));
}));

(cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44601){
var self__ = this;
var _44601__$1 = this;
return self__.meta44600;
}));

(cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44600","meta44600",1900924735,null)], null);
}));

(cljs.core.async.t_cljs$core$async44599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44599");

(cljs.core.async.t_cljs$core$async44599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44599.
 */
cljs.core.async.__GT_t_cljs$core$async44599 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44599(flag__$1,cb__$1,meta44600){
return (new cljs.core.async.t_cljs$core$async44599(flag__$1,cb__$1,meta44600));
});

}

return (new cljs.core.async.t_cljs$core$async44599(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44619_SHARP_){
var G__44621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44619_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44621) : fret.call(null,G__44621));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44620_SHARP_){
var G__44622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44620_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44622) : fret.call(null,G__44622));
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
var G__47000 = (i + (1));
i = G__47000;
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
var len__4736__auto___47005 = arguments.length;
var i__4737__auto___47007 = (0);
while(true){
if((i__4737__auto___47007 < len__4736__auto___47005)){
args__4742__auto__.push((arguments[i__4737__auto___47007]));

var G__47008 = (i__4737__auto___47007 + (1));
i__4737__auto___47007 = G__47008;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44639){
var map__44640 = p__44639;
var map__44640__$1 = (((((!((map__44640 == null))))?(((((map__44640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44640):map__44640);
var opts = map__44640__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44637){
var G__44638 = cljs.core.first(seq44637);
var seq44637__$1 = cljs.core.next(seq44637);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44638,seq44637__$1);
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
var G__44649 = arguments.length;
switch (G__44649) {
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
var c__44347__auto___47023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_44686){
var state_val_44688 = (state_44686[(1)]);
if((state_val_44688 === (7))){
var inst_44681 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
var statearr_44698_47029 = state_44686__$1;
(statearr_44698_47029[(2)] = inst_44681);

(statearr_44698_47029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (1))){
var state_44686__$1 = state_44686;
var statearr_44699_47032 = state_44686__$1;
(statearr_44699_47032[(2)] = null);

(statearr_44699_47032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (4))){
var inst_44662 = (state_44686[(7)]);
var inst_44662__$1 = (state_44686[(2)]);
var inst_44663 = (inst_44662__$1 == null);
var state_44686__$1 = (function (){var statearr_44701 = state_44686;
(statearr_44701[(7)] = inst_44662__$1);

return statearr_44701;
})();
if(cljs.core.truth_(inst_44663)){
var statearr_44702_47051 = state_44686__$1;
(statearr_44702_47051[(1)] = (5));

} else {
var statearr_44704_47052 = state_44686__$1;
(statearr_44704_47052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (13))){
var state_44686__$1 = state_44686;
var statearr_44706_47053 = state_44686__$1;
(statearr_44706_47053[(2)] = null);

(statearr_44706_47053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (6))){
var inst_44662 = (state_44686[(7)]);
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44686__$1,(11),to,inst_44662);
} else {
if((state_val_44688 === (3))){
var inst_44683 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44686__$1,inst_44683);
} else {
if((state_val_44688 === (12))){
var state_44686__$1 = state_44686;
var statearr_44715_47054 = state_44686__$1;
(statearr_44715_47054[(2)] = null);

(statearr_44715_47054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (2))){
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44686__$1,(4),from);
} else {
if((state_val_44688 === (11))){
var inst_44672 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
if(cljs.core.truth_(inst_44672)){
var statearr_44716_47055 = state_44686__$1;
(statearr_44716_47055[(1)] = (12));

} else {
var statearr_44718_47056 = state_44686__$1;
(statearr_44718_47056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (9))){
var state_44686__$1 = state_44686;
var statearr_44719_47057 = state_44686__$1;
(statearr_44719_47057[(2)] = null);

(statearr_44719_47057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (5))){
var state_44686__$1 = state_44686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44721_47062 = state_44686__$1;
(statearr_44721_47062[(1)] = (8));

} else {
var statearr_44723_47063 = state_44686__$1;
(statearr_44723_47063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (14))){
var inst_44679 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
var statearr_44724_47064 = state_44686__$1;
(statearr_44724_47064[(2)] = inst_44679);

(statearr_44724_47064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (10))){
var inst_44669 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
var statearr_44727_47065 = state_44686__$1;
(statearr_44727_47065[(2)] = inst_44669);

(statearr_44727_47065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (8))){
var inst_44666 = cljs.core.async.close_BANG_(to);
var state_44686__$1 = state_44686;
var statearr_44728_47066 = state_44686__$1;
(statearr_44728_47066[(2)] = inst_44666);

(statearr_44728_47066[(1)] = (10));


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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_44729 = [null,null,null,null,null,null,null,null];
(statearr_44729[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_44729[(1)] = (1));

return statearr_44729;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_44686){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_44686);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e44734){var ex__44158__auto__ = e44734;
var statearr_44735_47067 = state_44686;
(statearr_44735_47067[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_44686[(4)]))){
var statearr_44736_47068 = state_44686;
(statearr_44736_47068[(1)] = cljs.core.first((state_44686[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47069 = state_44686;
state_44686 = G__47069;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_44686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_44686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_44738 = f__44349__auto__();
(statearr_44738[(6)] = c__44347__auto___47023);

return statearr_44738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
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
var process = (function (p__44747){
var vec__44748 = p__44747;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44748,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44748,(1),null);
var job = vec__44748;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44347__auto___47072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_44755){
var state_val_44756 = (state_44755[(1)]);
if((state_val_44756 === (1))){
var state_44755__$1 = state_44755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44755__$1,(2),res,v);
} else {
if((state_val_44756 === (2))){
var inst_44752 = (state_44755[(2)]);
var inst_44753 = cljs.core.async.close_BANG_(res);
var state_44755__$1 = (function (){var statearr_44758 = state_44755;
(statearr_44758[(7)] = inst_44752);

return statearr_44758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44755__$1,inst_44753);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0 = (function (){
var statearr_44759 = [null,null,null,null,null,null,null,null];
(statearr_44759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__);

(statearr_44759[(1)] = (1));

return statearr_44759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1 = (function (state_44755){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_44755);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e44760){var ex__44158__auto__ = e44760;
var statearr_44762_47077 = state_44755;
(statearr_44762_47077[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_44755[(4)]))){
var statearr_44767_47078 = state_44755;
(statearr_44767_47078[(1)] = cljs.core.first((state_44755[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47080 = state_44755;
state_44755 = G__47080;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = function(state_44755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1.call(this,state_44755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_44770 = f__44349__auto__();
(statearr_44770[(6)] = c__44347__auto___47072);

return statearr_44770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44774){
var vec__44775 = p__44774;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44775,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44775,(1),null);
var job = vec__44775;
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
var n__4613__auto___47083 = n;
var __47084 = (0);
while(true){
if((__47084 < n__4613__auto___47083)){
var G__44782_47085 = type;
var G__44782_47086__$1 = (((G__44782_47085 instanceof cljs.core.Keyword))?G__44782_47085.fqn:null);
switch (G__44782_47086__$1) {
case "compute":
var c__44347__auto___47088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47084,c__44347__auto___47088,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async){
return (function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = ((function (__47084,c__44347__auto___47088,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async){
return (function (state_44796){
var state_val_44797 = (state_44796[(1)]);
if((state_val_44797 === (1))){
var state_44796__$1 = state_44796;
var statearr_44802_47091 = state_44796__$1;
(statearr_44802_47091[(2)] = null);

(statearr_44802_47091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44797 === (2))){
var state_44796__$1 = state_44796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44796__$1,(4),jobs);
} else {
if((state_val_44797 === (3))){
var inst_44794 = (state_44796[(2)]);
var state_44796__$1 = state_44796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44796__$1,inst_44794);
} else {
if((state_val_44797 === (4))){
var inst_44785 = (state_44796[(2)]);
var inst_44786 = process(inst_44785);
var state_44796__$1 = state_44796;
if(cljs.core.truth_(inst_44786)){
var statearr_44804_47099 = state_44796__$1;
(statearr_44804_47099[(1)] = (5));

} else {
var statearr_44807_47101 = state_44796__$1;
(statearr_44807_47101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44797 === (5))){
var state_44796__$1 = state_44796;
var statearr_44809_47102 = state_44796__$1;
(statearr_44809_47102[(2)] = null);

(statearr_44809_47102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44797 === (6))){
var state_44796__$1 = state_44796;
var statearr_44810_47103 = state_44796__$1;
(statearr_44810_47103[(2)] = null);

(statearr_44810_47103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44797 === (7))){
var inst_44792 = (state_44796[(2)]);
var state_44796__$1 = state_44796;
var statearr_44811_47106 = state_44796__$1;
(statearr_44811_47106[(2)] = inst_44792);

(statearr_44811_47106[(1)] = (3));


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
});})(__47084,c__44347__auto___47088,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async))
;
return ((function (__47084,switch__44154__auto__,c__44347__auto___47088,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0 = (function (){
var statearr_44812 = [null,null,null,null,null,null,null];
(statearr_44812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__);

(statearr_44812[(1)] = (1));

return statearr_44812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1 = (function (state_44796){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_44796);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e44818){var ex__44158__auto__ = e44818;
var statearr_44819_47110 = state_44796;
(statearr_44819_47110[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_44796[(4)]))){
var statearr_44820_47111 = state_44796;
(statearr_44820_47111[(1)] = cljs.core.first((state_44796[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47112 = state_44796;
state_44796 = G__47112;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = function(state_44796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1.call(this,state_44796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__;
})()
;})(__47084,switch__44154__auto__,c__44347__auto___47088,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async))
})();
var state__44350__auto__ = (function (){var statearr_44826 = f__44349__auto__();
(statearr_44826[(6)] = c__44347__auto___47088);

return statearr_44826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
});})(__47084,c__44347__auto___47088,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async))
);


break;
case "async":
var c__44347__auto___47115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47084,c__44347__auto___47115,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async){
return (function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = ((function (__47084,c__44347__auto___47115,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async){
return (function (state_44840){
var state_val_44841 = (state_44840[(1)]);
if((state_val_44841 === (1))){
var state_44840__$1 = state_44840;
var statearr_44843_47116 = state_44840__$1;
(statearr_44843_47116[(2)] = null);

(statearr_44843_47116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44841 === (2))){
var state_44840__$1 = state_44840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44840__$1,(4),jobs);
} else {
if((state_val_44841 === (3))){
var inst_44838 = (state_44840[(2)]);
var state_44840__$1 = state_44840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44840__$1,inst_44838);
} else {
if((state_val_44841 === (4))){
var inst_44830 = (state_44840[(2)]);
var inst_44831 = async(inst_44830);
var state_44840__$1 = state_44840;
if(cljs.core.truth_(inst_44831)){
var statearr_44844_47117 = state_44840__$1;
(statearr_44844_47117[(1)] = (5));

} else {
var statearr_44845_47119 = state_44840__$1;
(statearr_44845_47119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44841 === (5))){
var state_44840__$1 = state_44840;
var statearr_44847_47120 = state_44840__$1;
(statearr_44847_47120[(2)] = null);

(statearr_44847_47120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44841 === (6))){
var state_44840__$1 = state_44840;
var statearr_44848_47122 = state_44840__$1;
(statearr_44848_47122[(2)] = null);

(statearr_44848_47122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44841 === (7))){
var inst_44836 = (state_44840[(2)]);
var state_44840__$1 = state_44840;
var statearr_44850_47123 = state_44840__$1;
(statearr_44850_47123[(2)] = inst_44836);

(statearr_44850_47123[(1)] = (3));


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
});})(__47084,c__44347__auto___47115,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async))
;
return ((function (__47084,switch__44154__auto__,c__44347__auto___47115,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0 = (function (){
var statearr_44853 = [null,null,null,null,null,null,null];
(statearr_44853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__);

(statearr_44853[(1)] = (1));

return statearr_44853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1 = (function (state_44840){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_44840);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e44856){var ex__44158__auto__ = e44856;
var statearr_44857_47124 = state_44840;
(statearr_44857_47124[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_44840[(4)]))){
var statearr_44858_47127 = state_44840;
(statearr_44858_47127[(1)] = cljs.core.first((state_44840[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47129 = state_44840;
state_44840 = G__47129;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = function(state_44840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1.call(this,state_44840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__;
})()
;})(__47084,switch__44154__auto__,c__44347__auto___47115,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async))
})();
var state__44350__auto__ = (function (){var statearr_44859 = f__44349__auto__();
(statearr_44859[(6)] = c__44347__auto___47115);

return statearr_44859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
});})(__47084,c__44347__auto___47115,G__44782_47085,G__44782_47086__$1,n__4613__auto___47083,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44782_47086__$1)].join('')));

}

var G__47133 = (__47084 + (1));
__47084 = G__47133;
continue;
} else {
}
break;
}

var c__44347__auto___47134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_44882){
var state_val_44883 = (state_44882[(1)]);
if((state_val_44883 === (7))){
var inst_44878 = (state_44882[(2)]);
var state_44882__$1 = state_44882;
var statearr_44886_47139 = state_44882__$1;
(statearr_44886_47139[(2)] = inst_44878);

(statearr_44886_47139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (1))){
var state_44882__$1 = state_44882;
var statearr_44888_47143 = state_44882__$1;
(statearr_44888_47143[(2)] = null);

(statearr_44888_47143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (4))){
var inst_44863 = (state_44882[(7)]);
var inst_44863__$1 = (state_44882[(2)]);
var inst_44864 = (inst_44863__$1 == null);
var state_44882__$1 = (function (){var statearr_44897 = state_44882;
(statearr_44897[(7)] = inst_44863__$1);

return statearr_44897;
})();
if(cljs.core.truth_(inst_44864)){
var statearr_44898_47147 = state_44882__$1;
(statearr_44898_47147[(1)] = (5));

} else {
var statearr_44899_47148 = state_44882__$1;
(statearr_44899_47148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (6))){
var inst_44868 = (state_44882[(8)]);
var inst_44863 = (state_44882[(7)]);
var inst_44868__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44870 = [inst_44863,inst_44868__$1];
var inst_44871 = (new cljs.core.PersistentVector(null,2,(5),inst_44869,inst_44870,null));
var state_44882__$1 = (function (){var statearr_44904 = state_44882;
(statearr_44904[(8)] = inst_44868__$1);

return statearr_44904;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44882__$1,(8),jobs,inst_44871);
} else {
if((state_val_44883 === (3))){
var inst_44880 = (state_44882[(2)]);
var state_44882__$1 = state_44882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44882__$1,inst_44880);
} else {
if((state_val_44883 === (2))){
var state_44882__$1 = state_44882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44882__$1,(4),from);
} else {
if((state_val_44883 === (9))){
var inst_44875 = (state_44882[(2)]);
var state_44882__$1 = (function (){var statearr_44906 = state_44882;
(statearr_44906[(9)] = inst_44875);

return statearr_44906;
})();
var statearr_44907_47151 = state_44882__$1;
(statearr_44907_47151[(2)] = null);

(statearr_44907_47151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (5))){
var inst_44866 = cljs.core.async.close_BANG_(jobs);
var state_44882__$1 = state_44882;
var statearr_44913_47152 = state_44882__$1;
(statearr_44913_47152[(2)] = inst_44866);

(statearr_44913_47152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44883 === (8))){
var inst_44868 = (state_44882[(8)]);
var inst_44873 = (state_44882[(2)]);
var state_44882__$1 = (function (){var statearr_44914 = state_44882;
(statearr_44914[(10)] = inst_44873);

return statearr_44914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44882__$1,(9),results,inst_44868);
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
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0 = (function (){
var statearr_44921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__);

(statearr_44921[(1)] = (1));

return statearr_44921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1 = (function (state_44882){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_44882);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e44922){var ex__44158__auto__ = e44922;
var statearr_44923_47153 = state_44882;
(statearr_44923_47153[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_44882[(4)]))){
var statearr_44924_47154 = state_44882;
(statearr_44924_47154[(1)] = cljs.core.first((state_44882[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47155 = state_44882;
state_44882 = G__47155;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = function(state_44882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1.call(this,state_44882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_44929 = f__44349__auto__();
(statearr_44929[(6)] = c__44347__auto___47134);

return statearr_44929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));


var c__44347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_44972){
var state_val_44973 = (state_44972[(1)]);
if((state_val_44973 === (7))){
var inst_44967 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
var statearr_44975_47157 = state_44972__$1;
(statearr_44975_47157[(2)] = inst_44967);

(statearr_44975_47157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (20))){
var state_44972__$1 = state_44972;
var statearr_44977_47158 = state_44972__$1;
(statearr_44977_47158[(2)] = null);

(statearr_44977_47158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (1))){
var state_44972__$1 = state_44972;
var statearr_44978_47159 = state_44972__$1;
(statearr_44978_47159[(2)] = null);

(statearr_44978_47159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (4))){
var inst_44935 = (state_44972[(7)]);
var inst_44935__$1 = (state_44972[(2)]);
var inst_44936 = (inst_44935__$1 == null);
var state_44972__$1 = (function (){var statearr_44981 = state_44972;
(statearr_44981[(7)] = inst_44935__$1);

return statearr_44981;
})();
if(cljs.core.truth_(inst_44936)){
var statearr_44982_47164 = state_44972__$1;
(statearr_44982_47164[(1)] = (5));

} else {
var statearr_44983_47165 = state_44972__$1;
(statearr_44983_47165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (15))){
var inst_44948 = (state_44972[(8)]);
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44972__$1,(18),to,inst_44948);
} else {
if((state_val_44973 === (21))){
var inst_44962 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
var statearr_44984_47166 = state_44972__$1;
(statearr_44984_47166[(2)] = inst_44962);

(statearr_44984_47166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (13))){
var inst_44964 = (state_44972[(2)]);
var state_44972__$1 = (function (){var statearr_44986 = state_44972;
(statearr_44986[(9)] = inst_44964);

return statearr_44986;
})();
var statearr_44988_47167 = state_44972__$1;
(statearr_44988_47167[(2)] = null);

(statearr_44988_47167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (6))){
var inst_44935 = (state_44972[(7)]);
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44972__$1,(11),inst_44935);
} else {
if((state_val_44973 === (17))){
var inst_44957 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
if(cljs.core.truth_(inst_44957)){
var statearr_44990_47168 = state_44972__$1;
(statearr_44990_47168[(1)] = (19));

} else {
var statearr_44994_47169 = state_44972__$1;
(statearr_44994_47169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (3))){
var inst_44969 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44972__$1,inst_44969);
} else {
if((state_val_44973 === (12))){
var inst_44945 = (state_44972[(10)]);
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44972__$1,(14),inst_44945);
} else {
if((state_val_44973 === (2))){
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44972__$1,(4),results);
} else {
if((state_val_44973 === (19))){
var state_44972__$1 = state_44972;
var statearr_45001_47170 = state_44972__$1;
(statearr_45001_47170[(2)] = null);

(statearr_45001_47170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (11))){
var inst_44945 = (state_44972[(2)]);
var state_44972__$1 = (function (){var statearr_45002 = state_44972;
(statearr_45002[(10)] = inst_44945);

return statearr_45002;
})();
var statearr_45007_47171 = state_44972__$1;
(statearr_45007_47171[(2)] = null);

(statearr_45007_47171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (9))){
var state_44972__$1 = state_44972;
var statearr_45008_47172 = state_44972__$1;
(statearr_45008_47172[(2)] = null);

(statearr_45008_47172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (5))){
var state_44972__$1 = state_44972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45009_47173 = state_44972__$1;
(statearr_45009_47173[(1)] = (8));

} else {
var statearr_45010_47174 = state_44972__$1;
(statearr_45010_47174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (14))){
var inst_44948 = (state_44972[(8)]);
var inst_44948__$1 = (state_44972[(2)]);
var inst_44950 = (inst_44948__$1 == null);
var inst_44951 = cljs.core.not(inst_44950);
var state_44972__$1 = (function (){var statearr_45011 = state_44972;
(statearr_45011[(8)] = inst_44948__$1);

return statearr_45011;
})();
if(inst_44951){
var statearr_45012_47176 = state_44972__$1;
(statearr_45012_47176[(1)] = (15));

} else {
var statearr_45013_47177 = state_44972__$1;
(statearr_45013_47177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (16))){
var state_44972__$1 = state_44972;
var statearr_45014_47178 = state_44972__$1;
(statearr_45014_47178[(2)] = false);

(statearr_45014_47178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (10))){
var inst_44942 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
var statearr_45015_47180 = state_44972__$1;
(statearr_45015_47180[(2)] = inst_44942);

(statearr_45015_47180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (18))){
var inst_44954 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
var statearr_45016_47182 = state_44972__$1;
(statearr_45016_47182[(2)] = inst_44954);

(statearr_45016_47182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (8))){
var inst_44939 = cljs.core.async.close_BANG_(to);
var state_44972__$1 = state_44972;
var statearr_45017_47183 = state_44972__$1;
(statearr_45017_47183[(2)] = inst_44939);

(statearr_45017_47183[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0 = (function (){
var statearr_45019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__);

(statearr_45019[(1)] = (1));

return statearr_45019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1 = (function (state_44972){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_44972);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e45021){var ex__44158__auto__ = e45021;
var statearr_45022_47184 = state_44972;
(statearr_45022_47184[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_44972[(4)]))){
var statearr_45023_47185 = state_44972;
(statearr_45023_47185[(1)] = cljs.core.first((state_44972[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47186 = state_44972;
state_44972 = G__47186;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__ = function(state_44972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1.call(this,state_44972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_45024 = f__44349__auto__();
(statearr_45024[(6)] = c__44347__auto__);

return statearr_45024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));

return c__44347__auto__;
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
var G__45026 = arguments.length;
switch (G__45026) {
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
var G__45032 = arguments.length;
switch (G__45032) {
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
var G__45042 = arguments.length;
switch (G__45042) {
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
var c__44347__auto___47206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_45080){
var state_val_45081 = (state_45080[(1)]);
if((state_val_45081 === (7))){
var inst_45076 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
var statearr_45084_47207 = state_45080__$1;
(statearr_45084_47207[(2)] = inst_45076);

(statearr_45084_47207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (1))){
var state_45080__$1 = state_45080;
var statearr_45085_47208 = state_45080__$1;
(statearr_45085_47208[(2)] = null);

(statearr_45085_47208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (4))){
var inst_45057 = (state_45080[(7)]);
var inst_45057__$1 = (state_45080[(2)]);
var inst_45058 = (inst_45057__$1 == null);
var state_45080__$1 = (function (){var statearr_45086 = state_45080;
(statearr_45086[(7)] = inst_45057__$1);

return statearr_45086;
})();
if(cljs.core.truth_(inst_45058)){
var statearr_45087_47216 = state_45080__$1;
(statearr_45087_47216[(1)] = (5));

} else {
var statearr_45088_47217 = state_45080__$1;
(statearr_45088_47217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (13))){
var state_45080__$1 = state_45080;
var statearr_45091_47218 = state_45080__$1;
(statearr_45091_47218[(2)] = null);

(statearr_45091_47218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (6))){
var inst_45057 = (state_45080[(7)]);
var inst_45063 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45057) : p.call(null,inst_45057));
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_45063)){
var statearr_45092_47219 = state_45080__$1;
(statearr_45092_47219[(1)] = (9));

} else {
var statearr_45093_47223 = state_45080__$1;
(statearr_45093_47223[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (3))){
var inst_45078 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45080__$1,inst_45078);
} else {
if((state_val_45081 === (12))){
var state_45080__$1 = state_45080;
var statearr_45100_47224 = state_45080__$1;
(statearr_45100_47224[(2)] = null);

(statearr_45100_47224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (2))){
var state_45080__$1 = state_45080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45080__$1,(4),ch);
} else {
if((state_val_45081 === (11))){
var inst_45057 = (state_45080[(7)]);
var inst_45067 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45080__$1,(8),inst_45067,inst_45057);
} else {
if((state_val_45081 === (9))){
var state_45080__$1 = state_45080;
var statearr_45106_47231 = state_45080__$1;
(statearr_45106_47231[(2)] = tc);

(statearr_45106_47231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (5))){
var inst_45060 = cljs.core.async.close_BANG_(tc);
var inst_45061 = cljs.core.async.close_BANG_(fc);
var state_45080__$1 = (function (){var statearr_45107 = state_45080;
(statearr_45107[(8)] = inst_45060);

return statearr_45107;
})();
var statearr_45108_47232 = state_45080__$1;
(statearr_45108_47232[(2)] = inst_45061);

(statearr_45108_47232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (14))){
var inst_45074 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
var statearr_45109_47237 = state_45080__$1;
(statearr_45109_47237[(2)] = inst_45074);

(statearr_45109_47237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (10))){
var state_45080__$1 = state_45080;
var statearr_45110_47242 = state_45080__$1;
(statearr_45110_47242[(2)] = fc);

(statearr_45110_47242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (8))){
var inst_45069 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_45069)){
var statearr_45111_47248 = state_45080__$1;
(statearr_45111_47248[(1)] = (12));

} else {
var statearr_45112_47249 = state_45080__$1;
(statearr_45112_47249[(1)] = (13));

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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_45113 = [null,null,null,null,null,null,null,null,null];
(statearr_45113[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_45113[(1)] = (1));

return statearr_45113;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_45080){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_45080);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e45114){var ex__44158__auto__ = e45114;
var statearr_45119_47250 = state_45080;
(statearr_45119_47250[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_45080[(4)]))){
var statearr_45120_47251 = state_45080;
(statearr_45120_47251[(1)] = cljs.core.first((state_45080[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47253 = state_45080;
state_45080 = G__47253;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_45080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_45080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_45122 = f__44349__auto__();
(statearr_45122[(6)] = c__44347__auto___47206);

return statearr_45122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
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
var c__44347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_45145){
var state_val_45146 = (state_45145[(1)]);
if((state_val_45146 === (7))){
var inst_45141 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45150_47256 = state_45145__$1;
(statearr_45150_47256[(2)] = inst_45141);

(statearr_45150_47256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (1))){
var inst_45124 = init;
var inst_45125 = inst_45124;
var state_45145__$1 = (function (){var statearr_45155 = state_45145;
(statearr_45155[(7)] = inst_45125);

return statearr_45155;
})();
var statearr_45156_47257 = state_45145__$1;
(statearr_45156_47257[(2)] = null);

(statearr_45156_47257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (4))){
var inst_45128 = (state_45145[(8)]);
var inst_45128__$1 = (state_45145[(2)]);
var inst_45129 = (inst_45128__$1 == null);
var state_45145__$1 = (function (){var statearr_45159 = state_45145;
(statearr_45159[(8)] = inst_45128__$1);

return statearr_45159;
})();
if(cljs.core.truth_(inst_45129)){
var statearr_45166_47258 = state_45145__$1;
(statearr_45166_47258[(1)] = (5));

} else {
var statearr_45167_47259 = state_45145__$1;
(statearr_45167_47259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (6))){
var inst_45125 = (state_45145[(7)]);
var inst_45132 = (state_45145[(9)]);
var inst_45128 = (state_45145[(8)]);
var inst_45132__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45125,inst_45128) : f.call(null,inst_45125,inst_45128));
var inst_45133 = cljs.core.reduced_QMARK_(inst_45132__$1);
var state_45145__$1 = (function (){var statearr_45168 = state_45145;
(statearr_45168[(9)] = inst_45132__$1);

return statearr_45168;
})();
if(inst_45133){
var statearr_45169_47260 = state_45145__$1;
(statearr_45169_47260[(1)] = (8));

} else {
var statearr_45170_47261 = state_45145__$1;
(statearr_45170_47261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (3))){
var inst_45143 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45145__$1,inst_45143);
} else {
if((state_val_45146 === (2))){
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45145__$1,(4),ch);
} else {
if((state_val_45146 === (9))){
var inst_45132 = (state_45145[(9)]);
var inst_45125 = inst_45132;
var state_45145__$1 = (function (){var statearr_45171 = state_45145;
(statearr_45171[(7)] = inst_45125);

return statearr_45171;
})();
var statearr_45172_47262 = state_45145__$1;
(statearr_45172_47262[(2)] = null);

(statearr_45172_47262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (5))){
var inst_45125 = (state_45145[(7)]);
var state_45145__$1 = state_45145;
var statearr_45174_47263 = state_45145__$1;
(statearr_45174_47263[(2)] = inst_45125);

(statearr_45174_47263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (10))){
var inst_45139 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45175_47267 = state_45145__$1;
(statearr_45175_47267[(2)] = inst_45139);

(statearr_45175_47267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (8))){
var inst_45132 = (state_45145[(9)]);
var inst_45135 = cljs.core.deref(inst_45132);
var state_45145__$1 = state_45145;
var statearr_45180_47268 = state_45145__$1;
(statearr_45180_47268[(2)] = inst_45135);

(statearr_45180_47268[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__44155__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44155__auto____0 = (function (){
var statearr_45182 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45182[(0)] = cljs$core$async$reduce_$_state_machine__44155__auto__);

(statearr_45182[(1)] = (1));

return statearr_45182;
});
var cljs$core$async$reduce_$_state_machine__44155__auto____1 = (function (state_45145){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_45145);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e45183){var ex__44158__auto__ = e45183;
var statearr_45185_47276 = state_45145;
(statearr_45185_47276[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_45145[(4)]))){
var statearr_45186_47277 = state_45145;
(statearr_45186_47277[(1)] = cljs.core.first((state_45145[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47280 = state_45145;
state_45145 = G__47280;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44155__auto__ = function(state_45145){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44155__auto____1.call(this,state_45145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44155__auto____0;
cljs$core$async$reduce_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44155__auto____1;
return cljs$core$async$reduce_$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_45191 = f__44349__auto__();
(statearr_45191[(6)] = c__44347__auto__);

return statearr_45191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));

return c__44347__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_45199){
var state_val_45200 = (state_45199[(1)]);
if((state_val_45200 === (1))){
var inst_45194 = cljs.core.async.reduce(f__$1,init,ch);
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45199__$1,(2),inst_45194);
} else {
if((state_val_45200 === (2))){
var inst_45196 = (state_45199[(2)]);
var inst_45197 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45196) : f__$1.call(null,inst_45196));
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45199__$1,inst_45197);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44155__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44155__auto____0 = (function (){
var statearr_45205 = [null,null,null,null,null,null,null];
(statearr_45205[(0)] = cljs$core$async$transduce_$_state_machine__44155__auto__);

(statearr_45205[(1)] = (1));

return statearr_45205;
});
var cljs$core$async$transduce_$_state_machine__44155__auto____1 = (function (state_45199){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_45199);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e45206){var ex__44158__auto__ = e45206;
var statearr_45207_47293 = state_45199;
(statearr_45207_47293[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_45199[(4)]))){
var statearr_45210_47294 = state_45199;
(statearr_45210_47294[(1)] = cljs.core.first((state_45199[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47298 = state_45199;
state_45199 = G__47298;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44155__auto__ = function(state_45199){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44155__auto____1.call(this,state_45199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44155__auto____0;
cljs$core$async$transduce_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44155__auto____1;
return cljs$core$async$transduce_$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_45211 = f__44349__auto__();
(statearr_45211[(6)] = c__44347__auto__);

return statearr_45211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));

return c__44347__auto__;
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
var G__45214 = arguments.length;
switch (G__45214) {
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
var c__44347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_45247){
var state_val_45248 = (state_45247[(1)]);
if((state_val_45248 === (7))){
var inst_45229 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45249_47322 = state_45247__$1;
(statearr_45249_47322[(2)] = inst_45229);

(statearr_45249_47322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (1))){
var inst_45222 = cljs.core.seq(coll);
var inst_45223 = inst_45222;
var state_45247__$1 = (function (){var statearr_45255 = state_45247;
(statearr_45255[(7)] = inst_45223);

return statearr_45255;
})();
var statearr_45256_47323 = state_45247__$1;
(statearr_45256_47323[(2)] = null);

(statearr_45256_47323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (4))){
var inst_45223 = (state_45247[(7)]);
var inst_45227 = cljs.core.first(inst_45223);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45247__$1,(7),ch,inst_45227);
} else {
if((state_val_45248 === (13))){
var inst_45241 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45258_47324 = state_45247__$1;
(statearr_45258_47324[(2)] = inst_45241);

(statearr_45258_47324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (6))){
var inst_45232 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
if(cljs.core.truth_(inst_45232)){
var statearr_45259_47328 = state_45247__$1;
(statearr_45259_47328[(1)] = (8));

} else {
var statearr_45260_47329 = state_45247__$1;
(statearr_45260_47329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (3))){
var inst_45245 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45247__$1,inst_45245);
} else {
if((state_val_45248 === (12))){
var state_45247__$1 = state_45247;
var statearr_45261_47332 = state_45247__$1;
(statearr_45261_47332[(2)] = null);

(statearr_45261_47332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (2))){
var inst_45223 = (state_45247[(7)]);
var state_45247__$1 = state_45247;
if(cljs.core.truth_(inst_45223)){
var statearr_45262_47334 = state_45247__$1;
(statearr_45262_47334[(1)] = (4));

} else {
var statearr_45263_47335 = state_45247__$1;
(statearr_45263_47335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (11))){
var inst_45238 = cljs.core.async.close_BANG_(ch);
var state_45247__$1 = state_45247;
var statearr_45264_47339 = state_45247__$1;
(statearr_45264_47339[(2)] = inst_45238);

(statearr_45264_47339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (9))){
var state_45247__$1 = state_45247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45266_47346 = state_45247__$1;
(statearr_45266_47346[(1)] = (11));

} else {
var statearr_45267_47349 = state_45247__$1;
(statearr_45267_47349[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (5))){
var inst_45223 = (state_45247[(7)]);
var state_45247__$1 = state_45247;
var statearr_45271_47351 = state_45247__$1;
(statearr_45271_47351[(2)] = inst_45223);

(statearr_45271_47351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (10))){
var inst_45243 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45276_47354 = state_45247__$1;
(statearr_45276_47354[(2)] = inst_45243);

(statearr_45276_47354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (8))){
var inst_45223 = (state_45247[(7)]);
var inst_45234 = cljs.core.next(inst_45223);
var inst_45223__$1 = inst_45234;
var state_45247__$1 = (function (){var statearr_45277 = state_45247;
(statearr_45277[(7)] = inst_45223__$1);

return statearr_45277;
})();
var statearr_45278_47355 = state_45247__$1;
(statearr_45278_47355[(2)] = null);

(statearr_45278_47355[(1)] = (2));


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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_45279 = [null,null,null,null,null,null,null,null];
(statearr_45279[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_45279[(1)] = (1));

return statearr_45279;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_45247){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_45247);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e45280){var ex__44158__auto__ = e45280;
var statearr_45281_47362 = state_45247;
(statearr_45281_47362[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_45247[(4)]))){
var statearr_45282_47364 = state_45247;
(statearr_45282_47364[(1)] = cljs.core.first((state_45247[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47367 = state_45247;
state_45247 = G__47367;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_45247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_45247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_45285 = f__44349__auto__();
(statearr_45285[(6)] = c__44347__auto__);

return statearr_45285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));

return c__44347__auto__;
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
var G__45289 = arguments.length;
switch (G__45289) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_47378 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_47378(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47385 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_47385(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47388 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_47388(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47398 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_47398(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45314 = (function (ch,cs,meta45315){
this.ch = ch;
this.cs = cs;
this.meta45315 = meta45315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45316,meta45315__$1){
var self__ = this;
var _45316__$1 = this;
return (new cljs.core.async.t_cljs$core$async45314(self__.ch,self__.cs,meta45315__$1));
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45316){
var self__ = this;
var _45316__$1 = this;
return self__.meta45315;
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45315","meta45315",1200231910,null)], null);
}));

(cljs.core.async.t_cljs$core$async45314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45314");

(cljs.core.async.t_cljs$core$async45314.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45314.
 */
cljs.core.async.__GT_t_cljs$core$async45314 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45314(ch__$1,cs__$1,meta45315){
return (new cljs.core.async.t_cljs$core$async45314(ch__$1,cs__$1,meta45315));
});

}

return (new cljs.core.async.t_cljs$core$async45314(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44347__auto___47415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_45471){
var state_val_45472 = (state_45471[(1)]);
if((state_val_45472 === (7))){
var inst_45467 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45473_47417 = state_45471__$1;
(statearr_45473_47417[(2)] = inst_45467);

(statearr_45473_47417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (20))){
var inst_45372 = (state_45471[(7)]);
var inst_45384 = cljs.core.first(inst_45372);
var inst_45385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45384,(0),null);
var inst_45386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45384,(1),null);
var state_45471__$1 = (function (){var statearr_45474 = state_45471;
(statearr_45474[(8)] = inst_45385);

return statearr_45474;
})();
if(cljs.core.truth_(inst_45386)){
var statearr_45475_47418 = state_45471__$1;
(statearr_45475_47418[(1)] = (22));

} else {
var statearr_45476_47419 = state_45471__$1;
(statearr_45476_47419[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (27))){
var inst_45338 = (state_45471[(9)]);
var inst_45414 = (state_45471[(10)]);
var inst_45421 = (state_45471[(11)]);
var inst_45416 = (state_45471[(12)]);
var inst_45421__$1 = cljs.core._nth(inst_45414,inst_45416);
var inst_45422 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45421__$1,inst_45338,done);
var state_45471__$1 = (function (){var statearr_45477 = state_45471;
(statearr_45477[(11)] = inst_45421__$1);

return statearr_45477;
})();
if(cljs.core.truth_(inst_45422)){
var statearr_45478_47424 = state_45471__$1;
(statearr_45478_47424[(1)] = (30));

} else {
var statearr_45479_47425 = state_45471__$1;
(statearr_45479_47425[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (1))){
var state_45471__$1 = state_45471;
var statearr_45480_47426 = state_45471__$1;
(statearr_45480_47426[(2)] = null);

(statearr_45480_47426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (24))){
var inst_45372 = (state_45471[(7)]);
var inst_45391 = (state_45471[(2)]);
var inst_45392 = cljs.core.next(inst_45372);
var inst_45347 = inst_45392;
var inst_45348 = null;
var inst_45349 = (0);
var inst_45350 = (0);
var state_45471__$1 = (function (){var statearr_45482 = state_45471;
(statearr_45482[(13)] = inst_45391);

(statearr_45482[(14)] = inst_45348);

(statearr_45482[(15)] = inst_45347);

(statearr_45482[(16)] = inst_45350);

(statearr_45482[(17)] = inst_45349);

return statearr_45482;
})();
var statearr_45483_47432 = state_45471__$1;
(statearr_45483_47432[(2)] = null);

(statearr_45483_47432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (39))){
var state_45471__$1 = state_45471;
var statearr_45490_47433 = state_45471__$1;
(statearr_45490_47433[(2)] = null);

(statearr_45490_47433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (4))){
var inst_45338 = (state_45471[(9)]);
var inst_45338__$1 = (state_45471[(2)]);
var inst_45339 = (inst_45338__$1 == null);
var state_45471__$1 = (function (){var statearr_45491 = state_45471;
(statearr_45491[(9)] = inst_45338__$1);

return statearr_45491;
})();
if(cljs.core.truth_(inst_45339)){
var statearr_45492_47437 = state_45471__$1;
(statearr_45492_47437[(1)] = (5));

} else {
var statearr_45493_47438 = state_45471__$1;
(statearr_45493_47438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (15))){
var inst_45348 = (state_45471[(14)]);
var inst_45347 = (state_45471[(15)]);
var inst_45350 = (state_45471[(16)]);
var inst_45349 = (state_45471[(17)]);
var inst_45368 = (state_45471[(2)]);
var inst_45369 = (inst_45350 + (1));
var tmp45484 = inst_45348;
var tmp45485 = inst_45347;
var tmp45486 = inst_45349;
var inst_45347__$1 = tmp45485;
var inst_45348__$1 = tmp45484;
var inst_45349__$1 = tmp45486;
var inst_45350__$1 = inst_45369;
var state_45471__$1 = (function (){var statearr_45494 = state_45471;
(statearr_45494[(14)] = inst_45348__$1);

(statearr_45494[(15)] = inst_45347__$1);

(statearr_45494[(18)] = inst_45368);

(statearr_45494[(16)] = inst_45350__$1);

(statearr_45494[(17)] = inst_45349__$1);

return statearr_45494;
})();
var statearr_45498_47440 = state_45471__$1;
(statearr_45498_47440[(2)] = null);

(statearr_45498_47440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (21))){
var inst_45395 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45502_47443 = state_45471__$1;
(statearr_45502_47443[(2)] = inst_45395);

(statearr_45502_47443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (31))){
var inst_45421 = (state_45471[(11)]);
var inst_45425 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45421);
var state_45471__$1 = state_45471;
var statearr_45505_47444 = state_45471__$1;
(statearr_45505_47444[(2)] = inst_45425);

(statearr_45505_47444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (32))){
var inst_45414 = (state_45471[(10)]);
var inst_45413 = (state_45471[(19)]);
var inst_45415 = (state_45471[(20)]);
var inst_45416 = (state_45471[(12)]);
var inst_45427 = (state_45471[(2)]);
var inst_45428 = (inst_45416 + (1));
var tmp45499 = inst_45414;
var tmp45500 = inst_45413;
var tmp45501 = inst_45415;
var inst_45413__$1 = tmp45500;
var inst_45414__$1 = tmp45499;
var inst_45415__$1 = tmp45501;
var inst_45416__$1 = inst_45428;
var state_45471__$1 = (function (){var statearr_45507 = state_45471;
(statearr_45507[(10)] = inst_45414__$1);

(statearr_45507[(19)] = inst_45413__$1);

(statearr_45507[(20)] = inst_45415__$1);

(statearr_45507[(21)] = inst_45427);

(statearr_45507[(12)] = inst_45416__$1);

return statearr_45507;
})();
var statearr_45508_47450 = state_45471__$1;
(statearr_45508_47450[(2)] = null);

(statearr_45508_47450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (40))){
var inst_45440 = (state_45471[(22)]);
var inst_45444 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45440);
var state_45471__$1 = state_45471;
var statearr_45509_47451 = state_45471__$1;
(statearr_45509_47451[(2)] = inst_45444);

(statearr_45509_47451[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (33))){
var inst_45431 = (state_45471[(23)]);
var inst_45433 = cljs.core.chunked_seq_QMARK_(inst_45431);
var state_45471__$1 = state_45471;
if(inst_45433){
var statearr_45510_47452 = state_45471__$1;
(statearr_45510_47452[(1)] = (36));

} else {
var statearr_45511_47453 = state_45471__$1;
(statearr_45511_47453[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (13))){
var inst_45361 = (state_45471[(24)]);
var inst_45365 = cljs.core.async.close_BANG_(inst_45361);
var state_45471__$1 = state_45471;
var statearr_45512_47455 = state_45471__$1;
(statearr_45512_47455[(2)] = inst_45365);

(statearr_45512_47455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (22))){
var inst_45385 = (state_45471[(8)]);
var inst_45388 = cljs.core.async.close_BANG_(inst_45385);
var state_45471__$1 = state_45471;
var statearr_45516_47457 = state_45471__$1;
(statearr_45516_47457[(2)] = inst_45388);

(statearr_45516_47457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (36))){
var inst_45431 = (state_45471[(23)]);
var inst_45435 = cljs.core.chunk_first(inst_45431);
var inst_45436 = cljs.core.chunk_rest(inst_45431);
var inst_45437 = cljs.core.count(inst_45435);
var inst_45413 = inst_45436;
var inst_45414 = inst_45435;
var inst_45415 = inst_45437;
var inst_45416 = (0);
var state_45471__$1 = (function (){var statearr_45517 = state_45471;
(statearr_45517[(10)] = inst_45414);

(statearr_45517[(19)] = inst_45413);

(statearr_45517[(20)] = inst_45415);

(statearr_45517[(12)] = inst_45416);

return statearr_45517;
})();
var statearr_45518_47464 = state_45471__$1;
(statearr_45518_47464[(2)] = null);

(statearr_45518_47464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (41))){
var inst_45431 = (state_45471[(23)]);
var inst_45446 = (state_45471[(2)]);
var inst_45447 = cljs.core.next(inst_45431);
var inst_45413 = inst_45447;
var inst_45414 = null;
var inst_45415 = (0);
var inst_45416 = (0);
var state_45471__$1 = (function (){var statearr_45522 = state_45471;
(statearr_45522[(10)] = inst_45414);

(statearr_45522[(19)] = inst_45413);

(statearr_45522[(20)] = inst_45415);

(statearr_45522[(12)] = inst_45416);

(statearr_45522[(25)] = inst_45446);

return statearr_45522;
})();
var statearr_45525_47466 = state_45471__$1;
(statearr_45525_47466[(2)] = null);

(statearr_45525_47466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (43))){
var state_45471__$1 = state_45471;
var statearr_45526_47467 = state_45471__$1;
(statearr_45526_47467[(2)] = null);

(statearr_45526_47467[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (29))){
var inst_45455 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45527_47471 = state_45471__$1;
(statearr_45527_47471[(2)] = inst_45455);

(statearr_45527_47471[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (44))){
var inst_45464 = (state_45471[(2)]);
var state_45471__$1 = (function (){var statearr_45528 = state_45471;
(statearr_45528[(26)] = inst_45464);

return statearr_45528;
})();
var statearr_45529_47474 = state_45471__$1;
(statearr_45529_47474[(2)] = null);

(statearr_45529_47474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (6))){
var inst_45405 = (state_45471[(27)]);
var inst_45404 = cljs.core.deref(cs);
var inst_45405__$1 = cljs.core.keys(inst_45404);
var inst_45406 = cljs.core.count(inst_45405__$1);
var inst_45407 = cljs.core.reset_BANG_(dctr,inst_45406);
var inst_45412 = cljs.core.seq(inst_45405__$1);
var inst_45413 = inst_45412;
var inst_45414 = null;
var inst_45415 = (0);
var inst_45416 = (0);
var state_45471__$1 = (function (){var statearr_45537 = state_45471;
(statearr_45537[(10)] = inst_45414);

(statearr_45537[(27)] = inst_45405__$1);

(statearr_45537[(19)] = inst_45413);

(statearr_45537[(28)] = inst_45407);

(statearr_45537[(20)] = inst_45415);

(statearr_45537[(12)] = inst_45416);

return statearr_45537;
})();
var statearr_45540_47498 = state_45471__$1;
(statearr_45540_47498[(2)] = null);

(statearr_45540_47498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (28))){
var inst_45413 = (state_45471[(19)]);
var inst_45431 = (state_45471[(23)]);
var inst_45431__$1 = cljs.core.seq(inst_45413);
var state_45471__$1 = (function (){var statearr_45541 = state_45471;
(statearr_45541[(23)] = inst_45431__$1);

return statearr_45541;
})();
if(inst_45431__$1){
var statearr_45542_47506 = state_45471__$1;
(statearr_45542_47506[(1)] = (33));

} else {
var statearr_45546_47507 = state_45471__$1;
(statearr_45546_47507[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (25))){
var inst_45415 = (state_45471[(20)]);
var inst_45416 = (state_45471[(12)]);
var inst_45418 = (inst_45416 < inst_45415);
var inst_45419 = inst_45418;
var state_45471__$1 = state_45471;
if(cljs.core.truth_(inst_45419)){
var statearr_45549_47508 = state_45471__$1;
(statearr_45549_47508[(1)] = (27));

} else {
var statearr_45550_47510 = state_45471__$1;
(statearr_45550_47510[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (34))){
var state_45471__$1 = state_45471;
var statearr_45551_47512 = state_45471__$1;
(statearr_45551_47512[(2)] = null);

(statearr_45551_47512[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (17))){
var state_45471__$1 = state_45471;
var statearr_45554_47514 = state_45471__$1;
(statearr_45554_47514[(2)] = null);

(statearr_45554_47514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (3))){
var inst_45469 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45471__$1,inst_45469);
} else {
if((state_val_45472 === (12))){
var inst_45400 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45556_47515 = state_45471__$1;
(statearr_45556_47515[(2)] = inst_45400);

(statearr_45556_47515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (2))){
var state_45471__$1 = state_45471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45471__$1,(4),ch);
} else {
if((state_val_45472 === (23))){
var state_45471__$1 = state_45471;
var statearr_45559_47519 = state_45471__$1;
(statearr_45559_47519[(2)] = null);

(statearr_45559_47519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (35))){
var inst_45453 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45560_47520 = state_45471__$1;
(statearr_45560_47520[(2)] = inst_45453);

(statearr_45560_47520[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (19))){
var inst_45372 = (state_45471[(7)]);
var inst_45376 = cljs.core.chunk_first(inst_45372);
var inst_45377 = cljs.core.chunk_rest(inst_45372);
var inst_45378 = cljs.core.count(inst_45376);
var inst_45347 = inst_45377;
var inst_45348 = inst_45376;
var inst_45349 = inst_45378;
var inst_45350 = (0);
var state_45471__$1 = (function (){var statearr_45561 = state_45471;
(statearr_45561[(14)] = inst_45348);

(statearr_45561[(15)] = inst_45347);

(statearr_45561[(16)] = inst_45350);

(statearr_45561[(17)] = inst_45349);

return statearr_45561;
})();
var statearr_45562_47524 = state_45471__$1;
(statearr_45562_47524[(2)] = null);

(statearr_45562_47524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (11))){
var inst_45372 = (state_45471[(7)]);
var inst_45347 = (state_45471[(15)]);
var inst_45372__$1 = cljs.core.seq(inst_45347);
var state_45471__$1 = (function (){var statearr_45564 = state_45471;
(statearr_45564[(7)] = inst_45372__$1);

return statearr_45564;
})();
if(inst_45372__$1){
var statearr_45565_47526 = state_45471__$1;
(statearr_45565_47526[(1)] = (16));

} else {
var statearr_45566_47528 = state_45471__$1;
(statearr_45566_47528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (9))){
var inst_45402 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45568_47530 = state_45471__$1;
(statearr_45568_47530[(2)] = inst_45402);

(statearr_45568_47530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (5))){
var inst_45345 = cljs.core.deref(cs);
var inst_45346 = cljs.core.seq(inst_45345);
var inst_45347 = inst_45346;
var inst_45348 = null;
var inst_45349 = (0);
var inst_45350 = (0);
var state_45471__$1 = (function (){var statearr_45570 = state_45471;
(statearr_45570[(14)] = inst_45348);

(statearr_45570[(15)] = inst_45347);

(statearr_45570[(16)] = inst_45350);

(statearr_45570[(17)] = inst_45349);

return statearr_45570;
})();
var statearr_45571_47537 = state_45471__$1;
(statearr_45571_47537[(2)] = null);

(statearr_45571_47537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (14))){
var state_45471__$1 = state_45471;
var statearr_45572_47538 = state_45471__$1;
(statearr_45572_47538[(2)] = null);

(statearr_45572_47538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (45))){
var inst_45461 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45574_47540 = state_45471__$1;
(statearr_45574_47540[(2)] = inst_45461);

(statearr_45574_47540[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (26))){
var inst_45405 = (state_45471[(27)]);
var inst_45457 = (state_45471[(2)]);
var inst_45458 = cljs.core.seq(inst_45405);
var state_45471__$1 = (function (){var statearr_45575 = state_45471;
(statearr_45575[(29)] = inst_45457);

return statearr_45575;
})();
if(inst_45458){
var statearr_45576_47541 = state_45471__$1;
(statearr_45576_47541[(1)] = (42));

} else {
var statearr_45578_47542 = state_45471__$1;
(statearr_45578_47542[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (16))){
var inst_45372 = (state_45471[(7)]);
var inst_45374 = cljs.core.chunked_seq_QMARK_(inst_45372);
var state_45471__$1 = state_45471;
if(inst_45374){
var statearr_45579_47543 = state_45471__$1;
(statearr_45579_47543[(1)] = (19));

} else {
var statearr_45580_47544 = state_45471__$1;
(statearr_45580_47544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (38))){
var inst_45450 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45582_47545 = state_45471__$1;
(statearr_45582_47545[(2)] = inst_45450);

(statearr_45582_47545[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (30))){
var state_45471__$1 = state_45471;
var statearr_45589_47550 = state_45471__$1;
(statearr_45589_47550[(2)] = null);

(statearr_45589_47550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (10))){
var inst_45348 = (state_45471[(14)]);
var inst_45350 = (state_45471[(16)]);
var inst_45360 = cljs.core._nth(inst_45348,inst_45350);
var inst_45361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45360,(0),null);
var inst_45362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45360,(1),null);
var state_45471__$1 = (function (){var statearr_45594 = state_45471;
(statearr_45594[(24)] = inst_45361);

return statearr_45594;
})();
if(cljs.core.truth_(inst_45362)){
var statearr_45595_47555 = state_45471__$1;
(statearr_45595_47555[(1)] = (13));

} else {
var statearr_45596_47557 = state_45471__$1;
(statearr_45596_47557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (18))){
var inst_45398 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45598_47564 = state_45471__$1;
(statearr_45598_47564[(2)] = inst_45398);

(statearr_45598_47564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (42))){
var state_45471__$1 = state_45471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45471__$1,(45),dchan);
} else {
if((state_val_45472 === (37))){
var inst_45338 = (state_45471[(9)]);
var inst_45440 = (state_45471[(22)]);
var inst_45431 = (state_45471[(23)]);
var inst_45440__$1 = cljs.core.first(inst_45431);
var inst_45441 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45440__$1,inst_45338,done);
var state_45471__$1 = (function (){var statearr_45606 = state_45471;
(statearr_45606[(22)] = inst_45440__$1);

return statearr_45606;
})();
if(cljs.core.truth_(inst_45441)){
var statearr_45608_47574 = state_45471__$1;
(statearr_45608_47574[(1)] = (39));

} else {
var statearr_45610_47575 = state_45471__$1;
(statearr_45610_47575[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45472 === (8))){
var inst_45350 = (state_45471[(16)]);
var inst_45349 = (state_45471[(17)]);
var inst_45352 = (inst_45350 < inst_45349);
var inst_45353 = inst_45352;
var state_45471__$1 = state_45471;
if(cljs.core.truth_(inst_45353)){
var statearr_45612_47579 = state_45471__$1;
(statearr_45612_47579[(1)] = (10));

} else {
var statearr_45613_47583 = state_45471__$1;
(statearr_45613_47583[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__44155__auto__ = null;
var cljs$core$async$mult_$_state_machine__44155__auto____0 = (function (){
var statearr_45615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45615[(0)] = cljs$core$async$mult_$_state_machine__44155__auto__);

(statearr_45615[(1)] = (1));

return statearr_45615;
});
var cljs$core$async$mult_$_state_machine__44155__auto____1 = (function (state_45471){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_45471);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e45616){var ex__44158__auto__ = e45616;
var statearr_45617_47594 = state_45471;
(statearr_45617_47594[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_45471[(4)]))){
var statearr_45618_47595 = state_45471;
(statearr_45618_47595[(1)] = cljs.core.first((state_45471[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47599 = state_45471;
state_45471 = G__47599;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44155__auto__ = function(state_45471){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44155__auto____1.call(this,state_45471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44155__auto____0;
cljs$core$async$mult_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44155__auto____1;
return cljs$core$async$mult_$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_45619 = f__44349__auto__();
(statearr_45619[(6)] = c__44347__auto___47415);

return statearr_45619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
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
var G__45626 = arguments.length;
switch (G__45626) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47612 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47612(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47617 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47617(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47623 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47623(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47626 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47626(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47627 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47627(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47640 = arguments.length;
var i__4737__auto___47641 = (0);
while(true){
if((i__4737__auto___47641 < len__4736__auto___47640)){
args__4742__auto__.push((arguments[i__4737__auto___47641]));

var G__47643 = (i__4737__auto___47641 + (1));
i__4737__auto___47641 = G__47643;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45664){
var map__45665 = p__45664;
var map__45665__$1 = (((((!((map__45665 == null))))?(((((map__45665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45665):map__45665);
var opts = map__45665__$1;
var statearr_45667_47651 = state;
(statearr_45667_47651[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45668_47657 = state;
(statearr_45668_47657[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45669_47659 = state;
(statearr_45669_47659[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45657){
var G__45658 = cljs.core.first(seq45657);
var seq45657__$1 = cljs.core.next(seq45657);
var G__45659 = cljs.core.first(seq45657__$1);
var seq45657__$2 = cljs.core.next(seq45657__$1);
var G__45660 = cljs.core.first(seq45657__$2);
var seq45657__$3 = cljs.core.next(seq45657__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45658,G__45659,G__45660,seq45657__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45682 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45683){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45683 = meta45683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45684,meta45683__$1){
var self__ = this;
var _45684__$1 = this;
return (new cljs.core.async.t_cljs$core$async45682(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45683__$1));
}));

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45684){
var self__ = this;
var _45684__$1 = this;
return self__.meta45683;
}));

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45682.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45683","meta45683",-772688382,null)], null);
}));

(cljs.core.async.t_cljs$core$async45682.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45682");

(cljs.core.async.t_cljs$core$async45682.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45682");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45682.
 */
cljs.core.async.__GT_t_cljs$core$async45682 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45682(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45683){
return (new cljs.core.async.t_cljs$core$async45682(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45683));
});

}

return (new cljs.core.async.t_cljs$core$async45682(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44347__auto___47711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_45819){
var state_val_45820 = (state_45819[(1)]);
if((state_val_45820 === (7))){
var inst_45728 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
var statearr_45824_47715 = state_45819__$1;
(statearr_45824_47715[(2)] = inst_45728);

(statearr_45824_47715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (20))){
var inst_45740 = (state_45819[(7)]);
var state_45819__$1 = state_45819;
var statearr_45825_47721 = state_45819__$1;
(statearr_45825_47721[(2)] = inst_45740);

(statearr_45825_47721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (27))){
var state_45819__$1 = state_45819;
var statearr_45827_47722 = state_45819__$1;
(statearr_45827_47722[(2)] = null);

(statearr_45827_47722[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (1))){
var inst_45713 = (state_45819[(8)]);
var inst_45713__$1 = calc_state();
var inst_45717 = (inst_45713__$1 == null);
var inst_45718 = cljs.core.not(inst_45717);
var state_45819__$1 = (function (){var statearr_45831 = state_45819;
(statearr_45831[(8)] = inst_45713__$1);

return statearr_45831;
})();
if(inst_45718){
var statearr_45832_47735 = state_45819__$1;
(statearr_45832_47735[(1)] = (2));

} else {
var statearr_45833_47737 = state_45819__$1;
(statearr_45833_47737[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (24))){
var inst_45774 = (state_45819[(9)]);
var inst_45790 = (state_45819[(10)]);
var inst_45764 = (state_45819[(11)]);
var inst_45790__$1 = (inst_45764.cljs$core$IFn$_invoke$arity$1 ? inst_45764.cljs$core$IFn$_invoke$arity$1(inst_45774) : inst_45764.call(null,inst_45774));
var state_45819__$1 = (function (){var statearr_45834 = state_45819;
(statearr_45834[(10)] = inst_45790__$1);

return statearr_45834;
})();
if(cljs.core.truth_(inst_45790__$1)){
var statearr_45835_47747 = state_45819__$1;
(statearr_45835_47747[(1)] = (29));

} else {
var statearr_45836_47748 = state_45819__$1;
(statearr_45836_47748[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (4))){
var inst_45731 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
if(cljs.core.truth_(inst_45731)){
var statearr_45837_47749 = state_45819__$1;
(statearr_45837_47749[(1)] = (8));

} else {
var statearr_45838_47750 = state_45819__$1;
(statearr_45838_47750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (15))){
var inst_45758 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
if(cljs.core.truth_(inst_45758)){
var statearr_45839_47751 = state_45819__$1;
(statearr_45839_47751[(1)] = (19));

} else {
var statearr_45842_47754 = state_45819__$1;
(statearr_45842_47754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (21))){
var inst_45763 = (state_45819[(12)]);
var inst_45763__$1 = (state_45819[(2)]);
var inst_45764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45763__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45763__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45763__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45819__$1 = (function (){var statearr_45846 = state_45819;
(statearr_45846[(12)] = inst_45763__$1);

(statearr_45846[(13)] = inst_45765);

(statearr_45846[(11)] = inst_45764);

return statearr_45846;
})();
return cljs.core.async.ioc_alts_BANG_(state_45819__$1,(22),inst_45766);
} else {
if((state_val_45820 === (31))){
var inst_45800 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
if(cljs.core.truth_(inst_45800)){
var statearr_45854_47756 = state_45819__$1;
(statearr_45854_47756[(1)] = (32));

} else {
var statearr_45855_47757 = state_45819__$1;
(statearr_45855_47757[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (32))){
var inst_45773 = (state_45819[(14)]);
var state_45819__$1 = state_45819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45819__$1,(35),out,inst_45773);
} else {
if((state_val_45820 === (33))){
var inst_45763 = (state_45819[(12)]);
var inst_45740 = inst_45763;
var state_45819__$1 = (function (){var statearr_45861 = state_45819;
(statearr_45861[(7)] = inst_45740);

return statearr_45861;
})();
var statearr_45862_47759 = state_45819__$1;
(statearr_45862_47759[(2)] = null);

(statearr_45862_47759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (13))){
var inst_45740 = (state_45819[(7)]);
var inst_45747 = inst_45740.cljs$lang$protocol_mask$partition0$;
var inst_45748 = (inst_45747 & (64));
var inst_45749 = inst_45740.cljs$core$ISeq$;
var inst_45750 = (cljs.core.PROTOCOL_SENTINEL === inst_45749);
var inst_45751 = ((inst_45748) || (inst_45750));
var state_45819__$1 = state_45819;
if(cljs.core.truth_(inst_45751)){
var statearr_45866_47763 = state_45819__$1;
(statearr_45866_47763[(1)] = (16));

} else {
var statearr_45867_47764 = state_45819__$1;
(statearr_45867_47764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (22))){
var inst_45773 = (state_45819[(14)]);
var inst_45774 = (state_45819[(9)]);
var inst_45772 = (state_45819[(2)]);
var inst_45773__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45772,(0),null);
var inst_45774__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45772,(1),null);
var inst_45777 = (inst_45773__$1 == null);
var inst_45778 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45774__$1,change);
var inst_45779 = ((inst_45777) || (inst_45778));
var state_45819__$1 = (function (){var statearr_45868 = state_45819;
(statearr_45868[(14)] = inst_45773__$1);

(statearr_45868[(9)] = inst_45774__$1);

return statearr_45868;
})();
if(cljs.core.truth_(inst_45779)){
var statearr_45869_47771 = state_45819__$1;
(statearr_45869_47771[(1)] = (23));

} else {
var statearr_45870_47772 = state_45819__$1;
(statearr_45870_47772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (36))){
var inst_45763 = (state_45819[(12)]);
var inst_45740 = inst_45763;
var state_45819__$1 = (function (){var statearr_45871 = state_45819;
(statearr_45871[(7)] = inst_45740);

return statearr_45871;
})();
var statearr_45872_47775 = state_45819__$1;
(statearr_45872_47775[(2)] = null);

(statearr_45872_47775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (29))){
var inst_45790 = (state_45819[(10)]);
var state_45819__$1 = state_45819;
var statearr_45873_47778 = state_45819__$1;
(statearr_45873_47778[(2)] = inst_45790);

(statearr_45873_47778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (6))){
var state_45819__$1 = state_45819;
var statearr_45875_47779 = state_45819__$1;
(statearr_45875_47779[(2)] = false);

(statearr_45875_47779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (28))){
var inst_45786 = (state_45819[(2)]);
var inst_45787 = calc_state();
var inst_45740 = inst_45787;
var state_45819__$1 = (function (){var statearr_45876 = state_45819;
(statearr_45876[(15)] = inst_45786);

(statearr_45876[(7)] = inst_45740);

return statearr_45876;
})();
var statearr_45877_47786 = state_45819__$1;
(statearr_45877_47786[(2)] = null);

(statearr_45877_47786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (25))){
var inst_45815 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
var statearr_45878_47787 = state_45819__$1;
(statearr_45878_47787[(2)] = inst_45815);

(statearr_45878_47787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (34))){
var inst_45813 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
var statearr_45879_47792 = state_45819__$1;
(statearr_45879_47792[(2)] = inst_45813);

(statearr_45879_47792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (17))){
var state_45819__$1 = state_45819;
var statearr_45883_47793 = state_45819__$1;
(statearr_45883_47793[(2)] = false);

(statearr_45883_47793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (3))){
var state_45819__$1 = state_45819;
var statearr_45884_47794 = state_45819__$1;
(statearr_45884_47794[(2)] = false);

(statearr_45884_47794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (12))){
var inst_45817 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45819__$1,inst_45817);
} else {
if((state_val_45820 === (2))){
var inst_45713 = (state_45819[(8)]);
var inst_45720 = inst_45713.cljs$lang$protocol_mask$partition0$;
var inst_45721 = (inst_45720 & (64));
var inst_45722 = inst_45713.cljs$core$ISeq$;
var inst_45723 = (cljs.core.PROTOCOL_SENTINEL === inst_45722);
var inst_45724 = ((inst_45721) || (inst_45723));
var state_45819__$1 = state_45819;
if(cljs.core.truth_(inst_45724)){
var statearr_45887_47800 = state_45819__$1;
(statearr_45887_47800[(1)] = (5));

} else {
var statearr_45888_47801 = state_45819__$1;
(statearr_45888_47801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (23))){
var inst_45773 = (state_45819[(14)]);
var inst_45781 = (inst_45773 == null);
var state_45819__$1 = state_45819;
if(cljs.core.truth_(inst_45781)){
var statearr_45889_47806 = state_45819__$1;
(statearr_45889_47806[(1)] = (26));

} else {
var statearr_45890_47807 = state_45819__$1;
(statearr_45890_47807[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (35))){
var inst_45804 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
if(cljs.core.truth_(inst_45804)){
var statearr_45891_47810 = state_45819__$1;
(statearr_45891_47810[(1)] = (36));

} else {
var statearr_45892_47811 = state_45819__$1;
(statearr_45892_47811[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (19))){
var inst_45740 = (state_45819[(7)]);
var inst_45760 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45740);
var state_45819__$1 = state_45819;
var statearr_45893_47813 = state_45819__$1;
(statearr_45893_47813[(2)] = inst_45760);

(statearr_45893_47813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (11))){
var inst_45740 = (state_45819[(7)]);
var inst_45744 = (inst_45740 == null);
var inst_45745 = cljs.core.not(inst_45744);
var state_45819__$1 = state_45819;
if(inst_45745){
var statearr_45894_47814 = state_45819__$1;
(statearr_45894_47814[(1)] = (13));

} else {
var statearr_45895_47815 = state_45819__$1;
(statearr_45895_47815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (9))){
var inst_45713 = (state_45819[(8)]);
var state_45819__$1 = state_45819;
var statearr_45896_47816 = state_45819__$1;
(statearr_45896_47816[(2)] = inst_45713);

(statearr_45896_47816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (5))){
var state_45819__$1 = state_45819;
var statearr_45897_47817 = state_45819__$1;
(statearr_45897_47817[(2)] = true);

(statearr_45897_47817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (14))){
var state_45819__$1 = state_45819;
var statearr_45898_47818 = state_45819__$1;
(statearr_45898_47818[(2)] = false);

(statearr_45898_47818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (26))){
var inst_45774 = (state_45819[(9)]);
var inst_45783 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45774);
var state_45819__$1 = state_45819;
var statearr_45899_47820 = state_45819__$1;
(statearr_45899_47820[(2)] = inst_45783);

(statearr_45899_47820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (16))){
var state_45819__$1 = state_45819;
var statearr_45901_47822 = state_45819__$1;
(statearr_45901_47822[(2)] = true);

(statearr_45901_47822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (38))){
var inst_45809 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
var statearr_45902_47825 = state_45819__$1;
(statearr_45902_47825[(2)] = inst_45809);

(statearr_45902_47825[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (30))){
var inst_45774 = (state_45819[(9)]);
var inst_45765 = (state_45819[(13)]);
var inst_45764 = (state_45819[(11)]);
var inst_45794 = cljs.core.empty_QMARK_(inst_45764);
var inst_45795 = (inst_45765.cljs$core$IFn$_invoke$arity$1 ? inst_45765.cljs$core$IFn$_invoke$arity$1(inst_45774) : inst_45765.call(null,inst_45774));
var inst_45796 = cljs.core.not(inst_45795);
var inst_45797 = ((inst_45794) && (inst_45796));
var state_45819__$1 = state_45819;
var statearr_45903_47826 = state_45819__$1;
(statearr_45903_47826[(2)] = inst_45797);

(statearr_45903_47826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (10))){
var inst_45713 = (state_45819[(8)]);
var inst_45736 = (state_45819[(2)]);
var inst_45737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45736,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45736,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45736,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45740 = inst_45713;
var state_45819__$1 = (function (){var statearr_45904 = state_45819;
(statearr_45904[(16)] = inst_45739);

(statearr_45904[(17)] = inst_45738);

(statearr_45904[(18)] = inst_45737);

(statearr_45904[(7)] = inst_45740);

return statearr_45904;
})();
var statearr_45905_47831 = state_45819__$1;
(statearr_45905_47831[(2)] = null);

(statearr_45905_47831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (18))){
var inst_45755 = (state_45819[(2)]);
var state_45819__$1 = state_45819;
var statearr_45906_47832 = state_45819__$1;
(statearr_45906_47832[(2)] = inst_45755);

(statearr_45906_47832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (37))){
var state_45819__$1 = state_45819;
var statearr_45907_47833 = state_45819__$1;
(statearr_45907_47833[(2)] = null);

(statearr_45907_47833[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45820 === (8))){
var inst_45713 = (state_45819[(8)]);
var inst_45733 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45713);
var state_45819__$1 = state_45819;
var statearr_45913_47834 = state_45819__$1;
(statearr_45913_47834[(2)] = inst_45733);

(statearr_45913_47834[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__44155__auto__ = null;
var cljs$core$async$mix_$_state_machine__44155__auto____0 = (function (){
var statearr_45915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45915[(0)] = cljs$core$async$mix_$_state_machine__44155__auto__);

(statearr_45915[(1)] = (1));

return statearr_45915;
});
var cljs$core$async$mix_$_state_machine__44155__auto____1 = (function (state_45819){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_45819);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e45916){var ex__44158__auto__ = e45916;
var statearr_45917_47837 = state_45819;
(statearr_45917_47837[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_45819[(4)]))){
var statearr_45918_47839 = state_45819;
(statearr_45918_47839[(1)] = cljs.core.first((state_45819[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47840 = state_45819;
state_45819 = G__47840;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44155__auto__ = function(state_45819){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44155__auto____1.call(this,state_45819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44155__auto____0;
cljs$core$async$mix_$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44155__auto____1;
return cljs$core$async$mix_$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_45919 = f__44349__auto__();
(statearr_45919[(6)] = c__44347__auto___47711);

return statearr_45919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47846 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_47846(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47857 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_47857(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47859 = (function() {
var G__47860 = null;
var G__47860__1 = (function (p){
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
var G__47860__2 = (function (p,v){
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
G__47860 = function(p,v){
switch(arguments.length){
case 1:
return G__47860__1.call(this,p);
case 2:
return G__47860__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47860.cljs$core$IFn$_invoke$arity$1 = G__47860__1;
G__47860.cljs$core$IFn$_invoke$arity$2 = G__47860__2;
return G__47860;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45935 = arguments.length;
switch (G__45935) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47859(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47859(p,v);
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
var G__45944 = arguments.length;
switch (G__45944) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45938_SHARP_){
if(cljs.core.truth_((p1__45938_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45938_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45938_SHARP_.call(null,topic)))){
return p1__45938_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45938_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45947 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45948){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45948 = meta45948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45949,meta45948__$1){
var self__ = this;
var _45949__$1 = this;
return (new cljs.core.async.t_cljs$core$async45947(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45948__$1));
}));

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45949){
var self__ = this;
var _45949__$1 = this;
return self__.meta45948;
}));

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45948","meta45948",-1279759149,null)], null);
}));

(cljs.core.async.t_cljs$core$async45947.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45947");

(cljs.core.async.t_cljs$core$async45947.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45947");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45947.
 */
cljs.core.async.__GT_t_cljs$core$async45947 = (function cljs$core$async$__GT_t_cljs$core$async45947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45948){
return (new cljs.core.async.t_cljs$core$async45947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45948));
});

}

return (new cljs.core.async.t_cljs$core$async45947(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44347__auto___47874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46039){
var state_val_46040 = (state_46039[(1)]);
if((state_val_46040 === (7))){
var inst_46035 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46050_47875 = state_46039__$1;
(statearr_46050_47875[(2)] = inst_46035);

(statearr_46050_47875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (20))){
var state_46039__$1 = state_46039;
var statearr_46051_47876 = state_46039__$1;
(statearr_46051_47876[(2)] = null);

(statearr_46051_47876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (1))){
var state_46039__$1 = state_46039;
var statearr_46057_47877 = state_46039__$1;
(statearr_46057_47877[(2)] = null);

(statearr_46057_47877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (24))){
var inst_46017 = (state_46039[(7)]);
var inst_46027 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46017);
var state_46039__$1 = state_46039;
var statearr_46058_47878 = state_46039__$1;
(statearr_46058_47878[(2)] = inst_46027);

(statearr_46058_47878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (4))){
var inst_45955 = (state_46039[(8)]);
var inst_45955__$1 = (state_46039[(2)]);
var inst_45956 = (inst_45955__$1 == null);
var state_46039__$1 = (function (){var statearr_46059 = state_46039;
(statearr_46059[(8)] = inst_45955__$1);

return statearr_46059;
})();
if(cljs.core.truth_(inst_45956)){
var statearr_46060_47880 = state_46039__$1;
(statearr_46060_47880[(1)] = (5));

} else {
var statearr_46061_47881 = state_46039__$1;
(statearr_46061_47881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (15))){
var inst_46011 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46062_47882 = state_46039__$1;
(statearr_46062_47882[(2)] = inst_46011);

(statearr_46062_47882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (21))){
var inst_46032 = (state_46039[(2)]);
var state_46039__$1 = (function (){var statearr_46063 = state_46039;
(statearr_46063[(9)] = inst_46032);

return statearr_46063;
})();
var statearr_46064_47884 = state_46039__$1;
(statearr_46064_47884[(2)] = null);

(statearr_46064_47884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (13))){
var inst_45987 = (state_46039[(10)]);
var inst_45990 = cljs.core.chunked_seq_QMARK_(inst_45987);
var state_46039__$1 = state_46039;
if(inst_45990){
var statearr_46065_47885 = state_46039__$1;
(statearr_46065_47885[(1)] = (16));

} else {
var statearr_46066_47886 = state_46039__$1;
(statearr_46066_47886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (22))){
var inst_46024 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
if(cljs.core.truth_(inst_46024)){
var statearr_46067_47887 = state_46039__$1;
(statearr_46067_47887[(1)] = (23));

} else {
var statearr_46068_47888 = state_46039__$1;
(statearr_46068_47888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (6))){
var inst_45955 = (state_46039[(8)]);
var inst_46019 = (state_46039[(11)]);
var inst_46017 = (state_46039[(7)]);
var inst_46017__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45955) : topic_fn.call(null,inst_45955));
var inst_46018 = cljs.core.deref(mults);
var inst_46019__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46018,inst_46017__$1);
var state_46039__$1 = (function (){var statearr_46069 = state_46039;
(statearr_46069[(11)] = inst_46019__$1);

(statearr_46069[(7)] = inst_46017__$1);

return statearr_46069;
})();
if(cljs.core.truth_(inst_46019__$1)){
var statearr_46070_47892 = state_46039__$1;
(statearr_46070_47892[(1)] = (19));

} else {
var statearr_46071_47893 = state_46039__$1;
(statearr_46071_47893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (25))){
var inst_46029 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46072_47898 = state_46039__$1;
(statearr_46072_47898[(2)] = inst_46029);

(statearr_46072_47898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (17))){
var inst_45987 = (state_46039[(10)]);
var inst_46002 = cljs.core.first(inst_45987);
var inst_46003 = cljs.core.async.muxch_STAR_(inst_46002);
var inst_46004 = cljs.core.async.close_BANG_(inst_46003);
var inst_46005 = cljs.core.next(inst_45987);
var inst_45965 = inst_46005;
var inst_45966 = null;
var inst_45967 = (0);
var inst_45968 = (0);
var state_46039__$1 = (function (){var statearr_46073 = state_46039;
(statearr_46073[(12)] = inst_45967);

(statearr_46073[(13)] = inst_45966);

(statearr_46073[(14)] = inst_45965);

(statearr_46073[(15)] = inst_46004);

(statearr_46073[(16)] = inst_45968);

return statearr_46073;
})();
var statearr_46074_47902 = state_46039__$1;
(statearr_46074_47902[(2)] = null);

(statearr_46074_47902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (3))){
var inst_46037 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46039__$1,inst_46037);
} else {
if((state_val_46040 === (12))){
var inst_46013 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46075_47903 = state_46039__$1;
(statearr_46075_47903[(2)] = inst_46013);

(statearr_46075_47903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (2))){
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46039__$1,(4),ch);
} else {
if((state_val_46040 === (23))){
var state_46039__$1 = state_46039;
var statearr_46076_47904 = state_46039__$1;
(statearr_46076_47904[(2)] = null);

(statearr_46076_47904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (19))){
var inst_45955 = (state_46039[(8)]);
var inst_46019 = (state_46039[(11)]);
var inst_46022 = cljs.core.async.muxch_STAR_(inst_46019);
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46039__$1,(22),inst_46022,inst_45955);
} else {
if((state_val_46040 === (11))){
var inst_45987 = (state_46039[(10)]);
var inst_45965 = (state_46039[(14)]);
var inst_45987__$1 = cljs.core.seq(inst_45965);
var state_46039__$1 = (function (){var statearr_46078 = state_46039;
(statearr_46078[(10)] = inst_45987__$1);

return statearr_46078;
})();
if(inst_45987__$1){
var statearr_46079_47908 = state_46039__$1;
(statearr_46079_47908[(1)] = (13));

} else {
var statearr_46080_47909 = state_46039__$1;
(statearr_46080_47909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (9))){
var inst_46015 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46084_47912 = state_46039__$1;
(statearr_46084_47912[(2)] = inst_46015);

(statearr_46084_47912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (5))){
var inst_45962 = cljs.core.deref(mults);
var inst_45963 = cljs.core.vals(inst_45962);
var inst_45964 = cljs.core.seq(inst_45963);
var inst_45965 = inst_45964;
var inst_45966 = null;
var inst_45967 = (0);
var inst_45968 = (0);
var state_46039__$1 = (function (){var statearr_46088 = state_46039;
(statearr_46088[(12)] = inst_45967);

(statearr_46088[(13)] = inst_45966);

(statearr_46088[(14)] = inst_45965);

(statearr_46088[(16)] = inst_45968);

return statearr_46088;
})();
var statearr_46089_47916 = state_46039__$1;
(statearr_46089_47916[(2)] = null);

(statearr_46089_47916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (14))){
var state_46039__$1 = state_46039;
var statearr_46095_47917 = state_46039__$1;
(statearr_46095_47917[(2)] = null);

(statearr_46095_47917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (16))){
var inst_45987 = (state_46039[(10)]);
var inst_45997 = cljs.core.chunk_first(inst_45987);
var inst_45998 = cljs.core.chunk_rest(inst_45987);
var inst_45999 = cljs.core.count(inst_45997);
var inst_45965 = inst_45998;
var inst_45966 = inst_45997;
var inst_45967 = inst_45999;
var inst_45968 = (0);
var state_46039__$1 = (function (){var statearr_46096 = state_46039;
(statearr_46096[(12)] = inst_45967);

(statearr_46096[(13)] = inst_45966);

(statearr_46096[(14)] = inst_45965);

(statearr_46096[(16)] = inst_45968);

return statearr_46096;
})();
var statearr_46099_47921 = state_46039__$1;
(statearr_46099_47921[(2)] = null);

(statearr_46099_47921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (10))){
var inst_45967 = (state_46039[(12)]);
var inst_45966 = (state_46039[(13)]);
var inst_45965 = (state_46039[(14)]);
var inst_45968 = (state_46039[(16)]);
var inst_45977 = cljs.core._nth(inst_45966,inst_45968);
var inst_45978 = cljs.core.async.muxch_STAR_(inst_45977);
var inst_45979 = cljs.core.async.close_BANG_(inst_45978);
var inst_45980 = (inst_45968 + (1));
var tmp46092 = inst_45967;
var tmp46093 = inst_45966;
var tmp46094 = inst_45965;
var inst_45965__$1 = tmp46094;
var inst_45966__$1 = tmp46093;
var inst_45967__$1 = tmp46092;
var inst_45968__$1 = inst_45980;
var state_46039__$1 = (function (){var statearr_46104 = state_46039;
(statearr_46104[(12)] = inst_45967__$1);

(statearr_46104[(13)] = inst_45966__$1);

(statearr_46104[(17)] = inst_45979);

(statearr_46104[(14)] = inst_45965__$1);

(statearr_46104[(16)] = inst_45968__$1);

return statearr_46104;
})();
var statearr_46106_47924 = state_46039__$1;
(statearr_46106_47924[(2)] = null);

(statearr_46106_47924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (18))){
var inst_46008 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46107_47928 = state_46039__$1;
(statearr_46107_47928[(2)] = inst_46008);

(statearr_46107_47928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (8))){
var inst_45967 = (state_46039[(12)]);
var inst_45968 = (state_46039[(16)]);
var inst_45970 = (inst_45968 < inst_45967);
var inst_45971 = inst_45970;
var state_46039__$1 = state_46039;
if(cljs.core.truth_(inst_45971)){
var statearr_46110_47935 = state_46039__$1;
(statearr_46110_47935[(1)] = (10));

} else {
var statearr_46111_47936 = state_46039__$1;
(statearr_46111_47936[(1)] = (11));

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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46112[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46112[(1)] = (1));

return statearr_46112;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46039){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46039);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46113){var ex__44158__auto__ = e46113;
var statearr_46116_47944 = state_46039;
(statearr_46116_47944[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46039[(4)]))){
var statearr_46117_47945 = state_46039;
(statearr_46117_47945[(1)] = cljs.core.first((state_46039[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47946 = state_46039;
state_46039 = G__47946;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46118 = f__44349__auto__();
(statearr_46118[(6)] = c__44347__auto___47874);

return statearr_46118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
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
var G__46123 = arguments.length;
switch (G__46123) {
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
var G__46137 = arguments.length;
switch (G__46137) {
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
var G__46145 = arguments.length;
switch (G__46145) {
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
var c__44347__auto___47959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46188){
var state_val_46189 = (state_46188[(1)]);
if((state_val_46189 === (7))){
var state_46188__$1 = state_46188;
var statearr_46190_47960 = state_46188__$1;
(statearr_46190_47960[(2)] = null);

(statearr_46190_47960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (1))){
var state_46188__$1 = state_46188;
var statearr_46191_47961 = state_46188__$1;
(statearr_46191_47961[(2)] = null);

(statearr_46191_47961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (4))){
var inst_46148 = (state_46188[(7)]);
var inst_46149 = (state_46188[(8)]);
var inst_46151 = (inst_46149 < inst_46148);
var state_46188__$1 = state_46188;
if(cljs.core.truth_(inst_46151)){
var statearr_46193_47968 = state_46188__$1;
(statearr_46193_47968[(1)] = (6));

} else {
var statearr_46194_47969 = state_46188__$1;
(statearr_46194_47969[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (15))){
var inst_46174 = (state_46188[(9)]);
var inst_46179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46174);
var state_46188__$1 = state_46188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46188__$1,(17),out,inst_46179);
} else {
if((state_val_46189 === (13))){
var inst_46174 = (state_46188[(9)]);
var inst_46174__$1 = (state_46188[(2)]);
var inst_46175 = cljs.core.some(cljs.core.nil_QMARK_,inst_46174__$1);
var state_46188__$1 = (function (){var statearr_46196 = state_46188;
(statearr_46196[(9)] = inst_46174__$1);

return statearr_46196;
})();
if(cljs.core.truth_(inst_46175)){
var statearr_46198_47971 = state_46188__$1;
(statearr_46198_47971[(1)] = (14));

} else {
var statearr_46199_47972 = state_46188__$1;
(statearr_46199_47972[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (6))){
var state_46188__$1 = state_46188;
var statearr_46201_47973 = state_46188__$1;
(statearr_46201_47973[(2)] = null);

(statearr_46201_47973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (17))){
var inst_46181 = (state_46188[(2)]);
var state_46188__$1 = (function (){var statearr_46205 = state_46188;
(statearr_46205[(10)] = inst_46181);

return statearr_46205;
})();
var statearr_46207_47974 = state_46188__$1;
(statearr_46207_47974[(2)] = null);

(statearr_46207_47974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (3))){
var inst_46186 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46188__$1,inst_46186);
} else {
if((state_val_46189 === (12))){
var _ = (function (){var statearr_46208 = state_46188;
(statearr_46208[(4)] = cljs.core.rest((state_46188[(4)])));

return statearr_46208;
})();
var state_46188__$1 = state_46188;
var ex46204 = (state_46188__$1[(2)]);
var statearr_46209_47983 = state_46188__$1;
(statearr_46209_47983[(5)] = ex46204);


if((ex46204 instanceof Object)){
var statearr_46212_47985 = state_46188__$1;
(statearr_46212_47985[(1)] = (11));

(statearr_46212_47985[(5)] = null);

} else {
throw ex46204;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (2))){
var inst_46147 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46148 = cnt;
var inst_46149 = (0);
var state_46188__$1 = (function (){var statearr_46216 = state_46188;
(statearr_46216[(7)] = inst_46148);

(statearr_46216[(11)] = inst_46147);

(statearr_46216[(8)] = inst_46149);

return statearr_46216;
})();
var statearr_46217_47988 = state_46188__$1;
(statearr_46217_47988[(2)] = null);

(statearr_46217_47988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (11))){
var inst_46153 = (state_46188[(2)]);
var inst_46154 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46188__$1 = (function (){var statearr_46219 = state_46188;
(statearr_46219[(12)] = inst_46153);

return statearr_46219;
})();
var statearr_46220_47989 = state_46188__$1;
(statearr_46220_47989[(2)] = inst_46154);

(statearr_46220_47989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (9))){
var inst_46149 = (state_46188[(8)]);
var _ = (function (){var statearr_46221 = state_46188;
(statearr_46221[(4)] = cljs.core.cons((12),(state_46188[(4)])));

return statearr_46221;
})();
var inst_46160 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46149) : chs__$1.call(null,inst_46149));
var inst_46161 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46149) : done.call(null,inst_46149));
var inst_46162 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46160,inst_46161);
var ___$1 = (function (){var statearr_46222 = state_46188;
(statearr_46222[(4)] = cljs.core.rest((state_46188[(4)])));

return statearr_46222;
})();
var state_46188__$1 = state_46188;
var statearr_46223_47991 = state_46188__$1;
(statearr_46223_47991[(2)] = inst_46162);

(statearr_46223_47991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (5))){
var inst_46172 = (state_46188[(2)]);
var state_46188__$1 = (function (){var statearr_46224 = state_46188;
(statearr_46224[(13)] = inst_46172);

return statearr_46224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46188__$1,(13),dchan);
} else {
if((state_val_46189 === (14))){
var inst_46177 = cljs.core.async.close_BANG_(out);
var state_46188__$1 = state_46188;
var statearr_46225_47994 = state_46188__$1;
(statearr_46225_47994[(2)] = inst_46177);

(statearr_46225_47994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (16))){
var inst_46184 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
var statearr_46226_47997 = state_46188__$1;
(statearr_46226_47997[(2)] = inst_46184);

(statearr_46226_47997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (10))){
var inst_46149 = (state_46188[(8)]);
var inst_46165 = (state_46188[(2)]);
var inst_46166 = (inst_46149 + (1));
var inst_46149__$1 = inst_46166;
var state_46188__$1 = (function (){var statearr_46227 = state_46188;
(statearr_46227[(14)] = inst_46165);

(statearr_46227[(8)] = inst_46149__$1);

return statearr_46227;
})();
var statearr_46228_48001 = state_46188__$1;
(statearr_46228_48001[(2)] = null);

(statearr_46228_48001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (8))){
var inst_46170 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
var statearr_46229_48002 = state_46188__$1;
(statearr_46229_48002[(2)] = inst_46170);

(statearr_46229_48002[(1)] = (5));


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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46232[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46232[(1)] = (1));

return statearr_46232;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46188){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46188);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46233){var ex__44158__auto__ = e46233;
var statearr_46234_48003 = state_46188;
(statearr_46234_48003[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46188[(4)]))){
var statearr_46239_48004 = state_46188;
(statearr_46239_48004[(1)] = cljs.core.first((state_46188[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48006 = state_46188;
state_46188 = G__48006;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46245 = f__44349__auto__();
(statearr_46245[(6)] = c__44347__auto___47959);

return statearr_46245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
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
var G__46261 = arguments.length;
switch (G__46261) {
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
var c__44347__auto___48015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46295){
var state_val_46296 = (state_46295[(1)]);
if((state_val_46296 === (7))){
var inst_46274 = (state_46295[(7)]);
var inst_46275 = (state_46295[(8)]);
var inst_46274__$1 = (state_46295[(2)]);
var inst_46275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46274__$1,(0),null);
var inst_46276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46274__$1,(1),null);
var inst_46277 = (inst_46275__$1 == null);
var state_46295__$1 = (function (){var statearr_46297 = state_46295;
(statearr_46297[(7)] = inst_46274__$1);

(statearr_46297[(8)] = inst_46275__$1);

(statearr_46297[(9)] = inst_46276);

return statearr_46297;
})();
if(cljs.core.truth_(inst_46277)){
var statearr_46298_48016 = state_46295__$1;
(statearr_46298_48016[(1)] = (8));

} else {
var statearr_46299_48017 = state_46295__$1;
(statearr_46299_48017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46296 === (1))){
var inst_46263 = cljs.core.vec(chs);
var inst_46264 = inst_46263;
var state_46295__$1 = (function (){var statearr_46300 = state_46295;
(statearr_46300[(10)] = inst_46264);

return statearr_46300;
})();
var statearr_46301_48018 = state_46295__$1;
(statearr_46301_48018[(2)] = null);

(statearr_46301_48018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46296 === (4))){
var inst_46264 = (state_46295[(10)]);
var state_46295__$1 = state_46295;
return cljs.core.async.ioc_alts_BANG_(state_46295__$1,(7),inst_46264);
} else {
if((state_val_46296 === (6))){
var inst_46291 = (state_46295[(2)]);
var state_46295__$1 = state_46295;
var statearr_46302_48019 = state_46295__$1;
(statearr_46302_48019[(2)] = inst_46291);

(statearr_46302_48019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46296 === (3))){
var inst_46293 = (state_46295[(2)]);
var state_46295__$1 = state_46295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46295__$1,inst_46293);
} else {
if((state_val_46296 === (2))){
var inst_46264 = (state_46295[(10)]);
var inst_46266 = cljs.core.count(inst_46264);
var inst_46267 = (inst_46266 > (0));
var state_46295__$1 = state_46295;
if(cljs.core.truth_(inst_46267)){
var statearr_46304_48022 = state_46295__$1;
(statearr_46304_48022[(1)] = (4));

} else {
var statearr_46305_48027 = state_46295__$1;
(statearr_46305_48027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46296 === (11))){
var inst_46264 = (state_46295[(10)]);
var inst_46284 = (state_46295[(2)]);
var tmp46303 = inst_46264;
var inst_46264__$1 = tmp46303;
var state_46295__$1 = (function (){var statearr_46306 = state_46295;
(statearr_46306[(11)] = inst_46284);

(statearr_46306[(10)] = inst_46264__$1);

return statearr_46306;
})();
var statearr_46307_48029 = state_46295__$1;
(statearr_46307_48029[(2)] = null);

(statearr_46307_48029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46296 === (9))){
var inst_46275 = (state_46295[(8)]);
var state_46295__$1 = state_46295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46295__$1,(11),out,inst_46275);
} else {
if((state_val_46296 === (5))){
var inst_46289 = cljs.core.async.close_BANG_(out);
var state_46295__$1 = state_46295;
var statearr_46310_48031 = state_46295__$1;
(statearr_46310_48031[(2)] = inst_46289);

(statearr_46310_48031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46296 === (10))){
var inst_46287 = (state_46295[(2)]);
var state_46295__$1 = state_46295;
var statearr_46311_48034 = state_46295__$1;
(statearr_46311_48034[(2)] = inst_46287);

(statearr_46311_48034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46296 === (8))){
var inst_46274 = (state_46295[(7)]);
var inst_46264 = (state_46295[(10)]);
var inst_46275 = (state_46295[(8)]);
var inst_46276 = (state_46295[(9)]);
var inst_46279 = (function (){var cs = inst_46264;
var vec__46270 = inst_46274;
var v = inst_46275;
var c = inst_46276;
return (function (p1__46255_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46255_SHARP_);
});
})();
var inst_46280 = cljs.core.filterv(inst_46279,inst_46264);
var inst_46264__$1 = inst_46280;
var state_46295__$1 = (function (){var statearr_46312 = state_46295;
(statearr_46312[(10)] = inst_46264__$1);

return statearr_46312;
})();
var statearr_46313_48041 = state_46295__$1;
(statearr_46313_48041[(2)] = null);

(statearr_46313_48041[(1)] = (2));


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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46318[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46318[(1)] = (1));

return statearr_46318;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46295){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46295);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46319){var ex__44158__auto__ = e46319;
var statearr_46320_48044 = state_46295;
(statearr_46320_48044[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46295[(4)]))){
var statearr_46321_48045 = state_46295;
(statearr_46321_48045[(1)] = cljs.core.first((state_46295[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48046 = state_46295;
state_46295 = G__48046;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46322 = f__44349__auto__();
(statearr_46322[(6)] = c__44347__auto___48015);

return statearr_46322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
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
var G__46336 = arguments.length;
switch (G__46336) {
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
var c__44347__auto___48053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46362){
var state_val_46363 = (state_46362[(1)]);
if((state_val_46363 === (7))){
var inst_46344 = (state_46362[(7)]);
var inst_46344__$1 = (state_46362[(2)]);
var inst_46345 = (inst_46344__$1 == null);
var inst_46346 = cljs.core.not(inst_46345);
var state_46362__$1 = (function (){var statearr_46366 = state_46362;
(statearr_46366[(7)] = inst_46344__$1);

return statearr_46366;
})();
if(inst_46346){
var statearr_46368_48056 = state_46362__$1;
(statearr_46368_48056[(1)] = (8));

} else {
var statearr_46369_48057 = state_46362__$1;
(statearr_46369_48057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (1))){
var inst_46339 = (0);
var state_46362__$1 = (function (){var statearr_46371 = state_46362;
(statearr_46371[(8)] = inst_46339);

return statearr_46371;
})();
var statearr_46372_48060 = state_46362__$1;
(statearr_46372_48060[(2)] = null);

(statearr_46372_48060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (4))){
var state_46362__$1 = state_46362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46362__$1,(7),ch);
} else {
if((state_val_46363 === (6))){
var inst_46357 = (state_46362[(2)]);
var state_46362__$1 = state_46362;
var statearr_46373_48063 = state_46362__$1;
(statearr_46373_48063[(2)] = inst_46357);

(statearr_46373_48063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (3))){
var inst_46359 = (state_46362[(2)]);
var inst_46360 = cljs.core.async.close_BANG_(out);
var state_46362__$1 = (function (){var statearr_46374 = state_46362;
(statearr_46374[(9)] = inst_46359);

return statearr_46374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46362__$1,inst_46360);
} else {
if((state_val_46363 === (2))){
var inst_46339 = (state_46362[(8)]);
var inst_46341 = (inst_46339 < n);
var state_46362__$1 = state_46362;
if(cljs.core.truth_(inst_46341)){
var statearr_46375_48065 = state_46362__$1;
(statearr_46375_48065[(1)] = (4));

} else {
var statearr_46376_48066 = state_46362__$1;
(statearr_46376_48066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (11))){
var inst_46339 = (state_46362[(8)]);
var inst_46349 = (state_46362[(2)]);
var inst_46350 = (inst_46339 + (1));
var inst_46339__$1 = inst_46350;
var state_46362__$1 = (function (){var statearr_46381 = state_46362;
(statearr_46381[(8)] = inst_46339__$1);

(statearr_46381[(10)] = inst_46349);

return statearr_46381;
})();
var statearr_46382_48067 = state_46362__$1;
(statearr_46382_48067[(2)] = null);

(statearr_46382_48067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (9))){
var state_46362__$1 = state_46362;
var statearr_46383_48068 = state_46362__$1;
(statearr_46383_48068[(2)] = null);

(statearr_46383_48068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (5))){
var state_46362__$1 = state_46362;
var statearr_46384_48069 = state_46362__$1;
(statearr_46384_48069[(2)] = null);

(statearr_46384_48069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (10))){
var inst_46354 = (state_46362[(2)]);
var state_46362__$1 = state_46362;
var statearr_46389_48070 = state_46362__$1;
(statearr_46389_48070[(2)] = inst_46354);

(statearr_46389_48070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46363 === (8))){
var inst_46344 = (state_46362[(7)]);
var state_46362__$1 = state_46362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46362__$1,(11),out,inst_46344);
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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46392[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46392[(1)] = (1));

return statearr_46392;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46362){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46362);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46393){var ex__44158__auto__ = e46393;
var statearr_46394_48072 = state_46362;
(statearr_46394_48072[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46362[(4)]))){
var statearr_46395_48073 = state_46362;
(statearr_46395_48073[(1)] = cljs.core.first((state_46362[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48074 = state_46362;
state_46362 = G__48074;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46400 = f__44349__auto__();
(statearr_46400[(6)] = c__44347__auto___48053);

return statearr_46400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46404 = (function (f,ch,meta46405){
this.f = f;
this.ch = ch;
this.meta46405 = meta46405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46406,meta46405__$1){
var self__ = this;
var _46406__$1 = this;
return (new cljs.core.async.t_cljs$core$async46404(self__.f,self__.ch,meta46405__$1));
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46406){
var self__ = this;
var _46406__$1 = this;
return self__.meta46405;
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46417 = (function (f,ch,meta46405,_,fn1,meta46418){
this.f = f;
this.ch = ch;
this.meta46405 = meta46405;
this._ = _;
this.fn1 = fn1;
this.meta46418 = meta46418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46419,meta46418__$1){
var self__ = this;
var _46419__$1 = this;
return (new cljs.core.async.t_cljs$core$async46417(self__.f,self__.ch,self__.meta46405,self__._,self__.fn1,meta46418__$1));
}));

(cljs.core.async.t_cljs$core$async46417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46419){
var self__ = this;
var _46419__$1 = this;
return self__.meta46418;
}));

(cljs.core.async.t_cljs$core$async46417.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46401_SHARP_){
var G__46430 = (((p1__46401_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46401_SHARP_) : self__.f.call(null,p1__46401_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46430) : f1.call(null,G__46430));
});
}));

(cljs.core.async.t_cljs$core$async46417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46405","meta46405",-289815137,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46404","cljs.core.async/t_cljs$core$async46404",1145620870,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46418","meta46418",-190784159,null)], null);
}));

(cljs.core.async.t_cljs$core$async46417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46417");

(cljs.core.async.t_cljs$core$async46417.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46417.
 */
cljs.core.async.__GT_t_cljs$core$async46417 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46417(f__$1,ch__$1,meta46405__$1,___$2,fn1__$1,meta46418){
return (new cljs.core.async.t_cljs$core$async46417(f__$1,ch__$1,meta46405__$1,___$2,fn1__$1,meta46418));
});

}

return (new cljs.core.async.t_cljs$core$async46417(self__.f,self__.ch,self__.meta46405,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46434 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46434) : self__.f.call(null,G__46434));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46405","meta46405",-289815137,null)], null);
}));

(cljs.core.async.t_cljs$core$async46404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46404");

(cljs.core.async.t_cljs$core$async46404.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46404.
 */
cljs.core.async.__GT_t_cljs$core$async46404 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46404(f__$1,ch__$1,meta46405){
return (new cljs.core.async.t_cljs$core$async46404(f__$1,ch__$1,meta46405));
});

}

return (new cljs.core.async.t_cljs$core$async46404(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46436 = (function (f,ch,meta46437){
this.f = f;
this.ch = ch;
this.meta46437 = meta46437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46438,meta46437__$1){
var self__ = this;
var _46438__$1 = this;
return (new cljs.core.async.t_cljs$core$async46436(self__.f,self__.ch,meta46437__$1));
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46438){
var self__ = this;
var _46438__$1 = this;
return self__.meta46437;
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46437","meta46437",153453670,null)], null);
}));

(cljs.core.async.t_cljs$core$async46436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46436");

(cljs.core.async.t_cljs$core$async46436.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46436.
 */
cljs.core.async.__GT_t_cljs$core$async46436 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46436(f__$1,ch__$1,meta46437){
return (new cljs.core.async.t_cljs$core$async46436(f__$1,ch__$1,meta46437));
});

}

return (new cljs.core.async.t_cljs$core$async46436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46443 = (function (p,ch,meta46444){
this.p = p;
this.ch = ch;
this.meta46444 = meta46444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46445,meta46444__$1){
var self__ = this;
var _46445__$1 = this;
return (new cljs.core.async.t_cljs$core$async46443(self__.p,self__.ch,meta46444__$1));
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46445){
var self__ = this;
var _46445__$1 = this;
return self__.meta46444;
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46444","meta46444",1533396293,null)], null);
}));

(cljs.core.async.t_cljs$core$async46443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46443");

(cljs.core.async.t_cljs$core$async46443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46443.
 */
cljs.core.async.__GT_t_cljs$core$async46443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46443(p__$1,ch__$1,meta46444){
return (new cljs.core.async.t_cljs$core$async46443(p__$1,ch__$1,meta46444));
});

}

return (new cljs.core.async.t_cljs$core$async46443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46451 = arguments.length;
switch (G__46451) {
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
var c__44347__auto___48138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46472){
var state_val_46473 = (state_46472[(1)]);
if((state_val_46473 === (7))){
var inst_46468 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
var statearr_46474_48140 = state_46472__$1;
(statearr_46474_48140[(2)] = inst_46468);

(statearr_46474_48140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (1))){
var state_46472__$1 = state_46472;
var statearr_46475_48145 = state_46472__$1;
(statearr_46475_48145[(2)] = null);

(statearr_46475_48145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (4))){
var inst_46454 = (state_46472[(7)]);
var inst_46454__$1 = (state_46472[(2)]);
var inst_46455 = (inst_46454__$1 == null);
var state_46472__$1 = (function (){var statearr_46476 = state_46472;
(statearr_46476[(7)] = inst_46454__$1);

return statearr_46476;
})();
if(cljs.core.truth_(inst_46455)){
var statearr_46477_48150 = state_46472__$1;
(statearr_46477_48150[(1)] = (5));

} else {
var statearr_46478_48151 = state_46472__$1;
(statearr_46478_48151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (6))){
var inst_46454 = (state_46472[(7)]);
var inst_46459 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46454) : p.call(null,inst_46454));
var state_46472__$1 = state_46472;
if(cljs.core.truth_(inst_46459)){
var statearr_46479_48158 = state_46472__$1;
(statearr_46479_48158[(1)] = (8));

} else {
var statearr_46480_48160 = state_46472__$1;
(statearr_46480_48160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (3))){
var inst_46470 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46472__$1,inst_46470);
} else {
if((state_val_46473 === (2))){
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46472__$1,(4),ch);
} else {
if((state_val_46473 === (11))){
var inst_46462 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
var statearr_46481_48161 = state_46472__$1;
(statearr_46481_48161[(2)] = inst_46462);

(statearr_46481_48161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (9))){
var state_46472__$1 = state_46472;
var statearr_46482_48167 = state_46472__$1;
(statearr_46482_48167[(2)] = null);

(statearr_46482_48167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (5))){
var inst_46457 = cljs.core.async.close_BANG_(out);
var state_46472__$1 = state_46472;
var statearr_46483_48174 = state_46472__$1;
(statearr_46483_48174[(2)] = inst_46457);

(statearr_46483_48174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (10))){
var inst_46465 = (state_46472[(2)]);
var state_46472__$1 = (function (){var statearr_46484 = state_46472;
(statearr_46484[(8)] = inst_46465);

return statearr_46484;
})();
var statearr_46485_48179 = state_46472__$1;
(statearr_46485_48179[(2)] = null);

(statearr_46485_48179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (8))){
var inst_46454 = (state_46472[(7)]);
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46472__$1,(11),out,inst_46454);
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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46486 = [null,null,null,null,null,null,null,null,null];
(statearr_46486[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46486[(1)] = (1));

return statearr_46486;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46472){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46472);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46487){var ex__44158__auto__ = e46487;
var statearr_46488_48182 = state_46472;
(statearr_46488_48182[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46472[(4)]))){
var statearr_46489_48183 = state_46472;
(statearr_46489_48183[(1)] = cljs.core.first((state_46472[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48185 = state_46472;
state_46472 = G__48185;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46490 = f__44349__auto__();
(statearr_46490[(6)] = c__44347__auto___48138);

return statearr_46490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46494 = arguments.length;
switch (G__46494) {
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
var c__44347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46560){
var state_val_46561 = (state_46560[(1)]);
if((state_val_46561 === (7))){
var inst_46556 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46566_48193 = state_46560__$1;
(statearr_46566_48193[(2)] = inst_46556);

(statearr_46566_48193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (20))){
var inst_46526 = (state_46560[(7)]);
var inst_46537 = (state_46560[(2)]);
var inst_46538 = cljs.core.next(inst_46526);
var inst_46512 = inst_46538;
var inst_46513 = null;
var inst_46514 = (0);
var inst_46515 = (0);
var state_46560__$1 = (function (){var statearr_46569 = state_46560;
(statearr_46569[(8)] = inst_46513);

(statearr_46569[(9)] = inst_46512);

(statearr_46569[(10)] = inst_46537);

(statearr_46569[(11)] = inst_46514);

(statearr_46569[(12)] = inst_46515);

return statearr_46569;
})();
var statearr_46570_48198 = state_46560__$1;
(statearr_46570_48198[(2)] = null);

(statearr_46570_48198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (1))){
var state_46560__$1 = state_46560;
var statearr_46571_48199 = state_46560__$1;
(statearr_46571_48199[(2)] = null);

(statearr_46571_48199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (4))){
var inst_46501 = (state_46560[(13)]);
var inst_46501__$1 = (state_46560[(2)]);
var inst_46502 = (inst_46501__$1 == null);
var state_46560__$1 = (function (){var statearr_46572 = state_46560;
(statearr_46572[(13)] = inst_46501__$1);

return statearr_46572;
})();
if(cljs.core.truth_(inst_46502)){
var statearr_46573_48203 = state_46560__$1;
(statearr_46573_48203[(1)] = (5));

} else {
var statearr_46574_48204 = state_46560__$1;
(statearr_46574_48204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (15))){
var state_46560__$1 = state_46560;
var statearr_46584_48206 = state_46560__$1;
(statearr_46584_48206[(2)] = null);

(statearr_46584_48206[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (21))){
var state_46560__$1 = state_46560;
var statearr_46585_48207 = state_46560__$1;
(statearr_46585_48207[(2)] = null);

(statearr_46585_48207[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (13))){
var inst_46513 = (state_46560[(8)]);
var inst_46512 = (state_46560[(9)]);
var inst_46514 = (state_46560[(11)]);
var inst_46515 = (state_46560[(12)]);
var inst_46522 = (state_46560[(2)]);
var inst_46523 = (inst_46515 + (1));
var tmp46581 = inst_46513;
var tmp46582 = inst_46512;
var tmp46583 = inst_46514;
var inst_46512__$1 = tmp46582;
var inst_46513__$1 = tmp46581;
var inst_46514__$1 = tmp46583;
var inst_46515__$1 = inst_46523;
var state_46560__$1 = (function (){var statearr_46586 = state_46560;
(statearr_46586[(14)] = inst_46522);

(statearr_46586[(8)] = inst_46513__$1);

(statearr_46586[(9)] = inst_46512__$1);

(statearr_46586[(11)] = inst_46514__$1);

(statearr_46586[(12)] = inst_46515__$1);

return statearr_46586;
})();
var statearr_46587_48216 = state_46560__$1;
(statearr_46587_48216[(2)] = null);

(statearr_46587_48216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (22))){
var state_46560__$1 = state_46560;
var statearr_46588_48217 = state_46560__$1;
(statearr_46588_48217[(2)] = null);

(statearr_46588_48217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (6))){
var inst_46501 = (state_46560[(13)]);
var inst_46510 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46501) : f.call(null,inst_46501));
var inst_46511 = cljs.core.seq(inst_46510);
var inst_46512 = inst_46511;
var inst_46513 = null;
var inst_46514 = (0);
var inst_46515 = (0);
var state_46560__$1 = (function (){var statearr_46589 = state_46560;
(statearr_46589[(8)] = inst_46513);

(statearr_46589[(9)] = inst_46512);

(statearr_46589[(11)] = inst_46514);

(statearr_46589[(12)] = inst_46515);

return statearr_46589;
})();
var statearr_46590_48229 = state_46560__$1;
(statearr_46590_48229[(2)] = null);

(statearr_46590_48229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (17))){
var inst_46526 = (state_46560[(7)]);
var inst_46530 = cljs.core.chunk_first(inst_46526);
var inst_46531 = cljs.core.chunk_rest(inst_46526);
var inst_46532 = cljs.core.count(inst_46530);
var inst_46512 = inst_46531;
var inst_46513 = inst_46530;
var inst_46514 = inst_46532;
var inst_46515 = (0);
var state_46560__$1 = (function (){var statearr_46591 = state_46560;
(statearr_46591[(8)] = inst_46513);

(statearr_46591[(9)] = inst_46512);

(statearr_46591[(11)] = inst_46514);

(statearr_46591[(12)] = inst_46515);

return statearr_46591;
})();
var statearr_46592_48251 = state_46560__$1;
(statearr_46592_48251[(2)] = null);

(statearr_46592_48251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (3))){
var inst_46558 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46560__$1,inst_46558);
} else {
if((state_val_46561 === (12))){
var inst_46546 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46593_48261 = state_46560__$1;
(statearr_46593_48261[(2)] = inst_46546);

(statearr_46593_48261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (2))){
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46560__$1,(4),in$);
} else {
if((state_val_46561 === (23))){
var inst_46554 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46594_48273 = state_46560__$1;
(statearr_46594_48273[(2)] = inst_46554);

(statearr_46594_48273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (19))){
var inst_46541 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46595_48283 = state_46560__$1;
(statearr_46595_48283[(2)] = inst_46541);

(statearr_46595_48283[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (11))){
var inst_46512 = (state_46560[(9)]);
var inst_46526 = (state_46560[(7)]);
var inst_46526__$1 = cljs.core.seq(inst_46512);
var state_46560__$1 = (function (){var statearr_46596 = state_46560;
(statearr_46596[(7)] = inst_46526__$1);

return statearr_46596;
})();
if(inst_46526__$1){
var statearr_46601_48297 = state_46560__$1;
(statearr_46601_48297[(1)] = (14));

} else {
var statearr_46605_48299 = state_46560__$1;
(statearr_46605_48299[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (9))){
var inst_46548 = (state_46560[(2)]);
var inst_46549 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46560__$1 = (function (){var statearr_46609 = state_46560;
(statearr_46609[(15)] = inst_46548);

return statearr_46609;
})();
if(cljs.core.truth_(inst_46549)){
var statearr_46610_48313 = state_46560__$1;
(statearr_46610_48313[(1)] = (21));

} else {
var statearr_46611_48318 = state_46560__$1;
(statearr_46611_48318[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (5))){
var inst_46504 = cljs.core.async.close_BANG_(out);
var state_46560__$1 = state_46560;
var statearr_46616_48327 = state_46560__$1;
(statearr_46616_48327[(2)] = inst_46504);

(statearr_46616_48327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (14))){
var inst_46526 = (state_46560[(7)]);
var inst_46528 = cljs.core.chunked_seq_QMARK_(inst_46526);
var state_46560__$1 = state_46560;
if(inst_46528){
var statearr_46617_48328 = state_46560__$1;
(statearr_46617_48328[(1)] = (17));

} else {
var statearr_46618_48329 = state_46560__$1;
(statearr_46618_48329[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (16))){
var inst_46544 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46619_48330 = state_46560__$1;
(statearr_46619_48330[(2)] = inst_46544);

(statearr_46619_48330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (10))){
var inst_46513 = (state_46560[(8)]);
var inst_46515 = (state_46560[(12)]);
var inst_46520 = cljs.core._nth(inst_46513,inst_46515);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46560__$1,(13),out,inst_46520);
} else {
if((state_val_46561 === (18))){
var inst_46526 = (state_46560[(7)]);
var inst_46535 = cljs.core.first(inst_46526);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46560__$1,(20),out,inst_46535);
} else {
if((state_val_46561 === (8))){
var inst_46514 = (state_46560[(11)]);
var inst_46515 = (state_46560[(12)]);
var inst_46517 = (inst_46515 < inst_46514);
var inst_46518 = inst_46517;
var state_46560__$1 = state_46560;
if(cljs.core.truth_(inst_46518)){
var statearr_46620_48331 = state_46560__$1;
(statearr_46620_48331[(1)] = (10));

} else {
var statearr_46621_48332 = state_46560__$1;
(statearr_46621_48332[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__44155__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44155__auto____0 = (function (){
var statearr_46622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46622[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44155__auto__);

(statearr_46622[(1)] = (1));

return statearr_46622;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44155__auto____1 = (function (state_46560){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46560);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46623){var ex__44158__auto__ = e46623;
var statearr_46626_48355 = state_46560;
(statearr_46626_48355[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46560[(4)]))){
var statearr_46627_48356 = state_46560;
(statearr_46627_48356[(1)] = cljs.core.first((state_46560[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48360 = state_46560;
state_46560 = G__48360;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44155__auto__ = function(state_46560){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44155__auto____1.call(this,state_46560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44155__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44155__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46635 = f__44349__auto__();
(statearr_46635[(6)] = c__44347__auto__);

return statearr_46635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));

return c__44347__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46640 = arguments.length;
switch (G__46640) {
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
var G__46650 = arguments.length;
switch (G__46650) {
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
var G__46652 = arguments.length;
switch (G__46652) {
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
var c__44347__auto___48373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46679){
var state_val_46680 = (state_46679[(1)]);
if((state_val_46680 === (7))){
var inst_46674 = (state_46679[(2)]);
var state_46679__$1 = state_46679;
var statearr_46681_48374 = state_46679__$1;
(statearr_46681_48374[(2)] = inst_46674);

(statearr_46681_48374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46680 === (1))){
var inst_46656 = null;
var state_46679__$1 = (function (){var statearr_46682 = state_46679;
(statearr_46682[(7)] = inst_46656);

return statearr_46682;
})();
var statearr_46683_48375 = state_46679__$1;
(statearr_46683_48375[(2)] = null);

(statearr_46683_48375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46680 === (4))){
var inst_46659 = (state_46679[(8)]);
var inst_46659__$1 = (state_46679[(2)]);
var inst_46660 = (inst_46659__$1 == null);
var inst_46661 = cljs.core.not(inst_46660);
var state_46679__$1 = (function (){var statearr_46684 = state_46679;
(statearr_46684[(8)] = inst_46659__$1);

return statearr_46684;
})();
if(inst_46661){
var statearr_46685_48379 = state_46679__$1;
(statearr_46685_48379[(1)] = (5));

} else {
var statearr_46686_48380 = state_46679__$1;
(statearr_46686_48380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46680 === (6))){
var state_46679__$1 = state_46679;
var statearr_46687_48388 = state_46679__$1;
(statearr_46687_48388[(2)] = null);

(statearr_46687_48388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46680 === (3))){
var inst_46676 = (state_46679[(2)]);
var inst_46677 = cljs.core.async.close_BANG_(out);
var state_46679__$1 = (function (){var statearr_46688 = state_46679;
(statearr_46688[(9)] = inst_46676);

return statearr_46688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46679__$1,inst_46677);
} else {
if((state_val_46680 === (2))){
var state_46679__$1 = state_46679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46679__$1,(4),ch);
} else {
if((state_val_46680 === (11))){
var inst_46659 = (state_46679[(8)]);
var inst_46668 = (state_46679[(2)]);
var inst_46656 = inst_46659;
var state_46679__$1 = (function (){var statearr_46689 = state_46679;
(statearr_46689[(7)] = inst_46656);

(statearr_46689[(10)] = inst_46668);

return statearr_46689;
})();
var statearr_46690_48406 = state_46679__$1;
(statearr_46690_48406[(2)] = null);

(statearr_46690_48406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46680 === (9))){
var inst_46659 = (state_46679[(8)]);
var state_46679__$1 = state_46679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46679__$1,(11),out,inst_46659);
} else {
if((state_val_46680 === (5))){
var inst_46656 = (state_46679[(7)]);
var inst_46659 = (state_46679[(8)]);
var inst_46663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46659,inst_46656);
var state_46679__$1 = state_46679;
if(inst_46663){
var statearr_46692_48411 = state_46679__$1;
(statearr_46692_48411[(1)] = (8));

} else {
var statearr_46693_48415 = state_46679__$1;
(statearr_46693_48415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46680 === (10))){
var inst_46671 = (state_46679[(2)]);
var state_46679__$1 = state_46679;
var statearr_46694_48420 = state_46679__$1;
(statearr_46694_48420[(2)] = inst_46671);

(statearr_46694_48420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46680 === (8))){
var inst_46656 = (state_46679[(7)]);
var tmp46691 = inst_46656;
var inst_46656__$1 = tmp46691;
var state_46679__$1 = (function (){var statearr_46696 = state_46679;
(statearr_46696[(7)] = inst_46656__$1);

return statearr_46696;
})();
var statearr_46697_48428 = state_46679__$1;
(statearr_46697_48428[(2)] = null);

(statearr_46697_48428[(1)] = (2));


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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46698[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46698[(1)] = (1));

return statearr_46698;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46679){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46679);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46699){var ex__44158__auto__ = e46699;
var statearr_46700_48436 = state_46679;
(statearr_46700_48436[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46679[(4)]))){
var statearr_46701_48437 = state_46679;
(statearr_46701_48437[(1)] = cljs.core.first((state_46679[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48438 = state_46679;
state_46679 = G__48438;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46702 = f__44349__auto__();
(statearr_46702[(6)] = c__44347__auto___48373);

return statearr_46702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46705 = arguments.length;
switch (G__46705) {
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
var c__44347__auto___48445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46743){
var state_val_46744 = (state_46743[(1)]);
if((state_val_46744 === (7))){
var inst_46739 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46747_48446 = state_46743__$1;
(statearr_46747_48446[(2)] = inst_46739);

(statearr_46747_48446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (1))){
var inst_46706 = (new Array(n));
var inst_46707 = inst_46706;
var inst_46708 = (0);
var state_46743__$1 = (function (){var statearr_46748 = state_46743;
(statearr_46748[(7)] = inst_46708);

(statearr_46748[(8)] = inst_46707);

return statearr_46748;
})();
var statearr_46749_48447 = state_46743__$1;
(statearr_46749_48447[(2)] = null);

(statearr_46749_48447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (4))){
var inst_46711 = (state_46743[(9)]);
var inst_46711__$1 = (state_46743[(2)]);
var inst_46712 = (inst_46711__$1 == null);
var inst_46713 = cljs.core.not(inst_46712);
var state_46743__$1 = (function (){var statearr_46750 = state_46743;
(statearr_46750[(9)] = inst_46711__$1);

return statearr_46750;
})();
if(inst_46713){
var statearr_46751_48456 = state_46743__$1;
(statearr_46751_48456[(1)] = (5));

} else {
var statearr_46752_48460 = state_46743__$1;
(statearr_46752_48460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (15))){
var inst_46733 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46753_48465 = state_46743__$1;
(statearr_46753_48465[(2)] = inst_46733);

(statearr_46753_48465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (13))){
var state_46743__$1 = state_46743;
var statearr_46759_48470 = state_46743__$1;
(statearr_46759_48470[(2)] = null);

(statearr_46759_48470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (6))){
var inst_46708 = (state_46743[(7)]);
var inst_46729 = (inst_46708 > (0));
var state_46743__$1 = state_46743;
if(cljs.core.truth_(inst_46729)){
var statearr_46760_48471 = state_46743__$1;
(statearr_46760_48471[(1)] = (12));

} else {
var statearr_46761_48472 = state_46743__$1;
(statearr_46761_48472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (3))){
var inst_46741 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46743__$1,inst_46741);
} else {
if((state_val_46744 === (12))){
var inst_46707 = (state_46743[(8)]);
var inst_46731 = cljs.core.vec(inst_46707);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46743__$1,(15),out,inst_46731);
} else {
if((state_val_46744 === (2))){
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46743__$1,(4),ch);
} else {
if((state_val_46744 === (11))){
var inst_46723 = (state_46743[(2)]);
var inst_46724 = (new Array(n));
var inst_46707 = inst_46724;
var inst_46708 = (0);
var state_46743__$1 = (function (){var statearr_46766 = state_46743;
(statearr_46766[(7)] = inst_46708);

(statearr_46766[(10)] = inst_46723);

(statearr_46766[(8)] = inst_46707);

return statearr_46766;
})();
var statearr_46768_48477 = state_46743__$1;
(statearr_46768_48477[(2)] = null);

(statearr_46768_48477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (9))){
var inst_46707 = (state_46743[(8)]);
var inst_46721 = cljs.core.vec(inst_46707);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46743__$1,(11),out,inst_46721);
} else {
if((state_val_46744 === (5))){
var inst_46708 = (state_46743[(7)]);
var inst_46716 = (state_46743[(11)]);
var inst_46707 = (state_46743[(8)]);
var inst_46711 = (state_46743[(9)]);
var inst_46715 = (inst_46707[inst_46708] = inst_46711);
var inst_46716__$1 = (inst_46708 + (1));
var inst_46717 = (inst_46716__$1 < n);
var state_46743__$1 = (function (){var statearr_46792 = state_46743;
(statearr_46792[(11)] = inst_46716__$1);

(statearr_46792[(12)] = inst_46715);

return statearr_46792;
})();
if(cljs.core.truth_(inst_46717)){
var statearr_46793_48481 = state_46743__$1;
(statearr_46793_48481[(1)] = (8));

} else {
var statearr_46794_48482 = state_46743__$1;
(statearr_46794_48482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (14))){
var inst_46736 = (state_46743[(2)]);
var inst_46737 = cljs.core.async.close_BANG_(out);
var state_46743__$1 = (function (){var statearr_46797 = state_46743;
(statearr_46797[(13)] = inst_46736);

return statearr_46797;
})();
var statearr_46798_48483 = state_46743__$1;
(statearr_46798_48483[(2)] = inst_46737);

(statearr_46798_48483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (10))){
var inst_46727 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46799_48487 = state_46743__$1;
(statearr_46799_48487[(2)] = inst_46727);

(statearr_46799_48487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (8))){
var inst_46716 = (state_46743[(11)]);
var inst_46707 = (state_46743[(8)]);
var tmp46796 = inst_46707;
var inst_46707__$1 = tmp46796;
var inst_46708 = inst_46716;
var state_46743__$1 = (function (){var statearr_46800 = state_46743;
(statearr_46800[(7)] = inst_46708);

(statearr_46800[(8)] = inst_46707__$1);

return statearr_46800;
})();
var statearr_46801_48488 = state_46743__$1;
(statearr_46801_48488[(2)] = null);

(statearr_46801_48488[(1)] = (2));


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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46809[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46809[(1)] = (1));

return statearr_46809;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46743){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46743);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46810){var ex__44158__auto__ = e46810;
var statearr_46811_48489 = state_46743;
(statearr_46811_48489[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46743[(4)]))){
var statearr_46813_48490 = state_46743;
(statearr_46813_48490[(1)] = cljs.core.first((state_46743[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48495 = state_46743;
state_46743 = G__48495;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46815 = f__44349__auto__();
(statearr_46815[(6)] = c__44347__auto___48445);

return statearr_46815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46818 = arguments.length;
switch (G__46818) {
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
var c__44347__auto___48497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44349__auto__ = (function (){var switch__44154__auto__ = (function (state_46860){
var state_val_46861 = (state_46860[(1)]);
if((state_val_46861 === (7))){
var inst_46856 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
var statearr_46862_48498 = state_46860__$1;
(statearr_46862_48498[(2)] = inst_46856);

(statearr_46862_48498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (1))){
var inst_46819 = [];
var inst_46820 = inst_46819;
var inst_46821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46860__$1 = (function (){var statearr_46864 = state_46860;
(statearr_46864[(7)] = inst_46821);

(statearr_46864[(8)] = inst_46820);

return statearr_46864;
})();
var statearr_46865_48499 = state_46860__$1;
(statearr_46865_48499[(2)] = null);

(statearr_46865_48499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (4))){
var inst_46824 = (state_46860[(9)]);
var inst_46824__$1 = (state_46860[(2)]);
var inst_46825 = (inst_46824__$1 == null);
var inst_46826 = cljs.core.not(inst_46825);
var state_46860__$1 = (function (){var statearr_46866 = state_46860;
(statearr_46866[(9)] = inst_46824__$1);

return statearr_46866;
})();
if(inst_46826){
var statearr_46867_48500 = state_46860__$1;
(statearr_46867_48500[(1)] = (5));

} else {
var statearr_46868_48501 = state_46860__$1;
(statearr_46868_48501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (15))){
var inst_46850 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
var statearr_46871_48504 = state_46860__$1;
(statearr_46871_48504[(2)] = inst_46850);

(statearr_46871_48504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (13))){
var state_46860__$1 = state_46860;
var statearr_46872_48505 = state_46860__$1;
(statearr_46872_48505[(2)] = null);

(statearr_46872_48505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (6))){
var inst_46820 = (state_46860[(8)]);
var inst_46845 = inst_46820.length;
var inst_46846 = (inst_46845 > (0));
var state_46860__$1 = state_46860;
if(cljs.core.truth_(inst_46846)){
var statearr_46873_48510 = state_46860__$1;
(statearr_46873_48510[(1)] = (12));

} else {
var statearr_46874_48511 = state_46860__$1;
(statearr_46874_48511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (3))){
var inst_46858 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46860__$1,inst_46858);
} else {
if((state_val_46861 === (12))){
var inst_46820 = (state_46860[(8)]);
var inst_46848 = cljs.core.vec(inst_46820);
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46860__$1,(15),out,inst_46848);
} else {
if((state_val_46861 === (2))){
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46860__$1,(4),ch);
} else {
if((state_val_46861 === (11))){
var inst_46824 = (state_46860[(9)]);
var inst_46828 = (state_46860[(10)]);
var inst_46838 = (state_46860[(2)]);
var inst_46839 = [];
var inst_46840 = inst_46839.push(inst_46824);
var inst_46820 = inst_46839;
var inst_46821 = inst_46828;
var state_46860__$1 = (function (){var statearr_46875 = state_46860;
(statearr_46875[(7)] = inst_46821);

(statearr_46875[(8)] = inst_46820);

(statearr_46875[(11)] = inst_46838);

(statearr_46875[(12)] = inst_46840);

return statearr_46875;
})();
var statearr_46876_48514 = state_46860__$1;
(statearr_46876_48514[(2)] = null);

(statearr_46876_48514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (9))){
var inst_46820 = (state_46860[(8)]);
var inst_46836 = cljs.core.vec(inst_46820);
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46860__$1,(11),out,inst_46836);
} else {
if((state_val_46861 === (5))){
var inst_46821 = (state_46860[(7)]);
var inst_46824 = (state_46860[(9)]);
var inst_46828 = (state_46860[(10)]);
var inst_46828__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46824) : f.call(null,inst_46824));
var inst_46829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46828__$1,inst_46821);
var inst_46830 = cljs.core.keyword_identical_QMARK_(inst_46821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46831 = ((inst_46829) || (inst_46830));
var state_46860__$1 = (function (){var statearr_46877 = state_46860;
(statearr_46877[(10)] = inst_46828__$1);

return statearr_46877;
})();
if(cljs.core.truth_(inst_46831)){
var statearr_46878_48515 = state_46860__$1;
(statearr_46878_48515[(1)] = (8));

} else {
var statearr_46879_48516 = state_46860__$1;
(statearr_46879_48516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (14))){
var inst_46853 = (state_46860[(2)]);
var inst_46854 = cljs.core.async.close_BANG_(out);
var state_46860__$1 = (function (){var statearr_46884 = state_46860;
(statearr_46884[(13)] = inst_46853);

return statearr_46884;
})();
var statearr_46885_48519 = state_46860__$1;
(statearr_46885_48519[(2)] = inst_46854);

(statearr_46885_48519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (10))){
var inst_46843 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
var statearr_46886_48520 = state_46860__$1;
(statearr_46886_48520[(2)] = inst_46843);

(statearr_46886_48520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (8))){
var inst_46824 = (state_46860[(9)]);
var inst_46820 = (state_46860[(8)]);
var inst_46828 = (state_46860[(10)]);
var inst_46833 = inst_46820.push(inst_46824);
var tmp46880 = inst_46820;
var inst_46820__$1 = tmp46880;
var inst_46821 = inst_46828;
var state_46860__$1 = (function (){var statearr_46891 = state_46860;
(statearr_46891[(7)] = inst_46821);

(statearr_46891[(8)] = inst_46820__$1);

(statearr_46891[(14)] = inst_46833);

return statearr_46891;
})();
var statearr_46896_48523 = state_46860__$1;
(statearr_46896_48523[(2)] = null);

(statearr_46896_48523[(1)] = (2));


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
var cljs$core$async$state_machine__44155__auto__ = null;
var cljs$core$async$state_machine__44155__auto____0 = (function (){
var statearr_46901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46901[(0)] = cljs$core$async$state_machine__44155__auto__);

(statearr_46901[(1)] = (1));

return statearr_46901;
});
var cljs$core$async$state_machine__44155__auto____1 = (function (state_46860){
while(true){
var ret_value__44156__auto__ = (function (){try{while(true){
var result__44157__auto__ = switch__44154__auto__(state_46860);
if(cljs.core.keyword_identical_QMARK_(result__44157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44157__auto__;
}
break;
}
}catch (e46904){var ex__44158__auto__ = e46904;
var statearr_46905_48529 = state_46860;
(statearr_46905_48529[(2)] = ex__44158__auto__);


if(cljs.core.seq((state_46860[(4)]))){
var statearr_46906_48530 = state_46860;
(statearr_46906_48530[(1)] = cljs.core.first((state_46860[(4)])));

} else {
throw ex__44158__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48533 = state_46860;
state_46860 = G__48533;
continue;
} else {
return ret_value__44156__auto__;
}
break;
}
});
cljs$core$async$state_machine__44155__auto__ = function(state_46860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44155__auto____1.call(this,state_46860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44155__auto____0;
cljs$core$async$state_machine__44155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44155__auto____1;
return cljs$core$async$state_machine__44155__auto__;
})()
})();
var state__44350__auto__ = (function (){var statearr_46907 = f__44349__auto__();
(statearr_46907[(6)] = c__44347__auto___48497);

return statearr_46907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44350__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
