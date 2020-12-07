module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
				path: '.env',
				blacklist: null,
				whitelist: null,
				safe: false,
				allowUndefined: true,
			},
		],
		'transform-remove-console',
		'react-native-reanimated/plugin',
	],
	env: {
		production: {
			plugins: ['react-native-paper/babel'],
		},
	},
};
