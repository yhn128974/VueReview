<template>
  <div>
    <h2>{{ info3 }}</h2>
    <button @click="undateState">click to increment number</button>
  </div>
</template>

<script>
import { ref, reactive, readonly } from "vue";
export default {
  setup() {
    // 普通对象
    const info = { name: "longyou" };
    // readonly是一个proxy对象 ，这将创造一个只读属性
    const readonlyInfo = readonly(info);

    // 响应式对象reactive
    const info2 = reactive({
      name: "longyou",
    });
    const readonlyInfo2 = readonly(info2);

    // 响应式对象
    const info3 = ref("longyou");
    const readonlyInfo3 = readonly(info3);

    const undateState = () => {
      info3.value = "coderwhy";
    };
    return {
      undateState,
      info3,
      readonlyInfo3,
    };

    
  },
};
</script>