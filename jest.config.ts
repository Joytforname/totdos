const config = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest'],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

  // coverageProvider: 'v8',
  // preset: 'ts-jest',
  // testMatch: ['**/*.test.ts'],
  // verbose: true,
  // roots: ['<rootDir>/src'],
};

export default config;
