import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { searchPlugin } from '@vuepress/plugin-search'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
//import { lightgalleryPlugin } from "vuepress-plugin-lightgallery";


export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "RUI",
      description: " ",
    },
  },

  theme,

  shouldPrefetch: false,
  

 


  plugins: [
    pwaPlugin({
      showInstall: true,
    }),
    searchPlugin({
      maxSuggestions:10,
      
    }),
    mdEnhancePlugin({
      container: true,
      presentation: true,
      codetabs: true,
      tabs: true,
      figure: true,
      imageLazyload: true,
        // 启用图片标记
        imageMark: true,
        // 启用图片大小
        imageSize: true,
    }),
   // lightgalleryPlugin(),
  ],
});

