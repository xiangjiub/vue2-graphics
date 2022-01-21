import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: "/index", name: "index", component: () => import("@/views/Index.vue") },
  { path: "/hostGraphics", name: "hostGraphics", component: () => import("@/views/Graphics.vue") },

];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
