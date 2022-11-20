// AVERAGE
let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function calculateAverage(list) {

	const sum = list.reduce((acum, newValor) => acum + newValor);

	const average = sum / list.length;
	return `El promedio es ${average}.`;
}

// MEDIAN
// MODE