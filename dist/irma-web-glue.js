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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var VersionCheck = __webpack_require__(17)
var Regex = __webpack_require__(18)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(11)

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(52)
var ieee754 = __webpack_require__(53)
var isArray = __webpack_require__(54)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(9);
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(8);
util.inherits = __webpack_require__(4);
/*</replacement>*/

var Readable = __webpack_require__(24);
var Writable = __webpack_require__(27);

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6).Buffer))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(6)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(59);
var util = __webpack_require__(61);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(62);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


var canPromise = __webpack_require__(31)

var QRCode = __webpack_require__(32)
var CanvasRenderer = __webpack_require__(49)
var SvgRenderer = __webpack_require__(50)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__(12)

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var ClientRequest = __webpack_require__(66)
var response = __webpack_require__(22)
var extend = __webpack_require__(76)
var statusCodes = __webpack_require__(77)
var url = __webpack_require__(13)

var http = exports

http.request = function (opts, cb) {
	if (typeof opts === 'string')
		opts = url.parse(opts)
	else
		opts = extend(opts)

	// Normally, the page is loaded from http or https, so not specifying a protocol
	// will result in a (valid) protocol-relative url. However, this won't work if
	// the protocol is something else, like 'file:'
	var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''

	var protocol = opts.protocol || defaultProtocol
	var host = opts.hostname || opts.host
	var port = opts.port
	var path = opts.path || '/'

	// Necessary for IPv6 addresses
	if (host && host.indexOf(':') !== -1)
		host = '[' + host + ']'

	// This may be a relative url. The browser should always be able to interpret it correctly.
	opts.url = (host ? (protocol + '//' + host) : '') + (port ? ':' + port : '') + path
	opts.method = (opts.method || 'GET').toUpperCase()
	opts.headers = opts.headers || {}

	// Also valid opts.auth, opts.mode

	var req = new ClientRequest(opts)
	if (cb)
		req.on('response', cb)
	return req
}

http.get = function get (opts, cb) {
	var req = http.request(opts, cb)
	req.end()
	return req
}

http.ClientRequest = ClientRequest
http.IncomingMessage = response.IncomingMessage

http.Agent = function () {}
http.Agent.defaultMaxSockets = 4

http.globalAgent = new http.Agent()

http.STATUS_CODES = statusCodes

http.METHODS = [
	'CHECKOUT',
	'CONNECT',
	'COPY',
	'DELETE',
	'GET',
	'HEAD',
	'LOCK',
	'M-SEARCH',
	'MERGE',
	'MKACTIVITY',
	'MKCOL',
	'MOVE',
	'NOTIFY',
	'OPTIONS',
	'PATCH',
	'POST',
	'PROPFIND',
	'PROPPATCH',
	'PURGE',
	'PUT',
	'REPORT',
	'SEARCH',
	'SUBSCRIBE',
	'TRACE',
	'UNLOCK',
	'UNSUBSCRIBE'
]
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream)

exports.writableStream = isFunction(global.WritableStream)

exports.abortController = isFunction(global.AbortController)

exports.blobConstructor = false
try {
	new Blob([new ArrayBuffer(1)])
	exports.blobConstructor = true
} catch (e) {}

// The xhr request to example.com may violate some restrictive CSP configurations,
// so if we're running in a browser that supports `fetch`, avoid calling getXHR()
// and assume support for certain features below.
var xhr
function getXHR () {
	// Cache the xhr value
	if (xhr !== undefined) return xhr

	if (global.XMLHttpRequest) {
		xhr = new global.XMLHttpRequest()
		// If XDomainRequest is available (ie only, where xhr might not work
		// cross domain), use the page location. Otherwise use example.com
		// Note: this doesn't actually make an http request.
		try {
			xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com')
		} catch(e) {
			xhr = null
		}
	} else {
		// Service workers don't have XHR
		xhr = null
	}
	return xhr
}

function checkTypeSupport (type) {
	var xhr = getXHR()
	if (!xhr) return false
	try {
		xhr.responseType = type
		return xhr.responseType === type
	} catch (e) {}
	return false
}

// For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
// Safari 7.1 appears to have fixed this bug.
var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined'
var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice)

// If fetch is supported, then arraybuffer will be supported too. Skip calling
// checkTypeSupport(), since that calls getXHR().
exports.arraybuffer = exports.fetch || (haveArrayBuffer && checkTypeSupport('arraybuffer'))

// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream')
exports.mozchunkedarraybuffer = !exports.fetch && haveArrayBuffer &&
	checkTypeSupport('moz-chunked-arraybuffer')

// If fetch is supported, then overrideMimeType will be supported too. Skip calling
// getXHR().
exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false)

exports.vbArray = isFunction(global.VBArray)

function isFunction (value) {
	return typeof value === 'function'
}

xhr = null // Help gc

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer, global) {var capability = __webpack_require__(21)
var inherits = __webpack_require__(4)
var stream = __webpack_require__(23)

var rStates = exports.readyStates = {
	UNSENT: 0,
	OPENED: 1,
	HEADERS_RECEIVED: 2,
	LOADING: 3,
	DONE: 4
}

var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode, fetchTimer) {
	var self = this
	stream.Readable.call(self)

	self._mode = mode
	self.headers = {}
	self.rawHeaders = []
	self.trailers = {}
	self.rawTrailers = []

	// Fake the 'close' event, but only once 'end' fires
	self.on('end', function () {
		// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
		process.nextTick(function () {
			self.emit('close')
		})
	})

	if (mode === 'fetch') {
		self._fetchResponse = response

		self.url = response.url
		self.statusCode = response.status
		self.statusMessage = response.statusText
		
		response.headers.forEach(function (header, key){
			self.headers[key.toLowerCase()] = header
			self.rawHeaders.push(key, header)
		})

		if (capability.writableStream) {
			var writable = new WritableStream({
				write: function (chunk) {
					return new Promise(function (resolve, reject) {
						if (self._destroyed) {
							reject()
						} else if(self.push(new Buffer(chunk))) {
							resolve()
						} else {
							self._resumeFetch = resolve
						}
					})
				},
				close: function () {
					global.clearTimeout(fetchTimer)
					if (!self._destroyed)
						self.push(null)
				},
				abort: function (err) {
					if (!self._destroyed)
						self.emit('error', err)
				}
			})

			try {
				response.body.pipeTo(writable).catch(function (err) {
					global.clearTimeout(fetchTimer)
					if (!self._destroyed)
						self.emit('error', err)
				})
				return
			} catch (e) {} // pipeTo method isn't defined. Can't find a better way to feature test this
		}
		// fallback for when writableStream or pipeTo aren't available
		var reader = response.body.getReader()
		function read () {
			reader.read().then(function (result) {
				if (self._destroyed)
					return
				if (result.done) {
					global.clearTimeout(fetchTimer)
					self.push(null)
					return
				}
				self.push(new Buffer(result.value))
				read()
			}).catch(function (err) {
				global.clearTimeout(fetchTimer)
				if (!self._destroyed)
					self.emit('error', err)
			})
		}
		read()
	} else {
		self._xhr = xhr
		self._pos = 0

		self.url = xhr.responseURL
		self.statusCode = xhr.status
		self.statusMessage = xhr.statusText
		var headers = xhr.getAllResponseHeaders().split(/\r?\n/)
		headers.forEach(function (header) {
			var matches = header.match(/^([^:]+):\s*(.*)/)
			if (matches) {
				var key = matches[1].toLowerCase()
				if (key === 'set-cookie') {
					if (self.headers[key] === undefined) {
						self.headers[key] = []
					}
					self.headers[key].push(matches[2])
				} else if (self.headers[key] !== undefined) {
					self.headers[key] += ', ' + matches[2]
				} else {
					self.headers[key] = matches[2]
				}
				self.rawHeaders.push(matches[1], matches[2])
			}
		})

		self._charset = 'x-user-defined'
		if (!capability.overrideMimeType) {
			var mimeType = self.rawHeaders['mime-type']
			if (mimeType) {
				var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/)
				if (charsetMatch) {
					self._charset = charsetMatch[1].toLowerCase()
				}
			}
			if (!self._charset)
				self._charset = 'utf-8' // best guess
		}
	}
}

inherits(IncomingMessage, stream.Readable)

IncomingMessage.prototype._read = function () {
	var self = this

	var resolve = self._resumeFetch
	if (resolve) {
		self._resumeFetch = null
		resolve()
	}
}

IncomingMessage.prototype._onXHRProgress = function () {
	var self = this

	var xhr = self._xhr

	var response = null
	switch (self._mode) {
		case 'text:vbarray': // For IE9
			if (xhr.readyState !== rStates.DONE)
				break
			try {
				// This fails in IE8
				response = new global.VBArray(xhr.responseBody).toArray()
			} catch (e) {}
			if (response !== null) {
				self.push(new Buffer(response))
				break
			}
			// Falls through in IE8	
		case 'text':
			try { // This will fail when readyState = 3 in IE9. Switch mode and wait for readyState = 4
				response = xhr.responseText
			} catch (e) {
				self._mode = 'text:vbarray'
				break
			}
			if (response.length > self._pos) {
				var newData = response.substr(self._pos)
				if (self._charset === 'x-user-defined') {
					var buffer = new Buffer(newData.length)
					for (var i = 0; i < newData.length; i++)
						buffer[i] = newData.charCodeAt(i) & 0xff

					self.push(buffer)
				} else {
					self.push(newData, self._charset)
				}
				self._pos = response.length
			}
			break
		case 'arraybuffer':
			if (xhr.readyState !== rStates.DONE || !xhr.response)
				break
			response = xhr.response
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'moz-chunked-arraybuffer': // take whole
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING || !response)
				break
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'ms-stream':
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING)
				break
			var reader = new global.MSStreamReader()
			reader.onprogress = function () {
				if (reader.result.byteLength > self._pos) {
					self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))))
					self._pos = reader.result.byteLength
				}
			}
			reader.onload = function () {
				self.push(null)
			}
			// reader.onerror = ??? // TODO: this
			reader.readAsArrayBuffer(response)
			break
	}

	// The ms-stream case handles end separately in reader.onload()
	if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
		self.push(null)
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(6).Buffer, __webpack_require__(0)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(27);
exports.Duplex = __webpack_require__(7);
exports.Transform = __webpack_require__(29);
exports.PassThrough = __webpack_require__(74);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__(9);
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(67);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(14).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(25);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(10).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(8);
util.inherits = __webpack_require__(4);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(68);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(69);
var destroyImpl = __webpack_require__(26);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(7);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(28).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(7);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(28).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14).EventEmitter;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(9);
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(9);
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(8);
util.inherits = __webpack_require__(4);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(73)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(25);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(10).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(26);

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(7);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(7);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(71).setImmediate, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(10).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(7);

