//Creating an empty object

//const person = {}

//Creating an objecting with values
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)

/* const person = {
    firstName: 'Sinem',
    lastName: 'Arslan',
    age: 26,
    country: 'Turkey',
    city: 'Ankara',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'SQL'
    ],
    isMarried: true
}
console.log(person) */

/*Getting values from an object
We can access values of object using two methods:
1. using . followed by key name if the key-name is a one word
2. using square bracket and a quote*/

const person = {
    firstName: 'Sinem',
    lastName: 'Arslan',
    age: 26,
    country: 'Turkey',
    city: 'Ankara',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'SQL'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number':'+905366411661'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) //undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

//Creating Object Methods
/*const person = {
    firstName: 'Sinem',
    lastName: 'Arslan',
    age: 26,
    country: 'Turkey',
    city: 'Ankara',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'SQL'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  console.log(person.getFullName()) //Sinem Arslan
  */

  //Setting New Key For An Object
  