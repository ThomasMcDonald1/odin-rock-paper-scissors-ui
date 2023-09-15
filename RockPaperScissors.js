// event listener for when the DOM is created, runs the game() after
document.addEventListener("DOMContentLoaded", initializeGame());

const choiceButtons = document.querySelectorAll('button');
choiceButtons.forEach((button) => 
{
    button.addEventListener("click", function ()
    { playRound(button.id) });
});

function initializeGame()
{
    let playerScore = 0;
    let cpuScore = 0;   
    const headerText = document.querySelector('#game-info-header');
    const infoText = document.querySelector('#game-info-update');
    const playerScoreDisplay = document.querySelector('#player-score');
    const cpuScoreDisplay = document.querySelector('#cpu-score');
    playerScoreDisplay.textContent = playerScore;
    cpuScoreDisplay.textContent = cpuScore;
    displayWelcome(headerText, infoText);
}

function displayWelcome(headerText, infoText)
{
    headerText.textContent = "Welcome to Rock Paper Scissors (Player vs CPU). \nFirst to 5 wins the game!";
    infoText.textContent = "Please make your weapon of choice.";
}

function playRound(choiceID)
{
    const cpuRef = document.querySelector('#cpu-score');
    const playerRef = document.querySelector('#player-score');
    let cpuScore = parseInt(cpuRef.textContent);
    let playerScore = parseInt(playerRef.textContent);

    //console.log("cpu score: "+cpuScore+", player score: "+playerScore);
    let computerChoice = getComputerChoice();
    //console.log(computerChoice);
    displayRoundResults(choiceID, computerChoice, evaluateChoices(choiceID, computerChoice));
    //console.log("Player: "+choiceID+", Computer: "+computerChoice+", winner: "+roundWinner);
}

function displayRoundResults(playerChoice, cpuChoice, roundWinner)
{
    const headerText = document.querySelector('#game-info-header');
    const infoText = document.querySelector('#game-info-update');
    const playerScoreDisplay = document.querySelector('#player-score');
    const cpuScoreDisplay = document.querySelector('#cpu-score');

    headerText.textContent = "You chose: "+playerChoice+".\nComputer chose: "+cpuChoice+"\n";
    switch (roundWinner)
    {
        case "Player":
            infoText.textContent = roundWinner + " wins!";
            break;
        case "Computer":
            infoText.textContent = roundWinner + " wins!";
            break;
        case "Tie":
            infoText.textContent = "This round is a tie!";
            break;
    }
}



function evaluateChoices(playerChoice, computerChoice)
{
    switch (playerChoice)
    {
        case 'rock':
            if (computerChoice === 'rock') { return 'Tie'; }
            else if (computerChoice === 'paper') return 'Computer';
            return 'Player';
        case 'paper':
            if (computerChoice === 'paper') { return 'Tie'; }
            else if (computerChoice === 'scissors') return 'Computer';
            return 'Player';
        case 'scissors':
            if (computerChoice === 'scissors') { return 'Tie'; }
            else if (computerChoice === 'rock') return 'Computer';
            return 'Player';
        default:
            return 'Invalid';
    }
}

function getComputerChoice()
{
    let indexRange = 3; // 3 Choices in Rock Paper Scissors (0-2)
    let randomIndex = Math.floor(Math.random() * indexRange); 
    //console.log(getRPSValue(randomIndex));
    return getRPSValue(randomIndex);
}

function getRPSValue(index)
{
    switch (index)
    {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'Error';
            break;
    }
}

/*
function old_game()
{
    const welcomeMessage = "Welcome to an epic rock paper scissors battle! Please select your weapon of choice.";
    let roundNumber = 1; // 5-round game
    let playerNumWins = 0; // Track player score
    let computerNumWins = 0; // Track computer score

    //window.alert("Welcome to Rock Paper Scissors! We will begin a 5-round game:");

    for (; roundNumber <= 5; roundNumber++)
    {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice(message);
        //console.log(playRockPaperScissorsRound(roundNumber, playerChoice, computerChoice));
        switch (playRockPaperScissorsRound(roundNumber, playerChoice, computerChoice))
        {
            case 'Player':
                console.log(playerChoice + " beats " + computerChoice + "! Player wins.");
                playerNumWins++;
                break;
            case 'Computer':
                console.log(computerChoice + " beats " + playerChoice + "! Computer wins.");
                computerNumWins++;
                break;
            case 'Tie':
                console.log("Both choices are the same between the player and computer. Tie!");
                break;
            case 'Invalid':
                console.log("Player input an invalid value. Must be 'rock', 'paper', or 'scissors'! (not case-sensitive)\n");
                console.log("Computer wins by default.");
                computerNumWins++;
                break;
        }
        console.log("\n");
    }
    console.log("Player has " + playerNumWins + " wins, and the computer has " + computerNumWins + " wins.");
    if (playerNumWins > computerNumWins) { console.log("Player won the game!"); }
    else if (playerNumWins < computerNumWins) { console.log("Computer won the game!"); }
    else { console.log("The game was a tie."); }
    
}
*/