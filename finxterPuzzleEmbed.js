<script>
document.addEventListener('DOMContentLoaded', function () {

	// Create base div
	var finxter_puzzle = document.createElement('div');  
    
    // Create Header & footer
    
    //var finxter_footer = document.createElement('div');
	var finxter_logo = document.createElement('IMG');
	finxter_logo.setAttribute("src", "https://blog.finxter.com/wp-content/uploads/2018/04/finxter.png");
	finxter_logo.setAttribute("width", "140");
        
	var finxter_header = document.createElement('div');
    finxter_header.appendChild(finxter_logo);
    
    // Create Button
    var buttonSolution = document.createElement('BUTTON');
    buttonSolution.innerHTML = 'Check Solution';
	//buttonSolution.style.width = '200';
	//buttonSolution.style.height = '70';
	buttonSolution.style.fontSize = '16px';
	buttonSolution.style.color = 'white';
	buttonSolution.style.background = '#f44336'; // blue: '#008CBA';
	buttonSolution.style.border = 'none';
    buttonSolution.style.padding = '10px 20px';
    buttonSolution.style.fontFamily = "Arial,sans-serif";
    buttonSolution.style.fontWeight = 'bold';
    buttonSolution.style.cursor = "pointer"; 
    
    var finxter_code = document.createElement('div');
    logic(finxter_code, buttonSolution);
    var finxter_button = document.createElement('div');
    finxter_button.appendChild(buttonSolution);
    

    
    // Create DOM	
	finxter_puzzle.appendChild(finxter_header);
	finxter_puzzle.appendChild(finxter_code);
	finxter_puzzle.appendChild(finxter_button);
	document.body.appendChild(finxter_puzzle);

	//finxter_puzzle.width = '300';
	//finxter_puzzle.height = '300';
	
	
		
});

function logic(finxter_code, buttonSolution) {
	
	var res1 = getPuzzle(); // [id, puzzle_string]
	
	finxter_code.innerHTML = '<pre># Python Puzzle\n' + res1[1] + '\n\n# What\'s the output?</pre>';

	buttonSolution.onclick = function() {
		window.open("https://app.finxter.com/learn/computer/science/" + res1[0], "_blank");
		logic(finxter_code, buttonSolution);
    }
}

function getPuzzle() {
	var puzzles = [[514, `xs = [[1, 2], [3, 4]]
ys = list(xs)

print(xs[0] is ys[0])`],
[513, `xs = [[1, 2], [3, 4]]
ys = list(xs)

print(xs is ys)`],
[512, `def srange(x):
    return range(x-3, x)
    
s = 0
for i in srange(2):
    s += i
    
print(s)`],
[511, `string = 'ppy!'
fruit = 'a'.join(list(string))

print(fruit)`],
[510, `python = ['cool']
x = python in python

print(x)`],
[509, `nums = [1, 2, 3]
nums.append(nums[:])

print(len(nums))`],
[508, `s = 'terfinx'
s = ''.join(sorted(list(s)[3:7])+list(s)[0:3])

print(s)`],
[507, `def add(a=0, b=1):
    return a + b
    

print(add(add(add())))`],
[506, `def avg(x, *xs):
    if len(xs) == 0:
        return x
    s = x + sum(xs)
    n = 1 + len(xs)
    return s/n
 
print(avg(2, 4, 6) == avg(2, 4, 6, 6, 2))`],
[505, `l = [[]]

if l:
    print(True)
else:
    print(False)`],
[503, `xs = [-1, 0, 1, 2, 3]

l = [x + 1 for x in xs]
print(sum(l))`],
[502, `xs = [1, 5, 3, 7, 2, 8, 4, 6]
y = 0

for x in xs:
    if x < y:
        y = x

print(min(xs) == y)`],
[501, `xs = [1, 5, 3, 7, 2, 8, 4, 6]
y = xs[0]

for x in xs:
    if x > y:
        y = x

print(max(xs) == y)`],
[500, `a = 'hello'
b = 'world'

print(a, b, sep=' Python ', end='!')`],
[498, `def len_(x):
    length = len(x)
    # print everything in same row
    print(length, end='')
    return length
    
items = [3.14, 'moon', {}] 
i = 0

while i < len_(items):
    i += 1`],
[494, `item_prices = [
   ('apple', 0.45),
   ('banana', 0.75),
   ('kiwi', 0.5),
   ('orange', 0.8)
]

prices = [price for item, price in item_prices] 

print(sum(prices))`],
[490, `speeds = [
    ('car', 180.0),
    ('bike', 20.5),
    ('boat', 55.3),
    ('ski', 31.8),
]

fastest = max(speeds)

print(fastest[0])`],
[487, `fs = [
    lambda x: x + 1,
    lambda x: x + x,
    lambda x: x * x,
]

n = 0

for f in fs:
    n = f(n)
    
print(n)`],
[486, `my_tuple = 1, 1, 1 == (1, 1, 1)

print(my_tuple)`],
[473, `a = 1 > 0

if a or (1 / 0 == 0):
    print('ok')
else:
    print('nok')`]

];
	var id = Math.floor(Math.random() * puzzles.length);
	return puzzles[id];
}
</script>
