<template>
  <div>
    <input type="text" v-focus />
    <button v-if="counter < 2" v-longyou.aaa.bbbb="ethanyu" @click="increment">
      当前计数{{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  directives: {
    longyou: {
      created(el, binding, vnode, preVnode) {
        console.log(el, binding, vnode, preVnode);
        console.log("longyou created");
      },
      beforeMount() {
        console.log("longyou beforemount");
      },
      mounted() {
        console.log("longyou mounted");
      },
      beforeUpdate() {
        console.log("longyou beforeupdate");
      },
      updated() {
        console.log("longyou updated");
      },
      beforeUnmounted() {
        console.log("longyou beforeUnMount");
      },
      unmounted() {
        console.log("longyou unmounted");
      },
    },
    foucs: {
      mounted(el, binding, vnode, preVnode) {
        console.log("focus mounted");
        el.focus();
      },
    },
  },
  setup() {
    let counter = ref(0);
    const increment = () => {
      counter.value++;
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style>
</style>