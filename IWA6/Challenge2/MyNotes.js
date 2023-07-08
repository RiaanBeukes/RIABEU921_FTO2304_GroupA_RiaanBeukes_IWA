const rent = 400;
const tax = '8%'; //see issue is string.
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0o0; //OG'00'.  |Research suggest time variable used with '00:00' though its a string.
const minuteOfDay = 0o0;//OG '00'.| '00'  has same value as 0.
//                      Interestingly:"+0 === -0" but "1/+0 !== 1/-0"  .......

// *Only change below this line*

//---Changed '==' to '===' operator to check hourOfDay and minuteOfDay value is '0'.
if (hourOfDay === 0 && minuteOfDay === 0) {

   //---Added parseInt to tax variable:'8%' is a string, 
   //   needs to be decimal numerical value.........
   //---100 was in '' thus was reading as string....
   //---ParseInt(tax)" is added because the percentage has
   //   to be converted to a numerical value........
     const taxAsDecimal = parseInt(tax) / 100;
   //---To deduct the percentage of the salary from the salary:
     const startingAfterTax = salary - (salary * taxAsDecimal);
   //---'balace' was changed to 'balance', changed 'starting' to 'startingAfterTax'
     const balance = startingAfterTax - transport - food - rent;

   //---Moved console.log() inside function {}. 
   //---Added 'R' to concatonate currency with balance. 
   //---Changed 'toFixed' to (2).
     console.log('R ' + balance.toFixed(2));
}
//-----------------------------------------------------
/*  -------------------Original------------------------
if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
	const taxAsDecimal = tax / '100'
  const startingAfterTax = salary * '1' - taxAsDecimal
	const balace = starting - transport - food - rent
}
	
console.log(balance.toFixed(3))
*/