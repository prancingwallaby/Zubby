function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let choice = choices[randomChoice];
    return choice;
  }
  
function playRound(playerPick,computerPick){
  if (playerPick === computerPick){
    alert("It's a tie! like kissing your...")
  } 
  else if (playerPick === "rock"){

    if (computerPick === "paper"){
      alert("rock is covered by paper! You Lose!")
    } else {
      alert("rock smashes scissors! You Win!")
    }

  }
  else if (playerPick === "paper"){

    if (computerPick === "scissors"){
      alert("paper is cut by scissors! You Lose!")
    } else {
      alert("paper covers rock! You Win!")
    }

  }
  else if (playerPick === "scissors"){

    if (computerPick === "rock"){
      alert("scissors smashed by rock! You Lose!")
    } else {
      alert("scissors cuts paper! You Win!")
    }

  } else {alert("you entered in invalid choice")}
  
}

function game(){
  for (let i = 0; i < 5; i++) {
    alert("Round " + i)
    let playerChoice = userChoice();
    if(playerChoice === 'quit'){return;}
    let computerChoice = cpuChoice();
    playRound(playerChoice,computerChoice);
 }
}

function userChoice(){
  playerChoice = prompt("Do you choose 'rock','paper', 'scissors'?  or to stop type 'quit'");
  alert("You chose " + playerChoice);
  return playerChoice;
}

function cpuChoice(){
  computerChoice = computerPlay();
  alert("It chose " + computerChoice);
  return computerChoice;
}

game();

//const rock = document.querySelector('#rock');
//rock.addEventListener('click',playRound('rock',computerPlay));

//const paper = document.querySelector('#paper');
//paper.addEventListener('click',playRound('paper',computerPlay));

//const scissors = document.querySelector('#scissors');
//scissors.addEventListener('click',playRound('scissors',computerPlay));


