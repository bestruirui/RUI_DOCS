import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://docs.bestrui.top",

  author: {
    name: "RUI",
    url: "http://bestrui.top",
  },

  iconAssets: "//at.alicdn.com/t/c/font_3837767_n7a9lm9t5he.css" ,

  repo: "bestruirui/RUI_DOCS",

  docsDir: "/src",

  docsBranch:"DOC",

  repoDisplay: false,

  hideSiteNameOnMobile: false,

  contributors:false,
  //lastUpdated:false,

  metaLocales: {
    editLink: "编辑此页",
  },


  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  sidebarSorter:["readme"],

  toc: true,

  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Language", "Repo", "Outlook", "Search"],
  },


  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "",

      displayFooter: false,
    },
  },

  encrypt: {
    config: {
      // 这会加密整个 guide 目录，并且两个密码都是可用的
      //"/guide/": ["1234", "5678"],
      // 这只会加密 config/page.html
      "/Learn/RM/BUG/": "1234",
    },
  },

  plugins: {
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://waline.bestrui.top",
      meta:['nick', 'mail'],
      requiredMeta:['nick', 'mail'],
      //reaction:true,
    },

    photoSwipe: true,

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      tabs: true,
      imageMark: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vPre: true,
      vuePlayground: true,
    },
    pwa: {
      favicon: "/assets/icon/PWA_LOGO.svg",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      showInstall: true,
      maxSize:6048,
      themeColor: "#ffffff",
      apple: {
        icon: "/assets/icon/152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "RUI",
            short_name: "RUI",
            url: "/",
            icons: [
              {
                src: "/assets/icon/shut_192.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/shut_192.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
