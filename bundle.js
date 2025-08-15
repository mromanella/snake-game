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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 1 */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
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

var	fixUrls = __webpack_require__(4);

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "* {\n    font-family: 'Luckiest Guy', sans-serif;\n}\n\n.top-container {\n    margin: 0 10%;\n    display: flex;\n    flex-direction: column;\n    background-color: #fff;\n    padding: 10px;\n    border-radius: 10px;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10vh;\n}\n\n.notification {\n    background-color: tomato;\n    font-size: 1.5em;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n    font-weight: bold;\n    position: relative;\n    left: -15px;\n    /* z-index: 1; */\n}\n\nheader .top-score .top-score-value {\n    padding: 0;\n    padding-left: 10px;\n}\n\nmain>div.content {\n    overflow: hidden;\n    position: relative;\n    height: 80vh;\n    display: flex;\n    justify-content: center;\n    ;\n}\n\n.top-0 {\n    position: absolute;\n    top: 0;\n}\n\n.game-window {\n    border: 1px black solid;\n}\n\n.game-window.dashed {\n    border: 1px black dashed;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.options {\n    /* height: 50vh; */\n    display: flex;\n    flex-direction: column;\n    font-size: 1.25em;\n    margin: 10px;\n}\n\n.options.hidden {\n    display: none;\n}\n\nsection {\n    width: 100%;\n}\n\nsection>div.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nsection h2 {\n    text-decoration: underline;\n}\n\n.options div {\n    padding: 5px 0;\n}\n\n.option {\n    margin: 10px;\n}\n\n.info {\n    margin: 10px;\n}\n\n.info ul li {\n    padding: 10px;\n    font-size: 1.15em;\n    font-weight: 700;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.button-container {\n    /* height: 50vh; */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.button {\n    align-self: center;\n    /* height: 50px; */\n    width: max-content;\n    color: black;\n    font-size: 1.5em;\n    /* background-color: rgb(206, 85, 85); */\n    background-color: transparent;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n    padding: 10px;\n}\n\n.button>span {\n    display: flex;\n    bottom: 0;\n    height: 100%;\n    justify-content: center;\n}\n\n\n.button>span>span {\n    width: 0;\n    height: 2px;\n    transform: translateY(5px);\n    background-color: rgba(253, 159, 36, 0.712);\n}\n\n.button:hover {\n    /* color: rgb(206, 85, 85); */\n    color: rgba(253, 159, 36, 0.712);\n}\n\n.button:hover>span>span {\n    animation: border-bottom-fill-anim 250ms cubic-bezier(0.47, 0, 0.745, 0.715) forwards;\n}\n\n\n.button.singleplayer-button,\n.button.multiplayer-button,\n.button.play-button {\n    font-size: 4em;\n}\n\n.button.back-button {\n    z-index: 2;\n    padding: 5px;\n}\n\n.button.start-button {\n    font-size: 3.5em;\n}\n\n.start-button-section{\n    height: 100%;\n    width: 100%;\n}\n\n.play-area {\n    height: 100%;\n}\n\n.score-area {\n    display: flex;\n    height: 6vh;\n    width: 400px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 10px 0;\n}\n\n.score-area div {\n    font-size: 1.5em;\n}\n\n.player-score {\n    align-self: flex-start;\n    height: 100%;\n}\n\n.p-to-pause {\n    align-self: center;\n}\n\n.paused-text,\n.game-finished-text {\n    font-size: 7em;\n    color: white;\n    margin: 0.5%;\n}\n\n.game-finished-section,\n.paused-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.753);\n    /* opacity: .6; */\n    left: 0;\n    height: 100%;\n    border-radius: 5px;\n}\n\n.restart-button,\n.options-button,\n.game-finished-text {\n    color: white;\n}\n\n.restart-button:hover,\n.options-button:hover {\n    color: rgb(252, 177, 80);\n}\n\n.player1-controls {\n    font-size: 1.5em;\n    width: 45%;\n    justify-self: flex-start;\n    padding: 5px;\n}\n\n.player2-controls {\n    font-size: 1.5em;\n    width: 45%;\n    justify-self: flex-end;\n    color: blue;\n    padding: 5px;\n}\n\n.space-between {\n    display: flex;\n    justify-content: space-between;\n}", ""]);



/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".slide-out-top {\n    animation: slide-out-top-anim 750ms cubic-bezier(0.47, 0, 0.745, 0.715) forwards;\n}\n\n.slid-out-top {\n    transform: translateY(-200vh);\n}\n\n.slide-in-top {\n    animation: slide-in-top-anim 750ms cubic-bezier(0.47, 0, 0.745, 0.715) forwards;\n}\n\n.slid-in-top {\n    transform: translateY(0);\n}\n\n.fade-out {\n    animation: fade-out-top-anim 750ms cubic-bezier(0.47, 0, 0.745, 0.715) forwards;\n}\n\n.shake-infinite {\n    animation: shake-anim 400ms cubic-bezier(0.47, 0, 0.745, 0.715) infinite;\n}\n\n.hidden {\n    display: none;\n}\n\n@keyframes border-bottom-fill-anim {\n    from {\n        width: 0;\n    }\n\n    to {\n        width: 100%;\n    }\n}\n\n@keyframes slide-in-top-anim {\n    from {\n        transform: translateY(-200vh);\n    }\n\n    to {\n        transform: translateY(0);\n    }\n}\n\n@keyframes slide-out-top-anim {\n    from {\n        transform: translateY(0);\n    }\n\n    to {\n        transform: translateY(-200vh);\n    }\n}\n\n@keyframes fade-out-anim {\n    from {\n        opacity: 1;\n        display: initial;\n    }\n\n    to {\n        opacity: 0;\n        display: none;\n    }\n}\n\n@keyframes fade-in-anim {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes shake-anim {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    25% {\n        transform: rotate(1deg);\n    }\n\n    75% {\n        transform: rotate(-1deg);\n    }\n\n    100% {\n        transform: rotate(0deg);\n    }\n}", ""]);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/animator/src/collisions.ts
var collisions_namespaceObject = {};
__webpack_require__.r(collisions_namespaceObject);
__webpack_require__.d(collisions_namespaceObject, "checkCollision", function() { return checkCollision; });
__webpack_require__.d(collisions_namespaceObject, "withinHorizontal", function() { return withinHorizontal; });
__webpack_require__.d(collisions_namespaceObject, "withinVertical", function() { return withinVertical; });

// NAMESPACE OBJECT: ./src/animator/src/keyboard/keyNames.ts
var keyNames_namespaceObject = {};
__webpack_require__.r(keyNames_namespaceObject);
__webpack_require__.d(keyNames_namespaceObject, "W", function() { return W; });
__webpack_require__.d(keyNames_namespaceObject, "A", function() { return A; });
__webpack_require__.d(keyNames_namespaceObject, "S", function() { return S; });
__webpack_require__.d(keyNames_namespaceObject, "D", function() { return D; });
__webpack_require__.d(keyNames_namespaceObject, "J", function() { return J; });
__webpack_require__.d(keyNames_namespaceObject, "P", function() { return P; });
__webpack_require__.d(keyNames_namespaceObject, "ARROW_UP", function() { return ARROW_UP; });
__webpack_require__.d(keyNames_namespaceObject, "ARROW_DOWN", function() { return ARROW_DOWN; });
__webpack_require__.d(keyNames_namespaceObject, "ARROW_LEFT", function() { return ARROW_LEFT; });
__webpack_require__.d(keyNames_namespaceObject, "ARROW_RIGHT", function() { return ARROW_RIGHT; });
__webpack_require__.d(keyNames_namespaceObject, "CONTROL", function() { return CONTROL; });
__webpack_require__.d(keyNames_namespaceObject, "SHIFT", function() { return SHIFT; });
__webpack_require__.d(keyNames_namespaceObject, "SPACE", function() { return SPACE; });
__webpack_require__.d(keyNames_namespaceObject, "ENTER", function() { return ENTER; });

