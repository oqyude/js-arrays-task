// BEGIN
const makeCensored = (sentence, stopWords) => {
  return sentence
    .split(' ')
    .map((word) => (stopWords.includes(word) ? '$#%!' : word))
    .join(' ');
};

export default makeCensored;
// END
