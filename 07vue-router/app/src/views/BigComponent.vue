<template>
  <div>
    here is big components
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    let message = "longyou is here ";
    return { message };
  },
};
</script>

<style>
</style>