// NAMESPACE OBJECT: ./src/animator/src/keyboard/index.ts
var keyboard_namespaceObject = {};
__webpack_require__.r(keyboard_namespaceObject);
__webpack_require__.d(keyboard_namespaceObject, "Key", function() { return Key; });
__webpack_require__.d(keyboard_namespaceObject, "KeyboardController", function() { return KeyboardController; });
__webpack_require__.d(keyboard_namespaceObject, "keyNames", function() { return keyNames_namespaceObject; });
__webpack_require__.d(keyboard_namespaceObject, "lockKeys", function() { return lockKeys; });
__webpack_require__.d(keyboard_namespaceObject, "unlockKeys", function() { return unlockKeys; });
__webpack_require__.d(keyboard_namespaceObject, "getKeyboardController", function() { return getKeyboardController; });

// NAMESPACE OBJECT: ./src/animator/src/objects/shapes.ts
var shapes_namespaceObject = {};
__webpack_require__.r(shapes_namespaceObject);
__webpack_require__.d(shapes_namespaceObject, "Circle", function() { return shapes_Circle; });
__webpack_require__.d(shapes_namespaceObject, "Line", function() { return shapes_Line; });
__webpack_require__.d(shapes_namespaceObject, "Rectangle", function() { return shapes_Rectangle; });

// NAMESPACE OBJECT: ./src/animator/src/objects/text.ts
var text_namespaceObject = {};
__webpack_require__.r(text_namespaceObject);
__webpack_require__.d(text_namespaceObject, "TextBox", function() { return text_TextBox; });
__webpack_require__.d(text_namespaceObject, "TextBoxGroup", function() { return TextBoxGroup; });
__webpack_require__.d(text_namespaceObject, "SelectTextBoxGroup", function() { return SelectTextBoxGroup; });

// NAMESPACE OBJECT: ./src/animator/src/objects/index.ts
var objects_namespaceObject = {};
__webpack_require__.r(objects_namespaceObject);
__webpack_require__.d(objects_namespaceObject, "BoundingBox", function() { return BoundingBox; });
__webpack_require__.d(objects_namespaceObject, "GameObject", function() { return GameObject; });
__webpack_require__.d(objects_namespaceObject, "Point", function() { return Point; });
__webpack_require__.d(objects_namespaceObject, "shapes", function() { return shapes_namespaceObject; });
__webpack_require__.d(objects_namespaceObject, "text", function() { return text_namespaceObject; });

// NAMESPACE OBJECT: ./src/animator/src/utils.ts
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "randomBetween", function() { return randomBetween; });
__webpack_require__.d(utils_namespaceObject, "randomChoice", function() { return randomChoice; });
__webpack_require__.d(utils_namespaceObject, "randomPointBetween", function() { return randomPointBetween; });

// NAMESPACE OBJECT: ./src/animator/src/events.ts
var events_namespaceObject = {};
__webpack_require__.r(events_namespaceObject);
__webpack_require__.d(events_namespaceObject, "getEventController", function() { return getEventController; });
__webpack_require__.d(events_namespaceObject, "EventController", function() { return EventController; });

// NAMESPACE OBJECT: ./src/animator/src/elements/elements.ts
var elements_elements_namespaceObject = {};
__webpack_require__.r(elements_elements_namespaceObject);
__webpack_require__.d(elements_elements_namespaceObject, "hideElement", function() { return hideElement; });
__webpack_require__.d(elements_elements_namespaceObject, "showElement", function() { return showElement; });
__webpack_require__.d(elements_elements_namespaceObject, "slideInTop", function() { return slideInTop; });
__webpack_require__.d(elements_elements_namespaceObject, "slideOutTop", function() { return slideOutTop; });
__webpack_require__.d(elements_elements_namespaceObject, "applySlidInTop", function() { return applySlidInTop; });
__webpack_require__.d(elements_elements_namespaceObject, "applySlidOutTop", function() { return applySlidOutTop; });
__webpack_require__.d(elements_elements_namespaceObject, "fadeOut", function() { return fadeOut; });
__webpack_require__.d(elements_elements_namespaceObject, "shake", function() { return shake; });
__webpack_require__.d(elements_elements_namespaceObject, "removeShake", function() { return removeShake; });

// NAMESPACE OBJECT: ./src/animator/src/sounds.ts
var sounds_namespaceObject = {};
__webpack_require__.r(sounds_namespaceObject);
__webpack_require__.d(sounds_namespaceObject, "getSoundController", function() { return getSoundController; });
__webpack_require__.d(sounds_namespaceObject, "SoundController", function() { return SoundController; });

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(2);

// CONCATENATED MODULE: ./src/animator/src/collisions.ts
function withinHorizontal(obj1, obj2) {
    const obj1Bounds = obj1.getBoundingBox();
    const obj2Bounds = obj2.getBoundingBox();
    if (obj1Bounds.xMin < obj2Bounds.xMax && obj1Bounds.xMax > obj2Bounds.xMin) {
        return true;
    }
    return false;
}
function withinVertical(obj1, obj2) {
    const obj1Bounds = obj1.getBoundingBox();
    const obj2Bounds = obj2.getBoundingBox();
    if (obj1Bounds.yMin < obj2Bounds.yMax && obj1Bounds.yMax > obj2Bounds.yMin) {
        return true;
    }
    return false;
}
function checkCollision(obj1, obj2) {
    const horiz = withinHorizontal(obj1, obj2);
    const vert = withinVertical(obj1, obj2);
    return horiz && vert;
}


// CONCATENATED MODULE: ./src/animator/src/keyboard/key.ts
class Key {
    constructor(keyName, onKeyPress = [], onKeyRelease = []) {
        this.onKeyPress = [];
        this.onKeyRelease = [];
        this.pressed = false;
        this.locked = false;
        this.keyName = keyName;
        this.onKeyPress = onKeyPress;
        this.onKeyRelease = onKeyRelease;
    }
    runOnKeyPress() {
        for (let func of this.onKeyPress) {
            func(this);
        }
    }
    runOnKeyRelease() {
        for (let func of this.onKeyRelease) {
            func(this);
        }
    }
    addKeyPress(func) {
        this.onKeyPress.push(func);
    }
    addKeyRelease(func) {
        this.onKeyRelease.push(func);
    }
    run() {
        if (!this.isLocked()) {
            if (this.pressed) {
                this.runOnKeyPress();
            }
            else {
                this.runOnKeyRelease();
            }
        }
    }
    togglePressed() {
        this.pressed = !this.pressed;
        this.run();
        return this.isPressed();
    }
    setPressed(isPressed) {
        this.pressed = isPressed;
        this.run();
    }
    isPressed() {
        return this.pressed;
    }
    setLocked(isLocked) {
        this.locked = isLocked;
    }
    isLocked() {
        return this.locked;
    }
}

// CONCATENATED MODULE: ./src/animator/src/keyboard/keyboardController.ts
/** KeyboardController
 *
 *
 *
 */
