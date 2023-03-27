<template>
  <div class="counter">
    <p>{{ counter }}</p>
    <p>{{ doubleCounter }}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <hr />
    <p>{{ titleRef }}</p>

    <div class="scroll">
      <div class="scroll-x">scrollx:{{ scrollx }},mousex:{{ mousex }}</div>
      <div class="scroll-y">scrolly:{{ scrolly }},mousey:{{ mousey }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  userCounter,
  useTitle,
  usescrollPosion,
  usemousePosion,
} from "./hooks";

export default {
  setup() {
    let titleRef = useTitle("longyou");
    setTimeout(() => {
      titleRef.value = "ethanyu";
    }, 3000);

    return {
      titleRef,
      ...userCounter(),
      ...usescrollPosion(),
      ...usemousePosion(),
    };
  },
};
</script>

<style>
.counter {
  width: 3000px;
  height: 3000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style> 