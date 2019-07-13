// if (true) {
//     let version = 'ES6';
// }

// console.log(version);

let buttons = document.querySelectorAll('button');

for(let i in buttons) {
    let button = buttons[i];
    button.innerText = i;
    button.onclick = function (e) {
        console.log(i);
    };
}