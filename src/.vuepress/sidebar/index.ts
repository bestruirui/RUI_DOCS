import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({


  "/": 
  [
    {
      text: "RUI",
      link: "/README.md",
      icon: "house",
    },
    {
      text: "学习",
      icon: "book",
      collapsible: true,
      prefix: "Learn/",
      children: [
          {
            icon: "robot",
            text: "RM",
            prefix: "RM/",
            collapsible: true,
            children: "structure",
          },
          {
            icon: "server",
            text: "Linux",
            prefix: "Linux/",
            collapsible: true,
            children: "structure",
          },
          {
            icon: "docker",
            text: "Docker",
            prefix: "Docker/",
            collapsible: true,
            children: "structure",
          },
          {
            icon: "browser",
            text: "WEB",
            prefix: "WEB/",
            collapsible: true,
            children: "structure",
          },
          {
            icon: "ellipsis",
            text: "Other",
            prefix: "Other/",
            collapsible: true,
            children: "structure",
          },
        ],
    },
    {
      text: "生活",
      icon: "ice-cream",
      prefix: "Life/",
      collapsible: true,
      children: "structure",
    }
  ],

  "/Life/": "structure",
  "/img/":"structure",

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
      icon: "server",
      text: "Linux",
      prefix: "Linux/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "docker",
      text: "Docker",
      prefix: "Docker/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "browser",
      text: "WEB",
      prefix: "WEB/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "ellipsis",
      text: "Other",
      prefix: "Other/",
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
