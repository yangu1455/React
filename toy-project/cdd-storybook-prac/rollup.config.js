// ESModule aka ESM
import esbuild from 'rollup-plugin-esbuild';

// CommonJS aka CJS
const esbuild2 = require('rollup-plugin-esbuild')

// rollup.config.js
export default {
	input: 'src/index.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
  plugins: [
    esbuild({
      include: /\.jsx?$/,
      minify: process.env.NODE_ENV === 'production',
      jsx: 'automatic',
    }),
  ],
};