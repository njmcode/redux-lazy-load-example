import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

const config = {
  entry: [
    PATHS.app,
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ]
  },
  resolve: {
    root: path.resolve('./app')
  },
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
    chunkFilename: "chunk_[id].js",
    publicPath: "http://localhost:8080/"
  }
}

export default config