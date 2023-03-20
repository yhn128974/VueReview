<template>
  <div>
    <div>navbar</div>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I am a  NavBarMessage",
    };
  },
  methods: {
    sayhello() {
      console.log("hello");
    },
    getParentAndRoot() {
      console.log(this.$parent);
      console.log(this.$root);
    },
  },
};
</script>

<style>
</style>