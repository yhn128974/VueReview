import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        redirect: "/home/message",
      },
      {
        path: "message",
        name: "message",
        component: () => import("../views/message.vue"),
      },
      {
        path: "shops",
        name: "shops",
        component: () => import("../views/shop.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //打包命名注释
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/longyou",
    name: "longyou",
    component: () =>
      import(/* webpackChunkName: "longyou" */ "../views/BigComponent.vue"),
    // 元数据
    meta: {
      name: "longyou",
      age: 20,
      height: 1.99,
    },
  },
  {
    path: "/user/:username/id/:userid/",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/GageNoFound.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 动态添加路由
const categoryRoute = {
  path: "/category",
  component: () => import("../views/Category.vue"),
};
router.addRoute(categoryRoute);

//添加二级路由对象
router.addRoute("home", {
  path: "moment",
  component: () => import("../views/HomeMoment.vue"),
});

// 导航守卫
let counter = 0;
router.beforeEach((to, from) => {
  console.log(`进行了${++counter}次路由跳转`);
  // 来自哪里
  // console.log(from);
  // 去到哪里
  // console.log(to);

  // if (to.path.indexOf("/home") !== -1) {
  //   return "./login";
  // }

  if (to.path !== "/login") {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return "./login";
    }
  }
});
export default router;
