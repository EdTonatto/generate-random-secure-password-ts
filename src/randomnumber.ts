/* eslint-disable import/no-extraneous-dependencies */
import jscr from 'js-crypto-random';

const BATCH_SIZE = 256;
let randomIndex: number;
let randomBytes: Uint8Array = new Uint8Array();

function getNextRandom() {
  if (randomIndex === undefined || randomIndex >= randomBytes.length) {
    randomIndex = 0;
    randomBytes = jscr.getRandomBytes(BATCH_SIZE);
  }

  const result = randomBytes[randomIndex];
  randomIndex += 1;

  return result;
}

export default function getRandomNumber(max: number) {
  let random = getNextRandom();
  while (random >= BATCH_SIZE - (BATCH_SIZE % max)) {
    random = getNextRandom();
  }

  return random % max;
}
