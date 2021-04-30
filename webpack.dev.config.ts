import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    port: 4000,
    open: true,
  },
};