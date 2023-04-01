/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
import getRandomNumber from "../src/randomnumber";

describe('RandomNumber', () => {
  test('getRandomNumber returns a value within the specified range', () => {
    const max = 10;
    const iterations = 10000;
  
    for (let i = 0; i < iterations; i++) {
      const randomNumber = getRandomNumber(max);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(max);
    }
  });

  test('getRandomNumber returns 0 when called with max=1', () => {
    expect(getRandomNumber(1)).toEqual(0);
  });
});
