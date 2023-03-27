<template>
  <div>Home</div>
  <slot></slot>
  {{ message }}
  {{ title }}
  <button @click="showMessage">click to show</button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    showMessage() {
      this.$emit("showMessage");
    },
  },

  data() {
    return {
      title: "the title is from independent data",
    };
  },
  setup(props, context) {
  
    let { attrs, slots, emit } = context;
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);

    const title = "the title is from setup"
    let number = 0;
    const imcreate = () => {
      return number++; 
    };
    return {
      title,
      imcreate
      
    };
  },
};
</script>

<style>
</style>