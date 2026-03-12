import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Element-UI",
  description: "A VitePress Site",
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Test', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //     { text: 'Test here', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'MY Element-UI 组件列表',
        items: [
          {text: 'Alert 提示', link: '/components/alert' },
          {text: 'Button 按钮', link: '/components/button' },
          {text: 'Collapse 折叠面板', link: '/components/collapse' },
          {text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          {text: 'Form 表单', link: '/components/form' },
          {text: 'Icon 图标', link: '/components/icon' },
          {text: 'Input 文字输入', link: '/components/input' },
          {text: 'Message 消息提示', link: '/components/message' },
          {text: 'Select 选择器', link: '/components/select' },
          {text: 'Switch 开关', link: '/components/switch' },
          {text: 'Tooltip 文字提示', link: '/components/tooltip' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
