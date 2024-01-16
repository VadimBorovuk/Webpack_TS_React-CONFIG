import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/types";


export function buildDevServer(options: BuildOptions): DevServerConfiguration{
    return  {
        port: options.port ?? 3003,
        open: true,
        static: './build',
        /*work only for development*/
        historyApiFallback: true
    }
}
