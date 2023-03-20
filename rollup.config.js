import pkg from './package.json' assert { type: 'json' }
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'es'
  },
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    terser()
  ]
}
