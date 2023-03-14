Vue.createApp({
  template: "#why",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "《深度学习》",
          date: "2003-4",
          price: 98.9,
          count: 1,
        },
        {
          id: 2,
          name: "《编程的艺术》",
          date: "2003-4",
          price: 58.9,
          count: 1,
        },
        {
          id: 3,
          name: "《编程大全》",
          date: "2002-4",
          price: 88.9,
          count: 1,
        },
        {
          id: 4,
          name: "《人工智能》",
          date: "2033-4",
          price: 18.9,
          count: 1,
        },
      ],
    };
  },
  // #是表示queryselect选择模式
  methods: {
    increment(id) {
      // console.log(id);
      this.books.forEach((book) => {
        if (book.id === id) {
          book.count = book.count + 1;
        }
      });
    },
    decrement(id) {
      this.books.forEach((book) => {
        if (book.id === id && book.count > 0) {
          book.count = book.count - 1;
        }
      });
    },
    remove(id) {
      const newbooks = this.books.filter((book) => {
        if (book.id !== id) {
          return true;
        }
      });

      this.books = newbooks;
    },
  },
  computed: {
    getaAllPrice() {
      let allprice = 0;
      this.books.forEach((book) => {
        allprice += book.price * book.count;
      });
      return allprice.toFixed(2);
    },
  },
}).mount("#app");
