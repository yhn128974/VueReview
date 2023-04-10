// import { computed } from "vue";
// import { mapGetters, useStore } from "vuex";

// export function useGetters(mapper) {
//   const store = useStore();
//   // 获取到对应对象的function
//   const storeStateFns = mapGetters(mapper);

//   // 对数据进行转换
//   const storeState = {};
//   Object.keys(storeStateFns).forEach((key) => {
//     const fn = storeStateFns[key].bind({ $store: store });
//     storeState[key] = computed(fn);
//   });

//   return storeState;
// }

import { mapGetters } from "vuex";
import { useMappers } from "./usemapper";

export function useGetters(mapper) {
  return useMappers(mapper, mapGetters);
}