class KeyboardController {
    constructor(keyboardKeys) {
        this.keyboardKeys = new Map();
        for (let key of keyboardKeys) {
            this.keyboardKeys.set(key.keyName, key);
        }
        this.clearAllPresses();
        this.keyCapture = this.keyCapture.bind(this);
        this.listen = this.listen.bind(this);
        this.stopListening = this.stopListening.bind(this);
    }
    /**
     * @param keyName
     * @returns true if the KeyboardController is watching for keyName else false.
     */
    hasKey(keyName) {
        return this.keyboardKeys.has(keyName);
    }
    /**
     * Adds the key to be watched by the KeyBoardController. If a key with
     * the same key.keyName already exists then remove the old and replace it
     * with the new.
     * @param key
     */
    addKey(key) {
        const keyName = key.keyName;
        // Remove if already found and overwrite
        this.removeKey(keyName);
        this.keyboardKeys.set(keyName, key);
    }
    /**
     * Removes the Key associated to the keyName and returns the Key object.
     * If the key does not exist returns null.
     * @param keyName
     * @returns The Key object which was removed or null.
     */
    removeKey(keyName) {
        if (this.keyboardKeys.has(keyName)) {
            // Remove the old one and return it
            // Overwrite with new
            const oldKey = this.keyboardKeys.get(keyName);
            this.keyboardKeys.delete(keyName);
            return oldKey;
        }
        return null;
    }
    /**
     * @param keyName
     * @returns The Key object associated to the keyName or null if not found.
     */
    getKey(keyName) {
        if (this.hasKey(keyName)) {
            return this.keyboardKeys.get(keyName);
        }
        return null;
    }
    keyCapture(keyEvent) {
        keyEvent.preventDefault();
        keyEvent.stopImmediatePropagation();
        const keyName = keyEvent.key;
        const keyObj = this.getKey(keyName);
        if (keyObj) {
            if (keyEvent.type == 'keypress' || keyEvent.type == 'keydown') {
                keyObj.setPressed(true);
            }
            else {
                // Assumes keyup
                keyObj.setPressed(false);
            }
        }
    }
    /**
     * @returns The list of defined Key objects.
     */
    getAllKeys() {
        return [...this.keyboardKeys.values()];
    }
    /**
     * @returns A list of Key objects that are currently pressed.
     */
    getPressedKeys() {
        const pressed = [];
        for (let key of this.keyboardKeys.values()) {
            if (key.isPressed()) {
                pressed.push(key);
            }
        }
        return pressed;
    }
    /**
     * @returns A list of the keyNames that are currently pressed.
     */
    getPressedKeysNames() {
        const pressed = [];
        for (let key of this.getPressedKeys()) {
            pressed.push(key.keyName);
        }
        return pressed;
    }
    /**
     * Sets the value of isPressed for each Key to false.
     * Runs the onKeyRelease functions associated to each key
     */
    clearAllPresses() {
        for (let key of this.keyboardKeys.values()) {
            key.setPressed(false);
        }
    }
    lockKey(keyName) {
        const key = this.getKey(keyName);
        if (key) {
            key.setLocked(true);
        }
    }
    unlockKey(keyName) {
        const key = this.getKey(keyName);
        if (key) {
            key.setLocked(false);
        }
    }
    getLockedKeys() {
        const keys = [];
        for (let key of this.keyboardKeys.values()) {
            if (key.isLocked()) {
                keys.push(key);
            }
        }
        return keys;
    }
    getLockedKeyNames() {
        const keys = [];
        for (let key of this.getLockedKeys()) {
            keys.push(key.keyName);
        }
        return keys;
    }
    unlockAllLockedKeys() {
        for (let key of this.getLockedKeys()) {
            key.setLocked(false);
        }
    }
    listen() {
        addEventListener('keydown', this.keyCapture, true);
        addEventListener('keypress', this.keyCapture, true);
        addEventListener('keyup', this.keyCapture, true);
    }
    stopListening() {
        removeEventListener('keydown', this.keyCapture, true);
        removeEventListener('keypress', this.keyCapture, true);
        removeEventListener('keyup', this.keyCapture, true);
    }
}
function updatePressCounts(kbController, keyPressCounts) {
    for (let key of kbController.getAllKeys()) {
        if (key.isPressed()) {
            keyPressCounts[key.keyName]++;
        }
        else {
            if (keyPressCounts[key.keyName] > 0) {
                keyPressCounts[key.keyName]--;
            }
            else if (keyPressCounts[key.keyName] < 0) {
                keyPressCounts[key.keyName] = 0;
            }
        }
    }
}

// CONCATENATED MODULE: ./src/animator/src/keyboard/keyNames.ts
const W = 'w';
const A = 'a';
const S = 's';
const D = 'd';
const J = 'j';
const P = 'p';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const CONTROL = 'Control';
const SHIFT = 'Shift';
const SPACE = ' ';
const ENTER = 'Enter';


// CONCATENATED MODULE: ./src/animator/src/keyboard/index.ts




let controller = null;
function lockKeys(keys) {
    for (let key of keys) {
        key.setLocked(true);
    }
}
function unlockKeys(keys) {
    for (let key of keys) {
        key.setLocked(false);
    }
}
function getKeyboardController(keys = []) {
    if (!controller) {
        controller = new KeyboardController([]);
    }
    for (let key of keys) {
        controller.addKey(key);
    }
    return controller;
}

// CONCATENATED MODULE: ./src/animator/src/objects/game-objects.ts
class BoundingBox {
    constructor(xMin, yMin, xMax, yMax) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    copy() {
        return new Point(this.x, this.y);
    }
    equals(other) {
        return (this.x === other.x && this.y === other.y);
    }
    midpoint(other) {
        return new Point((this.x + other.x) / 2, (this.y + other.y) / 2);
    }
    distance(other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    direction() {
        let magnitude = this.magnitude();
        return this.divide(magnitude);
    }
    diff(other) {
        if (typeof other == 'number') {
            return new Point(this.x - other, this.y - other);
        }
        if (other instanceof Point) {
            return new Point(this.x - other.x, this.y - other.y);
        }
    }
    add(other) {
        if (typeof other == 'number') {
            return new Point(this.x + other, this.y + other);
        }
        if (other instanceof Point) {
            return new Point(this.x + other.x, this.y + other.y);
        }
    }
    multiply(other) {
        if (typeof other == 'number') {
            return new Point(this.x * other, this.y * other);
        }
        if (other instanceof Point) {
            return new Point(this.x * other.x, this.y * other.y);
        }
    }
    divide(other) {
        if (typeof other == 'number') {
            return new Point(this.x / other, this.y / other);
        }
        if (other instanceof Point) {
            return new Point(this.x / other.x, this.y / other.y);
        }
    }
}
class GameObject {
    constructor(ctx, x, y, updateSpeed = null) {
        this.shouldDraw = true;
        this.shouldUpdate = true;
        this.updateInterval = null;
        this.ctx = ctx;
        this.location = new Point(x, y);
        this.updateSpeed = updateSpeed;
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
    }
    update() {
    }
    draw() {
    }
    getBoundingBox() {
        return null;
    }
    setUpdateInterval() {
        this.clearUpdateInterval();
        if (this.updateSpeed !== null) {
            this.updateInterval = setInterval(this.update, this.updateSpeed);
        }
    }
    clearUpdateInterval() {
        clearInterval(this.updateInterval);
    }
}


// CONCATENATED MODULE: ./src/animator/src/objects/shapes.ts

class shapes_Circle extends GameObject {
    /**
     * Initializes a Circle
     * @param radius Radious
     * @param color Color
     */
    constructor(ctx, x, y, updateSpeed, radius, color) {
        super(ctx, x, y, updateSpeed);
        this.fill = true;
        this.lineWidth = 1;
        this.ctx = ctx;
        this.radius = radius;
        this.color = color;
    }
    equals(other) {
        return this.location.equals(other.location) && (this.radius === other.radius);
    }
    draw(drawBB = false) {
        this.ctx.beginPath();
        this.ctx.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI, false);
        if (this.fill) {
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        }
        else {
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.color;
            this.ctx.stroke();
        }
        if (drawBB) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'red';
            let bb = this.getBoundingBox();
            let diameter = this.getDiameter();
            this.ctx.strokeRect(bb.xMin, bb.yMin, diameter, diameter);
        }
    }
    getBoundingBox() {
        let xMin = this.location.x - this.radius;
        let yMin = this.location.y - this.radius;
        let xMax = this.location.x + this.radius;
        let yMax = this.location.y + this.radius;
        return new BoundingBox(xMin, yMin, xMax, yMax);
    }
    getDiameter() {
        return this.radius * 2;
    }
}
class shapes_Line extends GameObject {
    /**
     * Creates a Line
     * @param path List of points to initialize the line.
     * @param width Width of the line.
     * @param color Color of the line.
     */
    constructor(ctx, x, y, updateSpeed, width, color, direction, numPoints = 1, distanceBetweenPoints = 1) {
        super(ctx, x, y, updateSpeed);
        this.fill = true;
        this.lineWidth = 1;
        this.ctx = ctx;
        this.numPoints = numPoints;
        this.distanceBetweenPoints = distanceBetweenPoints;
        this.path = [this.location.copy()];
        for (let i = 0; i < numPoints; i++) {
            this.path.push(this.path[i].add((direction.multiply(distanceBetweenPoints))));
        }
        this.direction = direction;
        this.width = width;
        this.color = color;
    }
    draw(drawBB = false) {
        this.ctx.beginPath();
        let point1 = this.path[0];
        this.ctx.moveTo(point1.x, point1.y);
        for (let i = 1; i < this.path.length; i++) {
            let point2 = this.path[i];
            this.ctx.lineTo(point2.x, point2.y);
        }
        this.ctx.lineWidth = this.width;
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        if (drawBB) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'red';
            let bb = this.getBoundingBox();
            const width = bb.xMax - bb.xMin;
            const height = bb.yMax - bb.yMin;
            this.ctx.strokeRect(bb.xMin, bb.yMin, width, height);
        }
    }
    getBoundingBox() {
        const pt1 = this.path[0];
        const pt2 = this.path[this.path.length - 1];
        return new BoundingBox(pt1.x, pt1.y, pt2.x, pt2.y);
    }
    getMidpoint(pos1, pos2) {
        let ptA = this.path[pos1];
        let ptB = this.path[pos2];
        return ptA.midpoint(ptB);
    }
    appendPoint(point) {
        this.path.push(point);
    }
    popPoint(index = -1) {
        if (index >= 0) {
            return this.path.splice(index, 1)[0];
        }
        else {
            return this.path.pop();
        }
    }
}
class shapes_Rectangle extends GameObject {
    constructor(ctx, x, y, updateSpeed, width, height, color) {
        super(ctx, x, y, updateSpeed);
        this.fill = true;
        this.lineWidth = 1;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.color = color;
        this.update = this.update.bind(this);
    }
    equals(other) {
        return this.location.equals(other.location) && (this.width === other.width && this.height === other.height);
    }
    update() {
    }
    draw(drawBB = false) {
        this.ctx.beginPath();
        if (this.fill) {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.location.x, this.location.y, this.width, this.height);
        }
        else {
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.color;
            this.ctx.strokeRect(this.location.x, this.location.y, this.width, this.height);
        }
        if (drawBB) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'red';
            let bb = this.getBoundingBox();
            this.ctx.strokeRect(bb.xMin, bb.yMin, this.width, this.height);
        }
    }
    getBoundingBox() {
        let xMin = this.location.x;
        let yMin = this.location.y;
        let xMax = this.location.x + this.width;
        let yMax = this.location.y + this.height;
        return new BoundingBox(xMin, yMin, xMax, yMax);
    }
}

