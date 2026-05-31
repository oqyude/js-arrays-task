// BEGIN
export const flatten = (items) => {
  const result = [];

  for (const item of items) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
};
// END
