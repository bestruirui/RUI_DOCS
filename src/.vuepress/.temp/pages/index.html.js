export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"RUI\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"RUI\",\"heroImage\":\"/logo.svg\",\"heroText\":\"小瑞的知识库\",\"tagline\":null,\"actions\":[{\"text\":\"开始   💡\",\"link\":\"begin\",\"type\":\"primary\"},{\"text\":\"文档\",\"link\":\"/guide/\"}],\"copyright\":false,\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"RUI\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"RUI\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"headers\":[],\"readingTime\":{\"minutes\":0.1,\"words\":31},\"filePathRelative\":\"README.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
