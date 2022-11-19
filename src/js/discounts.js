const calculateBtn = document.getElementById('calculateBtn');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
const result = document.getElementById('result');


function calculateDiscount() {

	const newPrice = Number(price.value);
	const newDiscount = Number(discount.value);

	const totalPrice = (newPrice * (100 - newDiscount)) / 100;

	if (!newPrice || !newDiscount) {

		result.innerText = `Debes ingresar los datos requeridos.`;

	} else if (newDiscount > 100) {
		
		result.innerText = `El descuento no puede ser mayor a 100.`;

	} else {

		result.innerText = `El precio con un descuento de ${newDiscount}% es de $${totalPrice}.`;
	}

}

calculateBtn.addEventListener('click', calculateDiscount);