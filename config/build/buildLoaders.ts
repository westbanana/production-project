import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import * as module from "module";

export function buildLoaders({isDev}:BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) =>  Boolean(resPath.includes('.module.')),
              localIdentName: isDev
                ? '[pathname][name]__[local]--[hash:base64:&]'
                : '[hash:base64:8]'
            }
          }
        },
        "sass-loader",
      ],
    }

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/
    };
    return ([
      typescriptLoaders,
      cssLoader
    ])
}