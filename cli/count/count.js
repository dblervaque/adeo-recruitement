/**
 * Function that counts the number of elements in an array and writes it in the original name.
 * @param {string} originalName - Original name to write the count.
 * @param {Array} arrayToCount - Array to count the elements.
 * @returns {string} - Returns the original name with the count in brackets.
 */
const countAndWriteInName = (originalName, arrayToCount) => {
  const count = arrayToCount.length;
  return `${originalName} [${count}]`;
};

/**
 * Function that maps the data and appends the count in the names.
 * @param {Array} data - Array containing data about location, people and animals.
 * @returns {Array} - Returns the data with the count appended in the names.
 */
const mapAndAppendCountInNames = (data) => {
  return data.map((country) => {
    return {
      name: countAndWriteInName(country.name, country.people),
      people: country.people.map((person) => {
        return {
          name: countAndWriteInName(person.name, person.animals),
          animals: person.animals,
        };
      }),
    };
  });
};

module.exports = {
  countAndWriteInName,
  mapAndAppendCountInNames,
};