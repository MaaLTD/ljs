'use strict';

// Оператор разворота - spread -распростронение
var array1 = [1, 2, 3];

var array2 = [].concat(array1, [3, 4, 5]); // array2: 1,2,3,4,5

function doSomething() {
    for (var _len = arguments.length, array2 = Array(_len), _key = 0; _key < _len; _key++) {
        array2[_key] = arguments[_key];
    }

    console.log(array2);
}

console.log(array2);
console.log('load....');
doSomething(array2);

var staticLangs = ['C', 'C++', 'Java'];
var dynmicLangs = ['Js', 'PHP', 'Ruby'];

var langs = [].concat(staticLangs, ['C#'], dynmicLangs, ['Python']);

console.log(langs);

function add(x, y, z) {
    console.log('we are in function');
    console.log(x + y + z);
}

var nums = [1, 2, 3];

add.apply(undefined, nums);