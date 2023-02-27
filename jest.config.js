module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
  forceExit: true,
  clearMocks: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};