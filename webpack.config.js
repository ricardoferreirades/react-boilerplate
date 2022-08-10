const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const createStyledcomponentsTransformer =
  require("typescript-plugin-styled-components").default;
const styledComponentsTransformer = createStyledcomponentsTransformer();
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        loader: require.resolve("ts-loader"),
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        exclude: /node_modules/,
        use: ["file-loader"],
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  performance: {
    hints: false,
  },
  devServer: {
    historyApiFallback: true,
  },
};
