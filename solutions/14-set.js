// BEGIN
const countUniqChars = (text) => {
  const unique = [];

  for (const char of text) {
    if (!unique.includes(char)) {
      unique.push(char);
    }
  }

  return unique.length;
};

export default countUniqChars;
// END
