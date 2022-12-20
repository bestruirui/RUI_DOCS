import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({


  "/": "structure",

  "/Life/": "structure",

  "/Learn/": [
    "",
    {
      icon: "robot",
      text: "RM",
      prefix: "RM/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "cumputer",
      text: "Linux",
      prefix: "Linux/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "box-archive",
      text: "Docker",
      prefix: "Docker/",
      collapsible: true,
      children: "structure",
    },
  ],
  
  // "/Life/": [
  //   "",
  //   {
  //     icon: "discover",
  //     text: "RM",
  //     prefix: "RM/",
  //     collapsible: true,
  //     children: "structure",
  //   },
    // {
    //   icon: "discover",
    //   text: "Linux",
    //   prefix: "Learn/Linux/",
    //   collapsible: true,
    //   children: "structure",
    // },
    // {
    //   icon: "discover",
    //   text: "Docker",
    //   prefix: "Learn/Docker/",
    //   collapsible: true,
    //   children: "structure",
    // },
    // "slides",
 // ],
});
