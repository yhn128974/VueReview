import { createStore } from "vuex";
import { INCREMENT_N } from "./mutation-type";
import axios from "axios";
export default createStore({
  // 保存数据
  state: {
    counter: 0,
    name: "longyou",
    age: 20,
    books: [
      { bookname: "深入vue.js", price: 10, count: 3 },
      { bookname: "深入REACT.js", price: 20, count: 2 },
      { bookname: "深入typescript.js", price: 30, count: 7 },
    ],
    discount: 0.8,
    danners: [],
  },
  getters: {
    totalPrive(state, getters) {
      let totalPrive = 0;
      state.books.forEach((item) => {
        totalPrive += item.price * item.count;
      });
      return totalPrive * getters.currentDiscount.toFixed(2);
    },
    currentDiscount(state, getters) {
      return state.discount * 0.9;
    },
    totalPriveCountGreaterN(state, getters) {
      return (n) => {
        let totalbook = state.books.filter((item) => {
          return item.count > n;
        });
        let totalPrive = 0;
        totalbook.forEach((item) => {
          totalPrive += item.price * item.count;
        });
        return totalPrive * getters.currentDiscount.toFixed(2);
      };
    },
  },
  // 操作函数
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    [INCREMENT_N](state, payLoad) {
      state.counter += payLoad.n;
    },
    decrement(state) {
      state.counter -= 1;
    },
    addBannerData(state, payload) {
      state.danners.push(payload);
    },
  },

  actions: {
    // 异步行为
    incrementAction(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },

    decrementAction(context) {
      setTimeout(() => {
        context.commit("decrement");
      }, 1000);
    },
    getHomeMultidata(context) {
      axios
        .get("https://api.wrdan.com/hitokoto")
        .then((res) => {
          context.commit("addBannerData", res.data.text);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  modules: {},
});
