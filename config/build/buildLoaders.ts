import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules']{
    const isProd = options.mode === 'production'

    const cssLoadersWithModules = {
        loader: 'css-loader',
        options:{
            modules: {
                localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]'
            }
        }
    }

    const scssLoader ={
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            /* MiniCssExtractPlugin for create minimyze file css */
            // Translates CSS into CommonJS
            cssLoadersWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
    const tsLoader = {
        /*typescript can work with format jsx*/
        /*if we don't use typescript we must need use babel-loader*/
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return  [
        // порядок має значення
        // {
        //     test: /\.css$/i,
        //     use: ["style-loader", "css-loader"],
        // },
        scssLoader, tsLoader
    ]
}