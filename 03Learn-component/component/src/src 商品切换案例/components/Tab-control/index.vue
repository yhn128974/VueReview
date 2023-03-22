<template>
  <div class="Tabheader">
    <div
      class="Tabheader-Item"
      :class="{ active: currentIndex === index }"
      v-for="(title, index) in titles"
      :key="title"
      @click="titleClick(index)"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  emits: ["changeindex"],
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;

      this.$emit("changeindex", index);
    },
  },
};
</script>

<style scoped>
.Tabheader {
  display: flex;
}
.Tabheader-Item {
  flex: 1;
  text-align: center;
}
.Tabheader-Item.active {
  border-bottom: 3px solid red;
  padding: 5px 10px;
}
</style>