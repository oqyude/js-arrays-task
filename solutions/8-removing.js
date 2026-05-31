// BEGIN
const getSameParity = (numbers) => {
  if (numbers.length === 0) return [];

  const baseParity = Math.abs(numbers[0] % 2);
  const result = [];

  for (const num of numbers) {
    if (Math.abs(num % 2) === baseParity) {
      result.push(num);
    }
  }

  return result;
};

export default getSameParity;
// END
