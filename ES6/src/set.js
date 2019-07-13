// const set = new Set(['button', 'active', 'small']);
// const set = new Set('button'); // Set(5) {"b", "u", "t", "o", "n"}

const set = new Set();
const buttonRef = { className: 'button'};

set.add('button')
   .add('active')
   .add('small')
   .add(buttonRef);

set.delete('small');
// set.clear(); // delete all items

console.log(set); // {"button", "active", "small"}
console.log(set.size); // 3
console.log(set.has('button')); // true
console.log(set.has(buttonRef)); // true
console.log(...set); // button active {className: "button"}
console.log([...set]); // ["button", "active", {…}]
console.log(set.values()); // SetIterator {"button", "active", {…}}
console.log(set.entries()); // SetIterator {"button" => "button", "active" => "active", {…} => {…}}
console.log(...set.entries()); // ["button", "button"] (2) ["active", "active"] (2) [{…}, {…}]
console.log(Array.from(set)); // ["button", "active", {…}]

for (let item of set) {
    console.log(item);
}
