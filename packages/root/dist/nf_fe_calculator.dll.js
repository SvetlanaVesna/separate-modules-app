(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nf_fe_calculator"] = factory();
	else
		root["nf_fe_calculator"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdatenf_fe_calculator"];
/******/ 	window["webpackHotUpdatenf_fe_calculator"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "56fe39c9d44a5f2c1e64";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"nf_fe_calculator": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".dll.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpnf_fe_calculator"] = window["webpackJsonpnf_fe_calculator"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/fast-levenshtein/levenshtein.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/fast-levenshtein/levenshtein.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;(function () {\n  'use strict';\n\n  var collator;\n\n  try {\n    collator = typeof Intl !== \"undefined\" && typeof Intl.Collator !== \"undefined\" ? Intl.Collator(\"generic\", {\n      sensitivity: \"base\"\n    }) : null;\n  } catch (err) {\n    console.log(\"Collator could not be initialized and wouldn't be used\");\n  } // arrays to re-use\n\n\n  var prevRow = [],\n      str2Char = [];\n  /**\n   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.\n   */\n\n  var Levenshtein = {\n    /**\n     * Calculate levenshtein distance of the two strings.\n     *\n     * @param str1 String the first string.\n     * @param str2 String the second string.\n     * @param [options] Additional options.\n     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.\n     * @return Integer the levenshtein distance (0 and above).\n     */\n    get: function (str1, str2, options) {\n      var useCollator = options && collator && options.useCollator;\n      var str1Len = str1.length,\n          str2Len = str2.length; // base cases\n\n      if (str1Len === 0) return str2Len;\n      if (str2Len === 0) return str1Len; // two rows\n\n      var curCol, nextCol, i, j, tmp; // initialise previous row\n\n      for (i = 0; i < str2Len; ++i) {\n        prevRow[i] = i;\n        str2Char[i] = str2.charCodeAt(i);\n      }\n\n      prevRow[str2Len] = str2Len;\n      var strCmp;\n\n      if (useCollator) {\n        // calculate current row distance from previous row using collator\n        for (i = 0; i < str1Len; ++i) {\n          nextCol = i + 1;\n\n          for (j = 0; j < str2Len; ++j) {\n            curCol = nextCol; // substution\n\n            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));\n            nextCol = prevRow[j] + (strCmp ? 0 : 1); // insertion\n\n            tmp = curCol + 1;\n\n            if (nextCol > tmp) {\n              nextCol = tmp;\n            } // deletion\n\n\n            tmp = prevRow[j + 1] + 1;\n\n            if (nextCol > tmp) {\n              nextCol = tmp;\n            } // copy current col value into previous (in preparation for next iteration)\n\n\n            prevRow[j] = curCol;\n          } // copy last col value into previous (in preparation for next iteration)\n\n\n          prevRow[j] = nextCol;\n        }\n      } else {\n        // calculate current row distance from previous row without collator\n        for (i = 0; i < str1Len; ++i) {\n          nextCol = i + 1;\n\n          for (j = 0; j < str2Len; ++j) {\n            curCol = nextCol; // substution\n\n            strCmp = str1.charCodeAt(i) === str2Char[j];\n            nextCol = prevRow[j] + (strCmp ? 0 : 1); // insertion\n\n            tmp = curCol + 1;\n\n            if (nextCol > tmp) {\n              nextCol = tmp;\n            } // deletion\n\n\n            tmp = prevRow[j + 1] + 1;\n\n            if (nextCol > tmp) {\n              nextCol = tmp;\n            } // copy current col value into previous (in preparation for next iteration)\n\n\n            prevRow[j] = curCol;\n          } // copy last col value into previous (in preparation for next iteration)\n\n\n          prevRow[j] = nextCol;\n        }\n      }\n\n      return nextCol;\n    }\n  }; // amd\n\n  if (\"function\" !== \"undefined\" && __webpack_require__(/*! !webpack amd define */ \"../../node_modules/webpack/buildin/amd-define.js\") !== null && __webpack_require__(/*! !webpack amd options */ \"../../node_modules/webpack/buildin/amd-options.js\")) {\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n      return Levenshtein;\n    }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } // commonjs\n  else if (typeof module !== \"undefined\" && module !== null && typeof exports !== \"undefined\" && module.exports === exports) {\n      module.exports = Levenshtein;\n    } // web worker\n    else if (typeof self !== \"undefined\" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {\n        self.Levenshtein = Levenshtein;\n      } // browser main thread\n      else if (typeof window !== \"undefined\" && window !== null) {\n          window.Levenshtein = Levenshtein;\n        }\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/fast-levenshtein/levenshtein.js?");

/***/ }),

/***/ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */\n\nvar REACT_STATICS = {\n  childContextTypes: true,\n  contextTypes: true,\n  defaultProps: true,\n  displayName: true,\n  getDefaultProps: true,\n  getDerivedStateFromProps: true,\n  mixins: true,\n  propTypes: true,\n  type: true\n};\nvar KNOWN_STATICS = {\n  name: true,\n  length: true,\n  prototype: true,\n  caller: true,\n  callee: true,\n  arguments: true,\n  arity: true\n};\nvar defineProperty = Object.defineProperty;\nvar getOwnPropertyNames = Object.getOwnPropertyNames;\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar getPrototypeOf = Object.getPrototypeOf;\nvar objectPrototype = getPrototypeOf && getPrototypeOf(Object);\n\nfunction hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {\n  if (typeof sourceComponent !== 'string') {\n    // don't hoist over string (html) components\n    if (objectPrototype) {\n      var inheritedComponent = getPrototypeOf(sourceComponent);\n\n      if (inheritedComponent && inheritedComponent !== objectPrototype) {\n        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);\n      }\n    }\n\n    var keys = getOwnPropertyNames(sourceComponent);\n\n    if (getOwnPropertySymbols) {\n      keys = keys.concat(getOwnPropertySymbols(sourceComponent));\n    }\n\n    for (var i = 0; i < keys.length; ++i) {\n      var key = keys[i];\n\n      if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {\n        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);\n\n        try {\n          // Avoid failures from read-only properties\n          defineProperty(targetComponent, key, descriptor);\n        } catch (e) {}\n      }\n    }\n\n    return targetComponent;\n  }\n\n  return targetComponent;\n}\n\nmodule.exports = hoistNonReactStatics;\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js?");

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!**************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/object-assign/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n/* eslint-disable no-unused-vars */\n\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n  if (val === null || val === undefined) {\n    throw new TypeError('Object.assign cannot be called with null or undefined');\n  }\n\n  return Object(val);\n}\n\nfunction shouldUseNative() {\n  try {\n    if (!Object.assign) {\n      return false;\n    } // Detect buggy property enumeration order in older V8 versions.\n    // https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\n\n    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers\n\n    test1[5] = 'de';\n\n    if (Object.getOwnPropertyNames(test1)[0] === '5') {\n      return false;\n    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\n\n    var test2 = {};\n\n    for (var i = 0; i < 10; i++) {\n      test2['_' + String.fromCharCode(i)] = i;\n    }\n\n    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n      return test2[n];\n    });\n\n    if (order2.join('') !== '0123456789') {\n      return false;\n    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\n\n    var test3 = {};\n    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n      test3[letter] = letter;\n    });\n\n    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {\n      return false;\n    }\n\n    return true;\n  } catch (err) {\n    // We don't expect any of the above to throw, but better to be safe.\n    return false;\n  }\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n  var from;\n  var to = toObject(target);\n  var symbols;\n\n  for (var s = 1; s < arguments.length; s++) {\n    from = Object(arguments[s]);\n\n    for (var key in from) {\n      if (hasOwnProperty.call(from, key)) {\n        to[key] = from[key];\n      }\n    }\n\n    if (getOwnPropertySymbols) {\n      symbols = getOwnPropertySymbols(from);\n\n      for (var i = 0; i < symbols.length; i++) {\n        if (propIsEnumerable.call(from, symbols[i])) {\n          to[symbols[i]] = from[symbols[i]];\n        }\n      }\n    }\n  }\n\n  return to;\n};\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/object-assign/index.js?");

/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!********************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/checkPropTypes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar printWarning = function () {};\n\nif (true) {\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"../../node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\n  var loggedTypeFailures = {};\n\n  printWarning = function (text) {\n    var message = 'Warning: ' + text;\n\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\n\n\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error; // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n\n        if (error && !(error instanceof Error)) {\n          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');\n        }\n\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n          var stack = getStack ? getStack() : '';\n          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/checkPropTypes.js?");

/***/ }),

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar assign = __webpack_require__(/*! object-assign */ \"../../node_modules/object-assign/index.js\");\n\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"../../node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\nvar checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ \"../../node_modules/prop-types/checkPropTypes.js\");\n\nvar printWarning = function () {};\n\nif (true) {\n  printWarning = function (text) {\n    var message = 'Warning: ' + text;\n\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\nfunction emptyFunctionThatReturnsNull() {\n  return null;\n}\n\nmodule.exports = function (isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n\n  var ANONYMOUS = '<<anonymous>>'; // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker\n  };\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n\n  /*eslint-disable no-self-compare*/\n\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n\n\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  } // Make `instanceof Error` still work for returned errors.\n\n\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (true) {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');\n          err.name = 'Invariant Violation';\n          throw err;\n        } else if (\"development\" !== 'production' && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n\n          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors\n          manualPropTypeWarningCount < 3) {\n            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunctionThatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n\n      var propValue = props[propName];\n\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n\n      if (typeof checker !== 'function') {\n        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');\n        return emptyFunctionThatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n\n        if (!checker) {\n          continue;\n        }\n\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n\n        if (error) {\n          return error;\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      } // We need to check all keys in case some are required but missing from\n      // props.\n\n\n      var allKeys = assign({}, props[propName], shapeTypes);\n\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n\n        if (!checker) {\n          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));\n        }\n\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n\n        if (error) {\n          return error;\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n\n      case 'boolean':\n        return !propValue;\n\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n\n\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    } // Fallback for non-spec compliant Symbols which are polyfilled.\n\n\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  } // Equivalent of `typeof` but with special handling for array and regexp.\n\n\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n\n    return propType;\n  } // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n\n\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n\n    var propType = getPropType(propValue);\n\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n\n    return propType;\n  } // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n\n\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n\n      default:\n        return type;\n    }\n  } // Returns class name of the object, if any.\n\n\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n  return ReactPropTypes;\n};\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!***********************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nif (true) {\n  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;\n\n  var isValidElement = function (object) {\n    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n  }; // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n\n\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ \"../../node_modules/prop-types/factoryWithTypeCheckers.js\")(isValidElement, throwOnDirectAccess);\n} else {}\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/index.js?");

/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\nmodule.exports = ReactPropTypesSecret;\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),

/***/ "../../node_modules/react-hot-loader/dist/react-hot-loader.development.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/react-hot-loader/dist/react-hot-loader.development.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopDefault(ex) {\n  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;\n}\n\nvar React = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\nvar React__default = _interopDefault(React);\n\nvar shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ \"../../node_modules/shallowequal/index.js\"));\n\nvar levenshtein = _interopDefault(__webpack_require__(/*! fast-levenshtein */ \"../../node_modules/fast-levenshtein/levenshtein.js\"));\n\nvar PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\"));\n\nvar defaultPolyfill = __webpack_require__(/*! react-lifecycles-compat */ \"../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js\");\n\nvar defaultPolyfill__default = _interopDefault(defaultPolyfill);\n\nvar hoistNonReactStatic = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ \"../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\"));\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nvar classCallCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\nvar inherits = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass);\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\nvar possibleConstructorReturn = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self;\n};\n/* eslint-disable no-underscore-dangle */\n\n\nvar isCompositeComponent = function isCompositeComponent(type) {\n  return typeof type === 'function';\n};\n\nvar getComponentDisplayName = function getComponentDisplayName(type) {\n  var displayName = type.displayName || type.name;\n  return displayName && displayName !== 'ReactComponent' ? displayName : 'Component';\n};\n\nvar reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];\n\nfunction isReactClass(Component) {\n  return !!(Component.prototype && (React__default.Component.prototype.isPrototypeOf(Component.prototype) || // react 14 support\n  Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render));\n}\n\nfunction isReactClassInstance(Component) {\n  return Component && isReactClass({\n    prototype: Object.getPrototypeOf(Component)\n  });\n}\n\nvar getInternalInstance = function getInternalInstance(instance) {\n  return instance._reactInternalFiber || // React 16\n  instance._reactInternalInstance || // React 15\n  null;\n};\n\nvar updateInstance = function updateInstance(instance) {\n  var updater = instance.updater,\n      forceUpdate = instance.forceUpdate;\n\n  if (typeof forceUpdate === 'function') {\n    instance.forceUpdate();\n  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {\n    updater.enqueueForceUpdate(instance);\n  }\n};\n\nvar isFragmentNode = function isFragmentNode(_ref) {\n  var type = _ref.type;\n  return React__default.Fragment && type === React__default.Fragment;\n};\n\nvar ContextType = React__default.createContext ? React__default.createContext() : null;\nvar ConsumerType = ContextType && ContextType.Consumer.$$typeof;\nvar ProviderType = ContextType && ContextType.Provider.$$typeof;\nvar CONTEXT_CURRENT_VALUE = '_currentValue';\n\nvar isContextConsumer = function isContextConsumer(_ref2) {\n  var type = _ref2.type;\n  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === ConsumerType;\n};\n\nvar isContextProvider = function isContextProvider(_ref3) {\n  var type = _ref3.type;\n  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === ProviderType;\n};\n\nvar getContextProvider = function getContextProvider(type) {\n  return type && type._context;\n};\n\nvar generation = 1;\n\nvar increment = function increment() {\n  return generation++;\n};\n\nvar get$1 = function get() {\n  return generation;\n};\n\nvar PREFIX = '__reactstandin__';\nvar PROXY_KEY = PREFIX + 'key';\nvar GENERATION = PREFIX + 'proxyGeneration';\nvar REGENERATE_METHOD = PREFIX + 'regenerateByEval';\nvar UNWRAP_PROXY = PREFIX + 'getCurrent';\nvar CACHED_RESULT = PREFIX + 'cachedResult';\nvar PROXY_IS_MOUNTED = PREFIX + 'isMounted';\nvar configuration = {\n  // Log level\n  logLevel: 'error',\n  // Allows using SFC without changes. leading to some components not updated\n  pureSFC: false,\n  // Allows SFC to be used, enables \"intermediate\" components used by Relay, should be disabled for Preact\n  allowSFC: true,\n  // Hook on babel component register.\n  onComponentRegister: false\n};\n/* eslint-disable no-console */\n\nvar logger = {\n  debug: function debug() {\n    if (['debug'].indexOf(configuration.logLevel) !== -1) {\n      var _console;\n\n      (_console = console).debug.apply(_console, arguments);\n    }\n  },\n  log: function log() {\n    if (['debug', 'log'].indexOf(configuration.logLevel) !== -1) {\n      var _console2;\n\n      (_console2 = console).log.apply(_console2, arguments);\n    }\n  },\n  warn: function warn() {\n    if (['debug', 'log', 'warn'].indexOf(configuration.logLevel) !== -1) {\n      var _console3;\n\n      (_console3 = console).warn.apply(_console3, arguments);\n    }\n  },\n  error: function error() {\n    if (['debug', 'log', 'warn', 'error'].indexOf(configuration.logLevel) !== -1) {\n      var _console4;\n\n      (_console4 = console).error.apply(_console4, arguments);\n    }\n  }\n};\n/* eslint-disable no-eval, func-names */\n\nfunction safeReactConstructor(Component, lastInstance) {\n  try {\n    if (lastInstance) {\n      return new Component(lastInstance.props, lastInstance.context);\n    }\n\n    return new Component({}, {});\n  } catch (e) {// some components, like Redux connect could not be created without proper context\n  }\n\n  return null;\n}\n\nfunction isNativeFunction(fn) {\n  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;\n}\n\nvar identity = function identity(a) {\n  return a;\n};\n\nvar indirectEval = eval;\n\nvar doesSupportClasses = function () {\n  try {\n    indirectEval('class Test {}');\n    return true;\n  } catch (e) {\n    return false;\n  }\n}();\n\nvar ES6ProxyComponentFactory = doesSupportClasses && indirectEval('\\n(function(InitialParent, postConstructionAction) {\\n  return class ProxyComponent extends InitialParent {\\n    constructor(props, context) {\\n      super(props, context)\\n      postConstructionAction.call(this)\\n    }\\n  }\\n})\\n');\n\nvar ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {\n  function ProxyComponent(props, context) {\n    InitialParent.call(this, props, context);\n    postConstructionAction.call(this);\n  }\n\n  ProxyComponent.prototype = Object.create(InitialParent.prototype);\n  Object.setPrototypeOf(ProxyComponent, InitialParent);\n  return ProxyComponent;\n};\n\nvar proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;\n\nfunction getOwnKeys(target) {\n  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));\n}\n\nfunction shallowStringsEqual(a, b) {\n  for (var key in a) {\n    if (String(a[key]) !== String(b[key])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction deepPrototypeUpdate(dest, source) {\n  var deepDest = Object.getPrototypeOf(dest);\n  var deepSrc = Object.getPrototypeOf(source);\n\n  if (deepDest && deepSrc && deepSrc !== deepDest) {\n    deepPrototypeUpdate(deepDest, deepSrc);\n  }\n\n  if (source.prototype && source.prototype !== dest.prototype) {\n    dest.prototype = source.prototype;\n  }\n}\n\nfunction safeDefineProperty(target, key, props) {\n  try {\n    Object.defineProperty(target, key, props);\n  } catch (e) {\n    logger.warn('Error while wrapping', key, ' -> ', e);\n  }\n}\n\nvar RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', 'isStatelessFunctionalProxy', PROXY_KEY, UNWRAP_PROXY];\n\nfunction transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {\n  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {\n    if (RESERVED_STATICS.indexOf(key) !== -1) {\n      return;\n    }\n\n    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);\n    var savedDescriptor = savedDescriptors[key];\n\n    if (!shallowEqual(prevDescriptor, savedDescriptor)) {\n      safeDefineProperty(NextComponent, key, prevDescriptor);\n    }\n  }); // Copy newly defined static methods and properties\n\n  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {\n    if (RESERVED_STATICS.indexOf(key) !== -1) {\n      return;\n    }\n\n    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);\n    var savedDescriptor = savedDescriptors[key]; // Skip redefined descriptors\n\n    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {\n      safeDefineProperty(NextComponent, key, prevDescriptor);\n      return;\n    }\n\n    if (prevDescriptor && !savedDescriptor) {\n      safeDefineProperty(ProxyComponent, key, prevDescriptor);\n      return;\n    }\n\n    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {\n      configurable: true\n    });\n\n    savedDescriptors[key] = nextDescriptor;\n    safeDefineProperty(ProxyComponent, key, nextDescriptor);\n  }); // Remove static methods and properties that are no longer defined\n\n  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {\n    if (RESERVED_STATICS.indexOf(key) !== -1) {\n      return;\n    } // Skip statics that exist on the next class\n\n\n    if (NextComponent.hasOwnProperty(key)) {\n      return;\n    } // Skip non-configurable statics\n\n\n    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);\n\n    if (proxyDescriptor && !proxyDescriptor.configurable) {\n      return;\n    }\n\n    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);\n    var savedDescriptor = savedDescriptors[key]; // Skip redefined descriptors\n\n    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {\n      return;\n    }\n\n    safeDefineProperty(ProxyComponent, key, {\n      value: undefined\n    });\n  });\n  return savedDescriptors;\n}\n\nfunction mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {\n  var injectedCode = {};\n\n  try {\n    var nextInstance = safeReactConstructor(NextComponent, lastInstance);\n\n    try {\n      // Bypass babel class inheritance checking\n      deepPrototypeUpdate(InitialComponent, NextComponent);\n    } catch (e) {// It was ES6 class\n    }\n\n    var proxyInstance = safeReactConstructor(ProxyComponent, lastInstance);\n\n    if (!nextInstance || !proxyInstance) {\n      return injectedCode;\n    }\n\n    var mergedAttrs = _extends({}, proxyInstance, nextInstance);\n\n    var hasRegenerate = proxyInstance[REGENERATE_METHOD];\n    var ownKeys = getOwnKeys(Object.getPrototypeOf(ProxyComponent.prototype));\n    Object.keys(mergedAttrs).forEach(function (key) {\n      if (key.startsWith(PREFIX)) return;\n      var nextAttr = nextInstance[key];\n      var prevAttr = proxyInstance[key];\n\n      if (nextAttr) {\n        if (isNativeFunction(nextAttr) || isNativeFunction(prevAttr)) {\n          // this is bound method\n          var isSameArity = nextAttr.length === prevAttr.length;\n          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];\n\n          if ((isSameArity || !prevAttr) && existsInPrototype) {\n            if (hasRegenerate) {\n              injectedCode[key] = 'Object.getPrototypeOf(this)[\\'' + key + '\\'].bind(this)';\n            } else {\n              logger.warn('React Hot Loader:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');\n            }\n          } else {\n            logger.warn('React Hot Loader:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));\n          }\n\n          return;\n        }\n\n        var nextString = String(nextAttr);\n        var injectedBefore = injectedMembers[key];\n        var isArrow = nextString.indexOf('=>') >= 0;\n        var isFunction = nextString.indexOf('function') >= 0 || isArrow;\n        var referToThis = nextString.indexOf('this') >= 0;\n\n        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore) || isArrow && referToThis) {\n          if (!hasRegenerate) {\n            if (!isFunction) {\n              // just copy prop over\n              injectedCode[key] = nextAttr;\n            } else {\n              logger.warn('React Hot Loader:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');\n            }\n          } else {\n            injectedCode[key] = nextAttr;\n          }\n        }\n      }\n    });\n  } catch (e) {\n    logger.warn('React Hot Loader:', e);\n  }\n\n  return injectedCode;\n}\n\nfunction checkLifeCycleMethods(ProxyComponent, NextComponent) {\n  try {\n    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);\n    var p2 = NextComponent.prototype;\n    reactLifeCycleMountMethods.forEach(function (key) {\n      var d1 = Object.getOwnPropertyDescriptor(p1, key) || {\n        value: p1[key]\n      };\n      var d2 = Object.getOwnPropertyDescriptor(p2, key) || {\n        value: p2[key]\n      };\n\n      if (!shallowStringsEqual(d1, d2)) {\n        logger.warn('React Hot Loader:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');\n      }\n    });\n  } catch (e) {// Ignore errors\n  }\n}\n\nfunction inject(target, currentGeneration, injectedMembers) {\n  if (target[GENERATION] !== currentGeneration) {\n    var hasRegenerate = !!target[REGENERATE_METHOD];\n    Object.keys(injectedMembers).forEach(function (key) {\n      try {\n        if (hasRegenerate) {\n          var usedThis = String(injectedMembers[key]).match(/_this([\\d]+)/gi) || [];\n          target[REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\\n          var _this  = this; // common babel transpile\\n          ' + usedThis.map(function (name) {\n            return 'var ' + name + ' = this;';\n          }) + '\\n\\n          return ' + injectedMembers[key] + ';\\n          }).call(this)');\n        } else {\n          target[key] = injectedMembers[key];\n        }\n      } catch (e) {\n        logger.warn('React Hot Loader: Failed to regenerate method ', key, ' of class ', target);\n        logger.warn('got error', e);\n      }\n    });\n    target[GENERATION] = currentGeneration;\n  }\n}\n\nvar has = Object.prototype.hasOwnProperty;\nvar proxies = new WeakMap();\n\nvar resetClassProxies = function resetClassProxies() {\n  proxies = new WeakMap();\n};\n\nvar blackListedClassMembers = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUnmount', 'hotComponentRender', 'getInitialState', 'getDefaultProps'];\nvar defaultRenderOptions = {\n  componentWillRender: identity,\n  componentDidUpdate: function componentDidUpdate(result) {\n    return result;\n  },\n  componentDidRender: function componentDidRender(result) {\n    return result;\n  }\n};\n\nvar defineClassMember = function defineClassMember(Class, methodName, methodBody) {\n  return safeDefineProperty(Class.prototype, methodName, {\n    configurable: true,\n    writable: true,\n    enumerable: false,\n    value: methodBody\n  });\n};\n\nvar defineClassMembers = function defineClassMembers(Class, methods) {\n  return Object.keys(methods).forEach(function (methodName) {\n    return defineClassMember(Class, methodName, methods[methodName]);\n  });\n};\n\nvar setSFPFlag = function setSFPFlag(component, flag) {\n  return safeDefineProperty(component, 'isStatelessFunctionalProxy', {\n    configurable: false,\n    writable: false,\n    enumerable: false,\n    value: flag\n  });\n};\n\nvar copyMethodDescriptors = function copyMethodDescriptors(target, source) {\n  if (source) {\n    // it is possible to use `function-double` to construct an ideal clone, but does not make a sence\n    var keys = Object.getOwnPropertyNames(source);\n    keys.forEach(function (key) {\n      return safeDefineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n    });\n    safeDefineProperty(target, 'toString', {\n      configurable: true,\n      writable: false,\n      enumerable: false,\n      value: function toString() {\n        return String(source);\n      }\n    });\n  }\n\n  return target;\n};\n\nfunction createClassProxy(InitialComponent, proxyKey, options) {\n  var renderOptions = _extends({}, defaultRenderOptions, options); // Prevent double wrapping.\n  // Given a proxy class, return the existing proxy managing it.\n\n\n  var existingProxy = proxies.get(InitialComponent);\n\n  if (existingProxy) {\n    return existingProxy;\n  }\n\n  var CurrentComponent = void 0;\n  var savedDescriptors = {};\n  var injectedMembers = {};\n  var proxyGeneration = 0;\n  var classUpdatePostponed = null;\n  var instancesCount = 0;\n  var isFunctionalComponent = !isReactClass(InitialComponent);\n  var lastInstance = null;\n\n  function postConstructionAction() {\n    this[GENERATION] = 0;\n    lastInstance = this; // is there is an update pending\n\n    if (classUpdatePostponed) {\n      var callUpdate = classUpdatePostponed;\n      classUpdatePostponed = null;\n      callUpdate();\n    } // As long we can't override constructor\n    // every class shall evolve from a base class\n\n\n    inject(this, proxyGeneration, injectedMembers);\n  }\n\n  function proxiedUpdate() {\n    if (this) {\n      inject(this, proxyGeneration, injectedMembers);\n    }\n  }\n\n  function lifeCycleWrapperFactory(wrapperName) {\n    var sideEffect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;\n    return copyMethodDescriptors(function wrappedMethod() {\n      proxiedUpdate.call(this);\n      sideEffect(this);\n\n      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {\n        rest[_key] = arguments[_key];\n      }\n\n      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);\n    }, InitialComponent.prototype && InitialComponent.prototype[wrapperName]);\n  }\n\n  function methodWrapperFactory(wrapperName, realMethod) {\n    return copyMethodDescriptors(function wrappedMethod() {\n      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        rest[_key2] = arguments[_key2];\n      }\n\n      return realMethod.apply(this, rest);\n    }, realMethod);\n  }\n\n  var fakeBasePrototype = function fakeBasePrototype(Base) {\n    return Object.getOwnPropertyNames(Base).filter(function (key) {\n      return blackListedClassMembers.indexOf(key) === -1;\n    }).filter(function (key) {\n      var descriptor = Object.getOwnPropertyDescriptor(Base, key);\n      return typeof descriptor.value === 'function';\n    }).reduce(function (acc, key) {\n      acc[key] = methodWrapperFactory(key, Base[key]);\n      return acc;\n    }, {});\n  };\n\n  var componentDidMount = lifeCycleWrapperFactory('componentDidMount', function (target) {\n    target[PROXY_IS_MOUNTED] = true;\n    instancesCount++;\n  });\n  var componentDidUpdate = lifeCycleWrapperFactory('componentDidUpdate', renderOptions.componentDidUpdate);\n  var componentWillUnmount = lifeCycleWrapperFactory('componentWillUnmount', function (target) {\n    target[PROXY_IS_MOUNTED] = false;\n    instancesCount--;\n  });\n\n  function hotComponentRender() {\n    // repeating subrender call to keep RENDERED_GENERATION up to date\n    renderOptions.componentWillRender(this);\n    proxiedUpdate.call(this);\n    var result = void 0; // We need to use hasOwnProperty here, as the cached result is a React node\n    // and can be null or some other falsy value.\n\n    if (has.call(this, CACHED_RESULT)) {\n      result = this[CACHED_RESULT];\n      delete this[CACHED_RESULT];\n    } else if (isFunctionalComponent) {\n      result = CurrentComponent(this.props, this.context);\n    } else {\n      result = (CurrentComponent.prototype.render || this.render).apply(this, // eslint-disable-next-line prefer-rest-params\n      arguments);\n    }\n\n    return renderOptions.componentDidRender.call(this, result);\n  }\n\n  function proxiedRender() {\n    renderOptions.componentWillRender(this);\n\n    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      args[_key3] = arguments[_key3];\n    }\n\n    return hotComponentRender.call.apply(hotComponentRender, [this].concat(args));\n  }\n\n  var defineProxyMethods = function defineProxyMethods(Proxy) {\n    var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    defineClassMembers(Proxy, _extends({}, fakeBasePrototype(Base), {\n      render: proxiedRender,\n      hotComponentRender: hotComponentRender,\n      componentDidMount: componentDidMount,\n      componentDidUpdate: componentDidUpdate,\n      componentWillUnmount: componentWillUnmount\n    }));\n  };\n\n  var _ProxyFacade = void 0;\n\n  var ProxyComponent = null;\n  var proxy = void 0;\n\n  if (!isFunctionalComponent) {\n    // Component\n    ProxyComponent = proxyClassCreator(InitialComponent, postConstructionAction);\n    defineProxyMethods(ProxyComponent, InitialComponent.prototype);\n    _ProxyFacade = ProxyComponent;\n  } else if (!configuration.allowSFC) {\n    // SFC Converted to component. Does not support returning precreated instances from render.\n    ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);\n    defineProxyMethods(ProxyComponent);\n    _ProxyFacade = ProxyComponent;\n  } else {\n    // SFC\n    // This function only gets called for the initial mount. The actual\n    // rendered component instance will be the return value.\n    // eslint-disable-next-line func-names\n    _ProxyFacade = function ProxyFacade(props, context) {\n      var result = CurrentComponent(props, context); // simple SFC, could continue to be SFC\n\n      if (configuration.pureSFC) {\n        if (!CurrentComponent.contextTypes) {\n          if (!_ProxyFacade.isStatelessFunctionalProxy) {\n            setSFPFlag(_ProxyFacade, true);\n          }\n\n          return renderOptions.componentDidRender(result);\n        }\n      }\n\n      setSFPFlag(_ProxyFacade, false); // This is a Relay-style container constructor. We can't do the prototype-\n      // style wrapping for this as we do elsewhere, so just we just pass it\n      // through as-is.\n\n      if (isReactClassInstance(result)) {\n        ProxyComponent = null; // Relay lazily sets statics like getDerivedStateFromProps on initial\n        // render in lazy construction, so we need to do the same here.\n\n        transferStaticProps(_ProxyFacade, savedDescriptors, null, CurrentComponent);\n        return result;\n      } // Otherwise, it's a normal functional component. Build the real proxy\n      // and use it going forward.\n\n\n      ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);\n      defineProxyMethods(ProxyComponent);\n      var determinateResult = new ProxyComponent(props, context); // Cache the initial render result so we don't call the component function\n      // a second time for the initial render.\n\n      determinateResult[CACHED_RESULT] = result;\n      return determinateResult;\n    };\n  }\n\n  function get$$1() {\n    return _ProxyFacade;\n  }\n\n  function getCurrent() {\n    return CurrentComponent;\n  }\n\n  safeDefineProperty(_ProxyFacade, UNWRAP_PROXY, {\n    configurable: false,\n    writable: false,\n    enumerable: false,\n    value: getCurrent\n  });\n  safeDefineProperty(_ProxyFacade, PROXY_KEY, {\n    configurable: false,\n    writable: false,\n    enumerable: false,\n    value: proxyKey\n  });\n  safeDefineProperty(_ProxyFacade, 'toString', {\n    configurable: true,\n    writable: false,\n    enumerable: false,\n    value: function toString() {\n      return String(CurrentComponent);\n    }\n  });\n\n  function update(NextComponent) {\n    if (typeof NextComponent !== 'function') {\n      throw new Error('Expected a constructor.');\n    }\n\n    if (NextComponent === CurrentComponent) {\n      return;\n    } // Prevent proxy cycles\n\n\n    var existingProxy = proxies.get(NextComponent);\n\n    if (existingProxy) {\n      return;\n    }\n\n    isFunctionalComponent = !isReactClass(NextComponent);\n    proxies.set(NextComponent, proxy);\n    proxyGeneration++; // Save the next constructor so we call it\n\n    var PreviousComponent = CurrentComponent;\n    CurrentComponent = NextComponent; // Try to infer displayName\n\n    var displayName = getComponentDisplayName(CurrentComponent);\n    safeDefineProperty(_ProxyFacade, 'displayName', {\n      configurable: true,\n      writable: false,\n      enumerable: true,\n      value: displayName\n    });\n\n    if (ProxyComponent) {\n      safeDefineProperty(ProxyComponent, 'name', {\n        value: displayName\n      });\n    }\n\n    savedDescriptors = transferStaticProps(_ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);\n    if (isFunctionalComponent || !ProxyComponent) ;else {\n      var classHotReplacement = function classHotReplacement() {\n        checkLifeCycleMethods(ProxyComponent, NextComponent);\n        Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);\n        defineProxyMethods(ProxyComponent, NextComponent.prototype);\n\n        if (proxyGeneration > 1) {\n          injectedMembers = mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);\n        }\n      }; // Was constructed once\n\n\n      if (instancesCount > 0) {\n        classHotReplacement();\n      } else {\n        classUpdatePostponed = classHotReplacement;\n      }\n    }\n  }\n\n  update(InitialComponent);\n\n  var dereference = function dereference() {\n    proxies.delete(InitialComponent);\n    proxies.delete(_ProxyFacade);\n    proxies.delete(CurrentComponent);\n  };\n\n  proxy = {\n    get: get$$1,\n    update: update,\n    dereference: dereference,\n    getCurrent: function getCurrent() {\n      return CurrentComponent;\n    }\n  };\n  proxies.set(InitialComponent, proxy);\n  proxies.set(_ProxyFacade, proxy);\n  safeDefineProperty(proxy, UNWRAP_PROXY, {\n    configurable: false,\n    writable: false,\n    enumerable: false,\n    value: getCurrent\n  });\n  return proxy;\n}\n\nvar proxiesByID = void 0;\nvar blackListedProxies = void 0;\nvar registeredComponents = void 0;\nvar idsByType = void 0;\nvar elementCount = 0;\nvar renderOptions = {};\n\nvar generateTypeId = function generateTypeId() {\n  return 'auto-' + elementCount++;\n};\n\nvar getIdByType = function getIdByType(type) {\n  return idsByType.get(type);\n};\n\nvar isProxyType = function isProxyType(type) {\n  return type[PROXY_KEY];\n};\n\nvar getProxyById = function getProxyById(id) {\n  return proxiesByID[id];\n};\n\nvar getProxyByType = function getProxyByType(type) {\n  return getProxyById(getIdByType(type));\n};\n\nvar registerComponent = function registerComponent(type) {\n  return registeredComponents.set(type, 1);\n};\n\nvar isRegisteredComponent = function isRegisteredComponent(type) {\n  return registeredComponents.has(type);\n};\n\nvar setStandInOptions = function setStandInOptions(options) {\n  renderOptions = options;\n};\n\nvar updateProxyById = function updateProxyById(id, type) {\n  // Remember the ID.\n  idsByType.set(type, id);\n\n  if (!proxiesByID[id]) {\n    proxiesByID[id] = createClassProxy(type, id, renderOptions);\n  } else {\n    proxiesByID[id].update(type);\n  }\n\n  return proxiesByID[id];\n};\n\nvar createProxyForType = function createProxyForType(type) {\n  return getProxyByType(type) || updateProxyById(generateTypeId(), type);\n};\n\nvar isTypeBlacklisted = function isTypeBlacklisted(type) {\n  return blackListedProxies.has(type);\n};\n\nvar blacklistByType = function blacklistByType(type) {\n  return blackListedProxies.set(type, true);\n};\n\nvar resetProxies = function resetProxies() {\n  proxiesByID = {};\n  idsByType = new WeakMap();\n  blackListedProxies = new WeakMap();\n  registeredComponents = new WeakMap();\n  resetClassProxies();\n};\n\nresetProxies();\nvar tune = {\n  allowSFC: false\n};\n\nvar preactAdapter = function preactAdapter(instance, resolveType) {\n  var oldHandler = instance.options.vnode;\n  Object.assign(configuration, tune);\n\n  instance.options.vnode = function (vnode) {\n    vnode.nodeName = resolveType(vnode.nodeName);\n\n    if (oldHandler) {\n      oldHandler(vnode);\n    }\n  };\n};\n/* eslint-disable no-use-before-define */\n\n\nfunction _resolveType(type) {\n  if (!isCompositeComponent(type) || isTypeBlacklisted(type) || isProxyType(type)) return type;\n  var proxy = reactHotLoader.disableProxyCreation ? getProxyByType(type) : createProxyForType(type);\n  return proxy ? proxy.get() : type;\n}\n\nvar reactHotLoader = {\n  register: function register(type, uniqueLocalName, fileName) {\n    if (isCompositeComponent(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {\n      var id = fileName + '#' + uniqueLocalName;\n      var proxy = getProxyById(id);\n\n      if (proxy && proxy.getCurrent() !== type) {\n        // component got replaced. Need to reconcile\n        increment();\n\n        if (isTypeBlacklisted(type) || isTypeBlacklisted(proxy.getCurrent())) {\n          logger.error('React-hot-loader: Cold component', uniqueLocalName, 'at', fileName, 'has been updated');\n        }\n      }\n\n      if (configuration.onComponentRegister) {\n        configuration.onComponentRegister(type, uniqueLocalName, fileName);\n      }\n\n      updateProxyById(id, type);\n      registerComponent(type);\n    }\n  },\n  reset: function reset() {\n    resetProxies();\n  },\n  preact: function preact(instance) {\n    preactAdapter(instance, _resolveType);\n  },\n  resolveType: function resolveType(type) {\n    return _resolveType(type);\n  },\n  patch: function patch(React$$1) {\n    if (!React$$1.createElement.isPatchedByReactHotLoader) {\n      var originalCreateElement = React$$1.createElement; // Trick React into rendering a proxy so that\n      // its state is preserved when the class changes.\n      // This will update the proxy if it's for a known type.\n\n      React$$1.createElement = function (type) {\n        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n          args[_key - 1] = arguments[_key];\n        }\n\n        return originalCreateElement.apply(undefined, [_resolveType(type)].concat(args));\n      };\n\n      React$$1.createElement.isPatchedByReactHotLoader = true;\n    }\n\n    if (!React$$1.createFactory.isPatchedByReactHotLoader) {\n      // Patch React.createFactory to use patched createElement\n      // because the original implementation uses the internal,\n      // unpatched ReactElement.createElement\n      React$$1.createFactory = function (type) {\n        var factory = React$$1.createElement.bind(null, type);\n        factory.type = type;\n        return factory;\n      };\n\n      React$$1.createFactory.isPatchedByReactHotLoader = true;\n    }\n\n    if (!React$$1.Children.only.isPatchedByReactHotLoader) {\n      var originalChildrenOnly = React$$1.Children.only; // Use the same trick as React.createElement\n\n      React$$1.Children.only = function (children) {\n        return originalChildrenOnly(_extends({}, children, {\n          type: _resolveType(children.type)\n        }));\n      };\n\n      React$$1.Children.only.isPatchedByReactHotLoader = true;\n    }\n\n    reactHotLoader.reset();\n  },\n  disableProxyCreation: false\n};\n/* eslint-disable no-underscore-dangle */\n\nfunction pushStack(stack, node) {\n  stack.type = node.type;\n  stack.children = [];\n  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;\n\n  if (!stack.instance) {\n    stack.instance = {\n      SFC_fake: stack.type,\n      props: {},\n      render: function render() {\n        return stack.type(stack.instance.props);\n      }\n    };\n  }\n}\n\nfunction hydrateFiberStack(node, stack) {\n  pushStack(stack, node);\n\n  if (node.child) {\n    var child = node.child;\n\n    do {\n      var childStack = {};\n      hydrateFiberStack(child, childStack);\n      stack.children.push(childStack);\n      child = child.sibling;\n    } while (child);\n  }\n}\n/* eslint-disable no-underscore-dangle */\n\n\nfunction pushState(stack, type, instance) {\n  stack.type = type;\n  stack.children = [];\n  stack.instance = instance || stack;\n\n  if (typeof type === 'function' && type.isStatelessFunctionalProxy) {\n    // In React 15 SFC is wrapped by component. We have to detect our proxies and change the way it works\n    stack.instance = {\n      SFC_fake: type,\n      props: {},\n      render: function render() {\n        return type(stack.instance.props);\n      }\n    };\n  }\n}\n\nfunction hydrateLegacyStack(node, stack) {\n  if (node._currentElement) {\n    pushState(stack, node._currentElement.type, node._instance || stack);\n  }\n\n  if (node._renderedComponent) {\n    var childStack = {};\n    hydrateLegacyStack(node._renderedComponent, childStack);\n    stack.children.push(childStack);\n  } else if (node._renderedChildren) {\n    Object.keys(node._renderedChildren).forEach(function (key) {\n      var childStack = {};\n      hydrateLegacyStack(node._renderedChildren[key], childStack);\n      stack.children.push(childStack);\n    });\n  }\n}\n/* eslint-disable no-underscore-dangle */\n\n\nfunction getReactStack(instance) {\n  var rootNode = getInternalInstance(instance);\n  var stack = {};\n\n  if (rootNode) {\n    // React stack\n    var isFiber = typeof rootNode.tag === 'number';\n\n    if (isFiber) {\n      hydrateFiberStack(rootNode, stack);\n    } else {\n      hydrateLegacyStack(rootNode, stack);\n    }\n  }\n\n  return stack;\n} // some `empty` names, React can autoset display name to...\n\n\nvar UNDEFINED_NAMES = {\n  Unknown: true,\n  Component: true\n};\nvar renderStack = [];\n\nvar stackReport = function stackReport() {\n  var rev = renderStack.slice().reverse();\n  logger.warn('in', rev[0].name, rev);\n};\n\nvar emptyMap = new Map();\n\nvar stackContext = function stackContext() {\n  return (renderStack[renderStack.length - 1] || {}).context || emptyMap;\n};\n\nvar areNamesEqual = function areNamesEqual(a, b) {\n  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];\n};\n\nvar shouldUseRenderMethod = function shouldUseRenderMethod(fn) {\n  return fn && (isReactClassInstance(fn) || fn.SFC_fake);\n};\n\nvar isFunctional = function isFunctional(fn) {\n  return typeof fn === 'function';\n};\n\nvar isArray = function isArray(fn) {\n  return Array.isArray(fn);\n};\n\nvar asArray = function asArray(a) {\n  return isArray(a) ? a : [a];\n};\n\nvar getTypeOf = function getTypeOf(type) {\n  if (isReactClass(type)) return 'ReactComponent';\n  if (isFunctional(type)) return 'StatelessFunctional';\n  return 'Fragment'; // ?\n};\n\nvar filterNullArray = function filterNullArray(a) {\n  if (!a) return [];\n  return a.filter(function (x) {\n    return !!x;\n  });\n};\n\nvar unflatten = function unflatten(a) {\n  return a.reduce(function (acc, a) {\n    if (Array.isArray(a)) {\n      acc.push.apply(acc, unflatten(a));\n    } else {\n      acc.push(a);\n    }\n\n    return acc;\n  }, []);\n};\n\nvar getElementType = function getElementType(child) {\n  return child.type[UNWRAP_PROXY] ? child.type[UNWRAP_PROXY]() : child.type;\n};\n\nvar haveTextSimilarity = function haveTextSimilarity(a, b) {\n  return (// equal or slight changed\n    a === b || levenshtein.get(a, b) < a.length * 0.2\n  );\n};\n\nvar equalClasses = function equalClasses(a, b) {\n  var prototypeA = a.prototype;\n  var prototypeB = Object.getPrototypeOf(b.prototype);\n  var hits = 0;\n  var misses = 0;\n  var comparisons = 0;\n  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {\n    var descriptorA = Object.getOwnPropertyDescriptor(prototypeA, key);\n    var valueA = descriptorA && (descriptorA.value || descriptorA.get || descriptorA.set);\n    var descriptorB = Object.getOwnPropertyDescriptor(prototypeB, key);\n    var valueB = descriptorB && (descriptorB.value || descriptorB.get || descriptorB.set);\n\n    if (typeof valueA === 'function' && key !== 'constructor') {\n      comparisons++;\n\n      if (haveTextSimilarity(String(valueA), String(valueB))) {\n        hits++;\n      } else {\n        misses++;\n\n        if (key === 'render') {\n          misses++;\n        }\n      }\n    }\n  }); // allow to add or remove one function\n\n  return hits > 0 && misses <= 1 || comparisons === 0;\n};\n\nvar areSwappable = function areSwappable(a, b) {\n  // both are registered components and have the same name\n  if (getIdByType(b) && getIdByType(a) === getIdByType(b)) {\n    return true;\n  }\n\n  if (getTypeOf(a) !== getTypeOf(b)) {\n    return false;\n  }\n\n  if (isReactClass(a)) {\n    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && equalClasses(a, b);\n  }\n\n  if (isFunctional(a)) {\n    var nameA = getComponentDisplayName(a);\n    return areNamesEqual(nameA, getComponentDisplayName(b)) && nameA !== 'Component' || haveTextSimilarity(String(a), String(b));\n  }\n\n  return false;\n};\n\nvar render = function render(component) {\n  if (!component) {\n    return [];\n  }\n\n  if (shouldUseRenderMethod(component)) {\n    // not calling real render method to prevent call recursion.\n    // stateless components does not have hotComponentRender\n    return component.hotComponentRender ? component.hotComponentRender() : component.render();\n  }\n\n  if (isArray(component)) {\n    return component.map(render);\n  }\n\n  if (component.children) {\n    return component.children;\n  }\n\n  return [];\n};\n\nvar NO_CHILDREN = {\n  children: []\n};\n\nvar mapChildren = function mapChildren(children, instances) {\n  return {\n    children: children.filter(function (c) {\n      return c;\n    }).map(function (child, index) {\n      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child.isMerged) {\n        return child;\n      }\n\n      var instanceLine = instances[index] || {};\n      var oldChildren = asArray(instanceLine.children || []);\n\n      if (Array.isArray(child)) {\n        return _extends({\n          type: null\n        }, mapChildren(child, oldChildren));\n      }\n\n      var newChildren = asArray(child.props && child.props.children || child.children || []);\n      var nextChildren = child.type !== 'function' && oldChildren.length && mapChildren(newChildren, oldChildren);\n      return _extends({\n        nextProps: child.props,\n        isMerged: true\n      }, instanceLine, nextChildren || {}, {\n        type: child.type\n      });\n    })\n  };\n};\n\nvar mergeInject = function mergeInject(a, b, instance) {\n  if (a && !Array.isArray(a)) {\n    return mergeInject([a], b);\n  }\n\n  if (b && !Array.isArray(b)) {\n    return mergeInject(a, [b]);\n  }\n\n  if (!a || !b) {\n    return NO_CHILDREN;\n  }\n\n  if (a.length === b.length) {\n    return mapChildren(a, b);\n  } // in some cases (no confidence here) B could contain A except null children\n  // in some cases - could not.\n  // this depends on React version and the way you build component.\n\n\n  var nonNullA = filterNullArray(a);\n\n  if (nonNullA.length === b.length) {\n    return mapChildren(nonNullA, b);\n  }\n\n  var flatA = unflatten(nonNullA);\n  var flatB = unflatten(b);\n\n  if (flatA.length === flatB.length) {\n    return mapChildren(flatA, flatB);\n  }\n\n  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') ;else {\n    logger.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);\n    stackReport();\n  }\n  return NO_CHILDREN;\n};\n\nvar transformFlowNode = function transformFlowNode(flow) {\n  return flow.reduce(function (acc, node) {\n    if (node && isFragmentNode(node)) {\n      if (node.props && node.props.children) {\n        return [].concat(acc, filterNullArray(asArray(node.props.children)));\n      }\n\n      if (node.children) {\n        return [].concat(acc, filterNullArray(asArray(node.children)));\n      }\n    }\n\n    return [].concat(acc, [node]);\n  }, []);\n};\n\nvar scheduledUpdates = [];\nvar scheduledUpdate = 0;\n\nvar flushScheduledUpdates = function flushScheduledUpdates() {\n  var instances = scheduledUpdates;\n  scheduledUpdates = [];\n  scheduledUpdate = 0;\n  instances.forEach(function (instance) {\n    return instance[PROXY_IS_MOUNTED] && updateInstance(instance);\n  });\n};\n\nvar unscheduleUpdate = function unscheduleUpdate(instance) {\n  scheduledUpdates = scheduledUpdates.filter(function (inst) {\n    return inst !== instance;\n  });\n};\n\nvar scheduleInstanceUpdate = function scheduleInstanceUpdate(instance) {\n  scheduledUpdates.push(instance);\n\n  if (!scheduledUpdate) {\n    scheduledUpdate = setTimeout(flushScheduledUpdates);\n  }\n};\n\nvar hotReplacementRender = function hotReplacementRender(instance, stack) {\n  if (isReactClassInstance(instance)) {\n    var type = getElementType(stack);\n    renderStack.push({\n      name: getComponentDisplayName(type),\n      type: type,\n      props: stack.instance.props,\n      context: stackContext()\n    });\n  }\n\n  var flow = transformFlowNode(filterNullArray(asArray(render(instance))));\n  var children = stack.children;\n  flow.forEach(function (child, index) {\n    var stackChild = children[index];\n\n    var next = function next(instance) {\n      // copy over props as long new component may be hidden inside them\n      // child does not have all props, as long some of them can be calculated on componentMount.\n      var realProps = instance.props;\n\n      var nextProps = _extends({}, realProps, child.nextProps || {}, child.props || {});\n\n      if (isReactClassInstance(instance) && instance.componentWillUpdate) {\n        // Force-refresh component (bypass redux renderedComponent)\n        instance.componentWillUpdate(_extends({}, realProps), instance.state);\n      }\n\n      instance.props = nextProps;\n      hotReplacementRender(instance, stackChild);\n      instance.props = realProps;\n    }; // text node\n\n\n    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {\n      if (stackChild && stackChild.children && stackChild.children.length) {\n        logger.error('React-hot-loader: reconciliation failed', 'could not dive into [', child, '] while some elements are still present in the tree.');\n        stackReport();\n      }\n\n      return;\n    }\n\n    if (_typeof(child.type) !== _typeof(stackChild.type)) {\n      // Portals could generate undefined !== null\n      if (child.type && stackChild.type) {\n        logger.warn('React-hot-loader: got ', child.type, 'instead of', stackChild.type);\n        stackReport();\n      }\n\n      return;\n    } // React context\n\n\n    if (isContextConsumer(child)) {\n      try {\n        next({\n          children: (child.props ? child.props.children : child.children[0])(stackContext().get(child.type) || child.type[CONTEXT_CURRENT_VALUE])\n        });\n      } catch (e) {// do nothing, yet\n      }\n    } else if (typeof child.type !== 'function') {\n      // React\n      var childName = child.type ? getComponentDisplayName(child.type) : 'empty';\n      var extraContext = stackContext();\n\n      if (isContextProvider(child)) {\n        extraContext = new Map(extraContext);\n        extraContext.set(getContextProvider(child.type), _extends({}, child.nextProps || {}, child.props || {}).value);\n        childName = 'ContextProvider';\n      }\n\n      renderStack.push({\n        name: childName,\n        type: child.type,\n        props: stack.instance.props,\n        context: extraContext\n      });\n      next( // move types from render to the instances of hydrated tree\n      mergeInject(transformFlowNode(asArray(child.props ? child.props.children : child.children)), stackChild.instance.children, stackChild.instance));\n      renderStack.pop();\n    } else {\n      if (child.type === stackChild.type) {\n        next(stackChild.instance);\n      } else {\n        // unwrap proxy\n        var childType = getElementType(child);\n\n        if (!stackChild.type[PROXY_KEY]) {\n          if (isTypeBlacklisted(stackChild.type)) {\n            logger.warn('React-hot-loader: cold element got updated ', stackChild.type);\n            return;\n          }\n          /* eslint-disable no-console */\n\n\n          logger.error('React-hot-loader: fatal error caused by ', stackChild.type, ' - no instrumentation found. ', 'Please require react-hot-loader before React. More in troubleshooting.');\n          stackReport();\n          throw new Error('React-hot-loader: wrong configuration');\n        }\n\n        if (isRegisteredComponent(childType) || isRegisteredComponent(stackChild.type)) ;else if (areSwappable(childType, stackChild.type)) {\n          // they are both registered, or have equal code/displayname/signature\n          // update proxy using internal PROXY_KEY\n          updateProxyById(stackChild.type[PROXY_KEY], childType);\n          next(stackChild.instance);\n        } else {\n          logger.warn('React-hot-loader: a ' + getComponentDisplayName(childType) + ' was found where a ' + getComponentDisplayName(stackChild) + ' was expected.\\n          ' + childType);\n          stackReport();\n        }\n      }\n\n      scheduleInstanceUpdate(stackChild.instance);\n    }\n  });\n\n  if (isReactClassInstance(instance)) {\n    renderStack.pop();\n  }\n};\n\nvar hotComponentCompare = function hotComponentCompare(oldType, newType) {\n  if (oldType === newType) {\n    return true;\n  }\n\n  if (areSwappable(newType, oldType)) {\n    getProxyByType(newType[UNWRAP_PROXY]()).dereference();\n    updateProxyById(oldType[PROXY_KEY], newType[UNWRAP_PROXY]());\n    updateProxyById(newType[PROXY_KEY], oldType[UNWRAP_PROXY]());\n    return true;\n  }\n\n  return false;\n};\n\nvar hotReplacementRender$1 = function (instance, stack) {\n  try {\n    // disable reconciler to prevent upcoming components from proxying.\n    reactHotLoader.disableProxyCreation = true;\n    renderStack = [];\n    hotReplacementRender(instance, stack);\n  } catch (e) {\n    logger.warn('React-hot-loader: reconcilation failed due to error', e);\n  } finally {\n    reactHotLoader.disableProxyCreation = false;\n  }\n};\n\nvar reconcileHotReplacement = function reconcileHotReplacement(ReactInstance) {\n  return hotReplacementRender$1(ReactInstance, getReactStack(ReactInstance));\n};\n\nvar RENDERED_GENERATION = 'REACT_HOT_LOADER_RENDERED_GENERATION';\n\nvar renderReconciler = function renderReconciler(target, force) {\n  // we are not inside parent reconcilation\n  var currentGeneration = get$1();\n  var componentGeneration = target[RENDERED_GENERATION];\n  target[RENDERED_GENERATION] = currentGeneration;\n\n  if (!reactHotLoader.disableProxyCreation) {\n    if ((componentGeneration || force) && componentGeneration !== currentGeneration) {\n      reconcileHotReplacement(target);\n      return true;\n    }\n  }\n\n  return false;\n};\n\nfunction asyncReconciledRender(target) {\n  renderReconciler(target, false);\n}\n\nfunction proxyWrapper(element) {\n  // post wrap on post render\n  if (!reactHotLoader.disableProxyCreation) {\n    unscheduleUpdate(this);\n  }\n\n  if (!element) {\n    return element;\n  }\n\n  if (Array.isArray(element)) {\n    return element.map(proxyWrapper);\n  }\n\n  if (typeof element.type === 'function') {\n    var proxy = getProxyByType(element.type);\n\n    if (proxy) {\n      return _extends({}, element, {\n        type: proxy.get()\n      });\n    }\n  }\n\n  return element;\n}\n\nsetStandInOptions({\n  componentWillRender: asyncReconciledRender,\n  componentDidRender: proxyWrapper,\n  componentDidUpdate: flushScheduledUpdates\n});\n\nvar AppContainer = function (_React$Component) {\n  inherits(AppContainer, _React$Component);\n\n  function AppContainer() {\n    var _temp, _this, _ret;\n\n    classCallCheck(this, AppContainer);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {\n      error: null,\n      // eslint-disable-next-line react/no-unused-state\n      generation: 0\n    }, _temp), possibleConstructorReturn(_this, _ret);\n  }\n\n  AppContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {\n    if (prevState.generation !== get$1()) {\n      // Hot reload is happening.\n      return {\n        error: null,\n        generation: get$1()\n      };\n    }\n\n    return null;\n  };\n\n  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {\n    // Don't update the component if the state had an error and still has one.\n    // This allows to break an infinite loop of error -> render -> error -> render\n    // https://github.com/gaearon/react-hot-loader/issues/696\n    if (prevState.error && this.state.error) {\n      return false;\n    }\n\n    return true;\n  };\n\n  AppContainer.prototype.componentDidCatch = function componentDidCatch(error) {\n    logger.error(error);\n    this.setState({\n      error: error\n    });\n  };\n\n  AppContainer.prototype.render = function render() {\n    var error = this.state.error;\n\n    if (this.props.errorReporter && error) {\n      return React__default.createElement(this.props.errorReporter, {\n        error: error\n      });\n    }\n\n    return React__default.Children.only(this.props.children);\n  };\n\n  return AppContainer;\n}(React__default.Component);\n\nAppContainer.propTypes = {\n  children: function children(props) {\n    if (React__default.Children.count(props.children) !== 1) {\n      return new Error('Invalid prop \"children\" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');\n    }\n\n    return undefined;\n  },\n  errorReporter: PropTypes.oneOfType([PropTypes.node, PropTypes.func]) //  trying first react-lifecycles-compat.polyfill, then trying react-lifecycles-compat, which could be .default\n\n};\nvar realPolyfill = defaultPolyfill.polyfill || defaultPolyfill__default;\nrealPolyfill(AppContainer);\nvar openedModules = {};\nvar hotModules = {};\n\nvar createHotModule = function createHotModule() {\n  return {\n    instances: [],\n    updateTimeout: 0\n  };\n};\n\nvar hotModule = function hotModule(moduleId) {\n  if (!hotModules[moduleId]) {\n    hotModules[moduleId] = createHotModule();\n  }\n\n  return hotModules[moduleId];\n};\n\nvar isOpened = function isOpened(sourceModule) {\n  return sourceModule && !!openedModules[sourceModule.id];\n};\n\nvar enter = function enter(sourceModule) {\n  if (sourceModule && sourceModule.id) {\n    openedModules[sourceModule.id] = true;\n  } else {\n    logger.warn('React-hot-loader: no `module` variable found. Do you shadow system variable?');\n  }\n};\n\nvar leave = function leave(sourceModule) {\n  if (sourceModule && sourceModule.id) {\n    delete openedModules[sourceModule.id];\n  }\n};\n/* eslint-disable camelcase, no-undef */\n\n\nvar requireIndirect =  true ? __webpack_require__ : undefined;\n/* eslint-enable */\n\nvar createHoc = function createHoc(SourceComponent, TargetComponent) {\n  hoistNonReactStatic(TargetComponent, SourceComponent);\n  TargetComponent.displayName = 'HotExported' + getComponentDisplayName(SourceComponent);\n  return TargetComponent;\n};\n\nvar makeHotExport = function makeHotExport(sourceModule) {\n  var updateInstances = function updateInstances() {\n    var module = hotModule(sourceModule.id);\n    clearTimeout(module.updateTimeout);\n    module.updateTimeout = setTimeout(function () {\n      try {\n        requireIndirect(sourceModule.id);\n      } catch (e) {// just swallow\n      }\n\n      module.instances.forEach(function (inst) {\n        return inst.forceUpdate();\n      });\n    });\n  };\n\n  if (sourceModule.hot) {\n    // Mark as self-accepted for Webpack\n    // Update instances for Parcel\n    sourceModule.hot.accept(updateInstances); // Webpack way\n\n    if (sourceModule.hot.addStatusHandler) {\n      if (sourceModule.hot.status() === 'idle') {\n        sourceModule.hot.addStatusHandler(function (status) {\n          if (status === 'apply') {\n            updateInstances();\n          }\n        });\n      }\n    }\n  }\n};\n\nvar hot = function hot(sourceModule) {\n  if (!sourceModule || !sourceModule.id) {\n    // this is fatal\n    throw new Error('React-hot-loader: `hot` could not find the `id` property in the `module` you have provided');\n  }\n\n  var moduleId = sourceModule.id;\n  var module = hotModule(moduleId);\n  makeHotExport(sourceModule); // TODO: Ensure that all exports from this file are react components.\n\n  return function (WrappedComponent) {\n    // register proxy for wrapped component\n    reactHotLoader.register(WrappedComponent, getComponentDisplayName(WrappedComponent), 'RHL' + moduleId);\n    return createHoc(WrappedComponent, function (_Component) {\n      inherits(ExportedComponent, _Component);\n\n      function ExportedComponent() {\n        classCallCheck(this, ExportedComponent);\n        return possibleConstructorReturn(this, _Component.apply(this, arguments));\n      }\n\n      ExportedComponent.prototype.componentDidMount = function componentDidMount() {\n        module.instances.push(this);\n      };\n\n      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {\n        var _this2 = this;\n\n        if (isOpened(sourceModule)) {\n          var componentName = getComponentDisplayName(WrappedComponent);\n          logger.error('React-hot-loader: Detected AppContainer unmount on module \\'' + moduleId + '\\' update.\\n' + ('Did you use \"hot(' + componentName + ')\" and \"ReactDOM.render()\" in the same file?\\n') + ('\"hot(' + componentName + ')\" shall only be used as export.\\n') + 'Please refer to \"Getting Started\" (https://github.com/gaearon/react-hot-loader/).');\n        }\n\n        module.instances = module.instances.filter(function (a) {\n          return a !== _this2;\n        });\n      };\n\n      ExportedComponent.prototype.render = function render() {\n        return React__default.createElement(AppContainer, null, React__default.createElement(WrappedComponent, this.props));\n      };\n\n      return ExportedComponent;\n    }(React.Component));\n  };\n};\n\nvar getProxyOrType = function getProxyOrType(type) {\n  var proxy = getProxyByType(type);\n  return proxy ? proxy.get() : type;\n};\n\nvar areComponentsEqual = function areComponentsEqual(a, b) {\n  return getProxyOrType(a) === getProxyOrType(b);\n};\n\nvar compareOrSwap = function compareOrSwap(oldType, newType) {\n  return hotComponentCompare(oldType, newType);\n};\n\nvar cold = function cold(type) {\n  blacklistByType(type);\n  return type;\n};\n\nvar setConfig = function setConfig(config) {\n  return Object.assign(configuration, config);\n};\n\nreactHotLoader.patch(React__default);\nexports.default = reactHotLoader;\nexports.AppContainer = AppContainer;\nexports.hot = hot;\nexports.enterModule = enter;\nexports.leaveModule = leave;\nexports.areComponentsEqual = areComponentsEqual;\nexports.compareOrSwap = compareOrSwap;\nexports.cold = cold;\nexports.setConfig = setConfig;\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/react-hot-loader/dist/react-hot-loader.development.js?");

/***/ }),

