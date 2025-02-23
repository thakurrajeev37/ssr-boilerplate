import path from 'path';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const webpackConfig = {
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    mode: 'development',
    devServer: {
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        index: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true', './public/index.js']
    }, 
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: "/build",
        filename: 'js/bundle.js',
        libraryTarget: 'commonjs2',
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
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: {
              sockIntegration: 'whm',
            },
          }),
    ]
};
export default webpackConfig;