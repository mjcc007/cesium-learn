import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/Home/index.vue"),
    children: [
      {
        path: "flight",
        name: "flight",
        component: () => import("@/pages/Flight/index.vue"),
      },
      {
        path: "building",
        name: "building",
        component: () => import("@/pages/Building/index.vue"),
      },
      {
        path: "entity",
        name: "entity",
        component: () => import("@/pages/Entity/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
