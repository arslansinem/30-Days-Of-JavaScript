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
/*`parseInt()` is a function used in the JavaScript programming language to convert a string into an integer.
The function takes a string as a parameter and tries to find the valid numeric value starting from the beginning.
It then returns this value as an integer.

When evaluating the string, the function applies the following rules:

Spaces: The function ignores any leading and trailing spaces in the string.
Sign: If the string starts with "+" or "-", the function recognizes the sign to indicate a positive or negative
number.
Digits: The function recognizes consecutive digits found in the string and converts them into an integer.
It stops the conversion process after encountering non-digit characters following the initial digit.
Non-numeric Characters: The function stops the conversion when it encounters the first non-numeric character
following the digits and returns the found number. Therefore, if there are non-numeric characters at the
end of the string, the function ignores any digits that come after those characters.

Here's an example JavaScript code snippet demonstrating some use cases of the `parseInt()` function:

```javascript
let num1 = parseInt("123");    // 123
let num2 = parseInt("456px");  // 456
let num3 = parseInt("abc123"); // NaN
let num4 = parseInt("7.89");   // 7
```

In the above example, the `parseInt()` function converts different string values into integers.
In the first example, the string "123" is a complete number from the beginning, so it is converted to 123.
In the second example, the string "456px" contains a numeric value from the start, so it is converted to 456.
In the third example, the string "abc123" does not contain a numeric value, resulting in the conversion result
of NaN (Not-a-Number). Finally, in the fourth example, the string "7.89" contains a non-numeric character (dot),
so the function ignores the digits after the dot and converts it to 7.

The `parseInt()` function converts the string to an integer in the decimal base. 
However, it is also possible to perform conversions using different number bases by using the radix parameter,
which is the second parameter of the function. For example, by setting the radix parameter to 16,
you can convert a hexadecimal string to an integer in the decimal base. */

let num1 = parseInt("123");    // 123
let num2 = parseInt("456px");  // 456
let num3 = parseInt("abc123"); // NaN
let num4 = parseInt("7.89");   // 7

console.log(num1, num2, num3, num4)

let numbr = '10'
let numInt = parseInt(numbr)

console.log(numInt) //10

// let numInt = Number(numbr)
let numIntgr = Number(num)

console.log(numInt) //10

let numIntg = +num

console.log(numInt) //10

//String to float
let numFl = '9.81'
let numFloat = parseFloat(numFl)

console.log(numFloat) //9.81

let numFlo = Number(numFl)

console.log(numFlo) //9.81

let numFlNm = +numFl

console.log(numFlNm) //9.81

//Float to Int
let flInt = '7.21'
let flToInt = parseInt(flInt)

console.log(flToInt)

//DAY 2 EXERCISES

//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
//Print the length of the string on the browser console using console.log() [21]

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3))

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(0,2))

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))

//Split the string into an array using split() method
console.log(challenge.split())

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(''))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let socialNetwork = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(socialNetwork.split(','))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let pythonChallenge = challenge.replace('JavaScript','Python')

console.log(pythonChallenge)

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

/* Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let because = 'You cannot end a sentence with because because because is a conjunction'

console.log(because.indexOf('because'))

/* Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
console.log(because.lastIndexOf('because'))

/* Use search to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
console.log(because.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let thirtyDays = ' 30 Days Of JavaScript '
console.log(thirtyDays.trim(' '))
console.log(thirtyDays)

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(newString.startsWith('30'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(newString.endsWith('JavaScript'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(newString.match(/a/g))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let days = '30 Days of'

console.log(days.concat(' JavaScript'))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(newString.repeat(2))

//Using console.log() print out the following statement: 
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let newQuote = 'The quote "There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.'

console.log(newQuote);

//Using console.log() print out the following quote by Mother Teresa:
let qouteTer = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
console.log(qouteTer)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let checking = '10'

console.log(typeof checking)

let checkingType = parseInt(checking)

console.log(typeof checkingType)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatNum = '9.8'
console.log(typeof floatNum)

let floatNumb = Math.ceil(floatNum)
console.log(floatNumb)

//Check if 'on' is found in both python and jargon
let python = 'python'
let jargon = 'jargon'

console.log(jargon.includes('on'),python.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'

console.log(sentence.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.floor(Math.random() * 101)

console.log(randomNumber)

//Generate a random number between 50 and 100 inclusively.
/*const num = Math.floor(Math.random() * 51) + 50;
console.log(num); */

//Access the 'JavaScript' string characters using a random number.
console.log(firstLetter) //its defined above

//Use substr to slice out the phrase because because because from the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log(because.substr(31,23))

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
//Count the number of word love in this sentence.
let loveCount = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(loveCount.match(/love/gi))

//Clean the following text.
/* const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. 
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple.;
I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? 
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' */

const fSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple.;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanedText = fSentence.replace(/[^\w\s]/g, '')

console.log(cleanedText)

//Calculate the total annual income of the person by extracting the numbers from the following text. 
//'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(12*(5000+15000)+10000)