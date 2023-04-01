/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import getCharPool from '../src/characterspool';

describe('getCharPool', () => {
  it('should return error when no options are selected', () => {
    expect(() => {
      getCharPool({
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: false,
        excludeSimilarCharacters: false,
      });
    }).toThrowError(
      'No characters selected. Select at least one rule to the character pool.',
    );
  });

  it('should include lowercase characters when lowercase option is true', () => {
    const pool = getCharPool({ lowercase: true });
    expect(pool).toContain('a');
    expect(pool).toContain('z');
  });

  it('should include uppercase characters when uppercase option is true', () => {
    const pool = getCharPool({ uppercase: true });
    expect(pool).toContain('A');
    expect(pool).toContain('Z');
  });

  it('should include numbers when numbers option is true', () => {
    const pool = getCharPool({ numbers: true });
    expect(pool).toContain('0');
    expect(pool).toContain('9');
  });

  it('should include symbols when symbols option is true', () => {
    const pool = getCharPool({ symbols: true });
    expect(pool).toContain('!');
    expect(pool).toContain('>');
  });

  it('should exclude similar characters when excludeSimilarCharacters option is true', () => {
    const pool = getCharPool({
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
      excludeSimilarCharacters: true,
    });
    expect(pool).not.toContain('i');
    expect(pool).not.toContain('I');
    expect(pool).not.toContain('|');
    expect(pool).not.toContain('`');
    expect(pool).not.toContain('o');
    expect(pool).not.toContain('O');
    expect(pool).not.toContain('0');
  });
});
