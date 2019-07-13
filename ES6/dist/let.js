'use strict';

// if (true) {
//     let version = 'ES6';
// }

// console.log(version);

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function (e) {
        console.log(i);
    };
};

for (var i in buttons) {
    _loop(i);
}