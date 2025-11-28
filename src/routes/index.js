import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { defineAsyncComponent } from "vue";
import HomeView from "@/views/home/index.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    {
      path: "/cesium",
      component: defineAsyncComponent(() => import("@/views/cesium/index.vue")),
    },
    {
      path: "/shadcn",
      component: defineAsyncComponent(() => import("@/views/shadcn/index.vue")),
    },
    {
      path: "/dnd",
      component: defineAsyncComponent(
        () => import("@/views/dnd/SmoothDnd.vue"),
      ),
    },
  ],
});

export default router;
