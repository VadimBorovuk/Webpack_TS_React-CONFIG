import webpack, {Configuration} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/types";

import path from "path";

export function buildPlugins(options: BuildOptions): Configuration['plugins']{
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
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

    return plugins
}

