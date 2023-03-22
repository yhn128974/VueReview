<template>
  <div>
    <p>Home</p>
    <HomeContent/>
  </div>
</template>

<script>
import HomeContent from "./HomeContent";
export default {
  components: {
    HomeContent,
  },
  providers: {
    address:"重庆"
  }
};
</script>

<style>
</style>