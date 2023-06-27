const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: 'static/js/[name].js',
    path: path.join(__dirname, '../dist'),
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      // {
      //   test: /.(ts|tsx)$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         '@babel/preset-react',
      //         '@babel/preset-typescript'
      //       ]
      //     }
      //   }
      // },
      {
        test: /.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
                  // "targets": {
                  //  "chrome": 35,
                  //  "ie": 9
                  // },
                   "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
                   "corejs": 3, // 配置使用core-js低版本
                  }
                ],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
    })
  ]
}
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('BASE_ENV', process.env.BASE_ENV)