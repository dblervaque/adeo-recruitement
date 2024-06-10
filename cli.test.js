const { describe, it } = require('node:test');
const assert = require('node:assert');

const { Cli } = require('./cli');

describe('[Class] CLI', () => {
  describe('[Constructor]', () => {
    it('should return an instance of CLI with hasFilterArgument and hasCountArgument set to false', () => {
      const cli = new Cli();

      assert.strictEqual(cli.filterValue, undefined);
      assert.strictEqual(cli.shouldCount, false);
    });

    it('should return an instance of CLI with hasFilterArgument set to true and hasCountArgument set to false', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--filter=ry',
      ]);

      assert.strictEqual(cli.filterValue, 'ry');
      assert.strictEqual(cli.shouldCount, false);
    });

    it('should return an instance of CLI with hasFilterArgument set to false and hasCountArgument set to true', () => {
      const cli = new Cli([
        '/bin/node',
        'app.js',
        '--count',
      ]);

      assert.strictEqual(cli.filterValue, undefined);
      assert.strictEqual(cli.shouldCount, true);
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
    });
  });
});