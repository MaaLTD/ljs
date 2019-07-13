// шаблонная строка template-string


function greet(name) {
    console.log(`Hello ${name}`.toUpperCase());
}

// greet('Bill');


let user_email = [
    'anton.malchuzhenko@gmail.com',
    'app.test@gmail.com',
    'subject for this mail',
    'message this mail'
];

function createEmail(to, from, subject, message)
{
    console.log(`

        To:      ${to}
        From:    ${from}
        Subject: ${subject}
        message: ${message}

    `);
}

createEmail(...user_email);

function add(x,y)
{
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

// add('5','5');

// тегировагние
let name = 'Anton';
console.log(upperName`Hello ${name}`);

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}