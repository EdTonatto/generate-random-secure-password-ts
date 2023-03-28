// eslint-disable-next-line import/no-unresolved, import/extensions
import { Options } from './options';

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '\\!@#$%&*(){}[]/.,><';
const similarCharacters = /[ilLI|`oO0]/g;

function getCharPool(options: Options): string {
  let pool = '';

  if (options.lowercase) pool += lowercase;
  if (options.uppercase) pool += uppercase;
  if (options.numbers) pool += numbers;
  if (options.symbols) pool += symbols;

  if (!pool)
    throw new Error(
      'No characters selected. Select at leat one rule to the character pool.',
    );

  if (options.excludeSimilarCharacters)
    pool = pool.replace(similarCharacters, '');

  return pool;
}

export default getCharPool;
