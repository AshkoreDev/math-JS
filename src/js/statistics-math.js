// Funciones dentro de un objeto.
const math = {};

// AVERAGE
math.calculateAverage = function calculateAverage(list) {

	const sum = list.reduce((acum, newValor) => acum + newValor);

	const average = sum / list.length;
	return average;
}

// MEDIAN
math.isEven = function isEven(list) {

	return !(list.length % 2);
}

math.calculateMedian = function calculateMedian(list) {

	const listIsEven = math.isEven(list);

	orderedList = list.sort((a,b) => a - b);
	// console.log(orderedList);

	if (listIsEven) {
		
		const indexMediumOne = orderedList[(orderedList.length / 2) - 1];
		const indexMediumTwo = orderedList[orderedList.length / 2];

		const listMedium = [indexMediumOne, indexMediumTwo];
		const averageMedium = math.calculateAverage(listMedium);
		return averageMedium;

	} else {

		const indexOddMedian = Math.floor(orderedList.length / 2);
		const oddMedian = orderedList[indexOddMedian];
		return oddMedian;
	}
}

// MODA
math.calculateModa = function calculateModa(list) {

	const listCount = {};

  list.forEach(item => listCount[item] = (listCount[item] ?? 0) + 1);

  const objectArray = Object.entries(listCount);

  // Lista bi-dimensional
  const orderedObjectArray = objectArray.sort((a, b) => b[1] - a[1]);
  const orderedListMaxNumber = orderedObjectArray[0];
  const moda = orderedListMaxNumber[0];

  console.log(orderedListMaxNumber);
  console.log(`La moda es: ${moda}`);
}