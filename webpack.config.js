var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
                }
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             loader: "style-loader" // creates style nodes from JS strings
            //         },
            //         {
            //             loader: "css-loader" // translates CSS into CommonJS
            //         },
            //         {
            //             loader: "sass-loader", // compiles Sass to CSS
            //             options: {
            //                 includePaths: ["static/style/index.scss"]
            //             },
            //         }
            //     ]
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(woff(2)?|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'style.css'}
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};