const calculateDiscountBtn = document.getElementById('calculateDiscountBtn');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
const resultDiscount = document.getElementById('resultDiscount');

const calculateCouponBtn = document.getElementById('calculateCouponBtn');
const priceCoupon = document.getElementById('priceCoupon');
const coupon = document.getElementById('coupon');
const resultCoupon = document.getElementById('resultCoupon');

const coupons = [
	{ coupon: 'basic', discount: 15 },
	{ coupon: 'platinum', discount: 30 },
	{ coupon: 'golden', discount: 50 }
];


function calculateDiscount() {

	const newPrice = Number(price.value);
	const newDiscount = Number(discount.value);

	if (!newPrice || !newDiscount) {

		resultDiscount.innerText = `Debes ingresar los datos requeridos.`;

	} else if (newDiscount > 100) {
		
		resultDiscount.innerText = `El descuento no puede ser mayor a 100.`;

	} else {

		const totalPrice = (newPrice * (100 - newDiscount)) / 100;
		resultDiscount.innerText = `El precio con un descuento de ${newDiscount}% es de $${totalPrice}.`;
	}
}

function calculateCoupon() {

	const newPrice = Number(priceCoupon.value);
	const newCoupon = coupon.value;
	let discountCoupon = 0;

	if (!newPrice || newCoupon == '') {

		resultCoupon.innerText = `Debes ingresar los datos requeridos.`;

	} else {

		coupons.forEach(item => {

			if (newCoupon == item.coupon) {
				
				discountCoupon = item.discount;
			}
		});

		if (discountCoupon == 0) {

			resultCoupon.innerText = `El cupón no es valido.`;

		} else {

			const totalPriceCoupon = (newPrice * (100 - discountCoupon)) / 100;

			resultCoupon.innerText = `El precio con el cupón ${newCoupon} es de $${totalPriceCoupon}.`;
		}
	}
}

calculateDiscountBtn.addEventListener('click', calculateDiscount);
calculateCouponBtn.addEventListener('click', calculateCoupon);