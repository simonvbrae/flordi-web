import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FlordiView.vue"),
  },
  {
    path: "/vacancy/",
    name: "vacancy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VacancyView.vue"),
  },
  {
    path: "*",
    name: "catchAll",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FlordiView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
