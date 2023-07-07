const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0;
//Location was made into a global declaration to ensure variable applies in global scope.
const LOCATION = 'RSA';

//Added let to make variable, set currency to null.
/*assigned currency to value of null so they can change later.*/
let shipping = null;
let currency = null;

//Let added to location for later re-assignment, and const for customers.
//let location = 'RSA';
const customers = 1;

//example quantities is set in example, thus const added.
//added equal signs to assign variable to objects.
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

//--------Conditions to assign currency according to location---------------
/*function to assign different shipping costs and currencies
based on value of location variable*/
if (LOCATION === 'RSA') {
/*operator "===" if true location is RSA, then assigns shipping,currency.*/
  shipping = 400;
  currency = 'R';
} else if (LOCATION === 'NAM') {
/*operator "===" if true location is NAM, then assigns shipping,currency.*/
  shipping = 600;
  currency = '$';
} else {
/*operator "===" if location is not RSA or Nam, its International, then assigns shipping,currency.*/
  shipping = 800;
  currency = '$';
}

/*total of goods ordered assigned to a variable 'totalCost'.
instead of cluttering 'if' conditions with content.*/
const totalCost = shoes + toys + shirts + batteries + pens;
const calcShipping = shipping === 0 ? 0 : shipping;


//-------Conditions to check if customer gets free shipping---------------
/*Restructured function syntax to check if conditions are met in regards to:
location, number of clients and order is not below min amount for shipping.  */
if (LOCATION === 'RSA' && totalCost >= 1000 && customers === 1) {
    shipping = 0;
} else {
/*if above is not true then it checks: */
if (LOCATION ==='NAM' && totalCost >= 60 && customers === 1) {
    shipping = 0;
} else {
/*if above is not true then issue warning: */
    console.log(FREE_WARNING);
    }
}

//----Function to check if conditions for free shipping arent met is true--------
/*-Changed '!===1' to '!==1', as '!===1' is not a function.
  -Changed 'shipping=0'to'shipping===0', so if true that shipping cost is 0,
   and its true that amount of customers is not equal to 1, then issue warning.*/ 
if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
}

//------Condition to give warning if location is North Korea---------------------
/*-Added condition 'if(){}" to give warning if location is NorthKorea, else print price.
  -Removed ternary operator '?'.   */
if (LOCATION === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price:', currency, totalCost + shipping);
}