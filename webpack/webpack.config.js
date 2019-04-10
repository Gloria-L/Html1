const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:'development',  //'production'是压缩模式
    entry:{
        //此处可配置多个入口文件
        index:'./src/index.js'
    },//入口文件
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
                    use:"css-loader"
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
        new ExtractTextPlugin("css/index.css")
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