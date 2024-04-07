/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', '@stylistic/js/indent'],
	rules: {
		eqeqeq: ['warn', 'smart'],
		'@stylistic/js/indent': 'warn',
		'@stylistic/js/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'@stylistic/js/quote-props': ['warn', 'as-needed', { keywords: true }],
		'@stylistic/js/quotes': ['warn', 'single', { avoidEscape: true }],
		'@stylistic/js/comma-dangle': ['warn', 'always-multiline'],
		'@stylistic/js/semi': [
			'error',
			'never',
			{
				omitLastInOneLineBlock: true
			}
		],
		'@stylistic/js/semi-style': ['error', 'last'],
		'@stylistic/js/no-extra-semi': 'error',
		'@stylistic/js/comma-spacing': ['warn', { before: false, after: true }],
		'@stylistic/js/dot-location': ['warn', 'property'],
		'@stylistic/js/eol-last': ['warn', 'always'],
		'@stylistic/js/spaced-comment': ['error', 'always', { exceptions: ['*'] }],
		'@stylistic/js/space-infix-ops': ['error', { int32Hint: false }],
		'@stylistic/js/no-trailing-spaces': [
			'warn',
			{
				skipBlankLines: true,
				ignoreComments: true
			}
		],
		'@stylistic/js/no-mixed-operators': ['warn', 'always']
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
