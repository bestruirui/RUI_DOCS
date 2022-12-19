import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({


  "/": "structure",

 // "/Learn/": "structure",

  "/Life/": "structure",



  "/Learn/": [
    "",
    {
      icon: "discover",
      text: "RM",
      prefix: "RM/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
      text: "Linux",
      prefix: "Linux/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
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
