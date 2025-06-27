const cartProducts = [
    {
        name: "Burger",
        price: 320.0,
        currency: "ETB"
    },
    {
        name: "play station 4",
        price: 1350.0,
        currency: "USD"
    }
];

cartProducts.forEach((product) => {
    const currencySign = product.currency === 'USD' ? '$' : 'birr';
    product.displayPrice = `${product.price}${currencySign}`;
});

let total = 0;
cartProducts.forEach((product) => {
    total += product.price;
});

console.log("Total:", total);
console.log(cartProducts);








/*

const cartProducts = [
    { name: "Burger", price: 320.0, currency: "ETB" },
    { name: "play station 4", price: 1350.0, currency: "USD" }
];


const updatedCart = cartProducts.map((product) => {
    const currencySign = product.currency === 'USD' ? '$' : 'birr';
    return {
        ...product,
        priceWithCurrency: `${product.price}${currencySign}`
    };
});


const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

console.log("orginal cart:",cartProducts)
console.log("Updated cart:", updatedCart);
console.log("Total:", total);

*/



