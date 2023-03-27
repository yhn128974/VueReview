import { ref, watch } from "vue";

export default (title = "default_title") => {
  const titleRef = ref(title);

  watch(
    titleRef,
    (newvalue) => {
      document.title = newvalue;
    },
    {
      immediate: true,
    }
  );
  document.title = title;

  return  titleRef ;
};
