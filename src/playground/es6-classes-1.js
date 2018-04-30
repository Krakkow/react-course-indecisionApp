/**
 * We will create class/classes in this file in the es6 format/syntax
 */

/**
 * Exercise:
 * Setup constructor to take name and age (default to 0)
 * getDescription - Person is XX year(s) old.
 */

// when creating a class we should use a capital letter 
class Person {
    //You can define a default value in the constructor by applying some logic in the parameters clause
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        //Added for the exercise and the setting of age to 0 as default
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, I am ' + this.name + '!';
        // another es6 feature Template Strings
        return `Hi, I am ${this.name}!`;
    }

    //Added for the exercise
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation) {
    super(name);
    this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting = greeting += ` and I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Or Kowalsky', 31, 'CS', 'Herzliya');
console.log(me.getGreeting());
// console.log(me.getDescription());
// console.log(me.hasMajor());
const him = new Traveler('Or Kowalsky', 'Herzliya');
console.log(him.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
// console.log(other.getDescription());
// console.log(other.hasMajor());
