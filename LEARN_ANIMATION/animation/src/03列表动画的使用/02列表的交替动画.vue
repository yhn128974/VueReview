<template>
  <div>
    <input type="text" v-model="keyword" />
    <transition-group
      tag="ul"
      name="longyou"
      :css="false"
      @enter="enter"
      @leave="leave"
      @before-enter="beforeEnter"
    >
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      names: [
        "abgc",
        "bsfsf",
        "cxcvz",
        "dwefdsF",
        "ezvzvv",
        "faxc",
        "gadad",
        "had",
        "dfsfdf",
        "jawdaava",
        "kfgjhkj",
      ],
      keyword: "",
    };
  },
  computed: {
    showNames() {
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1);
    },
  },
  methods: {
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        onComplete: done,
        delay: el.dataset.index * 0.5,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: "0",
        onComplete: done,
        delay: el.dataset.index * 0.5,
      });
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
  },
};
</script>

<style scoped>
/* .longyou-enter-from,
.longyou-leave-to {
  opacity: 0;
}
.longyou-enter-action,
.longyou-leave-action {
  transition: opacity 1s ease;
} */
</style>