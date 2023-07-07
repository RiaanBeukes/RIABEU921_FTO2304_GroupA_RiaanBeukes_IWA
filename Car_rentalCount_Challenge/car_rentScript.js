function calculateTotalCost () {
let daysToCharge = document.getElementById("dayAmount");
let days = daysToCharge.value;
calculateRentalPrice(days);
}

function calculateRentalPrice (days) {
let ratePerDay = 40;
let totalCost = 0;

/*----Forever loop tracking days and adding cost per day---
 -The loop counter variable is 'i=1'
 -'i++' will ad until 'i' is equal to 'days'.*/
let i
//'let i' is declared outside loop else 'i===3' for example wont be able to check.
for (i = 1; i <= days; i++) {
//Each time 40 is added to 40 the result becomes value of 'totalCost'.
  totalCost += ratePerDay;
  
// If 3 counted then subtract 20 from total rate per day.
  if (days >= 3 && i === 3) {
    totalCost -= 20;
  }

// If 5 counted then subtract 50 from total rate per day.
  if (days >= 5 && i === 5) {
    totalCost -= 50;
}
}

// Display the total cost
console.log("Total cost: $" + totalCost);

}