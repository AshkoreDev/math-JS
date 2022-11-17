
// SQUARE
const squareSide = 5;


function calculateSquare(squareSide) {

	return {
		perimeter:squareSide * 4,
		area: squareSide * squareSide,
	}

}

// console.log( '%c squareArea', 'color: blue; font-size: 20px;');


// TRIANGLE
const triangleSideA = 6;
const triangleSideB = 6;
const triangleBase = 4;
// const triangleHeight = 5.5;


function calculateTriangle(triangleSideA, triangleSideB, triangleBase, triangleHeight) {

	return {
		perimeter: triangleSideA + triangleSideB + triangleBase,
		area: (triangleBase * triangleHeight) / 2,
	}

}

function calculateTriangleHeight(side, base) {

	if (side == base) {
		console.log('No es un triangulo isosceles.');
	} else {
		return Math.sqrt((side ** 2) - ((base ** 2) / 4));
	}
}


// CIRCLE
const circleRadio = 3;


function calculateCircle(circleRadio) {

	return {
		diameter: Math.pow(circleRadio, 2),
		circumference : circleDiameter * Math.PI,
		area: (circleRadio ** 2) * Math.PI,
	}

}