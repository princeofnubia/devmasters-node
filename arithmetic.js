function calculateSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const currentNumber = arr[index];
    sum += currentNumber;
  }
  return sum;
}

module.exports = {
  calculateSum,
};
