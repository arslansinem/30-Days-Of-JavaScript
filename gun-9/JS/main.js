//a callback function, the name off the function could be any name
const callback = (n) => {
    return n ** 2
}

//function that takes other function as a callback
function cube(callback,n) {
    return callback(n) * n
}
console.log(cube(callback, 3))

//returning function
//high order functions return function as a value
const higherOrder = n => {
    const doSomething = m => {
        const doWhatever = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers))

//The above example can be simplified as follows:
const numbersOne = [1, 2, 3, 4]

const sumArrays = arr => {
    let sum = 0
    arr.forEach(function(element){
        sum += element
    })
    return sum
}

//Setting Interval using a setInterval function
/*SYNTAX
function callback() {
    //code goes here
}
setInterval(callback, duration)*/

function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000)

//Setting a time using a setTimeout
/*SYNTAX
function callback() {
    //code goes here
}
setTimeout(sayHello,2000) // it prints hello after it waits for 2 seconds. */

//forEach
/*SYNTAX
arr.forEach(function(element,index,arr){
    console.log(index,element,arr)
})
// The above code can be written using arrow function
arr.forEach((element,index,arr) => {
    console.log(index,element,arr)
})

// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))*/

let sum = 0;
//const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

//map
const arr = [1,2,3]
const modifiedArray = arr.map(function (element,index,arr){
    return element
})
console.log(modifiedArray)

//const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

const names = ['Sinem', 'Tarık', 'Talha', 'Dilay', 'Muharrem']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesFirstThreeLetters = countries.map((country) => country.toUpperCase().slice(0,3))
console.log(countriesFirstThreeLetters)

//filter: filter out items which full fill filtering conditions and return a new array
const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const scores = [
    {name: 'Sinem', score: 95},
    {name: 'Tarık', score: 98},
    {name: 'Talha', score: 80},
    {name: 'Dilay', score: 100},
]

const scoresGreaterEighty = scores.filter((score) => score.score>80)
console.log(scoresGreaterEighty)

//reduce
/*SYNTAX
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)*/

//const numbers = [1, 2, 3, 4, 5]
const sumOne = numbers.reduce((acc,cur) => acc + cur, 0)

console.log(sumOne);

//every: checks if all the elements are similar in one aspect. It returns boolean
//const names = ['Sinem', 'Tarık', 'Talha', 'Dilay', Muharrem']

const areAllStr = names.every((name) => typeof name === 'string') //Are all strings?
console.log(areAllStr)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true)

console.log(areAllTrue) //true

//Find: return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age <20)

console.log(age)

//const names = ['Sinem', 'Tarık', 'Talha', 'Dilay', Muharrem']
const result = names.find((name) => name.length > 7)

console.log(result)

//findIndex: Return the position of the first element which satisfies the condition
//const names = ['Sinem', 'Tarık', 'Talha', 'Dilay', Muharrem']
//const ages = [24, 22, 25, 32, 35, 18]
const resultOne = names.findIndex((name) => name.length > 7)
console.log(resultOne) // 0

const ageOne = ages.findIndex

//some: Check if some of the elements are similar in one aspect. It returns boolean
//const names = ['Sinem', 'Tarık', 'Talha', 'Dilay', Muharrem']
//const bools = [true, true, true, true]
const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue) //true

//sort 
//Sorting string values
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

//Sorting Numeric values
//const numbers = [1, 2, 3, 4, 5]

console.log(numbers.sort())

numbers.sort(function (a,b){
    return a-b
})

console.log(numbers)