<template>
  <div>
    <p>about</p>
    <button @click="changecounter">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    changecounter() {
      this.counter += 1;
    },
  },
  created() {
    console.log("about created");
  },
  unmounted() {
    console.log("about unmounted");
  },
  activated() {
    console.log("about activated");
  },
  deactivated() {
    
  }
};
</script>

<style>
</style>