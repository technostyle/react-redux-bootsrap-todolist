module.exports = {
  context: __dirname,
  entry: "./app/app.jsx",
  output: {
    path: __dirname + "/dist/",
    filename: "build.js"
  },
  devtool: "#sourcemap",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: ["app", "node_modules"],
    extensions: [".js", ".jsx"]
  }
};
