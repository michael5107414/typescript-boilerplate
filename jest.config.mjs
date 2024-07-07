/** @type {import('jest').Config} */

export default {
  verbose: true,
  testEnvironment: "node",
  roots: ["<rootDir>/__tests__"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,js}"],
  coverageProvider: "v8",
  coverageDirectory: "coverage",
};
