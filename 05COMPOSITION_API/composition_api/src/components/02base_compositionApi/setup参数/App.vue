<template>
  <div>
    <h2>App</h2>
    <!-- setup参数 -->
    <hr />
    <Home :message="message" id="longyou" class="nameclass" @showMessage="showMessage">
    <h2>this a slot massge from app</h2>
    </Home>

    
    <hr />
    <Home />
  </div>
</template>

<script>
import Home from "./setup运用.vue";
export default {
  components: { Home },
  data() {
    return {
      message: "this message is from app",
    };
  },

  methods: {
    showMessage() {
      console.log("hello wrold");
    },
  },
};
</script>

<style>
</style>