// BEGIN
export const get = (items, index, defaultValue = null) => {
  if (index in items) {
    return items[index];
  }

  return defaultValue;
};
// END
