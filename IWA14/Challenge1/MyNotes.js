/*Added const
 *
*/
const firstName = 'John';
const age = 35;
const hobby = 'Coding';

/*  */
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

function iLoveHobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

iLoveHobby();

/*A parameter in a function serves as a placeholder for a value that will 
be provided as input when the function is called. It allows the function to 
receive and operate on different values or data dynamically, making the 
function more versatile and adaptable.
When one define a function with parameters, you create slots where you can 
pass values into the function when you call it. 
These values are referred to as arguments. The parameter acts as a temporary variable within the 
function, taking on the value of the corresponding argument during the 
function call. 
*/