// AVERAGE
let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function calculateAverage(list) {

	const sum = list.reduce((acum, newValor) => acum + newValor);

	const average = sum / list.length;
	return `El promedio es ${average}.`;
}


// MEDIAN

let listTwo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

function isEven(list) {

	return !(list.length % 2);
}

function isOdd(list) {

	return list.length % 2;
}

function calculateMedian(list) {

	// calculateAverage(list);
	const listIsEven = isEven(list);

	if (listIsEven) {
		

	} else {
		const indexOddMedian = Math.floor(list.length / 2) + 1;
		console.log(list[indexOddMedian];
	}
}

// MODE

