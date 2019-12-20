import webpack from 'webpack';
import babel from '../loaders/babel-loader';
import ts from '../loaders/ts-loader';

const rule: webpack.RuleSetRule = {
  // exclude: /node_modules/,
  test: /\.tsx?$/,
  use: [
    babel,
    ts
  ]
};

export default rule;
