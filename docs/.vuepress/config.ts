import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Naruse',
  description: '支持react体系开发，多端统一，热更新的框架',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    sidebar: [
      './',
      './快速开始.md',
      './入门.md',
      './组件库.md',
      './API.md',
      './JS引擎.md',
      './如何使用.md',
      './更新记录.md',
    ],
    sidebarDepth: 2,
  },
  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具
  bundler: '@vuepress/bundler-vite',
  // Vite 打包工具的配置项
  bundlerConfig: {
    viteOptions: {
      mode: 'production',
    }
  },
  base: '/naruse-doc/docs/dist/',
  dest: './docs/dist/',
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
})