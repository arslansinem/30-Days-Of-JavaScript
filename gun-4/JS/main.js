//if
let num = 3
if (num > 0)
{
    console.log(`${num} is a positive number.`)
}

//if else
let isRaining = true
if (isRaining = true){
  
    console.log('Remember to take your rain coat.')

} else {

    console.log('No need to take your rain coat.')
}

//if else if else
let weather = 'cloudy'
if (weather === 'rainy'){
    console.log('You need a rain coat.')
}   else if (weather === 'cloudy'){
    console.log('It might be cold, you need a jacket.')
}   else if (weather === 'sunny'){
    console.log('Go out freely.')
}   else {
    console.log('No need for rain coat.')
}

/* switch (is alternative for if else if else else)
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code }  
*/

let dayUserInput = prompt('What day is today?')
let day = dayUserInput.toLowerCase()

switch(day) {
    case 'monday':
        console.log('Today is Monday.')
        break
    case 'tuesday':
        console.log('Today is Tuesday.')
        break
    case 'wednesday':
        console.log('Today is Wednesday.')
        break
    case 'thursday':
        console.log('Today is Thursday.')
        break
    case 'friday':
        console.log('Today is Friday.')
        break
    case 'saturday':
        console.log('Today is Saturday.')
        break
    case 'sunday':
        console.log('Today is Sunday.')
        break
        default:
            console.log('It is not a week day.')
}

//EXERCISES

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4
let b = 3

//if else
if (a > b){
    console.log('a is greater than b')
}   else {
    console.log('a is less than b')
}

//ternary operators
a > b
? console.log('a is greater than b')
: console.log('a is less than b')

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let userNumber = prompt('Write your number here:')
let checkingNumber = (`${userNumber/2}`)

checkingNumber == 0
? console.log(`${userNumber} is an even number.`)
: console.log(`${userNumber} is an odd number.`)

//Write a code which can give grades to students according to theirs scores:
let score = prompt('Write your score here:')

if (100 > score && score > 80) {
    console.log('Your grade is A.')
}   else if (89 > score && score > 70) {
    console.log('Your grade is B.')
}   else if (69 > score && score > 60) {
    console.log('Your grade is C.')
}   else if (59 > score && score > 50) {
    console.log('Your grade is D.')
}   else if (49 > score && score > 40) {
    console.log('Your grade is F.')
}   else {
    console.log('You did not write a valid score.')
}

//Check if the season is Autumn, Winter, Spring or Summer.
let weatherIs = prompt('What month do you like the most?');
let season = weatherIs.toLowerCase();

switch (season) {
    case 'september':
    case 'october':
    case 'november':
        console.log('Your favorite month is in the Autumn season.');
        break
    case 'december':
    case 'january':
    case 'february':
        console.log('Your favorite month is in the Winter season.');
        break
    case 'march':
    case 'april':
    case 'may':
        console.log('Your favorite month is in the Spring season.');
        break
    case 'june':
    case 'july':
    case 'august':
        console.log('Your favorite month is in the Summer season.');
        break
    default:
        console.log('You did not write a valid month.');
}
