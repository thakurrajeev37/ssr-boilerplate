import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
export default {
    target: 'web',
    devtool: 'inline-source-map',
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                 loader: 'babel-loader',
                    options: {
                       presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { 'runtime': 'automatic' }]
                        ],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
    ]
};