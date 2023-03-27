<template>
  <div>
    <p>{{ info }}</p>
    <button @click="changeAge">click here to change</button>
  </div>
</template>

<script>
import { reactive, toRefs, ref, shallowRef } from "vue";

export default {
  setup() {
    const info = shallowRef({ name: "longyou" });
    function changeAge() {
      info.value.name = "ethanayu";
        }
    
    return {
      // info,

      info,
      changeAge,
    };
  },
};
</script>

<style>
</style>