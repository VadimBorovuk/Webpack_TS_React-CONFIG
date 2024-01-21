import {BuildOptions} from "../types/types";
import {removeDataTestVariables} from "./removeDataTestVariables";

export function buildBabelLoader({mode}: BuildOptions) {

    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins = []

    if(isProd){
        plugins.push([
            removeDataTestVariables,
            {
                props: ['data-testid']
            }
        ])
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',

            /*or in file babel.config.json*/

            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-react',
                        {
                            runtime: isDev ? 'automatic' : 'classic'
                        }
                    ]
                ],
                plugins: plugins.length ? plugins : undefined
            }
        }
    }
}