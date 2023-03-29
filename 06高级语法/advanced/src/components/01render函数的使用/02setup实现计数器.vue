

<script >
import { h } from "vue";
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return () => {
      return h("div", { class: "app" }, [
        h("h2", null, `当前计算${counter.value}`),
        h(
          "button",
          {
            onClick: () => {
              counter.value++;
            },
          },
          "incrementcounter"
        ),
        h(
          "button",
          {
            onClick: () => {
              counter.value--;
            },
          },
          "deccrementcounter"
        ),
      ]);
    };
  },

  render() {},
};
</script>

<style>
</style>