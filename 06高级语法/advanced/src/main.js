import { createApp } from "vue";
import App from "./components/04——teleport内置组件/App.vue";
import pluginObject from "./components/05plugins/plugins_object";

const app = createApp(App);

app.use(pluginObject);

app.directive("focus", {
  mounted(el, binding, vnode, preVnode) {
    console.log("focus mounted");
    el.focus();
  },
});

app.mount("#app");
