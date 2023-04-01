/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import generate from "../src/generate";

describe('generate', () => {
  it('should generate a password with the default options', () => {
    const password = generate({});
    expect(password.length).toBe(8);
    expect(password).toMatch(/[a-z]+/);
  });

  it('should generate a password with the specified length', () => {
    const password = generate({ length: 10 });
    expect(password.length).toBe(10);
  });

  it('should generate a password with numbers', () => {
    const password = generate({ numbers: true, lowercase: false, uppercase: false });
    expect(password).toMatch(/[0-9]+/);
  });

  it('should generate a password with symbols', () => {
    const password = generate({ symbols: true, lowercase: false, uppercase: false });
    expect(password).toMatch(/[\\!@#$%^&*(){}[\]/.,><]/g);
  });

  it('should generate a password with uppercase letters', () => {
    const password = generate({ uppercase: true, length: 30 });
    expect(password).toMatch(/[A-Z]+/);
  });

  it('should generate a password with lowercase letters', () => {
    const password = generate({ lowercase: true, length: 30 });
    expect(password).toMatch(/[a-z]+/);
  });

  it('should exclude similar characters', () => {
    const password = generate({ excludeSimilarCharacters: true });
    expect(password).not.toMatch(/[ilLI|`oO0]/g);
  });

  it('should generate a password with all options enabled', () => {
    const password = generate({
      length: 200,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
      excludeSimilarCharacters: true,
    });
    expect(password.length).toBe(200);
    expect(password).toMatch(/[0-9]+/);
    expect(password).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/);
    expect(password).toMatch(/[A-Z]+/);
    expect(password).toMatch(/[a-z]+/);
    expect(password).not.toMatch(/[ilLI|`oO0]/g);
  });
});
