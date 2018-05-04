path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		filename: '[name].js',
	},
	plugins: [
	new SVGSpritemapPlugin({
		src: 'src/svg/*.svg',
	})
	]
}