// CONCATENATED MODULE: ./src/animator/src/objects/text.ts

class text_TextBox extends GameObject {
    constructor(ctx, text, x, y, updateSpeed, color, fontSize, fontFamily) {
        super(ctx, x, y, updateSpeed);
        this.fill = true;
        this.ctx = ctx;
        this.color = color;
        this.text = text;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.baseLine = "top";
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.font = `${this.fontSize} ${this.fontFamily}`;
        this.ctx.textBaseline = this.baseLine;
        const metrics = this.ctx.measureText(this.text);
        if (this.fill) {
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(this.text, this.location.x, this.location.y, metrics.width);
        }
        else {
            this.ctx.strokeStyle = this.color;
            this.ctx.strokeText(this.text, this.location.x, this.location.y, metrics.width);
        }
    }
}
class TextBoxGroup {
    constructor(ctx, textBoxes = []) {
        this.ctx = ctx;
        this.textBoxes = textBoxes;
        this.length = this.textBoxes.length;
    }
    draw() {
        for (let textBox of this.textBoxes) {
            textBox.draw();
        }
    }
}
class SelectTextBoxGroup extends TextBoxGroup {
    constructor(ctx, selectedColor, textBoxes) {
        super(ctx);
        this.originalColors = [];
        this.ctx = ctx;
        this.selectedColor = selectedColor;
        this.textBoxes = textBoxes;
        for (let textBox of this.textBoxes) {
            this.originalColors.push(textBox.color);
        }
        this.cursor = 0;
    }
    cursorUp() {
        this.cursor += 1;
    }
    cursorDown() {
        this.cursor -= 1;
    }
    get cursor() {
        return this._cursor;
    }
    set cursor(cursor) {
        if (cursor >= this.textBoxes.length) {
            this._cursor = 0;
        }
        else if (cursor < 0) {
            this._cursor = this.textBoxes.length - 1;
        }
        else {
            this._cursor = cursor;
        }
        for (let i = 0; i < this.textBoxes.length; i++) {
            if (i === this.cursor) {
                this.textBoxes[this.cursor].color = this.selectedColor;
            }
            else {
                this.textBoxes[i].color = this.originalColors[i];
            }
        }
    }
}

// CONCATENATED MODULE: ./src/animator/src/objects/index.ts





// CONCATENATED MODULE: ./src/animator/src/utils.ts

function randomBetween(lowerBound = 0, upperBound = 1) {
    return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
}
function randomChoice(items) {
    let lowerBound = 0;
    let upperBound = items.length;
    return items[randomBetween(lowerBound, upperBound)];
}
function randomPointBetween(bounds, offset = 0) {
    let randX = randomBetween(bounds.xMin + offset, bounds.xMax - offset);
    let randY = randomBetween(bounds.yMin + offset, bounds.yMax - offset);
    return new Point(randX, randY);
}


// CONCATENATED MODULE: ./src/animator/src/events.ts
class EventController {
    constructor() {
        this.registeredEvents = new Map();
    }
    register(name, callback, ...args) {
        const packed = [callback, ...args];
        const key = String(packed);
        if (!this.registeredEvents.has(name)) {
            const newRegistration = new Map();
            this.registeredEvents.set(name, newRegistration);
        }
        const registered = this.registeredEvents.get(name);
        registered.set(key, packed);
    }
    unregister(name, callback, ...args) {
        if (this.registeredEvents.has(name)) {
            const key = String([callback, ...args]);
            const registered = this.registeredEvents.get(name);
            registered.delete(key);
        }
    }
    trigger(name) {
        if (this.registeredEvents.has(name)) {
            const registered = this.registeredEvents.get(name);
            for (let [callback, ...args] of registered.values()) {
                callback(...args);
            }
        }
    }
}
let eventController = null;
function getEventController() {
    if (!eventController) {
        eventController = new EventController();
    }
    return eventController;
}


// EXTERNAL MODULE: ./src/animator/src/elements/elements.css
var elements_elements = __webpack_require__(5);

// CONCATENATED MODULE: ./src/animator/src/elements/elements.ts

function hideElement(element) {
    element.classList.add('hidden');
}
function showElement(element) {
    element.classList.remove('hidden');
}
function slideInTop(element) {
    element.classList.remove('slide-in-top');
    element.classList.remove('slide-out-top');
    element.classList.remove('slid-out-top');
    element.classList.add('slide-in-top');
    setTimeout(() => {
        element.classList.add('slid-in-top');
        element.classList.remove('slide-in-top');
    }, 800);
}
function slideOutTop(element) {
    element.classList.remove('slide-out-top');
    element.classList.remove('slide-in-top');
    element.classList.remove('slid-in-top');
    element.classList.add('slide-out-top');
    setTimeout(() => {
        element.classList.add('slid-out-top');
        element.classList.remove('slide-out-top');
    }, 800);
}
function applySlidInTop(element) {
    element.classList.remove('slid-out-top');
    element.classList.add('slid-in-top');
}
function applySlidOutTop(element) {
    element.classList.remove('slid-in-top');
    element.classList.add('slid-out-top');
}
function fadeOut(element) {
    element.classList.add('fade-out');
}
function shake(element, inifinite = false) {
    element.classList.add('shake-infinite');
    if (!inifinite) {
        setTimeout(removeShake, 400, element);
    }
}
function removeShake(element) {
    element.classList.remove('shake-infinite');
}


