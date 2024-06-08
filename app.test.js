const { describe, it } = require('node:test');
const assert = require('node:assert');

const { data } = require('./data');

const { handleAnimalNameFiltering } = require('./app');

describe('filter test', () => {
  it('should return an array with animal names containing the filter "ry"', () => {
    const result = handleAnimalNameFiltering(data, 'ry');

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