/**
 * Function that filters a data array to return the animal names matching the filter value.
 * @param {Array} data - Array containing data about location, people and animals.
 * @param {string} data.name - Name of the location.
 * @param {Array} data.people - Array containing data about people and their animals.
 * @param {string} data.people[].name - Name of the person.
 * @param {Array} data.people[].animals - Array containing data about the animals.
 * @param {string} data.people[].animals[].name - Name of the animal.
 * @param {string} filterValue - Value to filter the animal names.
 */
const handleAnimalNameFiltering = (data, filterValue) => {
  return data.map(location => {
    const people = location.people.map(person => {
      const animals = person.animals.filter(animal => animal.name.includes(filterValue));
      if (animals.length === 0) {
        return null;
      }
      return {
        name: person.name,
        animals,
      };
    }).filter(person => person !== null);

    if (people.length === 0) {
      return null;
    }
    return {
      name: location.name,
      people,
    };
  }).filter((location) => location !== null);
};

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

module.exports = {
  handleAnimalNameFiltering,
  countAndWriteInName,
};