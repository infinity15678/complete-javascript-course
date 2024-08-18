'use strict';
//Global scope
function calcAge(birthYear) {
    //function scope
    //exeuction context
    const age = 2037-birthYear;
    //Another scope
    // And another execution context
    function printAge() {
        const output = `You are ${firstName}, born in ${birthYear}`
        console.log(output);
        //Since we are using use strict, blocks have scopes as well.
        if (birthYear >= 1981 && birthYear <= 1996){
            //Var declarations do not apply since var is not part of Es6
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh and your're a millenial, ${firstName}`;
            console.log(str);

           
        }
        //Throws error;
        //millenial is defined within the if statement
        console.log(millenial);
    }
    printAge();
    return age;
}

const firstName = "andy";
calcAge(1991);
