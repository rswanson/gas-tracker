module.exports = {
  displayName: 'gas-data.webservice',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: {
    '^uuid$': require.resolve('uuid'),
  },
  coverageDirectory: '../../coverage/apps/gas-data.webservice',
  coverageReporters: ['clover', 'text-summary'],
  collectCoverage: true,
};
