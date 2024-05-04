const values=["rock", "paper" , "scissors"];
let computerSelection=function getComputerChoice(values) {
    const randomIndex = Math.floor(Math.random() * values.length);
    // Return the element at the random index
    return values[randomIndex];
}
function playRound(playerSelection, computerSelection) 
{
    playerSelection=playerSelection.toLowerCase();
    let a= search(playerSelection, values);
    let b= search(computerSelection, values);
    if(a===b+1)
    {
    console.log("You Won! "+values[a]+" beats "+ values[b]);
    return 1;
    }
    else if(a===b-1)
    {
    console.log("You Lose! "+values[b]+" beats "+ values[a]);
    return 2;
    }
    else if(a==b-2)
    {
        console.log("You Won! "+values[a]+" beats "+ values[b]);
        return 1;
        }
    else if(a==b-2)
    {
        console.log("You Lose! "+values[b]+" beats "+ values[a]);
        return 2;
        }
    
}
function search(response, values) {
    for (let index = 0; index < values.length; index++) {
        if(response===values[index])
        return index;
    }
}
function playGame() {
    let k=0;
    for (let index = 0; index < 5; index++) 
    {
       let res= playRound(a,b);
       if(res===1)
       k++;
       else if(res===2)
       k--;
    }
    if(k>0)
    console.log("You Won");
else
console.log("You Lost");
}
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

