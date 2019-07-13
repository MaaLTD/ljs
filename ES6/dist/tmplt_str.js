'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// шаблонная строка template-string


function greet(name) {
    console.log(('Hello ' + name).toUpperCase());
}

// greet('Bill');


var user_email = ['anton.malchuzhenko@gmail.com', 'app.test@gmail.com', 'subject for this mail', 'message this mail'];

function createEmail(to, from, subject, message) {
    console.log('\n\n        To:      ' + to + '\n        From:    ' + from + '\n        Subject: ' + subject + '\n        message: ' + message + '\n\n    ');
}

createEmail.apply(undefined, user_email);

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

// add('5','5');

// тегировагние
var name = 'Anton';
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}