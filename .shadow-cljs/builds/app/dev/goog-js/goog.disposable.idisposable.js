["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/disposable/idisposable.js"],"~:js","goog.provide(\"goog.disposable.IDisposable\");\n/** @record */ goog.disposable.IDisposable = function() {\n};\n/**\n * @return {void}\n */\ngoog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;\n/**\n * @return {boolean}\n */\ngoog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;\n","~:source","// Copyright 2011 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Definition of the disposable interface.  A disposable object\n * has a dispose method to to clean up references and resources.\n * @author nnaze@google.com (Nathan Naze)\n */\n\n\ngoog.provide('goog.disposable.IDisposable');\n\n\n\n/**\n * Interface for a disposable object.  If a instance requires cleanup\n * (references COM objects, DOM nodes, or other disposable objects), it should\n * implement this interface (it may subclass goog.Disposable).\n * @record\n */\ngoog.disposable.IDisposable = function() {};\n\n\n/**\n * Disposes of the object and its resources.\n * @return {void} Nothing.\n */\ngoog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;\n\n\n/**\n * @return {boolean} Whether the object has been disposed of.\n */\ngoog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;\n","~:compiled-at",1589929608040,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.disposable.idisposable.js\",\n\"lineCount\":12,\n\"mappings\":\"AAqBAA,IAAAC,QAAA,CAAa,6BAAb,CAAA;AAUA,eAAAD,IAAAE,WAAAC,YAAA,GAA8BC,QAAQ,EAAG;CAAzC;AAOA;;;AAAAJ,IAAAE,WAAAC,YAAAE,UAAAC,QAAA,GAAgDN,IAAAO,eAAhD;AAMA;;;AAAAP,IAAAE,WAAAC,YAAAE,UAAAG,WAAA,GAAmDR,IAAAO,eAAnD;;\",\n\"sources\":[\"goog/disposable/idisposable.js\"],\n\"sourcesContent\":[\"// Copyright 2011 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Definition of the disposable interface.  A disposable object\\n * has a dispose method to to clean up references and resources.\\n * @author nnaze@google.com (Nathan Naze)\\n */\\n\\n\\ngoog.provide('goog.disposable.IDisposable');\\n\\n\\n\\n/**\\n * Interface for a disposable object.  If a instance requires cleanup\\n * (references COM objects, DOM nodes, or other disposable objects), it should\\n * implement this interface (it may subclass goog.Disposable).\\n * @record\\n */\\ngoog.disposable.IDisposable = function() {};\\n\\n\\n/**\\n * Disposes of the object and its resources.\\n * @return {void} Nothing.\\n */\\ngoog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;\\n\\n\\n/**\\n * @return {boolean} Whether the object has been disposed of.\\n */\\ngoog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;\\n\"],\n\"names\":[\"goog\",\"provide\",\"disposable\",\"IDisposable\",\"goog.disposable.IDisposable\",\"prototype\",\"dispose\",\"abstractMethod\",\"isDisposed\"]\n}\n"]