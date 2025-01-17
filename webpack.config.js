// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const path = require('path')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const PATHS = {
  app: path.join(__dirname, './src/index.js'),
}

module.exports = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/,
        sideEffects: false,
      },
      {
        test: /\.css$/, // Add this rule
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },      
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    fallback: { buffer: false },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080, // Ensure this matches the port being used (LocalDEV = 8081, PROD = 8080)
  },  
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE_MODE || 'disabled',
    }),
  ],
}
