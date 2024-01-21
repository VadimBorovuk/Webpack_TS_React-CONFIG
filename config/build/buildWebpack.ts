import webpack from 'webpack'

import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildResolves} from "./buildResolves";

import {BuildOptions} from "./types/types";


export function buildWebpack(options: BuildOptions):webpack.Configuration {

    const {mode, paths} = options
    const isDev = mode === 'development'


    return { /*for typescript*/
        mode: mode ?? 'development',
        entry: {
            // path.resolve(__dirname, 'src', 'index.tsx')
            'main': paths.entry,
            // 'test': path.resolve(__dirname, 'src', 'testFile.js')
        },
        output: {
            path: paths.output,
            // path.resolve(__dirname, 'build')
            filename: '[name].[contenthash].js' ,
            // filename: '[name].js',
            clean: true /*clean all files in folder(main) but not current(main.js)*/
        },

        devtool: isDev ? 'inline-source-map' : 'source-map',

        /*for watching change in realtime*/
        devServer: isDev ? buildDevServer(options) : undefined,

        module: {
            /*include for loaders */
            rules: buildLoaders(options),
        },
        /*import any format files */
        resolve: buildResolves(options),
        plugins: buildPlugins(options)
    };
}
