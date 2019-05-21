module.exports = {
    publicPath: './',
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: { // 代理
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''//以/api开头的url替换成''，"/api/users/login" => "users/login"
                }
            },
            '/users/*': {
                target: 'http://localhost:3000'
            },
        },
        before: app => { }
    },
    chainWebpack: config => {
    config
      .module
        .rule('vue')
        .test(/\.mp3$/)
        .use('url-loader')
        .loader('url-loader')
        .tap(options => {
		options.transformAssetUrls = {
  			audio: 'src',
		}
		return options;
        });
};
