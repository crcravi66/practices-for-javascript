// const btn1 = document.querySelector('#p1Button')
// const btn2 = document.querySelector('#p2Button')
// const resetbtn = document.querySelector('#reset')
// const p1display = document.querySelector('#p1dispalay')
// const p2display = document.querySelector('#p2dispalay')
// const winningScoreselect = document.querySelector('#Playing-To')

// let p1score = 0 ;
// let p2score = 0 ;
// let winningScore = 5;
// let isGameover = false;

// btn1.addEventListener('click', function(){
//     if(!isGameover){
//         p1score += 1;
//         if (p1score === winningScore){
//             isGameover = true;
//             p1display.classList.add('has-text-primary');
//             p2display.classList.add('has-text-danger');
//             btn1.disabled = true;
//             btn2.disabled = true;
//         }
//     p1display.textContent = p1score;
//     }   
// })

// btn2.addEventListener('click', function(){
//     if (!isGameover){
//         p2score += 1;
//         if (p2score === winningScore){
//             isGameover = true;
//             p2display.classList.add('has-text-primary');
//             p1display.classList.add('has-text-danger');
//             btn1.disabled = true;
//             btn2.disabled = true;
//         }
//      p2display.textContent = p2score;   
//     }
// })
// winningScoreselect.addEventListener('change', function() {
//     winningScore = parseInt(this.value);  
//     reset();
//   })
  
//   resetbtn.addEventListener('click', reset)
  
//   function reset() {
//     isGameover = false;
//     p1score = 0;
//     p2score = 0;
//     p1display.textContent = p1score;
//     p2display.textContent = p2score;
//     p1display.classList.remove('has-text-primary', 'has-text-danger')
//     p2display.classList.remove('has-text-primary', 'has-text-danger')
//     btn1.disabled = false;
//     btn2.disabled = false;
//   }


//                                            or

const p1 = {
    score : 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1dispalay')
}

const p2 = {
    score : 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2dispalay')
}

const resetbtn = document.querySelector('#reset')
const winningScoreselect = document.querySelector('#Playing-To')

let winningScore = 3;
let isGameover = false;

function updateScore(player,opponent){
    if (!isGameover){
        player.score += 1;
        if (player.score === winningScore){
            isGameover = true;
            player.display.classList.add('has-text-primary');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    player.display.textContent = player.score;
    }  
}
p1.button.addEventListener('click', function () {
    updateScore(p1, p2)

})    
p2.button.addEventListener('click', function(){
    updateScore(p2,p1)
})

winningScoreselect.addEventListener('change', function() {
    winningScore = parseInt(this.value);  
    reset();
  })
  
  resetbtn.addEventListener('click', reset)

  
function reset() {
    isGameover = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-primary', 'has-text-danger');
        p.button.disabled = false;
    }
}
