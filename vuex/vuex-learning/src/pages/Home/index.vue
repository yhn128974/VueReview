<template>
    <div>
        Home:{{ $store.state.counter }}|
        Home2:{{ counter }}|
        Home2:{{ name }}|
        Home2:{{ age }}|
        <br>
        Home2:{{ sCounter }}|
        Home2:{{ Sname }}|
    </div>
</template>

<script>
import { useState } from '../../hooks/useState'
export default {

    setup() {
        const storeState = useState(["counter", "name", "age"])
        const storeState2 = useState({
            sCounter: state => state.counter,
            Sname: state => state.name,
        })
        return {
            ...storeState2,
            ...storeState
        }

    },

}
</script>
<style></style>