const add = (a, b) => {a + b};

//changed {a-b} to {a * b};
const multiply = (a, b) => {a * b};

//Added internal to this
//
function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  return this.multiply(added, this.internal.c);
}

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
  