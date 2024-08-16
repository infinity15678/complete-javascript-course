// Remember, we're gonna use strict mode in all scripts now!
'use strict';



let printForecast = function(temperatures){
    let finalMessage = ``
    for (let i =0; i<temperatures.length; i++){
        finalMessage=finalMessage+`${temperatures[i]} in ${i+1} days,`
    }
    return finalMessage
}


console.log(printForecast([17,21,23]))