// CONCATENATED MODULE: ./src/animator/src/animator.ts

class animator_Animator {
    /**
     * @description Creates an animator class.
     * @param canvasId The HTML ID for the canvas element.
     * @param callbackFunc The function to perform on every draw. Accepts 2dCanvasContext as a param.
     * @param FPS The FPS rate. Pass in an int - 30 for 30 FPS.
     */
    constructor(canvasSelector, fps, callback = null, ...args) {
        this.paused = true;
        this.canvasEl = document.querySelector(`${canvasSelector}`);
        this.ctx = this.canvasEl.getContext('2d');
        this.lastDraw = false;
        this.callback = callback;
        this.setFPS(fps);
        this.args = args;
        this.animate = this.animate.bind(this);
        this.animate();
    }
    /**
     * @description Draws.
     * @param runningTime precise time
     */
    animate(runningTime = 0) {
        if (!this.paused) {
            if (!this.lastDraw) {
                this.lastDraw = runningTime;
            }
            let diff = runningTime - this.lastDraw;
            if (diff / this.fps > 1) {
                // Clear before redraw
                this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
                // Run the callback function to draw
                if (this.callback) {
                    this.callback(this, ...this.args);
                    this.lastDraw = runningTime;
                }
            }
            this.handle = requestAnimationFrame(this.animate);
        }
    }
    setCallback(callback, ...args) {
        this.callback = callback;
        this.args = args;
        return this;
    }
    pause() {
        this.paused = true;
        return this;
    }
    resume() {
        this.paused = false;
        this.animate();
        return this;
    }
    isPaused() {
        return this.paused;
    }
    stop() {
        cancelAnimationFrame(this.handle);
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
        return this;
    }
    getFPS() {
        return 1000 / this.fps;
    }
    setFPS(fps) {
        this.fps = 1000 / fps;
        return this;
    }
    setHeight(height) {
        this.canvasEl.height = height;
        return this;
    }
    setWidth(width) {
        this.canvasEl.width = width;
        return this;
    }
    setDimensions(width, height) {
        this.setWidth(width);
        this.setHeight(height);
        return this;
    }
    getHeight() {
        return this.canvasEl.height;
    }
    getWidth() {
        return this.canvasEl.width;
    }
    getDimensions() {
        return [this.getWidth(), this.getHeight()];
    }
    noContextMenu() {
        this.canvasEl.oncontextmenu = () => { return false; };
    }
    contextMenu() {
        this.canvasEl.oncontextmenu = () => { return true; };
    }
    gameBounds() {
        return new BoundingBox(0, 0, this.getWidth(), this.getHeight());
    }
}

// CONCATENATED MODULE: ./src/animator/src/sounds.ts
class SoundController {
    constructor() {
        this.mute = false;
        this._volumeMax = 1;
        this.sounds = new Map();
    }
    get volumeMax() {
        return this._volumeMax;
    }
    set volumeMax(max) {
        this._volumeMax = max;
        for (let audio of this.sounds.values()) {
            if (audio.volume > this._volumeMax) {
                audio.volume = this._volumeMax;
            }
        }
    }
    get(name) {
        return this.sounds.get(name);
    }
    add(name, src) {
        const audio = new Audio(src);
        if (audio.volume > this._volumeMax) {
            audio.volume = this._volumeMax;
        }
        this.sounds.set(name, audio);
        return this;
    }
    remove(name) {
        const audio = this.get(name);
        this.sounds.delete(name);
        return this;
    }
    play(name) {
        const audio = this.get(name);
        if (!this.mute && audio) {
            audio.play();
        }
        return this;
    }
    pause(name) {
        const audio = this.get(name);
        if (audio) {
            audio.pause();
        }
        return this;
    }
    stop(name) {
        const audio = this.get(name);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        return this;
    }
    scrub(name, time = 0) {
        const audio = this.get(name);
        if (audio) {
            audio.currentTime = time;
        }
        return this;
    }
    volume(name, level = 1) {
        const audio = this.get(name);
        if (audio) {
            audio.volume = level;
        }
        return this;
    }
    loop(name, on = true) {
        const audio = this.get(name);
        if (audio) {
            audio.loop = on;
        }
        return this;
    }
    playBackRate(name, rate = 1) {
        const audio = this.get(name);
        if (audio) {
            audio.playbackRate = rate;
        }
        return this;
    }
}
let soundController = null;
function getSoundController() {
    if (!soundController) {
        soundController = new SoundController();
    }
    return soundController;
}


// CONCATENATED MODULE: ./src/animator/src/scene.ts



/** @description A Scene to draw. Has access to the sound, event and keyboard controllers.
 * Must implement the update and draw methods im subclass.
 *
 * @param anim The Animator object this scene belongs to.
 * @param updateSpeed How fast the scene should update. For fine grained control implement an objects
 * updates on your own.

*/
class scene_Scene {
    constructor(anim, updateSpeed = null) {
        this.soundController = getSoundController();
        this.eventController = getEventController();
        this.keyboardController = getKeyboardController();
        this.updateInterval = null;
        this.keys = [];
        this.anim = anim;
        this.updateSpeed = updateSpeed;
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }
    update() {
    }
    draw() {
    }
    start() {
        for (let key of this.keys) {
            this.keyboardController.addKey(key);
        }
        this.keyboardController.listen();
        this.anim.setCallback(this.draw);
        this.anim.resume();
        if (this.updateSpeed !== null) {
            this.updateInterval = setInterval(this.update, this.updateSpeed);
        }
    }
    resume() {
        this.anim.resume();
        if (this.updateSpeed !== null) {
            this.updateInterval = setInterval(this.update, this.updateSpeed);
        }
    }
    pause() {
        clearInterval(this.updateInterval);
        this.anim.pause();
    }
    stop() {
        this.anim.stop();
        clearInterval(this.updateInterval);
        this.keyboardController.stopListening();
        for (let key of this.keys) {
            this.keyboardController.removeKey(key.keyName);
        }
    }
}
/* harmony default export */ var scene = (scene_Scene);

// CONCATENATED MODULE: ./src/animator/index.ts











// CONCATENATED MODULE: ./src/constants.ts
const FPS = 30;
const CANVAS_ID = '#game-window';
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = CANVAS_WIDTH;
const PART_WIDTH = 20;
const FOOD_OFFSET = 10;
const FOOD_RADIUS = 7;
const SINGLEPLAYER = 'singleplayer';
let INITIAL_GAME_SPEED = 350;
const GAME_SPEED_DELTA = 5;
const GAME_SPEED_LIMIT = 50;
const GAME_SPEEDS = [350, 250, 150, 100, 50];
const BG_MUSIC_SPEEDS = [1, 1.25, 1.5, 1.75, 2];
const PLAYER_MAX_SPEED_EVENT = 'playerMaxSpeed';
const PLAYER_DEATH_EVENT = 'playerDeath';
const FOOD_PICKUP = 'food-pickup';
const GAME_FINISH_EVENT = 'gameFinish';
const MENU_HOVER = 'menu-hover';
const MENU_CLICK = 'menu-click';
const BG_MUSIC = 'bg-music';


// CONCATENATED MODULE: ./src/food/food.ts


/**
 * What the snake eats.
 */
class food_Food extends objects_namespaceObject.shapes.Circle {
    constructor(ctx, x, y) {
        super(ctx, x, y, null, FOOD_RADIUS, 'orange');
    }
    isEaten(item) {
        return collisions_namespaceObject.checkCollision(this, item);
    }
}

// CONCATENATED MODULE: ./src/food/foodSpawner.ts




