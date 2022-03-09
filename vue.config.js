const path = require('path')

module.exports = {
	// css: {
	// 	loaderOptions: {
	// 		scss: {
	// 			prependData: '@import "@/uni.scss";'
	// 		}
	// 	}
	// },
	devServer: {
		port: 8080
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'components': '@/components',
			}
		},
		plugins: []
	}
}
