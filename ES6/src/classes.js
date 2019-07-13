class Task {
    constructor(title = Task.getdefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count++;
        // console.log(`Task: ${this.title}; number task: ${Task.count}`);
    }

    get done() {
        return this._done === true ? 'Выполнено' : 'Не выполнено';
    }
    set done(value) {
        if (value !== undefined && typeof value === 'boolean')
        {
            this._done = value;
        }
        else
        {
            console.error('error');
        }
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }

    static getdefaultTitle() {
        return 'Task';
    }
}
Task.count = 0; // статическое свойство


let task = new Task('Убрать комнату');
let task2 = new Task('Приготовить поесть');
let task3 = new Task();

// console.log(task instanceof Task);
task.complete();
console.log(task.done, task._done);