/*<replacement>*/
var util = __webpack_require__(8);
util.inherits = __webpack_require__(4);
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(15),__webpack_require__(51)):undefined}(window,function(t,e){return function(t){function e(e){for(var n,o,i=e[0],a=e[1],s=0,c=[];s<i.length;s++)o=i[s],r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(u&&u(e);c.length;)c.shift()()}var n={},r={1:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=i);var a,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+({0:"jwt",2:"vendors~jwt"}[t]||t)+".js"}(t),a=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,s.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonpirma=window.webpackJsonpirma||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=a;return o(o.s=47)}([function(t,e){var n,r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return void 0!==n},e.toSJIS=function(t){return n(t)}},function(t,e,n){var r=n(9),o=n(10);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return n}}},function(t,e,n){"use strict";var r=n(3);i.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}();var o=i.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function i(t,e,n){return i.TYPED_ARRAY_SUPPORT||this instanceof i?"number"==typeof t?u(this,t):function(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer)return function(t,e,n,r){if(n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");var o;o=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);i.TYPED_ARRAY_SUPPORT?o.__proto__=i.prototype:o=c(t,o);return o}(t,e,n,r);if("string"==typeof e)return function(t,e){var n=0|f(e),r=s(t,n),o=r.write(e);o!==n&&(r=r.slice(0,o));return r}(t,e);return function(t,e){if(i.isBuffer(e)){var n=0|a(e.length),r=s(t,n);return 0===r.length?r:(e.copy(r,0,0,n),r)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||function(t){return t!=t}(e.length)?s(t,0):c(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return c(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}(this,t,e,n):new i(t,e,n)}function a(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function s(t,e){var n;return i.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(e)).__proto__=i.prototype:(null===(n=t)&&(n=new i(e)),n.length=e),n}function u(t,e){var n=s(t,e<0?0:0|a(e));if(!i.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)n[r]=0;return n}function c(t,e){for(var n=e.length<0?0:0|a(e.length),r=s(t,n),o=0;o<n;o+=1)r[o]=255&e[o];return r}function l(t,e){var n;e=e||1/0;for(var r=t.length,o=null,i=[],a=0;a<r;++a){if((n=t.charCodeAt(a))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function f(t){return i.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:l(t).length)}i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),i.prototype.write=function(t,e,n){void 0===e?(n=this.length,e=0):void 0===n&&"string"==typeof e?(n=this.length,e=0):isFinite(e)&&(e|=0,isFinite(n)?n|=0:n=void 0);var r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,e,n,r){return function(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}(l(e,t.length-n),t,n,r)}(this,t,e,n)},i.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),i.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=i.prototype;else{var o=e-t;n=new i(o,void 0);for(var a=0;a<o;++a)n[a]=this[a+t]}return n},i.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,a=r-n;if(this===t&&n<e&&e<r)for(o=a-1;o>=0;--o)t[o+e]=this[o+n];else if(a<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<a;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+a),e);return a},i.prototype.fill=function(t,e,n){if("string"==typeof t){if("string"==typeof e?(e=0,n=this.length):"string"==typeof n&&(n=this.length),1===t.length){var r=t.charCodeAt(0);r<256&&(t=r)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{var a=i.isBuffer(t)?t:new i(t),s=a.length;for(o=0;o<n-e;++o)this[o+e]=a[o%s]}return this},i.concat=function(t,e){if(!r(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s(null,0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var o=u(null,e),a=0;for(n=0;n<t.length;++n){var c=t[n];if(!i.isBuffer(c))throw new TypeError('"list" argument must be an Array of Buffers');c.copy(o,a),a+=c.length}return o},i.byteLength=f,i.prototype._isBuffer=!0,i.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.exports=i},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return n}}},function(t,e,n){n(19),t.exports=self.fetch.bind(self)},function(t,e,n){var r=n(20),o=n(22),i=n(39),a=n(40);function s(t,e,n,i,a){var s=[].slice.call(arguments,1),u=s.length,c="function"==typeof s[u-1];if(!c&&!r())throw new Error("Callback required as last argument");if(!c){if(u<1)throw new Error("Too few arguments provided");return 1===u?(n=e,e=i=void 0):2!==u||e.getContext||(i=n,n=e,e=void 0),new Promise(function(r,a){try{var s=o.create(n,i);r(t(s,e,i))}catch(t){a(t)}})}if(u<2)throw new Error("Too few arguments provided");2===u?(a=n,n=e,e=i=void 0):3===u&&(e.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=n,n=e,e=void 0));try{var l=o.create(n,i);a(null,t(l,e,i))}catch(t){a(t)}}e.create=o.create,e.toCanvas=s.bind(null,i.render),e.toDataURL=s.bind(null,i.renderToDataURL),e.toString=s.bind(null,function(t,e,n){return a.render(t,n)})},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(4),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},function(t,e){var n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",r="(?:(?![A-Z0-9 $%*+\\-./:]|"+(n=n.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=new RegExp(n,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(r,"g"),e.NUMERIC=new RegExp("[0-9]+","g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var o=new RegExp("^"+n+"$"),i=new RegExp("^[0-9]+$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return i.test(t)},e.testAlphanumeric=function(t){return a.test(t)}},function(t,e){function n(t){if("string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");var n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){var r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){for(var o=n.modules.size,i=n.modules.data,a=e.getScale(o,r),s=Math.floor((o+2*r.margin)*a),u=r.margin*a,c=[r.color.light,r.color.dark],l=0;l<s;l++)for(var f=0;f<s;f++){var A=4*(l*s+f),d=r.color.light;if(l>=u&&f>=u&&l<s-u&&f<s-u)d=c[i[Math.floor((l-u)/a)*o+Math.floor((f-u)/a)]?1:0];t[A++]=d.r,t[A++]=d.g,t[A++]=d.b,t[A]=d.a}}},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){t.exports="  <div class='irma-dialog'>\n    <div class='modal-content'>\n      <div class='modal-body'>\n        <div class='irma-page'>\n          <div class='irma-content'>\n            <img src='"+n(46)+"' class='irma-logo-top' alt='IRMA logo' id='irma-logo' />\n            <div class='irma-title' id='irma-title'>Disclose attributes</div>\n            <p id='irma-text'>A website requested that you disclose some IRMA attributes. Please scan the QR code with your phone.</p>\n            <div class='irma-option-container'>\n              <canvas id='modal-irmaqr' class='irma-option-box'></canvas>\n            </div>\n          </div>\n          <div class='irma-button-box'>\n            <button class='irma-button' id='irma-cancel-button'>Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],l=!1,f=-1;function A(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=s(A);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,a=void 0,s=function(t,e){h[o]=t,h[o+1]=e,2===(o+=2)&&(a?a(g):p())};var u="undefined"!=typeof window?window:void 0,c=u||{},l=c.MutationObserver||c.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),A="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var t=setTimeout;return function(){return t(g,1)}}var h=new Array(1e3);function g(){for(var t=0;t<o;t+=2){(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0}o=0}var p=void 0;function v(t,e){var n=this,r=new this.constructor(C);void 0===r[w]&&K(r);var o=n._state;if(o){var i=arguments[o-1];s(function(){return J(o,r,i,n._result)})}else T(n,r,t,e);return r}function m(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(C);return B(e,t),e}p=f?function(){return e.nextTick(g)}:l?function(){var t=0,e=new l(g),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():A?function(){var t=new MessageChannel;return t.port1.onmessage=g,function(){return t.port2.postMessage(0)}}():void 0===u?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(g)}:d()}catch(t){return d()}}():d();var w=Math.random().toString(36).substring(2);function C(){}var y=void 0,I=1,b=2,E={error:null};function S(t){try{return t.then}catch(t){return E.error=t,E}}function O(e,n,r){n.constructor===e.constructor&&r===v&&n.constructor.resolve===m?function(t,e){e._state===I?U(t,e._result):e._state===b?P(t,e._result):T(e,void 0,function(e){return B(t,e)},function(e){return P(t,e)})}(e,n):r===E?(P(e,E.error),E.error=null):void 0===r?U(e,n):t(r)?function(t,e,n){s(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?B(t,n):U(t,n))},function(e){r||(r=!0,P(t,e))},t._label);!r&&o&&(r=!0,P(t,o))},t)}(e,n,r):U(e,n)}function B(t,e){t===e?P(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?U(t,e):O(t,e,S(e))}function Q(t){t._onerror&&t._onerror(t._result),R(t)}function U(t,e){t._state===y&&(t._result=e,t._state=I,0!==t._subscribers.length&&s(R,t))}function P(t,e){t._state===y&&(t._state=b,t._result=e,s(Q,t))}function T(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+I]=n,o[i+b]=r,0===i&&t._state&&s(R,t)}function R(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,a=0;a<e.length;a+=3)r=e[a],o=e[a+n],r?J(n,r,o,i):o(i);t._subscribers.length=0}}function J(e,n,r,o){var i=t(r),a=void 0,s=void 0,u=void 0,c=void 0;if(i){if((a=function(t,e){try{return t(e)}catch(t){return E.error=t,E}}(r,o))===E?(c=!0,s=a.error,a.error=null):u=!0,n===a)return void P(n,new TypeError("A promises callback cannot return that same promise."))}else a=o,u=!0;n._state!==y||(i&&u?B(n,a):c?P(n,s):e===I?U(n,a):e===b&&P(n,a))}var M=0;function K(t){t[w]=M++,t._state=void 0,t._result=void 0,t._subscribers=[]}var x=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(C),this.promise[w]||K(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?U(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&U(this.promise,this._result))):P(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===y&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===m){var o=S(t);if(o===v&&t._state!==y)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===N){var i=new n(C);O(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===y&&(this._remaining--,t===b?P(r,n):this._result[e]=n),0===this._remaining&&U(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;T(t,void 0,function(t){return n._settledAt(I,e,t)},function(t){return n._settledAt(b,e,t)})},t}();var N=function(){function e(t){this[w]=M++,this._result=this._state=void 0,this._subscribers=[],C!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){B(t,e)},function(e){P(t,e)})}catch(e){P(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return N.prototype.then=v,N.all=function(t){return new x(this,t).promise},N.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},N.resolve=m,N.reject=function(t){var e=new this(C);return P(e,t),e},N._setScheduler=function(t){a=t},N._setAsap=function(t){s=t},N._asap=s,N.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=N},N.Promise=N,N})}).call(this,n(14),n(7))},function(t,e,n){"use strict";function r(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(void 0!==o&&null!==o)for(var i=Object.keys(Object(o)),a=0,s=i.length;a<s;a++){var u=i[a],c=Object.getOwnPropertyDescriptor(o,u);void 0!==c&&c.enumerable&&(n[u]=o[u])}}return n}t.exports={assign:r,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}}},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";n.r(e),n.d(e,"Headers",function(){return c}),n.d(e,"Request",function(){return p}),n.d(e,"Response",function(){return m}),n.d(e,"DOMException",function(){return C}),n.d(e,"fetch",function(){return y});var r={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(r.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r.iterable&&(e[Symbol.iterator]=function(){return e}),e}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function A(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:r.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():r.arrayBuffer&&r.blob&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(A)}),this.text=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=f(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(t,e){t=a(t),e=s(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=s(e)},c.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),u(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),u(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),u(t)},r.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function p(t,e){var n=(e=e||{}).body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=function(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},h.call(p.prototype),h.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];m.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})};var C=self.DOMException;try{new C}catch(t){(C=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),C.prototype.constructor=C}function y(t,e){return new Promise(function(n,o){var i=new p(t,e);if(i.signal&&i.signal.aborted)return o(new C("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:function(t){var e=new c;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;n(new m(e,t))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new C("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&r.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})}y.polyfill=!0,self.fetch||(self.fetch=y,self.Headers=c,self.Request=p,self.Response=m)},function(t,e,n){"use strict";var r=n(21);t.exports=function(){return"function"==typeof r.Promise&&"function"==typeof r.Promise.prototype.then}},function(t,e,n){"use strict";(function(e){t.exports="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e||this}).call(this,n(7))},function(t,e,n){var r=n(2),o=n(0),i=n(4),a=n(23),s=n(24),u=n(25),c=n(26),l=n(27),f=n(8),A=n(28),d=n(31),h=n(32),g=n(1),p=n(33),v=n(3);function m(t,e,n){var r,o,i=t.size,a=h.getEncodedBits(e,n);for(r=0;r<15;r++)o=1==(a>>r&1),r<6?t.set(r,8,o,!0):r<8?t.set(r+1,8,o,!0):t.set(i-15+r,8,o,!0),r<8?t.set(8,i-r-1,o,!0):r<9?t.set(8,15-r-1+1,o,!0):t.set(8,15-r-1,o,!0);t.set(i-8,8,1,!0)}function w(t,e,n){var i=new a;n.forEach(function(e){i.put(e.mode.bit,4),i.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(i)});var s=8*(o.getSymbolTotalCodewords(t)-f.getTotalCodewordsCount(t,e));for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);for(var u=(s-i.getLengthInBits())/8,c=0;c<u;c++)i.put(c%2?17:236,8);return function(t,e,n){for(var i=o.getSymbolTotalCodewords(e),a=f.getTotalCodewordsCount(e,n),s=i-a,u=f.getBlocksCount(e,n),c=u-i%u,l=Math.floor(i/u),d=Math.floor(s/u),h=d+1,g=l-d,p=new A(g),v=0,m=new Array(u),w=new Array(u),C=0,y=new r(t.buffer),I=0;I<u;I++){var b=I<c?d:h;m[I]=y.slice(v,v+b),w[I]=p.encode(m[I]),v+=b,C=Math.max(C,b)}var E,S,O=new r(i),B=0;for(E=0;E<C;E++)for(S=0;S<u;S++)E<m[S].length&&(O[B++]=m[S][E]);for(E=0;E<g;E++)for(S=0;S<u;S++)O[B++]=w[S][E];return O}(i,t,e)}function C(t,e,n,r){var i;if(v(t))i=p.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var a=e;if(!a){var f=p.rawSplit(t);a=d.getBestVersionForData(f,n)}i=p.fromString(t,a||40)}var A=d.getBestVersionForData(i,n);if(!A)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<A)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+A+".\n")}else e=A;var h=w(e,n,i),g=o.getSymbolSize(e),C=new s(g);return function(t,e){for(var n=t.size,r=c.getPositions(e),o=0;o<r.length;o++)for(var i=r[o][0],a=r[o][1],s=-1;s<=7;s++)if(!(i+s<=-1||n<=i+s))for(var u=-1;u<=7;u++)a+u<=-1||n<=a+u||(s>=0&&s<=6&&(0===u||6===u)||u>=0&&u<=6&&(0===s||6===s)||s>=2&&s<=4&&u>=2&&u<=4?t.set(i+s,a+u,!0,!0):t.set(i+s,a+u,!1,!0))}(C,e),function(t){for(var e=t.size,n=8;n<e-8;n++){var r=n%2==0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}(C),function(t,e){for(var n=u.getPositions(e),r=0;r<n.length;r++)for(var o=n[r][0],i=n[r][1],a=-2;a<=2;a++)for(var s=-2;s<=2;s++)-2===a||2===a||-2===s||2===s||0===a&&0===s?t.set(o+a,i+s,!0,!0):t.set(o+a,i+s,!1,!0)}(C,e),m(C,n,0),e>=7&&function(t,e){for(var n,r,o,i=t.size,a=d.getEncodedBits(e),s=0;s<18;s++)n=Math.floor(s/3),r=s%3+i-8-3,o=1==(a>>s&1),t.set(n,r,o,!0),t.set(r,n,o,!0)}(C,e),function(t,e){for(var n=t.size,r=-1,o=n-1,i=7,a=0,s=n-1;s>0;s-=2)for(6===s&&s--;;){for(var u=0;u<2;u++)if(!t.isReserved(o,s-u)){var c=!1;a<e.length&&(c=1==(e[a]>>>i&1)),t.set(o,s-u,c),-1==--i&&(a++,i=7)}if((o+=r)<0||n<=o){o-=r,r=-r;break}}}(C,h),isNaN(r)&&(r=l.getBestMask(C,m.bind(null,C,n))),l.applyMask(r,C),m(C,n,r),{modules:C,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var n,r,a=i.M;return void 0!==e&&(a=i.from(e.errorCorrectionLevel,i.M),n=d.from(e.version),r=l.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),C(t,n,a,r)}},function(t,e){function n(){this.buffer=[],this.length=0}n.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=n},function(t,e,n){var r=n(2);function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new r(t*t),this.data.fill(0),this.reservedBit=new r(t*t),this.reservedBit.fill(0)}o.prototype.set=function(t,e,n,r){var o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},o.prototype.get=function(t,e){return this.data[t*this.size+e]},o.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},o.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=o},function(t,e,n){var r=n(0).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var n=[],r=e.getRowColCoords(t),o=r.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||n.push([r[i],r[a]]);return n}},function(t,e,n){var r=n(0).getSymbolSize;e.getPositions=function(t){var e=r(t);return[[0,0],[e-7,0],[0,e-7]]}},function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n=3,r=3,o=40,i=10;function a(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,r=0,o=0,i=0,a=null,s=null,u=0;u<e;u++){o=i=0,a=s=null;for(var c=0;c<e;c++){var l=t.get(u,c);l===a?o++:(o>=5&&(r+=n+(o-5)),a=l,o=1),(l=t.get(c,u))===s?i++:(i>=5&&(r+=n+(i-5)),s=l,i=1)}o>=5&&(r+=n+(o-5)),i>=5&&(r+=n+(i-5))}return r},e.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*r},e.getPenaltyN3=function(t){for(var e=t.size,n=0,r=0,i=0,a=0;a<e;a++){r=i=0;for(var s=0;s<e;s++)r=r<<1&2047|t.get(a,s),s>=10&&(1488===r||93===r)&&n++,i=i<<1&2047|t.get(s,a),s>=10&&(1488===i||93===i)&&n++}return n*o},e.getPenaltyN4=function(t){for(var e=0,n=t.data.length,r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*i},e.applyMask=function(t,e){for(var n=e.size,r=0;r<n;r++)for(var o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,a(t,o,r))},e.getBestMask=function(t,n){for(var r=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<r;a++){n(a),e.applyMask(a,t);var s=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),s<i&&(i=s,o=a)}return o}},function(t,e,n){var r=n(2),o=n(29);function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new r(this.degree);e.fill(0);var n=r.concat([t,e],t.length+this.degree),i=o.mod(n,this.genPoly),a=this.degree-i.length;if(a>0){var s=new r(this.degree);return s.fill(0),i.copy(s,a),s}return i},t.exports=i},function(t,e,n){var r=n(2),o=n(30);e.mul=function(t,e){var n=new r(t.length+e.length-1);n.fill(0);for(var i=0;i<t.length;i++)for(var a=0;a<e.length;a++)n[i+a]^=o.mul(t[i],e[a]);return n},e.mod=function(t,e){for(var n=new r(t);n.length-e.length>=0;){for(var i=n[0],a=0;a<e.length;a++)n[a]^=o.mul(e[a],i);for(var s=0;s<n.length&&0===n[s];)s++;n=n.slice(s)}return n},e.generateECPolynomial=function(t){for(var n=new r([1]),i=0;i<t;i++)n=e.mul(n,[1,o.exp(i)]);return n}},function(t,e,n){var r=n(2),o=new r(512),i=new r(256);!function(){for(var t=1,e=0;e<255;e++)o[e]=t,i[t]=e,256&(t<<=1)&&(t^=285);for(e=255;e<512;e++)o[e]=o[e-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},e.exp=function(t){return o[t]},e.mul=function(t,e){return 0===t||0===e?0:o[i[t]+i[e]]}},function(t,e,n){var r=n(0),o=n(8),i=n(4),a=n(1),s=n(9),u=n(3),c=r.getBCHDigit(7973);function l(t,e){return a.getCharCountIndicator(t,e)+4}function f(t,e){var n=0;return t.forEach(function(t){var r=l(t.mode,e);n+=r+t.getBitsLength()}),n}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===n&&(n=a.BYTE);var i=8*(r.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(n===a.MIXED)return i;var u=i-l(n,t);switch(n){case a.NUMERIC:return Math.floor(u/10*3);case a.ALPHANUMERIC:return Math.floor(u/11*2);case a.KANJI:return Math.floor(u/13);case a.BYTE:default:return Math.floor(u/8)}},e.getBestVersionForData=function(t,n){var r,o=i.from(n,i.M);if(u(t)){if(t.length>1)return function(t,n){for(var r=1;r<=40;r++)if(f(t,r)<=e.getCapacity(r,n,a.MIXED))return r}(t,o);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,n,r){for(var o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}(r.mode,r.getLength(),o)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;r.getBCHDigit(e)-c>=0;)e^=7973<<r.getBCHDigit(e)-c;return t<<12|e}},function(t,e,n){var r=n(0),o=r.getBCHDigit(1335);e.getEncodedBits=function(t,e){for(var n=t.bit<<3|e,i=n<<10;r.getBCHDigit(i)-o>=0;)i^=1335<<r.getBCHDigit(i)-o;return 21522^(n<<10|i)}},function(t,e,n){var r=n(1),o=n(34),i=n(35),a=n(36),s=n(37),u=n(10),c=n(0),l=n(38);function f(t){return unescape(encodeURIComponent(t)).length}function A(t,e,n){for(var r,o=[];null!==(r=t.exec(n));)o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function d(t){var e,n,o=A(u.NUMERIC,r.NUMERIC,t),i=A(u.ALPHANUMERIC,r.ALPHANUMERIC,t);return c.isKanjiModeEnabled()?(e=A(u.BYTE,r.BYTE,t),n=A(u.KANJI,r.KANJI,t)):(e=A(u.BYTE_KANJI,r.BYTE,t),n=[]),o.concat(i,e,n).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function h(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return s.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function g(t,e){var n,u=r.getBestModeForData(t);if((n=r.from(e,u))!==r.BYTE&&n.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(u));switch(n!==r.KANJI||c.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new s(t);case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(g(e,null)):e.data&&t.push(g(e.data,e.mode)),t},[])},e.fromString=function(t,n){for(var o=function(t,e){for(var n={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var s=t[a],u=[],c=0;c<s.length;c++){var l=s[c],f=""+a+c;u.push(f),n[f]={node:l,lastCount:0},o[f]={};for(var A=0;A<i.length;A++){var d=i[A];n[d]&&n[d].node.mode===l.mode?(o[d][f]=h(n[d].lastCount+l.length,l.mode)-h(n[d].lastCount,l.mode),n[d].lastCount+=l.length):(n[d]&&(n[d].lastCount=l.length),o[d][f]=h(l.length,l.mode)+4+r.getCharCountIndicator(l.mode,e))}}i=u}for(A=0;A<i.length;A++)o[i[A]].end=0;return{map:o,table:n}}(function(t){for(var e=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:f(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:f(o.data)}])}}return e}(d(t,c.isKanjiModeEnabled())),n),i=l.find_path(o.map,"start","end"),a=[],s=1;s<i.length-1;s++)a.push(o.table[i[s]].node);return e.fromArray(function(t){return t.reduce(function(t,e){var n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}(a))},e.rawSplit=function(t){return e.fromArray(d(t,c.isKanjiModeEnabled()))}},function(t,e,n){var r=n(1);function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);var o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},t.exports=o},function(t,e,n){var r=n(1),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var n=45*o.indexOf(this.data[e]);n+=o.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},function(t,e,n){var r=n(2),o=n(1);function i(t){this.mode=o.BYTE,this.data=new r(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i},function(t,e,n){var r=n(1),o=n(0);function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var n=o.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},function(t,e,n){"use strict";var r={single_source_shortest_paths:function(t,e,n){var o={},i={};i[e]=0;var a,s,u,c,l,f,A,d=r.PriorityQueue.make();for(d.push(e,0);!d.empty();)for(u in s=(a=d.pop()).value,c=a.cost,l=t[s]||{})l.hasOwnProperty(u)&&(f=c+l[u],A=i[u],(void 0===i[u]||A>f)&&(i[u]=f,d.push(u,f),o[u]=s));if(void 0!==n&&void 0===i[n]){var h=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(h)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var o=r.single_source_shortest_paths(t,e,n);return r.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,o={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},function(t,e,n){var r=n(11);e.render=function(t,e,n){var o=n,i=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=r.getOptions(o);var a=r.getImageWidth(t.modules.size,o),s=i.getContext("2d"),u=s.createImageData(a,a);return r.qrToImageData(u.data,t,o),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(s,i,a),s.putImageData(u,0,0),i},e.renderToDataURL=function(t,n,r){var o=r;void 0!==o||n&&n.getContext||(o=n,n=void 0),o||(o={});var i=e.render(t,n,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}},function(t,e,n){var r=n(11);function o(t,e){var n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function i(t,e,n){var r=t+e;return void 0!==n&&(r+=" "+n),r}e.render=function(t,e,n){var a=r.getOptions(e),s=t.modules.size,u=t.modules.data,c=s+2*a.margin,l=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",f="<path "+o(a.color.dark,"stroke")+' d="'+function(t,e,n){for(var r="",o=0,a=!1,s=0,u=0;u<t.length;u++){var c=Math.floor(u%e),l=Math.floor(u/e);c||a||(a=!0),t[u]?(s++,u>0&&c>0&&t[u-1]||(r+=a?i("M",c+n,.5+l+n):i("m",o,0),o=0,a=!1),c+1<e&&t[u+1]||(r+=i("h",s),s=0)):o++}return r}(u,s,a.margin)+'"/>',A='viewBox="0 0 '+c+" "+c+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+A+' shape-rendering="crispEdges">'+l+f+"</svg>\n";return"function"==typeof n&&n(null,d),d}},function(t,e,n){var r=n(42);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(43)(!1)).push([t.i,"#irma-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%); }\n  #irma-modal #modal-irmaqr {\n    width: 230px;\n    height: 230px; }\n  #irma-modal .modal-content {\n    font: 100% Ubuntu, sans-serif;\n    font-size: 14px;\n    background-color: #004C92;\n    padding: 10px 10px 30px 10px; }\n  #irma-modal p#irma-text {\n    color: #004C92;\n    height: 75px;\n    line-height: 130%; }\n  #irma-modal .irma-page {\n    margin: 0px auto; }\n  #irma-modal .irma-content {\n    background-color: white;\n    position: relative;\n    left: 0px;\n    width: 330px;\n    margin: 40px;\n    box-sizing: content-box;\n    border-style: solid;\n    border-width: 0px;\n    border-color: #004C92;\n    border-radius: 5px;\n    padding: 20px;\n    font-weight: 200;\n    z-index: 1; }\n  #irma-modal .irma-button-box {\n    width: 370px;\n    box-sizing: content-box;\n    padding-top: 5px;\n    margin-left: 40px;\n    margin-top: -40px;\n    margin-right: 40px;\n    text-align: right; }\n  #irma-modal .irma-logo-top {\n    position: absolute;\n    left: -40px;\n    top: -40px;\n    width: 160px;\n    box-sizing: content-box;\n    z-index: 2; }\n  #irma-modal .irma-title {\n    position: absolute;\n    top: -30px;\n    right: 0px;\n    height: 40px;\n    box-sizing: content-box;\n    text-align: right;\n    color: white;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 20px; }\n  #irma-modal .irma-option-container {\n    text-align: center;\n    margin: 30px auto; }\n  #irma-modal .irma-option-box {\n    width: 230px;\n    height: 230px;\n    box-sizing: content-box;\n    border-style: solid;\n    border-width: medium;\n    border-color: #d0d0d0;\n    border-radius: 6px;\n    padding: 6px;\n    display: inline-block;\n    margin: 5px; }\n  #irma-modal .irma-button {\n    height: 40px;\n    display: inline-block;\n    box-sizing: content-box;\n    margin: 0;\n    padding: 0 0.5em;\n    color: white;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 16px;\n    text-align: center;\n    background-color: #888;\n    border-radius: 5px;\n    border: 0px none;\n    cursor: pointer; }\n  #irma-modal #irma-text {\n    text-align: justify;\n    padding-left: 125px; }\n  #irma-modal .irma-dialog {\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\n    -webkit-transform: translateY(-30%);\n    -moz-transform: translateY(-30%);\n    -ms-transform: translateY(-30%);\n    transform: translateY(-30%);\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s; }\n  #irma-modal.irma-show .irma-dialog {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n\n.irma-show {\n  visibility: visible !important; }\n\n.irma-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.3s; }\n\n.irma-show ~ .irma-overlay {\n  opacity: 1;\n  visibility: visible; }\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,s=0,u=[],c=n(45);function l(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(p(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(p(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function A(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,n);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return g(e,t.attrs),A(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function p(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=a||(a=h(e)),r=m.bind(null,n,u,!1),o=m.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),A(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return l(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&l(f(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAB0FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIj4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOS0wOC0wNlQxMTowNDo0MiswMjowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDYtMTdUMDg6NDE6NTArMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wOC0wNlQxMTowNDo0MiswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo3YzRlMmI2NC05MjMwLTQ5MjktOTc1Ni03YzM0ZWQ3ZGM4MTk8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDgtMDZUMTE6MDQ6NDIrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6N2M0ZTJiNjQtOTIzMC00OTI5LTk3NTYtN2MzNGVkN2RjODE5PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo3YzRlMmI2NC05MjMwLTQ5MjktOTc1Ni03YzM0ZWQ3ZGM4MTk8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4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"},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),i=n(6),a=n.n(i),s=(n(41),n(12)),u=n.n(s),c=n(13),l=n.n(c),f={en:{Common:{WaitData:"Waiting for data...",Cancel:"Cancel"},Messages:{FollowInstructions:"Please follow the instructions in your IRMA app"},Sign:{Title:"signature request",Body:"A website requests that you sign a message using some of your IRMA attributes. Please scan the QR code with your IRMA app."},Verify:{Title:"attribute request",Body:"A website requests that you disclose some of your IRMA attributes. Please scan the QR code with your IRMA app."},Issue:{Title:"attribute issuance",Body:"A website wishes to issue IRMA attributes to you. Please scan the QR code with your IRMA app."}},nl:{Common:{WaitData:"Wachten op data...",Cancel:"Annuleren"},Messages:{FollowInstructions:"Volg de instructies in uw IRMA app."},Sign:{Title:"verzoek om te tekenen",Body:"Een website vraagt u een bericht te ondertekenen met enkele van uw IRMA attributen. Scan de QR code met uw IRMA app."},Verify:{Title:"verzoek om attributen",Body:"Een website vraagt u enkele van uw IRMA attributen te tonen. Scan de QR code met uw IRMA app."},Issue:{Title:"attributenuitgifte",Body:"Een website wil u enkele IRMA attributen geven. Scan de QR code met uw IRMA app."}}};function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"SessionStatus",function(){return p}),n.d(e,"setLoggingState",function(){return w}),n.d(e,"handleSession",function(){return C}),n.d(e,"setupSession",function(){return y}),n.d(e,"finishSession",function(){return I}),n.d(e,"startSession",function(){return b}),n.d(e,"signSessionRequest",function(){return E}),n.d(e,"waitConnected",function(){return S}),n.d(e,"waitDone",function(){return O}),n.d(e,"UserAgent",function(){return U}),n.d(e,"detectUserAgent",function(){return x}),n(15).polyfill(),n(16).polyfill();var d="undefined"!=typeof window,h=d?void 0:n(17),g=d?void 0:n(18),p={Initialized:"INITIALIZED",Connected:"CONNECTED",Cancelled:"CANCELLED",Done:"DONE",Timeout:"TIMEOUT"},v={method:"popup",element:"irmaqr",language:"en",showConnectedIcon:!0,returnStatus:p.Done,server:"",token:"",resultJwt:!1,legacyResultJwt:!1,disableMobile:!1,qrterminalOptions:{},qrterminalDisplay:console.log},m=!0;function w(t){m=t}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};return y(t,n,e).then(function(t){return I(t,n)})}function y(t,e,n){return e.qr=t,e.done=!1,Promise.resolve().then(function(){switch(J("Session started",e.qr),e.options=function(t){J("Options:",t);var e=Object.assign({},v,t);e.userAgent=x(),d&&!e.disableMobile&&e.userAgent!==U.Desktop&&("mobile"!==e.method&&J("On mobile; using method mobile instead of "+e.method),e.method="mobile");switch(e.method){case"url":break;case"mobile":if(e.returnStatus!==p.Done)throw new Error("On mobile sessions, returnStatus must be Done");break;case"popup":if(!d)throw new Error("Cannot use method popup in node");if(!(e.language in f))throw new Error("Unsupported language, currently supported: "+Object.keys(f).join(", "));e.element="modal-irmaqr",e.returnStatus=p.Done;break;case"canvas":if(!d)throw new Error("Cannot use method canvas in node");if("string"!=typeof e.element||""===e.element)throw new Error("canvas method requires `element` to be provided in options");break;case"console":if(d)throw new Error("Cannot use console method in browser");break;default:throw new Error("Unsupported method")}if("string"!=typeof e.server)throw new Error("server must be a string (URL)");if(e.server.length>0&&e.returnStatus!==p.Done)throw new Error("If server option is used, returnStatus option must be SessionStatus.Done");if(e.server.length>0&&("string"!=typeof e.token||0===e.token.length))throw new Error("if server option is used, providing token option is required");if(e.resultJwt&&0===e.server.length)throw new Error("resultJwt option was enabled but no server to retrieve result from was provided");if(e.resultJwt&&e.legacyResultJwt)throw new Error("resultJwt and legacyResultJwt options cannot be simultaneously enabled");return e}(n),e.method=e.options.method,e.method){case"url":return e.done=!0,a.a.toDataURL(JSON.stringify(e.qr));case"mobile":!function(t,e){var n="qr/json/"+encodeURIComponent(JSON.stringify(t));if(e===U.Android){var r="intent://"+n+"#Intent;package=org.irmacard.cardemu;scheme=cardemu;l.timestamp="+Date.now()+";S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dorg.irmacard.cardemu;end";J("Navigating:",r),window.location.href=r}else e===U.iOS&&(J("Navigating:","irma://"+n),window.location.href="irma://"+n)}(t,e.options.userAgent);break;case"popup":!function(t,e){(function(){if(!d||window.document.getElementById("irma-modal"))return;var t=window.document.createElement("div");t.id="irma-modal",t.innerHTML=l.a,window.document.body.appendChild(t);var e=window.document.createElement("div");e.classList.add("irma-overlay"),window.document.body.appendChild(e),t.offsetHeight})(),function(t,e){K("irma-cancel-button","Common.Cancel",e),K("irma-title",M[t]+".Title",e),K("irma-text",M[t]+".Body",e)}(t.irmaqr,e),window.document.getElementById("irma-modal").classList.add("irma-show");var n=window.document.getElementById("irma-cancel-button");n.addEventListener("click",function e(){o()(t.u,{method:"DELETE"}),n.removeEventListener("click",e),R()})}(t,e.options.language);case"canvas":if(e.canvas=window.document.getElementById(e.options.element),!e.canvas)return Promise.reject("Specified canvas not found in DOM");!function(t,e){a.a.toCanvas(t,JSON.stringify(e),{width:"230",margin:"1"},function(t){if(t)throw t})}(e.canvas,e.qr);break;case"console":h.generate(JSON.stringify(e.qr),e.options.qrterminalOptions,e.options.qrterminalDisplay)}return e.options.returnStatus===p.Initialized?(e.done=!0,p.Initialized):S(e.qr.u)}).catch(function(t){throw J("Error or unexpected status",t),"popup"===e.method&&R(),t})}function I(t,e){return Promise.resolve().then(function(){if(e.done)return t;switch(J("Session state changed",t,e.qr.u),e.method){case"popup":K("irma-text","Messages.FollowInstructions",e.options.language);case"canvas":!function(t,e){var n=t.getContext("2d");if(n.clearRect(0,0,t.width,t.height),e){var r=window.devicePixelRatio;t.width=230*r,t.height=230*r,n.scale(r,r);var o=new Image;o.onload=function(){return n.drawImage(o,75.5,40,79,150)},o.src=u.a}}(e.canvas,e.options.showConnectedIcon)}return e.options.returnStatus===p.Connected?(e.done=!0,p.Connected):O(e.qr.u)}).then(function(t){if(e.done)return t;if("popup"===e.method&&R(),0===e.options.server.length)return e.done=!0,t;var n=e.options.legacyResultJwt?"getproof":"result-jwt",r=e.options.resultJwt||e.options.legacyResultJwt?n:"result";return T("".concat(e.options.server,"/session/").concat(e.options.token,"/").concat(r))}).then(function(t){return e.done?t:e.options.resultJwt||e.options.legacyResultJwt?t.text():t.json()}).catch(function(t){throw J("Error or unexpected status",t),"popup"===e.method&&R(),t})}function b(t,e,n,r,o){return Promise.resolve().then(function(){return"object"===A(e)?"publickey"==n||"hmac"==n?E(e,n,r,o):JSON.stringify(e):e}).then(function(e){var o={};switch(n){case void 0:case"none":o["Content-Type"]="application/json";break;case"token":o.Authorization=r,o["Content-Type"]="application/json";break;case"publickey":case"hmac":o["Content-Type"]="text/plain";break;default:throw new Error("Unsupported authentication method")}return T("".concat(t,"/session"),{method:"POST",headers:o,body:e})}).then(function(t){return t.json()})}function E(t,e,r,o){return Promise.all([n.e(2),n.e(0)]).then(n.t.bind(null,231,7)).then(function(n){var i,a;if(t.type?(i=t.type,a={request:t}):t.request&&(i=t.request.type,a=t),"disclosing"!==i&&"issuing"!==i&&"signing"!==i)throw new Error("Not an IRMA session request");if("publickey"!==e&&"hmac"!==e)throw new Error("Unsupported signing method");var s={algorithm:"publickey"===e?"RS256":"HS256",issuer:o,subject:{disclosing:"verification_request",issuing:"issue_request",signing:"signature_request"}[i]};return n.sign(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},{disclosing:"sprequest",issuing:"iprequest",signing:"absrequest"}[i],a),r,s)})}function S(t){return B(t,p.Initialized).then(function(t){return t!==p.Connected?Promise.reject(t):t})}function O(t){return B(t,p.Connected).then(function(t){return t!==p.Done?Promise.reject(t):t})}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.Initialized;return new Promise(function(n,r){var o=d?window.EventSource:g;if(!o)return J("No support for EventSource, fallback to polling"),void Q("".concat(t,"/status"),e,n,r);var i=new o("".concat(t,"/statusevents")),a=setTimeout(function(){return r("no open message received")},500);i.onopen=function(){clearTimeout(a)},i.onmessage=function(t){clearTimeout(a),i.close(),n(JSON.parse(t.data))},i.onerror=function(t){clearTimeout(a),J("Received server event error",t),i.close(),r(t)}}).catch(function(n){return J("error in server sent event, falling back to polling:",n),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.Initialized;return new Promise(function(n,r){return Q(t,e,n,r)})}("".concat(t,"/status"),e)})}var Q=function t(e,n,r,o){return T(e).then(function(t){return t.json()}).then(function(i){return i!==n?r(i):setTimeout(t,500,e,n,r,o)}).catch(function(t){return o(t)})},U={Desktop:"Desktop",Android:"Android",iOS:"iOS"};function P(t){return t.ok?t:t.text().then(function(e){throw function(){m&&console.warn.apply(console,arguments)}("Server returned error:",e),new Error(t.statusText)})}function T(){return o.a.apply(null,arguments).then(P)}function R(){d&&window.document.getElementById("irma-modal")&&window.document.getElementById("irma-modal").classList.remove("irma-show")}function J(){m&&console.log.apply(console,arguments)}var M={disclosing:"Verify",issuing:"Issue",signing:"Sign"};function K(t,e,n){window.document.getElementById(t).innerText=function(t,e){var n=t.split("."),r=f[e];for(var o in n){if(void 0===r)break;r=r[n[o]]}if(void 0===r)for(var i in r=f[v.language],n){if(void 0===r)break;r=r[n[i]]}return void 0===r?"":r}(e,n)}function x(){return d?window.MSInputMethodContext&&document.documentMode?(J("Detected IE11"),U.Desktop):/Android/i.test(window.navigator.userAgent)?(J("Detected Android"),U.Android):/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream?(J("Detected iOS"),U.iOS):(J("Neither Android nor iOS, assuming desktop"),U.Desktop):null}}])});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var Utils = __webpack_require__(2)
var ECLevel = __webpack_require__(12)
var BitBuffer = __webpack_require__(33)
var BitMatrix = __webpack_require__(34)
var AlignmentPattern = __webpack_require__(35)
var FinderPattern = __webpack_require__(36)
var MaskPattern = __webpack_require__(37)
var ECCode = __webpack_require__(16)
var ReedSolomonEncoder = __webpack_require__(38)
var Version = __webpack_require__(41)
var FormatInfo = __webpack_require__(42)
var Mode = __webpack_require__(3)
var Segments = __webpack_require__(43)
var isArray = __webpack_require__(11)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__(2).getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__(2).getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var Polynomial = __webpack_require__(39)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var GF = __webpack_require__(40)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)

var EXP_TABLE
var LOG_TABLE

if (Buffer.alloc) {
  EXP_TABLE = Buffer.alloc(512)
  LOG_TABLE = Buffer.alloc(256)
} else {
  EXP_TABLE = new Buffer(512)
  LOG_TABLE = new Buffer(256)
}
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2)
var ECCode = __webpack_require__(16)
var ECLevel = __webpack_require__(12)
var Mode = __webpack_require__(3)
var VersionCheck = __webpack_require__(17)
var isArray = __webpack_require__(11)

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2)

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)
var NumericData = __webpack_require__(44)
var AlphanumericData = __webpack_require__(45)
var ByteData = __webpack_require__(46)
var KanjiData = __webpack_require__(47)
var Regex = __webpack_require__(18)
var Utils = __webpack_require__(2)
var dijkstra = __webpack_require__(48)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var Mode = __webpack_require__(3)

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(3)
var Utils = __webpack_require__(2)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(19)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(19)

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {var original = __webpack_require__(55)
var parse = __webpack_require__(13).parse
var events = __webpack_require__(14)
var https = __webpack_require__(65)
var http = __webpack_require__(20)
var util = __webpack_require__(78)

var httpsOptions = [
  'pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers',
  'rejectUnauthorized', 'secureProtocol', 'servername', 'checkServerIdentity'
]

var bom = [239, 187, 191]
var colon = 58
var space = 32
var lineFeed = 10
var carriageReturn = 13

function hasBom (buf) {
  return bom.every(function (charCode, index) {
    return buf[index] === charCode
  })
}

/**
 * Creates a new EventSource object
 *
 * @param {String} url the URL to which to connect
 * @param {Object} [eventSourceInitDict] extra init params. See README for details.
 * @api public
 **/
function EventSource (url, eventSourceInitDict) {
  var readyState = EventSource.CONNECTING
  Object.defineProperty(this, 'readyState', {
    get: function () {
      return readyState
    }
  })

  Object.defineProperty(this, 'url', {
    get: function () {
      return url
    }
  })

  var self = this
  self.reconnectInterval = 1000

  function onConnectionClosed (message) {
    if (readyState === EventSource.CLOSED) return
    readyState = EventSource.CONNECTING
    _emit('error', new Event('error', {message: message}))

    // The url may have been changed by a temporary
    // redirect. If that's the case, revert it now.
    if (reconnectUrl) {
      url = reconnectUrl
      reconnectUrl = null
    }
    setTimeout(function () {
      if (readyState !== EventSource.CONNECTING) {
        return
      }
      connect()
    }, self.reconnectInterval)
  }

  var req
  var lastEventId = ''
  if (eventSourceInitDict && eventSourceInitDict.headers && eventSourceInitDict.headers['Last-Event-ID']) {
    lastEventId = eventSourceInitDict.headers['Last-Event-ID']
    delete eventSourceInitDict.headers['Last-Event-ID']
  }

  var discardTrailingNewline = false
  var data = ''
  var eventName = ''

  var reconnectUrl = null

  function connect () {
    var options = parse(url)
    var isSecure = options.protocol === 'https:'
    options.headers = { 'Cache-Control': 'no-cache', 'Accept': 'text/event-stream' }
    if (lastEventId) options.headers['Last-Event-ID'] = lastEventId
    if (eventSourceInitDict && eventSourceInitDict.headers) {
      for (var i in eventSourceInitDict.headers) {
        var header = eventSourceInitDict.headers[i]
        if (header) {
          options.headers[i] = header
        }
      }
    }

    // Legacy: this should be specified as `eventSourceInitDict.https.rejectUnauthorized`,
    // but for now exists as a backwards-compatibility layer
    options.rejectUnauthorized = !(eventSourceInitDict && !eventSourceInitDict.rejectUnauthorized)

    // If specify http proxy, make the request to sent to the proxy server,
    // and include the original url in path and Host headers
    var useProxy = eventSourceInitDict && eventSourceInitDict.proxy
    if (useProxy) {
      var proxy = parse(eventSourceInitDict.proxy)
      isSecure = proxy.protocol === 'https:'

      options.protocol = isSecure ? 'https:' : 'http:'
      options.path = url
      options.headers.Host = options.host
      options.hostname = proxy.hostname
      options.host = proxy.host
      options.port = proxy.port
    }

    // If https options are specified, merge them into the request options
    if (eventSourceInitDict && eventSourceInitDict.https) {
      for (var optName in eventSourceInitDict.https) {
        if (httpsOptions.indexOf(optName) === -1) {
          continue
        }

        var option = eventSourceInitDict.https[optName]
        if (option !== undefined) {
          options[optName] = option
        }
      }
    }

    // Pass this on to the XHR
    if (eventSourceInitDict && eventSourceInitDict.withCredentials !== undefined) {
      options.withCredentials = eventSourceInitDict.withCredentials
    }

    req = (isSecure ? https : http).request(options, function (res) {
      // Handle HTTP errors
      if (res.statusCode === 500 || res.statusCode === 502 || res.statusCode === 503 || res.statusCode === 504) {
        _emit('error', new Event('error', {status: res.statusCode, message: res.statusMessage}))
        onConnectionClosed()
        return
      }

      // Handle HTTP redirects
      if (res.statusCode === 301 || res.statusCode === 307) {
        if (!res.headers.location) {
          // Server sent redirect response without Location header.
          _emit('error', new Event('error', {status: res.statusCode, message: res.statusMessage}))
          return
        }
        if (res.statusCode === 307) reconnectUrl = url
        url = res.headers.location
        process.nextTick(connect)
        return
      }

      if (res.statusCode !== 200) {
        _emit('error', new Event('error', {status: res.statusCode, message: res.statusMessage}))
        return self.close()
      }

      readyState = EventSource.OPEN
      res.on('close', function () {
        res.removeAllListeners('close')
        res.removeAllListeners('end')
        onConnectionClosed()
      })

      res.on('end', function () {
        res.removeAllListeners('close')
        res.removeAllListeners('end')
        onConnectionClosed()
      })
      _emit('open', new Event('open'))

      // text/event-stream parser adapted from webkit's
      // Source/WebCore/page/EventSource.cpp
      var isFirst = true
      var buf
      res.on('data', function (chunk) {
        buf = buf ? Buffer.concat([buf, chunk]) : chunk
        if (isFirst && hasBom(buf)) {
          buf = buf.slice(bom.length)
        }

        isFirst = false
        var pos = 0
        var length = buf.length

        while (pos < length) {
          if (discardTrailingNewline) {
            if (buf[pos] === lineFeed) {
              ++pos
            }
            discardTrailingNewline = false
          }

          var lineLength = -1
          var fieldLength = -1
          var c

          for (var i = pos; lineLength < 0 && i < length; ++i) {
            c = buf[i]
            if (c === colon) {
              if (fieldLength < 0) {
                fieldLength = i - pos
              }
            } else if (c === carriageReturn) {
              discardTrailingNewline = true
              lineLength = i - pos
            } else if (c === lineFeed) {
              lineLength = i - pos
            }
          }

          if (lineLength < 0) {
            break
          }

          parseEventStreamLine(buf, pos, fieldLength, lineLength)

          pos += lineLength + 1
        }

        if (pos === length) {
          buf = void 0
        } else if (pos > 0) {
          buf = buf.slice(pos)
        }
      })
    })

    req.on('error', function (err) {
      onConnectionClosed(err.message)
    })

    if (req.setNoDelay) req.setNoDelay(true)
    req.end()
  }

  connect()

  function _emit () {
    if (self.listeners(arguments[0]).length > 0) {
      self.emit.apply(self, arguments)
    }
  }

  this._close = function () {
    if (readyState === EventSource.CLOSED) return
    readyState = EventSource.CLOSED
    if (req.abort) req.abort()
    if (req.xhr && req.xhr.abort) req.xhr.abort()
  }

  function parseEventStreamLine (buf, pos, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        var type = eventName || 'message'
        _emit(type, new MessageEvent(type, {
          data: data.slice(0, -1), // remove trailing newline
          lastEventId: lastEventId,
          origin: original(url)
        }))
        data = ''
      }
      eventName = void 0
    } else if (fieldLength > 0) {
      var noValue = fieldLength < 0
      var step = 0
      var field = buf.slice(pos, pos + (noValue ? lineLength : fieldLength)).toString()

      if (noValue) {
        step = lineLength
      } else if (buf[pos + fieldLength + 1] !== space) {
        step = fieldLength + 1
      } else {
        step = fieldLength + 2
      }
      pos += step

      var valueLength = lineLength - step
      var value = buf.slice(pos, pos + valueLength).toString()

      if (field === 'data') {
        data += value + '\n'
      } else if (field === 'event') {
        eventName = value
      } else if (field === 'id') {
        lastEventId = value
      } else if (field === 'retry') {
        var retry = parseInt(value, 10)
        if (!Number.isNaN(retry)) {
          self.reconnectInterval = retry
        }
      }
    }
  }
}

module.exports = EventSource

util.inherits(EventSource, events.EventEmitter)
EventSource.prototype.constructor = EventSource; // make stacktraces readable

['open', 'error', 'message'].forEach(function (method) {
  Object.defineProperty(EventSource.prototype, 'on' + method, {
    /**
     * Returns the current listener
     *
     * @return {Mixed} the set function or undefined
     * @api private
     */
    get: function get () {
      var listener = this.listeners(method)[0]
      return listener ? (listener._listener ? listener._listener : listener) : undefined
    },

    /**
     * Start listening for events
     *
     * @param {Function} listener the listener
     * @return {Mixed} the set function or undefined
     * @api private
     */
    set: function set (listener) {
      this.removeAllListeners(method)
      this.addEventListener(method, listener)
    }
  })
})

/**
 * Ready states
 */
Object.defineProperty(EventSource, 'CONNECTING', {enumerable: true, value: 0})
Object.defineProperty(EventSource, 'OPEN', {enumerable: true, value: 1})
Object.defineProperty(EventSource, 'CLOSED', {enumerable: true, value: 2})

EventSource.prototype.CONNECTING = 0
EventSource.prototype.OPEN = 1
EventSource.prototype.CLOSED = 2

/**
 * Closes the connection, if one is made, and sets the readyState attribute to 2 (closed)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource/close
 * @api public
 */
EventSource.prototype.close = function () {
  this._close()
}

/**
 * Emulates the W3C Browser based WebSocket interface using addEventListener.
 *
 * @param {String} type A string representing the event type to listen out for
 * @param {Function} listener callback
 * @see https://developer.mozilla.org/en/DOM/element.addEventListener
 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
 * @api public
 */
EventSource.prototype.addEventListener = function addEventListener (type, listener) {
  if (typeof listener === 'function') {
    // store a reference so we can return the original function again
    listener._listener = listener
    this.on(type, listener)
  }
}

/**
 * Emulates the W3C Browser based WebSocket interface using dispatchEvent.
 *
 * @param {Event} event An event to be dispatched
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
 * @api public
 */
EventSource.prototype.dispatchEvent = function dispatchEvent (event) {
  if (!event.type) {
    throw new Error('UNSPECIFIED_EVENT_TYPE_ERR')
  }
  // if event is instance of an CustomEvent (or has 'details' property),
  // send the detail object as the payload for the event
  this.emit(event.type, event.detail)
}

/**
 * Emulates the W3C Browser based WebSocket interface using removeEventListener.
 *
 * @param {String} type A string representing the event type to remove
 * @param {Function} listener callback
 * @see https://developer.mozilla.org/en/DOM/element.removeEventListener
 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
 * @api public
 */
EventSource.prototype.removeEventListener = function removeEventListener (type, listener) {
  if (typeof listener === 'function') {
    listener._listener = undefined
    this.removeListener(type, listener)
  }
}

/**
 * W3C Event
 *
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#interface-Event
 * @api private
 */
function Event (type, optionalProperties) {
  Object.defineProperty(this, 'type', { writable: false, value: type, enumerable: true })
  if (optionalProperties) {
    for (var f in optionalProperties) {
      if (optionalProperties.hasOwnProperty(f)) {
        Object.defineProperty(this, f, { writable: false, value: optionalProperties[f], enumerable: true })
      }
    }
  }
}

/**
 * W3C MessageEvent
 *
 * @see http://www.w3.org/TR/webmessaging/#event-definitions
 * @api private
 */
function MessageEvent (type, eventInitDict) {
  Object.defineProperty(this, 'type', { writable: false, value: type, enumerable: true })
  for (var f in eventInitDict) {
    if (eventInitDict.hasOwnProperty(f)) {
      Object.defineProperty(this, f, { writable: false, value: eventInitDict[f], enumerable: true })
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(6).Buffer))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parse = __webpack_require__(56);

/**
 * Transform an URL to a valid origin value.
 *
 * @param {String|Object} url URL to transform to it's origin.
 * @returns {String} The origin.
 * @api public
 */
function origin(url) {
  if ('string' === typeof url) url = parse(url);

  //
  // 6.2.  ASCII Serialization of an Origin
  // http://tools.ietf.org/html/rfc6454#section-6.2
  //
  if (!url.protocol || !url.hostname) return 'null';

  //
  // 4. Origin of a URI
  // http://tools.ietf.org/html/rfc6454#section-4
  //
  // States that url.scheme, host should be converted to lower case. This also
  // makes it easier to match origins as everything is just lower case.
  //
  return (url.protocol +'//'+ url.host).toLowerCase();
}

/**
 * Check if the origins are the same.
 *
 * @param {String} a URL or origin of a.
 * @param {String} b URL or origin of b.
 * @returns {Boolean}
 * @api public
 */
origin.same = function same(a, b) {
  return origin(a) === origin(b);
};

//
// Expose the origin
//
module.exports = origin;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(57)
  , qs = __webpack_require__(58)
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)(module), __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(63);
exports.encode = exports.stringify = __webpack_require__(64);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(20)
var url = __webpack_require__(13)

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, process) {var capability = __webpack_require__(21)
var inherits = __webpack_require__(4)
var response = __webpack_require__(22)
var stream = __webpack_require__(23)
var toArrayBuffer = __webpack_require__(75)

var IncomingMessage = response.IncomingMessage
var rStates = response.readyStates

function decideMode (preferBinary, useFetch) {
	if (capability.fetch && useFetch) {
		return 'fetch'
	} else if (capability.mozchunkedarraybuffer) {
		return 'moz-chunked-arraybuffer'
	} else if (capability.msstream) {
		return 'ms-stream'
	} else if (capability.arraybuffer && preferBinary) {
		return 'arraybuffer'
	} else if (capability.vbArray && preferBinary) {
		return 'text:vbarray'
	} else {
		return 'text'
	}
}

var ClientRequest = module.exports = function (opts) {
	var self = this
	stream.Writable.call(self)

	self._opts = opts
	self._body = []
	self._headers = {}
	if (opts.auth)
		self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'))
	Object.keys(opts.headers).forEach(function (name) {
		self.setHeader(name, opts.headers[name])
	})

	var preferBinary
	var useFetch = true
	if (opts.mode === 'disable-fetch' || ('requestTimeout' in opts && !capability.abortController)) {
		// If the use of XHR should be preferred. Not typically needed.
		useFetch = false
		preferBinary = true
	} else if (opts.mode === 'prefer-streaming') {
		// If streaming is a high priority but binary compatibility and
		// the accuracy of the 'content-type' header aren't
		preferBinary = false
	} else if (opts.mode === 'allow-wrong-content-type') {
		// If streaming is more important than preserving the 'content-type' header
		preferBinary = !capability.overrideMimeType
	} else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
		// Use binary if text streaming may corrupt data or the content-type header, or for speed
		preferBinary = true
	} else {
		throw new Error('Invalid value for opts.mode')
	}
	self._mode = decideMode(preferBinary, useFetch)
	self._fetchTimer = null

	self.on('finish', function () {
		self._onFinish()
	})
}

inherits(ClientRequest, stream.Writable)

ClientRequest.prototype.setHeader = function (name, value) {
	var self = this
	var lowerName = name.toLowerCase()
	// This check is not necessary, but it prevents warnings from browsers about setting unsafe
	// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
	// http-browserify did it, so I will too.
	if (unsafeHeaders.indexOf(lowerName) !== -1)
		return

	self._headers[lowerName] = {
		name: name,
		value: value
	}
}

ClientRequest.prototype.getHeader = function (name) {
	var header = this._headers[name.toLowerCase()]
	if (header)
		return header.value
	return null
}

ClientRequest.prototype.removeHeader = function (name) {
	var self = this
	delete self._headers[name.toLowerCase()]
}

ClientRequest.prototype._onFinish = function () {
	var self = this

	if (self._destroyed)
		return
	var opts = self._opts

	var headersObj = self._headers
	var body = null
	if (opts.method !== 'GET' && opts.method !== 'HEAD') {
		if (capability.arraybuffer) {
			body = toArrayBuffer(Buffer.concat(self._body))
		} else if (capability.blobConstructor) {
			body = new global.Blob(self._body.map(function (buffer) {
				return toArrayBuffer(buffer)
			}), {
				type: (headersObj['content-type'] || {}).value || ''
			})
		} else {
			// get utf8 string
			body = Buffer.concat(self._body).toString()
		}
	}

	// create flattened list of headers
	var headersList = []
	Object.keys(headersObj).forEach(function (keyName) {
		var name = headersObj[keyName].name
		var value = headersObj[keyName].value
		if (Array.isArray(value)) {
			value.forEach(function (v) {
				headersList.push([name, v])
			})
		} else {
			headersList.push([name, value])
		}
	})

	if (self._mode === 'fetch') {
		var signal = null
		var fetchTimer = null
		if (capability.abortController) {
			var controller = new AbortController()
			signal = controller.signal
			self._fetchAbortController = controller

			if ('requestTimeout' in opts && opts.requestTimeout !== 0) {
				self._fetchTimer = global.setTimeout(function () {
					self.emit('requestTimeout')
					if (self._fetchAbortController)
						self._fetchAbortController.abort()
				}, opts.requestTimeout)
			}
		}

		global.fetch(self._opts.url, {
			method: self._opts.method,
			headers: headersList,
			body: body || undefined,
			mode: 'cors',
			credentials: opts.withCredentials ? 'include' : 'same-origin',
			signal: signal
		}).then(function (response) {
			self._fetchResponse = response
			self._connect()
		}, function (reason) {
			global.clearTimeout(self._fetchTimer)
			if (!self._destroyed)
				self.emit('error', reason)
		})
	} else {
		var xhr = self._xhr = new global.XMLHttpRequest()
		try {
			xhr.open(self._opts.method, self._opts.url, true)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}

		// Can't set responseType on really old browsers
		if ('responseType' in xhr)
			xhr.responseType = self._mode.split(':')[0]

		if ('withCredentials' in xhr)
			xhr.withCredentials = !!opts.withCredentials

		if (self._mode === 'text' && 'overrideMimeType' in xhr)
			xhr.overrideMimeType('text/plain; charset=x-user-defined')

		if ('requestTimeout' in opts) {
			xhr.timeout = opts.requestTimeout
			xhr.ontimeout = function () {
				self.emit('requestTimeout')
			}
		}

		headersList.forEach(function (header) {
			xhr.setRequestHeader(header[0], header[1])
		})

		self._response = null
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case rStates.LOADING:
				case rStates.DONE:
					self._onXHRProgress()
					break
			}
		}
		// Necessary for streaming in Firefox, since xhr.response is ONLY defined
		// in onprogress, not in onreadystatechange with xhr.readyState = 3
		if (self._mode === 'moz-chunked-arraybuffer') {
			xhr.onprogress = function () {
				self._onXHRProgress()
			}
		}

		xhr.onerror = function () {
			if (self._destroyed)
				return
			self.emit('error', new Error('XHR error'))
		}

		try {
			xhr.send(body)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}
	}
}

/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */
function statusValid (xhr) {
	try {
		var status = xhr.status
		return (status !== null && status !== 0)
	} catch (e) {
		return false
	}
}

ClientRequest.prototype._onXHRProgress = function () {
	var self = this

	if (!statusValid(self._xhr) || self._destroyed)
		return

	if (!self._response)
		self._connect()

	self._response._onXHRProgress()
}

ClientRequest.prototype._connect = function () {
	var self = this

	if (self._destroyed)
		return

	self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode, self._fetchTimer)
	self._response.on('error', function(err) {
		self.emit('error', err)
	})

	self.emit('response', self._response)
}

ClientRequest.prototype._write = function (chunk, encoding, cb) {
	var self = this

	self._body.push(chunk)
	cb()
}

ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
	var self = this
	self._destroyed = true
	global.clearTimeout(self._fetchTimer)
	if (self._response)
		self._response._destroyed = true
	if (self._xhr)
		self._xhr.abort()
	else if (self._fetchAbortController)
		self._fetchAbortController.abort()
}

