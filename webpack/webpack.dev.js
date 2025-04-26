import path from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const webpackConfig = {
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    mode: 'development',
    target: "web",
    devtool: "inline-source-map",
    devServer: {
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        index: ['./src/client/assets/styles/_styles.scss', './src/client/index.js']
    }, 
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: "/",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                 loader: 'babel-loader'
                }
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
              ],
            },
        ]
    },
    plugins: [
      new MiniCssExtractPlugin()
    ]
};
export default webpackConfig;