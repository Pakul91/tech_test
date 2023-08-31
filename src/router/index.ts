import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/users",
      name: "Users",
      component: () => import("@/views/Users.vue"),
    },
    {
      path: "/organisations",
      name: "Organisations",
      component: () => import("@/views/Organisations.vue"),
    },
    {
      path: "/emojis",
      name: "Emojis",
      component: () => import("@/views/Emojis.vue"),
    },
  ],
});

export default router;
