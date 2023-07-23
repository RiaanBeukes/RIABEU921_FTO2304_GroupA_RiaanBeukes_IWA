/* The data object contains a property called lists, which is an array of arrays. 
   Each inner array represents a list and contains two elements:
  --The first element is a string representing the list name (e.g., 'first', 'second', 'third').
  --The second element is an array of numbers representing the values in the corresponding list.  
*/
const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]//[1st elemnt, 2nd elemnt]
  };  //string^      ^number array
  
//  ======================= Only edit below==========================================
  
/* *The code uses destructuring assignment with default values to extract
    the arrays for the lists 'first', 'second', and 'third' from the data.lists array.
   *[1] Is fall back if 'find' method returns undefined.   
   *'find' Method:search for the element in data.lists whose first element (the list name)
    matches the specified name ('first', 'second', or 'third').
*/ 
const result = [];  //*A*-see below

/*See below: *** & *B*/
const extractBiggest = () => {
const { first = [1] } = data.lists.find(item => item[0] === 'first') || {};
/*  The find method is used to search for the element in data.lists whose first 
    element (the list name) matches the specified name ('first', 'second', or 'third'). 
 *  If the list name is found, it returns the corresponding inner array 
    (e.g., ['first', [15, 11, 13, 7, 5]]), which is then destructured to extract the
    second element (the array of numbers). */
const { second = [1] } = data.lists.find(item => item[0] === 'second') || {};
/* If the list name is not found in the data.lists array (which happens when the find 
    method returns undefined), the default value [1] is used as a fallback. This default
    value is an array with a single element 1, which will be used if the specified list
    name is not found or if the list is empty.  */
const { third = [1] } = data.lists.find(item => item[0] === 'third') || {};
  
/*  The result array is initialized, which will be used to store the extracted biggest 
    numbers from the lists.  */

const firstLast = first[first.length - 1];
const secondLast = second[second.length - 1];
const thirdLast = third[third.length - 1];
  
    if (firstLast >= secondLast && firstLast >= thirdLast) {
      return first.pop();
    }
  
    if (secondLast >= thirdLast) {
      return second.pop();
    }
  
    return third.pop();
};
  
//    =================Only edit above==========================
  
// The following code will call extractBiggest 15 times and store the results in the result array.
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
/* The code then calls the extractBiggest function 15 times and stores the results 
   (the extracted biggest numbers) in the result array using the push() method.
 * Finally, the result array, which now contains the extracted biggest numbers from
   all three lists, is logged to the console. 
*/
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

/***The extractBiggest function is defined, which is responsible for comparing the last
  elements of the arrays for 'first', 'second', and 'third'. It pops (removes and returns) the
  largest element from the respective array.

 *The firstLast, secondLast, and thirdLast variables are assigned the values of the last
  elements in the arrays first, second, and third, respectively.

 *The function then compares the values of firstLast, secondLast, and thirdLast to determine 
  which one is the largest. It uses a series of if statements to decide which array should 
  have its last element removed and returned.

 *If the last element of the 'first' list (firstLast) is greater than or equal to both the last 
  elements of the 'second' and 'third' lists, it means that 'first' contains the largest element.
  In this case, the function uses the pop() method on the 'first' array to remove and return the
  largest element.

 *If the last element of the 'second' list (secondLast) is greater than or equal to the last 
  element of the 'third' list, it means that 'second' contains the largest element. The function
  then uses the pop() method on the 'second' array to remove and return the largest element.

 *If neither of the above conditions is true, it means that 'third' contains the largest element.
  The function then uses the pop() method on the 'third' array to remove and return the largest
  element. 
     ========================================================================================
*A*const {} = 
 *In destructuring assignment, the left-hand side of the assignment resembles the structure of
  the object or array you want to destructure. When using object destructuring, you enclose the
  variables you want to extract from the object within curly braces {}. The variable names 
  inside the curly braces must match the property names of the object.

 *However, in some cases, you might not need all the properties of an object, or you may want
  to ignore some of them. That's when you can use an empty object {} as the left-hand side of
  the destructuring assignment. This syntax allows you to extract specific properties from the
  object and ignore the rest.
     ========================================================================================
*B*This is an arrow function that takes an argument item and performs a comparison on it. It 
  checks if the first element of item (which is expected to be an array) is equal to the string
  'first'. If the comparison evaluates to true, the arrow function returns true; otherwise, it
  returns false.
 *This arrow function is used as a callback function for the find method, which searches for 
  an element in an array that satisfies the given condition. The find method will call this
  arrow function with each element of the data.lists array, checking if the first element of
  the inner arrays matches 'first'. 
  When it finds the element that meets this condition, it will return that element, which is
  an array like ['first', [15, 11, 13, 7, 5]], or undefined if no such element is found.
*/
  