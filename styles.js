(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----------\r\n|   COLORS  |\r\n------------*/\n/*---------------------------\r\n|   RESPONSIVE BREAKPOINTS  |\r\n----------------------------*/\n/* You can add global styles to this file, and also import other style files */\nbody, html {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  font: 400 15px/1.8 \"Raleway\", sans-serif;\n  color: #202020; }\ninput,\ntextarea,\nbutton,\nselect,\ndiv,\na {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\na {\n  text-decoration: none;\n  color: inherit; }\n.header-image .header-image-title {\n  position: absolute;\n  top: 40%;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff; }\n.header-image .header-image-title h1 {\n    display: inline-block;\n    padding: 10px 30px;\n    background-color: rgba(0, 0, 0, 0.6);\n    margin: 0; }\n.nav-spacer {\n  height: 70px; }\napp-current {\n  background-color: #c7c7c7; }\n.main-content-container {\n  color: #1f1f1f; }\n.main-content-container-padding {\n  padding-left: 20px;\n  padding-right: 20px; }\n.main-content-navbar-spacer {\n  margin-top: 80px; }\n.main-title, .title-medium {\n  margin: 0;\n  font-size: 1.9em;\n  line-height: 1.4em;\n  text-transform: uppercase; }\n.tth-button {\n  border: 1px solid #1f1f1f;\n  padding: 3px 12px;\n  margin: 5px 0;\n  border-radius: 18px;\n  display: inline-block;\n  transition: background-color 0.3s ease; }\n.tth-button .tth-button-icon {\n    margin-right: 10px; }\n.tth-button:hover {\n    cursor: pointer;\n    color: #fff;\n    background-color: #1f1f1f; }\n.tth-button .tth-button-label {\n    display: inline-block !important; }\n/*************\r\n* ANIMATIONS *\r\n**************/\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@-webkit-keyframes slide-up {\n  from {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@keyframes slide-up {\n  from {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@-webkit-keyframes slide-down {\n  from {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@keyframes slide-down {\n  from {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@-webkit-keyframes slow-zoom-image-out {\n  from {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes slow-zoom-image-out {\n  from {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@media (min-width: 768px) {\n  .main-content-container .main-content {\n    max-width: 768px;\n    margin: 0 auto; }\n  .main-content-container-padding {\n    padding-left: 50px;\n    padding-right: 50px; }\n  .main-title, .title-medium {\n    text-align: center; } }\n@media (min-width: 992px) {\n  .main-content-container .main-content {\n    max-width: 992px; } }\n@media (min-width: 1200px) {\n  .main-content-container .main-content {\n    max-width: 1200px; } }\n@media (min-width: 1600px) {\n  .main-content-container .main-content {\n    max-width: 1600px; } }\n"

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nikor\Documents\GitHub\yogaraum-wettersbach-angular\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map