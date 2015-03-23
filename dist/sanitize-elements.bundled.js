(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sanitizeElements = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],2:[function(require,module,exports){
(function(root) {
  function isElement(value) {
    return (value && value.nodeType === 1) &&
           (value && typeof value == 'object') &&
           (Object.prototype.toString.call(value).indexOf('Element') > -1);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isElement;
    }
    exports.isElement = isElement;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isElement;
    });
  } else {
    root.isElement = isElement;
  }

})(this);

},{}],3:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],4:[function(require,module,exports){
/**
 * @param $elements are dom element(s)
 * @param wrap true/false if single elements should be wrapped as array
 */
var isElement = require('is-element')
var isObject  = require('is-object')
var isArray   = require('is-array')

module.exports = function($elements, wrap) {
  
  if ($elements === undefined
      || !isObject($elements)
      || $elements === window
      || $elements === document) {
    return false
  }

  var $sanitized = []

  if (isElement($elements)) {
    if (wrap) {
      $sanitized.push($elements)
    } else {
      $sanitized = $elements
    }
  } 
  else if (isArray($elements)) {
    $elements.forEach(function(value) {
      if (isElement(value)) {
        $sanitized.push(value)
      }
    })
  }
  else if (isObject($elements)) {
    Object.keys($elements).forEach(function(key) {
      if (isElement($elements[key])) {
        $sanitized.push($elements[key])
      }
    })
  } 

  if (!$sanitized.length) {
    return false
  }

  return $sanitized

}
},{"is-array":1,"is-element":2,"is-object":3}]},{},[4])(4)
});