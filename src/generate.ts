/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import getCharPool from './characterspool';
import { Options } from './options';
import getRandomNumber from './randomnumber';

function generate(options: Options): string {
  // Set default values for options
  options = options || {};
  if (!Object.prototype.hasOwnProperty.call(options, 'length'))
    options.length = 8;
  if (!Object.prototype.hasOwnProperty.call(options, 'numbers'))
    options.numbers = false;
  if (!Object.prototype.hasOwnProperty.call(options, 'symbols'))
    options.symbols = false;
  if (!Object.prototype.hasOwnProperty.call(options, 'uppercase'))
    options.uppercase = true;
  if (!Object.prototype.hasOwnProperty.call(options, 'lowercase'))
    options.lowercase = true;
  if (
    !Object.prototype.hasOwnProperty.call(options, 'excludeSimilarCharacters')
  )
    options.excludeSimilarCharacters = false;

  const charPool = getCharPool(options);

  let password = '';
  for (let i = 0; i < (options.length as number); i++) {
    password += charPool[getRandomNumber(charPool.length)];
  }

  return password;
}

export default generate;
