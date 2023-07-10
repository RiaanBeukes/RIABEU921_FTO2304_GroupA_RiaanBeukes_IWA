const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'
const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//change parseInt to parseFloat to change string to decimal numerical value.
const owed = parseFloat(Math.abs(leoBalance)) + parseFloat(Math.abs(sarahBalance));
// Add trim to eliminate spaces in the declaration values.
//Add \n to ensure starts on new line.
//(2) is how many decimals value must show ---${owed.toFixed(2)---
// Added ".toFixed()" to force the value in this case having two decimals--(2)--.
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})\n`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})\n`;
const total = `Total amount owed: R ${owed.toFixed(2)}\n`;

const result = `\n${leo}${sarah}${divider}\n${total}${divider}\n`;

console.log(result);