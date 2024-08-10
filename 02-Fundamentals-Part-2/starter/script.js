/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");


function logger(){
    console.log("My name is Andy");
}
// calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    console.log(apples,oranges); //use the parameters as vairables
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(3,4));

const orangeJuice = fruitProcessor(0,5);
console.log(orangeJuice);

//function declarations
function calcAge1(birthYear){
    return 2037-birthYear;
}
age1=calcAge1(1991);

//function expressions
const calcAge2=function (birthYear){ //anonymous function
    console.log(birthYear);
}
age2=calcAge2(1991);
console.log(age1,age2);



//arrow function
//if one line dont need curly braces
const calcAge3=birthYear => 2037-birthYear;
console.log(calcAge3(1991));

//Add parentheses when using multiple params, curly braces for multiple lines
const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    return `${firstName} retires in ${65-age} years`;
}

console.log(yearsUntilRetirement(1991,'Bob'));


function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    console.log(apples,oranges); //use the parameters as vairables
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(3,2));


//functions review
const calcAge = function(birthYear){
    return 2037-birthYear;
}
//Add parentheses when using multiple params, curly braces for multiple lines
const yearsUntilRetirement = (birthYear,firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65-age;
    if(retirement < 0){
       return -1; 
    }
    return retirement;
}

console.log(yearsUntilRetirement(1991,"Mandy"));
console.log(yearsUntilRetirement(1950,"andy"));



//arrays 
//literal syntax
//arrays are not immutable, so can replace certain elements.
const friends = ['Mike','John','Peter'];
console.log(friends);

const years = new Array(1991,1998,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jake';

console.log(friends);
// //cannot do this 
// friends = ['bob','alice'];

const diffElements = ['jonas','lastName',2037-1991,friends];
console.log(diffElements);

function calcAge1(birthYear){
    return 2037-birthYear;
}

const age1=calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length-1]);

console.log(age1,age2,age3);

const ages = [calcAge1(years[0]),
calcAge1(years[1]),calcAge1(years[years.length-1])];

console.log(ages);



//basic array methods
//add array elements
const friends = ['Mike','John','Peter'];
const newLength = friends.push('Jay'); //returns length 
console.log(friends);
console.log(newLength);
//Adds to beginning of array 
friends.unshift('John');
console.log(friends);


//remove elements
const popped = friends.pop(); //removes last element of array
console.log(friends);
console.log(popped);

friends.shift(); //remove first element
console.log(friends);

console.log(friends.indexOf('Mike')); //returns index of the position of element
console.log(friends.indexOf('Bobby')); //if it doesnt exist return -1

console.log(friends.includes('Steven')); //returns true or false depending on if item exists. uses strict equality

if (friends.includes("Mike")){
    console.log("You have a friend called mike");
}

//Object literal syntax
const nameObject = {
    firstName : "Andy",
    lastName : "Mandy",
    age : 2037-1998,
    job : "Teacher",
    friends : ['Michael','Peter','Steven']
};

console.log(nameObject);
//Dot notation means the property is static
console.log(nameObject.lastName);
//brakcet notation means the property is computed(can put any expression)
console.log(nameObject['lastName']);

const nameKey = 'Name';
console.log(nameObject['first'+nameKey]);
console.log(nameObject['last'+nameKey]);

const interestedIn=prompt(`What do you want to know about me? 
    Choose between firstName, lastName, 
    age,job, and friends`);
console.log(interestedIn);
if (!nameObject[interestedIn]){
    console.log(`Please select a valid key`);
}
else {
    console.log(`${interestedIn} : ${nameObject[interestedIn]}`);
}


nameObject.location = 'USA';
nameObject['Twitter']='@aaaa';

console.log(nameObject);

//Challenge
console.log(`${nameObject.firstName} has ${nameObject.friends.length} friends, and his best friend
    is called ${nameObject.friends[0]}`);

const nameObject = {
    firstName : "Andy",
    lastName : "Mandy",
    birthYear : 1993,
    age : 1991,
    job : "Teacher",
    friends : ['Michael','Peter','Steven'],
    hasDriversLicense: true,
//Methods are functions that are attached to objects
    calcAge : function(){
        //This keyword refers to the current object
        this.age = 2037-this.birthYear;
        return this.age    
    },
    getSummary : function(){
        return `${this.firstName} is a ${this.age} year old ${this.job}
        and ${this.hasDriversLicense ? "he has a drivers license" : "he does not have a drivers license"}`;
    }
};
console.log(nameObject.calcAge());

console.log(nameObject['age']);

console.log(nameObject.getSummary());


//loops
for(let rep = 1; rep<=10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
*/

const friends = ['Mike','John','Peter'];

for (let i = 0; i<friends.length; i++){
    console.log(friends[i]);
}

const years = [1991,2007,2005,2009,2001];
const ages = []
for(let i =0; i<years.length; i++){
    ages.push(2037-years[i]);
}

console.log(ages);

