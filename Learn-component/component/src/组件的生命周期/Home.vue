<template>
  <div>
    <p>{{ username }}</p>
    <button @click="changeDate">click to change</button>
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    console.log("home beforeCreate");
  },
  data() {
    return {
      username: "longyou",
    };
  },
  methods: {
    changeDate() {
      this.username = "yuethanhaonan";
    },
  },
  created: function () {
    console.log("home create");
  },
  beforeMount: function () {
    console.log("home beforeMount");
  },
  mounted: function () {
    console.log("home mount");
  },
  beforeUpdate: function () {
    console.log("home beforeUpdate");
  },
  updated() {
    console.log("home update");
  },
  beforeUnMount: function () {
    console.log("home beforeUnMount");
  },
  unmount() {
    console.log("home unmount");
  },
};
</script>

<style>
</style>