'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// деструктивное присваивание
var languages = ['JavaScript', 'Python', 'Ruby', 'PHP'];

// let js,python,ruby,php;
// [js, python, ruby, php] = languages;
// let [js,python,ruby,php] = languages;
var js = 'JavaScript',
    python = 'Python',
    ruby = 'Ruby',
    php = 'PHP';


var scores = [1, 2, 3, 4, 5];
var low = scores[0],
    rest = scores.slice(1);


function computeScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log(low, mid);
}

console.log(js, python, ruby, php);
console.log(low, rest);
computeScore([3, 5]);