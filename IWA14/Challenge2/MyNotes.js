/*Arrow Function Syntax for add and multiply:
  Arrow functions are a shorthand syntax for defining functions.
  They have a concise and more expressive syntax compared to regular functions.
*/
const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

/*The internal function is meant to be used as a method of
  objects (example1 and example2 in this case). The this keyword inside 
  the internal function refers to the object on which the method is being called. 
*/
function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  return this.multiply(added, this.internal.c);
}
/*In the updated code, the add and multiply functions were defined as standalone 
  arrow functions, and they are now accessed directly as add and multiply (without using this).
*/
  const example1 = {
    internal: {
      a: 2,
      b: 4,
      c: 8,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  const example2 = {
    internal: {
      a: 2,
      b: 2,
      c: 3,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  console.log(example1.calculate()); // Output: 48
  console.log(example2.calculate()); // Output: 12
  