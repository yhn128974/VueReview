import { customRef } from "vue";

// 自定义ref
export default function (value) {
  let timer = null;

  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newvalue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newvalue;
          trigger();
        }, 1000);
      },
    };
  });
}
