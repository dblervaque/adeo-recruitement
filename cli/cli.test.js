const { describe, it } = require('node:test');
const assert = require('node:assert');

const { createCli } = require('./cli');

describe('[Class] CLI', () => {
  describe('[Method] run', () => {
    it('should return the data filtered', () => {
      const cli = createCli([
        '/bin/node',
        'app.js',
        '--filter=ry',
      ]);
      cli.initializeData([{
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
      const cli = createCli([
        '/bin/node',
        'app.js',
        '--count',
      ]);
      cli.initializeData([{
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
      const cli = createCli([
        '/bin/node',
        'app.js',
        '--filter=ry',
        '--count',
      ]);
      cli.initializeData([{
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
      const cli = createCli([
        '/bin/node',
        'app.js',
      ]);
      cli.initializeData([{
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