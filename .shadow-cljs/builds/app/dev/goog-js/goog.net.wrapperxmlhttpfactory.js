["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/wrapperxmlhttpfactory.js"],"~:js","goog.provide(\"goog.net.WrapperXmlHttpFactory\");\n/**\n * @suppress {extraRequire}\n */\ngoog.require(\"goog.net.XhrLike\");\ngoog.require(\"goog.net.XmlHttpFactory\");\n/**\n * @final\n * @constructor\n * @extends {goog.net.XmlHttpFactory}\n * @param {function():!goog.net.XhrLike.OrNative} xhrFactory\n * @param {function():!Object} optionsFactory\n */\ngoog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {\n  goog.net.XmlHttpFactory.call(this);\n  /** @private @type {function():!goog.net.XhrLike.OrNative} */ this.xhrFactory_ = xhrFactory;\n  /** @private @type {function():!Object} */ this.optionsFactory_ = optionsFactory;\n};\ngoog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);\n/** @override */ goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {\n  return this.xhrFactory_();\n};\n/** @override */ goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {\n  return this.optionsFactory_();\n};\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Implementation of XmlHttpFactory which allows construction from\n * simple factory methods.\n * @author dbk@google.com (David Barrett-Kahn)\n */\n\ngoog.provide('goog.net.WrapperXmlHttpFactory');\n\n/** @suppress {extraRequire} Typedef. */\ngoog.require('goog.net.XhrLike');\ngoog.require('goog.net.XmlHttpFactory');\n\n\n\n/**\n * An xhr factory subclass which can be constructed using two factory methods.\n * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()\n * with an unchanged signature.\n * @param {function():!goog.net.XhrLike.OrNative} xhrFactory\n *     A function which returns a new XHR object.\n * @param {function():!Object} optionsFactory A function which returns the\n *     options associated with xhr objects from this factory.\n * @extends {goog.net.XmlHttpFactory}\n * @constructor\n * @final\n */\ngoog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {\n  goog.net.XmlHttpFactory.call(this);\n\n  /**\n   * XHR factory method.\n   * @type {function() : !goog.net.XhrLike.OrNative}\n   * @private\n   */\n  this.xhrFactory_ = xhrFactory;\n\n  /**\n   * Options factory method.\n   * @type {function() : !Object}\n   * @private\n   */\n  this.optionsFactory_ = optionsFactory;\n};\ngoog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);\n\n\n/** @override */\ngoog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {\n  return this.xhrFactory_();\n};\n\n\n/** @override */\ngoog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {\n  return this.optionsFactory_();\n};\n","~:compiled-at",1589929608073,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.wrapperxmlhttpfactory.js\",\n\"lineCount\":26,\n\"mappings\":\"AAoBAA,IAAAC,QAAA,CAAa,gCAAb,CAAA;AAGA;;;AAAAD,IAAAE,QAAA,CAAa,kBAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,yBAAb,CAAA;AAgBA;;;;;;;AAAAF,IAAAG,IAAAC,sBAAA,GAAiCC,QAAQ,CAACC,UAAD,EAAaC,cAAb,CAA6B;AACpEP,MAAAG,IAAAK,eAAAC,KAAA,CAA6B,IAA7B,CAAA;AAOA,gEAAA,IAAAC,YAAA,GAAmBJ,UAAnB;AAOA,6CAAA,IAAAK,gBAAA,GAAuBJ,cAAvB;AAfoE,CAAtE;AAiBAP,IAAAY,SAAA,CAAcZ,IAAAG,IAAAC,sBAAd,EAA8CJ,IAAAG,IAAAK,eAA9C,CAAA;AAIA,iBAAAR,IAAAG,IAAAC,sBAAAS,UAAAC,eAAA,GAA0DC,QAAQ,EAAG;AACnE,SAAO,IAAAL,YAAA,EAAP;AADmE,CAArE;AAMA,iBAAAV,IAAAG,IAAAC,sBAAAS,UAAAG,WAAA,GAAsDC,QAAQ,EAAG;AAC/D,SAAO,IAAAN,gBAAA,EAAP;AAD+D,CAAjE;;\",\n\"sources\":[\"goog/net/wrapperxmlhttpfactory.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Implementation of XmlHttpFactory which allows construction from\\n * simple factory methods.\\n * @author dbk@google.com (David Barrett-Kahn)\\n */\\n\\ngoog.provide('goog.net.WrapperXmlHttpFactory');\\n\\n/** @suppress {extraRequire} Typedef. */\\ngoog.require('goog.net.XhrLike');\\ngoog.require('goog.net.XmlHttpFactory');\\n\\n\\n\\n/**\\n * An xhr factory subclass which can be constructed using two factory methods.\\n * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()\\n * with an unchanged signature.\\n * @param {function():!goog.net.XhrLike.OrNative} xhrFactory\\n *     A function which returns a new XHR object.\\n * @param {function():!Object} optionsFactory A function which returns the\\n *     options associated with xhr objects from this factory.\\n * @extends {goog.net.XmlHttpFactory}\\n * @constructor\\n * @final\\n */\\ngoog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {\\n  goog.net.XmlHttpFactory.call(this);\\n\\n  /**\\n   * XHR factory method.\\n   * @type {function() : !goog.net.XhrLike.OrNative}\\n   * @private\\n   */\\n  this.xhrFactory_ = xhrFactory;\\n\\n  /**\\n   * Options factory method.\\n   * @type {function() : !Object}\\n   * @private\\n   */\\n  this.optionsFactory_ = optionsFactory;\\n};\\ngoog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);\\n\\n\\n/** @override */\\ngoog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {\\n  return this.xhrFactory_();\\n};\\n\\n\\n/** @override */\\ngoog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {\\n  return this.optionsFactory_();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"net\",\"WrapperXmlHttpFactory\",\"goog.net.WrapperXmlHttpFactory\",\"xhrFactory\",\"optionsFactory\",\"XmlHttpFactory\",\"call\",\"xhrFactory_\",\"optionsFactory_\",\"inherits\",\"prototype\",\"createInstance\",\"goog.net.WrapperXmlHttpFactory.prototype.createInstance\",\"getOptions\",\"goog.net.WrapperXmlHttpFactory.prototype.getOptions\"]\n}\n"]