const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  };
  
  // Only edit below
  
  const result = [];
  
  const extractBiggest = () => {
    const { first = [1] } = data.lists.find(item => item[0] === 'first') || {};
    const { second = [1] } = data.lists.find(item => item[0] === 'second') || {};
    const { third = [1] } = data.lists.find(item => item[0] === 'third') || {};
  
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
  
  // Only edit above
  
  // The following code will call extractBiggest 15 times and store the results in the result array
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

  /*
=================================    Another method:    =================================================
// Only edit below

const result = [];

const extractBiggest = () => {
  const { first = [1] } = data.lists.find(item => item[0] === 'first') || {};
  const { second = [1] } = data.lists.find(item => item[0] === 'second') || {};
  const { third = [1] } = data.lists.find(item => item[0] === 'third') || {};

  if (first[first.length - 1] >= second[second.length - 1] && first[first.length - 1] >= third[third.length - 1]) {
    return first.pop();
  }

  if (second[second.length - 1] >= third[third.length - 1]) {
    return second.pop();
  }

  return third.pop();
};

// Only edit above
*/  