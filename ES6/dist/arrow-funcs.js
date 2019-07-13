'use strict';

// function add(x,y){return x + y;}
var add = function add(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};
// let square = x => x * x;

// let getPerson = (name, lastName) => ({name: name, lastName: lastName});
var getPerson = function getPerson(name, lastName) {
    return {
        name: name,
        lastName: lastName
    };
};

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;

// самовызывающеяся функция (() => console.log('IIFE'))();
// Immediately Invoked Function Expression
(function () {
    console.log('IIFE');
})();

var squared = nums.map(function (n) {
    return n * n;
});

nums.forEach(function (num) {
    return sum += num;
});

var person = {
    name: 'Antos',
    greet: function greet() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hello my name is ' + _this.name);
            console.log('this is ', _this);
            // console.log('that is ', that);
        }, 2000);
    }
};

console.log(square(add(2, 1)));
console.log(getPerson('Anton', 'Malchuzhenko'));
console.log(sum);
console.log(squared);
person.greet();