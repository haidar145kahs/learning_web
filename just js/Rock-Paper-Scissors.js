function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`wins:${score.wins},loses:${score.loses},Ties:${score.Ties}`;
}
let score= JSON.parse(localStorage.getItem('score'))|| {
        wins:0,
        loses:0,
        Ties:0
    };
function playGame(playerMove){
    let computerMove =  pickComputerMove();
    let result = '';
    if(playerMove=== 'Scissors'){
        if( computerMove === 'Rock'){
            result = 'You lose';
        }else if (computerMove === 'Paper'){
            result = 'You win';
        }
        else if (computerMove === 'Scissors'){
            result = 'Tie';
        }
    }
    else if(playerMove==='Paper'){
        if( computerMove === 'Rock'){
            result = 'You win';
        }else if (computerMove === 'Paper'){
            result = 'Tie';
        }
        else if (computerMove === 'Scissors'){
            result = 'You lose';
        }
    }
    else if (playerMove==='Rock'){
    if( computerMove === 'Rock'){
        result = 'Tie';
    }else if (computerMove === 'Paper'){
        result = 'You lose';
    }
    else if (computerMove === 'Scissors'){
        result = 'You win';
    }
    }
    if(result === 'You win'){
        score.wins+=1;
    }
    else if(result === 'You lose'){
        score.loses+=1;
    }
    else if(result === 'Tie'){
        score.Ties+=1
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-Resulte').innerHTML = result  ;
    document.querySelector('.js-Move').innerHTML=`You <img src="${playerMove}-emoji.png" alt="Scissors Emoji" class="move-image1"> 
<img src="${computerMove}-emoji.png" alt="Rock Emoji" class="move-image1"> computer`;
    
    // alert(`You picked ${playerMove} and the computer pick ${computerMove}. ${result}
    // wins:${score.wins},loses:${score.loses},Ties:${score.Ties}`)
}
function pickComputerMove(){
    var RandoomNumber = Math.random();
    let computerMove = '';
    if( RandoomNumber >= 0 && RandoomNumber<1/3){
        computerMove = 'Rock';
    }
    else if( RandoomNumber >= 1/3 && RandoomNumber<2/3){
        computerMove = 'Paper';
    }
    else if (RandoomNumber >= 2/3 && RandoomNumber<1){
        computerMove = 'Scissors';
    }
    return computerMove ; 
}
let isAutoPlaying = false;
let intervalId;
function autoplay(){
    if(!isAutoPlaying){
        intervalId=setInterval(function(){
            let playerMove=pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying=true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying= false;
    }
}
// ____________________________________________________onclick evens____________________________________________________________
document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('Rock');
});
document.querySelector('.js-Scissors-button').addEventListener('click',()=>{
    playGame('Scissors');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('Paper');
});

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'||event.key === 'R'){
        playGame('Rock');
    }
    else if(event.key === 'p'||event.key === 'P'){
        playGame('Paper');
    }
    else if(event.key === 's'||event.key === 'S'){
        playGame('Scissors');
    }
    console.log(event.key)
})
document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'Escape'){
        score.wins= 0;
        score.loses= 0;
        score.Ties= 0;
        localStorage.removeItem('score');
        updateScoreElement();
    }
})
