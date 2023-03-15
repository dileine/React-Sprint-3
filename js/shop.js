// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
// function buy(id) {
// 1. Loop for to the array products to get the item to add to cart
// let productAdd;
// for (let i = 0; i < products.length; i++) {
// if (products[i].id === id) {
// productAdd = products[i];
// console.log(productAdd.name);
// break;
// }
// }
// 2. Add found product to the cartList array
// if (productAdd) {
// cartList.push(productAdd);
// console.log(productAdd.name + " has been added to cartList");
//  console.log(cartList);
// document.getElementById("count_product").innerHTML = cartList.length;
// }

// console.log(calculateTotal());
// }

// Exercise 2
function cleanCart() {
  cartList = [];
  document.querySelector("#cart_list").innerHTML = "";
  document.getElementById("total_price").innerHTML = "";
  document.getElementById("count_product").innerHTML = cart.length;
  console.log(cart);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total.toFixed(2);
}

// Exercise 4
// function generateCart() {
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
// cart = [];

//  for (let i = 0; i < cartList.length; i++) {
// if (!cart.includes(cartList[i])) {
// cartList[i].quantity = 1;
// cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
// cart.push(cartList[i]);
// console.log(cart);
// } else {
// cartList[i].quantity += 1;
// cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
// }
// }
// applyPromotionsCart();
// }

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
      cart[i].subtotalWithDiscount = cart[i].subtotal;
    }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  // generateCart();
  const cartTable = document.querySelector("#cart_list");
  cartTable.innerHTML = "";

  let cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    cartTotal += element.subtotalWithDiscount;

    const table = document.createElement("tr");

    const tableProduct = document.createElement("th");
    tableProduct.textContent = element.name;

    const tablePrice = document.createElement("td");
    tablePrice.textContent = element.price;

    const tableQty = document.createElement("td");
    tableQty.textContent = element.quantity;

    const tableSubtotal = document.createElement("td");
    tableSubtotal.textContent = element.subtotal.toFixed(2);

    const tableSubTotalDiscount = document.createElement("td");
    tableSubTotalDiscount.textContent = element.subtotalWithDiscount.toFixed(2);

    const addItem = document.createElement("td");
    addItem.innerHTML =
      '<button class="btn btn-outline-dark" onclick="addToCart(' +
      element.id +
      ')"><i class="fa fa-plus"></button>';

    const removeItem = document.createElement("td");
    removeItem.innerHTML =
      '<button class="btn btn-outline-dark" onclick="removeFromCart(' +
      element.id +
      ')"><i class="fa fa-minus"></button>';

    document.getElementById("total_price").innerHTML = cartTotal.toFixed(2);

    cartTable.appendChild(table);
    table.appendChild(tableProduct);
    table.appendChild(tablePrice);
    table.appendChild(tableQty);
    table.appendChild(tableSubtotal);
    table.appendChild(tableSubTotalDiscount);
    table.appendChild(addItem);
    table.appendChild(removeItem);
  }
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  let productAdd;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      productAdd = products[i];
      break;
    }
  }

  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  if (productAdd) {
    let productIndex = cart.findIndex((item) => item.id === productAdd.id);
    if (productIndex === -1) {
      productAdd.quantity = 1;
      productAdd.subtotal = productAdd.quantity * productAdd.price;
      cart.push(productAdd);
    } else {
      cart[productIndex].quantity += 1;
      cart[productIndex].subtotal =
        cart[productIndex].quantity * cart[productIndex].price;
    }
    const totalQuantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );

    document.getElementById("count_product").innerHTML = totalQuantity;
  }
  calculateTotal();
  applyPromotionsCart();
  printCart();
  console.log(cart);
}

// Exercise 9
function removeFromCart(id) {
  // find de index of the product in array cart
  const indexCart = cart.findIndex((item) => item.id === id);

  // eliminate or update quantity
  if (cart[indexCart].quantity == 1) {
    cart.splice(indexCart, 1); // remove from the cart
    console.log(cart);
  } else {
    cart[indexCart].quantity -= 1;
    cart[indexCart].subtotal = cart[indexCart].quantity * cart[indexCart].price;
  }
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  document.getElementById("count_product").innerHTML = totalQuantity;
  total = cart.reduce((sum, product) => sum + product.subtotal, 0);
  document.getElementById("total_price").innerHTML = total;
  calculateTotal();
  applyPromotionsCart();
  printCart();

  console.log(cart);
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
