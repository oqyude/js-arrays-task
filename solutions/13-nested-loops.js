const _ = require("lodash"); 

// BEGIN
const getSameCount = (first, second) => {
  const uniqFirst = [...new Set(first)];
  const uniqSecond = [...new Set(second)];

  let count = 0;

  for (const a of uniqFirst) {
    for (const b of uniqSecond) {
      if (a === b) {
        count += 1;
        break;
      }
    }
  }

  return count;
};

export default getSameCount;
// END
