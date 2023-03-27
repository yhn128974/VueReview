import { createApp } from "vue";
import App from "./components/07composition练习/App.vue";

const app = createApp(App);
// 全局混入
// app.mixin({
//   data() {
//     return {};
//   },
//   methods: {},
//   created() {
//     console.log("global mixin is valid");
//   },
// });

app.mount("#app");
