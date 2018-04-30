var nameVar = 'Or';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Krak';
// This is impossible.
// let nameLet = 'lalala';
//This is legal
nameLet = 'lalala';
console.log('NameLet: ', nameLet);

const nameConst = 'Frank';
//Illegal
// const nameConst = 'Lousie';
//Illegal
// nameConst = 'Fruity';
console.log('nameConst', nameConst);


//This will not work because var/const/let are bound to its scope only, meaning I can't call it from outside the scope it was declared in.
// All of these function will result in an error in the console saying the petName is not defined.
// function getPetNameVar(){
//     var petName = 'Bab';
//     return petName;
// }

// getPetNameVar();
// console.log(petName);

// function getPetNameLet(){
//     let petName = 'Bab';
//     return petName;
// }

// getPetNameLet();
// console.log(petName);

// function getPetNameConst(){
//     const petName = 'Bab';
//     return petName;
// }

// getPetNameConst();
// console.log(petName);


//Block scoping
const fullName = 'Or Kowalsky';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

