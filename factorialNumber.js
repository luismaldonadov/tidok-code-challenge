/**
 *
 * Returns the factorial of a number
 * @param {integer} num
 * @returns {integer}
 */
function factorialNumber(num) {
  // validate if Positive and Integer or 0
  let factorial;
  if (Number.isInteger(num) && (Math.sign(num) === 1 || Math.sign(num) === 0)) {
    factorial = num;
    //5 - 5 > 5
    if (num > 0) {
      for (let index = num; index > 1; index--) {
        factorial *= index - 1;
      }
      return factorial;
    }
    return 1;
  }
  return "Invalid input number";
}

console.log(factorialNumber(11));