ClientRequest.prototype.end = function (data, encoding, cb) {
	var self = this
	if (typeof data === 'function') {
		cb = data
		data = undefined
	}

	stream.Writable.prototype.end.call(self, data, encoding, cb)
}

ClientRequest.prototype.flushHeaders = function () {}
ClientRequest.prototype.setTimeout = function () {}
ClientRequest.prototype.setNoDelay = function () {}
ClientRequest.prototype.setSocketKeepAlive = function () {}

// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = [
	'accept-charset',
	'accept-encoding',
	'access-control-request-headers',
	'access-control-request-method',
	'connection',
	'content-length',
	'cookie',
	'cookie2',
	'date',
	'dnt',
	'expect',
	'host',
	'keep-alive',
	'origin',
	'referer',
	'te',
	'trailer',
	'transfer-encoding',
	'upgrade',
	'via'
]

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6).Buffer, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(10).Buffer;
var util = __webpack_require__(70);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(72);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(29);

/*<replacement>*/
var util = __webpack_require__(8);
util.inherits = __webpack_require__(4);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6).Buffer

module.exports = function (buf) {
	// If the buffer is backed by a Uint8Array, a faster version will work
	if (buf instanceof Uint8Array) {
		// If the buffer isn't a subarray, return the underlying ArrayBuffer
		if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
			return buf.buffer
		} else if (typeof buf.buffer.slice === 'function') {
			// Otherwise we need to get a proper copy
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
		}
	}

	if (Buffer.isBuffer(buf)) {
		// This is the slow version that will work with any Buffer
		// implementation (even in old browsers)
		var arrayCopy = new Uint8Array(buf.length)
		var len = buf.length
		for (var i = 0; i < len; i++) {
			arrayCopy[i] = buf[i]
		}
		return arrayCopy.buffer
	} else {
		throw new Error('Argument must be a Buffer')
	}
}


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(79);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(80);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var frontends_namespaceObject = {};
__webpack_require__.r(frontends_namespaceObject);
__webpack_require__.d(frontends_namespaceObject, "IrmaWeb", function() { return IrmaWebFrontend; });
var backends_namespaceObject = {};
__webpack_require__.r(backends_namespaceObject);
__webpack_require__.d(backends_namespaceObject, "IrmaJS", function() { return IrmaJSBackend; });
__webpack_require__.d(backends_namespaceObject, "NutsAuth", function() { return nuts_auth_NutsAuthBackend; });

