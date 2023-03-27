<template>
  <div>
    <input type="text" v-model="message" />
    {{ message }}
  </div>
</template>

<script>
import { ref } from "vue";
import useDebounvrRef from "./hook/useDebounvrRef";
export default {
  setup() {
    const message = useDebounvrRef("hello world");
    return {
      message,
    };
  },
};
</script>

<style>
</style>