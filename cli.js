const { extractFilterArgument, extractCountArgument } = require('./utils');
const { handleAnimalNameFiltering } = require('./filter');
const { mapAndAppendCountInNames } = require('./count');

/**
 * Class representing the CLI.
 */
class Cli {
  /**
   * The value for the filter function.
   */
  filterValue = undefined;

  /**
   * Whether the count function should be called.
   */
  shouldCount = false;

  /**
   * Data on which the functions will be called.
   */
  data = [];

  /**
   * Initializes the CLI with the arguments passed to the script.
   *
   * @param {Array} args - Arguments passed to the script. Should be from process.argv. 
   */
  constructor(args = [], data = []) {
    this.filterValue = extractFilterArgument(args);
    this.shouldCount = extractCountArgument(args);
    this.data = data;
  }

  /**
   * Runs the CLI.
   * 
   * @returns {Array} - Returns the filtered data and the data with the count
   * appended to the names depending on the arguments passed.
   */
  run() {
    let filteredData = this.data;

    if (this.filterValue) {
      filteredData = handleAnimalNameFiltering(filteredData, this.filterValue);
    }

    if (this.shouldCount) {
      filteredData = mapAndAppendCountInNames(filteredData);
    }

    return filteredData;
  }
}

module.exports = {
  Cli,
};