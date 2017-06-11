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
let overlay = document.querySelector('.overlay');
let popup = document.querySelector('.popup');
let head = popup.querySelector('.head');
let close = popup.querySelector('.close');
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
		if (e.classList.contains('disable')) {
			popupShow ('This spot is already filled');
		} else if (turns%2 == 0){
			turns++;
			e.textContent = 'o';
			e.classList.add('disable', 'red');
			if  (items[0].textContent == 'o' && items[1].textContent == 'o' && items[2].textContent == 'o'){
					cross.classList.add('row1');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
				} 
		   	   	else if(items[3].textContent == 'o' && items[4].textContent == 'o' && items[5].textContent == 'o'){
		   	   		cross.classList.add('row2');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
		   	   	} 
		   	   	else if (items[6].textContent == 'o' && items[7].textContent == 'o' && items[8].textContent == 'o'){
		   	   		cross.classList.add('row3');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
		   	   	} 
		   	   	else if (items[0].textContent == 'o' && items[3].textContent == 'o' && items[6].textContent == 'o'){
		   	   		cross.classList.add('col1');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
		   	   	} 
		       	else if (items[1].textContent == 'o' && items[4].textContent == 'o' && items[7].textContent == 'o'){
		       		cross.classList.add('col2');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
		       	} 
		   	   	else if (items[2].textContent == 'o' && items[5].textContent == 'o' && items[8].textContent == 'o'){
		   	   		cross.classList.add('col3');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
		   	   	} 
		   	   	else if (items[0].textContent == 'o' && items[4].textContent == 'o' && items[8].textContent == 'o'){
		   	   		cross.classList.add('diag1');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
		   	   	} 
		   	   	else if (items[2].textContent == 'o' && items[4].textContent == 'o' && items[6].textContent == 'o'){
					cross.classList.add('diag2');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: O');
				}
		}
		else {
			turns++;
			e.textContent = 'x';
			e.classList.add('disable', 'black');
			if  (items[0].textContent == 'x' && items[1].textContent == 'x' && items[2].textContent == 'x') {
					cross.classList.add('row1');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
			} 
				else if (items[3].textContent == 'x' && items[4].textContent == 'x' && items[5].textContent == 'x'){
					cross.classList.add('row2');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
				} 
		   		else if (items[6].textContent == 'x' && items[7].textContent == 'x' && items[8].textContent == 'x'){
		   			cross.classList.add('row3');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
		   		} 
		   		else if (items[0].textContent == 'x' && items[3].textContent == 'x' && items[6].textContent == 'x'){
		   			cross.classList.add('col1');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
		   		} 
		   		else if (items[1].textContent == 'x' && items[4].textContent == 'x' && items[7].textContent == 'x'){
		   			cross.classList.add('col2');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
		   		} 
		   		else if (items[2].textContent == 'x' && items[5].textContent == 'x' && items[8].textContent == 'x'){
		   			cross.classList.add('col3');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
		   		} 
		   		else if (items[0].textContent == 'x' && items[4].textContent == 'x' && items[8].textContent == 'x'){
		   			cross.classList.add('diag1');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
		   		} 
		   		else if (items[2].textContent == 'x' && items[4].textContent == 'x' && items[6].textContent == 'x'){
					cross.classList.add('diag2');
					setTimeout(function () {refresh(items);}, 2000);
					popupShow ('Winner: X');
				}
		}

		if (turns == 9 && !overlay.classList.contains('overlay-show')) {
			popupShow ('Tie game');
			setTimeout(function () {refresh(items);}, 2000);
		}
	});

});

window.addEventListener('keydown', (e) => {
	if(e.keyCode === 27){
		if(overlay.classList.contains('overlay-show')){
			overlay.classList.remove('overlay-show');
			popup.classList.remove('popup-show');
		}
	}
});

overlay.addEventListener('click', (e) => {
	if(overlay.classList.contains('overlay-show')){
			overlay.classList.remove('overlay-show');
			popup.classList.remove('popup-show');
		}
});

close.addEventListener('click', (e) =>{
	if(overlay.classList.contains('overlay-show')){
			overlay.classList.remove('overlay-show');
			popup.classList.remove('popup-show');
		}
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

function popupShow (text) {
	overlay.classList.add('overlay-show');
	popup.classList.add('popup-show');
	head.textContent = text;
}




