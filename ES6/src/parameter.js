function greet(greeting = 'Hello', name = 'friend')
{
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');

function sum(...values)
{
    let sum = 0;
    if(values instanceof Array)
    {
        values.forEach((value) =>
        {
            sum += value;
        });
    }


    console.log(sum);
}

function sum2(...values)
{
    console.log(values.reduce((prevValue, currentValue) => {
        return prevValue + currentValue
    }));

}

let nums = [1,2,3,4,5];

sum2(...nums);