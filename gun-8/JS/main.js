//SCOPE
//Window Global Object
a = 'JavaScript';
b = 10;

function letsLearnScope() {
    console.log(a,b)
    if (true) {
        console.log(a,b)
    }
}
console.log(a,b)

//Global Scope
let x = 'JavaScript';
let y = 10;

function learningScope() {
    console.log(x,y);
    if (true) {
        let x = 'Python'
        let y = 100
        console.log(x,y)
    }
    console.log(x,y)
}
learningScope()
console.log(x,y)