/***/ "../../node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _interopDefault(t) {\n  return t && \"object\" == typeof t && \"default\" in t ? t.default : t;\n}\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: !0\n});\n\nvar React = _interopDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\")),\n    classCallCheck = function (t, e) {\n  if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n},\n    inherits = function (t, e) {\n  if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function, not \" + typeof e);\n  t.prototype = Object.create(e && e.prototype, {\n    constructor: {\n      value: t,\n      enumerable: !1,\n      writable: !0,\n      configurable: !0\n    }\n  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);\n},\n    possibleConstructorReturn = function (t, e) {\n  if (!t) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  return !e || \"object\" != typeof e && \"function\" != typeof e ? t : e;\n},\n    AppContainer = function (t) {\n  function e() {\n    return classCallCheck(this, e), possibleConstructorReturn(this, t.apply(this, arguments));\n  }\n\n  return inherits(e, t), e.prototype.render = function () {\n    return React.Children.only(this.props.children);\n  }, e;\n}(React.Component),\n    hot_prod = function () {\n  return function (t) {\n    return t;\n  };\n},\n    areComponentsEqual = function (t, e) {\n  return t === e;\n},\n    setConfig = function () {},\n    cold = function (t) {\n  return t;\n};\n\nexports.AppContainer = AppContainer, exports.hot = hot_prod, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold;\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js?");

