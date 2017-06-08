let data = [
	{text: ' '},
	{text: ' '},
	{text: ' '},
	{text: ' '},
	{text: ' '},
	{text: ' '},
	{text: ' '},
	{text: ' '},
	{text: ' '}
];

let items;
let turns = 0;

let	fieldGame = document.getElementById('container');
let buttonReset = document.createElement('button');
buttonReset.classList.add('button');
buttonReset.textContent = 'Reset Game';

let cross = createItem ('', 'line');
fieldGame.appendChild(cross);

data.forEach( (itemList) => {
	let a = createItem(itemList.text, 'item')
	fieldGame.appendChild(a);
	items = fieldGame.querySelectorAll('.item');
});

fieldGame.appendChild(buttonReset);
buttonReset.onclick = () => refresh (items);

items.forEach( (e) => {
	e.addEventListener('click', () => {
		if (turns == 9) {
			alert('Tie game');
		} else if (e.classList.contains('disable')) {
			alert('This spot is already filled');
		} else if (turns%2 == 0){
			turns++;
			e.textContent = 'o';
			e.classList.add('disable', 'red');
			if  (items[0].textContent == 'o' && items[1].textContent == 'o' && items[2].textContent == 'o'){
					cross.classList.add('row1');
					alert('winner o');
					setTimeout(function () {refresh(items);}, 2000);
			} 
		   	   	else if(items[3].textContent == 'o' && items[4].textContent == 'o' && items[5].textContent == 'o'){
		   	   		cross.classList.add('row2');
					alert('winner o');
		   	   	} 
		   	   	else if (items[6].textContent == 'o' && items[7].textContent == 'o' && items[8].textContent == 'o'){
		   	   		cross.classList.add('row3');
					alert('winner o');
		   	   	} 
		   	   	else if (items[0].textContent == 'o' && items[3].textContent == 'o' && items[6].textContent == 'o'){
		   	   		cross.classList.add('col1');
					alert('winner o');
		   	   	} 
		       	else if (items[1].textContent == 'o' && items[4].textContent == 'o' && items[7].textContent == 'o'){
		       		cross.classList.add('col2');
					alert('winner o');
		       	} 
		   	   	else if (items[2].textContent == 'o' && items[5].textContent == 'o' && items[8].textContent == 'o'){
		   	   		cross.classList.add('col3');
					alert('winner o');
		   	   	} 
		   	   	else if (items[0].textContent == 'o' && items[4].textContent == 'o' && items[8].textContent == 'o'){
		   	   		cross.classList.add('diag1');
					alert('winner o');
		   	   	} 
		   	   	else if (items[2].textContent == 'o' && items[4].textContent == 'o' && items[6].textContent == 'o'){
					cross.classList.add('diag2');
					alert('winner o');
				} 
		}
		else {
			turns++;
			e.textContent = 'x';
			e.classList.add('disable', 'black');
			if  (items[0].textContent == 'x' && items[1].textContent == 'x' && items[2].textContent == 'x') {
					cross.classList.add('row1');
					alert('winner x');
			} 
				else if (items[3].textContent == 'x' && items[4].textContent == 'x' && items[5].textContent == 'x'){
					cross.classList.add('row2');
					alert('winner x');
				} 
		   		else if (items[6].textContent == 'x' && items[7].textContent == 'x' && items[8].textContent == 'x'){
		   			cross.classList.add('row3');
					alert('winner x');
		   		} 
		   		else if (items[0].textContent == 'x' && items[3].textContent == 'x' && items[6].textContent == 'x'){
		   			cross.classList.add('col1');
					alert('winner x');
		   		} 
		   		else if (items[1].textContent == 'x' && items[4].textContent == 'x' && items[7].textContent == 'x'){
		   			cross.classList.add('col2');
					alert('winner x');
		   		} 
		   		else if (items[2].textContent == 'x' && items[5].textContent == 'x' && items[8].textContent == 'x'){
		   			cross.classList.add('col3');
					alert('winner x');
		   		} 
		   		else if (items[0].textContent == 'x' && items[4].textContent == 'x' && items[8].textContent == 'x'){
		   			cross.classList.add('diag1');
					alert('winner x');
		   		} 
		   		else if (items[2].textContent == 'x' && items[4].textContent == 'x' && items[6].textContent == 'x'){
					cross.classList.add('diag2');
					alert('winner x');
				}
		}
	});

});

function createItem (text, className) {
	let item = document.createElement('div');
	item.textContent = text;
	item.classList.add(className);
	return item;
}

function refresh (arr) {
	turns = 0;
	cross.classList.remove('row1', 'row2', 'row3','col1', 'col2', 'col3', 'diag1', 'diag2');
	arr.forEach( (elem) => {
		elem.textContent = '';
		elem.classList.remove('disable', 'red', 'black');
	});
}