import esbuild from 'rollup-plugin-esbuild';
// import PeerExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' assert { type : 'json' };

// rollup.config.js
export default {
	input: 'src/index.js',
	output: [
    {
      file: pkg.exports['.'].import,
      format: 'esm'
    },
    {
      file: pkg.exports['.'].require,
      format: 'cjs'
    },
  ],
  plugins: [
    esbuild({
      include: /\.jsx?$/,
      minify: process.env.NODE_ENV === 'production',
      jsx: 'automatic',
    }),
    // PeerExternal(),
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
  ]
};