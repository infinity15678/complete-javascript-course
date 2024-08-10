//Functions
/*
function describeCountry(country,population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

console.log(describeCountry("USA",330,"Washington D.C"));
console.log(describeCountry("France","Paris",55));
console.log(describeCountry("Malaysia","Kuala-Lumpur",35));


//function declarations and expressions
function percentageOfWorld1(population){
    return population/7900*100;
}

let usPercentage=percentageOfWorld1(330);
let chinaPercentage=percentageOfWorld1(1400);
let indiaPercentage=percentageOfWorld1(1100);

console.log(usPercentage,chinaPercentage,indiaPercentage);

const percentageOfWorld2 = function(population){
    return population/7900*100;
}
usPercentage=percentageOfWorld2(330);
chinaPercentage=percentageOfWorld2(1400);
indiaPercentage=percentageOfWorld2(1100);
console.log(usPercentage,chinaPercentage,indiaPercentage);


//arrow functions
const percentageOfWorld3 = population => population/7900*100;
usPercentage=percentageOfWorld2(330);
chinaPercentage=percentageOfWorld2(1400);
indiaPercentage=percentageOfWorld2(1100);
console.log(usPercentage,chinaPercentage,indiaPercentage);


//function declarations and expressions
function percentageOfWorld1(population){
    return population/7900*100;
}
function describePopulation(country,population){
    return `${country} has ${population} million people, 
    which is about ${percentageOfWorld1(population)}% of the world`;
}
console.log(describePopulation("USA",330));
console.log(describePopulation("China",1441));
console.log(describePopulation("India",1100));

//arrays

function percentageOfWorld1(population){
    return population/7900*100;
}

populations = [330,1400,1100,55];
console.log(populations.length==4);

const percentages=[percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[populations.length-1])];

console.log(percentages);



//basic array operations
const neighbors = ['Canada','Mexico','UK'];

neighbors.push('Utopia');

neighbors.pop();

if (!(neighbors.includes("Germany"))){
    console.log("Probably not a central european country");
}

neighbors[neighbors.indexOf('Canada')]='Drake';

console.log(neighbors);
*/