/***/ }),

/***/ "../../node_modules/react-hot-loader/index.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/react-hot-loader/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar evalAllowed = false;\n\ntry {\n  eval('evalAllowed = true');\n} catch (e) {} // eval not allowed due to CSP\n// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods\n\n\nvar platformSupported = !!Object.setPrototypeOf && evalAllowed;\n\nif (!module.hot || \"development\" === 'production' || !platformSupported) {\n  if (true) {\n    // we are not in prod mode, but RHL could not be activated\n    console.warn('React-Hot-Loaded is not supported in this environment');\n  }\n\n  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ \"../../node_modules/react-hot-loader/dist/react-hot-loader.production.min.js\");\n} else {\n  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.development.js */ \"../../node_modules/react-hot-loader/dist/react-hot-loader.development.js\");\n}\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/react-hot-loader/index.js?");

/***/ }),

/***/ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \*********************************************************************************************************************/
/*! exports provided: polyfill */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polyfill\", function() { return polyfill; });\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nfunction componentWillMount() {\n  // Call this.constructor.gDSFP to support sub-classes.\n  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);\n\n  if (state !== null && state !== undefined) {\n    this.setState(state);\n  }\n}\n\nfunction componentWillReceiveProps(nextProps) {\n  // Call this.constructor.gDSFP to support sub-classes.\n  // Use the setState() updater to ensure state isn't stale in certain edge cases.\n  function updater(prevState) {\n    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);\n    return state !== null && state !== undefined ? state : null;\n  } // Binding \"this\" is important for shallow renderer support.\n\n\n  this.setState(updater.bind(this));\n}\n\nfunction componentWillUpdate(nextProps, nextState) {\n  try {\n    var prevProps = this.props;\n    var prevState = this.state;\n    this.props = nextProps;\n    this.state = nextState;\n    this.__reactInternalSnapshotFlag = true;\n    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);\n  } finally {\n    this.props = prevProps;\n    this.state = prevState;\n  }\n} // React may warn about cWM/cWRP/cWU methods being deprecated.\n// Add a flag to suppress these warnings for this special case.\n\n\ncomponentWillMount.__suppressDeprecationWarning = true;\ncomponentWillReceiveProps.__suppressDeprecationWarning = true;\ncomponentWillUpdate.__suppressDeprecationWarning = true;\n\nfunction polyfill(Component) {\n  var prototype = Component.prototype;\n\n  if (!prototype || !prototype.isReactComponent) {\n    throw new Error('Can only polyfill class components');\n  }\n\n  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {\n    return Component;\n  } // If new component APIs are defined, \"unsafe\" lifecycles won't be called.\n  // Error if any of these lifecycles are present,\n  // Because they would work differently between older and newer (16.3+) versions of React.\n\n\n  var foundWillMountName = null;\n  var foundWillReceivePropsName = null;\n  var foundWillUpdateName = null;\n\n  if (typeof prototype.componentWillMount === 'function') {\n    foundWillMountName = 'componentWillMount';\n  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {\n    foundWillMountName = 'UNSAFE_componentWillMount';\n  }\n\n  if (typeof prototype.componentWillReceiveProps === 'function') {\n    foundWillReceivePropsName = 'componentWillReceiveProps';\n  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {\n    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';\n  }\n\n  if (typeof prototype.componentWillUpdate === 'function') {\n    foundWillUpdateName = 'componentWillUpdate';\n  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {\n    foundWillUpdateName = 'UNSAFE_componentWillUpdate';\n  }\n\n  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {\n    var componentName = Component.displayName || Component.name;\n    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';\n    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\\n\\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\\n  ' + foundWillUpdateName : '') + '\\n\\nThe above lifecycles should be removed. Learn more about this warning here:\\n' + 'https://fb.me/react-async-component-lifecycle-hooks');\n  } // React <= 16.2 does not support static getDerivedStateFromProps.\n  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.\n  // Newer versions of React will ignore these lifecycles if gDSFP exists.\n\n\n  if (typeof Component.getDerivedStateFromProps === 'function') {\n    prototype.componentWillMount = componentWillMount;\n    prototype.componentWillReceiveProps = componentWillReceiveProps;\n  } // React <= 16.2 does not support getSnapshotBeforeUpdate.\n  // As a workaround, use cWU to invoke the new lifecycle.\n  // Newer versions of React will ignore that lifecycle if gSBU exists.\n\n\n  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {\n    if (typeof prototype.componentDidUpdate !== 'function') {\n      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');\n    }\n\n    prototype.componentWillUpdate = componentWillUpdate;\n    var componentDidUpdate = prototype.componentDidUpdate;\n\n    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {\n      // 16.3+ will not execute our will-update method;\n      // It will pass a snapshot value to did-update though.\n      // Older versions will require our polyfilled will-update value.\n      // We need to handle both cases, but can't just check for the presence of \"maybeSnapshot\",\n      // Because for <= 15.x versions this might be a \"prevContext\" object.\n      // We also can't just check \"__reactInternalSnapshot\",\n      // Because get-snapshot might return a falsy value.\n      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.\n      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;\n      componentDidUpdate.call(this, prevProps, prevState, snapshot);\n    };\n  }\n\n  return Component;\n}\n\n\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js?");

