
<script>
import { h } from "vue";
export default {
  render() {
    return h("div", null, [
      h("h2", null, "hello world"),
      this.$slots.default({name:"longyou"})
        ? this.$slots.default()
        : h("span", null, "app中的内容"),
    ]);
  },
};
</script>

<style>
</style>