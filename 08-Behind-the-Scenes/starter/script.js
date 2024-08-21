'use strict';
//Global scope
//Scopes
/*
function calcAge(birthYear) {
    //function scope
    //exeuction context
    const age = 2037-birthYear;
    //Another scope
    // And another execution context
    function printAge() {
        let output = `You are ${firstName}, born in ${birthYear}`
        console.log(output);
        //Since we are using use strict, blocks have scopes as well.
        if (birthYear >= 1981 && birthYear <= 1996){
            //Var declarations do not apply since var is not part of Es6
            var millenial = true;
            //Create two firstName variables in two different scopes
            const firstName = 'Steven';
            //Redefining a variable from a higher scope
            output = 'NEW OUTPUT!';
            const str = `Oh and your're a millenial, ${firstName}`;
            console.log(str);
            //Functions are block scoped
            function add(a,b) {
                return a+b;
            }
           
        }

        //Throws error;
        //millenial is defined within the if statement
        console.log(millenial);
        //Throws error, add is only scoped to the if block
        //console.log(add(2,3));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = "andy";
calcAge(1991);
//Hoisting
//Returns undefined
console.log(me);
//These will return an error
// console.log(job);
// console.log(year);

var me = "Andy";
let job = "Dev"
const year = 2001
//Functions

//Declarations can be called before defined
console.log(addDecl(2,3));
//Fexpressions and arrow functions cannot
//This will return a type error: Undefined cannot call afunction
// console.log(addExpr(2,3));
//This will return cannot be used before initializeation
// console.log(addArrow(2,3));


function addDecl(a,b){
    return a+b;
}
//Returns undefined when called before initialization
var addExpr = function (a,b){
    return a+b;
}

const addArrow = (a,b) => a+b;


//Example


if (!numProducts){
    deleteShoppingCart();
}
var numProducts = 10;
function deleteShoppingCart(){
    console.log("All products deleted");
}
//Var declaraations are added to the window object orperties
var x = 1;
let y = 2;
const z = 3;




//This keyword

//This returns undefined when called within function expression
const calcAge = function (birthYear) {
    console.log(2037-birthYear);
    console.log(this);
};
console.log(this);

calcAge(1991);
//Arrow functions inherit the this keyword from their parent scopes
//Console.log(this) returns window
const calcAgeArrow = birthYear => {
    console.log(2037-birthYear);
    console.log(`This from arrow: ${this}`);
};

calcAgeArrow(1991);


//This keyword returns the calling object for methods

const personInfo = {
    name : "andy",
    age : 3,
    year : 1991,
    calcAge: function (){
        console.log(this);
        console.log(2037-this.year)
    },
    //This refers to parent scope, which is window. 
    greet: () =>  {
        console.log(this);
        console.log(`Hey ${this.name}`)
    }
    }

personInfo.calcAge();

const mat = {
    year : 2037
}

mat.calcAge = personInfo.calcAge;
//Returns the mat object
mat.calcAge();

const f = personInfo.calcAge;
//This keyword will return undefined
// f();


//Function inside a method
//Arrow functions dont get this keyword,
const nameObject = {
    firstName : "Andy",
    year : 1992,
    calcAge : function () {
        console.log(this);
        console.log(2037-this.year);
        // const self = this; //also called that
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // };

        //Solution 2: USe arrow function
        //Arrow functions inherit scope from parent, in this case that is an object
        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
            // console.log(this.year >= 1981 && this.year <= 1996);
        };
        //In a regular function call, this keyword is undefined
        isMillenial();
    },
    //This will print undefined and window when called
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }
}

nameObject.calcAge()

//Arguments keyword
//Function declarations and expressions get an argumetns keyword
var addExpr = function (a,b){
    console.log(arguments)
    return a+b;
}
//arrow functions do not
const addArrow = (a,b) => {
    console.log(arguments)
    return a+b;
}

addExpr(2,5);
//Returns arguments is undefined
addArrow(2,5,8)


//Primitives and objects 


//primitives
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);
//Objects
const me = {
    name: "andy",
    age : 31
};
//Changes me and friend
const friend = me;
friend.age = 27;

console.log(friend.age)
console.log(me.age);
*/


//In Practice
//Each primitive is saved into its own piece of memoery
//variable names are identifiers to these memory addresses
let lastName = 'williams';
let oldLastName = lastName;
//New memory address is assigned when variables are changed
lastName = "Davis";
console.log(lastName,oldLastName);
//The stack stores references to a memory addresses in heap
const jessica = {
    firstName : 'jessica',
    lastName : 'williams',
    age : 27
}
//Both jessica and married jessica point to same memroy location in heap
const marriedJessica = jessica;
//so changing one identifier changes both
marriedJessica.lastName = 'Davis';
console.log('Before marriage:',jessica);
console.log("After marriage: ",marriedJessica);
const jessica2 = {
    firstName : 'jessica',
    lastName : 'williams',
    age : 27,
    family: ['Alice','Bob']
}
//Object.assign only creates a shallow copy, which means no nested objects
const jessicaCopy = Object.assign({},jessica2);

jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('mary');

console.log('Before marriage: ',jessica2);
console.log('after marriage: ',jessicaCopy);