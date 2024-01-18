import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isProd = options.mode === 'production'

    const cssLoadersWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]'
            }
        }
    }

    const scssLoader = {
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
    // const tsLoader = {
    //     /*typescript can work with format jsx*/
    //     /*if we don't use typescript we must need use babel-loader*/
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    //     options:{
    //         transpileOnly: true
    //     }
    // }

    const tsLoader = {
        /*typescript can work with format jsx*/
        /*if we don't use typescript we must need use babel-loader*/
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: !isProd
                }
            }
        ]
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

    }

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ]
    }

    return [
        // порядок має значення
        scssLoader,
        tsLoader,
        assetLoader,
        svgrLoader
    ]
}
