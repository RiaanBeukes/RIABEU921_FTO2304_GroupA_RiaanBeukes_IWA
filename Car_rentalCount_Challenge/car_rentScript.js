let daysToCharge = document.getElementById("dayAmount");
let days = daysToCharge.value;

function calculateRentalPrice (days) {
let ratePerDay = 40;
let discount = 0;

//Discount $20 for every 3 days
if (days >= 3) {
  const numDiscounts = Math.floor(days / 3);
  discount += numDiscounts * 20;
  }
  
//Discount $50 for every 5 days
if (days >= 5) {
  const numDiscounts = Math.floor(days / 5);
  discount += numDiscounts * 50;
  }
  
const totalPrice = (days * ratePerDay) - discount;
return totalPrice;

//Display total for client.--------------------
alert("Total amount: $" + totalPrice);

console.log("Total amount: $" + totalPrice);
}



// Display the total cost
console.log("Total cost: $" + totalCost);