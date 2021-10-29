let {resolve} = require('path');
module.exports = {
    entry: './index.js',//入口文件
    output: {                                    
        path: resolve(__dirname,'dist'),    //输出文件的路径
        filename: 'bundle.js'                     //指定输出的文件名
    },
    mode: "production",
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/,
            },
        ]
    }
}