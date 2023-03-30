<template>
  <div>
    <input type="text" ref="text" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const input = ref(null);
    onMounted(() => {
      input.vlaue.focus();
    });
    return {
      input,
    };
  },
};
</script>

<style>

</style>