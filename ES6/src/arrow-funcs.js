// function add(x,y){return x + y;}
let add = (x,y) => x + y;

let square = (x) => x * x;
// let square = x => x * x;

// let getPerson = (name, lastName) => ({name: name, lastName: lastName});
let getPerson = (name, lastName) => {
    return {
        name: name,
        lastName: lastName
    };
};

let nums = [1,2,3,4,5,6,7,8,9,10,11];
let sum = 0;

// самовызывающеяся функция (() => console.log('IIFE'))();
// Immediately Invoked Function Expression
(function() {
    console.log('IIFE');
})();

let squared = nums.map((n) => {
    return n * n;
});

// nums.forEach((num) => {
//     return sum += num;
// });

let count = nums.reduce((sum, num) => ({}), 0);

let person = {
    name: 'Antos',
    greet: function() {
        setTimeout(() => {
          console.log('Hello my name is ' + this.name);
          console.log('this is ', this);
          // console.log('that is ', that);
        }, 2000)
    }
};

console.log(count);
//console.log(getPerson('Anton', 'Malchuzhenko'));
// console.log(sum);
// console.log(squared);
// person.greet();