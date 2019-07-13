'use strict';

// диструктивное присваивание объектов
var person = {
    firstName: 'Antos',
    lastName: 'Malchuzhenko',
    age: 31
};

var user = {
    firstName: 'Antos',
    lastName: 'Malchuzhenko',
    age: 31,
    social: {
        facebook: 'antos.malchuzhenkos',
        twitter: 'antsmall'
    }
};

// let firstName = preson.firstName;
// let lastName = preson.lastName;
// let {firstName, lastName} = person;
// let {firstName: first, lastName: last, age = 25} = person;
var first = user.firstName,
    last = user.lastName,
    facebook = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 12 : _user$age;


function post(url, _ref) {
    var _ref$data = _ref.data,
        firstName = _ref$data.firstName,
        lastName = _ref$data.lastName,
        cache = _ref.cache;

    console.log(firstName, lastName, cache);
}

var result = post('api/users', { data: user, cache: false });

function getUserInfo() {
    return {
        firstName: 'Antos',
        lastName: 'Malchuzhenko',
        age: 31,
        social: {
            facebook: 'antos.malchuzhenkos',
            twitter: 'antsmall'
        }
    };
}

var _getUserInfo = getUserInfo(),
    firstName = _getUserInfo.firstName,
    lastName = _getUserInfo.lastName,
    twitter = _getUserInfo.social.twitter;

console.log(first, last, age, facebook, twitter);