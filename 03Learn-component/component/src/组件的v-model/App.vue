<template>
  <div>
    <!-- <input type="text" v-model="message" />
    <input type="text" :value="message" @input="event.target.value" />

    <Myinput :modelValue="message" @update:model-value="message = $event" /> -->
    <!-- <Myinput v-model="message" /> -->

    <!-- 绑定两个v-model -->
    <Myinput
      v-model="message"
      v-model:title="title"
      v-model:username="username"
    />
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2>{{ username }}</h2>
  </div>
</template>

<script>
import Myinput from "./Myinput2.vue";
export default {
  components: {
    Myinput,
  },
  data() {
    return {
      message: "hello word",
      title: "hahaha",
      username: "longyou",
    };
  },
};
</script>

<style>
</style>