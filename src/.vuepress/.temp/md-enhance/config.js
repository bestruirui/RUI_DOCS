import { defineClientConfig } from "@vuepress/client";
import "/home/coder/project/vuepress/rui01/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import Presentation from "/home/coder/project/vuepress/rui01/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  },
});
