import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    // 此预设尝试提供流行的实用程序优先框架的通用超集，包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等
    presetUno(),
    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    // https://unocss.dev/presets/rem-to-px
    presetRemToPx(),
    // 图标预设: https://unocss.dev/presets/icons
    presetIcons({
      scale: 1.2,
      warn: true,
      // cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
  ],
  transformers: [transformerDirectives()],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['flex-center', 'flex justify-center items-center'],
    ['flex-x-center', 'flex justify-center'], // flex布局：主轴居中
    ['flex-y-center', 'flex items-center'], // flex布局：交叉轴居中
    ['flex-col', 'flex flex-col'],
    ['flex-col-center', 'flex flex-col justify-center items-center'],
    ['vertical-center', 'flex flex-col justify-center'],
    ['text-ellipsis', 'truncate'],
    [
      'icon-btn',
      'text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none',
    ],
    ['text-overflow', 'overflow-hidden whitespace-nowrap text-ellipsis'],
    ['text-break', 'whitespace-normal break-all break-words'],
  ],
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    [
      'card-shadow',
      {
        'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
      },
    ],

    ['text-sm-1', { 'font-size': '13px' }],
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      dark_bg: 'var(--dark-bg)',
    },
  },
  // 由于 UnoCSS 在构建时工作，这意味着只会生成静态呈现的 icon 并将其发送到你的组件中
  // 通过模板字符串 :class="menu.meta?.icon" 来动态生成 CSS 类名。
  // 这个类名是在运行时计算的，UnoCSS 在构建时无法知道 menu.meta?.icon 的具体值，
  // 因此无法生成对应的 CSS。为了解决这个问题，你可以使用 UnoCSS 的 safelist 选项来指定一些始终需要生成的 CSS 类。
  // https://unocss.dev/guide/advanced#safelist
  safelist: [
    'i-simple-icons:atlassian',
    'i-simple-icons:soundcharts',
    'i-simple-icons:docsify',
    'i-material-symbols:award-star',
  ],
})
