import path from 'path'
import webpack from 'webpack'
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode} from "./config/build/types/types";


interface IEnvArea {
    mode: BuildMode, /*npm run start -- --env mode=production*/
    port: 3001  /*npm run start -- --env port=1111*/
    analyzer: boolean
}

export default (env: IEnvArea) => {

    console.log(env.mode) /*from package.json  7 line code*/

    return buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            src: path.resolve(__dirname, 'src')
        },
        analyzer: env.analyzer
    })
}