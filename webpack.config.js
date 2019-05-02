const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		library: 'onigasm',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'release')
	}
};
