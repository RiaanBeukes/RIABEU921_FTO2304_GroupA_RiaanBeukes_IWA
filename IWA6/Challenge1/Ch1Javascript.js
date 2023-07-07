const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

/*-Use typeof to check if type of the value are equal. Thus 'typeof number==primaryPhone is not usable.
  -Example: Used "typeof primaryPhone==='string'" to see if ph num is same type or value as 'string'.
  -Then used '&& !isNaN(primaryPhone);' to check if primaryPhone is NOT a numerical catanation */
const primaryValid = typeof primaryPhone === 'string' && !isNaN(primaryPhone);
const secondaryValid = typeof secondaryPhone === 'string' && !isNaN(secondaryPhone);

/*Example:If the primaryValid value is a numerical string  */
console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid ); 