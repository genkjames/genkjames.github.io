function main() {
	var counter = 1;

	document.getElementById("layout").addEventListener("click", function(){

		var bodyColors = ["black", "darkblue", "goldenrod", "#89cff0"];
		var buttonsArray = ["body", "#myButton", "#playButton"];		
		var buttonColors = ["blue"];
		var linearColors = ["linear-gradient(110deg, darkblue, black)","linear-gradient(110deg, black, gray)", "linear-gradient(110deg, darkcyan, black)"];
		var buttonsLength = buttonsArray.length;

		if(counter == 3) {
			for(var b1 = 0; b1 < buttonsLength; b1++) {
				if(b1 == 0) {
					document.querySelector(buttonsArray[b1]).style.backgroundColor = bodyColors[0];
				}
				else {
					document.querySelector(buttonsArray[b1]).style.backgroundColor = buttonColors[0];
				}
				
			}
		}

		else if(counter == 4) {
			for(var b2 = 0; b2 < buttonsLength; b2++) {
				document.querySelector(buttonsArray[b2]).style.backgroundColor = bodyColors[3];				
			}
		}

		else {
			for(var b3 = 0; b3 < buttonsLength; b3++) {
				document.querySelector(buttonsArray[b3]).style.backgroundColor = bodyColors[counter];				
			}
		}
		

		if(counter == 3) {
			for(var b4 = 1; b4 < 4; b4++) {
				document.querySelector("#linear"+b4).style.backgroundImage = linearColors[1];				
			}			
		}
		else if(counter == 4) {
			for(var b4 = 1; b4 < 4; b4++) {
				document.querySelector("#linear"+b4).style.backgroundImage = linearColors[0];				
			}
		}
		else {
			for(var b4 = 1; b4 < 4; b4++) {
				document.querySelector("#linear"+b4).style.backgroundImage = linearColors[counter];				
			}
		}
		
		counter++;
		if(counter == 5) {
			counter = 0;
		}
	},false);

	$("#answer").focus();
	var number = numOfStars();
	var count = 0;
	var correct = 0;

	$("#playButton").click(function() {
		$("#container").css("display", "block");
		$("#correct").css("margin-top", "10px");
		$("#correct").html("You have five chances to guess correctly. If you do, your wish will come true. If not well...");
		$("#secondContainer").css("display", "none");
		$("#layout").css("display", "initial");
		number = numOfStars();
		count=0;
		$("#answer").focus();		
	});

	$("#myButton").click(function() {
		if (count < 5) {
			if($.isNumeric($("#answer").val())) {
				$("#layout").css("display", "none");

				if($("#answer").val() == number) {
					$("#container").css("display", "none");
					$("#secondContainer").css("display", "block");
					if(number === 1) {
						$("#correctAnswer").html("Congrats!!! May that " +number+ " star work in your favor tonight! You can always play again to have more than one wish.");
					}
					else {
						$("#correctAnswer").html("Congrats!!! May those " +number+ " stars work in your favor tonight! You can always play again to have more than one wish.");
					}
					$("#answer").val("");
					count = 5;
				}
				else {
					if (count < 3) {
						$("#correct").css("margin-top", "90px");
						$("#correct").html("The number is not " + $("#answer").val() + ". Guess again.");
						count++;
						$("#answer").val("");
					}
					else if (count === 3){
						$("#correct").css("margin-top", "90px");
						$("#correct").html("It's your last chance to guess so make it count!!");
						count++
						$("#answer").val("");
					}
					else {
						$("#container").css("display", "none");
						$("#secondContainer").css("display", "block");
						if(number === 1) {
							$("#correctAnswer").html("Sorry, that " +number+ " star could've been helpful. Your day might end in doom, but you can always play again to change the outcome.");
						}
						else {
							$("#correctAnswer").html("Sorry, those " +number+ " stars could've been helpful. Your day might end in doom, but you can always play again to change the outcome.");
						}
						$("#answer").val("");
						count++;

					}
				}
			}
			else {
				if (count === 0) {
					$("#correct").css("margin-top", "90px");				
					$("#correct").html("To start the game, please enter a number.");
				}
				else {
					$("#correct").css("margin-top", "90px");				
					$("#correct").html("Please enter a number.");
				}
			}
		}
		$("#answer").focus();
	});

	function numOfStars() {
		var x = (Math.floor(Math.random() * 9)+1);
		return x;
	}
}



if(document.readyState != "loading") main();
else if(document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
	if(document.readyState == "complete") main();
});