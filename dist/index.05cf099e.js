// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"19Ls1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "51cf58d705cf099e";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lA0Es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _tableView = require("./views/tableView");
var _tableViewDefault = parcelHelpers.interopDefault(_tableView);
var _paginationView = require("./views/paginationView");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
function controlPagination(goToPage) {
    _tableViewDefault.default.render(_model.getUsersPage(goToPage));
    _paginationViewDefault.default.render(_model.state);
}
function controlSorting(criteria, direction) {
}
function init() {
    controlPagination(1);
    _tableViewDefault.default.addHandlerSort();
    _paginationViewDefault.default.addHandlerPageClick(controlPagination);
}
init();

},{"./model":"1pVJj","./views/tableView":"ioOBY","./views/paginationView":"2PAUD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1pVJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "getUsersPage", ()=>getUsersPage
);
parcelHelpers.export(exports, "sortUsers", ()=>sortUsers
);
var _dataJson = require("../data.json");
var _dataJsonDefault = parcelHelpers.interopDefault(_dataJson);
const state = {
    users: _dataJsonDefault.default,
    page: 1,
    resultsPerPage: 10,
    sorting: {
    }
};
function transformUsersData() {
    state.users = _dataJsonDefault.default.map((user)=>{
        return {
            firstName: user.name.firstName,
            lastName: user.name.lastName,
            about: user.about,
            eyeColor: user.eyeColor
        };
    });
}
function addSortingState() {
    for(const prop in state.users)state.sorting.prop = false;
}
function getUsersPage(page = state.page) {
    state.page = page;
    const start = (page - 1) * state.resultsPerPage;
    const end = page * state.resultsPerPage;
    return state.users.slice(start, end);
}
function sortUsers(criteria, direction) {
    if (state.sorting[criteria] === direction) return;
    const orderNumber = direction === 'up' ? 1 : -1;
    state.users.sort((user1, user2)=>{
        if (user1[criteria] < user2[criteria]) return orderNumber;
        if (user1[criteria] < user2[criteria]) return -orderNumber;
        return 0;
    });
}
transformUsersData();
addSortingState();

},{"../data.json":"cnC17","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cnC17":[function(require,module,exports) {
module.exports = JSON.parse("[{\"id\":\"5c2286fb23e87be312d55d9a\",\"name\":{\"firstName\":\"Brooks\",\"lastName\":\"Stone\"},\"phone\":\"+7 (843) 431-2190\",\"about\":\"Qui aliquip esse occaecat voluptate cillum laborum do adipisicing ea. Lorem dolor pariatur exercitation et Lorem voluptate reprehenderit. Culpa nisi sunt laborum culpa eu et nulla aute aliqua commodo cupidatat culpa. Eu laboris dolor enim officia mollit labore proident proident tempor ex minim magna dolor. Ipsum cillum officia irure amet enim voluptate consequat deserunt laborum nulla excepteur pariatur voluptate incididunt. In excepteur adipisicing dolor ea occaecat elit. Irure dolor quis cillum minim voluptate.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb7f4c26c63eff1b66\",\"name\":{\"firstName\":\"Johnston\",\"lastName\":\"Tate\"},\"phone\":\"+7 (939) 409-2841\",\"about\":\"Eu ipsum est in exercitation voluptate occaecat fugiat fugiat ea elit ad veniam adipisicing ullamco. Laboris consectetur enim dolore amet exercitation sit non do reprehenderit non. Proident consequat anim non voluptate non culpa sit occaecat adipisicing. Reprehenderit dolor cillum laboris incididunt exercitation quis esse in ad ut voluptate commodo in. Exercitation veniam adipisicing irure ut qui nulla.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fb25005bd0905c04e1\",\"name\":{\"firstName\":\"Susie\",\"lastName\":\"Newman\"},\"phone\":\"+7 (910) 551-3326\",\"about\":\"Non eiusmod minim ut anim qui non dolore veniam. Lorem veniam nostrud ullamco ad enim commodo incididunt amet ipsum irure. Minim sint tempor incididunt quis. Excepteur commodo mollit elit voluptate reprehenderit eiusmod ex nostrud dolor mollit. Culpa duis pariatur anim sunt in irure ex aliqua.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb982c7590025be630\",\"name\":{\"firstName\":\"Kelly\",\"lastName\":\"Schwartz\"},\"phone\":\"+7 (977) 450-2369\",\"about\":\"Et commodo velit proident reprehenderit. In cillum adipisicing ut excepteur nostrud pariatur proident. Qui consectetur esse aliqua incididunt dolor esse ullamco cupidatat tempor mollit. Elit nulla eiusmod occaecat laborum laborum consequat eu nisi labore tempor aute. Dolor sunt anim reprehenderit non excepteur dolor consectetur eu.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fbc20c5d4618855c36\",\"name\":{\"firstName\":\"Chris\",\"lastName\":\"Dorsey\"},\"phone\":\"+7 (886) 425-2696\",\"about\":\"Aliquip velit ut ex nisi officia proident. Eu anim elit deserunt exercitation officia tempor proident eu non incididunt aliqua. Lorem consequat commodo laborum minim ad consectetur. Sunt et anim dolor mollit tempor irure. Non fugiat anim laborum fugiat duis et culpa ea enim excepteur. Amet sint enim aliquip est.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb0d7c75cda0c18b33\",\"name\":{\"firstName\":\"Jimmie\",\"lastName\":\"Gay\"},\"phone\":\"+7 (908) 513-3062\",\"about\":\"Nisi deserunt eu consectetur occaecat minim aliqua eu cupidatat ea. Esse consectetur deserunt nulla ullamco sit aute. Ad aliqua sint veniam enim exercitation in eiusmod ut aliqua consequat ipsum laborum. Aliqua excepteur non dolore adipisicing aliquip incididunt nostrud dolore consequat.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb49295e3d2caa2b19\",\"name\":{\"firstName\":\"Moon\",\"lastName\":\"Ortiz\"},\"phone\":\"+7 (905) 447-3306\",\"about\":\"Eiusmod amet commodo sit nulla velit eu eiusmod. Fugiat proident sunt fugiat nostrud occaecat velit qui. Ea aute culpa irure excepteur esse. Laborum esse in enim aliqua proident ea cupidatat enim ea enim exercitation ullamco. Aliquip culpa enim et tempor elit enim quis sint ea.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fbb2ad79f1f40500d3\",\"name\":{\"firstName\":\"Beach\",\"lastName\":\"Lindsey\"},\"phone\":\"+7 (981) 438-3607\",\"about\":\"Laborum pariatur fugiat ut fugiat nulla ad nostrud minim nulla do do occaecat labore. Incididunt exercitation nulla ea sint quis excepteur reprehenderit. Amet ea tempor dolor incididunt aliqua reprehenderit laborum excepteur consectetur consequat minim ea. Velit labore ex non reprehenderit. Dolor laboris voluptate sit adipisicing ad officia tempor aliqua eu. Aliqua do cupidatat veniam nulla. Aliqua minim tempor non eu commodo quis ex.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb25a61a6ff446ab4f\",\"name\":{\"firstName\":\"Gilbert\",\"lastName\":\"Sanford\"},\"phone\":\"+7 (891) 579-2502\",\"about\":\"Cupidatat veniam occaecat deserunt ullamco do magna ex voluptate exercitation irure. Proident ea officia laboris nulla eu fugiat aliqua veniam duis exercitation aute anim velit. Minim nulla amet id mollit reprehenderit id. Duis ullamco occaecat mollit excepteur adipisicing nostrud velit exercitation quis veniam commodo aliquip veniam. Mollit sunt culpa nulla excepteur adipisicing do ut fugiat. Mollit elit pariatur esse ea officia mollit exercitation.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fbfb41f12cd0bc3fb2\",\"name\":{\"firstName\":\"Julie\",\"lastName\":\"Shepherd\"},\"phone\":\"+7 (944) 442-3173\",\"about\":\"Excepteur quis exercitation sint officia commodo commodo aliquip ex exercitation laborum quis qui. Reprehenderit aliqua dolore aliqua est veniam et. Cupidatat sint ea ex consectetur eu aliqua cillum velit nulla ipsum fugiat qui ad.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fbd9e655815bd489d2\",\"name\":{\"firstName\":\"Callie\",\"lastName\":\"Ford\"},\"phone\":\"+7 (998) 563-3808\",\"about\":\"Ea elit veniam laborum adipisicing. Lorem consequat magna ea et aliqua duis in mollit ea commodo officia amet et. Amet eu cupidatat proident commodo ex exercitation est voluptate mollit laborum et tempor duis nisi. Qui cupidatat adipisicing enim irure enim elit ullamco.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fbbabce0ea304e7b70\",\"name\":{\"firstName\":\"Beatriz\",\"lastName\":\"Lancaster\"},\"phone\":\"+7 (812) 472-3455\",\"about\":\"Cillum quis incididunt aute laboris ad ad irure laborum fugiat nostrud. Ad aute sint duis excepteur ut officia. Qui consequat incididunt magna incididunt anim sunt cillum dolor incididunt veniam nulla elit id. Ullamco eu in tempor laborum sunt consectetur cupidatat ex amet Lorem reprehenderit in. Exercitation laborum labore minim ad. Occaecat culpa amet aute cupidatat nostrud excepteur.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb639d7dbcc0cae9e6\",\"name\":{\"firstName\":\"Johnnie\",\"lastName\":\"Knowles\"},\"phone\":\"+7 (995) 488-2804\",\"about\":\"In esse exercitation tempor proident nulla est amet ut. Enim pariatur do laboris dolor Lorem amet ullamco eiusmod aliqua excepteur elit nisi. Adipisicing deserunt cupidatat in reprehenderit adipisicing proident deserunt. Elit adipisicing officia excepteur magna magna officia incididunt minim irure pariatur. Aliquip culpa do ullamco labore aliqua minim reprehenderit magna esse Lorem culpa. Consequat elit labore irure cupidatat id qui pariatur deserunt non consequat eiusmod et minim amet.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb5d734a18b3163fc8\",\"name\":{\"firstName\":\"Finley\",\"lastName\":\"Watts\"},\"phone\":\"+7 (928) 472-2012\",\"about\":\"Occaecat in velit ullamco ad mollit ea nisi mollit sit esse consectetur exercitation reprehenderit. Labore cupidatat voluptate quis ipsum esse excepteur. Enim sunt officia culpa Lorem ipsum voluptate id aliquip. Aute nostrud consectetur consectetur quis aute quis exercitation aliqua elit magna.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb54624961f84b6607\",\"name\":{\"firstName\":\"Brady\",\"lastName\":\"Trevino\"},\"phone\":\"+7 (954) 435-2361\",\"about\":\"In sunt non reprehenderit Lorem sit exercitation anim eiusmod irure. Non anim Lorem nulla in culpa non pariatur nulla in Lorem enim sit. Sunt pariatur deserunt occaecat ut. Nostrud enim laborum pariatur Lorem voluptate reprehenderit do aute officia veniam. Duis laborum et ea laboris elit consectetur id enim enim nisi consequat. Tempor occaecat culpa qui ipsum nisi fugiat nisi sit esse ea. Culpa est nisi Lorem officia commodo minim ullamco cupidatat nisi irure.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fb5c2ac3cd9312946c\",\"name\":{\"firstName\":\"Vanessa\",\"lastName\":\"Lowe\"},\"phone\":\"+7 (804) 563-2180\",\"about\":\"Reprehenderit magna esse tempor dolor deserunt veniam officia ullamco ipsum. Officia nostrud dolore fugiat amet reprehenderit sint velit est nisi exercitation in et. Aliqua quis nisi duis minim. Exercitation pariatur officia aliquip do anim nisi nisi dolor pariatur consectetur ea.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fbad86e5926e025b52\",\"name\":{\"firstName\":\"Maricela\",\"lastName\":\"Roberson\"},\"phone\":\"+7 (937) 471-3638\",\"about\":\"Duis cupidatat qui nulla ea elit enim est incididunt aute consequat fugiat minim non sint. Id ipsum exercitation minim minim aute. Minim magna aliquip adipisicing in fugiat aliquip duis proident.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fbe9146dab0289ee25\",\"name\":{\"firstName\":\"Marva\",\"lastName\":\"Ray\"},\"phone\":\"+7 (930) 439-2652\",\"about\":\"Non aliqua cupidatat quis adipisicing non consequat. Nulla eiusmod sint minim aliqua sint nostrud occaecat nisi incididunt. Dolor exercitation enim elit nisi aute cillum proident duis fugiat do ex excepteur. Deserunt fugiat est laborum esse veniam. Magna ipsum ea incididunt proident.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb6ed4e8c39e8f549c\",\"name\":{\"firstName\":\"Mcclure\",\"lastName\":\"Melendez\"},\"phone\":\"+7 (946) 407-3558\",\"about\":\"Exercitation aliqua id cillum laborum amet officia et. Est ad nulla do incididunt consequat officia laborum magna laboris. Incididunt est voluptate voluptate non est ipsum commodo enim voluptate mollit sit ullamco aliquip ea. Eiusmod incididunt ea occaecat incididunt adipisicing eiusmod deserunt elit reprehenderit. Est nulla minim commodo quis id irure proident do magna aliqua culpa aute cillum reprehenderit. Incididunt nulla Lorem officia veniam sunt culpa. Proident sunt sint incididunt non voluptate consequat amet elit ea ut incididunt dolore.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fb42cbbcf764de06c8\",\"name\":{\"firstName\":\"Vasquez\",\"lastName\":\"Manning\"},\"phone\":\"+7 (970) 405-2316\",\"about\":\"Sunt mollit anim nulla consequat. Commodo laborum Lorem labore sunt pariatur consequat velit ad. Pariatur aute Lorem dolor cillum dolore sit ut. Deserunt excepteur elit do qui ex anim pariatur pariatur dolor eu laborum cillum ipsum veniam. Nisi dolore ipsum irure magna do amet ex esse in laboris aliqua ullamco fugiat cupidatat. Consequat tempor velit consectetur consequat enim do Lorem adipisicing tempor laboris. Mollit officia cupidatat veniam duis minim cillum nostrud incididunt ullamco ad incididunt enim est.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb03b63d22fad39e10\",\"name\":{\"firstName\":\"Hawkins\",\"lastName\":\"Hopkins\"},\"phone\":\"+7 (837) 542-3177\",\"about\":\"Fugiat aliqua esse eu quis velit nulla fugiat id reprehenderit sint non irure ea enim. Elit laborum sunt esse occaecat aliqua veniam dolore nostrud dolore. Eiusmod et commodo dolor exercitation Lorem consectetur qui sint eu. Culpa magna ut consequat Lorem nisi proident nisi irure adipisicing laboris velit dolore Lorem.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb88b8cf12c9a35aca\",\"name\":{\"firstName\":\"Angelina\",\"lastName\":\"Gillespie\"},\"phone\":\"+7 (868) 520-3317\",\"about\":\"Est esse deserunt laborum sint sunt occaecat cupidatat enim. Duis aliqua officia cupidatat cupidatat. Eu enim elit eu magna proident est veniam. Pariatur proident elit in aliqua ad consectetur proident nostrud anim reprehenderit.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb73c192df1d6cf949\",\"name\":{\"firstName\":\"Meghan\",\"lastName\":\"Robbins\"},\"phone\":\"+7 (967) 457-3538\",\"about\":\"Lorem nostrud aute incididunt proident non laboris esse non do excepteur. Sint mollit consequat enim minim quis laborum ad cupidatat aliquip minim duis. Sunt excepteur id esse voluptate.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fb8ab95671e3765259\",\"name\":{\"firstName\":\"Malone\",\"lastName\":\"Mack\"},\"phone\":\"+7 (843) 581-2406\",\"about\":\"Esse nostrud voluptate commodo commodo ad consectetur aliquip tempor velit veniam ex. Culpa reprehenderit pariatur aliqua in occaecat cillum esse laboris enim exercitation ex minim. Labore non sint deserunt id. Et deserunt id anim magna amet. Non ipsum commodo commodo sint nostrud dolore et veniam elit ad. Est dolor non ad id enim ut laborum do consectetur id officia. Exercitation cillum occaecat eiusmod exercitation.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fba5bd3d862ac4d7e0\",\"name\":{\"firstName\":\"Eula\",\"lastName\":\"Aguirre\"},\"phone\":\"+7 (886) 422-2720\",\"about\":\"Consectetur do cupidatat reprehenderit nulla anim dolore anim voluptate esse non ex ullamco eu ea. Deserunt do irure ad incididunt ut. Minim pariatur ipsum quis ipsum reprehenderit exercitation voluptate ut occaecat labore amet. Nisi sit ex dolor nulla reprehenderit nulla ullamco sint aliqua. Ullamco non aliquip elit est eiusmod.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb4148f031437ee69c\",\"name\":{\"firstName\":\"Katy\",\"lastName\":\"Church\"},\"phone\":\"+7 (860) 475-2861\",\"about\":\"Pariatur irure dolore excepteur commodo do id commodo ex sit nulla tempor fugiat dolor. Ad ullamco labore eiusmod laboris quis excepteur velit minim exercitation elit non irure. Occaecat voluptate nostrud cillum ea laboris exercitation consectetur ex. Incididunt nisi magna occaecat reprehenderit laboris esse. Laborum nulla fugiat sint incididunt. Deserunt quis ipsum aute eiusmod anim dolore sunt.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb49d38b81288fca71\",\"name\":{\"firstName\":\"Blanca\",\"lastName\":\"Bradshaw\"},\"phone\":\"+7 (806) 457-2264\",\"about\":\"Dolore quis ex laborum anim tempor adipisicing Lorem pariatur reprehenderit commodo sit fugiat. Cillum consectetur ea reprehenderit anim. Dolor voluptate proident pariatur veniam reprehenderit aliqua nostrud.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fb0afb209b3bec8073\",\"name\":{\"firstName\":\"Kay\",\"lastName\":\"William\"},\"phone\":\"+7 (914) 411-3009\",\"about\":\"Consequat eu fugiat id elit laborum do nulla Lorem nulla in laborum laborum. Sit officia nulla amet consequat commodo deserunt eu cupidatat labore nostrud nostrud. Cillum nulla cillum ad nostrud eiusmod elit esse tempor commodo proident nostrud occaecat reprehenderit. Excepteur in officia mollit in qui non aute in sunt sint Lorem eiusmod consequat.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fbbfc54c696f663211\",\"name\":{\"firstName\":\"Camacho\",\"lastName\":\"Wells\"},\"phone\":\"+7 (946) 492-2660\",\"about\":\"Occaecat deserunt consequat deserunt officia ipsum ex. Nostrud officia in voluptate tempor velit nisi dolor cupidatat irure quis. Deserunt excepteur deserunt veniam exercitation ea cillum nostrud occaecat excepteur in ut veniam. Anim voluptate pariatur sunt consequat pariatur occaecat laborum nisi esse labore cupidatat. Do proident cillum consectetur enim Lorem voluptate proident.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fbb73f5c893d46dde2\",\"name\":{\"firstName\":\"Bradshaw\",\"lastName\":\"Hodges\"},\"phone\":\"+7 (807) 586-3870\",\"about\":\"Ea quis sint magna amet nulla ut nostrud. Ea sunt do aliquip cupidatat pariatur officia ex laboris proident quis minim ea. Officia anim minim aliquip labore ex anim irure qui anim magna labore aliqua occaecat. Velit consequat duis culpa esse dolor. Duis non qui fugiat ex laboris.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb6072dd80f1d56c39\",\"name\":{\"firstName\":\"Rutledge\",\"lastName\":\"Acosta\"},\"phone\":\"+7 (800) 574-3803\",\"about\":\"Dolore minim anim sint eu culpa et eu adipisicing nisi laborum laborum id qui veniam. Anim reprehenderit est dolor proident velit nisi. Anim eu elit enim laborum minim duis. Consequat et ipsum ex esse cillum excepteur commodo commodo irure sit proident. In deserunt nulla qui fugiat.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fbc750d871ffb16329\",\"name\":{\"firstName\":\"Cline\",\"lastName\":\"Fitzpatrick\"},\"phone\":\"+7 (894) 563-2167\",\"about\":\"In incididunt reprehenderit quis do consequat duis et in. Ea mollit mollit nulla deserunt nulla commodo voluptate laboris cupidatat sit non. Sint eiusmod minim ut commodo sint. Quis in ea non consectetur do aliquip veniam aute.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fb79bf32d653202f75\",\"name\":{\"firstName\":\"Sloan\",\"lastName\":\"Dale\"},\"phone\":\"+7 (828) 575-3234\",\"about\":\"Laboris ut ullamco consequat nisi occaecat sint nisi. Commodo minim deserunt officia exercitation est aliquip pariatur et aliquip quis dolore deserunt esse. Eu consectetur elit do veniam sit.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb81d27ce4dd8a84ae\",\"name\":{\"firstName\":\"Buckner\",\"lastName\":\"Fowler\"},\"phone\":\"+7 (801) 600-3763\",\"about\":\"Est anim labore ea qui officia ea sunt dolor. Elit aliquip dolore amet nostrud qui cillum anim aute ut voluptate non non. Consectetur cillum velit elit sit dolore occaecat amet sunt mollit quis aute labore enim commodo. Minim eu in nisi mollit veniam aliquip fugiat duis nostrud deserunt incididunt duis.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fbf5a16ef438aaa5fa\",\"name\":{\"firstName\":\"Hays\",\"lastName\":\"Hurley\"},\"phone\":\"+7 (963) 481-2993\",\"about\":\"Consequat commodo anim est ex veniam dolor pariatur officia officia elit quis sint esse. Commodo consectetur esse enim mollit reprehenderit qui ad. Mollit magna ipsum et exercitation voluptate veniam adipisicing duis nisi dolore ad do quis tempor. Esse ea nisi cupidatat non elit velit anim nulla qui nisi commodo ullamco anim.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fbab253d31546ba1ac\",\"name\":{\"firstName\":\"Ryan\",\"lastName\":\"Case\"},\"phone\":\"+7 (847) 466-2653\",\"about\":\"Excepteur quis dolor qui laborum anim anim cupidatat culpa esse sunt excepteur. Incididunt elit nostrud excepteur anim nostrud sit veniam deserunt sunt id ipsum labore aute dolor. Est culpa in do ea Lorem fugiat cillum reprehenderit. Consectetur cupidatat irure adipisicing dolore voluptate sit ex. Exercitation in tempor duis ea irure nisi minim velit ipsum irure. Cillum ullamco cillum commodo fugiat mollit.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fb63577dc573f8a927\",\"name\":{\"firstName\":\"Tameka\",\"lastName\":\"Walls\"},\"phone\":\"+7 (984) 523-3641\",\"about\":\"Aliqua tempor do tempor Lorem laborum ut consectetur commodo velit magna non deserunt quis. Eu et cupidatat pariatur amet laborum amet officia eu voluptate ad adipisicing. Occaecat nisi Lorem esse commodo dolore tempor dolore exercitation ea sint labore. Do proident id quis ex do consequat non eiusmod consequat pariatur nostrud. Ad id adipisicing reprehenderit sit amet fugiat in eiusmod sunt incididunt laboris.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fb82222dbb58fb241c\",\"name\":{\"firstName\":\"Diane\",\"lastName\":\"Pruitt\"},\"phone\":\"+7 (959) 464-3535\",\"about\":\"Occaecat ad reprehenderit aute quis culpa anim tempor officia. Fugiat laboris et nostrud veniam aliquip. Ut nulla culpa quis anim sunt aliquip. Proident esse incididunt do commodo est non ea dolor nisi adipisicing quis id exercitation. Nisi eu do pariatur id officia nostrud culpa amet. Anim duis anim aute amet pariatur irure anim deserunt irure sit proident sunt exercitation. Culpa nisi excepteur id laborum occaecat esse occaecat laborum aliquip non non.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb1802a0ecd0aa6873\",\"name\":{\"firstName\":\"Mccullough\",\"lastName\":\"Sullivan\"},\"phone\":\"+7 (953) 553-3215\",\"about\":\"Velit ipsum elit amet aute incididunt culpa occaecat dolore cillum esse quis magna veniam. Elit ipsum cupidatat irure Lorem minim nulla deserunt. Incididunt officia esse Lorem cillum sint qui amet esse est.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fb02d305780e20521b\",\"name\":{\"firstName\":\"Fay\",\"lastName\":\"Burgess\"},\"phone\":\"+7 (935) 563-3787\",\"about\":\"Occaecat non nisi nisi qui minim eiusmod aute ullamco culpa aliquip ut irure. Culpa sit exercitation dolore ullamco velit proident incididunt. Amet aliqua adipisicing cillum sint cupidatat ullamco cillum aute eiusmod ex. Adipisicing reprehenderit proident nulla commodo mollit tempor eiusmod nulla eiusmod. Non commodo amet reprehenderit aute. Officia voluptate in adipisicing nostrud pariatur in. Labore commodo do commodo excepteur nostrud ea occaecat ullamco pariatur veniam excepteur aliquip fugiat amet.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fbe330f035ee90c0db\",\"name\":{\"firstName\":\"Kasey\",\"lastName\":\"Joyner\"},\"phone\":\"+7 (998) 497-2317\",\"about\":\"Dolor aliqua quis nulla fugiat enim cillum aute excepteur. Qui qui commodo ipsum deserunt velit fugiat ex ipsum Lorem velit. Veniam veniam aliquip commodo adipisicing officia sint ut dolor et. Fugiat consequat ad nulla nostrud aliqua Lorem. Sit tempor ut esse non nisi officia qui consectetur velit adipisicing sit excepteur cupidatat.\",\"eyeColor\":\"blue\"},{\"id\":\"5c2286fbf21aa796126a9505\",\"name\":{\"firstName\":\"Delia\",\"lastName\":\"Kline\"},\"phone\":\"+7 (901) 562-2975\",\"about\":\"Nulla esse sunt aute reprehenderit aliqua nisi eiusmod dolor. Excepteur consequat nisi ea ex velit et officia voluptate. Qui culpa mollit culpa ut enim non laborum in amet. Id aute cupidatat magna ipsum consequat magna officia velit.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fb771275c314fa32d2\",\"name\":{\"firstName\":\"Finch\",\"lastName\":\"Keller\"},\"phone\":\"+7 (845) 599-3611\",\"about\":\"Proident nostrud voluptate incididunt nostrud Lorem cillum voluptate cillum ipsum duis irure. Ut exercitation aliquip ullamco laboris sunt incididunt magna est ipsum cillum. Dolor exercitation ullamco dolor anim et mollit ex proident amet Lorem proident laboris enim. Tempor laboris dolore anim anim officia voluptate exercitation sint eiusmod. Pariatur ex laborum nulla adipisicing ex cupidatat ea officia duis aute. Do anim velit dolor ad quis occaecat id.\",\"eyeColor\":\"green\"},{\"id\":\"5c2286fb166f6243646aa197\",\"name\":{\"firstName\":\"Yang\",\"lastName\":\"Reeves\"},\"phone\":\"+7 (976) 457-2144\",\"about\":\"Fugiat deserunt veniam incididunt cillum irure nulla esse. Minim ut dolor in consequat anim incididunt. Consequat incididunt culpa enim laborum et ipsum.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fbec1ed6670a8e3fce\",\"name\":{\"firstName\":\"Mayer\",\"lastName\":\"Boyd\"},\"phone\":\"+7 (811) 462-2191\",\"about\":\"Dolor enim ad aliquip cupidatat ut voluptate voluptate Lorem proident dolore. Anim id ullamco consequat aliqua ut voluptate et ea minim officia. Dolor ex irure sint Lorem ad tempor duis. Sit ullamco ullamco eu esse cupidatat ut culpa ut. Reprehenderit ex proident do esse labore fugiat non Lorem exercitation excepteur ex et. Mollit in aliqua nostrud irure ipsum ad cupidatat eu aliqua ut officia. Est Lorem ut do et duis irure velit ipsum ullamco duis.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fb8e5edeca325590ee\",\"name\":{\"firstName\":\"Molly\",\"lastName\":\"Gentry\"},\"phone\":\"+7 (987) 526-2754\",\"about\":\"Do aliquip occaecat labore excepteur officia. Tempor Lorem ipsum qui enim non et quis velit. Commodo ut commodo aliqua proident irure minim non adipisicing id dolore. Veniam voluptate esse nostrud ut anim ea. Do dolor id quis commodo eiusmod aliquip in ex duis fugiat proident amet ad. Excepteur fugiat occaecat ad Lorem esse est quis pariatur aliqua amet sunt consequat consectetur. Pariatur laboris mollit ut sunt commodo aute quis velit fugiat qui nostrud consectetur qui consectetur.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fbe2e14f332b2ec00d\",\"name\":{\"firstName\":\"Misty\",\"lastName\":\"Fernandez\"},\"phone\":\"+7 (859) 510-3637\",\"about\":\"Velit est aliqua laboris ea commodo. Nisi adipisicing veniam deserunt excepteur do excepteur in sit ullamco do laborum minim ex. Qui dolor ullamco consectetur esse ut irure dolor cupidatat duis dolor eiusmod cupidatat.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fbc0dd407398e1a2a1\",\"name\":{\"firstName\":\"George\",\"lastName\":\"Yang\"},\"phone\":\"+7 (909) 426-3260\",\"about\":\"Officia aliquip consequat reprehenderit do aute Lorem in proident reprehenderit ad ullamco eiusmod esse consectetur. Eu fugiat Lorem ullamco irure minim pariatur aliqua magna mollit non eu exercitation exercitation. Enim Lorem exercitation fugiat ad reprehenderit enim laborum qui. Id officia reprehenderit veniam nostrud officia laboris minim ad fugiat ex nulla dolor ut proident. Nulla consequat amet anim id eiusmod minim.\",\"eyeColor\":\"brown\"},{\"id\":\"5c2286fbaee7a091b9ead63f\",\"name\":{\"firstName\":\"Lucille\",\"lastName\":\"Clark\"},\"phone\":\"+7 (972) 469-3368\",\"about\":\"Irure ex exercitation et dolore. Quis duis dolor quis do deserunt voluptate. Aliquip commodo sunt consequat non consectetur anim qui voluptate commodo culpa. Laborum mollit tempor adipisicing ad do mollit dolor ex veniam in quis exercitation. Consectetur consectetur incididunt pariatur sunt dolore. Consequat ullamco consectetur sunt proident sunt excepteur pariatur dolor magna ut esse tempor.\",\"eyeColor\":\"red\"},{\"id\":\"5c2286fb7761161aac35caaa\",\"name\":{\"firstName\":\"Leblanc\",\"lastName\":\"Monroe\"},\"phone\":\"+7 (950) 498-3212\",\"about\":\"Nulla consectetur laboris nisi labore laboris reprehenderit. Deserunt aute pariatur nostrud tempor amet ad pariatur et ipsum cupidatat nostrud. Elit irure labore nostrud et reprehenderit enim. Deserunt sint magna sunt ex commodo nostrud adipisicing et laborum est amet.\",\"eyeColor\":\"brown\"}]");

},{}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ioOBY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
class TableView extends _view.View {
    _data;
    _parentElement = document.querySelector('tbody');
    _tableHeader = document.querySelector('thead');
    addHandlerSort(handler) {
        this._tableHeader.addEventListener('click', function(e) {
            const sortBtn = e.target.closest('.table-header__sort-icon');
            if (!sortBtn) return;
            const criteria = sortBtn.closest('.table-header').id;
            const direction = sortBtn.dataset.direction;
            handler(criteria, direction);
        });
    }
    _generateMarkup() {
        return this._data.map(this._generateRowMarkup).join('');
    }
    _generateRowMarkup(user) {
        return `<tr class="row">
                    <td class="cell">${user.firstName}</td>
                    <td class="cell">${user.lastName}</td>
                    <td class="cell cell_short">${user.about}</td>
                    <td class="cell" style="background: ${user.eyeColor}"></td>
                </tr>
                <tr class="spacer">
                    <td colspan="5"></td>
                </tr>`;
    }
}
exports.default = new TableView();

},{"./view":"aXC0x","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aXC0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View
);
class View {
    _clear() {
        this._parentElement.innerHTML = '';
    }
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2PAUD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
class PaginationView extends _view.View {
    _parentElement = document.querySelector('.pagination');
    addHandlerPageClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const button = e.target.closest('.btn');
            if (!button) return;
            const goToPage = button.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const page = +this._data.page;
        const numPages = Math.ceil(this._data.users.length / this._data.resultsPerPage);
        // Первая страница, и есть еще страницы
        if (page === 1 && numPages > 1) return `<button data-goto='${page + 1}' class='btn pagination__btn_next'>
                        <span class="btn__text">${page + 1}</span>
                    </button>`;
        // Последняя страница
        if (page === numPages && numPages > 1) return `<button data-goto='${page - 1}' class='btn pagination__btn_previous'>
                    <span class="btn__text">${page - 1}</span>
                </button>`;
        // Любая страница между первой и последней
        if (page < numPages) return `<button data-goto='${page - 1}' class='btn pagination__btn_previous'>
                        <span class="btn__text">${page - 1}</span>
                    </button>
                    <button data-goto='${page + 1}' class='btn pagination__btn_next'>
                        <span class="btn__text">${page + 1}</span>
                    </button>`;
    }
}
exports.default = new PaginationView();

},{"./view":"aXC0x","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["19Ls1","lA0Es"], "lA0Es", "parcelRequiref4c2")

//# sourceMappingURL=index.05cf099e.js.map
