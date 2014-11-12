//Option 1

var color = "red";
var size = 2;

if(color=="red" && size==2) {
	alert("hey");
}

var userChoice ="rock";
var computerChoice = "paper";
var winner;

if(userChoice=="rock" && computerChoice=="paper") {
	winner = "Computer";
} else if (userChoice=="scissors" && computerChoice=="paper") {
	winner = "user";
}
	
}

//Option 2

var userChoice ="rock";
var computerChoice = "paper";
var winner;

//var outComes = ["rockpaper", "rockscissors", "paperrock", "paperscissors", "scissorspaper", "scissorsrock"]
//Substitute the above for the below instead...

var userWins = ["rockscissors", "paperrock", "scissorspaper"]

var computerWins = ["rockpaper", "paperscissors", "scissorsrock"]

var choices;

function evaluate() {
	if(userChoice==computerChoice) {
		alert('tie!');
	} else {
	
		var outCome = userChoice + computerChoice;

		$.each(userWins, function(index, value) {
			if(outCome==value){
				winner = "User";
			} else {
				winner = "computer";
			}

		});
	}
	
}



//Option 3

var userChoice ="rock";
var computerChoice = "paper";
var winner;

var userWins = ["rockscissors", "paperrock", "scissorspaper"]

function evaluate() {
	if(userChoice==computerChoice) {
		alert('tie!');
	} else {
	
		var outCome = userChoice + computerChoice;

		$.each(userWins, function(index, value) {
			if(outCome==value){
				//winner = "User";
				alert("You win!")
				return false;
			} else {
				//winner = "computer";
				alert("You lose!")
			}

		});
	}
	
}