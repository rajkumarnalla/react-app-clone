const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  "entry": "./src/main.js",
  "output": {
    "path": path.join(__dirname, "dist"),
    "filename": "bundle.js",
    "publicPath": "/"
  },
  "module": {
    "rules": [
      {
         "test": /\.js$/,
         "exclude": /node_modules/,
         "use": {
           "loader": "babel-loader"
         }
      },
      {
        "test": /\.scss$/,
        "use": [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  "devtool": "source-map",
  "devServer": {
    "publicPath": "/dist",
    "inline": true,
    "port": 9000,
    "historyApiFallback": true
  }
}
