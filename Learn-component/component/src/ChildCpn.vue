<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot name='longyou' :item="item" :index="index"></slot>
      <slot  :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },

  created() {
    console.log(this.names);
  },
};
</script>

<style>
</style>