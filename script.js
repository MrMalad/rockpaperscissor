const buttons = document.querySelectorAll("button");
const values = ["rock", "paper", "scissors"];
let result=document.querySelector(".result");
let player=document.querySelector(".player_run");
let computer=document.querySelector(".computer_run");
let a,b;
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function search(response, values) {
  for (let index = 0; index < values.length; index++) {
    if (response === values[index]) {
      return index;
    }
  }
  return -1; // Indicate no match found
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let playerIndex = search(playerSelection, values);
document.querySelector(".player_choice").textContent="You chose:"+(playerSelection[0].toUpperCase()+playerSelection.slice(1));
  if (playerIndex === -1) {
    result.textContent = "Invalid player selection!";
    return "Invalid player selection!";
  }

  let winIndex = (playerIndex + 1) % values.length; // Winner index
  if (computerSelection === values[winIndex]) {
result.textContent = "You Lose! " + computerSelection[0].toUpperCase()+computerSelection.slice(1) + " beats " + playerSelection[0].toUpperCase()+playerSelection.slice(1);
a++;
    return 1;
    
} else if (computerSelection === values[playerIndex]) {
      result.textContent = "Tie!";
      b++;
      return 2;
    } else {
        result.textContent = "You Won! " + playerSelection[0].toUpperCase()+playerSelection.slice(1) + " beats " + computerSelection[0].toUpperCase()+computerSelection.slice(1);
    return 0;
  }
  
}
player.textContent="Player's score:"+a;
computer.textContent="Computer's score"+b;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    document.querySelector(".comp_choice").textContent="The computer chose:"+computerSelection[0].toUpperCase()+computerSelection.slice(1);
    playRound(button.getAttribute("class"), computerSelection);
  });
});

// Optional function for future extension (uncomment if needed)
// function keepPlaying() {
//   let keepGoing = true;
//   while (keepGoing) {
//     let result = playRound();
//     if (result === "Invalid player selection!") {
//       keepGoing = false; // Stop playing on invalid input
//     } else {
//       // Handle win/lose/tie and prompt user to continue
//     }
//   }
// }
function playGame()
{
    for (let index = 0; index < 5; index++) {
       
        
    }
}
// keepPlaying(); // Uncomment to play multiple rounds
