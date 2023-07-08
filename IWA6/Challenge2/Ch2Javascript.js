const rent = 400;
const tax = '8%'; // Initialized as string.
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00; // Syntax errors. VS suggest '0o0'.
const minuteOfDay = 00; // Syntax errors. VS suggest '0o0'.

// Only change below this line

//---Changed '==' to '===' operator to check hourOfDay and minuteOfDay value is '0'.
if (hourOfDay === 0 && minuteOfDay === 0) {
//---Added parseInt to tax variable:'8%' is a string, needs to be decimal numerical value.
//---100 was in '' thus was reading as string.
  const taxAsDecimal = parseInt(tax) / 100;
//---To deduct the percentage of the salary from the salary:
  const startingAfterTax = salary - (salary * taxAsDecimal);
//---'balace' was changed to 'balance',
//---Changed 'starting' to 'startingAfterTax'
  const balance = startingAfterTax - transport - food - rent;

//---Moved console.log() inside function {}. 
//---Added 'R' to concatonate currency with balance. 
//---Changed 'toFixed' to (2).
  console.log('R ' + balance.toFixed(2));
}