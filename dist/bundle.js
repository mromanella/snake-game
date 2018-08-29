/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/index.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-window {\r\n    border: 1px solid black;\r\n}\r\n\r\n.score-label, .score {\r\n    display: inline;\r\n}\r\n\r\n.score {\r\n    padding-left: 0.5em;\r\n}\r\n\r\n.direction-controls {\r\n    width:250px;\r\n    visibility: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.up-down-btn, .left-right-btn {\r\n    width:100%;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: row; \r\n}\r\n\r\n.up-down-btn {\r\n    justify-content: center;\r\n}\r\n\r\n.left-right-btn {\r\n    padding:5px;\r\n    justify-content:space-around;\r\n}\r\n\r\n.github-footer {\r\n    text-align:center;\r\n    bottom: 5px; \r\n    position:absolute;\r\n}\r\n\r\nbutton {\r\n    padding:20px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/animator.ts":
/*!*************************!*\
  !*** ./src/animator.ts ***!
  \*************************/
/*! exports provided: Animator, Point, Circle, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return Animator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
class Animator {
    /**
     * @description Creates an animator class.
     * @param canvasId The HTML ID for the canvas element.
     * @param callbackFunc The function to perform on every draw. Accepts 2dCanvasContext as a param.
     * @param FPS The FPS rate. Pass in an int - 30 for 30 FPS.
     */
    constructor(canvasId, fps, callback, ...args) {
        /**
         * @description Draws.
         * @param runningTime precise time
         */
        this.animate = (runningTime) => {
            if (!this.stopped) {
                if (!this.lastDraw) {
                    this.lastDraw = runningTime;
                }
                let diff = runningTime - this.lastDraw;
                if (diff / this.fps > 1) {
                    // Clear before redraw
                    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
                    // Run the callback function to draw
                    this.callback(this.ctx, this, ...this.args);
                    this.lastDraw = runningTime;
                }
            }
            requestAnimationFrame(this.animate);
        };
        this.stopAnimating = () => {
            this.stopped = true;
        };
        this.resumeAnimating = () => {
            this.stopped = false;
        };
        this.isStopped = () => {
            return this.stopped;
        };
        this.getFPS = () => {
            return 1000 / this.fps;
        };
        this.setFPS = (fps) => {
            this.fps = 1000 / fps;
            return this.fps;
        };
        this.canvasEl = document.getElementById(canvasId);
        this.ctx = this.canvasEl.getContext('2d');
        this.canvasHeight = this.canvasEl.height;
        this.canvasWidth = this.canvasEl.width;
        this.lastDraw = false;
        this.stopped = false;
        this.callback = callback;
        this.fps = this.setFPS(fps);
        this.args = args;
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Circle extends Point {
    constructor(x, y, radius, color) {
        super(x, y);
        this.draw = (ctx) => {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fill();
        };
        this.radius = radius;
        this.color = color;
    }
}
class Line {
    constructor(path, width, color) {
        this.draw = (ctx) => {
            for (let i = 0; i + 1 < this.path.length; i++) {
                let point1 = this.path[i];
                let point2 = this.path[i + 1];
                ctx.beginPath();
                ctx.moveTo(point1.x, point1.y);
                ctx.lineWidth = this.width;
                ctx.strokeStyle = this.color;
                ctx.lineTo(point2.x, point2.y);
                ctx.stroke();
            }
        };
        this.appendPoint = (point) => {
            this.path.push(point);
        };
        this.path = path;
        this.width = width;
        this.color = color;
    }
}


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ "./src/snake.ts");
/* harmony import */ var _snake_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake-part */ "./src/snake-part.ts");
/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animator */ "./src/animator.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);




const SCORE_TAG = document.getElementById('score');
// const CENTER = CANVAS_EL.height;
let gameSpeed = 3;
const gameSpeedDelta = 1;
const gameSpeedLimit = 10;
let gameRunning = true;
const FPS = gameSpeed;
const CANVAS_ID = 'game-window';
// randomize starting direction
let lastKeyPressed = getRandomDirection();
let lastDraw = null;
let snake = null;
let food = null;
let score = 0;
window.onload = () => {
    setupControls();
    let animator = new _animator__WEBPACK_IMPORTED_MODULE_2__["Animator"](CANVAS_ID, FPS, gameLoop);
    food = randomizeFood(animator.canvasWidth, animator.canvasHeight);
    snake = new _snake__WEBPACK_IMPORTED_MODULE_0__["Snake"]({ x: animator.canvasWidth, y: animator.canvasHeight }, '#000', lastKeyPressed);
    animator.animate(0);
};
/**
 * @description Gets a random key
 */
function getRandomDirection() {
    return _snake__WEBPACK_IMPORTED_MODULE_0__["KEYS"][Math.floor(Math.random() * _snake__WEBPACK_IMPORTED_MODULE_0__["KEYS"].length)];
}
/**
 * @description Vibrates phone if available
 */
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}
/**
 * @description Determines if mobile browser is in use
 * @returns true or false
 */
function mobileCheck() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true; })(navigator.userAgent || navigator.vendor);
    // return true;
    return check;
}
function setupControls() {
    // determine if we are being run on mobile
    if (mobileCheck()) {
        // setup button press listeners
        document.getElementById('up').onclick = (e) => {
            vibrate();
            setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["UP"]);
        };
        document.getElementById('left').onclick = (e) => {
            vibrate();
            setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["LEFT"]);
        };
        document.getElementById('down').onclick = (e) => {
            vibrate();
            setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["DOWN"]);
        };
        document.getElementById('right').onclick = (e) => {
            vibrate();
            setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["RIGHT"]);
        };
        // display buttons for direction controls
        let directionControls = document.getElementById('direction-controls');
        directionControls.style.visibility = 'visible';
    }
    else {
        // set up keyboard listeners
        window.addEventListener('keydown', (e) => {
            e.stopPropagation();
            let key = e.keyCode;
            setDirection(key);
        });
    }
}
/**
 * @description Sets the last pressed key
 * @param key Keycode number
 */
