function * generate() {
    console.log('Start');
    yield;
    console.log('Finish');
}

console.log(typeof generate());

let iterator = generate();
iterator.next();
// iterator.next();