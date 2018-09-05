const path = require("path");

module.exports = {
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@assets': path.resolve(__dirname, "../src/stories/static/")
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
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
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
