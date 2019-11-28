<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

document.addEventListener('DOMContentLoaded', function () {
	
	// Load JQuery
	//Load jQuery library using plain JavaScript
	(function(){
	  var newscript = document.createElement('script');
	     newscript.type = 'text/javascript';
	     newscript.async = true;
	     newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
	  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
	})();


	
	// Load Puzzle
	var finxter_puzzle = document.createElement('div');       
	document.body.appendChild(finxter_puzzle);

	finxter_puzzle.width = '300';
	finxter_puzzle.height = '300';
	finxter_puzzle.innerHTML = '<h1 id="Title">Puzzle</h1>';

	// Create Solution Button
	var buttonSolution = document.createElement('button');
    	document.body.appendChild(buttonNext);
    
    	buttonSolution.innerHTML = 'Check Solution';
    	buttonSolution.style.width = '125';
    	buttonSolution.style.height = '30';
    	buttonSolution.style.fontSize = '20px';
    	buttonSolution.style.color = 'white';
    	buttonSolution.style.background = 'black';

	$("#Title").html("lskdfjlsdfj");
	
	$.getJSON("https://app.finxter.com/newTask", function(json){
		
		task_id = json.id;

		task_text = json.txt;
		task_question = json.question;
		task_elo = json.elo;
		task_url = json.url;
		task_title = json.title;
		task_choices = json.choices.split(",");
		task_changeURL = json.changeURL;


		// escape less than signs (otherwise xml is assumed)
		// task_text = task_text.replace(/</g, '&lt');

		$("#Title").html("" + task_title + "");
		//$("#Subtitle").html("Puzzle " + task_id + " - <a href='https://en.wikipedia.org/wiki/Elo_rating_system' target='_blank'>Elo</a>: " + task_elo + "");
		// $("#Task").html(task_text);
		// $("#Question").html(task_question);

		// Prism.highlightAll();
		
		buttonSolution.onclick = function() {
    			window.open("https://app.finxter.com/learn/computer/science/" + task_id, "_blank");
    		}
	});

});
