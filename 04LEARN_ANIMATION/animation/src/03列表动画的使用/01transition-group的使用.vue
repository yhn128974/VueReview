<template>
  <div>
    <button @click="addNum">addNum</button>
    <button @click="removeNum">removeNum</button>
    <button @click="shuffleNum">shuffleNum</button>
    <transition-group tag="p" name="longyou">
      <span v-for="item in numbers" :key="item" class="item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },
  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style>
.item {
  margin-right: 10px;
  display: inline-block;
}
.longyou-enter-from,
.longyou-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.longyou-enter-active,
.longyou-leave-active {
  transition: all 1s ease;
}
.longyou-leave-active {
  position: absolute;
}
.longyou-move {
  transition: transform 1s ease;
}
</style>