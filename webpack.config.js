import path, {resolve} from  'path'
const __dirname = path.resolve()
export default  {
    entry: './lib/index.js',//入口文件
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
                    loader: "babel-loader"
                },
                exclude: /node_modules/,
            },
        ]
    }
}