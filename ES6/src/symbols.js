let symbol = Symbol('name'); // aswd231r4234 id_name
let symbol2 = Symbol('name'); // 215r3vfds34 id_name

console.log(symbol); // Symbol(name)
console.log(typeof symbol); // symbol
console.log('................................................');
console.log(symbol2); // Symbol(name2)
console.log(symbol === symbol2); // false
console.log('................................................');

let symbol3 = Symbol.for('name3'); // Symbol(name3)
let symbol4 = Symbol.for(); // undefined
let name = Symbol.keyFor(symbol4); // undefined

console.log(symbol3);
console.log(symbol === symbol2); // false, must be true
console.log('................................................');
console.log(name); // undefined

