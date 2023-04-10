<template>
    <div>
        <!-- 总价值： {{ totalPrive }} -->
        总价值： {{ $store.getters.totalPrive }}
        有效价值： {{ $store.getters.totalPriveCountGreaterN(3) }}
        <br>
        总价值： {{ totalPrive }}
        有效价值： {{ totalPriveCountGreaterN(3) }}
        <br>
        <!-- 总价值： {{ stotalPrive }}
        有效价值： {{ stotalPriveCountGreaterN(3) }} -->
        <!-- 通过commit提交 mutations -->
        <button @click="$store.commit('increment')">+1</button>
        <button @click="incrementN">+n</button>
    </div>
</template>

<script>

import {
    useGetters,
} from '../../hooks/usegetters'

import { INCREMENT_N } from '../../store/mutation-type'

export default {
    // computed: {
    //     // totalPrive() {
    //     //     let totalPrive = 0
    //     //     this.$store.state.books.forEach(item => {
    //     //         totalPrive += item.price * item.count
    //     //     })
    //     //     return totalPrive
    //     // }
    //     // 使用mapGetters简写Getters
    //     // ...mapGetters(["totalPrive", "totalPriveCountGreaterN"])
    //     // 使用mapGetters简写Getters对象写法用于可重命名
    //     ...mapGetters({
    //         stotalPrive: 'totalPrive',
    //         stotalPriveCountGreaterN: 'totalPriveCountGreaterN'
    //     })
    // }


    methods: {
        // incrementN() {
        //     this.$store.commit('incrementN', { n: 10 })
        // },
        // 换一种提交风格
        incrementN() {
            this.$store.commit({
                type: INCREMENT_N,
                n: 10
            })
        }
    },
    // 组合式apI写法
    setup() {
        // const store = useStore()
        // const totalPrive = computed(() => {
        //     return store.getters.totalPrive
        // })

        // const totalPriveCountGreaterN = computed(() => {
        //     return store.getters.totalPriveCountGreaterN
        // })

        // 封装后使用
        let storeGetters = useGetters(['totalPrive', 'totalPriveCountGreaterN'])
        return {
            // totalPrive,
            // totalPriveCountGreaterN
            ...storeGetters
        }


    }



}
</script>

<style></style>