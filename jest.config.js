// jest.config.js
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
};