/***/ }),

/***/ "../../node_modules/react-loadable/lib/index.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/react-loadable/lib/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass);\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar React = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\nvar PropTypes = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n\nvar ALL_INITIALIZERS = [];\nvar READY_INITIALIZERS = [];\n\nfunction isWebpackReady(getModuleIds) {\n  if (( false ? undefined : _typeof(__webpack_require__.m)) !== \"object\") {\n    return false;\n  }\n\n  return getModuleIds().every(function (moduleId) {\n    return typeof moduleId !== \"undefined\" && typeof __webpack_require__.m[moduleId] !== \"undefined\";\n  });\n}\n\nfunction load(loader) {\n  var promise = loader();\n  var state = {\n    loading: true,\n    loaded: null,\n    error: null\n  };\n  state.promise = promise.then(function (loaded) {\n    state.loading = false;\n    state.loaded = loaded;\n    return loaded;\n  }).catch(function (err) {\n    state.loading = false;\n    state.error = err;\n    throw err;\n  });\n  return state;\n}\n\nfunction loadMap(obj) {\n  var state = {\n    loading: false,\n    loaded: {},\n    error: null\n  };\n  var promises = [];\n\n  try {\n    Object.keys(obj).forEach(function (key) {\n      var result = load(obj[key]);\n\n      if (!result.loading) {\n        state.loaded[key] = result.loaded;\n        state.error = result.error;\n      } else {\n        state.loading = true;\n      }\n\n      promises.push(result.promise);\n      result.promise.then(function (res) {\n        state.loaded[key] = res;\n      }).catch(function (err) {\n        state.error = err;\n      });\n    });\n  } catch (err) {\n    state.error = err;\n  }\n\n  state.promise = Promise.all(promises).then(function (res) {\n    state.loading = false;\n    return res;\n  }).catch(function (err) {\n    state.loading = false;\n    throw err;\n  });\n  return state;\n}\n\nfunction resolve(obj) {\n  return obj && obj.__esModule ? obj.default : obj;\n}\n\nfunction render(loaded, props) {\n  return React.createElement(resolve(loaded), props);\n}\n\nfunction createLoadableComponent(loadFn, options) {\n  var _class, _temp;\n\n  if (!options.loading) {\n    throw new Error(\"react-loadable requires a `loading` component\");\n  }\n\n  var opts = Object.assign({\n    loader: null,\n    loading: null,\n    delay: 200,\n    timeout: null,\n    render: render,\n    webpack: null,\n    modules: null\n  }, options);\n  var res = null;\n\n  function init() {\n    if (!res) {\n      res = loadFn(opts.loader);\n    }\n\n    return res.promise;\n  }\n\n  ALL_INITIALIZERS.push(init);\n\n  if (typeof opts.webpack === \"function\") {\n    READY_INITIALIZERS.push(function () {\n      if (isWebpackReady(opts.webpack)) {\n        return init();\n      }\n    });\n  }\n\n  return _temp = _class = function (_React$Component) {\n    _inherits(LoadableComponent, _React$Component);\n\n    function LoadableComponent(props) {\n      _classCallCheck(this, LoadableComponent);\n\n      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));\n\n      _this.retry = function () {\n        _this.setState({\n          error: null,\n          loading: true,\n          timedOut: false\n        });\n\n        res = loadFn(opts.loader);\n\n        _this._loadModule();\n      };\n\n      init();\n      _this.state = {\n        error: res.error,\n        pastDelay: false,\n        timedOut: false,\n        loading: res.loading,\n        loaded: res.loaded\n      };\n      return _this;\n    }\n\n    LoadableComponent.preload = function preload() {\n      return init();\n    };\n\n    LoadableComponent.prototype.componentWillMount = function componentWillMount() {\n      this._mounted = true;\n\n      this._loadModule();\n    };\n\n    LoadableComponent.prototype._loadModule = function _loadModule() {\n      var _this2 = this;\n\n      if (this.context.loadable && Array.isArray(opts.modules)) {\n        opts.modules.forEach(function (moduleName) {\n          _this2.context.loadable.report(moduleName);\n        });\n      }\n\n      if (!res.loading) {\n        return;\n      }\n\n      if (typeof opts.delay === \"number\") {\n        if (opts.delay === 0) {\n          this.setState({\n            pastDelay: true\n          });\n        } else {\n          this._delay = setTimeout(function () {\n            _this2.setState({\n              pastDelay: true\n            });\n          }, opts.delay);\n        }\n      }\n\n      if (typeof opts.timeout === \"number\") {\n        this._timeout = setTimeout(function () {\n          _this2.setState({\n            timedOut: true\n          });\n        }, opts.timeout);\n      }\n\n      var update = function update() {\n        if (!_this2._mounted) {\n          return;\n        }\n\n        _this2.setState({\n          error: res.error,\n          loaded: res.loaded,\n          loading: res.loading\n        });\n\n        _this2._clearTimeouts();\n      };\n\n      res.promise.then(function () {\n        update();\n      }).catch(function (err) {\n        update();\n      });\n    };\n\n    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {\n      this._mounted = false;\n\n      this._clearTimeouts();\n    };\n\n    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {\n      clearTimeout(this._delay);\n      clearTimeout(this._timeout);\n    };\n\n    LoadableComponent.prototype.render = function render() {\n      if (this.state.loading || this.state.error) {\n        return React.createElement(opts.loading, {\n          isLoading: this.state.loading,\n          pastDelay: this.state.pastDelay,\n          timedOut: this.state.timedOut,\n          error: this.state.error,\n          retry: this.retry\n        });\n      } else if (this.state.loaded) {\n        return opts.render(this.state.loaded, this.props);\n      } else {\n        return null;\n      }\n    };\n\n    return LoadableComponent;\n  }(React.Component), _class.contextTypes = {\n    loadable: PropTypes.shape({\n      report: PropTypes.func.isRequired\n    })\n  }, _temp;\n}\n\nfunction Loadable(opts) {\n  return createLoadableComponent(load, opts);\n}\n\nfunction LoadableMap(opts) {\n  if (typeof opts.render !== \"function\") {\n    throw new Error(\"LoadableMap requires a `render(loaded, props)` function\");\n  }\n\n  return createLoadableComponent(loadMap, opts);\n}\n\nLoadable.Map = LoadableMap;\n\nvar Capture = function (_React$Component2) {\n  _inherits(Capture, _React$Component2);\n\n  function Capture() {\n    _classCallCheck(this, Capture);\n\n    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));\n  }\n\n  Capture.prototype.getChildContext = function getChildContext() {\n    return {\n      loadable: {\n        report: this.props.report\n      }\n    };\n  };\n\n  Capture.prototype.render = function render() {\n    return React.Children.only(this.props.children);\n  };\n\n  return Capture;\n}(React.Component);\n\nCapture.propTypes = {\n  report: PropTypes.func.isRequired\n};\nCapture.childContextTypes = {\n  loadable: PropTypes.shape({\n    report: PropTypes.func.isRequired\n  }).isRequired\n};\nLoadable.Capture = Capture;\n\nfunction flushInitializers(initializers) {\n  var promises = [];\n\n  while (initializers.length) {\n    var init = initializers.pop();\n    promises.push(init());\n  }\n\n  return Promise.all(promises).then(function () {\n    if (initializers.length) {\n      return flushInitializers(initializers);\n    }\n  });\n}\n\nLoadable.preloadAll = function () {\n  return new Promise(function (resolve, reject) {\n    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);\n  });\n};\n\nLoadable.preloadReady = function () {\n  return new Promise(function (resolve, reject) {\n    // We always will resolve, errors should be handled within loading UIs.\n    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);\n  });\n};\n\nmodule.exports = Loadable;\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/react-loadable/lib/index.js?");

