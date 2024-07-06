# TypeScript Boilerplate

[![TypeScript version][ts-badge]][typescript-5-5]
[![Node.js version][nodejs-badge]][nodejs]

## Getting Started

This project provides a boilerplate for setting up a TypeScript development environment.

### Steps to Use the Boilerplate

1. Clone the repository

```sh
git clone https://github.com/michael5107414/typescript-boilerplate
cd typescript-boilerplate
```

2. Install dependencies

```sh
yarn install
```

3. Write your code in the `src` folder

4. Build the project

```sh
yarn build
```

5. Run your built file

```sh
node dist/${fileName}
```

### Scripts

- `build` - Transpile TypeScript files to CommonJS files and place them in the `dist` folder
- `build:release` - Same as `build`, but also remove redundent content to prepare for project publishing
- `clean` - Remove transpiled files from the `dist` folder
- `lint` - Lint files in the `src` folder using ESLint, Typescript compiler, and Prettier
- `fix` - Automatically fix linting issues in the `src` folder
- `test` - Run test

## Additional Details

Since this boilerplate supports the resource management feature introduced in TypeScript 5.2, the Node.js version should be 18.18 or higher, or 20.4 or higher.

[ts-badge]: https://img.shields.io/badge/TypeScript-5.5-blue.svg
[typescript-5-5]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2018.18%20<19.0.0%20||%20>=20.4.0-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v20.x/docs/api/
