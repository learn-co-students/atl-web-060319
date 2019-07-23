// Shiny Javascript 🐶 

// Let's build an object called `sam`:
let sam = {
    name: 'Sam', 
    occupation: 'Dope developer',
    hobbies: ['kayaking', 'hiking', 'skydiving'],
    favColor: 'teal',
    address: {
      street: '123 Marietta St.', 
      zip: 30032
    }
  }
  
  // Destructuring w/ a default value:
  let { occupation = "Dentist" } = sam 

  let occupation = sam.occupation // same as above, but there's no default value
  
  // Key-value assignment shortcut:
  let food = 'ice cream'
  let brand = 'ben & jerrys' 
  
  let dessert = {
    food, 
    brand
  }
  
  let dessert = { // this object is the same as the one defined above
    food: food, 
    brand: brand 
  }

  // Spread Operator - spreads the key-value pairs of an object into another object:
  let mint = {
    kind: 'mint chocolate chunk',
    ...dessert      
  }
  
  // Object.assign() - similar to the spread operator, can spread or copy one object into another object:
  let mintCopy = Object.assign({}, mint)
  
  // Arrow Functions & Callbacks:
  let implicitReturn = () => 'hi'
  let explicitReturn = () => {
    return 'hi'
  }
    /**
     *  A callback function is used to iterate over the sam.hobbies array
     *  updatedHobbies becomes a new array
     * */ 
  let updatedHobbies = sam.hobbies.map((hobby) => {
      return `Sarah loves ${hobby}!`
  })
  
  console.log("Sam's updated hobbies: ", updatedHobbies)
  
  // Function Binding:
  let jaques = {
    name: 'Jaques', 
    occupation: 'Novelist',
  }
    // Define a function outside the scope of an object
  function sayName() {
    // Internally to sayName function:  
    // The `this` keyword would be the global `window` object
    // `this.name` would be undefined since we have not defined a `name` property on the global `window` object 
      console.log(`My name is ${this.name}`)
  }

    /**
     *  Passing the `jaques` object into `.bind()` will give the `sayName` function the context of `jaques`.
     *  Calling `.bind` on `sayName` returns a new function which we've called `newSayNameFunction`.
     */
  let newSayNameFunction = sayName.bind(jaques)

    // We must call `newSayNameFunction()` in order to see the console.log of 'My name is Jaques'.
  newSayNameFunction() 
  
  // Class Instance properties & Class syntax:
  class Person {
    constructor({ name, age }) {
      this.name = name
      this.age = age
    }
  
    speak() {
      return this.name 
    }
  }
  
  let sarah = new Person({ name: 'Sarah', age: 28 })
  
  // Dynamic Object Keys:
  let emptyObj = {}
  let descriptions = ['amazing', 'cool', 'awesome']
  
  sam.hobbies.forEach((hobby, index) => {
      // assigning a new key-value pair dynamically with syntax below
      // obj[someVariable] = someNewValue
    return emptyObj[hobby] = descriptions[index]
  })
  
  console.log(emptyObj) // { kyacking: 'amazing', hiking: 'cool', skydiving: 'awesome' }