// CONCATENATED MODULE: ./src/state-transitions.js
/**
 * This file defines the states for the state machine, plus the different valid
 * transitions to other states from each state.
 *
 * The transition 'fail' is a special one, and will (also) be triggered if we
 * try to apply an invalid transition from that state.
 */
/* harmony default export */ var state_transitions = ({
  Uninitialized: {
    initialize: 'Loading',
    browserError: 'BrowserNotSupported',
    fail: 'Error'
  },
  Loading: {
    showQRCode: 'ShowingQRCode',
    showIrmaButton: 'ShowingIrmaButton',
    fail: 'Error'
  },
  ShowingQRCode: {
    codeScanned: 'ContinueOn2ndDevice',
    timeout: 'TimedOut',
    fail: 'Error'
  },
  ContinueOn2ndDevice: {
    succeed: 'Success',
    cancel: 'Cancelled',
    restart: 'Loading',
    timeout: 'TimedOut',
    fail: 'Error'
  },
  ShowingIrmaButton: {
    chooseQR: 'ShowingQRCodeInstead',
    openIrmaApp: 'ContinueInIrmaApp',
    fail: 'Error'
  },
  ShowingQRCodeInstead: {
    codeScanned: 'ContinueOn2ndDevice',
    restart: 'Loading',
    timeout: 'TimedOut',
    fail: 'Error'
  },
  ContinueInIrmaApp: {
    succeed: 'Success',
    cancel: 'Cancelled',
    restart: 'Loading',
    timeout: 'TimedOut',
    fail: 'Error'
  },
  Cancelled: {
    restart: 'Loading'
  },
  TimedOut: {
    restart: 'Loading'
  },
  Error: {
    restart: 'Loading'
  },
  BrowserNotSupported: {},
  Success: {}
});
// CONCATENATED MODULE: ./src/state-machine.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Show state transitions on the console

