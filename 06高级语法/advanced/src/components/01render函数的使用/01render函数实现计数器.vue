

<script >
import { h } from "vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    return h("div", { class: "app" }, [
      h("h2", null, `当前计算${this.counter}`),
      h(
        "button",
        {
          onClick: () => {
            this.counter++;
          },
        },
        "incrementcounter"
      ),
      h(
        "button",
        {
          onClick: () => {
            this.counter--;
          },
        },
        "deccrementcounter"
      ),
    ]);
  },
};
</script>

<style>
</style>