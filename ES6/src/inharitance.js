class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count++;
        console.log('создание задачи');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'Задача';
    }

    complete() {
        this.done = true;
        console.log(`Задача ${this.title} выполнена`);
    }
}
Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');
    }

    complete() {
        super.complete();
        console.log(`Подзадача ${this.title} выполнена`);
    }
}

let task = new Task('Изучить JS');
let subtask = new SubTask('Изучить ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
console.log('----------------------------------------------------');
console.log(subtask instanceof SubTask); // true
console.log(task instanceof Task);       // true
console.log(subtask instanceof Task);    // true
console.log(task instanceof SubTask);    // false