class foodSpawner_FoodSpawner {
    constructor(ctx, numMax, xMax, yMax) {
        this.foods = [];
        this.ctx = ctx;
        this.numMax = numMax;
        this.xMax = xMax;
        this.yMax = yMax;
    }
    /**
 * @description Randomizes the location of the food and returns an object
 */
    randomizeFood() {
        let food = new food_Food(this.ctx, 0, 0);
        let newFoodX = utils_namespaceObject.randomBetween(0, this.xMax);
        let newFoodY = utils_namespaceObject.randomBetween(0, this.yMax);
        // This calculation is to make sure the food in placed on a place that is divisible by 10 and
        // also offset by 5 which makes the box and food line up right.
        food.location.x = newFoodX - (newFoodX % PART_WIDTH) + FOOD_OFFSET;
        food.location.y = newFoodY - (newFoodY % PART_WIDTH) + FOOD_OFFSET;
        return food;
    }
    spawn(notOn) {
        if (this.foods.length === this.numMax) {
            return;
        }
        const gameBB = new shapes_Rectangle(this.ctx, 0, 0, null, CANVAS_WIDTH, CANVAS_HEIGHT, 'black');
        notOn = [...notOn, ...this.foods];
        const newFoods = [];
        while ((this.foods.length + newFoods.length) < this.numMax) {
            let food = this.randomizeFood();
            let ok = true;
            for (let gameObj of notOn) {
                if (food.isEaten(gameObj) || !collisions_namespaceObject.checkCollision(gameBB, food)) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                newFoods.push(food);
            }
        }
        this.foods.push(...newFoods);
    }
    draw(drawBB = false) {
        for (let food of this.foods) {
            food.draw(drawBB);
        }
    }
    removeEatenFoods(snakeHead) {
        const notEaten = [];
        const eaten = [];
        for (let i = 0; i < this.foods.length; i++) {
            let food = this.foods[i];
            if (food.isEaten(snakeHead)) {
                eaten.push(food);
            }
            else {
                notEaten.push(food);
            }
        }
        let numEaten = eaten.length;
        this.foods = notEaten;
        return numEaten > 0;
    }
}

// CONCATENATED MODULE: ./src/snake/snake-part.ts


class snake_part_SnakePart extends objects_namespaceObject.shapes.Rectangle {
    constructor(ctx, x, y, color = '#000') {
        super(ctx, x, y, null, snake_part_SnakePart.partWidth, snake_part_SnakePart.partWidth, color);
    }
    copy() {
        return new snake_part_SnakePart(this.ctx, this.location.x, this.location.y, this.color);
    }
}
// also height
snake_part_SnakePart.partWidth = PART_WIDTH;

// CONCATENATED MODULE: ./src/snake/snake.ts



class snake_Snake extends GameObject {
    constructor(ctx, x, y, updateSpeed, color = '#000') {
        super(ctx, x, y, updateSpeed);
        this.alive = true;
        this.path = [];
        this.lastPath = [];
        this.color = color;
        this.direction = new objects_namespaceObject.Point(0, 0);
        this.path.push(new snake_part_SnakePart(ctx, x, y, this.color));
    }
    setLastPath() {
        const lastPath = [];
        for (let snakePart of this.path) {
            lastPath.push(snakePart.copy());
        }
        this.lastPath = lastPath;
    }
    getHead() {
        return this.path[0];
    }
    getTail() {
        return this.path[this.path.length - 1];
    }
    update() {
        this.shouldUpdate = true;
    }
    move() {
        // Preserve last path
        this.setLastPath();
        // Move the tail to the front
        let head = this.getHead();
        let tail = this.path.pop();
        const newPt = head.location.add(this.direction.multiply(snake_part_SnakePart.partWidth));
        tail.location.x = newPt.x;
        tail.location.y = newPt.y;
        this.path.unshift(tail);
    }
    draw(showBB = false) {
        for (let snakePart of this.path) {
            snakePart.draw(showBB);
        }
    }
    grow() {
        if (this.path.length === 1) {
            // Add on the opposite direction where we are going
            let head = this.getHead();
            let newPt = head.location.add(this.direction.multiply(-snake_part_SnakePart.partWidth));
            let part = new snake_part_SnakePart(this.ctx, newPt.x, newPt.y, this.color);
            this.path.push(part);
        }
        else {
            // Add on the opposite direction from the second to last part
            let pt1 = this.path[this.path.length - 2];
            let pt2 = this.getTail();
            let newPt = pt2.location.add(pt1.location.diff(pt2.location).direction().multiply(-snake_part_SnakePart.partWidth));
            let part = new snake_part_SnakePart(this.ctx, newPt.x, newPt.y, this.color);
            this.path.push(part);
        }
    }
    getBoundingBoxes() {
        const bb = [];
        for (let snakePart of this.path) {
            bb.push(snakePart.getBoundingBox());
        }
        return bb;
    }
}

// CONCATENATED MODULE: ./src/controls.ts



const UP = new Point(0, -1);
const DOWN = new Point(0, 1);
const LEFT = new Point(-1, 0);
const RIGHT = new Point(1, 0);
const DIRECTIONS_MAP = {
    [keyNames_namespaceObject.W]: UP,
    [keyNames_namespaceObject.S]: DOWN,
    [keyNames_namespaceObject.A]: LEFT,
    [keyNames_namespaceObject.D]: RIGHT,
    [keyNames_namespaceObject.ARROW_UP]: UP,
    [keyNames_namespaceObject.ARROW_DOWN]: DOWN,
    [keyNames_namespaceObject.ARROW_LEFT]: LEFT,
    [keyNames_namespaceObject.ARROW_RIGHT]: RIGHT
};
function getDirectionForKey(key) {
    return DIRECTIONS_MAP[key.keyName];
}
function getPlayer1Keys() {
    const wKey = new Key(keyNames_namespaceObject.W);
    const sKey = new Key(keyNames_namespaceObject.S);
    const aKey = new Key(keyNames_namespaceObject.A);
    const dKey = new Key(keyNames_namespaceObject.D);
    return [wKey, sKey, aKey, dKey];
}


// CONCATENATED MODULE: ./src/utils.ts




function validDirectionChange(snake, newDirection) {
    // Check to make sure that the new direction isn't 180 degrees in the opposite of
    // our current heading
    // OR
    // Check to make sure that the keypress isn't for the direction we are already going
    // If either than skip
    let sum = newDirection.add(snake.direction);
    if ((sum.equals(new objects_namespaceObject.Point(0, 0))) ||
        (newDirection.equals(snake.direction))) {
        return false;
    }
    return true;
}
function changeSnakeDirection(snake, key) {
    if (!key) {
        return false;
    }
    let wasValid = false;
    const direction = getDirectionForKey(key);
    if (validDirectionChange(snake, direction)) {
        snake.direction = direction.copy();
        wasValid = true;
    }
    return wasValid;
}
function collidedWithWall(head) {
    if (head.location.x < 0 || head.location.x >= CANVAS_WIDTH
        || head.location.y < 0 || head.location.y >= CANVAS_HEIGHT) {
        return true;
    }
    return false;
}
function collidedWithBody(head, snake) {
    for (let snakePart of snake.path.slice(1)) {
        if (collisions_namespaceObject.checkCollision(head, snakePart)) {
            return true;
        }
    }
    return false;
}
function setCollideWithWallBorder(animator) {
    animator.canvasEl.classList.remove('dashed');
}
function setPassThroughWallBorder(animator) {
    animator.canvasEl.classList.add('dashed');
}
function setCanvasBorder(options, animator) {
    if (options.collideWithWall) {
        setCollideWithWallBorder(animator);
    }
    else {
        setPassThroughWallBorder(animator);
    }
}
function goThroughWall(snake) {
    if (snake.direction.equals(UP)) {
        snake.getHead().location.y = CANVAS_HEIGHT - snake_part_SnakePart.partWidth;
    }
    else if (snake.direction.equals(DOWN)) {
        snake.getHead().location.y = 0;
    }
    else if (snake.direction.equals(LEFT)) {
        snake.getHead().location.x = CANVAS_WIDTH - snake_part_SnakePart.partWidth;
    }
    else {
        // RIGHT
        snake.getHead().location.x = 0;
    }
}
function getScoreTag() {
    let scoreTag = document.getElementById('player-score');
    return scoreTag;
}
function initScoreTag() {
    const scoreTag = getScoreTag();
    elements_elements_namespaceObject.showElement(scoreTag);
}
function hideScoreTag() {
    const scoreTag = getScoreTag();
    elements_elements_namespaceObject.hideElement(scoreTag);
}
function updateScoreText(score) {
    const scoreTag = getScoreTag();
    scoreTag.innerText = `Score: ${score}`;
}
function getTopScoreTag() {
    const scoreTag = document.querySelector('#top-score-value');
    return scoreTag;
}
function showNotification(text, time = 5000) {
    const notificationEl = document.getElementById('notification');
    notificationEl.innerText = text;
    elements_elements_namespaceObject.slideInTop(notificationEl);
    setTimeout(() => {
        elements_elements_namespaceObject.slideOutTop(notificationEl);
    }, time);
}
function onMaxSpeed() {
    showNotification('Player has hit max speed!');
}
function setTopScoreText(score) {
    const topScoreValueEl = document.querySelector('#top-score-value');
    topScoreValueEl.textContent = `${score}`;
}
function setOptions(options) {
    const startingSpeedEl = document.querySelector('#startingSpeed');
    const numFoodEl = document.querySelector('#numFood');
    const collideWithWallEl = document.querySelector('#collideWithWall');
    const displayGridEl = document.querySelector('#displayGrid');
    startingSpeedEl.value = `${options.startingSpeed}`;
    numFoodEl.value = `${options.numFood}`;
    collideWithWallEl.value = `${options.collideWithWall}`;
    displayGridEl.value = `${options.displayGrid}`;
}


