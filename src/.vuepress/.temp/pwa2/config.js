import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/home/coder/project/vuepress/rui01/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import PWAInstall from "/home/coder/project/vuepress/rui01/node_modules/vuepress-plugin-pwa2/lib/client/components/PWAInstall.js";
import SWUpdatePopup from "/home/coder/project/vuepress/rui01/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    PWAInstall,
    SWUpdatePopup,
    
  ],
});
