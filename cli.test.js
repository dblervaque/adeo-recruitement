const { describe, it } = require('node:test');
const assert = require('node:assert');

const { Cli } = require('./cli');

describe('[Class] CLI', () => {
  describe('[Constructor]', () => {
    it('should return an instance of CLI with hasFilterArgument and hasCountArgument set to false', () => {
      const cli = new Cli();

      assert.strictEqual(cli.hasFilterArgument, false);
      assert.strictEqual(cli.hasCountArgument, false);
    });

    it('should return an instance of CLI with hasFilterArgument set to true and hasCountArgument set to false', () => {
      const cli = new Cli({
        hasFilterArgument: true,
      });

      assert.strictEqual(cli.hasFilterArgument, true);
      assert.strictEqual(cli.hasCountArgument, false);
    });

    it('should return an instance of CLI with hasFilterArgument set to false and hasCountArgument set to true', () => {
      const cli = new Cli({
        hasCountArgument: true,
      });

      assert.strictEqual(cli.hasFilterArgument, false);
      assert.strictEqual(cli.hasCountArgument, true);
    });

    it('should return an instance of CLI with hasFilterArgument and hasCountArgument set to true', () => {
      const cli = new Cli({
        hasFilterArgument: true,
        hasCountArgument: true,
      });

      assert.strictEqual(cli.hasFilterArgument, true);
      assert.strictEqual(cli.hasCountArgument, true);
    });
  });
});