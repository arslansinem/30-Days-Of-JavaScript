let word = 'Javascript'
word[0] = 'Y'
console.log(word)

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]

let numbs = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(numbs == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
// const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(gravity, mass, boilingPoint, bodyTemp)

/* MATH OBJECT */
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding
console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

//Creating random number between 0 to 10
const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10
console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9
console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)


//Strings
let space = ' ' // an empty space string
let language = 'JavaScript'
let job = 'engineer'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

console.log(space, language, job, quote, quotWithBackTick)

//Connecting strings together
let firstName = 'Sinem'
let lastName = 'Arslan'

// let fullName = firstName + '' + lastName // concatenation, merging two string together
//console.log(fullName)

// Declaring different variables of different data types
let country = 'Turkey'
let city = 'Ankara'
let age = 25
let fullName = firstName + ' ' + lastName
let personInfoOne = 'My name is ' + fullName + '. I am ' + age + ' years old. I live in ' + city + '/' + country; // ES5 string addition

console.log(personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t\t3\t\t5')
console.log('Day 2\t\t3\t\t5')
console.log('Day 3\t\t3\t\t5')
console.log('Day 4\t\t3\t\t5')
console.log('This is a backslash symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("I'm learning new programming language! \'Hello, World!\'")
console.log('This project written by Sinem Arslan in \'July 2023\'.')


console.log(`The sum of 2 and 3 is 5`)              // statically writing the data

let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically


let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

let x = 2
let y = 3

console.log(`${x} is greater than ${y}: ${x > y}`)

console.log(js.length)         // 10
console.log(firstName.length)  // 5

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
console.log(string.length) //bir stringin uzunluğunu gösterir

/*      STRING METHODS
        toUpperCase     */
console.log(string.toUpperCase())     // JAVASCRIPT

let myName = 'Sinem'
console.log(firstName.toUpperCase())  // SİNEM

let myCountry = 'Turkey'
console.log(country.toUpperCase())    // TURKEY

/*      STRING METHODS
        toLowerCase     */
console.log(string.toLowerCase())     // javascript
console.log(firstName.toLowerCase())  // sinem
console.log(country.toLowerCase())   // turkey

//substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(string.substr(4,6))    // Script
console.log(country.substr(3, 4))   // key

//substring(): It takes two arguments, 
//the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script
console.log(country.substring(0, 3))   // Tur
console.log(country.substring(3, 7))   // key
console.log(country.substring(3))      // key

//split(): The split method splits a string at a specified place.
let newString = '30 Days Of JavaScript'

console.log(newString.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(newString.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(firstName.split())    // Change to an array - > ["Sinem"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["S", "i", "n", "e", "m"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): Removes trailing space in the beginning or the end of a string.
let lastString = '   30 Days Of JavaScript   '

console.log(lastString)
console.log(lastString.trim(' '))

let lastFirstName = '   Sinem   '
console.log(lastFirstName)
console.log(lastFirstName.trim())  // still removes spaces at the beginning and the end of the string

let jsString = '30 Days Of JavaScript'

console.log(jsString.includes('Days'))     // true
console.log(jsString.includes('days'))     // false - it is case sensitive!
console.log(jsString.includes('Script'))   // true
console.log(jsString.includes('script'))   // false
console.log(jsString.includes('java'))     // false
console.log(jsString.includes('Java'))     // true

console.log(country.includes('tur'))     // false
console.log(country.includes('Tur'))     // true
console.log(country.includes('key'))    // true
console.log(country.includes('Key'))    // false

/* replace(): takes as a parameter the old substring and a new substring.
string.replace(oldsubstring, newsubstring) */
console.log(jsString.replace('JavaScript', 'Python')) // 30 Days Of Python
console.log(country.replace('Tur', 'Nomon'))       // Nomonkey

/*charAt(): Takes index and it returns the value at that index
string.charAt(index)*/
console.log(jsString.charAt(0))        // 3
let jsLastIndex = jsString.length - 1
console.log(jsString.charAt(jsLastIndex)) // t

/*charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
string.charCodeAt(index)*/
console.log(jsString.charCodeAt(3))
console.log(jsString.charCodeAt(jsLastIndex))

/*lastIndexOf(): Takes a substring and if the substring exists in a string it returns the 
last position of the substring if it does not exist it returns -1 
string.lastIndexOf*/
let loveJs = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(loveJs.lastIndexOf('love'))
console.log(loveJs.lastIndexOf('JavaScript'))
console.log(loveJs.lastIndexOf('you'))

/*concat(): it takes many substrings and joins them.
string.concat(substring, substring, substring)*/

let place = 'There is'

console.log(place.concat(" no", " place", " like", " home."))

/*startsWith: it takes a substring as an argument and it checks if the string starts with
that specified substring. It returns a boolean(true or false). 
string.startsWith(substring)*/
let love = 'Love is the most powerful feeling in this world.'

console.log(love.startsWith('Love')) //true
console.log(love.startsWith('powerful')) //false

/*endsWith: it takes a substring as an argument and it checks if the string ends with
that specified substring. It returns a boolean(true or false).
string.endsWith(substring)*/
console.log(love.endsWith('world.')) //true
console.log(love.endsWith('Love')) //false

/*search: it takes a substring as an argument and it returns the index of the first match.
The search value can be a string or a regular expression pattern.
string.search(substring)*/
console.log(loveJs.search('JavaScript')) //7 (It starts where index is 0 and gives the first "JavaScript" word.)
console.log(loveJs.search(/javascript/gi)) //7 if it didnt find any matches the output will be -1. 
//g means to search in the whole text and i means case-insensetive

/*match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match
if not it returns null. It starts with / sign and ends with / sign.
string.match(substring)*/

console.log(loveJs.match('love'))

let pattern = /love/gi

console.log(loveJs.match(pattern))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

console.log("1",txt.match(regEx))
console.log("2",txt.match(/\d+/g))

/*repeat(): it takes a number as argument and it returns the repeated version of the string.
string.repeat(n)*/
console.log(jsString.repeat(3))

//String to Int

let numbr = '10'
let numInt = parseInt(numbr)

console.log(numInt)

// let numInt = Number(numbr)