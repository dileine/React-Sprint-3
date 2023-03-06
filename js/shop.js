// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let productAdd;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      productAdd = products[i];
      console.log(productAdd.name);
      break;
    }
  }
  // 2. Add found product to the cartList array
  if (productAdd) {
    cartList.push(productAdd);
    console.log(productAdd.name + " has been added to the cart");
    console.log(cartList);
    document.getElementById("count_product").innerHTML = cartList.length;
  }

  console.log(calculateTotal());
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
  document.getElementById("count_product").innerHTML = cartList.length;
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price;
  }
  return totalPrice;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart = [];
  for (let i = 0; i < cartList.length; i++) {
    if (!cart.includes(cartList[i])) {
      cartList[i].quantity = 1;
      cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
      cart.push(cartList[i]);
      console.log(cart);
    } else {
      cartList[i].quantity += 1;
      cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
    }
    applyPromotionsCart();
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == 1 && cart[i].quantity >= 3) {
      cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
    } else if (cart[i].id == 3 && cart[i].quantity >= 10) {
      cart[i].subtotalWithDiscount = (cart[i].price * 2) / 3;
      cart.push(cart[i].subtotalWithDiscount);
    } else {
      cart[i].subtotalWithDiscount = "";
    }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
