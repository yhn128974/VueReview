<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      show {{ item }}
    </button>

    <!-- 动态组件 -->
    <KeepAlive >
      <template v-if="currentTab === 'home'">
        <Home />
      </template>
      <template v-else-if="currentTab === 'about'">
        <About />
      </template>
      <template v-else>
        <Category />
      </template>
    </KeepAlive>

    <!-- <template v-if="currentTab === 'home'">
      <Home />
    </template>
    <template v-else-if="currentTab === 'about'">
      <About />
    </template>
    <template v-else>
      <Category />
    </template> -->
  </div>
</template>

<script>
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";

export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ["home", "about", "actegory"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>