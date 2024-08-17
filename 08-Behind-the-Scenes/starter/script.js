'use strict';
//Global scope
function calcAge(birthYear) {
    //function scope
    //exeuction context
    const age = 2037-birthYear;
    function printAge() {
        const output = `You are ${firstName}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh and your're a millenial, ${firstName}`;
            console.log(str);

           
        }
        console.log(millenial);
    }
    printAge();
    return age;
}

const firstName = "andy";
calcAge(1991);