/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/react/cjs/react.development.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/** @license React v16.5.2\n * react.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nif (true) {\n  (function () {\n    'use strict';\n\n    var _assign = __webpack_require__(/*! object-assign */ \"../../node_modules/object-assign/index.js\");\n\n    var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ \"../../node_modules/prop-types/checkPropTypes.js\"); // TODO: this is special because it gets imported during build.\n\n\n    var ReactVersion = '16.5.2'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n    // nor polyfill, then a plain number is used for performance.\n\n    var hasSymbol = typeof Symbol === 'function' && Symbol.for;\n    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\n    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\n    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\n    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\n    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\n    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\n    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;\n    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;\n    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\n    var REACT_PLACEHOLDER_TYPE = hasSymbol ? Symbol.for('react.placeholder') : 0xead1;\n    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n    var FAUX_ITERATOR_SYMBOL = '@@iterator';\n\n    function getIteratorFn(maybeIterable) {\n      if (maybeIterable === null || typeof maybeIterable !== 'object') {\n        return null;\n      }\n\n      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];\n\n      if (typeof maybeIterator === 'function') {\n        return maybeIterator;\n      }\n\n      return null;\n    } // Exports ReactDOM.createRoot\n    // Experimental error-boundary API that can recover from errors within a single\n    // render phase\n    // Suspense\n\n\n    var enableSuspense = false; // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:\n    // In some cases, StrictMode should also double-render lifecycles.\n    // This can be confusing for tests though,\n    // And it can be bad for performance in production.\n    // This feature flag can be used to control the behavior:\n    // To preserve the \"Pause on caught exceptions\" behavior of the debugger, we\n    // replay the begin phase of a failed component inside invokeGuardedCallback.\n    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:\n    // Warn about legacy context API\n    // Gather advanced timing metrics for Profiler subtrees.\n    // Trace which interactions trigger each commit.\n    // Only used in www builds.\n    // Only used in www builds.\n    // React Fire: prevent the value and checked attributes from syncing\n    // with their related DOM properties\n\n    /**\n     * Use invariant() to assert state which your program assumes to be true.\n     *\n     * Provide sprintf-style format (only %s is supported) and arguments\n     * to provide information about what broke and what you were\n     * expecting.\n     *\n     * The invariant message will be stripped in production, but the invariant\n     * will remain to ensure logic does not differ in production.\n     */\n\n    var validateFormat = function () {};\n\n    {\n      validateFormat = function (format) {\n        if (format === undefined) {\n          throw new Error('invariant requires an error message argument');\n        }\n      };\n    }\n\n    function invariant(condition, format, a, b, c, d, e, f) {\n      validateFormat(format);\n\n      if (!condition) {\n        var error = void 0;\n\n        if (format === undefined) {\n          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n        } else {\n          var args = [a, b, c, d, e, f];\n          var argIndex = 0;\n          error = new Error(format.replace(/%s/g, function () {\n            return args[argIndex++];\n          }));\n          error.name = 'Invariant Violation';\n        }\n\n        error.framesToPop = 1; // we don't care about invariant's own frame\n\n        throw error;\n      }\n    } // Relying on the `invariant()` implementation lets us\n    // preserve the format and params in the www builds.\n\n    /**\n     * Forked from fbjs/warning:\n     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js\n     *\n     * Only change is we use console.warn instead of console.error,\n     * and do nothing when 'console' is not supported.\n     * This really simplifies the code.\n     * ---\n     * Similar to invariant but only logs a warning if the condition is not met.\n     * This can be used to log issues in development environments in critical\n     * paths. Removing the logging code for production environments will keep the\n     * same logic and follow the same code paths.\n     */\n\n\n    var lowPriorityWarning = function () {};\n\n    {\n      var printWarning = function (format) {\n        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n          args[_key - 1] = arguments[_key];\n        }\n\n        var argIndex = 0;\n        var message = 'Warning: ' + format.replace(/%s/g, function () {\n          return args[argIndex++];\n        });\n\n        if (typeof console !== 'undefined') {\n          console.warn(message);\n        }\n\n        try {\n          // --- Welcome to debugging React ---\n          // This error was thrown as a convenience so that you can use this stack\n          // to find the callsite that caused this warning to fire.\n          throw new Error(message);\n        } catch (x) {}\n      };\n\n      lowPriorityWarning = function (condition, format) {\n        if (format === undefined) {\n          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');\n        }\n\n        if (!condition) {\n          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n            args[_key2 - 2] = arguments[_key2];\n          }\n\n          printWarning.apply(undefined, [format].concat(args));\n        }\n      };\n    }\n    var lowPriorityWarning$1 = lowPriorityWarning;\n    /**\n     * Similar to invariant but only logs a warning if the condition is not met.\n     * This can be used to log issues in development environments in critical\n     * paths. Removing the logging code for production environments will keep the\n     * same logic and follow the same code paths.\n     */\n\n    var warningWithoutStack = function () {};\n\n    {\n      warningWithoutStack = function (condition, format) {\n        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n          args[_key - 2] = arguments[_key];\n        }\n\n        if (format === undefined) {\n          throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');\n        }\n\n        if (args.length > 8) {\n          // Check before the condition to catch violations early.\n          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');\n        }\n\n        if (condition) {\n          return;\n        }\n\n        if (typeof console !== 'undefined') {\n          var _args$map = args.map(function (item) {\n            return '' + item;\n          }),\n              a = _args$map[0],\n              b = _args$map[1],\n              c = _args$map[2],\n              d = _args$map[3],\n              e = _args$map[4],\n              f = _args$map[5],\n              g = _args$map[6],\n              h = _args$map[7];\n\n          var message = 'Warning: ' + format; // We intentionally don't use spread (or .apply) because it breaks IE9:\n          // https://github.com/facebook/react/issues/13610\n\n          switch (args.length) {\n            case 0:\n              console.error(message);\n              break;\n\n            case 1:\n              console.error(message, a);\n              break;\n\n            case 2:\n              console.error(message, a, b);\n              break;\n\n            case 3:\n              console.error(message, a, b, c);\n              break;\n\n            case 4:\n              console.error(message, a, b, c, d);\n              break;\n\n            case 5:\n              console.error(message, a, b, c, d, e);\n              break;\n\n            case 6:\n              console.error(message, a, b, c, d, e, f);\n              break;\n\n            case 7:\n              console.error(message, a, b, c, d, e, f, g);\n              break;\n\n            case 8:\n              console.error(message, a, b, c, d, e, f, g, h);\n              break;\n\n            default:\n              throw new Error('warningWithoutStack() currently supports at most 8 arguments.');\n          }\n        }\n\n        try {\n          // --- Welcome to debugging React ---\n          // This error was thrown as a convenience so that you can use this stack\n          // to find the callsite that caused this warning to fire.\n          var argIndex = 0;\n\n          var _message = 'Warning: ' + format.replace(/%s/g, function () {\n            return args[argIndex++];\n          });\n\n          throw new Error(_message);\n        } catch (x) {}\n      };\n    }\n    var warningWithoutStack$1 = warningWithoutStack;\n    var didWarnStateUpdateForUnmountedComponent = {};\n\n    function warnNoop(publicInstance, callerName) {\n      {\n        var _constructor = publicInstance.constructor;\n        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';\n        var warningKey = componentName + '.' + callerName;\n\n        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {\n          return;\n        }\n\n        warningWithoutStack$1(false, \"Can't call %s on a component that is not yet mounted. \" + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);\n        didWarnStateUpdateForUnmountedComponent[warningKey] = true;\n      }\n    }\n    /**\n     * This is the abstract API for an update queue.\n     */\n\n\n    var ReactNoopUpdateQueue = {\n      /**\n       * Checks whether or not this composite component is mounted.\n       * @param {ReactClass} publicInstance The instance we want to test.\n       * @return {boolean} True if mounted, false otherwise.\n       * @protected\n       * @final\n       */\n      isMounted: function (publicInstance) {\n        return false;\n      },\n\n      /**\n       * Forces an update. This should only be invoked when it is known with\n       * certainty that we are **not** in a DOM transaction.\n       *\n       * You may want to call this when you know that some deeper aspect of the\n       * component's state has changed but `setState` was not called.\n       *\n       * This will not invoke `shouldComponentUpdate`, but it will invoke\n       * `componentWillUpdate` and `componentDidUpdate`.\n       *\n       * @param {ReactClass} publicInstance The instance that should rerender.\n       * @param {?function} callback Called after component is updated.\n       * @param {?string} callerName name of the calling function in the public API.\n       * @internal\n       */\n      enqueueForceUpdate: function (publicInstance, callback, callerName) {\n        warnNoop(publicInstance, 'forceUpdate');\n      },\n\n      /**\n       * Replaces all of the state. Always use this or `setState` to mutate state.\n       * You should treat `this.state` as immutable.\n       *\n       * There is no guarantee that `this.state` will be immediately updated, so\n       * accessing `this.state` after calling this method may return the old value.\n       *\n       * @param {ReactClass} publicInstance The instance that should rerender.\n       * @param {object} completeState Next state.\n       * @param {?function} callback Called after component is updated.\n       * @param {?string} callerName name of the calling function in the public API.\n       * @internal\n       */\n      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {\n        warnNoop(publicInstance, 'replaceState');\n      },\n\n      /**\n       * Sets a subset of the state. This only exists because _pendingState is\n       * internal. This provides a merging strategy that is not available to deep\n       * properties which is confusing. TODO: Expose pendingState or don't use it\n       * during the merge.\n       *\n       * @param {ReactClass} publicInstance The instance that should rerender.\n       * @param {object} partialState Next partial state to be merged with state.\n       * @param {?function} callback Called after component is updated.\n       * @param {?string} Name of the calling function in the public API.\n       * @internal\n       */\n      enqueueSetState: function (publicInstance, partialState, callback, callerName) {\n        warnNoop(publicInstance, 'setState');\n      }\n    };\n    var emptyObject = {};\n    {\n      Object.freeze(emptyObject);\n    }\n    /**\n     * Base class helpers for the updating state of a component.\n     */\n\n    function Component(props, context, updater) {\n      this.props = props;\n      this.context = context; // If a component has string refs, we will assign a different object later.\n\n      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the\n      // renderer.\n\n      this.updater = updater || ReactNoopUpdateQueue;\n    }\n\n    Component.prototype.isReactComponent = {};\n    /**\n     * Sets a subset of the state. Always use this to mutate\n     * state. You should treat `this.state` as immutable.\n     *\n     * There is no guarantee that `this.state` will be immediately updated, so\n     * accessing `this.state` after calling this method may return the old value.\n     *\n     * There is no guarantee that calls to `setState` will run synchronously,\n     * as they may eventually be batched together.  You can provide an optional\n     * callback that will be executed when the call to setState is actually\n     * completed.\n     *\n     * When a function is provided to setState, it will be called at some point in\n     * the future (not synchronously). It will be called with the up to date\n     * component arguments (state, props, context). These values can be different\n     * from this.* because your function may be called after receiveProps but before\n     * shouldComponentUpdate, and this new state, props, and context will not yet be\n     * assigned to this.\n     *\n     * @param {object|function} partialState Next partial state or function to\n     *        produce next partial state to be merged with current state.\n     * @param {?function} callback Called after state is updated.\n     * @final\n     * @protected\n     */\n\n    Component.prototype.setState = function (partialState, callback) {\n      !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;\n      this.updater.enqueueSetState(this, partialState, callback, 'setState');\n    };\n    /**\n     * Forces an update. This should only be invoked when it is known with\n     * certainty that we are **not** in a DOM transaction.\n     *\n     * You may want to call this when you know that some deeper aspect of the\n     * component's state has changed but `setState` was not called.\n     *\n     * This will not invoke `shouldComponentUpdate`, but it will invoke\n     * `componentWillUpdate` and `componentDidUpdate`.\n     *\n     * @param {?function} callback Called after update is complete.\n     * @final\n     * @protected\n     */\n\n\n    Component.prototype.forceUpdate = function (callback) {\n      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\n    };\n    /**\n     * Deprecated APIs. These APIs used to exist on classic React classes but since\n     * we would like to deprecate them, we're not going to move them over to this\n     * modern base class. Instead, we define a getter that warns if it's accessed.\n     */\n\n\n    {\n      var deprecatedAPIs = {\n        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],\n        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']\n      };\n\n      var defineDeprecationWarning = function (methodName, info) {\n        Object.defineProperty(Component.prototype, methodName, {\n          get: function () {\n            lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);\n            return undefined;\n          }\n        });\n      };\n\n      for (var fnName in deprecatedAPIs) {\n        if (deprecatedAPIs.hasOwnProperty(fnName)) {\n          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n        }\n      }\n    }\n\n    function ComponentDummy() {}\n\n    ComponentDummy.prototype = Component.prototype;\n    /**\n     * Convenience component with default shallow equality check for sCU.\n     */\n\n    function PureComponent(props, context, updater) {\n      this.props = props;\n      this.context = context; // If a component has string refs, we will assign a different object later.\n\n      this.refs = emptyObject;\n      this.updater = updater || ReactNoopUpdateQueue;\n    }\n\n    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();\n    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.\n\n    _assign(pureComponentPrototype, Component.prototype);\n\n    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value\n\n    function createRef() {\n      var refObject = {\n        current: null\n      };\n      {\n        Object.seal(refObject);\n      }\n      return refObject;\n    }\n    /**\n     * Keeps track of the current owner.\n     *\n     * The current owner is the component who should own any components that are\n     * currently being constructed.\n     */\n\n\n    var ReactCurrentOwner = {\n      /**\n       * @internal\n       * @type {ReactComponent}\n       */\n      current: null,\n      currentDispatcher: null\n    };\n    var BEFORE_SLASH_RE = /^(.*)[\\\\\\/]/;\n\n    var describeComponentFrame = function (name, source, ownerName) {\n      var sourceInfo = '';\n\n      if (source) {\n        var path = source.fileName;\n        var fileName = path.replace(BEFORE_SLASH_RE, '');\n        {\n          // In DEV, include code for a common special case:\n          // prefer \"folder/index.js\" instead of just \"index.js\".\n          if (/^index\\./.test(fileName)) {\n            var match = path.match(BEFORE_SLASH_RE);\n\n            if (match) {\n              var pathBeforeSlash = match[1];\n\n              if (pathBeforeSlash) {\n                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');\n                fileName = folderName + '/' + fileName;\n              }\n            }\n          }\n        }\n        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';\n      } else if (ownerName) {\n        sourceInfo = ' (created by ' + ownerName + ')';\n      }\n\n      return '\\n    in ' + (name || 'Unknown') + sourceInfo;\n    };\n\n    var Resolved = 1;\n\n    function refineResolvedThenable(thenable) {\n      return thenable._reactStatus === Resolved ? thenable._reactResult : null;\n    }\n\n    function getComponentName(type) {\n      if (type == null) {\n        // Host root, text node or just invalid type.\n        return null;\n      }\n\n      {\n        if (typeof type.tag === 'number') {\n          warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');\n        }\n      }\n\n      if (typeof type === 'function') {\n        return type.displayName || type.name || null;\n      }\n\n      if (typeof type === 'string') {\n        return type;\n      }\n\n      switch (type) {\n        case REACT_ASYNC_MODE_TYPE:\n          return 'AsyncMode';\n\n        case REACT_FRAGMENT_TYPE:\n          return 'Fragment';\n\n        case REACT_PORTAL_TYPE:\n          return 'Portal';\n\n        case REACT_PROFILER_TYPE:\n          return 'Profiler';\n\n        case REACT_STRICT_MODE_TYPE:\n          return 'StrictMode';\n\n        case REACT_PLACEHOLDER_TYPE:\n          return 'Placeholder';\n      }\n\n      if (typeof type === 'object') {\n        switch (type.$$typeof) {\n          case REACT_CONTEXT_TYPE:\n            return 'Context.Consumer';\n\n          case REACT_PROVIDER_TYPE:\n            return 'Context.Provider';\n\n          case REACT_FORWARD_REF_TYPE:\n            var renderFn = type.render;\n            var functionName = renderFn.displayName || renderFn.name || '';\n            return type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');\n        }\n\n        if (typeof type.then === 'function') {\n          var thenable = type;\n          var resolvedThenable = refineResolvedThenable(thenable);\n\n          if (resolvedThenable) {\n            return getComponentName(resolvedThenable);\n          }\n        }\n      }\n\n      return null;\n    }\n\n    var ReactDebugCurrentFrame = {};\n    var currentlyValidatingElement = null;\n\n    function setCurrentlyValidatingElement(element) {\n      {\n        currentlyValidatingElement = element;\n      }\n    }\n\n    {\n      // Stack implementation injected by the current renderer.\n      ReactDebugCurrentFrame.getCurrentStack = null;\n\n      ReactDebugCurrentFrame.getStackAddendum = function () {\n        var stack = ''; // Add an extra top frame while an element is being validated\n\n        if (currentlyValidatingElement) {\n          var name = getComponentName(currentlyValidatingElement.type);\n          var owner = currentlyValidatingElement._owner;\n          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));\n        } // Delegate to the injected renderer-specific implementation\n\n\n        var impl = ReactDebugCurrentFrame.getCurrentStack;\n\n        if (impl) {\n          stack += impl() || '';\n        }\n\n        return stack;\n      };\n    }\n    var ReactSharedInternals = {\n      ReactCurrentOwner: ReactCurrentOwner,\n      // Used by renderers to avoid bundling object-assign twice in UMD bundles:\n      assign: _assign\n    };\n    {\n      _assign(ReactSharedInternals, {\n        // These should not be included in production.\n        ReactDebugCurrentFrame: ReactDebugCurrentFrame,\n        // Shim for React DOM 16.0.0 which still destructured (but not used) this.\n        // TODO: remove in React 17.0.\n        ReactComponentTreeHook: {}\n      });\n    }\n    /**\n     * Similar to invariant but only logs a warning if the condition is not met.\n     * This can be used to log issues in development environments in critical\n     * paths. Removing the logging code for production environments will keep the\n     * same logic and follow the same code paths.\n     */\n\n    var warning = warningWithoutStack$1;\n    {\n      warning = function (condition, format) {\n        if (condition) {\n          return;\n        }\n\n        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\n        var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args\n\n        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n          args[_key - 2] = arguments[_key];\n        }\n\n        warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));\n      };\n    }\n    var warning$1 = warning;\n    var hasOwnProperty = Object.prototype.hasOwnProperty;\n    var RESERVED_PROPS = {\n      key: true,\n      ref: true,\n      __self: true,\n      __source: true\n    };\n    var specialPropKeyWarningShown = void 0;\n    var specialPropRefWarningShown = void 0;\n\n    function hasValidRef(config) {\n      {\n        if (hasOwnProperty.call(config, 'ref')) {\n          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;\n\n          if (getter && getter.isReactWarning) {\n            return false;\n          }\n        }\n      }\n      return config.ref !== undefined;\n    }\n\n    function hasValidKey(config) {\n      {\n        if (hasOwnProperty.call(config, 'key')) {\n          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;\n\n          if (getter && getter.isReactWarning) {\n            return false;\n          }\n        }\n      }\n      return config.key !== undefined;\n    }\n\n    function defineKeyPropWarningGetter(props, displayName) {\n      var warnAboutAccessingKey = function () {\n        if (!specialPropKeyWarningShown) {\n          specialPropKeyWarningShown = true;\n          warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);\n        }\n      };\n\n      warnAboutAccessingKey.isReactWarning = true;\n      Object.defineProperty(props, 'key', {\n        get: warnAboutAccessingKey,\n        configurable: true\n      });\n    }\n\n    function defineRefPropWarningGetter(props, displayName) {\n      var warnAboutAccessingRef = function () {\n        if (!specialPropRefWarningShown) {\n          specialPropRefWarningShown = true;\n          warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);\n        }\n      };\n\n      warnAboutAccessingRef.isReactWarning = true;\n      Object.defineProperty(props, 'ref', {\n        get: warnAboutAccessingRef,\n        configurable: true\n      });\n    }\n    /**\n     * Factory method to create a new React element. This no longer adheres to\n     * the class pattern, so do not use new to call it. Also, no instanceof check\n     * will work. Instead test $$typeof field against Symbol.for('react.element') to check\n     * if something is a React Element.\n     *\n     * @param {*} type\n     * @param {*} key\n     * @param {string|object} ref\n     * @param {*} self A *temporary* helper to detect places where `this` is\n     * different from the `owner` when React.createElement is called, so that we\n     * can warn. We want to get rid of owner and replace string `ref`s with arrow\n     * functions, and as long as `this` and owner are the same, there will be no\n     * change in behavior.\n     * @param {*} source An annotation object (added by a transpiler or otherwise)\n     * indicating filename, line number, and/or other information.\n     * @param {*} owner\n     * @param {*} props\n     * @internal\n     */\n\n\n    var ReactElement = function (type, key, ref, self, source, owner, props) {\n      var element = {\n        // This tag allows us to uniquely identify this as a React Element\n        $$typeof: REACT_ELEMENT_TYPE,\n        // Built-in properties that belong on the element\n        type: type,\n        key: key,\n        ref: ref,\n        props: props,\n        // Record the component responsible for creating this element.\n        _owner: owner\n      };\n      {\n        // The validation flag is currently mutative. We put it on\n        // an external backing store so that we can freeze the whole object.\n        // This can be replaced with a WeakMap once they are implemented in\n        // commonly used development environments.\n        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make\n        // the validation flag non-enumerable (where possible, which should\n        // include every environment we run tests in), so the test framework\n        // ignores it.\n\n        Object.defineProperty(element._store, 'validated', {\n          configurable: false,\n          enumerable: false,\n          writable: true,\n          value: false\n        }); // self and source are DEV only properties.\n\n        Object.defineProperty(element, '_self', {\n          configurable: false,\n          enumerable: false,\n          writable: false,\n          value: self\n        }); // Two elements created in two different places should be considered\n        // equal for testing purposes and therefore we hide it from enumeration.\n\n        Object.defineProperty(element, '_source', {\n          configurable: false,\n          enumerable: false,\n          writable: false,\n          value: source\n        });\n\n        if (Object.freeze) {\n          Object.freeze(element.props);\n          Object.freeze(element);\n        }\n      }\n      return element;\n    };\n    /**\n     * Create and return a new ReactElement of the given type.\n     * See https://reactjs.org/docs/react-api.html#createelement\n     */\n\n\n    function createElement(type, config, children) {\n      var propName = void 0; // Reserved names are extracted\n\n      var props = {};\n      var key = null;\n      var ref = null;\n      var self = null;\n      var source = null;\n\n      if (config != null) {\n        if (hasValidRef(config)) {\n          ref = config.ref;\n        }\n\n        if (hasValidKey(config)) {\n          key = '' + config.key;\n        }\n\n        self = config.__self === undefined ? null : config.__self;\n        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object\n\n        for (propName in config) {\n          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n            props[propName] = config[propName];\n          }\n        }\n      } // Children can be more than one argument, and those are transferred onto\n      // the newly allocated props object.\n\n\n      var childrenLength = arguments.length - 2;\n\n      if (childrenLength === 1) {\n        props.children = children;\n      } else if (childrenLength > 1) {\n        var childArray = Array(childrenLength);\n\n        for (var i = 0; i < childrenLength; i++) {\n          childArray[i] = arguments[i + 2];\n        }\n\n        {\n          if (Object.freeze) {\n            Object.freeze(childArray);\n          }\n        }\n        props.children = childArray;\n      } // Resolve default props\n\n\n      if (type && type.defaultProps) {\n        var defaultProps = type.defaultProps;\n\n        for (propName in defaultProps) {\n          if (props[propName] === undefined) {\n            props[propName] = defaultProps[propName];\n          }\n        }\n      }\n\n      {\n        if (key || ref) {\n          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;\n\n          if (key) {\n            defineKeyPropWarningGetter(props, displayName);\n          }\n\n          if (ref) {\n            defineRefPropWarningGetter(props, displayName);\n          }\n        }\n      }\n      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);\n    }\n    /**\n     * Return a function that produces ReactElements of a given type.\n     * See https://reactjs.org/docs/react-api.html#createfactory\n     */\n\n\n    function cloneAndReplaceKey(oldElement, newKey) {\n      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);\n      return newElement;\n    }\n    /**\n     * Clone and return a new ReactElement using element as the starting point.\n     * See https://reactjs.org/docs/react-api.html#cloneelement\n     */\n\n\n    function cloneElement(element, config, children) {\n      !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;\n      var propName = void 0; // Original props are copied\n\n      var props = _assign({}, element.props); // Reserved names are extracted\n\n\n      var key = element.key;\n      var ref = element.ref; // Self is preserved since the owner is preserved.\n\n      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a\n      // transpiler, and the original source is probably a better indicator of the\n      // true owner.\n\n      var source = element._source; // Owner will be preserved, unless ref is overridden\n\n      var owner = element._owner;\n\n      if (config != null) {\n        if (hasValidRef(config)) {\n          // Silently steal the ref from the parent.\n          ref = config.ref;\n          owner = ReactCurrentOwner.current;\n        }\n\n        if (hasValidKey(config)) {\n          key = '' + config.key;\n        } // Remaining properties override existing props\n\n\n        var defaultProps = void 0;\n\n        if (element.type && element.type.defaultProps) {\n          defaultProps = element.type.defaultProps;\n        }\n\n        for (propName in config) {\n          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n            if (config[propName] === undefined && defaultProps !== undefined) {\n              // Resolve default props\n              props[propName] = defaultProps[propName];\n            } else {\n              props[propName] = config[propName];\n            }\n          }\n        }\n      } // Children can be more than one argument, and those are transferred onto\n      // the newly allocated props object.\n\n\n      var childrenLength = arguments.length - 2;\n\n      if (childrenLength === 1) {\n        props.children = children;\n      } else if (childrenLength > 1) {\n        var childArray = Array(childrenLength);\n\n        for (var i = 0; i < childrenLength; i++) {\n          childArray[i] = arguments[i + 2];\n        }\n\n        props.children = childArray;\n      }\n\n      return ReactElement(element.type, key, ref, self, source, owner, props);\n    }\n    /**\n     * Verifies the object is a ReactElement.\n     * See https://reactjs.org/docs/react-api.html#isvalidelement\n     * @param {?object} object\n     * @return {boolean} True if `object` is a ReactElement.\n     * @final\n     */\n\n\n    function isValidElement(object) {\n      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n    }\n\n    var SEPARATOR = '.';\n    var SUBSEPARATOR = ':';\n    /**\n     * Escape and wrap key so it is safe to use as a reactid\n     *\n     * @param {string} key to be escaped.\n     * @return {string} the escaped key.\n     */\n\n    function escape(key) {\n      var escapeRegex = /[=:]/g;\n      var escaperLookup = {\n        '=': '=0',\n        ':': '=2'\n      };\n      var escapedString = ('' + key).replace(escapeRegex, function (match) {\n        return escaperLookup[match];\n      });\n      return '$' + escapedString;\n    }\n    /**\n     * TODO: Test that a single child and an array with one item have the same key\n     * pattern.\n     */\n\n\n    var didWarnAboutMaps = false;\n    var userProvidedKeyEscapeRegex = /\\/+/g;\n\n    function escapeUserProvidedKey(text) {\n      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');\n    }\n\n    var POOL_SIZE = 10;\n    var traverseContextPool = [];\n\n    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {\n      if (traverseContextPool.length) {\n        var traverseContext = traverseContextPool.pop();\n        traverseContext.result = mapResult;\n        traverseContext.keyPrefix = keyPrefix;\n        traverseContext.func = mapFunction;\n        traverseContext.context = mapContext;\n        traverseContext.count = 0;\n        return traverseContext;\n      } else {\n        return {\n          result: mapResult,\n          keyPrefix: keyPrefix,\n          func: mapFunction,\n          context: mapContext,\n          count: 0\n        };\n      }\n    }\n\n    function releaseTraverseContext(traverseContext) {\n      traverseContext.result = null;\n      traverseContext.keyPrefix = null;\n      traverseContext.func = null;\n      traverseContext.context = null;\n      traverseContext.count = 0;\n\n      if (traverseContextPool.length < POOL_SIZE) {\n        traverseContextPool.push(traverseContext);\n      }\n    }\n    /**\n     * @param {?*} children Children tree container.\n     * @param {!string} nameSoFar Name of the key path so far.\n     * @param {!function} callback Callback to invoke with each child found.\n     * @param {?*} traverseContext Used to pass information throughout the traversal\n     * process.\n     * @return {!number} The number of children in this subtree.\n     */\n\n\n    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {\n      var type = typeof children;\n\n      if (type === 'undefined' || type === 'boolean') {\n        // All of the above are perceived as null.\n        children = null;\n      }\n\n      var invokeCallback = false;\n\n      if (children === null) {\n        invokeCallback = true;\n      } else {\n        switch (type) {\n          case 'string':\n          case 'number':\n            invokeCallback = true;\n            break;\n\n          case 'object':\n            switch (children.$$typeof) {\n              case REACT_ELEMENT_TYPE:\n              case REACT_PORTAL_TYPE:\n                invokeCallback = true;\n            }\n\n        }\n      }\n\n      if (invokeCallback) {\n        callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array\n        // so that it's consistent if the number of children grows.\n        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);\n        return 1;\n      }\n\n      var child = void 0;\n      var nextName = void 0;\n      var subtreeCount = 0; // Count of children found in the current subtree.\n\n      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;\n\n      if (Array.isArray(children)) {\n        for (var i = 0; i < children.length; i++) {\n          child = children[i];\n          nextName = nextNamePrefix + getComponentKey(child, i);\n          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);\n        }\n      } else {\n        var iteratorFn = getIteratorFn(children);\n\n        if (typeof iteratorFn === 'function') {\n          {\n            // Warn about using Maps as children\n            if (iteratorFn === children.entries) {\n              !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;\n              didWarnAboutMaps = true;\n            }\n          }\n          var iterator = iteratorFn.call(children);\n          var step = void 0;\n          var ii = 0;\n\n          while (!(step = iterator.next()).done) {\n            child = step.value;\n            nextName = nextNamePrefix + getComponentKey(child, ii++);\n            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);\n          }\n        } else if (type === 'object') {\n          var addendum = '';\n          {\n            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();\n          }\n          var childrenString = '' + children;\n          invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);\n        }\n      }\n\n      return subtreeCount;\n    }\n    /**\n     * Traverses children that are typically specified as `props.children`, but\n     * might also be specified through attributes:\n     *\n     * - `traverseAllChildren(this.props.children, ...)`\n     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`\n     *\n     * The `traverseContext` is an optional argument that is passed through the\n     * entire traversal. It can be used to store accumulations or anything else that\n     * the callback might find relevant.\n     *\n     * @param {?*} children Children tree object.\n     * @param {!function} callback To invoke upon traversing each child.\n     * @param {?*} traverseContext Context for traversal.\n     * @return {!number} The number of children in this subtree.\n     */\n\n\n    function traverseAllChildren(children, callback, traverseContext) {\n      if (children == null) {\n        return 0;\n      }\n\n      return traverseAllChildrenImpl(children, '', callback, traverseContext);\n    }\n    /**\n     * Generate a key string that identifies a component within a set.\n     *\n     * @param {*} component A component that could contain a manual key.\n     * @param {number} index Index that is used if a manual key is not provided.\n     * @return {string}\n     */\n\n\n    function getComponentKey(component, index) {\n      // Do some typechecking here since we call this blindly. We want to ensure\n      // that we don't block potential future ES APIs.\n      if (typeof component === 'object' && component !== null && component.key != null) {\n        // Explicit key\n        return escape(component.key);\n      } // Implicit key determined by the index in the set\n\n\n      return index.toString(36);\n    }\n\n    function forEachSingleChild(bookKeeping, child, name) {\n      var func = bookKeeping.func,\n          context = bookKeeping.context;\n      func.call(context, child, bookKeeping.count++);\n    }\n    /**\n     * Iterates through children that are typically specified as `props.children`.\n     *\n     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach\n     *\n     * The provided forEachFunc(child, index) will be called for each\n     * leaf child.\n     *\n     * @param {?*} children Children tree container.\n     * @param {function(*, int)} forEachFunc\n     * @param {*} forEachContext Context for forEachContext.\n     */\n\n\n    function forEachChildren(children, forEachFunc, forEachContext) {\n      if (children == null) {\n        return children;\n      }\n\n      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);\n      traverseAllChildren(children, forEachSingleChild, traverseContext);\n      releaseTraverseContext(traverseContext);\n    }\n\n    function mapSingleChildIntoContext(bookKeeping, child, childKey) {\n      var result = bookKeeping.result,\n          keyPrefix = bookKeeping.keyPrefix,\n          func = bookKeeping.func,\n          context = bookKeeping.context;\n      var mappedChild = func.call(context, child, bookKeeping.count++);\n\n      if (Array.isArray(mappedChild)) {\n        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {\n          return c;\n        });\n      } else if (mappedChild != null) {\n        if (isValidElement(mappedChild)) {\n          mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as\n          // traverseAllChildren used to do for objects as children\n          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);\n        }\n\n        result.push(mappedChild);\n      }\n    }\n\n    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {\n      var escapedPrefix = '';\n\n      if (prefix != null) {\n        escapedPrefix = escapeUserProvidedKey(prefix) + '/';\n      }\n\n      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);\n      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);\n      releaseTraverseContext(traverseContext);\n    }\n    /**\n     * Maps children that are typically specified as `props.children`.\n     *\n     * See https://reactjs.org/docs/react-api.html#reactchildrenmap\n     *\n     * The provided mapFunction(child, key, index) will be called for each\n     * leaf child.\n     *\n     * @param {?*} children Children tree container.\n     * @param {function(*, int)} func The map function.\n     * @param {*} context Context for mapFunction.\n     * @return {object} Object containing the ordered map of results.\n     */\n\n\n    function mapChildren(children, func, context) {\n      if (children == null) {\n        return children;\n      }\n\n      var result = [];\n      mapIntoWithKeyPrefixInternal(children, result, null, func, context);\n      return result;\n    }\n    /**\n     * Count the number of children that are typically specified as\n     * `props.children`.\n     *\n     * See https://reactjs.org/docs/react-api.html#reactchildrencount\n     *\n     * @param {?*} children Children tree container.\n     * @return {number} The number of children.\n     */\n\n\n    function countChildren(children) {\n      return traverseAllChildren(children, function () {\n        return null;\n      }, null);\n    }\n    /**\n     * Flatten a children object (typically specified as `props.children`) and\n     * return an array with appropriately re-keyed children.\n     *\n     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray\n     */\n\n\n    function toArray(children) {\n      var result = [];\n      mapIntoWithKeyPrefixInternal(children, result, null, function (child) {\n        return child;\n      });\n      return result;\n    }\n    /**\n     * Returns the first child in a collection of children and verifies that there\n     * is only one child in the collection.\n     *\n     * See https://reactjs.org/docs/react-api.html#reactchildrenonly\n     *\n     * The current implementation of this function assumes that a single child gets\n     * passed without a wrapper, but the purpose of this helper function is to\n     * abstract away the particular structure of children.\n     *\n     * @param {?object} children Child collection structure.\n     * @return {ReactElement} The first and only `ReactElement` contained in the\n     * structure.\n     */\n\n\n    function onlyChild(children) {\n      !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;\n      return children;\n    }\n\n    function readContext(context, observedBits) {\n      var dispatcher = ReactCurrentOwner.currentDispatcher;\n      !(dispatcher !== null) ? invariant(false, 'Context.unstable_read(): Context can only be read while React is rendering, e.g. inside the render method or getDerivedStateFromProps.') : void 0;\n      return dispatcher.readContext(context, observedBits);\n    }\n\n    function createContext(defaultValue, calculateChangedBits) {\n      if (calculateChangedBits === undefined) {\n        calculateChangedBits = null;\n      } else {\n        {\n          !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;\n        }\n      }\n\n      var context = {\n        $$typeof: REACT_CONTEXT_TYPE,\n        _calculateChangedBits: calculateChangedBits,\n        // As a workaround to support multiple concurrent renderers, we categorize\n        // some renderers as primary and others as secondary. We only expect\n        // there to be two concurrent renderers at most: React Native (primary) and\n        // Fabric (secondary); React DOM (primary) and React ART (secondary).\n        // Secondary renderers store their context values on separate fields.\n        _currentValue: defaultValue,\n        _currentValue2: defaultValue,\n        // These are circular\n        Provider: null,\n        Consumer: null,\n        unstable_read: null\n      };\n      context.Provider = {\n        $$typeof: REACT_PROVIDER_TYPE,\n        _context: context\n      };\n      context.Consumer = context;\n      context.unstable_read = readContext.bind(null, context);\n      {\n        context._currentRenderer = null;\n        context._currentRenderer2 = null;\n      }\n      return context;\n    }\n\n    function lazy(ctor) {\n      var thenable = null;\n      return {\n        then: function (resolve, reject) {\n          if (thenable === null) {\n            // Lazily create thenable by wrapping in an extra thenable.\n            thenable = ctor();\n            ctor = null;\n          }\n\n          return thenable.then(resolve, reject);\n        },\n        // React uses these fields to store the result.\n        _reactStatus: -1,\n        _reactResult: null\n      };\n    }\n\n    function forwardRef(render) {\n      {\n        if (typeof render !== 'function') {\n          warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);\n        } else {\n          !( // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object\n          render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;\n        }\n\n        if (render != null) {\n          !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;\n        }\n      }\n      return {\n        $$typeof: REACT_FORWARD_REF_TYPE,\n        render: render\n      };\n    }\n\n    function isValidElementType(type) {\n      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n      type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_PLACEHOLDER_TYPE || typeof type === 'object' && type !== null && (typeof type.then === 'function' || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);\n    }\n    /**\n     * ReactElementValidator provides a wrapper around a element factory\n     * which validates the props passed to the element. This is intended to be\n     * used only in DEV and could be replaced by a static type checker for languages\n     * that support it.\n     */\n\n\n    var propTypesMisspellWarningShown = void 0;\n    {\n      propTypesMisspellWarningShown = false;\n    }\n\n    function getDeclarationErrorAddendum() {\n      if (ReactCurrentOwner.current) {\n        var name = getComponentName(ReactCurrentOwner.current.type);\n\n        if (name) {\n          return '\\n\\nCheck the render method of `' + name + '`.';\n        }\n      }\n\n      return '';\n    }\n\n    function getSourceInfoErrorAddendum(elementProps) {\n      if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {\n        var source = elementProps.__source;\n        var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');\n        var lineNumber = source.lineNumber;\n        return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';\n      }\n\n      return '';\n    }\n    /**\n     * Warn if there's no key explicitly set on dynamic arrays of children or\n     * object keys are not valid. This allows us to keep track of children between\n     * updates.\n     */\n\n\n    var ownerHasKeyUseWarning = {};\n\n    function getCurrentComponentErrorInfo(parentType) {\n      var info = getDeclarationErrorAddendum();\n\n      if (!info) {\n        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;\n\n        if (parentName) {\n          info = '\\n\\nCheck the top-level render call using <' + parentName + '>.';\n        }\n      }\n\n      return info;\n    }\n    /**\n     * Warn if the element doesn't have an explicit key assigned to it.\n     * This element is in an array. The array could grow and shrink or be\n     * reordered. All children that haven't already been validated are required to\n     * have a \"key\" property assigned to it. Error statuses are cached so a warning\n     * will only be shown once.\n     *\n     * @internal\n     * @param {ReactElement} element Element that requires a key.\n     * @param {*} parentType element's parent's type.\n     */\n\n\n    function validateExplicitKey(element, parentType) {\n      if (!element._store || element._store.validated || element.key != null) {\n        return;\n      }\n\n      element._store.validated = true;\n      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);\n\n      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {\n        return;\n      }\n\n      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a\n      // property, it may be the creator of the child that's responsible for\n      // assigning it a key.\n\n      var childOwner = '';\n\n      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {\n        // Give the component that originally created this child.\n        childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';\n      }\n\n      setCurrentlyValidatingElement(element);\n      {\n        warning$1(false, 'Each child in an array or iterator should have a unique \"key\" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);\n      }\n      setCurrentlyValidatingElement(null);\n    }\n    /**\n     * Ensure that every element either is passed in a static location, in an\n     * array with an explicit keys property defined, or in an object literal\n     * with valid key property.\n     *\n     * @internal\n     * @param {ReactNode} node Statically passed child of any type.\n     * @param {*} parentType node's parent's type.\n     */\n\n\n    function validateChildKeys(node, parentType) {\n      if (typeof node !== 'object') {\n        return;\n      }\n\n      if (Array.isArray(node)) {\n        for (var i = 0; i < node.length; i++) {\n          var child = node[i];\n\n          if (isValidElement(child)) {\n            validateExplicitKey(child, parentType);\n          }\n        }\n      } else if (isValidElement(node)) {\n        // This element was passed in a valid location.\n        if (node._store) {\n          node._store.validated = true;\n        }\n      } else if (node) {\n        var iteratorFn = getIteratorFn(node);\n\n        if (typeof iteratorFn === 'function') {\n          // Entry iterators used to provide implicit keys,\n          // but now we print a separate warning for them later.\n          if (iteratorFn !== node.entries) {\n            var iterator = iteratorFn.call(node);\n            var step = void 0;\n\n            while (!(step = iterator.next()).done) {\n              if (isValidElement(step.value)) {\n                validateExplicitKey(step.value, parentType);\n              }\n            }\n          }\n        }\n      }\n    }\n    /**\n     * Given an element, validate that its props follow the propTypes definition,\n     * provided by the type.\n     *\n     * @param {ReactElement} element\n     */\n\n\n    function validatePropTypes(element) {\n      var type = element.type;\n      var name = void 0,\n          propTypes = void 0;\n\n      if (typeof type === 'function') {\n        // Class or functional component\n        name = type.displayName || type.name;\n        propTypes = type.propTypes;\n      } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {\n        // ForwardRef\n        var functionName = type.render.displayName || type.render.name || '';\n        name = type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');\n        propTypes = type.propTypes;\n      } else {\n        return;\n      }\n\n      if (propTypes) {\n        setCurrentlyValidatingElement(element);\n        checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);\n        setCurrentlyValidatingElement(null);\n      } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {\n        propTypesMisspellWarningShown = true;\n        warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');\n      }\n\n      if (typeof type.getDefaultProps === 'function') {\n        !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;\n      }\n    }\n    /**\n     * Given a fragment, validate that it can only be provided with fragment props\n     * @param {ReactElement} fragment\n     */\n\n\n    function validateFragmentProps(fragment) {\n      setCurrentlyValidatingElement(fragment);\n      var keys = Object.keys(fragment.props);\n\n      for (var i = 0; i < keys.length; i++) {\n        var key = keys[i];\n\n        if (key !== 'children' && key !== 'key') {\n          warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);\n          break;\n        }\n      }\n\n      if (fragment.ref !== null) {\n        warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');\n      }\n\n      setCurrentlyValidatingElement(null);\n    }\n\n    function createElementWithValidation(type, props, children) {\n      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to\n      // succeed and there will likely be errors in render.\n\n      if (!validType) {\n        var info = '';\n\n        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {\n          info += ' You likely forgot to export your component from the file ' + \"it's defined in, or you might have mixed up default and named imports.\";\n        }\n\n        var sourceInfo = getSourceInfoErrorAddendum(props);\n\n        if (sourceInfo) {\n          info += sourceInfo;\n        } else {\n          info += getDeclarationErrorAddendum();\n        }\n\n        var typeString = void 0;\n\n        if (type === null) {\n          typeString = 'null';\n        } else if (Array.isArray(type)) {\n          typeString = 'array';\n        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {\n          typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';\n          info = ' Did you accidentally export a JSX literal instead of a component?';\n        } else {\n          typeString = typeof type;\n        }\n\n        warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);\n      }\n\n      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.\n      // TODO: Drop this when these are no longer allowed as the type argument.\n\n      if (element == null) {\n        return element;\n      } // Skip key warning if the type isn't valid since our key validation logic\n      // doesn't expect a non-string/function type and can throw confusing errors.\n      // We don't want exception behavior to differ between dev and prod.\n      // (Rendering will throw with a helpful message and as soon as the type is\n      // fixed, the key warnings will appear.)\n\n\n      if (validType) {\n        for (var i = 2; i < arguments.length; i++) {\n          validateChildKeys(arguments[i], type);\n        }\n      }\n\n      if (type === REACT_FRAGMENT_TYPE) {\n        validateFragmentProps(element);\n      } else {\n        validatePropTypes(element);\n      }\n\n      return element;\n    }\n\n    function createFactoryWithValidation(type) {\n      var validatedFactory = createElementWithValidation.bind(null, type);\n      validatedFactory.type = type; // Legacy hook: remove it\n\n      {\n        Object.defineProperty(validatedFactory, 'type', {\n          enumerable: false,\n          get: function () {\n            lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');\n            Object.defineProperty(this, 'type', {\n              value: type\n            });\n            return type;\n          }\n        });\n      }\n      return validatedFactory;\n    }\n\n    function cloneElementWithValidation(element, props, children) {\n      var newElement = cloneElement.apply(this, arguments);\n\n      for (var i = 2; i < arguments.length; i++) {\n        validateChildKeys(arguments[i], newElement.type);\n      }\n\n      validatePropTypes(newElement);\n      return newElement;\n    }\n\n    var React = {\n      Children: {\n        map: mapChildren,\n        forEach: forEachChildren,\n        count: countChildren,\n        toArray: toArray,\n        only: onlyChild\n      },\n      createRef: createRef,\n      Component: Component,\n      PureComponent: PureComponent,\n      createContext: createContext,\n      forwardRef: forwardRef,\n      Fragment: REACT_FRAGMENT_TYPE,\n      StrictMode: REACT_STRICT_MODE_TYPE,\n      unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,\n      unstable_Profiler: REACT_PROFILER_TYPE,\n      createElement: createElementWithValidation,\n      cloneElement: cloneElementWithValidation,\n      createFactory: createFactoryWithValidation,\n      isValidElement: isValidElement,\n      version: ReactVersion,\n      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals\n    };\n\n    if (enableSuspense) {\n      React.Placeholder = REACT_PLACEHOLDER_TYPE;\n      React.lazy = lazy;\n    }\n\n    var React$2 = Object.freeze({\n      default: React\n    });\n    var React$3 = React$2 && React || React$2; // TODO: decide on the top-level export form.\n    // This is hacky but makes it work with both Rollup and Jest.\n\n    var react = React$3.default || React$3;\n    module.exports = react;\n  })();\n}\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!******************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/react/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"../../node_modules/react/cjs/react.development.js\");\n}\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/react/index.js?");

