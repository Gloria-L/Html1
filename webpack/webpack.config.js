const path = require('path');
module.exports = {
    mode:'development',
    entry:{
        //此处可配置多个入口文件
        index:'./src/index.js'
    },//入口文件
    output:{
        path:path.resolve(__dirname,'dist'),  //打包出去的文件名,且取到当前的绝对路径
        filename:'[name].js'
    }//出口文件
}