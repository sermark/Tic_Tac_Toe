let data = [
	{text: '+'},
	{text: '+'},
	{text: '+'},
	{text: '+'},
	{text: '+'},
	{text: '+'},
	{text: '+'},
	{text: '+'},
	{text: '+'}
];

let items;
let turns = 0;

let	fieldGame = document.getElementById('container');
let buttonReset = document.createElement('button');
buttonReset.classList.add('button');
buttonReset.textContent = 'Reset Game';

data.forEach( (item) => {
	let a = createItem(item.text)
	fieldGame.appendChild(a);
	items = fieldGame.querySelectorAll('.item');
});

items.forEach( (e) => {
	e.addEventListener('click', () => {
		if (turns == 9) {
			alert('Tie game');
			turns = 0;
		} else if (e.classList.contains('disable')) {
			alert('This spot is already filled');
		} else if (turns%2 == 0){
			turns++;
			e.textContent = 'o';
			e.classList.add('disable');
			if(items[0].textContent == 'o' && items[1].textContent == 'o' && items[2].textContent == 'o' ||
		   	   items[3].textContent == 'o' && items[4].textContent == 'o' && items[5].textContent == 'o' ||
		   	   items[6].textContent == 'o' && items[7].textContent == 'o' && items[8].textContent == 'o' ||
		   	   items[0].textContent == 'o' && items[3].textContent == 'o' && items[6].textContent == 'o' ||
		       items[1].textContent == 'o' && items[4].textContent == 'o' && items[7].textContent == 'o' ||
		   	   items[2].textContent == 'o' && items[5].textContent == 'o' && items[8].textContent == 'o' ||
		   	   items[0].textContent == 'o' && items[4].textContent == 'o' && items[8].textContent == 'o' ||
		   	   items[2].textContent == 'o' && items[4].textContent == 'o' && items[6].textContent == 'o'){
				alert('winner o');
				turns = 0;
			} 
		}
		else {
			turns++;
			e.textContent = 'x';
			e.classList.add('disable');
			if (items[0].textContent == 'x' && items[1].textContent == 'x' && items[2].textContent == 'x' ||
				items[3].textContent == 'x' && items[4].textContent == 'x' && items[5].textContent == 'x' ||
		   		items[6].textContent == 'x' && items[7].textContent == 'x' && items[8].textContent == 'x' ||
		   		items[0].textContent == 'x' && items[3].textContent == 'x' && items[6].textContent == 'x' ||
		   		items[1].textContent == 'x' && items[4].textContent == 'x' && items[7].textContent == 'x' ||
		   		items[2].textContent == 'x' && items[5].textContent == 'x' && items[8].textContent == 'x' ||
		   		items[0].textContent == 'x' && items[4].textContent == 'x' && items[8].textContent == 'x' ||
		   		items[2].textContent == 'x' && items[4].textContent == 'x' && items[6].textContent == 'x'){
					alert('winner x');
					turns = 0;
			}
		}
		console.log(turns);
	});

});

console.log(items);



fieldGame.appendChild(buttonReset);

function createItem (text) {
	let item = document.createElement('div');
	item.textContent = text;
	item.classList.add('item');
	return item;
}