const { argv } = require('node:process');

const { mapAndAppendCountInNames  } = require('./count');
const { handleAnimalNameFiltering } = require('./filter');

const { data } = require('./data');

const main = () => {
  argv.forEach((argument) => {
    if (argument.startsWith('--filter=')) {
      const filterValue = argument.split('=')[1];
      const filteredData = handleAnimalNameFiltering(data, filterValue);
      console.log(JSON.stringify(filteredData, null, 2));
    }

    if (argument.startsWith('--count')) {
      const dataWithCount = mapAndAppendCountInNames(data);
      console.log(JSON.stringify(dataWithCount, null, 2));
    }
  });
}

main();