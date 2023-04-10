<template>
    <div>
        Home:{{ $store.state.counter }}
        Home2:{{ Counter }}
        Home2:{{ name }}
        Home2:{{ age }}
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { computed } from "vue";
import { mapState, useStore } from "vuex";
export default {

    setup() {

        // let store = useStore()
        // const sCounter = computed(() => {
        //     return store.state.counter
        // })

        const storeSate = mapState(["counter", "name", "age"])
        const storeSate2 = {}

        // counter=>function,name=>function

        Object.keys(storeSate).forEach(fnkey => {
            const fn = storeSate[fnkey].bind({ $store: store })
            storeSate2[fnkey] = computed(fn)
        })

        return {
            // sCounter,
            ...storeSate2
        }
    },

}
</script>
<style></style>