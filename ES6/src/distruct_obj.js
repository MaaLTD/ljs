// диструктивное присваивание объектов
let person = {
    firstName: 'Antos',
    lastName: 'Malchuzhenko',
    age: 31
};

let user = {
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
let {
// с обращением к вложеному объекту
    firstName: first,
    lastName: last,
    social: { facebook },
    age = 12
} = user;

function post(url, {data: { firstName, lastName }, cache}){
    console.log(firstName, lastName, cache);
}

let result = post('api/users', {data: user, cache: false});

function getUserInfo(){
    return {
        firstName: 'Antos',
        lastName: 'Malchuzhenko',
        age: 31,
        social: {
            facebook: 'antos.malchuzhenkos',
            twitter: 'antsmall'
        }
    }
}

let {firstName, lastName, social: { twitter }} = getUserInfo();

console.log(first, last, age, facebook, twitter);