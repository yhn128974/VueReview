<template>
  <div>
    <h2>App</h2>
    <hr />
    <h2>{{ firstName }}{{ lastName }}</h2>
    <h2>{{ fullName }}</h2>
    <button @click="changename">change_name</button>
    <button @click="change_name">change_name</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const firstName = ref("kobe");
    const lastName = ref("Bryant");

    // computed返回的是一个ref对象
    // const fullName = computed(() => {
    //   return firstName.value + "" + lastName.value;
    // });

    const fullName = computed(() => {
      get: () => firstName.value + " " + lastName.value;

      set: (newValue) => {
        const names = newValue.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      };
    });

    const change_name = () => {
      fullName.value = "coder why";
    };

    function changename() {
      lastName.value = "longyou";
    }
    return {
      firstName,
      lastName,
      fullName,
      changename,
      change_name,
    };
  },
};
</script>

<style>
</style>