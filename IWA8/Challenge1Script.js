const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

/*- Added = to assign each object to value
  -ChangedLeoName+leoSurname to just leoSurname-leoSurname not declared/undefined.
  -Added ', :, = throughout.
*/
const leo = {
	name : leoName,
	balance : leoBalance,
	'access id' : '47afb389-8014-4d0b-aff3-e40203d2107f',
	age : 24,
	address : {
		number : leoNumber,
		street : leoStreet,
		'postal-code' : leoPostal,
	}
};

/*-sara changed to sarah  ${owed.toFixed(2)}
  -Added''+ to place space between two CSSFontFeatureValuesRule
  - implemented interpolation by name and attached fixed() to eliminate space in variable decleration.
  */
const sarah = {
	name : `${sarahName.trim()} ${sarahSurname}`,
	age : 62,
	'access id' : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance : sarahBalance,
	address : {
		number : sarahNumber,
		street : sarahStreet,
		'postal-code' : sarahPostal,
	}
};

console.log(leo.name, leo.address['postal-code']);
console.log(sarah.name, sarah.address['postal-code']);