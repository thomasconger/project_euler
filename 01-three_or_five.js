// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiples = function(max, factor1, factor2) {
  let sum = 0;
  for (let i = 0; i < max; i++) {
    if ((i % factor1 === 0) || (i % factor2 === 0)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfMultiples(10, 3, 5));
console.log(sumOfMultiples(1000, 3, 5));
