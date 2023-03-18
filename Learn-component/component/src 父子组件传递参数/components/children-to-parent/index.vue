<template>
  <div>
    <hr />
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model="count" />
    <button @click="changeNumber">+n</button>
  </div>
</template>

<script>
export default {
  // 数组写法
  //   emits: ["increment", "decrement", "changeNumber"],
  // 对象写法
  emits: {
    increment: null,
    decrement: null,
    changeNumber: (payload) => {
      console.log(payload);
      if (payload > 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    decrement() {
      this.$emit("decrement");
    },
    increment() {
      this.$emit("increment");
      // console.log('+++');
    },
    changeNumber() {
      //给父组件的函数传递参数
      this.$emit("changeNumber", Number(this.count));
    },
  },
};
</script>

<style>
</style>