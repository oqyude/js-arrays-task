// BEGIN
const calculateAverage = (temperatures) => {
  if (temperatures.length === 0) return null;

  let sum = 0;

  for (const t of temperatures) {
    sum += t;
  }

  return sum / temperatures.length;
};

export default calculateAverage;
// END
