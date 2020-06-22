$(document).ready(function() 
{				  
	var magic8Ball = {};
	magic8Ball.question;
	magic8Ball.listOfAnswers = ["yes", "Most likely", "Signs point to yes", "Ask again later", "Better not tell you now", "Cannot predict now", "Don't count on it", "My reply is no", "Very doubtful"];

	$("#answer").hide();	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	
	
	magic8Ball.askQuestion = function (question)
	{
		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#8ball").effect("shake");
		console.log(question);
		var random = Math.random();
		var randomIndex = Math.floor(random * this.listOfAnswers.length);
		var answer = this.listOfAnswers[randomIndex];
		console.log(answer);
		$("#answer").fadeIn(4000);
		$("#answer").text(answer);
		
		
	};	
	
	var onClick = function ()
	{
		$("#answer").hide();

		setTimeout( function() {
			var question = prompt("Ask a yes or no question") 		
			magic8Ball.askQuestion(question)
			}, 500);
	};
	
	$("#questionButton").click(onClick);

	//magic8Ball.askQuestion("Will I learn JavaScript?");
	
});	