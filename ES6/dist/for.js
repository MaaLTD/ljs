'use strict';

var browsers = ['chrome', 'opera', 'edge', 'safari', 'firefox'];

for (var browser in browsers) {
   // по ключу
   console.log(browser);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
   for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _browser = _step.value;
      // по значению
      console.log(_browser);
   }
} catch (err) {
   _didIteratorError = true;
   _iteratorError = err;
} finally {
   try {
      if (!_iteratorNormalCompletion && _iterator.return) {
         _iterator.return();
      }
   } finally {
      if (_didIteratorError) {
         throw _iteratorError;
      }
   }
}