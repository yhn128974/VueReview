<template>
  <div>
    <Myslot>
      <h2>this is inject content</h2>
    </Myslot>
    <Myslot>
      <button>this is a button</button>
    </Myslot>
    <Myslot></Myslot>

    <NavBar :name="name">
      <!--指定具名插槽 -->
      <!-- 简写"v-slot:"==>"#" -->
      <template v-slot:left> <button>left</button></template>
      <template #center> <h2>center</h2></template>

      <template #right> <i>right</i></template>
      <template #[name]> <i>show name</i></template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Myslot from "./Myslot.vue";
export default {
  data() {
    return {
      name: "longyou",
    };
  },
  components: {
    Myslot,
    NavBar,
  },
};
</script>

<style>
</style>