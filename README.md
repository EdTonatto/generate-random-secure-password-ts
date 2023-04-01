# Generate Random Secure Password

Generate Random Secure Password is a library that generates secure passwords according to user's given options. 

## Installation

To install this library, you can use npm or yarn:

```bash
npm install generate-random-secure-password
```

or

```bash
yarn add generate-random-secure-password
```

## Usage

After installing the library, you can import it into your project as follows:

```javascript
const passwordGenerator = require('generate-random-secure-password');
```

Once imported, you can use the `passwordGenerator` object to generate secure passwords with the following function:

```javascript
passwordGenerator.generate(options);
```

The `options` parameter is an object that contains the following properties:

- `length`: the length of the password (default is `12`)
- `numbers`: whether to include numbers in the password (default is `true`)
- `symbols`: whether to include symbols in the password (default is `true`)
- `lowercase`: whether to include lowercase letters in the password (default is `true`)
- `uppercase`: whether to include uppercase letters in the password (default is `true`)

Here is an example usage:

```javascript
const passwordGenerator = require('generate-random-secure-password');

const options = {
  length: 16,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true
};

const password = passwordGenerator.generate(options);
console.log(password); // Example output: "iL9%Zp6#G4@oE2v"
```

## Development

If you want to develop or contribute to this project, you can clone the repository and run the following commands:

```bash
npm install # or yarn install
npm run build # or yarn build
npm test # or yarn test
```

This will install the necessary dependencies, build the project, and run the tests. 

## License

This library is licensed under the MIT license. See [LICENSE](LICENSE) for more information.