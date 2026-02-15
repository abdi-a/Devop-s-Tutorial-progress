function calculateDiscount(price, discountPercentage) {
    if (price < 0) throw new Error("Price cannot be negative");
    if (discountPercentage < 0 || discountPercentage > 100) throw new Error("Invalid discount");
    
    return price - (price * (discountPercentage / 100));
}

module.exports = { calculateDiscount };
