<template>
  <div>hello world</div>
  <h2>{{ message }}</h2>
  <button @click="changemessage">changemessage</button>
</template>

<script setup>
const props = defineProps({
  message: String,
});
const emits = defineEmits(["increment", "decrement"]);

const changemessage = () => {
  emits("increment", 10000);
};
</script>

<style scoped>
</style>