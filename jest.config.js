module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js',
  },
};
