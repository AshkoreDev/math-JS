// AVERAGE
let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function calculateAverage(list) {

	const sum = list.reduce((acum, newValor) => acum + newValor);

	const average = sum / list.length;
	return average;
}


// MEDIAN
let listTwo = [10,20,30,40,10]; 

function isEven(list) {

	return !(list.length % 2);
}


function calculateMedian(list) {

	const listIsEven = isEven(list);

	if (listIsEven) {
		
		const indexMediumOne = list[(list.length / 2) - 1];
		const indexMediumTwo = list[list.length / 2];

		const listMedium = [indexMediumOne, indexMediumTwo];
		const averageMedium = calculateAverage(listMedium);
		return averageMedium;

	} else {

		const indexOddMedian = Math.floor(list.length / 2);
		const oddMedian = list[indexOddMedian];
		return oddMedian;
	}
}

// MODE

