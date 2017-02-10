/**
 * Created by bin.yang on 2016/11/16.
 */

var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    //页面入口文件配置
    entry:'./app/index.js',
    
    //入口文件输出配置
    output: {
        filename: './build/bundle.js',
        pathinfo: true,
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 8080 //端口你可以自定义
    },
    resolve: {
        root: './node_modules',
        extensions: ['', '.js', '.json', '.scss'],
    }
};