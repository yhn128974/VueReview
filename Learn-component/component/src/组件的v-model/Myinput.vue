<template>
  <div>
    <!-- <button @click="btnClick">按钮</button>
    <h2>Myinputmessage {{ modelValue }}</h2> -->

    <!--  -->
    <input type="text" :value="modelValue" @input="btnClick" />

    <input v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modeValue"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modeValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modeValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>