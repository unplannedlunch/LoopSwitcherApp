module.exports = {
	root: true,
	extends: ['@react-native-community', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 'warn',
		'react-native/no-inline-styles': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
	},
};
