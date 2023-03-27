<template>
  <div>
    <P>App {{ name }}-{{ counter }}</P>
    <button @click="changecounter">changecounter</button>
    <hr />
    <Home />
  </div>
</template>
  
  <script>
import { provide, ref, readonly } from "vue";
import Home from "./Home";
export default {
  components: {
    Home,
  },
  setup() {
    let name = ref("longyou");
    let counter = ref(100);
    provide("name", readonly(name));
    provide("counter", readonly(counter));
    let changecounter = () => {
      counter.value++;
    };
    return {
      name,
      counter,
      changecounter,
    };
  },
};
</script>
  
  <style>
</style>