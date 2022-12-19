import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { searchPlugin } from '@vuepress/plugin-search'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

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
    }),
  ],
});

