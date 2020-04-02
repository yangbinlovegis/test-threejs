/**
 * Created by bin.yang on 2016/11/16.
 */

const ExtractTextPlugin  = require('extract-text-webpack-plugin')

const path = require('path');
const SRC_PATH = path.resolve(__dirname, './app');

module.exports = {
    devtool: 'source-map',

    // 页面入口文件配置
    entry: './app/index.js',

    // 入口文件输出配置
    output: {
        filename: './build/bundle.js',
        pathinfo: true,
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 8080 // 端口你可以自定义
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: SRC_PATH
        },
        {
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: SRC_PATH
        },
        {
            test: /\.js$/,
            loader: ['eslint-loader'],
            enforce: 'pre',
            include: SRC_PATH
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 12288,
                        name: 'pcop_framework/[name].[ext]?[hash]'
                    }
                }
            ]
        },
        {
            test: /\.(eot|svg|ttf|woff|otf)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 12288,
                        name: 'pcop_framework/[name].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.(css|less)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modules: true
                        }
                    }]
            })
        }]
    }
};