function setDirection(key) {
    if (key === _snake__WEBPACK_IMPORTED_MODULE_0__["UP"] ||
        key === _snake__WEBPACK_IMPORTED_MODULE_0__["DOWN"] ||
        key === _snake__WEBPACK_IMPORTED_MODULE_0__["LEFT"] ||
        key === _snake__WEBPACK_IMPORTED_MODULE_0__["RIGHT"]) {
        lastKeyPressed = key;
    }
}
/**
 * @description Validates the last pressed direction.
 * The snake cannot go backwards, for example if moving up it cannot
 * move down without first going to one side.
 */
function validateDirectionChange() {
    if (lastKeyPressed === _snake__WEBPACK_IMPORTED_MODULE_0__["DOWN"]) {
        if (snake.direction !== _snake__WEBPACK_IMPORTED_MODULE_0__["UP"]) {
            snake.direction = _snake__WEBPACK_IMPORTED_MODULE_0__["DOWN"];
        }
    }
    else if (lastKeyPressed === _snake__WEBPACK_IMPORTED_MODULE_0__["UP"]) {
        if (snake.direction !== _snake__WEBPACK_IMPORTED_MODULE_0__["DOWN"]) {
            snake.direction = _snake__WEBPACK_IMPORTED_MODULE_0__["UP"];
        }
    }
    else if (lastKeyPressed === _snake__WEBPACK_IMPORTED_MODULE_0__["RIGHT"]) {
        if (snake.direction !== _snake__WEBPACK_IMPORTED_MODULE_0__["LEFT"]) {
            snake.direction = _snake__WEBPACK_IMPORTED_MODULE_0__["RIGHT"];
        }
    }
    else if (lastKeyPressed === _snake__WEBPACK_IMPORTED_MODULE_0__["LEFT"]) {
        if (snake.direction !== _snake__WEBPACK_IMPORTED_MODULE_0__["RIGHT"]) {
            snake.direction = _snake__WEBPACK_IMPORTED_MODULE_0__["LEFT"];
        }
    }
}
/**
 * @description Randomizes the location of the food and returns an object
 */
function randomizeFood(width, height) {
    let food = { x: 0, y: 0 };
    let newFoodX = Math.floor(Math.random() * width);
    let newFoodY = Math.floor(Math.random() * height);
    food.x = newFoodX - (newFoodX % 10) + 5;
    food.y = newFoodY - (newFoodY % 10) + 5;
    return food;
}
/**
 * @description Checks if the head of the snake is in the
 * same location as a part of the body.
 * @returns true if collision, else false
 */
function checkForCollision(ctx) {
    const headX = snake.body[0].x;
    const headY = snake.body[0].y;
    for (let index = 1; index < snake.body.length; index++) {
        let snakePart = snake.body[index];
        if (index > 2 && snakePart.x === headX && snakePart.y === headY) {
            // collision detected
            snakePart.color = 'red';
            snakePart.draw(ctx);
            return true;
        }
    }
    return false;
}
/**
 * @description Checks to see if the food is within the head block
 * @returns true if food was eaten, else false
 */
function isPartOnFood(part) {
    if ((food.x >= part.x && food.x <= part.x + _snake_part__WEBPACK_IMPORTED_MODULE_1__["SnakePart"].partWidth)
        && (food.y >= part.y && food.y <= part.y + _snake_part__WEBPACK_IMPORTED_MODULE_1__["SnakePart"].partWidth)) {
        return true;
    }
    return false;
}
/**
 * @description Draws the food onto the canvas
 */
function drawFood(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(food.x, food.y, 4, 0, 2 * Math.PI, false);
    ctx.fill();
}
/**
 * @description Checks each body part to see if it is on food.
 * @returns true if a part is on food, false if not
 */
function checkPartsForLocation() {
    for (let part of snake.body) {
        if (isPartOnFood(part)) {
            return true;
        }
    }
    return false;
}
function updateGameSpeed(animator) {
    // Update gamespeed
    // animator.setFPS(animator.getFPS() + gameSpeedDelta);
    if (animator.getFPS() < gameSpeedLimit && score % 5 === 0) {
        animator.setFPS(animator.getFPS() + gameSpeedDelta);
    }
}
/**
 * @description Main game loop and animation
 */
function gameLoop(ctx, animator, ...rest) {
    // check to see if the last key pressed was a valid key press
    // ie. Not backwards
    if (gameRunning) {
        validateDirectionChange();
        snake.update();
        // check if collision, collision takes place if x and y of 
        // head === any other parts x and y  
        let collisionOccured = checkForCollision(ctx);
        gameRunning = !collisionOccured;
        const head = snake.body[0];
        if (isPartOnFood(head)) {
            score++;
            let scoreStr = String(score * 100);
            SCORE_TAG.innerHTML = scoreStr;
            food = randomizeFood(animator.canvasWidth, animator.canvasHeight);
            while (checkPartsForLocation()) {
                food = randomizeFood(animator.canvasWidth, animator.canvasHeight);
            }
            snake.addNewPart();
            updateGameSpeed(animator);
        }
    }
    else {
        animator.stopAnimating();
    }
    drawFood(ctx);
    snake.draw(ctx);
}


