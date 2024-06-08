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
});  it('should return an array with animal names containing the filter "Duck"', () => {
    const result = handleAnimalNameFiltering(data, 'Duck');

    assert.deepEqual(
      result,
      [
        {
          name: 'Dillauti',
          people: [
            {
              name: 'Winifred Graham',
              animals: [
                {
                  name: 'Duck',
                },
              ],
            },
            {      
              name: 'Louise Pinzauti',
              animals: [
                {
                  name: 'Duck',
                }
              ]
            }
          ],
        },
        {
          name: 'Tohabdal',
          people: [
            {
              name: 'Alexander Fleury',
              animals: [
                {
                  name: 'Duck',
                },
              ],
            },
          ],
        },
        {
          name: 'Uzuzozne',
          people: [
            {
              name: 'Lina Allen',
              animals: [
                {
                  name: 'Duck',
                },
              ],
            }
          ]
        }
      ],
    );
  })
});
