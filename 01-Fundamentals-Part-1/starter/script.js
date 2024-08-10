/*
let js = 'amazing';
let sum=40+9+23-10;
console.log(4556)
let firstName='Andy';
console.log(firstName);
console.log(sum);



const PI = 3.1415;


true;
console.log(true);
let javaScriptIsFun=true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof "Javascript");
console.log(typeof 54);
javaScriptIsFun='false';
console.log(typeof javaScriptIsFun);



//undefined: value taken by a variable that has not been dfined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);



let age=30;
age=31;

const finalAge=45;
const birthYear= 1991;
// birthYear= 1990;

var job = 'programmer';
job = 'teacher';

lastName= 'Mandy';
console.log(lastName);


const present = 2037;
const myAge = present-1998;
const hisAge = present-2021;
console.log(hisAge,myAge);


console.log(myAge*2,myAge/2,2**3);

const firstName = 'Aaron';

const lastName = "mara";

console.log(firstName+' '+lastName);


let x = 10 + 5;

console.log(x);
x+=10; //+= means x = x + 10

console.log(x);

x++;
console.log(x);
x--;
console.log(x);

// Comparison operators

console.log(myAge > hisAge); // <,>,>=,<=

console.log(hisAge >=18);

const isFullAge = hisAge >= 18;
console.log(hisAge-1991 > myAge-1991)

const present = 2037;
const myAge = present-1998;
const hisAge = present-2021;

console.log(present-myAge > present-hisAge);

console.log(25-10-5);

let x,y;
x = y = 25-10-5; 
console.log(x,y); //will print 10 for both

const averageAge = (myAge+hisAge)/2;
console.log(averageAge);


const firstName = 'Mark';
const job = 'teacher';

const birthYear = 1991;
const currentYear = 2037;

const about = "I'm " + firstName + ', a ' +  
(currentYear-birthYear) + " Year old" + " teacher";
console.log(about);
const aboutNew = `I'm ${firstName} a ${currentYear-birthYear} year old ${job}`;

console.log(aboutNew);

console.log(`Just a normal string with backticks`);

console.log("String with \n multiple lines ");


console.log(`String with multiple lines
    with backticks`);

const inputYear = '1991';
// Type conversion
console.log(inputYear + 18);
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Convertme")); //Invalid conversion to numbers return NaN
console.log(typeof NaN); //This returns number

console.log(String(23),23);


//Type coercion
console.log('I am '+ 23 + "years old");  
console.log('23'-'10'-3); //Triggers string to number coercion
console.log('23' + 10 + '3') //Triggers number to string
console.log('23' / '2'); //Converts to number


// 5 falsy values: 0,'',undefined,null,NaN
// These values will be converted to false when converted to boolean


console.log(Boolean(0)); //prints false
console.log(Boolean('')) //prints false
console.log(Boolean(undefined)); //prints false
console.log(Boolean({})); //prints true

const money = 0;

if(money) { //money is 0, which is falsy so it is converted to false
    console.log("Don't spend");
}
else {
    console.log("You should get a job");
}

let height=0; //undefined by default
if(height) {
    console.log("Height is defined");
}
else {
    console.log("Height is undefined");
} 


const age = 18;
if (age === 18){ //=== means strict equality operator. Does not perform type coercion
    console.log("You are above age")
}

console.log(18==='18');
console.log(18 == '18');
const favorite = Number(prompt("What is your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23){
    console.log("23 is a great number");
}
else if (favorite === 7){
    console.log("7 is also a good number");
}
else {
    console.log("Number is not 23 or 7");
}

const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive){
    console.log("Able to drive");
}
else {
    console.log("Someone else should drive");
}

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log("Eligible to drive");
}
else {
    console.log("Not eligible to drive");
}

const day = 'saturday';

switch(day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Preparing theory videos");
      break;
    
    case 'wednesday':
    case 'thursday':
        console.log("almost the end of the week");
    case 'friday':
        console.log("Happy friday!");
    default:
        console.log("not a valid weekday");
}


const age = 15;
age >=18 ? console.log("They are old enough") : 
console.log("Underage"); 

let drink2;

console.log(`You can drink ${age >=18 ? 'wine' : 'water'}`);
*/

