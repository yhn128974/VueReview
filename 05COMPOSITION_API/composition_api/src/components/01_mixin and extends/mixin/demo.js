export default {
  data() {
    return {
      message: "hello DemoMixin",
    };
  },
  methods: {
    foo() {
      console.log("demo mixin foo");
    },
  },
  created() {
    console.log("执行了demo mixin created");
  },
};
