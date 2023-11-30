const run = require('@rollup/plugin-run');
const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  input: 'src/server.js',
  output: {
    sourcemapIgnoreList: (relativeSourcePath, sourcemapPath) => {
      return relativeSourcePath.includes('node_modules');
    },
    sourcemap: true,
    format: 'iife',
    indent: false,
    dir: 'dist',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    dev && run(),
  ],
};
