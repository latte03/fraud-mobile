/// <reference types="vitest" />

import process from 'node:process'

import dayjs from 'dayjs'
import { type ConfigEnv, loadEnv, type UserConfigExport } from 'vite'

import { parseEnv } from './build/parse-env'
import { definePlugins, src } from './build/plugins'
import pkg from './package.json'

const { dependencies, devDependencies, name, version } = pkg

const __APP_INFO__ = {
  // APP 后台管理信息
  pkg: { dependencies, devDependencies, name, version },
  // 最后编译时间
  lastBuildTime: dayjs().format('yyyy-MM-dd HH:mm:ss'),
}

/**
 * @link https://vitejs.dev/config/
 */
export default (configEnv: ConfigEnv): UserConfigExport => {
  const viteEnv = parseEnv(loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv)
  console.log('%c Line:14 🍷 viteEnv', 'color:#3f7cff', viteEnv)

  const { VITE_PUBLIC_PATH, VITE_API_URL, VITE_HOST_URL } = viteEnv

  return {
    /** 打包时根据实际情况修改 base */
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: { '@': src },
    },
    plugins: definePlugins(viteEnv),
    define: {
      __AG__VERSION__: JSON.stringify(version),

      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    server: {
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      host: true,
      /** 跨域设置允许 */
      cors: true,
      proxy: {
        '/dev-env': {
          target: VITE_HOST_URL + VITE_API_URL,
          changeOrigin: true,
          secure: true,
          rewrite: path => {
            return path.replace(/^\/dev-env/, '')
          },
        },
      },
    },

    esbuild: {
      /** 在打包代码时移除 console.log、debugger 和 注释 */
      drop: viteEnv.VITE_DROP_CONSOLE ? ['console', 'debugger'] : [],
      legalComments: viteEnv.VITE_LEGAL_COMMENTS ? 'none' : 'inline',
    },
    build: {
      outDir: `dist-${process.env.npm_package_version}`,
      /** 消除打包大小超过 500kb 警告 */
      chunkSizeWarningLimit: 2000,
      minify: 'esbuild',

      /** 打包后静态资源目录 */
      assetsDir: 'static',
      sourcemap: true,
    },
    /**
     *  Vitest 单元测试配置
     * @link https://cn.vitest.dev/config
     */
    test: {
      include: ['tests/**/*.test.ts', '*/**/__tests__/**/*.ts'],
      environment: 'jsdom',
    },
  }
}
