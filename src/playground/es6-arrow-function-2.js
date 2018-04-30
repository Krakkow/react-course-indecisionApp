// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a+b;
}

console.log(add(55,55, 1001));


// this keyword - no longer bound

//Old ways, in which we get an error for name as undefined because the function is anonymous
// const user = {
//     name: 'Or',
//     cities: ['Herzliya', 'Petah-Tikwa', 'Ness-Ziona'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach(function (city) {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

// New way with the arrow function
const user = {
    name: 'Or',
    cities: ['Herzliya', 'Petah-Tikwa', 'Ness-Ziona'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

    }
};
console.log(user.printPlacesLived());

//Challenge Area
const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

