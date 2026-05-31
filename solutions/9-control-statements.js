// BEGIN
const getTotalAmount = (money, currency) => {
  let total = 0;

  for (const item of money) {
    const [cur, value] = item.split(' ');

    if (cur === currency) {
      total += Number(value);
    }
  }

  return total;
};

export default getTotalAmount;
// END
