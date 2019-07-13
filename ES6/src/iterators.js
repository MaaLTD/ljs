// Iterable : [1,2,3], 'string', [div, div, div] - DOM collection

let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

console.info('for');
for (let index = 0; index < xmen.length; index++) {
    console.log(xmen[index]);
}
console.log('end for loop');
console.log('-------------------------------------------');

console.info('for...in');
for (let key in xmen) {
    console.log(xmen[key]);
}
console.log('end for_in loop');
console.log('-------------------------------------------');

console.info('forEach');
xmen.forEach(xmen => console.log(xmen));
console.log('end forEach loop');
console.log('-------------------------------------------');

console.info('for...of');
for (let xman of xmen) {
    console.log(xman);
}
console.log('end for_of loop');
console.log('-------------------------------------------');

let iterator = xmen[Symbol.iterator](); // Array Iterator {}
let next = iterator.next();

console.log('while loop');
while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}
console.log('end while loop');
console.log('-------------------------------------------');

let idGen = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 10 ? undefined : id++;
                let done = !value;
                return { value, done };
            }
        };
    }
};

let randomGen = {
    generate() {
        return this[Symbol.iterator]();
    },
    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count += 1;
                return { value, done };
            }
        };
    }
};

let random = randomGen.generate();
console.log(random.next().value);

// for(let random of randomGen) {
//     console.log(random);
// }

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        let tasks = this.tasks;
        let index = 0;

        return {

            next() {
                let result = { value: undefined, done: true};

                if (index < tasks.length) {
                    result.value = tasks[index];
                    result.done = false;
                    index += 1;
                }

                return result;
            }
        };
    }
}

let taskList = new TaskList();
taskList.addTask('learn ES6', 'buy products');

for (let task of taskList) {
    console.log(task);
}

