const btn1 = document.querySelector('#p1Button')
const btn2 = document.querySelector('#p2Button')
const resetbtn = document.querySelector('#reset')
const p1display = document.querySelector('#p1dispalay')
const p2display = document.querySelector('#p2dispalay')
const winningScoreselect = document.querySelector('#Playing-To')

let p1score = 0 ;
let p2score = 0 ;
let winningScore = 5;
let isGameover = false;

btn1.addEventListener('click', function(){
    if(!isGameover){
        p1score += 1;
        if (p1score === winningScore){
            isGameover = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
        }
    p1display.textContent = p1score;
    }   
})

btn2.addEventListener('click', function(){
    if (!isGameover){
        p2score += 1;
        if (p2score === winningScore){
            isGameover = true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
        }
     p2display.textContent = p2score;   
    }
})
winningScoreselect.addEventListener('change', function() {
    winningScore = parseInt(this.value);  
    reset();
  })
  
  resetbtn.addEventListener('click', reset)
  
  function reset() {
    isGameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove('winner', 'loser')
    p2display.classList.remove('winner', 'loser')
  }
