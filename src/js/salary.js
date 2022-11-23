console.log(math);
console.log(wages);

// Análisis personal
function findPerson(person) {

	return wages.find(item => item.name == person);
}

function medianPerPerson(person) {
	
	const jobsList = findPerson(person).jobs;

	const wagesList = jobsList.map(item => item.salary);

	const medianWages = math.calculateMedian(wagesList);

	return medianWages;
}

// Proyección por persona
function projectionPerPerson(person) {

	const jobsList = findPerson(person).jobs;

	let increaseList = [];

	for (let i = 1; i < jobsList.length; i++) {
		
		const currentSalary = jobsList[i].salary;
		const pastSalary = jobsList[i - 1].salary;
		const increase = currentSalary - pastSalary;
		const percent = (increase / pastSalary).toFixed(2);
		
		increaseList.push(percent);
	}

	const medianIncrease = math.calculateMedian(increaseList);

	const lastSalary = jobsList[jobsList.length - 1].salary;
	const lastIncrease = lastSalary * medianIncrease;
	const newSalary = lastSalary + lastIncrease;
	
	return newSalary;
}


// Análisis empresarial
function registerCompanies(wages) {

	const companies = {};

	for(person of wages) {

		for(jobs of person.jobs) {

			if (!companies[jobs.company]) {
				
				companies[jobs.company] = {};
			}

			if (companies[jobs.company][jobs.year]) {
				
				companies[jobs.company][jobs.year] = [];
			}

			companies[jobs.company][jobs.year].push(jobs.salary);
		}
	}

	return companies;
}

registerCompanies(wages);
console.log(wages);