/***/ }),

/***/ "./src/snake-part.ts":
/*!***************************!*\
  !*** ./src/snake-part.ts ***!
  \***************************/
/*! exports provided: SnakePart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakePart", function() { return SnakePart; });
class SnakePart {
    constructor(x, y, color = '#000') {
        this.moves = [];
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, SnakePart.partWidth, SnakePart.partWidth);
    }
}
// also height
SnakePart.partWidth = 10;


/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: UP, LEFT, DOWN, RIGHT, KEYS, Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/* harmony import */ var _snake_part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-part */ "./src/snake-part.ts");

// directions
const UP = 38;
const LEFT = 37;
const DOWN = 40;
const RIGHT = 39;
const KEYS = [UP, LEFT, DOWN, RIGHT];
class Snake {
    constructor(dimensions, color = '#000', direction = RIGHT) {
        this.body = [];
        this.dimensions = dimensions;
        this.color = color;
        this.direction = direction;
        const newPart = new _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"](200, 100, this.color);
        this.body.push(newPart);
    }
    draw(ctx) {
        for (let snakePart of this.body) {
            snakePart.draw(ctx);
        }
    }
    update() {
        for (let index = 0; index < this.body.length; index++) {
            let snakePart = this.body[index];
            if (index === 0) {
                // update first block(The head), changes direction
                this.updateHead(snakePart);
            }
            else {
                // updating the rest
                this.updateTail(snakePart, index);
            }
        }
    }
    updateHead(snakePart) {
        const newX = snakePart.x;
        const newY = snakePart.y;
        snakePart.lastX = newX;
        snakePart.lastY = newY;
        if (this.direction === RIGHT) {
            snakePart.x = newX + _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.x >= this.dimensions.x) {
                snakePart.x = 0;
            }
        }
        else if (this.direction === LEFT) {
            snakePart.x = newX - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.x < 0) {
                snakePart.x = this.dimensions.x - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            }
        }
        else if (this.direction === DOWN) {
            snakePart.y = newY + _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.y >= this.dimensions.y) {
                snakePart.y = 0;
            }
        }
        else {
            snakePart.y = newY - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.y < 0) {
                snakePart.y = this.dimensions.y - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            }
        }
    }
    updateTail(snakePart, index) {
        // save last location
        snakePart.lastX = snakePart.x;
        snakePart.lastY = snakePart.y;
        // update the the part infront of this ones last location
        snakePart.x = this.body[index - 1].lastX;
        snakePart.y = this.body[index - 1].lastY;
    }
    addNewPart() {
        // if there is only 1 block add the new part onto the back
        // using the current direction of snake as forward direction
        let newPart = null;
        const lastPart = this.body[this.body.length - 1];
        if (this.body.length <= 2) {
            newPart = this.createAdjacentHeadPart(lastPart);
        }
        else {
            const secondToLast = this.body[this.body.length - 2];
            newPart = this.createNewTailPart(lastPart, secondToLast);
        }
        newPart.color = 'orange';
        this.body.push(newPart);
    }
    createAdjacentHeadPart(lastPart) {
        let newX = lastPart.x;
        let newY = lastPart.y;
        if (this.direction === RIGHT) {
            newX -= _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        else if (this.direction === LEFT) {
            newX += _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        else if (this.direction === DOWN) {
            newY -= _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        else {
            newY += _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        return new _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"](newX, newY, this.color);
    }
    createNewTailPart(lastPart, secondToLast) {
        let newX = lastPart.x;
        let newY = lastPart.y;
        const diffX = secondToLast.x - lastPart.x;
        // second to last x is greater than last x we are moving to the right
        if (diffX !== 0) {
            // if not equal to 0 than we need to add it horizontally
            newX += (Math.sign(diffX) * _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth);
        }
        const diffY = secondToLast.y - lastPart.y;
        if (diffY !== 0) {
            newY += (Math.sign(diffY) * _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth);
        }
        return new _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"](newX, newY, this.color);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/ZDhjMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtlLXBhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBR0E7QUFDQSx1Q0FBd0MsZ0NBQWdDLEtBQUssOEJBQThCLHdCQUF3QixLQUFLLGdCQUFnQiw0QkFBNEIsS0FBSyw2QkFBNkIsb0JBQW9CLDJCQUEyQixzQkFBc0IsK0JBQStC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QUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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S0FBSyxDQUFDLEdBQUcscURBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxxREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxxREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDSiIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWUtd2luZG93IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1sYWJlbCwgLnNjb3JlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlyZWN0aW9uLWNvbnRyb2xzIHtcXHJcXG4gICAgd2lkdGg6MjUwcHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnVwLWRvd24tYnRuLCAubGVmdC1yaWdodC1idG4ge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxcclxcbn1cXHJcXG5cXHJcXG4udXAtZG93bi1idG4ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtcmlnaHQtYnRuIHtcXHJcXG4gICAgcGFkZGluZzo1cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItZm9vdGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGJvdHRvbTogNXB4OyBcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6MjBweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCBjbGFzcyBBbmltYXRvciB7XHJcblxyXG5cdGNhbnZhc0VsOiBhbnk7XHJcblx0Y3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblx0Y2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcblx0Y2FudmFzV2lkdGg6IG51bWJlcjtcclxuXHRsYXN0RHJhdzogYW55O1xyXG5cdHN0b3BwZWQ6IGJvb2xlYW47XHJcblx0Y2FsbGJhY2s6IGFueTtcclxuXHRmcHM6IG51bWJlcjtcclxuXHRhcmdzOiBhbnlbXTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhbiBhbmltYXRvciBjbGFzcy5cclxuICAgICAqIEBwYXJhbSBjYW52YXNJZCBUaGUgSFRNTCBJRCBmb3IgdGhlIGNhbnZhcyBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrRnVuYyBUaGUgZnVuY3Rpb24gdG8gcGVyZm9ybSBvbiBldmVyeSBkcmF3LiBBY2NlcHRzIDJkQ2FudmFzQ29udGV4dCBhcyBhIHBhcmFtLlxyXG4gICAgICogQHBhcmFtIEZQUyBUaGUgRlBTIHJhdGUuIFBhc3MgaW4gYW4gaW50IC0gMzAgZm9yIDMwIEZQUy5cclxuICAgICAqL1xyXG5cdGNvbnN0cnVjdG9yKGNhbnZhc0lkOiBzdHJpbmcsIGZwczogbnVtYmVyLCBjYWxsYmFjazogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xyXG5cdFx0dGhpcy5jYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcclxuXHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0dGhpcy5jYW52YXNIZWlnaHQgPSB0aGlzLmNhbnZhc0VsLmhlaWdodDtcclxuXHRcdHRoaXMuY2FudmFzV2lkdGggPSB0aGlzLmNhbnZhc0VsLndpZHRoO1xyXG5cdFx0dGhpcy5sYXN0RHJhdyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zdG9wcGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblx0XHR0aGlzLmZwcyA9IHRoaXMuc2V0RlBTKGZwcyk7XHJcblx0XHR0aGlzLmFyZ3MgPSBhcmdzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gRHJhd3MuXHJcbiAgICAgKiBAcGFyYW0gcnVubmluZ1RpbWUgcHJlY2lzZSB0aW1lXHJcbiAgICAgKi9cclxuXHRhbmltYXRlID0gKHJ1bm5pbmdUaW1lOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghdGhpcy5zdG9wcGVkKSB7XHJcblx0XHRcdGlmICghdGhpcy5sYXN0RHJhdykge1xyXG5cdFx0XHRcdHRoaXMubGFzdERyYXcgPSBydW5uaW5nVGltZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgZGlmZiA9IHJ1bm5pbmdUaW1lIC0gdGhpcy5sYXN0RHJhdztcclxuXHJcblx0XHRcdGlmIChkaWZmIC8gdGhpcy5mcHMgPiAxKSB7XHJcblx0XHRcdFx0Ly8gQ2xlYXIgYmVmb3JlIHJlZHJhd1xyXG5cdFx0XHRcdHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0VsLndpZHRoLCB0aGlzLmNhbnZhc0VsLmhlaWdodCk7XHJcblxyXG5cdFx0XHRcdC8vIFJ1biB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gZHJhd1xyXG5cdFx0XHRcdHRoaXMuY2FsbGJhY2sodGhpcy5jdHgsIHRoaXMsIC4uLnRoaXMuYXJncyk7XHJcblx0XHRcdFx0dGhpcy5sYXN0RHJhdyA9IHJ1bm5pbmdUaW1lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcclxuXHR9XHJcblxyXG5cdHN0b3BBbmltYXRpbmcgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnN0b3BwZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cmVzdW1lQW5pbWF0aW5nID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zdG9wcGVkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc1N0b3BwZWQgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9wcGVkO1xyXG5cdH1cclxuXHJcblx0Z2V0RlBTID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIDEwMDAgLyB0aGlzLmZwcztcclxuXHR9XHJcblxyXG5cdHNldEZQUyA9IChmcHM6IG51bWJlcikgPT4ge1xyXG5cdFx0dGhpcy5mcHMgPSAxMDAwIC8gZnBzO1xyXG5cdFx0cmV0dXJuIHRoaXMuZnBzO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuXHJcblx0eDogbnVtYmVyO1xyXG5cdHk6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIFBvaW50IHtcclxuXHJcblx0cmFkaXVzOiBudW1iZXI7XHJcblx0Y29sb3I6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcblx0XHRzdXBlcih4LCB5KTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0ZHJhdyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcblx0XHRjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcclxuXHRcdGN0eC5maWxsKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZSB7XHJcblxyXG5cdHBhdGg6IFBvaW50W107XHJcblx0d2lkdGg6IG51bWJlcjtcclxuXHRjb2xvcjogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXRoOiBQb2ludFtdLCB3aWR0aDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0ZHJhdyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgKyAxIDwgdGhpcy5wYXRoLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwb2ludDEgPSB0aGlzLnBhdGhbaV07XHJcblx0XHRcdGxldCBwb2ludDIgPSB0aGlzLnBhdGhbaSArIDFdO1xyXG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdGN0eC5tb3ZlVG8ocG9pbnQxLngsIHBvaW50MS55KTtcclxuXHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMud2lkdGg7XHJcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcblx0XHRcdGN0eC5saW5lVG8ocG9pbnQyLngsIHBvaW50Mi55KTtcclxuXHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwZW5kUG9pbnQgPSAocG9pbnQ6IFBvaW50KSA9PiB7XHJcblx0XHR0aGlzLnBhdGgucHVzaChwb2ludCk7XHJcblx0fVxyXG59XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IFNuYWtlLCBVUCwgRE9XTiwgUklHSFQsIExFRlQsIEtFWVMgfSBmcm9tIFwiLi9zbmFrZVwiO1xuaW1wb3J0IHsgU25ha2VQYXJ0IH0gZnJvbSBcIi4vc25ha2UtcGFydFwiO1xuaW1wb3J0IHsgQW5pbWF0b3IgfSBmcm9tIFwiLi9hbmltYXRvclwiO1xuXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgU0NPUkVfVEFHID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4vLyBjb25zdCBDRU5URVIgPSBDQU5WQVNfRUwuaGVpZ2h0O1xubGV0IGdhbWVTcGVlZCA9IDM7XG5jb25zdCBnYW1lU3BlZWREZWx0YSA9IDE7XG5jb25zdCBnYW1lU3BlZWRMaW1pdDogbnVtYmVyID0gMTA7XG5sZXQgZ2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG5jb25zdCBGUFMgPSBnYW1lU3BlZWQ7XG5cbmNvbnN0IENBTlZBU19JRCA9ICdnYW1lLXdpbmRvdyc7XG5cbi8vIHJhbmRvbWl6ZSBzdGFydGluZyBkaXJlY3Rpb25cbmxldCBsYXN0S2V5UHJlc3NlZCA9IGdldFJhbmRvbURpcmVjdGlvbigpO1xuXG5sZXQgbGFzdERyYXc6IG51bWJlciA9IG51bGw7XG5sZXQgc25ha2U6IFNuYWtlID0gbnVsbDtcbmxldCBmb29kOiBGb29kID0gbnVsbDtcbmxldCBzY29yZSA9IDA7XG5cblxuLyoqXG4gKiBGb29kIGlzIGFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgdGhlIHggYW5kIHkgbG9jYXRpb24gb2YgdGhlXG4gKiBmb29kIG9iamVjdFxuICovXG5pbnRlcmZhY2UgRm9vZCB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlclxufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gICAgc2V0dXBDb250cm9scygpO1xuICAgIGxldCBhbmltYXRvciA9IG5ldyBBbmltYXRvcihDQU5WQVNfSUQsIEZQUywgZ2FtZUxvb3ApO1xuICAgIGZvb2QgPSByYW5kb21pemVGb29kKGFuaW1hdG9yLmNhbnZhc1dpZHRoLCBhbmltYXRvci5jYW52YXNIZWlnaHQpO1xuICAgIHNuYWtlID0gbmV3IFNuYWtlKHsgeDogYW5pbWF0b3IuY2FudmFzV2lkdGgsIHk6IGFuaW1hdG9yLmNhbnZhc0hlaWdodCB9LCAnIzAwMCcsIGxhc3RLZXlQcmVzc2VkKTtcbiAgICBhbmltYXRvci5hbmltYXRlKDApO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHZXRzIGEgcmFuZG9tIGtleVxuICovXG5mdW5jdGlvbiBnZXRSYW5kb21EaXJlY3Rpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gS0VZU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBLRVlTLmxlbmd0aCldO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyBwaG9uZSBpZiBhdmFpbGFibGVcbiAqL1xuZnVuY3Rpb24gdmlicmF0ZSgpIHtcbiAgICBpZiAobmF2aWdhdG9yLnZpYnJhdGUpIHtcbiAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMzApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiBtb2JpbGUgYnJvd3NlciBpcyBpbiB1c2VcbiAqIEByZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAqL1xuZnVuY3Rpb24gbW9iaWxlQ2hlY2soKSB7XG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgKGZ1bmN0aW9uIChhKSB7IGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlOyB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IpO1xuICAgIC8vIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBjaGVjaztcbn1cblxuZnVuY3Rpb24gc2V0dXBDb250cm9scygpIHtcbiAgICAvLyBkZXRlcm1pbmUgaWYgd2UgYXJlIGJlaW5nIHJ1biBvbiBtb2JpbGVcbiAgICBpZiAobW9iaWxlQ2hlY2soKSkge1xuICAgICAgICAvLyBzZXR1cCBidXR0b24gcHJlc3MgbGlzdGVuZXJzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cCcpLm9uY2xpY2sgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZpYnJhdGUoKTtcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihVUCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKS5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2aWJyYXRlKCk7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oTEVGVCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd24nKS5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2aWJyYXRlKCk7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRE9XTik7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jykub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdmlicmF0ZSgpO1xuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKFJJR0hUKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRpc3BsYXkgYnV0dG9ucyBmb3IgZGlyZWN0aW9uIGNvbnRyb2xzXG4gICAgICAgIGxldCBkaXJlY3Rpb25Db250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24tY29udHJvbHMnKTtcbiAgICAgICAgZGlyZWN0aW9uQ29udHJvbHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNldCB1cCBrZXlib2FyZCBsaXN0ZW5lcnNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsYXN0IHByZXNzZWQga2V5XG4gKiBAcGFyYW0ga2V5IEtleWNvZGUgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIHNldERpcmVjdGlvbihrZXk6IG51bWJlcikge1xuICAgIGlmIChrZXkgPT09IFVQIHx8XG4gICAgICAgIGtleSA9PT0gRE9XTiB8fFxuICAgICAgICBrZXkgPT09IExFRlQgfHxcbiAgICAgICAga2V5ID09PSBSSUdIVCkge1xuICAgICAgICBsYXN0S2V5UHJlc3NlZCA9IGtleTtcbiAgICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgbGFzdCBwcmVzc2VkIGRpcmVjdGlvbi4gXG4gKiBUaGUgc25ha2UgY2Fubm90IGdvIGJhY2t3YXJkcywgZm9yIGV4YW1wbGUgaWYgbW92aW5nIHVwIGl0IGNhbm5vdFxuICogbW92ZSBkb3duIHdpdGhvdXQgZmlyc3QgZ29pbmcgdG8gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRGlyZWN0aW9uQ2hhbmdlKCkge1xuICAgIGlmIChsYXN0S2V5UHJlc3NlZCA9PT0gRE9XTikge1xuICAgICAgICBpZiAoc25ha2UuZGlyZWN0aW9uICE9PSBVUCkge1xuICAgICAgICAgICAgc25ha2UuZGlyZWN0aW9uID0gRE9XTjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFzdEtleVByZXNzZWQgPT09IFVQKSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09IERPV04pIHtcbiAgICAgICAgICAgIHNuYWtlLmRpcmVjdGlvbiA9IFVQO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChsYXN0S2V5UHJlc3NlZCA9PT0gUklHSFQpIHtcbiAgICAgICAgaWYgKHNuYWtlLmRpcmVjdGlvbiAhPT0gTEVGVCkge1xuICAgICAgICAgICAgc25ha2UuZGlyZWN0aW9uID0gUklHSFQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxhc3RLZXlQcmVzc2VkID09PSBMRUZUKSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09IFJJR0hUKSB7XG4gICAgICAgICAgICBzbmFrZS5kaXJlY3Rpb24gPSBMRUZUO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBSYW5kb21pemVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgZm9vZCBhbmQgcmV0dXJucyBhbiBvYmplY3RcbiAqL1xuZnVuY3Rpb24gcmFuZG9taXplRm9vZCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IEZvb2Qge1xuICAgIGxldCBmb29kOiBGb29kID0geyB4OiAwLCB5OiAwIH07XG4gICAgbGV0IG5ld0Zvb2RYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2lkdGgpO1xuICAgIGxldCBuZXdGb29kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhlaWdodCk7XG4gICAgZm9vZC54ID0gbmV3Rm9vZFggLSAobmV3Rm9vZFggJSAxMCkgKyA1O1xuICAgIGZvb2QueSA9IG5ld0Zvb2RZIC0gKG5ld0Zvb2RZICUgMTApICsgNTtcbiAgICByZXR1cm4gZm9vZDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBoZWFkIG9mIHRoZSBzbmFrZSBpcyBpbiB0aGVcbiAqIHNhbWUgbG9jYXRpb24gYXMgYSBwYXJ0IG9mIHRoZSBib2R5LlxuICogQHJldHVybnMgdHJ1ZSBpZiBjb2xsaXNpb24sIGVsc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2hlY2tGb3JDb2xsaXNpb24oY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBib29sZWFuIHtcbiAgICBjb25zdCBoZWFkWCA9IHNuYWtlLmJvZHlbMF0ueDtcbiAgICBjb25zdCBoZWFkWSA9IHNuYWtlLmJvZHlbMF0ueTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgc25ha2UuYm9keS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNuYWtlUGFydCA9IHNuYWtlLmJvZHlbaW5kZXhdO1xuICAgICAgICBpZiAoaW5kZXggPiAyICYmIHNuYWtlUGFydC54ID09PSBoZWFkWCAmJiBzbmFrZVBhcnQueSA9PT0gaGVhZFkpIHtcbiAgICAgICAgICAgIC8vIGNvbGxpc2lvbiBkZXRlY3RlZFxuICAgICAgICAgICAgc25ha2VQYXJ0LmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICBzbmFrZVBhcnQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgdG8gc2VlIGlmIHRoZSBmb29kIGlzIHdpdGhpbiB0aGUgaGVhZCBibG9ja1xuICogQHJldHVybnMgdHJ1ZSBpZiBmb29kIHdhcyBlYXRlbiwgZWxzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BhcnRPbkZvb2QocGFydDogU25ha2VQYXJ0KTogYm9vbGVhbiB7XG4gICAgaWYgKChmb29kLnggPj0gcGFydC54ICYmIGZvb2QueCA8PSBwYXJ0LnggKyBTbmFrZVBhcnQucGFydFdpZHRoKVxuICAgICAgICAmJiAoZm9vZC55ID49IHBhcnQueSAmJiBmb29kLnkgPD0gcGFydC55ICsgU25ha2VQYXJ0LnBhcnRXaWR0aCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRHJhd3MgdGhlIGZvb2Qgb250byB0aGUgY2FudmFzXG4gKi9cbmZ1bmN0aW9uIGRyYXdGb29kKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGN0eC5hcmMoZm9vZC54LCBmb29kLnksIDQsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgY3R4LmZpbGwoKTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGVhY2ggYm9keSBwYXJ0IHRvIHNlZSBpZiBpdCBpcyBvbiBmb29kLlxuICogQHJldHVybnMgdHJ1ZSBpZiBhIHBhcnQgaXMgb24gZm9vZCwgZmFsc2UgaWYgbm90XG4gKi9cbmZ1bmN0aW9uIGNoZWNrUGFydHNGb3JMb2NhdGlvbigpIHtcbiAgICBmb3IgKGxldCBwYXJ0IG9mIHNuYWtlLmJvZHkpIHtcbiAgICAgICAgaWYgKGlzUGFydE9uRm9vZChwYXJ0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVHYW1lU3BlZWQoYW5pbWF0b3I6IEFuaW1hdG9yKSB7XG4gICAgLy8gVXBkYXRlIGdhbWVzcGVlZFxuICAgIC8vIGFuaW1hdG9yLnNldEZQUyhhbmltYXRvci5nZXRGUFMoKSArIGdhbWVTcGVlZERlbHRhKTtcbiAgICBpZiAoYW5pbWF0b3IuZ2V0RlBTKCkgPCBnYW1lU3BlZWRMaW1pdCAmJiBzY29yZSAlIDUgPT09IDApIHtcbiAgICAgICAgYW5pbWF0b3Iuc2V0RlBTKGFuaW1hdG9yLmdldEZQUygpICsgZ2FtZVNwZWVkRGVsdGEpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTWFpbiBnYW1lIGxvb3AgYW5kIGFuaW1hdGlvblxuICovXG5mdW5jdGlvbiBnYW1lTG9vcChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgYW5pbWF0b3I6IEFuaW1hdG9yLCAuLi5yZXN0OiBhbnlbXSkge1xuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgbGFzdCBrZXkgcHJlc3NlZCB3YXMgYSB2YWxpZCBrZXkgcHJlc3NcbiAgICAvLyBpZS4gTm90IGJhY2t3YXJkc1xuICAgIGlmIChnYW1lUnVubmluZykge1xuICAgICAgICB2YWxpZGF0ZURpcmVjdGlvbkNoYW5nZSgpO1xuICAgICAgICBzbmFrZS51cGRhdGUoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBjb2xsaXNpb24sIGNvbGxpc2lvbiB0YWtlcyBwbGFjZSBpZiB4IGFuZCB5IG9mIFxuICAgICAgICAvLyBoZWFkID09PSBhbnkgb3RoZXIgcGFydHMgeCBhbmQgeSAgXG4gICAgICAgIGxldCBjb2xsaXNpb25PY2N1cmVkID0gY2hlY2tGb3JDb2xsaXNpb24oY3R4KTtcbiAgICAgICAgZ2FtZVJ1bm5pbmcgPSAhY29sbGlzaW9uT2NjdXJlZDtcblxuICAgICAgICBjb25zdCBoZWFkID0gc25ha2UuYm9keVswXTtcbiAgICAgICAgaWYgKGlzUGFydE9uRm9vZChoZWFkKSkge1xuICAgICAgICAgICAgc2NvcmUrKztcbiAgICAgICAgICAgIGxldCBzY29yZVN0ciA9IFN0cmluZyhzY29yZSAqIDEwMCk7XG4gICAgICAgICAgICBTQ09SRV9UQUcuaW5uZXJIVE1MID0gc2NvcmVTdHI7XG4gICAgICAgICAgICBmb29kID0gcmFuZG9taXplRm9vZChhbmltYXRvci5jYW52YXNXaWR0aCwgYW5pbWF0b3IuY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgICAgIHdoaWxlIChjaGVja1BhcnRzRm9yTG9jYXRpb24oKSkge1xuICAgICAgICAgICAgICAgIGZvb2QgPSByYW5kb21pemVGb29kKGFuaW1hdG9yLmNhbnZhc1dpZHRoLCBhbmltYXRvci5jYW52YXNIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc25ha2UuYWRkTmV3UGFydCgpO1xuICAgICAgICAgICAgdXBkYXRlR2FtZVNwZWVkKGFuaW1hdG9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdG9yLnN0b3BBbmltYXRpbmcoKTtcbiAgICB9XG4gICAgZHJhd0Zvb2QoY3R4KTtcbiAgICBzbmFrZS5kcmF3KGN0eCk7XG59XG4iLCJleHBvcnQgY2xhc3MgU25ha2VQYXJ0IHtcblxuICAgIC8vIGFsc28gaGVpZ2h0XG4gICAgc3RhdGljIHJlYWRvbmx5IHBhcnRXaWR0aDogbnVtYmVyID0gMTA7XG5cbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGxhc3RYOiBudW1iZXI7XG4gICAgbGFzdFk6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG1vdmVzOiBvYmplY3RbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSAnIzAwMCcpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgU25ha2VQYXJ0LnBhcnRXaWR0aCwgU25ha2VQYXJ0LnBhcnRXaWR0aCk7XG4gICAgfVxufSIsImltcG9ydCB7IFNuYWtlUGFydCB9IGZyb20gJy4vc25ha2UtcGFydCc7XG5cbi8vIGRpcmVjdGlvbnNcbmV4cG9ydCBjb25zdCBVUCA9IDM4O1xuZXhwb3J0IGNvbnN0IExFRlQgPSAzNztcbmV4cG9ydCBjb25zdCBET1dOID0gNDA7XG5leHBvcnQgY29uc3QgUklHSFQgPSAzOTtcbmV4cG9ydCBjb25zdCBLRVlTID0gW1VQLCBMRUZULCBET1dOLCBSSUdIVF07XG5cbmV4cG9ydCBjbGFzcyBTbmFrZSB7XG4gICAgYm9keTogU25ha2VQYXJ0W10gPSBbXTtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogbnVtYmVyO1xuICAgIGRpbWVuc2lvbnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnM6IGFueSwgY29sb3I6IHN0cmluZyA9ICcjMDAwJywgZGlyZWN0aW9uOiBudW1iZXIgPSBSSUdIVCkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBuZXdQYXJ0ID0gbmV3IFNuYWtlUGFydCgyMDAsIDEwMCwgdGhpcy5jb2xvcik7XG4gICAgICAgIHRoaXMuYm9keS5wdXNoKG5ld1BhcnQpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgZm9yIChsZXQgc25ha2VQYXJ0IG9mIHRoaXMuYm9keSkge1xuICAgICAgICAgICAgc25ha2VQYXJ0LmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYm9keS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBzbmFrZVBhcnQgPSB0aGlzLmJvZHlbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpcnN0IGJsb2NrKFRoZSBoZWFkKSwgY2hhbmdlcyBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWQoc25ha2VQYXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHJlc3RcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhaWwoc25ha2VQYXJ0LCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhlYWQoc25ha2VQYXJ0OiBTbmFrZVBhcnQpIHtcbiAgICAgICAgY29uc3QgbmV3WCA9IHNuYWtlUGFydC54O1xuICAgICAgICBjb25zdCBuZXdZID0gc25ha2VQYXJ0Lnk7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WCA9IG5ld1g7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WSA9IG5ld1k7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gUklHSFQpIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC54ID0gbmV3WCArIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICBpZiAoc25ha2VQYXJ0LnggPj0gdGhpcy5kaW1lbnNpb25zLngpIHtcbiAgICAgICAgICAgICAgICBzbmFrZVBhcnQueCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC54ID0gbmV3WCAtIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICBpZiAoc25ha2VQYXJ0LnggPCAwKSB7XG4gICAgICAgICAgICAgICAgc25ha2VQYXJ0LnggPSB0aGlzLmRpbWVuc2lvbnMueCAtIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IERPV04pIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC55ID0gbmV3WSArIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICBpZiAoc25ha2VQYXJ0LnkgPj0gdGhpcy5kaW1lbnNpb25zLnkpIHtcbiAgICAgICAgICAgICAgICBzbmFrZVBhcnQueSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbmFrZVBhcnQueSA9IG5ld1kgLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgaWYgKHNuYWtlUGFydC55IDwgMCkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC55ID0gdGhpcy5kaW1lbnNpb25zLnkgLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUYWlsKHNuYWtlUGFydDogU25ha2VQYXJ0LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIC8vIHNhdmUgbGFzdCBsb2NhdGlvblxuICAgICAgICBzbmFrZVBhcnQubGFzdFggPSBzbmFrZVBhcnQueDtcbiAgICAgICAgc25ha2VQYXJ0Lmxhc3RZID0gc25ha2VQYXJ0Lnk7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdGhlIHBhcnQgaW5mcm9udCBvZiB0aGlzIG9uZXMgbGFzdCBsb2NhdGlvblxuICAgICAgICBzbmFrZVBhcnQueCA9IHRoaXMuYm9keVtpbmRleCAtIDFdLmxhc3RYO1xuICAgICAgICBzbmFrZVBhcnQueSA9IHRoaXMuYm9keVtpbmRleCAtIDFdLmxhc3RZO1xuICAgIH1cblxuICAgIGFkZE5ld1BhcnQoKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgMSBibG9jayBhZGQgdGhlIG5ldyBwYXJ0IG9udG8gdGhlIGJhY2tcbiAgICAgICAgLy8gdXNpbmcgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIG9mIHNuYWtlIGFzIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgIGxldCBuZXdQYXJ0OiBTbmFrZVBhcnQgPSBudWxsO1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmJvZHkubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgIG5ld1BhcnQgPSB0aGlzLmNyZWF0ZUFkamFjZW50SGVhZFBhcnQobGFzdFBhcnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVG9MYXN0ID0gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIG5ld1BhcnQgPSB0aGlzLmNyZWF0ZU5ld1RhaWxQYXJ0KGxhc3RQYXJ0LCBzZWNvbmRUb0xhc3QpO1xuICAgICAgICB9XG4gICAgICAgIG5ld1BhcnQuY29sb3IgPSAnb3JhbmdlJztcbiAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3UGFydCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBZGphY2VudEhlYWRQYXJ0KGxhc3RQYXJ0OiBTbmFrZVBhcnQpOiBTbmFrZVBhcnQge1xuICAgICAgICBsZXQgbmV3WCA9IGxhc3RQYXJ0Lng7XG4gICAgICAgIGxldCBuZXdZID0gbGFzdFBhcnQueTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBSSUdIVCkge1xuICAgICAgICAgICAgbmV3WCAtPSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XG4gICAgICAgICAgICBuZXdYICs9IFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IERPV04pIHtcbiAgICAgICAgICAgIG5ld1kgLT0gU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1kgKz0gU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNuYWtlUGFydChuZXdYLCBuZXdZLCB0aGlzLmNvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU5ld1RhaWxQYXJ0KGxhc3RQYXJ0OiBTbmFrZVBhcnQsIHNlY29uZFRvTGFzdDogU25ha2VQYXJ0KTogU25ha2VQYXJ0IHtcbiAgICAgICAgbGV0IG5ld1ggPSBsYXN0UGFydC54O1xuICAgICAgICBsZXQgbmV3WSA9IGxhc3RQYXJ0Lnk7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gc2Vjb25kVG9MYXN0LnggLSBsYXN0UGFydC54O1xuICAgICAgICAvLyBzZWNvbmQgdG8gbGFzdCB4IGlzIGdyZWF0ZXIgdGhhbiBsYXN0IHggd2UgYXJlIG1vdmluZyB0byB0aGUgcmlnaHRcbiAgICAgICAgaWYgKGRpZmZYICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBub3QgZXF1YWwgdG8gMCB0aGFuIHdlIG5lZWQgdG8gYWRkIGl0IGhvcml6b250YWxseVxuICAgICAgICAgICAgbmV3WCArPSAoTWF0aC5zaWduKGRpZmZYKSAqIFNuYWtlUGFydC5wYXJ0V2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpZmZZID0gc2Vjb25kVG9MYXN0LnkgLSBsYXN0UGFydC55O1xuICAgICAgICBpZiAoZGlmZlkgIT09IDApIHtcbiAgICAgICAgICAgIG5ld1kgKz0gKE1hdGguc2lnbihkaWZmWSkgKiBTbmFrZVBhcnQucGFydFdpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgU25ha2VQYXJ0KG5ld1gsIG5ld1ksIHRoaXMuY29sb3IpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9