var enableDebugging = true;

var state_machine_StateMachine =
/*#__PURE__*/
function () {
  function StateMachine() {
    _classCallCheck(this, StateMachine);

    this._callbacks = [];
    this._state = 'Uninitialized';
  }

  _createClass(StateMachine, [{
    key: "addStateChangeListener",
    value: function addStateChangeListener(func) {
      this._callbacks.push(func);
    }
  }, {
    key: "transition",
    value: function transition(t) {
      var newState = this._getNewState(t);

      this._log(newState, t);

      this._setState(newState);
    }
  }, {
    key: "_getNewState",
    value: function _getNewState(t) {
      var newState = state_transitions[this._state][t];
      if (!newState) newState = state_transitions[this._state]['fail'];
      if (!newState) throw new Error("Invalid transition '".concat(t, "' from state '").concat(this._state, "' and could not find a \"fail\" transition to fall back on."));
      return newState;
    }
  }, {
    key: "_log",
    value: function _log(state, transition) {
      if (!enableDebugging) return;
      console.info("\uD83C\uDFB0 State change: '".concat(this._state, "' \u2192 '").concat(state, "' (because of '").concat(transition, "')"));
    }
  }, {
    key: "_setState",
    value: function _setState(state) {
      var _this = this;

      this._state = state;

      this._callbacks.forEach(function (f) {
        return f(_this._state);
      });
    }
  }]);

  return StateMachine;
}();


