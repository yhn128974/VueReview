<template>
  <div>
    App...
    <p>{{ message }}</p>
    <button @click="changemessage">changemessage</button>
    <hr>
    <p>{{ $store.state.counter }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr>
    <Home />
    <hr>
    <Home2 />
    <hr>
    <mapmutaions />
    <hr>
    <Action />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Home from './pages/Home/index.vue'
import Home2 from './pages/Home/Home2.vue'
import mapmutaions from './pages/Home/mapmutaions.vue'
import Action from './pages/Home/Action.vue'
export default {
  components: {
    Home,
    Home2,
    mapmutaions,
    Action
  },
  setup() {
    let $store = useStore()
    let message = ref('longyou')
    const changemessage = function () {
      message.value = 'ethanyu'
    }

    const increment = function () {
      $store.commit("increment")
    }

    const decrement = function () {
      $store.commit("decrement")
    }
    return {
      message,
      changemessage,
      increment,
      decrement
    }
  }
}
</script>

<style></style>