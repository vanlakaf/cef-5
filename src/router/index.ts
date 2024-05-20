import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home.page.vue";
import NotFoundPage from "../views/not-found.page.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export default router;
