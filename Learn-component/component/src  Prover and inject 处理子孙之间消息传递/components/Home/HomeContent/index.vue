<template>
  <div>
    <p>home content name:{{ name }},age:{{ age }},length:{{ length }}</p>
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "length"],
};
</script>

<style>
</style>