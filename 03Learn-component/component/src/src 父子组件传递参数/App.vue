<template>
  <div id="tab-bar">
    <h2>{{ number }}</h2>

    <!-- 传递pros属性 -->
    <!-- <Hello title="123213" content="message324" message_info="message_info" />
    <Hello :title="title" />
    <Hello :title="message.title" :content="message.content" /> -->

    <!-- 传递非props属性 -->
    <!-- <ShowMessage class="box" id="abc" />
    <ShowMessage />

    <ShowMessage /> -->

    <Counteroperaton @increment="increment" @decrement="decrement" @changeNumber="changeNumber" />
  </div>
</template>

<script>
import Hello from "./components/parent-to-children-props";
import ShowMessage from "./components/parent-to-children-no-props";
import Counteroperaton from "./components/children-to-parent";
export default {
  components: {
    Hello,
    ShowMessage,
    Counteroperaton,
  },
  data() {
    return {
      title: 666,
      content: "I am Haha",
      message: {
        title: "opps~",
        content: "I am message Haha",
      },
      message_info: {
        name: "longoyu",
      },
      number: 0,
    };
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    },
    changeNumber(count) {
      this.number +=  count;
    },
  },
};
</script>

<style scoped>
h2 {
  color: rgb(238, 17, 17);
}
</style>