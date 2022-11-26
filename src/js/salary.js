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
const companies = {};

for (person of wages) {
  for (salary of person.jobs) {
    if (!companies[salary.company]) {
      companies[salary.company] = {};
    }

    if (!companies[salary.company][salary.year]) {
      companies[salary.company][salary.year] = [];
    }

    companies[salary.company][salary.year].push(salary.salary);
  }
}
console.log({companies});

function companiesYearMedian(name, year) {

	if (!companies[name]) {
		
		console.warn('La empresa no existe.');

	} else if (!companies[name][year]) {

		console.warn('La empresa no dio salarios ese año.');

	} else {

		return math.calculateMedian(companies[name][year]);
	}
}

function projectionPerCompany(name) {

	if (!companies[name]) {
	
		console.warn('La empresa no existe.');

	} else {

		const companyYears = Object.keys(companies[name]);
		const medianYearsList = companyYears.map(year => companiesYearMedian(name, year));
		
		let increaseList = [];

		for (let i = 1; i < medianYearsList.length; i++) {
			
			const currentSalary = medianYearsList[i];
			const pastSalary = medianYearsList[i - 1];
			const increase = currentSalary - pastSalary;
			const percent = (increase / pastSalary).toFixed(2);
			
			increaseList.push(percent);
		}

		const medianIncrease = math.calculateMedian(increaseList);

		const lastMedianWages = medianYearsList[medianYearsList.length - 1];
		const lastIncrease = lastMedianWages * medianIncrease;
		const newMedianWages = lastMedianWages + lastIncrease;
		
		return newMedianWages;
	}
}


// Análisis general
function generalMedian() {

	const medianPerName = wages.map(person => medianPerPerson(person.name));
	const median = math.calculateMedian(medianPerName);

	return median;
}

function medianTopTen() {

	const medianPerName = wages.map(person => medianPerPerson(person.name));
	const medianOrderedList = medianPerName.sort((a,b) => a - b);

	const amount = medianPerName.length / 10;
	const limit = medianOrderedList.length - amount;

	const topTen = medianOrderedList.slice(limit, medianOrderedList.length);

	console.log(medianOrderedList);
	console.log(amount);
	console.log(limit);
	console.log(topTen);
}