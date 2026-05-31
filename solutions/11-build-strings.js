// BEGIN
const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) return '';

  let result = '<dl>';

  for (const [term, description] of definitions) {
    result += `<dt>${term}</dt><dd>${description}</dd>`;
  }

  result += '</dl>';

  return result;
};

export default buildDefinitionList;
// END
