<template>
  <div>
    <p>category</p>
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
};
</script>
  
  <style>
</style>