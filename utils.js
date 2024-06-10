/**
 * Function to extract the value from the filter argument.
 * First it finds the argument that includes '--filter'.
 * Then it splits the argument by '=' and returns the second element (the value).
 * 
 * @param {Array} arguments - Arguments passed to the script. Should be from process.argv.
 * @returns {string|undefined} - Returns the value of the filter argument or undefined if it's not present.
 */
const extractFilterArgument = (arguments) => {
  const filterArgument = arguments.find((arg) => arg.includes('--filter'));
  return filterArgument ? filterArgument.split('=')[1] || '' : undefined;
}

module.exports = {  
  extractFilterArgument,
};