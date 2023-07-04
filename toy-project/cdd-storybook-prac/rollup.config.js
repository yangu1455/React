import esbuild from 'rollup-plugin-esbuild';
import PeerExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

// rollup.config.js
export default {
	input: 'src/index.js',
	output: [
    {
      file: 'bundle.js',
      format: 'esm'
    },
    {
      file: 'bundle.js',
      format: 'cjs'
    },
  ],
  plugins: [
    esbuild({
      include: /\.jsx?$/,
      minify: process.env.NODE_ENV === 'production',
      jsx: 'automatic',
    }),
    PeerExternal(),
  ],
};