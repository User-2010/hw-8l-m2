
function calculateDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}

console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(500, 10));
console.log(calculateDiscount(2500, 50));

