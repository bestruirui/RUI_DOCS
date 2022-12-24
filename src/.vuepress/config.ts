import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'


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
    searchPlugin({
      maxSuggestions:10,
      
    }),

    
    
  ],
});

