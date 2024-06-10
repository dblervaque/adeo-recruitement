const { extractFilterArgument, extractCountArgument } = require('./utils/utils');
const { handleAnimalNameFiltering } = require('./filter/filter');
const { mapAndAppendCountInNames } = require('./count/count');

const createCli = (args = []) => {
  /**
   * Data on which the functions will be called.
   */
  let data = [];

  /**
   * The value for the filter function.
   */
  const filterValue = extractFilterArgument(args);

  /**
   * Whether the count function should be called.
   */
  const shouldCount = extractCountArgument(args);

  /**
   * Function to initialize the data.
   * 
   * @param {Array} originalData - The data to be initialized with.
   */
  const initializeData = (originalData) => {
    data = originalData;
  };

  /**
   * The filter function to be used on the data.
   */
  const filterFunction = handleAnimalNameFiltering;

  /**
   * The count function to be used on the data.
   */
  const countFunction = mapAndAppendCountInNames;

  /**
   * Run the functions on the data based on the arguments.
   * 
   * @returns {Array} - The data after the functions have been run. 
   */
  const run = () => {
    let filteredData = data;

    if (filterValue) {
      filteredData = filterFunction(filteredData, filterValue);
    }

    if (shouldCount) {
      filteredData = countFunction(filteredData);
    }

    return filteredData;
  }

  return {
    initializeData,
    run,
  }
}

module.exports = {
  createCli,
};