<template>
  <div>
    <button @click="isShown = !isShown">显示/隐藏</button>

    <transition name="longyou">
      <h2 v-if="isShown">Hello world</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
.longyou-enter-from,
.longyou-leave-to {
  opacity: 0;
}
.longyou-enter-to,
longyou-leave-from {
  opacity: 1;
}

.longyou-enter-active,
longyou-leave-active {
  transition: opacity 2s ease;
}
</style>