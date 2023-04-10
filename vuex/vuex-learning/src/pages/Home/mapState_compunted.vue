<template>
    <div>
        Home:{{ $store.state.counter }}
        Home2:{{ scounter }}
        Home2:{{ sname }}
        Home2:{{ sage }}
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore, mapState } from 'vuex'

export default {
    setup() {

        return {

        }
    },
    computed: {
        // 遍历state,可在模板上简写表达式
        ...mapState(["counter", "name", "age"]),

        // 传入对象遍历state可改变声明
        ...mapState({
            scounter: state => state.counter,
            sname: state => state.name,
            sage: state => state.age,
        })
    }
}
</script>
<style></style>