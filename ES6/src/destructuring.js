// деструктивное присваивание
let languages = [
    'JavaScript',
    'Python',
    'Ruby',
    'PHP'
];

// let js,python,ruby,php;
// [js, python, ruby, php] = languages;
// let [js,python,ruby,php] = languages;
let [js, python, ruby, php] = [
    'JavaScript',
    'Python',
    'Ruby',
    'PHP'
];

let scores = [1,2,3,4,5];
let [low, ...rest] = scores;

function computeScore([low, mid]) {
    console.log(low, mid);
}

console.log(js,python,ruby,php);
console.log(low, rest);
computeScore([3,5]);