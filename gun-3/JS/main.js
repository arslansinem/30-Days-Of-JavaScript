let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div,remainder, powerOf)

const PI = 3.14
let radius = 100 //length in meter

//let us calculate area of a circle
const areaOfCircle = PI * radius * radius

console.log(areaOfCircle)


const gravity = 9.81 //in m/s2
let mass =72 //in kilogram

//let us calculate weight of an object
const weight = mass * gravity

console.log(weight)

const boilingPoint = 100
const bodyTemperature = 37

console.log( `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemperature} oC. \nThe gravity of earth is ${gravity} m/s2.`)

console.log(3 > 2)      //true
console.log(3 == 2)     //false, == means equal in value only
console.log(3 == '3')   //true
console.log(3 === '3')  //false, === means equal in value and data type: exactly equal.
console.log(3 === 3)    //true
console.log(3 != 2)     //true
console.log(0 == false) //true, because false is 0
console.log(0 === false)//false, data types are different
console.log(0 == '')    //true
console.log(0 == ' ')   //true
console.log(0 === '')   //false, not exactly the same
console.log(undefined == null)//true
console.log(undefined === true)//false
console.log(NaN == NaN) //false
console.log(NaN = NaN)  //false
console.log(typeof NaN) //number

console.log('mango'.length == 'avocado'.length) //false
console.log('mango'.length != 'avocado'.length) //true
console.log('meat'.length == 'milk'.length)     //true
console.log('meat'.length < 'avocado'.length)   //true


// && ampersand operator example
const check = 4 > 3 && 10 > 5        //true&&true -> true
const checkOne = 4 > 3 && 10 < 5     //true&&false -> false
const checkTwo = 4 < 3 && 10 < 5     //false&&false -> false

console.log(check, checkOne, checkTwo)

// || pipe or operator example
const checkThree = 4 > 3 || 10 > 5   //true||true -> true
const checkFour = 4 > 3 || 10 < 5    //true||false -> true
const checkFive = 4 < 3 || 10 < 5      //false||false -> false

console.log(checkThree, checkFour, checkFive)

// ! Negation examples
let checkSix = 4 > 3    //true
let checkSeven = !(4 > 3) //false
let isLightOn = true
let isLightOff = !isLightOn //false
let isMarried = !false //true

console.log(checkSix, checkSeven, isLightOff, isMarried)

//pre-increment
let count = 0

console.log(++count) //1
console.log(count)   //1

//post-increment
let countZero = 0

console.log(countZero++) //0
console.log(countZero)   //1


let isItRaining = true

isItRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')

isRainingNow = false

isRainingNow
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')

let number = 5
number > 0
? console.log(`${number} is a positive number.`)
: console.log(`${number} is a negative number.`)


number = -5
number > 0
? console.log(`${number} is a positive number.`)
: console.log(`${number} is a negative number.`)

//alert('I love you.')

//prompt() method
/*prompt ('required text', 'optional text')

let newNumber = prompt('Enter number', 'number goes here')

console.log(newNumber)

//confirm() method
const agree = confirm('Are you sure you like to delete?')

console.log(agree) */

//creating time object
const now = new Date()

console.log(now)

//getting full year
const nowYear = new Date()
console.log(nowYear.getFullYear())

//getting month
const nowMonth = new Date()
console.log(nowMonth.getMonth()) //6, because its July. month(0-11)

//getting day
const nowDay = new Date()
console.log(nowDay.getDay()) //6, because its saturday (0-6 sunday is 0, monday is 1)

//getting hours
const nowHour = new Date()
console.log(nowHour.getHours())

//getting minutes
const nowMinutes = new Date()
console.log(nowMinutes.getMinutes())

//getting seconds
const nowSecs = new Date()
console.log(nowSecs.getSeconds())

/*getting time
this method give time in miliseconds starting from January 1, 1970. Its also known as Unix time. */

const nowTime = new Date()
console.log(nowTime.getTime())

const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

const nowReadable = new Date()
console.log(nowReadable)

const year = now.getFullYear()
console.log(year)

const month = now.getMonth() + 1
console.log(month)

const date = now.getDate()
console.log(date)

const hours = now.getHours()
console.log(hours)

const minutes = now.getMinutes()
console.log(minutes)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

//EXERCISES
let firstName = 'Sinem'
let lastName = 'Arslan'
let country = 'Turkey'
let city = 'Ankara'
let age = 25
let isSheMarried = false
let yearIs = 2023

console.log(typeof(firstName), typeof(country), typeof(age), typeof(isSheMarried))

let numberOne = '10'
let numberTwo = 10

console.log(numberOne === numberTwo)

let numberThree = parseInt('9.8')

console.log(numTwo === numberThree)

//Find the length of python and jargon and make a falsy comparison statement.
let python = 'python'
let jargon = 'jargon'

console.log(length.python === length.jargon)

console.log(!(4<3))   //true
console.log(!(4>3))   //false
console.log(!(false)) //true

console.log(python.includes('on'), jargon.includes('on'))

//EXERCISES LEVEL 2
/*
let baseOfTriangle = prompt('Enter Base')
let heightOfTriangle = prompt('Enter Height')
console.log(`The area of triangle is ${0.5*baseOfTriangle*heightOfTriangle}`)*/

//Compare your first name length and your family name length and you should get this output.
let a = length.firstName
let b = length.lastName

a > b 
? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
: console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)


//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 25
let yourAge = 29

myAge < yourAge
? console.log(`I'm ${yourAge-myAge} years younger than you.`)
: console.log(`I'm ${myAge-yourAge} years older than you.`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt('Enter your birth year:')
let driverAge = year-birthYear

driverAge > 18
? console.log('You are old enough to drive.')
: console.log(`You are ${driverAge}. You will be allowed to drive after ${18-driverAge} years.`)

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let userAge = prompt('Enter your age:')

console.log(`You lived ${userAge*365*24*60*60} seconds.`)