<template>
  <div>
    <input v-model="modelValue" />
    <input v-model="title" />
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
    username: String,
  },
  emits: ["update:modelValue", "update:title", "update:username"],
  computed: {
    modelValue: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    title: {
      set(value) {
        this.$emit("update:title", value);
      },
      get() {
        return this.title;
      },
    },

    username: {
      set(value) {
        this.$emit("update:username", value);
      },
      get() {
        return this.username;
      },
    },
  },
};
</script>

<style scoped>
</style>