// CONCATENATED MODULE: ./src/frontends/irma-web.js
function irma_web_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function irma_web_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function irma_web_createClass(Constructor, protoProps, staticProps) { if (protoProps) irma_web_defineProperties(Constructor.prototype, protoProps); if (staticProps) irma_web_defineProperties(Constructor, staticProps); return Constructor; }

var IrmaWebFrontend =
/*#__PURE__*/
function () {
  function IrmaWebFrontend(stateMachine, element, options) {
    var _this = this;

    irma_web_classCallCheck(this, IrmaWebFrontend);

    this._stateMachine = stateMachine;
    this._element = element;
    this._options = this._sanitizeOptions(options);

    this._renderInitialState();

    this._attachClickHandler();

    this._stateMachine.addStateChangeListener(function (s) {
      return _this._render(s);
    });
  }

  irma_web_createClass(IrmaWebFrontend, [{
    key: "_sanitizeOptions",
    value: function _sanitizeOptions(options) {
      return Object.assign({
        showHelper: false,
        translations: {
          header: 'Inloggen met <i class="irma-web-logo">IRMA</i>',
          helper: 'Kom je er niet uit? Kijk dan eerst eens op <a href="https://irma.app/">de website van IRMA</a>.',
          loading: 'Eén moment alsjeblieft',
          button: 'Open IRMA app',
          qrCode: 'Toon QR code',
          app: 'Volg de instructies in de IRMA app',
          retry: 'Opnieuw proberen',
          back: 'Ga terug',
          cancelled: 'We hebben de attributen niet ontvangen. Het spijt ons, maar dan kunnen we je niet inloggen',
          timeout: 'Sorry! We hebben te lang<br/>niks van je gehoord',
          error: 'Sorry! Er is een fout opgetreden',
          browser: 'Het spijt ons, maar je browser voldoet niet aan de minimale eisen',
          success: 'Gelukt!'
        }
      }, options);
    }
  }, {
    key: "_renderInitialState",
    value: function _renderInitialState() {
      this._element.classList.add('irma-web-form');

      this._element.innerHTML = this._irmaWebForm(this._stateUninitialized());
    }
  }, {
    key: "_attachClickHandler",
    value: function _attachClickHandler() {
      var _this2 = this;

      // Polyfill for Element.matches to fix IE11
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }

      this._element.addEventListener('click', function (e) {
        if (e.target.matches('[data-irma-glue-transition]')) {
          _this2._stateMachine.transition(e.target.getAttribute('data-irma-glue-transition'));
        }
      });
    }
  }, {
    key: "_render",
    value: function _render(state) {
      var _this3 = this;

      var newPartial = this._stateToPartialMapping()[state];

      if (!newPartial) throw new Error("I don't know how to render '".concat(state, "'"));

      if (state == 'ContinueInIrmaApp') {
        // Add a tiny delay so we don't see the flicker when switching to the app
        window.setTimeout(function () {
          return _this3._renderPartial(newPartial);
        }, 200);
      } else {
        this._renderPartial(newPartial);
      }
    }
  }, {
    key: "_renderPartial",
    value: function _renderPartial(newPartial) {
      this._element.querySelector('.content .centered').innerHTML = newPartial.call(this);
    }
  }, {
    key: "_stateToPartialMapping",
    value: function _stateToPartialMapping() {
      return {
        Uninitialized: this._stateUninitialized,
        Loading: this._stateLoading,
        ShowingQRCode: this._stateShowingQRCode,
        ContinueOn2ndDevice: this._stateContinueInIrmaApp,
        ShowingIrmaButton: this._stateShowingIrmaButton,
        ShowingQRCodeInstead: this._stateShowingQRCodeInstead,
        ContinueInIrmaApp: this._stateContinueInIrmaApp,
        Cancelled: this._stateCancelled,
        TimedOut: this._stateTimedOut,
        Error: this._stateError,
        BrowserNotSupported: this._stateBrowserNotSupported,
        Success: this._stateSuccess
      };
    }
    /** Container markup **/

  }, {
    key: "_irmaWebForm",
    value: function _irmaWebForm(content) {
      return "\n      <header class=\"header ".concat(this._options.showHelper ? 'show-helper' : '', "\">\n        <p>").concat(this._options.translations.header, "</p>\n        <section class=\"helper\">\n          <p>").concat(this._options.translations.helper, "</p>\n        </section>\n      </header>\n      <section class=\"content\">\n        <section class=\"centered\">\n          ").concat(content, "\n        </section>\n      </section>\n    ");
    }
    /** States markup **/

  }, {
    key: "_stateUninitialized",
    value: function _stateUninitialized() {
      return "\n      <!-- State: Uninitialized -->\n      <div class=\"irma-web-loading-animation\">\n        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n      </div>\n      <p>".concat(this._options.translations.loading, "</p>\n    ");
    }
  }, {
    key: "_stateLoading",
    value: function _stateLoading() {
      return "\n      <!-- State: Loading -->\n      <div class=\"irma-web-loading-animation\">\n        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n      </div>\n      <p>".concat(this._options.translations.loading, "</p>\n    ");
    }
  }, {
    key: "_stateShowingQRCode",
    value: function _stateShowingQRCode() {
      return "\n      <!-- State: ShowingQRCode -->\n      <canvas id=\"irma-web-qr-canvas\"></canvas>\n    ";
    }
  }, {
    key: "_stateShowingIrmaButton",
    value: function _stateShowingIrmaButton() {
      return "\n      <!-- State: ShowingButton -->\n      <button class=\"irma-web-button\" data-irma-glue-transition=\"openIrmaApp\">".concat(this._options.translations.button, "</button>\n      <p><a data-irma-glue-transition=\"chooseQR\">").concat(this._options.translations.qrCode, "</a></p>\n    ");
    }
  }, {
    key: "_stateShowingQRCodeInstead",
    value: function _stateShowingQRCodeInstead() {
      return "\n      <!-- State: ShowingQRCode -->\n      <canvas id=\"irma-web-qr-canvas\"></canvas>\n      <p><a data-irma-glue-transition=\"restart\">".concat(this._options.translations.back, "</a></p>\n    ");
    }
  }, {
    key: "_stateContinueInIrmaApp",
    value: function _stateContinueInIrmaApp() {
      return "\n      <!-- State: WaitingForUser -->\n      <div class=\"irma-web-waiting-for-user-animation\"></div>\n      <p>".concat(this._options.translations.app, "</p>\n      <p><a data-irma-glue-transition=\"restart\">").concat(this._options.translations.retry, "</a></p>\n    ");
    }
  }, {
    key: "_stateCancelled",
    value: function _stateCancelled() {
      return "\n      <!-- State: Cancelled -->\n      <div class=\"irma-web-forbidden-animation\"></div>\n      <p>".concat(this._options.translations.cancelled, "</p>\n      <p><a data-irma-glue-transition=\"restart\">").concat(this._options.translations.retry, "</a></p>\n    ");
    }
  }, {
    key: "_stateTimedOut",
    value: function _stateTimedOut() {
      return "\n      <!-- State: TimedOut -->\n      <div class=\"irma-web-clock-animation\"></div>\n      <p>".concat(this._options.translations.timeout, "</p>\n      <p><a data-irma-glue-transition=\"restart\">").concat(this._options.translations.retry, "</a></p>\n    ");
    }
  }, {
    key: "_stateError",
    value: function _stateError() {
      return "\n      <!-- State: Error -->\n      <div class=\"irma-web-forbidden-animation\"></div>\n      <p>".concat(this._options.translations.error, "</p>\n      <p><a data-irma-glue-transition=\"restart\">").concat(this._options.translations.retry, "</a></p>\n    ");
    }
  }, {
    key: "_stateBrowserNotSupported",
    value: function _stateBrowserNotSupported() {
      return "\n      <!-- State: BrowserNotSupported -->\n      <div class=\"irma-web-forbidden-animation\"></div>\n      <p>".concat(this._options.translations.browser, "</p>\n    ");
    }
  }, {
    key: "_stateSuccess",
    value: function _stateSuccess() {
      return "\n      <!-- State: Success -->\n      <div class=\"irma-web-checkmark-animation\"></div>\n      <p>".concat(this._options.translations.success, "</p>\n    ");
    }
  }]);

  return IrmaWebFrontend;
}();


