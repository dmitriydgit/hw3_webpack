//npm i --save-dev postcss-loader autoprefixer css-mqpacker  cssnano
module.exports = {
	plugins: [
		require('autoprefixer'),
		require('css-mqpacker'),
		require('cssnano')({
			preset: [
				'default', {
					discardComments: {
						removeAll: true
					}
				}
			]
		})
	]
}