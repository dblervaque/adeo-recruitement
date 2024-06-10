const { describe, it } = require('node:test');
const assert = require('node:assert');

const { Cli } = require('./cli');

describe('[Class] CLI', () => {
  describe('[Constructor]', () => {
    it('should return an instance of CLI with hasFilterArgument and hasCountArgument set to false', () => {
      const cli = new Cli();

      assert.strictEqual(cli.filterValue, undefined);
      assert.strictEqual(cli.shouldCount, false);
      assert.strictEqual(cli.data.length, 0);
    });

    it('should return an instance of CLI with hasFilterArgument set to true and hasCountArgument set to false', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--filter=ry',
      ]);

      assert.strictEqual(cli.filterValue, 'ry');
      assert.strictEqual(cli.shouldCount, false);
      assert.strictEqual(cli.data.length, 0);
    });

    it('should return an instance of CLI with hasFilterArgument set to false and hasCountArgument set to true', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--count',
      ]);

      assert.strictEqual(cli.filterValue, undefined);
      assert.strictEqual(cli.shouldCount, true);
      assert.strictEqual(cli.data.length, 0);
    });

    it('should return an instance of CLI with hasFilterArgument and hasCountArgument set to true', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--filter=ry',
        '--count',
      ]);

      assert.strictEqual(cli.filterValue, 'ry');
      assert.strictEqual(cli.shouldCount, true);
      assert.strictEqual(cli.data.length, 0);
    });

    it('should return an instance of CLI with data set', () => {
      const cli = new Cli([], [{
        name: 'test',
        people: [{
          name: 'people',
          animals: [{
            name: 'dog',
          }],
        }],
      }]);

      assert.strictEqual(cli.filterValue, undefined);
      assert.strictEqual(cli.shouldCount, false);
      assert.deepEqual(cli.data, [{
        name: 'test',
        people: [{
          name: 'people',
          animals: [{
            name: 'dog',
          }],
        }],
      }]);
    });
  });

  describe('[Method] run', () => {
    it('should return the data filtered', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--filter=ry',
      ], [{
        name: 'Country',
        people: [{
          name: 'Person',
          animals: [{
            name: 'Dog',
          }, {
            name: 'Perry',
          }],
        }]
      }]);

      const result = cli.run();

      assert.deepEqual(result, [
        {
          name: 'Country',
          people: [{
            name: 'Person',
            animals: [{
              name: 'Perry',
            }],
          }],
        },
      ]);
    });

    it('should return the data with the count appended to the country and people names', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--count',
      ], [{
        name: 'Country',
        people: [{
          name: 'Person',
          animals: [{
            name: 'Dog',
          }, {
            name: 'Perry',
          }],
        }]
      }]);

      const result = cli.run();

      assert.deepEqual(result, [
        {
          name: 'Country [1]',
          people: [{
            name: 'Person [2]',
            animals: [{
              name: 'Dog',
            }, {
              name: 'Perry',
            }],
          }],
        },
      ]);
    });

    it('should return the data filtered and with the count appended to the country and people names', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--filter=ry',
        '--count',
      ], [{
        name: 'Country',
        people: [{
          name: 'Person',
          animals: [{
            name: 'Dog',
          }, {
            name: 'Perry',
          }],
        }]
      }]);

      const result = cli.run();

      assert.deepEqual(result, [
        {
          name: 'Country [1]',
          people: [{
            name: 'Person [1]',
            animals: [{
              name: 'Perry',
            }],
          }],
        },
      ]);
    });

    it('should returned all the data if no filter set and no count set', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
      ], [{
        name: 'Country',
        people: [{
          name: 'Person',
          animals: [{
            name: 'Dog',
          }, {
            name: 'Perry',
          }],
        }]
      }]);

      const result = cli.run();

      assert.deepEqual(result, [
        {
          name: 'Country',
          people: [{
            name: 'Person',
            animals: [{
              name: 'Dog',
            }, {
              name: 'Perry',
            }],
          }],
        },
      ]);
    });
  });
});