// CONCATENATED MODULE: ./src/frontends/index.js

// CONCATENATED MODULE: ./src/backends/irmajs.js
function irmajs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function irmajs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function irmajs_createClass(Constructor, protoProps, staticProps) { if (protoProps) irmajs_defineProperties(Constructor.prototype, protoProps); if (staticProps) irmajs_defineProperties(Constructor, staticProps); return Constructor; }

var irma = __webpack_require__(30);

var IrmaJSBackend =
/*#__PURE__*/
function () {
  function IrmaJSBackend(stateMachine, resultCallback, options) {
    var _this = this;

    irmajs_classCallCheck(this, IrmaJSBackend);

    this._stateMachine = stateMachine;
    this._resultCallback = resultCallback;
    this._options = options;

    this._stateMachine.addStateChangeListener(function (s) {
      return _this._stateChangeListener(s);
    });
  }

  irmajs_createClass(IrmaJSBackend, [{
    key: "_stateChangeListener",
    value: function _stateChangeListener(state) {
      switch (state) {
        case 'Loading':
          this._startNewSession();

          break;

        case 'ShowingQRCode':
        case 'ShowingQRCodeInstead':
          this._renderQRCode();

          break;

        case 'ContinueInIrmaApp':
          this._openIrmaApp();

          break;
      }
    }
  }, {
    key: "startFlow",
    value: function startFlow(server, request) {
      Object.assign(this._options, {
        server: server,
        request: request
      });

      this._stateMachine.transition('initialize');
    }
  }, {
    key: "_startNewSession",
    value: function _startNewSession() {
      var _this2 = this;

      irma.startSession(this._options.server, this._options.request).then(function (_ref) {
        var sessionPtr = _ref.sessionPtr,
            token = _ref.token;
        return _this2._handleSession(sessionPtr, token);
      })["catch"](function (s) {
        return _this2._handleError(s);
      });
    }
  }, {
    key: "_handleSession",
    value: function _handleSession(sessionPtr, token) {
      Object.assign(this._options, {
        sessionPtr: sessionPtr,
        token: token
      }); // Mobile or desktop version?

      if (irma.detectUserAgent() == irma.UserAgent.Desktop) {
        this._stateMachine.transition('showQRCode');
      } else {
        this._stateMachine.transition('showIrmaButton');
      }
    }
  }, {
    key: "_renderQRCode",
    value: function _renderQRCode() {
      this._runIrmaFlow({
        method: 'canvas',
        element: 'irma-web-qr-canvas',
        showConnectedIcon: false,
        disableMobile: true
      });
    }
  }, {
    key: "_openIrmaApp",
    value: function _openIrmaApp() {
      this._runIrmaFlow({
        method: 'mobile'
      });
    }
  }, {
    key: "_runIrmaFlow",
    value: function _runIrmaFlow(options) {
      var _this3 = this;

      var irmaState = {};
      irma.setupSession(this._options.sessionPtr, irmaState, Object.assign(this._options, options)).then(function (p) {
        if (options.method == 'canvas') _this3._stateMachine.transition('codeScanned');
        return irma.finishSession(p, irmaState);
      }).then(function (r) {
        return _this3._handleDone(r);
      })["catch"](function (s) {
        return _this3._handleError(s);
      });
    }
  }, {
    key: "_handleDone",
    value: function _handleDone(result) {
      this._resultCallback(result);

      this._stateMachine.transition('succeed');
    }
  }, {
    key: "_handleError",
    value: function _handleError(state) {
      switch (state) {
        case 'CANCELLED':
          // This is a conscious choice by a user.
          this._stateMachine.transition('cancel');

          break;

        case 'TIMEOUT':
          // This is a known and understood error. We can be explicit to the user.
          this._stateMachine.transition('timeout');

          break;

        default:
          // Catch unknown errors and give generic error message. We never really
          // want to get here.
          console.error("IRMA session failed:", state);

          this._stateMachine.transition('fail');

          break;
      }
    }
  }]);

  return IrmaJSBackend;
}();


// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var browser = __webpack_require__(15);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./src/backends/nuts-auth.js
function nuts_auth_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nuts_auth_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function nuts_auth_createClass(Constructor, protoProps, staticProps) { if (protoProps) nuts_auth_defineProperties(Constructor.prototype, protoProps); if (staticProps) nuts_auth_defineProperties(Constructor, staticProps); return Constructor; }



var nuts_auth_NutsAuthBackend =
/*#__PURE__*/
function () {
  function NutsAuthBackend(stateMachine, resultCallback, options) {
    var _this = this;

    nuts_auth_classCallCheck(this, NutsAuthBackend);

    this._stateMachine = stateMachine;
    this._resultCallback = resultCallback;
    this._options = options;

    this._stateMachine.addStateChangeListener(function (s) {
      return _this._stateChangeListener(s);
    });
  }

  nuts_auth_createClass(NutsAuthBackend, [{
    key: "_stateChangeListener",
    value: function _stateChangeListener(state) {
      switch (state) {
        case 'Loading':
          this._startNewSession();

          break;

        case 'ShowingQRCode':
        case 'ShowingQRCodeInstead':
          this._renderQRCode();

          break;

        case 'ContinueOn2ndDevice':
          this._waitForSigning();

          break;
      }
    }
  }, {
    key: "startFlow",
    value: function startFlow(server, request) {
      Object.assign(this._options, {
        server: server,
        request: request
      });

      this._stateMachine.transition('initialize');
    }
  }, {
    key: "_startNewSession",
    value: function _startNewSession() {
      var _this2 = this;

      fetch("".concat(this._options.server, "/auth/contract/session"), {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this._options.request),
        cache: 'reload'
      }).then(function (result) {
        if (result.status != 201) throw 'Error in starting session: Session endpoint returned status other than 201 created';
        return result.json();
      }).then(function (session) {
        _this2._options.session = session;

        _this2._stateMachine.transition('showQRCode');
      })["catch"](function () {
        _this2._stateMachine.transition('fail');
      });
    }
  }, {
    key: "_renderQRCode",
    value: function _renderQRCode() {
      var canvasEl = document.getElementById('irma-web-qr-canvas');
      var qrCodeString = JSON.stringify(this._options.session.qr_code_info);
      browser_default.a.toCanvas(canvasEl, qrCodeString, {
        width: 350
      });

      this._waitForScanning();
    }
  }, {
    key: "_waitForScanning",
    value: function _waitForScanning() {
      var _this3 = this;

      this._waitFor('CONNECTED').then(function (state) {
        _this3._stateMachine.transition('codeScanned');
      })["catch"](function (error) {
        return _this3._handleUnexpectedStates(error);
      });
    }
  }, {
    key: "_waitForSigning",
    value: function _waitForSigning() {
      var _this4 = this;

      this._waitFor('DONE').then(function (state) {
        if (state.proofStatus != 'VALID') {
          _this4._stateMachine.transition('fail');
        }

        _this4._resultCallback(state);

        _this4._stateMachine.transition('succeed');
      })["catch"](function (error) {
        return _this4._handleUnexpectedStates(error);
      });
    }
  }, {
    key: "_waitFor",
    value: function _waitFor(targetState) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        var interval = setInterval(function () {
          fetch("".concat(_this5._options.server, "/auth/contract/session/").concat(_this5._options.session.session_id), {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            cache: 'reload'
          }).then(function (result) {
            if (result.status != 200) throw 'Error in polling: Session endpoint returned status other than 200 OK';
            return result.json();
          }).then(function (state) {
            if (state.status == targetState) {
              clearInterval(interval);
              resolve(state);
            } // IE11 doesn't support "includes", so do it this way:


            if (['TIMEOUT', 'ERROR', 'CANCELLED'].indexOf(state.status) >= 0) {
              clearInterval(interval);
              reject(state);
            }
          })["catch"](function (err) {
            clearInterval(interval);
            reject(err);
          });
        }, 1000);
      });
    }
  }, {
    key: "_handleUnexpectedStates",
    value: function _handleUnexpectedStates(error) {
      switch (error.status) {
        case 'TIMEOUT':
          this._stateMachine.transition('timeout');

          return;

        case 'ERROR':
          this._stateMachine.transition('fail');

          return;

        case 'CANCELLED':
          this._stateMachine.transition('cancel');

          return;
      }

      console.error(error);
    }
  }]);

  return NutsAuthBackend;
}();


// CONCATENATED MODULE: ./src/backends/index.js


// CONCATENATED MODULE: ./src/irma-web-glue.js
function irma_web_glue_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function irma_web_glue_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function irma_web_glue_createClass(Constructor, protoProps, staticProps) { if (protoProps) irma_web_glue_defineProperties(Constructor.prototype, protoProps); if (staticProps) irma_web_glue_defineProperties(Constructor, staticProps); return Constructor; }





var irma_web_glue_IrmaWebGlue =
/*#__PURE__*/
function () {
  function IrmaWebGlue(element, options) {
    var _this = this;

    irma_web_glue_classCallCheck(this, IrmaWebGlue);

    options = this._sanitizeOptions(options);
    this._stateMachine = new state_machine_StateMachine();

    this._stateMachine.addStateChangeListener(function (s) {
      return _this._stateChangeListener(s);
    });

    this._frontend = new options.frontend(this._stateMachine, element, options.frontEndOptions);
    this._backend = new options.backend(this._stateMachine, function (r) {
      return _this._flowResult = r;
    }, options.backendOptions);
  }

  irma_web_glue_createClass(IrmaWebGlue, [{
    key: "_sanitizeOptions",
    value: function _sanitizeOptions(options) {
      return Object.assign({
        frontend: IrmaWebFrontend,
        backend: IrmaJSBackend,
        frontEndOptions: {},
        backendOptions: {}
      }, options);
    }
  }, {
    key: "startFlow",
    value: function startFlow(server, request) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._resolve = resolve;
        _this2._reject = reject;

        _this2._backend.startFlow(server, request);
      });
    }
  }, {
    key: "_stateChangeListener",
    value: function _stateChangeListener(state) {
      var _this3 = this;

      // Note: If the user can recover from a state, it's not really a fail state
      if (state == 'BrowserNotSupported' && this._reject) {
        this._reject(state);
      }

      if (state == 'Success' && this._resolve) {
        // Give a delay for the user to actually see the success state
        setTimeout(function () {
          return _this3._resolve(_this3._flowResult);
        }, 500);
      }
    }
  }]);

  return IrmaWebGlue;
}();


irma_web_glue_IrmaWebGlue.frontends = frontends_namespaceObject;
irma_web_glue_IrmaWebGlue.backends = backends_namespaceObject;
// CONCATENATED MODULE: ./src/index.js

window.IrmaWebGlue = irma_web_glue_IrmaWebGlue;

/***/ })
/******/ ]);