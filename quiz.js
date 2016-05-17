function inputGetter(height, character) {


	if (height === '' || parseInt(height) === isNaN) {
		alert("Please enter a height as an integer");
	}
	if (character === '' || character.length > 1) {
		alert("Please enter 1 and only one chatacter");
	}

	seed = {"height": height ,"character": character};

	return treePlanter(seed);
}

function treePlanter(seed) {

	var spacing = (seed.height * 2) - 2; // variable for holding the spacing on each side of the printed character in the tree
	var content = 1; // holds the count of the number of the character needed for each line
	var rowString = '';
	
	for (i = 0; i < seed.height; i++) {

		rowString = ''; // "zero out" the variable each time through the loops

		for (firstSpacing = 0; firstSpacing < spacing / 2; firstSpacing++) { // loop for creating the white space
			rowString += ' ';
		}
		for (contentChar = 0; contentChar < content; contentChar++) { // loop for creating the character
				rowString += seed.character;
		}

		content = content + 2;
		spacing = spacing - 2;

		console.log(rowString);
	}
}

document.addEventListener("click", function () {
	inputGetter(document.seed.height.value, document.seed.character.value);
});