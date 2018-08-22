const path = require("path");

module.exports = {
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /(\.css$)/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};