let firstName = 'Bill',
    lastName  = 'Gates',
    email     = 'billgates@microsoft.com';

let person = {
    firstName,
    lastName,
    email,

    sayHello() {
        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
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

let property = 'firstName';
console.log(person[property]);

// person = {
//     [property]: 'Anton'
// };
function createCar(prop, value) {
    return {
        [prop]: value,
        ['_' + prop]: value,
        [prop.toUpperCase()]: value,
        ['get' + prop]() {
            return this[prop];
        }
    };
}

console.log(createCar('vin', 1));

console.log('---------------------------------------');
Object.defineProperty(person, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        this.firstName = value;
    }
});
console.log(person);