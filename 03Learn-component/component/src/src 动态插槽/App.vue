<template>
  <div>
    <ChildCpn :names="names">
      <template v-slot:longyou="slotProps">
        <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
      </template>
    </ChildCpn>

    <!-- 更换元素 -->
    <ChildCpn :names="names">
      <template v-slot:longyou="slotProps">
        <p>{{ slotProps.item }}-{{ slotProps.index }}</p>
      </template>
    </ChildCpn>

    <!-- 默认插槽 传值 取值   独占默认插槽的缩写-->
    <ChildCpn :names="names" v-slot="slotProps">
      <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
    </ChildCpn>

    <!-- 如果出现多个插槽，请为所有的插槽使用完整的基于template的语法 -->
    <ChildCpn :names="names">
      <template v-slot="slotProps">
        <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
      </template>
      <template v-slot:longyou>
        <h2>I am injeck center</h2>
      </template>
    </ChildCpn>
  </div>
</template>
<script>
import ChildCpn from "./ChildCpn";
export default {
  components: {
    ChildCpn,
  },
  data() {
    return {
      names: ["why", "lobe", "james", "curry"],
    };
  },
};
</script>

<style>
</style>