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

	orderedList = list.sort((a,b) => a - b);
	console.log(orderedList);

	if (listIsEven) {
		
		const indexMediumOne = orderedList[(orderedList.length / 2) - 1];
		const indexMediumTwo = orderedList[orderedList.length / 2];

		const listMedium = [indexMediumOne, indexMediumTwo];
		const averageMedium = calculateAverage(listMedium);
		return averageMedium;

	} else {

		const indexOddMedian = Math.floor(orderedList.length / 2);
		const oddMedian = orderedList[indexOddMedian];
		return oddMedian;
	}
}

// MODE

function calculateMode(list) {

	const listCount = {};

  list.forEach(item => listCount[item] = (listCount[item] ?? 0) + 1);

  const objectArray = Object.entries(listCount);

  const orderedObjectArray = objectArray.sort((a, b) => b[1] - a[1]);

  return orderedObjectArray;
}
