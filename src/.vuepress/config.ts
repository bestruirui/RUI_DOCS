import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "RUI",
      description: " ",
      head: [
        ['script', { type: "text/javascript", src: '/baidu.js', async: "async" }],
        ['script', { type: "text/javascript", src: '/_vercel/insights/script.js', async: "async" }],
        ['meta', { name: "msvalidate.01", content: "76861DC58C528BF36815B521CAC12C86" }],
        ['meta', { itemprop: "image", content: "https://docs.bestrui.top/assets/icon/512.png" }]
      ]

    },
  },

  theme,

  shouldPrefetch: false,



  plugins: [
    searchProPlugin({
      indexContent: true,
    }),

    copyCodePlugin({
      showInMobile: true,
      selector: '.theme-hope-content div[class*="language-"] pre'
    }),
    seoPlugin({
      hostname: 'https://docs.bestrui.top',
      fallBackImage: 'https://docs.bestrui.top/favicon.ico',
      ogp(ogp, page, app) {
        ogp['og:image'] = 'https://docs.bestrui.top/assets/icon/cool.svg';
        return ogp;
      },
    }),
  ],
});

