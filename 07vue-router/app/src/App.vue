<template>
  <div>
    <nav>
      <!-- replace属性 -->
      <!-- router-link-active -->
      <!-- custom自定义 -->
      <!-- isActive -->
      <!--isExactActive  -->
      <router-link to="/home" active-class="longyou-active" v-slot="props" custom>
        <button>{{ props.href }}</button>
        <button @click="props.navigate">哈哈哈</button>
        <span :class="{ 'active': props.isActive }">{{ props.isActive }}</span>
        <span>{{ props.isExactActive }}</span>
        <!-- <p>{{ props.route }}</p>  --> </router-link>|
      <router-link to="/about" active-class="longyou-active">About</router-link>|
      <router-link to="/longyou" active-class="longyou-active">longyou</router-link>|
      <router-link :to="'/user/' + name + '/id/' + id">user</router-link>|
      <router-link to="/category">category</router-link>
    </nav>

    <!-- 编程路由导航 -->
    <button @click="gotoabout">gotoabout</button>
    <button @click="forWardStep">forWardStep</button>

    <transition>

    </transition>

    <router-view v-slot="props">
      <transition name="longyou">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>

  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NavBar } from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    let name = ref("longyou");
    let id = ref(0);

    function gotoabout() {
      // push
      router.push({
        path: "/about",
        query: {
          name: "longyou",
          age: 18,
        },
      });
      // replace
      // router.replace("/about");
    }

    function forWardStep() {
      // router.go(-1);
      router.forward();
      // router.back()
    }

    return {
      name,
      id,
      gotoabout,
      forWardStep,
    };
  },
  // // opotions
  // methods: {
  //  gotoabout() {
  //    this.$router.push("/about");
  //     // console.log("here was be clicked");
  //   }
  // }
};
</script>
<style>
/*  router-link-active*/
/* .router-link-active {
  color: red;
} */

.longyou-active {
  color: red;
}

.active {
  color: red;
}

.longyou-enter-from,
longyou-leave-to {
  opacity: 0;
}

.longyou-enter-active,
longyou-leave-active {
  transition: opacity 1s ease;
}
</style>
