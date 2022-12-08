let computerGuess;
let userGuess=[];

let userGuessUpdate=document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("inputBox");
let audio= new Audio("Gameclick.wav");
function init() {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}
// reload the page
const newGameBegin=()=>{
    audio.play();
    window.location.reload();
}

const startGame = () =>{
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display="none";
}
const startNewGame = () =>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true)  }
const compareGuess= () =>{
    audio.play();
    const usernumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess,usernumber];
    document.getElementById("guesses").innerHTML=userGuess;

     // cheching guess low or high
     if(userGuess.length < maxGuess){
     if (usernumber > computerGuess){
        userGuessUpdate.innerHTML = "Your guess is High 😟";
        userNumberUpdate.value="";
   }
    else if (usernumber < computerGuess){
       userGuessUpdate.innerHTML = "Your guess is Low 😓";
       userNumberUpdate.value="";
    }
    else{
       userGuessUpdate.innerHTML = "HURRAY it's Correct 😎";
       userNumberUpdate.value="";
        audio.play();
       startNewGame();
   }
}else{
    if(usernumber>computerGuess){
        userGuessUpdate.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
        userNumberUpdate.value="";
        startNewGame();
   }
    else if(usernumber<computerGuess){
       userGuessUpdate.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
       userNumberUpdate.value="";
       startNewGame();
    }
    else{
       userGuessUpdate.innerHTML = `HURRAY it's Correct 😎`;
       userNumberUpdate.value="";
        audio.play();
       startNewGame();
   }
   document.getElementById("attempts").innerHTML=userGuess.length;

}
   

}

const easyMode = () =>{
    audio.play();
    maxGuess=10;
    startGame();
}
const hardMode = () =>{
    audio.play();
    maxGuess=5;
    startGame();
}
