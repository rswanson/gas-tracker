module.exports = {
  displayName: 'gas-data.webservice',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
    // eslint-disable-next-line no-undef
    s,
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/gas-data.webservice',
  coverageReporters: ['clover', 'text-summary'],
  collectCoverage: true,
};
