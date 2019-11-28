
document.addEventListener('DOMContentLoaded', function () {
	
	// Load JQuery
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);


	
	// Load Puzzle
	var finxter_puzzle = document.createElement('div');       
	document.body.appendChild(finxter_puzzle);

	finxter_puzzle.width = '300';
	finxter_puzzle.height = '300';
	finxter_puzzle.innerHTML = '<h1 id="Title">Puzzle</h1>';


	$.getJSON("https://app.finxter.com/newTask", function(json){
		alert("hi");
		task_id = json.id;

		task_text = json.txt;
		task_question = json.question;
		task_elo = json.elo;
		task_url = json.url;
		task_title = json.title;
		task_choices = json.choices.split(",");
		task_changeURL = json.changeURL;


		// escape less than signs (otherwise xml is assumed)
		task_text = task_text.replace(/</g, '&lt');

		$("#Title").html("" + task_title + "");
		// $("#Subtitle").html("Puzzle " + task_id + " - <a href='https://en.wikipedia.org/wiki/Elo_rating_system' target='_blank'>Elo</a>: " + task_elo + "");
		// $("#Task").html(task_text);
		// $("#Question").html(task_question);

		// Prism.highlightAll();
	});

});
