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
learningScope();
console.log(x,y);

//LOCAL SCOPE
let one = 'JavaScript'
let two = 10

function learnScope() {
    console.log(one,two);
    let value = false;

    if(true) {
        let one = 'Python'
        let two = 20
        let three = 30
        value != value;
        console.log(one,two,three,value)
    }
    console.log(one,two,value)
}
learnScope();
console.log(one,two);

function letsLearnVarScope() {
    var gravity = 9.81
    console.log(gravity)
  }
  console.log(gravity) // Uncaught ReferenceError: gravity is not defined
 
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3