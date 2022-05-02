module.exports = {
  displayName: 'gas.data',
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
  coverageDirectory: '../../coverage/libs/gas.data',
  collectCoverage: true,
  coverageReporters: ['html', 'text', 'text-summary'],
};
