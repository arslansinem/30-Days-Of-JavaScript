// For loop structure
//for(initialization, condition, increment/decrement){
    // code goes here}

for(let i = 0; i <= 5; i++) {
    console.log(i)
} //// 0 1 2 3 4 5

for(let i = 5; i >= 0; i--) {
    console.log(i)
} // 5 4 3 2 1 0

for(let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i*i}`)
} 
/* 
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25 
*/

const countries = ['Finland','Sweden','Denmark','Norway','Iceland']
const newArr = []

for(let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

//Adding all elements in the array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] 
}
console.log(sum) //15

//Creating a new array based on the existing array
//const numbers = [1, 2, 3, 4, 5]
const arrOne = []
let sumOne =  0

for(let i = 0; i < numbers.length; i++) {
    arrOne.push(numbers[i] ** 2)
}
console.log(arrOne) // [1, 4, 9, 16, 25]

//WHILE LOOP
let i = 0
while (i <= 5) {
    console.log(i)
    i++
} // 0 1 2 3 4 5

//DO WHILE LOOP
let a = 0
do {
    console.log(a)
    a++
} while (a <= 5) // 0 1 2 3 4 5

//FOR OF LOOP
//const numbers = [1, 2, 3, 4, 5]
for(const number of numbers) {
    console.log(number)
} // 1 2 3 4 5

for(const number of numbers) {
    console.log(number*number)
} // 1 4 9 16 25

//adding all the numbers in the array
let sumTwo = 0
for(const num of numbers) {
    sumTwo = sumTwo + num
}
console.log(sumTwo) //15

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for(const tech of webTechs) {
    console.log(tech.toUpperCase())
} //HTML CSS JAVASCRIPT REACT REDUX NODE MONGODB

for(const techs of webTechs) {
    console.log(techs[0]) 
} //get only the first letter of each element,  H C J R(2) N M

//const countries = ['Finland','Sweden','Denmark','Norway','Iceland']

const arrTwo = []

for(const country of countries) {
    arrTwo.push(country.toUpperCase())
}
console.log(arrTwo)

//BREAK
for(let i = 0; i <= 5; i++) {
    if(i == 3){
        break
    } console.log(i)
} //0 1 2

//CONTINUE
for(let i = 0; i <= 5; i++) {
    if(i == 3){
        continue
    } console.log(i)
}