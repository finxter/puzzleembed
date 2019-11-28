function getPuzzle() {
	var puzzles = [[0, "print('hello world')"], 
		       [1, "print('Finxter is cool')"]];
	var id = Math.floor(Math.random();
	return puzzles[id * puzzles.length)];
}


document.addEventListener('DOMContentLoaded', function () {

	// Load Puzzle
	var finxter_puzzle = document.createElement('div');       
	document.body.appendChild(finxter_puzzle);

	finxter_puzzle.width = '300';
	finxter_puzzle.height = '300';
	finxter_puzzle.innerHTML = '<h1 id="Title">Daily Finxter Puzzle</h1>';
	
	var res1 = getPuzzle(); // [id, puzzle_string]
	
	finxter_puzzle.innerHTML += '<pre>' + res1[1] + '</pre>';

	// Create Solution Button
	var buttonSolution = document.createElement('button');
    	document.body.appendChild(buttonSolution);
    
	buttonSolution.innerHTML = 'Check Solution';
	buttonSolution.style.width = '125';
	buttonSolution.style.height = '30';
	buttonSolution.style.fontSize = '20px';
	buttonSolution.style.color = 'white';
	buttonSolution.style.background = 'black';
	
	
	
	
	buttonSolution.onclick = function() {
    			window.open("https://app.finxter.com/learn/computer/science/" + res1[0], "_blank");
    		}
	
	

});
