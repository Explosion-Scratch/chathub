import __vite__cjsImport0_webextensionPolyfill from "/vendor/.vite-deps-webextension-polyfill.js__v--8aa66082.js"; const Browser = __vite__cjsImport0_webextensionPolyfill.__esModule ? __vite__cjsImport0_webextensionPolyfill.default : __vite__cjsImport0_webextensionPolyfill;
import { setupProxyExecutor } from "/src/services/proxy-fetch.ts.js";
function injectTip() {
  const div = document.createElement("div");
  div.innerText = "Please keep this tab open, now you can go back to ChatHub";
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.right = "0";
  div.style.zIndex = "50";
  div.style.padding = "10px";
  div.style.margin = "10px";
  div.style.border = "1px solid";
  document.body.appendChild(div);
}
async function main() {
  Browser.runtime.onMessage.addListener(async (message) => {
    if (message === "url") {
      return location.href;
    }
  });
  if (window.__NEXT_DATA__) {
    await Browser.runtime.sendMessage({ event: "PROXY_TAB_READY" });
    injectTip();
  }
}
setupProxyExecutor();
main().catch(console.error);