// CONCATENATED MODULE: ./src/game.ts







const game_eventController = events_namespaceObject.getEventController();
const game_soundController = sounds_namespaceObject.getSoundController();
class game_Game extends scene {
    constructor(playerMode, options) {
        super(new animator_Animator(CANVAS_ID, FPS), GAME_SPEED_LIMIT - 10);
        this.score = 0;
        this.keyPresses = [];
        this.running = false;
        this.grid = [];
        this.keys = getPlayer1Keys();
        this.playerMode = playerMode;
        this.options = options;
        this.foodSpawner = new foodSpawner_FoodSpawner(this.anim.ctx, options.numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.populateGrid();
        this.setupSingleplayer();
    }
    populateGrid() {
        for (let x = 0; x < CANVAS_WIDTH; x += snake_part_SnakePart.partWidth) {
            for (let y = 0; y < CANVAS_HEIGHT; y += snake_part_SnakePart.partWidth) {
                let g = new objects_namespaceObject.shapes.Rectangle(this.anim.ctx, x, y, null, snake_part_SnakePart.partWidth, snake_part_SnakePart.partWidth, '#f0f0f0');
                g.fill = false;
                this.grid.push(g);
            }
        }
    }
    gameOver(useLastPath = false) {
        this.running = false;
        if (useLastPath) {
            this.snake.path = this.snake.lastPath;
        }
        for (let snakePart of this.snake.path) {
            snakePart.color = 'red';
        }
        this.snake.draw();
        game_eventController.trigger(PLAYER_DEATH_EVENT);
    }
    updateGameSpeed() {
        if (this.snake.updateSpeed > GAME_SPEED_LIMIT) {
            this.snake.updateSpeed -= GAME_SPEED_DELTA;
            this.snake.setUpdateInterval();
            if (this.snake.updateSpeed === GAME_SPEED_LIMIT) {
                game_eventController.trigger(PLAYER_MAX_SPEED_EVENT);
            }
        }
    }
    updateScore() {
        this.score += 100;
    }
    update() {
        if (!this.running) {
            return;
        }
        if (this.snake.shouldUpdate) {
            // Getting our next valid keypress and changing direction
            let nextKey = this.spliceNextKeyPress();
            let valid = changeSnakeDirection(this.snake, nextKey);
            while (!valid && nextKey) {
                if (!valid) {
                    nextKey = this.spliceNextKeyPress();
                    valid = changeSnakeDirection(this.snake, nextKey);
                }
            }
            this.snake.move();
            this.snake.shouldUpdate = false;
            const head = this.snake.getHead();
            // Check for game over conditions
            // Snake head colliding with body
            if (collidedWithBody(head, this.snake)) {
                // console.log('body');
                this.gameOver();
                return;
            }
            // Snake head colliding with wall
            if (collidedWithWall(head)) {
                if (this.options.collideWithWall) {
                    // console.log('wall');
                    this.gameOver(true);
                    return;
                }
                // Otherwise
                goThroughWall(this.snake);
            }
            const ate = this.foodSpawner.removeEatenFoods(this.snake.getHead());
            if (ate) {
                this.snake.grow();
                this.updateScore();
                this.updateGameSpeed();
                updateScoreText(this.score);
                game_eventController.trigger(FOOD_PICKUP);
            }
            if (this.foodSpawner.foods.length === 0) {
                this.foodSpawner.spawn(this.snake.path);
            }
        }
    }
    draw() {
        if (this.options.displayGrid) {
            for (let piece of this.grid) {
                piece.draw();
            }
        }
        this.foodSpawner.draw();
        this.snake.draw();
    }
    initKeys() {
        // Init the keys
        for (let key of this.keys) {
            key.addKeyPress((key) => {
                if (this.running) {
                    const len = this.keyPresses.push(key);
                    if (len > 3) {
                        // Remove from the front
                        const remainder = len - 3;
                        this.keyPresses.splice(0, remainder);
                    }
                }
            });
        }
    }
    spliceNextKeyPress() {
        if (this.keyPresses.length > 0) {
            const removed = this.keyPresses.splice(0, 1);
            if (removed.length > 0) {
                return removed[0];
            }
        }
        return null;
    }
    setupSingleplayer() {
        const gameSpeed = GAME_SPEEDS[this.options.startingSpeed];
        this.initKeys();
        this.snake = new snake_Snake(this.anim.ctx, 200, 200, gameSpeed);
        game_eventController.register(PLAYER_MAX_SPEED_EVENT, onMaxSpeed, this);
        game_eventController.register(PLAYER_DEATH_EVENT, () => {
            this.running = false;
            game_soundController.play(PLAYER_DEATH_EVENT);
            game_eventController.trigger(GAME_FINISH_EVENT);
        });
        setCanvasBorder(this.options, this.anim);
    }
    start() {
        super.start();
        this.snake.setUpdateInterval();
        initScoreTag();
        this.running = true;
    }
    stop() {
        super.stop();
        this.snake.clearUpdateInterval();
        this.running = false;
        hideScoreTag();
        updateScoreText(0);
    }
    resume() {
        super.resume();
        this.snake.setUpdateInterval();
        this.snake.shouldUpdate = true;
        this.running = true;
    }
    pause() {
        this.running = false;
        this.snake.shouldUpdate = false;
        this.snake.clearUpdateInterval();
        super.pause();
    }
}


// CONCATENATED MODULE: ./src/db.ts


function saveTopScore(score) {
    const transaction = db.transaction(TOP_SCORES_DB_NAME, 'readwrite').objectStore(TOP_SCORES_DB_NAME);
    transaction.put({ name: TOP_SCORE_KEY, score: score });
}
function getTopScore() {
    const transaction = db.transaction(TOP_SCORES_DB_NAME, 'readonly').objectStore(TOP_SCORES_DB_NAME);
    return transaction.get(TOP_SCORE_KEY);
}
function saveOptions(options) {
    const transaction = db.transaction(OPTIONS_DB_NAME, 'readwrite').objectStore(OPTIONS_DB_NAME);
    transaction.put({ name: SINGLEPLAYER, options: options });
}
function getOptions() {
    const transaction = db.transaction(OPTIONS_DB_NAME, 'readonly').objectStore(OPTIONS_DB_NAME);
    return transaction.get(SINGLEPLAYER);
}
// Set up db
let dbSuccessful = true;
let db;
const TOP_SCORES_DB_NAME = 'top_scores';
const TOP_SCORE_KEY = 'top';
const OPTIONS_DB_NAME = 'options';
const request = window.indexedDB.open("snake_game", 2);
request.onsuccess = (event) => {
    db = event.target.result;
    getTopScore().onsuccess = (event) => {
        const score = event.target.result;
        if (score) {
            setTopScoreText(score['score']);
        }
        else {
            saveTopScore(0);
            setTopScoreText(0);
        }
    };
    getOptions().onsuccess = (event) => {
        const options = event.target.result;
        if (!options) {
            const initialOptions = {
                numFood: 1,
                collideWithWall: true,
                startingSpeed: 0,
                displayGrid: true
            };
            saveOptions(initialOptions);
        }
    };
};
request.onerror = () => {
    dbSuccessful = false;
    // alert('Need access to database to work.');
};
request.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains(TOP_SCORES_DB_NAME)) {
        db.createObjectStore(TOP_SCORES_DB_NAME, { keyPath: 'name' });
    }
    if (!db.objectStoreNames.contains(OPTIONS_DB_NAME)) {
        db.createObjectStore(OPTIONS_DB_NAME, { keyPath: 'name' });
    }
};
function haveDBAccess() {
    return dbSuccessful;
}


