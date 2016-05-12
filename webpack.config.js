var webpack = require('webpack');
var plugins = [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 10000
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        },
         mangle: {
            except: ['$super', '$', 'exports', 'require']
        }
    })
];

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './index' // Your appʼs entry point
    ],
    output: {
        filename: 'index.output.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader?module'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: require.resolve("jquery"),
            loader: "expose?jquery"
        }]
    },
    plugins: plugins
};