import.meta.env = {"BASE_URL":"/","MODE":"development","DEV":true,"PROD":false,"SSR":false};import { v4 } from "/vendor/.vite-deps-uuid.js__v--8aa66082.js";
import __vite__cjsImport1_webextensionPolyfill from "/vendor/.vite-deps-webextension-polyfill.js__v--8aa66082.js"; const Browser = __vite__cjsImport1_webextensionPolyfill.__esModule ? __vite__cjsImport1_webextensionPolyfill.default : __vite__cjsImport1_webextensionPolyfill;
export function uuid() {
  return v4();
}
export function getVersion() {
  return Browser.runtime.getManifest().version;
}
export function isProduction() {
  return !import.meta.env.DEV;
}
