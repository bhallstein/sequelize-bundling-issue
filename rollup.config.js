import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

const RollupConfig = {
  input: 'app.js',
  output: {
    file: 'dist/app.js',
    format: 'es',
  },
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs(),
    json()
  ],
}

export default RollupConfig