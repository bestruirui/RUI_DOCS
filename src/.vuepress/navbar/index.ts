import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { 
    text: "学习", 
    icon: "book", 
    link: "/Learn/" 
  },
  { 
    text: "生活", 
    icon: "ice-cream", 
    link: "/Life/" 
  },
  // {
  //   text: "生活",
  //   icon: "creative",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "分类1",
  //       icon: "creative",
  //       prefix: "bar/",
  //       children: [
  //         { 
  //           text: "分类1.1",
  //           icon: "more", 
  //           link: "" 
  //         }, 
  //         { 
  //           text: "分类1.2",
  //           icon: "more", 
  //           link: "" 
  //         },
  //       ],
  //     },
  //     {
  //       text: "分类2",
  //       icon: "config",
  //       prefix: "foo/",
  //       children: [
  //         { 
  //           text: "分类2.1",
  //           icon: "more", 
  //           link: "" 
  //         }, 
  //         { 
  //           text: "分类2.2",
  //           icon: "more", 
  //           link: "" 
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
