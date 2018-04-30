// //es5 function

// function square(x) {
// return x*x
// };

// console.log(square(8));

// //es6 function

// // const squareArrow = (x) => {
// //     return x*x;
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(4));

// //All arrow function are anonymous

const getFirstName = (name) => {
    return name.split(' ')[0];
};

const getLastName = (name) => name.split(' ')[1];
console.log(getFirstName('Or Kowalsky'));
console.log(getLastName('Or Kowalsky'));


