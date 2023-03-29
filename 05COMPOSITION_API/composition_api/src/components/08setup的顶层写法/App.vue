<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">increment</button>
    <hr>
    <HelloWorld message="你好世界" @increment="getcounter" />
  </div>
</template>

<script setup>
import HelloWorld from "./Hello-world.vue";
import { ref, reactive } from "vue";

let counter = ref(0);
const increment = () => counter.value++;

const getcounter = (payload) => {
    console.log(payload);
}
</script>

<style>
</style>