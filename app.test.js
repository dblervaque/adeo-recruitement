const { describe, it } = require('test');
const assert = require('assert');

const data = require('./data');

describe('filter test', () => {
  it('should return an array with animal names containing the filter "ry"', () => {
    const result = myFilterFunction(data, 'ry');

    assert.deepEqual(
      result,
      [
        {
          name: 'Uzuzozne',
          people: [
            {
              name: 'Lillie Abbott',
              animals: [
                {
                  name: 'John Dory'
                }
              ]
            }
          ]
        },
        {
          name: 'Satanwi',
          people: [
            {
              name: 'Anthony Bruno',
              animals: [
                {
                  name: 'Oryx'
                }
              ]
            }
          ]
        }
      ],
    );
  });
});