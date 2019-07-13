// map assoc array
let arr = [
    ['hi', 'hello'],
    [{}, 'hello world'],
    [true, 'hello true']
];
const map = new Map();
map.set('hi', 'hello');
map.set({}, 'hello world');
// map.delete('hi');
// map.clear();

console.log(map); // Map(2) {"hi" => "hello", {…} => "hello world"}
console.log(map.size);
console.log(map.get('hi')); // hello
console.log(map.has('hi')); // true
