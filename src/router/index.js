import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/Index.vue"),
    meta: { title: "接口视图监控" },
  },
  {
    path: "/hostGraphics",
    name: "hostGraphics",
    component: () => import("@/views/Graphics.vue"),
    meta: { title: "接口视图监控" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
