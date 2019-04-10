const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry = require('./entry');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:'development',  //'production'是压缩模式
    entry:entry,//入口文件模块化放在entry.js里面
    output:{
        path:path.resolve(__dirname,'dist'),  //打包出去的文件名,且取到当前的绝对路径
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },//出口文件
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },'postcss-loader']
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[{  //[]代表一个数组，可以放很多loader
                    loader:'url-loader',
                    options:{
                        limit:500,//把小于500B的东西压缩成Base64，大于就打包到放到imgs里面
                        outputPath:'imgs/'
                    }
                }]
            },
            {
                test:/\.(htm|html)$/,
                use:'html-withimg-loader'
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    use:["css-loader","sass-loader"],
                    fallback:"style-loader"
                })
            },
            {
                //ES6转ES5
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }],
                exclude:/node_modules/  //忽略node_modules文件夹，不用转化
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            // filename:'xx.html',
            minify:{
                removeAttributeQuotes:true
            },
            template:'./src/index.html',
            hash:true
        }),
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),//需要写绝对路径
        }),
        new webpack.BannerPlugin('Gloria Code'), //打包的注释，基本没什么太大作用
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{  //拷贝
            from:__dirname + '/src/public',
            to:'public'
        }])
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务端的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8081,
        open:true
        
    }
}