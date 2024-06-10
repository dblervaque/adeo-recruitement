const { describe, it } = require('node:test');
const assert = require('node:assert');

const {
  extractFilterArgument,
} = require('./utils');

describe('utils test', () => {
  describe('[Function] extractFilterValue', () => {
    it('should return the value of the filter argument', () => {
      const result = extractFilterArgument([
        '/bin/node',
        'app.js',
        '--filter=ry',
      ]);

      assert.strictEqual(result, 'ry');
    });

    it('should return an empty string when the filter argument is not set', () => {
      const result = extractFilterArgument([
        '/bin/node',
        'app.js',
        '--filter'
      ]);

      assert.strictEqual(result, '');
    });

    it('should return undefined when the filter argument is not present', () => {
      const result = extractFilterArgument([
        '/bin/node',
        'app.js',
      ]);

      assert.strictEqual(result, undefined);
    });
  });

  describe('[Function] extractCountArgument', () => {
    it('should return true when the count argument is present', () => {
      const result = extractCountArgument([
        '/bin/node',
        'app.js',
        '--count',
      ]);

      assert.strictEqual(result, true);
    });

    it('should return false when the count argument is not present', () => {
      const result = extractCountArgument([
        '/bin/node',
        'app.js',
      ]);

      assert.strictEqual(result, false);
    });
  });
});