// Description: This file is the entry point of the CLI.
const { data } = require('./data');
const { createCli } = require('./cli/cli');

const cli = createCli(process.argv);
cli.initializeData(data);

const result = cli.run();

console.log(JSON.stringify(result, null, 2));