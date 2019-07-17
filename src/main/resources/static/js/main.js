let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	const userTag = "user".fontsize(3).sub();
	result_p.innerHTML = userChoice + userTag + " beats " + computerChoice + ". You win!";
	document.getElementById("user-score").classList.add("green-score");
	setTimeout(function() {document.getElementById("user-score").classList.remove("green-score")}, 300);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	const userTag = "user".fontsize(3).sub();
	result_p.innerHTML = userChoice + userTag + " loses to " + computerChoice + ". You lose!";
	document.getElementById("computer-score").classList.add("red-score");
	setTimeout(function() {document.getElementById("computer-score").classList.remove("red-score")}, 300);
}

function draw(userChoice, computerChoice) {
	const userTag = "user".fontsize(3).sub();
	result_p.innerHTML = userChoice + userTag + " equals " + computerChoice + ". It's a draw.";
}

function play(userChoice) {
	let computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			win(userChoice, computerChoice);
			break;
		case "ScissorsRock":
		case "RockPaper":
		case "PaperScissors":
			lose(userChoice, computerChoice);
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			draw(userChoice, computerChoice);
			break;
	}
}


function main() {
	rock_div.addEventListener("click", function() {
		play("Rock");
	})
	
	paper_div.addEventListener("click", function() {
		play("Paper");
	})
	
	scissors_div.addEventListener("click", function() {
		play("Scissors");
	})
}

main();

