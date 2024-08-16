'use strict';
/*
console.log(document.querySelector(".message").
textContent);

document.querySelector('.message').textContent = 'Correct secretNumber!';

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.score').textContent = score ;
function setMessageText(message){
   document.querySelector('.message').textContent = message;
}
function checkLoseGame(score){
   if (score<=0){
      setMessageText('You lost the game!');
    }
}
 document.querySelector('.check')
 .addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof(guess));
    
    if (!guess){
        setMessageText('No secretNumber');
    }

     else if(guess!==secretNumber){
      setMessageText(
        guess > secretNumber ? 'too high!' : 'too low!');
        score-=1;
        checkLoseGame(score);
       }

       else if (guess === secretNumber){
        setMessageText('you win!');
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore ){
         highScore = score;
         document.querySelector('.highscore').textContent = highScore;
        }
       }
       document.querySelector('.score').textContent = score ;

    }
 )

document.querySelector('.again').addEventListener('click',
   function () {
      secretNumber = Math.trunc(Math.random()*20)+1;
      score = 20;
      document.querySelector('.score').textContent =score;
      document.querySelector('.guess').value = '';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('body').style.backgroundColor = '#222';
      setMessageText('Start guessing...');
   }
)
