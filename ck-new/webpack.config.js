const
    path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPugPlugin = require('html-webpack-pug-plugin'),
    webpack = require('webpack');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: false
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader",
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                }
            },

        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'home-nk.html',
            template: './src/pages/home/home-nk.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'home-pp.html',
            template: './src/pages/home/home-pp.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'order-pp.html',
            template: './src/pages/order/order-pp.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'order-nk.html',
            template: './src/pages/order/order-nk.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'goods-nk.html',
            template: './src/pages/goods/goods.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'goods-pp.html',
            template: './src/pages/goods/goods-pp.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'setting_company_nk.html',
            template: './src/pages/setting_company/setting_company_nk.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'setting_company_pp.html',
            template: './src/pages/setting_company/setting_company_pp.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'advertising_pp.html',
            template: './src/pages/advertising/advertising_pp.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'advertising_nk.html',
            template: './src/pages/advertising/advertising_nk.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'filling_nk.html',
            template: './src/pages/filling/filling_nk.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'filling_pp.html',
            template: './src/pages/filling/filling_pp.pug',
            inject: 'body'
        }),

        new HtmlWebpackPugPlugin(),
        new MiniCssExtractPlugin({
            filename: "https://www.pulscen.ru/system/ckeditor_assets/attachments/333569/style.css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })

    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', 'css', '.jsx']
    },
    devServer: {
        static: 'dist',
        hot: true,
        historyApiFallback: true,
    }
}