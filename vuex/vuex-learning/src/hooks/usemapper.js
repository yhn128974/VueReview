import { computed } from "vue";
import { mapState, useStore } from "vuex";

export function useMappers(mapper, mapFn) {
  const store = useStore();
  // 获取到对应对象的function
  const storeStateFns = mapFn(mapper);

  // 对数据进行转换
  const storeState = {};
  Object.keys(storeStateFns).forEach((key) => {
    const fn = storeStateFns[key].bind({ $store: store });
    storeState[key] = computed(fn);
  });

  return storeState;
}
