const path = require("path");

module.exports = {
  entry: "./src/scss/main.scss",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Turns CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      bootstrap: path.resolve(
        __dirname,
        "node_modules/bootstrap/scss/bootstrap"
      ),
      normalize: path.resolve(
        __dirname,
        "node_modules/normalize.css/normalize"
      ),
    },
  },
  mode: "development",
};
