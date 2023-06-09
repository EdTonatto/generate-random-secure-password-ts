<p align="center">
  <img src="./logo.png" width="140px" />
</p>

<div align="center">
  <a href="https://badge.fury.io/js/generate-random-secure-password"><img src="https://badge.fury.io/js/generate-random-secure-password.svg"/></a>
  <a href="https://codecov.io/gh/EdTonatto/generate-random-secure-password-ts"><img src="https://codecov.io/gh/EdTonatto/generate-random-secure-password-ts/branch/main/graph/badge.svg?token=LXI45Q9YTU"/></a>
  <a href="https://app.codacy.com/gh/EdTonatto/generate-random-secure-password-ts/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade"><img src="https://app.codacy.com/project/badge/Grade/665c0d8b733141e5bb11f6df4fc5ff7e"/></a>
  <a href="https://github.com/EdTonatto/generate-random-secure-password-ts/actions/workflows/ci.js.yml"><img src="https://github.com/EdTonatto/generate-random-secure-password-ts/actions/workflows/ci.js.yml/badge.svg"/></a>
  <a href="https://github.com/EdTonatto/generate-random-secure-password-ts/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EdTonatto/generate-random-secure-password-ts.svg"/></a>
</div>

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

- `length`: the length of the password (default is `8`)
- `numbers`: whether to include numbers in the password (default is `false`)
- `symbols`: whether to include symbols in the password (default is `false`)
- `lowercase`: whether to include lowercase letters in the password (default is `true`)
- `uppercase`: whether to include uppercase letters in the password (default is `true`)
- `excludeSimilarCharacters`: wheter to exclude similar characters in the password (default is `false`)

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
console.log(password); // Example output: "iL9%Zp6#G4@oE2vJ"
```

## Development

If you want to develop or contribute to this project, you can clone the repository and run the following commands:

```bash
npm install # or yarn install
npm run build # or yarn build
npm run test # or yarn test
```

This will install the necessary dependencies, build the project, and run the tests. 

## License

This library is licensed under the MIT license. See [LICENSE](LICENSE) for more information.
