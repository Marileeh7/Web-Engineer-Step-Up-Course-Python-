// Obtener los elementos del DOM para el producto y la cantidad
const productElement = document.getElementById("product");
const numberElement = document.getElementById("number");

// Array para almacenar los productos añadidos al carrito
let purchases = [];

/**
 * Función para añadir un producto al carrito
 */
function addProduct() {
  // Obtener el precio del producto seleccionado y la cantidad
  const price = parseInt(productElement.value);
  const number = parseInt(numberElement.value);
  // Obtener el nombre del producto usando el atributo data-name
  const name = productElement.options[productElement.selectedIndex].getAttribute('data-name');

  // Verificar que el precio y la cantidad sean válidos
  if (!isNaN(price) && number > 0) {
    // Buscar si el producto ya existe en el carrito
    const purchase = purchases.find(item => item.name === name);
    if (purchase) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      purchase.number += number;
    } else {
      // Si el producto no está en el carrito, añadirlo como nuevo
      purchases.push({ name, price, number });
    }
    // Mostrar una alerta confirmando el producto añadido
    alert(`Added to cart: ${name}\nPrice: ${price} yen\nQuantity: ${number}`);
  } else {
    // Mostrar una alerta si no se ha seleccionado un producto o cantidad válidos
    alert('Please select a valid product and quantity.');
  }
}

/**
 * Función para calcular el total de la compra, incluyendo gastos de envío
 */
function calculateTotal() {
  let subtotal = 0;
  let productDetails = '';

  // Calcular el subtotal y construir el detalle de productos
  purchases.forEach(item => {
    const itemTotal = item.price * item.number;
    subtotal += itemTotal;
    productDetails += `${item.name}: ${item.price} yen x ${item.number} = ${itemTotal} yen\n`;
  });

  // Calcular los gastos de envío basados en el subtotal
  const shippingCost = getShippingCost(subtotal);
  const total = subtotal + shippingCost;

  // Mostrar una alerta con los detalles del pedido, incluyendo subtotal, gastos de envío y total
  alert(`Products:\n${productDetails}\nSubtotal: ${subtotal} yen\nShipping: ${shippingCost} yen\nTotal: ${total} yen`);

  // Reiniciar el carrito y los campos del formulario
  purchases = [];
  productElement.value = "0";
  numberElement.value = "";
}

/**
 * Función para determinar los gastos de envío basados en el subtotal
 * @param {number} amount - El subtotal de la compra
 * @returns {number} - El costo de envío
 */
function getShippingCost(amount) {
  if (amount >= 3000) {
    return 0; // Envío gratis para órdenes de 3000 yenes o más
  } else if (amount >= 2000) {
    return 250; // Costo de envío de 250 yenes para órdenes entre 2000 y 2999 yenes
  } else {
    return 500; // Costo de envío de 500 yenes para órdenes menores a 2000 yenes
  }
}
