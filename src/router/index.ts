import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import Organisations from "@/views/Organisations.vue";
import Emojis from "@/views/Emojis.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
    },
    {
      path: "/organisations",
      name: "Organisations",
      component: Organisations,
    },
    {
      path: "/emojis",
      name: "Emojis",
      component: Emojis,
    },
  ],
});

export default router;
