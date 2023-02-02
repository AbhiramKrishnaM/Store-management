import { createRouter, createWebHistory } from "vue-router";

// pages
import Landing from "@/views/Landing.vue";
import Login from "@/views/Login.vue";
import Products from "@/views/Products.vue";
import Orders from "@/views/Orders.vue";
import Analytics from "@/views/Analytics.vue";
import Events from "@/views/Events.vue";
import Settings from "@/views/Settings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active-link text-primary",
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders,
    },
    {
      path: "/analytics",
      name: "analytics",
      component: Analytics,
    },
    {
      path: "/events",
      name: "events",
      component: Events,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
