const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
};
  
// Only edit below
  
/*Destructuring assignment with default values to extract the arrays for the lists 'first',
 'second', and 'third' from the data.lists array.
 *[1] Is fall back if 'find' method returns undefined.
 *'find' Method:search for the element in data.lists whose first element (the list name)
  matches the specified name ('first', 'second', or 'third').
*/
const { first = [1] } = data.lists.find(item => item[0] === 'first') || {};
const { second = [1] } = data.lists.find(item => item[0] === 'second') || {};
const { third = [1] } = data.lists.find(item => item[0] === 'third') || {};
  
const result = [];
  
const extractBiggest = () => {
const firstLast = first[first.length - 1];
const secondLast = second[second.length - 1];
const thirdLast = third[third.length - 1];
  
// Check if the last element of the first inner array is greater/= to: secondLast/thirdLast  
if (firstLast >= secondLast && firstLast >= thirdLast) {
     return first.pop();
   }
//Check if last element of second inner array is greater than thirdLast.
if (secondLast >= thirdLast) {
     return second.pop();
   }
//Else use pop() method to extract and return the largest element.
     return third.pop();
};

// Only edit above
  
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
  
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
  
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
  
console.log(result);
  