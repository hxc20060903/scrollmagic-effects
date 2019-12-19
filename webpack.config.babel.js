import webpack from 'webpack';
import path from 'path';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const OUTPUT_PATH = path.join(__dirname, 'dist');
  return {
    target: 'web',
    devtool: isProduction ? 'cheap-eval-source-map' : 'source-map',
    mode: isProduction ? 'production' : 'development',

    entry: {
      src: path.join(__dirname, 'src/index.tsx'),
    },
    output: {
      chunkFilename: '[name].js',
      filename: '[name].js',
      path: OUTPUT_PATH,
      publicPath: '/',
    },

    resolve: {
      extensions: ['.json', '.ts', '.tsx', '.js'], // js for node_modules
      modules: ['node_modules', 'src'],
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true,
        hash: true,
        filename: 'index.html',
        favicon: 'src/favicon.jpg',
      }),
      new CopyWebpackPlugin([
        { from: 'assets/', to: path.join(OUTPUT_PATH, 'assets') },
      ]),
      false && new BundleAnalyzerPlugin(),
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'cache-loader',
            'babel-loader',
            {
              loader: 'ts-loader',
              options: isProduction
                ? {}
                : {
                  getCustomTransformers: () => ({
                    before: [createStyledComponentsTransformer()],
                  }),
                },
            },
          ],
        },
        {
          test: require.resolve(
            'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
          ),
          use: 'imports-loader?define=>false',
        },
        {
          test: require.resolve(
            'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'
          ),
          use: 'imports-loader?define=>false',
        },
      ],
    },

    optimization: {
      occurrenceOrder: true,
    },
  };
};
