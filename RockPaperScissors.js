// event listener for when the DOM is created, runs the game() after
document.addEventListener("DOMContentLoaded", game());

function game()
{
    const message = "Please input a choice of either 'rock', 'paper', or 'scissors': ";
    let roundNumber = 1; // 5-round game
    let playerNumWins = 0; // Track player score
    let computerNumWins = 0; // Track computer score

    //window.alert("Welcome to Rock Paper Scissors! We will begin a 5-round game:");

    /*for (; roundNumber <= 5; roundNumber++)
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
    */
}

function playRockPaperScissorsRound(roundNumber, playerChoice, computerChoice)
{
    console.log("******** Round " + roundNumber + " ********\n");
    console.log("Player chose: " + playerChoice + "\n");
    console.log("Computer chose: " + computerChoice + "\n");
    return (evaluateChoices(playerChoice, computerChoice));
}

function evaluateChoices(playerChoice, computerChoice)
{
    switch (playerChoice)
    {
        case 'Rock':
            if (computerChoice === 'Rock') { return 'Tie'; }
            else if (computerChoice === 'Paper') return 'Computer';
            return 'Player';
        case 'Paper':
            if (computerChoice === 'Paper') { return 'Tie'; }
            else if (computerChoice === 'Scissors') return 'Computer';
            return 'Player';
        case 'Scissors':
            if (computerChoice === 'Scissors') { return 'Tie'; }
            else if (computerChoice === 'Rock') return 'Computer';
            return 'Player';
        default:
            return 'Invalid';
    }
}

function getPlayerChoice(message)
{
    let playerChoice = prompt(message).toLowerCase();
    //console.log(playerChoice);
    switch (playerChoice)
    {
        case 'rock':
            return 'Rock';
            break;
        case 'paper':
            return 'Paper';
            break;
        case 'scissors':
            return 'Scissors';
            break;
        default:
            return 'Error';
            break;
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
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return 'Error';
            break;
    }
}