const scoreboard = document.getElementById('scoreboard');
const countBtn = document.getElementById('countBtn')
let score= 0, quizset = 15;
scoreboard.textContent =  score  + '/' + quizset ;
function count(){   
    scoreboard.textContent = 1 + score  + '/' + quizset;
    score++
}
countBtn.addEventListener('click', ()=>{
    count()
})
s