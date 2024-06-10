/**
 * Function that filters a data array to return the animal names matching the filter value.
 * @param {Array} data - Array containing data about location, people and animals.
 * @param {string} data.name - Name of the location.
 * @param {Array} data.people - Array containing data about people and their animals.
 * @param {string} data.people[].name - Name of the person.
 * @param {Array} data.people[].animals - Array containing data about the animals.
 * @param {string} data.people[].animals[].name - Name of the animal.
 * @param {string} filterValue - Value to filter the animal names.
 * @returns {Array} - Returns the data array filtered by the animal names.
 */
const handleAnimalNameFiltering = (data, filterValue) => (
  data
    .map(({ people, ...location }) => ({
      ...location,
      people: people
        .map(({ animals, ...person }) => ({
          ...person,
          animals: animals.filter(({ name }) => name.includes(filterValue)),
        }))
        .filter(({ animals}) => animals.length > 0)
    }))
    .filter(({ people }) => people.length > 0)
  );

module.exports = {
  handleAnimalNameFiltering,
};