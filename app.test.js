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

  it('should return an array with animal names containing the filter "Duck"', () => {
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

describe('[Function] countAndWriteInName', () => {
  it('should return the number of people for the first country', () => {
    const result = countAndWriteInName(data[0].name, data[0].people);

    assert.strictEqual(result, 'Dillauti [5]');
  });

  it('should return the number of people for the second country', async () => {
    const result = countAndWriteInName(data[1].name, data[1].people);

    assert.strictEqual(result, 'Tohabdal [8]');
  });

  it('should return the number of animals for the first person in the first country', () => {
    const result = countAndWriteInName(data[0].people[0].name, data[0].people[0].animals);

    assert.strictEqual(result, 'Winifred Graham [6]');
  });
})