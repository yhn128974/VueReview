import { computed, ref } from "vue";

export default () => {
  const counter = ref(0);
  const doubleCounter = computed(() => counter.value * 2);

  const increment = () => {
    counter.value += 1;
  };
  const decrement = () => {
    counter.value -= 1;
  };

  return { counter, doubleCounter, increment, decrement };
};
