import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
// import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
// import json from 'rollup-plugin-json'

export default {
    input: './lib/index.js',
    output:[
        {
            file: './dist/markdowncompiler.es.js',
            format: 'es'
        },
        {
            file: './dist/markdowncompiler.umd.js',
            format: 'umd',
            name:'markdowncompiler.min'
        }
    ],
    plugins: [
    //     resolve({
    //         browser: true
    //     }),
    //     json(),
    //     commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ],
}