/***/ }),

/***/ "../../node_modules/shallowequal/index.js":
/*!*************************************************************************************!*\
  !*** C:/Users/sivanova/WebstormProjects/presale/node_modules/shallowequal/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("//\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n\n  if (ret !== void 0) {\n    return !!ret;\n  }\n\n  if (objA === objB) {\n    return true;\n  }\n\n  if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.\n\n  for (var idx = 0; idx < keysA.length; idx++) {\n    var key = keysA[idx];\n\n    if (!bHasOwnProperty(key)) {\n      return false;\n    }\n\n    var valueA = objA[key];\n    var valueB = objB[key];\n    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n\n    if (ret === false || ret === void 0 && valueA !== valueB) {\n      return false;\n    }\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://nf_fe_calculator/C:/Users/sivanova/WebstormProjects/presale/node_modules/shallowequal/index.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n\tthrow new Error(\"define cannot be used indirect\");\r\n};\r\n\n\n//# sourceURL=webpack://nf_fe_calculator/(webpack)/buildin/amd-define.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\r\nmodule.exports = __webpack_amd_options__;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack://nf_fe_calculator/(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function () {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function () {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack://nf_fe_calculator/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/components/loading/index.jsx":
/*!******************************************!*\
  !*** ./src/components/loading/index.jsx ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function () {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  exports.Loading = undefined;\n\n  var _react = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\n  var _react2 = _interopRequireDefault(_react);\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n  (function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n  })();\n\n  var Loading = exports.Loading = function Loading() {\n    return _react2.default.createElement(\"p\", null, \"Loading...\");\n  };\n\n  ;\n\n  (function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n      return;\n    }\n\n    reactHotLoader.register(Loading, \"Loading\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\components\\\\loading\\\\index.jsx\");\n    leaveModule(module);\n  })();\n\n  ;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://nf_fe_calculator/./src/components/loading/index.jsx?");

/***/ }),

