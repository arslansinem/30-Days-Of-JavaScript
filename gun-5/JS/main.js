//How to create an empty array
const arr = Array()

console.log(arr)

const arr1 = []
console.log(arr1)

//How to create an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const fruits = ['banana', 'orange', 'mango', 'avocado']
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB', 'GO']

//Print the array and its length
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

//Array can have items of different data types
const arr2 = [
    'Sinem',
    25,
    true,
    {country: 'Turkey', city: 'Ankara'},
    {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
]

console.log(arr2)

//Creating an array using split
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Apple, IBM, Amazon, Oracle, Microsoft'
const companies = companiesString.split(',')

console.log(companies)

//Accessing array items using index
//const fruits = ['banana', 'orange', 'mango', 'avocado']

let firstFruit = fruits[0]

console.log(firstFruit) //banana

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit) //avocado

//const numbers = [0, 3.14, 9.81, 37, 98.6, 100]

console.log(numbers.length) //to know the size of the array, which is 6
console.log(numbers)        //[0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])

lastNumber = numbers[numbers.length - 1]

console.log(lastNumber)

//const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB', 'GO']

console.log(webTechs)
console.log(webTechs[0])
console.log(webTechs[7])

lastTech = webTechs.length -1

console.log(webTechs[lastTech]) //GO

//Modifying array element
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

countries[0] = 'Afghanistan'        //Replacing Albania by Afghanistan

let lastCountry = countries.length - 1

console.log(countries[lastCountry]) //Kenya
console.log(countries)

countries[lastCountry] = 'Korea'    //Replacing Kenya by Korea

console.log(countries) //["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]


//METHODS TO MANIPULATE ARRAY

//Array Constructor

const arr3 = Array() //creates an empty array
console.log(arr3)

const eightEmptyValues = Array(8) //it creates eight empty values
console.log(eightEmptyValues)

//Creating static values with fill
const arr4 = Array() //creates an empty array
console.log(arr4)

const eightXValues = Array(8).fill('X') //it creates eight element values filled with X
console.log(eightXValues)

const eight0values = Array(8).fill(0)
console.log(eight0values)

const eight4values = Array(4).fill(4)
console.log(eight4values)

//Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList)  //[1, 2, 3, 4, 5, 6]
console.log(firstList)  //[1, 2, 3] 
console.log(secondList) //[4, 5, 6] it does not affect arrays

//Getting array length
const newNumbers = [1, 2, 3, 4, 5]
console.log(newNumbers.length) //5 is the size of the array

//Getting index an element in arr array
//indexOf() to check if an item exist in an array. If it exists it returns the index
//else it returns -1

//const newNumbers = [1, 2, 3, 4, 5]
console.log(newNumbers.indexOf(5)) //4
console.log(newNumbers.indexOf(2)) //1
console.log(newNumbers.indexOf(0)) //-1

//check items in a list
//const fruits = ['banana', 'orange', 'mango', 'avocado']


let chooseFruit = prompt('Please choose your fruit in lowercase letters:')
let index = fruits.indexOf(chooseFruit)


if (index === -1){
    console.log('This fruit does not exist in the array.')
}   else {
    console.log('This fruit does exist in the array.')
}

//we can also use ternary here
index === -1 
? console.log('This fruit does not exist in the array.')
: console.log('This fruit does exist in the array.')

//Getting last index of an element in array
//const newNumbers = [1, 2, 3, 4, 5]
console.log(newNumbers.lastIndexOf(2)) //1 bc its second index
console.log(newNumbers.lastIndexOf(7)) //-1 bc 7 doesnt exist

const newArray = [1, 2, 3, 4, 5, 1, 3]
console.log(newArray.lastIndexOf(1)) //5. bc last index of 1 at index 5
 
console.log(newNumbers.includes(5)) //true
console.log(newNumbers.includes(7)) //false

//Checking array: isArray() to check if the data typle is an array

//const newNumbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(newNumbers))

//Converting array to string
//const newNumbers = [1, 2, 3, 4, 5]
console.log(newNumbers.toString())

const names = ['Sinem', 'Tarık', 'Dilay', 'Talha']
console.log(names.toString())

//Joining array elements
//const newNumbers = [1, 2, 3, 4, 5]

console.log(newNumbers.join())

console.log(names.join())     //Sinem,Tarık,Dilay,Talha
console.log(names.join(''))   //SinemTarıkDilayTalha
console.log(names.join(' '))  //Sinem Tarık Dilay Talha
console.log(names.join(', ')) //Sinem, Tarık, Dilay, Talha

console.log(webTechs.join()) //HTML,CSS,JS,React,Redux,Node,MongDB,GO
console.log(webTechs.join(' # ')) //HTML # CSS # JS # React # Redux # Node # MongDB # GO

