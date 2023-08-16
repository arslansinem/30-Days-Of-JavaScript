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
  const personOne = {
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


  personOne.nationality = 'Turkish'
  personOne.country= 'Turkey'
  personOne.title = 'engineer'
  personOne.skills.push('SAP')
  personOne.isMarried = false
  
  console.log(personOne)

  personOne.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}. \nShe lives in ${this.country}.\nShe studies ${skills}.`
    return statement

  }
  console.log(personOne)
  console.log(personOne.getPersonInfo())

  //Object Methods
  //Object.assign: To copy an object without modifying the original object

  const personTwo = {
    firstName: 'Sinem',
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
    title: 'engineer',
    address: {
        street: 'Cukurambar',
        pobox: 2002,
        city: 'Ankara'
    },
    getPersonInfo: function() {
        return `I'm ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}`
    }
  }

  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

  //Getting object keys using Object.keys()
  //Object.keys: To get the keys or properties of an object as an array

  const keys = Object.keys(copyPerson)
  console.log(keys)

  //Getting object values using Object.values()
  //Object.values:To get values of an object as an array

  const values = Object.values(copyPerson)
  console.log(values)

  //Getting object keys and values using Object.entries()
  
  const entries = Object.entries(copyPerson)
  console.log(entries)

  //Checking properties using hasOwnProperty()
  //hasOwnProperty: To check if a specific key or property exist in an object
  console.log(copyPerson.hasOwnProperty('name'))
  console.log(copyPerson.hasOwnProperty('score'))


  //EXERCISES
  //Create an empty object called dog
  const dog = {};

  //Print the the dog object on the console
  console.log(dog)

  //Add name, color, age and bark properties for the dog object. The bark property is a method which return woof woof
  dog.name = 'Jessy'
  dog.color = 'white'
  dog.bark = 'woof woof'

  //Get name, legs, color, age and bark value from the dog object
  console.log(dog)

  //Set new properties the dog object: breed, getDogInfo

  dog.getDogInfo = function(){
    let statement = `Her name is ${this.name}. Her color is ${this.color} and when she talks she says '${this.bark}'. `
    return statement
  }
  console.log(dog.getDogInfo())

//QUESTION

  const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
    
  }
 
  let personWithMostSkills = Object.keys(users).reduce((personWithMostSkills, user) => {
    if (users[user].skills.length > users[personWithMostSkills].skills.length) {
      return user;
    } else {
      return personWithMostSkills;
    }
  });
  
  console.log(personWithMostSkills); 
