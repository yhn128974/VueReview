<template>
  <div id="tab-bar">
    <Header />
    <hr />
    <Main />
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>