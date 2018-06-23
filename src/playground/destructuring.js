const person = {
    name: 'Delowar',
    age: 26,
    location: {
        city: 'Dhaka',
        temp: 92
    }
}

const {name, age} = person
console.log(`My Name is: ${name} & I'm ${age} years old`)

const { temp, city } = person.location

console.log(`It's ${temp} in ${city}`)