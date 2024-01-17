import webpack, {Configuration, DefinePlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/types";

import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions): Configuration['plugins']{
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __DEV__: JSON.stringify(options.mode),
        })
    ]

    if(isDev){
        plugins.push(new webpack.ProgressPlugin())
    }

    if(isProd){
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css",
            chunkFilename: "css/[name].[contenthash:5].css",
        }))

    }

    if(options.analyzer){
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}

