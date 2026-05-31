// BEGIN
export const calculateSum = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
};
// END
