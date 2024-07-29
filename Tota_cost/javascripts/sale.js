
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

function calc() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  window.alert(`${price} yen for ${number} pieces. Subtotal is ${price * number} yen.`);
}
