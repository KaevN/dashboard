import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import component from "*.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Main",
    component: () => import("@/views/Main.vue")
  },
  {
    path: "/add-item",
    name: "NewCard",
    component: () => import("@/components/DashboardCardNew.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
