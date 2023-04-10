<template>
    <div>
        <p>{{ $store.state.counter }}</p>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
        <p>{{ $store.state.danners }}</p>
    </div>
</template>
<script>
// <!-- vuex-action辅助函数 -->
import { mapActions, useStore } from 'vuex'
import { onMounted } from 'vue'

export default {
    // mounted() {
    //     this.$store.dispatch("getHomeMultidata")
    // },
    // methods: {
    //     // increment() {
    //     //     this.$store.dispatch('incrementAction')
    //     // },
    //     // decrement() {
    //     //     this.$store.dispatch('decrementAction')
    //     // }

    //     // ...mapActions(['incrementAction', 'decrementAction']),

    //     // ...mapActions({
    //     //     increment: "incrementAction",
    //     //     decrement:"decrementAction"
    //     // })
    // },

    setup() {
        let $store = useStore()
        onMounted(() => {
            $store.dispatch("getHomeMultidata")
        })
        let actions1 = mapActions(['incrementAction', 'decrementAction'])
        let actions2 = mapActions({
            increment: "incrementAction",
            decrement: "decrementAction"
        })
        return {
            ...actions1,
            ...actions2
        }
    }
}
</script>

<style></style>