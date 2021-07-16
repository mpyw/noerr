(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.NoErr = {}));
}(this, (function (exports) { 'use strict';

  exports.default = function noerr(callback) {
    try {
      return callback.apply(null, Array.prototype.slice.call(arguments, 1));
    } catch (e) {
      if (e.constructor !== TypeError) {
        throw e;
      }
    }
  };

  Object.defineProperty(exports, '__esModule', { value: true });
})));
