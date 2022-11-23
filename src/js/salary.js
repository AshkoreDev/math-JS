console.log(math);
console.log(wages);

// 
function findPerson(person) {

	return wages.find(item => item.name == person);
}

function medianPerPerson(person) {
	
	const jobsList = findPerson(person).jobs;

	const wagesList = jobsList.map(item => item.salary);

	const medianWages = math.calculateMedian(wagesList);

	return medianWages;
}