//Slice array elements
//To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
//const newNumbers = [1, 2, 3, 4, 5]

console.log(newNumbers.slice()) //it copies all item
console.log(newNumbers.slice(0)) //it copies all item
console.log(newNumbers.slice(0, newNumbers.length)) //it copies all item
console.log(newNumbers.slice(1,4))

//Splice method in array
//It takes three parameters. Starting, number of times to be removed and number of items to be add.
const numbs = [1, 2, 3, 4, 5]

numbs.splice()
console.log(numbs) //[1, 2, 3, 4, 5]

numbs.splice(0,1) //remove the first item
console.log(numbs)

numbs.splice(3, 3, 7, 8, 9) // -> starting from index 3(4), remove 3 elements(4,5) and insert 7,8,9.
console.log(numbs) //[2, 3, 4, 7, 8, 9]

//Adding item to an array using push
/* syntax
const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr)
['item1', 'item2', 'item3', 'new item']*/ 

//const numbs = [2, 3, 4, 7, 8, 9]
numbs.push(6)
console.log(numbs) //[2, 3, 4, 7, 8, 9, 6]

//Removing the end element using pop
numbs.pop() // -> remove last element
console.log(numbs) //[2, 3, 4, 7, 8, 9]

//Add an element from the beginning
numbs.unshift(0) //add one item from the beginning
console.log(numbs) //[0, 2, 3, 4, 7, 8, 9]

//Reversing array order
numbs.reverse()
console.log(numbs) //[9, 8, 7, 4, 3, 2, 0]


//Sorting elements in array
//const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB', 'GO']
webTechs.sort()
console.log(webTechs) //['CSS', 'GO', 'HTML', 'JS', 'MongDB', 'Node', 'React', 'Redux']

//Array of arrays

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [[1,2,3],[1,4,8]] 
console.log(arrayOfArray[1]) //0 olursa ilk index ([1,2,3]), 1 olursa ikinci indexi ([1,4,8]) verir.

//EXERCISES

//Find the length of your array
const myArr = [1,2,3,4,5,6]
console.log(myArr.length) //6

//Get the first item, the middle item and the last item of the array
console.log(myArr[0],myArr[3],myArr[5]) //1 4 6

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Sinem', 25, false, 'Engineer', 'Turkey', 'Female']
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

//Change each company name to uppercase and print them out
let upperCaseCompanies = []

for(let i = 0; i < itCompanies.length; i++){

    upperCaseCompanies.push(itCompanies[i].toUpperCase());
}
console.log(upperCaseCompanies)

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let checkingCompanies = itCompanies.includes('Amazon')
? console.log('Amazon')
: console.log('Company is not found.')

//Sort the array using sort() method
let sortCompanies = itCompanies.sort()
console.log(sortCompanies)

//Reverse the array using reverse() method
let reversedCompanies = itCompanies.reverse()
console.log(reversedCompanies)

//Slice out the first 3 companies from the array
let slicedCompanies = itCompanies.slice(2,4)
console.log(slicedCompanies)

//Remove all IT companies
let removedCompanies = itCompanies.splice()
console.log(removedCompanies)

//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')

console.log(words)
console.log(words.length)

//In the following shopping cart add, remove, edit items
const shoppingList = ['Milk','Coffee','Tea','Honey']

console.log(shoppingList)

shoppingList.push('Lemon')

console.log(shoppingList) //['Milk', 'Coffee', 'Tea', 'Honey', 'Lemon']

shoppingList.pop(' ')
console.log(shoppingList) //['Milk','Coffee','Tea','Honey']

console.log(shoppingList.splice(1,1)) //['Coffee']

console.log(shoppingList.join('-')) //Milk-Tea-Honey (Because we splice the Coffee)

console.log(shoppingList) // ['Milk', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingList.unshift('Meat')
console.log(shoppingList) //['Meat', 'Milk', 'Tea', 'Honey']

//add Sugar at the end of you shopping cart if it has not been already added
shoppingList.push('Sugar')
console.log(shoppingList)

//modify Tea to 'Green Tea'
shoppingList[2] = 'Green Tea'
console.log(shoppingList)

/* const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
] 
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. */

let checkingEthiopia = countries.includes('Ethiopia')

? console.log('Ethiopia')
: countries.push('Ethiopia') //Ethiopia


//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let checkWebTechs = webTechs.includes('Sass')

? console.log('Sass is a CSS preprocess.')
: webTechs.push('Sass')

console.log(webTechs)

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack) //["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort()

console.log(ages) //[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
console.log(ages.length) //10
console.log(ages[0],ages[9]) //19 26

//Find the range of the ages(max minus min)
console.log(ages[9]-ages[0])