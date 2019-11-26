module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: [
		'text',
		'html',
		'lcov'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/app/**/*.{service,component,pipe,directive,}.{ts,js}'
	],
	testMatch: [
    "**/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  verbose: true
};
