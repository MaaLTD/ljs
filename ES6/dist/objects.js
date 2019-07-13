'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,

    sayHello: function sayHello() {
        console.log('Hi my name is ' + this.firstName + ' ' + this.lastName);
    },


    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set fullName(value) {
        this.firstName = value;
    }
};

// console.log(person);
// person.sayHello();

console.log(person.firstName + '');
console.log(person['firstName']);

var property = 'firstName';
console.log(person[property]);

// person = {
//     [property]: 'Anton'
// };
function createCar(prop, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, prop, value), _defineProperty(_ref, '_' + prop, value), _defineProperty(_ref, prop.toUpperCase(), value), _defineProperty(_ref, 'get' + prop, function () {
        return this[prop];
    }), _ref;
}

console.log(createCar('vin', 1));

console.log('---------------------------------------');
Object.defineProperty(person, 'fullName', {
    get: function get() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function set(value) {
        this.firstName = value;
    }
});
console.log(person);