/** @type {import('jest').Config} */

export default {
  verbose: true,
  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.test.[jt]s"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,js}"],
  coverageProvider: "v8",
  coverageDirectory: "coverage",
};
