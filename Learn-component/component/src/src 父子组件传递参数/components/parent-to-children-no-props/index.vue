<template>
  <div>
    <!-- 通过$attr获取常规属性 -->
    <h2 :class="$attrs.class">{{ message }}</h2>
    <h2 :id="$attrs.id">{{ message }}</h2>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {},
  data() {
    return {
      message: "this is showMessageInfo",
    };
  },
};
</script>

<style>
.box {
  color: orangered;
}
#abc {
  background-color: pink;
}
</style>