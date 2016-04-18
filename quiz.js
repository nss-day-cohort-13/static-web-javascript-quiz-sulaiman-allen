function treePlanter(height, character) {
	if (height === '' || parseInt(height) === NaN) { // Nan apperently doesn't work to test against
		alert("Please enter a height as an integer");
	}

	if (character === '' || character.length > 1) {
		alert("Please enter 1 and only one chatacter")
	}

	var spacing = (height * 2) - 2; // variable for holding the spacing on each side of the printed character in the tree
	var content = 1; // holds the count of the number of the character needed for each line
	var rowString = '';
	
	for (i = 0; i < height; i++) {

		rowString = ''; // "zero out" the variable each time through the loops

		if (i !== height -1) { // This loop and the third inner loop only need to be run if its not the last iteration of the outer loop
			for (firstSpacing = 0; firstSpacing < spacing / 2; firstSpacing++) { // loop for creating the first set of white space
				rowString += ' ';
			}
		}
		for (contentChar = 0; contentChar < content; contentChar++) { // loop for creating the character
				rowString += character;
			}

		if (i !== height -1) { // runs only up to n-1 times
			for (firstSpacing = 0; firstSpacing < spacing / 2; firstSpacing++) { // loop for creating the second set of white space
				rowString += ' ';
			}
		}
		content = content + 2;
		spacing = spacing - 2;

		console.log(rowString);
	}
}