// BEGIN
export const swap = (items) => {
  if (items.length < 2) return items;

  const result = items.slice();

  const last = result.length - 1;
  const temp = result[0];

  result[0] = result[last];
  result[last] = temp;

  return result;
};
// END