// CONCATENATED MODULE: ./src/index.ts






// Get ref to all menu items
const gameOptionsEl = document.querySelector('#options');
const startingSpeedEl = document.querySelector('#startingSpeed');
const numFoodEl = document.querySelector('#numFood');
const collideWithWallEl = document.querySelector('#collideWithWall');
const displayGridEl = document.querySelector('#displayGrid');
const infoSectionEl = document.querySelector('#info');
const playAreaEl = document.querySelector('#play-area');
const gameFinishedEl = document.querySelector('#game-finished-section');
const playButtonEl = document.querySelector('#play-button');
const infoButtonEl = document.getElementById('info-button');
const restartButtonEl = document.querySelector('#restart-button');
const optionsButtonGameFinishedEl = document.querySelector('#options-button-game-finished');
const optionsButtonPausedEl = document.querySelector('#options-button-paused');
const startButtonEl = document.querySelector('#start-button');
const pausedSectionEl = document.querySelector('#paused-section');
const startSectionEl = document.querySelector('#start-button-section');
const buttons = [
    playButtonEl,
    infoButtonEl,
    restartButtonEl,
    optionsButtonGameFinishedEl,
    optionsButtonPausedEl,
    startButtonEl
];
let currentScreen = startSectionEl;
let previousScreen = startSectionEl;
let src_playerMode = SINGLEPLAYER;
const src_eventController = events_namespaceObject.getEventController();
const src_soundController = sounds_namespaceObject.getSoundController();
function initSounds() {
    src_soundController.add(MENU_HOVER, 'assets/sounds/menu/beep.wav').volume(MENU_HOVER, 0.5);
    src_soundController.add(MENU_CLICK, 'assets/sounds/menu/confirmbeep.wav').volume(MENU_CLICK, 0.5);
    src_soundController.add(FOOD_PICKUP, 'assets/sounds/snake/coin10.wav').volume(FOOD_PICKUP, 0.5);
    src_soundController.add(PLAYER_DEATH_EVENT, 'assets/sounds/snake/oops.wav').volume(PLAYER_DEATH_EVENT, 0.5);
    src_soundController.add(BG_MUSIC, 'assets/sounds/bg/headinthesand.ogg').loop(BG_MUSIC);
}
function initButtonsHoverSound() {
    for (let button of buttons) {
        addHoverShakeSound(button);
    }
}
function playFoodPickupSound() {
    src_soundController.stop(FOOD_PICKUP).play(FOOD_PICKUP);
}
function stopBGMusic() {
    src_soundController.stop(BG_MUSIC);
}
function playMenuHighlightSound() {
    src_soundController.stop(MENU_HOVER).play(MENU_HOVER);
}
function playMenuClickSound() {
    src_soundController.stop(MENU_CLICK).play(MENU_CLICK);
}
function addHoverShakeSound(el) {
    el.addEventListener('mouseenter', () => {
        playMenuHighlightSound();
        elements_elements_namespaceObject.shake(el, true);
    });
    el.addEventListener('mouseleave', () => {
        elements_elements_namespaceObject.removeShake(el);
    });
}
function transitionScreen(from, to) {
    elements_elements_namespaceObject.slideOutTop(from);
    elements_elements_namespaceObject.slideInTop(to);
    previousScreen = from;
    currentScreen = to;
}
function toOptions(from) {
    getOptions().onsuccess = (event) => {
        const options = event.target.result.options;
        setOptions(options);
    };
    transitionScreen(from, gameOptionsEl);
}
function togglePause(game) {
    if (game.running) {
        src_soundController.volume(BG_MUSIC, 0.5);
        game.pause();
        elements_elements_namespaceObject.showElement(pausedSectionEl);
    }
    else {
        src_soundController.volume(BG_MUSIC, 1);
        elements_elements_namespaceObject.hideElement(pausedSectionEl);
        game.resume();
    }
}
function onFinish(game, pKey) {
    if (haveDBAccess()) {
        getTopScore().onsuccess = (event) => {
            const highScore = event.target.result['score'];
            const score = game.score;
            if (score > highScore) {
                saveTopScore(score);
                setTopScoreText(score);
                showNotification('New top score!');
            }
        };
    }
    else {
        const score = game.score;
        const highScore = Number(getTopScoreTag().textContent);
        if (score > highScore) {
            setTopScoreText(score);
            showNotification('New top score!');
        }
    }
    stopBGMusic();
    game.pause();
    pKey.setLocked(true);
    elements_elements_namespaceObject.showElement(gameFinishedEl);
}
startButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    src_playerMode = SINGLEPLAYER;
    toOptions(startSectionEl);
});
restartButtonEl.addEventListener('click', () => {
    // playMenuClickSound();
    elements_elements_namespaceObject.hideElement(gameFinishedEl);
    playButtonEl.click();
});
optionsButtonGameFinishedEl.addEventListener('click', () => {
    playMenuClickSound();
    stopBGMusic();
    elements_elements_namespaceObject.hideElement(gameFinishedEl);
    toOptions(playAreaEl);
    ;
});
optionsButtonPausedEl.addEventListener('click', () => {
    playMenuClickSound();
    stopBGMusic();
    elements_elements_namespaceObject.hideElement(pausedSectionEl);
    toOptions(playAreaEl);
});
playButtonEl.addEventListener('click', () => {
    // stopBGMusic();
    playMenuClickSound();
    updateScoreText(0);
    const options = {
        numFood: Number(numFoodEl.value),
        collideWithWall: collideWithWallEl.value === 'true' ? true : false,
        displayGrid: displayGridEl.value === 'true' ? true : false,
        startingSpeed: Number(startingSpeedEl.value)
    };
    if (haveDBAccess()) {
        saveOptions(options);
    }
    const game = new game_Game(src_playerMode, options);
    const kbController = keyboard_namespaceObject.getKeyboardController();
    const pKey = new keyboard_namespaceObject.Key(keyboard_namespaceObject.keyNames.P, [() => {
            togglePause(game);
        }]);
    kbController.addKey(pKey);
    src_eventController.register(GAME_FINISH_EVENT, onFinish, game, pKey);
    src_eventController.register(FOOD_PICKUP, playFoodPickupSound);
    src_eventController.register(FOOD_PICKUP, () => {
        for (let speed of GAME_SPEEDS) {
            if (game.snake.updateSpeed === speed) {
                const i = GAME_SPEEDS.indexOf(speed);
                src_soundController.playBackRate(BG_MUSIC, BG_MUSIC_SPEEDS[i]);
                break;
            }
        }
    });
    transitionScreen(currentScreen, playAreaEl);
    src_soundController.volume(BG_MUSIC, 1).playBackRate(BG_MUSIC, BG_MUSIC_SPEEDS[options.startingSpeed]).play(BG_MUSIC);
    game.start();
});
infoButtonEl.addEventListener('click', (event) => {
    playMenuClickSound();
    transitionScreen(startSectionEl, infoSectionEl);
});
initSounds();
initButtonsHoverSound();


/***/ })
/******/ ]);