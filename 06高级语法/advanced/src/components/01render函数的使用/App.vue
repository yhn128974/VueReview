
<script >
import { h } from "vue";
import HelloWorld from "./Hello_World.vue";

export default {
  render() {
    return h(HelloWorld, null, {
      default: (props) =>
        h("span", null, `app传入Helloworld中的内容:${props.name}`),
    });
  },
};
</script>

<style>
</style> 