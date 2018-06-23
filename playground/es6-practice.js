
// const user2 = {
//     name: 'Delowar Hossain',
//     cities: ['Dhaka', 'Dilhi', 'Korachi'],
//     citiesLived: function () {
//         const that = this;
//         this.cities.forEach((x) => {
//             console.log(this.name + ' ' + x);
//         });
//     }
// };

// user2.citiesLived();


// const multiplier = {
//     numbers: [10, 20, 30, 40, 50],
//     multipleBy: 5,
//     multiply: function () {
//         return this.numbers.map((x) => x * this.multipleBy);
//     }
// };

// console.log(multiplier.multiply());






// // class



// class Person {
//     constructor(name = 'Anonymous', age = 'Unknown') {
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting() {
//         return `Hi, I'm ${this.name}!`;
//     }
//     getDescription() {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// class Student extends Person {
//     constructor(name, age, major) {
//         super(name, age);
//         this.major = major;
//     }
//     hasMajor() {
//         return !!this.major;
//     }
//     getDescription() {
//         let description = super.getDescription();
//         if (this.hasMajor()) {
//             description += `The major is ${this.major}`;
//         }
//         return description;
//     }
// }


// class Traveller extends Person {
//     constructor(name, age, location) {
//         super(name, age);
//         this.location = location;
//     }
//     hasLocation() {
//         return !!this.location;
//     }
//     getGreeting() {
//         let greeting = super.getGreeting();
//         if (this.hasLocation()) {
//             greeting += ` I'm from ${this.location}`;
//         }
//         return greeting;
//     }
// }

// const dh = new Student('Delowar', 21, 'Science');
// const mony = new Student('Mony', 18);
// const trv = new Traveller('Delowar Hossain', 20, 'Bangladesh');

// console.log(dh.getDescription());
// console.log(mony.getDescription()); 
// console.log(trv.getGreeting()); 
