//Function Decleration

//declaring a function without a parameter
/*function functionName() {
    //code goes here
}
functionName() //calling function by its name and with parentheses */

//function without a parameter and return
//a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}    
square() //4

//function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    
    console.log(sum)
}
addTwoNumbers() //a function has to be called by its name to be executed

function printFullName() {
    let firstName = 'Sinem'
    let lastName = 'Arslan'
    let space = ' '
    let fullName = firstName + space + lastName

    console.log(fullName)
}
printFullName() //Sinem Arslan

//FUNCTION RETURNING VALUE

function printFullName1() {
    let firstName1 = 'Tarık'
    let lastName1 = 'Avcı'
    let space1 = ' '
    let fullName1 = firstName1 + space1 + lastName1
    return fullName1
}
console.log(printFullName1()) //Tarık Avcı

//FUNCTION WITH A PARAMETER

/*function functionName(parm1) {
    //code goes here
}
functionName(parm1) //during calling or invoking one argument needed*/

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10)) //314.1592653589793

function square(number) {
    return number * number
}
console.log(square(10)) //100

//FUNCTION WITH TWO PARAMETERS
/*function functionName(parm1, parm2) {
    //code goes here
}
functionName(parm1,parm2)// during calling or invoking two arguments needed*/

// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne,numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
} 
sumTwoNumbers(10,20) //30 If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne,numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(sumTwoNumbers(10,20))

//FUNCTION WITH MANY PARAMETERS
/*function functionName(parm1, parm2, parm3,...){
    //code goes here
  }
  functionName(parm1,parm2,parm3,...)*/

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const arr = [1, 2, 3, 4, 5]
console.log(sumArrayValues(arr));

const areaOfCircle1 = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle1(10))

//FUNCTION WITH UNLIMITED NUMBER OF PARAMETERS
//unlimited number of parameters in regular function

/*function sumAllNums() {
    console.log(arguments)
}
sumAllNums(1,2,3,4)*/

//function declaration
function sumAllNums() {
    let sumOne = 0
    for (let i = 0; i < arguments.length; i++){
        sumOne += arguments[i]
    }
    return sumOne
}
console.log(sumAllNums(1,2,3,4)) //10
console.log(sumAllNums(10,20,13,40,10)) //93
console.log(sumAllNums(15,20,30,25,10,33,40)) //173

//unlimited number of parameters in arrow function
/*const sumAllNumbs(...args){
    console.log(args)
}
sumAllNumbs(1,2,3,4) // [1, 2, 3, 4]*/

//function declaration
function sumAllNumbs(...args) {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumAllNumbs(1,2,3,4))
console.log(sumAllNumbs(10,20,13,40,10)) //93
console.log(sumAllNumbs(15,20,30,25,10,33,40)) //173

//ANONYMOUS FUNCTION
const anonymousFun = function() {
    console.log('I am an anonymous function and my value is stored in anonymousFun')
}
anonymousFun()

//EXPRESSION FUNCTION
const square1 = function(n) {
    return n*n
}
console.log(square1(2)) //4

//SELF INVOKING FUNCTIONS
let squaredNum = (function(n) {
    return n * n
})(10)

console.log(squaredNum) //100

//ARROW FUNCTION
//1
const square2 = n => {
    return n * n
}
console.log(square2(2)) //4

//2
const square3 = n => n * n //we can write this one line in the code block
console.log(square3(2))

//3
const changeToUpperCase = arr => {
    const newArr = []
    for(const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

//4
const printMyName = (myFirstName, myLastName) => {
    return `${myFirstName} ${myLastName}`
}
console.log(printMyName('Sinem','Arslan'))

//5
const printMyFullName = (myFirstName1, myLastName1) => `${myFirstName1} ${myLastName1}`
console.log(printMyFullName('Sinem', 'Arslan'))

//FUNCTION WITH DEFAULT PARAMETERS

//1
function greetings(name = 'Tarık') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}
console.log(greetings())
console.log(greetings('Sinem'))

//2
function generateFullName(firstName='Tarık', lastName='Avcı') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName())
console.log(generateFullName('Sinem','Arslan'))

//3
function calculateAge(birthYear, currentYear=(2023)) {
    let age = currentYear - birthYear
    return age
}
console.log('Age:',calculateAge(1997))

//4
function weightOfObject(mass, gravity=(9.81)) {
    let weight = mass * gravity + 'N'
    return weight
}
console.log('Weight of an object in Newton:', weightOfObject(100))

//5
const greeting = (name='Tarık') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
}
console.log(greeting())
console.log(greeting('Sinem'))