/***/ "./src/ducks/calculator.js":
/*!*********************************!*\
  !*** ./src/ducks/calculator.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function () {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  (function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n  })();\n\n  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n  var moduleName = 'calculator';\n  var LOADING = moduleName + \"/LOADING\";\n  var LOADING_SUCCESS = moduleName + \"/LOADING_SUCCESS\";\n\n  function calculator(state, action) {\n    if (state === void 0) {\n      state = {\n        loading: false,\n        message: 'calculator reducer was loaded via a chunk.'\n      };\n    }\n\n    switch (action.type) {\n      case LOADING:\n        return _extends({}, state, {\n          loading: true\n        });\n\n      case LOADING_SUCCESS:\n        return _extends({}, state, {\n          loading: false\n        });\n    }\n\n    return state;\n  }\n\n  calculator.load = function () {\n    return function (dispatch) {\n      dispatch({\n        type: LOADING\n      });\n      setTimeout(function () {\n        return dispatch({\n          type: LOADING_SUCCESS\n        });\n      }, 2000);\n    };\n  };\n\n  var _default = calculator;\n  exports.default = _default;\n  ;\n\n  (function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n      return;\n    }\n\n    reactHotLoader.register(moduleName, \"moduleName\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\ducks\\\\calculator.js\");\n    reactHotLoader.register(LOADING, \"LOADING\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\ducks\\\\calculator.js\");\n    reactHotLoader.register(LOADING_SUCCESS, \"LOADING_SUCCESS\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\ducks\\\\calculator.js\");\n    reactHotLoader.register(calculator, \"calculator\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\ducks\\\\calculator.js\");\n    reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\ducks\\\\calculator.js\");\n    leaveModule(module);\n  })();\n\n  ;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://nf_fe_calculator/./src/ducks/calculator.js?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function () {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  exports.path = exports.component = exports.namespace = exports.duck = undefined;\n\n  var _react = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\n  var _react2 = _interopRequireDefault(_react);\n\n  var _reactLoadable = __webpack_require__(/*! react-loadable */ \"../../node_modules/react-loadable/lib/index.js\");\n\n  var _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\n  var _calculator = __webpack_require__(/*! ./ducks/calculator */ \"./src/ducks/calculator.js\");\n\n  var _calculator2 = _interopRequireDefault(_calculator);\n\n  var _loading = __webpack_require__(/*! ./components/loading */ \"./src/components/loading/index.jsx\");\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n  (function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n  })();\n\n  var namespace = 'calculator';\n  var path = '/calculator';\n\n  function loadRoute(getPromise) {\n    var RouteComponent = (0, _reactLoadable2.default)({\n      loader: function loader() {\n        return getPromise();\n      },\n      loading: _loading.Loading,\n      render: function render(loaded, props) {\n        var Component = loaded.default;\n        return _react2.default.createElement(Component, props);\n      }\n    });\n    return function (routeProps) {\n      return _react2.default.createElement(RouteComponent, routeProps);\n    };\n  }\n\n  var component = loadRoute(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.t.bind(null, /*! ./components/home */ \"./src/components/home/index.js\", 7));\n  });\n  exports.duck = _calculator2.default;\n  exports.namespace = namespace;\n  exports.component = component;\n  exports.path = path;\n  ;\n\n  (function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"../../node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n      return;\n    }\n\n    reactHotLoader.register(namespace, \"namespace\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\index.jsx\");\n    reactHotLoader.register(path, \"path\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\index.jsx\");\n    reactHotLoader.register(loadRoute, \"loadRoute\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\index.jsx\");\n    reactHotLoader.register(component, \"component\", \"C:\\\\Users\\\\sivanova\\\\WebstormProjects\\\\presale\\\\packages\\\\calculator\\\\src\\\\index.jsx\");\n    leaveModule(module);\n  })();\n\n  ;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://nf_fe_calculator/./src/index.jsx?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** dll nf_fe_calculator ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__;\n\n//# sourceURL=webpack://nf_fe_calculator/dll_nf_fe_calculator?");

/***/ })

/******/ });
});