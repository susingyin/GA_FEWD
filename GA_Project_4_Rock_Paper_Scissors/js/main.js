
var userChoice ="paper";
var computerChoice = "rock";

var userWins = ["rockscissors", "paperrock", "scissorspaper"];

var choices = ["rock", "paper", "scissors"];

computerChoice = choices[Math.random()*choices.length];

function evaluate() {
	var msg = "Computer Wins!";

	if(userChoice==computerChoice) {
		msg = "Tie!";
	} else {
	
		var outCome = userChoice + computerChoice;
		$.each(userWins, function(index, value) {
			if(outCome==value){
				msg = "You win!"
			}
		});
	}

	return msg;	
}
var outcomeMsg = evaluate();
alert(outcomeMsg);