'use strict';

//setting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//rolling dice functionality

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

function resetGame(){
    currentScore = 0;
    for (let i =0; i<scores.length; i++){
        scores[i]=0;
        document.getElementById(`current--${i}`).
        textContent = scores[i];
    }
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    document.querySelector(`.player--${activePlayer}`)
            .classList.remove('player--winner');
    playing = true;
}
btnRoll.addEventListener('click', function () {
    //1. Generate a random dice roll
    if (playing){
        const dice = Math.trunc(Math.random() * 6)+1;
        console.log(dice);
        //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
         //3. Checked for rolled 1; if true switch to next player
        if (dice !== 1){
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            //switch to next player
           switchPlayer()
        }
    } 
});

btnHold.addEventListener('click', function(){
    //Add current score to active players score.
    if (playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`)
        .textContent=scores[activePlayer];
    //Check if player's score is >=100
        if (scores[activePlayer]>=20){
            document.querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`)
            .classList.add('player--active');
            playing = false;
            diceEl.classList.add('hidden');
        //switch to next player
        } else {
            switchPlayer();
    }
    }
    
    //Finish the game    
});

btnNew.addEventListener('click', resetGame);