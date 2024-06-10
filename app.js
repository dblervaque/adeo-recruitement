const { argv } = require('node:process');

const { mapAndAppendCountInNames  } = require('./cli/count/count');
const { handleAnimalNameFiltering } = require('./cli/filter/filter');

const { data } = require('./data');
const { Cli } = require('./cli/cli');

const cli = new Cli(process.argv, data);

const result = cli.run();

console.log(JSON.stringify(result, null, 2));