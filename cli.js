const { extractFilterArgument, extractCountArgument } = require('./utils');

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
   * Initializes the CLI with the arguments passed to the script.
   *
   * @param {Array} args - Arguments passed to the script. Should be from process.argv. 
   */
  constructor(args = []) {
    this.filterValue = extractFilterArgument(args);
    this.shouldCount = extractCountArgument(args);
  }

  run() {
    console.log('Cli run');
  }
}

module.exports = {
  Cli,
};