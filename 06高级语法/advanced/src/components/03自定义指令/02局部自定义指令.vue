<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
export default {
  directives: {
    foucs: {
      mounted(el, binding, vnode, preVnode) {
            console.log("focus mounted");
        el.focus();
      },
    },
  },
};
</script>

<style>
</style>