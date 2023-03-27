import { ref } from "vue";

export default () => {
  const mousex = ref(0);
  const mousey = ref(0);

  document.addEventListener("mousemove", (event) => {
    mousex.value = event.pageX;
    mousey.value = event.pageY;
  });

  return {
    mousex,
    mousey,
  };
};
