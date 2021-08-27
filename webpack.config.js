const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            title: "Webpack Output",
        }),
    ],
    devtool: 'inline-source-map',
    entry : {
        main: path.resolve(__dirname, './src/app.js'),
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodes_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { 
                test: /\.css$/, 
                use: ["style-loader", "css-loader"] 
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ]
    },
}