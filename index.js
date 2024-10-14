/* set a minimum value 
 be able to collect an input(number)from a user
 check if user's number is greater than or equal to minimum value
 if value is less than minimum value, prompt "value must be a whole number greater than or equal to 1"
 once condition is met, then loop the entry of the user
 if number any of the numbers is divisible by 3 but not 5, prompt "fizz"
 else if number is divisible by 5 and not 3, prompt "buzz"
 else if number is divisible by 3 and 5, prompt "fizzbuzz"
 else prompt "number"*/
 
 
 let answer = prompt("Enter a whole number greater than 1?")
if (answer < 1) {
   /*answer = prompt("value must be a whole number greater than or equal to 1")*/
   console.log("value must be a whole number greater than or equal to 1")
}

for (let i = 1; i <= answer; i++) {
if  (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz")
}    else if (i % 5 === 0) {
    console.log("buzz")
}    else if (i % 3 === 0) {
    console.log("fizz");
}    else{
    console.log(i)
}

}


function playRockPaperScissors(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        return "It's a tie!";
    } 
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } 

    return "You lose!";
}

// Example of playing the game
const userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
const result = playRockPaperScissors(userChoice);
alert(result);