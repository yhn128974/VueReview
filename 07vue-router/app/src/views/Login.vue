<template>
    <div>

        <label>
            <input type="text">
        </label>
        <label text="password">
            <input type="password" name="" id="">
        </label>
        <button @click="btnclick">Login</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    setup() {
        let router = useRouter()
        function btnclick() {
            window.localStorage.setItem("token", "longyou")
            router.push({
                path: "/home"
            })

        }
        return {
            btnclick
        }
    }
}
</script>

<style></style>