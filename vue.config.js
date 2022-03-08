module.exports = {
	// css: {
	// 	loaderOptions: {
	// 		scss: {
	// 			prependData: '@import "@/uni.scss";'
	// 		}
	// 	}
	// },
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'components': '@/components',
			}
		},
		plugins: []
	}
}
