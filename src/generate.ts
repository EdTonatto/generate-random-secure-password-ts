/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Options } from './options';

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

  return '';
}

export default generate;
