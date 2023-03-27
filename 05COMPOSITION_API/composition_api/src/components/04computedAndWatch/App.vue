<template>
  <div>
    <h2 ref="title">{{ data.message }}</h2>

    <button @click="changemessage">changemessage</button>
  </div>
</template>

<script>
import { ref, watchEffect, reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      message: "hello world",
    });

    function changemessage() {
      data.message = "longyou";
    }
    // watchEffect(
    //   () => {
    //     console.log(data.message);
    //   },
    //   {
    //     flush: "post",
    //   }
    // );

    return { data, changemessage };
  },
};
</script>

<style>
</style>