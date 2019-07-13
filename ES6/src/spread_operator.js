// Оператор разворота - spread -распростронение
let array1 = [1,2,3];

let array2 = [...array1, 3,4,5]; // array2: 1,2,3,4,5

function doSomething(...array2) {
    console.log(array2);
}

console.log(array2);
console.log('load....');
doSomething(array2);

let staticLangs = ['C', 'C++', 'Java'];
let dynmicLangs = ['Js', 'PHP', 'Ruby'];

let langs = [...staticLangs, 'C#', ...dynmicLangs, 'Python'];

console.log(langs);

function add(x,y,z) {
    console.log('we are in function');
    console.log(x + y + z);
}

let nums = [1,2,3];

add(...nums)